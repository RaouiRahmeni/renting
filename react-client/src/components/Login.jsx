import React from 'react';
import axios from 'axios';
import $ from 'jquery';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }
    componentDidMount(){
        
        let image = document.getElementById('image')
        let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
        setInterval(function () {
          let random = Math.floor(Math.random() * 5)
          image.src = images[random]
        }, 1000)
      
    }
    handleChangeUserName(e) {
        this.setState({ username: e.target.value })
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    getUser() {
        axios.post('/api/renting/login', { username: this.state.username, password: this.state.password }).then(({ data }) => {


            if (data.length === 1) {

                this.props.changeId(data[0]._id)

                if ($('#hostlogin').is(':checked')) {
                    this.props.changeView('create')
                } else if ($('#visitorlogin').is(':checked')) {
                    this.props.changeView('search')
                } else if ($('#adminlogin').is(':checked')) {
                    this.props.changeView('admin')
                }
                this.props.changeIsLogin();
                
              
            }


        })
    }
    render() {
        return (

            <div>
                <div className="left-side">
                    <img id="image" className="image-login" src="./image1.jpg" ></img>
                </div>
                <div className="right-side">
                    <h2>Login</h2>
                    <div className="input-container">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field" type="text" placeholder="Username" name="usrnm"
                            onChange={this.handleChangeUserName.bind(this)} />
                    </div>



                    <div className="input-container">
                        <i className="fa fa-key icon"></i>
                        <input className="input-field" type="password" placeholder="Password" name="psw"
                            onChange={this.handleChangePassword.bind(this)} />
                    </div>
                    <div className='checkboxes'>
                        <input type="checkbox" id="hostlogin" name="host"
                        />
                        <label htmlFor="host">Host</label>

                        <input type="checkbox" id="visitorlogin" name="visitor"
                        />
                        <label htmlFor="host">Visitor</label>

                        <input type="checkbox" id="adminlogin" name="admin"
                        />
                        <label htmlFor="host">Admin</label>
                    </div>
                    <button type="submit" className="btn" id='loginbtn' onClick={() => this.getUser()}>Login</button>
                </div>


            </div>)
    }

}

export default Login;

