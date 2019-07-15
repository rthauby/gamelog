import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import moment from 'moment'

import utils from '../utils'

import GameArt from './GameArt'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function Game(props) {
  const classes = useStyles()
  const release_date = moment.unix(props.game.first_release_date).utc().format('MM/DD/YYYY')
  const description = props.game.description ? utils.trunc(props.game.description, 250) : ''
  return (
    <Card className={classes.card}>
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