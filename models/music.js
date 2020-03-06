const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: { type: String, required: true },
  synopsis: {type: String, required: true},
  artist: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;
