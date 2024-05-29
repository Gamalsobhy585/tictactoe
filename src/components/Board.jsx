import React from 'react'
import '.././style.css';
import Tile from './Tile.jsx';
import Strike from './Strike.jsx';
export default function Board({tiles , onTileClick,playerTurn,strikeClass}) {

  return (
    <>
  <div className='board text-center mt-5 position-relative '>

  
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)} value={tiles[0]} className='right-border bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)} value={tiles[1]}  className='right-border bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(2)}  value={tiles[2]} className=' bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)} value={tiles[3]} className='right-border bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)} value={tiles[4]} className='right-border bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)} value={tiles[5]} className='bottom-border'/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)} value={tiles[6]} className='right-border '/>     
    <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)} value={tiles[7]} className='right-border '/>     
    <Tile  playerTurn={playerTurn} onClick={()=>onTileClick(8)} value={tiles[8]} className=' '/>     
        

      </div>
                 <Strike  strikeClass={strikeClass}/>

      
      </>
  )
}
