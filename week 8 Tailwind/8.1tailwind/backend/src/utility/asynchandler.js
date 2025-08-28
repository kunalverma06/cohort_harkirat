//this function will take a function as an argument and return a new function that wraps the original function in a try-catch block. If the original function throws an error, the error will be passed to the next middleware in the chain.

const asncyhandler = (fn)=>{
     (req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch(next);
    }
}
export default asncyhandler;

