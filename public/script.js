const socket = io();

const labels = [];
const cpuData = [];
const memoryData = [];
const diskData = [];

function createChart(id, label, dataArray) {
  return new Chart(document.getElementById(id), {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: dataArray,
        borderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { min: 0, max: 100 }
      }
    }
  });
}

const cpuChart = createChart("cpuChart", "CPU Usage %", cpuData);
const memoryChart = createChart("memoryChart", "Memory Usage %", memoryData);
const diskChart = createChart("diskChart", "Disk Usage %", diskData);

socket.on("metrics", (data) => {
  const time = new Date().toLocaleTimeString();

  if (labels.length > 12) {
    labels.shift();
    cpuData.shift();
    memoryData.shift();
    diskData.shift();
  }

  labels.push(time);
  cpuData.push(data.cpu);
  memoryData.push(data.memory);
  diskData.push(data.disk);

  cpuChart.update();
  memoryChart.update();
  diskChart.update();
});
