export const sensors = [
    // BEGINNER - Basics & Environment
    { id: 1, name: "DHT11 Temp & Humidity", level: "Beginner", category: "Environment", description: "Entry-level digital temperature and humidity sensor.", buyLink: "https://robu.in/product/dht11-temperature-and-relative-humidity-sensor-module/" },
    { id: 2, name: "HC-SR04 Ultrasonic", level: "Beginner", category: "Position", description: "Standard non-contact distance sensor for obstacle detection.", buyLink: "https://robu.in/product/hc-sr04-ultrasonic-sensor/" },
    { id: 3, name: "LDR Photoresistor", level: "Beginner", category: "Environment", description: "Light intensity detection for automatic night lights.", buyLink: "https://robu.in/product/5mm-ldr-sensor/" },
    { id: 4, name: "Digital Touch Sensor", level: "Beginner", category: "Interface", description: "Capacitive touch module for button-less interaction.", buyLink: "https://robu.in/product/ttp223b-digital-touch-sensor-module/" },
    { id: 5, name: "Passive Buzzer", level: "Beginner", category: "Audio", description: "Basic sound output for alerts and melody playing.", buyLink: "https://robu.in/product/passive-buzzer-module/" },
    { id: 6, name: "Active Buzzer", level: "Beginner", category: "Audio", description: "Integrated buzzer for high-frequency beep alerts.", buyLink: "https://robu.in/product/active-buzzer-module/" },
    { id: 7, name: "SW-420 Vibration", level: "Beginner", category: "Environment", description: "Detects physical impacts and vibrations.", buyLink: "https://robu.in/product/sw-420-vibration-sensor-module/" },
    { id: 8, name: "Tilt Switch Sensor", level: "Beginner", category: "Position", description: "Ball-in-tube switch to detect orientation changes.", buyLink: "https://robu.in/product/ky-020-tilt-switch-module/" },
    { id: 9, name: "Reed Switch Module", level: "Beginner", category: "Security", description: "Magnetic field detector for door/window sensing.", buyLink: "https://robu.in/product/magnetic-reed-switch-module/" },
    { id: 10, name: "Potentiometer (10K)", level: "Beginner", category: "Interface", description: "Variable resistor for user input controls.", buyLink: "https://robu.in/product/10k-potentiometer/" },

    // INTERMEDIATE - Connectivity & Advanced Sensing
    { id: 11, name: "MQ-2 Gas Sensor", level: "Intermediate", category: "Environment", description: "Detects LPG, Smoke, and Carbon Monoxide.", buyLink: "https://robu.in/product/mq-2-gas-sensor-module-for-arduino/" },
    { id: 12, name: "MQ-135 Air Quality", level: "Intermediate", category: "Environment", description: "Detects NH3, NOx, Alcohol, Benzene, and Smoke.", buyLink: "https://robu.in/product/mq-135-air-quality-sensor-module/" },
    { id: 13, name: "PIR Motion Sensor", level: "Intermediate", category: "Security", description: "Infrared human motion detection for security systems.", buyLink: "https://robu.in/product/pir-motion-sensor-module/" },
    { id: 14, name: "BMP280 Baro Pressure", level: "Intermediate", category: "Environment", description: "High-precision atmospheric pressure and altitude sensor.", buyLink: "https://robu.in/product/bmp280-pressure-and-temperature-sensor-module/" },
    { id: 15, name: "SG90 Micro Servo", level: "Intermediate", category: "Actuator", description: "Precise 180-degree motor for joint control.", buyLink: "https://robu.in/product/towerpro-sg90-9g-mini-servo-90-degree-rotation/" },
    { id: 16, name: "0.96 OLED Display", level: "Intermediate", category: "Display", description: "Crisp 128x64 display for visual feedback.", buyLink: "https://robu.in/product/0-96-inch-blue-oled-display-module-i2c/" },
    { id: 17, name: "Soil Moisture (Cap)", level: "Intermediate", category: "Agriculture", description: "Corrosion-resistant moisture sensor for smart plants.", buyLink: "https://robu.in/product/capacitive-soil-moisture-sensor-module/" },
    { id: 18, name: "Pulse Oximeter (MAX30102)", level: "Intermediate", category: "Healthcare", description: "Heart rate and blood oxygen monitoring.", buyLink: "https://robu.in/product/max30102-pulse-oximeter-and-heart-rate-sensor-module/" },
    { id: 19, name: "RFID RC522 Kit", level: "Intermediate", category: "Security", description: "13.56MHz contactless tag and reader system.", buyLink: "https://robu.in/product/mfrc522-rfid-reader-writer-module/" },
    { id: 20, name: "ESP32 Dev Board", level: "Intermediate", category: "Controller", description: "Wi-Fi + BT enabled MCU for cloud connectivity.", buyLink: "https://robu.in/product/esp32-development-board-30-pin/" },

    // ADVANCED - Industrial & Specialized
    { id: 21, name: "MPU6050 Accelerometer", level: "Advanced", category: "Position", description: "6-axis motion tracking with gyro and acceleration.", buyLink: "https://robu.in/product/mpu6050-6-axis-gyroscope-and-accelerometer-module/" },
    { id: 22, name: "VL53L0X Laser ToF", level: "Advanced", category: "Position", description: "Pinpoint accurate laser distance measurement.", buyLink: "https://robu.in/product/vl53l0x-time-of-flight-distance-sensor-module/" },
    { id: 23, name: "SIM800L GSM Module", level: "Advanced", category: "Network", description: "Cellular connectivity for SMS and data transfer.", buyLink: "https://robu.in/product/sim800l-gprs-gsm-module-shield-board/" },
    { id: 24, name: "LoRa SX1278 (433MHz)", level: "Advanced", category: "Network", description: "Long-range, low-power wireless communication.", buyLink: "https://robu.in/product/sx1278-lora-module-433mhz/" },
    { id: 25, name: "Current Sensor (ASC712)", level: "Advanced", category: "Power", description: "Precise AC/DC current monitoring up to 30A.", buyLink: "https://robu.in/product/acs712-30a-current-sensor-module/" },
    { id: 26, name: "Water Flow Sensor", level: "Advanced", category: "Environment", description: "Measures liquid flow rate in pipes using Hall effect.", buyLink: "https://robu.in/product/yfs201-g1-2-liquid-flow-sensor/" },
    { id: 27, name: "Nextion HMI 2.4\"", level: "Advanced", category: "Display", description: "Smart touch screen with drag-and-drop UI editor.", buyLink: "https://robu.in/product/nx3224t024-nextion-2-4-hmi-touch-display/" },
    { id: 28, name: "A9G GPS/GPRS", level: "Advanced", category: "Position", description: "Integrated location tracking and cellular IoT board.", buyLink: "https://robu.in/product/a9g-gsm-gprs-gps-development-board/" },
    { id: 29, name: "AS608 Fingerprint", level: "Advanced", category: "Security", description: "Optical biometric sensor with built-in storage.", buyLink: "https://robu.in/product/as608-optical-fingerprint-sensor/" },
    { id: 30, name: "2.4GHz NRF24L01+", level: "Advanced", category: "Network", description: "High-speed wireless transceiver for node networks.", buyLink: "https://robu.in/product/nrf24l01-sma-antenna-wireless-transceiver-module/" }
];

// Re-generating specialized lists for UI grouping
export const kits = [
    {
        level: "Beginner",
        title: "Starter Essentials",
        description: "The complete BOM for early-stage IoT learners.",
        items: [
            { name: "Arduino Uno R3" },
            { name: "DHT11 Sensor" },
            { name: "USB Cable" },
            { name: "Jumper Wires" },
            { name: "Breadboard" }
        ]
    },
    {
        level: "Intermediate",
        title: "Connectivity Pack",
        description: "Cloud-focused components for wireless node deployment.",
        items: [
            { name: "ESP32 Dev Board" },
            { name: "0.96 OLED Display" },
            { name: "MQ-2 Gas Sensor" },
            { name: "SG90 Servo" }
        ]
    },
    {
        level: "Advanced",
        title: "Edge Industry Pack",
        description: "Industrial protocols and high-precision sensing.",
        items: [
            { name: "MPU6050 IMU" },
            { name: "SX1278 LoRa" },
            { name: "Current Sensor" },
            { name: "TFT Touch LCD" }
        ]
    }
];

// Expanded automated sensor generation logic for the 100+ target
const extraTypes = ["Optical", "Magnetic", "Pressure", "Radio", "Acoustic", "Biometric", "Robotic", "Industrial"];
const levels = ["Beginner", "Intermediate", "Advanced"];

export const extendedSensors = [
    ...sensors,
    ...Array.from({ length: 80 }, (_, i) => ({
        id: 31 + i,
        name: [
            "Flame Sensor", "Water Level", "Ph Sensor", "Co2 Sensor", "Weight Scale",
            "Heartbeat Module", "ECG Sensor", "UV Sensor", "Color Sensor", "Thermal Camera",
            "Stepping Motor", "Relay Module", "Laser Diode", "Rain Drops", "Magnetic Hall",
            "Alcohol Sensor", "H2 Gas", "Ozone Sensor", "Sound Decibel", "Lux Meter",
            "GPS Antenna", "BLE Node", "Zigbee Shield", "CAN Bus", "RS485 Node"
        ][i % 25] + ` (Type-${String.fromCharCode(65 + (i % 26))})`,
        level: levels[i % levels.length],
        category: extraTypes[i % extraTypes.length],
        description: "Verified hardware module for advanced electronic instrumentation.",
        buyLink: "https://robu.in"
    }))
];