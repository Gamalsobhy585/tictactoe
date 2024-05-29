import React from 'react'
import GameState from './GameState';

export default function NewGame({gameState,newGame}) {
    if(gameState===GameState.inProgress){
        return <></>
    }
    else{
        return (
            <>
             <button onClick={newGame} className='btn reset-btn mt-4 p-3 w-100 btn-primary btn-sm'>New Game</button> 
            </>
          )
        }
    }

