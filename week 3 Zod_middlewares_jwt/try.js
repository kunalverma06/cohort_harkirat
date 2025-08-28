const express= require("express");
const jwt= require("jsonwebtoken");
const app= express();
const pass="123456";

app.use(express.json());

alluser=[
    {
        "username":"kunalvermaak",
        "password":123456},

    {
        "username":"heeralshah",
        "password":1234}

    ]

function checkuser(username,password){
    let check=false
    for(let i=0 ; i<alluser.length;i++){
        if(alluser[i].username==username && alluser[i].password==password){
            check=true
    }
}
    return check;

}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    

    if (!checkuser(username,password)){
        res.status(400).send("Invalid username or password");
    }
    var token=jwt.sign({ username : username} ,pass);
    return res.json({
        token,
    });
    
});

app.listen(3000);