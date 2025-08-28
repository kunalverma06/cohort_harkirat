const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    // console.log(req.headers);
    
    res.send(
        "<b> world</b>"
    );
});
app.listen(5000);