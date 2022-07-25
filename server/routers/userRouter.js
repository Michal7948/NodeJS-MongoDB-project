const express = require("express");
const productBL = require("../BL/usersBL");
const router = express.Router();


router.route("/")
.get(async function (req, resp) {
  let data = await productBL.getAllUsers();
  return resp.json(data);
});

router.route("/:_id")
.get(async function (req, resp) {
  let _id = req.params._id;
  let data = await productBL.getUserByID(_id);
  return resp.json(data);
});

router.route("/")
.post(async function (req, resp) {
  let body = req.body;
  let data = await productBL.createUser(body);
  return resp.json(data);
});

router.route("/:_id")
.put(async function (req, resp) {
  let _id = req.params._id;
  let body = req.body;
  let data = await productBL.updateUser(_id, body);
  return resp.json(data);
});

router.route("/:_id")
.delete(async function (req, resp) {
  let _id = req.params._id;
  let data = await productBL.deleteUser(_id);
  return resp.json(data);
});

module.exports = router;
