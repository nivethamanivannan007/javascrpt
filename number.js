const prompt=require('prompt-sync')()
let n=prompt('Enter the value of n:')
let sum=1
for( let i=0;i<=n;i++)
{
    sum=sum+i
}

console.log(sum);
