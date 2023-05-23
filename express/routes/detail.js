const { Op } = require("sequelize");
const router = require("express").Router();
const { Transaction, Block } = require("../models");

router.post("/all", async (req, res) => {
  try {
    // console.log("넘버??", req.body);

    const allData = await Block.findAll({
      order: [["number", "DESC"]],
    });
    // console.log(allData);

    const allTxData = await Transaction.findAll({
      order: [["blockNumber", "DESC"]],
    });

    res.send({ isError: false, allData, allTxData });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/search", async (req, res) => {
  try {
    // console.log(req.body.text);
    const inputData = req.body.text.match(/[0-9]+/gi).join("");
    // console.log(inputData);
    // console.log(req.body.text.length == inputData.length);
    if (req.body.text.length == inputData.length) {
      const findNumb = await Block.findOne({
        order: [["number", "DESC"]],
        where: { number: +req.body.text },
      });
      console.log("number 있나?", findNumb);
      if (findNumb) {
        res.send({ isError: false, findNumb: findNumb });
      } else {
        res.send({ isError: true });
      }
    } else if (req.body.text.length == 66) {
      const findHash = await Transaction.findOne({
        order: [["blockNumber", "DESC"]],
        where: { hash: req.body.text },
      });
      // console.log("hash 있나?", findHash);
      res.send({ isError: false, findHash: findHash });
    } else if (req.body.text.length == 42) {
      const addressHash = await Transaction.findOne({
        order: [["blockNumber", "DESC"]],
        where: {
          [Op.or]: [{ from: req.body.text }, { to: req.body.text }],
        },
      });
      console.log("address 있나?", addressHash);

      res.send({ isError: false, addressHash: addressHash });
    } else {
      res.send({ isError: true });
    }
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/txHashAll", async (req, res) => {
  try {
    // console.log("넘버??", req.body);
    const txData = await Transaction.findAll({
      include: {
        model: Block,
      },
      where: { hash: req.body.txHashData },
    });

    res.send({ isError: false, txData });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/part", async (req, res) => {
  try {
    // console.log("넘버??", req.body);

    const fromData = await Transaction.findAll({
      where: { from: req.body.address },
      include: {
        model: Block,
      },
    });

    const toData = await Transaction.findAll({
      where: { to: req.body.address },
    });
    // console.log("to", toData);

    res.send({ isError: false, fromData, toData });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
