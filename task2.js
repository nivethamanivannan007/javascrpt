const prompt=require('prompt-sync')();
console.log("Choose the option");
console.log("1.Addition,2.subraction,3.multiplication,4.division");
const option=prompt("enter the option:");
const x=parseInt(prompt("Enter the value x:"));
const y=parseInt(prompt("Enter the value y:"));
if(option==1)
{
    const z=x+y;
    console.log(z);
}
else if(option==2)
{
    const a=x-y;
    console.log(a);
}
else if(option==3)
{
    const b=x*y;
    console.log(b);
}
else if (option==4)
{
    const c=x/y;
    console.log(c);
}
else
{
    console.log('choose correct option');
}

