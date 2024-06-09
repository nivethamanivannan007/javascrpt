const arr =[11,12,13,14,15,16,17,18,19,20]
const even=[]
const odd=[]
const len=arr.length;
for(i=0;i<len;i++)
{
    if(arr[i]%2==0)
    {
       even.push(arr[i]);
    }
    else
    {
       odd.push(arr[i]);
    }

}
console.log("The given array :" +arr);
console.log("Enter the even arr:" +even);
console.log("Enter the odd arr :"+odd);

