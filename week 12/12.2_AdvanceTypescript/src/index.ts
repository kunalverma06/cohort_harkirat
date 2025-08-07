//pick ( this lets you pick the properties you want to use from the object/interface/type )]

import { string } from "zod";

//Partial ( this lets you make the properties optional )
interface Person{
    name:string;
    age:number;
    address:string;
    email:string;
    password:string;

}
// now we need only name and age from the Person interface so we can use pick rather than making another type
type User = Pick<Person, "name" | "age">;

type UpdatePropOptional = Partial<User>;    // this will make the properties optional

function sumOfAge(user1:User , user2:User){
    return user1.age + user2.age;
}

const age = sumOfAge({name:'John', age:20, }, {name:'Doe', age:30, }); 
console.log(age); //50  

//readonly ( this lets you make the properties readonly )// in typescript

//what is the need of this
const arr=[12,3,4];
//this array is constant but we can still change the inner value
arr[0]=5;
//but if we need to stop anyone else to change the inner value of an array or even an object we will use readonly 

const  arr2:readonly number[] =[2,34,5];

type User2={

    readonly Username:string;
    readonly Email:string;


}

// or we can remove readonly and make the user2 as read only like this 
const Values:Readonly<User2>={
    Username:"kunal",
    Email:"xyz@gmail.com"   

}

// record and maps
//
type Type={
    [id:string]:{
        id:string,
        username:string,
    }

}


const ob:Type={
    "abc":{
        id:"abc",
        username:"random"
    },
    "bcd":{
        id:"bcd",
        username:"random"
    }
}

//this above is the ugly or not a good way to do it so we use record and maps

{
    type random= Record<string,{username:string, id:string}>;
    const users:random={
        "random":{
            username:"random",
            id:"random"
        }

       }
}

// note record is a typescript concept but map is js concept 
//map is a different way we can use key value pairs (keys having values or object)

{
    type Values={
        id:string,
        name:string,
        email?:string
    }
    const Users= new Map<string,Values>()
    Users.set("random1",{name:"anything",id:"anything"});
    Users.set("random",{name:"anything",id:"anything"});


    const user= Users.get("random1");
    console.log(user);

}