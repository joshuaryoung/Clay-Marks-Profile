import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBarScreen extends Component {

  constructor(props)
  {
    super(props);

    this.state =
    {
      links: []
    };
  }

  componentWillMount()
  {
    this.setState({links: [
      {
        title: 'HOME',
        href: '/',
        class: 'nav-item active navBarHome',
        id: 0
      },
      {
        title: 'SCREEN',
        href: '/Screen',
        class: 'nav-item active',
        id: 1
      },
      {
        title: 'PAGE',
        href: '/Page',
        class: 'nav-item active',
        id: 2
      },
      {
        title: 'STAGE',
        href: '/Stage',
        class: 'nav-item active',
        id: 3
      },
      {
        title: 'VERSE',
        href: '/LGD',
        class: 'nav-item active',
        id: 4
      },
      {
        title: 'CONTACT',
        href: '/Contact',
        class: 'nav-item active',
        id: 5
      }
    ]});
  }

  render() {
    var jsxLinks = this.state.links.map((x) =>
      <li className = {x.class}>
        <NavLink className = "nav-link" to={x.href} activeClassName = "isActiveLink">{x.title}</NavLink>
      </li>
    );

    return (
      <nav className =  "navbar navbar-expand-lg navbar-dark rounded col-12 Nav-Bar-Screen" id="Nav-Bar">
        <div id="Nav-Bar-Inner-Container">
          <div className = "navbar-brand"><a className = "nav-link" href="/">Clay Marks</a></div>
          <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="null" aria-label="Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>

          <div className = "collapse navbar-collapse" id="navbarContent">
            <ul className = "navbar-nav" id="nav-ul">
              {jsxLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBarScreen;
