import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Game from './Game'
import config from '../config'

export default class GameList extends Component {

  state = {
    games: []
  }

  componentDidMount() {
    axios.get(config.api.local.urls.list)
      .then((res) => {
        this.setState({
          games: res.data
        })
      })
  }

  render() {
    return (
      <div style={{marginTop: '100px', padding: '0 24px'}}>
        <Typography component="h3">
          My Games
        </Typography>
        <Grid container spacing={10} style={{marginTop: '56px', padding: '0 24px'}}>
          {this.state.games.map((game) => {
            return <Grid key={game.id} item xs={12} sm={6} lg={4} xl={3}>
              <Game game={game} key={game.id} />
            </Grid>
          })}
        </Grid>
      </div>
    )
  }
}
