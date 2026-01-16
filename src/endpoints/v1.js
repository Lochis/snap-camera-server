import express from "express";

var router = express.Router();

router.get("/", async function (req, res, next) {
  return res.json({ message: "made it to /" });
});

export default router;

