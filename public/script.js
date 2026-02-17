const socket = io();

const labels = [];
const cpuData = [];
const memoryData = [];
const diskData = [];
const netInData = [];
const netOutData = [];

function createChart(id, label, dataArray) {
  return new Chart(document.getElementById(id), {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: dataArray,
        borderColor: "#2563eb",
        fill: false,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

const cpuChart = createChart("cpuChart", "CPU %", cpuData);
const memoryChart = createChart("memoryChart", "Memory %", memoryData);
const diskChart = createChart("diskChart", "Disk %", diskData);

const networkChart = new Chart(document.getElementById("networkChart"), {
  type: "line",
  data: {
    labels,
    datasets: [
      { label: "Download KB/s", data: netInData, borderColor: "#16a34a" },
      { label: "Upload KB/s", data: netOutData, borderColor: "#ea580c" }
    ]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

socket.on("metrics", data => {

  document.getElementById("cpuValue").textContent = data.cpu + "%";
  document.getElementById("memoryValue").textContent = data.memory + "%";
  document.getElementById("diskValue").textContent = data.disk + "%";
  document.getElementById("netInValue").textContent = data.netIn + " KB/s";
  document.getElementById("netOutValue").textContent = data.netOut + " KB/s";

  const time = new Date().toLocaleTimeString();

  if (labels.length > 15) {
    labels.shift();
    cpuData.shift();
    memoryData.shift();
    diskData.shift();
    netInData.shift();
    netOutData.shift();
  }

  labels.push(time);
  cpuData.push(data.cpu);
  memoryData.push(data.memory);
  diskData.push(data.disk);
  netInData.push(data.netIn);
  netOutData.push(data.netOut);

  cpuChart.update();
  memoryChart.update();
  diskChart.update();
  networkChart.update();
});
