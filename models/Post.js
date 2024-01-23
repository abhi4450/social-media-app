const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Post = sequelize.define(
  "post",
  {
    imageLink: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false
  }
);

module.exports = Post;