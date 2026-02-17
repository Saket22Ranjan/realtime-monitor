const si = require("systeminformation");

async function getMetrics() {
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  const disk = await si.fsSize();

  return {
    cpu: Number(cpu.currentLoad.toFixed(2)),
    memory: Number(((mem.used / mem.total) * 100).toFixed(2)),
    disk: Number(disk[0].use.toFixed(2))
  };
}

module.exports = getMetrics;
