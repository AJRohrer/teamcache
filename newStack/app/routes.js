module.exports = function(app, passport, projectModel) {
  
      // =====================================
      // HOME PAGE (with login links) ========
      // =====================================
      app.get('/', function(req, res) {
          res.render('index.ejs'); // load the index.ejs file
      });
  
      // =====================================
      // LOGIN ===============================
      // =====================================
      // show the login form
      app.get('/login', function(req, res) {
  
          // render the page and pass in any flash data if it exists
          res.render('login.ejs', { message: req.flash('loginMessage') }); 
      });
  
      // process the login form
      // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
  
      // =====================================
      // SIGNUP ==============================
      // =====================================
      // show the signup form
      app.get('/signup', function(req, res) {
  
          // render the page and pass in any flash data if it exists
          res.render('signup.ejs', { message: req.flash('signupMessage') });
      });
  
      // process the signup form
       // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
      // =====================================
      // PROFILE SECTION =====================
      // =====================================
      // we will want this protected so you have to be logged in to visit
      // we will use route middleware to verify this (the isLoggedIn function)
      app.get('/profile', isLoggedIn, function(req, res) {
        var returnobj = {};
        returnobj.projects = {};
        projectModel.find().exec().then(function(projectObj){
            returnobj.projects = projectObj;
            console.log("I got this: " + returnobj.projects.length);
            console.log("Now it is this: " + returnobj.projects[0].steps[0]);
            returnobj.user = req.user;
            console.log("Test 1: " + returnobj.projects[0].title);
            console.log("Test 2: " + returnobj.user.local.firstName);
              res.render('profile.ejs', {
                  returnobject : returnobj // get the user out of session and pass to template
              });
        })
      });
  
      // =====================================
      // LOGOUT ==============================
      // =====================================
      app.get('/logout', function(req, res) {
          req.logout();
          res.redirect('/');
      });

      // =====================================
      // GET PROJECTS ========================
      // =====================================
      app.post('/getallprojects', function(req, res) {        
        projectModel.find().exec().then(function(projectObj){
            res.send(projectObj);
        });
    });
  };
  
  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
  
      // if user is authenticated in the session, carry on 
      if (req.isAuthenticated())
          return next();
  
      // if they aren't redirect them to the home page
      res.redirect('/');
  }