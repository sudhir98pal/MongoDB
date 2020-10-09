const express = require('express')
require('./db/mongoose')
// it is required so that we can connect to database
// as connection to db is done in mongoose.js


const User = require('./models/User')
const Task = require('./models/task')
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
// it allows to use incoming req in json
app.listen(port, () => {
    console.log('Server is on Port number ' + port)
})

app.post('/users', (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then(() => {
        // status 201 => created
        res.send(newUser);
        // user is a varible you change its name to other like result 

    }).catch((error) => {
        res.status(201).status(400)
        // staus need to be called before send ,so that status can be set properly.
        res.send(error.message)
    })


})
app.post('/tasks', (req, res) => {
    const newTask = new Task(req.body);
    newTask.save().then(() => {  // status 201 => created
        res.status(201).send(newTask);
        // user is a varible you change its name to other like result 

    }).catch((error) => {
        res.status(400)
        // staus need to be called before send ,so that status can be set properly.
        res.send(error.message)
    })


})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch
        ((error) => {
            res.status(500).send(error);
        })

})

app.get('/users/:id', (req, res) => {
    const IdToBeSearched = req.params.id;
    User.findById(IdToBeSearched).then((user) => {

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((error) => {
        res.status(500).send(error);
    })
})




app.get('/tasks', (req, res) => 
{
    Task.find({}).then((tasks) => 
    {
        res.send(tasks);
    }).catch
        ((error) => 
        {
            res.status(500).send(error);
        })

})


app.get('/tasks/:id', (req, res) => {
    const IdToBeSearched = req.params.id;
Task.findById(IdToBeSearched).then((task) => {

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    }).catch((error) => {
        res.status(500).send(error);
    })
})