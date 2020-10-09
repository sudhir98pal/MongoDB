require('../src/db/mongoose')
const User = require('../src/models/User')
const id='5f7de6e1391ea50fec116205'

User.findByIdAndUpdate('5f7de6e1391ea50fec116205', { age: 1 }).then(
    (user) => {
        console.log(user)
        return User.countDocuments({ age: 22 })
    }
).then((countresult) => {
    console.log(countresult);
}).catch((error) => {
    console.log(error);
})

