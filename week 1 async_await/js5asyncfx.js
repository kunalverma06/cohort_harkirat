// // async: delegate execution and help us to do things together,sequential
// //synchronise : sequential run things

// //example of async function is settimeout function

// function sum(){
//     for(let i=0;i<100;i++){
//         console.log(i);//this will print at last 
//     }
// }
// setTimeout(sum,1000);// this is a async function and it will process the the funciton sum
// //asyn function will be tell the thread to execute the below code first then 
// //come last to the function sum

// console.log("hello everyone before large processing");

// for(let i=0;i<10000000000;i++){
//     i+=1;//here it is not in a async function so it will be busy until it runs 
//     //all the code then will go to below code
// }



// console.log("hello everyone");

//fs.readfile() is also a async function
//latentflip.com/loupe/ ( this is to visualise how async works)


// promises and defining own async function

// we can define our async function by two ways 
// 1) normal fucntion using callback which we were doing till now 
// 2) Promises ( its nothing but a cleaner way to define )

// normal way 
// const fs=require('fs');
// function read(fx){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         fx(data);
//     });
// };



// function doneread(data){
//     console.log(data);
// }

// read(doneread);



// why do we use promises ? 
// to not to use callbacks due to  callback hell

// promise example  
// const fs=require( 'fs' );
// function  goto()m{
//     return new Promise(function (resolve ){
//         fs.readFile("a.txt","utf-8",function(err,data){
//             resolve(data);
//         })
//     })};
//     function ondone(data){
//         console.log(data);
//     }
    
//     goto().then(ondone);
//syntax of the promise is 
// new--> is to set a class
// Promise--->is used for calling a function // promise take first argument a function
// Function name -- >parameter
// resolve -->> it will be called if everything goes well i.e no error in code
// reject --->>it will be called if there is an error in code
// goto().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})


// a promise can have three states
//pending   ----> this means that the operation is still going  
//resolved promise  ---->this means that the operation has been completed successfully 
//rejected promise ----> this means that the operation has failed
// let p =new Promise ((reslove ,reject) =>{
//     setTimeout(()=>{
//         reslove ("hello world");
//     },2000)     
// });

// here we are using then method which comes under thenable concept
// .then()----> it takes two     arguments one is a success call back and other is failure call back
//                         or you can say it takes two functions as parameter
//                         1st--->success call back
//                         2nd--->failure call back
//                          when ever our promise gets resolved it calls the succes call back with the output of the promise
//                         both are optional
//                         syntax:promise.then(onsuccess ,onfailure )
//                         onsucess--->itwill be called if the promise gets resolved
//                         onfailure--->it will be called if the promise gets rejected



//pending promise

var a= new Promise(function(resolve){
    resolve();
})

function call(){
    console.log(a);
}

a.then(call);
// this will show it is undefined promise  because  it is in pending state 
// that means no resolve have  been called yet so it shows undefine

// to fix this 
var b= new Promise(function(resolve){
    resolve("kuchbhi");
});

function callback(){
    console.log(b);
}

b.then(callback);