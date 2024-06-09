const express= require('express');
const app=express();

app.get("/healthcheckup", (req,res)=>{
    const kidneyid=req.query.kidneyid;
    const username=req.headers.user;
    const password=req.headers.password;


    if((username!="kunal" && password!="123456")){
        res.status(400).json({
            msg: "Wrong outputs are entered;"
        })
        return
    }
    if(!(kidneyid==1 || kidneyid==2)){
        res.status(400).json({
            msg: " outputs are wrong ;"
        })
        return
    }   

    

    res.json({
        msg : "your kidney is in good health"
    })
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// now this above written code is not a efficient way to check username password 
//authntication and more prechecks as if we will write more than one route so we will 
//have to write the code again and again 

// so we can use function and check if (fxcall == true) but it will be still not 
//a efficient way of doing things

// so we use middlewares 