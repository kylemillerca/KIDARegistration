/**
 * Created by ksmiller on 7/22/2015.
 */
var auth = function (req, res, next){
    if(!req.isAuthenticated())
        res.send(401);
    else
        next();
}