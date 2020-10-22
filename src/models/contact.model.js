import mongoose from "mongoose";
let Schema = mongoose.Schema;

let ContactSchema = new Schema({
  userId: String,
  contactID: String,
  status: {type: Boolean, default: false},
  createAt: {type: Number, default: Date.now},
  updateAt: {type: Number, default: null},
  deleteAt: {type: Number, default: null}

});

module.exports = mongoose.model ("user", ContactSchema);
