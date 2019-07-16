import React from 'react'
import axios from 'axios'
import CardMedia from '@material-ui/core/CardMedia'

import config from '../config'

const DEFAULT_URL = 'https://via.placeholder.com/350x350?text=No+Image'

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
  }
}

class GameArt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url : ''
    }

    this.setState.bind(this)
  }

  componentDidMount() {
    getUrl(this.props.game, (url) => {
      this.setState({
        url,
      })
    })
  }

  render() {
    return (
      <div>
      { this.state.url ?
      <CardMedia
        style={{height: 0, paddingTop: '100%'}}
        image={this.state.url}
        title={this.props.game.name}
      />
      : null }
      </div>
    )
  }
}

export default GameArt