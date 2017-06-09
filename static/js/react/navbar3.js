const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} = ReactBootstrap;

class NavbarInstance extends React.Component {
  render() {
    return React.createElement(
      Navbar,
      null,
      React.createElement(
        Navbar.Header,
        null,
        React.createElement(
          Navbar.Brand,
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Project Name Here"
          )
        )
      ),
      React.createElement(
        Nav,
        null,
        React.createElement(
          NavItem,
          { eventKey: 1, href: "/" },
          "Home"
        ),
        React.createElement(
          NavItem,
          { eventKey: 2, href: "/community" },
          "Community"
        ),
        React.createElement(
          NavDropdown,
          { eventKey: 3, title: "Profile", id: "basic-nav-dropdown" },
          React.createElement(
            MenuItem,
            { eventKey: 3.1, href: "/profile" },
            "Profile View"
          ),
          React.createElement(
            MenuItem,
            { eventKey: 3.2, href: "/friends" },
            "Friends"
          ),
          React.createElement(
            MenuItem,
            { eventKey: 3.3, href: "/messages" },
            "Messages"
          ),
          React.createElement(MenuItem, { divider: true }),
          React.createElement(
            MenuItem,
            { eventKey: 3.3, href: "/logout" },
            "Logout"
          )
        )
      )
    );
  }
}

class App extends React.Component {
  render() {
    return React.createElement(NavbarInstance, null);
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('NavContainer'));

