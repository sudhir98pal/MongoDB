
const chalk=require('chalk');
const validator=require('validator');

console.log(chalk.cyanBright.bold('-------Mongoose-----'));

const mongoose=require('mongoose');
const databaseName = 'taskManagerDatabseApi';
// the name is different than mongodb database
const connectionUrl = 'mongodb://127.0.0.1:27017';
mongoose.connect(
    connectionUrl+'/'+databaseName,
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true// due to current Server Discovery and Monitoring engine is deprecated
}

)


const task=mongoose.model(
    'task',
            {
                description:
                {
                    type:String,
                    trim:true,
                    required:true
                },
                completed:
                {
                     type:Boolean,
                     default:false
                        

                },
               
            }

)
const mytask=new task({
    description:' Breakfast  ',
    completed:true
})
// mytask.save().then((result)=>
// {
// console.log(chalk.green('task saved successfully'));

// }).catch((error)=>
// {
//     console.log('Unable to save this task');
//     console.log(chalk.red('Error'+error));
  
// })



