
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

const User=mongoose.model('User',
{


    name:
    {
type:String,
required:true,
trim:true,// it is used to trim the trailing space from the end of the string
validate(name)
{
    if(name.length<=1)
    {
        throw new Error('Please provide valide name')
    }
}
    }
    
    
    ,age:
    {
type:Number,
required:true,
// if required is true ,then file entering value ,if not provide you will see error
validate(age)
{
if(age<=0)
{
    throw new Error('Please provide valide age')
}
}
    },


    email:
    {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(email)
        {
            if(!validator.isEmail(email))
            {
throw new Error('Please Provide Valid Email Addresh');

            }
        }
    },




    password:
    {
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            validate(pass)
            {
                if(pass.includes("password"))
                {
                        throw new Error('Your Password is Invalid it contains key Password itself');
                }
                else{


                    if(pass.length<=6)
                    {
                        throw new Error('Your Password is to too short Please Enter the Password of size greater than equal to 6')
                    }
                }


            }




    }

})

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
mytask.save().then((result)=>
{
console.log(chalk.green('task saved successfully'));

}).catch((error)=>
{
    console.log('Unable to save this task');
    console.log(chalk.red('Error'+error));
  
})

// const newuser=new User({name:'Saadhu',age:56,email:'mysadhuhu@gmail.com',password:'youcannottfindmypass   '});
// newuser.save().then((myself)=>
// {
//     console.log(myself);
//     // myself is a varible you change its name to other like result 

// }).catch((error)=>
// {
// console.log('Error '+error);
// })

