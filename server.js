const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const adminRoute  = require('./src/route/admin.route');
const adminCentreRoute = require('./src/route/admin_centre.route') 

app.use('/api/admin',adminRoute);
app.use('/api/admin-centre',adminCentreRoute);

app.listen(port, ()=>{
    console.log("port", port);
});
