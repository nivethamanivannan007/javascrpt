const prompt=require('prompt-sync')();
console.log("1.leap year,2.Not leap year");  
const year=prompt("Enter the year:");
if(year%4==0)
{
  console.log('leap year :'+year);
}
else
{
  console.log ('Not leap year :'+year);
}


