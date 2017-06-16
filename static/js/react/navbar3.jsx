const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} = ReactBootstrap;

class NavbarInstance extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">exlang</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/community">Community</NavItem>
          <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href='/profile'>Profile View</MenuItem>
            <MenuItem eventKey={3.2} href='/friends'>Friends</MenuItem>
            <MenuItem eventKey={3.3} href='/messages'>Messages</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} href='/logout'>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavbarInstance></NavbarInstance>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('NavContainer'));
