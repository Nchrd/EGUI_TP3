# [EGUI] TP3 - ReactJS

## Task 3: Blog application in React
- Please write simple Blog Application using React.js (under linux - should work on CS101 lab computer)
- Data should be stored in text file (in *.json format). You can use json-server for that but It will cost 3 points.
- Please use Bootstrap for GUI design

### Application should store:
- for the users:
	- userId - unique user id - text obtained from the user during user registration
	- email - e-mail address of the user
	- password - password provided by the user
- for the blogs:
	- id - unique blog identifier (text, provided by the blog creator)
	- title - blog title
	- ownerId - id of the blog owner (creator of the blog)
	- list of items: for each of them
		- title: one line of text
		- id: userID of the publishing author
		- datetime: exact time of publication (set automatically from the system time)
		- content: content of the publication
  
Blog data should be stored in *.json files!

### Application should enable:
- user registration
- login for registered users
- after login:
	- display list of the blogs
	- creation of the new blog
	- delete of the blog (only blog created by me)
	- display content of the selected blog
		- title
		- id of the owner
		- list of blog entries:
			- id of entry publisher
			- date/time of publication
			- title/content
	- after selecting a blog user may:
		- add new entry in the blog
		- delete own entry from the blog
		- modify own entry in the blog

### Application should contains following screens
- login view
- registration view
- list of blogs view
- single blog view
- entry add/edit/delete view

### The most important part of the task is to make sure the user interface behaves correctly, e.g.:
- You cannot create a user without an id or with id similar to an existing one
- You cannot confirm creating a blog entry if not all mandatory data is filled in
- Data is edited using widgets appropriate for that data type
- Code quality is considered during evaluation
