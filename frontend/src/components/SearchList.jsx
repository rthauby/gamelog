import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'

import config from '../config'
import Game from './Game'

async function getResults(query, callback) {
  return await axios.get(config.api.local.urls.search + query)
    .then((res) => {
      const games = res.data.map((game) => {
        return {
          title: game.name,
          description: game.summary,
          ...game
        }
      })
      console.log(games)
      callback(games)
    })
}

export default function SearchList(props) {
  const query = props.match.params.query
  const [results, setResults] = useState([])

  useEffect(() => {
    getResults(query, setResults)
  },[query])

  return (
    <div style={{marginTop: '100px', padding: '0 24px'}}>
      <Typography component="h3">
        Search Results
      </Typography>
      <Grid container spacing={10}>
        {results ? results.map((game) => {
          return <Grid key={game.id} item xs={12} sm={6} lg={4} xl={3}>
            <Game game={game} showFav={true} />
          </Grid>
        }) : null}
      </Grid>
    </div>
  )
}