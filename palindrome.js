const prompt=require('prompt-sync')()
const string=prompt('Enter the string:')
const stringsplt = string.split('');
const stringrev = stringsplt.reverse();
const stringjoin = stringrev.join('');
if(stringjoin==string)
{
    console.log('palindrome');
}
else
{
    console.log('not a palindrome');
}