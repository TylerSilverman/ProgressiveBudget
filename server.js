const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");//connecting to mongoose sever database
const compression = require("compression");

const PORT = 7632;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// console chalk to write in the terminal  
const chalk = require('chalk'); 
console.log(chalk.green('Ready to Track your Budget?'));
console.log(chalk.green('Click below tp begin..'));

//connecting to mongoose sever database 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log("Now listening http://localhost:" + PORT);
});