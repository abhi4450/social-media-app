const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    commentText: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Comment;
