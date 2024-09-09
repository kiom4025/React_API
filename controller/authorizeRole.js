// check role to allow access
function authroziedRole(AllowedRole) {
    return (req, res, next) => {
        if (req.user.role === AllowedRole) {
            next();
        } else {
            res.status(403).json({ error: 'Access denied. Need admin access' }); //403 Forbidden
        }
    }
}

module.exports = {
    authroziedRole,
}