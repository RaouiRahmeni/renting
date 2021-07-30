import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Search from './components/Search.jsx';
import Create from './components/Create.jsx';
import Admin from './components/Admin.jsx';
import Home from './components/Home.jsx';
import Favoris from './components/Favoris.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      id: "",
      isLoggedIn: false,
      isHost:false
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  handleLoginClick() {
    // this.setState({isLoggedIn: true});
    this.changeView('login')
  }
changeIsLogin(){
  this.setState({isLoggedIn: true});
}
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    this.changeView('logout')
    this.setState({isHost:false})
  }
  
  changeView(option) {
    this.setState({
      view: option,

    });
  }
  changeIsHost(){
    this.setState({isHost:true})
  }
  changeId(id) {
    this.setState({
      id: id,


    });
  }
  renderView() {
    const { view } = this.state;

    if (view === 'logout' || view === 'login') {
      return <Login changeView={this.changeView} changeId={this.changeId.bind(this)} changeIsLogin={this.changeIsLogin.bind(this)}/>

    } else if (view === 'signup') {
      return <Signup changeView={this.changeView} changeId={this.changeId.bind(this)} />
    } else if (view === 'search') {
     
      return <Search changeView={this.changeView} id={this.state.id} changeIsHost={this.changeIsHost.bind(this)}/>
    } else if (view === 'create') {
      return <Create id={this.state.id} />
    } else if (view === 'admin') {
      return <Admin id={this.state.id} changeView={this.changeView} />
    }else if (view === 'home') {
      return <Home   />
    }else if (view === 'favoris') {
      return <Favoris  id={this.state.id} changeIsHost={this.changeIsHost.bind(this)}/>
    }


  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isHost=this.state.isHost;
    return (
      <div>
        <div className="nav">
          <span className="logo"      
            >
              <div >
              <i className="fa fa-gg-circle" ></i>
              New Way
              </div>
            
          </span>

          

        
      {isHost
        ? <span  className="nav-unselected" onClick={() => this.changeView('favoris')}>
        Favoris
        </span>
        :<span></span>
      }
      {isHost
        ? <span  className="nav-unselected" onClick={() => this.changeView('search')}>
        Announcements
        </span>
        :<span></span>
      }
      {isLoggedIn
      ?<span></span>
      :<span className="nav-unselected" onClick={() => this.changeView('signup')}>
      Register
    </span>
  }
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
