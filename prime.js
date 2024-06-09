const prompt=require('prompt-sync')()
const n=parseInt(prompt('Enter the number:'))

if(n<=1)
{
    console.log('the number is  either prime or composite')
}

for(let i=2;i<=n;i++)
{
if(n%i==0)
{
    console.log('Not prime')
    break;
}
else{
   console.log('prime')
   break;
    
}

}