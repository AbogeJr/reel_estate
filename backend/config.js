const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConn = () => {
  // MongoDB connection
  mongoose.connect(process.env.MONGO_URI).then(
    (response) => console.log("Connected to DB"),
    (err) => console.log("Some error", err)
  );
};

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Set up the Google authentication strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
// Here, you can save the user to your database or create a new user
// based on the Google profile data
//       return done(null, profile);
//     }
//   )
// );

// Serialize the user object to a session
// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// Deserialize the user object from a session
// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

module.exports = { dbConn };
