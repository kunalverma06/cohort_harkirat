import axios from "axios";


 async function geuserdata() {
    const response= await axios.get("http://localhost:3000/api/user")
    return( response.data);
}

export default async function User(){
    const user= await geuserdata();
    return (
        <div className="bg-green-300 text-white p-4 text-center">
            <h1 className="text-xl font-bold">User Information</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}