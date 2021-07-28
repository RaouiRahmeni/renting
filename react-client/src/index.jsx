import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Search from './components/Search.jsx';
import Create from './components/Create.jsx';
import Admin from './components/Admin.jsx';
import Home from './components/Home.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      id: "",
      isLoggedIn: false
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
    this.changeView('login')
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    this.changeView('logout')
  }
  changeView(option) {
    this.setState({
      view: option,

    });
  }
  changeId(id) {
    this.setState({
      id: id,


    });
  }
  renderView() {
    const { view } = this.state;

    if (view === 'logout' || view === 'login') {
      return <Login changeView={this.changeView} changeId={this.changeId.bind(this)} />

    } else if (view === 'signup') {
      return <Signup changeView={this.changeView} changeId={this.changeId.bind(this)} />
    } else if (view === 'search') {
      return <Search changeView={this.changeView} />
    } else if (view === 'create') {
      return <Create id={this.state.id} />
    } else if (view === 'admin') {
      return <Admin id={this.state.id} changeView={this.changeView} />
    }else if (view === 'home') {
      return <Home   />
    }

  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <div className="nav">
          <span className="logo"
            >
            New Way
          </span>

          <span className="nav-unselected" onClick={() => this.changeView('signup')}>
            Register
          </span>

          {isLoggedIn
        ? <span  className="nav-unselected" onClick={this.handleLogoutClick}>
        Logout
        </span>
        : <span  className="nav-unselected"  onClick={this.handleLoginClick}>
        Login
        </span>
      }
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('renting'));
