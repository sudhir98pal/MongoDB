
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

const myself=new User({name:"Sudhir Pal",age:"miki"});
myself.save().then((myself)=>
{
    console.log(myself);
    // myself is a varible you change its name to other like result 

}).catch((error)=>
{
console.log('Error '+error);
})