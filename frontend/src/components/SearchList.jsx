import React from 'react'
import Grid from '@material-ui/core/Grid'

import Game from './Game'

export default function SearchList(props) {
  return (
    <Grid container spacing={10} style={{padding: '24px'}}>
      {props.results.map((game) => {
        return <Grid key={game.id} item xs={12} sm={6} lg={4} xl={3}>
          <Game game={game}/>
        </Grid>
      })}
    </Grid>
  )
}
