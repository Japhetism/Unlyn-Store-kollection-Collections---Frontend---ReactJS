import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { Button } from 'react-bootstrap';
import Navigation from '../components/Navigation';

class NewCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
      collections: [],
      activeLink: 'viewcollection',
      name: '',
      description: '',
      price: '',
      category: '',
      photo: '',
      color: '',
      displaySuccess: false,
      displayError: false,
      errorMessage: '',
      successMessage: '',
      formError: [],
      uploadedFile: null,
    };
  }

  _updateFieldChanges = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  _fileChangedHandler = event => {
    this.setState({ 
      photo: event.target.files[0],
      uploadedFile: URL.createObjectURL(event.target.files[0]),
    })
  } 

  _validateFields = () => {
    this.setState({
      formError: [],
      displayError: false,
      displaySuccess: false,
      errorMessage: '',
      successMessage: '',
    })  
    let errorArray = [];
    if(this.state.name === ""){
      errorArray['name'] = "Name is required";
      this.setState({formError: errorArray})
    }
    if(this.state.price === ""){
      errorArray['price'] = "Price is required";
      this.setState({formError: errorArray})
    }
    if(this.state.category === ""){
      errorArray['category'] = "Category is required";
      this.setState({formError: errorArray})
    }
    if(this.state.description === ""){
      errorArray['description'] = "Description is required";
      this.setState({formError: errorArray})
    }
    if(this.state.color === ""){
      errorArray['color'] = "Color is required";
      this.setState({formError: errorArray})
    }
    if(this.state.photo === ""){
      errorArray['photo'] = "Photo is required";
      this.setState({formError: errorArray})
    }

    if(Object.keys(errorArray).length === 0){
      this._saveNewCollection();
    }
  }

  _saveNewCollection = () => {
    const data = new FormData()
    data.append('image', this.state.photo, this.state.photo.name);
    data.append('name', this.state.name);
    data.append('description', this.state.description);
    data.append('category', this.state.category);
    data.append('color', this.state.color);
    data.append('price', this.state.price);
   
    axios.post('http://localhost:4000/api/collections', data)
    .then(function (response) {
      document.location = "/collections";
    }.bind(this)).catch(function(error) {
      this.setState({
        errorMessage: "Something went wrong with this page",
        displayError: true,
      });
  }.bind(this))
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
            <div className="col-sm-4">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this._updateFieldChanges}
                />
                <span style={{color: 'red'}}>{this.state.formError.name}</span>
              </div><br/>
              <div>
                <label>Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="7"
                  cols="60"
                  onChange={this._updateFieldChanges}
                />
                <span style={{color: 'red'}}>{this.state.formError.description}</span>
              </div><br/>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  onChange={this._updateFieldChanges}
                />
                <span style={{color: 'red'}}>{this.state.formError.price}</span>
              </div><br/>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  onChange={this._updateFieldChanges}
                />
                <span style={{color: 'red'}}>{this.state.formError.category}</span>
              </div><br/>
              <div>
                <label>Photo</label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  onChange={this._fileChangedHandler}
                />
                <span style={{color: 'red'}}>{this.state.formError.photo}</span>
              </div><br/>
              <div>
                <label>Color</label>
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  onChange={this._updateFieldChanges}
                />
                <span style={{color: 'red'}}>{this.state.formError.color}</span>
              </div><br/>
              <Button type="btn btn-primary btn-sm" onClick={this._validateFields}>Save</Button>
            </div>
            {this.state.uploadedFile ? 
            <div className="col-md-4">
              <img 
                src={this.state.uploadedFile}
                className="uploaded-photo"
                alt={this.state.uploadedFile}
              />
            </div>
            : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default NewCollection;
