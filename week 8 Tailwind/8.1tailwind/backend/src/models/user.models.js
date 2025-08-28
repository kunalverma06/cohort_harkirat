import mongoose,{mongo, Schema} from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        
    },
    fullname:{
        type: String,
        required: true,   
        lowercase: true,
        trim: true,
        index:true
    },
    avatar:{
        type: String,
        required: true,
    },
    coverimage:{
        type:String
    },

    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],

    password:{
        type:String,
        required: [true,"password is required"]
    },
    refreshtoken:{
        type:String
    }



},{timestamps:true})

const User =mongoose.model("User",userSchema);

export default User;