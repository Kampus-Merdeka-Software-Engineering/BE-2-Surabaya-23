require("dotenv").config();
const express = require("express");

const app = express();
const router = express.Router();

const menuRoutes = require("./routes/menuRoutes");

app.use(router);
app.use(menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());
