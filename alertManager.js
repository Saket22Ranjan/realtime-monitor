let delay = 1000;

function checkAlerts(metrics) {
  if (metrics.cpu > 80 || metrics.memory > 75 || metrics.disk > 90) {
    console.log("⚠️ High Usage Alert!", metrics);
    delay = Math.min(delay * 2, 60000);
  } else {
    delay = 1000;
  }
}

module.exports = checkAlerts;
