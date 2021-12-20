const { GetAdmin } = require('../model/admin.model');

exports.GetAdmin = (req, res)=> {
    GetAdmin((err, users) =>{
        // console.log('We are here');
        if(err) res.send(err);
        res.send(users)
    })
};