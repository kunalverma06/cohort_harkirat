import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Insert(username:string, password:string , firstName: string , lastName: string ){
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
            firstName:firstName,
            lastName:lastName,
            
        },
        select:{
            id: true,
            username: true,
            password: true,
        }
    
    });
    console.log(user); 
    return user;
    

}

Insert("kunal_xv","kyubatau","kunal","verma");
async function User(){
    const users = await prisma.$queryRaw`SELECT * FROM "User";`;
    console.log(users);}
User(); 


// IN SQL QUERIES, TABLE NAMES ARE CASE SENSITIVE.
// The issue here is that you are querying the wrong table in PostgreSQL. In PostgreSQL, table names are case-sensitive when using double quotes ("User"), but they default to lowercase if not quoted.PostgreSQL converts it to lowercase (user), and user is a reserved keyword in PostgreSQL. Basically Model name are "User" but in SQL query it should be "User" with quotes vrna vo user lelega.

