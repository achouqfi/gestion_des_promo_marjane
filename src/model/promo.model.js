const dbConn  = require('../../db/connDb');

//get all admin centre
exports.GetPromo = (result) =>{
    dbConn.query('SELECT * FROM promo', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('admin centre fetched successfully');
            result(res);
        }
    })
};

//add new admin centre
exports.AddPromo = (id,nom,prenom,email,pays,ville,password)=>{
    dbConn.query( `INSERT INTO admin_centre (id,nom,prenom,email,pays,ville,password) VALUES (${id},"${nom}","${prenom}","${email}","${pays}","${ville}",${password})`, (err, res)=>{
        if(err){
            console.log(err);
            // result(err);
        }else{
            console.log('admin centre insered successfully');
            // return res;
        }
    })
}

//delete admin centre by id
exports.DeletePromo = (id)=>{  
    // console.log(id);
    dbConn.query(`DELETE FROM promo WHERE id=${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('admin centre deleted successfully');
        }
    })
}

exports.updatePromo =(id,nom,prenom,email,pays,ville,password)=>{
    // console.log(id,nom,prenom,email,pays,ville);
    dbConn.query(`UPDATE promo SET id=${id}, nom="${nom}",prenom="${prenom}",email="${email}",pays="${pays}",ville="${ville}",password="${password}" WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('admin centre updated successfully');
        }
    })
}

exports.UpdateStatus =(id, status)=>{
    // console.log(status, id);
    dbConn.query(`UPDATE promo SET status="${status}" WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('admin password updated successfully');
        }
    })
}