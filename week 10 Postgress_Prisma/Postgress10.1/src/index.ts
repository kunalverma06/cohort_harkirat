const postgress= require("pg");

//created an interface to define the types of the values that will be passed to the function so we can reuse it to make different tables 

interface types{
    functionName: string;
    tableName: string;
}

//created a function that will create a table in a database with the values that are passed to it all the functions will be written in it for query as client is in this scope only
async function Database(Values: types){
    const client = new postgress.Client({
        host: "localhost",
        port: 5432,
        database: "postgres",
        user: "postgres",
        password: "12345678"

    })
     async function CreateTable(Values: types){ //function to create a table
        await client.connect(); //connecting to the database
        const {functionName, tableName} = Values;  //destructuring the values that are passed to the function
        await client.query(`CREATE TABLE  "${tableName}" (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);`)
        //query to create a table with the values that are passed to the function "${tableName}" is the name of the table that is passed to the function 
        console.log("Table created")
    };
    

CreateTable(Values); // calling the function to create a table and passing the values to it
}


Database({functionName: "CreateTable" , tableName: "DEMO"}); //giving the values to the function to create a table according to type interface





// import { Client } from 'pg';

// // Async function to fetch user data from the database given an email
// async function getUser(email: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: '12345678',
//     });
    

//   try {
//     await client.connect(); // Ensure client connection is established
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const values = [email]; // Use parameterized query to prevent SQL injection
//     const result = await client.query(query, values);
    
//     if (result.rows.length > 0) {
//       console.log('User found:', result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log('No user found with the given email.');
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err; // Rethrow or handle error appropriately
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// getUser('user5@example.com').catch(console.error);


