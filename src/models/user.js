
const validator=require('validator');
const bcrypt=require('bcrypt')
const mongoose=require('mongoose');




const userSchema=new mongoose.Schema(
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
                            throw new Error('Your Password is Invalid as it constains substring password');
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

// doing some task on schema before saving it
    userSchema.pre('save' ,async function(next)
    {       // used function instead arrow function because
        // arrow functions don’t bind the this keyword as the function expression does. 
        //So basically, when you try to use arrow functions as an argument of Schema.method(),
        // you’ll get undefined each time you reference a definition value from your Schema.
       
        const currentUser=this;
        if(currentUser.isModified('password'))
        {
            
         
        currentUser.password=await bcrypt.hash(currentUser.password,8);
          
        }

       
        next();
    })


const User=mongoose.model('User',userSchema)


module.exports=User;