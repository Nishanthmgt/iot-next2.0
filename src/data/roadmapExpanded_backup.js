export const roadmapSteps = [
  {
    level: "1",
    title: "Foundations (Beginner)",
    color: "#4ade80",
    explanation: "Master the core concepts of IoT and basic electronics that form the bedrock of all smart systems.",
    steps: [
      {
        name: "What is IoT?",
        desc: "Introduction to the Internet of Things ecosystem.",
        fullExplanation: "IoT is a network of physical objects embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. It ranges from ordinary household objects to sophisticated industrial tools."
      },
      {
        name: "History & Evolution",
        desc: "From the first connected toaster to 50B+ devices.",
        fullExplanation: "The concept of IoT dates back to the early 1980s. The first internet-connected appliance was a Coke machine at Carnegie Mellon University. Since then, the evolution of high-speed internet, cloud computing, and low-cost sensors has transformed it into a global phenomenon."
      },
      {
        name: "IoT vs Embedded Systems",
        desc: "Understanding the connectivity difference.",
        fullExplanation: "An embedded system is a combination of computer hardware and software designed for a specific function. IoT is essentially an embedded system with connectivity (Internet), allowing it to interact with other systems and users remotely."
      },
      {
        name: "Real-world Applications",
        desc: "Smart homes, cities, and industries.",
        fullExplanation: "IoT is everywhere: Smart thermostats (Nest), wearable health monitors (Fitbit), connected cars (Tesla), and Industrial IoT (IIoT) where machines predict their own maintenance needs."
      },
      {
        name: "Basic Electronics",
        desc: "Voltage, Current, and Ohm's Law.",
        fullExplanation: "Voltage (V) is the pressure, Current (I) is the flow, and Resistance (R) is the opposition. Ohm's Law (V=IR) is the most fundamental equation you will use to design safe and functional IoT hardware."
      }
    ]
  },
  {
    level: "2",
    title: "Microcontroller Basics",
    color: "#22c55e",
    explanation: "Learn about the 'brains' of IoT devices: Arduino, ESP8266, and ESP32.",
    steps: [
      {
        name: "Microcontroller Overview",
        desc: "Difference between MCU and CPU.",
        fullExplanation: "A Microcontroller (MCU) is a small computer on a single integrated circuit. Unlike a PC's CPU, an MCU includes memory, a processor core, and programmable input/output peripherals, all designed for specific control tasks."
      },
      {
        name: "Arduino & ESP Series",
        desc: "Choosing the right board for your project.",
        fullExplanation: "Arduino is great for learning basics. ESP8266/ESP32 are the kings of IoT because they have built-in Wi-Fi and Bluetooth at a very low cost, making them perfect for internet-connected projects."
      },
      {
        name: "GPIO Concepts",
        desc: "General Purpose Input/Output pins.",
        fullExplanation: "GPIO pins are the interface between the MCU and the real world. They can be configured as Inputs (reading a button) or Outputs (lighting an LED or controlling a motor)."
      },
      {
        name: "ADC & PWM",
        desc: "Analog inputs and motor/LED control.",
        fullExplanation: "ADC (Analog-to-Digital Converter) lets you read varying voltages (like from a light sensor). PWM (Pulse Width Modulation) lets you simulate analog output (like dimming an LED) by switching digital signals on/off very rapidly."
      }
    ]
  },
  {
    level: "3",
    title: "Programming Basics",
    color: "#10b981",
    explanation: "The logic that powers your devices. Moving from C++ basics to interrupt-driven design.",
    steps: [
      {
        name: "Embedded C/C++",
        desc: "Syntax and structures for microcontrollers.",
        fullExplanation: "Arduino uses a simplified version of C++. You'll need to understand `setup()` (runs once) and `loop()` (runs forever), variables, data types, and logic control like `if/else` and `for` loops."
      },
      {
        name: "Libraries & Functions",
        desc: "Modular coding and using community code.",
        fullExplanation: "Functions help organize code. Libraries are pre-written code packages that handle complex tasks (like driving a display) so you don't have to write everything from scratch."
      },
      {
        name: "Interrupts & Timing",
        desc: "Replacing delay() with non-blocking code.",
        fullExplanation: "The `delay()` function stops everything. Using `millis()` for timing or Hardware Interrupts for immediate response to events (like a button press) is critical for professional IoT coding."
      }
    ]
  },
  {
    level: "4",
    title: "Sensors (Intermediate)",
    color: "#059669",
    explanation: "Giving your devices 'senses' to perceive temperature, light, motion, and more.",
    steps: [
      {
        name: "Digital vs Analog Sensors",
        desc: "How sensors communicate data.",
        fullExplanation: "Digital sensors (like DHT11) send binary data (0s and 1s). Analog sensors (like a LDR) send a varying voltage. Understanding how to interpret these signals is key to data accuracy."
      },
      {
        name: "Environment Sensors",
        desc: "Temp, Humidity, Pressure, Gas.",
        fullExplanation: "Sensors like the DHT22 for environment, MQ series for gas detection, and BMP280 for pressure are the primary 'eyes' of IoT systems in agriculture and smart homes."
      },
      {
        name: "Motion & Distance",
        desc: "PIR and Ultrasonic sensing.",
        fullExplanation: "PIR sensors detect infrared heat (motion), while Ultrasonic sensors (HC-SR04) use sound waves to measure distance—perfect for obstacle avoidance or tank level monitoring."
      }
    ]
  },
  {
    level: "5",
    title: "Actuators & Output",
    color: "#0d9488",
    explanation: "Turning data into action: motors, relays, and interactive displays.",
    steps: [
      {
        name: "Relays & High Power",
        desc: "Controlling 220V appliances safely.",
        fullExplanation: "A relay is an electrically operated switch. It allows a low-power MCU (5V) to safely turn on/off high-power devices like lights, fans, or heaters."
      },
      {
        name: "Motors & Drivers",
        desc: "Servo, Stepper, and DC motors.",
        fullExplanation: "Servos provide precise angle control, Steppers provide precise step control, and DC motors provide constant rotation. Each requires a specific driver circuit (like L298N) to handle current."
      },
      {
        name: "Visual Feedback (LCD/OLED)",
        desc: "Displaying data locally.",
        fullExplanation: "Using LCD (16x2) or OLED (I2C) screens allows your device to provide real-time updates to the user without needing a smartphone or PC."
      }
    ]
  },
  {
    level: "6",
    title: "Communication Protocols",
    color: "#0891b2",
    explanation: "How components and devices talk: UART, SPI, I2C, and Wireless.",
    steps: [
      {
        name: "I2C & SPI Communication",
        desc: "Multi-device wiring on just 2 pins.",
        fullExplanation: "I2C uses just 2 wires to talk to 127 devices. SPI is faster but uses more wires. These are the standard ways sensors and displays talk to your microcontroller."
      },
      {
        name: "UART Serial",
        desc: "The standard for GPS and GSM modules.",
        fullExplanation: "UART is a simple point-to-point protocol. It's used for debugging via the Serial Monitor and for communicating with powerful modules like GPS or 4G LTE modems."
      },
      {
        name: "Short Range Wireless",
        desc: "Bluetooth, BLE, and RF.",
        fullExplanation: "Bluetooth Low Energy (BLE) is essential for wearables. RF (433MHz) is great for simple remote controls and long-range point-to-point communication."
      }
    ]
  },
  {
    level: "7",
    title: "Networking & Internet",
    color: "#0284c7",
    explanation: "The 'I' in IoT. Connecting your device to the global network using TCP/IP and HTTP.",
    steps: [
      {
        name: "IP, MAC & Ports",
        desc: "Network identity and addressing.",
        fullExplanation: "Every IoT device needs an IP address to communicate and a MAC address for unique hardware identity. Ports are the specific channels (like Port 80 for HTTP) data travels through."
      },
      {
        name: "MQTT Protocol",
        desc: "The language of modern IoT.",
        fullExplanation: "MQTT is a lightweight publish/subscribe protocol. It's designed for low bandwidth and unreliable networks, making it the industry standard for IoT messaging."
      },
      {
        name: "REST APIs & JSON",
        desc: "Interchanging data with web servers.",
        fullExplanation: "REST APIs allow your device to talk to web services (like weather data) using HTTP. JSON (JavaScript Object Notation) is the lightweight format used to package that data."
      }
    ]
  },
  {
    level: "8",
    title: "IoT Platforms",
    color: "#2563eb",
    explanation: "Building dashboards and using cloud services like Blynk, Adafruit IO, and ThingSpeak.",
    steps: [
      {
        name: "Cloud Connectivity",
        desc: "Pushing data to the cloud for logging.",
        fullExplanation: "Logging data to the cloud allows for long-term storage and analysis. Platforms like ThingSpeak provide easy graphs for your sensor readings."
      },
      {
        name: "Real-time Dashboards",
        desc: "Controlling devices from a phone app.",
        fullExplanation: "Services like Blynk allow you to build custom mobile apps with buttons and sliders to control your hardware from anywhere in the world."
      },
      {
        name: "OTA Updates",
        desc: "Updating code over the air.",
        fullExplanation: "Over-The-Air (OTA) updates allow you to fix bugs or add features to your IoT device without ever plugging it into a computer via USB."
      }
    ]
  },
  {
    level: "9",
    title: "Power & Hardware Design",
    color: "#4f46e5",
    explanation: "Designing for efficiency: Battery management, sleep modes, and PCB layout.",
    steps: [
      {
        name: "Low Power Design",
        desc: "Making batteries last for years.",
        fullExplanation: "Modern IoT devices spend 99% of their time 'asleep'. Deep sleep modes on the ESP32 can reduce current to micro-amps, essential for remote solar-powered sensors."
      },
      {
        name: "Voltage Regulation",
        desc: "Safe power for sensitive electronics.",
        fullExplanation: "MCUs usually need 3.3V or 5V. Voltage regulators (like the AMS1117) ensure a steady supply regardless of battery voltage, preventing fried components."
      },
      {
        name: "PCB Basics",
        desc: "Designing your own circuit boards.",
        fullExplanation: "Moving from breadboards to PCBs using tools like EasyEDA or KiCad makes your projects durable, professional, and ready for commercial use."
      }
    ]
  },
  {
    level: "10",
    title: "Advanced IoT",
    color: "#7c3aed",
    explanation: "Edge Computing, AI integration, and Industrial IoT (IIoT) standards.",
    steps: [
      {
        name: "Edge Computing",
        desc: "Processing data on the device, not cloud.",
        fullExplanation: "Instead of sending raw data to the cloud, Edge computing processes it locally. This saves bandwidth and allows for millisecond-level reaction times."
      },
      {
        name: "AI & ML for IoT",
        desc: "TinyML and predictive maintenance.",
        fullExplanation: "TinyML allows you to run machine learning models (like voice or anomaly detection) directly on a microcontroller, enabling truly 'smart' local behavior."
      },
      {
        name: "Industrial IoT (IIoT)",
        desc: "Modbus, OPC UA, and PLC integration.",
        fullExplanation: "Industrial environments use robust protocols like Modbus and OPC UA. Understanding these allows you to bridge hobbyist IoT with factory floor automation."
      }
    ]
  },
  {
    level: "11",
    title: "Security & Scaling",
    color: "#9333ea",
    explanation: "Protecting your data and managing thousands of devices simultaneously.",
    steps: [
      {
        name: "IoT Security Basics",
        desc: "SSL/TLS, Encryption, and Certificates.",
        fullExplanation: "Security is the biggest challenge in IoT. You must use SSL/TLS for all communication and unique device certificates to prevent hacking and data leaks."
      },
      {
        name: "Device Provisioning",
        desc: "Authenticating new devices at scale.",
        fullExplanation: "Provisioning is the process of getting a new device online and securely registered with your cloud platform. This must be automated for large deployments."
      }
    ]
  },
  {
    level: "12",
    title: "Project Management",
    color: "#c026d3",
    explanation: "From prototype to product. Documentation, debugging, and industry readiness.",
    steps: [
      {
        name: "Product Development",
        desc: "The lifecycle of an IoT product.",
        fullExplanation: "Developing a product involves prototyping, testing, enclosure design (3D printing), certification (FCC/CE), and mass manufacturing."
      },
      {
        name: "Industry Trends",
        desc: "Matter, Thread, and 5G in IoT.",
        fullExplanation: "The future of IoT is in standards like Matter (for smart homes) and 5G (for high-density industrial applications). Staying updated is key to a successful career."
      }
    ]
  }
];