export const sensorPrinciplesContent = {
    id: 'sensor-principles',
    title: 'Sensor Working Principles',
    subtitle: 'The physics and logic behind how sensors perceive the world',
    sections: [
        {
            id: 'temperature-sensors',
            title: '🌡️ Temperature Sensors',
            content: `
## How Temperature Sensors Work

### Thermistors (NTC/PTC)

**Principle**: Resistance changes with temperature

**NTC (Negative Temperature Coefficient)**:
\`\`\`
Temperature ↑ → Resistance ↓
Typical: 10kΩ at 25°C
\`\`\`

**Reading a Thermistor**:
\`\`\`cpp
// Voltage divider circuit
// VCC → 10kΩ → A0 → Thermistor → GND

int raw = analogRead(A0);
float voltage = raw * (5.0 / 1023.0);
float resistance = (10000 * voltage) / (5.0 - voltage);

// Steinhart-Hart equation (simplified)
float tempK = 1 / (0.001129148 + (0.000234125 * log(resistance)) + 
                    (0.0000000876741 * pow(log(resistance), 3)));
float tempC = tempK - 273.15;
\`\`\`

### DHT11/DHT22 (Digital Humidity & Temperature)

**Principle**: Capacitive humidity sensor + NTC thermistor

**How it works**:
1. Humidity changes capacitance of polymer film
2. Capacitance measured by internal circuit
3. NTC measures temperature
4. Microcontroller converts to digital signal

**Communication Protocol**:
\`\`\`
1. MCU sends start signal (LOW for 18ms)
2. DHT responds with 40-bit data
3. Data format: [Humidity High][Humidity Low][Temp High][Temp Low][Checksum]
\`\`\`

**Why 2-second delay?**
- Sensor needs time to stabilize
- Capacitor charging/discharging
- Internal ADC conversion

### DS18B20 (Digital Temperature)

**Principle**: Silicon bandgap temperature sensor

**Advantages**:
- ±0.5°C accuracy
- 1-Wire protocol (one data pin for multiple sensors)
- Each sensor has unique 64-bit ID

**1-Wire Protocol**:
\`\`\`cpp
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(2);  // Data pin
DallasTemperature sensors(&oneWire);

void setup() {
    sensors.begin();
}

void loop() {
    sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);
    Serial.println(temp);
    delay(1000);
}
\`\`\`

## Thermocouple vs RTD vs Thermistor

| Type | Range | Accuracy | Cost | Use Case |
|------|-------|----------|------|----------|
| Thermistor | -50 to 150°C | ±0.1°C | $ | DIY projects |
| RTD (PT100) | -200 to 850°C | ±0.15°C | $$$ | Industrial |
| Thermocouple | -270 to 1800°C | ±1°C | $$ | High temp |
| DHT22 | -40 to 80°C | ±0.5°C | $ | Room monitoring |
| DS18B20 | -55 to 125°C | ±0.5°C | $$ | Precision |
            `
        },
        {
            id: 'distance-sensors',
            title: '📏 Distance & Proximity Sensors',
            content: `
## Ultrasonic Sensors (HC-SR04)

### Working Principle

**Time-of-Flight Measurement**:
\`\`\`
1. Trigger pin sends 10μs pulse
2. Sensor emits 8× 40kHz ultrasonic bursts
3. Sound travels to object and reflects back
4. Echo pin goes HIGH for duration = travel time
5. Distance = (Time × Speed of Sound) / 2
\`\`\`

**Speed of Sound**: 343 m/s (at 20°C)

**Calculation**:
\`\`\`cpp
long duration = pulseIn(ECHO_PIN, HIGH);
// Duration in microseconds
// Speed: 0.0343 cm/μs
float distance = (duration * 0.0343) / 2;  // cm
\`\`\`

### Limitations

**Minimum Distance**: ~2cm (sensor blind spot)
**Maximum Distance**: ~400cm (signal too weak)
**Beam Angle**: 15° cone (not a laser!)
**Surface Issues**:
- Soft materials (foam, fabric) absorb sound
- Angled surfaces reflect away
- Small objects may be missed

### Improving Accuracy

\`\`\`cpp
// Average multiple readings
float getDistance() {
    const int samples = 5;
    float total = 0;
    
    for(int i = 0; i < samples; i++) {
        digitalWrite(TRIG_PIN, LOW);
        delayMicroseconds(2);
        digitalWrite(TRIG_PIN, HIGH);
        delayMicroseconds(10);
        digitalWrite(TRIG_PIN, LOW);
        
        long duration = pulseIn(ECHO_PIN, HIGH, 30000);  // 30ms timeout
        if(duration > 0) {
            total += (duration * 0.0343) / 2;
        }
        delay(50);  // Wait between measurements
    }
    
    return total / samples;
}
\`\`\`

## IR Proximity Sensors

### Sharp GP2Y0A21YK

**Principle**: Triangulation with IR LED and position-sensitive detector

**How it works**:
1. IR LED emits infrared light
2. Light reflects off object
3. PSD (Position Sensitive Detector) measures angle
4. Closer object = larger angle = higher voltage

**Not linear!** Requires lookup table or formula:
\`\`\`cpp
float getDistance(int raw) {
    float voltage = raw * (5.0 / 1023.0);
    // Empirical formula for GP2Y0A21YK
    float distance = 27.86 * pow(voltage, -1.15);  // cm
    return distance;
}
\`\`\`

**Advantages**:
- Works in any lighting
- Fast response (<40ms)
- Not affected by object color

**Disadvantages**:
- Affected by surface reflectivity
- Limited range (10-80cm)
- Non-linear output

## Time-of-Flight (VL53L0X)

**Principle**: Laser time-of-flight measurement

**How it works**:
1. Emits laser pulse
2. Measures time for reflection
3. Calculates distance with high precision

**Advantages**:
- Very accurate (±3mm)
- Long range (up to 2m)
- Small beam angle (25°)
- I2C interface

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <VL53L0X.h>

VL53L0X sensor;

void setup() {
    Wire.begin();
    sensor.init();
    sensor.setTimeout(500);
    
    // High accuracy mode
    sensor.setMeasurementTimingBudget(200000);
}

void loop() {
    int distance = sensor.readRangeSingleMillimeters();
    if (sensor.timeoutOccurred()) {
        Serial.println("Timeout!");
    } else {
        Serial.print(distance);
        Serial.println(" mm");
    }
}
\`\`\`

## Capacitive Proximity

**Principle**: Detects changes in capacitance

**How it works**:
- Sensor creates electric field
- Conductive object changes capacitance
- Microcontroller measures capacitance

**Applications**:
- Touch sensors
- Liquid level detection
- Non-contact switches

**ESP32 Touch Example**:
\`\`\`cpp
const int threshold = 40;

void setup() {
    Serial.begin(115200);
}

void loop() {
    int touchValue = touchRead(T0);  // GPIO 4
    Serial.println(touchValue);
    
    if(touchValue < threshold) {
        Serial.println("Touched!");
    }
    delay(100);
}
\`\`\`
            `
        },
        {
            id: 'light-sensors',
            title: '💡 Light & Color Sensors',
            content: `
## Photoresistors (LDR)

### Working Principle

**Photoconductivity**: Resistance decreases with light intensity

\`\`\`
Dark: 1MΩ - 10MΩ
Bright sunlight: 100Ω - 1kΩ
\`\`\`

### Voltage Divider Circuit

\`\`\`
VCC (5V)
    |
   10kΩ (fixed resistor)
    |
   A0 (measurement point)
    |
   LDR (light dependent)
    |
   GND
\`\`\`

**Reading**:
\`\`\`cpp
int lightLevel = analogRead(A0);
// 0 = dark, 1023 = bright

// Convert to lux (approximate)
float voltage = lightLevel * (5.0 / 1023.0);
float resistance = 10000 * (5.0 - voltage) / voltage;
float lux = 500 / (resistance / 1000);  // Rough estimate
\`\`\`

### Calibration

\`\`\`cpp
// Measure in your environment
const int DARK_VALUE = 50;    // Measured at night
const int BRIGHT_VALUE = 900;  // Measured in daylight

int raw = analogRead(A0);
int percent = map(raw, DARK_VALUE, BRIGHT_VALUE, 0, 100);
percent = constrain(percent, 0, 100);
\`\`\`

## Photodiodes & Phototransistors

### Photodiode

**Principle**: Light generates current in PN junction

**Modes**:
1. **Photovoltaic** (no bias): Generates voltage
2. **Photoconductive** (reverse bias): Faster response

**Advantages**:
- Fast response (nanoseconds)
- Linear output
- Wide spectral range

**Use cases**: Light meters, optical communication

### Phototransistor

**Principle**: Light controls base current, amplifies output

**Higher sensitivity** than photodiode but **slower response**

## BH1750 (Digital Light Sensor)

**Principle**: Photodiode + ADC + I2C interface

**Advantages**:
- Direct lux measurement
- 16-bit resolution (1-65535 lux)
- I2C communication
- No calibration needed

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <BH1750.h>

BH1750 lightMeter;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    lightMeter.begin(BH1750::CONTINUOUS_HIGH_RES_MODE);
}

void loop() {
    float lux = lightMeter.readLightLevel();
    Serial.print("Light: ");
    Serial.print(lux);
    Serial.println(" lx");
    delay(1000);
}
\`\`\`

**Lux Reference**:
\`\`\`
0.0001 lx: Moonless night
0.25 lx: Full moon
50 lx: Living room
320-500 lx: Office lighting
1000 lx: Overcast day
10,000-25,000 lx: Full daylight
100,000 lx: Direct sunlight
\`\`\`

## Color Sensors (TCS34725)

### Working Principle

**RGB Filtering**: Separate photodiodes with color filters

**Components**:
- Red filter photodiode
- Green filter photodiode
- Blue filter photodiode
- Clear (no filter) photodiode

**How it works**:
1. White LED illuminates object
2. Reflected light passes through filters
3. Each photodiode measures intensity
4. Microcontroller reads RGBC values

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <Adafruit_TCS34725.h>

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, 
                                           TCS34725_GAIN_4X);

void setup() {
    Serial.begin(115200);
    if (tcs.begin()) {
        Serial.println("Found sensor");
    }
}

void loop() {
    uint16_t r, g, b, c;
    tcs.getRawData(&r, &g, &b, &c);
    
    // Normalize to 0-255
    uint32_t sum = r + g + b;
    float red = (float)r / sum * 255;
    float green = (float)g / sum * 255;
    float blue = (float)b / sum * 255;
    
    Serial.print("R: "); Serial.print(red);
    Serial.print(" G: "); Serial.print(green);
    Serial.print(" B: "); Serial.println(blue);
    
    delay(500);
}
\`\`\`

### Color Detection

\`\`\`cpp
String detectColor(float r, float g, float b) {
    if (r > g && r > b) return "Red";
    if (g > r && g > b) return "Green";
    if (b > r && b > g) return "Blue";
    if (r > 200 && g > 200 && b > 200) return "White";
    if (r < 50 && g < 50 && b < 50) return "Black";
    return "Unknown";
}
\`\`\`

## UV Sensors

**Principle**: Photodiode sensitive to UV wavelengths

**GUVA-S12SD Example**:
- Analog output (0-1V)
- Responds to 240-370nm UV
- Used for UV index measurement

\`\`\`cpp
int raw = analogRead(A0);
float voltage = raw * (5.0 / 1023.0);
float uvIndex = voltage / 0.1;  // Approximate

Serial.print("UV Index: ");
Serial.println(uvIndex);
// 0-2: Low, 3-5: Moderate, 6-7: High, 8-10: Very High, 11+: Extreme
\`\`\`
            `
        },
        {
            id: 'motion-sensors',
            title: '🏃 Motion & Acceleration Sensors',
            content: `
## PIR (Passive Infrared) Sensors

### Working Principle

**Detects infrared radiation from warm bodies**

**How it works**:
1. Pyroelectric sensor detects IR radiation
2. Fresnel lens focuses IR into two zones
3. Motion causes change between zones
4. Change triggers output

**Not detecting distance or temperature!**
- Detects **change** in IR pattern
- Stationary warm object = no trigger

**Code Example**:
\`\`\`cpp
const int PIR_PIN = 2;

void setup() {
    pinMode(PIR_PIN, INPUT);
    Serial.begin(115200);
    delay(60000);  // 1 minute calibration time
}

void loop() {
    if (digitalRead(PIR_PIN) == HIGH) {
        Serial.println("Motion detected!");
        delay(1000);  // Debounce
    }
}
\`\`\`

**Adjustments**:
- **Sensitivity**: Detection range (2-7m)
- **Time delay**: How long output stays HIGH (5s-5min)

**Limitations**:
- Can't count people
- Affected by temperature changes
- Pets can trigger it
- Needs warm-up time

## Accelerometers (ADXL345, MPU6050)

### Working Principle

**MEMS (Micro-Electro-Mechanical Systems)**

**How it works**:
1. Tiny proof mass suspended by springs
2. Acceleration moves the mass
3. Capacitance changes measured
4. Converted to acceleration value

**3-Axis Measurement**: X, Y, Z

**Units**: g (1g = 9.8 m/s²)

### MPU6050 (Accelerometer + Gyroscope)

\`\`\`cpp
#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    mpu.initialize();
    
    if (mpu.testConnection()) {
        Serial.println("MPU6050 connected");
    }
}

void loop() {
    int16_t ax, ay, az;
    int16_t gx, gy, gz;
    
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    
    // Convert to g (assuming ±2g range)
    float accelX = ax / 16384.0;
    float accelY = ay / 16384.0;
    float accelZ = az / 16384.0;
    
    Serial.print("Accel X: "); Serial.print(accelX);
    Serial.print(" Y: "); Serial.print(accelY);
    Serial.print(" Z: "); Serial.println(accelZ);
    
    delay(100);
}
\`\`\`

### Tilt Detection

\`\`\`cpp
float pitch = atan2(ay, sqrt(ax*ax + az*az)) * 180 / PI;
float roll = atan2(ax, sqrt(ay*ay + az*az)) * 180 / PI;

Serial.print("Pitch: "); Serial.print(pitch);
Serial.print(" Roll: "); Serial.println(roll);
\`\`\`

### Tap Detection

\`\`\`cpp
float magnitude = sqrt(ax*ax + ay*ay + az*az);
if (magnitude > 20000) {  // Threshold
    Serial.println("Tap detected!");
}
\`\`\`

## Gyroscopes

**Principle**: Measures angular velocity (rotation rate)

**Units**: degrees per second (°/s) or radians per second

**Coriolis Effect**: Vibrating mass deflects when rotated

**MPU6050 Gyro**:
\`\`\`cpp
// Convert to °/s (assuming ±250°/s range)
float gyroX = gx / 131.0;
float gyroY = gy / 131.0;
float gyroZ = gz / 131.0;

Serial.print("Gyro X: "); Serial.print(gyroX);
Serial.print(" Y: "); Serial.print(gyroY);
Serial.print(" Z: "); Serial.println(gyroZ);
\`\`\`

### Complementary Filter (Combining Accel + Gyro)

**Problem**: 
- Accelerometer: Accurate but noisy
- Gyroscope: Smooth but drifts

**Solution**: Combine both!

\`\`\`cpp
float alpha = 0.98;  // Filter coefficient
float pitch = 0, roll = 0;

void loop() {
    // Get sensor data
    int16_t ax, ay, az, gx, gy, gz;
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    
    // Accelerometer angle
    float accelPitch = atan2(ay, sqrt(ax*ax + az*az)) * 180 / PI;
    float accelRoll = atan2(ax, sqrt(ay*ay + az*az)) * 180 / PI;
    
    // Gyroscope rate (°/s)
    float gyroX = gx / 131.0;
    float gyroY = gy / 131.0;
    
    // Complementary filter
    float dt = 0.01;  // 10ms loop time
    pitch = alpha * (pitch + gyroX * dt) + (1 - alpha) * accelPitch;
    roll = alpha * (roll + gyroY * dt) + (1 - alpha) * accelRoll;
    
    Serial.print("Pitch: "); Serial.print(pitch);
    Serial.print(" Roll: "); Serial.println(roll);
    
    delay(10);
}
\`\`\`

## Magnetometers (Compass)

**Principle**: Measures magnetic field strength

**HMC5883L / QMC5883L**:
- 3-axis magnetometer
- Detects Earth's magnetic field
- Used for compass heading

\`\`\`cpp
#include <Wire.h>
#include <QMC5883LCompass.h>

QMC5883LCompass compass;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    compass.init();
}

void loop() {
    compass.read();
    
    int heading = compass.getAzimuth();
    Serial.print("Heading: ");
    Serial.print(heading);
    Serial.println("°");
    
    delay(250);
}
\`\`\`

**Calibration Required!**
- Hard iron: Permanent magnets nearby
- Soft iron: Ferromagnetic materials

**Calibration Process**:
1. Rotate sensor in figure-8 pattern
2. Record min/max values for each axis
3. Apply offset and scale corrections
            `
        }
    ]
};
