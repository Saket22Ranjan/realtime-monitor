let delay = 1000;

function checkAlerts(metrics) {
  if (metrics.cpu > 80 || metrics.memory > 75 || metrics.disk > 90) {
    console.log(`⚠️ ALERT! High Usage Detected
CPU: ${metrics.cpu}%
Memory: ${metrics.memory}%
Disk: ${metrics.disk}%`);

    delay = Math.min(delay * 2, 60000); // max 1 min delay
  } else {
    delay = 1000; // reset if normal
  }
}

module.exports = checkAlerts;
