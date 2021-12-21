const { GetAdmin } = require('../model/admin.model');
const jwt = require('jsonwebtoken');
const con = require('../../db/connDb');

exports.GetAdmin = (req, res)=> {
    GetAdmin((err, users) =>{
        // console.log('We are here');
        if(err) res.send(err);
        res.send(users)
    })
};

exports.login = async(req, res)=> {
    // try {
        const Admins = await GetAdmin();
        // res.json(Admins);
        // console.log(Admins);
        const { email, password } = req.body;
    
        // validate user creds
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
    
        // validate if user exist in our database
    
        const CAdmin = Admins.find(
          (admin) =>
            admin.email == req.body.email && admin.password == req.body.password
        );
    
        if (CAdmin) {
          const token = jwt.sign(
            { id: CAdmin.id, email },
            `${process.env.JWT_SECRET_KEY}`,
            {
              expiresIn: "2h",
            }
          );
          res.status(200).json(token);
    
          con.query(`UPDATE admin SET ? WHERE id =${CAdmin.id}`, {
            token: token,
          });
        }
        res.status(400).send("information incorrect");
        // create token
    //   } catch (error) {
    //     res.json({ message: error.message });
    // }
};

