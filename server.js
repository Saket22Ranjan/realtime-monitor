const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cron = require("node-cron");

require("./db");

const Metric = require("./models/Metric");
const getMetrics = require("./monitor");
const checkAlerts = require("./alertManager");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

io.on("connection", () => {
  console.log("📡 Client Connected");
});

// Run every 5 seconds
cron.schedule("*/5 * * * * *", async () => {
  const metrics = await getMetrics();

  await Metric.create(metrics);

  checkAlerts(metrics);

  io.emit("metrics", metrics);
});

server.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
