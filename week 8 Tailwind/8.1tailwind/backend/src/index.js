import dotenv from 'dotenv';
import connectdb from "./db/database.js";

dotenv.config({
    path: './.env'
});

connectdb()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
    
})