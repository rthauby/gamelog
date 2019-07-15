import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

import config from '../config'

const DEFAULT_URL = 'https://material-ui.com/static/images/cards/paella.jpg'

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

function fetchUrlFromAPI(game) {
  let result =  axios({
    url: config.api.local.urls.artwork + `${game.id}/${game.artworks[0]}`,
    method: 'GET',
  })
    .then(response => {
        return response.data[0].url
    })
    .catch(err => {
        return err
    });
  return result
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