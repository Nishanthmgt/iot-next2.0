export const miniProjectsContent = {
    id: 'mini-projects',
    title: 'Mini Projects / Quick Builds',
    subtitle: 'Hands-on simple builds to develop muscle memory',
    sections: [
        {
            id: 'led-basics',
            title: '💡 LED Control Projects',
            content: `
## Project 1: Smart LED Blink

### Circuit
\`\`\`
Arduino Pin 13 → 220Ω Resistor → LED (+) → LED (-) → GND
\`\`\`

### Code
\`\`\`cpp
const int LED_PIN = 13;

void setup() {
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_PIN, HIGH);
    delay(1000);
    digitalWrite(LED_PIN, LOW);
    delay(1000);
}
\`\`\`

### Challenge Upgrades
1. **SOS Pattern**: Blink S-O-S in Morse code
2. **Breathing Effect**: Use PWM for smooth fade
3. **Random Blink**: Random delays between blinks

---

## Project 2: RGB LED Color Mixer

### Components
- 1× Common Cathode RGB LED
- 3× 220Ω Resistors
- Arduino

### Circuit
\`\`\`
Pin 9 (PWM)  → 220Ω → Red LED pin
Pin 10 (PWM) → 220Ω → Green LED pin
Pin 11 (PWM) → 220Ω → Blue LED pin
Common Cathode → GND
\`\`\`

### Code
\`\`\`cpp
const int RED = 9;
const int GREEN = 10;
const int BLUE = 11;

void setColor(int r, int g, int b) {
    analogWrite(RED, r);
    analogWrite(GREEN, g);
    analogWrite(BLUE, b);
}

void setup() {
    pinMode(RED, OUTPUT);
    pinMode(GREEN, OUTPUT);
    pinMode(BLUE, OUTPUT);
}

void loop() {
    // Cycle through colors
    setColor(255, 0, 0);    // Red
    delay(1000);
    setColor(0, 255, 0);    // Green
    delay(1000);
    setColor(0, 0, 255);    // Blue
    delay(1000);
    setColor(255, 255, 0);  // Yellow
    delay(1000);
}
\`\`\`

### Learn More
- **PWM Basics**: How \`analogWrite()\` creates colors
- **Color Theory**: Mixing RGB values
- **Power Consumption**: Measuring LED current
            `
        },
        {
            id: 'sensor-projects',
            title: '🌡️ Sensor Integration Projects',
            content: `
## Project 3: Temperature Monitor

### Components
- DHT11 or DHT22 sensor
- Arduino
- (Optional) OLED display

### Wiring
\`\`\`
DHT11 Pin 1 (VCC) → 5V
DHT11 Pin 2 (Data) → Pin 2 + 10kΩ pull-up to 5V
DHT11 Pin 4 (GND) → GND
\`\`\`

### Code
\`\`\`cpp
#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(115200);
    dht.begin();
    Serial.println("Temperature Monitor Started");
}

void loop() {
    float temp = dht.readTemperature();
    float humidity = dht.readHumidity();
    
    if (isnan(temp) || isnan(humidity)) {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }
    
    Serial.print("Temperature: ");
    Serial.print(temp);
    Serial.print("°C | Humidity: ");
    Serial.print(humidity);
    Serial.println("%");
    
    delay(2000);  // DHT11 needs 2s between readings
}
\`\`\`

### Enhancements
1. **Alert System**: Buzzer when temp > threshold
2. **Data Logging**: Save to SD card
3. **Web Dashboard**: ESP32 + WiFi display

---

## Project 4: Ultrasonic Distance Sensor

### Components
- HC-SR04 Ultrasonic Sensor
- Arduino
- LED (optional for visual feedback)

### Circuit
\`\`\`
HC-SR04 VCC → 5V
HC-SR04 Trig → Pin 9
HC-SR04 Echo → Pin 10
HC-SR04 GND → GND
\`\`\`

### Code
\`\`\`cpp
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

void setup() {
    Serial.begin(115200);
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
}

float getDistance() {
    // Send 10μs pulse
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
    
    // Measure echo time
    long duration = pulseIn(ECHO_PIN, HIGH);
    
    // Calculate distance (cm)
    float distance = duration * 0.034 / 2;
    return distance;
}

void loop() {
    float dist = getDistance();
    
    Serial.print("Distance: ");
    Serial.print(dist);
    Serial.println(" cm");
    
    delay(500);
}
\`\`\`

### Applications
- **Parking Sensor**: Beep faster as object gets closer
- **Liquid Level**: Measure tank depth
- **Obstacle Avoidance**: Robot navigation
            `
        },
        {
            id: 'automation-projects',
            title: '🤖 Simple Automation Projects',
            content: `
## Project 5: Light-Activated Night Light

### Components
- LDR (Light Dependent Resistor)
- 10kΩ Resistor
- LED + 220Ω Resistor
- Arduino

### Circuit
\`\`\`
5V → LDR → A0 → 10kΩ → GND
Pin 13 → 220Ω → LED → GND
\`\`\`

### Code
\`\`\`cpp
const int LDR_PIN = A0;
const int LED_PIN = 13;
const int THRESHOLD = 500;  // Adjust based on your room

void setup() {
    pinMode(LED_PIN, OUTPUT);
    Serial.begin(115200);
}

void loop() {
    int lightLevel = analogRead(LDR_PIN);
    
    Serial.print("Light Level: ");
    Serial.println(lightLevel);
    
    if (lightLevel < THRESHOLD) {
        digitalWrite(LED_PIN, HIGH);  // Dark → LED ON
    } else {
        digitalWrite(LED_PIN, LOW);   // Bright → LED OFF
    }
    
    delay(100);
}
\`\`\`

### Calibration Tips
1. Read LDR value in daylight → Set threshold below this
2. Read LDR value in darkness → Verify threshold above this
3. Add hysteresis to prevent flickering

---

## Project 6: Button-Controlled Counter

### Components
- Push button
- 10kΩ Resistor (or use internal pull-up)
- Arduino

### Circuit
\`\`\`
Button Pin 1 → 5V
Button Pin 2 → Pin 2 + 10kΩ to GND
\`\`\`

### Code with Debouncing
\`\`\`cpp
const int BUTTON_PIN = 2;
int counter = 0;
int lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long DEBOUNCE_DELAY = 50;

void setup() {
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    Serial.begin(115200);
    Serial.println("Counter: 0");
}

void loop() {
    int reading = digitalRead(BUTTON_PIN);
    
    if (reading != lastButtonState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > DEBOUNCE_DELAY) {
        if (reading == LOW) {  // Button pressed
            counter++;
            Serial.print("Counter: ");
            Serial.println(counter);
            
            while(digitalRead(BUTTON_PIN) == LOW);  // Wait for release
        }
    }
    
    lastButtonState = reading;
}
\`\`\`

### Key Concepts
- **Debouncing**: Preventing multiple counts from one press
- **Pull-up Resistors**: Why buttons need them
- **State Machines**: Tracking button state changes

---

## Project 7: Servo Motor Control

### Components
- SG90 Servo Motor
- Arduino
- External 5V power supply (recommended)

### Circuit
\`\`\`
Servo Brown Wire → GND
Servo Red Wire → 5V (external supply)
Servo Orange Wire → Pin 9
\`\`\`

### Code
\`\`\`cpp
#include <Servo.h>

Servo myServo;
const int SERVO_PIN = 9;

void setup() {
    myServo.attach(SERVO_PIN);
    Serial.begin(115200);
}

void loop() {
    // Sweep from 0° to 180°
    for (int angle = 0; angle <= 180; angle++) {
        myServo.write(angle);
        Serial.println(angle);
        delay(15);
    }
    
    delay(1000);
    
    // Sweep back
    for (int angle = 180; angle >= 0; angle--) {
        myServo.write(angle);
        delay(15);
    }
    
    delay(1000);
}
\`\`\`

### Applications
- **Pan-Tilt Camera**: 2 servos for X-Y movement
- **Robotic Arm**: Multiple servos for joints
- **Automated Door**: Servo-controlled lock
            `
        },
        {
            id: 'communication-projects',
            title: '📡 Communication Projects',
            content: `
## Project 8: Serial Command Interface

### Code
\`\`\`cpp
void setup() {
    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    
    Serial.println("=== Command Interface ===");
    Serial.println("Commands:");
    Serial.println("  ON  - Turn LED on");
    Serial.println("  OFF - Turn LED off");
    Serial.println("  STATUS - Show LED state");
}

void loop() {
    if (Serial.available() > 0) {
        String command = Serial.readStringUntil('\\n');
        command.trim();
        command.toUpperCase();
        
        if (command == "ON") {
            digitalWrite(LED_BUILTIN, HIGH);
            Serial.println("LED is ON");
        }
        else if (command == "OFF") {
            digitalWrite(LED_BUILTIN, LOW);
            Serial.println("LED is OFF");
        }
        else if (command == "STATUS") {
            Serial.print("LED is ");
            Serial.println(digitalRead(LED_BUILTIN) ? "ON" : "OFF");
        }
        else {
            Serial.println("Unknown command!");
        }
    }
}
\`\`\`

### Use Cases
- **Remote Control**: Control via Bluetooth terminal
- **Debugging**: Test functions without re-uploading
- **Configuration**: Change settings at runtime

---

## Project 9: Two Arduino Communication

### Master Arduino
\`\`\`cpp
void setup() {
    Serial.begin(9600);
}

void loop() {
    Serial.println("PING");
    delay(1000);
}
\`\`\`

### Slave Arduino
\`\`\`cpp
void setup() {
    Serial.begin(9600);
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    if (Serial.available() > 0) {
        String msg = Serial.readStringUntil('\\n');
        if (msg == "PING") {
            digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
        }
    }
}
\`\`\`

### Wiring
\`\`\`
Master TX → Slave RX
Master RX → Slave TX
Master GND → Slave GND
\`\`\`

## Quick Build Tips

### 1. Start Simple
- Get one component working first
- Add complexity gradually
- Test after each addition

### 2. Use Libraries
- Don't reinvent the wheel
- Check Arduino Library Manager
- Read examples in library folder

### 3. Comment Your Code
\`\`\`cpp
// Good comments explain WHY, not WHAT
int threshold = 500;  // Calibrated for room lighting

// Bad comment (obvious)
int x = 5;  // Set x to 5
\`\`\`

### 4. Version Control
- Save working versions
- Name files with dates: \`project_2024_01_06.ino\`
- Keep a changelog in comments
            `
        }
    ]
};
