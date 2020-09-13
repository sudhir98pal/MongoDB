// CRUD OPERATIONS IN MONGODB
// In mongoDB every id of database is unique globally

// command ->"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath=D:\MongoDB_Data

//**************************************************/
//const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;
// // MongoClient provides necessary function to connect to the databse 
//const ObjectID=mongodb.ObjectID;
//***************************************************/

// the above two objects can destructured as below
const { MongoClient, ObjectID } = require('mongodb');

const chalk = require('chalk');
const connectionUrl = 'mongodb://127.0.0.1:27017';
// locathost=127.0.0.1 ,we are using 127.0.0.1 in place of localhost beacuse it make application faster
// or to avoid failure issue

const databaseName = 'taskManagerDatabse';

const id = new ObjectID();
// Our Own Id to be Used
// id.id give binary buffer of id

//console.log(id);
//console.log(id.getTimestamp());


MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {

    if (error) {
        console.log(chalk.red('Unable to connect To Database'));
        return;
    }


    console.log(chalk.green('--Connected Sucessfully--'));

    const db = client.db(databaseName);

    //-----------CREATE----------------
    // db.collection('users').insertOne(
    //     {
    //         name:'Sudhir Pal',
    //         age:'22'
    //     },(error,result)=>
    //     {
    //         if(error)
    //         {
    //             console.log(chalk.red('Unable Insert This User In The Database'));
    //             return;
    //         }

    //         console.log(result.ops);


    //     }
    // )

    //     db.collection('users').insertMany(
    //         [

    //         {
    //             name:'Sudhir Pal',
    //             age:'22'
    //         },
    //         {
    //             name:'Sushil Pal',
    //             age:'14'
    //         }
    // ,
    //         {
    //             name:'Sonam Pal',
    //             age:'16'
    //         }
    //         ,
    //         {
    //             name:'Nandlal Pal',
    //             age:'55'
    //         }
    //     ]
    //         ,(error,result)=>
    //         {
    //             if(error)
    //             {
    //                 console.log(chalk.red('Unable Insert This User In The Database'));
    //                 return;
    //             }

    //             console.log(result.ops);


    //         }
    //     )

    // -------READ-------

//     db.collection('users').find({name:'Sudhir Pal'}).toArray(
//          (error, result) => 
//          {
        
//         if (error) {
//             console.log('Unable to search int database');
//             return;
//         }

//         if(!result)
//         {
// console.log('No such Person is in the database');
//             return;
//         }
        
//         console.log(result);


//     })



// UPDATE

// db.collection('users').updateOne
// (
  
//     {
//         _id:new ObjectID("5f5690214c84ab287cccaa19")
//     },
//     {
//         $inc:
//         {
           
//                        age:11
                       
//         }
//     }
// ).then((result)=>
// {
//    console.log(result);
// }).catch((error)=>
// {

//     return console.log('there is an error')
// console.log(error);
// })



// db.collection('users').updateMany
// (
//     {
//             name : "Sudhir Pal"

//     },
//     {
//         $set:
//         {
           
//                        age:"22"
                       
//         }
//     },

// ).then((result)=>
// {
//     console.log(result.modifiedCount);
// }).catch((error)=>
// {
//     console.log(error)
// })


//DELETE

// db.collection('users').deleteMany(
//     {
//         age: "14"
//     }
// ).then((result)=>
// {
//     console.log(result.deletedCount);
// }).catch((error)=>
// {
//     console.log('Unable to delete')
// })


db.collection('fruits').deleteOne(
    {
       
        _id :new ObjectID("5f5737cb4d8fb8046c51d368")
       
    }

).then((result)=>
{
    console.log(result.deletedCount);
})
.catch((error)=>
{
console.log(error);
})

 }
 );



