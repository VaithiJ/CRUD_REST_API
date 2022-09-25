const express = require("express");
const schema = require("../model/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await schema.find();
    res.json(users);
    console.log("User data.....");
  } catch (err) {
    res.send(err);
  }
});

router.get("/:ID", async (req, res) => {
  try {
    const users = await schema.findById(req.body.ID);
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const users = new schema({
    name: req.body.name,
    from: req.body.from,
    relationship: req.body.relationship,
  });

  try {
    const yt = await users.save();
    res.json(yt);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const users = await schema.findById(req.body.id);
    users.relationship = req.body.relationship;
    const yt = await users.save();
    res.json(yt);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const users = await schema.remove(req.body.id);
    users.relationship = req.body.relationship;
    const yt = await users.save();
    res.json(yt);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
