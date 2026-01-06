const e={id:"pin-selection",title:"Pin Selection Guide",subtitle:"Which pins to use and which to avoid for stability",sections:[{id:"arduino-pins",title:"🔵 Arduino Uno/Nano Pin Guide",content:`
## Digital Pins (D0-D13)

### D0 & D1 (RX/TX) - **AVOID**

**Why**: Used for Serial communication (USB)

\`\`\`
❌ DON'T USE for:
- General I/O while using Serial Monitor
- Sensors or buttons

✅ OK TO USE when:
- Not using Serial communication
- After uploading code (disconnect during upload)
\`\`\`

**Symptom if used**: Upload fails, garbage in Serial Monitor

### D2 & D3 - **EXCELLENT**

**Features**:
- External interrupts (INT0, INT1)
- PWM capable (Pin 3 only)

**Best for**:
\`\`\`cpp
// Rotary encoders
attachInterrupt(digitalPinToInterrupt(2), encoderISR, CHANGE);

// Frequency counting
// Button press detection (instant response)
\`\`\`

### D4-D7 - **GOOD**

**Features**: Standard digital I/O

**Best for**:
- Buttons
- LEDs
- Relay control
- Digital sensors

### D8-D12 - **GOOD**

**Features**: Standard digital I/O

**Note**: D10, D11, D12 used by SPI
\`\`\`
D10: SS (Slave Select)
D11: MOSI
D12: MISO
D13: SCK (also has built-in LED)
\`\`\`

### D13 - **USE WITH CAUTION**

**Issues**:
- Has built-in LED (loads the pin)
- Used for SPI SCK
- May cause issues with some sensors

\`\`\`
✅ OK for: Testing, debugging
❌ Avoid for: Sensitive inputs, precise timing
\`\`\`

## Analog Pins (A0-A5)

### A0-A3 - **EXCELLENT**

**Features**:
- 10-bit ADC (0-1023)
- Can also be used as digital I/O

\`\`\`cpp
// As analog input
int value = analogRead(A0);  // 0-1023

// As digital I/O
pinMode(A0, OUTPUT);
digitalWrite(A0, HIGH);
\`\`\`

**Best for**:
- Potentiometers
- Analog sensors (LDR, thermistor)
- Voltage monitoring

### A4 & A5 - **RESERVED FOR I2C**

\`\`\`
A4: SDA (I2C Data)
A5: SCL (I2C Clock)
\`\`\`

**Can use as digital I/O if not using I2C**, but not recommended

## PWM Pins (Marked with ~)

**Pins**: 3, 5, 6, 9, 10, 11

**Frequency**: ~490 Hz (pins 5, 6 at ~980 Hz)

\`\`\`cpp
analogWrite(9, 128);  // 50% duty cycle
\`\`\`

**Best for**:
- LED dimming
- Motor speed control
- Servo control (use Servo library)

**Note**: Using tone() disables PWM on pins 3 and 11

## Pin Current Limits

\`\`\`
Per pin: 40mA absolute maximum
Recommended: 20mA per pin
Total all pins: 200mA maximum
\`\`\`

**Safe LED Connection**:
\`\`\`
Pin → 220Ω → LED → GND
Current = (5V - 2V) / 220Ω = 13.6mA ✅
\`\`\`

## Arduino Pin Summary Table

| Pin | Type | Special Function | Best Use |
|-----|------|------------------|----------|
| D0 | Digital | RX (Serial) | Avoid |
| D1 | Digital | TX (Serial) | Avoid |
| D2 | Digital | INT0, PWM | Interrupts |
| D3 | Digital | INT1, PWM | Interrupts, PWM |
| D4-D7 | Digital | - | General I/O |
| D8-D9 | Digital | PWM (D9) | General I/O |
| D10 | Digital | SS, PWM | SPI or PWM |
| D11 | Digital | MOSI, PWM | SPI or PWM |
| D12 | Digital | MISO | SPI |
| D13 | Digital | SCK, LED | Avoid for inputs |
| A0-A3 | Analog | ADC | Analog sensors |
| A4 | Analog | SDA (I2C) | I2C or analog |
| A5 | Analog | SCL (I2C) | I2C or analog |
            `},{id:"esp32-pins",title:"📡 ESP32 Pin Guide",content:`
## Input-Only Pins

**Pins**: 34, 35, 36 (VP), 39 (VN)

\`\`\`
❌ CANNOT be used as outputs
✅ CAN be used for:
- Analog input (ADC1)
- Digital input
\`\`\`

**No internal pull-up/pull-down resistors!**

## Strapping Pins (Boot Configuration)

### GPIO 0 - **CRITICAL**

\`\`\`
Must be HIGH at boot for normal operation
If LOW at boot: Enters flash/download mode
\`\`\`

**Safe usage**:
\`\`\`cpp
// Add 10kΩ pull-up resistor
// Can use for button (active LOW)
pinMode(0, INPUT_PULLUP);
\`\`\`

### GPIO 2 - **CRITICAL**

\`\`\`
Must be LOW or floating at boot
Connected to on-board LED on many boards
\`\`\`

**Safe usage**: General I/O after boot

### GPIO 12 (MTDI) - **CAUTION**

\`\`\`
Boot fails if pulled HIGH
Controls flash voltage (3.3V vs 1.8V)
\`\`\`

**Recommendation**: Avoid or use with pull-down

### GPIO 15 (MTDO) - **CAUTION**

\`\`\`
Outputs PWM signal at boot
Must be HIGH for normal boot
\`\`\`

**Safe usage**: Add pull-up, avoid sensitive inputs

## ADC Pins

### ADC1 (WiFi Compatible)

**Pins**: 32, 33, 34, 35, 36, 39

\`\`\`cpp
// Use ADC1 when WiFi is active
int value = analogRead(36);  // 0-4095 (12-bit)
\`\`\`

### ADC2 (WiFi Conflicts!)

**Pins**: 0, 2, 4, 12, 13, 14, 15, 25, 26, 27

\`\`\`
❌ CANNOT use ADC2 when WiFi is active!
✅ OK for digital I/O with WiFi
\`\`\`

## Touch Pins

**Pins**: 0, 2, 4, 12, 13, 14, 15, 27, 32, 33

\`\`\`cpp
// Capacitive touch sensing
int touchValue = touchRead(4);
if (touchValue < 40) {
    // Touch detected
}
\`\`\`

## Safe Pins for General Use

**Best pins** (no boot issues, no conflicts):

\`\`\`
Digital I/O: 4, 5, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27
ADC (with WiFi): 32, 33, 34, 35, 36, 39
I2C: 21 (SDA), 22 (SCL) - default
SPI: 23 (MOSI), 19 (MISO), 18 (SCK), 5 (SS)
\`\`\`

## Pins to AVOID

\`\`\`
GPIO 1 (TX): Serial output
GPIO 3 (RX): Serial input
GPIO 6-11: Connected to flash (DO NOT USE!)
GPIO 12: Boot fails if HIGH
GPIO 15: Outputs at boot
\`\`\`

## ESP32 Pin Mapping Example

\`\`\`cpp
// Safe pin assignments for common peripherals

// LEDs
const int LED1 = 2;   // Built-in LED
const int LED2 = 4;   // External LED

// Buttons (with internal pull-up)
const int BUTTON1 = 0;   // Boot button
const int BUTTON2 = 5;   // External button

// Sensors
const int TEMP_SENSOR = 34;  // ADC1 (analog)
const int PIR_SENSOR = 27;   // Digital

// I2C
const int SDA_PIN = 21;  // Default
const int SCL_PIN = 22;  // Default

// SPI
const int MOSI = 23;
const int MISO = 19;
const int SCK = 18;
const int CS = 5;

// PWM (any pin except input-only)
const int MOTOR_PWM = 25;
const int SERVO_PWM = 26;
\`\`\`

## ESP32 Current Limits

\`\`\`
Per pin: 40mA maximum (12mA recommended)
Total all pins: 1.2A maximum
3.3V regulator: 500mA typical
\`\`\`
            `},{id:"esp8266-pins",title:"📶 ESP8266 Pin Guide",content:`
## Available GPIO Pins

**Total usable pins**: Only 9-11 (depending on board)

\`\`\`
GPIO 0, 2, 4, 5, 12, 13, 14, 15, 16
\`\`\`

## Boot Mode Pins

### GPIO 0 - **CRITICAL**

\`\`\`
Must be HIGH at boot
If LOW: Flash mode
\`\`\`

**Usage**:
\`\`\`cpp
// Safe with pull-up resistor
pinMode(0, INPUT_PULLUP);
// Can use for button (active LOW)
\`\`\`

### GPIO 2 - **CRITICAL**

\`\`\`
Must be HIGH at boot
Usually has built-in LED
\`\`\`

### GPIO 15 - **CRITICAL**

\`\`\`
Must be LOW at boot
Add pull-down resistor (10kΩ to GND)
\`\`\`

## Safe Pins

**Best for general use**:

\`\`\`
GPIO 4 (D2): I2C SDA
GPIO 5 (D1): I2C SCL
GPIO 12 (D6): MISO
GPIO 13 (D7): MOSI
GPIO 14 (D5): SCK
\`\`\`

## Pins with Limitations

### GPIO 16 (D0) - **SPECIAL**

\`\`\`
✅ Can be used for: Deep sleep wake-up, LED
❌ Cannot be used for: I2C, interrupts, PWM
\`\`\`

\`\`\`cpp
// Wake from deep sleep
ESP.deepSleep(10e6);  // 10 seconds
// Connect GPIO 16 to RST
\`\`\`

### GPIO 1 & 3 (TX/RX) - **AVOID**

\`\`\`
Used for Serial communication
Avoid unless you don't need Serial
\`\`\`

## NodeMCU Pin Mapping

**Important**: NodeMCU labels ≠ GPIO numbers!

| NodeMCU | GPIO | Notes |
|---------|------|-------|
| D0 | GPIO 16 | No PWM/I2C |
| D1 | GPIO 5 | I2C SCL |
| D2 | GPIO 4 | I2C SDA |
| D3 | GPIO 0 | Boot mode |
| D4 | GPIO 2 | Boot mode, LED |
| D5 | GPIO 14 | SPI SCK |
| D6 | GPIO 12 | SPI MISO |
| D7 | GPIO 13 | SPI MOSI |
| D8 | GPIO 15 | Boot mode |
| RX | GPIO 3 | Serial RX |
| TX | GPIO 1 | Serial TX |

\`\`\`cpp
// Use GPIO numbers in code
pinMode(5, OUTPUT);  // GPIO 5 (D1 on NodeMCU)
digitalWrite(5, HIGH);
\`\`\`

## ESP8266 Example Pin Assignment

\`\`\`cpp
// Safe pin configuration

// I2C
#define SDA_PIN 4   // D2
#define SCL_PIN 5   // D1

// SPI
#define MOSI_PIN 13  // D7
#define MISO_PIN 12  // D6
#define SCK_PIN 14   // D5
#define CS_PIN 15    // D8 (with pull-down!)

// General I/O
#define LED_PIN 2    // D4 (built-in LED)
#define BUTTON_PIN 0 // D3 (with pull-up)

// Wake-up
#define WAKE_PIN 16  // D0
\`\`\`
            `},{id:"pin-best-practices",title:"✅ Pin Selection Best Practices",content:`
## General Rules

### 1. Read the Datasheet

**Always check**:
- Pin functions and limitations
- Boot requirements
- Current limits
- Voltage levels

### 2. Reserve Communication Pins

\`\`\`
I2C: Reserve SDA/SCL
SPI: Reserve MOSI/MISO/SCK/SS
UART: Reserve TX/RX (if using Serial)
\`\`\`

### 3. Plan for Expansion

\`\`\`
Leave some pins unused for:
- Future sensors
- Debugging
- Firmware updates
\`\`\`

## Pin Assignment Strategy

### Step 1: List Requirements

\`\`\`
Example project:
- 2× LEDs
- 1× Button
- 1× DHT22 sensor
- 1× OLED display (I2C)
- 1× SD card (SPI)
\`\`\`

### Step 2: Assign Critical Pins First

\`\`\`
I2C (OLED): A4 (SDA), A5 (SCL)
SPI (SD): D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)
\`\`\`

### Step 3: Assign Remaining Pins

\`\`\`
LEDs: D4, D5 (any digital pin)
Button: D2 (interrupt capable for responsiveness)
DHT22: D7 (any digital pin)
\`\`\`

## Interrupt Pin Selection

**Use interrupt pins for**:
- Rotary encoders
- Frequency counting
- Critical button presses
- Wake from sleep

\`\`\`cpp
// Arduino Uno: D2, D3
attachInterrupt(digitalPinToInterrupt(2), ISR, RISING);

// ESP32: Any pin
attachInterrupt(digitalPinToInterrupt(4), ISR, FALLING);
\`\`\`

## PWM Pin Selection

**Considerations**:
- Frequency requirements
- Number of channels needed
- Conflicts with other functions

\`\`\`cpp
// Arduino: Pins 3, 5, 6, 9, 10, 11
analogWrite(9, 128);

// ESP32: Any output pin (16 channels)
ledcSetup(0, 5000, 8);  // Channel 0, 5kHz, 8-bit
ledcAttachPin(25, 0);
ledcWrite(0, 128);
\`\`\`

## Analog Pin Selection

### Arduino

\`\`\`
ADC resolution: 10-bit (0-1023)
Reference voltage: 5V (or 3.3V for 3.3V boards)

Pins: A0-A5 (Uno), A0-A15 (Mega)
\`\`\`

### ESP32

\`\`\`
ADC resolution: 12-bit (0-4095)
Reference voltage: 3.3V

Use ADC1 (pins 32-39) when WiFi active
Avoid ADC2 with WiFi
\`\`\`

## Pin Protection

### Input Protection

\`\`\`
For external signals:
- Add series resistor (1kΩ)
- Clamp with diodes to VCC/GND
- Use optocoupler for isolation
\`\`\`

### Output Protection

\`\`\`
For driving loads:
- Use transistor/MOSFET
- Add current limiting resistor
- Flyback diode for inductive loads
\`\`\`

## Common Pin Assignment Patterns

### Pattern 1: Sensor Array

\`\`\`cpp
// Multiple analog sensors
const int sensors[] = {A0, A1, A2, A3};

void readSensors() {
    for (int i = 0; i < 4; i++) {
        int value = analogRead(sensors[i]);
        processSensor(i, value);
    }
}
\`\`\`

### Pattern 2: LED Matrix

\`\`\`cpp
// 8 LEDs on consecutive pins
const int LED_START = 4;
const int LED_COUNT = 8;

void setup() {
    for (int i = 0; i < LED_COUNT; i++) {
        pinMode(LED_START + i, OUTPUT);
    }
}

void setLED(int num, bool state) {
    digitalWrite(LED_START + num, state);
}
\`\`\`

### Pattern 3: Motor Control

\`\`\`cpp
// H-bridge motor driver
const int MOTOR_A_IN1 = 5;
const int MOTOR_A_IN2 = 6;
const int MOTOR_A_PWM = 9;

void motorForward(int speed) {
    digitalWrite(MOTOR_A_IN1, HIGH);
    digitalWrite(MOTOR_A_IN2, LOW);
    analogWrite(MOTOR_A_PWM, speed);
}
\`\`\`

## Debugging Pin Issues

### Symptom: Pin not working

**Check**:
1. Correct pin number in code
2. pinMode() called
3. Not conflicting with other function
4. Not damaged (test with multimeter)

### Symptom: Erratic behavior

**Check**:
1. Pull-up/pull-down resistors
2. Decoupling capacitors
3. Wire length (keep short)
4. Interference from other signals

### Symptom: Won't boot

**Check**:
1. Strapping pins correct
2. No shorts to ground/VCC
3. Power supply stable
4. Flash mode pins

## Pin Documentation Template

\`\`\`cpp
/*
 * PIN CONFIGURATION
 * 
 * Power:
 * - VIN: 7-12V external supply
 * - 5V: Regulated 5V output
 * - 3.3V: Regulated 3.3V output (50mA max)
 * - GND: Ground
 * 
 * I2C (OLED Display):
 * - SDA: A4
 * - SCL: A5
 * 
 * SPI (SD Card):
 * - MOSI: D11
 * - MISO: D12
 * - SCK: D13
 * - CS: D10
 * 
 * Digital I/O:
 * - LED1: D4 (with 220Ω resistor)
 * - LED2: D5 (with 220Ω resistor)
 * - BUTTON: D2 (with internal pull-up)
 * - DHT22: D7 (data pin)
 * 
 * Analog:
 * - LDR: A0 (with 10kΩ pull-down)
 * - POT: A1 (potentiometer)
 * 
 * PWM:
 * - SERVO: D9 (5V external power required)
 * 
 * Reserved:
 * - D0, D1: Serial (USB communication)
 * - D3: Available for future use
 */
\`\`\`

## Quick Reference: Pin Selection Priority

**Priority 1** (Must have):
- Communication pins (I2C, SPI, UART)
- Strapping pins (correct boot configuration)

**Priority 2** (Important):
- Interrupt pins (for time-critical tasks)
- PWM pins (for analog output)
- ADC pins (for analog input)

**Priority 3** (Flexible):
- General digital I/O
- Extra pins for expansion

**Avoid**:
- Pins with boot requirements
- Pins shared with critical functions
- Damaged or unreliable pins
            `}]};export{e as pinSelectionContent};
