import React from 'react'
import NavBar from './components/Navbar'
import SearchList from './components/SearchList.jsx'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import GameList from './components/GameList.jsx'
// import Profile from './components/Profile'
// import PrivateRoute from './components/PrivateRoute'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results : []
    }

    this.handleResults = this.handleResults.bind(this)
  }

  handleResults(results) {
    // this.setState({
    //   results,
    // })
  }

  render() {
    return (
      <div className='App'>
        <NavBar handler={this.handleResults} />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact />
            <Route path='/list' component={GameList} />
            <Route path='/search/:query' component={SearchList} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App