const express  = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(!(username ==="kshitij" && password === "pass")) {
        res.status(403).json({"msg": "something up with your username and password"})
        return
    }

    if(kidneyID != 1 && kidneyID != 2) {
        res.status(403).json({"msg": "something up with your  kidneys inputs"})
        return
    }
    res.json({
        msg: "Your kidney is fine!"
    }) 
});

app.listen(3000);