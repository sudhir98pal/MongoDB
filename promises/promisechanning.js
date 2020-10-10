require('../src/db/mongoose')
const User = require('../src/models/User')
const id='5f7de6e1391ea50fec116205'

// User.findByIdAndUpdate('5f7de6e1391ea50fec116205', { age: 1 }).then(
//     (user) => {
//         console.log(user)
//         return User.countDocuments({ age: 22 })
//     }
// ).then((countresult) => {
//     console.log(countresult);
// }).catch((error) => {
//     console.log(error);
// })


const updateAgeAndCount=async(id ,age)=>
{
const user=await User.findByIdAndUpdate(id,{age:age});
const count=await User.countDocuments({age:age});
return count;
}

updateAgeAndCount(id,23).then((count)=>
{
console.log(count);
}).catch((e)=>
{
    console.log(e);

})