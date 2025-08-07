import {  useState } from "react";
import Todo from "./Todolist";

// function App(){
//     const [count, setCount]=useState(0); //[0, function( this function will update the value of count)]

//     function increment(){
//         setCount(count+1);//increment the value of count by 1 giving into the function
//     }

//     return(
//         <div>
//             <button onClick={increment}>Increment {count}</button>

//         </div>
//     )
// }



// Now we will make a another Component seprately and do the same thing above 
function CustomButton(parameter){
        
    function increment(){
         parameter.setCount(parameter.count+1);//increment the value of count by 1 giving into the function
}

    return(
        <div>
            <button onClick={increment}>Increment {parameter.count}</button>

        </div>
    )

}


function App(){
    const [count, setCount]=useState(0); //[0, function( this function will update the value of count)]

   
    

    return(
        <div>
            <div>
                <CustomButton count={count} setCount={setCount}/>
                {/* giving the value of count and setCount to the customButton function */}
            </div>

            <div>
                <Todo/>
            </div>

        </div>
    )
}












export default App;