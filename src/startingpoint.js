const express = require('express')
const chalk = require('chalk');
console.log(chalk.cyanBright.underline("---Sudhir Pal ----"));
require('./db/mongoose')
// it is required so that we can connect to database
// as connection to db is done in mongoose.js
/* **********NOTE****************
        create - POST
        read - GET
        update - PATCH/PUT
        delete - DELETE
*/


const User = require('./models/User')
const Task = require('./models/task');
const { findById, update } = require('./models/User');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
// it allows to use incoming req in json

app.listen(port, () => {
    console.log(chalk.greenBright('Server is on Port number ' + port))
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



})

app.get('/users', async (req, res) => {

    try {
        const users = await User.find({});
        res.status(201).send(users);
    }
    catch (e) {

        res.status(500).send(e);
    }


})

app.get('/users/:id', async (req, res) => {
    const IdToBeSearched = req.params.id;
    try {
        const user = await User.findById(IdToBeSearched);
        if (!user) {
            return res.status(404).send()
        }
        res.status(201).send(user);
    }
    catch (e) {
        return res.status(400).send(e)
    }


})




app.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(201).send(task);
    }
    catch (e) {
        res.status(500).send(e);
    }


})


app.get('/tasks/:id', async (req, res) => {
    const IdToBeSearched = req.params.id;
    try {
        const task = await Task.findById(IdToBeSearched);
        if (!task) {
            res.status(404).send()
        }
        res.send(task)

    }
    catch (e) {
        res.status(500).send(e);
    }

})



app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpadtes = ['name', 'age', 'email', 'password'];
    const isValidOperationForUpdate = updates.every((update) => allowedUpadtes.includes(update));

    try {
        const user = await User.findById(req.params.id);
        // not using findByIdAndUpdate becuse we first nees to access user model where user model hash the 
        // password first then save

        updates.forEach((update) => {
            user[update] = req.body[update]

        })

        await user.save();


        //const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        // {new:true} is used to return updated data instead of old data which is to be updated
        if (!user) // no user with id were present
        {

            return res.status(404).send("No such User Exists");
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e);
    }
})

app.patch('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        // {new:true} is used to return updated data instead of old data which is to be updated
        if (!task) // no Task with id were present
        {

            return res.status(404).send("No Such Task Exists");
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e);
    }
})