const express = require("express");
const controller = require("../Controller/weatherController");

const router = express.Router();

router.get("/", controller.Weather);


module.exports = router;