import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/mine",
              search: "?name=name",
              hash: "#the-hash",
              state: { fromDashboard: true }
            }}>Mine</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;