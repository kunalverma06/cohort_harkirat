 import { useRecoilValue } from "recoil"
import { JobsAtom, MessagingAtom, NetworkAtom,  NotificationAtom } from "../stores/Atoms"
 
 
 function Navbar() {   

    const NetworkCount= useRecoilValue(NetworkAtom)
    console.log(NetworkCount)
   
  const JobsCount= useRecoilValue(JobsAtom)
  const NotificationCount= useRecoilValue(NotificationAtom)
  const MessagingCount= useRecoilValue(MessagingAtom)

  return (
    <>
      <button>Home</button>
      <button>My network ({NetworkCount >=100 ? "99+" : NetworkCount})</button>
      <button>Jobs({JobsCount   })</button>
      <button>Messaging({MessagingCount})</button>
      <button>Notifications({NotificationCount})</button>
      <button>Me({}) </button>
      
    </>
  )
}
export default Navbar;