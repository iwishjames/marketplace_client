import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "../styling/dashboard.css";


class Dashboard extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="dashboardCards">
        <h1>Dashboard</h1>
        <p><Link to="/myneed">New Need</Link></p>
          <div className="needsCards">
          <NeedsList />
          <p><Link to="/myoffer">My Offer</Link></p>
          </div>
      </div>
    )
  };
}


class NeedsList extends Component {

  render() {
    return(
      <h3>List of Needs</h3>
    );
  }
}

export default Dashboard;
