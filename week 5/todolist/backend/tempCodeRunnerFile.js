const express= require("express");
const { Addtodo, Updatetodo } = require("./types");
const { todo } = require("./database");
const app =express();


app.use(express.json());


app.post("/todo",async function(req,res){
    const data = req.body;
    const parsedata= Addtodo.safeparse(data);
    if(!parsedata.success){
        res.status(411).json({
            msg:"Your inputs are not valid"
        })
        return;
    }
    //mongo db logic
    // note this is a async call like we can use it without async but we dont want if some error comes  and we show todo created msg

     await todo.create({
        title:data.title,
        description:data.description,
        completed:false

    })
    res.json({
        msg:"todo created",
    })
}
);

app.get("/",async function(req,res){
    const todos = await todo.find({});
    res.json({ todos });
}
);
app.put("/completed",async function(req,res){
    const updatedata = req.body;
    const parsedata= Updatetodo.safeParse(updatedata);
    if(!parsedata.success){
        res.status(411).json({
            msg:"Your inputs are not valid"
        })
        return;
    }

    // update have two arguments first is the condition and second is the data to be updated
    // so _id is mongo db id and req.body.id is the id we are passing from frontend
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    }
)
    res.json({
        msg:"todo marked as completed"
    })
   
}
);


app.listen(3000);