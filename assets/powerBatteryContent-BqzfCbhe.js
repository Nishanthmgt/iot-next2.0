const e={id:"power-guide",title:"Power & Battery Guide",subtitle:"Powering your projects for days, months, or years",sections:[{id:"power-basics",title:"⚡ Power Supply Fundamentals",content:`
## Voltage vs Current

### Voltage (V)
**What it is**: Electrical "pressure"
**Analogy**: Water pressure in a pipe

\`\`\`
Common voltages in IoT:
- 1.5V: AA/AAA alkaline battery
- 3.3V: ESP32, ESP8266, many sensors
- 3.7V: Li-ion battery (nominal)
- 5V: Arduino Uno, USB power
- 9-12V: Arduino Uno VIN (gets regulated to 5V)
\`\`\`

### Current (A or mA)
**What it is**: Flow of electrons
**Analogy**: Water flow rate

\`\`\`
Typical current draw:
- LED: 20mA
- Arduino idle: 50mA
- ESP32 WiFi active: 120-250mA
- Servo motor: 100-1000mA
- DC motor: 500-2000mA
\`\`\`

### Power (W)
\`\`\`
Power = Voltage × Current
P = V × I

Example:
ESP32 at 3.3V drawing 200mA
P = 3.3V × 0.2A = 0.66W
\`\`\`

## Voltage Regulators

### Linear Regulators (LM7805, AMS1117)

**How they work**: Convert excess voltage to heat

\`\`\`
Input: 7-12V
Output: 5V (LM7805) or 3.3V (AMS1117-3.3)
Efficiency: ~50-60%
\`\`\`

**Pros**:
- Simple circuit
- Low noise
- Cheap ($0.50)

**Cons**:
- Wastes power as heat
- Needs heatsink for >500mA
- Poor battery life

**When to use**: Wall-powered projects, low current (<500mA)

### Switching Regulators (Buck Converters)

**How they work**: Efficiently "chop" voltage

\`\`\`
Input: 4-40V (typical)
Output: Adjustable (1.25-35V)
Efficiency: 85-95%
\`\`\`

**Pros**:
- Very efficient
- Minimal heat
- Great for battery projects

**Cons**:
- More complex
- Can introduce noise
- Slightly more expensive ($1-3)

**When to use**: Battery-powered projects, high current

### Boost Converters (Step-up)

**Use case**: Increase voltage

\`\`\`
Example:
3.7V Li-ion → 5V for Arduino
1.5V AA battery → 3.3V for ESP32
\`\`\`

**Efficiency**: 80-90%

## Power Supply Selection Guide

| Project Type | Best Power Source | Regulator |
|--------------|-------------------|-----------|
| USB-powered desk project | 5V USB adapter | None (already 5V) |
| Battery portable (3.3V) | Li-ion 3.7V | Buck to 3.3V |
| Battery portable (5V) | Li-ion 3.7V | Boost to 5V |
| Wall-powered (5V) | 9V adapter | LM7805 |
| Solar-powered | Solar + Li-ion | Charge controller + buck |
| High current (motors) | 12V adapter | Separate 5V buck for logic |

## Calculating Power Requirements

### Step 1: List All Components

\`\`\`
Example project:
- Arduino Uno: 50mA
- 2× LEDs: 40mA (20mA each)
- DHT22 sensor: 2.5mA
- OLED display: 20mA
- WiFi module: 200mA peak
\`\`\`

### Step 2: Add Up Current

\`\`\`
Total = 50 + 40 + 2.5 + 20 + 200 = 312.5mA
Add 20% safety margin: 312.5 × 1.2 = 375mA
\`\`\`

### Step 3: Choose Power Supply

\`\`\`
Need: 375mA at 5V
Choose: 500mA or 1A power supply
(Never use exactly the minimum!)
\`\`\`

## Decoupling Capacitors

### Why Needed

**Problem**: Digital circuits create voltage spikes

\`\`\`
When ESP32 transmits WiFi:
Current spikes from 40mA to 250mA in microseconds
Voltage dips without capacitors
System resets or crashes
\`\`\`

### Proper Decoupling

\`\`\`
Every IC needs:
1. 100nF ceramic (0.1μF) - High frequency noise
   Place within 5mm of VCC pin

2. 10μF electrolytic - Medium frequency
   Place near IC

3. 100-1000μF bulk - Low frequency, current spikes
   Place at power input
\`\`\`

### ESP32/ESP8266 Specific

\`\`\`
Minimum capacitors:
- 100nF ceramic (close to chip)
- 10μF tantalum (near chip)
- 470μF electrolytic (power input)

Better:
- 100nF + 10μF + 100μF + 1000μF
\`\`\`

## Ground and Power Distribution

### Star Ground Topology

\`\`\`
❌ WRONG (Daisy chain):
Power → Device 1 → Device 2 → Device 3

✅ CORRECT (Star):
        Power
          |
    ┌─────┼─────┐
    |     |     |
Device1 Device2 Device3
\`\`\`

### Power Trace Width

**For PCBs**:

| Current | Trace Width (1oz copper) |
|---------|--------------------------|
| 100mA | 0.25mm (10mil) |
| 500mA | 0.5mm (20mil) |
| 1A | 1mm (40mil) |
| 2A | 2mm (80mil) |

**For breadboard**: Use thick jumper wires for power
            `},{id:"battery-types",title:"🔋 Battery Types and Selection",content:`
## Alkaline Batteries (AA, AAA, 9V)

### Specifications

\`\`\`
Voltage: 1.5V per cell (fresh)
Capacity: 2000-3000mAh (AA)
Voltage under load: Drops to 0.9V
\`\`\`

### Pros & Cons

**Pros**:
- Cheap
- Available everywhere
- No charging needed

**Cons**:
- Voltage drops significantly under load
- Poor performance in cold
- Not rechargeable
- Heavy

**Best for**: Low-power sensors, remote controls

**Avoid for**: WiFi modules, motors, high-current devices

## NiMH Rechargeable (AA, AAA)

### Specifications

\`\`\`
Voltage: 1.2V per cell
Capacity: 2000-2500mAh (AA)
Voltage under load: Stable ~1.1V
Cycles: 500-1000 recharges
\`\`\`

### Pros & Cons

**Pros**:
- Rechargeable
- Better under load than alkaline
- Stable voltage
- Environmentally friendly

**Cons**:
- Lower voltage (1.2V vs 1.5V)
- Self-discharge (~20% per month)
- Needs charger

**Best for**: High-drain devices, frequent use

## Li-ion / Li-Po Batteries

### 18650 Li-ion

\`\`\`
Voltage: 3.7V nominal (3.0-4.2V range)
Capacity: 2000-3500mAh
Cycles: 300-500
\`\`\`

**Pros**:
- High energy density
- Stable voltage
- Rechargeable
- Low self-discharge

**Cons**:
- Needs protection circuit
- Fire risk if damaged
- Expensive

**Best for**: ESP32, portable projects, drones

### Li-Po (Lithium Polymer)

\`\`\`
Voltage: 3.7V per cell
Capacity: 100mAh - 10,000mAh+
Discharge rate: 1C - 50C
\`\`\`

**Pros**:
- Lightweight
- Flexible shapes
- High discharge rate

**Cons**:
- Fragile (puncture = fire)
- Swells when damaged
- Expensive

**Best for**: Drones, RC projects, wearables

## Battery Protection

### Li-ion/Li-Po Protection Circuit

**Critical**: Never discharge below 3.0V!

\`\`\`
Protection circuit prevents:
- Over-discharge (< 3.0V)
- Over-charge (> 4.2V)
- Over-current
- Short circuit
\`\`\`

**Always buy batteries with built-in protection!**

### Low Battery Detection

\`\`\`cpp
// Monitor battery voltage
const float LOW_BATTERY = 3.3;  // For Li-ion
const int BATTERY_PIN = A0;

void setup() {
    pinMode(BATTERY_PIN, INPUT);
}

void loop() {
    // Voltage divider: Battery → 10kΩ → A0 → 10kΩ → GND
    float voltage = analogRead(BATTERY_PIN) * (3.3 / 1023.0) * 2;
    
    if (voltage < LOW_BATTERY) {
        enterSleepMode();  // Protect battery
    }
}
\`\`\`

## Battery Life Calculation

### Formula

\`\`\`
Battery Life (hours) = Battery Capacity (mAh) / Current Draw (mA)
\`\`\`

### Example 1: LED Project

\`\`\`
Battery: 2000mAh AA
Current: 20mA (LED)
Life = 2000 / 20 = 100 hours
\`\`\`

### Example 2: ESP32 WiFi

\`\`\`
Battery: 2500mAh Li-ion
Current: 120mA average (WiFi active)
Life = 2500 / 120 = 20.8 hours
\`\`\`

### Example 3: Deep Sleep Mode

\`\`\`
Battery: 2500mAh Li-ion
Active: 120mA for 10 seconds every 10 minutes
Sleep: 10μA (0.01mA)

Active time per hour: 6 × 10s = 60s = 1 minute
Sleep time per hour: 59 minutes

Average current:
= (120mA × 1min + 0.01mA × 59min) / 60min
= (120 + 0.59) / 60
= 2.01mA

Battery life = 2500 / 2.01 = 1244 hours = 52 days!
\`\`\`

## Charging Circuits

### TP4056 Li-ion Charger

**Specifications**:
\`\`\`
Input: 5V USB
Output: 4.2V (charge voltage)
Current: 1A (adjustable)
Protection: Over-charge, over-discharge
\`\`\`

**Wiring**:
\`\`\`
USB 5V → TP4056 IN+
USB GND → TP4056 IN-
Battery + → TP4056 BAT+
Battery - → TP4056 BAT-
Load + → TP4056 OUT+
Load - → TP4056 OUT-
\`\`\`

### Solar Charging

\`\`\`
Solar Panel (6V, 1W)
    ↓
TP4056 Charger
    ↓
Li-ion Battery (3.7V, 2500mAh)
    ↓
Buck Converter (3.3V)
    ↓
ESP32 Project
\`\`\`

**Panel sizing**:
\`\`\`
Project uses: 120mA average
Daily consumption: 120mA × 24h = 2880mAh

Solar panel needs to provide:
2880mAh / 4 hours sun = 720mA
At 6V: 720mA × 6V = 4.32W

Choose: 5-6W panel (accounting for inefficiency)
\`\`\`
            `},{id:"power-optimization",title:"⚙️ Power Optimization Techniques",content:`
## Sleep Modes

### Arduino Sleep

\`\`\`cpp
#include <avr/sleep.h>
#include <avr/power.h>

void setup() {
    // Disable unused peripherals
    power_adc_disable();
    power_spi_disable();
    power_timer1_disable();
}

void enterSleep() {
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);
    sleep_enable();
    sleep_mode();  // Sleep here
    sleep_disable();  // Wakes up here
}
\`\`\`

**Power consumption**:
\`\`\`
Active: 50mA
Sleep: 0.1mA (500× reduction!)
\`\`\`

### ESP32 Deep Sleep

\`\`\`cpp
void setup() {
    Serial.begin(115200);
    
    // Do work
    readSensors();
    sendData();
    
    // Sleep for 10 minutes
    esp_sleep_enable_timer_wakeup(10 * 60 * 1000000);  // μs
    esp_deep_sleep_start();
}

void loop() {
    // Never reaches here
}
\`\`\`

**Power consumption**:
\`\`\`
Active (WiFi): 120-250mA
Light sleep: 0.8mA
Deep sleep: 10μA (0.01mA)
\`\`\`

### Wake-up Sources

**Timer wake-up**:
\`\`\`cpp
esp_sleep_enable_timer_wakeup(TIME_IN_MICROSECONDS);
\`\`\`

**External wake-up** (button, sensor):
\`\`\`cpp
esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 1);  // Wake on HIGH
\`\`\`

**Touch wake-up**:
\`\`\`cpp
esp_sleep_enable_touchpad_wakeup();
\`\`\`

## Reducing Active Power

### 1. Lower Clock Speed

\`\`\`cpp
// ESP32: Reduce from 240MHz to 80MHz
setCpuFrequencyMhz(80);  // Saves ~30% power
\`\`\`

### 2. Disable WiFi When Not Needed

\`\`\`cpp
WiFi.disconnect(true);  // Disconnect and turn off radio
WiFi.mode(WIFI_OFF);

// Later, when needed
WiFi.mode(WIFI_STA);
WiFi.begin(ssid, password);
\`\`\`

### 3. Reduce LED Brightness

\`\`\`cpp
// Instead of full brightness
analogWrite(LED, 255);  // 20mA

// Use lower brightness
analogWrite(LED, 50);   // 4mA (still visible!)
\`\`\`

### 4. Use Efficient Code

\`\`\`cpp
// ❌ BAD: Busy waiting
while(digitalRead(BUTTON) == HIGH);

// ✅ GOOD: Sleep between checks
while(digitalRead(BUTTON) == HIGH) {
    delay(10);  // Allows CPU to sleep
}
\`\`\`

## Power Profiling

### Measuring Current Draw

**Tools needed**:
- Multimeter (μA range)
- Or INA219 current sensor

**Setup**:
\`\`\`
Battery + → Multimeter + → Project +
Battery - → Project -

Set multimeter to mA or μA range
\`\`\`

### Creating Power Budget

\`\`\`
Component Power Budget:

MCU (active): 50mA × 5% duty = 2.5mA avg
MCU (sleep): 0.01mA × 95% duty = 0.01mA avg
WiFi (transmit): 200mA × 1% duty = 2mA avg
Sensor: 5mA × 10% duty = 0.5mA avg
LED: 20mA × 5% duty = 1mA avg

Total average: 6.01mA

Battery: 2500mAh
Life: 2500 / 6.01 = 416 hours = 17 days
\`\`\`

## Ultra-Low Power Design

### Target: Years on Battery

**Strategies**:

1. **Maximize sleep time**
\`\`\`
Wake every 15 minutes for 5 seconds
Sleep: 99.4% of the time
\`\`\`

2. **Use efficient sensors**
\`\`\`
BME280: 3.6μA sleep, 714μA active
vs DHT22: 50μA sleep, 1mA active
\`\`\`

3. **Minimize transmissions**
\`\`\`
Buffer data locally
Transmit once per hour instead of every reading
\`\`\`

4. **Use low-power MCU**
\`\`\`
ATmega328P (Arduino): 0.1μA sleep
ESP32: 10μA sleep
STM32L: 0.3μA sleep (best!)
\`\`\`

### Example: 1-Year Battery Life

\`\`\`
Target: 365 days on 2500mAh battery
Required average: 2500mAh / (365×24h) = 0.285mA

Design:
- Sleep: 10μA (0.01mA) for 99.9% time
- Active: 50mA for 0.1% time

Average = 0.01×0.999 + 50×0.001 = 0.06mA ✅

Actual life: 2500 / 0.06 = 41,666 hours = 4.75 years!
\`\`\`

## Power Supply Troubleshooting

### Symptom: Random Resets

**Causes**:
1. Insufficient current
2. Missing decoupling capacitors
3. Voltage drop during WiFi transmission

**Fixes**:
\`\`\`
- Add 1000μF capacitor at power input
- Use thicker power wires
- Upgrade to higher current supply
\`\`\`

### Symptom: Won't Turn On

**Checks**:
1. Measure voltage at MCU pins
2. Check for shorts (continuity test)
3. Verify polarity
4. Test power supply separately

### Symptom: Battery Drains Fast

**Debug**:
\`\`\`cpp
// Measure current in different states
Serial.println("Active mode");
delay(5000);

Serial.println("Entering sleep");
enterSleep();
// Measure current now
\`\`\`

## Power Supply Checklist

Before deploying battery-powered project:

\`\`\`
☐ Measured actual current draw
☐ Calculated battery life
☐ Added decoupling capacitors
☐ Implemented sleep mode
☐ Added low battery protection
☐ Tested in real conditions (temperature, etc.)
☐ Verified charging circuit (if rechargeable)
☐ Documented power consumption
☐ Planned battery replacement/recharge schedule
\`\`\`
            `},{id:"power-examples",title:"📋 Real-World Power Examples",content:`
## Example 1: Weather Station (Solar)

### Requirements
- ESP32 with BME280 sensor
- Read every 10 minutes
- Send to cloud via WiFi
- Solar powered, outdoor

### Power Analysis

\`\`\`
Active (reading + WiFi): 200mA for 10 seconds
Deep sleep: 10μA (0.01mA)

Per hour:
- Active: 6 × 10s = 60s
- Sleep: 59 minutes

Average current:
= (200mA × 1min + 0.01mA × 59min) / 60
= 3.34mA

Daily consumption: 3.34mA × 24h = 80mAh
\`\`\`

### Component Selection

\`\`\`
Battery: 3000mAh Li-ion (3.7V)
Days without sun: 3000 / 80 = 37 days ✅

Solar panel: 6V, 2W
Sunny hours: 4 hours/day
Daily generation: (2W / 3.7V) × 4h = 2160mAh
Surplus: 2160 - 80 = 2080mAh (charges battery)
\`\`\`

### Code

\`\`\`cpp
#include <WiFi.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
    // Read sensor
    bme.begin();
    float temp = bme.readTemperature();
    float humidity = bme.readHumidity();
    
    // Connect WiFi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) delay(100);
    
    // Send data
    sendToCloud(temp, humidity);
    
    // Disconnect
    WiFi.disconnect(true);
    WiFi.mode(WIFI_OFF);
    
    // Sleep 10 minutes
    esp_sleep_enable_timer_wakeup(10 * 60 * 1000000);
    esp_deep_sleep_start();
}

void loop() {}
\`\`\`

## Example 2: Door Sensor (Battery)

### Requirements
- Detect door open/close
- Send notification via WiFi
- Battery powered (2× AA)
- 1 year battery life

### Power Analysis

\`\`\`
Door opens: 10 times/day
Each event: 5 seconds WiFi
Sleep current: 10μA

Active per day: 10 × 5s = 50s
Sleep per day: 86,400s - 50s ≈ 86,350s

Average current:
= (200mA × 50s + 0.01mA × 86,350s) / 86,400s
= 0.126mA

Battery: 2× AA NiMH = 2500mAh
Life: 2500 / 0.126 = 19,841 hours = 827 days ✅
\`\`\`

### Circuit

\`\`\`
2× AA (3V) → Boost converter → 3.3V
Reed switch → GPIO (wake-up pin)
\`\`\`

### Code

\`\`\`cpp
void setup() {
    // Configure wake-up on door sensor
    esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 1);
    
    // Check if door opened
    if (digitalRead(33) == HIGH) {
        connectWiFi();
        sendNotification("Door opened!");
        disconnectWiFi();
    }
    
    // Go back to sleep
    esp_deep_sleep_start();
}
\`\`\`

## Example 3: USB-Powered Display

### Requirements
- OLED display always on
- Real-time clock
- USB powered

### Power Analysis

\`\`\`
Arduino: 50mA
OLED: 20mA
RTC: 1mA
Total: 71mA

USB can provide: 500mA
Margin: 500 - 71 = 429mA ✅
\`\`\`

### No optimization needed (wall powered)

## Example 4: RC Car (High Current)

### Requirements
- 2× DC motors
- Servo for steering
- ESP32 for control
- Li-Po battery

### Power Analysis

\`\`\`
Motors (stall): 2× 1A = 2A
Motors (running): 2× 500mA = 1A
Servo: 500mA peak
ESP32: 200mA
Total peak: 2.7A
\`\`\`

### Component Selection

\`\`\`
Battery: 2S Li-Po (7.4V, 2200mAh, 25C)
Max discharge: 2200mAh × 25 = 55A ✅

Buck converter: 7.4V → 5V, 3A
For ESP32: Separate 3.3V regulator
\`\`\`

### Circuit

\`\`\`
Li-Po 7.4V
    ├→ Motor driver (direct)
    └→ Buck 5V → Servo
        └→ LDO 3.3V → ESP32
\`\`\`

**Key**: Separate power for logic and motors!

## Example 5: Wearable (Tiny Battery)

### Requirements
- Heart rate sensor
- OLED display
- Bluetooth
- 100mAh Li-Po

### Power Analysis

\`\`\`
Target: 8 hours/day for 3 days = 24 hours
Required average: 100mAh / 24h = 4.17mA

Display on: 10% time, 15mA
Display off: 90% time, 0.5mA
Sensor: 1mA continuous
BLE: 10mA when transmitting (5% time)

Average:
= 15×0.1 + 0.5×0.9 + 1 + 10×0.05
= 1.5 + 0.45 + 1 + 0.5
= 3.45mA ✅
\`\`\`

### Optimization

\`\`\`cpp
// Turn off display when not needed
display.ssd1306_command(SSD1306_DISPLAYOFF);

// Reduce BLE advertising interval
BLEDevice::setAdvertisingInterval(1000);  // 1 second

// Lower CPU frequency
setCpuFrequencyMhz(80);
\`\`\`

## Power Design Workflow

1. **Define requirements**
   - How long should it run?
   - What's the duty cycle?
   - Environmental conditions?

2. **Calculate power budget**
   - List all components
   - Measure actual current
   - Calculate average

3. **Select battery**
   - Capacity needed
   - Voltage requirements
   - Form factor

4. **Design power circuit**
   - Regulators
   - Protection
   - Charging (if needed)

5. **Optimize**
   - Implement sleep modes
   - Reduce unnecessary operations
   - Test and measure

6. **Validate**
   - Real-world testing
   - Temperature effects
   - Aging considerations
            `}]};export{e as powerBatteryContent};
