const prompt=require('prompt-sync')();
const number=parseInt(prompt('enter the number:'));
if(number>0)
{
    console.log('enter the number +ve');
}
else if(number<0)
{
    console.log('enter the number -ve');
}
else{
    console.log('enter the number 0');
}