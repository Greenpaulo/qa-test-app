const passport = require('passport');

module.exports = app => {

  app.get('/auth/google',
    passport.authenticate('google', { 
      accessType: 'offline',
      prompt: 'consent',
      scope: ['profile', 'email'] 
    }));

  app.get('/auth/google/callback',
    passport.authenticate('google'), (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/cabinet');
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}