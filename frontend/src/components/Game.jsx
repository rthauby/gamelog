import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Game = (props) => {
  return (
    <div>
      { props.game ? (
        <Card>
          {/* <CardMedia style={{height: 0, paddingTop: '56.25%' }} /> */}
          <CardContent>
            <Typography gutterBottom variant='h1' component='h2'>
              {props.game.title}
            </Typography>
            <Typography gutterBottom component='p'>
              {props.game.description}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}

export default Game;