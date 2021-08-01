import React from 'react';
import axios from 'axios';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (

            <div className="home">
                <h1>Welcome to your New Way of accomodation!</h1>
                <div className="home-img">
                    <img src="home.jpg" />
                </div>
                <div>
                    <h3>About us</h3>
                    <div className="persons">

                        <div className="card-person">
                            <img src="hana.jpg"></img>
                            <div>
                                <h6>Hana Jarraya</h6>
                                <b>hanaajarraya@gmail.com</b>
                            </div>
                        </div>
                        <div className="card-person">
                            <img src="image2.jpg"></img>
                            <div>
                                <h6>Raoui</h6>
                                <b>@gmail.com</b>
                            </div>
                        </div>
                        <div className="card-person">
                            <img src="image2.jpg"></img>
                            <div>
                                <h6>Majdi</h6>
                                <b>@gmail.com</b>
                            </div>
                        </div>
                        <div className="card-person">
                            <img src="image2.jpg"></img>
                            <div>
                                <h6>Nidhal</h6>
                                <b>@gmail.com</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }

}

export default Home;
