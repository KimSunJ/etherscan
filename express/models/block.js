const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        difficulty: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        extraData: {
          type: Sequelize.STRING(255),
        },
        gasLimit: {
          type: Sequelize.STRING(255),
        },
        gasUsed: {
          type: Sequelize.STRING(255),
        },
        hash: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: true,
        },
        miner: {
          type: Sequelize.STRING(255),
        },
        mixHash: {
          type: Sequelize.STRING(255),
        },
        nonce: {
          type: Sequelize.STRING(255),
        },
        number: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        parentHash: {
          type: Sequelize.STRING(255),
        },
        receiptRoot: {
          type: Sequelize.STRING(255),
        },
        sha3Uncles: {
          type: Sequelize.STRING(255),
        },
        size: {
          type: Sequelize.STRING(255),
        },
        stateRoot: {
          type: Sequelize.STRING(255),
        },
        timestamp: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        totalDifficulty: {
          type: Sequelize.STRING(255),
        },
        transactions: {
          type: Sequelize.JSON,
        },
        transactionsRoot: {
          type: Sequelize.STRING(255),
        },
        uncles: {
          type: Sequelize.JSON,
        },
      },
      {
        sequelize,
        modelName: "Block",
        tableName: "block",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
  static associate(db) {
    db.Block.hasMany(db.Transaction, {
      foreignKey: "blockHash",
      sourceKey: "hash",
    });
  }
};
