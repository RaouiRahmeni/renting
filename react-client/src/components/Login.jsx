import React from 'react';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

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
                this.props.changeView('create')
            }



        })
    }
    render() {
        return (

            <div>
                <div className="left-side">
<h1></h1>
                </div>
                <div className="right-side">
                    <h2>login</h2>
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

                    <button type="submit" className="btn" onClick={() => this.getUser()}>Register</button>
                </div>


            </div>)
    }

}

export default Login;
