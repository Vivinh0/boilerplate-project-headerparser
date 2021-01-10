"use strict";

const express = require("express");
const router = express.Router();

module.exports = router.get("", (req, res, next) => res.json({ msg: "Ok" }));
