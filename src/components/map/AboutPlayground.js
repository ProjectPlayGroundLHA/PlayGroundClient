import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AboutPlayground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <Button
          style={{
            backgroundColor: "#273238",
            borderColor: "transparent",
            color: "white",
          }}
          onClick={this.handleShow}
        >
          About
        </Button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              The world is your <i>Playground</i>.
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              This app was built with the vision of connecting people across the
              world, sharing experiences and locations with each other, despite
              their distance. This is inspired by the founders, based in York
              and Israel.
              <br />
              <br />
              This is a full stack, interactive app with a Mapbox integration.
              We invite you to contribute to the project by visiting our open
              source repository{" "}
              <a href="https://github.com/ProjectPlayGroundLHA">linked here</a>.
              <br />
              <br />
              <i>
                Please note that Playground currently optimized for desktop
                interaction. Mobile interactions are still in development and
                should be ready shortly.
              </i>
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withRouter(AboutPlayground);
