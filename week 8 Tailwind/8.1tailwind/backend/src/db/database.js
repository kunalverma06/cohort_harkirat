import mongoose from "mongoose"
import { Database_name } from "../constant.js"


const connectDB = async ()=>{
    try{
         const Database_instance= await mongoose.connect (`${process.env.DATABASE_URL}/${Database_name}`)
        console.log(`Databse connected at ${Database_instance.connection.host}`)
    } catch(error){
        console.log("Error while connecting to database",error)
        process.exit(1)
    }
}
export default connectDB