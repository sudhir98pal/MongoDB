const express = require('express')
require('./db/mongoose')
// it is required so that we can connect to database
// as connection to db is done in mongoose.js


const User=require('./models/User')
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
        res.send(newUser);
        // user is a varible you change its name to other like result 

    }).catch((error) => {
        res.status(400)
        // staus need to be called before send ,so that status can be set properly.
        res.send(error.message)
    })


})