const passport = require("passport");
const { User } = require("../models");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: "secret",
    },
    async (payload, done) => {
      const user = await User.findByPk(payload.id);
      done(null, user);
    }
  )
);

module.exports = passport;
