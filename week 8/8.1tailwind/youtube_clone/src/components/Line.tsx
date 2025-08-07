
function Line (progress){
  return(
    <div className="w-full h-1.5 dark:bg-gray-600 bg-gray-200"  >
      <div className="bg-red-600 h-1.5 dark:bg-red-500" style={{width: progress +"%"}}></div>
       </div>
  )

}
export default Line;