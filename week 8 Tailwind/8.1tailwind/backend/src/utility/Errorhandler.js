// we have the class Errorhandler which will extend the built-in Error class in JavaScript. This class will take a message and a status code as arguments and set them as properties of the error object.

class Errorhandler extends Error{
    constructor(
        message = "Something went wrong",  
        statuscode  ,
        errors=[],
        stack = true

    ){
        super(message);
        this.statuscode=statuscode;
        this.data=null;
        this.message=message;
        this.errors=errors;



    }
}