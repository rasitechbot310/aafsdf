
const express = require("express");
require("./dbms/connection.js");
const vaccineModel = require("./dbms/schema/vaccine_data.js");

// const port = 80;
const port = process.env.PORT || 3000;
const app = express();


app.get(/\//, (req, res) => {
    if(req.query.nama) {
        vaccineModel.findOne({nama: (req.query.nama.toLocaleUpperCase())}).then(data => {
            res.status(200);
            res.send([data]);
            res.end();
        });
    } else {
        res.end();
    }
});


app.listen(port, e => {
    if(e) {
        console.error(e);
        return 0;
    };
    console.clear();
    console.log("Server Running on Port : " + port)
});
