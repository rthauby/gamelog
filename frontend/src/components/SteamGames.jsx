import React, { Component } from 'react'
import axios from 'axios'

import config from '../config'

export default class SteamGames extends Component {

  componentDidMount() {
    axios.get(config.api.steam.urls.ownedGames)
      .then((res) => {
        console.log(res)
      })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
