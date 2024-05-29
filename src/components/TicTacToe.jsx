import React from 'react'
import Board from './Board.jsx';
import { useState,useEffect } from 'react';
import GameOver from './GameOver.jsx';
import GameState from './GameState.js';
import NewGame from './NewGame.jsx';

import ClickSound from '../sounds/click.wav'
import gameOVerSound from '../sounds/gameOver.wav'
const Player_X = 'X';
const Player_Y = 'O'

const gameOverSound = new Audio(gameOVerSound);
gameOverSound.volume=0.5;
const clickSound = new Audio(ClickSound);
clickSound.volume=0.5;



export default function TicTacToe() {




  const [strikeClass, setStrikeClass] = useState();
  const [tiles,setTiles]= useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(Player_X);
  const [gameState, setGameState] = useState(GameState.inProgress);
  const winCombos =[
    // row combos
    {combo: [0,1,2] ,strikeClass:"strike-row-1" },
    {combo:[3,4,5],strikeClass:"strike-row-2" },
    {combo:[6,7,8],strikeClass:"strike-row-3"},
    // column combos

    {combo:[0,3,6],strikeClass:"strike-column-1"},
    {combo:[1,4,7],strikeClass:"strike-column-2"},
    {combo:[2,5,8],strikeClass:"strike-column-3"},
    // diagonal combos
    {combo:[0,4,8],strikeClass:"strike-diagonal-1"},
    {combo:[2,4,6],strikeClass:"strike-diagonal-2"},
  ]






  function checkWinner(tiles,setStrikeClass,setGameState){
 for (const {combo,strikeClass}of winCombos){
  const tileValue1 = tiles[combo[0]]
  const tileValue2 = tiles[combo[1]]
  const tileValue3 = tiles[combo[2]]

  if(
    tileValue1 !== null && tileValue1 === tileValue2 && tileValue3 === tileValue1){
      setStrikeClass(strikeClass);
      setPlayerTurn(null);
      if(tileValue1 === Player_X){
        setGameState(GameState.PlayerXWins)
  
      }
      else if(tileValue1 === Player_Y){
        setGameState(GameState.PlayerYWins)
      }
    
    }
    

   
  

 }  
 const areAllTilesFilledIn= tiles.every((tile)=> tile  !== null)
 if(areAllTilesFilledIn){
  setGameState(GameState.draw)
  }
 

  }
  const handleTileClick= (index)=>{
    if(tiles[index] !== null){
      return;
    }
   
    

    const NewTiles=[...tiles]
    NewTiles[index]=playerTurn;
    setTiles(NewTiles); 
   
    if(playerTurn === Player_X){
      setPlayerTurn(Player_Y)
    }
    else{
      setPlayerTurn(Player_X)
    }

  }

function newGame(){
  tiles.fill(null);
  setStrikeClass(null);
  setGameState(GameState.inProgress)
  setPlayerTurn(Player_X)

}


 useEffect(() => {
      
    checkWinner(tiles,setStrikeClass,setGameState);

  }, [tiles]);



  useEffect(() => {
    
   if(tiles.some((tile)=> tile !==null)){
    clickSound.play()
   }
  }, [tiles]);
  useEffect(() => {
    
   if(gameState !== GameState.inProgress){

    gameOverSound.play();
   }
  }, [gameState]);



  return (
    <div className='mt-5'>
      <h1>Tic Tac Toe</h1>
      <Board strikeClass={strikeClass}   onTileClick={handleTileClick} playerTurn={playerTurn} tiles={tiles} />
      <GameOver gameState={gameState}/>
      <NewGame newGame={newGame} gameState={gameState}/>
    </div>
  )
}
