var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var transactionSchema = new Schema(
  {
    name: {
      type: String, required: true,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number, required: true, 
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

var Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
