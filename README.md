# User Registration and Authentication System

A web application for user registration, login, and authentication, featuring email-based password reset and Google OAuth2 integration.
<div style="display: flex; flex-wrap: wrap; justify-content: center;">
  <img src="https://github.com/gauravmittal54/User-authentication-project/assets/61792468/8fad7498-8a3e-44a0-884a-6e20fc1b39c0" alt="Image 1" width="200" style="margin: 10px;">
  <img src="https://github.com/gauravmittal54/User-authentication-project/assets/61792468/92e427c9-35dd-41e1-bdfb-452cb88a9e77" alt="Image 2" width="200" style="margin: 10px;">
  <img src="https://github.com/gauravmittal54/User-authentication-project/assets/61792468/083a4154-fd0c-4f19-b8d9-cb6dae1695f7" alt="Image 3" width="200" style="margin: 10px;">
  <img src="https://github.com/gauravmittal54/User-authentication-project/assets/61792468/33af547d-c83e-4herer i have provided diffret images i want athat each image should fit in one row and come sideaysdf8-8b04-79d7831ba700" alt="Image 4" width="200" style="margin: 10px;">
</div>


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
   git clone <repository-url>
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

