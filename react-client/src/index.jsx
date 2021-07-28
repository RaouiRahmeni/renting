import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';


import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'login',
      id:""
      
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
      
    });
  }
  changeId(id) {
    this.setState({
      id:id,
      
    });
  }
  renderView() {
    const { view } = this.state;

    if (view === 'logout' || view === 'login') {
      return <Login changeView={this.changeView} changeId={this.changeId.bind(this)} />
    
    }else if (view === 'signup') {
      return <Signup changeView={this.changeView} changeId={this.changeId.bind(this)} />
    }

  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('login')}>
            NeWay
          </span>

          <span className="nav-unselected" onClick={() => this.changeView('signup')}>
            Register
          </span>

          <span className="nav-unselected" onClick={() => this.changeView('logout')}>
            Logout
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('renting'));
