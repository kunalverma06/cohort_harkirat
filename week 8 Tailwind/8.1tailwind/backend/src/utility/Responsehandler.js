//there is no such class for handling response so we will create our own class

class Responsehandler{
    constructor(statuscode, message="Success" , data=null ){
        this.statuscode=statuscode;
        this.message=message;
        this.data=data;
        this.success= statuscode < 400;
    }
}