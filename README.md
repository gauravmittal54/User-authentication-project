# User Registration and Authentication System

A web application for user registration, login, and authentication, featuring email-based password reset and Google OAuth2 integration.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- User registration with email verification
- Secure user login with password hashing
- Password reset functionality with email notifications
- Google OAuth2 authentication for user convenience

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone this repository:
   ```bash
   git clone gauravmittal54/User-authentication-project
   cd registration-authentication-system

2. Install dependencies:
   npm install
   
4. Start the server
   npm start

### Usage
1. Access the web application at http://localhost:3000 in your browser.
2. Register for a new account or log in using your Google account.
3. Enjoy the secure user authentication features.

### Authentication
User authentication is handled using bcrypt for password hashing and Passport.js for session management.
Google OAuth2 authentication is integrated for easy login via Google accounts.

### Folder Structure

<pre>

User-authentication-project/
|-- public/
|   |-- css/
|   |   |-- login-styles.css
|   |   |-- registration-styles.css
|   |   |-- style.css
|   |-- js/
|       |-- login-script.js
|-- src/
|   |-- controllers/
|   |   |-- randompass.js
|   |-- db/
|   |   |-- conn.js
|   |-- middleware/
|   |   |-- auth.js
|   |   |-- google-auth.js
|   |-- models/
|   |   |-- registers.js
|   |-- routers/
|       |-- user-routes.js
|   |-- app.js
|-- templates/
|   |-- partials/
|   |   |-- footer.hbs
|   |   |-- navbar.hbs
|   |-- views/
|       |-- forgotPassword.hbs
|       |-- index.hbs
|       |-- registration.hbs
|       |-- secretPage.hbs
|-- package-lock.json
|-- package.json
|-- README.md


  
</pre>

### Technologies Used
 - Node.js
 - Express.js
 - MongoDB
 - Mongoose
 - Passport.js
 - Bcrypt.js
 - Nodemailer
 - Google OAuth2

### Contributing

Contributions to this project are welcomed and encouraged.

