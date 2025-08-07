import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const Countatom= atom({
    key:"Countatom", //this is a unique key for every atom 
    default: 0 //this is a default value 
})

// In recoil there is three 

// useRecoilValue - same as count as state variable
// useRecoilState - gives both value and useState 
// useSetRecoilState - work as useState to change the value of recoilvalue


export const Evenselector= selector({
    key:"Even",
    get: ({ fetch }) => {  //props is the value of the atom , get is the function that will be called when we want to get the value of the selector
        const count= fetch(Countatom) //whenever the value of the atom changes the get function will be called
        return count%2===0
    }
})