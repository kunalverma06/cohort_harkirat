// const express= require('express');
// const app=express();

// app.get("/healthcheckup", (req,res)=>{
//     const kidneyid=req.query.kidneyid;
//     const username=req.headers.user;
//     const password=req.headers.password;


//     if((username!="kunal" && password!="123456")){
//         res.status(400).json({
//             msg: "Wrong outputs are entered;"
//         })
//         return
//     }
//     if(!(kidneyid==1 || kidneyid==2)){
//         res.status(400).json({
//             msg: " outputs are wrong ;"
//         })
//         return
//     }   

    

//     res.json({
//         msg : "your kidney is in good health"
//     })
// });
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// now this above written code is not a efficient way to check username password 
//authntication and more prechecks as if we will write more than one route so we will 
//have to write the code again and again 

// so we can use function and check if (fxcall == true) but it will be still not 
//a efficient way of doing things

// so we use middlewares 

// the true syntax of the route declaration

// const express= require('express');
// const app=express();

// app.get("/route",function fx1(){
//     console.log("hi")
// },function fx2(){
//     console.log("this is kunal");
// }
// ) basically we are using different functions in setting up route line

// app.get("/route",fx1,fx2,fx3.....,function(req,res){
//     res.json({
//         msg:"hey"
//     })
// });


//we use app.use(function)--> which means all the routes written below it will 
//have a common middleware function default without writing 
// const express= require('express');
// const app = express();

// function print(req,res,next){
//     console("executed");
//     next();
// };

// app.use(print);
// app.get("/",function(req,res){
//     res.json({
//         msg:"hey there"
//     })
// });

// app.post("/name",function(req,res){
//     res.json({
//         msg:"kunal"
//     })
// });

// app.listen(3000);



// the concept of ERROR HANDLING MIDDLEWARES
//these are the middle wares used to handle errors and generally written in the 
//end of the route

const express= require('express');
const app = express();


app.use(express.json());//this is for using the body in post req

app.post("/name",function(req,res){
    const name = req.body.names;// now user can give any wrong inputs too if
    //he provides array or number it will throw and error that why we use input 
    //validation , but we can use error handling middleware at the last
    res.send("hey"+name+",Welcome to the website");
});
// app.use
app.use(function (err,req,res,next){
    res.json({msg:"sorry sever is down"});
});

app.listen(3000);
 