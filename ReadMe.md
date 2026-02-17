# 📊 Real-Time Monitoring System with Configurable Alert Management

A **Node.js-based real-time system monitoring dashboard** that tracks CPU, Memory, and Disk usage, stores metrics in MongoDB, and visualizes live data using WebSockets and Chart.js.
The system also implements **intelligent alerting with exponential backoff** to prevent alert fatigue.

---

## 🚀 Features

* ✅ Real-time monitoring of:

  * CPU Usage
  * Memory Usage
  * Disk Usage
* ✅ Live dashboard updates (no refresh required)
* ✅ Data stored for historical analysis (MongoDB)
* ✅ Threshold-based alert generation
* ✅ Exponential backoff to avoid repeated alerts
* ✅ Event-driven architecture
* ✅ Real-time charts using Chart.js
* ✅ Automated metric collection using Node-Cron

---

## 🏗️ System Architecture

```
System Metrics → Node.js Collector → MongoDB Storage
                         ↓
                 Alert Engine (Threshold + Backoff)
                         ↓
                 WebSocket Server (Socket.io)
                         ↓
                Live Dashboard (Chart.js)
```

---

## 🛠️ Tech Stack

| Layer                   | Technology            |
| ----------------------- | --------------------- |
| Backend                 | Node.js, Express.js   |
| Database                | MongoDB (Mongoose)    |
| Real-Time Communication | Socket.io             |
| System Metrics          | systeminformation     |
| Scheduling              | node-cron             |
| Visualization           | Chart.js              |
| Frontend                | HTML, CSS, JavaScript |

---

## 📁 Project Structure

```
realtime-monitor/
│
├── server.js              # Main server & WebSocket logic
├── db.js                  # MongoDB connection
├── monitor.js             # Collect system metrics
├── alertManager.js        # Alert + exponential backoff logic
│
├── models/
│   └── Metric.js          # MongoDB schema
│
└── public/
    ├── index.html         # Dashboard UI
    └── script.js          # Chart + live updates
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/realtime-monitor.git
cd realtime-monitor
```

---

### 2️⃣ Install Dependencies

```bash
npm install express mongoose socket.io systeminformation node-cron
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

Or use MongoDB Atlas and update the connection string in `db.js`.

---

### 4️⃣ Run the Server

```bash
node server.js
```

---

### 5️⃣ Open Dashboard

Visit:

```
http://localhost:3000
```

---

## 📊 How It Works

1. `node-cron` collects system metrics every 5 seconds.
2. Metrics are stored in MongoDB for logging.
3. Alert engine checks thresholds:

   * CPU > 80%
   * Memory > 75%
   * Disk > 90%
4. Alerts are throttled using **exponential backoff**.
5. WebSockets push live data to the dashboard.
6. Chart.js updates graphs dynamically.

---

## 🚨 Exponential Backoff Logic

Instead of sending alerts repeatedly:

| Event                  | Alert Delay           |
| ---------------------- | --------------------- |
| First threshold breach | Immediate             |
| Still high             | Delay doubles         |
| Still high             | Delay increases again |
| System normal          | Reset delay           |

This prevents **alert flooding**.

---

## 📈 Example Dashboard Output

* Live updating charts
* Time-series monitoring
* Real-time system health visibility

---

## 🎯 Use Cases

* DevOps Monitoring Simulation
* Cloud Infrastructure Learning
* Event-driven System Demonstration
* Academic Mini Project
* Real-Time Data Visualization Practice

---

## 🔮 Future Enhancements

* 📩 Email / SMS Notifications
* 🔐 User Authentication (JWT)
* ☁️ Cloud Deployment (AWS / Azure)
* 📊 Historical Analytics Dashboard
* 🤖 Predictive Monitoring using ML
* 📱 Mobile-Friendly UI
* 🌐 Network & Application Monitoring

---

## 📚 References

* Node.js Documentation
* MongoDB Documentation
* Socket.io Documentation
* Chart.js Documentation
* Event-Driven Architecture Concepts

---

## 👨‍💻 Author

**Developed as a Mini Project for learning Real-Time Monitoring Systems and DevOps Concepts.**

---

## 📜 License

This project is for educational purposes and can be freely modified or extended.
