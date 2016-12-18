import React from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

export default observer(({ store: {
  games,
  createGame
}}) => (
  <div>
    My Games:
    {games.map(game => console.log({game}) || (
      <div key={game.id}>{game.title}</div>
    ))}
    <div onClick={createGame}>Create new game</div>
  </div>
))
