import { useRecoilState, useRecoilValue } from "recoil"
import { AtomsCount, JobsAtom, MessagingAtom, NetworkAtom,  NotificationAtom } from "../stores/Atoms"
import axios from 'axios'
import { useEffect } from "react"
 
 function Navbar() {   

    const [Atomcount , setAtomCount]= useRecoilState(AtomsCount)
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/notifications)")
        .then(res=>{
            setAtomCount(res.data)
        })
    } ,[Atomcount])

    //this is not a good practice to call api in useEffect in atoms
    //rather we use selectors for this purpose 
    //for sometime we see default values of atoms then we see the updated values from api

  return (
    <>
      <button>Home</button>
      <button>My network ({NetworkCount >=100 ? "99+" : NetworkCount})</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>
      <button>Me  ()</button>
      
    </>
  )
}
export default Navbar;