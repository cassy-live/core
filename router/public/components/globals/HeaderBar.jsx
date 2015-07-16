define(function(require) {

  var React = require('react');
  var ReactBootstrap = require('react-bootstrap');
  var ReactRouterBootstrap = require('react-router-bootstrap');

  var HeaderBar = React.createClass({

    render: function() {
      var Nav = ReactBootstrap.Nav;
      var Navbar = ReactBootstrap.Navbar;
      var NavItem = ReactBootstrap.NavItem;
      var DropdownButton = ReactBootstrap.DropdownButton;
      var MenuItem = ReactBootstrap.MenuItem;
      var user = this.props.user;

      var logo = (
          <span class="logo">
              <img src="favicon.ico" className="pull-left" />
              &nbsp;<a href="/">
                CassyHub
              </a>
          </span>
        );


      var NavItemLink = ReactRouterBootstrap.NavItemLink;

      if (user) {
        return (
          <Navbar brand={logo}>
            <Nav>
              <NavItemLink to="/">Home</NavItemLink>
              <DropdownButton eventKey={3} title='Content'>
                <NavItemLink to="/document/new">Create new document</NavItemLink>
                <MenuItem divider />
                <MenuItem eventKey='1'>Document 1</MenuItem>
                <MenuItem eventKey='2'>Document 2</MenuItem>
                <MenuItem eventKey='3'>Document 3</MenuItem>
              </DropdownButton>
              <DropdownButton eventKey={4} title='Account'>
                <MenuItem eventKey='1'>Settings</MenuItem>
                <MenuItem eventKey='2'>Change Password</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='3' href='/logout'>Logout</MenuItem>
              </DropdownButton>
              <NavItem eventKey={1} href='#'>Help</NavItem>
            </Nav>
          </Navbar>
        );
      } else {
        return (
          <Navbar brand='Cassy Hub'>
            <Nav>
              <NavItem eventKey={1} href='/'>Home</NavItem>
              <NavItem eventKey={1} href='/login'>Login</NavItem>
              <NavItem eventKey={1} href='/register'>Register</NavItem>
              <NavItem eventKey={1} href='/help'>Help</NavItem>
            </Nav>
          </Navbar>
        );
      }
    }

  });

  return HeaderBar;


});
