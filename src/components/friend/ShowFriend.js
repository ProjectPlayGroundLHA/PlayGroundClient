import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { showFriend, deleteFriend } from '../../api/friend'
import { showFriendFailure } from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'

class ShowFriend extends Component {
  constructor (props) {
    super(props)

    this.state = {
      friends: []
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showFriend(match.params.id, user)
      .then((res) => this.setState({ friends: res.data.friends }))
      .catch((err) =>
        msgAlert({
          heading: 'Unable to Show Friend :(',
          message: showFriendFailure + err.message,
          variant: 'danger'
        })
      )
  }

  handleDelete = (event) => {
    const { match, user, history } = this.props
    deleteFriend(match.params.id, user)
    // Redirect to the list of friends
      .then(() => history.push('/friends'))
      .catch((err) => console.log(err))
  }

  render () {
    if (this.state.friends === null) {
      return 'Loading...'
    }
    const { friends, location, owner } = this.state
    const { user, history, match } = this.props

    return (
      <>
        <h3>Show One Location</h3>
        <h5>{friends}</h5>
        <p>Where? Here - {location}</p>
        {user._id === owner && (
          <>
            <Button onClick={this.handleDelete}>Delete</Button>
            <Button
              onClick={() => history.push(`/friends/${match.params.id}/edit`)}>
              Update
            </Button>
          </>
        )}
      </>
    )
  }
}

export default withRouter(ShowFriend)
