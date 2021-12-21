const dbConn  = require('../../db/connDb');

exports.GetAdmin = () =>{
    return new Promise((resolve, reject) =>{
        dbConn.query('SELECT * FROM admin', (err, res)=>{
            resolve(res)
            // console.log(res);
        })
    })
};

// function findReservation() {
//     return new Promise((resolve, reject) => {
//         connection.query("select nom,email,Npassport,assurance,repas,telephone,Nperson,datenaissance,vols.pointdepart,vols.pointarrive,vols.horaire,vols.datedepart,vols.datedarrive,vols.prix,vols.escale from vols,reservation where vols.volID = reservation.volID and reservation.reservationID=(SELECT  MAX(reservationID) FROM reservation)", function(err, res){
//             resolve(res)
//         })
//     })
// }