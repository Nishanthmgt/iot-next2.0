/**
 * Comprehensive IoT Knowledge Base - All Sensors, Boards, Protocols, Concepts
 */

// Massive sensor & device knowledge database
export const SENSOR_KNOWLEDGE = {
    'mq2': {
        fullName: 'MQ-2 Gas Sensor',
        type: 'gas',
        description: 'Detects LPG, propane, methane, hydrogen, smoke',
        specs: { range: '200-10000ppm', voltage: '5V', preheat: '24-48 hours' },
        pins: 'VCC, GND, AOUT (analog), DOUT (digital)',
        protocol: 'Analog/Digital',
        library: 'MQUnifiedsensor',
        commonUse: 'Gas leak detection, smoke alarms, air quality monitoring',
        tips: 'Needs 24-48hr preheat for accuracy, calibrate in clean air',
        troubleshooting: 'Always high: needs preheat time, check in fresh air for calibration'
    },
    'pir': {
        fullName: 'HC-SR501 PIR Motion Sensor',
        type: 'motion',
        description: 'Passive Infrared sensor that detects body motion by measuring change in IR levels.',
        specs: { range: '3m to 7m', angle: '<120 degrees', voltage: '5V-20V' },
        pins: 'VCC, GND, OUT (Digital)',
        tips: 'Use the two potentiometers to adjust sensitivity and delay time.',
        troubleshooting: 'If it triggers randomly: check for heat sources or air currents; ensure stable power supply.'
    },
    'pt100': {
        fullName: 'PT100 RTD Temperature Sensor',
        type: 'environmental',
        description: 'Resistance Temperature Detector (RTD) for industrial high-precision measurement.',
        mechanism: 'Platinum resistance changes predictably with temperature.',
        specs: { range: '-200°C to +850°C', accuracy: 'Class A/B high precision' },
        industry_use: 'Pharmaceutical labs, food processing, industrial furnaces.',
        tips: 'Requires a Wheatstone bridge circuit or a specialized amplifier like MAX31865.'
    },
    'thermocouple_k': {
        fullName: 'K-Type Thermocouple',
        type: 'environmental',
        description: 'The most common thermocouple for extreme temperature ranges.',
        mechanism: 'Seebeck effect: generates a small voltage proportional to temp gradient.',
        specs: { range: '-200°C to +1260°C', durability: 'Very high' },
        pros: 'Much wider range than PT100, extremely rugged.',
        cons: 'Less accurate than PT100, requires "Cold Junction Compensation."'
    },
    'soil_moisture': {
        fullName: 'Soil Moisture Sensor (Capacitive)',
        type: 'environmental',
        description: 'Measures the water content in soil. Capacitive version is preferred over resistive as it does not corrode.',
        protocol: 'Analog (0-3.3V/5V)',
        tips: 'Calibration is key: measure "Dry" (in air) and "Wet" (in water) values to map your percentage.',
        commonUse: 'Automatic plant watering systems, smart agriculture.'
    },
    'rc522': {
        fullName: 'MFRC522 RFID Module',
        type: 'communication',
        description: 'RFID reader/writer for 13.56MHz frequency tags and cards.',
        protocol: 'SPI',
        library: 'MFRC522 by github.com/miguelbalboa',
        commonUse: 'Access control systems, attendance tracking, contactless payments.'
    },
    'gps': {
        fullName: 'NEO-6M GPS Module',
        type: 'location',
        description: 'Global Positioning System module for tracking coordinates, speed, and time.',
        protocol: 'UART (Serial)',
        baudRate: '9600',
        tips: 'Needs a clear view of the sky to get a "lock". The LED will blink when it has a lock.'
    },
    // Temperature & Humidity
    'dht11': {
        fullName: 'DHT11 Temperature & Humidity Sensor',
        type: 'environmental',
        description: 'Digital temperature and humidity sensor with calibrated output',
        specs: { range: '-20°C to 60°C, 20-90% RH', accuracy: '±2°C, ±5% RH', voltage: '3.3-5V' },
        pins: 'VCC, GND, DATA (with 10kΩ pull-up)',
        protocol: 'One-wire digital',
        library: 'DHT sensor library by Adafruit',
        commonUse: 'Weather stations, home automation, climate monitoring',
        tips: 'Wait 2 seconds between readings, use pull-up resistor on DATA pin',
        troubleshooting: 'If getting NaN: check wiring, add pull-up resistor, increase delay between reads'
    },
    'dht22': {
        fullName: 'DHT22/AM2302 Temperature & Humidity Sensor',
        type: 'environmental',
        description: 'Higher precision version of DHT11',
        specs: { range: '-40°C to 80°C, 0-100% RH', accuracy: '±0.5°C, ±2% RH', voltage: '3.3-5V' },
        pins: 'VCC, GND, DATA (with 10kΩ pull-up)',
        protocol: 'One-wire digital',
        library: 'DHT sensor library by Adafruit',
        commonUse: 'Professional weather stations, greenhouses, HVAC systems',
        tips: 'More accurate than DHT11, better for outdoor use'
    },
    'bmp280': {
        fullName: 'BMP280 Barometric Pressure Sensor',
        type: 'environmental',
        description: 'Digital pressure and temperature sensor',
        specs: { range: '300-1100 hPa, -40°C to 85°C', accuracy: '±1 hPa, ±1°C', voltage: '3.3V' },
        pins: 'VCC, GND, SDA, SCL',
        protocol: 'I2C (address 0x76 or 0x77)',
        library: 'Adafruit BMP280 Library',
        commonUse: 'Altitude measurement, weather prediction, indoor navigation'
    },
    'bme280': {
        fullName: 'BME280 Humidity and Pressure Sensor',
        type: 'environmental',
        description: 'Great all-in-one environmental sensor measuring temp, humidity, and pressure.',
        specs: { range: '0-100% RH, 300-1100 hPa, -40-85°C', voltage: '3.3V' },
        protocol: 'I2C/SPI',
        library: 'Adafruit BME280 Library'
    },
    'bme680': {
        fullName: 'BME680 (Air Quality & Gas)',
        type: 'environmental',
        description: 'Highly integrated environmental sensor that measures gas (VOC), pressure, humidity, and temperature.',
        specs: { voltage: '3.3V', iaq: 'Indoor Air Quality Index' },
        mechanism: 'Heats a metal oxide film to detect Volatile Organic Compounds (VOCs).',
        industry_use: 'Smart offices, air purifiers, forest fire detection.',
        tips: 'Requires a "burn-in" period of approx 20 mins for stable gas readings.'
    },
    'vl53l0x': {
        fullName: 'VL53L0X Time-of-Flight (ToF) Sensor',
        type: 'distance',
        description: 'World smallest ToF ranging sensor based on FlightSense technology.',
        mechanism: 'Measures how long it takes for a laser pulse to bounce back.',
        industry_use: 'Smartphone autofocus, drone altitude, user detection.',
        pros: 'Much more accurate than ultrasonic; not affected by object color or reflection.',
        tips: 'Keep the sensor window clean; even a smudge can ruin the laser flight.'
    },

    // Motion & Position
    'mpu6050': {
        fullName: 'MPU6050 6-Axis Gyroscope & Accelerometer',
        type: 'motion',
        description: '3-axis gyroscope + 3-axis accelerometer in one chip',
        specs: { gyroRange: '±250 to ±2000°/s', accelRange: '±2g to ±16g', voltage: '3.3V' },
        pins: 'VCC, GND, SDA, SCL, INT (optional)',
        protocol: 'I2C (address 0x68 or 0x69)',
        library: 'MPU6050 by Electronic Cats',
        commonUse: 'Drones, self-balancing robots, gesture recognition',
        tips: 'Calibrate before use, use Complementary or Kalman filter for stability'
    },
    'hc-sr04': {
        fullName: 'HC-SR04 Ultrasonic Distance Sensor',
        type: 'distance',
        description: 'Ultrasonic ranging module for distance measurement',
        specs: { range: '2cm to 400cm', accuracy: '±3mm', voltage: '5V' },
        pins: 'VCC, GND, TRIG, ECHO',
        commonUse: 'Obstacle avoidance, parking sensors',
        tips: 'ECHO pin needs a voltage divider if used with 3.3V boards like ESP32'
    },

    // Light & Color
    'ldr': {
        fullName: 'LDR (Light Dependent Resistor)',
        type: 'light',
        description: 'Photoresistor that changes resistance based on light intensity',
        protocol: 'Analog',
        commonUse: 'Automatic night lights, solar tracking',
        tips: 'Use as a voltage divider with a 10k resistor'
    },

    // Actuators
    'servo': {
        fullName: 'Servo Motor (SG90/MG995)',
        type: 'actuator',
        description: 'Precision position control motor',
        specs: { rotation: '0-180 degrees', voltage: '4.8V-6V' },
        pins: 'Brown (GND), Red (VCC), Orange (Signal)',
        protocol: 'PWM',
        library: 'Servo.h (Arduino) or ESP32Servo',
        tips: 'Power servos from an external source, not the board pins, to avoid resets'
    },
    'relay': {
        fullName: 'Relay Module',
        type: 'actuator',
        description: 'Electromagnetic switch for controlling high voltage appliances',
        specs: { capacity: '10A 250VAC / 10A 30VDC', voltage: '5V/3.3V trigger' },
        pins: 'VCC, GND, IN (Control)',
        commonUse: 'Smart home, switching light bulbs, controlling AC fans',
        tips: 'Use "Active Low" modules for easier logic with ESP32/Arduino'
    },
    'stepper': {
        fullName: 'Stepper Motor (28BYJ-48 / NEMA 17)',
        type: 'actuator',
        description: 'Motor for precise rotational steps',
        commonUse: '3D printers, CNC machines, precision sliders',
        driver: 'ULN2003 (for 28BYJ-48) or A4988 (for NEMA 17)'
    },

    'lcd': {
        fullName: 'LCD 16x2 with I2C',
        type: 'display',
        description: 'Classic character display for simple data output',
        protocol: 'I2C (using PCF8574 adapter)',
        library: 'LiquidCrystal_I2C'
    },

    // Industrial Drivers & ICs
    'l298n': {
        fullName: 'L298N Dual H-Bridge Motor Driver',
        type: 'driver',
        description: 'BJT-based dual motor driver for high voltage applications.',
        specs: { voltage: '5V-46V', current: '2A per channel' },
        mechanism: 'Uses bipolar junction transistors (BJTs) to switch high current.',
        industry_use: 'CNC machines, heavy robotics, high-voltage conveyor belts.',
        pros: 'Supports high voltage motors, cheap, robust.',
        cons: 'Very inefficient (~60%), creates heat, requires major heatsinking.',
        tips: 'Expect a 2V-3V voltage drop. Use active cooling if running near 2A.'
    },
    'tb6612fng': {
        fullName: 'TB6612FNG High-Efficiency Motor Driver',
        type: 'driver',
        description: 'MOSFET-based compact driver for precision and efficiency.',
        specs: { voltage: '2.5V-13.5V', current: '1.2A continuous' },
        mechanism: 'Uses MOSFETs for extremely low internal resistance.',
        industry_use: 'Drones, battery-powered robotics, compact medical devices.',
        pros: 'High efficiency (90%+), negligible heat, supports 100kHz PWM.',
        tips: 'Best for battery operation. Can be paralleled (2.4A) if needed.'
    },
    'adxl345': {
        fullName: 'ADXL345 Industrial Accelerometer',
        type: 'motion',
        description: 'High-resolution, ultra-low power 3-axis accelerometer.',
        specs: { resolution: '13-bit', range: '±16g', power: '23µA' },
        mechanism: 'MEMS-based capacitive sensing with high shock resistance (10,000g).',
        industry_use: 'Structural health monitoring, vibration analysis in machinery, tilt sensing.',
        pros: 'Very low noise, highly stable over temperature.',
        tips: 'Preferred over MPU6050 for industrial vibration monitoring.'
    },
    'bmp388': {
        fullName: 'BMP388 Precision Pressure Sensor',
        type: 'environmental',
        description: 'Next-gen high-precision barometric pressure sensor.',
        specs: { precision: '±8Pa', resolution: '24-bit' },
        industry_use: 'Drone altitude hold, floor level detection, precision weather.',
        tips: 'Much more accurate and stable than the BMP180/BMP280.'
    },
    'industrial_vibration': {
        fullName: 'Industrial Vibration Sensor (IEPE/MEMS)',
        type: 'industrial',
        description: 'High-frequency vibration monitor for motor health.',
        specs: { bandwidth: '10kHz+', protocol: '4-20mA / Modbus' },
        industry_use: 'Predictive maintenance, turbine monitoring, CNC health.',
        tips: 'Mount firmly on the motor housing, not the plastic casing.'
    },
    'industrial_pressure': {
        fullName: 'Industrial Pressure Transmitter (4-20mA)',
        type: 'industrial',
        description: 'Stainless steel sensor for liquid/gas pressure in pipes.',
        specs: { range: '0-100 Bar', signal: '4-20mA Current Loop' },
        industry_use: 'Oil & Gas, Water treatment, Hydraulics.',
        tips: 'Requires a 250-ohm resistor to convert 4-20mA to 1-5V for MCUs.'
    },
    'industrial_flow': {
        fullName: 'Electromagnetic Flow Meter',
        type: 'industrial',
        description: 'Non-intrusive flow rate measurement for conductive liquids.',
        specs: { protocol: 'Modbus RTU / HART', voltage: '24VDC' },
        industry_use: 'Chemical processing, agricultural irrigation.',
        tips: 'Ensure the pipe is full for accurate readings.'
    },
    'industrial_current': {
        fullName: 'Hall-Effect Current Transformer (CT)',
        type: 'industrial',
        description: 'Non-contact AC current measurement for high-power lines.',
        specs: { range: '0-1000A', isolation: 'Galvanic' },
        industry_use: 'Power grid monitoring, industrial HVAC, solar farms.',
        tips: 'Always use the split-core version for retrofitting live wires.'
    }
};

// Board knowledge expansion
export const BOARD_KNOWLEDGE = {
    'esp32': {
        fullName: 'ESP32 Development Board',
        description: 'Dual-core WiFi + Bluetooth microcontroller',
        specs: { mcu: 'LX6 Dual-Core', speed: '240MHz', flash: '4MB', ram: '520KB', voltage: '3.3V' },
        wifi: '802.11 b/g/n',
        bluetooth: 'Dual-mode (Classic + BLE)',
        peripherals: 'ADC, DAC, I2C, SPI, UART, PWM, Touch',
        tips: 'Use Deep Sleep to save battery. Pin 2 is often the onboard LED',
        compatibleWith: ['dht11', 'bmp280', 'oled', 'relay', 'servo', 'mpu6050']
    },
    'arduino_uno': {
        fullName: 'Arduino Uno R3',
        description: 'The industry standard for learning electronics',
        specs: { mcu: 'ATmega328P', speed: '16MHz', voltage: '5V' },
        peripherals: '14 Digital, 6 Analog, I2C, SPI, UART',
        tips: 'Great for 5V sensors. Very robust against wiring mistakes'
    },
    'ra8p1': {
        fullName: 'Renesas RA8P1 (Cortex-M85)',
        description: 'World\'s first Cortex-M85 MCU with Helium technology for AI.',
        specs: { mcu: 'Cortex-M85', speed: '480MHz', ai: 'Arm Ethos-U55 NPU' },
        performance: 'Top-tier performance for edge vision and predictive analytics.',
        tips: 'Best for TinyML projects like real-time gesture or voice recognition.'
    },
    'mg24': {
        fullName: 'Silicon Labs EFR32MG24',
        description: 'Matter-ready wireless SoC with Secure Vault technology.',
        specs: { mcu: 'Cortex-M33', speed: '78MHz', wireless: 'Multi-protocol (Matter/Thread/Zigbee)' },
        security: 'PSA Level 3 Certified, Secure Vault High.',
        tips: 'The go-to chip for high-security Matter smart home products.'
    },
    'apollo510': {
        fullName: 'Ambiq Apollo 510',
        description: 'Ultra-low power hotspot for battery-critical AI gadgets.',
        specs: { mcu: 'Cortex-M55', performance: 'Industry leading power/performance ratio' },
        power: 'Sub-threshold Power Optimized Technology (SPOT).',
        tips: 'Use this for wearables that need to run for months on a coin cell.'
    },
    'ma35d1': {
        fullName: 'Nuvoton NuMicro MA35D1',
        description: 'Heterogeneous multi-core MPU for advanced HMI and IIoT.',
        specs: { cores: 'Dual Cortex-A35 (800MHz) + Cortex-M4 (180MHz)' },
        industry_use: 'Industrial gateways, EV chargers, complex HMI panels.',
        tips: 'Perfect for Linux-based IoT gateways with real-time M4 control.'
    },
    'esp32s3': {
        fullName: 'ESP32-S3 (Advanced AI & USB)',
        description: 'The ultimate IoT chip with native USB and AI acceleration.',
        specs: { mcu: 'Dual-core LX7', speed: '240MHz', ram: '512KB', usb: 'OTG + Host' },
        features: ['AI Vector Instructions', 'Native USB Support', 'BLE 5.0 + WiFi'],
        tips: 'Best choice for smart cameras, voice assistants, and native USB devices.'
    },
    'esp32c3': {
        fullName: 'ESP32-C3 (RISC-V Budget)',
        description: 'Cost-effective, secure RISC-V replacement for ESP8266.',
        specs: { mcu: 'Single-core RISC-V', speed: '160MHz', ram: '400KB' },
        features: ['BLE 5.0', 'WiFi', 'Secure Boot'],
        tips: 'Lower power and pin-compatible with many ESP8266 modules.'
    },
    'stm32': {
        fullName: 'STM32 Industrial Microcontrollers',
        description: 'World-leading 32-bit Arm Cortex-M family for industrial IoT.',
        families: {
            'U series': 'Ultra-low-power (U0, U3)',
            'WB series': 'Wireless BLE/Matter',
            'WL series': 'LoRa integrated',
            'N series': 'AI & Neural-ART Accelerator',
            'H7 series': 'High-performance (up to 480MHz, dual-core options)'
        },
        ecosystem: 'STM32Cube (IDE, MX, Monitor), STM32Trust for security.',
        tips: 'Use STM32CubeMX for graphical hardware configuration.'
    },
    'arduino_nano_rp2040': {
        fullName: 'Arduino Nano RP2040 Connect',
        description: 'The "Everything" board: WiFi, BLE, 6-axis IMU, and Microphone in a Nano form factor.',
        specs: { mcu: 'Dual-core Raspberry Pi RP2040', wifi: 'Nina W102', sensors: 'LSM6DSOX, MP34DT05' },
        pros: 'Massive sensor density, dual-core power, Python-ready.',
        tips: 'Ideal for Edge AI and TinyML audio/gesture recognition.'
    },
    'arduino_giga_r1': {
        fullName: 'Arduino GIGA R1 WiFi',
        description: 'Industrial-grade dual-core power in a Mega form factor.',
        specs: { mcu: 'STM32H747XI (Cortex-M7 @480MHz + M4 @240MHz)', ram: '2MB', pins: '76 I/O' },
        pros: 'Can run two programs simultaneously, dual-core offloading, massive I/O.',
        tips: 'Use the M7 for UI/Processing and the M4 for real-time sensor control.'
    },
    'arduino_portenta_h7': {
        fullName: 'Arduino Portenta H7',
        description: 'The pinnacle of Arduino hardware for industrial and AI apps.',
        specs: { mcu: 'Dual Core STM32H747', wireless: 'Wi-Fi/Bluetooth', crypto: 'ATECC608A' },
        pros: 'Industrial temp range, high-level code (Python/JS) support.',
        tips: 'Best for industrial automation and secure IoT gateways.'
    },
    'arduino_nicla_sense': {
        fullName: 'Arduino Nicla Sense ME',
        description: 'Tiny, powerful industrial sensor node with Bosch AI sensors.',
        specs: { size: '22.86 x 22.86 mm', sensors: 'BHI260AP, BMP390, BMM150, BME688' },
        pros: 'Unmatched sensor density for its size, ultra-low power.',
        tips: 'Use for structural health monitoring or smart agriculture.'
    },
    'arduino_mkr_wifi_1010': {
        fullName: 'Arduino MKR WiFi 1010',
        description: 'The standard for IoT prototyping in the MKR form factor.',
        specs: { mcu: 'SAMD21 (Cortex-M0+)', wifi: 'u-blox NINA-W10', crypto: 'ECC508' },
        pros: 'High-speed 32-bit CPU, integrated crypto for secure cloud connection.',
        tips: 'The go-to board for connecting to Arduino Cloud safely.'
    },
    'arduino_mkr_wan_1310': {
        fullName: 'Arduino MKR WAN 1310',
        description: 'Low-power LoRaWAN connectivity in the MKR form factor.',
        specs: { mcu: 'SAMD21', radio: 'Murata CMWX1ZZABZ-078 LoRa', flash: '2MB' },
        pros: 'Excellent for very long range low-power agriculture/smart city apps.',
        tips: 'Built for extreme battery life; easy to integrate with The Things Network.'
    },
    'arduino_leonardo': {
        fullName: 'Arduino Leonardo',
        description: 'ATmega32U4 based board with built-in USB communication.',
        specs: { mcu: 'ATmega32U4', speed: '16MHz', voltage: '5V' },
        pros: 'Native USB allows it to act as a Keyboard or Mouse (HID).',
        tips: 'Use this for custom controllers, macros, and arcade sticks.'
    },
    'arduino_due': {
        fullName: 'Arduino Due',
        description: 'The first ARM-based Arduino for heavy lifting.',
        specs: { mcu: 'Atmel SAM3X8E (Cortex-M3)', speed: '84MHz', voltage: '3.3V', pins: '54 Digital' },
        pros: 'Massive I/O, fast 32-bit ARM, 12-bit DACs for audio.',
        tips: 'Note: 33 I/O pins max 3.3V. Don\'t plug 5V sensors directly into pins!'
    },
    'esp32_s3': {
        fullName: 'Espressif ESP32-S3',
        description: 'Vector instructions for AI acceleration and dual-core power.',
        specs: { cpu: 'Dual-core Xtensa LX7', wifi: 'Wi-Fi 4 + BLE 5' },
        pros: 'Native USB, excellent for TinyML and Voice recognition.',
        tips: 'The S3 is the best choice if you need simple AI/Vision on ESP32.'
    },
    'esp32c6': {
        fullName: 'ESP32-C6 (Modern Connectivity)',
        description: 'Next-gen chip supporting Wi-Fi 6, Bluetooth 5.3, Zigbee, and Thread.',
        specs: { mcu: '32-bit RISC-V', speed: '160MHz', wireless: 'Wi-Fi 6 + Zigbee/Thread' },
        pros: 'Matter support ready, energy efficient Wi-Fi 6.',
        tips: 'Ideal for Matter border routers and modern smart home hubs.'
    },
    'esp32p4': {
        fullName: 'ESP32-P4 (High Performance Computing)',
        description: 'No Wi-Fi/BT. Pure high-speed AI and HMI processing.',
        specs: { cpu: 'Dual-core RISC-V @400MHz', ai: 'AI instructions + JPEG encoder', pins: 'Massive GPIO' },
        pros: 'Extreme performance for a microcontroller, dedicated media hardware.',
        tips: 'Use this for HMI screens, camera processing, and local AI where wireless is external.'
    },
    'esp32h2': {
        fullName: 'ESP32-H2 (Matter & Mesh Specialist)',
        description: 'No Wi-Fi. Designed specifically for Matter/Thread/Zigbee.',
        specs: { radio: 'IEEE 802.15.4 + BLE 5.3', cpu: 'RISC-V Single core @96MHz' },
        pros: 'Ultra-low power mesh node, zero Wi-Fi noise.',
        tips: 'The perfect chip for energy-harvesting Matter sensors or smart light bulbs.'
    },
    'nrf52832': {
        fullName: 'Nordic nRF52832',
        description: 'Gold standard for BLE (Bluetooth Low Energy) applications.',
        specs: { speed: '64MHz', power: 'Ultra low', radio: 'BLE, Ant, 2.4GHz' },
        pros: 'Best-in-class BLE stack, huge community, great library support.',
        tips: 'Use the Zephyr RTOS or nRF Connect SDK for professional products.'
    },
    'esp8266': {
        fullName: 'ESP8266 (NodeMCU/Wemos D1)',
        description: 'Low-cost WiFi microcontroller',
        specs: { speed: '80MHz/160MHz', voltage: '3.3V' },
        tips: 'Only has 1 Analog pin (A0). Great for simple WiFi sensors'
    },
    'raspberry_pi_pico_w': {
        fullName: 'Raspberry Pi Pico W',
        description: 'The wireless-enabled version of the dual-core RPi Pico.',
        specs: { wireless: '2.4GHz WiFi 4 + BLE', pins: '26 Multi-function GPIO' },
        pros: 'Very affordable, excellent documentation, PIO (Programmable I/O) subsystem.',
        tips: 'Learn PIO! It allows you to create your own hardware protocols like DVI or high-speed data buses.'
    },
    'raspberry_pi_5': {
        fullName: 'Raspberry Pi 5',
        description: 'The most powerful RPi ever, with dedicated I/O silicon (RP1).',
        specs: { cpu: '2.4GHz Quad-core 64-bit Arm Cortex-A76', pcie: 'PCIe 2.0 x1 interface', ram: '2GB-8GB' },
        pros: '2-3x faster than Pi 4, support for NVMe SSDs via PCIe.',
        tips: 'Use the PCIe interface for high-speed storage if building an IoT server/gateway.'
    },
    'raspberry_pi_cm4': {
        fullName: 'Raspberry Pi Compute Module 4 (CM4)',
        description: 'Industrial form factor Pi 4 for embedded integration.',
        specs: { mcu: 'Broadcom BCM2711', form: 'IO pin headers instead of standard ports' },
        pros: 'Ideal for custom PCBs, compact, high reliability.',
        tips: 'Use for building your own industrial controllers or specialized sensors.'
    },
    'raspberry_pi_zero_2_w': {
        fullName: 'Raspberry Pi Zero 2 W',
        description: 'Small, cheap, and powerful successor to the original Zero.',
        specs: { cpu: '64-bit ARM Cortex-A53 quad-core', ram: '512MB', wireless: 'BT 4.2 + 2.4GHz WiFi' },
        pros: 'Tiny footprint, high performance for its size, incredible price.',
        tips: 'Perfect for small Linux-based IoT projects and retro handhelds.'
    },
    'raspberry_pi_400': {
        fullName: 'Raspberry Pi 400',
        description: 'A complete Raspberry Pi 4 built into a keyboard.',
        specs: { cpu: '1.8GHz Quad-core A72', ram: '4GB', features: 'Ready-to-use desktop' },
        pros: 'Zero setup, portable, powerful 1.8GHz clock speed.',
        tips: 'Ideal for IoT education hubs or a compact "coding station."'
    },
    'raspberry_pi_pico': {
        fullName: 'Raspberry Pi Pico (RP2040)',
        description: 'Powerful dual-core ARM Cortex-M0+ chip',
        specs: { speed: '133MHz', voltage: '3.3V' },
        peripherals: 'Dual Core, PIO (Programmable I/O) units',
        tips: 'PIO is amazing for custom high-speed protocols'
    },
    'msp430': {
        fullName: 'TI MSP430 (Ultra-Low Power)',
        description: '16-bit RISC microcontrollers designed for extreme battery life.',
        specs: { power: '100µA/MHz active, 500nA sleep', architecture: '16-bit RISC' },
        industry_use: 'Utility meters, handheld medical devices, solar powered sensors.',
        pros: 'Best-in-class power efficiency, huge range of analog peripherals.',
        tips: 'The "Gold Standard" for devices that must run on a coin cell for 10 years.'
    },
    'cc3220': {
        fullName: 'TI SimpleLink CC3220 (Wi-Fi SoC)',
        description: 'Dual-core "Internet-on-a-chip" with an ARM Cortex-M4.',
        mechanism: 'Dedicated Network Processor handles the Wi-Fi stack, freeing the M4 for your code.',
        industry_use: 'Secure home/building automation, industrial gateways.',
        pros: 'Built-in hardware security, FIPS 140-2 Level 1 certified.',
        tips: 'Ideal when you need robust Wi-Fi without sacrificing application performance.'
    },
    'stm32wl': {
        fullName: 'STM32WL (Integrated LoRa)',
        description: 'The world\'s first LoRa SoC with a general-purpose MCU and sub-GHz radio.',
        mechanism: 'Single-chip solution supporting LoRa, Sigfox, and (G)FSK.',
        industry_use: 'Smart agriculture, long-range asset tracking, smart cities.',
        range: '5km+ in urban areas, 15km+ in open field.'
    },
    'stm32wb': {
        fullName: 'STM32WB (Dual-Core 2.4GHz)',
        description: 'Dual-core multi-protocol SoC for Bluetooth, Zigbee, and Thread.',
        mechanism: 'M4 core for app, M0+ core for radio stack. Ensures zero interference.',
        industry_use: 'Medical wearables, smart home devices (Matter compatible).',
        pros: 'Supports ultra-low power short-range mesh networking.'
    }
};

// Protocol & Wireless knowledge
export const PROTOCOL_KNOWLEDGE = {
    'i2c': {
        fullName: 'I2C (Inter-Integrated Circuit)',
        description: 'Synchronous, multi-slave, 2-wire bus.',
        wires: 'SDA (Data), SCL (Clock)',
        pros: 'Support many devices on just 2 pins',
        cons: 'Slower than SPI, limited distance'
    },
    'spi': {
        fullName: 'SPI (Serial Peripheral Interface)',
        description: 'High-speed, full-duplex synchronous protocol',
        wires: 'MOSI, MISO, SCK, CS (Slave Select)',
        pros: 'Very fast (suitable for displays and SD cards)'
    },
    'mqtt': {
        fullName: 'MQTT (Message Queuing Telemetry Transport)',
        description: 'Lightweight publish/subscribe messaging protocol for IoT',
        concept: 'Uses a Broker (like Mosquitto) to manage messages.',
        topics: 'Structure like: home/livingroom/temp',
        pros: 'Low bandwidth, ideal for unstable networks'
    },
    'lora': {
        fullName: 'LoRa / LoRaWAN',
        description: 'Long Range, Low Power wireless technology',
        range: 'Up to 15km in open space',
        commonUse: 'Agriculture, smart cities, remote monitoring where WiFi fails'
    },
    'deep_sleep': {
        fullName: 'Deep Sleep Mode',
        description: 'Power saving mode that shuts down the CPU and radio',
        esp32: 'Consumes only ~10µA in deep sleep',
        technique: 'Wake up on timer, GPIO, or touch. Saves battery for years'
    },
    'ota': {
        fullName: 'OTA (Over-the-Air) Update',
        description: 'Remotely updating device firmware via WiFi',
        benefit: 'Update sensors in the field without plugging them into USB'
    },
    'lorawan': {
        fullName: 'LoRaWAN (Wide Area Network)',
        description: 'A cloud-based protocol for managing LoRa devices.',
        mechanism: 'End Nodes → Gateway → Network Server → App Server',
        range: 'Miles/Kilometers in range while consuming milliwatts.',
        industry_use: 'Agriculture, Smart City infrastructure, Asset Tracking.',
        tips: 'Gateways act as bridges; they don\'t decode the data, just forward it safely to the server.'
    },
    'wifi6': {
        fullName: 'Wi-Fi 6 (802.11ax) IoT',
        concept: 'The latest Wi-Fi standard designed for high-density and low-power IoT environments.',
        mechanism: 'Uses TWT (Target Wake Time) and OFDMA to handle many sub-devices without congestion.',
        pros: 'Much better battery life for sensors, better performance in crowded areas.',
        compatibleWith: ['esp32-c6']
    },
    'matter': {
        fullName: 'Matter (Smart Home Standard)',
        description: 'The new industry-standard for smart home interoperability, backed by Apple, Google, and Amazon.',
        howItWorks: 'Runs over Thread or WiFi. Uses IPv6 for unified discovery and control across different brands.',
        pros: 'One app to rule them all, local-first control, high security.',
        compatibleWith: ['esp32-c6', 'esp32-h2', 'nrf52840']
    },
    'thread': {
        fullName: 'Thread (Mesh Protocol)',
        description: 'Low-power, secure, and self-healing IPv6 mesh networking protocol.',
        howItWorks: 'No single point of failure. It creates a robust mesh specifically for small IoT devices.',
        pros: 'Self-healing, low latency, low power consumption.'
    },
    'zigbee': {
        fullName: 'Zigbee',
        description: 'IEEE 802.15.4-based specification for high-level communication protocols.',
        range: '10-100 meters',
        pros: 'Very low power, supports thousands of nodes in a mesh.',
        cons: 'Requires a hub/coordinator, slower than WiFi.'
    },
    'modbus': {
        fullName: 'Modbus / RS485',
        description: 'The de-facto standard for industrial communication.',
        mechanism: 'Master/Slave (Client/Server) architecture over RS485 differential signaling.',
        industry_use: 'PLC communication, Solar Inverter data, Industrial automation.',
        specs: { topology: 'Multi-drop', distance: '1200m', nodes: '32 (up to 247)' },
        tips: 'Robust against noise. Always use a 120Ω termination resistor at both ends.'
    },
    'can_bus': {
        fullName: 'CAN Bus (Controller Area Network)',
        description: 'Multi-master, message-based protocol with inherent priority.',
        mechanism: 'Differential signaling with collision detection and hardware-level error handling.',
        industry_use: 'Automotive, heavy machinery, medical equipment, aerospace.',
        pros: 'Highly reliable, real-time deterministic behavior.',
        tips: 'Use CAN FD for higher data rates and larger payloads.'
    },
    'nb_iot': {
        fullName: 'NB-IoT (Narrowband IoT)',
        description: 'Low Power Wide Area Network (LPWAN) radio technology.',
        mechanism: 'Uses licensed cellular spectrum for extreme range and deep penetration.',
        industry_use: 'Smart meters, underground sensors, remote asset tracking.',
        pros: 'Massive range, works where WiFi and LoRa struggle (indoors/underground).'
    },
    'esp_now': {
        fullName: 'ESP-NOW (Espressif Proprietary Protocol)',
        concept: 'Low-power, connectionless Wi-Fi protocol for fast data transfer.',
        mechanism: 'Sends small packets directly between ESP32/ESP8266 without a Wi-Fi router.',
        pros: 'Super-fast wake-to-send time, no network overhead, zero latency.',
        tips: 'Best for battery-powered remote controls and low-latency point-to-point sensors.'
    },
    'esp_mesh': {
        fullName: 'ESP-MESH (Wi-Fi Mesh)',
        concept: 'A networking topology for multiple ESP32s to extend Wi-Fi range.',
        mechanism: 'Self-healing, tree-topology network where nodes act as relays for each other.',
        industry_use: 'Smart city lighting, industrial warehouse sensors.',
        pros: 'Covers huge areas without routers, no single point of failure.'
    },
    'bacnet': {
        fullName: 'BACnet (Building Automation)',
        description: 'The standard protocol for building automation and control networks.',
        mechanism: 'Application layer protocol for HVAC, lighting, and access control.',
        industry_use: 'Skyscrapers, hospitals, and campus-wide energy management.',
        pros: 'Highly scalable, vendor-neutral, supported by thousands of devices.',
        tips: 'Use BACnet/SC (Secure Connect) for encrypted IP communication.'
    },
    'knx': {
        fullName: 'KNX (Home & Building Control)',
        description: 'International standard for home and building control (lighting, HVAC).',
        mechanism: 'Decentralized bus system where every device has its own intelligence.',
        industry_use: 'Luxury homes, commercial smart buildings in Europe.',
        pros: 'Extremely reliable, decentralized (no single point of failure).',
        tips: 'Programming is usually done via a specialized software called ETS.'
    },
    'profibus': {
        fullName: 'Profibus (Field Bus)',
        description: 'Industrial fieldbus standard for factory and process automation.',
        mechanism: 'Master/Slave token sharing over RS-485 (DP) or MBP (PA).',
        industry_use: 'Automotive assembly lines, heavy chemical processing.',
        pros: 'Rugged, real-time, deterministic performance.',
        tips: 'Transitioning to PROFINET (the Ethernet version) is common in Industry 4.0.'
    },
    'ethercat': {
        fullName: 'EtherCAT (Fast Industrial Ethernet)',
        description: 'Ultra-high-performance Ethernet-based fieldbus system.',
        mechanism: "Processing on the fly: data is extracted from the frame as it passes through the device.",
        industry_use: 'High-speed robotics, semiconductor manufacturing, CNC machines.',
        pros: 'Microsecond-level synchronization, lowest jitter in the industry.'
    }
};

// Advanced Engineering & Security Knowledge
export const ENGINEERING_KNOWLEDGE = {
    'edge_ai': {
        fullName: 'Edge AI / TinyML',
        description: 'Running machine learning models directly on microcontrollers.',
        mechanism: 'Uses quantized neural networks that fit into the small SRAM of an MCU. Processing happens locally without sending data to the cloud.',
        industry_use: 'Voice command recognition (Alexa/Siri), predictive maintenance in factories, gesture detection.',
        libraries: ['TensorFlow Lite for Microcontrollers', 'Edge Impulse'],
        hardware: ['esp32-s3', 'stm32-n6'],
        benefit: 'Real-time processing, privacy, zero latency, and lower power than cloud AI.'
    },
    'quantization': {
        fullName: 'TinyML Quantization',
        concept: 'Shrinking 32-bit floating point models to 8-bit integers for MCUs.',
        mechanism: 'Reduces model size by 4x and speeds up inference significantly.',
        tips: 'Use "Quantization Aware Training" (QAT) to maintain accuracy while shrinking.'
    },
    'hardware_hsm': {
        fullName: 'Hardware Security Module (HSM)',
        description: 'Dedicated physical device for secure key management and crypto operations.',
        mechanism: 'Isolates cryptographic keys from the main processor, preventing retrieval even if software is compromised.',
        industry_use: 'Connected vehicles, smart grid meters, high-security smart locks.',
        benefit: 'Provides a "Root of Trust" (RoT) for the entire device lifecycle.'
    },
    'secure_element': {
        fullName: 'Secure Element (SE)',
        description: 'A tamper-resistant chip used to protect sensitive data and cryptographic keys.',
        examples: ['ATECC608A', 'STSAFE-A100', 'EdgeLock SE050'],
        howItWorks: 'Acts like a "vault" inside your hardware. The keys never leave the chip.',
        tips: 'Essential for AWS/Azure IoT mTLS authentication.'
    },
    'puf_security': {
        fullName: 'PUF (Physical Unclonable Function)',
        description: 'Silicon-level "fingerprint" for hardware security.',
        mechanism: 'Uses microscopic variations in silicon to generate unique, non-replicable keys.',
        pros: 'No keys stored in flash; the key is "born" from the silicon properties when needed.',
        tips: 'Used in Silicon Labs Series 2/3 for top-tier security.'
    },
    'power_optimization': {
        fullName: 'IoT Power Architecture',
        description: 'The science of making a battery-powered sensor last for years.',
        mechanism: 'Combines ultra-low-leakage hardware with "Race to Sleep" software logic (executing tasks fast and then entering deep sleep).',
        industry_use: 'Remote agriculture sensors, asset trackers, smart water meters.',
        concepts: ['LDO vs Buck Converter', 'Quiescent Current', 'Battery Chemistry'],
        tips: 'Avoid LDOs for high voltage drops (inefficient). Use Buck converters for switching power. Monitor IQ (Quiescent Current) for long life.'
    },
    'iot_security': {
        fullName: 'IoT Security Hardening',
        description: 'Shielding IoT devices from physical and remote attacks.',
        mechanism: 'Uses a hardware "Root of Trust" (Secure Element) to store keys. Flash encryption prevents code from being read if the chip is stolen.',
        industry_use: 'Smart locks, payment terminals, medical devices.',
        concepts: ['Secure Boot', 'Flash Encryption', 'Root of Trust'],
        esp32: 'ESP32-S3 supports hardware-level AES-XTS flash encryption.'
    },
    // RTOS and OS Domains
    'freertos': {
        fullName: 'FreeRTOS (Real-Time Operating System)',
        concept: 'Minimalist kernel-only RTOS focusing on essential tasks.',
        mechanism: 'Priority-based preemptive scheduling with mutexes, semaphores, and queues.',
        pros: 'Extremely small footprint (~5KB), low learning curve, AWS integration.',
        industry_use: 'Consumer electronics, simple industrial nodes, remote sensors.'
    },
    'zephyr': {
        fullName: 'Zephyr RTOS',
        concept: 'A comprehensive, integrated OS environment for IoT (Linux Foundation project).',
        mechanism: 'Standardized driver model with Devicetree and Kconfig configuration.',
        pros: 'Rich built-in networking (Bluetooth, Thread, LoRaWAN), high security.',
        industry_use: 'Wearables, advanced gateways, professional IoT ecosystems.',
        tips: 'Preferred for Nordic nRF-based products and cross-platform complexity.'
    },
    // Cloud IoT Domains
    'aws_iot_core': {
        fullName: 'AWS IoT Core',
        concept: 'Cloud-based message broker for connecting billions of devices.',
        features: {
            'Device Shadow': 'Virtual persistent state for offline synchronization.',
            'Rules Engine': 'Route data to Lambda, S3, or DynamoDB based on topics.',
            'Greengrass': 'Edge processing and local ML inference.'
        },
        mechanism: 'Mutual TLS (mTLS) authentication with X.509 certificates.'
    },
    'azure_iot_hub': {
        fullName: 'Azure IoT Hub',
        concept: 'Bi-directional communication hub for Microsoft Azure IoT.',
        features: {
            'Device Twin': 'JSON metadata and condition storage.',
            'DPS': 'Zero-touch automated provisioning service.',
            'IoT Edge': 'Containerized cloud modules running locally.'
        }
    },
    'azure_iot_central': {
        fullName: 'Azure IoT Central',
        concept: 'Managed SaaS application platform for rapid IoT development.',
        mechanism: 'Low-code/No-code templates and web UI for quick deployment.',
        industry_use: 'Quick prototyping, SMB asset tracking, smart building management.',
        pros: 'Zero infrastructure management, rapid time-to-market.'
    },
    'esp_idf': {
        fullName: 'Espressif IoT Development Framework (ESP-IDF)',
        concept: 'The industrial-grade C/C++ framework for all ESP32 chips.',
        features: {
            'FreeRTOS': 'Built-in real-time task management and scheduling.',
            'Component Manager': 'Modular system to manage and download libraries.',
            'Menuconfig': 'Powerful graphical configuration tool for hardware settings.',
            'Build System': 'Uses CMake and Ninja for high-speed compilation.'
        },
        mechanism: 'Direct low-level registry access combined with an abstraction layer for protocols.',
        industry_use: 'Used globally for professional smart appliances and industrial controllers.',
        tips: 'Move to ESP-IDF when you need full control over memory and security.'
    },
    'rpi_pico_sdk': {
        fullName: 'Raspberry Pi Pico C SDK',
        concept: 'Low-level C/C++ development for RP2040/RP2350 microcontrollers.',
        features: {
            'PIO': 'Programmable I/O state machines for custom hardware logic.',
            'Multicore': 'Native support for dual-core task synchronization.',
            'Interpolators': 'Hardware blocks for accelerated digital filter calculations.'
        },
        mechanism: 'Direct hardware mapping with minimal OS overhead (bare metal).',
        industry_use: 'Real-time motor control, custom protocol bridges, high-speed DAQ.',
        tips: 'Use the SDK instead of MicroPython when you need microsecond precision or custom PIO code.'
    },
    'rpi_os_variants': {
        fullName: 'Raspberry Pi OS Variants',
        concept: 'The official Debian-based OS for all Raspberry Pi single-board computers.',
        features: {
            'Full': 'Desktop environment + recommended productivity software.',
            'Desktop': 'Standard graphical desktop without extra bloatware.',
            'Lite': 'Command-line only. Ideal for headless servers and Zero models.'
        },
        mechanism: 'Uses the APT package manager and supports hardware acceleration for VideoCore GPUs.',
        tips: 'Always use the Lite version for headless IoT gateways to save RAM and Flash.'
    }
};

// IoT Design Patterns
export const DESIGN_PATTERNS = {
    'pub_sub': {
        fullName: 'Publisher-Subscriber Pattern',
        concept: 'A messaging pattern where senders (publishers) do not send messages directly to specific receivers (subscribers).',
        mechanism: 'Uses a central Broker to manage data distribution based on topics.',
        industry_use: 'Foundation of MQTT (smart home, industrial sensors).',
        architecture_tip: 'Decouples your devices; one sensor can send data to many displays/apps without knowing about them.'
    },
    'client_server': {
        fullName: 'Client-Server Architecture',
        concept: 'A request-response model where a client initiates a request to a server.',
        mechanism: 'Standard HTTP/HTTPS model. Client (ESP32) asks Server (Node.js/Firebase) for data.',
        industry_use: 'Web dashboards, OTA updates, API integrations.',
        architecture_tip: 'Easier for beginners but hard to scale for real-time dashboards compared to Pub-Sub.'
    }
};

// General Knowledge for "Out of Website" queries (Phase 13)
export const GENERAL_KNOWLEDGE = {
    'python': {
        title: 'Python Programming',
        desc: 'A versatile, high-level language known for its readability and vast library support.',
        iot_link: 'In IoT, Python is the primary language for Raspberry Pi and high-level gateways/edge processing.',
        example: 'print("Hello, IoT World!")',
        tips: 'Use Python for data analysis and ML on gateways, but stick to C++ for memory-constrained MCUs like ESP32.'
    },
    'javascript': {
        title: 'JavaScript / Node.js',
        desc: 'The language of the web, also powerful on the server-side with Node.js.',
        iot_link: 'Used for building real-time dashboards (like this site!) and connecting devices via WebSockets/MQTT.',
        example: 'console.log("Web-connected hardware!");'
    },
    'c++': {
        title: 'C++ Programming',
        desc: 'A powerful, low-level language essential for systems programming.',
        iot_link: 'The absolute standard for Arduino, ESP32, and STM32 firmware development.',
        tips: 'Focus on memory management; avoid dynamic allocation on tiny microcontrollers.'
    },
    'sql': {
        title: 'SQL (Structured Query Language)',
        desc: 'The standard language for managing and querying relational databases.',
        iot_link: 'Critical for storing massive sensor datasets in the cloud (like Supabase or Postgres).',
        example: 'SELECT * FROM sensor_data WHERE temperature > 25;'
    },
    'ohms_law': {
        title: "Ohm's Law",
        desc: 'The fundamental relationship between Voltage (V), Current (I), and Resistance (R).',
        formula: 'V = I × R',
        tips: 'Want to dim an LED? Use Ohm\'s Law to calculate the current-limiting resistor you need!'
    },
    'gravity': {
        title: 'Gravity',
        desc: 'The force that attracts a body toward the center of the earth.',
        iot_link: 'We measure this using Accelerometers (like the MPU6050) to detect tilt and orientation.'
    },
    'agile': {
        title: 'Agile Methodology',
        desc: 'An iterative approach to project management and software development.',
        iot_link: 'Great for IoT startups where hardware requirements might change during the "MVP" phase.'
    },
    'scrum': {
        title: 'Scrum',
        desc: 'A framework for project management that emphasizes teamwork and iterative progress.',
        tips: 'Use daily "stand-ups" to sync your hardware and software teams!'
    },
    'pomodoro': {
        title: 'Pomodoro Technique',
        desc: 'A time management method using a timer to break work into intervals (25 mins).',
        tips: 'Build your own Pomodoro timer using an ESP32 and an OLED display - it\'s a classic project!'
    }
};

// Knowledge graph connections
export const KNOWLEDGE_GRAPH = {
    ...BOARD_KNOWLEDGE,
    ...SENSOR_KNOWLEDGE,
    ...PROTOCOL_KNOWLEDGE,
    ...ENGINEERING_KNOWLEDGE,
    ...DESIGN_PATTERNS
};

// Deep-dive technical blocks for advanced architectural queries
export const TECHNICAL_BLOCKS = {
    'dma': {
        fullName: 'DMA (Direct Memory Access)',
        description: 'Hardware feature that allows peripherals to access memory without CPU intervention.',
        mechanism: 'A separate DMA controller handles the data transfer (e.g., I2S to RAM), freeing the CPU for math or logic.',
        industry_use: 'High-speed audio streaming, display drivers (LCD/OLED), high-frequency sensor sampling.',
        teacher_tip: 'Without DMA, high-speed audio will "stutter" because the CPU can\'t keep up with the bit-banging.'
    },
    'interrupts': {
        fullName: 'Interrupts (ISR - Interrupt Service Routines)',
        description: 'A mechanism to react to real-time events instantly.',
        mechanism: 'The CPU pauses current code, jumps to a special function (ISR), executes it, and returns.',
        best_practice: 'Keep ISRs extremely short. Never use `delay()` or `Serial.print()` inside an ISR.',
        industry_use: 'Emergency stop buttons, rotary encoders, high-speed counting.'
    },
    'i2s': {
        fullName: 'I2S (Inter-IC Sound)',
        description: 'The standard protocol for digital audio data.',
        mechanism: '3-wire bus: BCLK (Bit Clock), WS (Word Select), and DIN/DOUT (Data).',
        esp32: 'ESP32 has dedicated I2S hardware with DMA. Ideal for high-quality audio or PDM microphones.',
        pro_tip: 'Pair with an external DAC (like PCM5102) for high-fidelity sound output.'
    }
};

// Add to knowledge graph
Object.assign(KNOWLEDGE_GRAPH, TECHNICAL_BLOCKS);

// Troubleshooting decisions
export const TROUBLESHOOTING_TREE = {
    'sensor_not_reading': {
        checks: [
            { question: 'Is the sensor powered?', fix: 'Check VCC and GND connections' },
            { question: 'Correct voltage level?', fix: 'Verify 3.3V vs 5V requirements' },
            { question: 'Wiring correct?', fix: 'Check SDA/SCL or Data pin alignment' },
            { question: 'Baud rate / I2C address?', fix: 'Use I2C scanner or match Serial.begin()' }
        ]
    },
    'wifi_not_connecting': {
        checks: [
            { question: 'SSID/Pass correct?', fix: 'Check for typos in credentials' },
            { question: '2.4GHz network?', fix: 'IoT boards usually only support 2.4GHz' },
            { question: 'Power supply?', fix: 'WiFi surge needs good current (use 5V/2A)' }
        ]
    }
};

// Project recommender
export const PROJECT_RECOMMENDER = {
    patterns: [
        {
            components: ['esp', 'dht'],
            projects: ['WiFi Weather Station', 'Blynk Temperature Monitor'],
            reason: 'ESP range + DHT is the standard entry point for IoT'
        },
        {
            components: ['arduino', 'ultrasonic', 'servo'],
            projects: ['Obstacle Avoiding Robot', 'Distance Meter'],
            reason: 'Classic robotics setup for motion and distance'
        },
        {
            components: ['esp', 'relay'],
            projects: ['Smart Switch', 'Voice Controlled Light'],
            reason: 'Core foundation for home automation'
        }
    ]
};

// Conversation memory and context
export const conversationState = {
    userName: null,
    userSkillLevel: null,
    currentProject: null,
    lastTopic: null,
    conversationHistory: []
};

/**
 * Advanced query understanding with NLP-like processing
 */
export const advancedQueryAnalysis = (query) => {
    const q = query.toLowerCase();
    const entities = { components: [], concepts: [], actions: [], problems: [] };

    Object.keys(KNOWLEDGE_GRAPH).forEach(key => {
        if (q.includes(key)) entities.components.push(key);
    });

    const concepts = ['mqtt', 'lora', 'ota', 'sleep', 'wifi', 'bluetooth', 'iot', 'security', 'matter', 'thread', 'bacnet', 'knx', 'hsm', 'tinyml', 'ai'];
    concepts.forEach(c => {
        if (q.includes(c)) entities.concepts.push(c);
    });

    if (/how|explain|what|learn/.test(q)) entities.actions.push('learn');
    if (/build|make|create|project/.test(q)) entities.actions.push('build');
    if (/error|failed|fault|problem|issue|help/.test(q)) entities.actions.push('troubleshoot');
    if (/best|recommend|suggest|compare|difference|vs/.test(q)) entities.actions.push('recommend');
    if (/code|program|example|github|sketch/.test(q)) entities.actions.push('code');
    if (/pins|wiring|connection|hookup|circuit/.test(q)) entities.actions.push('wiring');

    return entities;
};

/**
 * Resolves the most likely topic from conversation history
 */
export const resolveTopicFromHistory = (history = []) => {
    if (!history || history.length === 0) return conversationState.lastTopic;

    // Scan backwards for the last bot message that explicitly mentions a known component/concept
    const botMessages = [...history].reverse().filter(m => m.role === 'bot');

    for (const msg of botMessages) {
        const text = msg.text.toLowerCase();
        // Check for known keys in KNOWLEDGE_GRAPH
        const found = Object.keys(KNOWLEDGE_GRAPH).find(key => {
            // Match whole word or specific quoted term
            const regex = new RegExp(`\\b${key}\\b`, 'i');
            return regex.test(text);
        });
        if (found) {
            conversationState.lastTopic = found;
            return found;
        }
    }

    return conversationState.lastTopic;
};


// Industrial comparisons for teacher mode
const getComparisonRes = (q) => {
    if (q.includes('l298n') && q.includes('tb6612')) {
        return `### 🥊 Battle of the Drivers: L298N vs TB6612FNG\n\n**The Verdict:** TB6612FNG wins for efficiency; L298N wins for raw voltage.\n\n**1. Efficiency:** TB6612FNG is 95% efficient (MOSFET), while L298N is ~60% (BJT). L298N wastes more power as heat.\n**2. Voltage:** L298N handles up to 46V; TB6612FNG stops at 13.5V.\n**3. Control:** TB6612 supports 100kHz PWM for super-smooth motion; L298N gets noisy above 5kHz.\n\n**Teacher Tip:** If building on a battery, **always** choose TB6612. If using a 24V industrial motor, L298N is your robust workhorse.`;
    }
    if (q.includes('freertos') && q.includes('zephyr')) {
        return `### 🧠 RTOS Choice: FreeRTOS vs Zephyr\n\n**The Verdict:** FreeRTOS for simplicity; Zephyr for professional scaling.\n\n**1. Footprint:** FreeRTOS is tiny (~5KB kernel). Zephyr is a full OS with a much larger RAM/Flash requirement.\n**2. Ecosystem:** Zephyr has built-in drivers for almost everything (BLE, Lora, Mesh). In FreeRTOS, you often have to integrate libraries yourself.\n**3. Commercial:** Zephyr (Linux Foundation) is increasingly preferred for complex multi-chip professional products.\n\n**Teacher Tip:** Start with FreeRTOS if you are learning. Switch to Zephyr when you need to manage complex networking and multi-layered applications.`;
    }
    if (q.includes('msp430') && q.includes('cc3220')) {
        return `### 🏗️ TI Choice: MSP430 vs CC3220\n\n**The Verdict:** MSP430 for battery life; CC3220 for secure cloud Wi-Fi.\n\n**1. Architecture:** MSP430 is 16-bit (low power). CC3220 is a powerful 32-bit ARM Cortex-M4 dual-core SoC.\n**2. Wireless:** MSP430 has no on-chip radio. CC3220 is "Internet-on-a-chip" with a dedicated Wi-Fi processor.\n**3. Use Case:** Use MSP430 for a coin-cell sensor that lasts 10 years. Use CC3220 for a smart home hub connected to the power grid.\n\n**Teacher Tip:** If the project needs Wi-Fi AND low power, the CC3220 network processor is a huge advantage as it offloads the radio stack from your main code.`;
    }
    if (q.includes('stm32wl') && q.includes('stm32wb')) {
        return `### 📡 ST Wireless: WL (LoRa) vs WB (BLE)\n\n**The Verdict:** WL for long-range; WB for short-range mesh.\n\n**1. Range:** WL is Sub-GHz (up to 15km). WB is 2.4GHz (typically <100m, but supports mesh).\n**2. Protcols:** WL = LoRa, Sigfox. WB = BLE, Zigbee, Thread, Matter.\n**3. Battery:** Both are excellent, but LoRa (WL) consumes more current during long bursts of transmision.\n\n**Teacher Tip:** If you need to cover a whole farm or city, go with **STM32WL**. If you are building for a smart home mesh (Matter), choose **STM32WB**.`;
    }
    if (q.includes('pt100') && q.includes('thermocouple')) {
        return `### 🌡️ Industrial Temp: PT100 vs Thermocouple\n\n**The Verdict:** PT100 for precision; Thermocouple for extreme heat.\n\n**1. Range:** PT100 stops at 850°C. K-Type Thermocouples can go over 1200°C.\n**2. Accuracy:** PT100 is far more accurate and stable over time. Thermocouples can drift.\n**3. Complexity:** PT100 needs a 3-wire or 4-wire bridge. Thermocouples generate their own small voltage (Seebeck effect) but need compensation.\n\n**Teacher Tip:** For a bakery oven or laboratory, use **PT100**. For a blast furnace or car engine exhaust, you need a **Thermocouple**.`;
    }
    if (q.includes('azure') && (q.includes('hub') || q.includes('central'))) {
        return `### ☁️ Azure IoT: Hub vs Central\n\n**The Verdict:** IoT Hub for code-heavy scale; IoT Central for low-code speed.\n\n**1. Model:** Hub is PaaS (Building blocks). Central is SaaS (Ready-to-use application).\n**2. Control:** Hub gives you 100% control over the backend. Central abstracts it away for speed.\n**3. Pricing:** Hub is per-message. Central is usually per-device.\n\n**Teacher Tip:** Use **IoT Central** for quick prototypes or simple fleets. Switch to **IoT Hub** when you need custom security, deep analytics pipelines, or bespoke device logic.`;
    }
    if (q.includes('raspberry pi') && q.includes('esp32')) {
        return `### 🥊 High-Level Debate: Raspberry Pi vs ESP32\n\n**The Verdict:** Pi for complex brains; ESP32 for simple local tasks.\n\n**1. OS:** Pi runs a full Linux OS (Multitasking, heavy files). ESP32 runs "Bare Metal" or FreeRTOS (Microsecond precision).\n**2. Power:** Pi needs 5V/3A and runs hot. ESP32 runs for weeks on a battery and sleeps at 10µA.\n**3. Complexity:** Pi handles Vision, Databases, and Python at scale. ESP32 handles sensors, motors, and simple WiFi nodes.\n\n**Teacher Tip:** If you need a **Web Server** with a database, use a **Pi**. If you need a **Remote Sensor** feeding data to that server, use an **ESP32**.`;
    }
    if (q.includes('xtensa') && q.includes('risc-v')) {
        return `### 🔬 CPU Architecture: Xtensa vs RISC-V\n\n**The Verdict:** Xtensa for proven dual-core performance; RISC-V for modern efficiency and open standard.\n\n**1. Design:** Xtensa (ESP32, S3) is a proprietary powerful core with vector AI support. RISC-V (C3, C6, P4) is an open-source standard.\n**2. Power:** RISC-V is generally more energy-efficient for simple tasks.\n**3. Toolchain:** Both are supported by ESP-IDF, but RISC-V has better long-term industry alignment.\n\n**Teacher Tip:** For AI and high-speed math, the **S3 (Xtensa)** is superior. For simple Matter/Zigbee connectivity, the **C6 (RISC-V)** is the future.`;
    }
    if (q.includes('esp-now') && q.includes('mqtt')) {
        return `### 📡 Protocol Speed: ESP-NOW vs MQTT\n\n**The Verdict:** ESP-NOW for speed; MQTT for reliability and cloud integration.\n\n**1. Connection:** ESP-NOW is connectionless (fire and forget). MQTT requires a Wi-Fi connection and a central Broker.\n**2. Latency:** ESP-NOW = ~1ms. MQTT = ~200ms-1s depending on network.\n**3. Battery:** ESP-NOW is much better for battery as it doesn't need to stay "connected" to a router.\n\n**Teacher Tip:** Use **ESP-NOW** for remote controls or sensor-to-sensor triggers. Use **MQTT** when you want to see your data on a phone app or a cloud dashboard.`;
    }
    if (q.includes('matter') && q.includes('zigbee')) {
        return `### 🏠 Smart Home Mesh: Matter vs Zigbee\n\n**The Verdict:** Matter for future-proofing; Zigbee for low-cost low-power simplicity.\n\n**1. Connectivity:** Matter is IPv6-based (IP everywhere). Zigbee is its own separate 802.15.4 stack requiring a gateway.\n**2. Ecosystem:** Matter works natively with Apple, Google, and Amazon out of the box. Zigbee needs a brand-specific hub or a generic USB stick.\n**3. Speed:** Thread (the mesh for Matter) is faster and more reliable than Zigbee mesh.\n\n**Teacher Tip:** If you are starting a new project today, build for **Matter**. If you have thousands of low-cost sensors already, **Zigbee** is still very valid.`;
    }
    if (q.includes('ra8') && q.includes('esp32')) {
        return `### 🚀 Performance King: Renesas RA8 vs ESP32-S3\n\n**The Verdict:** RA8 for high-end AI; ESP32-S3 for connected hobbyist projects.\n\n**1. Speed:** RA8 (Cortex-M85) runs at 480MHz; S3 runs at 240MHz.\n**2. AI Power:** RA8 has a dedicated Ethos-U55 NPU. S3 has Xtensa AI extensions.\n**3. Complexity:** RA8 is a massive industrial MCU requiring complex FSP tools. ESP32-S3 is easily programmed with Arduino or ESP-IDF.\n\n**Teacher Tip:** For a product that needs real-time on-device video AI, the **RA8** is unbeatable. For 90% of other IoT tasks, the **ESP32-S3** is more cost-effective.`;
    }
    if (q.includes('bacnet') && q.includes('knx')) {
        return `### 🏢 Building Control: BACnet vs KNX\n\n**The Verdict:** BACnet for large commercial systems; KNX for high-end residential stability.\n\n**1. Focus:** BACnet is the king of HVAC and large air handling units. KNX is the king of lighting and shutter control.\n**2. Architecture:** BACnet is often centralized with building controllers. KNX is 100% decentralized.\n**3. Standard:** BACnet is more popular in North America. KNX is the dominant standard in Europe.\n\n**Teacher Tip:** For an airport or hospital, **BACnet** is the standard. For a luxury home or hotel room control, **KNX** provides unmatched reliability.`;
    }
    return null;
};

// Mentor Analogies for simplified learning
const MENTOR_ANALOGIES = {
    'voltage': 'Think of Voltage as water pressure in a pipe. Higher pressure (volts) means more potential to push water through.',
    'current': "Current is like the flow rate of water. It's the actual amount of water moving through the pipe per second.",
    'resistance': 'Resistance is like a narrow spot in the pipe—it fights against the flow and requires more pressure to overcome.',
    'interrupts': 'Imagine you are reading a book and someone rings the doorbell. You pause, answer the door (ISR), and then go back to the exact same page you left off.',
    'capacitors': 'A capacitor is like a small water tank that smooths out ripples in pressure. It stores energy and releases it when needed.',
    'dma': 'DMA is like hired labor. Instead of the boss (CPU) carrying every brick themselves, they hire someone to move materials while they focus on the blueprints.',
    'thread': 'The neighborhood mail: every house helps deliver the letter to the right door, so distance doesn\'t matter as much.',
    'quantization': 'The sketch artist: instead of taking a high-res photo (32-bit), you draw a fast sketch (8-bit) that still captures everything important.',
    'hsm': 'A bank vault inside the silicon. The key stays in the vault, and the vault only tells you if the transaction is "Approved" without ever showing you the key.',
    'bacnet': 'A giant office building\'s intercom: everyone can talk to each other across different floors and departments using a standard language.',
    'matter': 'A universal translator for your home gadgets; it lets your Apple lightbulbs talk to your Google speaker like they were born in the same factory.'
};

/**
 * Brainstorming Engine for Project Architect (Phase 12)
 */
export const brainstormProject = (input) => {
    const q = input.toLowerCase();
    const analysis = advancedQueryAnalysis(input);
    const topic = analysis.components[0] || analysis.concepts[0] || conversationState.lastTopic;

    // Project Templates based on Domain
    const projectTemplates = {
        'industrial': [
            {
                title: 'Machine Health Monitor',
                desc: `A professional-grade system using an ${topic || 'Industrial Sensor'} to detect faults before they happen.`,
                steps: [
                    'Hardware Calibration: Set up the 4-20mA current loop or Modbus registry.',
                    'Edge Logic: Write a threshold-based alert system on the MCU.',
                    'Connectivity: Send real-time telemetry to an industrial dashboard.',
                    'Deployment: Mount securely using industrial-grade enclosures.'
                ]
            }
        ],
        'consumer': [
            {
                title: 'Smart Workspace Assistant',
                desc: `A personalized gadget centered around ${topic || 'your component'} to optimize your workbench environment.`,
                steps: [
                    'MVP Build: Get the core sensor readings on the Serial monitor.',
                    'UI Design: Create a simple web or OLED interface for local feedback.',
                    'Cloud Sync: Connect to a service like Blynk or MQTT for remote alerts.',
                    'Polish: Add a custom 3D printed case and power optimization.'
                ]
            }
        ],
        'advanced': [
            {
                title: 'Privacy-First Edge AI Node',
                desc: `Leveraging TinyML and ${topic || 'Advanced Silicon'} to process data locally without the cloud.`,
                steps: [
                    'Data Collection: Capture raw samples from the sensor.',
                    'Model Training: Use Edge Impulse to train a quantized model.',
                    'Deployment: Flash the model to your hardware (e.g., ESP32-S3 or RA8).',
                    'Security: Lock down the flash and enable Secure Boot.'
                ]
            }
        ]
    };

    // Determine target domain
    let domain = 'consumer';
    if (/industrial|modbus|profibus|4-20ma/.test(q)) domain = 'industrial';
    if (/ai|ml|hsm|secure|quantization/.test(q)) domain = 'advanced';

    const ideas = projectTemplates[domain];
    const project = ideas[Math.floor(Math.random() * ideas.length)];

    return `### 🛠️ Nexus Project Architect: ${project.title}\n\n**The Big Idea:** ${project.desc}\n\n**Let's build this in phases:**\n\n${project.steps.map((s, i) => `${i + 1}. **Phase ${i + 1}**: ${s}`).join('\n')}\n\nDoes this project sound like something you'd like to start? I can help you with the specific code for Phase 1!`;
};

// Personality & Thought Prefixes for a warm, human feel
const THOUGHT_PREFIXES = [
    "Hmm, that's interesting! Let me think about how we can build this...",
    "Great question. I'm just looking through some technical details here...",
    "I was actually just reading about this! Let's see how it fits your project...",
    "Thinking like an architect... let me map this out for you.",
    "Checking my internal project registry... I've got some ideas."
];

/**
 * Handle Global Fallback for non-IoT queries (Phase 13)
 */
export const handleGlobalFallback = (query) => {
    const q = query.toLowerCase();

    // Look for keywords in GENERAL_KNOWLEDGE
    const key = Object.keys(GENERAL_KNOWLEDGE).find(k => q.includes(k));
    if (key) {
        const info = GENERAL_KNOWLEDGE[key];
        let response = `### 🌐 Global Knowledge: ${info.title}\n\n${info.desc}\n\n`;
        if (info.iot_link) response += `**IoT Connection**: ${info.iot_link}\n\n`;
        if (info.formula) response += `**Formula**: \`${info.formula}\`\n\n`;
        if (info.example) response += `**Code Example**:\n\`\`\`\n${info.example}\n\`\`\`\n\n`;
        if (info.tips) response += `**Mentor Tip**: ${info.tips}`;
        return response;
    }

    // Graceful "Out of Domain" response
    if (q.includes("who are you") || q.includes("your name")) {
        return "I'm Nexus! Your Senior IoT Architect and mentor. I've spent thousands of hours at the workbench so you don't have to learn the hard way. What are we building today?";
    }

    if (q.includes("president") || q.includes("politics") || q.includes("news")) {
        return "I'm strictly focused on engineering and building cool things! 🛠️ I don't follow politics much, but if you want to build a secure voting system using blockchain or IoT sensors, I'm your architect!";
    }

    return null;
};

// Sentiment detector
const detectSentiment = (q) => {
    if (/confused|stuck|frustrated|don't understand|help|crazy|hard|difficult/i.test(q)) return 'struggling';
    if (/cool|amazing|wow|work|solved|fixed|happy|great/i.test(q)) return 'positive';
    return 'neutral';
};

/**
 * Generate intelligent response based on deep analysis (Teacher Mode)
 */
export const generateIntelligentResponse = (query, effectiveTopic = null) => {
    const analysis = advancedQueryAnalysis(query);
    const q = query.toLowerCase();
    const sentiment = detectSentiment(q);

    // If we have an effective topic from memory, and the query is vague, prioritize it
    const topic = effectiveTopic || analysis.components[0] || analysis.concepts[0];

    // Initial Thought Prefix
    let responsePrefix = THOUGHT_PREFIXES[Math.floor(Math.random() * THOUGHT_PREFIXES.length)];

    // Sentiment handling (Empathy)
    if (sentiment === 'struggling') {
        responsePrefix = "Take a breath! IoT has a learning curve, but we'll get through it. Let's simplify this... ";
    }

    // Check for specific comparisons first
    const comparison = getComparisonRes(q);
    if (comparison) return responsePrefix + "\n\n" + comparison;

    // Troubleshooting assistance
    if (analysis.actions.includes('troubleshoot') || /not working|fail/.test(q)) {
        const problemType = analysis.concepts.includes('wifi') ? 'wifi_not_connecting' : 'sensor_not_reading';
        const tree = TROUBLESHOOTING_TREE[problemType];
        if (tree) {
            const checks = tree.checks.map((c, i) => `${i + 1}. **${c.question}** → ${c.fix}`).join('\n\n');
            return responsePrefix + `I'll help you get this working! Systematic debugging is key in IoT. Check these:\n\n${checks}`;
        }
    }

    // Deep technical explanation (Teacher Format / Implicit Intent)
    const isImplicitMatch = topic && (q === topic || q.includes(topic));

    if (analysis.actions.includes('learn') || analysis.actions.includes('recommend') || isImplicitMatch || analysis.actions.includes('code') || analysis.actions.includes('wiring')) {
        const knowledge = KNOWLEDGE_GRAPH[topic];

        if (knowledge) {
            // Save to state for continuity
            conversationState.lastTopic = topic;

            let res = responsePrefix + "\n\n" + `### ✨ Let's explore ${knowledge.fullName || topic.toUpperCase()} together! 🚀\n\n`;

            // Inject Analogy if available
            if (MENTOR_ANALOGIES[topic]) {
                res += `> **Think of it like this:** ${MENTOR_ANALOGIES[topic]}\n\n`;
            }

            // Handle specific action requests (Code/Wiring)
            if (analysis.actions.includes('code')) {
                res += `I'll help you with the code for **${knowledge.fullName || topic}**! Typically, you'll need the right library from our catalog, and then we'll initialize it in the \`setup()\` and read data in the \`loop()\`. Would you like a specific example for Arduino or ESP32?\n\n`;
            } else if (analysis.actions.includes('wiring')) {
                res += `Wiring up the **${knowledge.fullName || topic}** is straightforward once you know the pins. ${knowledge.pins ? `It uses: ${knowledge.pins}.` : "It usually connects via standard I/O pins."} Remember to double-check your voltage levels (3.3V vs 5V) to keep the magic smoke inside! 💨\n\n`;
            }

            // Handle Cloud & RTOS specific logic
            if (knowledge.features) {
                res += `**The big idea:** ${knowledge.concept}\n\n**Some cool things it can do:**\n`;
                Object.entries(knowledge.features).forEach(([f, d]) => {
                    res += `* **${f}**: ${d}\n`;
                });
                return res + `\nWhat part of this sounds most interesting to you? I'm here to dive deeper!`;
            }

            // Standard 4-Point Teacher Logic
            res += `**The Essence:** ${knowledge.description || knowledge.concept || 'Knowledge data point.'}\n\n`;

            if (knowledge.mechanism) {
                res += `**How the magic happens:** ${knowledge.mechanism}\n\n`;
            }

            if (knowledge.industry_use) {
                res += `**Where we see it in the real world:** ${knowledge.industry_use}\n\n`;
            }

            if (knowledge.tips || knowledge.architecture_tip) {
                res += `**💡 A little tip from my bench:** ${knowledge.tips || knowledge.architecture_tip}\n\n`;
            }

            if (knowledge.pros) res += `**Why we love it:** ${knowledge.pros}\n`;

            // Proactive Engineering Follow-up
            const followUps = [
                "Are we going with a battery for this, or will it be plugged in?",
                "How fast do we need the readings to be? I want to make sure the code is perfect for you.",
                "Do you have the components ready, or are we still in the planning phase?",
                "Is this for your home, or are we building something for a bigger environment?"
            ];
            const followUp = followUps[Math.floor(Math.random() * followUps.length)];

            return res + `\n\n**Quick question for our build:** ${followUp}\n\nWant me to show you some code or a wiring layout next? I'm ready!`;
        }
    }

    // Project recommendation
    if (analysis.components.length >= 2 && analysis.actions.includes('build')) {
        for (const pattern of PROJECT_RECOMMENDER.patterns) {
            if (pattern.components.every(comp => analysis.components.some(c => c.includes(comp)))) {
                return `Great gear! With those, I suggest: ${pattern.projects.join(', ')}. ${pattern.reason}. Shall I walk you through the first step?`;
            }
        }
    }

    return null;
};

/**
 * Natural conversation handler
 */
export const handleNaturalConversation = (query) => {
    const q = query.toLowerCase();

    // Name handling - Refined to avoid mistaking verbs for names
    const nameMatch = query.match(/(?:my name is|call me|this is|i'm|i am|im)\s+([a-z]{2,80})/i);
    const blacklist = ['planning', 'building', 'making', 'doing', 'working', 'testing', 'learning', 'trying', 'nothing', 'ready', 'fine', 'okay', 'good'];

    if (nameMatch) {
        const rawName = nameMatch[1].toLowerCase();
        // Ignore if it's on the blacklist or ends with 'ing' (likely a verb)
        if (!blacklist.includes(rawName) && !rawName.endsWith('ing')) {
            const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);
            conversationState.userName = name;
            return `Hey ${name}! It's so good to meet you! 👋 I'm Nexus, your IoT pair-programming friend. I've spent a lot of time at my workbench, and I can't wait to help you build something amazing today.

What's on your workbench, ${name}? Let's dive in!`;
        }
    }

    // Personalized greetings
    if (conversationState.userName && /^(hi|hello|hey)$/i.test(q)) {
        return `Hey ${conversationState.userName}! Great to see you. How's the project coming along? I'm ready to help with the next step!`;
    }

    // AI Persona talk
    if (/who are you/i.test(q)) {
        return `I'm Nexus! More than just a bot, I'm your teammate in everything IoT. Whether we're debugging a stubborn sensor or planning a massive smart home, I'm here to make it fun and easy for you.`;
    }

    // Follow-up intent recognition
    if (/tell me more|how does (it|that) work|elaborate|explain more/i.test(q) && conversationState.lastTopic) {
        return generateIntelligentResponse(conversationState.lastTopic);
    }

    // Project Architect Trigger (Phase 12)
    if (q.includes('project') || q.includes('build') || q.includes('idea') || q.includes('create')) {
        return brainstormProject(query);
    }

    if (/thank/i.test(q)) {
        return `Aww, you're so welcome! I'm just happy to be part of your build. Let's keep making cool things together! 🚀✨`;
    }

    // Global Fallback (Phase 13)
    return handleGlobalFallback(query);
};

/**
 * Generate shared thinking steps (Chain-of-Thought)
 * Now context-aware (Phase 11 Upgrade)
 */
export const generateReasoning = (query, effectiveTopic = null) => {
    const analysis = advancedQueryAnalysis(query);
    const q = query.toLowerCase();
    const steps = [];

    // Identify if this is a follow-up
    const isFollowup = !analysis.components.length && !analysis.concepts.length && effectiveTopic;

    steps.push("Okay, looking at your request: '" + query.substring(0, 30) + (query.length > 30 ? "..." : "") + "'");

    if (effectiveTopic) {
        if (isFollowup) {
            steps.push(`I see this is a follow-up! Keeping our talk about **${effectiveTopic}** in mind.`);
        } else {
            steps.push(`Contextual memory active: Keeping **${effectiveTopic}** in the background.`);
        }
    }

    if (analysis.components.length > 0) {
        steps.push(`Checking out the hardware: [${analysis.components.join(', ')}]`);
    }

    if (analysis.concepts.length > 0) {
        steps.push(`Thinking about the logic for: [${analysis.concepts.join(', ')}]`);
    }

    // Goal-specific reasoning
    if (analysis.actions.includes('code')) {
        steps.push(`Searching my bench for a clean code example for ${effectiveTopic || 'this hardware'}...`);
    } else if (analysis.actions.includes('wiring')) {
        steps.push(`Visualizing the pin layout and voltage requirements for ${effectiveTopic || 'this component'}...`);
    }

    // Logic jumps based on query content
    if (/project|build|create|brainstorm/.test(q)) {
        steps.push("Switching to **Architectural Planning Mode**...");
        steps.push(`Analyzing ${effectiveTopic || 'the components'} for project potential...`);
        steps.push("Drafting a step-by-step implementation guide for you.");
    } else if (analysis.actions.includes('troubleshoot')) {
        steps.push("Looks like we've hit a snag. Let's re-trace the steps...");
        steps.push("Double-checking the basics: wiring, power, and common GND.");
    } else if (analysis.actions.includes('learn') || analysis.actions.includes('recommend')) {
        steps.push("Great! Let's find the most stable way to do this...");
        steps.push("Looking for best practices that won't give you headaches later.");
    }

    // Sentiment-aware reasoning
    const sentiment = detectSentiment(q);
    if (sentiment === 'struggling') {
        steps.push("I can tell this is frustrating. Let's go slow and make it simple.");
    }

    // Implicit intent reasoning
    const topic = effectiveTopic || analysis.components[0] || analysis.concepts[0];
    if (topic && !analysis.actions.length) {
        steps.push(`Thinking of the best way to explain ${topic} to a friend...`);
    }

    steps.push("Wrapping my thoughts into a plan for us...");
    return steps;
};

export const getFullSensorInfo = (sensorName) => {
    const sensor = SENSOR_KNOWLEDGE[sensorName.toLowerCase()];
    if (!sensor) return null;
    let res = `**${sensor.fullName}**\n\n${sensor.description}\n\n`;
    if (sensor.specs) res += `**Specs:** ${Object.entries(sensor.specs).map(([k, v]) => `${k}: ${v}`).join(', ')}\n`;
    if (sensor.pins) res += `**Pins:** ${sensor.pins}\n`;
    if (sensor.protocol) res += `**Protocol:** ${sensor.protocol}\n`;
    if (sensor.tips) res += `**💡 Pro Tip:** ${sensor.tips}\n`;
    return res;
};
