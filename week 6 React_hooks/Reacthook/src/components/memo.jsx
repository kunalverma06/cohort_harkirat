import { memo ,useState} from "react"



export function UsingMemo(){
    const [title, setTitle] = useState("Kunal");

    return  ( 
    <div>
        <button onClick={()=>setTitle(Math.random())}>Change Title</button>
        <Header title={title}></Header>
        <Header title="raman"></Header>
        <Header title="raman"></Header>
        <Header title="raman"></Header>

    </div>)
}


const Header = memo(function Header({title}){
    return(
        <div>{title}</div> 
    )

})