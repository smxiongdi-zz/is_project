# exlang.io
******
# future - add SSL before final release

/client - react application

# need to implement redux state container - done

	App.jsx - main jsx file from which all components are routed
	
	/build - transpiled jsx/es6 to js
	
	/components - react components - subfolders contain page specific
	

/server - express application

	/views - html views - simplified greatly w/ react components, only serves up the homepage which react attaches itself to. 

	/routes - express routers, mostly APIs called from react

	/models - mongoose models


TO DO
******
profiles
	<strike>edit profile view / APIs</strike>
		picture uploads - need to finish express profile image resizer /thumbnail creation
	<strike>view profile / url params to get ID num</strike>
	
community
	<strike>search view / url params to retrieve list</strike>

accounts
<strike>	captcha for registration, re-enable email sending on production</strike>
