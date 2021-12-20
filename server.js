const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

const adminRoute  = require('./src/route/admin.route');
const adminCentreRoute = require('./src/route/admin_centre.route') 

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/api/admin',adminRoute);
app.use('/api/admin-centre',adminCentreRoute);

app.listen(port, ()=>{
    console.log("port", port);
});
