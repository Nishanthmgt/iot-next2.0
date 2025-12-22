export const roadmapSteps = [
  {
    level: "Beginner",
    title: "Foundations of IoT",
    color: "#3b82f6",
    explanation: "Master the basics of electronics, microcontrollers, and simple sensor integration to build your first connected device.",
    steps: [
      { name: "Electronics 101", desc: "Understanding voltage, current, resistance, and breadboarding basics." },
      { name: "Arduino Programming", desc: "Learning C++ logic, digital/analog I/O, and serial communication." },
      { name: "Basic Sensors", desc: "Interfacing with DHT11 (Temp/Humidity) and Ultrasonic sensors." },
      { name: "Local Control", desc: "Building a standalone system that reacts to environmental triggers." }
    ]
  },
  {
    level: "Intermediate",
    title: "Connectivity & Protocols",
    color: "#8b5cf6",
    explanation: "Bridge the gap between hardware and the internet using industry-standard communication protocols.",
    steps: [
      { name: "ESP32 & Wi-Fi", desc: "Moving from wired Arduino to wireless SOCs with built-in networking." },
      { name: "MQTT Protocol", desc: "Mastering the lightweight messaging protocol used in 90% of IoT projects." },
      { name: "HTTP APIs", desc: "Fetching data from weather services or sending data to Google Sheets." },
      { name: "Dashboard Design", desc: "Creating mobile-friendly interfaces using platforms like Blynk or Node-RED." }
    ]
  },
  {
    level: "Advanced",
    title: "Industrial & Cloud",
    color: "#f43f5e",
    explanation: "Scale your projects to handle thousands of devices with enterprise-grade security and cloud processing.",
    steps: [
      { name: "AWS/Azure IoT", desc: "Integrating hardware with professional cloud infrastructures for big data." },
      { name: "LoRaWAN & Cellular", desc: "Building long-range networks for agriculture or smart city applications." },
      { name: "IoT Security", desc: "Implementing SSL/TLS encryption and secure boot to protect device data." },
      { name: "Custom PCB Design", desc: "Moving from breadboards to professional printed circuit board manufacturing." }
    ]
  }
];