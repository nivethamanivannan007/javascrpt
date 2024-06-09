let date= new Date();
let datestr=date.toISOString();
let d=datestr.slice(0,10);
console.log(d.slice(0,4)+d.slice(5,7)+d.slice(8,10));