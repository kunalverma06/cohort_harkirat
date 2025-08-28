import { createContext, useContext } from "react";

export const Context= createContext(0);

// here we are creating a context api and we are passing the initial value of the context api as 0 now we will export this context api and use it in the app.jsx file

// steps to use context api in app.jsx file are as follows:
// 1. import the context api in app.jsx file
// 2. wrap the components in the context api provider
// 3. use the context api in the child components

// and this will remove the prop drilling in the app.jsx file and directly pass the state variable to the child components


// When you create a context using React.createContext(), it returns two things:

// Context.Provider - This component provides the value to its descendants.
// Context.Consumer (or useContext() hook) - This is used to access the context value in components.
// Context.Provider is essential because it's what allows React to share data across multiple levels of your component tree without having to pass props manually at every level.