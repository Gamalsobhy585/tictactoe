import React from 'react';
import GameState from './GameState';

export default function GameOver({gameState}) {
 switch(gameState){
    case GameState.inProgress:
        return <></>
        case GameState.PlayerXWins:
            return <><div className='mt-3 game-over'>PlayerX wins</div>
           </>
        case GameState.PlayerYWins:
            return <><div className='mt-3 game-over'>PlayerY wins</div>
         </>
        case GameState.draw:
            return <><div className='mt-3 game-over'>Draw</div>
            </>
            default:
                return <></>
    
     
        
 }
  
}
