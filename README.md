# exlang.io
******
# future - add SSL before final release

/client - react application

	App.jsx - main jsx file from which all components are routed

	/api - self-explanatory
	
	/build - transpiled jsx/es6 to js
	
	/components - react components - subfolders contain page specific
	
	/redux - redux action creators / reducers
	

/server - express application

	/views - html views - simplified greatly w/ react components, only serves up the homepage which react attaches itself to. 

	/routes - express routers, mostly APIs called from react

	/models - mongoose models


TO DO
******
profiles

	picture uploads - need to finish express profile image resizer /thumbnail creation -- use ffmpeg
	contact info - social media inputs

dashboard

	friends pane - online, last online 
	recent activity - latest blogs from friends

account settings

	edit password
	edit site language	
	delete account

user stats

	last online

blogs
	
	function similar to messages - allow user responses and responses to comments ; essentially have the functionality of a 'thread'

not urgent: 
	
	SSL
	TOS
