require('dotenv').config();
const passport = require('passport');
const Register = require('../models/registers');


var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  }, async (request, accessToken, refreshToken, profile, done) => {
    try {
        // Check if the user already exists in your database based on any unique property you have, such as email
        let user = await Register.findOne({ email: profile.email });

        if (!user) {
            // If the user does not exist, create a new user record
            let uniquePhone = '';
            let isUnique = false;
            while (!isUnique) {
                // Generate a 10-digit random phone number
                const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
                const newPhoneNumber = '9' + randomNumber.toString().substring(1, 11); // Ensure it starts with '9'
    
                // Check if the generated phone number is unique in the database
                const existingUser = await Register.findOne({ phone: newPhoneNumber.toString() });
    
                if (!existingUser) {
                    uniquePhone = newPhoneNumber;
                    isUnique = true;
                }
            }
            
            user = new Register({
                // Use the Google-provided email as a unique identifier
                // You can set other properties based on what's available in the Google profile
                firstname: 'google_auth',
                lastname: 'google_auth',
                email: profile.email,
                // Set default or placeholder values for other properties if needed
                gender: "Male",
                phone: uniquePhone.toString(),
                age: "22",
                password : "default@1234",
                confirmpassword : "default@1234"
            });

            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser(function(user,done){
    done(null,user);
});


passport.deserializeUser(function(user,done){
    done(null,user);
});