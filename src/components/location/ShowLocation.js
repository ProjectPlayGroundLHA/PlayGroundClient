import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// API request
import { showLocation, deleteLocation } from "../../api/location";
import { showLocationFailure } from "../AutoDismissAlert/messages";
import Button from "react-bootstrap/Button";

class ShowLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
    };
  }

  componentDidMount() {
    const { match, user, msgAlert } = this.props;

    showLocation(match.params.id, user)
      .then((res) => this.setState({ location: res.data.location }))
      .catch((err) =>
        msgAlert({
          heading: "Show location failed :(",
          message: showLocationFailure + err.message,
          variant: "danger",
        })
      );
  }

  handleDelete = (event) => {
    const { match, user, history } = this.props;
    deleteLocation(match.params.id, user)
      // Redirect to the list of locations
      .then(() => history.push("/map/locations"))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.location === null) {
      return "Loading...";
    }

    // Get the owner (a user id) from the movie state
    const { location, description, owner } = this.state.location;
    const { user, history, match } = this.props;
    // history, match

    return (
      <>
        <h3>Show One Location</h3>
        <h5>{location}</h5>
        <p>Where? Here - {description}</p>
        {user._id === owner && (
          <>
            <Button onClick={this.handleDelete}>Delete</Button>
            {/* <Button>
              <Link to={`/locations/${match.params.id}/edit`}>Update</Link>
            </Button> */}

            <Button
              onClick={() =>
                history.push(`/map/locations/${match.params.id}/edit`)
              }
            >
              Update
            </Button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(ShowLocation);
