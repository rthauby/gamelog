import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  handleChangeQuery(e) {

  }

  render() {
    return (
      <div>
        <TextField
          id='standard-name'
          label='Search'
          onChange={this.handleChangeQuery}
          margin='normal'
        />
        <Button variant='contained' color='primary'>Go</Button>
      </div>
    )
  }
}
