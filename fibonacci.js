const prompt=require('prompt-sync')();
const n = parseInt(prompt('Enter the value: '));
let n1=0;n2=1;temp=0;i=1;
for( let i=1;i<=n;i++){
    console.log(+n1);
    temp = i;
    temp = n1+n2;
    n1 = n2;
    n2 = temp;
}





