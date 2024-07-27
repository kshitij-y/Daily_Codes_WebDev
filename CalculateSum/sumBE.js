const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
let count = 0;

app.get("/sum", (req, res) => {
    count++;
    const a = req.query.a;
    const b = req.query.b;
    const c = parseInt(a) + parseInt(b);
    console.log("req came " + count);
    res.send(String(c));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
