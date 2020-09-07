// CRUD OPERATIONS IN MONGODB

// command ->"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath=D:\MongoDB_Data
const mongodb=require('mongodb');
const chalk=require('chalk');
const MongoClient=mongodb.MongoClient;
// MongoClient provides necessary function to connect to the databse 

const connectionUrl='mongodb://127.0.0.1:27017';
// locathost=127.0.0.1 ,we are using 127.0.0.1 in place of localhost beacuse it make application faster
// or to avoid failure issue

const databaseName='taskManagerDatabse';

MongoClient.connect(connectionUrl,{useNewUrlParser: true, useUnifiedTopology: true},(error,client)=>
{

    if(error)
    {
        console.log(chalk.red('Unable to connect To Database'));
        return ;
    }


    console.log(chalk.green('--Connected Sucessfully--'));

    const db=client.db(databaseName);

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

    db.collection('users').insertMany(
        [

        {
            name:'Sudhir Pal',
            age:'22'
        },
        {
            name:'Sushil Pal',
            age:'14'
        }
,
        {
            name:'Sonam Pal',
            age:'16'
        }
        ,
        {
            name:'Nandlal Pal',
            age:'55'
        }
    ]
        ,(error,result)=>
        {
            if(error)
            {
                console.log(chalk.red('Unable Insert This User In The Database'));
                return;
            }

            console.log(result.ops);


        }
    )

});
