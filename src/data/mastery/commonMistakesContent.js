export const commonMistakesContent = {
    id: 'common-mistakes',
    title: 'Common Mistakes in IoT',
    subtitle: 'Learn from others\' failures to save your hardware',
    sections: [
        {
            id: 'power-mistakes',
            title: '⚡ Power Supply Mistakes',
            content: `
## The #1 Killer: Incorrect Voltage

### Mistake: Powering 3.3V Device with 5V

**What Happens**: Instant death or gradual damage
**Common Victims**: ESP32, ESP8266, nRF24L01

\`\`\`
❌ WRONG:
Arduino 5V → ESP32 VIN (if no regulator)
Arduino 5V → nRF24L01 VCC

✅ CORRECT:
Arduino 3.3V → ESP32 VIN
Use level shifter for 5V ↔ 3.3V communication
\`\`\`

**Real Example**:
\`\`\`cpp
// ESP32 connected to Arduino
// Arduino TX (5V) → ESP32 RX (expects 3.3V)
// Result: ESP32 damaged after a few hours

// Fix: Use voltage divider or level shifter
// 5V → 1kΩ → ESP32 RX → 2kΩ → GND
// Output: 3.3V
\`\`\`

### Mistake: Insufficient Current Supply

**Symptoms**:
- Random resets
- WiFi won't connect
- Servo jitters
- Brown-out detector triggers

**Common Scenario**:
\`\`\`
USB Port: 500mA max
ESP32 WiFi: 250mA peak
Servo: 500mA stall current
Total: 750mA → INSUFFICIENT!
\`\`\`

**Solution**:
\`\`\`
Use external 5V power supply (2A minimum)
Add bulk capacitor (1000μF) near power input
Separate power for motors/servos
\`\`\`

### Mistake: No Decoupling Capacitors

**Why It Matters**: Digital switching creates voltage spikes

**Proper Decoupling**:
\`\`\`
Every IC needs:
- 100nF ceramic capacitor (close to VCC/GND pins)
- 10μF electrolytic (power input)

ESP32/ESP8266 specifically need:
- 100nF ceramic
- 10μF tantalum
- 470μF electrolytic (bulk)
\`\`\`

**Placement**:
\`\`\`
❌ WRONG: Capacitor 5cm away from IC
✅ CORRECT: Capacitor within 5mm of VCC pin
\`\`\`

## Ground Loops and Noise

### Mistake: Multiple Ground Paths

**Problem**: Creates noise, interference, erratic behavior

\`\`\`
❌ WRONG:
Arduino GND → Sensor GND → Motor GND → Power Supply GND
(Multiple paths create loops)

✅ CORRECT:
Star ground topology:
All GNDs → Single common point → Power supply GND
\`\`\`

### Mistake: Long Ground Wires

**Issue**: Ground impedance causes voltage differences

\`\`\`
Rule of Thumb:
Ground wire should be SHORTER than signal wire
Use thick wire for ground (lower resistance)
\`\`\`

## Reverse Polarity Protection

### Mistake: No Protection Diode

**What Happens**: Instant component death when battery reversed

**Simple Protection**:
\`\`\`
Add 1N4007 diode in series with power:
Battery + → Diode Anode → Diode Cathode → Circuit +
Battery - → Circuit -

Voltage drop: ~0.7V (acceptable for most cases)
\`\`\`

**Better Protection** (no voltage drop):
\`\`\`
Use P-channel MOSFET:
- Gate to GND via 10kΩ
- Source to Battery +
- Drain to Circuit +
\`\`\`
            `
        },
        {
            id: 'wiring-mistakes',
            title: '🔌 Wiring and Connection Mistakes',
            content: `
## Breadboard Blunders

### Mistake: Not Understanding Breadboard Layout

**Critical Knowledge**:
\`\`\`
Breadboard Rails:
+  +  +  +  +  (all connected horizontally)
-  -  -  -  -  (all connected horizontally)

Center Rows:
a b c d e | f g h i j
└─────┘   └─────┘
(a-e connected vertically, f-j connected vertically)
\`\`\`

**Common Error**:
\`\`\`
Placing IC across center gap:
Pin 1 (a1) connects to Pin 8 (e1) ← WRONG!

Correct: IC straddles the gap
Pin 1 (e1) | Pin 8 (f1)
\`\`\`

### Mistake: Loose Connections

**Signs**:
- Works when you touch it
- Intermittent failures
- Different behavior each time

**Fixes**:
\`\`\`
1. Use solid core wire (22-24 AWG)
2. Trim wire leads to proper length
3. Push components firmly into breadboard
4. Check for oxidized pins (clean with alcohol)
5. Replace worn breadboards
\`\`\`

### Mistake: Wire Spaghetti

**Problem**: Impossible to debug, prone to shorts

**Best Practices**:
\`\`\`
1. Use color coding:
   - Red: Power (+5V, +3.3V)
   - Black: Ground
   - Yellow: Signals
   - Green: I2C (SDA/SCL)
   - Blue: SPI

2. Route wires neatly:
   - Power rails on edges
   - Signals in middle
   - Keep wires flat

3. Label complex connections
\`\`\`

## Pull-up/Pull-down Resistor Mistakes

### Mistake: Forgetting Pull-ups on I2C

**Symptom**: I2C devices not detected

**Why**: I2C uses open-drain outputs (needs pull-ups!)

\`\`\`cpp
// I2C Scanner finds nothing
// Check: Do you have 4.7kΩ resistors?

SDA → 4.7kΩ → VCC
SCL → 4.7kΩ → VCC
\`\`\`

**Note**: Some modules have built-in pull-ups
- Check with multimeter: Measure resistance to VCC
- If ~4.7kΩ, pull-ups present
- If >100kΩ, need external pull-ups

### Mistake: Wrong Pull-up Value

**Too Strong** (< 1kΩ):
- Wastes power
- May damage outputs
- Slows rise time

**Too Weak** (> 10kΩ):
- Slow rise time
- Noise susceptibility
- Communication errors

**Sweet Spot**:
\`\`\`
I2C: 4.7kΩ (standard)
I2C (high speed): 2.2kΩ
Buttons: 10kΩ
Reset pins: 10kΩ
\`\`\`

### Mistake: Floating Inputs

**Problem**: Undefined logic level, random behavior

\`\`\`cpp
// Button without pull-up/pull-down
pinMode(BUTTON_PIN, INPUT);  // ❌ FLOATING!

if(digitalRead(BUTTON_PIN)) {
    // Triggers randomly due to noise
}

// Fix 1: Internal pull-up
pinMode(BUTTON_PIN, INPUT_PULLUP);  // ✅

// Fix 2: External pull-down
// BUTTON_PIN → 10kΩ → GND
\`\`\`

## Level Shifting Mistakes

### Mistake: Connecting 5V to 3.3V Directly

**Dangerous Combinations**:
\`\`\`
Arduino (5V) → ESP32 (3.3V)
Arduino (5V) → nRF24L01 (3.3V)
Raspberry Pi (3.3V) ← Arduino (5V)
\`\`\`

**Solutions**:

**1. Voltage Divider** (for one-way communication):
\`\`\`
5V → 1kΩ → Signal → 2kΩ → GND
Output: 3.3V
\`\`\`

**2. Level Shifter IC** (for bidirectional):
\`\`\`
Use TXS0108E or similar
- Supports multiple channels
- Bidirectional
- Fast switching
\`\`\`

**3. MOSFET Level Shifter** (I2C):
\`\`\`
Simple 2-transistor circuit
Works for I2C, open-drain signals
\`\`\`

## Pin Configuration Mistakes

### Mistake: Using Strapping Pins on ESP32

**ESP32 Boot Strapping Pins**:
\`\`\`
GPIO 0: Must be HIGH at boot (pulled up)
GPIO 2: Must be LOW at boot (floating/low)
GPIO 12: Must be LOW at boot (MTDI)
GPIO 15: Must be HIGH at boot (MTDO)
\`\`\`

**What Happens**:
\`\`\`
If GPIO 0 is LOW at boot → Enters flash mode
If GPIO 12 is HIGH at boot → Changes flash voltage
\`\`\`

**Safe Pins for ESP32**:
\`\`\`
Input/Output: 4, 5, 16, 17, 18, 19, 21, 22, 23
ADC: 32, 33, 34, 35, 36, 39
Avoid: 0, 2, 12, 15 (unless you know what you're doing)
\`\`\`

### Mistake: Exceeding Pin Current

**Arduino Pin Limits**:
\`\`\`
Per pin: 40mA maximum (20mA recommended)
Total all pins: 200mA maximum
\`\`\`

**Common Violation**:
\`\`\`cpp
// Driving LED directly
pinMode(13, OUTPUT);
digitalWrite(13, HIGH);  // LED + 220Ω resistor

Current = 5V / 220Ω = 22.7mA  // ✅ OK

// Driving motor directly
digitalWrite(9, HIGH);  // Motor draws 500mA
// ❌ PIN WILL DIE!

// Fix: Use transistor or MOSFET
\`\`\`
            `
        },
        {
            id: 'code-mistakes',
            title: '💻 Programming Mistakes',
            content: `
## Timing and Delay Mistakes

### Mistake: Using delay() Everywhere

**Problem**: Blocks entire program

\`\`\`cpp
// ❌ BAD: Nothing else can happen during delay
void loop() {
    digitalWrite(LED, HIGH);
    delay(1000);
    digitalWrite(LED, LOW);
    delay(1000);
    // Can't read sensors, check buttons, etc.
}

// ✅ GOOD: Non-blocking timing
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    unsigned long currentMillis = millis();
    
    if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis;
        digitalWrite(LED, !digitalRead(LED));
    }
    
    // Can do other things here!
    checkButtons();
    readSensors();
}
\`\`\`

### Mistake: Not Debouncing Buttons

**Problem**: One press registers as multiple

\`\`\`cpp
// ❌ BAD: Counts multiple times per press
int count = 0;
void loop() {
    if (digitalRead(BUTTON) == LOW) {
        count++;
        Serial.println(count);
    }
}

// ✅ GOOD: Software debouncing
int lastState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(BUTTON);
    
    if (reading != lastState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading == LOW) {
            count++;
            Serial.println(count);
            while(digitalRead(BUTTON) == LOW);  // Wait for release
        }
    }
    
    lastState = reading;
}
\`\`\`

## Memory Management Mistakes

### Mistake: String Concatenation in Loop

**Problem**: Heap fragmentation, memory leaks

\`\`\`cpp
// ❌ BAD: Creates new String objects constantly
void loop() {
    String message = "Sensor: ";
    message += String(analogRead(A0));
    message += " Value";
    Serial.println(message);
    delay(100);
}

// ✅ GOOD: Use char arrays or F() macro
void loop() {
    Serial.print(F("Sensor: "));
    Serial.print(analogRead(A0));
    Serial.println(F(" Value"));
    delay(100);
}
\`\`\`

### Mistake: Not Using PROGMEM for Constants

**Problem**: Wastes precious RAM

\`\`\`cpp
// ❌ BAD: Stores in RAM
const char* messages[] = {
    "System starting...",
    "Connecting to WiFi...",
    "Connection established"
};

// ✅ GOOD: Stores in Flash
const char msg1[] PROGMEM = "System starting...";
const char msg2[] PROGMEM = "Connecting to WiFi...";
const char msg3[] PROGMEM = "Connection established";

const char* const messages[] PROGMEM = {msg1, msg2, msg3};

// Reading from PROGMEM
char buffer[50];
strcpy_P(buffer, (char*)pgm_read_word(&(messages[0])));
Serial.println(buffer);
\`\`\`

## Sensor Reading Mistakes

### Mistake: Not Averaging Noisy Readings

**Problem**: Erratic sensor values

\`\`\`cpp
// ❌ BAD: Single reading
int value = analogRead(A0);

// ✅ GOOD: Moving average
const int numReadings = 10;
int readings[numReadings];
int readIndex = 0;
int total = 0;

void loop() {
    total = total - readings[readIndex];
    readings[readIndex] = analogRead(A0);
    total = total + readings[readIndex];
    readIndex = (readIndex + 1) % numReadings;
    
    int average = total / numReadings;
    Serial.println(average);
}
\`\`\`

### Mistake: Reading Sensors Too Fast

**Problem**: Sensor can't keep up, returns stale data

\`\`\`cpp
// DHT11 example
// ❌ BAD: Reading every 100ms
void loop() {
    float temp = dht.readTemperature();
    delay(100);  // DHT11 needs 2 seconds!
}

// ✅ GOOD: Respect sensor timing
unsigned long lastRead = 0;
void loop() {
    if (millis() - lastRead >= 2000) {
        float temp = dht.readTemperature();
        lastRead = millis();
    }
}
\`\`\`

## Communication Mistakes

### Mistake: Not Checking Serial.available()

**Problem**: Reading when no data, blocks program

\`\`\`cpp
// ❌ BAD: Blocks if no data
void loop() {
    char c = Serial.read();  // Returns -1 if no data
    processCommand(c);
}

// ✅ GOOD: Check first
void loop() {
    if (Serial.available() > 0) {
        char c = Serial.read();
        processCommand(c);
    }
}
\`\`\`

### Mistake: Buffer Overflow in Serial Reading

**Problem**: Crashes, memory corruption

\`\`\`cpp
// ❌ BAD: No bounds checking
char buffer[10];
int i = 0;
void loop() {
    if (Serial.available()) {
        buffer[i++] = Serial.read();  // Will overflow!
    }
}

// ✅ GOOD: Bounds checking
char buffer[10];
int i = 0;
void loop() {
    if (Serial.available() && i < 9) {
        buffer[i++] = Serial.read();
        buffer[i] = '\\0';  // Null terminate
    }
}
\`\`\`
            `
        },
        {
            id: 'component-mistakes',
            title: '🔧 Component Selection Mistakes',
            content: `
## LED Mistakes

### Mistake: No Current Limiting Resistor

**What Happens**: LED burns out immediately or gradually

\`\`\`
❌ WRONG:
Pin → LED → GND

✅ CORRECT:
Pin → Resistor → LED → GND

Resistor calculation:
R = (Vsource - VLED) / ILED

For 5V Arduino, Red LED:
R = (5V - 2V) / 0.020A = 150Ω
Use 220Ω (standard value)
\`\`\`

### Mistake: Wrong LED Polarity

**Identification**:
\`\`\`
Anode (+): Longer leg, flat side of rim
Cathode (-): Shorter leg, flat edge on lens
\`\`\`

## Sensor Mistakes

### Mistake: Using Cheap DHT11 for Critical Applications

**DHT11 Limitations**:
- ±2°C accuracy (terrible!)
- 1 reading per 2 seconds
- Humidity range: 20-80% only

**Better Alternatives**:
\`\`\`
DHT22: ±0.5°C, 0-100% humidity
BME280: ±1°C, pressure sensor included
SHT31: ±0.3°C, industrial grade
\`\`\`

### Mistake: Not Calibrating Sensors

**Example: Soil Moisture Sensor**

\`\`\`cpp
// ❌ BAD: Using raw values
int moisture = analogRead(A0);
if (moisture < 500) {
    waterPlant();
}

// ✅ GOOD: Calibrated values
const int DRY = 850;    // Measured in air
const int WET = 400;    // Measured in water

int moisture = analogRead(A0);
int percent = map(moisture, WET, DRY, 100, 0);
percent = constrain(percent, 0, 100);

if (percent < 30) {
    waterPlant();
}
\`\`\`

## Motor and Actuator Mistakes

### Mistake: Driving Motor Directly from Arduino

**Problem**: Arduino can't supply enough current

\`\`\`
Arduino pin: 40mA max
Small DC motor: 100-500mA
Servo: 500-1000mA
\`\`\`

**Solution**: Use transistor or motor driver

\`\`\`
For DC Motor:
Arduino → 1kΩ → NPN Transistor Base
Motor + → Power Supply +
Motor - → Transistor Collector
Transistor Emitter → GND
Flyback diode across motor (1N4007)

For Servo:
Servo Signal → Arduino Pin
Servo Power → External 5V supply (not Arduino 5V pin!)
Servo GND → Common GND
\`\`\`

### Mistake: No Flyback Diode on Inductive Loads

**What Happens**: Voltage spike damages Arduino

**Inductive Loads**:
- Motors
- Relays
- Solenoids

**Protection**:
\`\`\`
1N4007 diode across load:
Cathode (stripe) → Positive side
Anode → Negative side
\`\`\`

## WiFi/Bluetooth Module Mistakes

### Mistake: Powering ESP32 from Arduino 3.3V Pin

**Problem**: 3.3V pin can only supply ~50mA

\`\`\`
ESP32 current draw:
- Idle: 40mA
- WiFi active: 120mA
- WiFi transmit: 250mA peak

❌ WRONG: Arduino 3.3V → ESP32
✅ CORRECT: External 3.3V regulator (1A) → ESP32
\`\`\`

### Mistake: Poor WiFi Antenna Placement

**Bad Practices**:
- ESP32 inside metal enclosure
- Antenna near large metal objects
- Antenna parallel to ground plane

**Good Practices**:
- Keep antenna clear of obstructions
- Use external antenna for metal enclosures
- Orient antenna perpendicular to ground

## Battery and Power Mistakes

### Mistake: Using Alkaline Batteries for High Current

**Problem**: Voltage sag, poor performance

\`\`\`
Alkaline AA: 1.5V nominal, 0.9V under load
NiMH AA: 1.2V nominal, 1.1V under load (better!)
Li-ion: 3.7V nominal, stable under load (best!)
\`\`\`

**For High Current** (motors, WiFi):
- Use NiMH or Li-ion
- Add bulk capacitor (1000μF)

### Mistake: No Low Battery Protection

**Problem**: Over-discharge damages Li-ion batteries

\`\`\`cpp
// Monitor battery voltage
const float LOW_BATTERY = 3.3;  // For single Li-ion

void loop() {
    float voltage = analogRead(A0) * (3.3 / 1023.0) * 2;  // Voltage divider
    
    if (voltage < LOW_BATTERY) {
        enterSleepMode();  // Protect battery
    }
}
\`\`\`

## PCB Design Mistakes (for advanced users)

### Mistake: Thin Power Traces

**Problem**: Voltage drop, heating

\`\`\`
Trace width for current:
100mA: 0.25mm (10mil)
500mA: 0.5mm (20mil)
1A: 1mm (40mil)
2A: 2mm (80mil)
\`\`\`

### Mistake: No Ground Plane

**Problem**: Noise, EMI, poor signal integrity

**Best Practice**:
- Top layer: Signals
- Bottom layer: Solid ground plane
- Vias to connect grounds

## The Ultimate Checklist

Before powering on ANY project:

\`\`\`
☐ Voltage levels correct (3.3V vs 5V)
☐ Polarity correct (no reversed connections)
☐ Current limits respected
☐ Decoupling capacitors in place
☐ Pull-up/pull-down resistors where needed
☐ No shorts between power and ground
☐ Flyback diodes on inductive loads
☐ Level shifters for voltage mismatch
☐ Power supply adequate for total current
☐ All connections secure
\`\`\`

**Pro Tip**: Test with multimeter BEFORE connecting power!
            `
        }
    ]
};
