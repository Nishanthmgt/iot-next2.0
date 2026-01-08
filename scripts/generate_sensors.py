#!/usr/bin/env python3
"""Generate comprehensive categorized sensor data for sensors.js"""

# Category definitions
categories = [
    {"id": "environmental", "name": "Environmental Sensors", "emoji": "🌡"},
    {"id": "gas_air", "name": "Gas & Air Quality", "emoji": "🧪"},
    {"id": "motion_presence", "name": "Motion & Presence", "emoji": "🚶"},
    {"id": "light_optical", "name": "Light & Optical", "emoji": "💡"},
    {"id": "sound_vibration", "name": "Sound & Vibration", "emoji": "🎧"},
    {"id": "imu_position", "name": "IMU & Position", "emoji": "🧠"},
    {"id": "water_agriculture", "name": "Water & Agriculture", "emoji": "💧"},
    {"id": "health_biomedical", "name": "Health & Biomedical", "emoji": "❤️"},
    {"id": "communication", "name": "Communication Modules", "emoji": "📡"},
    {"id": "actuators_drivers", "name": "Actuators & Drivers", "emoji": "⚙️"},
    {"id": "industrial", "name": "Industrial Sensors", "emoji": "🏭"},
    {"id": "displays_hmi", "name": "Displays & HMI", "emoji": "🖥"}
]

# Comprehensive sensor data organized by category
sensors_data = {
    "environmental": [
        {"name": "DHT11 Temp & Humidity", "level": "Beginner", "desc": "Entry-level digital temperature and humidity sensor", "pins": "3 Pins (VCC, GND, DATA)", "buy": "https://robu.in/product/dht11-temperature-and-relative-humidity-sensor-module/"},
        {"name": "DHT22 (AM2302)", "level": "Beginner", "desc": "Higher accuracy temp & humidity sensor", "pins": "3 Pins (VCC, GND, DATA)", "buy": "https://robu.in/product/dht22-temperature-and-humidity-sensor/"},
        {"name": "DS18B20 Waterproof", "level": "Beginner", "desc": "1-Wire digital temperature sensor, waterproof probe", "pins": "3 Pins (VCC, GND, DATA)", "buy": "https://robu.in/product/ds18b20-waterproof-temperature-sensor/"},
        {"name": "LM35 Temperature", "level": "Beginner", "desc": "Analog temperature sensor with linear output", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/lm35-temperature-sensor/"},
        {"name": "TMP36 Temperature", "level": "Beginner", "desc": "Low voltage precision temperature sensor", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/tmp36-temperature-sensor/"},
        {"name": "BMP180 Pressure", "level": "Intermediate", "desc": "Barometric pressure and temperature sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/bmp180-barometric-pressure-sensor/"},
        {"name": "BMP280 Pressure", "level": "Intermediate", "desc": "High-precision atmospheric pressure and altitude", "pins": "6 Pins (VCC, GND, SCL, SDA, CSB, SDO)", "buy": "https://robu.in/product/bmp280-pressure-and-temperature-sensor-module/"},
        {"name": "BME280 Multi-Sensor", "level": "Intermediate", "desc": "Combined temp, humidity, and pressure sensor", "pins": "6 Pins (VCC, GND, SCL, SDA, CSB, SDO)", "buy": "https://robu.in/product/bme280-temperature-humidity-pressure-sensor/"},
        {"name": "BME680 Air Quality", "level": "Advanced", "desc": "4-in-1 sensor: temp, humidity, pressure, gas", "pins": "6 Pins (VCC, GND, SCL, SDA, CSB, SDO)", "buy": "https://robu.in/product/bme680-environmental-sensor/"},
        {"name": "SHT31 Temp & Humidity", "level": "Intermediate", "desc": "High-accuracy I2C temp & humidity sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/sht31-temperature-humidity-sensor/"},
        {"name": "HTU21D Humidity", "level": "Intermediate", "desc": "Digital humidity sensor with temperature output", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/htu21d-humidity-sensor/"},
        {"name": "SI7021 Temp & Humidity", "level": "Intermediate", "desc": "I2C humidity and temperature sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/si7021-temperature-humidity-sensor/"},
        {"name": "AHT10 Temp & Humidity", "level": "Intermediate", "desc": "Low-cost high-precision humidity sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/aht10-temperature-humidity-sensor/"},
    ],
    
    "gas_air": [
        {"name": "MQ-2 Gas Sensor", "level": "Intermediate", "desc": "Detects LPG, Smoke, and Carbon Monoxide", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-2-gas-sensor-module-for-arduino/"},
        {"name": "MQ-3 Alcohol Sensor", "level": "Intermediate", "desc": "Detects alcohol vapor and ethanol", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-3-alcohol-sensor/"},
        {"name": "MQ-4 Methane Sensor", "level": "Intermediate", "desc": "Natural gas and methane detection", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-4-methane-sensor/"},
        {"name": "MQ-5 LPG Sensor", "level": "Intermediate", "desc": "LPG and natural gas detector", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-5-lpg-sensor/"},
        {"name": "MQ-6 LPG/Butane", "level": "Intermediate", "desc": "Detects LPG and butane gas", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-6-lpg-sensor/"},
        {"name": "MQ-7 Carbon Monoxide", "level": "Intermediate", "desc": "High sensitivity CO gas sensor", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-7-carbon-monoxide-sensor/"},
        {"name": "MQ-8 Hydrogen Sensor", "level": "Intermediate", "desc": "Detects hydrogen gas leaks", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-8-hydrogen-sensor/"},
        {"name": "MQ-9 CO & Combustible", "level": "Intermediate", "desc": "Detects CO and combustible gases", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-9-gas-sensor/"},
        {"name": "MQ-135 Air Quality", "level": "Intermediate", "desc": "Detects NH3, NOx, Alcohol, Benzene, Smoke", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/mq-135-air-quality-sensor-module/"},
        {"name": "CCS811 Air Quality", "level": "Advanced", "desc": "Digital gas sensor for VOC and eCO2", "pins": "6 Pins (VCC, GND, SCL, SDA, WAK, INT)", "buy": "https://robu.in/product/ccs811-air-quality-sensor/"},
        {"name": "SGP30 Air Quality", "level": "Advanced", "desc": "Multi-pixel gas sensor for air quality", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/sgp30-air-quality-sensor/"},
    ],
    
    "motion_presence": [
        {"name": "HC-SR04 Ultrasonic", "level": "Beginner", "desc": "Standard non-contact distance sensor", "pins": "4 Pins (VCC, TRIG, ECHO, GND)", "buy": "https://robu.in/product/hc-sr04-ultrasonic-sensor/"},
        {"name": "HC-SR501 PIR Motion", "level": "Beginner", "desc": "Infrared human motion detection", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/pir-motion-sensor-module/"},
        {"name": "AM312 Mini PIR", "level": "Beginner", "desc": "Compact low-power PIR motion sensor", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/am312-mini-pir-sensor/"},
        {"name": "RCWL-0516 Microwave", "level": "Intermediate", "desc": "Microwave radar motion sensor", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/rcwl-0516-microwave-radar-sensor/"},
        {"name": "JSN-SR04T Waterproof", "level": "Intermediate", "desc": "Waterproof ultrasonic distance sensor", "pins": "4 Pins (VCC, TRIG, ECHO, GND)", "buy": "https://robu.in/product/jsn-sr04t-waterproof-ultrasonic-sensor/"},
        {"name": "VL53L0X Laser ToF", "level": "Advanced", "desc": "Pinpoint accurate laser distance measurement", "pins": "6 Pins (VCC, GND, SCL, SDA, GPIO1, XSHUT)", "buy": "https://robu.in/product/vl53l0x-time-of-flight-distance-sensor-module/"},
        {"name": "VL53L1X Long Range ToF", "level": "Advanced", "desc": "Long-range laser time-of-flight sensor", "pins": "6 Pins (VCC, GND, SCL, SDA, GPIO1, XSHUT)", "buy": "https://robu.in/product/vl53l1x-tof-sensor/"},
        {"name": "GP2Y0A21YK Sharp IR", "level": "Intermediate", "desc": "Analog infrared distance sensor 10-80cm", "pins": "3 Pins (VCC, GND, OUT)", "buy": "https://robu.in/product/sharp-gp2y0a21yk-ir-sensor/"},
        {"name": "Tilt Switch Sensor", "level": "Beginner", "desc": "Ball-in-tube switch for orientation changes", "pins": "2 Pins (Switch Output)", "buy": "https://robu.in/product/ky-020-tilt-switch-module/"},
        {"name": "Reed Switch Module", "level": "Beginner", "desc": "Magnetic field detector for door/window sensing", "pins": "3 Pins (VCC, GND, DO)", "buy": "https://robu.in/product/magnetic-reed-switch-module/"},
    ],
    
    "light_optical": [
        {"name": "LDR Photoresistor", "level": "Beginner", "desc": "Light intensity detection for automatic lights", "pins": "2 Pins (Polarity Independent)", "buy": "https://robu.in/product/5mm-ldr-sensor/"},
        {"name": "BH1750 Light Sensor", "level": "Intermediate", "desc": "Digital ambient light intensity sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/bh1750-light-sensor/"},
        {"name": "TSL2561 Luminosity", "level": "Intermediate", "desc": "Digital light sensor with IR filtering", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/tsl2561-light-sensor/"},
        {"name": "APDS-9960 RGB Gesture", "level": "Advanced", "desc": "RGB, gesture, proximity, and ambient light", "pins": "6 Pins (VCC, GND, SCL, SDA, INT, LDR)", "buy": "https://robu.in/product/apds-9960-rgb-gesture-sensor/"},
        {"name": "TCS34725 RGB Color", "level": "Intermediate", "desc": "RGB color sensor with IR filter", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/tcs34725-rgb-color-sensor/"},
        {"name": "TCS3200 Color Sensor", "level": "Intermediate", "desc": "Programmable color light-to-frequency converter", "pins": "8 Pins (VCC, GND, S0-S3, OUT, OE)", "buy": "https://robu.in/product/tcs3200-color-sensor/"},
        {"name": "VEML7700 Lux Sensor", "level": "Intermediate", "desc": "High accuracy ambient light sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/veml7700-light-sensor/"},
        {"name": "GUVA-S12SD UV Sensor", "level": "Intermediate", "desc": "Ultraviolet light intensity sensor", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/guva-s12sd-uv-sensor/"},
    ],
    
    "sound_vibration": [
        {"name": "MAX4466 Electret Mic", "level": "Intermediate", "desc": "Electret microphone amplifier with AGC", "pins": "3 Pins (VCC, OUT, GND)", "buy": "https://robu.in/product/max4466-microphone-module/"},
        {"name": "MAX9814 Mic with AGC", "level": "Intermediate", "desc": "Microphone with automatic gain control", "pins": "5 Pins (VCC, OUT, GND, GAIN, AR)", "buy": "https://robu.in/product/max9814-microphone/"},
        {"name": "KY-038 Sound Sensor", "level": "Beginner", "desc": "Sound detection module with digital output", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/ky-038-sound-sensor/"},
        {"name": "SW-420 Vibration", "level": "Beginner", "desc": "Detects physical impacts and vibrations", "pins": "3 Pins (VCC, GND, DO)", "buy": "https://robu.in/product/sw-420-vibration-sensor-module/"},
        {"name": "Piezo Vibration Sensor", "level": "Beginner", "desc": "Piezoelectric vibration and knock detector", "pins": "2 Pins (Signal, GND)", "buy": "https://robu.in/product/piezo-vibration-sensor/"},
        {"name": "INMP441 I2S MEMS Mic", "level": "Advanced", "desc": "High-performance I2S digital microphone", "pins": "6 Pins (VCC, GND, WS, SCK, SD, L/R)", "buy": "https://robu.in/product/inmp441-mems-microphone/"},
    ],
    
    "imu_position": [
        {"name": "MPU6050 6-Axis IMU", "level": "Advanced", "desc": "6-axis motion tracking with gyro and accel", "pins": "8 Pins (VCC, GND, SCL, SDA, XDA, XCL, AD0, INT)", "buy": "https://robu.in/product/mpu6050-6-axis-gyroscope-and-accelerometer-module/"},
        {"name": "MPU9250 9-Axis IMU", "level": "Advanced", "desc": "9-axis IMU with magnetometer", "pins": "8 Pins (VCC, GND, SCL, SDA, NCS, FSYNC, AD0, INT)", "buy": "https://robu.in/product/mpu9250-9-axis-imu/"},
        {"name": "BNO055 9-DOF IMU", "level": "Advanced", "desc": "Absolute orientation sensor with sensor fusion", "pins": "10 Pins (VCC, GND, SCL, SDA, RST, INT, PS0, PS1, BOOT, ADDR)", "buy": "https://robu.in/product/bno055-9-dof-imu/"},
        {"name": "ADXL345 Accelerometer", "level": "Intermediate", "desc": "3-axis digital accelerometer", "pins": "7 Pins (VCC, GND, SCL, SDA, CS, SDO, INT)", "buy": "https://robu.in/product/adxl345-accelerometer/"},
        {"name": "LSM6DS3 6-Axis IMU", "level": "Advanced", "desc": "Low-power 6-axis IMU", "pins": "6 Pins (VCC, GND, SCL, SDA, INT1, INT2)", "buy": "https://robu.in/product/lsm6ds3-6-axis-imu/"},
        {"name": "NEO-6M GPS Module", "level": "Intermediate", "desc": "GPS receiver with ceramic antenna", "pins": "4 Pins (VCC, GND, TX, RX)", "buy": "https://robu.in/product/neo-6m-gps-module/"},
        {"name": "NEO-7M GPS Module", "level": "Intermediate", "desc": "High-performance GPS with EEPROM", "pins": "4 Pins (VCC, GND, TX, RX)", "buy": "https://robu.in/product/neo-7m-gps-module/"},
        {"name": "HMC5883L Compass", "level": "Intermediate", "desc": "3-axis digital compass magnetometer", "pins": "5 Pins (VCC, GND, SCL, SDA, DRDY)", "buy": "https://robu.in/product/hmc5883l-compass/"},
        {"name": "QMC5883L Compass", "level": "Intermediate", "desc": "3-axis magnetic sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/qmc5883l-compass/"},
        {"name": "A9G GPS+GPRS Module", "level": "Advanced", "desc": "Integrated location tracking and cellular IoT", "pins": "Multi-Pin (UART, GPIO, Power)", "buy": "https://robu.in/product/a9g-gsm-gprs-gps-development-board/"},
    ],
    
    "water_agriculture": [
        {"name": "Capacitive Soil Moisture", "level": "Intermediate", "desc": "Corrosion-resistant moisture sensor", "pins": "3 Pins (VCC, GND, AOUT)", "buy": "https://robu.in/product/capacitive-soil-moisture-sensor-module/"},
        {"name": "Resistive Soil Moisture", "level": "Beginner", "desc": "Basic soil moisture detection", "pins": "2 Pins (Analog Output)", "buy": "https://robu.in/product/soil-moisture-sensor/"},
        {"name": "PH-4502C pH Sensor", "level": "Intermediate", "desc": "Liquid pH measurement module", "pins": "6 Pins (VCC, GND, PO, DO, TO, GND)", "buy": "https://robu.in/product/ph-sensor-module/"},
        {"name": "TDS Sensor Module", "level": "Intermediate", "desc": "Total dissolved solids water quality sensor", "pins": "3 Pins (VCC, GND, A)", "buy": "https://robu.in/product/tds-sensor/"},
        {"name": "Water Level Sensor", "level": "Beginner", "desc": "Detects water level depth", "pins": "3 Pins (VCC, GND, S)", "buy": "https://robu.in/product/water-level-sensor/"},
        {"name": "YFS201 Flow Sensor", "level": "Advanced", "desc": "Measures liquid flow rate using Hall effect", "pins": "3 Pins (VCC, GND, SIG)", "buy": "https://robu.in/product/yfs201-g1-2-liquid-flow-sensor/"},
        {"name": "YF-S201 Water Flow", "level": "Advanced", "desc": "Hall effect water flow rate sensor", "pins": "3 Pins (VCC, GND, SIG)", "buy": "https://robu.in/product/yf-s201-water-flow-sensor/"},
        {"name": "Rain Sensor Module", "level": "Beginner", "desc": "Detects rain and moisture on surface", "pins": "4 Pins (VCC, GND, DO, AO)", "buy": "https://robu.in/product/rain-sensor-module/"},
    ],
    
    "health_biomedical": [
        {"name": "MAX30102 Pulse Ox", "level": "Advanced", "desc": "Pulse oximeter and heart rate sensor", "pins": "5 Pins (VCC, GND, SCL, SDA, INT)", "buy": "https://robu.in/product/max30102-pulse-oximeter/"},
        {"name": "MAX30100 Heart Rate", "level": "Advanced", "desc": "Heart rate and SpO2 sensor", "pins": "5 Pins (VCC, GND, SCL, SDA, INT)", "buy": "https://robu.in/product/max30100-heart-rate-sensor/"},
        {"name": "AD8232 ECG Module", "level": "Advanced", "desc": "Single-lead heart rate monitor", "pins": "9 Pins (VCC, GND, OUTPUT, LO+, LO-, SDN, RA, LA, RL)", "buy": "https://robu.in/product/ad8232-ecg-module/"},
        {"name": "MLX90614 IR Thermometer", "level": "Intermediate", "desc": "Non-contact infrared temperature sensor", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/mlx90614-ir-thermometer/"},
        {"name": "MLX90615 IR Sensor", "level": "Intermediate", "desc": "Digital infrared thermometer", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/mlx90615-ir-sensor/"},
        {"name": "Pulse Sensor (Analog)", "level": "Beginner", "desc": "Optical heart rate sensor", "pins": "3 Pins (VCC, GND, Signal)", "buy": "https://robu.in/product/pulse-sensor/"},
    ],
    
    "communication": [
        {"name": "ESP32 Dev Board", "level": "Intermediate", "desc": "Wi-Fi + BT enabled MCU for cloud connectivity", "pins": "30 Pins (GPIOs, SPI, I2C, UART)", "buy": "https://robu.in/product/esp32-development-board-30-pin/"},
        {"name": "ESP8266 NodeMCU", "level": "Intermediate", "desc": "Wi-Fi enabled microcontroller", "pins": "30 Pins (GPIOs, SPI, I2C, UART)", "buy": "https://robu.in/product/nodemcu-esp8266/"},
        {"name": "ESP32-CAM", "level": "Advanced", "desc": "ESP32 with camera and SD card", "pins": "16 Pins (GPIO, Camera, SD)", "buy": "https://robu.in/product/esp32-cam/"},
        {"name": "HC-05 Bluetooth", "level": "Intermediate", "desc": "Classic Bluetooth serial module", "pins": "6 Pins (VCC, GND, TX, RX, KEY, STATE)", "buy": "https://robu.in/product/hc-05-bluetooth-module/"},
        {"name": "HC-06 Bluetooth", "level": "Beginner", "desc": "Bluetooth serial communication module", "pins": "4 Pins (VCC, GND, TX, RX)", "buy": "https://robu.in/product/hc-06-bluetooth-module/"},
        {"name": "HM-10 BLE Module", "level": "Intermediate", "desc": "Bluetooth Low Energy 4.0 module", "pins": "6 Pins (VCC, GND, TX, RX, STATE, BRDY)", "buy": "https://robu.in/product/hm-10-ble-module/"},
        {"name": "NRF24L01 2.4GHz", "level": "Advanced", "desc": "High-speed wireless transceiver", "pins": "8 Pins (VCC, GND, CE, CSN, SCK, MOSI, MISO, IRQ)", "buy": "https://robu.in/product/nrf24l01-sma-antenna-wireless-transceiver-module/"},
        {"name": "NRF24L01+ PA+LNA", "level": "Advanced", "desc": "Long-range NRF24L01 with amplifier", "pins": "8 Pins (VCC, GND, CE, CSN, SCK, MOSI, MISO, IRQ)", "buy": "https://robu.in/product/nrf24l01-pa-lna-module/"},
        {"name": "SX1278 LoRa 433MHz", "level": "Advanced", "desc": "Long-range, low-power wireless communication", "pins": "6 Pins (GND, SCK, MISO, MOSI, NSS, REST)", "buy": "https://robu.in/product/sx1278-lora-module-433mhz/"},
        {"name": "SX1276 LoRa 915MHz", "level": "Advanced", "desc": "LoRa module for 915MHz band", "pins": "6 Pins (GND, SCK, MISO, MOSI, NSS, REST)", "buy": "https://robu.in/product/sx1276-lora-module/"},
        {"name": "SIM800L GSM Module", "level": "Advanced", "desc": "Cellular connectivity for SMS and data", "pins": "7 Pins (NET, VCC, RST, RXD, TXD, GND, RING)", "buy": "https://robu.in/product/sim800l-gprs-gsm-module-shield-board/"},
        {"name": "SIM900A GSM Module", "level": "Advanced", "desc": "GSM/GPRS module for cellular communication", "pins": "Multi-Pin (UART, Power, SIM)", "buy": "https://robu.in/product/sim900a-gsm-module/"},
    ],
    
    "actuators_drivers": [
        {"name": "SG90 Micro Servo", "level": "Intermediate", "desc": "Precise 180-degree motor for joint control", "pins": "3 Pins (GND, VCC, PWM)", "buy": "https://robu.in/product/towerpro-sg90-9g-mini-servo-90-degree-rotation/"},
        {"name": "MG996R Servo", "level": "Intermediate", "desc": "High-torque metal gear servo", "pins": "3 Pins (GND, VCC, PWM)", "buy": "https://robu.in/product/mg996r-servo-motor/"},
        {"name": "28BYJ-48 Stepper", "level": "Intermediate", "desc": "5V stepper motor with ULN2003 driver", "pins": "5 Pins (IN1-IN4, VCC)", "buy": "https://robu.in/product/28byj-48-stepper-motor/"},
        {"name": "L298N Motor Driver", "level": "Intermediate", "desc": "Dual H-bridge DC motor driver", "pins": "12 Pins (IN1-IN4, ENA, ENB, OUT1-OUT4, VCC, GND)", "buy": "https://robu.in/product/l298n-motor-driver/"},
        {"name": "L293D Motor Driver", "level": "Beginner", "desc": "Dual H-bridge motor driver IC", "pins": "16 Pins (DIP Package)", "buy": "https://robu.in/product/l293d-motor-driver-ic/"},
        {"name": "TB6612FNG Driver", "level": "Intermediate", "desc": "Dual motor driver with PWM control", "pins": "16 Pins (PWMA, PWMB, AIN1-AIN2, BIN1-BIN2, etc.)", "buy": "https://robu.in/product/tb6612fng-motor-driver/"},
        {"name": "DRV8825 Stepper Driver", "level": "Advanced", "desc": "Microstepping stepper motor driver", "pins": "16 Pins (STEP, DIR, EN, MS1-MS3, etc.)", "buy": "https://robu.in/product/drv8825-stepper-driver/"},
        {"name": "A4988 Stepper Driver", "level": "Advanced", "desc": "Stepper motor driver with microstepping", "pins": "16 Pins (STEP, DIR, EN, MS1-MS3, etc.)", "buy": "https://robu.in/product/a4988-stepper-driver/"},
        {"name": "1-Channel Relay", "level": "Beginner", "desc": "5V relay module for AC/DC switching", "pins": "3 Pins (VCC, GND, IN)", "buy": "https://robu.in/product/1-channel-relay-module/"},
        {"name": "2-Channel Relay", "level": "Beginner", "desc": "Dual relay module", "pins": "4 Pins (VCC, GND, IN1, IN2)", "buy": "https://robu.in/product/2-channel-relay-module/"},
        {"name": "4-Channel Relay", "level": "Intermediate", "desc": "Four relay module for multiple loads", "pins": "6 Pins (VCC, GND, IN1-IN4)", "buy": "https://robu.in/product/4-channel-relay-module/"},
        {"name": "8-Channel Relay", "level": "Intermediate", "desc": "Eight relay module for complex automation", "pins": "10 Pins (VCC, GND, IN1-IN8)", "buy": "https://robu.in/product/8-channel-relay-module/"},
        {"name": "WS2812B LED Strip", "level": "Intermediate", "desc": "Addressable RGB LED strip", "pins": "3 Pins (VCC, GND, DIN)", "buy": "https://robu.in/product/ws2812b-led-strip/"},
        {"name": "5mm LED Module", "level": "Beginner", "desc": "Basic LED indicator module", "pins": "2 Pins (Anode, Cathode)", "buy": "https://robu.in/product/5mm-led/"},
        {"name": "RGB LED Module", "level": "Beginner", "desc": "Common cathode RGB LED", "pins": "4 Pins (R, G, B, GND)", "buy": "https://robu.in/product/rgb-led-module/"},
    ],
    
    "industrial": [
        {"name": "ACS712 5A Current", "level": "Advanced", "desc": "Hall effect current sensor 5A range", "pins": "3 Pins (VCC, GND, OUT)", "buy": "https://robu.in/product/acs712-5a-current-sensor/"},
        {"name": "ACS712 20A Current", "level": "Advanced", "desc": "Hall effect current sensor 20A range", "pins": "3 Pins (VCC, GND, OUT)", "buy": "https://robu.in/product/acs712-20a-current-sensor/"},
        {"name": "ACS712 30A Current", "level": "Advanced", "desc": "Precise AC/DC current monitoring up to 30A", "pins": "3 Pins (VCC, GND, OUT)", "buy": "https://robu.in/product/acs712-30a-current-sensor-module/"},
        {"name": "ZMPT101B AC Voltage", "level": "Advanced", "desc": "AC voltage sensor module", "pins": "4 Pins (VCC, GND, OUT, GND)", "buy": "https://robu.in/product/zmpt101b-voltage-sensor/"},
        {"name": "PZEM-004T Power Meter", "level": "Advanced", "desc": "AC power, voltage, current, energy meter", "pins": "4 Pins (VCC, GND, TX, RX)", "buy": "https://robu.in/product/pzem-004t-power-meter/"},
        {"name": "INA219 Current/Voltage", "level": "Advanced", "desc": "High-side DC current and voltage sensor", "pins": "6 Pins (VCC, GND, SCL, SDA, VIN+, VIN-)", "buy": "https://robu.in/product/ina219-current-sensor/"},
        {"name": "HX711 Load Cell Amp", "level": "Advanced", "desc": "24-bit ADC for load cell amplification", "pins": "4 Pins (VCC, GND, DT, SCK)", "buy": "https://robu.in/product/hx711-load-cell-amplifier/"},
        {"name": "5kg Load Cell", "level": "Advanced", "desc": "Strain gauge load cell for weight measurement", "pins": "4 Wires (E+, E-, A+, A-)", "buy": "https://robu.in/product/5kg-load-cell/"},
        {"name": "Rotary Encoder KY-040", "level": "Intermediate", "desc": "Rotary encoder with push button", "pins": "5 Pins (CLK, DT, SW, VCC, GND)", "buy": "https://robu.in/product/ky-040-rotary-encoder/"},
        {"name": "Hall Effect Sensor", "level": "Intermediate", "desc": "Magnetic field detection sensor", "pins": "3 Pins (VCC, GND, OUT)", "buy": "https://robu.in/product/hall-effect-sensor/"},
        {"name": "LJ12A3 Proximity Sensor", "level": "Advanced", "desc": "Inductive proximity sensor NPN", "pins": "3 Wires (Brown-VCC, Blue-GND, Black-OUT)", "buy": "https://robu.in/product/lj12a3-proximity-sensor/"},
        {"name": "Limit Switch Module", "level": "Beginner", "desc": "Mechanical limit switch for end-stop detection", "pins": "3 Pins (COM, NO, NC)", "buy": "https://robu.in/product/limit-switch/"},
    ],
    
    "displays_hmi": [
        {"name": "0.96\" OLED I2C", "level": "Intermediate", "desc": "Crisp 128x64 display for visual feedback", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/0-96-inch-blue-oled-display-module-i2c/"},
        {"name": "1.3\" OLED Display", "level": "Intermediate", "desc": "Larger OLED display 128x64", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/1-3-inch-oled-display/"},
        {"name": "16x2 LCD I2C", "level": "Beginner", "desc": "Character LCD with I2C backpack", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/16x2-lcd-i2c/"},
        {"name": "20x4 LCD I2C", "level": "Intermediate", "desc": "Large character LCD display", "pins": "4 Pins (VCC, GND, SCL, SDA)", "buy": "https://robu.in/product/20x4-lcd-i2c/"},
        {"name": "1.8\" TFT ST7735", "level": "Intermediate", "desc": "Color TFT display 128x160", "pins": "8 Pins (VCC, GND, SCL, SDA, CS, DC, RST, BL)", "buy": "https://robu.in/product/1-8-inch-tft-display/"},
        {"name": "2.4\" TFT ILI9341", "level": "Intermediate", "desc": "Touch TFT display 240x320", "pins": "14 Pins (SPI + Touch interface)", "buy": "https://robu.in/product/2-4-inch-tft-touch-display/"},
        {"name": "Nextion 2.4\" HMI", "level": "Advanced", "desc": "Smart touch screen with drag-and-drop UI", "pins": "4 Pins (5V, TX, RX, GND)", "buy": "https://robu.in/product/nx3224t024-nextion-2-4-hmi-touch-display/"},
        {"name": "Nextion 3.5\" HMI", "level": "Advanced", "desc": "Enhanced HMI touch display", "pins": "4 Pins (5V, TX, RX, GND)", "buy": "https://robu.in/product/nextion-3-5-hmi-display/"},
        {"name": "TM1637 7-Segment", "level": "Beginner", "desc": "4-digit 7-segment LED display", "pins": "4 Pins (VCC, GND, CLK, DIO)", "buy": "https://robu.in/product/tm1637-7-segment-display/"},
        {"name": "MAX7219 LED Matrix", "level": "Intermediate", "desc": "8x8 LED dot matrix display", "pins": "5 Pins (VCC, GND, DIN, CS, CLK)", "buy": "https://robu.in/product/max7219-led-matrix/"},
        {"name": "2.9\" E-Paper Display", "level": "Advanced", "desc": "Low-power e-ink display", "pins": "8 Pins (VCC, GND, DIN, CLK, CS, DC, RST, BUSY)", "buy": "https://robu.in/product/2-9-inch-e-paper-display/"},
        {"name": "4.2\" E-Paper Display", "level": "Advanced", "desc": "Large e-ink display for low-power projects", "pins": "8 Pins (VCC, GND, DIN, CLK, CS, DC, RST, BUSY)", "buy": "https://robu.in/product/4-2-inch-e-paper-display/"},
    ]
}

# Generate JavaScript file
def generate_js():
    import json
    output = []
    
    # Add header comment
    output.append("// Auto-generated comprehensive sensor data")
    output.append("// Organized by 12 categories with 120+ sensors\n")
    
    # Add category definitions
    output.append("export const sensorCategories = [")
    for cat in categories:
        output.append(f"  {{ id: '{cat['id']}', name: '{cat['name']}', emoji: '{cat['emoji']}' }},")
    output.append("];\n")
    
    # Add sensors
    output.append("export const sensors = [")
    
    sensor_id = 1
    for cat_id, cat_data in sensors_data.items():
        # Find category info
        cat_info = next(c for c in categories if c['id'] == cat_id)
        output.append(f"\n  // {cat_info['emoji']} {cat_info['name']}")
        
        for sensor in cat_data:
            # Use JSON encoding to properly escape strings
            name = json.dumps(sensor['name'])
            desc = json.dumps(sensor['desc'])
            pins = json.dumps(sensor['pins'])
            buy = json.dumps(sensor['buy'])
            image_text = sensor['name'].replace(' ', '+').replace('"', '%22')
            
            output.append("  {")
            output.append(f"    id: {sensor_id},")
            output.append(f"    name: {name},")
            output.append(f"    level: \"{sensor['level']}\",")
            output.append(f"    category: \"{cat_info['name']}\",")
            output.append(f"    categoryId: \"{cat_id}\",")
            output.append(f"    emoji: \"{cat_info['emoji']}\",")
            output.append(f"    description: {desc},")
            output.append(f"    pins: {pins},")
            output.append(f"    buyLink: {buy},")
            output.append(f"    image: \"https://via.placeholder.com/300x200?text={image_text}\"")
            output.append("  },")
            sensor_id += 1
    
    output.append("];\n")
    
    # Add kits (keep existing structure)
    output.append("export const kits = [")
    output.append("  {")
    output.append("    level: \"Beginner\",")
    output.append("    title: \"Starter Essentials\",")
    output.append("    description: \"The complete BOM for early-stage IoT learners.\",")
    output.append("    items: [{ name: \"Arduino Uno R3\" }, { name: \"DHT11 Sensor\" }, { name: \"USB Cable\" }, { name: \"Jumper Wires\" }, { name: \"Breadboard\" }]")
    output.append("  },")
    output.append("  {")
    output.append("    level: \"Intermediate\",")
    output.append("    title: \"Connectivity Pack\",")
    output.append("    description: \"Cloud-focused components for wireless node deployment.\",")
    output.append("    items: [{ name: \"ESP32 Dev Board\" }, { name: \"0.96 OLED Display\" }, { name: \"MQ-2 Gas Sensor\" }, { name: \"SG90 Servo\" }]")
    output.append("  },")
    output.append("  {")
    output.append("    level: \"Advanced\",")
    output.append("    title: \"Edge Industry Pack\",")
    output.append("    description: \"Industrial protocols and high-precision sensing.\",")
    output.append("    items: [{ name: \"MPU6050 IMU\" }, { name: \"SX1278 LoRa\" }, { name: \"Current Sensor\" }, { name: \"TFT Touch LCD\" }]")
    output.append("  }")
    output.append("];\n")
    
    # Add helper exports
    output.append("export const extendedSensors = [...sensors];")
    
    return "\n".join(output)

# Write to file
if __name__ == "__main__":
    import os
    js_content = generate_js()
    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "data", "sensors.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✅ Generated sensors.js with {len([s for cat in sensors_data.values() for s in cat])} sensors across {len(categories)} categories")
