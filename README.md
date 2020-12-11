# Eksamen_Webapplikasjoner

### .env configuration on server

`See .env.txt in server folder`

### .env configuration on client

`See .env.txt in client folder`

## Available Scripts

To start the server, first do:

`cd server`

When your're in the server folder, first install dependencies with:

`npm install`

Then start the server with:

`npm run dev`

Starts the server in the development mode.\
Open [http://localhost:5000] to view it in the browser.

The page will automatically reload if you save any edits you make.\
You will also see any requests made in the console.

If you want to change the environment, you have to change NODE_ENV in .env to production:

NODE_ENV = development -> NODE_ENV = production

Security features have been disabled for the development environment.

### Then open up a new terminal window and navigate to the client directory

`cd client`

When inside client directory, install all dependencies with:

`npm install`

After all dependencies are installed, type:

`npm run dev`

## Users

There are two users in the database already, but more can be made on the sign up page.

### Admin:

Email: `admin@lgror.no`
Password: `12345678`

### User:

Email: `user@lgror.no`
Password: `12345678`

## Postman environment

![](environmentPostman.png)

These are the variables you need in order to send request from Postman

### Postman documentation

`https://documenter.getpostman.com/view/13486177/TVmV7Ziw#intro`
