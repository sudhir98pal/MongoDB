require('../src/db/mongoose')
const Task= require('../src/models/task')
const id='5f7df55a9bccb828404d21f9'



// Task.findByIdAndRemove(id).then(
//     (task)=>
//     {
// console.log(task)
// return Task.countDocuments({completed:true})
//     }
// ).then((completedTasks)=>
// {
// console.log(completedTasks);

// })

const deleteTaskAndCountIncompletedTask=async (id)=>
{
   // const task=await Task.findByIdAndDelete(id);
    const IncompltededTask=await Task.countDocuments({completed:true});
    return IncompltededTask;
}

deleteTaskAndCountIncompletedTask(id).then((IncompltededTask)=>
{
console.log(IncompltededTask);
})
.catch((error)=>
{
console.log(error)
})