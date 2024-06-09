const app = require('express')()
require('./date')
const port = 2010
app.listen (port,()=>
{
    console.log(`server listen on : ${port}`)
})