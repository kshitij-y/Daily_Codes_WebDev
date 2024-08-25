const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kshitij:esdXfLs$ywF42a.@cluster0.ampvoxv.mongodb.net/user_app_new"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  pasword: String,
});

app.post("/signup",async function(req, res){
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("username exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })

});


function userExists(username, password) {
    // should check in the database
    return true;
  
}

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});



app.listen(3000);