require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menuRoutes = require("./routes/menuRoutes");

app.use(menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());

// const router = express.Router();
// app.use(router);
