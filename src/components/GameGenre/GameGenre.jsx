import React from 'react'
import './gameGenre.css'


export const GameGenre = ({genre}) => {
  return (
	 <span className='game-genre'>
		{genre}
	 </span>
  )
}
