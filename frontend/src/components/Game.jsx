import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

import utils from '../utils'

import GameArt from './GameArt'

export default function Game(props) {
  const release_date = moment.unix(props.game.first_release_date).utc().format('MM/DD/YYYY')
  const description = props.game.description ? utils.trunc(props.game.description, 250) : ''
  return (
    <Card>
      <CardHeader
        title={props.game.title}
        subheader={'Released: ' + release_date}
      />
      <GameArt game={props.game} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}