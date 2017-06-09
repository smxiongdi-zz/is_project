// create classes
var NavBar = React.createClass({
  render: function () {
    return React.createElement(
      "nav",
      { className: "navbar navbar-inverse" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar-collapse", "aria-expanded": "false" },
            React.createElement(
              "span",
              { className: "sr-only" },
              "Toggle navigation"
            ),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          React.createElement(NavBrand, { linkTo: this.props.brand.linkTo, text: this.props.brand.text })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbar-collapse" },
          React.createElement(NavMenu, { links: this.props.links })
        )
      )
    );
  }
});

var NavBrand = React.createClass({
  render: function () {
    return React.createElement(
      "a",
      { className: "navbar-brand", href: this.props.linkTo },
      this.props.text
    );
  }
});

var NavMenu = React.createClass({
  render: function () {
    var links = this.props.links.map(function (link) {
      if (link.dropdown) {
        return React.createElement(NavLinkDropdown, { links: link.links, text: link.text, active: link.active });
      } else {
        return React.createElement(NavLink, { linkTo: link.linkTo, text: link.text, active: link.active });
      }
    });
    return React.createElement(
      "ul",
      { className: "nav navbar-nav" },
      links
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function () {
    var active = false;
    var links = this.props.links.map(function (link) {
      if (link.active) {
        active = true;
      }
      return React.createElement(NavLink, { linkTo: link.linkTo, text: link.text, active: link.active });
    });
    return React.createElement(
      "li",
      { className: "dropdown " + (active ? "active" : "") },
      React.createElement(
        "a",
        { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
        this.props.text,
        React.createElement("span", { className: "caret" })
      ),
      React.createElement(
        "ul",
        { className: "dropdown-menu" },
        links
      )
    );
  }
});

var NavLink = React.createClass({
  render: function () {
    return React.createElement(
      "li",
      { className: this.props.active ? "active" : "" },
      React.createElement(
        "a",
        { href: this.props.linkTo },
        this.props.text
      )
    );
  }
});

// set data
var navbar = {};
navbar.brand = { linkTo: "#", text: "project" };
navbar.links = [{ linkTo: "#", text: "Community" },
// {linkTo: "#", text: "Link 2"},
{ dropdown: true, text: "Profile", links: [{ linkTo: "#", text: "Browse" }, { linkTo: "#", text: "Profile", active: true }] }];

// render NavBar
ReactDOM.render(React.createElement(NavBar, navbar), document.getElementById("navbar"));

