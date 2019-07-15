import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

import config from '../config'

const DEFAULT_URL = 'https://via.placeholder.com/350x150?text=No+Image'

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

function fetchUrlFromAPI(game) {
  return axios({
    url: config.api.local.urls.artwork + `${game.id}`,
    method: 'GET',
  })
    .then(response => {
        return response.data[0].url.replace('t_thumb','t_screenshot_med_2x')
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
  }
}

export default function Game(props) {
  const classes = useStyles()
  const [url, setUrl] = React.useState(DEFAULT_URL)
  getUrl(props.game, setUrl)
  return (
    <CardMedia
      className={classes.media}
      image={url}
      title="Paella dish"
    />
  )
}