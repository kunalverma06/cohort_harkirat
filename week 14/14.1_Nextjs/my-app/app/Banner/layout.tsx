

const Layoutcomp =({children}:{
    children: React.ReactNode;
})=>{
    return (
        <div>
            <div className="bg-blue-500 text-white p-4 text-center ">
            
                Welcome to My App!
            </div>
                        <div>{children}</div>
        </div>
    );
}
export default Layoutcomp;