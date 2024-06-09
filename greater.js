const prompt=require('prompt-sync')();
const x = parseInt(prompt("Enter first number: "));
const y = parseInt(prompt("Enter second number: "));
const z = parseInt(prompt("Enter third number: "));
if(x>=y && y>=z)
{
 console.log('x is a greater:'+x);
}
else if(y>=z && y>=x)
{
 console.log('y is a greater:'+y);
}
else
{
 console.log('z is a greater:'+z);
}

