import React from 'react'
import './gameBuy.css'
import { Button } from '../Button'


export const GameBuy = ({game}) => {
  return (
	 <div className='game-buy'>
		<span className='game-buy__price'>{game.price} руб.</span>
		<Button onClick={() => {}} type='primary'>
			В корзину
		</Button>
	 </div>
  )
}
