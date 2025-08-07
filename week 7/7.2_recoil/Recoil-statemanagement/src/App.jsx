import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Countatom, Evenselector } from './stores/Countatom'
// import { Count } from './stores/Countatom'

function App() {
  

  return (
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}

function Count(){
  const count= useRecoilValue(Countatom)

  return(
    <div>
      count:{count}
      <IsEven></IsEven>
      <Button></Button>

    </div>
  )
}

function Button(){
  // const [count , setCount] = useRecoilState(Countatom) //this way the button are also rerendering which should not be the case since they are not changing
  const setCount = useSetRecoilState(Countatom)
  return(
    <div>
      <button onClick={()=>setCount(countvalue=>countvalue+1)}>Increase
        
      </button>
  
      <button onClick={()=>setCount(countvalue=>countvalue-1)}>Decrease

      </button>
      {/* In your Button component, when you call setCount(count => count + 1), the function receives the current value of Countatom as its argument. */}
    </div>
  )
}


function IsEven(){
  const isEven= useRecoilValue(Evenselector)
  return(
    <div>
      {isEven?"Even":"Odd"}
    </div>
  )
}
export default App
