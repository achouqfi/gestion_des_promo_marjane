const { 
    GetChefRayon,
    GetChefRayonById,
    AddNewChefRayon,
    DeleteChefRayon,
    updateChefRayon 
} = require('../model/chef_rayon.model');

exports.GetChefRayon = (req, res)=> {
    GetChefRayon((err, admin_centre) =>{
        if(err) res.send(err);
        res.send(admin_centre)
    })
};


exports.getChefByID = (req, res)=>{
    GetChefRayonById(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.CreateChefRayon =(req,res)=>{
    AddNewChefRayon(req.body.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.id_admin_centre,req.body.rayon,(err, admin_centre) =>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.DeleteChefRayonByID = (req, res)=>{
    DeleteChefRayon(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdateChefRayon = (req,res)=>{
    updateChefRayon(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.id_admin_centre,req.body.rayon,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}