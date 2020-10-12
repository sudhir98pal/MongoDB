const express = require('express')
console.log("sudhir");
require('./db/mongoose')
// it is required so that we can connect to database
// as connection to db is done in mongoose.js


const User = require('./models/User')
const Task = require('./models/task');
const { findById } = require('./models/User');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
// it allows to use incoming req in json
app.listen(port, () => {
    console.log('Server is on Port number ' + port)
})

// NOTE async function always return promise instead of undefined
app.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(201).send(newUser)
    }
    catch (e) {
        res.status(400).send(e);
    }




    // newUser.save().then(() => 
    // {
    //     // status 201 => created
    //     res.send(newUser);
    //     // user is a varible you change its name to other like result 

    // }).catch((error) => {
    //     res.status(400)
    //     // staus need to be called before send ,so that status can be set properly.
    //     res.send(error.message)
    // })


})
app.post('/tasks', async (req, res) => {

    const newTask = new Task(req.body);
    try {
        await newTask.save();
        res.status(201).send()
    }
    catch (e) {
        res.status(400).send(e);

    }
    // newTask.save().then(() => {  // status 201 => created
    //     res.status(201).send(newTask);
    //     // user is a varible you change its name to other like result 

    // }).catch((error) => {
    //     res.status(400)
    //     // staus need to be called before send ,so that status can be set properly.
    //     res.send(error.message)
    // })


})

app.get('/users', async (req, res) => {

    try
    {
       const users=await User.find({});
        res.status(201).send(users);
    }
    catch(e)
    {

        res.status(500).send(e);
    }

    //    const user=User.find({}).then((users) => {
    //         res.send(users);
    //     }).catch
    //         ((error) => {
    //             res.status(500).send(error);
    //         })

})

app.get('/users/:id', async (req, res) => 
{
    const IdToBeSearched = req.params.id;
    try{
        const user=await User.findById(IdToBeSearched);
        if (!user) {
          return res.status(404).send()
            }
        res.status(201).send(user);
    }
    catch(e)
    {
        return res.status(400).send(e)
    }
    

    // User.findById(IdToBeSearched).then((user) => {

    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
})




app.get('/tasks', async (req, res) => 
{
    try{
        const task=await Task.find({});
        res.status(201).send(task);
    }
    catch(e)
    {
        res.status(500).send(e);
    }
   

})


app.get('/tasks/:id',async (req, res) => 
{
    const IdToBeSearched = req.params.id;
try
{
    const task=await Task.findById(IdToBeSearched);
    if (!task) 
    {
               return res.status(404).send()
    }
    res.send(task)

}
catch(e)
{
    res.status(500).send(error);
}

    // Task.findById(IdToBeSearched).then((task) => 
    // {

    //     if (!task) {
    //         return res.status(404).send()
    //     }

    //     res.send(task)
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
})