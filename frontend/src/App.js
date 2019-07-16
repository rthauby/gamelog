import React from 'react'
import NavBar from './components/Navbar'
import SearchList from './components/SearchList.jsx'
import './index.css'

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

    this.handleQuery = this.handleQuery.bind(this)
  }

  handleQuery(query, history) {
    history.push('/search/' + query)
  }

  render() {
    return (
      <div className='App'>

        <BrowserRouter>
          <Route path='/' render={(props) => <NavBar {...props} handler={this.handleQuery} />} />
          <Switch>
            <Route path='/' exact component={GameList} />
            <Route path='/search/:query' render={(props) => <SearchList {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App