import React from 'react'
import './gameCover.css'


export const GameCover = ({image = ''}) => {
  return (
	 <div className='game-cover' style={{backgroundImage: `url(${image})`}}>GameCover</div>
  )
}
