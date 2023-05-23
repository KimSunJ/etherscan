const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // blockHash: {
        //   type: Sequelize.STRING(100),
        // },
        blockNumber: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        from: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        to: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        gas: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        gasPrice: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        hash: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        nonce: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        transactionIndex: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        value: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Transaction",
        tableName: "transaction",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
  static associate(db) {
    db.Transaction.belongsTo(db.Block, {
      foreignKey: "blockHash",
      targetKey: "hash",
    });
  }
};

// module.exports = {};
