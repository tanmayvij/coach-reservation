const TOKEN = 'jncjcferwo98UJ#*fj*Cmzkcjnxcsx';

module.exports = (req, res, next) => {
    if(!req.headers.authorization || req.headers.authorization !== TOKEN) {
        return res.status(401).json({
            success: false,
            data: 'unauthorized'
        })
    } else {
        next();
    }
}