
const validator=require('validator');

const mongoose=require('mongoose');

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


module.exports=User;