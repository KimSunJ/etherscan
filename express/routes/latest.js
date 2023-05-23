const router = require("express").Router();

const { Transaction, Block } = require("../models");

router.post("/tx", async (req, res) => {
  try {
    // console.log("넘버??", req.body);

    const txData = await Transaction.findAll({
      include: [
        {
          model: Block,
        },
      ],
      limit: 6,
    });
    // console.log("블록 넘버를 뽑자", txData);

    const blockData = await Block.findAll({
      order: [["number", "DESC"]],
      limit: 6,
    });

    res.send({ isError: false, txData, blockData });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/part", async (req, res) => {
  try {
    // console.log("넘버??", req.body);

    const fromData = await Transaction.findAll({
      where: { from: req.body.address },
    });

    const toData = await Transaction.findAll({
      where: { to: req.body.address },
    });
    // console.log("to", toData);
    // const blockHeight = await Block.findOne({
    //   where: { number: req.body.blockHeight },
    // });

    res.send({ isError: false, fromData, toData });
  } catch (error) {
    res.send({ isError: true });
  }
});
router.post("/find", async (req, res) => {
  try {
    // console.log("넘버??", req.body);

    const numberData = await Block.findOne({
      where: { number: req.body.number },
    });

    res.send({ isError: false, numberData });
  } catch (error) {
    res.send({ isError: true });
  }
});
module.exports = router;
