const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const routes = require("./routes");
const db = require("./models");

const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8081");
const { Block, Transaction } = require("./models");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/", express.static(path.join(__dirname, "build")));
// build 한 것을 static으로 연결
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "br",
  })
);
app.use("/api", routes);

const newBlock = async () => {
  await web3.eth.getBlockNumber(async function (err, last) {
    let latest_block_number = last;
    const blockItem = await Block.findAll();
    if (blockItem.length <= 0 || latest_block_number == blockItem.length) {
      for (let i = 0; i <= latest_block_number; i++) {
        web3.eth.getBlock(i, function (err, block) {
          Block.create(block).then((blockData) => {
            if (block.transactions.length) {
              for (var j = 0; j < block.transactions.length; j++) {
                web3.eth.getTransaction(block.transactions[j]).then((data) =>
                  Transaction.create(data).then((txData) => {
                    // 트랜잭션과 블록데이터 관계 생성
                    blockData.addTransaction(txData);
                  })
                );
              }
            }
          });
        });
      }
    }
  });
};

db.sequelize.sync({ force: false }).then(() => {
  console.log("db connected");
  newBlock();
});
// 블록이 생성할 때 마다 db에 데이터 저장
web3.eth.subscribe("newBlockHeaders", (error, result) => {
  if (!error) {
    web3.eth.getBlock(result.number, function (err, block) {
      Block.create(block).then((blockData) => {
        if (block.transactions.length) {
          for (var j = 0; j < block.transactions.length; j++) {
            web3.eth.getTransaction(block.transactions[j]).then((data) =>
              Transaction.create(data).then((txData) => {
                blockData.addTransaction(txData);
              })
            );
          }
        }
      });
    });
  }
});

app.listen(8000, () => {
  console.log(8000 + "server start");
});
