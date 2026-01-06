const e={id:"mini-project-ideas",title:"Mini Project Ideas",subtitle:"Quick portfolio builders for resumes",sections:[{id:"beginner-projects",title:"🌱 Beginner Level (1-2 Days)",content:`
## 1. Smart Plant Watering System

**Components**: Soil moisture sensor, relay, water pump, Arduino
**Features**:
- Auto-water when soil is dry
- Manual override button
- LED status indicator

**Learning**: Analog sensors, relay control, thresholds

---

## 2. Room Occupancy Counter

**Components**: 2× IR sensors, Arduino, 7-segment display
**Features**:
- Count people entering/leaving
- Display current count
- Reset button

**Learning**: Interrupt handling, state logic, display control

---

## 3. Smart Dustbin

**Components**: Ultrasonic sensor, servo, Arduino
**Features**:
- Auto-open lid when hand detected
- Close after 5 seconds
- Battery powered

**Learning**: Distance sensing, servo control, timers

---

## 4. Temperature-Controlled Fan

**Components**: DHT11, DC fan, transistor, Arduino
**Features**:
- Auto fan speed based on temperature
- LCD display for temp
- Adjustable threshold

**Learning**: PWM, temperature sensing, PID basics

---

## 5. Light-Following Robot

**Components**: 2× LDR, 2× motors, L293D, Arduino
**Features**:
- Follows brightest light source
- Obstacle detection (optional)
- Speed control

**Learning**: Analog comparison, motor control, robotics basics
            `},{id:"intermediate-projects",title:"⚡ Intermediate Level (3-5 Days)",content:`
## 6. WiFi Weather Station

**Components**: ESP8266, DHT22, BMP180, OLED
**Features**:
- Temperature, humidity, pressure
- Web dashboard
- Data logging to cloud
- Historical graphs

**Learning**: WiFi, HTTP, APIs, data visualization

---

## 7. RFID Attendance System

**Components**: RFID reader, ESP32, SD card, RTC
**Features**:
- Scan card to mark attendance
- Store in SD card with timestamp
- Web interface to view records
- Export to CSV

**Learning**: RFID, file systems, real-time clock, web server

---

## 8. Bluetooth-Controlled Home Automation

**Components**: ESP32, 4-channel relay, mobile app
**Features**:
- Control 4 appliances via Bluetooth
- Voice commands (Google Assistant)
- Scheduling
- Power consumption monitoring

**Learning**: BLE, relay control, mobile app integration

---

## 9. Air Quality Monitor

**Components**: ESP32, MQ-135, DHT22, OLED
**Features**:
- Measure CO2, temperature, humidity
- Alert when air quality is poor
- Send data to cloud
- Mobile notifications

**Learning**: Gas sensors, calibration, cloud integration, alerts

---

## 10. Smart Door Lock

**Components**: ESP32, solenoid lock, keypad, RFID
**Features**:
- Unlock with PIN or RFID card
- Temporary access codes
- Log all access attempts
- Remote unlock via app

**Learning**: Security, authentication, actuators, logging
            `},{id:"advanced-projects",title:"🚀 Advanced Level (1-2 Weeks)",content:`
## 11. Energy Monitoring System

**Components**: ESP32, ACS712 current sensor, ZMPT101B voltage sensor
**Features**:
- Real-time power consumption
- Cost calculation
- Historical data with graphs
- Anomaly detection
- Mobile app dashboard

**Learning**: AC measurement, power calculations, data analytics

---

## 12. Gesture-Controlled Wheelchair

**Components**: Arduino Mega, MPU6050, motor drivers, joystick
**Features**:
- Control with hand gestures
- Obstacle avoidance
- Emergency stop
- Speed control
- Battery monitoring

**Learning**: IMU, sensor fusion, safety systems, motor control

---

## 13. Smart Parking System

**Components**: ESP32, IR sensors, servo, OLED
**Features**:
- Detect available slots
- Display on screen
- Auto barrier control
- Web dashboard for monitoring
- Booking system (optional)

**Learning**: Multi-sensor systems, web development, databases

---

## 14. Voice-Controlled Robot

**Components**: ESP32, motors, microphone module, speaker
**Features**:
- Voice commands for movement
- Object detection with camera
- Autonomous navigation
- Live video streaming

**Learning**: Speech recognition, computer vision, AI integration

---

## 15. Industrial Vibration Monitor

**Components**: ESP32, ADXL345 accelerometer, SD card
**Features**:
- Detect abnormal vibrations
- FFT analysis for fault detection
- Alert via SMS/email
- Predictive maintenance

**Learning**: Signal processing, FFT, machine learning basics
            `},{id:"iot-cloud-projects",title:"☁️ IoT & Cloud Projects",content:`
## 16. Smart Agriculture System

**Stack**: ESP32 + Blynk/ThingSpeak
**Sensors**: Soil moisture, DHT22, light sensor
**Features**:
- Remote monitoring via app
- Auto irrigation
- Weather forecast integration
- Data analytics

---

## 17. Fleet Tracking System

**Stack**: ESP32 + GPS + Firebase
**Features**:
- Real-time vehicle location
- Route history
- Geofencing alerts
- Speed monitoring
- Web dashboard

---

## 18. Smart Inventory Management

**Stack**: ESP32 + RFID + MySQL
**Features**:
- Track items with RFID tags
- Low stock alerts
- Web interface for management
- Reports and analytics

---

## 19. Patient Monitoring System

**Stack**: ESP32 + Heart rate sensor + Cloud
**Features**:
- Monitor heart rate, SpO2, temperature
- Alert on abnormal values
- Doctor dashboard
- Historical data

---

## 20. Smart Street Lighting

**Stack**: ESP32 + LDR + LoRa
**Features**:
- Auto on/off based on ambient light
- Dim when no motion detected
- Centralized control
- Energy consumption tracking

## Quick Project Ideas (< 1 Day)

21. **Clap Switch** - Turn light on/off with claps
22. **Laser Security System** - Alarm when laser beam broken
23. **Water Level Indicator** - 5 LEDs showing tank level
24. **Automatic Night Light** - LDR + LED
25. **Digital Dice** - Button press → random number on 7-segment
26. **Heartbeat Monitor** - Pulse sensor + LED
27. **Line Following Robot** - IR sensors + motors
28. **Obstacle Avoiding Car** - Ultrasonic + motors
29. **Fire Alarm** - Flame sensor + buzzer
30. **Intruder Alert** - PIR sensor + SMS

## Project Selection Tips

**For Resume**:
- Choose 2-3 projects from different categories
- At least one IoT/cloud project
- One hardware-focused project
- Document everything!

**For Learning**:
- Start with beginner
- Move to intermediate
- Attempt advanced only after mastering basics

**For Competitions**:
- Focus on innovation
- Solve real problems
- Professional finish
- Great presentation
            `}]};export{e as miniProjectIdeasContent};
