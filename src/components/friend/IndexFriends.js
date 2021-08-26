import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexFriends } from '../../api/friend'
import { showFriendFailure } from '../AutoDismissAlert/messages'

class IndexFriends extends Component {
  constructor (props) {
    super(props)

    this.state = {
      friends: ''
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexFriends(user)
      .then(res => this.setState({ friends: res.data.friends }))
      .catch((err) =>
        msgAlert({
          heading: 'Unable to show Index of Friends :(',
          message: showFriendFailure + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const { friends } = this.state
    if (friends === null) {
      return 'Loading...'
    }

    let FriendJsx = ''
    if (friends.length === 0) {
      FriendJsx = 'Why don\'t you have any friends? Go out and make some!'
    } else {
      FriendJsx = friends.map(friend => (
        <li key={friend.username}>
          <Link to={`/friends/${friend._id}`}>{friend.username}</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>All My Friends:</h3>
        {FriendJsx}
      </>
    )
  }
}

export default IndexFriends
