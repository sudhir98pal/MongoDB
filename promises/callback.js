const doworkcallback=(callbackvariable)=>
{
    setTimeout(()=>
    {
callbackvariable(undefined,['sudhir','sushil','sonam']);
    },2000)
}

doworkcallback((error,result)=>
{
if(error)
{
    return console.log(error);
}

console.log(result);
}
)