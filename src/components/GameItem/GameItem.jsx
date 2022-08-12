import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {GameCover} from '../GameCover'
import { GameBuy } from '../GameBuy';
import { GameGenre } from '../GameGenre';
import './gameItem.css'
import { setCurrentGame } from '../../redux/games/reducer';


export const GameItem = ({game}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setCurrentGame(game))
		navigate(`/app/${game.title}`)
	}


  return (
    <div className="game-item" onClick={handleClick}>
		<GameCover image={game.image}/>
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">{game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}</div>
        <div className="game-item__byu">
				<GameBuy game={game}/>
		  </div>
      </div>
    </div>
  );
}
