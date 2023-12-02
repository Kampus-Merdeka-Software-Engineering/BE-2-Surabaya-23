require("dotenv").config();
const express = require("express");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get("/hi", (req, res) => {
  res.send("Hello");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());
