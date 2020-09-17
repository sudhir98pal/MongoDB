
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
type:String,
require:true,
validate(name)
{
    if(name.length<=1)
    {
        throw new Error('Please provide valide name')
    }
}
    },age:
    {
type:Number,
require:true,
// if require is true ,then file entering value ,if not provide you will see error
validate(age)
{
if(age<=0)
{
    throw new Error('Please provide valide age')
}
}
    }
})

// const task=mongoose.model(
//     'task',
//             {
//                 name:
//                 {
//                      type:String

//                 },
//                 description:
//                 {
//                     type:String
//                 }
//             }

// )
// const mytask=new task({name:"coding",description:'this is the main task to be done during interview preparation for college palcements'})
// mytask.save().then((result)=>
// {
// console.log(chalk.green('task saved successfully'));

// }).catch((error)=>
// {
//     console.log('Unable to save this task');
//     console.log(chalk.red('Error'+error));
  
// })

const newuser=new User({name:'Nandlal pal',age:56});
newuser.save().then((myself)=>
{
    console.log(myself);
    // myself is a varible you change its name to other like result 

}).catch((error)=>
{
console.log('Error '+error);
})

