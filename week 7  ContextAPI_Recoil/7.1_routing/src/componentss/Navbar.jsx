import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate=useNavigate();
    return (
        <div>
            <div>this is when the browser will reload the page and get html file from client</div>

            <button onClick={()=>window.location.href = "/Dashboard"}>Dashboard</button>
            <button onClick={()=>window.location.href="/Home"}>Home</button> <br/><br/><br/>

            {/* location.href gives us the current URL location of the browser. We can use this to navigate to different pages in our application. But in this method the browser will reload the page and the state of the application will be lost. This is not a good practice in a single page application.it will not be client side routing.  */}

            {/* Another way to do it is either by link or useNavigate hook( from react-router-dom) which is a better way to do client side routing*/}
            {/* go to app.jsx for useNavigate hook */}
            <div>this is using Usenavigate hook inspect and see the difference from network it will not reload it is client side routing </div>

            <button onClick={()=>{navigate('/Dashboard')}}>Dashboard</button>
            <button onClick={()=>{navigate("/Home")}}>Home</button>

        </div>
    )
}