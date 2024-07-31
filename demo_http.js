const express = require('express')
const app = express()

app.get('/hello', function(req, res)
{
    var q = req.query
    res.send("Name:" + q.name + "<br/>Login Date:"+q.month+ " " + q.date + ", " + q.year)
})

app.listen(9999,function()
{
    console.log("Server is running on PORT 9999")
})