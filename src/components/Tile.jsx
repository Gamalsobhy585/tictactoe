import { useState } from "react";
function Tile ({className,value, onClick,playerTurn}) {
    let hoverClass = null;

// const [value, setValue] = useState(null);
if(playerTurn != null && value==null){
    hoverClass = `${playerTurn.toLowerCase()}-hover`
}





    return ( <div  onClick={onClick}   className={`d-flex justify-content-center align-items-center ${hoverClass} fs-5 tile ${className}`}>{value}</div> );
}

export default Tile ;