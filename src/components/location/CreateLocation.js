import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createLocation } from '../../api/location'
import { createLocationFailure } from '../AutoDismissAlert/messages'
import UpdatePopup from './UpdatePopup'

class CreateLocation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      description: '',
      coordinates: []
    }
  }

handleChange = (event) =>

  this.setState({
    location: this.props.address,
    description: event.target.value,
    coordinates: [this.props.lng, this.props.lat]
  })

onCreateLocation = (event) => {
  event.preventDefault()

  const { user, msgAlert, setAddress } = this.props

  const data = this.state

  // send api req to create location with data from create location form
  createLocation(data, user)
    // empty form fields
    .then(() => this.setState({ description: '' }))
    .then(setAddress())
    .then((res) => console.log('this is res in create location \n', res))
    .catch((err) => {
      msgAlert({
        heading: 'Location creation failed :(',
        message: createLocationFailure + err.message,
        variant: 'danger'
      })
      this.setState({ description: '' })
    })
}

render () {
  const { lat, lng, address, user, msgAlert } = this.props
  const { description } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-sm-8 mx-auto mt-5'>
        <Form onSubmit={this.onCreateLocation}>
          <h2>Create Location</h2>
          <p className='lat-long' >
            Longitude: {lng}<br />
            Latitude: {lat}</p>
          <Form.Group controlId='location'>
            <Form.Label>Drag and drop your pin to set a location.</Form.Label>
            <Form.Control
              size='sm'
              required
              type='text'
              name='location'
              value={address}
              placeholder='Location'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='description'>
            <br />
            <Form.Label variant='primary'>What makes this place so great?</Form.Label>
            <Form.Control
              size='sm'
              required
              name='description'
              value={description}
              type='text'
              placeholder='Description'
              onChange={this.handleChange}
            />
          </Form.Group>
          <br />
          <Button style={{
            backgroundColor: '#273238',
            borderColor: 'transparent',
            color: 'white'
          }}
          type='submit'>Add</Button> &nbsp;
          {/* <br /><br /><br /><br /> */}
          {/* <h2>Edit Location</h2><br /> */}
          <UpdatePopup style={{ color: 'white' }} user={user} msgAlert={msgAlert} />
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(CreateLocation)
