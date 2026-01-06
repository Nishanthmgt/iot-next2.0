export const troubleshootingContent = {
    id: 'troubleshooting',
    title: 'Troubleshooting & Debugging',
    subtitle: 'Master the art of fixing broken circuits and firmware errors',
    sections: [
        {
            id: 'hardware-debugging',
            title: '🔧 Hardware Debugging Essentials',
            content: `
## The Systematic Approach

When your circuit doesn't work, **don't panic**. Follow this proven debugging workflow:

### 1. Visual Inspection First
- Check for **loose connections** on breadboard
- Verify **component orientation** (LEDs, ICs, capacitors)
- Look for **short circuits** (wire bridges)
- Confirm **power rails** are connected correctly

### 2. Power Supply Verification
\`\`\`
✓ Measure voltage at VCC pin: Should be 3.3V or 5V (±5%)
✓ Check GND continuity: 0Ω between all ground points
✓ Verify current draw: Compare with datasheet specs
\`\`\`

### 3. Component-Level Testing
Use your multimeter in **continuity mode** to trace connections:
- Beep = Good connection (< 50Ω)
- No beep = Open circuit or bad connection

## Common Hardware Issues

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Nothing works | No power / reversed polarity | Check power supply, verify connections |
| Intermittent behavior | Loose wire / cold solder joint | Re-seat connections, re-solder |
| Component gets hot | Short circuit / wrong voltage | Remove power immediately, check schematic |
| Sensor reads garbage | Missing pull-up resistors | Add 4.7kΩ resistors to SDA/SCL |
            `
        },
        {
            id: 'multimeter-mastery',
            title: '📊 Multimeter Usage Guide',
            content: `
## Essential Measurements

### Voltage Measurement (DC)
\`\`\`
1. Set multimeter to DC Voltage (V⎓)
2. Black probe → GND
3. Red probe → Test point
4. Read value on display
\`\`\`

**Pro Tip**: Always measure voltage **relative to ground** for consistent readings.

### Continuity Testing
Perfect for finding:
- Broken wires
- Bad solder joints
- PCB trace damage

\`\`\`
Mode: Continuity (🔊 symbol)
Expected: Beep + ~0Ω reading
If no beep: Connection is broken
\`\`\`

### Current Measurement
**⚠️ CRITICAL**: Never measure current in parallel!

\`\`\`
1. Break the circuit
2. Insert multimeter IN SERIES
3. Set to appropriate range (mA or A)
4. Measure current flow
\`\`\`

## Debugging with Serial Monitor

### Basic Serial Debugging
\`\`\`cpp
void setup() {
    Serial.begin(115200);  // High baud rate for faster debugging
    Serial.println("=== System Boot ===");
}

void loop() {
    int sensorValue = analogRead(A0);
    
    // Debug print with labels
    Serial.print("Sensor: ");
    Serial.print(sensorValue);
    Serial.print(" | Voltage: ");
    Serial.println(sensorValue * (5.0 / 1023.0));
    
    delay(500);
}
\`\`\`

### Advanced: Conditional Debug Messages
\`\`\`cpp
#define DEBUG 1  // Set to 0 to disable all debug prints

#if DEBUG
    #define DEBUG_PRINT(x) Serial.print(x)
    #define DEBUG_PRINTLN(x) Serial.println(x)
#else
    #define DEBUG_PRINT(x)
    #define DEBUG_PRINTLN(x)
#endif

void loop() {
    DEBUG_PRINTLN("Loop started");
    // Your code here
}
\`\`\`
            `
        },
        {
            id: 'firmware-debugging',
            title: '💻 Firmware Debugging Strategies',
            content: `
## Common Code Issues & Fixes

### Issue 1: Code Uploads But Nothing Happens
**Diagnosis Steps:**
1. Check if \`setup()\` is being called
2. Verify pin modes are set correctly
3. Add LED blink in \`setup()\` to confirm execution

\`\`\`cpp
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    
    // Blink 3 times to show setup() ran
    for(int i = 0; i < 3; i++) {
        digitalWrite(LED_BUILTIN, HIGH);
        delay(200);
        digitalWrite(LED_BUILTIN, LOW);
        delay(200);
    }
}
\`\`\`

### Issue 2: Sensor Reads 0 or Max Value
**Likely causes:**
- Sensor not powered
- Wrong pin number in code
- Missing pull-up/pull-down resistors

\`\`\`cpp
// Add this to verify pin configuration
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);  // Explicitly set mode
    
    Serial.print("Pin A0 reads: ");
    Serial.println(analogRead(A0));  // Should be ~512 if floating
}
\`\`\`

### Issue 3: Code Freezes or Crashes
**Debug with Watchdog Timer:**
\`\`\`cpp
#include <avr/wdt.h>

void setup() {
    wdt_enable(WDTO_2S);  // 2 second watchdog
    Serial.begin(115200);
}

void loop() {
    wdt_reset();  // Pet the watchdog
    
    // Your code here
    // If code hangs, watchdog will reset the board
}
\`\`\`

## The "Binary Search" Debug Method

When you have a large codebase and don't know where the issue is:

\`\`\`cpp
void loop() {
    Serial.println("Point A");
    functionOne();
    
    Serial.println("Point B");
    functionTwo();
    
    Serial.println("Point C");
    functionThree();
}
\`\`\`

**If you see "Point A" and "Point B" but not "Point C":**
→ The bug is in \`functionTwo()\`

## Memory Issues

### Symptom: Random crashes, weird behavior
**Cause**: Running out of RAM

\`\`\`cpp
// Check available RAM
int freeRam() {
    extern int __heap_start, *__brkval;
    int v;
    return (int) &v - (__brkval == 0 ? (int) &__heap_start : (int) __brkval);
}

void setup() {
    Serial.begin(115200);
    Serial.print("Free RAM: ");
    Serial.println(freeRam());  // Should be > 500 bytes for stability
}
\`\`\`

**Fix**: Move strings to PROGMEM
\`\`\`cpp
// Bad (uses RAM)
Serial.println("This is a long error message");

// Good (uses Flash)
Serial.println(F("This is a long error message"));
\`\`\`
            `
        },
        {
            id: 'quick-fixes',
            title: '⚡ Quick Fixes Cheat Sheet',
            content: `
## Top 10 Instant Fixes

### 1. LED Not Lighting
\`\`\`
✓ Check polarity (long leg = +)
✓ Add resistor (220Ω minimum)
✓ Verify pin is set to OUTPUT
\`\`\`

### 2. Button Not Working
\`\`\`cpp
// Enable internal pull-up
pinMode(BUTTON_PIN, INPUT_PULLUP);

// Read inverted logic (pressed = LOW)
if(digitalRead(BUTTON_PIN) == LOW) {
    // Button pressed
}
\`\`\`

### 3. I2C Device Not Found
\`\`\`cpp
// Scan for I2C devices
#include <Wire.h>

void setup() {
    Serial.begin(115200);
    Wire.begin();
    
    for(byte addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if(Wire.endTransmission() == 0) {
            Serial.print("Device found at 0x");
            Serial.println(addr, HEX);
        }
    }
}
\`\`\`

### 4. Serial Monitor Shows Garbage
**Fix**: Match baud rates!
\`\`\`cpp
Serial.begin(115200);  // Code
// Serial Monitor must also be set to 115200
\`\`\`

### 5. ESP32/ESP8266 Won't Upload
1. Hold BOOT button during upload
2. Check USB cable (must support data)
3. Install correct drivers (CP2102/CH340)

### 6. Sensor Values Jumping Around
\`\`\`cpp
// Add simple averaging
const int numReadings = 10;
int total = 0;

for(int i = 0; i < numReadings; i++) {
    total += analogRead(A0);
    delay(10);
}
int average = total / numReadings;
\`\`\`

### 7. Power Supply Issues
\`\`\`
USB Power: Max 500mA
→ Use external 5V supply for motors/servos

3.3V Pin: Max 50mA
→ Don't power sensors from this pin
\`\`\`

### 8. Code Works on USB, Fails on Battery
**Cause**: Voltage drop under load
**Fix**: Use proper voltage regulator (LM7805 or buck converter)

### 9. Bluetooth/WiFi Won't Connect
\`\`\`cpp
// Add connection timeout
unsigned long startTime = millis();
while(WiFi.status() != WL_CONNECTED) {
    if(millis() - startTime > 10000) {
        Serial.println("Connection timeout!");
        break;
    }
    delay(500);
}
\`\`\`

### 10. "Sketch Too Big" Error
**Solutions:**
- Remove unused libraries
- Use \`F()\` macro for strings
- Disable debug code
- Use smaller bootloader (OptiB oot)

## Emergency Reset Procedure

If your board is completely unresponsive:

\`\`\`
1. Disconnect all external components
2. Upload minimal blink sketch
3. If that works, reconnect components one by one
4. Find the culprit component
\`\`\`

## Pro Debugging Tools

### Logic Analyzer
- Capture digital signals
- Decode I2C, SPI, UART
- ~$10 on Amazon (8-channel)

### Oscilloscope
- See actual waveforms
- Measure signal timing
- Essential for advanced debugging

### USB-to-Serial Adapter
- Debug without Arduino IDE
- Use PuTTY or screen
- Monitor multiple devices
            `
        }
    ]
};
