"use strict";

const express = require("express");
const router = express.Router();

module.exports = router.get("", (req, res, next) => {
  // res.json({ msg: "Ok" });
  const clientIpAddress = req.ip;
  const clientAcceptLang = req.headers["accept-language"] || "en-US,en;q=0.5";
  const clientUserAget = req.headers["user-agent"];
  const response = {
    ipaddress: clientIpAddress,
    language: clientAcceptLang,
    software: clientUserAget,
  };
  // console.log(response);
  res.json(response);
});
