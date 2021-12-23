const { GetPromo,AddPromo,DeletePromo,updatePromo,UpdateStatus } = require('../model/promo.model');

exports.GetPromo = (req, res)=> {
    GetPromo((err, admin_centre) =>{
        if(err) res.send(err);
        res.send(admin_centre)
    })
};


exports.CreatePromo =(req,res)=>{
    AddPromo(req.body.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.password,(err, admin_centre) =>{
        if(err)
        res.send(err);
    })
}

exports.DeletePromoByID = (req, res)=>{
    DeletePromo(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdatePromo = (req,res)=>{
    updatePromo(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.password,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdateStatus= (req,res)=>{
    let date = new Date();
    let horaire = date.getHours();

    if(horaire > 12 || horaire < 8){
        res.json('la promo est non traité');
    }else{
        UpdateStatus(req.body.id,req.body.status);
    }
}