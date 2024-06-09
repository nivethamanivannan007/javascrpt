const prompt=require('prompt-sync')()
const a =parseInt(prompt(' Enter the number a:'));
const b =parseInt(prompt(' Enter the number b:'));
if(a>b)
{
    console.log('a is a grater')
}
else
{
    console.log('b is a greater')
}