const add=(a,b)=>
{
    return new Promise((resolve,reject)=>
    {
setTimeout
(
    ()=>
    {
        if(a<0||b<0)
        {
            reject('Both Numbers must be postive');
        }
        resolve(a+b)
    }
,1000
    )
})

}

const coding=async()=>
{
    const sum=await add(1,2);
    const sum2=await add(sum,2);
    const sum3=await add(sum2,-3);
    return sum3;
}

coding().then((result)=>
{
console.log(result);
}).catch((error)=>
{
    console.log(error)
})