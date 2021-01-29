import { dnsPrefetchControl } from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

mongoose.connect(
    // dotenv
    process.env.MONGO_URL, 
    {
        // configuration
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }  
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB")
const handleError = () => console.log(`❌ Error on DB Connection : ${error}`)

db.once("open", handleOpen);
db.on("error", handleError);