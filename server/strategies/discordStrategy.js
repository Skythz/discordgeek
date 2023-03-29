const DiscordStrategy = require('passport-discord').Strategy
const passport = require('passport')
const User = require('../models/user')

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify']
},
async (accessToken, refreshToken, profile, done) => {
    try{
      const user = await User.findOne({discordID: profile.id})
    }
    catch(error){
      console.log(error.message)
    }
}))
