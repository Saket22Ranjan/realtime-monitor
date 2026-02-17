const mongoose = require("../db");

const metricSchema = new mongoose.Schema({
  cpu: Number,
  memory: Number,
  disk: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Metric", metricSchema);
