//counter in js
function print(){
    console.log(cont);
    cont=cont-1;
    if(cont<0){
        return 0;
    }

}

function counter(){
    cont=30
    setInterval(print,1*1000);
    
}

counter();