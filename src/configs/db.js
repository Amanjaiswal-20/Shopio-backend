const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://secretaman11:Aj%4001%4099@cluster0.ekr0ixs.mongodb.net/shopio?retryWrites=true&w=majority");
};
