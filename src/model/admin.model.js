const dbConn  = require('../../db/connDb');

exports.GetAdmin = (result) =>{
    dbConn.query('SELECT * FROM admin', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('admin fetched successfully');
            result(res);
        }
    })
};

