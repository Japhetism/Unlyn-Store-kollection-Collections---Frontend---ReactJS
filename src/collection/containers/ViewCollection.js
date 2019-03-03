import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import '../../App.css';

class ViewCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
      collections: [],
      displaySuccess: false,
      displayError: false,
      errorMessage: '',
      successMessage: '',
    }
  }

  componentDidMount(){
    this._getAllCollections();
  }

  _getAllCollections = () => {
    axios.get('http://localhost:4000/api/collections')
    .then(function (response) {
      let collections = response.data
      this.setState({collections})
    }.bind(this)).catch(error=>{this.setState({
      errorMessage: "Something went wrong with this page",
      displayError: true,
    })});
  }

  _viewCollection = (id) => {
    console.log(id);
    localStorage.setItem('collectionId', id);
    document.location.href = "/collections/details";
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
        {this.state.collections.map(details=>{
              let photo = "http://localhost:4000/images/uploads/"+details.image;
              return(
                <div key={details._id} className="col-md-3 Shoe-div">
                  <a href="#" onClick={this._viewCollection.bind(this, details._id)}>
                  <img
                    src={photo}
                    alt={details.name}
                    className="Shoe-category"
                  />
                  <br/>
                  <strong>
                    {details.name} - &#8358;{details.price}
                  </strong>
                  </a>
                </div>
              )
            })}
            </div>
            </div>
      </div>
    );
  }
}

export default ViewCollection;
