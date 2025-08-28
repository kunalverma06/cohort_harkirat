// Code for 6.1 is this:

import { useEffect, useMemo } from "react";
import { set } from "zod";
import { useState } from "react";
import Callback from "./components/Callbacks";
// import { useEffect } from "react";


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import { RandomButton } from './components/Random'
// // import { UsingMemo } from './components/Usememo'
// import { Wrapping } from './components/Wrapping'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       {/* // <RandomButton />
//       // <UsingMemo /> */}
//       <Wrapping ><Text /></Wrapping>
//       <Wrapping >
//         <div>
//           ANYTHING
//         </div>
//       </Wrapping>
//     </div>
//   )
// }

// function Text() {
//   return (
//     <div>hi there</div>
//   )
// }

// export default App














// code for 6.2 video ( REACT HOOKS)


// 1st Hook is USeEffect

// function App(){
//   const [id, setId] = useState(1)
//   const [todo, setTodo] = useState({});

//   useEffect(function data(){
//     fetch('https://dummyjson.com/todos/'+id)
//     .then( async function  get(respone){
//       const value = await respone.json();
//       setTodo(value);

//     })
//   },[id])


//   return(
//     <div>
//       <button onClick={function change(){
//         setId(1)
//       }}>1</button>

// // The reason why setId(1) needs to be placed inside a function for the onClick event in React is that you don't want the function to be called immediately when the component renders—instead, you want it to be called only when the button is clicked.

// // What happens:
// // If you use onClick={setId(1)} directly:

// // This will call setId(1) immediately when the component renders, because you are invoking the function right away.
// // The onClick event handler won't be triggered when the user clicks the button. Instead, the function gets called as soon as React processes this line during rendering.
// // So, when the page loads, setId(1) is already executed, which is not what you want.

//       <button onClick={function change(){
//         setId(2)
//       }}>2</button>
//       <button
//       onClick={function change(){
//         setId(3)
//       }}>3</button>
//       <button onClick={()=> setId(4)}>4</button>
//       <div>
//         <h1>{todo.todo}</h1>
//         <h3>{JSON.stringify(todo.completed)}</h3> {/* Converts Boolean value to a string to display */}
//       </div>

//     </div>
//   )
// }

// export default App;






// 2nd Hook is UseMemo

// function App(){
//   // const [sum , setSum] = useState(0);
//   // // let sum = 0;
//   // function additon (num){
//   //   // let sum = 0;
//   //   for(let i=0; i<num; i++){
//   //     sum += i;
      
//   //   }
//   //   setSum(sum);
//   // }
//   // In React, state (sum) should be treated as immutable. When you call setSum(), it doesn’t immediately update the value of sum—it schedules a state update. If you try to update sum inside the loop directly,


//    const [inputvalue , setInput] = useState(0);
//    const [counter, setCounter]=useState(0);
//   //  let tempsum = 0;
//   // function additon (num){
//   //   // let sum = 0;
//   //   for(let i=0; i<=num; i++){
//   //     tempsum += i;
      
//   //   }
//   //   setSum(tempsum); one way to solve it without usememo

//   const tempsum=useMemo(function additon(){
//     console.log("memo got logged");
//     let tempsum = 0;
//     for(let i=0; i<=inputvalue; i++){
//       tempsum += i;
//     }
//     return tempsum;

    
//   },[inputvalue])

//   return(
//     <div>
//       <input placeholder="enter text" onChange={(e)=>{console.log(e.target.value);
//         setInput(e.target.value);
//         }}></input><br></br>
//       <div>sum is {tempsum}</div>

//       {/* NOW normally everything will rerender so if we not click on button then the input box and sum is rerendering again which is not good so to avoid it we use UseMemo */}


  
//       <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>

//     </div>
//   )
// }



//Usecallbacks is used to avoid rerendering of the function again and again
// basically save the function in memory and use it again and again without rerun the function again and again

function App(){
    return(
        <div>
            <Callback></Callback>s
        </div>
    )
}



export default App;