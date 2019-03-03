import React, { Component } from 'react';
import { Navbar, Nav, Alert } from 'react-bootstrap';

class Navigation extends Component {
  
  render() {
    const displaySuccess = this.props.displaySuccess;
    const displayError = this.props.displayError;
    const errorMessage = this.props.errorMessage;
    const successMessage = this.props.successMessage;
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/collections">Unlyn Store kollection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/collections">Collections</Nav.Link>
              <Nav.Link href="/collections/new">New</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {displaySuccess ? 
          <Alert variant="success">
            <p className="mb-0">
              {successMessage}
            </p>
          </Alert>
        : ''}
        {displayError ? 
          <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p className="mb-0">
              {errorMessage}
            </p>
          </Alert>
        : ''}
      </div>
    );
  }
}

export default Navigation;
