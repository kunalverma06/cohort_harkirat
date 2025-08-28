import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
// import { JobsCount, NotificationCount } from './stores/Atoms'
import Navbar from './components/Navbar'

function App() {
  return( 
     <RecoilRoot>
      <Navbar/>
    </RecoilRoot>
)}

export default App
