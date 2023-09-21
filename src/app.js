// Import required modules and configure environment variables
require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const register = require('./models/registers'); // Import User model
const bcrypt = require('bcryptjs'); // Library for hashing passwords
const jwt = require('jsonwebtoken'); // Library for working with JSON Web Tokens
const cookieParser = require('cookie-parser');
require('./db/conn'); // Database connection configuration
const auth = require('./middleware/auth'); // Authentication middleware
const generateRandomPassword = require("./controllers/randompass"); // Controller for generating random passwords
const nodemailer = require('nodemailer'); // Library for sending emails
const passport = require('passport'); // Passport for authentication strategies
require('./middleware/google-auth'); // Google OAuth2 authentication middleware
const session = require('express-session'); // Session middleware
const router = require('./routers/user-routes'); // User router module

const app = express();

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public"); // Directory for static files (CSS, JS)
const template_path = path.join(__dirname, "../templates/views"); // Directory for views (HBS templates)
const partials_path = path.join(__dirname, "../templates/partials"); // Directory for partials (HBS partial templates)

// Configure and use session middleware
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET_KEY, // Secret key for session management
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize()); // Initialize Passport for authentication
app.use(passport.session()); // Use Passport session handling

app.locals.jwt = ''; // Store JWT (JSON Web Token) in a local variable
app.locals.isGoogleAuth = false; // Flag to track Google authentication status

app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

app.use(express.static(static_path)); // Serve static files (CSS, JS)
app.set("view engine", "hbs"); // Set view engine to Handlebars (HBS)
app.set("views", template_path); // Set views directory
hbs.registerPartials(partials_path); // Register partial templates for HBS

app.use(router); // Use user router for handling user-related routes

// Routes for Google OAuth2 authentication
app.get('/auth/failure', (req, res) => {
    app.locals.isGoogleAuth = false; // Set Google authentication status to false
    res.send("Something went wrong...");
});

app.get("/auth/secret", (req, res) => {
    app.locals.isGoogleAuth = true; // Set Google authentication status to true
    res.render("secretPage"); // Render the secret page
});

app.get("/auth/logout", (req, res) => {
    app.locals.isGoogleAuth = false; // Set Google authentication status to false
    res.redirect("/"); // Redirect to the home page
});

app.get('/auth/google', (req, res) => {
    app.locals.isGoogleAuth = true; // Set Google authentication status to true
    passport.authenticate('google', { scope: ['email', 'profile'] })(req, res); // Start Google OAuth2 authentication
});

app.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/auth/secret', // Redirect to the secret page on successful authentication
        failureRedirect: '/auth/failure' // Redirect to the failure page on authentication failure
    })
);

// Start the server
app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});
