const si = require("systeminformation");

async function getMetrics() {
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  const disk = await si.fsSize();

  // Get network stats safely
  const network = await si.networkStats();

  let netIn = 0;
  let netOut = 0;

  if (network && network.length > 0) {
    netIn = network[0].rx_sec || 0;
    netOut = network[0].tx_sec || 0;
  }

  return {
    cpu: Number(cpu.currentLoad.toFixed(2)),
    memory: Number(((mem.used / mem.total) * 100).toFixed(2)),
    disk: Number(disk[0].use.toFixed(2)),

    netIn: Number((netIn / 1024).toFixed(2)),   // KB/s
    netOut: Number((netOut / 1024).toFixed(2))
  };
}

module.exports = getMetrics;
