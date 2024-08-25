const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
let count = 0;

app.get("/calInterest", (req, res) => {
    count++;
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    const i = parseInt(a) * parseInt(b) * parseInt(c);
    console.log("req came " + count);
    res.send(String(i/100));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
