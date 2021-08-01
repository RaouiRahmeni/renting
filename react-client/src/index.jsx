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
import BookingVisitor from './components/BookingVisitor.jsx';
import Host from './components/Host.jsx';
import HistoricHost from './components/HistoricHost.jsx';
import UpdateAnnouncement from './components/UpdateAnnouncement.jsx'
import axios from 'axios';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      id: "",
      isLoggedIn: false,
      isHost: false,
      isVisitor: false,
      announcement: {},
      anouncementToUpdate: {}
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  handleLoginClick() {
    // this.setState({isLoggedIn: true});
    this.changeView('login')
  }
  changeIsLogin() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    this.changeView('logout')
    this.setState({ isHost: false })
  }

  changeView(option) {
    this.setState({
      view: option,

    });
  }
  getAnnouncement(announcement) {
    this.setState({
      announcement: announcement,

    });
  }
  changeIsHost() {
    this.setState({ isHost: true })
  }
  changeIsVisitor() {
    this.setState({ isVisitor: true })
  }
  changeId(id) {
    this.setState({
      id: id,


    });
  }
  changeAnnouncementToUpdate(announcement) {
    this.setState({ anouncementToUpdate: announcement })
  }
  renderView() {
    const { view } = this.state;

    if (view === 'logout' || view === 'login') {
      return <Login changeView={this.changeView} changeId={this.changeId.bind(this)} changeIsLogin={this.changeIsLogin.bind(this)} />

    } else if (view === 'signup') {
      return <Signup changeView={this.changeView} changeId={this.changeId.bind(this)} />
    } else if (view === 'search') {

      return <Search changeView={this.changeView} id={this.state.id}
        changeIsVisitor={this.changeIsVisitor.bind(this)} getAnnouncement={this.getAnnouncement.bind(this)} />
    } else if (view === 'create') {
      return <Create id={this.state.id} changeView={this.changeView} changeIsHost={this.changeIsHost.bind(this)} />
    } else if (view === 'admin') {
      return <Admin id={this.state.id} changeView={this.changeView} />
    } else if (view === 'home') {
      return <Home />
    } else if (view === 'favoris') {
      return <Favoris id={this.state.id} changeIsVisitor={this.changeIsVisitor.bind(this)} />
    } else if (view === 'bookingvisitor') {
      return <BookingVisitor id={this.state.id} announcement={this.state.announcement} changeIsVisitor={this.changeIsVisitor.bind(this)} />
    } else if (view === 'host') {
      return <Host changeView={this.changeView}
      changeAnnouncementToUpdate={this.changeAnnouncementToUpdate.bind(this)} 
      id={this.state.id}
        changeView={this.changeView} changeIsHost={this.changeIsHost.bind(this)} />
    } else if (view === 'historichost') {
      return <HistoricHost id={this.state.id} changeView={this.changeView} changeIsHost={this.changeIsHost.bind(this)} />
    } else if (view === 'updateannouncement') {
      return <UpdateAnnouncement announcement={this.state.anouncementToUpdate} id={this.state.id} changeView={this.changeView} changeIsHost={this.changeIsHost.bind(this)} />
    }


  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isHost = this.state.isHost;
    const isVisitor = this.state.isVisitor;
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
            ? <span className="nav-unselected" onClick={() => this.changeView('host')}>
              My Announcements
            </span>
            : <span></span>
          }
          {isHost
            ? <span className="nav-unselected" onClick={() => this.changeView('create')}>
              Create
            </span>
            : <span></span>
          }
          {isHost
            ? <span className="nav-unselected" onClick={() => this.changeView('historichost')}>
              Historic
            </span>
            : <span></span>
          }

          {isVisitor
            ? <span className="nav-unselected" onClick={() => this.changeView('favoris')}>
              Favourites
            </span>
            : <span></span>
          }
          {isVisitor
            ? <span className="nav-unselected" onClick={() => this.changeView('search')}>
              Announcements
            </span>
            : <span></span>
          }

          {isLoggedIn
            ? <span></span>
            : <span className="nav-unselected" onClick={() => this.changeView('signup')}>
              Register
            </span>
          }

          {isLoggedIn
            ? <span className="nav-unselected" onClick={this.handleLogoutClick}>
              Logout
            </span>
            : <span className="nav-unselected" onClick={this.handleLoginClick}>
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
