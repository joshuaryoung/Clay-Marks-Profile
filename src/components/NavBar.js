import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar as BSNavBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import withSizes from 'react-sizes';

class NavBar extends Component {

  constructor(props)
  {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state =
    {
      links: [],
      collapsed: true
    };
  }

  toggleNavbar()
  {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentWillMount()
  {
    this.setState({links: [
      {
        title: 'HOME',
        href: '/Home',
        class: 'navBarHome nav-link',
        id: 0
      },
      {
        title: 'SCREEN',
        href: '/Screen',
        class: 'nav-link',
        id: 1
      },
      {
        title: 'PAGE',
        href: '/Page',
        class: 'nav-link',
        id: 2
      },
      {
        title: 'STAGE',
        href: '/Stage',
        class: 'nav-link',
        id: 3
      },
      {
        title: 'VERSE',
        href: '/LGD',
        class: 'nav-link',
        id: 4
      },
      {
        title: 'CONTACT',
        href: '/Contact',
        class: 'nav-link',
        id: 5
      }
    ]});
  }

  render()
  {
    var jsxLinks = this.state.links.map((x) =>
      <NavItem active key={x.id}>
        <NavLink to={x.href} className = {x.class} activeClassName = "isActiveLink" onClick = {this.props.isMobile ? this.toggleNavbar : null}>{x.title}</NavLink>
      </NavItem>
    );

    return (
      <BSNavBar dark expand = "lg" className = "rounded col-12 Nav-Bar-Home">
        <div id="Nav-Bar-Inner-Container">
          <NavbarBrand><NavLink to = "/Home" activeClassName = "isActiveLink">Clay Marks</NavLink></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav id="nav-ul">
              {jsxLinks}
            </Nav>
          </Collapse>
        </div>
      </BSNavBar>
    );
  }
}

const mapSizesToProps = sizes => ({
   isMobile: withSizes.isMobile(sizes),
   sizes: sizes
  });

export default withSizes(mapSizesToProps)(NavBar);
