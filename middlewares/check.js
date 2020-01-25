module.exports = {

    LoginHome : (req, res, next) =>{
        session = req.session;
        if (session.user != null) next();
        else res.redirect("/");
    },

    LoginIndex : (req, res, next) =>{
        session = req.session;
        if (session.user != null) res.redirect("/home");
        else next();
    }
  
}