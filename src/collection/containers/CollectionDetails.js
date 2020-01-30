import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import '../../App.css';

class CollectionDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      collection: [],
      photo: '',
      displaySuccess: false,
      displayError: false,
      errorMessage: '',
      successMessage: '',
    }
  }

  componentDidMount(){
    const id = localStorage.getItem('collectionId');
    this._getCollection(id);
  }

  _getCollection = (id) => {
    axios.get('http://localhost:4000/api/collections/'+id)
    .then(function (response) {
      let collection = response.data
      this.setState({
        collection,
        photo: "http://localhost:4000/images/uploads/"+collection.image,
      })
    }.bind(this)).catch(error=>{this.setState({
      errorMessage: "Something went wrong with this page",
      displayError: true,
    })});
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
            <div className="col-md-5 Shoe-div">
              {this.state.collection.image ? 
                <img
                  src={this.state.photo}
                  alt={this.state.collection.name}
                  className="myShoe"
                />
              : ''}
            </div>
            <div className="col-md-5 text-div">
              <span ><h4 className="shoe-name">{this.state.collection.name}</h4></span>
              <span className="shoe-category"><strong>{this.state.collection.category}</strong></span><br/>
              <p className="shoe-description">{this.state.collection.description}</p><br/><br/>
              {this.state.collection.color ? <span className="shoe-color"><strong>color:</strong>&nbsp;{this.state.collection.color}</span>: ''}<br/><br/><br/>
              {this.state.collection.price ? <span className="shoe-price">&#8358;{this.state.collection.price}</span> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionDetails;
