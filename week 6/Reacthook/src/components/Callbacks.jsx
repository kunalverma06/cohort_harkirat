import { memo, useCallback, useState } from "react"

// okay first we will understand wht is the use of useCallback hook in react

const a=5;
const b=5;
console.log(a==b); //true

function sum(a,b){
    return (a+b)
}
function sum2(a,b){
    return (a+b)
} 
console.log(sum==sum2); //false because both are different functions but they are doing same thing so if we use memo and pass a function into it then it will rerender as it considers it as a new function 

function Callback()
{
    const [count , setCount] = useState(0); 

    // function sum(a,b){
    //     return (a+b)
    // }
    
    const sum = useCallback((a,b)=>{
        console.log("sum got called");

    },[])
    
    return(
        <div>
            <button onClick={()=>{
                setCount(a=>a+1)    
            }}>click me</button>
            <Demo a={sum}/>
        </div>
    )
}

const Demo = memo(function({sum}){ // we are using memo here for function and passing the 
                            // value a and it will only rerender if the value of a changes as a is not a state variable it wont change so it should not rerender but it will rerender as it is a function and it will consider it as a new function
    console.log("rerender");
    return(
        <div>
            hi there
        </div>
    )
}) 

export default Callback;

// so to avoid this we use usecallback hook in react which will memorize the function and will not rerender it again and again 

// so we will use usecallback hook in the above code and see the difference //

