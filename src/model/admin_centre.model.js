const dbConn  = require('../../db/connDb');

//get all admin centre
exports.GetAdminCentre = (result) =>{
    dbConn.query('SELECT * FROM admin_centre', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('admin centre fetched successfully');
            result(res);
        }
    })
};

//get admin centre by id
exports.GetAdminCentreById = (id, result)=>{
    dbConn.query('SELECT * FROM admin_centre WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching utisateur by id', err);
            result(err);
        }else{
            console.log('admin centre fetched successfully');
            result(res);
        }
    })
}

//add new admin centre
exports.AddNewAdminCentre = (id,nom,prenom,email,pays,ville)=>{
    console.log(id,nom,prenom,email,pays,ville);
    dbConn.query( `INSERT INTO admin_centre (id,nom,prenom,email,pays,ville) VALUES (${id},"${nom}","${prenom}","${email}","${pays}","${ville}")`, (err, res)=>{
        if(err){
            console.log(err);
            result(err);
        }else{
            console.log('admin centre insered successfully');
            return res;
        }
    })
}

//delete admin centre by id
exports.DeleteAdminCentre = (id)=>{  
    // console.log(id);
    dbConn.query(`DELETE FROM admin_centre WHERE id=${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('admin centre deleted successfully');
        }
    })
}

exports.updateAdminCentre =(id,nom,prenom,email,pays,ville)=>{
    // console.log(id,nom,prenom,email,pays,ville);
    dbConn.query(`UPDATE admin_centre SET id=${id}, nom="${nom}",prenom="${prenom}",email="${email}",pays="${pays}",ville="${ville}" WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('admin centre updated successfully');
        }
    })
}