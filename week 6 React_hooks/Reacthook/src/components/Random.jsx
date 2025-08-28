import { useState } from "react"
export function RandomButton(){
    // const [random, setRandom] = useState("Kunal")
    // function Change(){
    //         setRandom(Math.random());
        
    
    return( <>

        {/* <button onClick={Change}>Random</button>
        <h2>Hi my name is {random}</h2>
        <h2>Hi my name is Raman</h2>     */}

            {/* this will rerender all the childrens so to minimise it we will use pushing the state method */}

        <Rerender/>
        <h2>Hi my name is Raman</h2>
    </>
)}


function Rerender(){
    const [random , SetRandom]= useState("kunal")
    function Change(){
        SetRandom(Math.random());

    }
    return(
        <div>
            <button onClick={Change}>Random</button>
            <h2>Hi my name is {random}</h2>
        </div>
    )

    
}