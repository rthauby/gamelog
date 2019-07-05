import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class GameList extends Component {

  componentDidMount() {
    axios.get(window.gl.api.steam.urls.ownedGames)
      .then((res) => console.log)
  }

  static propTypes = {
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
