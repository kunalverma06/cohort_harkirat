import { atom, selector} from "recoil";


export const NetworkAtom = atom({
    key: 'NetworkAtom',
    default: 102
})

export const JobsAtom = atom({
    key: 'JobsAtom',
    default: 0
})

export const MessagingAtom = atom({
    key: 'MessagingAtom',
    default: 12
})

export const   NotificationAtom = atom({
    key: 'NotificationAtom',
    default: 0
})


export const AtomsCount = atom({
    key: 'AtomsCount',
    default: {
        network:0,
        jobs:0,
        messaging:0,
        notification:0
    }
    
})
// When to Use Each Approach?
// Use a Single Atom (Approach 1) if:

// The state variables are closely related and often updated together.
// You want to centralize related data for simplicity.
// You don’t have performance concerns related to re-renders.
// Use Separate Atoms (Approach 2) if:

// The state variables are independent and might change at different times.
// You want to optimize for performance by minimizing unnecessary re-renders.
// Your application has components that only depend on specific state variables.



//this is not a good practice to call api in useEffect in atoms and give a default value like this we need to call api asynchronously and set it as a default value but we cant make default a function so we use selectors for this purpose

const AsyncAtom = atom({
    key: 'AsyncAtom',
    default: selector({
        key: "AsyncAtomvalue",
        get: async ()=>{
            const res = await fetch("https://sum-server.100xdevs.com/notifications")
            const data = await res.json()
            return data
        }
    })
})