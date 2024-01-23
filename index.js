const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const rootDir = require("./util/path");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");
const sequelize = require("./util/database");
const User = require("./models/User");
const Post = require("./models/Post");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

User.hasMany(Post);
Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

app.use(adminRoutes);
app.use(userRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, (req, res, next) => {
      console.log("server listening on PORT=3000");
    });
  })
  .catch((err) => console.log("Server is not listening...", err));
