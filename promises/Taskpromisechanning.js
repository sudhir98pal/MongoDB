require('../src/db/mongoose')
const Task= require('../src/models/task')
const id='5f7df1179bccb828404d21f7'



Task.findByIdAndRemove(id).then(
    (task)=>
    {
console.log(task)
return Task.countDocuments({completed:true})
    }
).then((completedTasks)=>
{
console.log(completedTasks);

})