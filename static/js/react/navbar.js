var Navbar = React.createClass({
	render: function () {
		return React.createElement(
			"nav",
			{ "class": "navbar navbar-toggleable-md navbar-light bg-faded" },
			React.createElement(
				"button",
				{ "class": "navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" },
				React.createElement("span", { "class": "navbar-toggler-icon" })
			),
			React.createElement(
				"a",
				{ "class": "navbar-brand", href: "#" },
				"Navbar"
			),
			React.createElement(
				"div",
				{ "class": "collapse navbar-collapse", id: "navbarNavDropdown" },
				React.createElement(
					"ul",
					{ "class": "navbar-nav" },
					React.createElement(
						"li",
						{ "class": "nav-item active" },
						React.createElement(
							"a",
							{ "class": "nav-link", href: "#" },
							"Home ",
							React.createElement("span", { "class": "sr-only" })
						)
					),
					React.createElement(
						"li",
						{ "class": "nav-item" },
						React.createElement(
							"a",
							{ "class": "nav-link", href: "#" },
							"Community"
						)
					),
					React.createElement(
						"li",
						{ "class": "nav-item dropdown" },
						React.createElement(
							"a",
							{ "class": "nav-link dropdown-toggle", href: "http://example.com", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
							"Profile"
						),
						React.createElement(
							"div",
							{ "class": "dropdown-menu", "aria-labelledby": "navbarDropdownMenuLink" },
							React.createElement(
								"a",
								{ "class": "dropdown-item", href: "#" },
								"Action"
							),
							React.createElement(
								"a",
								{ "class": "dropdown-item", href: "#" },
								"Another action"
							),
							React.createElement(
								"a",
								{ "class": "dropdown-item", href: "#" },
								"Something else here"
							)
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Navbar, null), document.getElementById('NavContainer'));

