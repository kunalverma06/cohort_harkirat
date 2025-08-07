
import { useState, useContext } from "react";
// import { Count } from "../App";
import { Context } from "./Contextapi";

export function Contextcount() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <br></br>
            <Context.Provider value={{count, setCount}}>
                THIS IS USING CONTEXT API
                <Count />
            </Context.Provider> 
            <br></br>
        </div>
    )
}

export default Contextcount

function Countrender() {
    const {count} = useContext(Context);
    return (
        <div>
            {count}
        </div>
    )
}
function Count() {
    return (
        <div>
            <Countrender></Countrender>
            <Button />
        </div>
    )
}

function Button() {
    console.log(useContext(Context));
    const{ count , setCount} = useContext(Context);
    // const [setCount] = useContext(Context);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increase</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrease</button>
            
            
        </div>
    )
}
