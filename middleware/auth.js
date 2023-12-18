
async function auth(req, res, next){
    try {
        const user = req.session.user
        if(!user){
            return res.json({success: false, message: 'Please login.'})
        }
        next()
    } catch (error) {
        res.json({success: false, message: 'Something went wrong'})
    }
}

module.exports = auth