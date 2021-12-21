const dbConn  = require('../../db/connDb');

exports.GetChefRayon = (result) =>{
    dbConn.query('SELECT * FROM chef_rayon', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('chef rayon fetched successfully');
            result(res);
        }
    })
}


//get admin centre by id
exports.GetChefRayonById = (id, result)=>{
    dbConn.query('SELECT * FROM chef_rayon WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching utisateur by id', err);
            result(err);
        }else{
            console.log('chef rayon fetched successfully');
            result(res);
        }
    })
}

//add new chef de rayon centre
exports.AddNewChefRayon = (id,nom,prenom,email,pays,ville,id_admin_centre,rayon)=>{
    console.log(id,nom,prenom,email,pays,ville);
    dbConn.query( `INSERT INTO chef_rayon (id,nom,prenom,email,pays,ville,id_admin_centre,rayon) VALUES (${id},"${nom}","${prenom}","${email}","${pays}","${ville}","${id_admin_centre}","${rayon}")`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('chef rayon insered successfully');
        }
    })
}

//delete admin centre by id
exports.DeleteChefRayon = (id)=>{  
    // console.log(id);
    dbConn.query(`DELETE FROM chef_rayon WHERE id=${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('chef rayon deleted successfully');
        }
    })
}

exports.updateChefRayon =(id,nom,prenom,email,pays,ville,id_admin_centre,rayon)=>{
    // console.log(id,nom,prenom,email,pays,ville);
    dbConn.query(`UPDATE chef_rayon SET id=${id}, nom="${nom}",prenom="${prenom}",email="${email}",pays="${pays}",ville="${ville}",id_admin_centre="${id_admin_centre}",rayon="${rayon}" WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('chef rayon updated successfully');
        }
    })
}