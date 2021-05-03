var mongoose = require("mongoose");

var Schema = mognoose.Schema;

var BandSchema = new Schema({
  members: [{ type: Schema.ObjectId, ref: "Person" }],
  releases: [{ type: Schema.ObjectId, ref: "Release" }],
  founded: { type: Date },
  disbanded: { type: Date },
});

BandSchema.virtual("url").get(function () {
  return "/catalog/bands/" + this._id;
});

module.exports = mongoose.model("Band", BandSchema);