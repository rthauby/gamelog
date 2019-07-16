import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import config from '../config'

const DEFAULT_URL = 'https://via.placeholder.com/350x350?text=No+Image'

const styles = {
  art: {
    height: 0,
    paddingTop: '100%',
  },
}

function fetchUrlFromAPI(game) {
  return axios({
    url: config.api.local.urls.artwork + `${game.id}`,
    method: 'GET',
  })
    .then(response => {
      const url = response.data[0].url
      return url.replace('t_thumb','t_cover_big')
    })
    .catch(err => {
        return err
    });
}

async function getUrl(game, callback) {
  if(game.artworks){
    let result = await fetchUrlFromAPI(game)
    callback(result)
    return result
  } else {
    callback(DEFAULT_URL)
  }
}

function GameArt(props) {
  const { classes } = props
  const game = props.game
  const [url, setUrl] = useState(null)

  useEffect(() => {
    getUrl(game, setUrl)
  },[game])

  return (
    <div className="testing">
    { url ?
      <CardMedia
        className={classes.art}
        image={url}
        title={props.game.name}
      />
    : null }
    </div>
  )
}
export default withStyles(styles)(GameArt)