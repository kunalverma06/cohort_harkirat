const Users= new Map()
Users.set("random1",{name:"anything",id:"anything"});
Users.set("random",{name:"anything",id:"anything"});


const user= Users.get("random1");
console.log(user);