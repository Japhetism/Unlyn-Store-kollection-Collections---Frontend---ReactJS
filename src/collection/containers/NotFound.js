import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import '../../App.css';

class NotFound extends Component {
  constructor(props){
    super(props);
    this.state = {
      displaySuccess: false,
      displayError: false,
      errorMessage: '',
      successMessage: '',
    }
  }
  
  render() {
    return (
      <div>
        <Navigation 
          displayError = {this.state.displayError}
          displaySuccess = {this.state.displaySuccess}
          errorMessage = {this.state.errorMessage}
        />
        <div className="container-fluid">
          <div className="row">
            <h1 className="error">
                404<br/>
                Page not found
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
