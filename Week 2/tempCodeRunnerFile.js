const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [
        {healthy: false}
    ]
}]
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
    })
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
});

// app.put("/", function(req, res) {
    
// });

// app.delete("/", function(req, res) {
    
// });

app.listen(3000);