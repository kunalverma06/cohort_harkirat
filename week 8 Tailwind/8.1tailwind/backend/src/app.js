import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // to handle URL-encoded data it converts into json
app.use(cors());
app.use(cookieParser());
