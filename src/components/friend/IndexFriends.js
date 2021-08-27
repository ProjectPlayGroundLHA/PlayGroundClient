import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexFriends } from '../../api/friend'
import { showFriendFailure } from '../AutoDismissAlert/messages'

class IndexFriends extends Component {
  constructor (props) {
    super(props)

    this.state = {
      friend: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexFriends(user)
      .then(res => this.setState({ locations: res.data.locations }))
      .catch((err) =>
        msgAlert({
          heading: 'Index failed :(',
          message: showFriendFailure + err.message,
          variant: 'danger'
        })
      )
  }

  // - render - display the movies in the state (optionally: loading message)
  render () {
    const { friend } = this.state
    if (friend === null) {
      return 'Loading...'
    }

    let friendJsx
    if (friend.length === 0) {
      friendJsx = 'Why don\'t you have any friends? Go out and make some!'
    } else {
      friendJsx = friend.map(friend => (
        <li key={friend._id}>
          <Link to={`/friends/${friend._id}`}>{friend.username}</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>All Friends:</h3>
        {friendJsx}
      </>
    )
  }
}

export default IndexFriends
