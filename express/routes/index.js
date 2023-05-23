const router = require("express").Router();

const latest = require("./latest");
const detail = require("./detail");
const account = require("./account");

router.use("/latest", latest);
router.use("/detail", detail);
router.use("/account", account);

module.exports = router;
