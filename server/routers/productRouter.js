const express = require("express");
const productBL = require("../BL/productsBL");
const router = express.Router();


router.route("/")
.get(async function (req, resp) {
  let data = await productBL.getAllProducts();
  return resp.json(data);
});

router.route("/:_id")
.get(async function (req, resp) {
  let _id = req.params._id;
  let data = await productBL.getProductByID(_id);
  return resp.json(data);
});

router.route("/")
.post(async function (req, resp) {
  let body = req.body;
  let data = await productBL.createProduct(body);
  return resp.json(data);
});

router.route("/:_id")
.put(async function (req, resp) {
  let _id = req.params._id;
  let body = req.body;
  let data = await productBL.updateProduct(_id, body);
  return resp.json(data);
});

router.route("/:_id")
.delete(async function (req, resp) {
  let _id = req.params._id;
  let data = await productBL.deleteProduct(_id);
  return resp.json(data);
});

module.exports = router;
