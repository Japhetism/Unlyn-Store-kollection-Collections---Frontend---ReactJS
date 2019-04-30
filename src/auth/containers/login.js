import React, { Component } from 'react';

class Login extends Component {
    
  render() {
    return (      
        <section className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                                <input type="email" className="form-control" placeholder="" /> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                <input type="password" className="form-control" placeholder="" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <a href="/forgot-password"><small>Forgot Password?</small></a>
                                </label>
                                <button type="submit" className="btn btn-login float-right">Submit</button>
                            </div>
                        </form>
                        <div className="copy-text">Zemprom</div>
		            </div>
                    <div className="col-md-8 banner-sec">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className="banner-text">
                                            <h2>This is Zemprom</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                        </div>	
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className="banner-text">
                                            <h2>This is Zemprom</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                        </div>	
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className="banner-text">
                                            <h2>This is Zemprom</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Login;
