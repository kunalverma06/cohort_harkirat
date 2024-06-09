// let myfname="kunal";
// let age= 5;
// let criminal=false;

// this is variable concatination
// console.log("my fname is "+myfname+" and my age is "+age);

//this is the if else syntax
// if(criminal==1){
//     console.log("and i am  a criminal");
// }
// else if(criminal==0){
//     console.log("and i am not a criminal");
// }

//for loop in js
// sum =0
// for(let i=0;i<1001;i++){
//     sum+=i;
// }
// console.log(sum);


// arrays in js
const fname=["kunal","gaurav","abhinav","om"];
const fgender=["male","female","unknown","male"];
console.log(fname[0]);

for(let i=0;i<fname.length;i++){
    if(fgender[i]=="male"){//if the gender is male then 
        console.log(fname[i]);//print the name of the person of the same index
}
}
//but there is a better wway to do it and that is objects

//objects in js --> array of an object --> [{}]
const alluser=[
{
    username:"kunal",
    gender:"male",
    //we can have a list of object of a object-->[{{}}]
    metadata:{
        age:17,
        born:26

    }
},
{
    username:"gaurav",
    gender:"female",
    metadata:{
        age:15,
        born:26

    }
},
{
    username:"abhinav",
    gender:"male",
    metadata:{
        age:19,
        born:26

    }
}
]
console.log(alluser[0]["username"]);
console.log("using loops and seeing all the users with gender male")
let run=false;
for(let i=0;i<alluser.length;i++){
    if(alluser[i]["gender"]=="male"){
        console.log(alluser[i]["username"]);
       
    }   
}
for(let i=0;i<alluser.length;i++){
    if(alluser[i]["metadata"]["age"]<=18){
        if(run==false){
            console.log("the names of user of age of age less than 18 ");
            run=1;
        }
        console.log(alluser[i]["username"]);
    }
}

//functionns and callbacks
function sum (sum1,sum2,fxcall){
    sum=sum1+sum2;
    fxcall(sum);
}
function display1(sum){
    console.log("the sum is "+sum);
}
function display2(sum){
    console.log(" sum of the number is "+sum);
}
//what if we have to call both function depending on the type way we need to print
sum(1,2,display2)//here we giving a function as a argument and the argument u will give
//it will call that function

//another example of callback function
function ap(a,b,apcall){
    // function apcall(a,b){
    //     return a+b;
    // }
    value=apcall(a,b);//this calling the function sum is same as code above
    //its same as defining the same function with a different name
    return value;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
val=ap(1,2,sum);
console.log("the value is"+ val);

function greet(){
    console.log("hello world")
}
//set time out
setTimeout(greet,4*1000);// it will execute the greet function after 4 seconds
//its an example of callback function
//setinterval
setInterval(greet,1*1000);//after every one second it will call the function again and again
