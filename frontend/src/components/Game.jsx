import React, { useState }  from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CardMedia from '@material-ui/core/CardMedia'
import moment from 'moment'

import utils from '../utils'
import config from '../config'

import GameArt from './GameArt'

const handleFav = (e, game, url) => {
  const csrf = utils.getCookie('csrftoken')
  const gameData = {
    csrfmiddlewaretoken: csrf,
    title: game.title,
    url: game.url,
    external_id: game.id,
    image_url: url,
    first_release_date: '2019-07-24T13:01',
    description: game.description,
  }
  axios.post(config.api.local.urls.create, gameData)
    .then(response => {
      alert('Game saved to your collection')
    })
    .catch(err => {
        return err
    });

}

export default function Game(props) {
  const [imageUrl, setImageUrl] = useState('')
  const release_date = moment.unix(props.game.first_release_date).utc().format('MM/DD/YYYY')
  const description = props.game.description ? utils.trunc(props.game.description, 250) : ''
  return (
    <Card>
      <CardHeader
        title={props.game.title}
        subheader={'Released: ' + release_date}
      />
      { props.game.image_url ?
        <CardMedia
          style={{height: 0, paddingTop: '100%'}}
          image={props.game.image_url}
          title={props.game.name}
        />
      :
        <GameArt game={props.game} callback={setImageUrl} />
      }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      {props.showFav ?
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites" onClick={(e) => handleFav(e, props.game, imageUrl)}>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      : null }

    </Card>
  )
}