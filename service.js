const fs=require('node:fs/promises')
// const readfile= fs.readFileSync("./nivetha.txt","utf-8")
//  console.log(readfile)

// const update=fs.writeFileSync("./nivetha.txt","hi i am nivetha manivannan")

// const deletefile=fs.unlinkSync("./nivetha.txt")

// const renamefile=fs.renameSync("./nivetha.txt","vijay.txt")
// console.log("first")
// fs.readFile("./vijay.txt","utf-8",(error,data)=>
// {
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })
// const readfile= fs.readFileSync("./vijay.txt","utf-8")
// console.log(readfile)
console.log("last")
const readfile=async ()=>
{
    const readfile=await fs.readFile("./vijay.txt","utf-8").then((data)=>
    {
        console.log(data)
    }).catch((error)=>
    {
        console.log(error)
    })
}
readfile()
console.log("first")