const Sequelize = require("sequelize");

module.exports = class Account extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        account: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Account",
        tableName: "account",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
  static associate(db) {}
};
