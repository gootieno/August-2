Access the home page
    GET /
    GET /home
Submit a contact form
    POST /contacts
Access the posts page
    GET /posts
Access the edit page for a post
    GET /posts/:postId/edit
Access the create page for a post
    GET /posts/create
    GET /posts/new
Create a new user
    POST /users
Log In
    POST /users/login
    POST /login
    POST /session/login
Log Out
    POST /users/logout
    POST /logout
    POST /session/logout
Access the comments for a post page
    GET /posts/:postId/comments
Access the create page for a post's comment
    GET /posts/:postId/comments/create
    GET /posts/:postId/comments/new
Access the edit page for a comment
    GET /comments/:commentId/edit
Submit a like for a post
    POST /posts/:postId/likes
Delete a like for a post
    POST /posts/:postId/likes/:likeId/delete
Access all the posts of a user
    GET /users/:userId/posts
Submit a search on posts
    POST /posts/search