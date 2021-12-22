const { GetAdminCentre,GetAdminCentreById,AddNewAdminCentre,DeleteAdminCentre,updateAdminCentre,UpdatePassword } = require('../model/admin_centre.model');
const nodemailer = require("nodemailer");

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
    AddNewAdminCentre(req.body.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.password,(err, admin_centre) =>{
        if(err)
        res.send(err);
        // res.send(admin_centre);
    })
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testcoding975@gmail.com',
          pass: 'testCoding1998'
        }
      });
      
      var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: req.body.email,
        subject: 'mode de passe pour access au site',
        text: req.body.password
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email envoyer');
        }
      });
}

exports.DeleteAdminByID = (req, res)=>{
    DeleteAdminCentre(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdateAdminCentre = (req,res)=>{
    updateAdminCentre(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.password,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdatePassword = (req,res)=>{
    UpdatePassword(req.params.id,req.body.password,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}