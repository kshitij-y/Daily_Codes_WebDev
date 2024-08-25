const express = require("express");
const app = express();

const user = [
    {
        name: "John",
        kidneys: [
            {healthy: false}
        ]
    }
]
app.use(express.json());
app.get("/", function(req, res) {
    const johnKidneys = user[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let numberOfHKidney = 0;
    for(let i=0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHKidney++;
        }
    }
    const numberOfUnhKidneys = numOfKidneys - numberOfHKidney;

    res.json({
        numOfKidneys,
        numberOfHKidney,
        numberOfUnhKidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    });
    res.send("Kidney added successfully!");
});

app.put("/", function(req, res) {
    for(let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
    //res.send("Kidney updated successfully!");
});

app.delete("/", function(req, res) {
    const newKidney = [];
    for(let i=0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy) {
            newKidney.push({healthy: true})
        }
    }
    user[0].kidneys = newKidney;
    res.json({msg: "done"});
});

app.listen(3000);