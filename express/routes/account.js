const router = require("express").Router();

const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8081");

router.post("/list", async (req, res) => {
  try {
    await web3.eth
      .getAccounts()
      .then((data) => res.send({ isError: false, data }));
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/get", async (req, res) => {
  try {
    await web3.eth
      .getbalance()
      .then((data) => res.send({ isError: false, data }));
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
