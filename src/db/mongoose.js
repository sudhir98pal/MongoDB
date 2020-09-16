
const chalk=require('chalk');

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

const User=mongoose.model('User',
{
    name:
    {
type:String
    },age:
    {
type:Number
    }
})

const task=mongoose.model(
    'task',
            {
                name:
                {
                     type:String

                },
                description:
                {
                    type:String
                }
            }

)
const mytask=new task({name:"coding",description:'this is the main task to be done during interview preparation for college palcements'})
mytask.save().then((result)=>
{
console.log(chalk.green('task saved successfully'));

}).catch((error)=>
{
    console.log('Unable to save this task');
    console.log(chalk.red('Error'+error));
  
})

// const myself=new User({name:"Sudhir Pal",age:"miki"});
// myself.save().then((myself)=>
// {
//     console.log(myself);
//     // myself is a varible you change its name to other like result 

// }).catch((error)=>
// {
// console.log('Error '+error);
// })

