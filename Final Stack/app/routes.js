module.exports = function (app, passport, projectModel, db) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        var returnobj = {};
        returnobj.projects = {};
        projectModel.find().exec().then(function (projectObj) {
            returnobj.projects = projectObj;
            console.log("I got this: " + returnobj.projects.length);
            console.log("Now it is this: " + returnobj.projects[0].steps[0]);
            returnobj.user = req.user;
            console.log("Test 1: " + returnobj.projects[0].title);
            console.log("Test 2: " + returnobj.user.local.firstName);
            res.render('profile.ejs', {
                returnobject: returnobj // get the user out of session and pass to template
            });
        })
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/addproject', function (req, res) {
        var projsteps = [];
        if (req.body.detail1) {
            projsteps.push(req.body.detail1);
            console.log("detail 1:" + projsteps[0]);
        }
        if (req.body.detail2) {
            projsteps.push(req.body.detail1);
            console.log("detail 2:" + projsteps[1]);
        }
        if (req.body.detail3) {
            projsteps.push(req.body.detail1);
            console.log("detail 3:" + projsteps[2]);
        }
        if (req.body.detail4) {
            projsteps.push(req.body.detail1);
            console.log("detail 4:" + projsteps[3]);
        }
        if (req.body.detail5) {
            projsteps.push(req.body.detail1);
            console.log("detail 5:" + projsteps[4]);
        }
        if (req.body.detail6) {
            projsteps.push(req.body.detail1);
            console.log("detail 6:" + projsteps[5]);
        }

        var project = new projectModel({
            title: req.body.proname,
            steps: projsteps,
            media: { video: "testadd.mp4", picture: "testadd.jpg" }
        });

        project.save(function(error, data){
            if (error){
                res.json({value: false});
            }
            else{
                res.json({value: true});
            }
        });

        console.log(req.body.proname);

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