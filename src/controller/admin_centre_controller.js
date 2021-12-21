const { GetAdminCentre,GetAdminCentreById,AddNewAdminCentre,DeleteAdminCentre,updateAdminCentre } = require('../model/admin_centre.model');

exports.GetAdminCentre = (req, res)=> {
    GetAdminCentre((err, admin_centre) =>{
        if(err) res.send(err);
        res.send(admin_centre)
    })
};

exports.getAdminByID = (req, res)=>{
    GetAdminCentreById(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.CreateAdmin =(req,res)=>{
    AddNewAdminCentre(req.body.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,(err, admin_centre) =>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.AdminByID = (req, res)=>{
    DeleteAdminCentre(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdateAdminCentre = (req,res)=>{
    updateAdminCentre(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}