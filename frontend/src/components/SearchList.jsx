import React from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import config from '../config'

import Game from './Game'

async function getResults(query, callback) {
  return await axios.get(config.api.local.urls.search + query)
    .then((res) => {
      const games = res.data.map((game) => {
        return {
          title: game.name,
          description: game.summary,
          ...game
        }
      })
      callback(games)
    })
}

class SearchList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results : []
    }

    this.setState.bind(this)
  }

  componentWillMount() {
    this.props.history.listen(() => {
      this.getAllResults()
    });
  }

  componentDidMount() {
    this.getAllResults()
  }

  getAllResults() {
    const query = this.props.match.params.query
    getResults(query, (results) => {
      this.setState({
        results
      })
    })
  }

  render() {
    return (
      <Grid container spacing={10} style={{padding: '24px'}}>
        {this.state.results ? this.state.results.map((game) => {
          return <Grid key={game.id} item xs={12} sm={6} lg={4} xl={3}>
            <Game game={game}/>
          </Grid>
        }) : null}
      </Grid>
    )
  }
}

export default SearchList