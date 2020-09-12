const doWorkPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // you can call only one function either reject or resolve.
        // if both called first will get executed. 
        reject('reject from promise');
        resolve([1,2,3,4]);

    })
})


doWorkPromise.then((result)=>
{
    console.log('Sucess!');
    console.log(result);
}).catch((reject)=>
{
    console.log(reject);
})