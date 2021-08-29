import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() => history.push('/map'))
    .catch((error) => {
      this.setState({ username: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { username, password } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={this.onSignIn}>
          <Form.Group controlId='username'>
            <Form.Label>username address</Form.Label>
            <Form.Control
              required
              type='username'
              name='username'
              value={username}
              placeholder='Enter username'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(SignIn)
