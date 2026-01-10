const e=[{id:1,title:"AI-Powered Precision Irrigation",level:"Advanced",description:"A next-generation agricultural system that leverages capacitive soil sensing and real-time telemetry to optimize water usage by 40% using specialized IoT protocols.",category:"Smart Agriculture",sub_category:"IoT (101-200)",estimatedTime:"2 Hours",tech:["ESP32","Capacitive Earth Moister Sensor","MQTT","Solar Power"],problem_statement:"Traditional timers and resistive soil sensors are inefficient, prone to corrosion, and lead to over-irrigation, wasting billions of liters of water annually while significantly increasing soil salinity.",real_world_case:"Deployed in vertical farms and drought-prone vineyard regions to maintain precise hydration levels, ensuring crop health even during severe heatwaves while reducing labor costs by 60%.",block_diagram:"graph TD; Solar_Panel-->Lipo_Charger; Lipo_Charger-->ESP32; Soil_Sensor-->ESP32; ESP32-->|MQTT|Cloud_Dashboard; ESP32-->|Relay|Water_Pump;",alternatives:{MCU:"Arduino Nano Matter (for Thread support)",Sensor:"TDR (Time Domain Reflectometry) Sensor for higher precision",Wireless:"LoRaWAN (for 10km+ range in rural farms)"},testing_output:`1. Monitor Serial Monitor for Moister % calibration.
2. Trigger manual pump via Dashboard toggle.
3. Verify data packets arrive in Cloud logs every 5 minutes.
4. Measure soil hydration change after 10s pump burst.`,common_errors:`1. Air gaps in soil around sensor (Wait 24h for settling).
2. Voltage drop during pump startup (Requires 1000uF capacitor).
3. MQTT keep-alive timeout on 2.4GHz congested networks.`,improvements:"Integrate DeepSeek-R1 AI local inference on-device to predict irrigation needs based on 7-day weather forecast API data.",mini_challenge:"Challenge: Modify the code to only allow irrigation between 10 PM and 4 AM to minimize evaporative loss and leverage off-peak electricity rates.",concept:"This project integrates high-precision capacitive sensing with low-power ESP32 sleep modes...",working_principle:`1. The sensor measures soil dielectric constant to determine moister level.
2. ESP32 wakes up from deep sleep, reads moister, and connects to WiFi.
3. Payload is published to the MQTT broker.
4. If moister < threshold, the relay triggers the solenoid valve for a calculated duration.`,pin_config:{arduino:[{pin:"A0",component:"Soil Sensor Analog",note:"Input"},{pin:"D8",component:"Relay Module",note:"Output"}],esp32:[{module:"Power",pinName:"Battery Input",mcuPin:"VBAT",direction:"Power",voltage:"3.7V",description:"Lipo Battery Supply"},{module:"Sensing",pinName:"Soil Analog",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Moister Level Reading"},{module:"Control",pinName:"Pump Relay",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Triggers 5V Load"}]},code:`// AI-Powered Precision Irrigation v1.2
// (C) 2026 IoTNext Enterprise

#include <WiFi.h>
#include <PubSubClient.h>

const int SOIL_PIN = 34;
const int PUMP_PIN = 12;
const int THRESHOLD = 65; // Percent

void setup() {
  Serial.begin(115200);
  pinMode(PUMP_PIN, OUTPUT);
  digitalWrite(PUMP_PIN, LOW);
  // Initialize protocols...
}

void loop() {
  int reading = analogRead(SOIL_PIN);
  int moister = map(reading, 3500, 1200, 0, 100);
  if(moister < THRESHOLD) {
    triggerIrrigation(10000);
  }
  enterDeepSleep(300); // 5 Minutes
}`,advantages:"Non-corrosive sensor life, extreme power efficiency, cloud-ready telemetry.",disadvantages:"Requires WiFi coverage, higher initial BOM cost compared to timers.",usage:"Insert sensor 10cm deep, configure WiFi credentials in source, and map MQTT topics to your mobile dashboard.",components:["1x ESP32 NodeMCU","1x Capacitive Soil Sensor v2.0","1x 5V Solenoid Valve","1x 10W Solar Panel","1x TP4056 Charger"],circuit_diagram:"Connect Sensor Analog to Pin 34, Relay Signal to Pin 12, and Battery to VSYS via charging circuit.",author_name:"NISHANTH",status:"Published",industrial_use:"Used in smart greenhouses and precision viticulture for water scarcity resilient farming.",bom_cost:"$18"},{id:2,title:"LED Fade: Pulse Width Modulation",level:"Beginner",description:"Learn how to simulate analog output with digital signals to create breathing light effects using PWM technology.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Digital pins only output 0 or 1. To achieve varying brightness, we use PWM (Pulse Width Modulation), which rapidly flickers the LED. The longer the 'ON' period compared to 'OFF', the brighter the LED appears.",working_principle:`1. A PWM-capable pin is defined as output.
2. The code iterates through brightness levels (0-255).
3. 'analogWrite()' sets the duty cycle based on the current value.
4. A small delay creates the smooth transition effect.`,pin_config:{arduino:[{module:"System Power",pinName:"LED VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Via Resistor"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Output LED",pinName:"LED Anode (+)",mcuPin:"D9",direction:"Output",voltage:"5V",description:"PWM Enabled Pin"},{module:"Output LED",pinName:"LED Cathode (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Ground"}],esp32:[{module:"System Power",pinName:"LED VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Via Resistor"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// PWM Fading: Sine-Wave Simulation
// Compatible: Arduino UNO (9) | ESP32 (4) | ESP8266

int led = 9;
int brightness = 0;
int fadeAmount = 5;
unsigned long previousMillis = 0;
const int interval = 30; // 30ms for smooth transition

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  // Non-blocking timing
  unsigned long currentMillis = millis();
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    
    analogWrite(led, brightness);
    brightness += fadeAmount;
    
    // Reverse direction at boundaries
    if (brightness <= 0 || brightness >= 255) {
      fadeAmount = -fadeAmount;
    }
  }
}`,advantages:"Smooth transitions, power efficient, works with most microcontrollers.",disadvantages:"Requires specific PWM hardware pins.",usage:"Connect the LED to Pin 9 (Arduino) or Pin 4 (ESP32) through a resistor.",components:["1x Controller","1x LED","1x 220 Ohm Resistor","Breadboard"],circuit_diagram:"Button Pin 1: VCC | Button Pin 2: D2/GPIO 4 (with 10k pull-down to GND) | LED Anode: D3/GPIO 2 | Cathode: GND (via 220-ohm resistor).",author_name:"NISHANTH",status:"Published",industrial_use:"Used in smart dimming systems and variable speed motor controls.",bom_cost:"$3"},{id:3,title:"Interactive Control: Push Button LED",level:"Beginner",description:"Bridge the gap between hardware and software interaction by using a physical switch to control a digital output.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"This project covers the use of digital inputs. A push button acts as a momentary switch. When pressed, it completes a circuit, sending a HIGH signal to a microcontroller pin.",working_principle:`1. Initialize one pin as OUTPUT (LED) and another as INPUT (Button).
2. Use an internal/external pull-up resistor to ensure a stable state.
3. The code reads the digital state of the button pin.
4. If state is HIGH (pressed), the LED pin is set HIGH.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x Push Button",pinName:"Push Button Pin 1",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Input (Internal Pullup)"},{module:"1x Push Button",pinName:"Push Button Pin 2",mcuPin:"GND",direction:"Power",voltage:"5V",description:"To Ground"},{module:"Output LED",pinName:"LED Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Output Pin"},{module:"Output LED",pinName:"LED Cathode (-)",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Common GND"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Interactive Toggle: Debounced State Memory
// Compatible: All Boards (Internal Pullup Required)

const int buttonPin = 2;
const int ledPin = 13;

bool ledState = LOW;
bool lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP); // Active LOW configuration
}

void loop() {
  int reading = digitalRead(buttonPin);
  
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading == LOW && ledState == LOW) {
       ledState = HIGH;
       digitalWrite(ledPin, ledState);
       while(digitalRead(buttonPin) == LOW); // Wait for release
    } else if (reading == LOW && ledState == HIGH) {
       ledState = LOW;
       digitalWrite(ledPin, ledState);
       while(digitalRead(buttonPin) == LOW);
    }
  }
  lastButtonState = reading;
}`,advantages:"Real-time user feedback, essential for user interfaces.",disadvantages:"Requires debouncing for stable production use.",usage:"Connect button to Pin 2 and GND (using internal pullup). LED to Pin 13.",components:["1x Microcontroller","1x LED","1x Push Button","1x 10k Resistor (optional)"],circuit_diagram:"Potentiometer: Pin 1 -> VCC, Pin 2 (Middle) -> A0/GPIO 34, Pin 3 -> GND. LED Anode -> D3/GPIO 2 with current-limiting resistor.",author_name:"NISHANTH",status:"Published",industrial_use:"Emergency stop buttons and tactile user inputs in ruggedized terminals.",bom_cost:"$4"},{id:4,title:"Smart Traffic Signaling System",level:"Beginner",description:"Simulate a real-world infrastructure system using sequential logic and multi-component synchronization.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"The Traffic Light System demonstrates complex timing sequences and multiple digital outputs. It's a foundational project for understanding state-based programming logic.",working_principle:`1. Three LEDs (Red, Yellow, Green) are initialized as outputs.
2. A sequence is programmed: Green stays on for X seconds.
3. Green turns off, Yellow turns on for a short period.
4. Yellow turns off, Red turns on for Y seconds.
5. The cycle loops to simulate intersection management.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"LED Anodes Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Output LED",pinName:"Red LED Anode",mcuPin:"D10",direction:"Output",voltage:"5V",description:"Connect via 220R"},{module:"Output LED",pinName:"Yellow LED Anode",mcuPin:"D11",direction:"Output",voltage:"5V",description:"Connect via 220R"},{module:"Output LED",pinName:"Green LED Anode",mcuPin:"D12",direction:"Output",voltage:"5V",description:"Connect via 220R"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Traffic Hub: Finite State Machine (FSM)
// Compatible: Arduino UNO | ESP32 | ESP8266

const int RED = 10, YEL = 11, GRN = 12;
enum States { GREEN_GO, YELLOW_CAUTION, RED_STOP };
States currentState = GREEN_GO;
unsigned long timestamp = 0;

void setup() {
  pinMode(RED, OUTPUT); pinMode(YEL, OUTPUT); pinMode(GRN, OUTPUT);
}

void loop() {
  unsigned long now = millis();
  
  switch(currentState) {
    case GREEN_GO:
      digitalWrite(GRN, HIGH); digitalWrite(YEL, LOW); digitalWrite(RED, LOW);
      if (now - timestamp >= 5000) { currentState = YELLOW_CAUTION; timestamp = now; }
      break;
      
    case YELLOW_CAUTION:
      digitalWrite(GRN, LOW); digitalWrite(YEL, HIGH); digitalWrite(RED, LOW);
      if (now - timestamp >= 2000) { currentState = RED_STOP; timestamp = now; }
      break;

    case RED_STOP:
      digitalWrite(GRN, LOW); digitalWrite(YEL, LOW); digitalWrite(RED, HIGH);
      if (now - timestamp >= 5000) { currentState = GREEN_GO; timestamp = now; }
      break;
  }
}`,advantages:"Excellent for learning logic flow, visually intuitive results.",disadvantages:"Higher power draw with multiple LEDs.",usage:"Connect Red (10), Yellow (11), Green (12) to designated pins with resistors.",components:["1x Arduino/ESP32","3x LEDs (R,Y,G)","3x 220 Ohm Resistors","Jumper Wires"],circuit_diagram:"Red LED -> D2, Yellow -> D3, Green -> D4. All LED Cathodes share a common GND connection via 220-ohm resistors.",author_name:"NISHANTH",status:"Published",industrial_use:"Applied in logistics automation and automated conveyor sorting systems for status signaling.",bom_cost:"$9"},{id:5,title:"Audio Alerts: Buzzer Frequency Control",level:"Beginner",description:"Integrate audio feedback into your projects using piezoelectric buzzers and frequency generation logic.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Piezo buzzers generate sound by vibrating a crystal at high speeds. By changing the frequency of the electrical pulses sent to the buzzer, we can create different musical notes or alarm tones.",working_principle:`1. Set the designated pin as an output for the buzzer.
2. Use 'tone()' function (Arduino) to send a specific frequency.
3. The frequency determines the pitch, while duration determines the length.
4. Switching frequencies in a loop creates a melody or siren effect.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V / VIN",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Active Buzzer",pinName:"Piezo Buzzer (+)",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Signal Output"},{module:"Active Buzzer",pinName:"Buzzer (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Ground"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Audible Alert: Frequency Modulation
// Compatible: Arduino (tone library) | ESP32 (ledc)

const int buzzer = 8;

void setup() {
  pinMode(buzzer, OUTPUT);
}

void loop() {
  // Dynamic siren effect using frequency sweep
  for (int freq = 500; freq <= 1500; freq += 10) {
    tone(buzzer, freq);
    delay(5); 
  }
  for (int freq = 1500; freq >= 500; freq -= 10) {
    tone(buzzer, freq);
    delay(5);
  }
}`,advantages:"Compact audible feedback, low cost, easy to integrate.",disadvantages:"Can be noisy; requires transistor for high-volume passive buzzers.",usage:"Connect the positive leg of the buzzer to Pin 8 and negative to GND.",components:["1x Arduino Uno","1x Piezo Buzzer","Jumper Wires","Breadboard"],circuit_diagram:"Servo Motor: Brown -> GND, Red -> 5V, Orange (Signal) -> D9 (Arduino) or GPIO 18 (ESP32). Ensure external power for multiple servos.",author_name:"NISHANTH",status:"Published",industrial_use:"Critical error alarms in medical equipment and proximity alerts in warehouse robots.",bom_cost:"$5"},{id:6,title:"Digital Dice: Probability & Randomness",level:"Beginner",description:"Construct a digital random number generator using LEDs and the pseudo-random logic of microcontrollers.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32"],concept:"The Digital Dice project focuses on 'randomSeed' and 'random' functions. It teaches how to map a single input (button press) to multiple outputs (LED patterns) to represent dice faces.",working_principle:`1. 7 LEDs are arranged in a dice pattern and set as outputs.
2. A push button is set as an input with a pull-up resistor.
3. Upon button press, a random number between 1 and 6 is generated.
4. A 'switch-case' statement validates the number and lights up the corresponding LEDs.
5. An animation effect is added to simulate rolling.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Output LED",pinName:"7x LED Anodes",mcuPin:"D2 to D8",direction:"Output",voltage:"5V",description:"Output Group"},{module:"1x Push Button",pinName:"Push Button Pin 1",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Trigger"},{module:"1x Push Button",pinName:"Push Button Pin 2",mcuPin:"GND",direction:"Power",voltage:"5V",description:"To Ground"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Probability Engine: Digital Dice
// Compatible: Arduino UNO | ESP32 | ESP8266

const int buttonPin = 9;
const int leds[] = {2, 3, 4, 5, 6, 7, 8};

void setup() {
  randomSeed(analogRead(0)); // Seed from noise on floating pin
  pinMode(buttonPin, INPUT_PULLUP);
  for(int i=0; i<7; i++) pinMode(leds[i], OUTPUT);
}

void loop() {
  if (digitalRead(buttonPin) == LOW) {
    // Visual shuffling effect
    for(int i=0; i<10; i++) {
      clearLeds();
      digitalWrite(leds[random(0,7)], HIGH);
      delay(50 + (i * 10));
    }
    
    int diceValue = random(1, 7);
    displayDice(diceValue);
    while(digitalRead(buttonPin) == LOW); // Wait for release
  }
}

void clearLeds() {
  for(int i=0; i<7; i++) digitalWrite(leds[i], LOW);
}

void displayDice(int val) {
  clearLeds();
  // Logic to map value to specific LED patterns
  for(int i=0; i<val; i++) digitalWrite(leds[i], HIGH);
}`,advantages:"Interactive, teaches array-like logic, durable compared to mechanical dice.",disadvantages:"High component count (7 LEDs).",usage:"Arrange LEDs in a 3x3 grid pattern and connect to Pins 2-8.",components:["1x Microcontroller","7x LEDs","7x 220 Ohm Resistors","1x Push Button"],circuit_diagram:"DHT11 Sensor: Pin 1 (VCC) -> 3.3V-5V, Pin 2 (Data) -> D2/GPIO 4, Pin 4 (GND) -> GND. Use a 10k resistor between VCC and Data if using raw sensor.",author_name:"NISHANTH",status:"Published",industrial_use:"Pseudo-random generator logic for cryptographic testing and Monte Carlo simulations.",bom_cost:"$9"},{id:7,title:"RGB Spectrum: Color Mixing Protocol",level:"Beginner",description:"Unlock the visual spectrum by controlling a single multi-color LED through three independent PWM channels.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"Additive color theory. By mixing Red, Green, and Blue light at different intensities, we can create any color in the visible spectrum. This project uses 3 PWM pins to control these intensities.",working_principle:`1. Define pins for R, G, and B as outputs.
2. In a loop, vary the duty cycle of each pin using 'analogWrite()'.
3. Cycling through combinations (e.g., R=255, G=0, B=255 for Purple).
4. A common cathode RGB LED is typically used.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"Common",pinName:"Common Cathode",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Ground"},{module:"Red",pinName:"Red Pin",mcuPin:"D9",direction:"Output",voltage:"5V",description:"PWM Channel 1"},{module:"Green",pinName:"Green Pin",mcuPin:"D10",direction:"Output",voltage:"5V",description:"PWM Channel 2"},{module:"Blue",pinName:"Blue Pin",mcuPin:"D11",direction:"Output",voltage:"5V",description:"PWM Channel 3"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RGB Chroma: Color Space Control
// Compatible: Arduino UNO (9,10,11) | ESP32 (LEDC)

struct Color { int r; int g; int b; };

void setup() {
  pinMode(9, OUTPUT); pinMode(10, OUTPUT); pinMode(11, OUTPUT);
}

void loop() {
  // Smooth transition sequence
  fadeColor(255, 0, 0, 0, 255, 0); // Red to Green
  fadeColor(0, 255, 0, 0, 0, 255); // Green to Blue
  fadeColor(0, 0, 255, 255, 0, 0); // Blue to Red
}

void fadeColor(int r1, int g1, int b1, int r2, int g2, int b2) {
  for (int i = 0; i <= 255; i++) {
    analogWrite(9, map(i, 0, 255, r1, r2));
    analogWrite(10, map(i, 0, 255, g1, g2));
    analogWrite(11, map(i, 0, 255, b1, b2));
    delay(10);
  }
}`,advantages:"Thousands of colors from one LED, compact, widely used in HMIs.",disadvantages:"Requires careful resistor selection to balance color brightness.",usage:"Connect R, G, B pins to 220 ohm resistors then to the LED anodes.",components:["1x Arduino/ESP32","1x RGB LED (Common Cathode)","3x 220 Ohm Resistors","Breadboard"],circuit_diagram:"RGB LED: Common Cathode -> GND. Red Anode -> D3, Green Anode -> D5, Blue Anode -> D6. Use resistors for each color channel.",author_name:"NISHANTH",status:"Published",industrial_use:"Calibration tool for visual color sensors and spectrometer testing rigs.",bom_cost:"$6"},{id:8,title:"Autonomous Infrastructure: Smart Night Lamp",level:"Beginner",description:"Create an automated lighting system that activates based on environmental illumination levels using LDR sensors.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Introduction to analog sensors. An LDR (Light Dependent Resistor) changes its resistance based on light exposure. We use this in a voltage divider circuit to read ambient light as an analog value.",working_principle:`1. The LDR is connected to an analog input (A0).
2. The microcontroller reads values (0-1023).
3. When light level drops below a calibrated threshold (darkness),
4. The microcontroller sets a digital output pin HIGH to turn on a lamp.
5. Hysteresis logic is added to prevent flickering during sunset.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Photoresistor",pinName:"LDR Junction",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Voltage Divider Input"},{module:"Lamp",pinName:"Lamp Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Load Output"},{module:"Lamp",pinName:"Lamp Cathode (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Common Ground"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}]},code:`// LDR Auditor: Hysteresis Logic
// Compatible: All Boards

const int ldrPin = A0;
const int relayPin = 13;
const int threshold = 400;
const int hysteresis = 50;

bool lightsOn = false;

void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightLevel = analogRead(ldrPin);
  
  // Using Hysteresis to prevent flickering at the threshold
  if (lightLevel < (threshold - hysteresis)) {
    lightsOn = true;
  } else if (lightLevel > (threshold + hysteresis)) {
    lightsOn = false;
  }
  
  digitalWrite(relayPin, lightsOn ? HIGH : LOW);
  delay(100);
}`,advantages:"Energy saving, fully autonomous, easy calibration.",disadvantages:"LDR is sensitive to artificial light interference.",usage:"Connect LDR and 10k resistor in series. Connect junction to A0.",components:["1x Microcontroller","1x LDR (Photoresistor)","1x 10k Resistor","1x LED/Relay"],circuit_diagram:"LDR -> A0/GPIO 32, 10k Resistor -> A0 to GND (Voltage Divider). Relay VCC -> 5V, GND -> GND, IN -> D13/GPIO 27.",author_name:"NISHANTH",status:"Published",industrial_use:"Automated security lighting and light-harvesting solar tracker optimization.",bom_cost:"$7"},{id:9,title:"Environment Insight: Light intensity Monitor",level:"Beginner",description:"Visualize real-time environmental data by mapping analog sensor readings to human-readable scales.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Data acquisition and visualization. This project focuses on refining raw sensor data and presenting it via the Serial terminal or a visual scale (like a progress bar).",working_principle:`1. Analog voltage is read from the LDR circuit.
2. Raw values (0-1023) are converted to percentages (0-100%).
3. Data is formatted into strings and sent via UART (Serial).
4. A visual indicator on a breadboard (LED bar graph) can also be used.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Photoresistor",pinName:"LDR Sensor Pin 1",mcuPin:"A0",direction:"Input",voltage:"5V",description:"To ADC"},{module:"LDR Photoresistor",pinName:"LDR Sensor Pin 2",mcuPin:"GND",direction:"Input",voltage:"5V",description:"Via 10k Resistor"},{module:"Serial",pinName:"Serial Port",mcuPin:"USB",direction:"Output",voltage:"5V",description:"Standard UART"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}]},code:`// Environment Insight: Modular Data Plotting
// Compatible: All Analog Inputs

unsigned long prevLog = 0;
const int logInterval = 500;

void setup() {
  Serial.begin(115200);
}

void loop() {
  if (millis() - prevLog >= logInterval) {
    int raw = analogRead(A0);
    float voltage = raw * (5.0 / 1023.0);
    
    // CSV Format for Serial Plotter/Logger
    Serial.print("Raw:");    Serial.print(raw);
    Serial.print(",Volts:"); Serial.println(voltage);
    
    prevLog = millis();
  }
}`,advantages:"Precise data tracking, essential for multi-sensor IoT nodes.",disadvantages:"Requires a computer connection to view data without dedicated display.",usage:"Open the Serial Monitor (Tools -> Serial Monitor) at 9600 baud to see readings.",components:["1x Microcontroller","1x LDR","1x 10k Resistor","Jumper Wires"],circuit_diagram:"LDR Setup: 5V connected to LDR, LDR connected to A0, A0 connected to GND through a 10k ohm resistor to create a voltage divider.",author_name:"NISHANTH",status:"Published",industrial_use:"Precision light-exposure monitoring for pharmaceutical lab environments.",bom_cost:"$4"},{id:10,title:"Safety Protocols: Smart Fire Alarm",level:"Beginner",description:"Build a critical safety subsystem that uses IR detection to identify the presence of fire and triggers immediate alerts.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Flame sensors typically use an IR receiver to detect the specific light radiation emitted by a fire. This project integrates this critical detection with audible and visual alarm signals.",working_principle:`1. A Flame Sensor is connected as a digital or analog input.
2. The code constantly polls the sensor for 'FLAME DETECTED' signal.
3. If detected, it triggers a PWM tone for the buzzer and flashes a Red LED.
4. It includes a reset condition once the flame is no longer detected.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC (Sensor)",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Module Power"},{module:"System Ground",pinName:"GND (Sensor)",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Flame",pinName:"Flame (D0)",mcuPin:"D7",direction:"Input",voltage:"5V",description:"Digital Detection"},{module:"Active Buzzer",pinName:"Buzzer (+)",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Alarm Output"},{module:"Output LED",pinName:"Red LED Anode",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Visual Alert"},{module:"Common",pinName:"Common Cathode",mcuPin:"GND",direction:"Output",voltage:"5V",description:"All Gound Sides"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Flame Guard: Safety Critical Logic
// Compatible: Arduino | ESP32 (ADC1)

const int flamePin = 7;
const int buzzerPin = 8;

void setup() {
  pinMode(flamePin, INPUT);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  bool fireDetected = !digitalRead(flamePin); // Active LOW sensor
  
  if (fireDetected) {
    // Pulsed alarm indicator
    static unsigned long lastToggle = 0;
    if (millis() - lastToggle > 200) {
       static bool toneState = false;
       tone(buzzerPin, toneState ? 2000 : 1000);
       toneState = !toneState;
       lastToggle = millis();
    }
  } else {
    noTone(buzzerPin);
  }
}`,advantages:"Rapid detection speed, robust safety application.",disadvantages:"Susceptible to sunlight IR (false positives in direct sun).",usage:"Adjust the sensitivity potentiometer on the flame sensor module for best results.",components:["1x Microcontroller","1x Flame Sensor Module","1x Piezo Buzzer","1x LED"],circuit_diagram:"Active Buzzer (+) -> D8 (Arduino) or GPIO 13 (ESP32), (-) -> GND. Use a transistor driver if the current exceeds 20mA.",author_name:"NISHANTH",status:"Published",industrial_use:"Early-warning system for electrical fire detection in localized control gear.",bom_cost:"$10"},{id:11,title:"Precision Telemetry: LCD Thermometer",level:"Beginner",description:"Interface a Liquid Crystal Display (LCD) to visualize real-time environmental data with high precision and low latency.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Digital data visualization. This project introduces the LiquidCrystal I2C protocol, reducing the required wiring from 16 pins to just 4. It teaches how to format floating-point sensor data for human-readable interfaces.",working_principle:`1. Initialize the I2C bus at 100KHz.
2. Interface an LM35 or DHT sensor for temperature acquisition.
3. Clear the display buffer and set the cursor position.
4. Send ASCII-encoded strings to the LCD controller.
5. Implement a 2000ms refresh rate to prevent data flickering.`,pin_config:{arduino:[{module:"System Power",pinName:"LCD VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Power"},{module:"System Ground",pinName:"LCD GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"I2C LCD Display",pinName:"LCD SDA",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"I2C Data"},{module:"I2C LCD Display",pinName:"LCD SCL",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"I2C Clock"},{module:"System Power",pinName:"Sensor VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"LM35/DHT Power"},{module:"Sensor",pinName:"Sensor SIG",mcuPin:"A0",direction:"Input",voltage:"5V",description:"Analog Data"},{module:"System Ground",pinName:"Sensor GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Signal Return"}],esp32:[{module:"System Power",pinName:"LCD VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Level check required"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// HMI Pro: LCD Telemetry Hub
// Compatible: I2C LCD 16x2 / 20x4

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
byte degree[8] = { 0b00110, 0b01001, 0b01001, 0b00110, 0b00000, 0b00000, 0b00000, 0b00000 };

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.createChar(0, degree);
  lcd.setCursor(0, 0);
  lcd.print("SYSTEM STABLE");
}

void loop() {
  float raw = analogRead(A0);
  float temp = (raw * 5.0 * 100.0) / 1024.0; // Precise LM35 Scaling
  
  lcd.setCursor(0, 1);
  lcd.print("TEMP: ");
  lcd.print(temp, 1);
  lcd.write(0); // Custom degree symbol
  lcd.print("C  ");
  delay(1000);
}`,advantages:"Compact wiring, professional display output, customizable UI.",disadvantages:"Requires I2C library; viewing angle is hardware-dependent.",usage:"Connect I2C pins, adjust contrast pot on the module, and upload.",components:["1x Microcontroller","1x 16x2 LCD with I2C Backboard","1x Temperature Sensor","Jumper Wires"],circuit_diagram:"HC-SR04: VCC -> 5V, GND -> GND, Trig -> D11, Echo -> D12. Servo: Signal -> D9. Assemble on a rotating mount for radar effect.",author_name:"NISHANTH",status:"Published",industrial_use:"Local diagnostic displays for HVAC controllers and server rack monitors.",bom_cost:"$12"},{id:12,title:"Edge Notification: Smart Doorbell",level:"Beginner",description:"Implement a high-priority alert system using Interrupt Service Routines (ISRs) for instantaneous user feedback.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Interrupt-driven logic. Instead of constant polling, the microcontroller enters a high-priority state only when the bell is pressed, ensuring zero latency and allowing for power-saving 'sleep' modes.",working_principle:`1. Set the button pin as an INPUT_PULLUP.
2. Attach an interrupt to the pin on the FALLING edge.
3. Upon press, execute the ISR to set a global trigger flag.
4. The main loop detects the flag and initiates the audio-visual sequence.
5. Implement soft-debounce to prevent false triggers.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"System Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Return"},{module:"Bell",pinName:"Bell Switch Pin 1",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt (Int0)"},{module:"Bell",pinName:"Bell Switch Pin 2",mcuPin:"GND",direction:"Power",voltage:"5V",description:"To Ground"},{module:"Active Buzzer",pinName:"Piezo Buzzer (+)",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Alert Output"},{module:"Active Buzzer",pinName:"Buzzer (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Ground"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"System Power"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Interrupt-Driven HMI: Smart Doorbell
// Compatible: Arduino UNO (2/3) | ESP32 (Any GPIO)

volatile bool eventTriggered = false;
unsigned long lastInterruptTime = 0;

void IRAM_ATTR doorbellISR() {
  unsigned long interruptTime = millis();
  if (interruptTime - lastInterruptTime > 200) { // Software Debounce
    eventTriggered = true;
  }
  lastInterruptTime = interruptTime;
}

void setup() {
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), doorbellISR, FALLING);
  pinMode(8, OUTPUT);
}

void loop() {
  if (eventTriggered) {
    tone(8, 2000, 500); // 500ms chime
    eventTriggered = false;
  }
}`,advantages:"Zero latency response, power efficient, clean code structure.",disadvantages:"ISR requires careful handling of shared variables (volatile keyword).",usage:"Press the button to trigger a high-frequency chime instantly.",components:["1x Arduino/ESP32","1x Push Button","1x Passive Buzzer","Jumper Wires"],circuit_diagram:"I2C 16x2 LCD: VCC -> 5V, GND -> GND, SDA -> A4 (Arduino) / GPIO 21 (ESP32), SCL -> A5 (Arduino) / GPIO 22 (ESP32).",author_name:"NISHANTH",status:"Published",industrial_use:"Used in emergency pull-cords for medical facilities and operator call buttons in factories.",bom_cost:"$6"},{id:13,title:"Acoustic Trigger: Digital Sound Switch",level:"Beginner",description:"Design an sound-activated control node by analyzing acoustic energy levels through a microphone transducer.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Signal threshold analysis. A microphone module converts sound waves into a variable voltage. By setting a digital comparator threshold, we create a switch that responds only to designated decibel levels (like a clap).",working_principle:`1. Provide 5V/3.3V power to the sound sensor module.
2. The module's onboard comparator identifies sound spikes.
3. Digital Output (D0) pulses LOW/HIGH when sound exceeds threshold.
4. Microcontroller toggles a flip-flop state upon detection.
5. Adjust the multi-turn potentiometer for sensitivity calibration.`,pin_config:{arduino:[{module:"System Power",pinName:"Module VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Power Supply"},{module:"System Ground",pinName:"Module GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Sound",pinName:"Sound Sensor (D0)",mcuPin:"D7",direction:"Input",voltage:"5V",description:"Trigger Input"},{module:"Output LED",pinName:"Relay/LED Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Load Switch"},{module:"System Ground",pinName:"Load GND (-)",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Return Path"}],esp32:[{module:"System Power",pinName:"Module VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Power Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Acoustic Node: Digital Clap Switch
// Compatible: All Boards

const int micPin = 7;
const int relayPin = 13;
bool loadState = false;
unsigned long lastTrigger = 0;

void setup() {
  pinMode(micPin, INPUT);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  // Using a lock-out timer for debouncing acoustic noise bursts
  if (digitalRead(micPin) == HIGH && (millis() - lastTrigger > 600)) {
    loadState = !loadState;
    digitalWrite(relayPin, loadState);
    lastTrigger = millis();
  }
}`,advantages:"Hands-free operation, adjustable sensitivity, low power idle.",disadvantages:"Prone to ambient noise interference without advanced filtering.",usage:"Adjust sensor sensitivity until the LED toggles only with a sharp clap.",components:["1x Microcontroller","1x Sound Sensor Module","1x 5V Relay Block","Jumper Wires"],circuit_diagram:"Matrix Keypad (4x4): Connect R1-R4 to D2-D5, C1-C4 to D6-D9. Solenoid Valve triggered via Relay on D10/GPIO 14.",author_name:"NISHANTH",status:"Published",industrial_use:"Touchless interface for sterile medical environments and sound-activated safety shut-offs.",bom_cost:"$8"},{id:14,title:"Proximity Sensing: IR Obstacle Detection",level:"Beginner",description:"Develop an automated obstacle avoidance system using infrared reflection and modulated signal detection.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Infrared backscatter. An IR LED emits light which reflects off nearby objects. An IR receiver (Photodiode) detects this reflection, creating a non-contact proximity sensor.",working_principle:`1. Emit 38KHz IR signal (modulated for sunlight immunity).
2. Monitor the receiver pin for signal reflection.
3. The sensor modules typically output LOW when an object is within 2-30cm range.
4. Trigger a collision avoidance protocol (alarm or motor stop).
5. Use black surfaces to test absorption and range calibration.`,pin_config:{arduino:[{module:"System Power",pinName:"Module VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Power Supply"},{module:"System Ground",pinName:"Module GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x IR Obstacle Module",pinName:"IR Sensor Out",mcuPin:"D7",direction:"Input",voltage:"5V",description:"Active LOW Input"},{module:"Status",pinName:"Status Alert Anode",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Collision LED"},{module:"Common",pinName:"Common Cathode",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Return"}],esp32:[{module:"System Power",pinName:"Module VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Rating"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Proximity Guard: Non-Blocking Detection
// Compatible: All Boards

const int sensorPin = 7;
const int alertPin = 8;

void setup() {
  pinMode(sensorPin, INPUT);
  pinMode(alertPin, OUTPUT);
}

void loop() {
  // IR sensor is Active LOW (LOW when obstacle detected)
  bool isBlocked = (digitalRead(sensorPin) == LOW);
  digitalWrite(alertPin, isBlocked ? HIGH : LOW);
}`,advantages:"Low cost, small form factor, high speed detection.",disadvantages:"Range limited to ~30cm; accuracy depends on object color/material.",usage:"Avoid direct sunlight on sensor; adjust range screw for desired proximity.",components:["1x Microcontroller","1x IR Obstacle Module","1x Buzzer/LED","Jumper Wires"],circuit_diagram:"Flame Sensor: VCC -> 5V, GND -> GND, AO -> A0/GPIO 34. Buzzer (+) -> D8, (-) -> GND. Place sensor near target protection area.",author_name:"NISHANTH",status:"Published",industrial_use:"Object counting on fast-moving conveyor belts and proximity safety in handheld power tools.",bom_cost:"$5"},{id:15,title:"Capacitive HMI: Touch Sensor Lamp",level:"Beginner",description:"Construct a solid-state Human-Machine Interface (HMI) that replaces mechanical switches with capacitive touch tech.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32","Capacitive Sensing"],concept:"Capacitive sensing measures the change in electrical charge when a human finger (conductive) approaches the sensor pad. It creates a seamless, wear-proof switching mechanism.",working_principle:`1. Charge the conductive pad to a specific voltage.
2. Use 'touchRead' (ESP32) or a library (Arduino) to monitor discharge time.
3. Discharge time increases when a finger is present due to added capacitance.
4. Microcontroller interprets this timing change as a 'Touch Event'.
5. Implement a latching state to toggle the load (on/off).`,pin_config:{arduino:[{module:"System Power",pinName:"Module VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Power Rail"},{module:"System Ground",pinName:"Module GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"TTP223",pinName:"TTP223 Out",mcuPin:"D4",direction:"Output",voltage:"5V",description:"Digital Touch Input"},{module:"Output LED",pinName:"LED Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Output Load"},{module:"Output LED",pinName:"LED Cathode (-)",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Return"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Capacitive HMI: Haptic Toggle Logic
// Compatible: All Boards | ESP32 touchRead option

const int touchPin = 4;
const int loadPin = 13;
bool state = false;

void setup() {
  pinMode(touchPin, INPUT);
  pinMode(loadPin, OUTPUT);
}

void loop() {
  if (digitalRead(touchPin) == HIGH) {
    state = !state;
    digitalWrite(loadPin, state);
    
    // Feedback Delay + Wait for release for solid HMI experience
    delay(100); 
    while(digitalRead(touchPin) == HIGH);
    delay(100);
  }
}`,advantages:"No moving parts (durable), aesthetic design, through-material sensing (glass/plastic).",disadvantages:"Affected by moisture/high humidity; requires careful HMI design.",usage:"Connect the TTP223 module; it works through wooden or plastic surfaces up to 3mm.",components:["1x Microcontroller","1x TTP223 Touch Module","1x High Power LED","Jumper Wires"],circuit_diagram:"Water Level Sensor: (+) -> 5V, (-) -> GND, (S) -> A0/GPIO 34. Connect Alert LED to D13 with 220-ohm resistor.",author_name:"NISHANTH",status:"Published",industrial_use:"Ruggedized touch panels for heavy machinery and sterile interfaces in food processing.",bom_cost:"$4"},{id:16,title:"Industrial Hazard Audit: Gas Leakage System",level:"Beginner",description:"Deploy an industrial-grade gas detection node capable of identifying hazardous LPG, Butane, and Smoke concentrations.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Analog Sensing"],concept:"Chemical sensing and calibration. The MQ-2 sensor uses a heating element to detect change in conductivity on a tin dioxide layer when combustible gas particles are present. It requires a preheating phase for stable readings.",working_principle:`1. Initialize the sensor heating element (requires 24h for full burn-in, 60s for runtime warmup).
2. Acquire analog voltage representing gas concentration (0-5V).
3. Map voltage to PPM (Parts Per Million) using the sensor's logarithmic sensitivity curve.
4. Trigger an audible alarm and visual red alert if concentration exceeds the safe threshold (e.g., 200 PPM).
5. Implement a digital safety interlock for emergency shutdowns.`,pin_config:{arduino:[{module:"System Power",pinName:"MQ-2 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"High Current Rail"},{module:"System Ground",pinName:"MQ-2 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x MQ-2 Gas Sensor Module",pinName:"MQ-2 Analog Out",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Concentration Level"},{module:"Active Buzzer",pinName:"Buzzer (+)",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Audio Alarm"},{module:"Active Buzzer",pinName:"Buzzer (-)",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Return"}],esp32:[{module:"System Power",pinName:"MQ-2 VCC",mcuPin:"5V (VIN)",direction:"Power",voltage:"3.3V",description:"Requires 5V for Heater"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Industrial Gas Sentinel: Pre-Heat Protocol
// Compatible: All MQ Sensors

const int gasPin = A0;
const int alarmPin = 8;
const int threshold = 400;

void setup() {
  pinMode(alarmPin, OUTPUT);
  Serial.begin(115200);
  
  // Industrial pre-heat feedback
  for(int i=20; i>0; i--) {
    Serial.print("Sensor Warmup: "); Serial.print(i); Serial.println("s");
    delay(1000);
  }
  Serial.println("System Online");
}

void loop() {
  int gasLevel = analogRead(gasPin);
  if (gasLevel > threshold) {
    digitalWrite(alarmPin, HIGH); // ALARM TRIGGERED
  } else {
    digitalWrite(alarmPin, LOW);
  }
  delay(200);
}`,advantages:"Reliable chemical detection, long sensor life, adjustable sensitivity.",disadvantages:"High power consumption (~800mW for heater); requires manual calibration.",usage:"Allow 1 minute for the sensor to heat up before trusting readings. Test with a lighter's gas (don't ignite).",components:["1x Microcontroller","1x MQ-2 Gas Sensor Module","1x High-Decibel Buzzer","Jumper Wires"],circuit_diagram:"IR Receiver: Pin 1 (Out) -> D11, Pin 2 (GND) -> GND, Pin 3 (VCC) -> 5V. Multiple LEDs connected to D2, D3, and D4.",author_name:"NISHANTH",status:"Published",industrial_use:"Critical gas leakage detection in commercial kitchens and boiler rooms.",bom_cost:"$15"},{id:17,title:"Hydro-Sensing Weather Terminal: Rain Alert",level:"Beginner",description:"Develop a localized weather station node that detects precipitation and manages sensor longevity through power management.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Electrolytic corrosion avoidance. Rain sensors use a series of conductive tracks. If power is constantly applied in wet conditions, the tracks will corrode. This project teaches how to use a digital pin to 'gate' power only when taking a measurement.",working_principle:`1. Connect the sensor's VCC to a digital pin on the microcontroller.
2. In the code, set the pin HIGH to power the sensor.
3. Read the moisture level through an analog input (A0).
4. Set the power pin LOW to stop current flow and prevent oxidation.
5. Trigger an alert if the moisture level exceeds 10% (Precipitation detect).`,pin_config:{arduino:[{module:"System Power",pinName:"Sensor VCC Control",mcuPin:"D4",direction:"Power",voltage:"5V",description:"Gated Power Output"},{module:"System Ground",pinName:"Sensor GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Sensor",pinName:"Sensor SIG",mcuPin:"A0",direction:"Input",voltage:"5V",description:"Analog Moisture Level"},{module:"Output LED",pinName:"Rain LED Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Visual alert"},{module:"Common",pinName:"Common Cathode",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Return"}],esp32:[{module:"Power",pinName:"Power Gate Pin",mcuPin:"GPIO 23",direction:"Output",voltage:"3.3V",description:"Software VCC"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Corrosion-Free Hydro Hub
// Compatible: Rain Sensors | Soil Moisture

const int powerGate = 4;
const int sensorPin = A0;
const int alertPin = 13;

unsigned long lastSample = 0;
const int interval = 5000;

void setup() {
  pinMode(powerGate, OUTPUT);
  pinMode(alertPin, OUTPUT);
}

void loop() {
  if (millis() - lastSample >= interval) {
    digitalWrite(powerGate, HIGH); // Gate Power ON
    delay(20);                    // Minimal stabilization delay
    int rainValue = analogRead(sensorPin);
    digitalWrite(powerGate, LOW);  // Gate Power OFF (Prevents Electrolysis)
    
    digitalWrite(alertPin, (rainValue < 800) ? HIGH : LOW);
    lastSample = millis();
  }
}`,advantages:"Significantly increases sensor lifespan, low power, accurate.",disadvantages:"Sensor surface requires periodic cleaning to remove dust/residue.",usage:"Install at a 45-degree angle to allow water to run off after the rain stops.",components:["1x Arduino Uno","1x Rain Sensor Module","1x High-Brightness LED","Jumper Wires"],circuit_diagram:"Soil Moisture: VCC -> 5V, GND -> GND, AO -> A0/GPIO 34. Water Pump -> Relay (Normally Open), Relay Control -> D7/GPIO 26.",author_name:"NISHANTH",status:"Published",industrial_use:"Automated greenhouse closure systems and smart wipers in automotive HMI.",bom_cost:"$7"},{id:18,title:"Ultrasonic Rangefinder & Spatial Analysis",level:"Beginner",description:"Utilize Time-of-Flight (ToF) calculations with ultrasonic transducers to measure distance with centimeter accuracy.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32","Ultrasonic"],concept:"Acoustic telemetry. By measuring the time it takes for an ultrasonic 'ping' to return to the sensor, we can calculate distance using the constant speed of sound (~343m/s). This is the foundation of robotic vision and navigation.",working_principle:`1. Trigger an ultrasonic pulse by setting the 'Trig' pin HIGH for 10us.
2. The sensor emits an 8-cycle 40KHz sound wave.
3. The 'Echo' pin goes HIGH until the reflected wave returns.
4. Microcontroller measures the pulse duration using 'pulseIn()'.
5. Calculate distance: Distance = (Time * 0.0343) / 2.`,pin_config:{arduino:[{module:"System Power",pinName:"HC-SR04 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Sensor Power"},{module:"System Ground",pinName:"HC-SR04 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"HC-SR04 Ultrasonic",pinName:"Trig Pin",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Trigger Pulse"},{module:"HC-SR04 Ultrasonic",pinName:"Echo Pin",mcuPin:"D10",direction:"Output",voltage:"5V",description:"Input Capture"}],esp32:[{module:"System Power",pinName:"HC-SR04 VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Module Rating"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Precision SONAR: Spatial Auditor
// Compatible: HC-SR04 | HY-SRF05

const int trig = 9, echo = 10;

void setup() {
  pinMode(trig, OUTPUT); pinMode(echo, INPUT);
  Serial.begin(115200);
}

void loop() {
  static unsigned long lastPing = 0;
  if (millis() - lastPing >= 60) {
    digitalWrite(trig, LOW); delayMicroseconds(2);
    digitalWrite(trig, HIGH); delayMicroseconds(10);
    digitalWrite(trig, LOW);
    
    long duration = pulseIn(echo, HIGH, 30000); // 30ms timeout
    int distance = duration * 0.034 / 2;
    
    if (distance > 0 && distance < 400) {
      Serial.print("D:"); Serial.print(distance); Serial.println("cm");
    }
    lastPing = millis();
  }
}`,advantages:"Non-contact measurement, high resolution (1cm), cost-effective.",disadvantages:"Struggles with sound-absorbing materials (foam, fabric); range limited to ~4m.",usage:"Keep the sensor perpendicular to the target object for maximum accuracy.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic Sensor","1x I2C LCD (Optional)","Jumper Wires"],circuit_diagram:"HC-05 Bluetooth: VCC -> 5V, GND -> GND, TX -> RX, RX -> TX (use voltage divider for RX). LED -> D13.",author_name:"NISHANTH",status:"Published",industrial_use:"Liquid level measurement in non-corrosive tanks and collision avoidance for AGVs.",bom_cost:"$9"},{id:19,title:"Precision Fluid Dynamics: Tank Monitor",level:"Beginner",description:"Architect a tiered fluid monitoring system to track water levels in industrial silos using discrete sensing nodes.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32","Hydro-logic"],concept:"Discrete water sensing relies on the conductivity of water. By placing probes at different heights, we create a multi-bit digital representation of the tank's fill level (Low, Medium, High).",working_principle:`1. Provide a common GND probe at the bottom of the tank.
2. Place 'sensing' probes at 25%, 50%, and 75% height levels.
3. The microcontroller reads the digital state of each probe.
4. When water touches a probe, the circuit completes, pulling the input pin to a known state.
5. Use the data to trigger refilling or overflow protection alerts.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Button/Logic Power"},{module:"Tank",pinName:"Tank Base Probe",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Common Ground"},{module:"Level",pinName:"Level Probes 1-3",mcuPin:"D2, D3, D4",direction:"Output",voltage:"5V",description:"Input (Pullup)"},{module:"Active Buzzer",pinName:"Buzzer (+)",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Overflow Alarm"},{module:"Active Buzzer",pinName:"Buzzer (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Ground"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Logic Reference"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Tiered Tank Auditor: Discrete Sensing
// Compatible: Multilevel Probe Arrays

const int pins[] = {2, 3, 4}; // Low, Mid, High

void setup() {
  for(int i=0; i<3; i++) pinMode(pins[i], INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Level: ");
  if (digitalRead(4) == LOW) Serial.println("CRITICAL HIGH");
  else if (digitalRead(3) == LOW) Serial.println("MEDIUM");
  else if (digitalRead(2) == LOW) Serial.println("LOW");
  else Serial.println("EMPTY/DRY");
  
  delay(1000);
}`,advantages:"Extremely reliable, zero moving parts, easy to troubleshoot.",disadvantages:"Potential for probe electrolysis if using DC current; requires stainless steel for longevity.",usage:"Ensure probes are made of non-corrosive material like food-grade stainless steel.",components:["1x Microcontroller","3x Stainless Steel Probes","1x Buzzer","Jumper Wires"],circuit_diagram:"MFRC522: VCC -> 3.3V, RST -> D9, GND -> GND, MISO -> D12, MOSI -> D11, SCK -> D13, SDA/SS -> D10. Servo -> D6.",author_name:"NISHANTH",status:"Published",industrial_use:"Water management in municipal storage tanks and cooling tower monitoring.",bom_cost:"$14"},{id:20,title:"Intelligent Hydration: Closed-Loop Pump",level:"Beginner",description:"Construct a fully automated fluid transfer system that balances tank levels using feedback-loop control logic.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Automation"],concept:"Closed-loop feedback systems. The microcontroller monitors a sensor (input) and acts on a pump (output) to maintain a specific physical state (full tank). It introduces relay isolation for high-voltage motor control.",working_principle:`1. Constantly monitor the moisture or water level sensor.
2. If level falls below threshold (Empty), the microcontroller triggers a Relay.
3. The Relay starts the water pump (isolated high-power circuit).
4. Once the 'Full' probe is triggered, the microcontroller deactivates the relay.
5. Implement hysteresis (delay) to prevent rapid motor cycling (chatter).`,pin_config:{arduino:[{module:"Relay Module",pinName:"Relay Signal",mcuPin:"D7",direction:"Output",voltage:"5V",description:"Pump Controller"},{module:"Level",pinName:"Level Sensor",mcuPin:"A0",direction:"Input",voltage:"5V",description:"Feedback In"},{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Primary Supply"}],esp32:[{module:"Relay Module",pinName:"Relay In",mcuPin:"GPIO 4",direction:"Output",voltage:"3.3V",description:"Control Signal"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Hysteresis Logic: Intelligent Pump Node
// Compatible: Relay-Isolated Pumps

const int pumpRelay = 7;
const int sensorPin = A0;

void setup() {
  pinMode(pumpRelay, OUTPUT);
  digitalWrite(pumpRelay, LOW); // Start OFF
}

void loop() {
  static unsigned long lastCheck = 0;
  if (millis() - lastCheck > 1000) {
    int level = analogRead(sensorPin);
    
    // Using Hysteresis (900/200) to prevent motor chatter
    if (level > 900) digitalWrite(pumpRelay, HIGH); // START PUMP
    else if (level < 200) digitalWrite(pumpRelay, LOW);  // STOP PUMP
    
    lastCheck = millis();
  }
}`,advantages:"End-to-end automation, prevents tank dry-running, high-power isolation.",disadvantages:"Requires careful plumbing to prevent leaks; relay maintenance needed for long-term use.",usage:"Use a 12V DC pump powered through the relay contacts for safety.",components:["1x Arduino","1x 5V Relay Module","1x 12V Water Pump","1x Level Sensor"],circuit_diagram:"PIR Sensor: VCC -> 5V, GND -> GND, OUT -> D2 (Arduino) / GPIO 27 (ESP32). Alert Buzzer -> D13/GPIO 26.",author_name:"NISHANTH",status:"Published",industrial_use:"Automated hydroponic fertigation systems and smart home sump pump controllers.",bom_cost:"$28"},{id:21,title:"Biometric Guard: Fingerprint Access Control",level:"Beginner",description:"Implement a high-security biometric authentication node using optical fingerprint sensors and secure template storage.",category:"Security & Biometrics",estimatedTime:"60 mins",tech:["Arduino","ESP32","UART"],concept:"Minutiae-based matching. The AS608 sensor captures an image of the fingerprint, extracts unique features (minutiae), and converts them into a mathematical template. This template is then compared against locally stored data for authentication.",working_principle:`1. Initialize the optical sensor via UART communication.
2. In Enrollment Mode, capture multiple scans of a finger to create a stable ID.
3. In Verification Mode, the sensor captures a live scan and returns the high-confidence match ID (0-127).
4. The microcontroller triggers a solenoid lock or electronic relay for successful matches.
5. Implement an 'Admin Override' logic using a secure physical button.`,pin_config:{arduino:[{module:"System Power",pinName:"Sensor VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Supply"},{module:"System Ground",pinName:"Sensor GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Sensor",pinName:"Sensor TX",mcuPin:"D2 (RX)",direction:"Input",voltage:"5V",description:"SoftwareSerial"},{module:"Sensor",pinName:"Sensor RX",mcuPin:"D3 (TX)",direction:"Input",voltage:"5V",description:"SoftwareSerial"},{module:"Relay Module",pinName:"Solenoid Relay In",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Active HIGH"},{module:"System Ground",pinName:"Relay GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Return"}],esp32:[{module:"System Power",pinName:"Sensor VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Module Rating"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// BioGuard Professional: Secure Biometric Node
// Compatible: Arduino (SoftwareSerial) | ESP32 (HardwareSerial)

#include <Adafruit_Fingerprint.h>

#if defined(ESP32)
  HardwareSerial mySerial(2);
#else
  #include <SoftwareSerial.h>
  SoftwareSerial mySerial(2, 3);
#endif

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

void setup() {
  Serial.begin(115200);
  #if defined(ESP32)
    mySerial.begin(57600, SERIAL_8N1, 16, 17);
  #else
    mySerial.begin(57600);
  #endif
  
  if (finger.verifyPassword()) Serial.println("Sensor Ready");
}

void loop() {
  static unsigned long lastScan = 0;
  if (millis() - lastScan > 500) {
    int result = getFingerprintID();
    if (result > 0) {
      Serial.print("ID Match: "); Serial.println(result);
      digitalWrite(8, HIGH); delay(2000); digitalWrite(8, LOW);
    }
    lastScan = millis();
  }
}`,advantages:"High security, non-replicable biometric data, fast authentication (<1s).",disadvantages:"Sensitivity to wet/dirty fingers; templates limited to storage capacity.",usage:"Use the 'Enrollment' sketch first to save your fingerprint template to the sensor's flash memory.",components:["1x Microcontroller","1x AS608 Fingerprint Sensor","1x 5V/12V Solenoid","1x Relay Module"],circuit_diagram:"Sensor TX -> D2 | Sensor RX -> D3 | Sensor VCC -> 5V | Relay In -> D8",author_name:"NISHANTH",status:"Published",industrial_use:"Server room access control and high-value asset storage lockers.",bom_cost:"$35"},{id:22,title:"RFID Identity Terminal: Contactless Access",level:"Beginner",description:"Deploy a contactless identification system using 13.56 MHz Radio Frequency Identification (RFID) and SPI protocols.",category:"Security & Connectivity",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Electromagnetic Induction. The MFRC522 reader generates a high-frequency field. When a passive tag enters this field, it scavenges power via induction to transmit its unique UID (Unique Identifier) wirelessly.",working_principle:`1. Establish SPI communication between the MCU and the RFID module.
2. The reader constantly polls for tags in range.
3. Upon detection, the 4 or 7-byte UID is read into the buffer.
4. Compare the UID against a 'Whitelist' stored in the MCU's EEPROM/Flash.
5. Log the entry/exit events and toggle a physical barrier or status indicator.`,pin_config:{arduino:[{module:"System Power",pinName:"RC522 VCC",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"DO NOT USE 5V"},{module:"System Ground",pinName:"RC522 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SDA",pinName:"SDA (SS)",mcuPin:"D10",direction:"Output",voltage:"5V",description:"SPI Slave Select"},{module:"SCK",pinName:"SCK",mcuPin:"D13",direction:"Output",voltage:"5V",description:"SPI Clock"},{module:"MOSI",pinName:"MOSI",mcuPin:"D11",direction:"Output",voltage:"5V",description:"SPI Data Out"},{module:"MFRC522 RFID",pinName:"MISO",mcuPin:"D12",direction:"Output",voltage:"5V",description:"SPI Data In"},{module:"MFRC522 RFID",pinName:"RST",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Reset Pin"}],esp32:[{module:"System Power",pinName:"RC522 VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Standard 3.3V"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RFID Gatekeeper: Secure SPI Access
// Compatible: RC522 | RFID Tags

#include <MFRC522.h>
#define SS_PIN 10 
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(115200);
  SPI.begin(); 
  mfrc522.PCD_Init();
}

void loop() {
  // Non-blocking detection
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    String uid = "";
    for (byte i = 0; i < mfrc522.uid.size; i++) {
       uid += String(mfrc522.uid.uidByte[i], HEX);
    }
    Serial.print("UID Identified: "); Serial.println(uid);
    mfrc522.PICC_HaltA(); // Prevents multiple rapid scans
  }
}`,advantages:"Contactless (sanitary), durable tags, support for multiple cards simultaneously.",disadvantages:"Limited range (~3-5cm); tags can be cloned if not using encrypted sectors (Classic 1K).",usage:"Scan tags and note the UID in the Serial Monitor. Hardcode authorized UIDs into your security logic.",components:["1x Microcontroller","1x RC522 RFID Module","3x Passive RFID Tags/Cards","1x RGB LED"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | SDA -> D10 | RST -> D9",author_name:"NISHANTH",status:"Published",industrial_use:"Employee time-tracking systems and contactless inventory management.",bom_cost:"$12"},{id:23,title:"Industrial Grid Monitor: AC Energy Telemetry",level:"Beginner",description:"Calculate AC voltage and current using non-invasive current transformers (CT) and voltage sensors for real-time energy analysis.",category:"Industrial & Energy",estimatedTime:"75 mins",tech:["Arduino","ESP32","Analog"],concept:"Power monitoring. Real power (Watts) is the average of instantaneous power (V * I) over time. This project implements RMS (Root Mean Square) calculations to handle sinusoidal AC waveforms.",working_principle:`1. Use a ZMPT101B for safe, isolated AC voltage sensing.
2. Use a SCT-013 non-invasive CT sensor for current sensing via induction.
3. Sample both waveforms at a high frequency (e.g., 1kHz).
4. Compute V-RMS, I-RMS, Power Factor, and Total Energy Consumption (kWh).
5. Send data to a HMI or Cloud for load balancing alerts.`,pin_config:{arduino:[{module:"System Power",pinName:"Module VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Power"},{module:"System Ground",pinName:"Module GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Voltage",pinName:"Voltage Sensor",mcuPin:"A0",direction:"Input",voltage:"5V",description:"Analog (ZMPT)"},{module:"Current",pinName:"Current Sensor",mcuPin:"A1",direction:"Input",voltage:"5V",description:"Analog (CT)"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Logic Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Grid Sentinel: RMS Waveform Analysis
// Compatible: ZMPT101B + SCT-013 Sensors

#include "EmonLib.h"
EnergyMonitor emon1;

void setup() {
  Serial.begin(115200);
  emon1.voltage(0, 268.0, 1.7); // Adjust for local mains
  emon1.current(1, 111.1);      // Adjust for CT sensor rating
}

void loop() {
  static unsigned long lastMeasure = 0;
  if (millis() - lastMeasure > 2000) {
    emon1.calcVI(20, 2000);
    Serial.print("V-RMS: "); Serial.println(emon1.Vrms);
    Serial.print("Watts: "); Serial.println(emon1.realPower);
    lastMeasure = millis();
  }
}`,advantages:"Isolated sensing (Safe), real-time efficiency tracking, non-invasive installation.",disadvantages:"Requires careful calibration against a known multimeter for accuracy; high sampling rate load.",usage:"Ensure current sensors are clamped ONLY around the phase (live) wire, not the neutral/earth bundle.",components:["1x Microcontroller","1x ZMPT101B AC Voltage Sensor","1x SCT-013 Current Transformer","1x LCD Screen"],circuit_diagram:"ZMPT Out -> A0 | SCT Out -> A1 | VCC -> 5V",author_name:"NISHANTH",status:"Published",industrial_use:"Smart sub-metering for industrial equipment and solar panel efficiency monitoring.",bom_cost:"$28"},{id:24,title:"Remote Telemetry: GPS Tracker & Geofencing",level:"Beginner",description:"Utilize Global Positioning System (GPS) NMEA data to track location, speed, and altitude while implementing geofencing logic.",category:"Connectivity & Navigation",estimatedTime:"45 mins",tech:["Arduino","ESP32","GPS"],concept:"Satellite trilateration. The GPS module captures signals from multiple orbiting satellites to calculate Latitude and Longitude. Geofencing is a virtual boundary that triggers alerts when the node enters/exits a radius.",working_principle:`1. Set the GPS module to communicate at 9600 baud via UART.
2. Parse the NMEA $GPGGA or $GPRMC sentences using a library.
3. Extract Lat/Lon, Speed, and Satellite Count.
4. Calculate the 'Haversine distance' between current location and target coordinate.
5. Trigger an alert if the distance exceeds the configured radius (Geofence Breach).`,pin_config:{arduino:[{module:"System Power",pinName:"GPS VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Check Power Spec"},{module:"System Ground",pinName:"GPS GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x NEO-6M GPS Module",pinName:"GPS TX",mcuPin:"D4 (RX)",direction:"Output",voltage:"5V",description:"Serial Data In"},{module:"1x NEO-6M GPS Module",pinName:"GPS RX",mcuPin:"D3 (TX)",direction:"Input",voltage:"5V",description:"Serial Data Out"}],esp32:[{module:"System Power",pinName:"GPS VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Power Spec"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Global Navigator: NMEA 0183 Parser
// Compatible: NEO-6M | NEO-M8N

#include <TinyGPS++.h>
TinyGPSPlus gps;

#if defined(ESP32)
  HardwareSerial gpsSerial(2);
#else
  #include <SoftwareSerial.h>
  SoftwareSerial gpsSerial(4, 3);
#endif

void setup() {
  Serial.begin(115200);
  #if defined(ESP32)
    gpsSerial.begin(9600, SERIAL_8N1, 16, 17);
  #else
    gpsSerial.begin(9600);
  #endif
}

void loop() {
  while (gpsSerial.available() > 0) {
    if (gps.encode(gpsSerial.read())) {
      if (gps.location.isValid()) {
        Serial.print("LAT: "); Serial.println(gps.location.lat(), 6);
        Serial.print("LNG: "); Serial.println(gps.location.lng(), 6);
      }
    }
  }
}`,advantages:"Global operation, high accuracy outdoors (3-5m), no cellular needed for basic tracking.",disadvantages:"Requires clear sky view (poor indoors); slow 'Time to First Fix' (TTFF) in cold starts.",usage:"Place the antenna outdoors or by a window. It may take up to 2 minutes for the first fix (indicated by a blinking LED).",components:["1x Microcontroller","1x NEO-6M GPS Module","1x External Active Antenna","Jumper Wires"],circuit_diagram:"GPS TX -> D4 | GPS RX -> D3 | VCC -> 3.3V/5V",author_name:"NISHANTH",status:"Published",industrial_use:"Fleet management, asset tracking in logistics, and automated marine buoys.",bom_cost:"$22"},{id:25,title:"Mesh Backbone: ESP-NOW Wireless Bridge",level:"Beginner",description:"Establish high-speed, low-latency node-to-node communication without requiring a Wi-Fi router or access point.",category:"Connectivity & Wireless",estimatedTime:"55 mins",tech:["ESP32","Wireless"],concept:"Connectionless wireless protocol. ESP-NOW is a fast, 2.4GHz protocol designed by Espressif that allows small packets of data to be transmitted between devices based on MAC addresses.",working_principle:`1. Put the ESP32 into Wi-Fi Station Mode but do not connect to a router.
2. Initialize the ESP-NOW protocol stack.
3. Register 'Peers' using their unique hardware MAC addresses.
4. Send data structures (structs) directly to the peer's MAC.
5. Handle the 'OnDataSent' and 'OnDataRecv' callbacks for reliable transmission.`,pin_config:{arduino:[{module:"No",pinName:"No Radio",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Requires ESP32/ESP8266 SoC"},{module:"-",pinName:"-",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Switch to ESP32 Platform"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// ESP-NOW Backbone: Peer-to-Peer Hub
// Compatible: ESP32 | ESP8266 (Exclusive)

#include <esp_now.h>
#include <WiFi.h>

uint8_t peerMAC[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  if (esp_now_init() != ESP_OK) return;
  
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, peerMAC, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;
  esp_now_add_peer(&peerInfo);
}

void loop() {
  static unsigned long lastSend = 0;
  if (millis() - lastSend > 2000) {
    char payload[] = "Node_A_Healthy";
    esp_now_send(peerMAC, (uint8_t *) &payload, sizeof(payload));
    lastSend = millis();
  }
}`,advantages:"Extremely low latency (no handshake), works without internet, high range (up to 200m).",disadvantages:"Limited packet size (250 bytes); ESP series exclusive.",usage:"Flash one board as Transmitter and another as Receiver. Get the Receiver's MAC address using the 'GetMAC' example.",components:["2x ESP32 Development Boards","1x USB Cable","Jumper Wires"],circuit_diagram:"Internal Radio used (No external wiring required for basic bridge).",author_name:"NISHANTH",status:"Published",industrial_use:"Remote sensor clusters in agriculture and decentralized emergency alert systems.",bom_cost:"$16"},{id:26,title:"Industrial Black Box: SD Card Data Logger",level:"Beginner",description:"Architect a persistent storage system to log sensor telemetry over long durations using SPI-based SD card interfaces.",category:"Industrial & Storage",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Non-volatile storage. While microcontrollers have limited EEPROM, SD cards provide gigabytes of space. This project uses the FAT file system to store data in human-readable CSV formats.",working_principle:`1. Interface with the SD card module via the SPI bus.
2. Initialize the file system (SD.begin).
3. Open a file in 'APPEND' mode to avoid overwriting previous data.
4. Format sensor readings into a comma-separated string (Timestamp, Value1, Value2).
5. Use file.flush() to ensure data is physically written to the card after each log.`,pin_config:{arduino:[{module:"System Power",pinName:"SD VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Level check"},{module:"System Ground",pinName:"SD GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"CS",pinName:"CS Pin",mcuPin:"D10",direction:"Output",voltage:"5V",description:"Slave Select"},{module:"MOSI",pinName:"MOSI",mcuPin:"D11",direction:"Output",voltage:"5V",description:"SPI Out"},{module:"MISO",pinName:"MISO",mcuPin:"D12",direction:"Output",voltage:"5V",description:"SPI In"},{module:"SCK",pinName:"SCK",mcuPin:"D13",direction:"Output",voltage:"5V",description:"SPI Clock"}],esp32:[{module:"System Power",pinName:"SD VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Module Power"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Industrial Black Box: Circular Log Logic
// Compatible: All SPI SD Modules

#include <SPI.h>
#include <SD.h>

const int chipSelect = 10; 
unsigned long lastLog = 0;

void setup() {
  Serial.begin(115200);
  if (!SD.begin(chipSelect)) {
    Serial.println("SD Init Failed!");
    return;
  }
  
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  if (dataFile) {
    dataFile.println("Timestamp(ms),SensorValue");
    dataFile.close();
  }
}

void loop() {
  // Log data every 5 seconds without blocking
  if (millis() - lastLog >= 5000) {
    File dataFile = SD.open("datalog.csv", FILE_WRITE);
    if (dataFile) {
      int sensorVal = analogRead(A0);
      dataFile.print(millis());
      dataFile.print(",");
      dataFile.println(sensorVal);
      dataFile.close(); // Pulse file close to ensure write sync
      Serial.println("Data Synced to Disk");
    }
    lastLog = millis();
  }
}`,advantages:"High storage capacity, offline reliability, easy data porting to Excel/MATLAB.",disadvantages:"File corruption if power is lost during a write cycle; requires high-quality SD cards.",usage:"Format your SD card to FAT32 before use. Check the serial monitor if SD initialization fails.",components:["1x Microcontroller","1x MicroSD Card Module","1x FAT32 Formatted SD Card"],circuit_diagram:"CS -> D10 | MOSI -> D11 | MISO -> D12 | SCK -> D13",author_name:"NISHANTH",status:"Published",industrial_use:"Weather station data logging and flight recorders for hobby drones.",bom_cost:"$14"},{id:27,title:"Air Quality Auditor: MQ-135 AQI Monitor",level:"Beginner",description:"Quantify indoor air pollutants including Ammonia, NOx, Alcohol, Benzene, and CO2 using electrochemical sensing.",category:"Industrial & Health",estimatedTime:"45 mins",tech:["Arduino","ESP32","Sensors"],concept:"Gas concentration mapping. The MQ-135 has a sensitive SnO2 layer. In clean air, conductivity is low. When pollutant gases are present, conductivity increases proportionally to gas concentration.",working_principle:`1. Burn-in the sensor for 24-48 hours for baseline stability.
2. Read analog voltage from the sensor output.
3. Calculate the sensor resistance (Rs) vs. clean air resistance (Ro).
4. Use the sensitivity curve (Ratio Rs/Ro) to estimate PPM of specific gases.
5. Trigger a ventilation relay if CO2 levels exceed 1000 PPM.`,pin_config:{arduino:[{module:"System Power",pinName:"MQ-135 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Requires 5V for heater"},{module:"System Ground",pinName:"MQ-135 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"MQ-135",pinName:"MQ-135 SIG",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog Input"},{module:"Relay Module",pinName:"Fan Relay In",mcuPin:"D8",direction:"Output",voltage:"5V",description:"Active HIGH"},{module:"Relay Module",pinName:"Relay Return",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Common GND"}],esp32:[{module:"System Power",pinName:"MQ-135 VCC",mcuPin:"5V (VIN)",direction:"Power",voltage:"3.3V",description:"Heater Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// AQI Sentinel: Multi-Gas Auditor
// Compatible: MQ-135 (Air Quality)

const int sensorPin = A0;
float sensorRef = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("Warming up SnO2 Layer...");
  delay(20000); // 20s initial stabilization
  
  // Establishing a local baseline (Ro)
  long sum = 0;
  for(int i=0; i<50; i++) { sum += analogRead(sensorPin); delay(10); }
  sensorRef = sum / 50.0;
}

void loop() {
  int raw = analogRead(sensorPin);
  float ratio = (float)raw / sensorRef;
  
  Serial.print("Air Quality Index (Ratio): ");
  if (ratio < 1.2) Serial.println("EXCELLENT");
  else if (ratio < 1.8) Serial.println("MODERATE");
  else Serial.println("HAZARDOUS");
  
  delay(2000);
}`,advantages:"Low cost broad-spectrum sensing, fast response time.",disadvantages:"High cross-sensitivity (cannot distinguish between specific gases easily); affected by humidity.",usage:"Calibrate in fresh outdoor air to find your 'Ro' baseline before measuring indoor pollutants.",components:["1x Microcontroller","1x MQ-135 Air Quality Sensor","1x I2C LCD Displays"],circuit_diagram:"MQ-135 AO -> A0 | VCC -> 5V | GND -> GND",author_name:"NISHANTH",status:"Published",industrial_use:"HVAC automation in smart buildings and pollutant monitoring in manufacturing plants.",bom_cost:"$12"},{id:28,title:"Acoustic Pollution: Digital Decibel Monitor",level:"Beginner",description:"Measure ambient noise levels and frequency peaks to monitor acoustic pollution in industrial or residential zones.",category:"Safety & Environment",estimatedTime:"40 mins",tech:["Arduino","ESP32","Acoustics"],concept:"Sound Pressure Level (SPL). By sampling the output of an electret microphone at high speed, we can calculate the amplitude (volume) and apply a logarithmic scale to estimate decibels (dB).",working_principle:`1. Sample the microphone's analog output over a 50ms window.
2. Find the 'Peak-to-Peak' voltage during that window.
3. Convert voltage peaks to a relative dB value using a reference calibration.
4. Log the average noise level over 1 hour.
5. Trigger a visual 'Quiet!' alert if levels exceed 85dB (OSHA safety limit).`,pin_config:{arduino:[{module:"System Power",pinName:"Mic Module VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Check Power Spec"},{module:"System Ground",pinName:"Mic Module GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x Microcontroller",pinName:"Mic Out",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog Envelope (ENV)"},{module:"Output LED",pinName:"Noise LED (+) ",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Visual Alarm"},{module:"Output LED",pinName:"LED (-) ",mcuPin:"GND",direction:"Output",voltage:"5V",description:"Return"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Logic Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Noise Auditor: RMS Window Sampling
// Compatible: Electret Mic Modules

const int micPin = A0;
const int sampleWindow = 50; // 50ms (20Hz)

void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  unsigned long startMillis = millis();
  unsigned int peakToPeak = 0;
  unsigned int signalMax = 0, signalMin = 1024;

  while (millis() - startMillis < sampleWindow) {
    int sample = analogRead(micPin);
    if (sample > signalMax) signalMax = sample;
    else if (sample < signalMin) signalMin = sample;
  }

  peakToPeak = signalMax - signalMin; 
  float db = map(peakToPeak, 0, 1024, 40, 90); // Rough dB estimate
  
  Serial.print("SPL: "); Serial.print(db); Serial.println(" dB");
  digitalWrite(13, (db > 80) ? HIGH : LOW); // OSHA Alert
}`,advantages:"Real-time noise monitoring, prevents hearing damage, compact size.",disadvantages:"Requires an amplified microphone module (like MAX4466) for accurate readings; sensitive to wind.",usage:"Adjust the gain potentiometer on the back of the microphone module until the LED only triggers on loud claps.",components:["1x Microcontroller","1x MAX4466 Electret Microphone","1x Red High-Intensity LED"],circuit_diagram:"Mic OUT -> A0 | VCC -> 3.3V | GND -> GND",author_name:"NISHANTH",status:"Published",industrial_use:"Safety monitoring in high-decibel factories and noise restriction enforcement in residential áreas.",bom_cost:"$10"},{id:29,title:"Load Management: PIR Occupancy Controller",level:"Beginner",description:"Optimize energy consumption by controlling high-power loads based on human presence and infrared heat signatures.",category:"Energy & Automation",estimatedTime:"30 mins",tech:["Arduino","ESP32","Infrared"],concept:"Pyroelectric effect. Passive Infrared (PIR) sensors have two slots made of IR-sensitive material. When a warm body passes, it creates a differential change between the two slots, triggering a pulse.",working_principle:`1. Configure the PIR sensor's retriggering jumper to 'H' mode.
2. Monitor the digital output pin (HIGH = Motion, LOW = Still).
3. Use an internal timer to maintain the load (light/AC) for a 'Stay-on' period (e.g., 5 mins).
4. Trigger a high-power relay via an isolation circuit (optocoupler).
5. Implement a 'Manual Override' to force-disable the automation.`,pin_config:{arduino:[{module:"PIR Motion Sensor",pinName:"PIR Signal",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Digital In"},{module:"Relay Module",pinName:"Relay Out",mcuPin:"D7",direction:"Output",voltage:"5V",description:"Load Switch"}],esp32:[{module:"PIR Motion Sensor",pinName:"PIR In",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Internal Pull-down"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"PIR Motion Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Motion Detection"}]},code:`// Occupancy Guard: Non-Blocking Logic
// Compatible: HC-SR501 | HC-SR505

const int pirPin = 2;
const int relayPin = 7;
unsigned long motionDetectedAt = 0;
const unsigned long keepOnDuration = 60000; // 1 Minute

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  if (digitalRead(pirPin) == HIGH) {
    motionDetectedAt = millis();
    digitalWrite(relayPin, HIGH); // LOAD ACTIVE
  }

  // Check if it's time to turn off
  if (millis() - motionDetectedAt >= keepOnDuration) {
    digitalWrite(relayPin, LOW); // LOAD IDLE
  }
}`,advantages:"Significant energy savings (~30%), hands-free operation, highly reliable detection.",disadvantages:"Sensitive to rapid temperature changes (heaters/AC vents); can reach through thin glass.",usage:"Use the onboard potentiometers to adjust Sensitivity and Time-Delay according to your room size.",components:["1x Microcontroller","1x HC-SR501 PIR Sensor","1x 5V Relay Module","Jumper Wires"],circuit_diagram:"PIR Out -> D2 | Relay In -> D7 | VCC -> 5V",author_name:"NISHANTH",status:"Published",industrial_use:"Automated lighting in warehouses and demand-based HVAC in office buildings.",bom_cost:"$11"},{id:30,title:"RTC Industrial Scheduler: Temporal Automation",level:"Beginner",description:"Develop a high-precision automation system that triggers industrial events based on wall-clock time using Real-Time Clock (RTC) modules.",category:"Industrial & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Timekeeping independence. Microcontrollers lose time when powered off. RTC modules like the DS3231 use a battery-backed crystal oscillator to maintain accurate time (±2ppm) regardless of the MCU's state.",working_principle:`1. Initialize communication with the DS3231 via the I2C bus.
2. Set the current time and date in the provisioning phase.
3. The MCU polls the RTC every 1000ms to read the 'Second, Minute, Hour' registers.
4. Compare the 'Now' time against a user-defined 'Schedule' (e.g., 08:00:00).
5. Trigger a latching relay or notification if the time matches the alarm window.`,pin_config:{arduino:[{module:"System Power",pinName:"RTC VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Power"},{module:"System Ground",pinName:"RTC GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x DS3231 RTC Module",pinName:"RTC SDA",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"I2C Data"},{module:"1x DS3231 RTC Module",pinName:"RTC SCL",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"I2C Clock"},{module:"Relay Module",pinName:"Schedule Relay",mcuPin:"D7",direction:"Output",voltage:"5V",description:"Output"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RTC Master: Scheduled Event Trigger
// Compatible: DS3231 I2C Precision Clock

#include <Wire.h>
#include <RTClib.h>

RTC_DS3231 rtc;
bool alarmMatched = false;

void setup() {
  Serial.begin(115200);
  if (!rtc.begin()) while(1); // Lock if RTC missing
  
  if (rtc.lostPower()) {
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }
}

void loop() {
  DateTime now = rtc.now();
  
  // Logic to trigger at exactly 08:30:00
  if (now.hour() == 8 && now.minute() == 30 && now.second() == 0) {
    if (!alarmMatched) {
      Serial.println("ROUTINE TRIGGERED");
      digitalWrite(7, HIGH); 
      alarmMatched = true;
    }
  }
  
  if (now.second() == 1) alarmMatched = false; // Reset lock
  delay(500);
}`,advantages:"Battery-backed (No time loss), extremely accurate (±1 min/year), works without Internet (NTP).",disadvantages:"Lithium battery replacement needed every 5-8 years; sensitive to extreme vibrations.",usage:"Use the 'DS3231' library. Ensure the CR2032 battery is inserted for time-memory functionality.",components:["1x Microcontroller","1x DS3231 RTC Module","1x CR2032 Battery","1x Relay Module"],circuit_diagram:"RTC SDA -> A4 | RTC SCL -> A5 | Relay IN -> D7 | VCC -> 5V",author_name:"NISHANTH",status:"Published",industrial_use:"Shift-change whistles in factories and automated street-lighting controllers.",bom_cost:"$13"},{id:31,title:"OLED Command Center: Multi-Layered HMI",level:"Beginner",description:"Design a professional Human-Machine Interface (HMI) with rotating menus, real-time graphs, and status icons using I2C OLED displays.",category:"Automation & Visualization",estimatedTime:"60 mins",tech:["Arduino","ESP32","I2C"],concept:"Buffer-based rendering. Instead of writing directly to the screen pixels, we update an internal RAM buffer and then push the entire frame to the controller. This allows for flicker-free animations and complex graphics.",working_principle:`1. Initialize the SSD1306 controller via I2C.
2. Implement a 'State Machine' to handle menu navigation (Home, Sensors, Settings).
3. Use a rotary encoder or buttons to transition between states.
4. Design custom icons using bitmap arrays (uint8_t).
5. Use a circular buffer to store last 64 sensor readings and draw a scrolling Sparkline-style graph.`,pin_config:{arduino:[{module:"System Power",pinName:"OLED VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Power"},{module:"System Ground",pinName:"OLED GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Output LED",pinName:"OLED SDA",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"I2C Data"},{module:"Output LED",pinName:"OLED SCL",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"I2C Clock"},{module:"Encoder",pinName:"Encoder A",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt Pin"},{module:"Encoder",pinName:"Encoder B",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Signal Pin"}],esp32:[{module:"System Power",pinName:"OLED VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Rating"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}]},code:`// HMI Pro: Tiered OLED Dashboard
// Compatible: SSD1306 | SH1106

#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 oled(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  if(!oled.begin(SSD1306_SWITCHCAPVCC, 0x3C)) while(1);
  oled.clearDisplay();
}

void loop() {
  static int page = 0;
  static unsigned long lastSwitch = 0;
  
  if (millis() - lastSwitch > 3000) {
    page = (page + 1) % 2;
    lastSwitch = millis();
    renderPage(page);
  }
}

void renderPage(int p) {
  oled.clearDisplay();
  oled.setTextSize(1); oled.setTextColor(WHITE);
  oled.setCursor(0,0);
  if(p == 0) oled.print("SYSTEM: ONLINE");
  else oled.print("LINK: CONNECTED");
  oled.display();
}`,advantages:"Professional aesthetic, low power consumption (0.01W), high contrast.",disadvantages:"Small screen real estate (0.96 inch); burn-in risk if static images are left for weeks.",usage:"Use the 'U8g2' library for maximum control. Use an online 'Image2Cpp' converter for custom bitmaps.",components:["1x Microcontroller",'1x 0.96" OLED (SSD1306)',"1x Rotary Encoder (KY-040)","Connecting Wires"],circuit_diagram:"OLED SDA -> A4 | OLED SCL -> A5 | Encoder A -> D2 | Encoder B -> D3",author_name:"NISHANTH",status:"Published",industrial_use:"Compact diagnostic displays for industrial pumps and smart thermostat interfaces.",bom_cost:"$9"},{id:32,title:"LoRa Field Node: Long Range Telemetry",level:"Beginner",description:"Establish long-range (up to 15km) wireless communication using Chirp Spread Spectrum (CSS) modulation for remote agricultural sensing.",category:"Connectivity & Wireless",estimatedTime:"90 mins",tech:["Arduino","ESP32","LoRa"],concept:"Chirp Spread Spectrum. Unlike Wi-Fi which uses high bandwidth, LoRa uses low bandwidth but spreads pulses over time (chirps). This makes it extremely resistant to interference and capable of deep penetration.",working_principle:`1. Interface with the SX1276/78 LoRa module via SPI.
2. Configure frequency (868/915 MHz), Spreading Factor (SF), and Bandwidth.
3. Implement a 'Receiver-Side Address' check to filter out packets from other nodes.
4. Optimize for low power by putting the radio into 'CAD' (Channel Activity Detection) mode.
5. Transmit critical sensor data with a CRC check for integrity.`,pin_config:{arduino:[{module:"System Power",pinName:"LoRa VCC",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"Requires 3.3V"},{module:"System Ground",pinName:"LoRa GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"2x SX1278 LoRa Modules",pinName:"LoRa CS (NSS)",mcuPin:"D10",direction:"Output",voltage:"5V",description:"SPI Slave Select"},{module:"2x SX1278 LoRa Modules",pinName:"LoRa RST",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Reset Pin"},{module:"2x SX1278 LoRa Modules",pinName:"LoRa DIO0",mcuPin:"D2",direction:"Output",voltage:"5V",description:"IRQ Interrupt"},{module:"MOSI",pinName:"MOSI",mcuPin:"D11",direction:"Output",voltage:"5V",description:"SPI Out"},{module:"MISO",pinName:"MISO",mcuPin:"D12",direction:"Output",voltage:"5V",description:"SPI In"},{module:"SCK",pinName:"SCK",mcuPin:"D13",direction:"Output",voltage:"5V",description:"SPI Clock"}],esp32:[{module:"System Power",pinName:"LoRa VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Long-Range Telemetry: LoRa Protocol
// Compatible: SX1276 | SX1278 (SPI Interface)

#include <SPI.h>
#include <LoRa.h>

void setup() {
  Serial.begin(115200);
  if (!LoRa.begin(915E6)) { // Set local freq (433/868/915)
    Serial.println("LoRa Init Failed");
    while (1);
  }
}

void loop() {
  // Send packet every 10 seconds (Non-blocking)
  static unsigned long lastTx = 0;
  if (millis() - lastTx > 10000) {
    LoRa.beginPacket();
    LoRa.print("STAT:OK,RAW:"); 
    LoRa.print(analogRead(A0));
    LoRa.endPacket();
    lastTx = millis();
  }
}`,advantages:"Extreme range (10km+), penetration through walls, runs for years on a battery.",disadvantages:"Low data rate (bytes, not images); high latency; requires frequency-specific antennas.",usage:"Ensure an antenna is connected BEFORE powering up, or the module might overheat and fail.",components:["2x Microcontrollers","2x SX1278 LoRa Modules","2x Antennas","Breadboard"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | NSS -> D10 | DIO0 -> D2",author_name:"NISHANTH",status:"Published",industrial_use:"Soil moisture monitoring in large-scale farms and remote meter reading in urban areas.",bom_cost:"$18"},{id:33,title:"Modbus Slave: RS485 Industrial Interface",level:"Beginner",description:"Convert your microcontroller into an industrial Modbus RTU slave that interfaces with PLCs and SCADA systems.",category:"Industrial & Control",estimatedTime:"70 mins",tech:["Arduino","ESP32","RS485"],concept:"Master-Slave communication. Modbus is the 'lingua franca' of factories. It uses 16-bit registers to store data. RS485 provides the physical layer for multi-drop, long-distance electrical communication.",working_principle:`1. Use a MAX485 TTL-to-RS485 converter for differential signaling.
2. Define a 'Register Map' (e.g., Register 101 = Temperature reading).
3. Listen for requests from the Modbus Master (e.g., PLC).
4. If the Slave ID matches, parse the function code (Read/Write).
5. Respond with the requested data formatted in Big-Endian bytes.`,pin_config:{arduino:[{module:"System Power",pinName:"MAX485 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Bus Power"},{module:"System Ground",pinName:"MAX485 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"DE/RE",pinName:"DE/RE",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Direction Control"},{module:"1x Microcontroller",pinName:"RO (Receive)",mcuPin:"D0 (RX)",direction:"Output",voltage:"5V",description:"Input"},{module:"DI",pinName:"DI (Transmit)",mcuPin:"D1 (TX)",direction:"Output",voltage:"5V",description:"Output"}],esp32:[{module:"System Power",pinName:"MAX485 VCC",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Module"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Modbus RTU: Industrial Slave Node
// Compatible: RS485 Interface

#include <ModbusRTUSlave.h>

const byte id = 1;
ModbusRTUSlave modbus(Serial, 3); // Serial, Dir Pin (DE/RE)

// Register Map
uint16_t holdingRegisters[2]; 

void setup() {
  Serial.begin(9600, SERIAL_8E1); // Industrial Parity
  modbus.begin(9600);
  modbus.configureHoldingRegisters(holdingRegisters, 2);
}

void loop() {
  holdingRegisters[0] = analogRead(A0); // Register 40001
  holdingRegisters[1] = analogRead(A1); // Register 40002
  modbus.poll();
}`,advantages:"Industry compatible, reliable over 1200m, supported by almost all PLCs.",disadvantages:"Half-duplex (cannot send/recv at once); requires MAX485 external hardware.",usage:"Set the Modbus Master (PLC) to the same baud rate and parity (9600-8-N-1 is standard).",components:["1x Microcontroller","1x MAX485 Module","1x PLC or USB-RS485 Converter"],circuit_diagram:"RO -> RX | DI -> TX | DE/RE -> D3 | A -> Bus A | B -> Bus B",author_name:"NISHANTH",status:"Published",industrial_use:"Integrating custom IoT sensors into factory SCADA systems like Ignition or Wonderware.",bom_cost:"$10"},{id:34,title:"Vibration Auditor: Predictive Maintenance",level:"Beginner",description:"Analyze machine health by measuring vibration FFT (Fast Fourier Transform) to predict bearing failures before they occur.",category:"Industrial & Safety",estimatedTime:"80 mins",tech:["Arduino","ESP32","Signal Processing"],concept:"Frequency analysis. Mechanical defects like misalignment or worn bearings create specific vibration frequencies. By analyzing the 'Spectrum', we can identify which component is failing.",working_principle:`1. Sample acceleration data from an ADXL345 at a high frequency (e.g., 2kHz).
2. Apply a Hanning 'Window' to the data to prevent spectral leakage.
3. Compute the FFT (Fast Fourier Transform) to convert Time-Domain to Frequency-Domain.
4. Find the Peak Frequency and Amplitude.
5. Alert if vibration intensity in the 100Hz-500Hz band exceeds the safety threshold.`,pin_config:{arduino:[{module:"System Power",pinName:"ADXL345 VCC",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"Requires 3.3V"},{module:"System Ground",pinName:"ADXL345 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"ADXL345",pinName:"ADXL345 SDA",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"I2C Data"},{module:"ADXL345",pinName:"ADXL345 SCL",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"I2C Clock"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Maintenance Pro: Vibration Spectrum
// Compatible: ADXL345 (I2C) + arduinoFFT

#include <Wire.h>
#include <arduinoFFT.h>

#define SAMPLES 64
#define SAMPLING_FREQ 2000

double vReal[SAMPLES]; 
double vImag[SAMPLES];
arduinoFFT FFT = arduinoFFT();

void loop() {
  for(int i=0; i<SAMPLES; i++) {
    vReal[i] = analogRead(A0); 
    vImag[i] = 0.0;
    delayMicroseconds(500); // 1/2000s sampling
  }
  
  FFT.Windowing(vReal, SAMPLES, FFT_WIN_TYP_HAMMING, FFT_FORWARD);
  FFT.Compute(vReal, vImag, SAMPLES, FFT_FORWARD);
  FFT.ComplexToMagnitude(vReal, vImag, SAMPLES);
  double peak = FFT.MajorPeak(vReal, SAMPLES, SAMPLING_FREQ);
  
  Serial.print("Major Peak: "); Serial.print(peak); Serial.println(" Hz");
  delay(500);
}`,advantages:"Saves thousands in repair costs, detects problems invisible to the human eye, non-stop operation.",disadvantages:"Computationally heavy (requires ESP32 for high-resolution FFT); sensitive to mounting position.",usage:"Mount the sensor rigidly to the motor casing using a screw or industrial magnet. Tape is NOT adequate.",components:["1x ESP32 (Recommended)","1x ADXL345 Triple-Axis Accelerometer","1x Status Buzzer"],circuit_diagram:"ADXL SDA -> GPIO 21 | ADXL SCL -> GPIO 22 | VCC -> 3.3V",author_name:"NISHANTH",status:"Published",industrial_use:"Predictive maintenance for cooling tower fans and industrial conveyor rollers.",bom_cost:"$15"},{id:35,title:"Secure Gateway: Hardware Encryption",level:"Beginner",description:"Protect sensitive IoT telemetry using hardware-accelerated AES-128 encryption and secure key storage.",category:"Security & Connectivity",estimatedTime:"100 mins",tech:["ESP32","Security","AES"],concept:"End-to-end security. Software encryption keys can be dumped from memory. Hardware Security Modules (HSMs) like the ATECC608 secure the key in a tamper-proof chip that performs encryption internally.",working_principle:`1. Initialize the Secure Element via I2C.
2. In the provisioning phase, generate a unique Elliptic Curve (ECC) private key inside the chip.
3. Before sending data to the cloud, hash the payload using SHA-256.
4. Use the secure chip to Sign the hash with the private key.
5. The cloud verifies the signature using your public key, ensuring the data wasn't tampered with.`,pin_config:{arduino:[{module:"MCU",pinName:"MCU Speed",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Too slow for ECC logic"},{module:"-",pinName:"-",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Switch to ESP32 platform"}],esp32:[{module:"System Power",pinName:"HSM VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"ATECC608 Power"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Secure Vault Link: AES-128 Block Cipher
// Compatible: ESP32 Hardware Acceleration

#include <Crypto.h>
#include <AES.h>

AES128 aes128;
byte key[16] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10};

void loop() {
  char payload[] = "IoTnext_SAFE_DATA";
  byte cipher[16];
  
  aes128.setKey(key, 16);
  aes128.encryptBlock(cipher, (byte*)payload);
  
  Serial.print("Encrypted Frame Sent");
  delay(10000);
}`,advantages:"Military-grade protection, prevents 'Man-in-the-Middle' attacks, tamper-evident.",disadvantages:"Complex implementation; lost private keys make data permanently unreadable.",usage:"Use the 'Microchip CryptoAuthLib' for ATECC608 integration. Never hardcode keys in plaintext.",components:["1x ESP32","1x ATECC608 Secure Element","1x MicroSD for local logs"],circuit_diagram:"AES chip SDA -> Pin 21 | SCL -> Pin 22 | GND -> GND",author_name:"NISHANTH",status:"Published",industrial_use:"Medical device data transmission and secure payment portals in kiosks.",bom_cost:"$12"},{id:36,title:"Precision Weighing: HX711 Industrial Scale",level:"Beginner",description:"Interface with high-precision load cells and 24-bit ADCs to build an industrial weighing terminal for logistics and inventory.",category:"Industrial & Manufacturing",estimatedTime:"55 mins",tech:["Arduino","ESP32","Analog"],concept:"Wheatstone bridge. A load cell is a piece of aluminum with strain gauges. When weight is applied, the resistance of the gauges changes slightly. The HX711 amplifies this microvolt-level change and converts it to a 24-bit digital value.",working_principle:`1. Connect the 4 wires of the load cell (E+, E-, A+, A-) to the HX711 module.
2. Perform a 'Tare' calibration to zero out the weight of the platform.
3. Apply a known weight (e.g., 500g) to determine the 'Calibration Factor'.
4. Read the 24-bit raw output and apply the factor to get grams/kilograms.
5. Implement a digital filter (moving average) to stabilize readings under vibration.`,pin_config:{arduino:[{module:"System Power",pinName:"HX711 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Analog Power"},{module:"System Ground",pinName:"HX711 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"HX711",pinName:"HX711 DT (Data)",mcuPin:"D3",direction:"Output",voltage:"5V",description:"24-bit Output"},{module:"HX711",pinName:"HX711 SCK (Clock)",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Serial Sync"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Logic Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Industrial Weighing Terminal: HX711 Logic
// Compatible: 24-bit ADC + Load Cells

#include "HX711.h"

const int dt = 3, sck = 2;
HX711 scale;

void setup() {
  Serial.begin(115200);
  scale.begin(dt, sck);
  scale.set_scale(2280.f); // Specific to your calibration load
  scale.tare();            // Reset to zero
  Serial.println("Scale Ready");
}

void loop() {
  if (scale.is_ready()) {
    float weight = scale.get_units(10); // Average of 10 samples
    Serial.print("Kg: "); Serial.println(weight);
  }
  delay(200);
}`,advantages:"Incredible precision (0.1g resolution), low cost, easy to integrate into ERP systems.",disadvantages:"Sensitive to temperature drift; requires rigid mechanical mounting; fragile strain gauges.",usage:"Avoid 'creep' by not leaving heavy loads on the scale for extended periods. Recalibrate monthly.",components:["1x Microcontroller","1x HX711 24-bit ADC","1x 5kg/10kg Load Cell","Mounting Plates"],circuit_diagram:"Load Cell (Red) -> E+ | (Black) -> E- | (White) -> A- | (Green) -> A+",author_name:"NISHANTH",status:"Published",industrial_use:"Filling stations for chemical containers and automated parcel weighing in warehouses.",bom_cost:"$14"},{id:37,title:"Flow Guardian: Hall-Effect Liquid Meter",level:"Beginner",description:"Quantify liquid volume and flow rate using turbine-based Hall effect sensors for smart water management.",category:"Industrial & Energy",estimatedTime:"45 mins",tech:["Arduino","ESP32","Fluid Dynamics"],concept:"Magnetic pulse counting. As liquid flows through the meter, it spins a turbine. A magnet on the turbine passes a Hall-effect sensor, generating a pulse for every rotation. The frequency of pulses is proportional to the flow rate.",working_principle:`1. Attach the flow sensor signal pin to a hardware interrupt pin on the MCU.
2. Increment a 'Pulse Count' inside the Interrupt Service Routine (ISR).
3. Every 1 second, calculate the frequency (pulses per second).
4. Apply the 'K-Factor' (e.g., 7.5 pulses/sec = 1 Liter/min) to get real flow rate.
5. Integrate flow rate over time to calculate total volume consumed (liters).`,pin_config:{arduino:[{module:"System Power",pinName:"Sensor VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Module Power"},{module:"System Ground",pinName:"Sensor GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Sensor",pinName:"Sensor SIG",mcuPin:"D2",direction:"Input",voltage:"5V",description:"Interrupt Pin (Int0)"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V / 5V",direction:"Power",voltage:"3.3V",description:"Check Sensor rating"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Liquid Auditor: ISR Flow Management
// Compatible: Hall-Effect Flow Sensors

volatile unsigned long pulseCount = 0;
unsigned long lastTime = 0;

void IRAM_ATTR countPulse() { pulseCount++; }

void setup() {
  Serial.begin(115200);
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), countPulse, RISING);
}

void loop() {
  if (millis() - lastTime > 1000) {
    detachInterrupt(digitalPinToInterrupt(2)); // Atomic read start
    unsigned long pulses = pulseCount;
    pulseCount = 0;
    attachInterrupt(digitalPinToInterrupt(2), countPulse, RISING); // Atomic end
    
    float flowRate = (pulses / 7.5); // Liters/minute calibration
    Serial.print("Rate: "); Serial.print(flowRate); Serial.println(" L/min");
    lastTime = millis();
  }
}`,advantages:"Non-contact sensing (no leaks), low maintenance, high reliability for water/fuel.",disadvantages:"Cannot measure viscous liquids (honey/oil) accurately; turbine can jam with debris.",usage:"Use a 10k pull-up resistor if your sensor doesn't have an internal one. Install a filter upstream.",components:["1x Microcontroller","1x YF-S201 Flow Sensor","1x I2C LCD for Display"],circuit_diagram:"Sensor Red -> 5V | Sensor Black -> GND | Sensor Yellow -> D2",author_name:"NISHANTH",status:"Published",industrial_use:"Smart irrigation monitoring and fuel consumption tracking in generators.",bom_cost:"$12"},{id:38,title:"Energy Optimizer: MPPT Solar Tracker",level:"Beginner",description:"Maximize solar energy harvest by tracking the sun's position using LDR arrays and servo-controlled panels.",category:"Energy & Automation",estimatedTime:"120 mins",tech:["Arduino","ESP32","Robotics"],concept:"Dual-Axis Tracking. Fixed solar panels lose up to 40% efficiency due to the angle of incidence. An active tracker ensures the panel is always perpendicular to the sun's rays for maximum photon absorption.",working_principle:`1. Position 4 Light Dependent Resistors (LDRs) in a cross formation separated by baffles.
2. Read analog values from Top, Bottom, Left, and Right sensors.
3. Compare 'Top-Bottom' and 'Left-Right' averages.
4. If the difference exceeds a threshold, move the Pan/Tilt servos to minimize the error.
5. Return to East (Home) at night when all LDRs report low light.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Servo/Logic Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Photoresistor",pinName:"LDR Cross Array",mcuPin:"A0-A3",direction:"Output",voltage:"5V",description:"Analog Inputs"},{module:"H-Servo",pinName:"H-Servo Signal",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Horizontal PWM"},{module:"V-Servo",pinName:"V-Servo Signal",mcuPin:"D10",direction:"Output",voltage:"5V",description:"Vertical PWM"}],esp32:[{module:"System Power",pinName:"Logic VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"For LDR Array"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}]},code:`// Energy Core: Dual-Axis Solar Tracker
// Compatible: Multi-Servo LDR Arrays

#include <Servo.h>
Servo horizontal, vertical;
int hPos = 90, vPos = 90;

void setup() {
  horizontal.attach(9); vertical.attach(10);
  horizontal.write(hPos); vertical.write(vPos);
}

void loop() {
  int tr = analogRead(A0); int tl = analogRead(A1); // Top Sensors
  int br = analogRead(A2); int bl = analogRead(A3); // Bottom Sensors
  
  int avgTop = (tr + tl) / 2;
  int avgBot = (br + bl) / 2;
  int avgL = (tl + bl) / 2;
  int avgR = (tr + br) / 2;

  // Vertical Correction
  if (abs(avgTop - avgBot) > 10) {
    if (avgTop < avgBot) vPos++; else vPos--;
    vertical.write(constrain(vPos, 0, 180));
  }
  
  // Horizontal Correction
  if (abs(avgL - avgR) > 10) {
    if (avgL < avgR) hPos++; else hPos--;
    horizontal.write(constrain(hPos, 0, 180));
  }
  delay(50);
}`,advantages:"Increases energy yield by 30-45%, fully autonomous, educational for PID logic.",disadvantages:"Moving parts require maintenance; servos consume energy; susceptible to high winds.",usage:"Use high-torque servos with metal gears for even small panels. Implement a 10-degree 'Deadzone' to prevent jitter.",components:["1x Microcontroller","2x MG996R Servos","4x LDRs","1x 5V Solar Panel"],circuit_diagram:"LDRs -> A0-A3 | PWM -> D9, D10 | External 5V Power for Servos",author_name:"NISHANTH",status:"Published",industrial_use:"Utility-scale solar farms and smart house energy harvesting units.",bom_cost:"$25"},{id:39,title:"AC Load Phase Controller: Triac Dimming Logic",level:"Beginner",description:"Precisely control AC power (0-100%) for heaters and lamps using Zero-Crossing detection and Phase Angle firing.",category:"Energy & Industrial",estimatedTime:"80 mins",tech:["Arduino","ESP32","High Voltage"],concept:"Phase angle control. AC power varies like a sine wave. By waiting for the voltage to cross zero and then delaying the trigger (firing) of a Triac, we can chop the wave and effectively reduce the power delivered.",working_principle:`1. Detect the Zero-Crossing point using an H11AA1 optocoupler to avoid high voltage in the MCU.
2. Trigger a hardware interrupt on the falling/rising edge of the ZC signal.
3. Inside the interrupt, start a timer with a delay (0ms to 8.3ms for 60Hz).
4. When the timer expires, pulse the Triac gate via an optotriac (MOC3021).
5. Adjust the delay based on desired brightness/heat (PID control).`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Opto-logic Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"ZC",pinName:"ZC Sync In",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt Pin (Sync)"},{module:"Triac",pinName:"Triac Gate Out",mcuPin:"D3",direction:"Output",voltage:"5V",description:"PWM/Phase Drive"}],esp32:[{module:"System Power",pinName:"Logic VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Communication Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// AC Phase Master: Safe Zero-Cross Logic
// Compatible: TRIAC Dimmer Modules (ZMPT + MOC)

volatile int dimmingValue = 120; // 0 (OFF) to 128 (FULL)
const int zcPin = 2, gatePin = 3;

void IRAM_ATTR handleZeroCross() {
  // Calculating delay based on 50Hz/60Hz cycle
  int delayTime = (75 * dimmingValue);
  delayMicroseconds(delayTime);
  digitalWrite(gatePin, HIGH);
  delayMicroseconds(10); // Trigger pulse
  digitalWrite(gatePin, LOW);
}

void setup() {
  pinMode(zcPin, INPUT_PULLUP);
  pinMode(gatePin, OUTPUT);
  attachInterrupt(digitalPinToInterrupt(zcPin), handleZeroCross, RISING);
}`,advantages:"Silent (unlike relays), precise power control, small footprint.",disadvantages:"EXTREMELY DANGEROUS (MAINS VOLTAGE); produces electrical noise (EMI); needs a heat sink.",usage:"Always use an isolation transformer for testing. Ensure the Triac is rated for at least 600V.",components:["1x Microcontroller","1x BT136 Triac","1x MOC3021 Optotriac","1x H11AA1 Optocoupler"],circuit_diagram:"CAUTION: HIGH VOLTAGE. Refer to professional isolated dimmer schematics.",author_name:"NISHANTH",status:"Published",industrial_use:"PID-controlled industrial ovens and smart lighting for theaters/auditoriums.",bom_cost:"$9"},{id:40,title:"Factory Backbone: Integrated Telemetry Hub",level:"Beginner",description:"A comprehensive industrial node that consolidates Modbus, Wi-Fi, and Sensor data into a unified MQTT bridge.",category:"Industrial & IoT",estimatedTime:"150 mins",tech:["ESP32","MQTT","Modbus","RTC"],concept:"Data aggregation. In complex factories, single sensors aren't enough. This hub acts as a 'Local Master', collecting data from localized slaves and bridging it to the Global Cloud via secure MQTT binary protocols.",working_principle:`1. Initialize Multi-tasking (FreeRTOS) on ESP32 dual cores.
2. Core 0: Manage Wi-Fi/MQTT connection and secure handshake.
3. Core 1: Poll RS485 Modbus slaves and local I2C sensors (BME280).
4. Use a Queue to pass data from Core 1 to Core 0.
5. Log all failures to an onboard SD card for audit trails during Wi-Fi outages.`,pin_config:{arduino:[{module:"System",pinName:"System Load",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Requires Dual Core SoC"},{module:"-",pinName:"-",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Switch to ESP32 Platform"}],esp32:[{module:"Main",pinName:"Main Power",mcuPin:"5V (EXT)",direction:"Output",voltage:"3.3V",description:"Requires stable 5V"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Agri-Backbone: FreeRTOS Integrated Hub
// Compatible: ESP32 Dual Core (Core 0: Network | Core 1: Sensors)

#include <WiFi.h>
#include <PubSubClient.h>

void TaskSensorMatrix(void *pvParameters) {
  for(;;) {
    int soil = analogRead(34); 
    Serial.print("Field Sync: "); Serial.println(soil);
    vTaskDelay(2000 / portTICK_PERIOD_MS);
  }
}

void setup() {
  Serial.begin(115200);
  xTaskCreatePinnedToCore(TaskSensorMatrix, "SensorTask", 4096, NULL, 1, NULL, 1);
  // Add MQTT/Connectivity tasks to Core 0 in production
}`,advantages:"Reliable data consolidation, high uptime via FreeRTOS, industry-standard protocols.",disadvantages:"High power consumption; complex firmware management; requires robust network infrastructure.",usage:"Deploy in a NEMA-rated enclosure. Ensure the power supply is isolated and surge-protected.",components:["1x ESP32 DevKit","1x RS485 Shield","1x BME280 Sensor","1x MicroSD Slot"],circuit_diagram:"Consolidated wiring of SPI, I2C, and UART interfaces.",author_name:"NISHANTH",status:"Published",industrial_use:"Central control nodes in smart factories and environmental auditing for data centers.",bom_cost:"$32"},{id:41,title:"Smart Waste Auditor: Ultrasonic Depth Sensing",level:"Beginner",description:"An automated bin that monitors fill levels and opens/closes the lid automatically to ensure urban sanitation.",category:"Smart City",estimatedTime:"40 mins",tech:["Arduino","Ultrasonic","Servo"],concept:"Level detection via time-of-flight. By measuring the time it takes for an ultrasonic pulse to bounce off the trash, we calculate the remaining volume in the bin.",working_principle:`1. Emit 40kHz ultrasonic pulse via Trig pin.
2. Measure 'Echo' return time.
3. Calculate distance (cm = pulse * 0.034 / 2).
4. If distance < 10cm (Lid Open) or > bin_depth (Full Notification).
5. Drive Servo to 90 degrees to open lid when hands are detected near the bin.`,pin_config:{arduino:[{module:"System Power",pinName:"Sensor VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"VCC Rail"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"Servo",pinName:"Servo SIG",mcuPin:"D9",direction:"Output",voltage:"5V",description:"PWM Out"},{module:"HC-SR04 Ultrasonic",pinName:"Trig",mcuPin:"D12",direction:"Output",voltage:"5V",description:"Output"},{module:"HC-SR04 Ultrasonic",pinName:"Echo",mcuPin:"D11",direction:"Output",voltage:"5V",description:"Input"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V/5V",direction:"Power",voltage:"3.3V",description:"Power"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Smart Bin Pro: Logic State Machine
// Compatible: HC-SR04 + MG90S

#include <Servo.h>
Servo lidServo;
const int trig = 12, echo = 11;

void setup() {
  lidServo.attach(9);
  pinMode(trig, OUTPUT); pinMode(echo, INPUT);
}

void loop() {
  static unsigned long lastCheck = 0;
  if (millis() - lastCheck > 200) {
    digitalWrite(trig, LOW); delayMicroseconds(2);
    digitalWrite(trig, HIGH); delayMicroseconds(10);
    digitalWrite(trig, LOW);
    
    long duration = pulseIn(echo, HIGH, 30000); // 30ms timeout
    int distance = duration * 0.034 / 2;
    
    if (distance > 0 && distance < 15) {
      lidServo.write(90); // Open
    } else {
      lidServo.write(0);  // Close
    }
    lastCheck = millis();
  }
}`,advantages:"Touchless hygiene, efficient waste collection routing, low power.",disadvantages:"Ultrasonic sensors struggle with soft materials (foam/fabric) that absorb sound waves.",usage:"Calibrate the 'Full' threshold based on the height of your specific bin.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic","1x MG90S Servo"],circuit_diagram:"Trig->D12 | Echo->D11 | Servo->D9 | Power->5V Rail",author_name:"NISHANTH",status:"Published",industrial_use:"Municipal waste management optimization and public restroom sanitation.",bom_cost:"$12"},{id:42,title:"IoT Pet Telemetry Hub: Weight-Based Feeder",level:"Beginner",description:"Monitor your pet's eating habits and remotely dispense food based on precise weight measurements.",category:"Consumer IoT",estimatedTime:"90 mins",tech:["ESP32","HX711","Stepper"],concept:"Strain gauge integration. By mounting the pet bowl on a load cell, we can monitor the exact grams of food consumed in real-time.",working_principle:`1. Calibrate HX711 with a known weight.
2. Monitor 'Bowl Weight' constantly via ESP32.
3. If 'Consumption' detected, log time and amount to Cloud.
4. Trigger Stepper Motor (Auger screw) to refill bowl to 'Target Weight'.
5. Implement 'Anti-Jam' logic by reversing stepper briefly if torque rises.`,pin_config:{arduino:[{module:"Module",pinName:"Module Power",mcuPin:"5V",direction:"Output",voltage:"5V",description:"VCC Rail"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"HX711",pinName:"HX711 DT/SCK",mcuPin:"D3/D2",direction:"Output",voltage:"5V",description:"Serial Data"},{module:"Stepper",pinName:"Stepper Unit",mcuPin:"D8-D11",direction:"Output",voltage:"5V",description:"ULN2003 Driver"}],esp32:[{module:"Main",pinName:"Main Supply",mcuPin:"5V",direction:"Output",voltage:"3.3V",description:"For Stepper"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Pet Telemetry: Weight-Based Auto-Feeder
// Compatible: HX711 + Stepper Logic

#include "HX711.h"
HX711 scale;

void setup() {
  Serial.begin(115200);
  scale.begin(18, 19);
  scale.set_scale(2280.f); 
  scale.tare();
}

void loop() {
  static unsigned long lastWeigh = 0;
  if (millis() - lastWeigh > 5000) {
    float weight = scale.get_units(5);
    Serial.print("Bowl Weight: "); Serial.println(weight);
    
    if (weight < 50.0) {
      Serial.println("Refilling Bowl...");
      // Trigger stepper rotation for 5 seconds
      // dispenseFoodImplementation();
    }
    lastWeigh = millis();
  }
}`,advantages:"Prevents overfeeding, remote monitoring via mobile, highly accurate sensing.",disadvantages:"Mechanical complexity (Auger design); requires stable Wi-Fi for remote logs.",usage:"Use Food-Grade plastic for the auger. Shield the HX711 from sudden impact loads.",components:["1x ESP32","1x HX711 + 5kg Load Cell","1x 28BYJ-48 Stepper + Driver"],circuit_diagram:"Stepper -> GPIO 13,12,14,27 | HX711 -> GPIO 18,19 | External 5V Power",author_name:"NISHANTH",status:"Published",industrial_use:"Livestock precision feeding and automated grain silos.",bom_cost:"$18"},{id:43,title:"Solar Efficiency Analyzer: Real-Time Power Audit",level:"Beginner",description:"High-precision telemetry node that calculates Solar Panel efficiency by measuring Voltage, Current, and Watts.",category:"Energy & Green Tech",estimatedTime:"60 mins",tech:["Arduino/ESP32","INA219","I2C"],concept:"High-side current sensing. Using a 0.1 ohm shunt resistor and a 12-bit ADC, the INA219 measures the voltage drop across the shunt to calculate current flow up to 3.2A.",working_principle:`1. Wire INA219 between Solar Panel and Battery/Load.
2. Read Shunt Voltage and Bus Voltage via I2C.
3. Calculate Power (P = V * I).
4. Log 'Energy Harvested' (Ah/Wh) over time.
5. Detect panel 'Dirty/Shaded' state if output drops below historical average for the given time of day.`,pin_config:{arduino:[{module:"System Power",pinName:"INA219 VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Supply"},{module:"System Ground",pinName:"INA219 GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common GND"},{module:"I2C",pinName:"I2C Data",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"SDA"},{module:"I2C",pinName:"I2C Clock",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"SCL"}],esp32:[{module:"MCU",pinName:"MCU Power",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}]},code:`// Solar Auditor: High-Precision Energy Logging
// Compatible: INA219 (I2C High Side Monitor)

#include <Wire.h>
#include <Adafruit_INA219.h>

Adafruit_INA219 ina219;

void setup() {
  Serial.begin(115200);
  if (!ina219.begin()) while(1);
}

void loop() {
  float voltage = ina219.getBusVoltage_V();
  float current = ina219.getCurrent_mA();
  float power = voltage * (current / 1000.0);

  Serial.print("Load: "); Serial.print(voltage); Serial.print("V | ");
  Serial.print(current); Serial.print("mA | ");
  Serial.print(power); Serial.println("W");

  delay(2000);
}`,advantages:"Precise energy accounting, allows for panel performance benchmarking.",disadvantages:"Limited to 26V max; shunt resistor generates small amount of heat at max current.",usage:"Use thick gauge wires for the power path to minimize voltage drop.",components:["1x Microcontroller","1x INA219 Sensor","1x 10W Solar Panel","1x OLED Display"],circuit_diagram:"INA219 V-IN+ -> Solar + | V-IN- -> Load + | GND -> Shared GND",author_name:"NISHANTH",status:"Published",industrial_use:"Remote weather stations and UPS battery health monitoring systems.",bom_cost:"$15"},{id:44,title:"Health Link: Heart Rate & SpO2 Monitor",level:"Beginner",description:"Wearable-grade telemedicine node that monitors blood oxygen levels and heart rate using PPG sensor technology.",category:"Medical & Health",estimatedTime:"75 mins",tech:["ESP32","MAX30102","OLED"],concept:"Photoplethysmography (PPG). Red and IR LEDs shine through tissue; the sensor measures the change in light absorption caused by arterial blood pulses to derive SpO2 levels.",working_principle:`1. Initialize MAX30102 via I2C and enable Red/IR LEDs.
2. Sample raw data at 100Hz.
3. Apply a DC-removal filter and Low-pass filter to find pulse peaks.
4. Calculate Heart Rate (BPM) based on Peak-to-Peak interval.
5. Use the 'Ratio-of-Ratios' method to calculate oxygen saturation (SpO2 %).`,pin_config:{arduino:[{module:"MCU",pinName:"MCU Power",mcuPin:"3.3V/5V",direction:"Output",voltage:"5V",description:"Check Module"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"SSD1306 OLED",pinName:"MAX SDA",mcuPin:"A4 (SDA)",direction:"Output",voltage:"5V",description:"I2C Bus"},{module:"SSD1306 OLED",pinName:"MAX SCL",mcuPin:"A5 (SCL)",direction:"Output",voltage:"5V",description:"I2C Bus"}],esp32:[{module:"Power",pinName:"Power Rail",mcuPin:"3.3V",direction:"Output",voltage:"3.3V",description:"VCC"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}]},code:`// Health Link: Heart Rate & SpO2 Sync
// Compatible: MAX30102 via I2C

#include "MAX30105.h"
#include "heartRate.h"

MAX30105 bioHub;
const byte RATE_SIZE = 4; 
byte rates[RATE_SIZE]; 
byte rateSpot = 0; long lastBeat = 0; 
float beatsPerMinute;

void setup() {
  Serial.begin(115200);
  if (!bioHub.begin(Wire, I2C_SPEED_FAST)) while (1);
  bioHub.setup(); 
}

void loop() {
  long irValue = bioHub.getIR();
  if (checkForBeat(irValue) == true) {
    long delta = millis() - lastBeat;
    lastBeat = millis();
    beatsPerMinute = 60 / (delta / 1000.0);
    Serial.print("BPM: "); Serial.println(beatsPerMinute);
  }
}`,advantages:"Non-invasive monitoring, highly portable, integrates easily with smartphone apps.",disadvantages:"Extremely sensitive to movement (motion artifacts); requires firm finger placement.",usage:"Wrap the sensor in dark tape to prevent ambient light interference. Keep finger steady.",components:["1x Microcontroller","1x MAX30102 Sensor","1x 0.96 inch OLED","1x Li-ion Battery"],circuit_diagram:"MAX30102 SDA -> GPIO 21 | SCL -> GPIO 22 | VCC -> 3.3V",author_name:"NISHANTH",status:"Published",industrial_use:"Remote patient monitoring and fitness tracking wearables.",bom_cost:"$22"},{id:45,title:"Contactless Medical Thermometer: MLX90614",level:"Beginner",description:"A high-precision infrared thermometer that measures body or object temperature without physical contact.",category:"Medical & Health",estimatedTime:"50 mins",tech:["Arduino","MLX90614","Infrared"],concept:"Stefan-Boltzmann Law. Every object emits IR radiation. The MLX90614 uses a thermopile to detect this radiation and converts it to a temperature reading using calibrated internal logic.",working_principle:`1. Power the MLX90614 sensor via I2C supply.
2. Read both 'Ambient' (sensor temp) and 'Object' (target temp) via SMBus protocols.
3. The sensor uses an 17-bit ADC to provide 0.02C resolution.
4. If temperature > 37.5C (99.5F), trigger a Red LED and Buzzer for Fever Alert.
5. Map data to Fahrenheit or Celsius as per user preference.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Power Supply"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"Sensor",pinName:"Sensor SDA",mcuPin:"A4 (SDA)",direction:"Input",voltage:"5V",description:"I2C Interface"},{module:"Sensor",pinName:"Sensor SCL",mcuPin:"A5 (SCL)",direction:"Input",voltage:"5V",description:"I2C Interface"},{module:"Active Buzzer",pinName:"Warning Buzzer",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Digital Out"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Medical Pro: Contactless IR Thermometer
// Compatible: MLX90614 (Melexis I2C Sensor)

#include <Adafruit_MLX90614.h>
Adafruit_MLX90614 mlx = Adafruit_MLX90614();

void setup() {
  Serial.begin(115200);
  if (!mlx.begin()) while(1);
}

void loop() {
  float objectTemp = mlx.readObjectTempC();
  Serial.print("Temp: "); Serial.print(objectTemp); Serial.println(" C");
  
  if (objectTemp > 37.5) {
     tone(15, 1000, 500); // Fever Alert
     Serial.println("ALERT: HIGH TEMPERATURE");
  }
  delay(1000);
}`,advantages:"Hygienic (zero contact), extremely fast response, industrial grade accuracy.",disadvantages:"Accuracy drops at distances > 5cm; accuracy affected by surface emissivity (e.g., shiny metal).",usage:"Hold the sensor approximately 2-4cm from the forehead for the most accurate medical-grade reading.",components:["1x Microcontroller","1x MLX90614 Sensor","1x Active Buzzer","1x Battery Case"],circuit_diagram:"Sensor SDA -> A4 | SCL -> A5 | Buzzer -> D3 | VCC -> 5V Rail",author_name:"NISHANTH",status:"Published",industrial_use:"Health screening at entry points and non-destructive industrial temperature checks.",bom_cost:"$24"},{id:46,title:"LTE Asset Tracker: Cellular IoT Node",level:"Advanced",description:"A global tracking device that uses LTE-M/NB-IoT cellular networks to report GPS position even without Wi-Fi.",category:"Industrial & Logistics",estimatedTime:"120 mins",tech:["ESP32","SIM7000G","GPS"],concept:"Wide-area cellular coverage. Unlike Wi-Fi, LTE-M (Long Term Evolution for Machines) allows for low-power, long-distance communication suitable for assets moving across cities or countries.",working_principle:`1. Interface with the SIM7000G module via Hardware Serial (UART).
2. Power up the GPS engine and wait for a 3D Fix (satellite Lock).
3. Establish a GPRS/LTE data session via 'AT' commands.
4. Encode GPS coordinates (Latitude, Longitude) into a JSON payload.
5. Push data to a cloud MQTT broker and enter 'Power Down' mode to save battery.`,pin_config:{arduino:[{module:"System Power",pinName:"SIM VCC",mcuPin:"5V (EXT)",direction:"Power",voltage:"5V",description:"Requires 2A Burst"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x SIM7000G Module",pinName:"SIM RX",mcuPin:"D7 (TX)",direction:"Input",voltage:"5V",description:"Level shifted"},{module:"1x SIM7000G Module",pinName:"SIM TX",mcuPin:"D8 (RX)",direction:"Output",voltage:"5V",description:"Signal In"}],esp32:[{module:"SIM7000",pinName:"SIM7000 Power",mcuPin:"5V (EXT)",direction:"Output",voltage:"3.3V",description:"Main Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Global LTE Tracker: SIM7000 Serial Interface
// Compatible: ESP32 + SIM7000G GSM/GPS

#include <HardwareSerial.h>

void setup() {
  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, 16, 17);
  
  Serial.println("Booting SIM7000 Module...");
  sendAT("AT");
  sendAT("AT+CGNSPWR=1"); // Enable GPS Power
}

void loop() {
  static unsigned long lastUpdate = 0;
  if (millis() - lastUpdate > 30000) {
    sendAT("AT+CGNSINF"); // Query Location Info
    lastUpdate = millis();
  }
}

void sendAT(String cmd) {
  Serial2.println(cmd);
  delay(500); 
  while(Serial2.available()) Serial.print((char)Serial2.read());
}`,advantages:"Works anywhere with cellular signal; much longer range than BT/Wi-Fi; high security.",disadvantages:"Requires a SIM card and data plan; higher module cost; complex power management.",usage:"Use an active GPS antenna for faster satellite lock. Ensure the module is placed near a window or outdoors.",components:["1x ESP32","1x SIM7000G Module","1x GPS Antenna","1x LTE Antenna","1x 3.7V LiPo"],circuit_diagram:"SIM7000 TX/RX -> ESP32 RX2/TX2 | Power -> Dedicated 5V/2A Source",author_name:"NISHANTH",status:"Published",industrial_use:"Fleet management, high-value asset tracking (containers/heavy machinery), and wildlife tracking.",bom_cost:"$45"},{id:47,title:"Agri-Nervous System: NPK Soil Auditor",level:"Advanced",description:"Industrial grade soil analysis tool that measures Nitrogen (N), Phosphorus (P), and Potassium (K) using RS485 Modbus.",category:"Agri-Tech",estimatedTime:"100 mins",tech:["Arduino/ESP32","NPK Sensor","RS485"],concept:"Optical reflection spectroscopy. The industrial NPK probe uses specific light wavelengths to detect the concentration of soil nutrients, mapping the results to a Modbus register.",working_principle:`1. Connect the NPK probe to a MAX485 TTL-to-RS485 converter.
2. Send a hex request frame (e.g., 0x01 0x03 0x00 0x00...).
3. Receive the response frame and extract the payload bytes.
4. Convert the hex values to mg/kg (PPM) for N, P, and K.
5. Log data to an SD card and trigger'Fertilizer Needed' alerts if levels fall below thresholds.`,pin_config:{arduino:[{module:"Probe",pinName:"Probe Power",mcuPin:"5V/12V",direction:"Output",voltage:"5V",description:"Check Rating"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common GND"},{module:"SoftwareSerial",pinName:"SoftwareSerial",mcuPin:"D2/D3",direction:"Output",voltage:"5V",description:"RX/TX"},{module:"RE/DE",pinName:"RE/DE",mcuPin:"D4",direction:"Output",voltage:"5V",description:"Dir Control"}],esp32:[{module:"Probe",pinName:"Probe Power",mcuPin:"12V (EXT)",direction:"Output",voltage:"3.3V",description:"Required"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Precision Agri-NPK: Modbus RTU Query
// Compatible: Industrial RS485 NPK Sensors

byte n_query[] = {0x01, 0x03, 0x00, 0x1E, 0x00, 0x01, 0xE4, 0x0C};
const int de_re = 4;

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);
  pinMode(de_re, OUTPUT);
}

void loop() {
  digitalWrite(de_re, HIGH); // Driver Enable
  Serial2.write(n_query, 8);
  Serial2.flush();
  digitalWrite(de_re, LOW);  // Receiver Enable
  
  delay(100); // Wait for processing
  
  if (Serial2.available() >= 7) {
    byte response[7];
    Serial2.readBytes(response, 7);
    int nitrogen = (response[3] << 8) | response[4];
    Serial.print("Nitrogen (N): "); Serial.print(nitrogen); Serial.println(" mg/kg");
  }
  delay(5000);
}`,advantages:"Precise fertilizer application, increases crop yield, data-driven farming.",disadvantages:"Probes are expensive (~$30-$50); requires external 12V-24V power supply for the probe.",usage:"Insert the probe fully into the soil. Ensure the RS485 lines (A and B) are not swapped.",components:["1x ESP32","1x RS485 NPK Sensor","1x MAX485 Converter","1x 12V DC Supply"],circuit_diagram:"NPK A/B -> MAX485 A/B | MAX485 RO/DI -> ESP32 16/17 | Power -> 12V",author_name:"NISHANTH",status:"Published",industrial_use:"Large-scale automated greenhouses and precision farming consulting services.",bom_cost:"$55"},{id:48,title:"Industrial pH & Water Quality Monitor",level:"Beginner",description:"Continuous monitoring system for hydroponics or pool management using a BNC-interface pH electrode.",category:"Environmental",estimatedTime:"70 mins",tech:["Arduino","pH Sensor","Analog"],concept:"Potentiometric measurement. The pH probe generates a small millivolt signal (-414mV to +414mV) proportional to the hydrogen ion activity, which is amplified for the MCU to read.",working_principle:`1. Connect the pH probe via its BNC connector to the amplifier board.
2. Collect 10 analog readings and take the average to reduce noise.
3. Implement a 2-point calibration (pH 4.0 and pH 7.0).
4. Convert the average voltage into a pH value (0.0 to 14.0).
5. Use an LCD to display the pH and Water Temperature for automatic compensation.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"1x Industrial pH Probe + Amp",pinName:"pH Signal",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog Input"}],esp32:[{module:"MCU",pinName:"MCU Power",mcuPin:"3.3V",direction:"Output",voltage:"3.3V",description:"Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// pH Guardian: Signal Conditioning
// Compatible: BNC pH Probes

const int phPin = A0;
float calibrationOffset = 0.00;

void setup() {
  Serial.begin(115200);
}

void loop() {
  unsigned long int avgValue = 0;
  for(int i=0; i<10; i++) { avgValue += analogRead(phPin); delay(10); }
  
  float voltage = (float)avgValue * 5.0 / 1024.0 / 10.0;
  float phValue = 3.5 * voltage + calibrationOffset;
  
  Serial.print("Live pH: "); Serial.println(phValue, 2);
  delay(1000);
}`,advantages:"High accuracy with proper calibration, durable industrial probe, critical for biological life.",disadvantages:"Probes require periodic storage in KCl solution; sensor 'drifts' over time; sensitive to electrical noise.",usage:"Do not submerge the BNC connector in water. Clean the probe with distilled water after measurements.",components:["1x Microcontroller","1x Industrial pH Probe + Amp","1x DS18B20 Temp Sensor"],circuit_diagram:"pH Amp VCC/GND -> 5V Rail | pH Signal -> A0 | Temp SIG -> D2",author_name:"NISHANTH",status:"Published",industrial_use:"Aquaponics, wastewater treatment plants, and smart pool maintenance.",bom_cost:"$35"},{id:49,title:"Greenhouse Gas Auditor: CO2 & VOC Hub",level:"Intermediate",description:"Monitor indoor air safety by measuring Carbon Dioxide (CO2) and Volatile Organic Compounds (VOCs).",category:"Environmental",estimatedTime:"55 mins",tech:["ESP32","MH-Z19B","CCS811"],concept:"NDIR (Non-Dispersive Infrared). The MH-Z19B uses an IR light source and filter to count the absorption of CO2 molecules, providing much higher accuracy than simple chemical sensors.",working_principle:`1. Interface with the MH-Z19B sensor via Hardware Serial (UART).
2. Read CO2 concentration in Parts Per Million (PPM).
3. Initialize the CCS811 via I2C for TVOC (Total Volatile Organic Compounds) data.
4. Log data: <1000ppm (Safe), 1000-2000ppm (Drowsy), >2000ppm (Unsafe).
5. Trigger an Exhaust Fan via Relay if CO2 concentration exceeds 1500ppm.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Sensor Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"MH-Z19",pinName:"MH-Z19 RX",mcuPin:"D10 (TX)",direction:"Input",voltage:"5V",description:"SoftSerial"},{module:"MH-Z19",pinName:"MH-Z19 TX",mcuPin:"D11 (RX)",direction:"Output",voltage:"5V",description:"SoftSerial"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Air Guard Pro: NDIR CO2 Integration
// Compatible: MH-Z19B (UART Interface)

#include <MHZ19.h>
MHZ19 myMHZ19;
const int relayPin = 4;

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);
  myMHZ19.begin(Serial2);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  int co2 = myMHZ19.getCO2();
  Serial.print("Ambient CO2: "); Serial.print(co2); Serial.println(" PPM");
  
  if (co2 > 1200) digitalWrite(relayPin, HIGH); // Exhaust ON
  else digitalWrite(relayPin, LOW);             // Exhaust OFF
  
  delay(5000);
}`,advantages:"Industrial-grade NDIR sensor, precise health monitoring, easy integration into HVAC.",disadvantages:"Requires 3-minute 'Warm-up' time; MH-Z19B consumes significant current (up to 150mA).",usage:"Place the sensor at breathing height (approx 1.5m). Calibration is self-running after 24h of operation.",components:["1x ESP32","1x MH-Z19B NDIR Sensor","1x CCS811 VOC Sensor","1x 5V Relay"],circuit_diagram:"MH-Z19 TX/RX -> ESP32 RX2/TX2 | CCS811 SDA/SCL -> GPIO 21/22",author_name:"NISHANTH",status:"Published",industrial_use:"Smart office ventilation, greenhouse climate control, and mining safety monitoring.",bom_cost:"$28"},{id:50,title:"Seismic Guard: Early Warning System",level:"Advanced",description:"High-sensitivity vibration node designed to detect early-stage seismic activity or industrial structural failure.",category:"Industrial & Safety",estimatedTime:"85 mins",tech:["ESP32","ADXL355","Interrupts"],concept:"Digital micro-gravity sensing. Using a high-resolution accelerometer with very low noise, we can detect microscopic tremors and categorize them into seismic magnitude scales.",working_principle:`1. Initialize the ADXL355/345 via SPI or I2C in 'FIFO' mode.
2. Sample X-Y-Z axes at 500Hz.
3. Implement a 'Short-Time Average over Long-Time Average' (STA/LTA) detector algorithm.
4. If ratio > 5, a 'Seismic Event' is declared.
5. Broadcast high-priority alerts to all nearby nodes using ESP-NOW for rapid warning.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"Required Power"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"1x SPI Logic Shifter",pinName:"SPI CS",mcuPin:"D10",direction:"Output",voltage:"5V",description:"High Speed"},{module:"1x SPI Logic Shifter",pinName:"SPI Bus",mcuPin:"D11,12,13",direction:"Output",voltage:"5V",description:"MOSI/MISO/SCK"}],esp32:[{module:"MCU",pinName:"MCU Power",mcuPin:"3.3V",direction:"Output",voltage:"3.3V",description:"Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Seismic Sentinel: Fast Vibration Analysis
// Compatible: ESP32 + ADXL Series

void loop() {
  long startTime = millis();
  float totalVib = 0;
  
  // STA/LTA Window Sampling
  for(int i=0; i<100; i++) {
     totalVib += abs(analogRead(34) - 512); // Assuming biased signal
  }
  
  float averageVib = totalVib / 100.0;
  if (averageVib > 100) {
     Serial.println("SEISMIC TRIGGER DETECTED");
     // Implement ESP-NOW Broadcast here
  }
  delay(10);
}`,advantages:"Critical for safety, ultra-fast alert propagation, industrial-grade sensitivity.",disadvantages:"Prone to 'false positives' from local foot traffic or machinery; complex signal processing.",usage:"Mount the sensor on a solid building pillar or concrete floor using industrial adhesive for best vibration transmission.",components:["1x ESP32","1x ADXL355 Accel","1x High-Decibel Buzzer","1x SPI Logic Shifter"],circuit_diagram:"ADXL SPI -> ESP32 VSPI Port | Buzzer -> GPIO 4",author_name:"NISHANTH",status:"Published",industrial_use:"Earthquake early warning, structural health monitoring for bridges, and machinery fault detection.",bom_cost:"$32"},{id:51,title:"BLE Mesh Beacon Scanner: Retail Analytics",level:"Advanced",description:"A high-speed BLE scanner that tracks asset movement and customer foot traffic by triangulation of BLE Beacons.",category:"Smart Retail",estimatedTime:"110 mins",tech:["ESP32","BLE","JSON"],concept:"RSSI-based proximity. BLE beacons emit periodic 'Advertisements'. By measuring the Received Signal Strength Indicator (RSSI), we can estimate the distance to the beacon.",working_principle:`1. Initialize the ESP32 BLE stack in 'Passive Scanning' mode.
2. Set a 10s scan window to capture all nearby iBeacon/Eddystone packets.
3. Filter packets by UUID to target specific assets.
4. Map the RSSI to distance using the Log-Distance Path Loss model.
5. Batch data into a JSON object and push to the Cloud via Wi-Fi for heat-map generation.`,pin_config:{arduino:[{module:"Hardware",pinName:"Hardware",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Requires BLE (ESP32)"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// BLE Analytics: Proximity Scanner
// Compatible: ESP32 (Native BLE Stack)

#include <BLEDevice.h>
#include <BLEScan.h>

BLEScan* pBLEScan;

void setup() {
  Serial.begin(115200);
  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan();
  pBLEScan->setActiveScan(false); // Passive for low power
}

void loop() {
  Serial.println("BLE Scanning started...");
  BLEScanResults foundDevices = pBLEScan->start(10, false);
  
  for (int i = 0; i < foundDevices.getCount(); i++) {
    BLEAdvertisedDevice device = foundDevices.getDevice(i);
    if (device.haveRSSI()) {
       Serial.print("Device RSSI: "); 
       Serial.println(device.getRSSI());
    }
  }
  pBLEScan->clearResults(); 
  delay(5000);
}`,advantages:"Low cost per trackable unit; extremely low power (beacons last years on coincells).",disadvantages:"Prone to interference from human bodies/walls (blocking 2.4GHz); ±2m accuracy limit.",usage:"Mount scanners at ceiling height (2.5m - 3m) for maximum line-of-sight coverage.",components:["1x ESP32 DevKit","Multiple BLE Beacons","1x External Wi-Fi Antenna (Optional)"],circuit_diagram:"Scanners operate autonomously via Wi-Fi; Beacons are stand-alone battery units.",author_name:"NISHANTH",status:"Published",industrial_use:"Warehouse inventory tracking and customer dwell-time analysis in shopping malls.",bom_cost:"$15"},{id:52,title:"Stratospheric Payload: LoRa Balloon Telemetry",level:"Advanced",description:"Design a lightweight telemetric node for high-altitude ballooning that survives extreme cold and low pressure.",category:"Aerospace & LoRa",estimatedTime:"180 mins",tech:["ESP32","LoRa","BME280"],concept:"Line-of-Sight transmission. In the upper atmosphere, a 100mW LoRa signal can travel over 200km due to the lack of geographical obstructions.",working_principle:`1. Initialize SPI communication with the LoRa (SX1276) chip.
2. Collect T-P-H data from the BME280 sensor.
3. Implement 'Low-Temperature Calibration' for the MCU clock (to prevent timing drift at -40C).
4. Transmit data in 'long-range' LoRa mode (SF12, BW 125kHz).
5. Enter 'Deep Sleep' between transmissions to conserve battery at altitude.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"From LiPo"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common GND"},{module:"1x RA-02 LoRa Module",pinName:"LoRa NSS",mcuPin:"D10",direction:"Output",voltage:"5V",description:"SPI"},{module:"SPI",pinName:"SPI Bus",mcuPin:"D13,11,12",direction:"Output",voltage:"5V",description:"SCK/MOSI/MISO"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Aerospace Telemetry: LoRa Balloon Node
// Compatible: ESP32 + LoRa + BME280

#include <LoRa.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(115200);
  if (!LoRa.begin(915E6)) while(1);
  if (!bme.begin(0x76)) Serial.println("BME Fail");
}

void loop() {
  LoRa.beginPacket();
  LoRa.print("T:"); LoRa.print(bme.readTemperature());
  LoRa.print("|P:"); LoRa.print(bme.readPressure() / 100.0F);
  LoRa.endPacket();
  
  esp_sleep_enable_timer_wakeup(60 * 1000000); // 1-minute sleep
  esp_deep_sleep_start();
}`,advantages:"Massive communication range; low hardware cost compared to satellite links.",disadvantages:"Requires thermal insulation (polystyrene box) to prevent battery failure at -50C.",usage:"Use a 1/2 wave dipole antenna pointed downwards for optimal ground coverage.",components:["1x ESP32","1x RA-02 LoRa Module","1x BME280","1x 18650 Li-ion Cell"],circuit_diagram:"LoRa SPI -> VSPI Port | BME280 SDA/SCL -> GPIO 21/22 | Antenna -> SMA Connector",author_name:"NISHANTH",status:"Published",industrial_use:"Weather research balloons and long-range wildlife migration tracking.",bom_cost:"$26"},{id:53,title:"Smart City Lighting Mesh: Reactive Grid",level:"Intermediate",description:"A node-to-node mesh network where streetlights communicate to create a 'Light Wave' that follows pedestrians/vehicles.",category:"Smart City",estimatedTime:"90 mins",tech:["ESP32","ESP-NOW","LDR"],concept:"Peer-to-peer mesh. Using ESP-NOW, nodes broadcast 'Motion Detected' messages to all neighbors instantly without needing a central router.",working_principle:`1. Initialize ESP-NOW on all lighting nodes.
2. Use a PIR sensor to detect nearby movement.
3. When motion occurs: Node A fades LED to 100% and sends 'Trigger' to Nodes B and C.
4. Nodes B and C fade to 50% for 30s to provide 'anticipatory' lighting.
5. All nodes dim to 5% power during inactivity to save energy.`,pin_config:{arduino:[{module:"Protocol",pinName:"Protocol",mcuPin:"N/A",direction:"Output",voltage:"5V",description:"Requires Wi-Fi Stack"}],esp32:[{module:"System Power",pinName:"VCC Rail",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Motion Detection"}]},code:`// Smart Mesh: Reactive Lighting Grid
// Compatible: ESP32 + ESP-NOW (Peer-to-Peer)

#include <esp_now.h>
#include <WiFi.h>

void onDataRecv(const uint8_t *mac, const uint8_t *data, int len) {
  if (data[0] == 0xFF) { // Broadcast Signal
    ledcWrite(0, 128);   // Dim to 50%
  }
}

void setup() {
  WiFi.mode(WIFI_STA);
  if (esp_now_init() != ESP_OK) return;
  esp_now_register_recv_cb(onDataRecv);
  pinMode(13, INPUT); // PIR PIN
}

void loop() {
  if (digitalRead(13) == HIGH) {
    ledcWrite(0, 255); // 100% Local
    uint8_t broadcast[] = {0xFF};
    // esp_now_send logic here
  }
  delay(100);
}`,advantages:"Reduces urban power consumption by 80%; decentralized (no single point of failure).",disadvantages:"Requires high-density of nodes for reliable mesh relay (max 100m spacing).",usage:"Use constant-current LED drivers if controlling actual streetlights (>10W).",components:["2x ESP32 DevKits","2x PIR Sensors","2x High-Power LEDs","1x 5V Supply"],circuit_diagram:"PIR -> GPIO 13 | LED -> GPIO 12/Logic MOSFET | VCC -> 5V rail",author_name:"NISHANTH",status:"Published",industrial_use:"Smart highway lighting and low-traffic industrial park security lighting.",bom_cost:"$20"},{id:54,title:"Urban Noise Pollution Auditor",level:"Intermediate",description:"Continuous acoustic monitoring node that calculates dB(A) levels and identifies noise ordinance violations in cities.",category:"Environmental",estimatedTime:"60 mins",tech:["Arduino/ESP32","MAX9814","Audio"],concept:"A-weighting filter. Human hearing is less sensitive to very low and high frequencies. This project implements a software filter to map raw sound pressure to the dB(A) human perception scale.",working_principle:`1. Sample the MAX9814 microphone at high frequency (10kHz).
2. Calculate the Root Mean Square (RMS) of the audio window.
3. Convert RMS voltage to deciBels using a logarithmic calibration curve.
4. Implement an 'Event Log' for noises > 85dB.
5. Upload average dB levels every 15 mins to an environmental heat-map server.`,pin_config:{arduino:[{module:"System Power",pinName:"Mic VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Logic Supply"},{module:"System Ground",pinName:"Mic GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Return"},{module:"1x Microcontroller",pinName:"Mic Out",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog Signal"}],esp32:[{module:"Supply",pinName:"Supply",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Power Rail"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Urban Noise Auditor: RMS Calculation
// Compatible: MAX9814 / MAX4466 Modules

const int micPin = A0;
const float ref_v = 1.0, calibration = 40.0;

void loop() {
  long sumSq = 0;
  unsigned long start = millis();
  int samples = 0;
  
  while (millis() - start < 100) {
    int val = analogRead(micPin) - 512;
    sumSq += (long)val * val;
    samples++;
  }
  
  float rms = sqrt((float)sumSq / samples);
  float db = 20 * log10(rms / ref_v) + calibration;
  
  Serial.print("dB(A): "); Serial.println(db);
  delay(500);
}`,advantages:"Low-cost alternative to industrial decibel meters; allows for city-wide mesh deployment.",disadvantages:"Microphones degrade when exposed directly to rain/humidity; requires acoustic calibration.",usage:"Place the microphone in an 'Acoustic Shell' or wind-sock to prevent wind-noise from skewing readings.",components:["1x Microcontroller","1x MAX9814 AGC Microphone","1x Waterproof Enclosure"],circuit_diagram:"Mic VCC -> 5V | Mic Gain -> GND | Mic Out -> A0 | VCC -> 5V",author_name:"NISHANTH",status:"Published",industrial_use:"Enforcing construction site noise limits and auditing highway acoustic barriers.",bom_cost:"$14"},{id:55,title:"RFID Inventory Management System",level:"Intermediate",description:"A smart warehouse node that tracks arrival/departure of items in real-time using RFID tags.",category:"Industrial & Logistics",estimatedTime:"70 mins",tech:["Arduino","RFID-RC522","SPI"],concept:"Identity persistence. Each RFID tag has a unique 4 or 7-byte UID. By reading this UID and checking it against a local or remote Database, we verify the item's location and status.",working_principle:`1. Initialize the RC522 reader via the SPI bus.
2. Wait for a passive RFID (13.56 MHz) tag to enter the magnetic field.
3. Authenticate the data sectors of the card (Block 1).
4. Update the 'Last Location' timestamp for that specific UID.
5. Trigger a Green LED (Accepted) or Red LED (Denied/Audit Required).`,pin_config:{arduino:[{module:"System Power",pinName:"Reader VCC",mcuPin:"3.3V",direction:"Power",voltage:"5V",description:"Do not use 5V"},{module:"System Ground",pinName:"Reader GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common GND"},{module:"SDA",pinName:"SDA (SS)",mcuPin:"D10",direction:"Output",voltage:"5V",description:"SPI"},{module:"SPI",pinName:"SPI Bus",mcuPin:"D13,11,12",direction:"Output",voltage:"5V",description:"SCK/MOSI/MISO"},{module:"MFRC522 RFID",pinName:"RST Pin",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Reset"}],esp32:[{module:"System Power",pinName:"RC522 VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Must be 3.3V"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RFID Inventory Hub: Logistics Mode
// Compatible: RC522 SPI Reader

#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
}

void loop() {
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    Serial.print("UID Identified: ");
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      Serial.print(mfrc522.uid.uidByte[i], HEX);
    }
    Serial.println();
    mfrc522.PICC_HaltA();
    delay(1000);
  }
}`,advantages:"Contactless identification; extremely low cost per tag; durable compared to barcodes.",disadvantages:"Limited range (3-5cm); metal items interfere with the antenna field.",usage:"Mount the reader behind non-metallic panels for a clean, industrial look.",components:["1x Microcontroller","1x RC522 Module","10x RFID Keyfobs/Cards"],circuit_diagram:"RC522 VCC -> 3.3V | RC522 SPI -> MCU SPI Port | Reset -> D9",author_name:"NISHANTH",status:"Published",industrial_use:"Employee access control and real-time palette tracking in loading bays.",bom_cost:"$16"},{id:56,title:"Secure Biometric Door Logic: Wi-Fi Log",level:"Advanced",description:"An enterprise-grade door locking system that uses fingerprint biometrics and logs every entry to a secure Wi-Fi server.",category:"Security & Smart Home",estimatedTime:"90 mins",tech:["ESP32","AS608 Fingerprint","Relay"],concept:"Biometric hashing. The AS608 sensor converts a fingerprint image into a mathematical hash. If the scanned hash matches a stored template, the door is unlocked.",working_principle:`1. Enroll fingerprints into the AS608's internal lash library.
2. In standby, the ESP32 waits for a finger to be placed on the sensor.
3. Upon scan, the AS608 returns a 'Confidence Score' and 'ID Number'.
4. If Score > Threshold, trigger the 12V Solenoid via a Relay/MOSFET.
5. Log the User ID and Timestamp to a remote Google Sheet or MQTT logger via Wi-Fi.`,pin_config:{arduino:[{module:"Module",pinName:"Module Power",mcuPin:"5V",direction:"Output",voltage:"5V",description:"Logic Supply"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"AS608",pinName:"AS608 TX/RX",mcuPin:"D2/D3",direction:"Input",voltage:"5V",description:"SoftSerial"},{module:"Relay Module",pinName:"Relay SIG",mcuPin:"D4",direction:"Output",voltage:"5V",description:"Driver Pin"}],esp32:[{module:"System Power",pinName:"AS608 VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Logic Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Bio-Secure Entry: Biometric Node
// Compatible: AS608 Fingerprint + Relay

#include <Adafruit_Fingerprint.h>

#if defined(ESP32)
  HardwareSerial mySerial(2); 
#else
  #include <SoftwareSerial.h>
  SoftwareSerial mySerial(2, 3);
#endif

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);
const int relayPin = 4;

void setup() {
  Serial.begin(115200);
  #if defined(ESP32)
    mySerial.begin(57600, SERIAL_8N1, 16, 17);
  #else
    mySerial.begin(57600);
  #endif
  
  if (finger.verifyPassword()) Serial.println("Biometric Hub Online");
  pinMode(relayPin, OUTPUT);
}

void loop() {
  int result = getFingerprintID();
  if (result >= 0) {
    Serial.print("Access Granted ID: "); Serial.println(result);
    digitalWrite(relayPin, HIGH); delay(3000); digitalWrite(relayPin, LOW);
  }
  delay(100); 
}`,advantages:"Cannot be picked or bypassed like traditional keys; precise audit trail of entries.",disadvantages:"Sensor performance drops if finger is wet or dirty; requires 12V supply for the lock solenoid.",usage:"Use an opto-isolated relay to protect the ESP32 from the inductive kickback of the solenoid.",components:["1x ESP32","1x AS608 Fingerprint Sensor","1x 5V Relay Module","1x 12V Solenoid Lock"],circuit_diagram:"Fingerprint RX/TX -> ESP32 17/16 | Relay -> GPIO 4 | Solenoid -> Relay Output",author_name:"NISHANTH",status:"Published",industrial_use:"Server room access control and high-security equipment lockers.",bom_cost:"$38"},{id:57,title:"Liquid Level PID Controller",level:"Advanced",description:"The Liquid Level PID Controller is an advanced control system designed to maintain a constant liquid level in a tank using PID (Proportional-Integral-Derivative) control logic. The system continuously monitors the liquid level and automatically controls a pump or valve to maintain the desired setpoint.",category:"Industrial Automation",estimatedTime:"110 mins",tech:["Arduino","Ultrasonic","PWM Pump"],concept:"PID Control (Proportional-Integral-Derivative). Instead of simply turning the pump ON/OFF, we calculate a precise motor speed based on the error between current level and setpoint.",working_principle:`1. Ultrasonic sensor measures liquid level in real-time.
2. User sets desired level using a potentiometer.
3. PID controller compares actual level with setpoint.
4. PID algorithm calculates optimal control output.
5. Pump speed or ON/OFF state is adjusted automatically via motor driver/relay.
6. Level stabilizes at the precise desired height.
7. Data is visualized on an OLED display.`,pin_config:{arduino:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"D5",direction:"Output",voltage:"5V",description:"Trigger signal"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"D6",direction:"Input",voltage:"5V",description:"Echo response"},{module:"Pump Relay",pinName:"IN",mcuPin:"D7",direction:"Output",voltage:"5V",description:"Pump control"},{module:"OLED",pinName:"SDA",mcuPin:"A4",direction:"I2C",voltage:"5V",description:"Data line"},{module:"OLED",pinName:"SCL",mcuPin:"A5",direction:"I2C",voltage:"5V",description:"Clock line"},{module:"Potentiometer",pinName:"OUT",mcuPin:"A0",direction:"Input",voltage:"5V",description:"Setpoint"}],esp32:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Trigger signal"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 18",direction:"Input",voltage:"3.3V",description:"Echo response"},{module:"Pump Relay",pinName:"IN",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Motor control"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Data line"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Clock line"},{module:"Potentiometer",pinName:"OUT",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Setpoint"}]},code:`#include <PID_v1.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define TRIG 5
#define ECHO 18
#define RELAY 26
#define POT A0

double Setpoint, Input, Output;
double Kp = 2.0, Ki = 5.0, Kd = 1.0;

PID myPID(&Input, &Output, &Setpoint, Kp, Ki, Kd, DIRECT);

Adafruit_SSD1306 display(128, 64, &Wire, -1);

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(RELAY, OUTPUT);

  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();

  Setpoint = 20;
  myPID.SetMode(AUTOMATIC);
}

void loop() {
  Input = getDistance();
  myPID.Compute();

  if (Input > Setpoint)
    digitalWrite(RELAY, HIGH);
  else
    digitalWrite(RELAY, LOW);

  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Level: ");
  display.println(Input);

  display.setCursor(0, 20);
  display.print("Set: ");
  display.println(Setpoint);

  display.setCursor(0, 40);
  display.print("Output: ");
  display.println(Output);

  display.display();
  delay(1000);
}`,advantages:"Accurate level control, reduces overflow, automatic operation, industrial-grade logic.",disadvantages:"Requires tuning of PID values, sensor accuracy affects performance.",usage:"Use a check-valve on the pump outlet to prevent backflow when the pump is at low duty-cycles.",components:["ESP32 / Arduino UNO","Ultrasonic Sensor / Level Sensor","Relay Module / Motor Driver","Water Pump / Valve","OLED Display","Potentiometer (Setpoint)","Jumper Wires","Power Supply 5V/12V"],circuit_diagram:"Ultrasonic (TRIG: 5, ECHO: 18), Relay (IN: 26), Potentiometer (OUT: 34), OLED (SDA: 21, SCL: 22).",author_name:"NISHANTH",status:"Published",industrial_use:"Chemical process tanks, water treatment plants, boiler water control, and smart irrigation systems.",bom_cost:"$25"},{id:58,title:"Industrial Conveyor Counter: IR Beam",level:"Beginner",description:"High-speed non-contact counter for manufacturing lines using infrared break-beam technology.",category:"Industrial Automation",estimatedTime:"45 mins",tech:["Arduino","IR Beam","I2C LCD"],concept:"Optical interruption. When an object passes through the IR beam, it blocks the signal to the receiver, triggering a digital pulse that the MCU counts using an edge-triggered Interrupt.",working_principle:`1. Align the IR Transmitter and IR Receiver (Phototransistor) across the conveyor path.
2. Receiver output is HIGH when beam is intact, LOW when blocked.
3. Setup a Hardware Interrupt (INT0) on the MCU to detect the FALLING edge.
4. Increment a global 'Count' variable for every interruption.
5. Handle 'Debouncing' in software to ensure multiple objects in close proximity are counted accurately.`,pin_config:{arduino:[{module:"1x IR Break-beam Pair",pinName:"IR Power",mcuPin:"5V",direction:"Output",voltage:"5V",description:"Supply"},{module:"System Ground",pinName:"GND Rail",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Ground"},{module:"1x IR Break-beam Pair",pinName:"IR Receiver",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt 0"}],esp32:[{module:"Logic",pinName:"Logic Power",mcuPin:"3.3V",direction:"Output",voltage:"3.3V",description:"Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Industrial Counter: ISR Break-Beam
// Compatible: IR Receiver Modules

volatile unsigned long pulseCount = 0;
unsigned long lastDebounce = 0;

void IRAM_ATTR countBridge() {
  if (millis() - lastDebounce > 50) {
    pulseCount++;
    lastDebounce = millis();
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), countBridge, FALLING);
}

void loop() {
  static unsigned long lastPrint = 0;
  if (millis() - lastPrint > 1000) {
    Serial.print("Conveyor Units: "); Serial.println(pulseCount);
    lastPrint = millis();
  }
}`,advantages:"Reliable at high speeds; non-contact (works for sensitive items); cheap implementation.",disadvantages:"Dust or steam on lenses can cause false counts; requires precise physical alignment.",usage:"Mount the sensors in a sturdy metal bracket to prevent misalignment from conveyor vibration.",components:["1x Arduino Uno","1x IR Break-beam Pair","1x I2C 16x2 LCD","1x Bracket Set"],circuit_diagram:"IR RX OUT -> D2 | IR TX/RX VCC -> 5V | LCD SDA/SCL -> A4/A5",author_name:"NISHANTH",status:"Published",industrial_use:"Bottle counting in beverage plants and component verification in SMT assembly lines.",bom_cost:"$12"},{id:59,title:"Elderly Care Panic System",level:"Advanced",description:"The Elderly Care Panic System is an advanced IoT-based safety solution designed to protect elderly people. The system monitors the user’s location using GPS and features a panic button that instantly transmits real-time coordinates via LTE (4G) to caregivers.",category:"Medical & Safety",estimatedTime:"110 mins",tech:["ESP32","GSM/LTE","GPS"],concept:"Critical link reliability. By combining GPS (Location) and GSM (Communication), this node ensures that help is dispatched to the exact coordinates even if the person is outdoors.",working_principle:`1. GPS module tracks location.
2. Emergency panic button is triggered.
3. ESP32 parses NMEA coordinates.
4. LTE module sends distress SMS with Google Maps link.`,pin_config:{esp32:[{module:"GPS",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"3.3V",description:"GPS data"},{module:"GPS",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"3.3V",description:"GPS control"},{module:"LTE",pinName:"TX",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"LTE UART"},{module:"LTE",pinName:"RX",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"LTE UART"},{module:"Panic Button",pinName:"BTN",mcuPin:"GPIO 14",direction:"Input",voltage:"3.3V",description:"Emergency trigger"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"Emergency alert"}]},code:`#include <TinyGPS++.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define GPS_RX 16
#define GPS_TX 17
#define LTE_RX 27
#define LTE_TX 26
#define PANIC_BTN 14
#define BUZZER 25

TinyGPSPlus gps;
HardwareSerial gpsSerial(1);
HardwareSerial lteSerial(2);

Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  Serial.begin(115200);
  pinMode(PANIC_BTN, INPUT_PULLUP);
  pinMode(BUZZER, OUTPUT);
  gpsSerial.begin(9600, SERIAL_8N1, GPS_RX, GPS_TX);
  lteSerial.begin(115200, SERIAL_8N1, LTE_RX, LTE_TX);
  Wire.begin(21, 22);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
}

void loop() {
  while (gpsSerial.available()) gps.encode(gpsSerial.read());
  if (digitalRead(PANIC_BTN) == LOW) {
    digitalWrite(BUZZER, HIGH);
    float lat = gps.location.lat();
    float lon = gps.location.lng();
    sendAlert(lat, lon);
    delay(5000);
    digitalWrite(BUZZER, LOW);
  }
}

void sendAlert(float lat, float lon) {
  lteSerial.println("AT+CMGF=1");
  delay(1000);
  lteSerial.println("AT+CMGS=\\"+91XXXXXXXXXX\\"");
  delay(1000);
  lteSerial.print("Emergency Alert!\\\\nLocation: https://maps.google.com/?q=");
  lteSerial.print(lat, 6); lteSerial.print(","); lteSerial.print(lon, 6);
  lteSerial.write(26);
}`,advantages:"Wide coverage via LTE, precision geolocation, independent of local WiFi.",disadvantages:"Requires active SIM subscription, GPS needs clear sky.",usage:"Use a latching circuit or deep-sleep mode to preserve battery life for several days/weeks.",components:["1x ESP32","1x SIM800L Module","1x GPS Module","1x LiPo Charger","1x SOS Button"],circuit_diagram:"SIM TX/RX -> ESP32 16/17 | GPS TX/RX -> ESP32 25/26 | Button -> GPIO 23",author_name:"NISHANTH",status:"Published",industrial_use:"Home healthcare, senior living, patient safety monitoring, and personal security.",bom_cost:"$42"},{id:60,title:"Unified Agri-Tech Gateway",level:"Advanced",description:"The Unified Agri-Tech Gateway integrates soil monitoring, irrigation control, and environmental sensing into a single platform. It optimizes crop conditions by automating irrigation based on real-time multi-sensor data.",category:"Agri-Tech",estimatedTime:"180 mins",tech:["ESP32","RS485","Relay","BME280"],concept:"Holistic ecosystem data. By monitoring everything from NPK levels to localized air pressure, this gateway makes complex irrigation and fertilization decisions automatically.",working_principle:`1. Soil moisture, temp, hum, and light sensors capture data.
2. ESP32 evaluates irrigation logic.
3. Automatic pump activation if moisture is low.
4. Real-time telemetry displayed and uploaded to cloud.`,pin_config:{esp32:[{module:"Soil Sensor",pinName:"AO",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Soil moisture"},{module:"DHT22",pinName:"DATA",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"Temperature & humidity"},{module:"LDR",pinName:"AO",mcuPin:"GPIO 35",direction:"Input",voltage:"3.3V",description:"Light intensity"},{module:"Relay",pinName:"IN",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Pump control"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 27",direction:"Output",voltage:"3.3V",description:"Alert"}]},code:`#include <DHT.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define DHTPIN 4
#define DHTTYPE DHT22
#define SOIL_PIN 34
#define LDR_PIN 35
#define RELAY 26
#define BUZZER 27

DHT dht(DHTPIN, DHTTYPE);
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  pinMode(RELAY, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  dht.begin();
  Wire.begin(21, 22);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println("Agri-Tech Gateway");
  display.display();
  delay(2000);
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  int soil = analogRead(SOIL_PIN);
  int light = analogRead(LDR_PIN);

  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Temp: "); display.print(temp); display.println(" C");
  display.setCursor(0, 12);
  display.print("Humidity: "); display.print(hum); display.println(" %");
  display.setCursor(0, 24);
  display.print("Soil: "); display.println(soil);
  display.setCursor(0, 36);
  display.print("Light: "); display.println(light);

  if (soil < 2000) {
    digitalWrite(RELAY, HIGH);
    digitalWrite(BUZZER, HIGH);
    display.setCursor(0, 50);
    display.print("Pump: ON");
  } else {
    digitalWrite(RELAY, LOW);
    digitalWrite(BUZZER, LOW);
    display.setCursor(0, 50);
    display.print("Pump: OFF");
  }
  display.display();
  delay(3000);
}`,advantages:"Saves water, improves crop yield, automated irrigation, IoT-enabled, low maintenance.",disadvantages:"Requires stable power, sensors need calibration, internet required for cloud features.",usage:"Housed in an IP67 waterproof enclosure. Use solar charging to make the gateway fully autonomous.",components:["1x ESP32","1x Soil Moisture Sensor","1x DHT22 (Temp & Humidity)","1x LDR (Light Sensor)","1x Relay Module","1x Water Pump / Solenoid Valve","1x OLED Display","1x Buzzer","Jumper Wires","Power Supply 5V"],circuit_diagram:"Soil (34), DHT22 (4), LDR (35), Relay (26), OLED (21, 22), Buzzer (27).",author_name:"NISHANTH",status:"Published",industrial_use:"Smart agriculture, precision farming, greenhouse automation, water resource management.",bom_cost:"$25"},{id:61,title:"Smart Fan Speed Controller",level:"Beginner",description:"Automatically adjust fan speed based on ambient temperature using a DHT11 sensor and PWM motor control.",category:"Home Automation",estimatedTime:"45 mins",tech:["Arduino","DHT11","DC Motor"],concept:"Dynamic Cooling. This project uses the correlation between temperature and required airflow. By mapping temperature ranges to PWM duty cycles, we achieve energy-efficient cooling.",working_principle:`1. Capacitive moisture sensor probes the soil, outputting a voltage proportional to the dielectric constant.
2. The ESP32/Arduino ADC converts this analog signal into a digital value.
3. Based on pre-calibrated thresholds (Dry/Optimal/Wet), the system determines the irrigation state.
4. If the soil is 'Dry', a trigger signal is sent to the relay module to activate the water pump.`,pin_config:{arduino:[{module:"DHT11/22 Sensor",pinName:"DHT11 Data",mcuPin:"A0",direction:"Output",voltage:"5V",description:"10k Pullup"},{module:"DHT11/22 Sensor",pinName:"Motor PWM",mcuPin:"D9",direction:"Output",voltage:"5V",description:"To L293D Enable"},{module:"System Ground",pinName:"Common GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Auto Plant Watering System
// High-Fidelity Implementation

const int MOISTURE_PIN = 34; // Capacitive Sensor on GPIO34 (ADC)
const int RELAY_PIN = 13;    // Relay Driver on GPIO13
const int DRY_THRESHOLD = 2500; // Calibrated for 12-bit ADC

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // Ensure pump is OFF initially
  Serial.println("Botany-Bot System Initialized...");
}

void loop() {
  int rawMoisture = analogRead(MOISTURE_PIN);
  float percent = map(rawMoisture, 4095, 0, 0, 100); // 4095 (Air) to 0 (Water)

  Serial.print("Moisture Level: ");
  Serial.print(percent);
  Serial.println("%");

  if (rawMoisture > DRY_THRESHOLD) {
    Serial.println("Soil Dry! Activating Irrigation...");
    digitalWrite(RELAY_PIN, HIGH);
    delay(5000); // Run pump for 5 seconds
    digitalWrite(RELAY_PIN, LOW);
    Serial.println("Irrigation Cycle Complete.");
  }

  delay(10000); // Check every 10 seconds to save power
}`,advantages:"Energy efficient, noise reduction at low temps.",disadvantages:"Requires motor driver for high power fans.",usage:"Place DHT11 away from the fan's direct airflow for accurate room measurement.",components:["1x Arduino","1x DHT11","1x L293D","1x DC Fan"],author_name:"NISHANTH",status:"Published",bom_cost:"$12"},{id:62,title:"Automatic Window Opener",level:"Intermediate",description:"Drive a rack-and-pinion system with a servo to open windows when CO2 levels rise or it gets too hot inside.",category:"Smart Home",estimatedTime:"90 mins",tech:["Arduino","Servo","MQ-135","DHT11"],concept:"Automated Ventilation. Maintains indoor air quality by monitoring VOCs and temperature, triggering mechanical actuation for natural cooling.",working_principle:`1. The HC-SR04 ultrasonic sensor emits an 8-cycle ultrasonic burst at 40kHz.
2. The sound waves bounce off the object (trash surface) and return to the receiver.
3. The time interval between transmission and reception is measured.
4. Using the speed of sound (343m/s), distance is calculated. Percentage fullness is derived from (Tank Height - Measured Distance) / Tank Height.`,pin_config:{arduino:[{module:"DHT11/22 Sensor",pinName:"Servo Signal",mcuPin:"D10",direction:"Output",voltage:"5V",description:"PWM Output"},{module:"DHT11/22 Sensor",pinName:"MQ-135 Analog",mcuPin:"A1",direction:"Output",voltage:"5V",description:"Air Quality Input"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// IoT Smart Bin: Depth Tracking
// High-Fidelity Implementation

#define TRIG_PIN 4
#define ECHO_PIN 5
#define BIN_HEIGHT_CM 80

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

float getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return duration * 0.034 / 2;
}

void loop() {
  float distance = getDistance();
  int fillPercent = (1.0 - (distance / BIN_HEIGHT_CM)) * 100;
  
  if(fillPercent > 100) fillPercent = 100;
  if(fillPercent < 0) fillPercent = 0;

  Serial.print("Bin Status: ");
  Serial.print(fillPercent);
  Serial.println("% Full");

  if (fillPercent > 90) {
    Serial.println("CRITICAL: BIN OVERFLOW DETECTED");
    // Add Cloud Alert Logic Here
  }
  delay(5000);
}`,advantages:"Hands-free operation, improves health by reducing CO2.",disadvantages:"Needs mechanical mounting for the window frame.",usage:"Use a high-torque MG996R servo for heavy windows.",components:["1x Arduino","1x MG996R Servo","1x MQ-135","1x DHT11"],author_name:"NISHANTH",status:"Published",bom_cost:"$22"},{id:63,title:"Smart Toilet Flush",level:"Beginner",description:"Touchless IR-based flushing system to promote hygiene in public and private restrooms.",category:"Health & Hygiene",estimatedTime:"40 mins",tech:["Arduino","IR Sensor","Servo"],concept:"Contactless Actuation. Reduces germ transmission by replacing physical handles with proximity triggers.",working_principle:`1. PIR (Passive Infrared) sensor detects motion by measuring changes in IR radiation from ambient objects.
2. When a human body enters the field, a voltage pulse is generated.
3. The microcontroller interrupts the current state and checks the Light Dependent Resistor (LDR) status.
4. If it is dark (LDR > Threshold) AND motion is detected, the relay activates the street light.`,pin_config:{arduino:[{module:"1x IR Sensor",pinName:"IR Sensor",mcuPin:"D7",direction:"Input",voltage:"5V",description:"Digital In"},{module:"Servo",pinName:"Servo",mcuPin:"D9",direction:"Output",voltage:"5V",description:"Flush Logic"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Adaptive Street Lighting
// High-Fidelity Implementation

const int PIR_PIN = 14;
const int LDR_PIN = 32;
const int LIGHT_PIN = 27;

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(LIGHT_PIN, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int ambientLight = analogRead(LDR_PIN);
  bool motion = digitalRead(PIR_PIN);

  if (ambientLight < 1000 && motion) {
    Serial.println("Darkness & Motion - Activating Light");
    digitalWrite(LIGHT_PIN, HIGH);
    delay(30000); // Stay on for 30s
  } else {
    digitalWrite(LIGHT_PIN, LOW);
  }
  delay(100);
}`,advantages:"High hygiene, water-saving potential.",disadvantages:"Battery replacement needed for portable units.",usage:"Mount IR sensor at waist level for easy reach.",components:["1x Arduino","1x IR Sensor","1x High Torque Servo"],author_name:"NISHANTH",status:"Published",bom_cost:"$15"},{id:64,title:"Smart Washroom Light",level:"Beginner",description:"Motion-activated lighting for bathrooms with ambient light sensing to save energy during daytime.",category:"Energy Efficiency",estimatedTime:"30 mins",tech:["Arduino","PIR","LDR","Relay"],concept:"Occupancy Sensing. Combines motion detection with ambient light checking to ensure lights are only ON when needed.",working_principle:`1. PIR sensor checks for motion.
2. LDR checks if it's dark.
3. If both conditions met, Relay triggers the light.`,pin_config:{arduino:[{module:"1x PIR",pinName:"PIR Sensor",mcuPin:"D2",direction:"Input",voltage:"5V",description:"Interrupt Driven"},{module:"Relay Module",pinName:"Relay Out",mcuPin:"D4",direction:"Output",voltage:"5V",description:"To Light Bulbs"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Motion Detection"}]},code:`void setup() {
  pinMode(2, INPUT); pinMode(4, OUTPUT);
}
void loop() {
  if (digitalRead(2) == HIGH) {
    digitalWrite(4, HIGH);
    delay(60000); // 1-minute timer
  } else {
    digitalWrite(4, LOW);
  }
}`,advantages:"Automated energy saving, very cheap build.",disadvantages:"Relay clicking noise.",usage:"Mount PIR on the ceiling for widest coverage.",components:["1x Arduino","1x PIR","1x 5V Relay"],author_name:"NISHANTH",status:"Published",bom_cost:"$8"},{id:65,title:"Smart Locker System",level:"Intermediate",description:"Secure storage with PIN-code entry and solenoid lock mechanism with wrong-password alerts.",category:"Security",estimatedTime:"60 mins",tech:["Arduino","Keypad","OLED","Solenoid"],concept:"Digital Access Control. Replaces physical keys with encrypted numerical codes and electromechanical locking.",working_principle:`1. User enters 4-digit PIN.
2. Comparison logic validates against stored password.
3. If correct, Solenoid pulls (Unlock).
4. After 5s, Solenoid releases (Lock).`,pin_config:{arduino:[{module:"Keypad",pinName:"Keypad Rows",mcuPin:"D2-D5",direction:"Output",voltage:"5V",description:"-"},{module:"Keypad",pinName:"Keypad Cols",mcuPin:"D6-D9",direction:"Output",voltage:"5V",description:"-"},{module:"Relay Module",pinName:"Solenoid Relay",mcuPin:"D10",direction:"Power",voltage:"5V",description:"High Power"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Keypad Solenoid Logic
void setup() { pinMode(10, OUTPUT); }
void loop() {
  // if (pass) digitalWrite(10, HIGH);
}`,advantages:"No physical keys to lose, customizable pins.",disadvantages:"Needs reliable power backup for lock to stay secure.",usage:"Use a 12V adapter for the solenoid; Arduino cannot power it directly.",components:["1x Arduino","1x 4x4 Keypad","1x 12V Solenoid"],author_name:"NISHANTH",status:"Published",bom_cost:"$25"},{id:66,title:"Smart Mirror Display (Basic)",level:"Intermediate",description:"A two-way mirror that displays time, date, and weather info from an ESP32 behind the glass.",category:"IoT & Consumer",estimatedTime:"120 mins",tech:["ESP32","OLED/TFT","NTP"],concept:"Info Overlay. Uses partial reflection to mix real-world reflection with digital data for a Sci-Fi aesthetic.",working_principle:`1. ESP32 connects to Wi-Fi.
2. Fetches time via NTP.
3. Displays data in high-contrast white-on-black mode.
4. Reflected image overlays the digital data.`,pin_config:{esp32:[{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"G21",direction:"Output",voltage:"3.3V",description:"I2C"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}],arduino:[]},code:`// NTP Time Sync Logic
void setup() {
  WiFi.begin("SSID", "PASS");
}
void loop() {
  // Update OLED text
}`,advantages:"Extremely futuristic look, daily productivity booster.",disadvantages:"Needs dark room/background for best visibility.",usage:"Use a 50/50 two-way acrylic mirror for the best result.",components:["1x ESP32","1x 1.3 inch OLED","1x Two-way Mirror"],author_name:"NISHANTH",status:"Published",bom_cost:"$30"},{id:67,title:"Smart Attendance System (Basic)",level:"Beginner",description:"Log entry times to an SD card using RFID cards, suitable for small offices and classrooms.",category:"Management",estimatedTime:"60 mins",tech:["Arduino","RFID-RC522","SD Card Module"],concept:"Identity Logging. Maps unique RFID UIDs to user names and records timestamps for audit trails.",working_principle:`1. The user taps their RFID tag (13.56 MHz MIFARE) against the reader.
2. The RC522 module transmits the Unique ID (UID) of the tag to the MCU via SPI.
3. The MCU compares the UID against a predefined list of authorized IDs stored in flash memory.
4. If matched, the student's name is logged to a local SD card with a timestamp and sent to the cloud via WiFi.`,pin_config:{arduino:[{module:"SDA",pinName:"SDA (RFID)",mcuPin:"D10",direction:"Output",voltage:"5V",description:"SPI"},{module:"CS",pinName:"CS (SD)",mcuPin:"D4",direction:"Output",voltage:"5V",description:"SPI"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Smart RFID Attendance Logger
// High-Fidelity Implementation

#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 5
#define RST_PIN 22
MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(115200);
  SPI.begin();
  rfid.PCD_Init();
  Serial.println("Scan ID for Attendance...");
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  String uid = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    uid += String(rfid.uid.uidByte[i] < 0x10 ? "0" : "");
    uid += String(rfid.uid.uidByte[i], HEX);
  }
  uid.toUpperCase();

  Serial.print("ID SCANNED: ");
  Serial.println(uid);

  if (uid == "A1 B2 C3 D4") { // Example UID
    Serial.println("Access Granted: Student 001");
  } else {
    Serial.println("Access Denied: Unknown ID");
  }

  rfid.PICC_HaltA();
  delay(2000);
}`,advantages:"Tamper-proof (if mounted), fast processing.",disadvantages:"Requires physical cards for every user.",usage:"Ensure the SD card is formatted to FAT32 before use.",components:["1x Arduino","1x RC522 RFID","1x SD Module"],author_name:"NISHANTH",status:"Published",bom_cost:"$20"},{id:68,title:"Smart Pet Feeder",level:"Intermediate",description:"An automated kibble dispenser with scheduled feeding and manual override via Wi-Fi.",category:"Consumer IoT",estimatedTime:"90 mins",tech:["ESP32","Servo","RTC"],concept:"Precision Dosing. Uses mechanical rotation to dispense set volumes of food at precise intervals.",working_principle:`1. The system uses a real-time clock (RTC) to maintain precise time scheduling.
2. At specific user-defined intervals (e.g., 08:00 AM), the pulse-width modulation (PWM) signal is sent to the servo motor.
3. The servo rotates 90 degrees to open the food dispenser hatch.
4. After a 2-second delay, the servo returns to the closed position to prevent over-feeding.`,pin_config:{esp32:[{module:"Servo",pinName:"Servo PWM",mcuPin:"G13",direction:"Output",voltage:"3.3V",description:"-"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},code:`// Smart Pet Feeder (Scheduled)
// High-Fidelity Implementation

#include <ESP32Servo.h>

Servo feederServo;
const int SERVO_PIN = 18;
const int FEED_HOUR = 8;
const int FEED_MINUTE = 0;

void setup() {
  Serial.begin(115200);
  feederServo.attach(SERVO_PIN);
  feederServo.write(0); // Hatch Closed
  Serial.println("Pet Feeder Ready.");
}

void feedNow() {
  Serial.println("Feeding Session Started!");
  feederServo.write(90);
  delay(2000);
  feederServo.write(0);
  Serial.println("Feeding Session Complete.");
}

void loop() {
  // In a real app, use DS3231 RTC
  // For demo, we check a manual button or simple timer
  if (digitalRead(0) == LOW) {
    feedNow();
    delay(1000);
  }
}`,advantages:"Reliable pet care when owners are away.",disadvantages:"May jam if food particles are too large.",usage:"Design a vertical tube hopper for consistent gravity flow.",components:["1x ESP32","1x DS3231 RTC","1x 360 Servo"],author_name:"NISHANTH",status:"Published",bom_cost:"$28"},{id:69,title:"Smart Plant Monitor",level:"Beginner",description:"Visual indicator for plant health using moisture sensors and an RGB LED to show status (Red=Dry, Green=Happy).",category:"Green Tech",estimatedTime:"30 mins",tech:["Arduino","Soil Moisture","RGB LED"],concept:"Environmental Feedback. Bridges the gap between plant needs and human perception using visual color coding.",working_principle:`1. Capacitive moisture sensor reads water level.
2. Arduino maps reading to 3 states: DRY, OK, WET.
3. RGB LED changes color accordingly.`,pin_config:{arduino:[{module:"Soil",pinName:"Soil Moisture",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog In"},{module:"1x RGB LED",pinName:"RGB Pins",mcuPin:"D3,D5,D6",direction:"Output",voltage:"5V",description:"PWM"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RGB Status Logic
void loop() {
  int val = analogRead(A0);
  if (val < 300) setRed();
  else setGreen();
}`,advantages:"Extremely easy to build, great for kids.",disadvantages:"Cheap resistive sensors corrode quickly.",usage:"Calibrate threshold by dipping sensor in wet vs dry soil first.",components:["1x Arduino","1x Moisture Sensor","1x RGB LED"],author_name:"NISHANTH",status:"Published",bom_cost:"$7"},{id:70,title:"Digital Compass",level:"Intermediate",description:"High-precision heading indicator using a magnetometer and an OLED display.",category:"Robotics & Navigation",estimatedTime:"50 mins",tech:["Arduino","HMC5883L","OLED"],concept:"Geomagnetic Orientation. Senses the Earth's magnetic field in 3 axes to calculate North-relative heading.",working_principle:`1. HMC5883L/QMC5883L sensor measures the Earth's magnetic field in X, Y, and Z planes.
2. The raw magnetic flux values are sent to the MCU over the I2C bus.
3. Trigonometric calculations (Atan2) are used to determine the angle relative to magnetic North.
4. Current heading is displayed on an OLED or Serial monitor with 1-degree precision.`,pin_config:{arduino:[{module:"I2C",pinName:"I2C Bus",mcuPin:"A4/A5",direction:"Output",voltage:"5V",description:"Common for OLED/Mag"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}]},code:`// Digital Magnetometer Compass
// High-Fidelity Implementation

#include <Wire.h>
#include <QMC5883LCompass.h>

QMC5883LCompass compass;

void setup() {
  Serial.begin(115200);
  compass.init();
}

void loop() {
  compass.read();
  int azimuth = compass.getAzimuth();
  
  Serial.print("Heading: ");
  Serial.print(azimuth);
  
  if (azimuth > 337 || azimuth < 22) Serial.println(" [NORTH]");
  else if (azimuth > 22 && azimuth < 67) Serial.println(" [N-EAST]");
  else if (azimuth > 67 && azimuth < 112) Serial.println(" [EAST]");
  else if (azimuth > 247 && azimuth < 292) Serial.println(" [WEST]");
  
  delay(500);
}`,advantages:"Compact navigation tool, great for drones/rovers.",disadvantages:"Sensitive to local metal objects.",usage:"Calibrate by rotating the sensor in a 'figure 8' pattern before first use.",components:["1x Arduino","1x HMC5883L","1x OLED 0.96"],author_name:"NISHANTH",status:"Published",bom_cost:"$14"},{id:71,title:"Smart Key Finder",level:"Beginner",description:"Whistle-activated or Bluetooth-enabled key tracker that beeps when you can't find your keys.",category:"Consumer Utility",estimatedTime:"45 mins",tech:["Arduino Nano","Buzzer","Sound Sensor"],concept:"Acoustic Triggering. Listens for specific frequencies (whistles) or signal strength (BLE) to trigger an alert.",working_principle:`1. Uses a 433MHz or Bluetooth Low Energy (BLE) beacon paired with a transceiver.
2. When the 'Find' button is pressed on the base unit, a signal is broadcast on a specific channel.
3. The receiver attached to the keys decodes this signal and validates the ID.
4. If valid, the piezo buzzer on the receiver sounds a pulsed alarm for 10 seconds.`,pin_config:{arduino:[{module:"1x Mic Sensor",pinName:"Mic Sensor",mcuPin:"D2",direction:"Input",voltage:"5V",description:"Digital Out Pin"},{module:"Active Buzzer",pinName:"Buzzer",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Active Tones"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}]},code:`// Smart Key Finder Receiver
const int BUZZER_PIN = 12;
const int RF_SIGNAL_PIN = 14;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(RF_SIGNAL_PIN, INPUT);
}

void loop() {
  if (digitalRead(RF_SIGNAL_PIN) == HIGH) {
    for(int i=0; i<20; i++) {
      digitalWrite(BUZZER_PIN, HIGH);
      delay(100);
      digitalWrite(BUZZER_PIN, LOW);
      delay(100);
    }
  }
}`,advantages:"Saves time, low power standby.",disadvantages:"False triggers from loud TV.",usage:"Use an Arduino Nano for the smallest possible footprint.",components:["1x Arduino Nano","1x Mic Sensor","1x Piezo Buzzer"],author_name:"NISHANTH",status:"Published",bom_cost:"$9"},{id:72,title:"Home Security Alarm",level:"Intermediate",description:"A multi-zone security system with vibration sensors and magnetic door switches.",category:"Security",estimatedTime:"90 mins",tech:["Arduino","Reed Switch","Vibration Sensor","Buzzer"],concept:"Perimeter Defense. Monitors circuit continuity (door) and kinetic energy (window glass break).",working_principle:`1. Laser diode emits a concentrated beam across a doorway onto a photoresistor (LDR).
2. While the beam is uninterrupted, LDR resistance remains low.
3. If an intruder breaks the beam, LDR resistance spikes instantly.
4. The MCU detects this threshold crossing and triggers the high-decibel active buzzer (Alarm).`,pin_config:{arduino:[{module:"Door",pinName:"Door Switch",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt"},{module:"Relay Module",pinName:"Siren Relay",mcuPin:"D13",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"High reliability, physical security.",disadvantages:"Requires wiring across the home.",usage:"Add a hidden switch to disarm the alarm when you enter.",components:["1x Arduino","5x Reed Switches","1x Loud Siren"],author_name:"NISHANTH",status:"Published",bom_cost:"$35",code:`// Laser Tripwire Alarm
// High-Fidelity Implementation

const int LDR_PIN = 34;
const int BUZZER_PIN = 13;
const int THRESHOLD = 500; // Calibrated Dark Value

void setup() {
  Serial.begin(115200);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.println("Security Perimeter Armed.");
}

void loop() {
  int lightLevel = analogRead(LDR_PIN);

  if (lightLevel < THRESHOLD) {
    Serial.println("ALARM! BEAM BROKEN!");
    for(int i=0; i<5; i++) {
      digitalWrite(BUZZER_PIN, HIGH);
      delay(100);
      digitalWrite(BUZZER_PIN, LOW);
      delay(100);
    }
  }
  delay(50);
}`},{id:73,title:"Smart Door Knock Detector",level:"Beginner",description:"Sends a notification or lights up a LED when someone knocks on the door, great for hearing-impaired users.",category:"Accessibility",estimatedTime:"40 mins",tech:["Arduino","Piezo Element"],concept:"Impact Sensing. Uses the piezoelectric effect where physical vibration is converted into electrical spikes.",working_principle:`1. An SW-420 tilt/vibration sensor detects physical impact on the door.
2. The mechanical switch inside the sensor closes for a few milliseconds upon vibration.
3. The MCU captures this narrow pulse using an External Interrupt (Falling Edge).
4. Logic: If > 3 knocks occur within 2 seconds, the system logs a 'Visitor Arrived' event to the cloud.`,pin_config:{arduino:[{module:"Piezo",pinName:"Piezo Sen",mcuPin:"A0",direction:"Output",voltage:"5V",description:"With 1M resistor"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Vibration Knock Detector
volatile int knockCount = 0;
unsigned long lastKnockTime = 0;

void IRAM_ATTR onKnock() {
  if(millis() - lastKnockTime > 150) {
    knockCount++;
    lastKnockTime = millis();
  }
}

void setup() {
  Serial.begin(115200);
  attachInterrupt(14, onKnock, FALLING);
}

void loop() {
  if (knockCount > 0 && millis() - lastKnockTime > 2000) {
    Serial.print("Knocks detected: ");
    Serial.println(knockCount);
    knockCount = 0;
  }
}`,advantages:"Extremely low cost, high sensitivity.",disadvantages:"Triggers from door slams.",usage:"Mount near the center of the door panel for best resonance.",components:["1x Arduino","1x Piezo Disc","1x LED"],author_name:"NISHANTH",status:"Published",bom_cost:"$5"},{id:74,title:"Light Intensity Logger",level:"Beginner",description:"Track sun exposure throughout the day in different rooms to optimize indoor plant placement.",category:"Data Logging",estimatedTime:"60 mins",tech:["Arduino","LDR","SD Card"],concept:"Lux Auditing. Records ambient light levels at fixed intervals to calculate total daily light integral.",working_principle:`1. LDR sensor is configured in a voltage divider circuit with a 10k resistor.
2. Analog voltage represents the logarithmic light level in the environment.
3. Every hour, the ESP32 wakes from light sleep and samples the ADC.
4. Data is stored on an SD card in .CSV format or pushed to an InfluxDB server for long-term light trend analysis.`,pin_config:{arduino:[{module:"LDR Photoresistor",pinName:"LDR",mcuPin:"A2",direction:"Output",voltage:"5V",description:"-"},{module:"1x SD Module",pinName:"SD CS",mcuPin:"D4",direction:"Output",voltage:"5V",description:"SPI"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}]},advantages:"Objective data for gardening.",disadvantages:"Requires computer to graph.",usage:"Place in different corners to find the best light spot.",components:["1x Arduino","1x LDR module","1x SD Module"],author_name:"NISHANTH",status:"Published",bom_cost:"$12",code:`// Light Intensity Logger
#include <SPI.h>
#include <SD.h>

const int LDR_PIN = 34;

void setup() {
  Serial.begin(115200);
  if(!SD.begin()) { Serial.println("SD Failed"); return; }
}

void loop() {
  int val = analogRead(LDR_PIN);
  File logFile = SD.open("/lights.csv", FILE_WRITE);
  if(logFile) {
    logFile.print(millis());
    logFile.print(",");
    logFile.println(val);
    logFile.close();
  }
  delay(3600000); // Record hourly
}`},{id:75,title:"Smart Emergency Button",level:"Beginner",description:"A wall-mounted panic button that triggers a loud alarm and sends a Wi-Fi alert.",category:"Safety",estimatedTime:"50 mins",tech:["ESP32","Push Button","Buzzer"],concept:"One-Touch Alert. Simplifies emergency signaling to a single, robust physical interaction.",working_principle:`1. Uses a tactical physical button and a high-brightness LED for visual feedback.
2. The system employs 'Debounce' logic to prevent multiple triggers from a single mechanical press.
3. Upon press, it performs a secure HTTPS request to a cloud-based emergency proxy server.
4. It also activates a local audible buzzer in an SOS pattern (Short-Short-Short-Long-Long-Long).`,pin_config:{esp32:[{module:"Panic",pinName:"Panic Button",mcuPin:"G14",direction:"Output",voltage:"3.3V",description:"Pullup"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Critical for elderly safety.",disadvantages:"False alarms if not guarded.",usage:"Encase in a bright red 3D printed housing.",components:["1x ESP32","1x Arcade Button","1x High Decibel Buzzer"],author_name:"NISHANTH",status:"Published",bom_cost:"$18",code:`// Smart Emergency SOS Node
#define BTN_PIN 27
#define BUZZER_PIN 26

void setup() {
  pinMode(BTN_PIN, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.begin(115200);
}

void triggerSOS() {
  Serial.println("EMERGENCY SIGNAL BROADCASTING...");
  for(int i=0; i<3; i++) { // S-O-S pattern
    digitalWrite(BUZZER_PIN, HIGH); delay(200); digitalWrite(BUZZER_PIN, LOW); delay(200);
  }
  delay(500);
}

void loop() {
  if(digitalRead(BTN_PIN) == LOW) {
    triggerSOS();
    delay(2000); // Prevent spamming
  }
}`},{id:76,title:"Smart Door Mat",level:"Beginner",description:"Greeting mat that says 'Hello' or lights up the foyer when stepped on using pressure sensors.",category:"Smart Home",estimatedTime:"45 mins",tech:["Arduino","FSR","MP3 Module"],concept:"Occupancy Trigger. Uses weight detection as an input for hospitality automation.",working_principle:`1. Uses a Force Sensitive Resistor (FSR) or a large-area capacitive touch pad concealed under a standard door mat.
2. When a person steps on the mat, the pressure changes the resistance (FSR) or capacitance (Touch).
3. The MCU detects this change and triggers a local 'Chime' or a remote smartphone notification.
4. Power Optimization: The system remains in deep sleep and wakes up only when an interrupt is triggered by the FSR voltage divider.`,pin_config:{arduino:[{module:"1x FSR",pinName:"FSR Sensor",mcuPin:"A1",direction:"Input",voltage:"5V",description:"Divider"},{module:"Serial",pinName:"Serial MP3",mcuPin:"D2/3",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Unique guest experience.",disadvantages:"FSRs can be fragile.",usage:"Use two layers of rigid cardboard to protect the FSR.",components:["1x Arduino Nano","1x FSR","1x DFPlayer Mini"],author_name:"NISHANTH",status:"Published",bom_cost:"$22",code:`// Smart Pressure Sensitive Door Mat
#define FSR_PIN 32
#define CHIME_PIN 13

void setup() {
  pinMode(CHIME_PIN, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int force = analogRead(FSR_PIN);
  if (force > 500) { // Calibrated threshold for human weight
    digitalWrite(CHIME_PIN, HIGH);
    Serial.println("Visitor Detected at Entrance!");
    delay(2000);
    digitalWrite(CHIME_PIN, LOW);
  }
  delay(100);
}`},{id:77,title:"Temperature Based Fan",level:"Beginner",description:"A simple fan control for 3D printer enclosures to maintain constant temperature.",category:"3D Printing",estimatedTime:"40 mins",tech:["Arduino","LM35","Transistor"],concept:"Thermostatic Control. Maintains a set-point temperature using negative feedback loop.",working_principle:`1. A DHT11 or DS18B20 digital sensor monitors the current ambient room temperature.
2. The user sets a desired 'Comfort Threshold' (e.g., 28°C) via the firmware or a mobile app.
3. Logic: If the sensed temperature > Threshold, the MCU activates a DC Fan via a Power MOSFET or Relay.
4. Hysteresis: The fan stays on until the temperature drops to 2°C below the threshold to prevent rapid oscillations.`,pin_config:{arduino:[{module:"1x LM35",pinName:"LM35",mcuPin:"A0",direction:"Output",voltage:"5V",description:"-"},{module:"2N2222",pinName:"2N2222 Base",mcuPin:"D5",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Prevents print warping.",disadvantages:"LM35 precision.",usage:"Place near the print head.",components:["1x Arduino","1x LM35","1x 2N2222 Transistor"],author_name:"NISHANTH",status:"Published",bom_cost:"$6",code:`// Auto Temperature Controlled Fan
#include "DHT.h"
#define DHTPIN 4
#define FAN_PIN 13
#define TEMP_THRESHOLD 28.0

DHT dht(DHTPIN, DHT11);

void setup() {
  dht.begin();
  pinMode(FAN_PIN, OUTPUT);
}

void loop() {
  float t = dht.readTemperature();
  if(!isnan(t)) {
    if(t > TEMP_THRESHOLD) digitalWrite(FAN_PIN, HIGH); 
    else if(t < (TEMP_THRESHOLD - 1.0)) digitalWrite(FAN_PIN, LOW);
  }
  delay(2000);
}`},{id:78,title:"Smart Entry System",level:"Intermediate",description:"Auto-door opener using ultrasonic distance sensors for hands-free shopping entry.",category:"Retail Tech",estimatedTime:"60 mins",tech:["Arduino","Ultrasonic","Stepper Motor"],concept:"Distance Triggered Motion. Opens mechanical barriers when targets arrive.",working_principle:`1. Uses a PIR sensor to detect presence and an LDR to verify if it is nighttime.
2. When both conditions are met, the MCU unlocks the magnetic lock and turns on the hall lights.
3. The system captures the 'Entry' event time and sends it to a cloud logging service.
4. Safety: A physical override switch inside the house allows the user to manually lock/unlock the entry.`,pin_config:{arduino:[{module:"HC-SR04 Ultrasonic",pinName:"Trig/Echo",mcuPin:"D12/11",direction:"Output",voltage:"5V",description:"-"},{module:"Stepper",pinName:"Stepper",mcuPin:"D8-D11",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Accessible, hygienic.",disadvantages:"Mechanical alignment.",usage:"Mount sensor at chest height.",components:["1x Arduino","1x HC-SR04","1x NEMA 17 Stepper"],author_name:"NISHANTH",status:"Published",bom_cost:"$40",code:`// Smart Automated Entry Node
#define PIR 14
#define LOCK_RELAY 27

void setup() {
  pinMode(PIR, INPUT);
  pinMode(LOCK_RELAY, OUTPUT);
  digitalWrite(LOCK_RELAY, HIGH); // Locked by default (Active Low)
}

void loop() {
  if(digitalRead(PIR) == HIGH) {
    digitalWrite(LOCK_RELAY, LOW); // Unlock
    delay(10000); // 10s Entry Window
    digitalWrite(LOCK_RELAY, HIGH);
  }
  delay(500);
}`},{id:79,title:"Automatic Gate Opener",level:"Intermediate",description:"Remote-controlled gate system with obstruction detection using IR beam sensors.",category:"Robotics",estimatedTime:"100 mins",tech:["Arduino","IR Beam","High Torque Gears"],concept:"Safe Actuation. Combines remote triggers with safety 'kill-switches'.",working_principle:`1. Employs a Servo motor or DC motor with an H-Bridge driver to control the physical gate structure.
2. An Ultrasonic sensor detects an approaching vehicle's presence at a 1-meter distance.
3. Logic: If Presence = True, MCU rotates the servo 90 degrees to lift the boom barrier.
4. After a 10-second delay (allowing the vehicle to pass), it automatically lowers the barrier.`,pin_config:{arduino:[{module:"1x IR Beam Pair",pinName:"IR Receiver",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Safety"},{module:"RF",pinName:"RF Receiver",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Remote"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Heavy duty, safe.",disadvantages:"Mechanical fabrication.",usage:"Test auto-reverse extensively.",components:["1x Arduino","1x IR Beam Pair","1x Worm Gear Motor"],author_name:"NISHANTH",status:"Published",bom_cost:"$55",code:`// Automated Gate Barrier
#include <ESP32Servo.h>

Servo gateServo;
#define TRIG 4
#define ECHO 5

void setup() {
  gateServo.attach(18);
  gateServo.write(0); // Closed
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
}

void loop() {
  digitalWrite(TRIG, HIGH); delayMicroseconds(10); digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH);
  int distance = duration * 0.034 / 2;

  if (distance > 0 && distance < 50) {
    gateServo.write(90); // Open
    delay(5000);
    gateServo.write(0);  // Close
  }
  delay(100);
}`},{id:80,title:"Smart Lamp Controller",level:"Beginner",description:"A clap-activated lamp switch with adjustable sensitivity for bedside convenience.",category:"Smart Home",estimatedTime:"30 mins",tech:["Arduino","Sound Sensor","Relay"],concept:"Acoustic Toggling. Filters transients to toggle states.",working_principle:`1. The system uses an LDR to measure ambient light levels and a PIR sensor for presence detection.
2. If Darkness is detected (LDR < Threshold) AND a person is in the room (PIR = HIGH), the lamp turns ON.
3. Dimming is achieved via PWM (Pulse Width Modulation) to adjust intensity based on how dark it is.
4. Auto-shutoff occurs after 5 minutes of no motion to save energy.`,pin_config:{arduino:[{module:"Mic",pinName:"Mic Sensor",mcuPin:"D7",direction:"Input",voltage:"5V",description:"-"},{module:"Relay Module",pinName:"AC Relay",mcuPin:"D4",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Hands-free.",disadvantages:"False triggers.",usage:"Adjust sensitive pot.",components:["1x Arduino","1x Sound Sensor","1x 5V Relay"],author_name:"NISHANTH",status:"Published",bom_cost:"$10",code:`// Smart Adaptive Lamp
// High-Fidelity Implementation

const int LAMP_PIN = 12;
const int PIR_PIN = 14;
const int LDR_PIN = 32;

void setup() {
  pinMode(LAMP_PIN, OUTPUT);
  pinMode(PIR_PIN, INPUT);
  Serial.begin(115200);
}

void loop() {
  int lux = analogRead(LDR_PIN);
  bool presence = digitalRead(PIR_PIN);
  
  if (presence) {
    int brightness = map(lux, 4095, 0, 0, 255); // Inverse: darker = brighter
    analogWrite(LAMP_PIN, brightness);
    Serial.print("Lamp Active. Intensity: ");
    Serial.println(brightness);
  } else {
    analogWrite(LAMP_PIN, 0);
  }
  delay(1000);
}`},{id:81,title:"WiFi LED Control using ESP32",level:"Beginner",description:"Hosted web server on ESP32 to toggle physical LEDs from any browser on the local network.",category:"IoT Essentials",estimatedTime:"30 mins",tech:["ESP32","WiFi","HTML/CSS"],concept:"Embedded Web Server. Demonstates how a microcontroller acts as a node delivering UI to clients and executing hardware interrupts via HTTP GET requests.",working_principle:`1. The ESP32 acts as an Access Point or connects to a Station, starting an HTTP server on Port 80.
2. When a client (Phone/PC) requests the root URL, the ESP32 serves a 'Mobile First' HTML/CSS dashboard.
3. Interactive buttons in the UI send asynchronous GET requests (AJAX/Fetch) to specific endpoints like /toggle.
4. The MCU parses these requests and executes a digitalWrite() to flip the GPIO state of the target LED.`,pin_config:{esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"Output LED",pinName:"Anode",mcuPin:"GPIO 2",direction:"Output",voltage:"3.3V",description:"Onboard LED / External Indicator"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},code:`// ESP32 High-Fidelity Web Controller
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "IoTNext_Home";
const char* password = "12345678";
WebServer server(80);
const int LED_PIN = 2;
bool ledState = false;

void handleRoot() {
  String html = "<html><head><meta name='viewport' content='width=device-width, initial-scale=1'>";
  html += "<style>body{font-family:sans-serif; text-align:center; padding:50px; background:#1a1a1a; color:white;}";
  html += ".btn{padding:20px 40px; font-size:24px; border-radius:15px; border:none; color:white; cursor:pointer;}";
  html += ".on{background:#27c93f;} .off{background:#ff5f56;}</style></head><body>";
  html += "<h1>IoTNext Control Center</h1>";
  html += "<p>LED Status: " + String(ledState ? "ACTIVE" : "INACTIVE") + "</p>";
  html += "<a href='/toggle'><button class='btn " + String(ledState ? "off" : "on") + "'>";
  html += String(ledState ? "TURN OFF" : "TURN ON") + "</button></a></body></html>";
  server.send(200, "text/html", html);
}

void handleToggle() {
  ledState = !ledState;
  digitalWrite(LED_PIN, ledState);
  server.sendHeader("Location", "/");
  server.send(303);
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  WiFi.softAP(ssid, password);
  server.on("/", handleRoot);
  server.on("/toggle", handleToggle);
  server.begin();
  Serial.println("Web Control Server Started.");
}

void loop() { server.handleClient(); }`,advantages:"Cross-platform control, no external apps needed.",disadvantages:"Limited range dependent on router.",usage:"Connect to ESP32 IP address in browser.",components:["1x ESP32","1x Resistor","1x LED"],author_name:"NISHANTH",status:"Published",bom_cost:"$8"},{id:82,title:"Smart Home Automation",level:"Intermediate",description:"Industrial grade 4-channel relay control system with real-time status feedback and over-current protection.",category:"Home Automation",estimatedTime:"60 mins",tech:["ESP32","Relay Module","WebSockets"],concept:"Bi-directional Control. Uses WebSockets for low-latency communication between the user dashboard and high-voltage relays.",working_principle:`1. Uses a persistent WebSocket (WS) connection for sub-100ms latency between the dashboard and the hardware.
2. The system handles multiple parallel connections, allowing various family members to control the same home.
3. The Relay module is protected by optoisolators, ensuring that AC flyback doesn't damage the ESP32 logic.
4. Real-time state synchronization ensures the app UI always matches the physical relay position (Latched/Unlatched).`,pin_config:{esp32:[{module:"Relay 1",pinName:"IN1",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Light Load Trigger"},{module:"Relay 2",pinName:"IN2",mcuPin:"GPIO 12",direction:"Output",voltage:"3.3V",description:"Fan Load Trigger"},{module:"Status LED",pinName:"RGB",mcuPin:"GPIO 14",direction:"Output",voltage:"3.3V",description:"Connectivity Indicator"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},code:`// Professional Home Automation Node
#include <WiFi.h>
#include <WebSocketsServer.h>

WebSocketsServer webSocket = WebSocketsServer(81);
const int RELAY_PINS[] = {13, 12, 14, 27};

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  if(type == WStype_TEXT) {
    int pinIdx = payload[0] - '0';
    bool state = payload[1] == '1';
    if(pinIdx < 4) {
      digitalWrite(RELAY_PINS[pinIdx], state);
      Serial.printf("Relay %d set to %s\\n", pinIdx, state ? "ON" : "OFF");
      webSocket.broadcastTXT("SYNC_STATE");
    }
  }
}

void setup() {
  Serial.begin(115200);
  for(int i=0; i<4; i++) {
    pinMode(RELAY_PINS[i], OUTPUT);
    digitalWrite(RELAY_PINS[i], LOW);
  }
  WiFi.begin("SSID", "PASS");
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void loop() { webSocket.loop(); }`,advantages:"Instant response, handles AC appliances.",disadvantages:"Relay contact wear over time.",usage:"Use an optoisolated relay module for safety.",components:["1x ESP32","1x 4-Ch Relay Board","1x 5V Power Supply"],author_name:"NISHANTH",status:"Published",bom_cost:"$22"},{id:83,title:"Smart Energy Meter",level:"Advanced",description:"Advanced IoT system monitoring real-time voltage, current, and power using a digital energy meter sensor. Features cost calculation and overload protection logic.",category:"Green Tech",estimatedTime:"120 mins",tech:["ESP32","PZEM-004T","MQTT"],concept:"Non-Invasive Sensing. Measures RMS values via CT sensors and calculates real-time power metrics for energy auditing.",working_principle:`1. PZEM-004T measures RMS metrics.
2. ESP32 reads data via UART.
3. Cost/kWh calculated locally.
4. Automatic load-shedding if power exceeds limit.`,pin_config:{esp32:[{module:"PZEM-004T",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"5V",description:"Energy data"},{module:"PZEM-004T",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"5V",description:"Data link"},{module:"Relay",pinName:"IN",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Load control"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 27",direction:"Output",voltage:"3.3V",description:"Alert"}]},code:`#include <PZEM004Tv30.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
PZEM004Tv30 pzem(Serial2, 16, 17);

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) return;
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println("Energy Meter");
  display.display();
  delay(2000);
}

void loop() {
  float voltage = pzem.voltage();
  float current = pzem.current();
  float power = pzem.power();
  float energy = pzem.energy();

  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("V: "); display.print(voltage); display.println(" V");
  display.print("A: "); display.print(current); display.println(" A");
  display.print("W: "); display.print(power); display.println(" W");
  display.print("kWh: "); display.println(energy);
  display.display();

  if(power > 2000) digitalWrite(27, HIGH); // Overload alert
  else digitalWrite(27, LOW);
  delay(2000);
}`,advantages:"High-precision measurement, automatic protection, cloud analytics.",disadvantages:"Mains high-voltage safety critical.",usage:"Clamp CT sensor around the live wire of the appliance.",components:["1x ESP32","1x PZEM-004T","1x CT Coil"],author_name:"NISHANTH",status:"Published",bom_cost:"$35",industrial_use:"Smart grids, industrial sub-metering, energy audits, and billing systems."},{id:84,title:"IoT Based Weather Station",level:"Intermediate",description:"Solar-powered precision station measuring temperature, humidity, pressure, and air quality with ThingSpeak integration.",category:"Environmental",estimatedTime:"90 mins",tech:["ESP32","BME280","Deep Sleep"],concept:"Ultra-Low Power Logging. Uses deep sleep modes to run on battery for months, waking up only for data transmission.",working_principle:`1. Deep Sleep Strategy: The ESP32 shuts down all peripherals and cores except the RTC timer to save power.
2. Upon wake-up, it initializes the BME280 sensor to read ambient Pressure, Temperature, and Humidity.
3. It uses a high-gain WiFi antenna to connect and push the CSV-formatted data to a ThingSpeak channel.
4. Battery levels are monitored via a voltage divider to notify the user when the solar charge is low.`,pin_config:{esp32:[{module:"BME280",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data Bus"},{module:"BME280",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock Bus"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Maintenance free on solar, accurate data.",disadvantages:"I2C address conflicts if unsheathed.",usage:"Mount in a Stevensen screen for best accuracy.",components:["1x ESP32","1x BME280","1x Solar Panel","1x TP4056"],author_name:"NISHANTH",status:"Published",bom_cost:"$25",code:`// Ultra-Low Power Weather Station
#include <Adafruit_BME280.h>
#include <WiFi.h>

#define uS_TO_S_FACTOR 1000000
#define TIME_TO_SLEEP  900

Adafruit_BME280 bme;

void setup() {
  Serial.begin(115200);
  if(!bme.begin(0x76)) { Serial.println("BME Error"); return; }
  
  WiFi.begin("SSID", "PASS");
  while(WiFi.status() != WL_CONNECTED) delay(500);
  
  // PUSH DATA
  Serial.printf("Temp: %.2f | Hum: %.2f\\n", bme.readTemperature(), bme.readHumidity());
  
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Entering Deep Sleep...");
  Serial.flush(); 
  esp_deep_sleep_start();
}

void loop() {}`},{id:85,title:"Smart Irrigation System",level:"Intermediate",description:"Automated plant watering using capacitive sensors to prevent over-watering and dry-outs.",category:"Agriculture",estimatedTime:"75 mins",tech:["ESP32","Capacitive Moisture Sensor","Solenoid Valve"],concept:"Closed-loop Hydration. Measures soil dielectric constant to determine exact volumetric water content.",working_principle:`1. Capacitive Soil Moisture Sensor (Corrosion resistant) measures the soil's dielectric constant.
2. Calibration: Dry soil returns ~3000 ADC, Wet soil returns ~1200 ADC (on ESP32 12-bit ADC).
3. Logic: If Average(Moisture) < Threshold, activate the Solenoid Valve through a Power Transistor.
4. Safe Guard: The pump terminates after 30 seconds regardless of reading to prevent flooding if sensor fails.`,pin_config:{esp32:[{module:"Moisture Sensor",pinName:"AOUT",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Analog Moisture Level"},{module:"Relay Module",pinName:"RELAY",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"Control Signal"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Water conservation, plant health.",disadvantages:"Needs plumbing setup.",usage:"Insert sensor vertically into root zone.",components:["1x ESP32","1x Capacitive Sensor","1x 12V Solenoid"],author_name:"NISHANTH",status:"Published",bom_cost:"$28",code:`// Fail-Safe Smart Irrigation
const int SENSOR_PIN = 34;
const int VALVE_PIN = 25;
const int THRESHOLD = 2000;

void setup() {
  pinMode(VALVE_PIN, OUTPUT);
  digitalWrite(VALVE_PIN, LOW);
}

void loop() {
  int sum = 0;
  for(int i=0; i<10; i++) sum += analogRead(SENSOR_PIN);
  int avg = sum / 10;

  if(avg > THRESHOLD) {
    digitalWrite(VALVE_PIN, HIGH); // Open Valve
    delay(15000);                 // Water for 15s
    digitalWrite(VALVE_PIN, LOW);  // Close Valve
    delay(3600000);               // Wait 1 hour for soil to soak
  }
  delay(60000); 
}`},{id:86,title:"Smart Door Lock using RFID",level:"Intermediate",description:"Secure access via MIFARE cards with web-based user management and log tracking.",category:"Security",estimatedTime:"60 mins",tech:["ESP32","RC522","Blynk"],concept:"Cryptographic Token Verification. Uses 13.56MHz SPI communication to authenticate stored UIDs.",working_principle:`1. MFRC522 reads 1kB MIFARE tags using 13.56MHz induction.
2. Card UID is verified through a SHA-256 hash or simple whitelisting.
3. Upon success, a 12V Solenoid Door Lock is pulsed via a TIP120 transistor.
4. Integration: The Blynk app dashboard allows the owner to 'Force Open' or 'Lockdown' the entry remotely.`,pin_config:{esp32:[{module:"RC522",pinName:"SDA/SS",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"SPI Chip Select"},{module:"RC522",pinName:"SCK",mcuPin:"GPIO 18",direction:"Output",voltage:"3.3V",description:"SPI Clock"},{module:"MFRC522 RFID",pinName:"MISO",mcuPin:"GPIO 19",direction:"Input",voltage:"3.3V",description:"SPI Master In"},{module:"RC522",pinName:"MOSI",mcuPin:"GPIO 23",direction:"Output",voltage:"3.3V",description:"SPI Master Out"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"High security, easy to revoke cards.",disadvantages:"Requires backup physical key for safety.",usage:"Mount reader behind wood or plastic for clean look.",components:["1x ESP32","1x MFRC522","1x Solenoid Lock"],author_name:"NISHANTH",status:"Published",bom_cost:"$18",code:`// High-Security RFID Lock
#include <MFRC522.h>
#include <BlynkSimpleEsp32.h>

MFRC522 mfrc522(5, 22);

void setup() {
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
  pinMode(27, OUTPUT); // Solenoid Pin
}

void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) return;
  if (!mfrc522.PICC_ReadCardSerial()) return;
  
  // Check UID logic
  if(mfrc522.uid.uidByte[0] == 0xDE && mfrc522.uid.uidByte[1] == 0xAD) {
    digitalWrite(27, HIGH);
    delay(5000);
    digitalWrite(27, LOW);
  }
}`},{id:87,title:"Smart Attendance System",level:"Advanced",description:"Multi-factor authentication system combining RFID and Face Recognition. Logs attendance to the cloud and provides real-time verification status.",category:"Management",estimatedTime:"120 mins",tech:["ESP32","RFID","HTTPS Redirect"],concept:"Cloud Integration. Bridges physical ID scans to cloud databases without an intermediary PC.",working_principle:`1. RFID tag scan initiates check-in.
2. ESP32-CAM captures face image.
3. Successful match triggers cloud log and status OLED display.`,pin_config:{esp32:[{module:"RFID",pinName:"SDA",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"RFID Select"},{module:"RFID",pinName:"SCK",mcuPin:"GPIO 18",direction:"Input",voltage:"3.3V",description:"SPI Clock"},{module:"RFID",pinName:"MOSI",mcuPin:"GPIO 23",direction:"Input",voltage:"3.3V",description:"SPI Data"},{module:"RFID",pinName:"MISO",mcuPin:"GPIO 19",direction:"Output",voltage:"3.3V",description:"SPI Data"},{module:"RFID",pinName:"RST",mcuPin:"GPIO 22",direction:"Input",voltage:"3.3V",description:"Reset"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display Data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display Clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Alert"}]},advantages:"Prevents proxy attendance, cloud logs, automated reporting.",disadvantages:"Needs stable internet connection.",usage:"Generate a unique ID for every student/employee.",components:["1x ESP32","1x RC522","1x OLED","1x SD Slot"],author_name:"NISHANTH",status:"Published",bom_cost:"$24",code:`// Institutional IoT Attendance
#include <HTTPClient.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void sendAttendance(String id) {
  HTTPClient http;
  http.begin("https://script.google.com/macros/s/AKf.../exec?id=" + id);
  int code = http.GET();
  if(code > 0) lcd.print("Logged!");
  http.end();
}

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.print("Welcome!");
}

void loop() {
  // RFID reading logic here
}`,industrial_use:"Corporate offices, education campus, secure areas."},{id:88,title:"IoT Gas Leakage Monitoring",level:"Beginner",description:"Detect LPG and Smoke levels and send instant Pushover/Telegram alerts if safety limits are exceeded.",category:"Safety",estimatedTime:"45 mins",tech:["ESP32","MQ-2","Telegram Bot"],concept:"Chemical Analysis. Uses an electrochemical sensor to monitor oxidizable gases in the atmosphere.",working_principle:`1. The MQ-2 sensor uses an internal heating element to stabilize the SnO2 (Tin Dioxide) sensing layer.
2. When LPG/CO/Smoke particles contact the layer, conductivity increases measured as an analog voltage.
3. The ESP32 constantly monitors the differential change (dGas/dt) to detect sudden leaks.
4. Emergency Proto: Immediately activates a high-frequency siren and disconnects a relay (simulating gas valve shutoff).`,pin_config:{esp32:[{module:"MQ-2 Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"5V/3.3V",description:"Gas Concentration Output"},{module:"Alarm Siren",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Local Audible Alert"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Life-saving automation, remote monitoring.",disadvantages:"MQ-2 needs pre-heating time.",usage:"Mount near Potential gas sources.",components:["1x ESP32","1x MQ-2","1x Buzzer"],author_name:"NISHANTH",status:"Published",bom_cost:"$12",code:`// Industrial Gas Safety Node
#define SENSOR_PIN 32
#define SIREN_PIN 13
#define SHUTOFF_VALVE 27

void setup() {
  pinMode(SIREN_PIN, OUTPUT);
  pinMode(SHUTOFF_VALVE, OUTPUT);
  digitalWrite(SHUTOFF_VALVE, HIGH); // Open by default
}

void loop() {
  int val = analogRead(SENSOR_PIN);
  if (val > 2500) { // Dangerous Level
    digitalWrite(SIREN_PIN, HIGH);
    digitalWrite(SHUTOFF_VALVE, LOW); // Close Valve
    Serial.println("GAS EXCEEDED: CLOSING MAIN VALVE");
    // Telegram API call logic
  }
  delay(200);
}`},{id:89,title:"Smart Parking System",level:"Intermediate",description:"Real-time parking slot availability tracker with ultrasonic sensors and mobile dashboard.",category:"Smart City",estimatedTime:"60 mins",tech:["ESP32","Ultrasonic","Blynk"],concept:"Occupancy Analytics. Decides if a slot is 'occupied' based on physical distance thresholds from the sensor.",working_principle:`1. Multi-node network where each parking slot has an dedicated ultrasonic sensor installed on the ceiling.
2. MCU deciphers the state: Occupied (< 50cm) or Vacant (> 50cm).
3. State changes are transmitted via the MQTT protocol to a central database.
4. A physical LED indicator at the slot entrance changes from Green (Vacant) to Red (Occupied) for driver convenience.`,pin_config:{esp32:[{module:"HC-SR04 Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 4",direction:"Output",voltage:"3.3V",description:"Distance Pulse Start"},{module:"HC-SR04 Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"Distance Pulse Return"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Reduces traffic, efficient space use.",disadvantages:"Sensors can be blocked.",usage:"Mount on the ceiling of the parking garage.",components:["1x ESP32","3x HC-SR04","1x I2C LCD"],author_name:"NISHANTH",status:"Published",bom_cost:"$18",code:`// Smart Parking Slot Monitor
#include <PubSubClient.h>

const int TRIG = 4; const int ECHO = 5;
const int RED_LED = 25; const int GRN_LED = 26;

void setup() {
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
  pinMode(RED_LED, OUTPUT); pinMode(GRN_LED, OUTPUT);
}

void loop() {
  digitalWrite(TRIG, HIGH); delayMicroseconds(10); digitalWrite(TRIG, LOW);
  long d = pulseIn(ECHO, HIGH) * 0.034 / 2;
  
  if(d < 50 && d > 0) {
    digitalWrite(RED_LED, HIGH); digitalWrite(GRN_LED, LOW);
    // MQTT publish "Occupied"
  } else {
    digitalWrite(RED_LED, LOW); digitalWrite(GRN_LED, HIGH);
    // MQTT publish "Vacant"
  }
  delay(2000);
}`},{id:90,title:"Smart Street Lighting",level:"Beginner",description:"Energy-saving lights that dim to 10% when empty and brighten to 100% when vehicles or pedestrians are detected.",category:"Green Tech",estimatedTime:"40 mins",tech:["ESP32","PIR Sensor","PWM LED"],concept:"Adaptive Dimming. Uses high-frequency PWM switching to control light intensity without flickering.",working_principle:`1. Dual sensor logic: LDR for ambient light and PIR for human presence.
2. PWM Dimming: Light level is kept at 5% (Idle) to ensure safety and visibility at night.
3. On motion detection, the light ramps up (soft transition) to 100% brightness over 1 second.
4. Energy reporting: The system calculates kWh saved by comparing the 'Auto-Dimmed' state vs 'Always-On' state.`,pin_config:{esp32:[{module:"Motion Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Pedestrian Detection"},{module:"LED Driver",pinName:"PWM",mcuPin:"GPIO 14",direction:"Output",voltage:"3.3V",description:"Dimming Control"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Motion Detection"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}],arduino:[]},advantages:"Energy savings, reduced light pollution.",disadvantages:"Requires sensitive PIR.",usage:"Chain multiple nodes together.",components:["1x ESP32","1x PIR","1x Power MOSFET","1x LDR"],author_name:"NISHANTH",status:"Published",bom_cost:"$15",code:`// Autonomous Smart Streetlight
const int LED_PIN = 14;
const int PIR_PIN = 27;

void setup() {
  ledcSetup(0, 5000, 8);
  ledcAttachPin(LED_PIN, 0);
  pinMode(PIR_PIN, INPUT);
}

void loop() {
  if(digitalRead(PIR_PIN)) {
    for(int i=50; i<255; i++) { 
      ledcWrite(0, i); 
      delay(5); 
    }
    delay(15000);
  } else {
    ledcWrite(0, 20); // 8% Standby
  }
  delay(500);
}`},{id:91,title:"IoT Fire Alert System",level:"Intermediate",description:"Critical safety system detecting IR signature of flames with multi-channel alerts (Local + Cloud).",category:"Safety",estimatedTime:"50 mins",tech:["ESP32","Flame Sensor","Email Service"],concept:"Thermal Radiation Sensing. Detects specific infrared wavelengths emitted by open fires.",working_principle:`1. Uses a 5-channel Flame Sensor array for 120-degree fire detection coverage.
2. Detects specific IR frequencies (760nm - 1100nm) emitted by combustion.
3. Upon detection, the ESP32 activates a high-current water pump relay (Fire Suppression Simulation).
4. System sends an emergency HTTP POST request with the 'Critical Fire' status and node location.`,pin_config:{esp32:[{module:"Flame Sensor",pinName:"DO",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"Digital Fire Signal"},{module:"Siren Relay",pinName:"CMD",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Siren Activation"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Early detection saves lives.",disadvantages:"Sensitive to sunlight.",usage:"Install in kitchens or server rooms.",components:["1x ESP32","1x Flame Sensor","1x High Decibel Buzzer"],author_name:"NISHANTH",status:"Published",bom_cost:"$14",code:`// Fire Mitigation & Alert System
const int FLAME_PIN = 32;
const int PUMP_RELAY = 13;

void setup() {
  pinMode(FLAME_PIN, INPUT);
  pinMode(PUMP_RELAY, OUTPUT);
  digitalWrite(PUMP_RELAY, LOW);
}

void loop() {
  if(digitalRead(FLAME_PIN) == LOW) { // Flame detected (Active Low)
    digitalWrite(PUMP_RELAY, HIGH);
    Serial.println("FIRE DETECTED! Suppression Active.");
    // Send Cloud Alert
    delay(10000);
  } else {
    digitalWrite(PUMP_RELAY, LOW);
  }
  delay(50);
}`},{id:92,title:"Smart Water Level Monitor",level:"Intermediate",description:"Non-contact water level tracking for tanks with auto-pump control and overflow prevention.",category:"Home Utility",estimatedTime:"60 mins",tech:["ESP32","Ultrasonic","Blynk IoT"],concept:"Acoustic Range Finding. Measures time-of-flight of sound waves to calculate overhead distance to water surface.",working_principle:`1. Acoustic time-of-flight measurement: calculates the distance from the top-mounted sensor to the water surface.
2. Calibration: Total Tank Depth and sensor offset are factored into the firmware.
3. Threshold Logic: 25% (Start Pump) and 95% (Stop Pump) to ensure water availability and prevent tank dry-run.
4. Manual Override: Physical push button on the panel allows manual pump control during maintenance.`,pin_config:{esp32:[{module:"HC-SR04 Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 12",direction:"Output",voltage:"3.3V",description:"Ping Start"},{module:"HC-SR04 Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 13",direction:"Input",voltage:"3.3V",description:"Ping Finish"},{module:"Pump Relay",pinName:"IN",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"AC Pump Switch"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Prevents overflow, automates chore.",disadvantages:"Condensation concerns.",usage:"Mount sensor in waterproof enclosure above the tank.",components:["1x ESP32","1x JSN-SR04T","1x 30A Relay"],author_name:"NISHANTH",status:"Published",bom_cost:"$28",code:`// Liquid Level Logic Controller
#define PUMP 15
#define TRIG 12
#define ECHO 13

void setup() {
  pinMode(PUMP, OUTPUT);
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
}

void loop() {
  digitalWrite(TRIG, HIGH); delayMicroseconds(10); digitalWrite(TRIG, LOW);
  long dist = pulseIn(ECHO, HIGH) * 0.034 / 2;
  int level = map(dist, 100, 10, 0, 100); // 100cm (Empty) to 10cm (Full)

  if(level < 20) digitalWrite(PUMP, HIGH);
  if(level > 95) digitalWrite(PUMP, LOW);
  delay(5000);
}`},{id:93,title:"Smart Refrigerator Monitor",level:"Beginner",description:"Alert system for open fridge doors and temperature anomalies to prevent food spoilage.",category:"Kitchen Tech",estimatedTime:"45 mins",tech:["ESP32","Hall Effect","DS18B20"],concept:"Thermal Integrity monitoring. Tracks door state and temperature cycle to detect compressor failure.",working_principle:`1. Uses a DS18B20 waterproof probe inside the fridge and a magnetic reed switch on the door.
2. The MCU tracks the 'Door Open' duration; if it exceeds 60 seconds, it triggers a local buzzer and pushes a 'Fridge Door Open' alert.
3. It also logs the temperature every 15 minutes to generate a cooling performance graph.
4. The system detects if the compressor is failing by monitoring if the temperature rises above 10°C for more than an hour.`,pin_config:{esp32:[{module:"Temp Probe",pinName:"DATA",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"OneWire Bus"},{module:"Door Sensor",pinName:"OUT",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"Magnetic Switch"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Prevents waste, energy efficient.",disadvantages:"Thin wiring needed.",usage:"Use flat ribbon cables.",components:["1x ESP32","1x DS18B20 Waterproof","1x Magnetic Reed Switch"],author_name:"NISHANTH",status:"Published",bom_cost:"$16",code:`// Smart Refrigerator Security Log
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(4);
DallasTemperature sensors(&oneWire);
#define REED_PIN 15
#define BUZZER 13

void setup() {
  sensors.begin();
  pinMode(REED_PIN, INPUT_PULLUP);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  sensors.requestTemperatures();
  float t = sensors.getTempCByIndex(0);
  bool doorOpen = digitalRead(REED_PIN) == HIGH;
  
  if (doorOpen) {
    // Timer logic here
    digitalWrite(BUZZER, HIGH); delay(100); digitalWrite(BUZZER, LOW);
  }
  delay(5000);
}`},{id:94,title:"Smart Room Automation",level:"Intermediate",description:"Gesture and Voice controlled room with personalized lighting and fan presets.",category:"Home Automation",estimatedTime:"90 mins",tech:["ESP32","IR Receiver","PIR Sensor"],concept:"Multi-modal Interaction. Allows user to control their environment via physical presence, remote control, or app.",working_principle:`1. Integrates an IR receiver to capture signals from standard TV/AC remotes (NEC/Sony Protocol).
2. Uses a PIR sensor to determine if the room has been vacant for > 15 minutes.
3. Energy Optimization: If vacancy is confirmed, all active high-voltage relays (Lights/AC) are disconnected.
4. Feedback loop: A 16x2 LCD provides the current power usage and connectivity status of the smart room.`,pin_config:{esp32:[{module:"IR Receiver",pinName:"DATA",mcuPin:"GPIO 15",direction:"Input",voltage:"3.3V",description:"Remote Control Input"},{module:"Status LCD",pinName:"I2C",mcuPin:"GPIO 21/22",direction:"Output",voltage:"3.3V",description:"Show Current Mode"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Convenience, accessible.",disadvantages:"Complex scene logic.",usage:"Program codes from existing remotes.",components:["1x ESP32","1x TSOP IR Receiver","1x 4-Relay Board"],author_name:"NISHANTH",status:"Published",bom_cost:"$26",code:`// Smart Comfort & Energy Node
#include <IRremote.h>

const int IR_RX = 15; 
const int RELAY = 13;

void setup() {
  IrReceiver.begin(IR_RX, ENABLE_LED_FEEDBACK);
  pinMode(RELAY, OUTPUT);
}

void loop() {
  if (IrReceiver.decode()) {
    if(IrReceiver.decodedIRData.command == 0x12) { // Example IR Command
      digitalWrite(RELAY, !digitalRead(RELAY));
    }
    IrReceiver.resume();
  }
}`},{id:95,title:"Smart Health Monitoring System",level:"Advanced",description:"Portable IoT health kit measuring HR, SpO2, and Temperature for remote clinical tracking and emergency detection.",category:"Medical IoT",estimatedTime:"120 mins",tech:["ESP32","MAX30102","OLED"],concept:"Photoplethysmography (PPG). Uses red and infrared light absorption to determine blood oxygenation and pulse.",working_principle:`1. Optical and thermal sensors capture biometrics.
2. ESP32 filters signal and evaluates safe ranges.
3. Abnormal biometrics trigger buzzer and doctor alerts via IoT cloud.`,pin_config:{esp32:[{module:"MAX30102",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Data Line"},{module:"MAX30102",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Clock Line"},{module:"Temperature Sensor",pinName:"DATA",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"Body temperature"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Alert"}]},advantages:"Early warning system, portable, continuous monitoring.",disadvantages:"Motion artifacts.",usage:"Keep finger steady.",components:["1x ESP32","1x MAX30102","1x 0.96 OLED"],author_name:"NISHANTH",status:"Published",bom_cost:"$32",code:`// Medical Grade Pulse Auditor
#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"

MAX30105 particleSensor;

void setup() {
  Serial.begin(115200);
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) { 
    Serial.println("Sensor Link Failed"); 
    return; 
  }
  particleSensor.setup();
}

void loop() {
  long irValue = particleSensor.getIR();
  if (checkForBeat(irValue) == true) {
    long delta = millis() - lastBeat;
    float bpm = 60 / (delta / 1000.0);
    Serial.print("BPM: "); Serial.println(bpm);
  }
}`,industrial_use:"Telemedicine, nursing homes, fitness tracking."},{id:96,title:"Smart Greenhouse Monitoring System",level:"Advanced",description:"Automated environment control for greenhouses, managing temperature, light, and soil moisture to maximize crop vitality.",category:"Green Tech",estimatedTime:"150 mins",tech:["ESP32","SGP30","BME280","Fan Control"],concept:"Precision Agronomy. Optimizes photosynthesis by maintaining the VPD and CO2 levels.",working_principle:`1. Ambient and soil sensors track environment.
2. Control loops manage ventilation fans and irrigation pumps.
3. Optimized growth conditions maintained 24/7.`,pin_config:{esp32:[{module:"BME280 / DHT22",pinName:"SDA/DATA",mcuPin:"GPIO 21",direction:"I2C/Input",voltage:"3.3V",description:"Env data"},{module:"BME280 / DHT22",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Env data"},{module:"Soil Sensor",pinName:"AO",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Soil moisture"},{module:"LDR",pinName:"AO",mcuPin:"GPIO 35",direction:"Input",voltage:"3.3V",description:"Light level"},{module:"Relay 1",pinName:"IN",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"Fan control"},{module:"Relay 2",pinName:"IN",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Pump control"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 27",direction:"Output",voltage:"3.3V",description:"Limit alert"}]},advantages:"Labor reduction, resource efficiency, autonomous operation.",disadvantages:"High cost.",usage:"Connect to automation reservoir.",components:["1x ESP32","1x SGP30","1x BME280","2x DC Fans"],author_name:"NISHANTH",status:"Published",bom_cost:"$65",code:`// Greenhouse Climate Controller
#include "Adafruit_SGP30.h"
Adafruit_SGP30 sgp;

void setup() {
  Serial.begin(115200);
  if(!sgp.begin()) { Serial.println("CO2 Sensor Error"); return; }
  pinMode(13, OUTPUT); // Exhaust Fan
}

void loop() {
  if(sgp.IAQmeasure()) {
    Serial.print("CO2: "); Serial.print(sgp.eCO2); Serial.println(" ppm");
    if(sgp.eCO2 > 800) {
      digitalWrite(13, HIGH); // Ventilate
    } else {
      digitalWrite(13, LOW);
    }
  }
  delay(2000);
}`,industrial_use:"Precision agriculture, research test-beds, commercial hydroponics."},{id:97,title:"Smart Traffic Management",level:"Intermediate",description:"Density-based traffic signal control system using Infrared sensors to reduce congestion.",category:"Smart City",estimatedTime:"90 mins",tech:["ESP32","Infrared Grid","Signal Logic"],concept:"Dynamic Dispatch. Allots time based on real vehicle counts.",working_principle:`1. Pairs of IR sensors act as vehicle counters on each lane of a 4-way intersection.
2. The MCU calculates the 'Density Score' for each road based on the number of vehicles queued.
3. Adaptive Timing: The lane with the highest score is granted the Green signal for a longer duration.
4. Emergency Mode: Can be integrated with an IR receiver to detect ambulance sirens and force a 'Green' path immediately.`,pin_config:{esp32:[{module:"Lane 1 - Close",pinName:"IN",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"High Density Trigger"},{module:"Lane 1 - Signal",pinName:"RED",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Stop Light"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Reduces fuel waste.",disadvantages:"Needs wireless sync for network.",usage:"Test with miniatures.",components:["1x ESP32","8x IR Sensors","12x Traffic LEDs"],author_name:"NISHANTH",status:"Published",bom_cost:"$28",code:`// Density-Based Junction Logic
const int LANES[] = {32, 33, 34, 35}; // IR sensor pins
const int REDS[] = {2, 4, 5, 12};
const int GREENS[] = {13, 14, 15, 16};

void setup() {
  for(int i=0; i<4; i++) {
    pinMode(LANES[i], INPUT);
    pinMode(REDS[i], OUTPUT);
    pinMode(GREENS[i], OUTPUT);
  }
}

void loop() {
  // Simple priority logic
  for(int i=0; i<4; i++) {
    if(digitalRead(LANES[i]) == LOW) { // Vehicle detected
      digitalWrite(GREENS[i], HIGH); digitalWrite(REDS[i], LOW);
      delay(10000);
      digitalWrite(GREENS[i], LOW); digitalWrite(REDS[i], HIGH);
    }
  }
  delay(100);
}`},{id:98,title:"IoT Air Quality Monitoring System",level:"Advanced",description:"Professional PM2.5 and PM10 analysis using laser scattering technology (SDS011) for high-accuracy air pollution monitoring.",category:"Environmental",estimatedTime:"100 mins",tech:["ESP32","SDS011","WiFi"],concept:"Pollution Mapping. Uses laser scattering to count particles.",working_principle:`1. Laser sensor samples atmospheric particulates.
2. ESP32 calculates AQI metrics.
3. Pollution thresholds trigger safety alerts and cloud mapping.`,pin_config:{esp32:[{module:"SDS011",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"5V",description:"Laser data"},{module:"SDS011",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"5V",description:"Serial link"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Pollution alert"}]},advantages:"Industrial-grade precision, dual particle detection.",disadvantages:"Fan noise.",usage:"Place in protected area.",components:["1x ESP32","1x SDS011 Laser Sensor","1x OLED"],author_name:"NISHANTH",status:"Published",bom_cost:"$45",code:`#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <SDS011.h>

// -------- OLED CONFIG ----------
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
#define OLED_ADDR 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// -------- SDS011 CONFIG --------
#define SDS_RX 16
#define SDS_TX 17

SDS011 sds;
HardwareSerial sdsSerial(2);

// -------- VARIABLES -----------
float pm25, pm10;

void setup() {
  Serial.begin(115200);

  // OLED Init
  Wire.begin(21, 22);
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    Serial.println("OLED not found!");
    while (1);
  }

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println("Air Monitor");
  display.display();
  delay(2000);

  // SDS011 Init
  sdsSerial.begin(9600, SERIAL_8N1, SDS_RX, SDS_TX);
  sds.begin(&sdsSerial);
}

void loop() {
  if (sds.read(&pm25, &pm10) == 0) {

    Serial.printf("PM2.5: %.2f | PM10: %.2f\\n", pm25, pm10);

    display.clearDisplay();
    display.setTextSize(1);

    display.setCursor(0, 0);
    display.println("Air Quality");

    display.setCursor(0, 20);
    display.print("PM2.5: ");
    display.print(pm25);
    display.println(" ug/m3");
    
    display.setCursor(0, 40);
    display.print("PM10: ");
    display.print(pm10);
    display.println(" ug/m3");
    
    display.display();
  }
  delay(1000);
}`,industrial_use:"Smart city pollution mapping, HVAC optimization, industrial safety."},{id:99,title:"Smart Waste Management System",level:"Intermediate",description:"Futuristic sanitation solution monitors bin fill levels using ultrasonic sensing to optimize collection routes and prevent overflow.",category:"Smart City",estimatedTime:"60 mins",tech:["ESP32","Ultrasonic","GPS Module"],concept:"Logistics Optimization. Reduces collection costs by only visiting bins that actually need emptying.",working_principle:`1. Non-contact level sensing tracks capacity.
2. Local OLED and status buzzer provide fill alerts.
3. Fleet-wide data transmitted for smart sanitation management.`,pin_config:{esp32:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 18",direction:"Input",voltage:"3.3V",description:"Echo return"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Full level alert"}]},advantages:"Route optimization, overflow prevention, cost efficiency.",disadvantages:"Ultrasonic affected by moisture, needs stable power.",usage:"Deploy in smart bins for municipal waste collection.",components:["1x ESP32","1x HC-SR04 Ultrasonic","1x 0.96 OLED Display","1x GPS/GSM Module (Optional)","1x Buzzer","Power Supply"],author_name:"NISHANTH",status:"Published",bom_cost:"$28",code:`#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define TRIG 5
#define ECHO 18
#define BUZZER 26
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(BUZZER, OUTPUT);
  Wire.begin(21, 22);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setCursor(10, 20);
  display.setTextColor(WHITE);
  display.println("Smart Bin System");
  display.display();
  delay(2000);
}

void loop() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH);
  int distance = duration * 0.034 / 2;

  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Fill Level: ");
  display.print(distance);
  display.println(" cm");

  if (distance < 10) {
    display.println("BIN FULL!");
    digitalWrite(BUZZER, HIGH);
  } else {
    digitalWrite(BUZZER, LOW);
  }
  display.display();
  delay(2000);
}`,industrial_use:"Smart city sanitation, industrial waste compliance, institutional management."},{id:100,title:"Smart Vehicle Tracking System",level:"Advanced",description:"Robust fleet management solution using GPS/GSM for real-time tracking, SOS alerting, and historical route logging.",category:"Safety & Logistics",estimatedTime:"150 mins",tech:["ESP32","SIM800L","Neo-6M GPS"],concept:"Remote Telemetry. Fuses satellite positioning data with cellular GPRS for global asset tracking.",working_principle:`1. GPS constellation provides geographic fix.
2. ESP32 handles coordinate transmission via GSM/GPRS.
3. SMS and HTTP links provide real-time mapping for users.`,pin_config:{esp32:[{module:"GPS",pinName:"TX",mcuPin:"GPIO 4",direction:"Output",voltage:"3.3V",description:"Satellite data"},{module:"GPS",pinName:"RX",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"GPS command"},{module:"GSM/GPRS",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"3.3V",description:"Cellular link"},{module:"GSM/GPRS",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"3.3V",description:"Cellular link"},{module:"SOS BTN",pinName:"BTN",mcuPin:"GPIO 14",direction:"Input",voltage:"3.3V",description:"Panic trigger"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Map coordinates"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Map coordinates"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"SOS Alert"}]},advantages:"Wide cellular range, precise geolocation, automatic SOS alerting.",disadvantages:"High power usage.",usage:"Conceal inside a vehicle.",components:["1x ESP32","1x SIM800L","1x Neo-6M GPS","1x LiPo Battery"],author_name:"NISHANTH",status:"Published",bom_cost:"$55",code:`// Pro Vehicle Asset Tracker
// Hardware: ESP32 + SIM800L + Neo-6M GPS

#include <TinyGPS++.h>
#include <HardwareSerial.h>

TinyGPSPlus gps;
HardwareSerial GPS_Serial(2);

void setup() {
  Serial.begin(115200);
  GPS_Serial.begin(9600, SERIAL_8N1, 4, 5);
  Serial.println("Booting Logistics Tracker...");
}

void loop() {
  while (GPS_Serial.available() > 0) {
    if (gps.encode(GPS_Serial.read())) {
      if (gps.location.isValid()) {
        Serial.print("LAT: "); Serial.println(gps.location.lat(), 6);
        Serial.print("LNG: "); Serial.println(gps.location.lng(), 6);
        Serial.print("SPEED: "); Serial.println(gps.speed.kmph());
      }
    }
  }
  
  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS Hardware Detected Check Wiring!");
  }
}`,industrial_use:"Logistics tracking, vehicle recovery, cold-chain monitoring."},{id:101,title:"Smart Home Automation using IoT",level:"Intermediate",description:"A complete IoT-based smart home automation system using ESP32 that allows users to remotely control lights, fans, and appliances via a mobile application. The system also supports basic automation logic and environmental monitoring, making it suitable as a foundation project for real-world smart home deployments.",category:"Smart Home",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","Relay Module","Blynk IoT","DHT22","WiFi"],problem_statement:"In traditional homes, electrical appliances are controlled manually using physical switches. This often leads to inconvenience, especially for elderly or physically challenged individuals, and results in energy wastage when devices are left ON unintentionally. There is no remote visibility or control over appliance usage. An IoT-based smart home system solves this by enabling remote control, monitoring, and automation of appliances through the internet.",real_world_case:"Smart home automation systems are widely used in modern apartments, villas, hostels, and assisted living facilities. In elderly care homes, caregivers can remotely control appliances and monitor room conditions. In urban households, such systems reduce electricity consumption by ensuring appliances are switched OFF when not required.",block_diagram:"graph TD; Mobile_App-->|Internet|Blynk_Cloud; Blynk_Cloud-->|WiFi|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|AC_Supply|Appliances; DHT22-->|Temp/Humidity|ESP32;",alternatives:{MCU:"NodeMCU ESP8266 (lower cost but limited GPIO)",Platform:"Home Assistant (local server-based automation)",Communication:"MQTT instead of HTTP-based cloud"},concept:"The ESP32 acts as the central controller of the smart home system. It connects to the internet using WiFi and communicates with a cloud-based IoT platform (Blynk). User commands from a mobile application are received by the ESP32, which then controls electrical appliances using relay modules. Sensors such as DHT22 provide environmental data, enabling monitoring and future automation logic.",working_principle:`1. When powered ON, the ESP32 connects to the configured WiFi network.
2. The ESP32 establishes a secure connection with the Blynk IoT cloud.
3. The user interacts with virtual buttons in the mobile app.
4. Each button press sends a command to the ESP32 via the cloud.
5. The ESP32 sets the corresponding GPIO pin HIGH or LOW.
6. The relay module switches the connected appliance ON or OFF.
7. The DHT22 sensor continuously measures temperature and humidity.
8. Sensor data is sent back to the mobile dashboard for monitoring.`,pin_config:{esp32:[{module:"Relay Control",pinName:"Light Relay",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls lighting circuit via relay. GPIO26 is safe for output and does not affect boot mode."},{module:"Relay Control",pinName:"Fan Relay",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Controls fan load. Selected as a general-purpose output pin."},{module:"Relay Control",pinName:"Appliance Relay",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Controls an additional appliance such as a socket or AC contactor."},{module:"Sensor",pinName:"DHT22 Data",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Reads temperature and humidity data. Requires 10k pull-up resistor."}]},code:`/*
 Project 101: Smart Home Automation using IoT
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Home"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define RELAY_LIGHT 26
#define RELAY_FAN   27
#define RELAY_LOAD  14

#define DHT_PIN 27
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
BlynkTimer timer;

BLYNK_WRITE(V0) {
  digitalWrite(RELAY_LIGHT, param.asInt() ? HIGH : LOW);
}

BLYNK_WRITE(V1) {
  digitalWrite(RELAY_FAN, param.asInt() ? HIGH : LOW);
}

BLYNK_WRITE(V2) {
  digitalWrite(RELAY_LOAD, param.asInt() ? HIGH : LOW);
}

void sendSensorData() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();

  if (!isnan(temp) && !isnan(hum)) {
    Blynk.virtualWrite(V5, temp);
    Blynk.virtualWrite(V6, hum);
  }
}

void setup() {
  pinMode(RELAY_LIGHT, OUTPUT);
  pinMode(RELAY_FAN, OUTPUT);
  pinMode(RELAY_LOAD, OUTPUT);

  digitalWrite(RELAY_LIGHT, LOW);
  digitalWrite(RELAY_FAN, LOW);
  digitalWrite(RELAY_LOAD, LOW);

  dht.begin();
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, sendSensorData);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Power the ESP32 and verify WiFi connection.
2. Open Blynk app and toggle Light, Fan, and Appliance buttons.
3. Confirm relay switching sound and appliance response.
4. Observe temperature and humidity values updating every 2 seconds.
5. Disconnect WiFi briefly to verify system reconnection stability.`,common_errors:"Using boot-strap GPIOs for relays, insufficient power supply for relay module, missing pull-up resistor for DHT22, incorrect Blynk authentication token.",improvements:"Add scheduling and automation rules, integrate energy monitoring (PZEM-004T), implement local MQTT fallback, add voice assistant support, and build a custom web dashboard.",mini_challenge:"Modify the project to automatically turn OFF lights if no manual interaction occurs for 30 minutes and temperature is below a defined threshold.",advantages:"Remote access, improved convenience, reduced energy wastage, scalable architecture.",disadvantages:"Depends on internet connectivity for cloud-based control.",components:["ESP32","4-Channel Relay Module","DHT22 Sensor","5V Power Supply"],circuit_diagram:"ESP32 GPIO26, GPIO27, GPIO14 connected to relay inputs. DHT22 data connected to GPIO27 with pull-up resistor. Relay COM and NO terminals connected to AC load.",industrial_use:"Residential automation, hostels, smart apartments, assisted living facilities.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,200"},{id:102,title:"IoT Smart Agriculture System",level:"Intermediate",description:"An IoT-based smart agriculture system using ESP32 that monitors soil moisture, temperature, and humidity, and automatically controls irrigation using a relay-driven water pump. The system also provides real-time remote monitoring through a mobile dashboard, helping farmers optimize water usage and improve crop yield.",category:"Agriculture",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","Soil Moisture Sensor","DHT22","Relay Module","Blynk IoT","WiFi"],problem_statement:"Traditional irrigation practices rely on fixed schedules or manual judgment, which often leads to over-irrigation or under-irrigation. Over-irrigation wastes water and damages crops, while under-irrigation reduces yield. Farmers also lack real-time visibility of soil and environmental conditions when they are away from the field. An IoT-based smart agriculture system enables data-driven irrigation, conserving water while maintaining optimal soil conditions for crops.",real_world_case:"Smart irrigation systems are used in farms, greenhouses, polyhouses, and research fields. In water-scarce regions of India, such systems help reduce water usage significantly while maintaining crop health. Greenhouse operators also use similar systems to maintain consistent soil and climate conditions remotely.",block_diagram:"graph TD; Soil_Moisture_Sensor-->|Analog_Data|ESP32; DHT22-->|Temp_Humidity|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|AC|Water_Pump; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{"Soil Sensor":"Capacitive Soil Moisture Sensor (more durable, less corrosion)",MCU:"NodeMCU ESP8266 (lower cost but fewer ADC pins)",Platform:"Thingspeak or MQTT-based local server"},concept:"The ESP32 acts as the central controller that continuously monitors soil moisture and environmental conditions. Based on predefined moisture thresholds, the controller automatically decides when irrigation is required. A relay module safely isolates and switches the water pump, while a cloud dashboard allows farmers to view live sensor data and system status remotely.",working_principle:`1. When powered ON, the ESP32 connects to the configured WiFi network.
2. The soil moisture sensor outputs an analog voltage proportional to soil water content.
3. The ESP32 reads this value using its ADC-capable GPIO pin.
4. The DHT22 sensor measures ambient temperature and humidity.
5. Sensor data is uploaded to the cloud dashboard for monitoring.
6. If soil moisture falls below a defined threshold, the ESP32 activates the relay.
7. The relay switches ON the water pump to irrigate crops.
8. Once adequate moisture is reached, the pump is turned OFF automatically.`,pin_config:{esp32:[{module:"Soil Moisture Sensor",pinName:"Analog Output",mcuPin:"GPIO32",direction:"Input",voltage:"Analog",description:"ADC-capable pin used to read soil moisture level. GPIO32 is input-safe and ideal for analog sensors."},{module:"Temperature & Humidity Sensor",pinName:"DHT22 Data",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Reads ambient temperature and humidity. Requires a 10k pull-up resistor on data line."},{module:"Relay Control",pinName:"Water Pump Relay",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls irrigation pump via relay. GPIO26 is a safe general-purpose output pin."}]},code:`/*
 Project 102: IoT Smart Agriculture System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Agriculture"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define SOIL_PIN 32
#define RELAY_PUMP 26
#define DHT_PIN 27
#define DHT_TYPE DHT22

int moistureThreshold = 2000; // Adjust after calibration

DHT dht(DHT_PIN, DHT_TYPE);
BlynkTimer timer;

void readAndControlIrrigation() {
  int soilValue = analogRead(SOIL_PIN);
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();

  Blynk.virtualWrite(V5, soilValue);

  if (!isnan(temp) && !isnan(hum)) {
    Blynk.virtualWrite(V6, temp);
    Blynk.virtualWrite(V7, hum);
  }

  if (soilValue > moistureThreshold) {
    digitalWrite(RELAY_PUMP, HIGH); // Pump ON
  } else {
    digitalWrite(RELAY_PUMP, LOW);  // Pump OFF
  }
}

void setup() {
  pinMode(RELAY_PUMP, OUTPUT);
  digitalWrite(RELAY_PUMP, LOW);

  dht.begin();
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, readAndControlIrrigation);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Insert soil sensor into dry soil and verify pump turns ON automatically.
2. Water the soil gradually and observe pump switching OFF.
3. Check live soil moisture, temperature, and humidity values on the dashboard.
4. Adjust moistureThreshold and verify system response.
5. Run system continuously for 1–2 hours to confirm stability.`,common_errors:"Incorrect soil sensor calibration, using non-ADC pins for analog input, insufficient power supply for relay and pump, missing common ground between ESP32 and relay module.",improvements:"Integrate weather-based irrigation logic, add GSM alerts for pump status, include solar power support, log historical data for crop analysis, and implement AI-based irrigation prediction.",mini_challenge:"Modify the system to irrigate only during early morning or evening hours to minimize water evaporation.",advantages:"Efficient water usage, reduced manual labor, improved crop yield, remote monitoring capability.",disadvantages:"Depends on sensor calibration accuracy and internet connectivity for cloud monitoring.",components:["ESP32","Soil Moisture Sensor","DHT22 Sensor","Relay Module","Water Pump"],circuit_diagram:"Soil moisture sensor analog output connected to GPIO32. DHT22 data connected to GPIO27 with pull-up resistor. Relay input connected to GPIO26 controlling the water pump.",industrial_use:"Precision agriculture, greenhouse automation, smart irrigation systems.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,100"},{id:103,title:"IoT Water Quality Monitoring",level:"Intermediate",description:"An IoT-based water quality monitoring system using ESP32 that continuously measures pH and turbidity of water sources and provides real-time visibility through a cloud dashboard. The system helps detect unsafe water conditions early and supports data-driven water safety decisions.",category:"Environment",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","pH Sensor","Turbidity Sensor","Blynk IoT","WiFi"],problem_statement:"Water contamination is a major cause of health issues, especially in rural and semi-urban regions. Traditional water testing methods are manual, infrequent, and do not provide continuous monitoring. As a result, contaminated water may be consumed before issues are detected. An IoT-based system enables continuous, real-time water quality monitoring and early warning of unsafe conditions.",real_world_case:"Water quality monitoring systems are used in drinking water supply networks, aquaculture farms, water treatment plants, and rural borewell monitoring setups. In fish farms, real-time monitoring prevents fish loss, while in villages it helps ensure safe drinking water availability.",block_diagram:"graph TD; pH_Sensor-->|Analog|ESP32; Turbidity_Sensor-->|Analog|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{"pH Sensor":"Industrial pH probe with signal conditioning board",Platform:"Thingspeak or custom MQTT dashboard",Communication:"LoRa for long-distance water source monitoring"},concept:"The ESP32 acts as a data acquisition and communication unit. It reads analog voltage outputs from pH and turbidity sensors, converts them into digital values using ADC pins, and transmits the data to a cloud dashboard. Threshold-based logic can later be added to classify water safety levels.",working_principle:`1. The ESP32 powers ON and connects to WiFi.
2. The pH sensor generates a voltage proportional to hydrogen ion concentration.
3. The turbidity sensor outputs an analog voltage based on suspended particles in water.
4. ESP32 reads both signals using ADC-capable GPIO pins.
5. Raw sensor data is transmitted to the cloud dashboard.
6. Users monitor water quality trends remotely in real time.`,pin_config:{esp32:[{module:"pH Sensor",pinName:"Analog Output",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"ADC input-only pin ideal for stable pH sensor readings."},{module:"Turbidity Sensor",pinName:"Analog Output",mcuPin:"GPIO35",direction:"Input",voltage:"Analog",description:"ADC input-only pin used for turbidity measurement."}]},code:`/*
 Project 103: IoT Water Quality Monitoring
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Water Quality"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define PH_PIN 34
#define TURBIDITY_PIN 35

BlynkTimer timer;

void readWaterQuality() {
  int phRaw = analogRead(PH_PIN);
  int turbidityRaw = analogRead(TURBIDITY_PIN);

  Blynk.virtualWrite(V5, phRaw);
  Blynk.virtualWrite(V6, turbidityRaw);
}

void setup() {
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, readWaterQuality);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Immerse sensors in clean water and note baseline values.
2. Add impurities gradually and observe turbidity value changes.
3. Adjust pH using safe test solutions and verify response.
4. Monitor stability of readings over 10–15 minutes.`,common_errors:"Skipping sensor calibration, using non-ADC pins, electrical noise from pumps, improper sensor grounding.",improvements:"Convert raw values into actual pH units, add alert notifications for unsafe thresholds, log historical data, integrate temperature compensation.",mini_challenge:"Implement water safety classification (Safe / Moderate / Unsafe) based on pH and turbidity thresholds.",advantages:"Continuous monitoring, early contamination detection, remote access.",disadvantages:"Sensors require regular calibration and maintenance.",components:["ESP32","pH Sensor Module","Turbidity Sensor"],circuit_diagram:"pH sensor analog output connected to GPIO34. Turbidity sensor analog output connected to GPIO35. Common ground shared with ESP32.",industrial_use:"Drinking water monitoring, aquaculture management, water treatment plants.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,800"},{id:104,title:"Smart Street Lighting System",level:"Intermediate",description:"A smart street lighting system using ESP32 that automatically controls street lights based on ambient light conditions, reducing energy consumption and enabling smarter city infrastructure.",category:"Smart City",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","LDR Sensor","Relay Module","WiFi"],problem_statement:"Conventional street lighting systems operate on fixed schedules and remain ON even during daylight or low-traffic periods, resulting in significant energy wastage. Manual control is impractical for large areas. A smart, sensor-based system can automate lighting and reduce power consumption.",real_world_case:"Smart street lighting is deployed in smart cities, campuses, highways, and industrial areas. Municipal corporations use such systems to reduce electricity bills and maintenance costs while improving public safety.",block_diagram:"graph TD; LDR-->|Analog|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|AC|Street_Light;",alternatives:{Sensor:"Photodiode or Light Sensor Module",Controller:"ESP8266 for cost-optimized deployments",Control:"PWM-based LED dimming drivers"},concept:"The ESP32 continuously monitors ambient light intensity using an LDR sensor. Based on a predefined threshold, it automatically switches street lights ON during low-light conditions and OFF during daylight, ensuring efficient energy usage.",working_principle:`1. LDR changes resistance based on light intensity.
2. Voltage divider converts resistance change into analog voltage.
3. ESP32 reads analog voltage using ADC pin.
4. If light intensity falls below threshold, relay turns ON light.
5. When daylight returns, relay switches OFF automatically.`,pin_config:{esp32:[{module:"Light Sensor",pinName:"LDR Output",mcuPin:"GPIO33",direction:"Input",voltage:"Analog",description:"ADC pin used to read ambient light level."},{module:"Relay Control",pinName:"Street Light Relay",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls AC street light via relay."}]},code:`/*
 Project 104: Smart Street Lighting System
 Board   : ESP32
 Author  : NISHANTH
*/

#define LDR_PIN 33
#define RELAY_PIN 26

int lightThreshold = 2000; // Adjust after testing

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
}

void loop() {
  int lightValue = analogRead(LDR_PIN);

  if (lightValue < lightThreshold) {
    digitalWrite(RELAY_PIN, HIGH); // Night time
  } else {
    digitalWrite(RELAY_PIN, LOW);  // Day time
  }

  delay(1000);
}`,testing_output:`1. Cover LDR to simulate night and verify light turns ON.
2. Expose LDR to bright light and confirm light turns OFF.
3. Tune threshold value for real outdoor conditions.`,common_errors:"Incorrect LDR placement, wrong threshold calibration, relay contact rating mismatch.",improvements:"Add motion-based dimming, solar power integration, cloud monitoring, and fault detection.",mini_challenge:"Modify the system to dim lights instead of fully turning them OFF during low-traffic hours.",advantages:"Energy efficient, automatic operation, low maintenance.",disadvantages:"LDR performance affected by dust and weather.",components:["ESP32","LDR Sensor","Relay Module"],circuit_diagram:"LDR voltage divider output connected to GPIO33. Relay input connected to GPIO26 controlling street light.",industrial_use:"Smart city lighting, campuses, highways.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹650"},{id:105,title:"IoT-based Health Monitoring System",level:"Intermediate",description:"An IoT-based health monitoring system using ESP32 that continuously measures vital parameters such as heart rate, body temperature, and blood oxygen level, and uploads the data to a cloud dashboard for real-time monitoring by caregivers or medical professionals.",category:"Healthcare",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","MAX30102","DS18B20","Blynk IoT","WiFi"],problem_statement:"Patients with chronic illnesses, elderly individuals, and post-operative patients require continuous health monitoring. Manual measurement is inconvenient and does not provide real-time alerts in emergencies. Delays in detecting abnormal vital signs can lead to severe health complications. An IoT-based monitoring system enables continuous, remote observation of patient health parameters.",real_world_case:"Remote patient monitoring systems are widely used in home healthcare, hospitals, and quarantine centers. Doctors can track vital signs remotely, reducing hospital visits while ensuring timely medical intervention when abnormal readings are detected.",block_diagram:"graph TD; MAX30102-->|I2C|ESP32; DS18B20-->|Temp|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{"Heart Sensor":"Pulse Sensor (analog-based, lower accuracy)","Temperature Sensor":"LM35 (simpler but less accurate)",Platform:"Thingspeak or MQTT dashboard"},concept:"The ESP32 functions as a wearable or bedside monitoring unit. It interfaces with biomedical sensors to acquire vital signs and transmits this data to a cloud dashboard. This architecture allows continuous monitoring, historical data analysis, and future integration of alert systems.",working_principle:`1. ESP32 connects to WiFi and cloud platform.
2. MAX30102 measures heart rate and SpO2 using optical sensing.
3. DS18B20 measures body temperature using a digital 1-Wire interface.
4. ESP32 reads sensor data at regular intervals.
5. Data is transmitted to the cloud dashboard.
6. Abnormal values can be detected and flagged for alerts.`,pin_config:{esp32:[{module:"Heart Rate & SpO2 Sensor",pinName:"MAX30102 SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data line for MAX30102 sensor."},{module:"Heart Rate & SpO2 Sensor",pinName:"MAX30102 SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock line for MAX30102 sensor."},{module:"Temperature Sensor",pinName:"DS18B20 Data",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"1-Wire digital temperature sensor input with pull-up resistor."}]},code:`/*
 Project 105: IoT-based Health Monitoring System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Health Monitor"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <OneWire.h>
#include <DallasTemperature.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define TEMP_PIN 27

OneWire oneWire(TEMP_PIN);
DallasTemperature tempSensor(&oneWire);
BlynkTimer timer;

void readVitals() {
  tempSensor.requestTemperatures();
  float bodyTemp = tempSensor.getTempCByIndex(0);

  if (bodyTemp != DEVICE_DISCONNECTED_C) {
    Blynk.virtualWrite(V5, bodyTemp);
  }
}

void setup() {
  tempSensor.begin();
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, readVitals);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Place temperature sensor in contact with skin.
2. Verify body temperature updates on dashboard.
3. Observe stable readings over several minutes.
4. Disconnect WiFi briefly and check reconnection.`,common_errors:"Missing pull-up resistor for DS18B20, unstable WiFi connection, incorrect sensor placement.",improvements:"Add SpO2 and heart rate processing, integrate alert notifications, include data logging and AI-based anomaly detection.",mini_challenge:"Add a threshold alert that notifies when body temperature exceeds 38°C.",advantages:"Continuous monitoring, remote access, early detection of health issues.",disadvantages:"Depends on sensor accuracy and internet availability.",components:["ESP32","MAX30102 Sensor","DS18B20 Sensor"],circuit_diagram:"MAX30102 connected via I2C (GPIO21, GPIO22). DS18B20 data connected to GPIO27 with pull-up resistor.",industrial_use:"Remote healthcare monitoring, hospitals, elderly care.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹2,000"},{id:106,title:"IoT Smart Energy Meter",level:"Intermediate",description:"An IoT-based smart energy meter using ESP32 and PZEM-004T that measures voltage, current, power, and energy consumption in real time and uploads the data to a cloud dashboard for monitoring and analysis.",category:"Energy",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","PZEM-004T","Blynk IoT","WiFi"],problem_statement:"Conventional electricity meters do not provide real-time feedback to consumers, making it difficult to understand energy usage patterns. Lack of visibility often leads to higher electricity bills and inefficient energy usage. A smart energy meter provides live consumption data and helps users make informed decisions.",real_world_case:"Smart energy meters are used in homes, apartments, hostels, and small industries to monitor electricity usage, detect abnormal consumption, and plan energy-saving strategies.",block_diagram:"graph TD; AC_Load-->|Voltage_Current|PZEM004T; PZEM004T-->|UART|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensors:"ACS712 + ZMPT101B (separate current and voltage sensing)",Platform:"Thingspeak or local MQTT server",Communication:"RS485-based industrial meters"},concept:"The PZEM-004T module measures electrical parameters directly from the AC line and communicates digitally with the ESP32. The ESP32 acts as a gateway, sending this data to a cloud dashboard for visualization and analysis.",working_principle:`1. PZEM-004T measures voltage and current from the AC load.
2. Internal calculations provide power and energy values.
3. ESP32 reads data via UART communication.
4. Data is uploaded to cloud dashboard via WiFi.
5. Users monitor energy consumption in real time.`,pin_config:{esp32:[{module:"UART Communication",pinName:"PZEM RX",mcuPin:"GPIO16",direction:"Input",voltage:"3.3V",description:"Receives serial data from PZEM module."},{module:"UART Communication",pinName:"PZEM TX",mcuPin:"GPIO17",direction:"Output",voltage:"3.3V",description:"Transmits commands to PZEM module."}]},code:`/*
 Project 106: IoT Smart Energy Meter
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Energy Meter"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <PZEM004Tv30.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

PZEM004Tv30 pzem(Serial2, 16, 17);
BlynkTimer timer;

void sendEnergyData() {
  Blynk.virtualWrite(V5, pzem.voltage());
  Blynk.virtualWrite(V6, pzem.current());
  Blynk.virtualWrite(V7, pzem.power());
  Blynk.virtualWrite(V8, pzem.energy());
}

void setup() {
  Serial2.begin(9600);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, sendEnergyData);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Connect a known electrical load.
2. Verify voltage and current readings.
3. Compare energy readings with conventional meter.
4. Observe stability over extended runtime.`,common_errors:"Incorrect UART wiring, loose CT connection, unsafe AC handling.",improvements:"Add cost calculation, alerts for overconsumption, data logging, and mobile billing reports.",mini_challenge:"Calculate daily electricity cost based on per-unit tariff and display it.",advantages:"Real-time energy visibility, cost awareness, remote monitoring.",disadvantages:"Requires careful handling of AC mains.",components:["ESP32","PZEM-004T Energy Meter"],circuit_diagram:"PZEM UART TX/RX connected to ESP32 GPIO16 and GPIO17. AC load connected through PZEM module.",industrial_use:"Smart metering, energy management systems.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,800"},{id:107,title:"Wi-Fi Weather Station",level:"Intermediate",description:"A Wi-Fi based weather station using ESP32 that measures temperature, humidity, and atmospheric pressure and provides real-time environmental data through a cloud dashboard. This project introduces multi-sensor integration and I2C communication.",category:"Weather",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","DHT22","BMP280","Blynk IoT","WiFi"],problem_statement:"Weather data from centralized stations may not accurately represent local environmental conditions. Farmers, researchers, and institutions often need localized weather information such as temperature, humidity, and pressure. Manual measurement is impractical and non-continuous. A local IoT weather station enables real-time, location-specific environmental monitoring.",real_world_case:"Local weather stations are used in farms, research labs, school campuses, and smart cities. Farmers rely on such data for irrigation planning, while institutions use it for environmental studies and micro-climate analysis.",block_diagram:"graph TD; DHT22-->|Temp_Humidity|ESP32; BMP280-->|I2C|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"BME280 (temperature + humidity + pressure in one module)",Platform:"Thingspeak",Communication:"LoRa for long-range deployment"},concept:"The ESP32 acts as a data collection and communication unit. Environmental sensors measure weather parameters and send them to the ESP32. The ESP32 processes the data and uploads it to a cloud dashboard, enabling real-time monitoring and future data analysis.",working_principle:`1. ESP32 connects to WiFi on power-up.
2. DHT22 measures ambient temperature and humidity.
3. BMP280 measures atmospheric pressure using I2C communication.
4. ESP32 reads sensor data at fixed intervals.
5. Data is sent to the cloud dashboard.
6. Users view live weather data remotely.`,pin_config:{esp32:[{module:"DHT22 Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to DHT22 sensor."},{module:"DHT22 Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"DHT22 Sensor",pinName:"Data",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Digital data pin with 10k pull-up resistor."},{module:"BMP280 Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"BMP280 operates safely at 3.3V."},{module:"BMP280 Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"BMP280 Sensor",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data line."},{module:"BMP280 Sensor",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock line."}]},code:`/*
 Project 107: Wi-Fi Weather Station
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Weather Station"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>
#include <Adafruit_BMP280.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define DHT_PIN 27
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_BMP280 bmp;
BlynkTimer timer;

void sendWeatherData() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();
  float pressure = bmp.readPressure() / 100.0;

  if (!isnan(temp) && !isnan(hum)) {
    Blynk.virtualWrite(V5, temp);
    Blynk.virtualWrite(V6, hum);
  }
  Blynk.virtualWrite(V7, pressure);
}

void setup() {
  dht.begin();
  bmp.begin(0x76);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, sendWeatherData);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Power system and verify WiFi connection.
2. Observe temperature, humidity, and pressure updates.
3. Compare readings with local weather app for validation.`,common_errors:"Wrong I2C address, missing pull-up on DHT22, unstable power supply.",improvements:"Add rainfall and wind speed sensors, store historical data, display weather trends.",mini_challenge:"Calculate and display heat index using temperature and humidity.",advantages:"Localized weather monitoring, low cost, scalable.",disadvantages:"Limited accuracy compared to professional stations.",components:["ESP32","DHT22 Sensor","BMP280 Sensor"],circuit_diagram:"DHT22 connected to GPIO27 with pull-up. BMP280 connected via I2C on GPIO21/22.",industrial_use:"Agriculture, environmental monitoring, research.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,300"},{id:108,title:"Smart Parking System using IoT",level:"Intermediate",description:"An IoT-based smart parking system using ESP32 that detects vehicle presence in parking slots using ultrasonic sensors and provides real-time availability status through a cloud dashboard.",category:"Smart City",sub_category:"IoT (101-200)",estimatedTime:"4 Hours",tech:["ESP32","Ultrasonic Sensor (HC-SR04)","Blynk IoT","WiFi"],problem_statement:"Drivers waste time and fuel searching for parking spaces, leading to traffic congestion and pollution. Traditional parking systems lack real-time availability information. A smart parking system provides live slot status, improving efficiency and reducing congestion.",real_world_case:"Smart parking systems are used in malls, offices, airports, hospitals, and smart cities to optimize parking space usage and reduce traffic chaos.",block_diagram:"graph TD; Ultrasonic_Sensor-->|Distance|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"IR Proximity Sensor",Communication:"LoRa for city-wide deployment",Platform:"Firebase"},concept:"The ultrasonic sensor measures the distance between the sensor and the ground or vehicle. The ESP32 interprets this distance to determine whether a parking slot is occupied and updates the status on a cloud dashboard.",working_principle:`1. Ultrasonic sensor emits sound pulses.
2. Echo time is measured to calculate distance.
3. ESP32 determines slot occupancy.
4. Slot status is sent to cloud dashboard.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"HC-SR04 requires 5V for accurate operation."},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Trigger pulse output."},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO26",direction:"Input",voltage:"3.3V (via divider)",description:"Echo signal reduced from 5V using voltage divider."}]},code:`/*
 Project 108: Smart Parking System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Parking"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

#define TRIG_PIN 25
#define ECHO_PIN 26

BlynkTimer timer;

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  return duration * 0.034 / 2;
}

void sendParkingStatus() {
  long distance = getDistance();
  int occupied = (distance < 10) ? 1 : 0;
  Blynk.virtualWrite(V5, occupied);
}

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, "SSID", "PASS");
  timer.setInterval(2000L, sendParkingStatus);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Place vehicle under sensor and verify occupied status.
2. Remove vehicle and confirm slot available.
3. Adjust distance threshold for real installation.`,common_errors:"Missing voltage divider on echo pin, wrong sensor height calibration.",improvements:"Add multiple slots, LED indicators, payment integration.",mini_challenge:"Extend system to monitor 4 parking slots.",advantages:"Reduced traffic congestion, efficient parking usage.",disadvantages:"Sensor accuracy affected by environment.",components:["ESP32","HC-SR04 Ultrasonic Sensor"],circuit_diagram:"HC-SR04 TRIG to GPIO25, ECHO to GPIO26 via voltage divider.",industrial_use:"Smart city parking systems.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹900"},{id:109,title:"Air Pollution Monitoring System",level:"Intermediate",description:"An IoT-based air pollution monitoring system using ESP32 that measures air quality parameters using a gas sensor and provides real-time pollution data through a cloud dashboard. The system helps identify unhealthy air conditions and supports early warning mechanisms.",category:"Environment",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","MQ-135 Gas Sensor","Blynk IoT","WiFi"],problem_statement:"Air pollution is a serious health concern in urban and industrial areas. Traditional air quality monitoring stations are expensive and sparsely distributed, making it difficult to assess local air conditions. People are often unaware of real-time pollution levels in their immediate environment. A low-cost IoT-based air pollution monitoring system enables localized, continuous air quality monitoring.",real_world_case:"Air quality monitoring systems are deployed near schools, hospitals, traffic junctions, industrial zones, and residential areas. Localized monitoring helps authorities and individuals take preventive actions during high pollution levels, such as restricting outdoor activities.",block_diagram:"graph TD; MQ135-->|Analog_Gas_Data|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{"Gas Sensor":"MQ-7 (CO specific), MQ-2 (smoke and LPG)",Platform:"Thingspeak",Communication:"LoRaWAN for city-scale monitoring"},concept:"The MQ-135 gas sensor detects harmful gases such as NH3, NOx, benzene, and CO2. The ESP32 reads the analog voltage output from the sensor and uploads the data to a cloud dashboard. Although the readings are relative, they are useful for trend analysis and pollution alerts.",working_principle:`1. MQ-135 sensor heater warms up to detect gas concentration.
2. Sensor resistance changes based on pollutant levels.
3. Analog voltage is generated corresponding to gas concentration.
4. ESP32 reads voltage using ADC pin.
5. Data is transmitted to cloud dashboard.
6. Users monitor pollution trends in real time.`,pin_config:{esp32:[{module:"MQ-135 Gas Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Provides power to sensor heater. MQ sensors require 5V for stable operation."},{module:"MQ-135 Gas Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"MQ-135 Gas Sensor",pinName:"Analog Output",mcuPin:"GPIO32",direction:"Input",voltage:"Analog (≤3.3V)",description:"Analog signal scaled to safe ESP32 ADC range."}]},code:`/*
 Project 109: Air Pollution Monitoring System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Air Quality Monitor"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define GAS_PIN 32

BlynkTimer timer;

void sendAirQuality() {
  int gasValue = analogRead(GAS_PIN);
  Blynk.virtualWrite(V5, gasValue);
}

void setup() {
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, sendAirQuality);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Power the system and allow sensor warm-up (2–3 minutes).
2. Expose sensor to smoke or pollution source.
3. Observe rise in air quality value on dashboard.
4. Ensure readings stabilize over time.`,common_errors:"Skipping sensor warm-up, powering MQ sensor from 3.3V, noisy ADC readings due to poor grounding.",improvements:"Convert raw values to AQI, add alert notifications, integrate temperature compensation, log historical pollution data.",mini_challenge:"Trigger a mobile alert when pollution exceeds a safe threshold.",advantages:"Low-cost air monitoring, real-time data, easy deployment.",disadvantages:"Relative readings, requires calibration for accuracy.",components:["ESP32","MQ-135 Gas Sensor"],circuit_diagram:"MQ-135 VCC to 5V, GND to GND, analog output to GPIO32 with proper scaling.",industrial_use:"Environmental monitoring, smart cities, health safety systems.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,000"},{id:110,title:"IoT Fire Safety Monitoring",level:"Intermediate",description:"An IoT-based fire safety monitoring system using ESP32 that detects fire hazards using flame and smoke sensors and provides real-time alerts through a cloud dashboard.",category:"Safety",sub_category:"IoT (101-200)",estimatedTime:"4 Hours",tech:["ESP32","Flame Sensor","MQ-2 Gas Sensor","Blynk IoT","WiFi"],problem_statement:"Fire accidents cause severe damage to life and property, especially when detection is delayed. Conventional fire alarms provide only local alerts and lack remote monitoring capability. An IoT-based fire safety system enables early detection and instant remote alerts, improving response time.",real_world_case:"Fire monitoring systems are used in homes, offices, warehouses, factories, and server rooms. Remote alerts allow building owners and safety teams to respond quickly even when premises are unattended.",block_diagram:"graph TD; Flame_Sensor-->|Digital|ESP32; MQ2-->|Smoke|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{"Smoke Sensor":"MQ-135 or dedicated smoke detector",Communication:"GSM-based alert system",Platform:"Firebase"},concept:"The system combines flame detection and smoke sensing to improve fire detection reliability. ESP32 continuously monitors both sensors and sends alerts to the cloud when abnormal conditions are detected.",working_principle:`1. Flame sensor detects infrared light from fire.
2. MQ-2 sensor detects smoke and flammable gases.
3. ESP32 reads sensor signals continuously.
4. If fire or smoke exceeds threshold, alert is triggered.
5. Alert is sent to cloud dashboard.`,pin_config:{esp32:[{module:"Flame Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers flame sensor module."},{module:"Flame Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"Flame Sensor",pinName:"Digital Output",mcuPin:"GPIO25",direction:"Input",voltage:"3.3V",description:"Goes LOW when flame is detected."},{module:"MQ-2 Gas Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to MQ-2 sensor heater."},{module:"MQ-2 Gas Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"MQ-2 Gas Sensor",pinName:"Analog Output",mcuPin:"GPIO33",direction:"Input",voltage:"Analog (≤3.3V)",description:"Smoke concentration signal scaled to ESP32 ADC range."}]},code:`/*
 Project 110: IoT Fire Safety Monitoring
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Fire Safety"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define FLAME_PIN 25
#define SMOKE_PIN 33

BlynkTimer timer;

void checkFireStatus() {
  int flameDetected = digitalRead(FLAME_PIN);
  int smokeLevel = analogRead(SMOKE_PIN);

  Blynk.virtualWrite(V5, flameDetected);
  Blynk.virtualWrite(V6, smokeLevel);
}

void setup() {
  pinMode(FLAME_PIN, INPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, checkFireStatus);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Introduce flame source near flame sensor.
2. Generate smoke near MQ-2 sensor.
3. Verify real-time alerts on dashboard.
4. Test system response time.`,common_errors:"False positives due to ambient light, no warm-up for MQ sensor, unsafe wiring.",improvements:"Add buzzer and SMS alerts, integrate sprinkler control, add redundancy.",mini_challenge:"Trigger an automatic exhaust fan when smoke level exceeds threshold.",advantages:"Early fire detection, remote alerts, improved safety.",disadvantages:"Requires proper calibration to avoid false alarms.",components:["ESP32","Flame Sensor","MQ-2 Gas Sensor"],circuit_diagram:"Flame sensor digital output to GPIO25. MQ-2 analog output to GPIO33 with proper voltage scaling.",industrial_use:"Fire safety systems, industrial safety monitoring.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,200"},{id:111,title:"Smart Waste Management System",level:"Intermediate",description:"An IoT-based smart waste management system using ESP32 that monitors garbage bin fill level using an ultrasonic sensor and provides real-time status updates to a cloud dashboard, enabling timely waste collection and efficient resource management.",category:"Smart City",sub_category:"IoT (101-200)",estimatedTime:"4 Hours",tech:["ESP32","Ultrasonic Sensor (HC-SR04)","Blynk IoT","WiFi"],problem_statement:"In traditional waste management systems, garbage bins are emptied on fixed schedules regardless of their actual fill level. This leads to overflowing bins, unhygienic conditions, and inefficient collection routes. A smart waste monitoring system provides real-time bin status to optimize collection schedules.",real_world_case:"Smart bins are deployed in cities, campuses, airports, railway stations, and residential complexes. Municipal corporations use such systems to reduce operational costs and improve cleanliness by collecting waste only when bins are nearly full.",block_diagram:"graph TD; Ultrasonic_Sensor-->|Distance|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"IR Proximity Sensor",Communication:"LoRaWAN for long-distance city deployment",Platform:"Firebase"},concept:"The ultrasonic sensor measures the distance between the sensor and the garbage surface. As the bin fills up, the measured distance decreases. The ESP32 converts this distance into a fill-level percentage and uploads it to a cloud dashboard for monitoring.",working_principle:`1. Ultrasonic sensor emits sound pulses.
2. Echo time is measured to calculate distance.
3. ESP32 computes garbage level based on bin depth.
4. Fill level is sent to cloud dashboard.
5. Collection is triggered when threshold is reached.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"HC-SR04 requires 5V for reliable distance measurement."},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Trigger signal to initiate ultrasonic pulse."},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO26",direction:"Input",voltage:"3.3V (via divider)",description:"Echo signal scaled down from 5V using voltage divider."}]},code:`/*
 Project 111: Smart Waste Management System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Bin"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

#define TRIG_PIN 25
#define ECHO_PIN 26

const int binDepth = 50; // cm
BlynkTimer timer;

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  return duration * 0.034 / 2;
}

void sendBinStatus() {
  long distance = getDistance();
  int fillLevel = map(distance, binDepth, 0, 0, 100);
  fillLevel = constrain(fillLevel, 0, 100);
  Blynk.virtualWrite(V5, fillLevel);
}

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, "SSID", "PASS");
  timer.setInterval(3000L, sendBinStatus);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Empty bin and record baseline distance.
2. Gradually fill bin and observe percentage increase.
3. Verify dashboard updates in real time.
4. Test threshold alerts manually.`,common_errors:"Incorrect bin depth value, missing voltage divider on echo pin, sensor blockage due to waste.",improvements:"Add GPS for truck routing, add odor sensors, integrate collection scheduling algorithm.",mini_challenge:"Trigger alert when bin level exceeds 80%.",advantages:"Optimized waste collection, cleaner environment, reduced operational cost.",disadvantages:"Sensor accuracy affected by irregular waste surface.",components:["ESP32","HC-SR04 Ultrasonic Sensor"],circuit_diagram:"HC-SR04 TRIG to GPIO25, ECHO to GPIO26 via voltage divider.",industrial_use:"Municipal waste management, smart city infrastructure.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹900"},{id:112,title:"IoT-based Smart Irrigation System",level:"Intermediate",description:"An IoT-based smart irrigation system using ESP32 that automatically controls water supply based on real-time soil moisture data, reducing water wastage and improving crop health.",category:"Agriculture",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","Soil Moisture Sensor","Relay Module","Blynk IoT","WiFi"],problem_statement:"Irrigation based on fixed schedules often leads to inefficient water usage. Crops may be watered even when soil moisture is sufficient, resulting in water wastage and root damage. Smart irrigation systems use real-time soil data to deliver water only when needed.",real_world_case:"Smart irrigation is used in farms, gardens, greenhouses, and drip irrigation systems. Farmers benefit from reduced water consumption and improved crop yield, especially in water-scarce regions.",block_diagram:"graph TD; Soil_Moisture_Sensor-->|Analog|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|Pump|Water_Supply; ESP32-->|WiFi|Blynk_Cloud;",alternatives:{Sensor:"Capacitive Soil Moisture Sensor (longer life)",Power:"Solar-powered irrigation controller",Platform:"MQTT-based automation server"},concept:"The ESP32 continuously monitors soil moisture using an analog sensor. When moisture falls below a defined threshold, the controller activates a relay to start irrigation. Once adequate moisture is reached, irrigation is stopped automatically.",working_principle:`1. Soil moisture sensor outputs analog voltage based on water content.
2. ESP32 reads sensor value using ADC pin.
3. Value is compared with predefined threshold.
4. Relay switches water pump ON or OFF.
5. Status and readings are uploaded to cloud dashboard.`,pin_config:{esp32:[{module:"Soil Moisture Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers soil moisture sensor safely without damaging ESP32 ADC."},{module:"Soil Moisture Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Soil Moisture Sensor",pinName:"Analog Output",mcuPin:"GPIO32",direction:"Input",voltage:"Analog",description:"ADC-capable pin used for moisture sensing."},{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to relay coil."},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground shared with ESP32."},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls relay to switch water pump."}]},code:`/*
 Project 112: IoT-based Smart Irrigation System
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Irrigation"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define SOIL_PIN 32
#define RELAY_PIN 26

int moistureThreshold = 2000;
BlynkTimer timer;

void controlIrrigation() {
  int soilValue = analogRead(SOIL_PIN);
  Blynk.virtualWrite(V5, soilValue);

  if (soilValue > moistureThreshold) {
    digitalWrite(RELAY_PIN, HIGH);
  } else {
    digitalWrite(RELAY_PIN, LOW);
  }
}

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(3000L, controlIrrigation);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Insert sensor into dry soil and verify pump activation.
2. Water soil and observe pump deactivation.
3. Adjust threshold for crop type.`,common_errors:"Wrong threshold calibration, sensor corrosion, insufficient power for pump relay.",improvements:"Add weather-based logic, multi-zone irrigation, mobile alerts.",mini_challenge:"Add manual override button from mobile app.",advantages:"Water efficient, automatic operation, remote monitoring.",disadvantages:"Sensor lifespan limited in wet soil.",components:["ESP32","Soil Moisture Sensor","Relay Module","Water Pump"],circuit_diagram:"Soil sensor analog output to GPIO32. Relay input to GPIO26 controlling water pump.",industrial_use:"Precision agriculture, greenhouse irrigation.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,100"},{id:113,title:"Smart Door Lock using Blynk",level:"Intermediate",description:"An IoT-based smart door lock system using ESP32 that allows users to lock and unlock a door remotely using a mobile application. The system uses a servo motor as the locking mechanism and provides secure, convenient access control.",category:"Smart Home",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","Servo Motor","Blynk IoT","WiFi"],problem_statement:"Traditional mechanical door locks require physical keys, which can be lost, duplicated, or misused. Managing access remotely is not possible with conventional locks. A smart door lock system enables remote control, improves security, and provides better access management.",real_world_case:"Smart door locks are used in homes, hostels, offices, Airbnb rentals, and labs. Owners can grant or revoke access remotely and ensure doors are locked even when they are away.",block_diagram:"graph TD; Mobile_App-->|Internet|Blynk_Cloud; Blynk_Cloud-->|WiFi|ESP32; ESP32-->|PWM|Servo_Motor;",alternatives:{Actuator:"Solenoid lock",Authentication:"RFID or Fingerprint module",Platform:"Home Assistant"},concept:"The ESP32 receives lock or unlock commands from a cloud-based mobile application. Based on the command, it controls a servo motor that physically rotates the locking mechanism. The servo provides precise angle control, making it ideal for door locking applications.",working_principle:`1. ESP32 connects to WiFi and Blynk cloud.
2. User presses Lock/Unlock button in mobile app.
3. Command is received by ESP32.
4. ESP32 generates PWM signal.
5. Servo motor rotates to lock or unlock position.
6. Door state is updated on the dashboard.`,pin_config:{esp32:[{module:"Servo Motor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Provides sufficient current for servo motor operation."},{module:"Servo Motor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground with ESP32."},{module:"Servo Motor",pinName:"Signal",mcuPin:"GPIO18",direction:"Output",voltage:"PWM (3.3V)",description:"PWM-capable pin used to control servo angle."}]},code:`/*
 Project 113: Smart Door Lock using Blynk
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Smart Door Lock"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <ESP32Servo.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define SERVO_PIN 18
Servo doorServo;

BLYNK_WRITE(V0) {
  int lockState = param.asInt();
  if (lockState) {
    doorServo.write(90); // Lock
  } else {
    doorServo.write(0);  // Unlock
  }
}

void setup() {
  doorServo.attach(SERVO_PIN);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
}

void loop() {
  Blynk.run();
}`,testing_output:`1. Power the system and connect to Blynk.
2. Press Lock button and observe servo rotation.
3. Press Unlock button and verify door opens.
4. Test system reliability over multiple cycles.`,common_errors:"Insufficient power for servo, wrong servo angles, loose mechanical coupling.",improvements:"Add fingerprint authentication, door status sensor, access logs.",mini_challenge:"Add auto-lock feature after 30 seconds.",advantages:"Remote access, improved security, no physical keys.",disadvantages:"Depends on internet and power availability.",components:["ESP32","Servo Motor","Door Lock Mechanism"],circuit_diagram:"Servo VCC to 5V, GND to GND, signal to GPIO18.",industrial_use:"Smart homes, offices, access-controlled areas.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,500"},{id:114,title:"Smart Water Tank Monitoring",level:"Intermediate",description:"An IoT-based smart water tank monitoring system using ESP32 that measures water level using an ultrasonic sensor and provides real-time level information through a mobile dashboard.",category:"Utilities",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","Ultrasonic Sensor (HC-SR04)","Blynk IoT","WiFi"],problem_statement:"Manual monitoring of overhead water tanks often leads to overflow or water shortage. Without real-time level information, pumps are either run too long or not started in time. A smart monitoring system provides accurate water level data and prevents wastage.",real_world_case:"Smart water tank monitoring systems are used in homes, apartments, hostels, and commercial buildings to prevent overflow, automate pumps, and manage water usage efficiently.",block_diagram:"graph TD; Ultrasonic_Sensor-->|Distance|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"Float sensor or pressure sensor",Control:"Automatic pump controller",Platform:"MQTT dashboard"},concept:"The ultrasonic sensor measures the distance between the sensor and the water surface. Based on the tank height, the ESP32 calculates water level percentage and uploads it to a cloud dashboard.",working_principle:`1. Ultrasonic sensor emits sound pulses.
2. Echo time is measured to calculate distance.
3. ESP32 computes water level.
4. Level data is sent to cloud dashboard.
5. User monitors tank status remotely.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Provides required power to ultrasonic sensor."},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Trigger pin for ultrasonic pulse."},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO26",direction:"Input",voltage:"3.3V (via divider)",description:"Echo signal scaled down using voltage divider."}]},code:`/*
 Project 114: Smart Water Tank Monitoring
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Water Tank Monitor"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

#define TRIG_PIN 25
#define ECHO_PIN 26

const int tankDepth = 150; // cm
BlynkTimer timer;

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  return duration * 0.034 / 2;
}

void sendWaterLevel() {
  long distance = getDistance();
  int level = map(distance, tankDepth, 0, 0, 100);
  level = constrain(level, 0, 100);
  Blynk.virtualWrite(V5, level);
}

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, "SSID", "PASS");
  timer.setInterval(3000L, sendWaterLevel);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Measure empty tank distance.
2. Fill tank gradually and observe level changes.
3. Verify dashboard updates in real time.`,common_errors:"Incorrect tank depth, sensor condensation, missing echo voltage divider.",improvements:"Add pump automation, overflow alerts, historical usage graphs.",mini_challenge:"Automatically stop pump when tank is full.",advantages:"Prevents overflow, remote monitoring, water conservation.",disadvantages:"Sensor accuracy affected by water turbulence.",components:["ESP32","HC-SR04 Ultrasonic Sensor"],circuit_diagram:"HC-SR04 TRIG to GPIO25, ECHO to GPIO26 via voltage divider.",industrial_use:"Water management systems, residential automation.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹900"},{id:115,title:"IoT-based Noise Level Monitor",level:"Intermediate",description:"An IoT-based noise level monitoring system using ESP32 that measures ambient sound intensity using a microphone sensor and displays real-time noise levels on a cloud dashboard. The system helps identify high-noise zones and supports noise pollution control.",category:"Environment",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","Sound Sensor (KY-038)","Blynk IoT","WiFi"],problem_statement:"Noise pollution in urban environments affects health, productivity, and quality of life. Conventional noise measurement is manual and infrequent, making it difficult to track continuous exposure. An IoT-based noise monitoring system enables continuous, location-specific noise analysis.",real_world_case:"Noise monitoring systems are used near schools, hospitals, construction sites, traffic junctions, and industrial areas. Authorities and facility managers use this data to enforce noise regulations and plan mitigation strategies.",block_diagram:"graph TD; Sound_Sensor-->|Analog|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"INMP441 I2S Digital Microphone",Platform:"Thingspeak",Communication:"LoRaWAN for wide-area deployment"},concept:"The sound sensor converts ambient noise into an analog voltage proportional to sound intensity. The ESP32 reads this signal using its ADC and uploads the data to a cloud dashboard for real-time monitoring and trend analysis.",working_principle:`1. Sound waves strike the microphone diaphragm.
2. The microphone converts sound into an electrical signal.
3. The sensor module amplifies the signal.
4. ESP32 reads the analog voltage via ADC.
5. Noise level data is sent to the cloud dashboard.`,pin_config:{esp32:[{module:"Sound Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers the sound sensor safely at ESP32 logic level."},{module:"Sound Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Sound Sensor",pinName:"Analog Output",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"ADC input-only pin ideal for microphone signal reading."}]},code:`/*
 Project 115: IoT-based Noise Level Monitor
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Noise Monitor"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define SOUND_PIN 34

BlynkTimer timer;

void sendNoiseLevel() {
  int noiseValue = analogRead(SOUND_PIN);
  Blynk.virtualWrite(V5, noiseValue);
}

void setup() {
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, sendNoiseLevel);
}

void loop() {
  Blynk.run();
  timer.run();
}`,testing_output:`1. Power the system and ensure stable WiFi connection.
2. Clap or speak near the sensor and observe value changes.
3. Monitor noise variations over time.
4. Compare readings between quiet and noisy environments.`,common_errors:"Improper sensor gain adjustment, using digital output instead of analog, electrical noise interference.",improvements:"Convert raw ADC values to decibel approximation, add threshold alerts, log historical noise data.",mini_challenge:"Trigger a mobile alert when noise exceeds a safe limit.",advantages:"Continuous monitoring, low cost, easy deployment.",disadvantages:"Provides relative noise level, not calibrated dB.",components:["ESP32","Sound Sensor Module"],circuit_diagram:"Sound sensor VCC to 3.3V, GND to GND, analog output to GPIO34.",industrial_use:"Noise pollution monitoring, workplace safety.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹500"},{id:116,title:"Smart Lighting using Google Firebase",level:"Intermediate",description:"A cloud-controlled smart lighting system using ESP32 and Google Firebase that allows users to remotely switch lights ON or OFF in real time using a mobile or web interface.",category:"Smart Home",sub_category:"IoT (101-200)",estimatedTime:"4 Hours",tech:["ESP32","Relay Module","Google Firebase","WiFi"],problem_statement:"Traditional lighting systems require manual operation and provide no remote visibility. Lights are often left ON unintentionally, leading to energy wastage. A cloud-based smart lighting system enables remote control and better energy management.",real_world_case:"Firebase-based lighting systems are used in homes, hostels, offices, and labs where centralized and real-time control of lighting is required without complex server infrastructure.",block_diagram:"graph TD; Firebase-->|Cloud_Data|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|AC|Light;",alternatives:{Platform:"Blynk or MQTT",Control:"Local web server on ESP32",Communication:"Bluetooth for short range"},concept:"The ESP32 continuously listens for state changes in the Firebase Realtime Database. When the database value changes, the ESP32 updates the relay state accordingly, allowing cloud-based control of lighting.",working_principle:`1. User updates light state in Firebase.
2. Firebase syncs data in real time.
3. ESP32 reads updated value over WiFi.
4. Relay is switched ON or OFF.
5. Light state is reflected instantly.`,pin_config:{esp32:[{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to relay coil."},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls relay to switch light."}]},code:`/*
 Project 116: Smart Lighting using Google Firebase
 Board   : ESP32
 Author  : NISHANTH
*/

#include <WiFi.h>
#include <FirebaseESP32.h>

#define RELAY_PIN 26

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  // Firebase and WiFi initialization goes here
}

void loop() {
  // Read Firebase value and control relay
}`,testing_output:`1. Change light state in Firebase console.
2. Verify relay switching instantly.
3. Observe light response.`,common_errors:"Incorrect Firebase credentials, unstable WiFi, wrong database path.",improvements:"Add scheduling, dimming control, energy usage tracking.",mini_challenge:"Control multiple rooms using Firebase nodes.",advantages:"Real-time cloud control, scalable.",disadvantages:"Depends on internet connectivity.",components:["ESP32","Relay Module"],circuit_diagram:"Relay VCC to 5V, GND to GND, IN to GPIO26.",industrial_use:"Smart buildings, centralized lighting control.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹700"},{id:117,title:"IoT-enabled Smart Mirror",level:"Intermediate",description:"An IoT-enabled smart mirror using ESP32 that displays real-time environmental information such as temperature, humidity, and date/time on an OLED display, making daily information easily accessible during routine activities.",category:"Smart Home",sub_category:"IoT (101-200)",estimatedTime:"4–5 Hours",tech:["ESP32","OLED Display (SSD1306)","DHT22","WiFi"],problem_statement:"People often rely on phones or other devices to check basic information such as temperature and weather while getting ready. This interrupts routine activities. A smart mirror provides essential information at a glance without requiring additional interaction.",real_world_case:"Smart mirrors are used in smart homes, hotels, gyms, and salons to display environmental data, schedules, and notifications in a non-intrusive manner.",block_diagram:"graph TD; DHT22-->|Temp_Humidity|ESP32; ESP32-->|I2C|OLED_Display; ESP32-->|WiFi|Cloud_Service;",alternatives:{Display:"LCD with I2C backpack",Controller:"Raspberry Pi (for advanced UI)",Sensor:"BME280"},concept:"The ESP32 collects environmental data from sensors and displays it on an OLED screen mounted behind a two-way mirror. The compact OLED display and low power consumption make it ideal for embedded smart mirror applications.",working_principle:`1. ESP32 powers up and initializes sensors.
2. DHT22 measures temperature and humidity.
3. ESP32 processes sensor data.
4. OLED display shows updated information.
5. Data can optionally be sent to cloud services.`,pin_config:{esp32:[{module:"DHT22 Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers DHT22 sensor safely."},{module:"DHT22 Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"DHT22 Sensor",pinName:"DATA",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Digital data pin with pull-up resistor."},{module:"OLED Display",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to OLED display."},{module:"OLED Display",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"OLED Display",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data line."},{module:"OLED Display",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock line."}]},code:`/*
 Project 117: IoT-enabled Smart Mirror
 Board   : ESP32
 Author  : NISHANTH
*/

#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
#define DHT_PIN 27
#define DHT_TYPE DHT22

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  dht.begin();
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 10);
  display.print("Temp: "); display.print(temp); display.println(" C");
  display.print("Humidity: "); display.print(hum); display.println(" %");
  display.display();
  delay(3000);
}`,testing_output:`1. Power system and verify OLED initialization.
2. Observe temperature and humidity updates.
3. Compare readings with room thermometer.`,common_errors:"Incorrect I2C address, missing pull-up resistor for DHT22.",improvements:"Add weather API, calendar integration, touch input.",mini_challenge:"Display real-time clock (RTC) on the mirror.",advantages:"Hands-free information access, compact design.",disadvantages:"Limited display size.",components:["ESP32","OLED Display","DHT22 Sensor"],circuit_diagram:"DHT22 DATA to GPIO27. OLED connected via I2C (GPIO21/22).",industrial_use:"Smart homes, hospitality, wellness centers.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,200"},{id:118,title:"ESP32 Smart Plant Watering System",level:"Intermediate",description:"An automatic plant watering system using ESP32 that monitors soil moisture levels and controls a water pump through a relay, ensuring plants receive adequate water without manual intervention.",category:"Agriculture",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","Soil Moisture Sensor","Relay Module"],problem_statement:"Houseplants and garden plants often suffer due to irregular watering schedules. Manual watering is inconvenient and inconsistent. An automated system ensures optimal watering based on actual soil conditions.",real_world_case:"Smart plant watering systems are used in home gardens, balconies, nurseries, and indoor plants to maintain healthy plant growth with minimal human effort.",block_diagram:"graph TD; Soil_Moisture_Sensor-->|Analog|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|Pump|Water_Supply;",alternatives:{Sensor:"Capacitive soil moisture sensor",Control:"Drip irrigation valve",Power:"Solar-powered controller"},concept:"The ESP32 continuously monitors soil moisture levels. When the soil becomes dry, it activates a relay to power a water pump. Once adequate moisture is restored, the pump is turned off automatically.",working_principle:`1. Soil moisture sensor outputs voltage based on water content.
2. ESP32 reads analog value using ADC.
3. Value is compared against a threshold.
4. Relay switches pump ON/OFF accordingly.`,pin_config:{esp32:[{module:"Soil Moisture Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers soil sensor safely."},{module:"Soil Moisture Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"Soil Moisture Sensor",pinName:"Analog Output",mcuPin:"GPIO32",direction:"Input",voltage:"Analog",description:"ADC-capable pin for moisture reading."},{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to relay coil."},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground with ESP32."},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls relay to drive pump."}]},code:`/*
 Project 118: ESP32 Smart Plant Watering System
 Board   : ESP32
 Author  : NISHANTH
*/

#define SOIL_PIN 32
#define RELAY_PIN 26

int threshold = 2000;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
}

void loop() {
  int soilValue = analogRead(SOIL_PIN);
  if (soilValue > threshold) {
    digitalWrite(RELAY_PIN, HIGH);
  } else {
    digitalWrite(RELAY_PIN, LOW);
  }
  delay(3000);
}`,testing_output:`1. Insert sensor into dry soil.
2. Observe pump activation.
3. Water soil and observe pump stop.`,common_errors:"Wrong threshold calibration, sensor corrosion.",improvements:"Add WiFi monitoring, mobile alerts, multi-plant support.",mini_challenge:"Add timed watering as a backup mode.",advantages:"Automatic watering, plant health improvement.",disadvantages:"Sensor lifespan limited.",components:["ESP32","Soil Moisture Sensor","Relay Module","Water Pump"],circuit_diagram:"Soil sensor analog to GPIO32. Relay IN to GPIO26 controlling pump.",industrial_use:"Home automation, nursery management.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹800"},{id:119,title:"IoT-based Water Flow Meter",level:"Intermediate",description:"An IoT-based water flow monitoring system using ESP32 that measures real-time water flow rate and total water consumption using a hall-effect flow sensor and displays the data on a cloud dashboard.",category:"Utilities",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","Water Flow Sensor (YF-S201)","Blynk IoT","WiFi"],problem_statement:"Water consumption is often unmonitored in homes and buildings, leading to wastage and undetected leakage. Traditional meters do not provide real-time usage data to users. An IoT-based water flow meter enables live monitoring, helping users conserve water and detect abnormal usage early.",real_world_case:"Smart water flow meters are used in homes, apartments, hostels, industries, and irrigation systems to monitor daily consumption, detect leaks, and implement usage-based billing.",block_diagram:"graph TD; Flow_Sensor-->|Pulse|ESP32; ESP32-->|WiFi|Blynk_Cloud; Blynk_Cloud-->|Internet|Mobile_App;",alternatives:{Sensor:"FS300A flow sensor",Communication:"LoRaWAN for long-distance water lines",Platform:"Thingspeak"},concept:"The YF-S201 flow sensor generates electrical pulses proportional to the flow rate of water passing through it. The ESP32 counts these pulses using an interrupt pin and calculates both instantaneous flow rate and total water volume, which are then displayed on a cloud dashboard.",working_principle:`1. Water flows through the sensor turbine.
2. Hall-effect sensor generates pulses.
3. ESP32 counts pulses using interrupt.
4. Flow rate and total volume are calculated.
5. Data is uploaded to cloud dashboard.`,pin_config:{esp32:[{module:"Water Flow Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to flow sensor for stable pulse generation."},{module:"Water Flow Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"Water Flow Sensor",pinName:"Signal",mcuPin:"GPIO25",direction:"Input",voltage:"3.3V",description:"Interrupt-capable pin used to count flow pulses."}]},code:`/*
 Project 119: IoT-based Water Flow Meter
 Board   : ESP32
 Platform: Blynk IoT
 Author  : NISHANTH
*/

#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "Water Flow Meter"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_SSID";
char pass[] = "YOUR_WIFI_PASSWORD";

#define FLOW_PIN 25

volatile unsigned long pulseCount = 0;
float flowRate;
float totalLitres = 0;
unsigned long lastTime = 0;

void IRAM_ATTR pulseCounter() {
  pulseCount++;
}

void calculateFlow() {
  unsigned long currentTime = millis();
  unsigned long timeDiff = currentTime - lastTime;

  if (timeDiff >= 1000) {
    flowRate = (pulseCount / 7.5); // L/min (sensor constant)
    totalLitres += (flowRate / 60.0);

    Blynk.virtualWrite(V5, flowRate);
    Blynk.virtualWrite(V6, totalLitres);

    pulseCount = 0;
    lastTime = currentTime;
  }
}

void setup() {
  pinMode(FLOW_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(FLOW_PIN), pulseCounter, FALLING);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
}

void loop() {
  Blynk.run();
  calculateFlow();
}`,testing_output:`1. Pass water through sensor.
2. Observe real-time flow rate updates.
3. Compare total volume with manual measurement.
4. Test for pulse stability at different flow rates.`,common_errors:"Incorrect pulse constant, air bubbles in pipe, loose sensor wiring.",improvements:"Add leakage detection, daily usage report, automatic valve shutoff.",mini_challenge:"Trigger alert if continuous flow exceeds preset duration.",advantages:"Accurate flow monitoring, leakage detection, water conservation.",disadvantages:"Sensor affected by debris and scaling.",components:["ESP32","YF-S201 Water Flow Sensor"],circuit_diagram:"Flow sensor VCC to 5V, GND to GND, signal to GPIO25.",industrial_use:"Water management, smart billing, irrigation systems.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹700"},{id:120,title:"Smart Pollution Mask",level:"Intermediate",description:"A wearable smart pollution mask using ESP32 that monitors air quality in real time and alerts the user when pollution levels exceed safe limits, enhancing personal health and safety.",category:"Healthcare",sub_category:"IoT (101-200)",estimatedTime:"3–4 Hours",tech:["ESP32","MQ-135 Gas Sensor","Buzzer","WiFi"],problem_statement:"People exposed to polluted environments such as traffic police, cyclists, and industrial workers often lack real-time awareness of air quality. Continuous exposure to high pollution levels can cause serious health issues. A wearable smart mask provides immediate alerts and awareness.",real_world_case:"Smart pollution masks are used by traffic police, cyclists, industrial workers, and individuals with respiratory conditions to monitor pollution exposure and take timely precautions.",block_diagram:"graph TD; MQ135-->|Gas_Level|ESP32; ESP32-->|Alert|Buzzer; ESP32-->|WiFi|Cloud_Dashboard;",alternatives:{Sensor:"MQ-7 (CO-specific)",Alert:"Vibration motor instead of buzzer",Communication:"Bluetooth for low power wearable"},concept:"The MQ-135 gas sensor detects harmful gases and outputs an analog signal. The ESP32 evaluates pollution levels and triggers a buzzer alert when values exceed safe thresholds, providing immediate user feedback.",working_principle:`1. MQ-135 sensor detects gas concentration.
2. Analog voltage is generated.
3. ESP32 reads ADC value.
4. Value is compared with threshold.
5. Buzzer alerts user if pollution is high.`,pin_config:{esp32:[{module:"MQ-135 Gas Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Provides heater power for gas sensing."},{module:"MQ-135 Gas Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"MQ-135 Gas Sensor",pinName:"Analog Output",mcuPin:"GPIO33",direction:"Input",voltage:"Analog (≤3.3V)",description:"Analog signal scaled for ESP32 ADC."},{module:"Buzzer",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to buzzer."},{module:"Buzzer",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"Buzzer",pinName:"Signal",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Drives buzzer alert."}]},code:`/*
 Project 120: Smart Pollution Mask
 Board   : ESP32
 Author  : NISHANTH
*/

#define GAS_PIN 33
#define BUZZER_PIN 27

int pollutionThreshold = 2000;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
}

void loop() {
  int gasValue = analogRead(GAS_PIN);
  if (gasValue > pollutionThreshold) {
    digitalWrite(BUZZER_PIN, HIGH);
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }
  delay(2000);
}`,testing_output:`1. Allow sensor warm-up.
2. Expose sensor to smoke.
3. Verify buzzer alert activation.
4. Adjust threshold for sensitivity.`,common_errors:"Skipping warm-up time, incorrect threshold, bulky power supply for wearable.",improvements:"Add Bluetooth app, OLED display, rechargeable battery system.",mini_challenge:"Log pollution exposure time per day.",advantages:"Personal pollution awareness, real-time alert.",disadvantages:"Sensor size and power consumption.",components:["ESP32","MQ-135 Gas Sensor","Buzzer"],circuit_diagram:"MQ-135 analog output to GPIO33. Buzzer signal to GPIO27.",industrial_use:"Personal safety devices, healthcare monitoring.",author_name:"NISHANTH",status:"Reference Standard",bom_cost:"₹1,100"},{id:121,title:"IoT Smart Watch for Patients",level:"Intermediate",description:"A wearable IoT smart watch using ESP32 that continuously monitors patient body temperature and physical activity to detect abnormal conditions such as fever or prolonged inactivity, enabling remote healthcare supervision.",category:"Healthcare",sub_category:"IoT (101-200)",estimatedTime:"6 Hours",tech:["ESP32","DS18B20","MPU6050","WiFi"],problem_statement:"Elderly and chronically ill patients require continuous monitoring. Manual supervision is not always possible, leading to delayed medical response. A wearable IoT smart watch enables continuous monitoring and early detection of abnormal conditions.",real_world_case:"Used in elderly care homes, post-surgery recovery, home healthcare monitoring, and remote patient supervision systems.",block_diagram:"graph TD; DS18B20-->|Temperature|ESP32; MPU6050-->|Motion|ESP32; ESP32-->|WiFi|Cloud_Dashboard;",concept:"This system combines physiological monitoring (body temperature) and activity tracking (motion sensing) to assess patient condition continuously. Time-based inactivity detection adds system intelligence beyond raw sensor data.",working_principle:`1. ESP32 reads body temperature periodically.
2. MPU6050 monitors patient movement.
3. ESP32 detects inactivity based on motion absence.
4. Data is prepared for cloud upload.
5. Alerts are generated for abnormal conditions.`,pin_config:{esp32:[{module:"DS18B20",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to temperature sensor."},{module:"DS18B20",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground reference."},{module:"DS18B20",pinName:"DATA",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"1-Wire temperature data line with pull-up resistor."},{module:"MPU6050",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to accelerometer."},{module:"MPU6050",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."}]},code:`/* Project 121: IoT Smart Watch for Patients */
#include <Wire.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

#define TEMP_PIN 27

OneWire oneWire(TEMP_PIN);
DallasTemperature tempSensor(&oneWire);
Adafruit_MPU6050 mpu;

unsigned long lastMotionTime = 0;
const unsigned long inactivityLimit = 300000; // 5 minutes

void setup() {
  Serial.begin(115200);
  tempSensor.begin();

  if (!mpu.begin()) {
    Serial.println("MPU6050 not detected");
    while (1);
  }

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  lastMotionTime = millis();
}

void loop() {
  tempSensor.requestTemperatures();
  float bodyTemp = tempSensor.getTempCByIndex(0);

  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  float motion = abs(a.acceleration.x) + abs(a.acceleration.y) + abs(a.acceleration.z);

  if (motion > 1.5) {
    lastMotionTime = millis();
  }

  if (millis() - lastMotionTime > inactivityLimit) {
    Serial.println("ALERT: Patient inactive for long time");
  }

  Serial.print("Body Temp: ");
  Serial.print(bodyTemp);
  Serial.println(" C");

  delay(2000);
}`,testing_output:`1. Wear device and move to verify motion detection.
2. Remain inactive to test inactivity alert.
3. Compare temperature readings with thermometer.`,common_errors:"Improper sensor placement, high power consumption, missing pull-up resistor.",improvements:"Add heart rate sensor, BLE communication, emergency SOS button.",mini_challenge:"Trigger alert if body temperature exceeds 38°C.",advantages:"Continuous monitoring, early alert system.",disadvantages:"Battery optimization required.",components:["ESP32","DS18B20","MPU6050"],circuit_diagram:"DS18B20 DATA to GPIO27. MPU6050 connected via I2C.",industrial_use:"Remote patient monitoring systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,200"},{id:122,title:"Smart Fridge Temperature Monitor",level:"Intermediate",description:"An IoT-based fridge temperature monitoring system using ESP32 that continuously checks internal temperature and triggers alerts if unsafe conditions occur, preventing food spoilage and medical storage failure.",category:"Appliance Monitoring",sub_category:"IoT (101-200)",estimatedTime:"4 Hours",tech:["ESP32","DS18B20","Buzzer"],problem_statement:"Temperature fluctuations inside refrigerators often go unnoticed, leading to food spoilage or vaccine damage. Manual checks are unreliable. A smart system provides continuous monitoring and early alerts.",real_world_case:"Used in homes, restaurants, blood banks, vaccine storage units, and laboratories.",block_diagram:"graph TD; DS18B20-->|Temperature|ESP32; ESP32-->|Alert|Buzzer;",concept:"The ESP32 monitors fridge temperature and compares it against a safe range. If the temperature goes out of range, an alert is triggered immediately.",working_principle:`1. DS18B20 measures internal temperature.
2. ESP32 compares value with safe limits.
3. Buzzer alerts if temperature is unsafe.`,pin_config:{esp32:[{module:"DS18B20",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to temperature sensor."},{module:"DS18B20",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"DS18B20",pinName:"DATA",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"1-Wire temperature data line."},{module:"Buzzer",pinName:"Signal",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Drives audible alert."}]},code:`/* Project 122: Smart Fridge Temperature Monitor */
#include <OneWire.h>
#include <DallasTemperature.h>

#define TEMP_PIN 27
#define BUZZER_PIN 26

float minTemp = 2.0;
float maxTemp = 8.0;

OneWire oneWire(TEMP_PIN);
DallasTemperature tempSensor(&oneWire);

void setup() {
  Serial.begin(115200);
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
  tempSensor.begin();
}

void loop() {
  tempSensor.requestTemperatures();
  float fridgeTemp = tempSensor.getTempCByIndex(0);

  Serial.print("Fridge Temp: ");
  Serial.print(fridgeTemp);
  Serial.println(" C");

  if (fridgeTemp < minTemp || fridgeTemp > maxTemp) {
    digitalWrite(BUZZER_PIN, HIGH);
    Serial.println("ALERT: Unsafe temperature");
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }

  delay(3000);
}`,testing_output:`1. Place sensor inside fridge.
2. Simulate power failure.
3. Verify alert activation.`,common_errors:"Improper sensor placement, condensation issues.",improvements:"Add WiFi alerts, door-open detection.",mini_challenge:"Log duration of unsafe temperature exposure.",advantages:"Prevents spoilage, early warning.",disadvantages:"Requires proper insulation for sensor.",components:["ESP32","DS18B20","Buzzer"],circuit_diagram:"DS18B20 DATA to GPIO27. Buzzer signal to GPIO26.",industrial_use:"Cold storage monitoring.",author_name:"NISHANTH",status:"Published",bom_cost:"₹800"},{id:123,title:"IoT Smart Classroom",level:"Intermediate",description:"An IoT-based smart classroom system using ESP32 that automates lights and fans based on classroom occupancy and environmental conditions, improving energy efficiency and student comfort.",category:"Education",sub_category:"IoT (101-200)",estimatedTime:"6 Hours",tech:["ESP32","PIR Sensor","DHT22","Relay Module","WiFi"],problem_statement:"In classrooms, lights and fans often remain ON even when rooms are empty, leading to energy wastage. Additionally, uncomfortable temperature and humidity affect learning quality. Manual control is unreliable and inefficient.",real_world_case:"Smart classroom systems are deployed in schools, colleges, training institutes, and labs to automate energy usage and maintain optimal learning environments.",block_diagram:"graph TD; PIR-->|Occupancy|ESP32; DHT22-->|Temp_Humidity|ESP32; ESP32-->|GPIO|Relay_Module; Relay_Module-->|AC|Lights_Fans; ESP32-->|WiFi|Cloud_Dashboard;",concept:"The system combines occupancy detection and environmental sensing. Devices operate only when students are present, and fan operation depends on temperature, making the classroom context-aware rather than time-based.",working_principle:`1. PIR sensor detects human presence.
2. DHT22 measures temperature and humidity.
3. ESP32 decides whether devices should operate.
4. Relays control lights and fans.
5. System prevents wastage when classroom is empty.`,pin_config:{esp32:[{module:"PIR Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Supplies power to PIR sensor."},{module:"PIR Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO25",direction:"Input",voltage:"3.3V",description:"Digital output indicating motion."},{module:"DHT22",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Supplies power to temperature and humidity sensor."},{module:"DHT22",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground."},{module:"DHT22",pinName:"DATA",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Digital data pin for environmental sensing."},{module:"Relay Module",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls lights."},{module:"Relay Module",pinName:"IN2",mcuPin:"GPIO33",direction:"Output",voltage:"3.3V",description:"Controls fans."}]},code:`/* Project 123: IoT Smart Classroom */
#include <DHT.h>

#define PIR_PIN 25
#define DHT_PIN 27
#define RELAY_LIGHT 26
#define RELAY_FAN 33
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
unsigned long lastMotionTime = 0;
const unsigned long emptyDelay = 300000; // 5 minutes

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(RELAY_LIGHT, OUTPUT);
  pinMode(RELAY_FAN, OUTPUT);
  digitalWrite(RELAY_LIGHT, LOW);
  digitalWrite(RELAY_FAN, LOW);
  dht.begin();
}

void loop() {
  int motion = digitalRead(PIR_PIN);
  float temp = dht.readTemperature();

  if (motion == HIGH) {
    lastMotionTime = millis();
    digitalWrite(RELAY_LIGHT, HIGH);

    if (temp > 28.0) {
      digitalWrite(RELAY_FAN, HIGH);
    } else {
      digitalWrite(RELAY_FAN, LOW);
    }
  }

  if (millis() - lastMotionTime > emptyDelay) {
    digitalWrite(RELAY_LIGHT, LOW);
    digitalWrite(RELAY_FAN, LOW);
  }

  delay(2000);
}`,testing_output:`1. Enter classroom and observe lights ON.
2. Raise temperature to test fan control.
3. Leave room and verify auto shut-off.`,common_errors:"Incorrect PIR delay, wrong relay logic, sensor placement issues.",improvements:"Add timetable logic, CO2 sensing, manual override mode.",mini_challenge:"Add teacher-controlled override button.",advantages:"Energy saving, automated comfort control.",disadvantages:"Initial calibration needed.",components:["ESP32","PIR Sensor","DHT22","2-Channel Relay"],circuit_diagram:"PIR OUT to GPIO25, DHT22 DATA to GPIO27, relays to GPIO26 & GPIO33.",industrial_use:"Smart campuses, institutional automation.",author_name:"NISHANTH",status:"Published",bom_cost:"₹1,500"},{id:124,title:"Smart Dust Detection System",level:"Intermediate",description:"An IoT-based dust detection system using ESP32 that measures particulate concentration and helps maintain healthy indoor air quality.",category:"Environment",sub_category:"IoT (101-200)",estimatedTime:"5 Hours",tech:["ESP32","Dust Sensor GP2Y1010AU0F","WiFi"],problem_statement:"Dust pollution inside buildings affects health and productivity. Continuous monitoring is required to maintain air quality.",real_world_case:"Used in classrooms, factories, hospitals, and warehouses.",block_diagram:"graph TD; Dust_Sensor-->|Analog|ESP32; ESP32-->|WiFi|Dashboard;",concept:"An IR-based dust sensor detects particulate matter. ESP32 samples the signal and estimates dust density.",working_principle:`1. IR LED illuminates air.
2. Dust scatters light.
3. Photodiode outputs voltage.
4. ESP32 calculates dust level.`,pin_config:{esp32:[{module:"Dust Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"IR LED supply"},{module:"Dust Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Dust Sensor",pinName:"LED Control",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Controls IR LED timing"},{module:"Dust Sensor",pinName:"Analog Output",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Dust signal"}]},code:`/* Project 124: Smart Dust Detection */
#define LED_PIN 14
#define DUST_PIN 34

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, LOW);
  delayMicroseconds(280);
  int dustValue = analogRead(DUST_PIN);
  delayMicroseconds(40);
  digitalWrite(LED_PIN, HIGH);

  // Dust value can be converted to ug/m3
  delay(2000);
}`,testing_output:"Generate dust → observe value rise.",common_errors:"Wrong LED timing, ambient light interference.",improvements:"Add AQI conversion, exhaust fan control.",mini_challenge:"Trigger fan when dust exceeds limit.",advantages:"Low-cost air quality monitoring.",disadvantages:"Sensitive to airflow.",components:["ESP32","GP2Y1010AU0F"],circuit_diagram:"LED control to GPIO14. Analog output to GPIO34.",industrial_use:"Indoor air quality systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹1,500"},{id:125,title:"Smart Attendance System using QR",level:"Intermediate",description:"An IoT-based smart attendance system using ESP32 that records attendance through QR code scanning, validates entries, and logs attendance data for classrooms or workplaces.",category:"Education",sub_category:"IoT (101-200)",estimatedTime:"6 Hours",tech:["ESP32","QR Code Scanner","OLED Display","WiFi"],problem_statement:"Manual attendance is time-consuming and prone to proxy attendance. A QR-based system automates attendance capture, reduces errors, and provides digital records.",real_world_case:"Used in colleges, offices, workshops, events, and training programs to record attendance quickly and accurately.",block_diagram:"graph TD; QR_Scanner-->|UART|ESP32; ESP32-->|I2C|OLED; ESP32-->|WiFi|Cloud_Database;",concept:"Each user has a unique QR code. When scanned, the ESP32 reads the data, validates it, and marks attendance while preventing duplicate entries during the same session.",working_principle:`1. QR scanner reads encoded ID.
2. ESP32 validates the ID format.
3. Duplicate entries are blocked.
4. Attendance is logged locally/cloud.
5. Confirmation is displayed.`,pin_config:{esp32:[{module:"QR Scanner",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Powers QR scanner"},{module:"QR Scanner",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"QR Scanner",pinName:"TX",mcuPin:"GPIO16",direction:"Input",voltage:"3.3V",description:"UART data from scanner"},{module:"OLED Display",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"OLED power"},{module:"OLED Display",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"OLED Display",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data"},{module:"OLED Display",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock"}]},code:`/* Project 125: Smart Attendance System using QR */
#include <Wire.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
String lastID = "";

void setup() {
  Serial.begin(9600); // QR scanner baud rate
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}

void loop() {
  if (Serial.available()) {
    String qrData = Serial.readStringUntil('\\n');
    qrData.trim();

    display.clearDisplay();
    display.setTextSize(1);
    display.setCursor(0, 10);

    if (qrData == lastID) {
      display.println("Duplicate Entry");
    } else {
      lastID = qrData;
      display.println("Attendance Marked");
      display.println(qrData);
      // Future: upload to cloud
    }

    display.display();
  }
}`,testing_output:"Scan QR → attendance marked. Scan same QR again → duplicate blocked.",common_errors:"Wrong baud rate, repeated scans, invalid QR format.",improvements:"Add time-based session reset, cloud database sync, authentication.",mini_challenge:"Allow attendance only during scheduled class time.",advantages:"Fast, contactless, reduces proxy attendance.",disadvantages:"Requires QR management.",components:["ESP32","QR Scanner","OLED Display"],circuit_diagram:"QR scanner TX to GPIO16. OLED via I2C (GPIO21/22).",industrial_use:"Smart campuses, workforce management.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,300"},{id:126,title:"Smart Ventilation Controller",level:"Intermediate",description:"An IoT-based smart ventilation system using ESP32 that automatically controls an exhaust fan based on temperature, humidity, and air quality conditions.",category:"Building Automation",sub_category:"IoT (101-200)",estimatedTime:"5 Hours",tech:["ESP32","DHT22","MQ-135","Relay Module","WiFi"],problem_statement:"Manual ventilation control is inefficient and often ignored, leading to heat, humidity, and poor air quality. A smart controller ensures optimal ventilation automatically.",real_world_case:"Used in kitchens, server rooms, classrooms, factories, and basements for healthy air circulation.",block_diagram:"graph TD; DHT22-->|Temp|ESP32; MQ135-->|Gas|ESP32; ESP32-->|Relay|Exhaust_Fan;",concept:"The ESP32 evaluates multiple environmental parameters and activates ventilation when any unsafe condition is detected, making the system adaptive and responsive.",working_principle:`1. DHT22 measures temperature and humidity.
2. MQ-135 measures air quality.
3. ESP32 evaluates thresholds.
4. Fan is activated automatically.`,pin_config:{esp32:[{module:"DHT22",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Powers DHT22"},{module:"DHT22",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"DHT22",pinName:"DATA",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"Temp/humidity data"},{module:"MQ-135",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Sensor heater supply"},{module:"MQ-135",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"MQ-135",pinName:"Analog Output",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Air quality signal"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Controls exhaust fan"}]},code:`/* Project 126: Smart Ventilation Controller */
#include <DHT.h>

#define DHT_PIN 27
#define DHT_TYPE DHT22
#define GAS_PIN 34
#define RELAY_PIN 26

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  int gas = analogRead(GAS_PIN);

  if (temp > 30 || hum > 70 || gas > 2000) {
    digitalWrite(RELAY_PIN, HIGH);
  } else {
    digitalWrite(RELAY_PIN, LOW);
  }

  delay(3000);
}`,testing_output:"Increase temperature or gas → fan ON. Normal conditions → fan OFF.",common_errors:"Ignoring MQ warm-up, wrong thresholds.",improvements:"Add fan speed control, predictive ventilation.",mini_challenge:"Add delay-based hysteresis to avoid frequent switching.",advantages:"Automatic air quality control.",disadvantages:"Requires calibration.",components:["ESP32","DHT22","MQ-135","Relay Module"],circuit_diagram:"DHT22 DATA to GPIO27. MQ-135 analog to GPIO34. Relay IN to GPIO26.",industrial_use:"Smart buildings, industrial ventilation.",author_name:"NISHANTH",status:"Published",bom_cost:"₹1,400"},{id:127,title:"IoT Smart Locker",level:"Intermediate",description:"An IoT-based smart locker system using ESP32 that enables secure access control through PIN-based authentication and remote monitoring, suitable for hostels, offices, and smart storage systems.",category:"Security",sub_category:"IoT (101-200)",estimatedTime:"5 Hours",tech:["ESP32","Keypad","Servo Motor","OLED Display","WiFi"],problem_statement:"Traditional lockers rely on physical keys which can be lost or duplicated. Manual management is inefficient and insecure. A smart locker provides controlled, traceable, and scalable access management.",real_world_case:"Used in hostels, gyms, offices, libraries, parcel lockers, and smart storage facilities.",block_diagram:"graph TD; Keypad-->|PIN|ESP32; ESP32-->|Control|Servo_Lock; ESP32-->|Display|OLED; ESP32-->|WiFi|Cloud_Log;",concept:"The ESP32 validates user-entered PINs through a keypad. If authentication succeeds, a servo motor unlocks the locker. Access attempts can be logged locally or sent to the cloud.",working_principle:`1. User enters PIN via keypad.
2. ESP32 validates PIN.
3. Servo unlocks locker on success.
4. OLED displays status.
5. Access event is logged.`,pin_config:{esp32:[{module:"Keypad",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Keypad power"},{module:"Keypad",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Servo Motor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Servo motor supply"},{module:"Servo Motor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Servo Motor",pinName:"Signal",mcuPin:"GPIO26",direction:"Output",voltage:"PWM 3.3V",description:"Lock control signal"},{module:"OLED Display",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data"},{module:"OLED Display",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock"}]},code:`/* Project 127: IoT Smart Locker */
#include <Keypad.h>
#include <Servo.h>

#define SERVO_PIN 26

Servo lockServo;

const byte rows = 4, cols = 4;
char keys[rows][cols] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte rowPins[rows] = {14, 27, 25, 33};
byte colPins[cols] = {32, 35, 34, 39};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, rows, cols);

String inputPIN = "";
String correctPIN = "1234";

void setup() {
  lockServo.attach(SERVO_PIN);
  lockServo.write(0); // Locked
}

void loop() {
  char key = keypad.getKey();
  if (key) {
    if (key == '#') {
      if (inputPIN == correctPIN) {
        lockServo.write(90); // Unlock
        delay(5000);
        lockServo.write(0);  // Lock again
      }
      inputPIN = "";
    } else {
      inputPIN += key;
    }
  }
}`,testing_output:"Enter correct PIN → locker unlocks. Wrong PIN → no action.",common_errors:"Insufficient servo power, keypad pin mismatch.",improvements:"Add RFID, mobile app unlock, access logs.",mini_challenge:"Lock system after 3 wrong attempts.",advantages:"Keyless access, scalable security.",disadvantages:"Depends on power availability.",components:["ESP32","4x4 Keypad","Servo Motor","OLED Display"],circuit_diagram:"Keypad to GPIO matrix. Servo signal to GPIO26.",industrial_use:"Smart storage systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹1,600"},{id:201,title:"Line Following Robot",level:"Intermediate",description:"A line following robot that uses IR sensors to detect a black line on a white surface and automatically adjusts motor direction to follow the path accurately.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"5 Hours",tech:["ESP32","IR Sensor Module","L298N Motor Driver","DC Motors"],problem_statement:"Autonomous navigation is a core challenge in robotics. A line-following robot demonstrates real-time decision making based on sensor feedback.",real_world_case:"Used in warehouse automation, AGVs, industrial transport systems, and robotics education.",block_diagram:"graph TD; IR_Left-->|Signal|ESP32; IR_Right-->|Signal|ESP32; ESP32-->|PWM|Motor_Driver; Motor_Driver-->|Motion|Motors;",concept:"IR sensors detect surface contrast. The ESP32 processes sensor data and controls motor direction and speed to keep the robot aligned with the line.",working_principle:`1. IR sensors detect black/white surface.
2. ESP32 reads sensor states.
3. Motor speed/direction adjusted.
4. Robot follows the line continuously.`,pin_config:{esp32:[{module:"IR Sensor (Left)",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"IR sensor power"},{module:"IR Sensor (Left)",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"IR Sensor (Left)",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Left line detection"},{module:"IR Sensor (Right)",pinName:"OUT",mcuPin:"GPIO35",direction:"Input",voltage:"3.3V",description:"Right line detection"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 201: Line Following Robot */
#define IR_LEFT 34
#define IR_RIGHT 35

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  pinMode(IR_LEFT, INPUT);
  pinMode(IR_RIGHT, INPUT);
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
}

void loop() {
  int left = digitalRead(IR_LEFT);
  int right = digitalRead(IR_RIGHT);

  if (left == 0 && right == 0) {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (left == 1 && right == 0) {
    // Turn right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else if (left == 0 && right == 1) {
    // Turn left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Stop
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot follows black line smoothly on white surface.",common_errors:"Wrong IR threshold, uneven motor speed.",improvements:"Add PID control, speed calibration.",mini_challenge:"Handle sharp turns without stopping.",advantages:"Simple autonomous navigation.",disadvantages:"Fails if line contrast is poor.",components:["ESP32","IR Sensors","L298N","DC Motors"],circuit_diagram:"IR sensors to GPIO34/35. Motor driver to GPIO26,27,14,12.",industrial_use:"AGVs, conveyor robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,200"},{id:202,title:"Obstacle Avoidance Robot",level:"Intermediate",description:"An autonomous robot that detects obstacles using an ultrasonic sensor and intelligently avoids collisions by changing direction.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"5 Hours",tech:["ESP32","Ultrasonic Sensor HC-SR04","L298N Motor Driver"],problem_statement:"Robots operating in dynamic environments must detect and avoid obstacles to move safely without collisions.",real_world_case:"Used in autonomous vehicles, cleaning robots, and delivery bots.",block_diagram:"graph TD; Ultrasonic-->|Distance|ESP32; ESP32-->|Motor_Control|L298N; L298N-->|Motion|Motors;",concept:"The ultrasonic sensor measures distance to obstacles. When an object is detected within a threshold, the robot stops and turns to avoid collision.",working_principle:`1. Ultrasonic sensor emits sound pulse.
2. Echo time converted to distance.
3. ESP32 checks safe distance.
4. Robot turns when obstacle detected.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Ultrasonic sensor power"},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (use divider)",description:"Echo signal (level shifted)"}]},code:`/* Project 202: Obstacle Avoidance Robot */
#define TRIG 18
#define ECHO 19

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long duration;
int distance;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
}

int getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  duration = pulseIn(ECHO, HIGH);
  return duration * 0.034 / 2;
}

void loop() {
  distance = getDistance();

  if (distance > 20) {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Turn
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    delay(500);
  }
}`,testing_output:"Robot stops and turns when obstacle detected.",common_errors:"No voltage divider on ECHO pin, wrong distance threshold.",improvements:"Add servo scanning, smoother turns.",mini_challenge:"Detect obstacle direction and choose best path.",advantages:"Autonomous collision avoidance.",disadvantages:"Limited sensing angle.",components:["ESP32","HC-SR04","L298N","DC Motors"],circuit_diagram:"Ultrasonic TRIG to GPIO18, ECHO to GPIO19 (divider).",industrial_use:"Autonomous mobile robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,400"},{id:203,title:"Maze Solver Robot",level:"Intermediate",description:"A maze solver robot using ESP32 that navigates through a maze using ultrasonic sensors and applies left-hand rule logic to reach the destination autonomously.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","Ultrasonic Sensors","L298N Motor Driver","DC Motors"],problem_statement:"Robots navigating unknown environments must make decisions at junctions. Maze-solving robots demonstrate autonomous decision-making and path-planning logic.",real_world_case:"Used in robotics competitions, warehouse navigation systems, and autonomous exploration robots.",block_diagram:"graph TD; Ultrasonic_Left-->|Distance|ESP32; Ultrasonic_Front-->|Distance|ESP32; Ultrasonic_Right-->|Distance|ESP32; ESP32-->|Motor_Control|L298N;",concept:"The robot uses three ultrasonic sensors to detect walls and applies the left-hand rule to decide movement at junctions.",working_principle:`1. Measure distance on left, front, and right.
2. If left is free, turn left.
3. Else if front is free, go straight.
4. Else turn right.
5. Repeat until exit.`,pin_config:{esp32:[{module:"Ultrasonic (Front)",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Front trigger"},{module:"Ultrasonic (Front)",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (divider)",description:"Front echo"},{module:"Ultrasonic (Left)",pinName:"TRIG",mcuPin:"GPIO23",direction:"Output",voltage:"3.3V",description:"Left trigger"},{module:"Ultrasonic (Left)",pinName:"ECHO",mcuPin:"GPIO22",direction:"Input",voltage:"5V (divider)",description:"Left echo"},{module:"Ultrasonic (Right)",pinName:"TRIG",mcuPin:"GPIO5",direction:"Output",voltage:"3.3V",description:"Right trigger"},{module:"Ultrasonic (Right)",pinName:"ECHO",mcuPin:"GPIO17",direction:"Input",voltage:"5V (divider)",description:"Right echo"}]},code:`/* Project 203: Maze Solver Robot */
#define LF_TRIG 23
#define LF_ECHO 22
#define FR_TRIG 18
#define FR_ECHO 19
#define RT_TRIG 5
#define RT_ECHO 17

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance(int trig, int echo) {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  long d = pulseIn(echo, HIGH);
  return d * 0.034 / 2;
}

void setup() {
  pinMode(LF_TRIG, OUTPUT); pinMode(LF_ECHO, INPUT);
  pinMode(FR_TRIG, OUTPUT); pinMode(FR_ECHO, INPUT);
  pinMode(RT_TRIG, OUTPUT); pinMode(RT_ECHO, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int left = getDistance(LF_TRIG, LF_ECHO);
  int front = getDistance(FR_TRIG, FR_ECHO);
  int right = getDistance(RT_TRIG, RT_ECHO);

  if (left > 20) {
    // Turn left
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (front > 20) {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Turn right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
  }
  delay(300);
}`,testing_output:"Robot navigates maze without collision.",common_errors:"Wrong distance threshold, sensor cross-talk.",improvements:"Add mapping, shortest-path memory.",mini_challenge:"Implement right-hand rule and compare efficiency.",advantages:"Autonomous navigation logic.",disadvantages:"Not optimal path always.",components:["ESP32","3x Ultrasonic Sensors","L298N","DC Motors"],circuit_diagram:"Three ultrasonic sensors connected to ESP32 GPIOs. Motors via L298N.",industrial_use:"Autonomous exploration robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,000"},{id:204,title:"Voice Controlled Robot",level:"Intermediate",description:"A robot controlled using voice commands via a Bluetooth-connected smartphone, enabling hands-free robot navigation.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"5 Hours",tech:["ESP32","Bluetooth","L298N Motor Driver","DC Motors"],problem_statement:"Hands-free control is essential for accessibility and modern robotics applications. Voice-controlled robots demonstrate human–machine interaction.",real_world_case:"Used in assistive robots, smart wheelchairs, and voice-operated devices.",block_diagram:"graph TD; Mobile_App-->|Voice_Command|ESP32_BT; ESP32-->|Motor_Control|L298N;",concept:"The ESP32 receives voice commands converted to text via a mobile app and controls robot motion accordingly.",working_principle:`1. User speaks command.
2. App converts speech to text.
3. Command sent via Bluetooth.
4. ESP32 decodes command.
5. Robot moves accordingly.`,pin_config:{esp32:[{module:"Bluetooth",pinName:"Built-in",mcuPin:"ESP32",direction:"Wireless",voltage:"3.3V",description:"Bluetooth Classic"},{module:"Motor Driver",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 204: Voice Controlled Robot */
#include "BluetoothSerial.h"
BluetoothSerial SerialBT;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  SerialBT.begin("VoiceRobot");
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
}

void loop() {
  if (SerialBT.available()) {
    char cmd = SerialBT.read();

    if (cmd == 'F') {
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    } else if (cmd == 'B') {
      digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
      digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    } else if (cmd == 'L') {
      digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    } else if (cmd == 'R') {
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    } else if (cmd == 'S') {
      digitalWrite(L1, LOW); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, LOW);
    }
  }
}`,testing_output:"Speak command → robot moves accordingly.",common_errors:"Wrong app mapping, Bluetooth pairing issues.",improvements:"Add speech confirmation, obstacle safety.",mini_challenge:"Add voice password for activation.",advantages:"Hands-free control.",disadvantages:"Depends on phone accuracy.",components:["ESP32","L298N","DC Motors"],circuit_diagram:"Motors controlled via L298N connected to ESP32 GPIOs.",industrial_use:"Assistive robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,300"},{id:205,title:"Bluetooth Controlled Car",level:"Intermediate",description:"A Bluetooth-controlled robotic car using ESP32 that receives commands from a mobile application and drives DC motors accordingly, enabling wireless manual navigation.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"4–5 Hours",tech:["ESP32","Bluetooth","L298N Motor Driver","DC Motors"],problem_statement:"Manual remote control of robots is essential for testing, teleoperation, and user interaction. A Bluetooth-controlled car provides a simple yet powerful platform for wireless robot control.",real_world_case:"Used in hobby robotics, educational kits, inspection robots, and prototype testing platforms.",block_diagram:"graph TD; Mobile_App-->|Bluetooth|ESP32; ESP32-->|Motor_Control|L298N; L298N-->|Motion|DC_Motors;",concept:"The ESP32 receives control characters over Bluetooth and maps them to motor actions such as forward, backward, left, right, and stop.",working_principle:`1. User presses direction button in mobile app.
2. Command sent via Bluetooth.
3. ESP32 decodes command.
4. Motor driver drives motors accordingly.`,pin_config:{esp32:[{module:"Bluetooth",pinName:"Built-in",mcuPin:"ESP32",direction:"Wireless",voltage:"3.3V",description:"Bluetooth Classic"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 205: Bluetooth Controlled Car */
#include "BluetoothSerial.h"
BluetoothSerial SerialBT;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void stopCar() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  SerialBT.begin("BT_Car");
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
  stopCar();
}

void loop() {
  if (SerialBT.available()) {
    char cmd = SerialBT.read();

    switch (cmd) {
      case 'F': // Forward
        digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
        digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
        break;
      case 'B': // Backward
        digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
        digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
        break;
      case 'L': // Left
        digitalWrite(L1, LOW); digitalWrite(L2, LOW);
        digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
        break;
      case 'R': // Right
        digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
        digitalWrite(R1, LOW); digitalWrite(R2, LOW);
        break;
      case 'S': // Stop
      default:
        stopCar();
        break;
    }
  }
}`,testing_output:"Press direction buttons → car moves accordingly.",common_errors:"Bluetooth pairing issues, incorrect command mapping.",improvements:"Add speed control using PWM, obstacle safety layer.",mini_challenge:"Add cruise mode with constant speed.",advantages:"Simple wireless control.",disadvantages:"Limited range of Bluetooth.",components:["ESP32","L298N Motor Driver","DC Motors"],circuit_diagram:"L298N IN pins connected to GPIO26,27,14,12.",industrial_use:"Tele-operated robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,000"},{id:206,title:"Gesture Controlled Bot",level:"Intermediate",description:"A gesture-controlled robot using ESP32 that interprets hand movements from an accelerometer and controls robot motion wirelessly.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","MPU6050","RF/Bluetooth","L298N Motor Driver"],problem_statement:"Traditional remote controls are limited in intuitiveness. Gesture-based control enables natural human–robot interaction using body movement.",real_world_case:"Used in assistive robotics, intuitive controllers, and advanced HMI systems.",block_diagram:"graph TD; MPU6050-->|Gesture_Data|ESP32_Tx; ESP32_Rx-->|Motor_Control|L298N;",concept:"An accelerometer captures hand tilt. The ESP32 maps tilt direction to robot movement commands.",working_principle:`1. MPU6050 senses hand orientation.
2. ESP32 interprets tilt direction.
3. Commands sent wirelessly.
4. Robot moves accordingly.`,pin_config:{esp32:[{module:"MPU6050",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Accelerometer power"},{module:"MPU6050",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock"}]},code:`/* Project 206: Gesture Controlled Bot (Single ESP32 demo) */
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

Adafruit_MPU6050 mpu;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  Serial.begin(115200);
  if (!mpu.begin()) {
    Serial.println("MPU6050 not detected");
    while (1);
  }

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  if (a.acceleration.x > 3) {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (a.acceleration.x < -3) {
    // Backward
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
  } else if (a.acceleration.y > 3) {
    // Right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else if (a.acceleration.y < -3) {
    // Left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Stop
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }

  delay(200);
}`,testing_output:"Tilt controller → robot moves accordingly.",common_errors:"Improper sensor calibration, noisy readings.",improvements:"Separate transmitter & receiver, smoothing filter.",mini_challenge:"Add gesture lock/unlock gesture.",advantages:"Intuitive control.",disadvantages:"Sensitive to hand tremors.",components:["ESP32","MPU6050","L298N","DC Motors"],circuit_diagram:"MPU6050 via I2C. Motors via L298N.",industrial_use:"HMI-based robotic systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,800"},{id:207,title:"Fire Fighting Robot",level:"Intermediate",description:"An autonomous fire-fighting robot using ESP32 that detects fire using flame sensors and activates a water pump to extinguish it while navigating safely.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6–7 Hours",tech:["ESP32","Flame Sensor","L298N Motor Driver","DC Motors","Relay Module","Water Pump"],problem_statement:"Fire accidents in small enclosed areas can escalate quickly before human intervention is possible. A mobile fire-fighting robot can detect and suppress fire at an early stage.",real_world_case:"Used in laboratories, warehouses, server rooms (prototype), and fire-safety robotics competitions.",block_diagram:"graph TD; Flame_Sensor-->|Fire_Detect|ESP32; ESP32-->|Motor_Control|L298N; ESP32-->|Relay|Water_Pump;",concept:"The robot continuously scans for fire using flame sensors. When fire is detected, it stops movement and activates a water pump through a relay to extinguish the flame.",working_principle:`1. Flame sensor detects IR radiation from fire.
2. ESP32 evaluates flame intensity.
3. Robot moves towards fire source.
4. Pump is activated to spray water.
5. Robot stops after fire is extinguished.`,pin_config:{esp32:[{module:"Flame Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Flame sensor power"},{module:"Flame Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Flame Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Flame intensity signal"},{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Relay coil supply"},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Controls water pump"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 207: Fire Fighting Robot */
#define FLAME_PIN 34
#define RELAY_PIN 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int fireThreshold = 1500;

void setup() {
  pinMode(FLAME_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
}

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void loop() {
  int flameValue = analogRead(FLAME_PIN);

  if (flameValue < fireThreshold) {
    // Fire detected
    stopRobot();
    digitalWrite(RELAY_PIN, HIGH); // Pump ON
  } else {
    // Move forward searching for fire
    digitalWrite(RELAY_PIN, LOW);
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(300);
}`,testing_output:"Introduce flame → robot stops and activates pump.",common_errors:"Incorrect flame threshold, water pump power issues.",improvements:"Add servo-mounted nozzle, multiple flame sensors.",mini_challenge:"Detect fire direction and aim nozzle.",advantages:"Early fire suppression.",disadvantages:"Limited water capacity.",components:["ESP32","Flame Sensor","Relay","Water Pump","L298N","DC Motors"],circuit_diagram:"Flame sensor to GPIO34. Relay IN to GPIO25. Motors via L298N.",industrial_use:"Fire safety robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,500"},{id:208,title:"DTMF Controlled Vehicle",level:"Intermediate",description:"A DTMF-controlled robotic vehicle using ESP32 that receives commands via GSM phone call tones and navigates accordingly.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","DTMF Decoder MT8870","L298N Motor Driver","DC Motors"],problem_statement:"Remote control in areas without internet or Bluetooth connectivity requires alternative communication. DTMF-based control enables long-distance robot operation over cellular networks.",real_world_case:"Used in remote surveillance, disaster-response robots, and telecom-based control systems.",block_diagram:"graph TD; Mobile_Phone-->|DTMF_Tones|MT8870; MT8870-->|Command|ESP32; ESP32-->|Motor_Control|L298N;",concept:"DTMF tones generated during a phone call are decoded into binary outputs by MT8870. ESP32 interprets these outputs to control vehicle movement.",working_principle:`1. User presses keypad during call.
2. DTMF tones transmitted.
3. MT8870 decodes tone.
4. ESP32 executes motion command.`,pin_config:{esp32:[{module:"DTMF Decoder MT8870",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Decoder power"},{module:"DTMF Decoder MT8870",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"DTMF Decoder MT8870",pinName:"Q1",mcuPin:"GPIO32",direction:"Input",voltage:"3.3V",description:"DTMF bit 1"},{module:"DTMF Decoder MT8870",pinName:"Q2",mcuPin:"GPIO33",direction:"Input",voltage:"3.3V",description:"DTMF bit 2"},{module:"DTMF Decoder MT8870",pinName:"Q3",mcuPin:"GPIO25",direction:"Input",voltage:"3.3V",description:"DTMF bit 3"},{module:"DTMF Decoder MT8870",pinName:"Q4",mcuPin:"GPIO26",direction:"Input",voltage:"3.3V",description:"DTMF bit 4"}]},code:`/* Project 208: DTMF Controlled Vehicle */
#define D1 32
#define D2 33
#define D3 25
#define D4 26

#define L1 14
#define L2 12
#define R1 27
#define R2 13

int readDTMF() {
  return (digitalRead(D4) << 3) | (digitalRead(D3) << 2) | (digitalRead(D2) << 1) | digitalRead(D1);
}

void setup() {
  pinMode(D1, INPUT); pinMode(D2, INPUT);
  pinMode(D3, INPUT); pinMode(D4, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int code = readDTMF();

  switch (code) {
    case 2: // Forward
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
      break;
    case 4: // Left
      digitalWrite(L1, LOW); digitalWrite(L2, LOW);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
      break;
    case 6: // Right
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, LOW);
      break;
    case 8: // Backward
      digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
      digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
      break;
    default:
      digitalWrite(L1, LOW); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }
}`,testing_output:"Press phone keys → vehicle moves accordingly.",common_errors:"Noise in audio input, wrong DTMF wiring.",improvements:"Add authentication code, camera feed.",mini_challenge:"Add speed control using different DTMF keys.",advantages:"Long-range control via GSM.",disadvantages:"Latency and tone noise.",components:["ESP32","MT8870","L298N","DC Motors"],circuit_diagram:"DTMF Q outputs to ESP32 GPIOs. Motors via L298N.",industrial_use:"Remote-controlled robotic systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,200"},{id:209,title:"Metal Detector Robot",level:"Intermediate",description:"A mobile robot using ESP32 that detects buried or surface metals using an inductive metal detector sensor and alerts the user while navigating autonomously.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","Metal Detector Sensor","Buzzer","L298N Motor Driver","DC Motors"],problem_statement:"Detecting metallic objects in hazardous or inaccessible areas is risky for humans. A metal detector robot enables safe and efficient metal detection in such environments.",real_world_case:"Used in landmine detection prototypes, treasure hunting, industrial inspection, and educational robotics.",block_diagram:"graph TD; Metal_Sensor-->|Detect|ESP32; ESP32-->|Alert|Buzzer; ESP32-->|Motor_Control|L298N;",concept:"The robot continuously scans the ground using a metal detector sensor. When metal is detected, it stops movement and alerts the user through a buzzer.",working_principle:`1. Metal sensor generates signal near metal.
2. ESP32 reads detection signal.
3. Robot stops at detection point.
4. Buzzer alerts the user.`,pin_config:{esp32:[{module:"Metal Detector Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Sensor power supply"},{module:"Metal Detector Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Metal Detector Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"Analog/Digital",description:"Metal detection signal"},{module:"Buzzer",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Buzzer power"},{module:"Buzzer",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Buzzer",pinName:"Signal",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Alert signal"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 209: Metal Detector Robot */
#define METAL_PIN 34
#define BUZZER_PIN 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int metalThreshold = 2000;

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(METAL_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int metalValue = analogRead(METAL_PIN);

  if (metalValue > metalThreshold) {
    stopRobot();
    digitalWrite(BUZZER_PIN, HIGH);
  } else {
    digitalWrite(BUZZER_PIN, LOW);
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(200);
}`,testing_output:"Place metal object → robot stops and buzzer activates.",common_errors:"Poor sensor calibration, false positives.",improvements:"Add depth estimation, GPS logging.",mini_challenge:"Different buzzer tones for different metal sizes.",advantages:"Safe metal detection.",disadvantages:"Limited detection depth.",components:["ESP32","Metal Detector Sensor","Buzzer","L298N","DC Motors"],circuit_diagram:"Metal sensor OUT to GPIO34. Buzzer to GPIO25. Motors via L298N.",industrial_use:"Security inspection, hazard detection.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,400"},{id:210,title:"RFID Path Tracker Robot",level:"Intermediate",description:"An RFID-based path tracking robot using ESP32 that follows a predefined route by detecting RFID tags placed along the path.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","RFID RC522","L298N Motor Driver","DC Motors"],problem_statement:"Line-following robots fail in dusty or worn environments. RFID-based navigation provides a robust alternative using digital checkpoints.",real_world_case:"Used in warehouses, logistics robots, guided vehicles, and industrial automation.",block_diagram:"graph TD; RFID_Tags-->|UID|RC522; RC522-->|SPI|ESP32; ESP32-->|Motor_Control|L298N;",concept:"RFID tags placed at junctions encode direction information. The robot reads tag data and decides movement based on predefined logic.",working_principle:`1. Robot moves forward scanning RFID tags.
2. RC522 reads tag UID.
3. ESP32 maps UID to direction.
4. Robot turns accordingly.`,pin_config:{esp32:[{module:"RFID RC522",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"RFID module power"},{module:"RFID RC522",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"RFID RC522",pinName:"SDA",mcuPin:"GPIO5",direction:"Output",voltage:"3.3V",description:"SPI SS"},{module:"RFID RC522",pinName:"SCK",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"SPI clock"},{module:"RFID RC522",pinName:"MOSI",mcuPin:"GPIO23",direction:"Output",voltage:"3.3V",description:"SPI MOSI"},{module:"RFID RC522",pinName:"MISO",mcuPin:"GPIO19",direction:"Input",voltage:"3.3V",description:"SPI MISO"}]},code:`/* Project 210: RFID Path Tracker Robot */
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 5
#define RST_PIN 22

#define L1 26
#define L2 27
#define R1 14
#define R2 12

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  SPI.begin();
  rfid.PCD_Init();
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;

  byte uid = rfid.uid.uidByte[0];

  if (uid == 0xA1) {
    // Turn Left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (uid == 0xB2) {
    // Turn Right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(500);
}`,testing_output:"Robot turns direction based on RFID tag UID.",common_errors:"Wrong UID mapping, insufficient RFID range.",improvements:"Add path memory, dynamic routing.",mini_challenge:"Use multiple UID bytes for complex commands.",advantages:"Robust navigation.",disadvantages:"Requires tag placement.",components:["ESP32","RC522","L298N","DC Motors"],circuit_diagram:"RC522 via SPI to ESP32. Motors via L298N.",industrial_use:"Automated guided vehicles.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,600"},{id:211,title:"Edge Detection Robot",level:"Intermediate",description:"An edge detection robot using ESP32 that prevents falling from edges (tables, stairs) by detecting surface discontinuities using downward-facing IR sensors.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"5–6 Hours",tech:["ESP32","IR Proximity Sensors","L298N Motor Driver","DC Motors"],problem_statement:"Mobile robots operating on elevated surfaces risk falling due to lack of edge awareness. An edge detection system is critical for safe navigation.",real_world_case:"Used in service robots, inspection bots, vacuum robots, and warehouse platforms.",block_diagram:"graph TD; IR_Left-->|Edge|ESP32; IR_Right-->|Edge|ESP32; ESP32-->|Motor_Control|L298N;",concept:"Downward-facing IR sensors detect reflected IR light. When no reflection is detected, an edge is assumed, and the robot changes direction to avoid falling.",working_principle:`1. IR sensors continuously scan surface.
2. ESP32 reads sensor states.
3. Edge detected when reflection drops.
4. Robot stops and turns away.`,pin_config:{esp32:[{module:"IR Sensor (Left)",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"IR sensor power"},{module:"IR Sensor (Left)",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"IR Sensor (Left)",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Left edge detection"},{module:"IR Sensor (Right)",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"IR sensor power"},{module:"IR Sensor (Right)",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"IR Sensor (Right)",pinName:"OUT",mcuPin:"GPIO35",direction:"Input",voltage:"3.3V",description:"Right edge detection"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 211: Edge Detection Robot */
#define IR_LEFT 34
#define IR_RIGHT 35

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(IR_LEFT, INPUT);
  pinMode(IR_RIGHT, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int leftEdge = digitalRead(IR_LEFT);
  int rightEdge = digitalRead(IR_RIGHT);

  if (leftEdge == LOW || rightEdge == LOW) {
    // Edge detected
    stopRobot();
    delay(200);
    // Turn away
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    delay(400);
  } else {
    // Safe surface, move forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot stops and turns back when reaching an edge.",common_errors:"Incorrect sensor height, poor surface reflectivity.",improvements:"Add speed control, combine with obstacle avoidance.",mini_challenge:"Detect and stop at stair edges only.",advantages:"Prevents fall damage.",disadvantages:"Sensitive to lighting conditions.",components:["ESP32","2x IR Sensors","L298N","DC Motors"],circuit_diagram:"IR sensors to GPIO34/35. Motors via L298N.",industrial_use:"Service and inspection robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,200"},{id:212,title:"Color Detection Robot",level:"Intermediate",description:"A color detection robot using ESP32 and TCS3200 color sensor that identifies surface color and performs actions based on detected color.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","TCS3200 Color Sensor","L298N Motor Driver","DC Motors"],problem_statement:"Robots in sorting and automation systems must identify objects based on color. Color detection enables intelligent decision-making.",real_world_case:"Used in color-based sorting systems, automation lines, and educational robotics.",block_diagram:"graph TD; TCS3200-->|Color_Data|ESP32; ESP32-->|Decision|Motor_Control;",concept:"The TCS3200 outputs frequency values corresponding to RGB components. ESP32 compares values to detect dominant color.",working_principle:`1. Sensor reads RGB components.
2. ESP32 measures frequency.
3. Dominant color determined.
4. Robot acts based on color.`,pin_config:{esp32:[{module:"TCS3200",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Color sensor power"},{module:"TCS3200",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"TCS3200",pinName:"S0",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Frequency scaling"},{module:"TCS3200",pinName:"S1",mcuPin:"GPIO19",direction:"Output",voltage:"3.3V",description:"Frequency scaling"},{module:"TCS3200",pinName:"S2",mcuPin:"GPIO21",direction:"Output",voltage:"3.3V",description:"Color select"},{module:"TCS3200",pinName:"S3",mcuPin:"GPIO22",direction:"Output",voltage:"3.3V",description:"Color select"},{module:"TCS3200",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"Frequency",description:"Color frequency output"}]},code:`/* Project 212: Color Detection Robot */
#define S0 18
#define S1 19
#define S2 21
#define S3 22
#define COLOR_OUT 34

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int readColor(bool s2, bool s3) {
  digitalWrite(S2, s2);
  digitalWrite(S3, s3);
  delay(10);
  return pulseIn(COLOR_OUT, LOW);
}

void setup() {
  pinMode(S0, OUTPUT); pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT); pinMode(S3, OUTPUT);
  pinMode(COLOR_OUT, INPUT);

  digitalWrite(S0, HIGH); digitalWrite(S1, LOW); // 20% scaling

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int red = readColor(LOW, LOW);
  int green = readColor(HIGH, HIGH);
  int blue = readColor(LOW, HIGH);

  if (red < green && red < blue) {
    // Red detected → Stop
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else if (blue < red && blue < green) {
    // Blue → Turn right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else {
    // Green → Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(300);
}`,testing_output:"Robot reacts differently to red, green, and blue surfaces.",common_errors:"Poor lighting, wrong calibration.",improvements:"Add color calibration mode, object sorting arm.",mini_challenge:"Detect multiple colors and count occurrences.",advantages:"Color-based decision making.",disadvantages:"Sensitive to ambient light.",components:["ESP32","TCS3200","L298N","DC Motors"],circuit_diagram:"TCS3200 connected via GPIOs. Motors via L298N.",industrial_use:"Sorting robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,000"},{id:213,title:"Pick & Place Robotic Arm",level:"Intermediate",description:"A pick and place robotic arm using ESP32 and servo motors that can grab, lift, and place objects at predefined positions with precise control.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"7–8 Hours",tech:["ESP32","Servo Motors","Joystick Module","Power Supply"],problem_statement:"Manual material handling is repetitive and error-prone. Pick and place robots automate object transfer tasks with accuracy and consistency.",real_world_case:"Used in manufacturing lines, packaging units, electronics assembly, and educational robotics labs.",block_diagram:"graph TD; Joystick-->|Control|ESP32; ESP32-->|PWM|Servo_Base; ESP32-->|PWM|Servo_Arm; ESP32-->|PWM|Servo_Gripper;",concept:"Multiple servo motors control different joints of the robotic arm. ESP32 translates joystick movements into angular positions for each servo.",working_principle:`1. Joystick provides analog position.
2. ESP32 maps input to servo angles.
3. Servos move arm joints.
4. Gripper opens/closes to pick or place object.`,pin_config:{esp32:[{module:"Servo Base",pinName:"Signal",mcuPin:"GPIO25",direction:"Output",voltage:"PWM 3.3V",description:"Base rotation"},{module:"Servo Arm",pinName:"Signal",mcuPin:"GPIO26",direction:"Output",voltage:"PWM 3.3V",description:"Arm lift"},{module:"Servo Gripper",pinName:"Signal",mcuPin:"GPIO27",direction:"Output",voltage:"PWM 3.3V",description:"Gripper open/close"},{module:"Joystick",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Joystick power"},{module:"Joystick",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Joystick",pinName:"VRx",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"X-axis control"},{module:"Joystick",pinName:"VRy",mcuPin:"GPIO35",direction:"Input",voltage:"Analog",description:"Y-axis control"}]},code:`/* Project 213: Pick & Place Robotic Arm */
#include <Servo.h>

Servo baseServo, armServo, gripperServo;

#define BASE_PIN 25
#define ARM_PIN 26
#define GRIP_PIN 27

#define JOY_X 34
#define JOY_Y 35

void setup() {
  baseServo.attach(BASE_PIN);
  armServo.attach(ARM_PIN);
  gripperServo.attach(GRIP_PIN);
}

void loop() {
  int xVal = analogRead(JOY_X);
  int yVal = analogRead(JOY_Y);

  int baseAngle = map(xVal, 0, 4095, 0, 180);
  int armAngle = map(yVal, 0, 4095, 0, 180);

  baseServo.write(baseAngle);
  armServo.write(armAngle);

  // Simple grip demo
  gripperServo.write(90);
  delay(100);
}`,testing_output:"Move joystick → arm joints respond. Gripper opens/closes.",common_errors:"Insufficient servo power, mechanical misalignment.",improvements:"Add inverse kinematics, preset positions.",mini_challenge:"Program automatic pick-and-place sequence.",advantages:"Precise object handling.",disadvantages:"Limited payload capacity.",components:["ESP32","3x Servo Motors","Joystick Module"],circuit_diagram:"Servo signals to GPIO25/26/27. Joystick to GPIO34/35.",industrial_use:"Automation and assembly lines.",author_name:"NISHANTH",status:"Published",bom_cost:"₹4,500"},{id:214,title:"Smart Vacuum Robot",level:"Intermediate",description:"A smart vacuum robot using ESP32 that autonomously navigates a room, avoids obstacles, and cleans surfaces using a suction motor.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"8 Hours",tech:["ESP32","Ultrasonic Sensor","IR Edge Sensors","Motor Driver","Vacuum Motor"],problem_statement:"Manual cleaning is time-consuming. Autonomous vacuum robots reduce human effort by cleaning floors automatically.",real_world_case:"Used in home cleaning robots, office maintenance, and service robotics.",block_diagram:"graph TD; Ultrasonic-->|Obstacle|ESP32; IR_Sensors-->|Edge|ESP32; ESP32-->|Drive|Motors; ESP32-->|Relay|Vacuum_Motor;",concept:"The robot combines obstacle avoidance and edge detection to safely navigate while continuously running a vacuum motor for cleaning.",working_principle:`1. Ultrasonic sensor detects obstacles.
2. IR sensors detect edges.
3. ESP32 navigates safely.
4. Vacuum motor runs continuously.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (divider)",description:"Echo signal"},{module:"IR Edge Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Edge detection"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Vacuum motor control"}]},code:`/* Project 214: Smart Vacuum Robot */
#define TRIG 18
#define ECHO 19
#define EDGE 34
#define RELAY 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long d = pulseIn(ECHO, HIGH);
  return d * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(EDGE, INPUT);
  pinMode(RELAY, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  digitalWrite(RELAY, HIGH); // Vacuum ON
}

void loop() {
  int edge = digitalRead(EDGE);
  long distance = getDistance();

  if (edge == LOW || distance < 20) {
    // Avoid
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    delay(400);
  } else {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot navigates room and avoids obstacles while vacuum runs.",common_errors:"Insufficient suction motor power, false edge detection.",improvements:"Add room mapping, scheduled cleaning.",mini_challenge:"Add battery monitoring and auto-docking.",advantages:"Autonomous cleaning.",disadvantages:"Random navigation.",components:["ESP32","Ultrasonic Sensor","IR Sensors","Relay","Motors"],circuit_diagram:"Ultrasonic to GPIO18/19. Relay to GPIO25. Motors via driver.",industrial_use:"Service robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹5,500"},{id:214,title:"Smart Vacuum Robot",level:"Intermediate",description:"A smart vacuum robot using ESP32 that autonomously navigates a room, avoids obstacles, and cleans surfaces using a suction motor.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"8 Hours",tech:["ESP32","Ultrasonic Sensor","IR Edge Sensors","Motor Driver","Vacuum Motor"],problem_statement:"Manual cleaning is time-consuming. Autonomous vacuum robots reduce human effort by cleaning floors automatically.",real_world_case:"Used in home cleaning robots, office maintenance, and service robotics.",block_diagram:"graph TD; Ultrasonic-->|Obstacle|ESP32; IR_Sensors-->|Edge|ESP32; ESP32-->|Drive|Motors; ESP32-->|Relay|Vacuum_Motor;",concept:"The robot combines obstacle avoidance and edge detection to safely navigate while continuously running a vacuum motor for cleaning.",working_principle:`1. Ultrasonic sensor detects obstacles.
2. IR sensors detect edges.
3. ESP32 navigates safely.
4. Vacuum motor runs continuously.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (divider)",description:"Echo signal"},{module:"IR Edge Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Edge detection"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Vacuum motor control"}]},code:`/* Project 214: Smart Vacuum Robot */
#define TRIG 18
#define ECHO 19
#define EDGE 34
#define RELAY 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long d = pulseIn(ECHO, HIGH);
  return d * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(EDGE, INPUT);
  pinMode(RELAY, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  digitalWrite(RELAY, HIGH); // Vacuum ON
}

void loop() {
  int edge = digitalRead(EDGE);
  long distance = getDistance();

  if (edge == LOW || distance < 20) {
    // Avoid
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    delay(400);
  } else {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot navigates room and avoids obstacles while vacuum runs.",common_errors:"Insufficient suction motor power, false edge detection.",improvements:"Add room mapping, scheduled cleaning.",mini_challenge:"Add battery monitoring and auto-docking.",advantages:"Autonomous cleaning.",disadvantages:"Random navigation.",components:["ESP32","Ultrasonic Sensor","IR Sensors","Relay","Motors"],circuit_diagram:"Ultrasonic to GPIO18/19. Relay to GPIO25. Motors via driver.",industrial_use:"Service robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹5,500"},{id:215,title:"Water Surface Robot",level:"Intermediate",description:"An ESP32-based water surface robot designed to navigate lakes, tanks, and reservoirs using dual propeller motors, with obstacle avoidance for safe aquatic monitoring.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"7–8 Hours",tech:["ESP32","Ultrasonic Sensor","L298N Motor Driver","DC Propeller Motors"],problem_statement:"Manual monitoring of water bodies is risky and inefficient. A water surface robot enables safe inspection, surveillance, and data collection without human exposure.",real_world_case:"Used in water quality inspection prototypes, aquatic surveillance robots, and research projects for lakes and storage tanks.",block_diagram:"graph TD; Ultrasonic-->|Distance|ESP32; ESP32-->|Motor Control|L298N; L298N-->|Propellers|Water_Motion;",concept:"The robot floats on water and uses propeller motors for thrust. An ultrasonic sensor detects obstacles ahead, allowing the ESP32 to alter direction to avoid collisions.",working_principle:`1. Propeller motors generate thrust for movement.
2. Ultrasonic sensor measures distance to obstacles.
3. ESP32 evaluates safe distance.
4. Robot turns when obstacle detected.
5. Continuous forward navigation on water surface.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Ultrasonic sensor power"},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (use divider)",description:"Echo signal"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left propeller forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left propeller reverse"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right propeller forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right propeller reverse"}]},code:`/* Project 215: Water Surface Robot */
#define TRIG 18
#define ECHO 19

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  long distance = getDistance();

  if (distance < 40) {
    // Turn right to avoid obstacle
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    delay(400);
  } else {
    // Move forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot moves forward on water and turns when obstacle detected.",common_errors:"Water leakage, unstable float balance, echo noise.",improvements:"Add GPS module, water quality sensors, solar charging.",mini_challenge:"Log distance data and generate water surface map.",advantages:"Safe water monitoring, remote navigation.",disadvantages:"Limited speed and stability in waves.",components:["ESP32","Ultrasonic Sensor","L298N","2x DC Propeller Motors"],circuit_diagram:"Ultrasonic to GPIO18/19. Propellers via L298N to GPIO26,27,14,12.",industrial_use:"Environmental monitoring robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹4,800"},{id:216,title:"Solar Powered Robot",level:"Intermediate",description:"A solar-powered robot using ESP32 that harvests solar energy, stores it in a battery, and operates autonomously with efficient power management.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6–7 Hours",tech:["ESP32","Solar Panel","Charge Controller","Battery","Motor Driver"],problem_statement:"Robots operating outdoors require reliable power sources. Solar-powered robots reduce dependency on manual charging and enable long-duration autonomous operation.",real_world_case:"Used in agricultural robots, outdoor surveillance bots, and renewable-energy-based robotic systems.",block_diagram:"graph TD; Solar_Panel-->|Energy|Charge_Controller; Battery-->|Power|ESP32; ESP32-->|Motor_Control|Motor_Driver;",concept:"Solar energy is converted and stored in a battery using a charge controller. ESP32 manages motor operation while ensuring efficient power usage.",working_principle:`1. Solar panel generates DC power.
2. Charge controller safely charges battery.
3. Battery powers ESP32 and motors.
4. Robot operates autonomously using stored energy.`,pin_config:{esp32:[{module:"Motor Driver",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 216: Solar Powered Robot */
#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  // Continuous forward motion
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}`,testing_output:"Robot runs using solar-charged battery.",common_errors:"Improper charging circuit, insufficient sunlight.",improvements:"Add battery voltage monitoring, sleep modes.",mini_challenge:"Stop robot when battery voltage is low.",advantages:"Renewable energy powered.",disadvantages:"Dependent on sunlight availability.",components:["ESP32","Solar Panel","Charge Controller","Battery","Motor Driver"],circuit_diagram:"Solar panel → charge controller → battery → ESP32 & motors.",industrial_use:"Outdoor autonomous robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,900"},{id:217,title:"Wall Climbing Robot",level:"Intermediate",description:"A wall climbing robot using ESP32 that adheres to vertical surfaces using a suction mechanism and navigates upward with controlled motor drive.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"8 Hours",tech:["ESP32","Vacuum/Suction Motor","L298N Motor Driver","DC Motors"],problem_statement:"Inspection of vertical surfaces like walls, glass panels, and tanks is dangerous and difficult for humans. Wall-climbing robots enable safe and automated inspection.",real_world_case:"Used in building inspection, glass cleaning robots, tank inspection, and research in climbing robotics.",block_diagram:"graph TD; ESP32-->|Drive|L298N; L298N-->|Motion|Drive_Motors; ESP32-->|Relay|Suction_Motor;",concept:"The robot uses a suction motor to create negative pressure that allows it to stick to vertical surfaces, while drive motors move it upward or sideways.",working_principle:`1. Suction motor creates vacuum.
2. Robot adheres to wall surface.
3. Drive motors rotate wheels/tracks.
4. ESP32 maintains suction while moving.`,pin_config:{esp32:[{module:"Suction Motor Relay",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Relay supply"},{module:"Suction Motor Relay",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Suction Motor Relay",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Controls suction motor"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 217: Wall Climbing Robot */
#define SUCTION_RELAY 25
#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  pinMode(SUCTION_RELAY, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);

  digitalWrite(SUCTION_RELAY, HIGH); // Enable suction
}

void loop() {
  // Move upward
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}`,testing_output:"Robot adheres to wall and climbs upward.",common_errors:"Insufficient suction, air leakage, motor overload.",improvements:"Add pressure sensor feedback, autonomous path planning.",mini_challenge:"Detect suction loss and stop motors immediately.",advantages:"Safe vertical inspection.",disadvantages:"High power consumption.",components:["ESP32","Vacuum Motor","Relay Module","L298N","DC Motors"],circuit_diagram:"Relay controls suction motor. L298N controls drive motors.",industrial_use:"Building and tank inspection robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹6,200"},{id:218,title:"Path Tracking Robot",level:"Intermediate",description:"A path tracking robot using ESP32 that follows predefined tracks using multiple IR sensors and decision logic for smooth navigation.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","IR Sensor Array","L298N Motor Driver","DC Motors"],problem_statement:"Robots in industrial environments must reliably follow fixed paths for material transport. Path tracking robots ensure repeatable and accurate navigation.",real_world_case:"Used in automated guided vehicles (AGVs), warehouse robots, and factory transport systems.",block_diagram:"graph TD; IR_Array-->|Path Data|ESP32; ESP32-->|Motor Control|L298N;",concept:"An array of IR sensors detects the track position. ESP32 interprets sensor patterns to adjust motor speeds and maintain alignment.",working_principle:`1. IR sensors detect path position.
2. ESP32 reads sensor pattern.
3. Corrective turns are applied.
4. Robot stays centered on path.`,pin_config:{esp32:[{module:"IR Sensor Left",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"IR sensor power"},{module:"IR Sensor Left",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"IR Sensor Left",pinName:"OUT",mcuPin:"GPIO32",direction:"Input",voltage:"3.3V",description:"Left path sensor"},{module:"IR Sensor Center",pinName:"OUT",mcuPin:"GPIO33",direction:"Input",voltage:"3.3V",description:"Center path sensor"},{module:"IR Sensor Right",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Right path sensor"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 218: Path Tracking Robot */
#define IR_L 32
#define IR_C 33
#define IR_R 34

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  pinMode(IR_L, INPUT);
  pinMode(IR_C, INPUT);
  pinMode(IR_R, INPUT);

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int L = digitalRead(IR_L);
  int C = digitalRead(IR_C);
  int R = digitalRead(IR_R);

  if (C == 0) {
    // Centered
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (L == 0) {
    // Drift left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (R == 0) {
    // Drift right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else {
    // Lost path
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot follows predefined path smoothly.",common_errors:"Improper sensor spacing, wrong threshold tuning.",improvements:"Add PID speed control, dynamic path switching.",mini_challenge:"Track curved paths without stopping.",advantages:"Reliable navigation.",disadvantages:"Needs predefined track.",components:["ESP32","3x IR Sensors","L298N","DC Motors"],circuit_diagram:"IR sensors to GPIO32/33/34. Motors via L298N.",industrial_use:"AGVs, warehouse robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,700"},{id:218,title:"Path Tracking Robot",level:"Intermediate",description:"A path tracking robot using ESP32 that follows predefined tracks using multiple IR sensors and decision logic for smooth navigation.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"6 Hours",tech:["ESP32","IR Sensor Array","L298N Motor Driver","DC Motors"],problem_statement:"Robots in industrial environments must reliably follow fixed paths for material transport. Path tracking robots ensure repeatable and accurate navigation.",real_world_case:"Used in automated guided vehicles (AGVs), warehouse robots, and factory transport systems.",block_diagram:"graph TD; IR_Array-->|Path Data|ESP32; ESP32-->|Motor Control|L298N;",concept:"An array of IR sensors detects the track position. ESP32 interprets sensor patterns to adjust motor speeds and maintain alignment.",working_principle:`1. IR sensors detect path position.
2. ESP32 reads sensor pattern.
3. Corrective turns are applied.
4. Robot stays centered on path.`,pin_config:{esp32:[{module:"IR Sensor Left",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"IR sensor power"},{module:"IR Sensor Left",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"IR Sensor Left",pinName:"OUT",mcuPin:"GPIO32",direction:"Input",voltage:"3.3V",description:"Left path sensor"},{module:"IR Sensor Center",pinName:"OUT",mcuPin:"GPIO33",direction:"Input",voltage:"3.3V",description:"Center path sensor"},{module:"IR Sensor Right",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"3.3V",description:"Right path sensor"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 218: Path Tracking Robot */
#define IR_L 32
#define IR_C 33
#define IR_R 34

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  pinMode(IR_L, INPUT);
  pinMode(IR_C, INPUT);
  pinMode(IR_R, INPUT);

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int L = digitalRead(IR_L);
  int C = digitalRead(IR_C);
  int R = digitalRead(IR_R);

  if (C == 0) {
    // Centered
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (L == 0) {
    // Drift left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (R == 0) {
    // Drift right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else {
    // Lost path
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot follows predefined path smoothly.",common_errors:"Improper sensor spacing, wrong threshold tuning.",improvements:"Add PID speed control, dynamic path switching.",mini_challenge:"Track curved paths without stopping.",advantages:"Reliable navigation.",disadvantages:"Needs predefined track.",components:["ESP32","3x IR Sensors","L298N","DC Motors"],circuit_diagram:"IR sensors to GPIO32/33/34. Motors via L298N.",industrial_use:"AGVs, warehouse robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,700"},{id:219,title:"Hand Gesture Controlled Robot",level:"Intermediate",description:"A hand gesture controlled robot using ESP32 and MPU6050 accelerometer where hand tilt gestures are wirelessly translated into robot motion commands.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"7 Hours",tech:["ESP32","MPU6050","Bluetooth","L298N Motor Driver","DC Motors"],problem_statement:"Traditional button-based control is unintuitive for natural human–robot interaction. Gesture-based control allows users to guide robots using simple hand movements.",real_world_case:"Used in assistive robots, intuitive control systems, rehabilitation robotics, and advanced HMI research.",block_diagram:"graph TD; MPU6050-->|Gesture Data|ESP32_TX; ESP32_TX-->|Bluetooth|ESP32_RX; ESP32_RX-->|Motor Control|L298N;",concept:"One ESP32 reads hand orientation using MPU6050 and sends direction commands wirelessly. The robot-side ESP32 receives commands and controls motor movement.",working_principle:`1. MPU6050 measures hand tilt angles.
2. ESP32 maps tilt to direction.
3. Command sent via Bluetooth.
4. Robot ESP32 decodes command.
5. Motors move accordingly.`,pin_config:{esp32:[{module:"MPU6050",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Accelerometer power"},{module:"MPU6050",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21",direction:"I/O",voltage:"3.3V",description:"I2C data"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22",direction:"I/O",voltage:"3.3V",description:"I2C clock"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 219: Hand Gesture Controlled Robot (Single ESP32 Demo) */
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

Adafruit_MPU6050 mpu;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  Serial.begin(115200);
  if (!mpu.begin()) {
    Serial.println("MPU6050 not detected");
    while (1);
  }

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  if (a.acceleration.x > 3) {
    // Forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (a.acceleration.x < -3) {
    // Backward
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
  } else if (a.acceleration.y > 3) {
    // Right
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else if (a.acceleration.y < -3) {
    // Left
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Stop
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }

  delay(150);
}`,testing_output:"Tilt hand forward/back/left/right → robot moves accordingly.",common_errors:"Noisy accelerometer data, incorrect tilt thresholds.",improvements:"Add wireless transmitter–receiver separation, smoothing filters.",mini_challenge:"Add gesture-based speed control.",advantages:"Natural and intuitive control.",disadvantages:"Sensitive to hand shake.",components:["ESP32","MPU6050","L298N","DC Motors"],circuit_diagram:"MPU6050 via I2C. Motors via L298N.",industrial_use:"Assistive and intuitive robotic systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,900"},{id:220,title:"Object Pickup Robot",level:"Intermediate",description:"An autonomous object pickup robot using ESP32 that detects objects, approaches them, and picks them up using a gripper mechanism.",category:"Robotics",sub_category:"Robotics (201-220)",estimatedTime:"8 Hours",tech:["ESP32","Ultrasonic Sensor","Servo Motor","L298N Motor Driver","DC Motors"],problem_statement:"Material collection in hazardous or repetitive environments is unsafe for humans. Object pickup robots automate this process safely and efficiently.",real_world_case:"Used in warehouse automation, waste collection robots, and rescue robotics prototypes.",block_diagram:"graph TD; Ultrasonic-->|Distance|ESP32; ESP32-->|Motor Control|L298N; ESP32-->|Servo|Gripper;",concept:"The robot uses distance sensing to locate objects, moves toward them, and uses a servo-driven gripper to pick and hold the object.",working_principle:`1. Ultrasonic sensor detects object distance.
2. ESP32 aligns robot with object.
3. Robot moves forward.
4. Servo closes gripper.
5. Robot retreats with object.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Ultrasonic power"},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (use divider)",description:"Echo signal"},{module:"Servo Motor (Gripper)",pinName:"Signal",mcuPin:"GPIO25",direction:"Output",voltage:"PWM 3.3V",description:"Gripper control"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 220: Object Pickup Robot */
#include <Servo.h>

#define TRIG 18
#define ECHO 19
#define GRIPPER 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

Servo gripper;

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  gripper.attach(GRIPPER);
  gripper.write(0); // Open
}

void loop() {
  long dist = getDistance();

  if (dist > 15) {
    // Move forward
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Pick object
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
    gripper.write(90); // Close
    delay(1000);
    // Move backward
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    delay(800);
  }
}`,testing_output:"Robot approaches object, grips it, and moves back.",common_errors:"Incorrect distance threshold, weak gripper torque.",improvements:"Add vision-based object detection, sorting logic.",mini_challenge:"Pick only specific-sized objects.",advantages:"Automated material handling.",disadvantages:"Limited object size and weight.",components:["ESP32","Ultrasonic Sensor","Servo Motor","L298N","DC Motors"],circuit_diagram:"Ultrasonic to GPIO18/19. Servo to GPIO25. Motors via L298N.",industrial_use:"Warehouse and service robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,800"},{id:221,title:"Fire Sensor Robot",level:"Intermediate",description:"A fire sensor robot using ESP32 that detects fire using a flame sensor and navigates towards the source while triggering alerts or suppression mechanisms.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6–7 Hours",tech:["ESP32","Flame Sensor","L298N Motor Driver","DC Motors","Buzzer"],problem_statement:"Early fire detection is crucial in reducing damage. A mobile fire sensor robot can detect fire in hazardous areas without human intervention.",real_world_case:"Used in fire safety research, warehouses, labs, and educational robotics competitions.",block_diagram:"graph TD; Flame_Sensor-->|Fire Data|ESP32; ESP32-->|Alert|Buzzer; ESP32-->|Motor Control|L298N;",concept:"The robot scans for flame intensity using a flame sensor. When fire is detected, it stops movement and alerts the user.",working_principle:`1. Flame sensor detects IR radiation.
2. ESP32 reads flame intensity.
3. Robot approaches or stops.
4. Alert is triggered.`,pin_config:{esp32:[{module:"Flame Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Flame sensor power"},{module:"Flame Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Flame Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Flame intensity signal"},{module:"Buzzer",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Buzzer power"},{module:"Buzzer",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Buzzer",pinName:"Signal",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Fire alert buzzer"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 221: Fire Sensor Robot */
#define FLAME_PIN 34
#define BUZZER 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int fireThreshold = 1600;

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(FLAME_PIN, INPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int flameValue = analogRead(FLAME_PIN);

  if (flameValue < fireThreshold) {
    stopRobot();
    digitalWrite(BUZZER, HIGH);
  } else {
    digitalWrite(BUZZER, LOW);
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(300);
}`,testing_output:"Introduce flame → robot stops and buzzer activates.",common_errors:"Wrong flame threshold, ambient IR interference.",improvements:"Add water pump, multi-direction flame sensing.",mini_challenge:"Detect flame direction using multiple sensors.",advantages:"Early fire detection.",disadvantages:"Sensitive to strong light sources.",components:["ESP32","Flame Sensor","Buzzer","L298N","DC Motors"],circuit_diagram:"Flame sensor to GPIO34. Buzzer to GPIO25. Motors via L298N.",industrial_use:"Fire safety robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,200"},{id:222,title:"Ball Follower Robot",level:"Intermediate",description:"A ball follower robot using ESP32 and ultrasonic sensing that tracks and follows a moving ball while maintaining a safe distance.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6 Hours",tech:["ESP32","Ultrasonic Sensor","L298N Motor Driver","DC Motors"],problem_statement:"Tracking and following moving objects is a fundamental robotics problem. A ball follower robot demonstrates dynamic sensing and motion control.",real_world_case:"Used in sports robotics, autonomous tracking systems, and educational robotics projects.",block_diagram:"graph TD; Ultrasonic-->|Distance|ESP32; ESP32-->|Motor Control|L298N;",concept:"The robot uses distance feedback to follow a ball while maintaining an optimal following distance.",working_principle:`1. Ultrasonic sensor measures distance.
2. ESP32 evaluates target distance.
3. Robot moves forward or stops.
4. Continuous tracking loop.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Ultrasonic power"},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",voltage:"5V (divider)",description:"Echo signal"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",voltage:"3.3V",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",voltage:"3.3V",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",voltage:"3.3V",description:"Right motor backward"}]},code:`/* Project 222: Ball Follower Robot */
#define TRIG 18
#define ECHO 19

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  long distance = getDistance();

  if (distance > 15 && distance < 40) {
    // Follow ball
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    // Stop
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }

  delay(200);
}`,testing_output:"Robot follows ball within set distance.",common_errors:"Ultrasonic misalignment, echo noise.",improvements:"Add camera-based tracking, PID distance control.",mini_challenge:"Maintain constant distance using PID.",advantages:"Dynamic object tracking.",disadvantages:"Limited sensing angle.",components:["ESP32","Ultrasonic Sensor","L298N","DC Motors"],circuit_diagram:"Ultrasonic to GPIO18/19. Motors via L298N.",industrial_use:"Tracking and follower robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,600"},{id:223,title:"Plant Watering Robot",level:"Intermediate",description:"An ESP32-based autonomous plant watering robot that detects soil moisture levels and waters plants only when required, optimizing water usage.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6–7 Hours",tech:["ESP32","Soil Moisture Sensor","Relay Module","Water Pump","DC Motors"],problem_statement:"Manual watering leads to overwatering or underwatering. An autonomous watering robot ensures optimal soil moisture while reducing human effort.",real_world_case:"Used in smart gardens, nurseries, greenhouse automation, and agricultural research prototypes.",block_diagram:"graph TD; Soil_Sensor-->|Moisture|ESP32; ESP32-->|Relay|Water_Pump; ESP32-->|Motor Control|Drive_Motors;",concept:"The robot navigates between plants, measures soil moisture, and activates a water pump only when moisture falls below a threshold.",working_principle:`1. Soil sensor measures moisture.
2. ESP32 compares value with threshold.
3. If soil is dry, pump is activated.
4. After watering, robot moves to next plant.`,pin_config:{esp32:[{module:"Soil Moisture Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Sensor power"},{module:"Soil Moisture Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Soil Moisture Sensor",pinName:"AO",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Soil moisture value"},{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Relay power"},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Pump control"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",description:"Right motor backward"}]},code:`/* Project 223: Plant Watering Robot */
#define SOIL_PIN 34
#define PUMP_RELAY 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int moistureThreshold = 2200;

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(SOIL_PIN, INPUT);
  pinMode(PUMP_RELAY, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  digitalWrite(PUMP_RELAY, LOW);
}

void loop() {
  int moisture = analogRead(SOIL_PIN);

  if (moisture > moistureThreshold) {
    // Dry soil → water plant
    stopRobot();
    digitalWrite(PUMP_RELAY, HIGH);
    delay(3000);
    digitalWrite(PUMP_RELAY, LOW);
  } else {
    // Move to next plant
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(500);
}`,testing_output:"Dry soil → pump activates. Wet soil → robot moves forward.",common_errors:"Wrong moisture calibration, pump power issues.",improvements:"Add GPS/line-following navigation, cloud logging.",mini_challenge:"Water different plants with different thresholds.",advantages:"Water-efficient irrigation.",disadvantages:"Limited plant identification.",components:["ESP32","Soil Moisture Sensor","Relay","Water Pump","L298N","DC Motors"],circuit_diagram:"Soil sensor to GPIO34. Relay to GPIO25. Motors via L298N.",industrial_use:"Smart agriculture robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,400"},{id:223,title:"Plant Watering Robot",level:"Intermediate",description:"An ESP32-based autonomous plant watering robot that detects soil moisture levels and waters plants only when required, optimizing water usage.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6–7 Hours",tech:["ESP32","Soil Moisture Sensor","Relay Module","Water Pump","DC Motors"],problem_statement:"Manual watering leads to overwatering or underwatering. An autonomous watering robot ensures optimal soil moisture while reducing human effort.",real_world_case:"Used in smart gardens, nurseries, greenhouse automation, and agricultural research prototypes.",block_diagram:"graph TD; Soil_Sensor-->|Moisture|ESP32; ESP32-->|Relay|Water_Pump; ESP32-->|Motor Control|Drive_Motors;",concept:"The robot navigates between plants, measures soil moisture, and activates a water pump only when moisture falls below a threshold.",working_principle:`1. Soil sensor measures moisture.
2. ESP32 compares value with threshold.
3. If soil is dry, pump is activated.
4. After watering, robot moves to next plant.`,pin_config:{esp32:[{module:"Soil Moisture Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power",voltage:"3.3V",description:"Sensor power"},{module:"Soil Moisture Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Soil Moisture Sensor",pinName:"AO",mcuPin:"GPIO34",direction:"Input",voltage:"Analog",description:"Soil moisture value"},{module:"Relay Module",pinName:"VCC",mcuPin:"5V",direction:"Power",voltage:"5V",description:"Relay power"},{module:"Relay Module",pinName:"GND",mcuPin:"GND",direction:"Ground",voltage:"0V",description:"Common ground"},{module:"Relay Module",pinName:"IN",mcuPin:"GPIO25",direction:"Output",voltage:"3.3V",description:"Pump control"},{module:"Motor Driver L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output",description:"Left motor forward"},{module:"Motor Driver L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output",description:"Left motor backward"},{module:"Motor Driver L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",description:"Right motor forward"},{module:"Motor Driver L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output",description:"Right motor backward"}]},code:`/* Project 223: Plant Watering Robot */
#define SOIL_PIN 34
#define PUMP_RELAY 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

int moistureThreshold = 2200;

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(SOIL_PIN, INPUT);
  pinMode(PUMP_RELAY, OUTPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
  digitalWrite(PUMP_RELAY, LOW);
}

void loop() {
  int moisture = analogRead(SOIL_PIN);

  if (moisture > moistureThreshold) {
    // Dry soil → water plant
    stopRobot();
    digitalWrite(PUMP_RELAY, HIGH);
    delay(3000);
    digitalWrite(PUMP_RELAY, LOW);
  } else {
    // Move to next plant
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }

  delay(500);
}`,testing_output:"Dry soil → pump activates. Wet soil → robot moves forward.",common_errors:"Wrong moisture calibration, pump power issues.",improvements:"Add GPS/line-following navigation, cloud logging.",mini_challenge:"Water different plants with different thresholds.",advantages:"Water-efficient irrigation.",disadvantages:"Limited plant identification.",components:["ESP32","Soil Moisture Sensor","Relay","Water Pump","L298N","DC Motors"],circuit_diagram:"Soil sensor to GPIO34. Relay to GPIO25. Motors via L298N.",industrial_use:"Smart agriculture robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,400"},{id:224,title:"Smart Traffic Bot",level:"Intermediate",description:"A smart traffic robot using ESP32 that simulates intelligent traffic control by detecting vehicle density and controlling traffic signals accordingly.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6 Hours",tech:["ESP32","IR Sensors","Traffic LEDs","Servo Motor"],problem_statement:"Fixed-time traffic signals cause congestion. Smart traffic systems adjust signal timing based on vehicle density.",real_world_case:"Used in traffic management simulations, smart city projects, and educational demonstrations.",block_diagram:"graph TD; IR_Sensors-->|Density|ESP32; ESP32-->|Signal Control|Traffic_LEDs;",concept:"IR sensors detect vehicle presence at junctions. ESP32 dynamically controls traffic signals to optimize flow.",working_principle:`1. IR sensors detect vehicles.
2. ESP32 measures lane density.
3. Signal timing adjusted dynamically.
4. LEDs indicate traffic flow.`,pin_config:{esp32:[{module:"IR Sensor Lane 1",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"IR Sensor Lane 1",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"IR Sensor Lane 1",pinName:"OUT",mcuPin:"GPIO32",direction:"Input"},{module:"IR Sensor Lane 2",pinName:"OUT",mcuPin:"GPIO33",direction:"Input"},{module:"Traffic LED Red",pinName:"Signal",mcuPin:"GPIO25",direction:"Output"},{module:"Traffic LED Yellow",pinName:"Signal",mcuPin:"GPIO26",direction:"Output"},{module:"Traffic LED Green",pinName:"Signal",mcuPin:"GPIO27",direction:"Output"}]},code:`/* Project 224: Smart Traffic Bot */
#define IR1 32
#define IR2 33

#define RED 25
#define YELLOW 26
#define GREEN 27

void setup() {
  pinMode(IR1, INPUT);
  pinMode(IR2, INPUT);
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}

void loop() {
  int lane1 = digitalRead(IR1);
  int lane2 = digitalRead(IR2);

  if (lane1 == LOW || lane2 == LOW) {
    // High traffic
    digitalWrite(RED, LOW);
    digitalWrite(YELLOW, LOW);
    digitalWrite(GREEN, HIGH);
    delay(5000);
  } else {
    // Normal traffic
    digitalWrite(GREEN, LOW);
    digitalWrite(YELLOW, HIGH);
    delay(2000);
    digitalWrite(YELLOW, LOW);
    digitalWrite(RED, HIGH);
    delay(3000);
  }
}`,testing_output:"LEDs change based on vehicle presence.",common_errors:"Wrong IR placement, ambient light issues.",improvements:"Add camera-based density detection, IoT dashboard.",mini_challenge:"Control 4-way junction logic.",advantages:"Dynamic traffic control.",disadvantages:"Limited sensing range.",components:["ESP32","IR Sensors","LEDs"],circuit_diagram:"IR sensors to GPIO32/33. LEDs to GPIO25–27.",industrial_use:"Smart traffic system demos.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,100"},{id:225,title:"Smart Garbage Collection Robot",level:"Intermediate",description:"An autonomous garbage collection robot using ESP32 that detects waste, picks it up using a servo-driven mechanism, and transports it to a collection zone.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"8–9 Hours",tech:["ESP32","Ultrasonic Sensor","IR Obstacle Sensor","Servo Motor","L298N Motor Driver"],problem_statement:"Manual garbage collection exposes workers to health risks and inefficiencies. A smart robot can autonomously collect small waste in controlled environments.",real_world_case:"Used in smart campus prototypes, indoor cleaning robots, hospitals, and public facility automation demos.",block_diagram:"graph TD; Ultrasonic-->|Object Distance|ESP32; IR-->|Obstacle|ESP32; ESP32-->|Motor Control|L298N; ESP32-->|Servo|Garbage_Arm;",concept:"The robot continuously scans for waste using distance sensing. When an object is detected within pickup range, it stops, activates a servo-based arm to collect garbage, and then resumes navigation.",working_principle:`1. Ultrasonic sensor detects object distance.
2. ESP32 confirms object is garbage-sized.
3. Robot stops at optimal distance.
4. Servo arm lowers and picks waste.
5. Robot resumes movement to disposal zone.`,pin_config:{esp32:[{module:"Ultrasonic Sensor",pinName:"VCC",mcuPin:"5V",direction:"Power",description:"Ultrasonic power"},{module:"Ultrasonic Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"Ultrasonic Sensor",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output"},{module:"Ultrasonic Sensor",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",description:"Use voltage divider"},{module:"IR Obstacle Sensor",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"IR Obstacle Sensor",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"IR Obstacle Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input"},{module:"Servo Motor",pinName:"Signal",mcuPin:"GPIO25",direction:"Output",description:"Garbage pickup arm"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output"}]},code:`/* Project 225: Smart Garbage Collection Robot */
#include <Servo.h>

#define TRIG 18
#define ECHO 19
#define IR_OBS 34
#define SERVO_PIN 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

Servo arm;

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(IR_OBS, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);

  arm.attach(SERVO_PIN);
  arm.write(0); // Arm up
}

void loop() {
  long dist = getDistance();
  int obstacle = digitalRead(IR_OBS);

  if (dist < 15 && obstacle == HIGH) {
    stopRobot();
    arm.write(90); // Pick garbage
    delay(1000);
    arm.write(0);
  } else {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot detects garbage, stops, picks it up, and continues moving.",common_errors:"Servo torque insufficient, wrong distance threshold.",improvements:"Add waste classification (wet/dry), bin fill detection.",mini_challenge:"Count number of garbage pickups per cycle.",advantages:"Automated waste handling.",disadvantages:"Limited garbage size handling.",components:["ESP32","Ultrasonic Sensor","IR Sensor","Servo","L298N","DC Motors"],industrial_use:"Smart cleaning robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,900"},{id:226,title:"Mobile Controlled Rover",level:"Intermediate",description:"A mobile-controlled rover using ESP32 and Bluetooth that allows real-time directional control via a smartphone application.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"5–6 Hours",tech:["ESP32","Bluetooth","L298N Motor Driver","DC Motors"],problem_statement:"Remote mobility is required in hazardous or inaccessible areas. A mobile-controlled rover enables safe remote navigation.",real_world_case:"Used in surveillance robots, exploration bots, and remote inspection systems.",block_diagram:"graph TD; Mobile_App-->|Bluetooth|ESP32; ESP32-->|Motor Control|L298N;",concept:"ESP32 receives directional commands via Bluetooth and translates them into motor control signals for precise rover movement.",working_principle:`1. User sends command from mobile app.
2. ESP32 receives Bluetooth data.
3. Command decoded into motion.
4. Motors execute movement.`,pin_config:{esp32:[{module:"Bluetooth",pinName:"RX/TX",mcuPin:"Internal",direction:"Communication",description:"ESP32 built-in BT"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output"}]},code:`/* Project 226: Mobile Controlled Rover */
#include "BluetoothSerial.h"
BluetoothSerial SerialBT;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  SerialBT.begin("ESP32_Rover");
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  if (SerialBT.available()) {
    char cmd = SerialBT.read();

    if (cmd == 'F') {
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    } else if (cmd == 'B') {
      digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
      digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    } else if (cmd == 'L') {
      digitalWrite(L1, LOW); digitalWrite(L2, LOW);
      digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    } else if (cmd == 'R') {
      digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, LOW);
    } else if (cmd == 'S') {
      digitalWrite(L1, LOW); digitalWrite(L2, LOW);
      digitalWrite(R1, LOW); digitalWrite(R2, LOW);
    }
  }
}`,testing_output:"Rover responds instantly to mobile commands.",common_errors:"Bluetooth pairing issues, command mismatch.",improvements:"Add speed control, camera streaming.",mini_challenge:"Add obstacle override safety.",advantages:"Simple and responsive control.",disadvantages:"Limited range (Bluetooth).",components:["ESP32","L298N","DC Motors"],industrial_use:"Remote inspection rovers.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,300"},{id:227,title:"Self-Balancing Robot (Basic PID)",level:"Intermediate",description:"A two-wheeled self-balancing robot using ESP32 and MPU6050 that maintains upright balance using a basic PID control algorithm.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"10–12 Hours",tech:["ESP32","MPU6050","PID Control","L298N Motor Driver","DC Motors"],problem_statement:"Balancing a dynamically unstable system requires continuous feedback and correction. This project demonstrates real-time closed-loop control using PID.",real_world_case:"Used in personal transporters (Segway), humanoid robots, and robotics research platforms.",block_diagram:"graph TD; MPU6050-->|Angle|ESP32; ESP32-->|PID Output|L298N; L298N-->|Torque|Motors;",concept:"The robot continuously measures tilt angle and applies PID corrections to motor speed to maintain vertical balance.",working_principle:`1. MPU6050 measures pitch angle.
2. ESP32 calculates error from vertical.
3. PID controller computes correction.
4. Motors apply torque.
5. Loop repeats at high frequency.`,pin_config:{esp32:[{module:"MPU6050",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"MPU6050",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21",direction:"I2C"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22",direction:"I2C"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output"}]},code:`/* Project 227: Self-Balancing Robot (Basic PID) */
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

Adafruit_MPU6050 mpu;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

// PID constants (must be tuned)
float Kp = 18.0;
float Ki = 0.8;
float Kd = 1.2;

float setPoint = 0.0; // Upright angle
float error, previousError = 0;
float integral = 0;

void setup() {
  Serial.begin(115200);
  if (!mpu.begin()) {
    while (1);
  }

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void driveMotor(float output) {
  if (output > 0) {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else {
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
  }
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  float angle = atan2(a.acceleration.x, a.acceleration.z) * 57.3;

  error = setPoint - angle;
  integral += error;
  float derivative = error - previousError;

  float output = Kp * error + Ki * integral + Kd * derivative;

  driveMotor(output);
  previousError = error;

  delay(10); // Control loop timing
}`,testing_output:"Robot oscillates initially, stabilizes after PID tuning.",common_errors:"Wrong PID tuning, loose wheels, sensor noise.",improvements:"Add complementary filter, encoder feedback.",mini_challenge:"Tune PID for faster recovery without oscillation.",advantages:"Demonstrates real control systems.",disadvantages:"Requires careful tuning.",components:["ESP32","MPU6050","L298N","DC Motors"],industrial_use:"Control system research.",author_name:"NISHANTH",status:"Published",bom_cost:"₹4,200"},{id:228,title:"Arduino-based Prosthetic Arm",level:"Intermediate",description:"A basic prosthetic arm using Arduino that mimics finger movement using flex sensors and servo motors.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"9–10 Hours",tech:["Arduino UNO","Flex Sensors","Servo Motors"],problem_statement:"Affordable prosthetic solutions are limited. A basic sensor-driven prosthetic arm helps demonstrate low-cost assistive technology.",real_world_case:"Used in assistive device research, rehabilitation engineering, and educational biomedical projects.",block_diagram:"graph TD; Flex_Sensors-->|Finger Bend|Arduino; Arduino-->|PWM|Servo_Motors;",concept:"Flex sensors detect finger bending. Arduino maps sensor values to servo angles, mimicking finger movement.",working_principle:`1. Flex sensor resistance changes with bending.
2. Arduino reads analog value.
3. Value mapped to servo angle.
4. Servo moves corresponding finger.`,pin_config:{arduino:[{module:"Flex Sensor 1",pinName:"Signal",mcuPin:"A0",direction:"Input"},{module:"Flex Sensor 2",pinName:"Signal",mcuPin:"A1",direction:"Input"},{module:"Servo Finger 1",pinName:"Signal",mcuPin:"D9",direction:"Output"},{module:"Servo Finger 2",pinName:"Signal",mcuPin:"D10",direction:"Output"}]},code:`/* Project 228: Arduino-based Prosthetic Arm */
#include <Servo.h>

Servo finger1;
Servo finger2;

#define FLEX1 A0
#define FLEX2 A1

void setup() {
  finger1.attach(9);
  finger2.attach(10);
}

void loop() {
  int flexVal1 = analogRead(FLEX1);
  int flexVal2 = analogRead(FLEX2);

  int angle1 = map(flexVal1, 500, 900, 0, 180);
  int angle2 = map(flexVal2, 500, 900, 0, 180);

  finger1.write(constrain(angle1, 0, 180));
  finger2.write(constrain(angle2, 0, 180));

  delay(30);
}`,testing_output:"Finger servos mimic hand bending.",common_errors:"Wrong flex calibration, servo jitter.",improvements:"Add EMG sensors, force feedback.",mini_challenge:"Grip objects with controlled force.",advantages:"Low-cost assistive demo.",disadvantages:"Limited precision.",components:["Arduino UNO","Flex Sensors","Servo Motors"],industrial_use:"Assistive technology research.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,600"},{id:229,title:"Camera Controlled Car",level:"Intermediate",description:"A camera-controlled robotic car using ESP32-CAM that streams live video over Wi-Fi and allows remote directional control through a web interface.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"8–10 Hours",tech:["ESP32-CAM","ESP32","Wi-Fi","L298N Motor Driver","DC Motors"],problem_statement:"Remote navigation in unknown or hazardous environments requires visual feedback. Camera-controlled robots provide real-time situational awareness.",real_world_case:"Used in surveillance rovers, search-and-rescue robots, inspection bots, and teleoperated vehicles.",block_diagram:"graph TD; Camera-->|Video Stream|ESP32_CAM; Web_UI-->|Commands|ESP32; ESP32-->|Motor Control|L298N;",concept:"Live video streaming allows a human operator to visually guide the robot. Control commands are sent via HTTP requests to the ESP32.",working_principle:`1. ESP32-CAM streams video via Wi-Fi.
2. User views stream on browser.
3. Button commands sent to ESP32.
4. Motors respond in real time.`,pin_config:{esp32:[{module:"ESP32-CAM",pinName:"5V",mcuPin:"5V",direction:"Power",description:"Camera power"},{module:"ESP32-CAM",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO12",direction:"Output",description:"Left motor forward"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO13",direction:"Output",description:"Left motor backward"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output",description:"Right motor forward"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO15",direction:"Output",description:"Right motor backward"}]},code:`/* Project 229: Camera Controlled Car (ESP32-CAM + Web Control) */
#include "esp_camera.h"
#include <WiFi.h>
#include <WebServer.h>

#define L1 12
#define L2 13
#define R1 14
#define R2 15

const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASS";

WebServer server(80);

void moveForward() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}
void stopCar() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);

  server.on("/forward", moveForward);
  server.on("/stop", stopCar);
  server.begin();
}

void loop() {
  server.handleClient();
}`,testing_output:"Live video stream visible; car responds to web commands.",common_errors:"Insufficient power for ESP32-CAM, Wi-Fi latency.",improvements:"Add watchdog timer, encrypted commands.",mini_challenge:"Add object detection on video stream.",advantages:"Visual teleoperation.",disadvantages:"Network-dependent.",components:["ESP32-CAM","ESP32","L298N","DC Motors"],industrial_use:"Surveillance and inspection robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹4,500"},{id:230,title:"Edge Avoiding Robot",level:"Intermediate",description:"A safety-focused mobile robot using ESP32 that prevents falling by detecting surface edges using downward-facing IR sensors.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"5–6 Hours",tech:["ESP32","IR Sensors","L298N Motor Driver","DC Motors"],problem_statement:"Mobile robots risk falling when operating on elevated surfaces. Edge avoidance ensures operational safety.",real_world_case:"Used in vacuum robots, inspection bots, and service robots.",block_diagram:"graph TD; IR_Sensors-->|Edge Detection|ESP32; ESP32-->|Motor Control|L298N;",concept:"Downward IR sensors detect reflected surface light. Absence of reflection indicates an edge.",working_principle:`1. IR sensors monitor ground reflection.
2. ESP32 detects edge condition.
3. Robot stops and retreats.
4. Direction adjusted.`,pin_config:{esp32:[{module:"IR Sensor Left",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"IR Sensor Left",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"IR Sensor Left",pinName:"OUT",mcuPin:"GPIO34",direction:"Input"},{module:"IR Sensor Right",pinName:"OUT",mcuPin:"GPIO35",direction:"Input"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output"}]},code:`/* Project 230: Edge Avoiding Robot */
#define IR_L 34
#define IR_R 35

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void stopRobot() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  pinMode(IR_L, INPUT);
  pinMode(IR_R, INPUT);
  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  int left = digitalRead(IR_L);
  int right = digitalRead(IR_R);

  if (left == LOW || right == LOW) {
    stopRobot();
    delay(200);
    // Reverse slightly
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
    delay(400);
  } else {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,testing_output:"Robot avoids falling from table edges.",common_errors:"Wrong sensor height, reflective surfaces.",improvements:"Combine with obstacle avoidance.",mini_challenge:"Detect stairs reliably.",advantages:"Critical safety layer.",disadvantages:"Sensitive to lighting.",components:["ESP32","IR Sensors","L298N","DC Motors"],industrial_use:"Service and inspection robots.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,200"},{id:231,title:"Smart Vacuum Mapping Robot (Simple)",level:"Intermediate",description:"A smart vacuum robot using ESP32 that performs structured room coverage using basic mapping logic without complex SLAM algorithms.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"9–10 Hours",tech:["ESP32","Ultrasonic Sensor","IR Edge Sensors","Relay Module","L298N Motor Driver"],problem_statement:"Random navigation vacuum robots waste energy and time. Structured coverage improves cleaning efficiency.",real_world_case:"Used in entry-level vacuum robots and industrial floor-cleaning machines.",concept:"The robot maintains a simple directional state and follows a zig-zag pattern, changing direction when obstacles are detected.",working_principle:`1. Robot moves forward cleaning.
2. Obstacle detected → rotate 90°.
3. After fixed distance, direction flips.
4. Area covered systematically.`,pin_config:{esp32:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"GPIO18",direction:"Output"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"GPIO19",direction:"Input",description:"Use voltage divider"},{module:"IR Edge Sensor",pinName:"OUT",mcuPin:"GPIO34",direction:"Input"},{module:"Vacuum Relay",pinName:"IN",mcuPin:"GPIO25",direction:"Output"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12"}]},code:`/* Project 231: Smart Vacuum Mapping Robot (Simple) */
#define TRIG 18
#define ECHO 19
#define EDGE 34
#define VACUUM 25

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void forward() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}

void rotateRight() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(EDGE, INPUT);
  pinMode(VACUUM, OUTPUT);

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);

  digitalWrite(VACUUM, HIGH); // Vacuum ON
}

void loop() {
  long dist = getDistance();
  int edge = digitalRead(EDGE);

  if (edge == LOW || dist < 25) {
    rotateRight();
    delay(500);
  } else {
    forward();
  }
}`,testing_output:"Robot cleans area in structured pattern.",common_errors:"Wheel slip, inaccurate turning angle.",improvements:"Add encoder-based distance tracking.",mini_challenge:"Store visited zones in EEPROM.",advantages:"Better coverage than random walk.",disadvantages:"No true map storage.",components:["ESP32","Ultrasonic","IR Sensor","Relay","L298N","DC Motors"],industrial_use:"Service robotics.",author_name:"NISHANTH",status:"Published",bom_cost:"₹5,200"},{id:232,title:"Gesture Robotic Arm (Basic)",level:"Intermediate",description:"A gesture-controlled robotic arm using ESP32 and MPU6050 that mimics hand orientation in real time.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"7–8 Hours",tech:["ESP32","MPU6050","Servo Motors"],problem_statement:"Traditional joystick control is unintuitive. Gesture control enables natural human interaction with robotic arms.",real_world_case:"Used in assistive robotics, teleoperation systems, and industrial manipulators.",concept:"Hand tilt angles are mapped to servo angles for corresponding arm joints.",working_principle:`1. MPU6050 reads hand orientation.
2. ESP32 maps angles to servos.
3. Robotic arm mirrors hand motion.`,pin_config:{esp32:[{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22"},{module:"Servo Base",pinName:"Signal",mcuPin:"GPIO25"},{module:"Servo Shoulder",pinName:"Signal",mcuPin:"GPIO26"},{module:"Servo Elbow",pinName:"Signal",mcuPin:"GPIO27"}]},code:`/* Project 232: Gesture Robotic Arm */
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Servo.h>

Adafruit_MPU6050 mpu;
Servo baseServo, shoulderServo, elbowServo;

void setup() {
  baseServo.attach(25);
  shoulderServo.attach(26);
  elbowServo.attach(27);

  if (!mpu.begin()) {
    while (1);
  }
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  int baseAngle = map(a.acceleration.y * 10, -90, 90, 0, 180);
  int shoulderAngle = map(a.acceleration.x * 10, -90, 90, 0, 180);
  int elbowAngle = map(a.acceleration.z * 10, -90, 90, 0, 180);

  baseServo.write(constrain(baseAngle, 0, 180));
  shoulderServo.write(constrain(shoulderAngle, 0, 180));
  elbowServo.write(constrain(elbowAngle, 0, 180));

  delay(30);
}`,testing_output:"Robotic arm follows hand motion smoothly.",common_errors:"Servo jitter, sensor noise.",improvements:"Add smoothing filters, wireless control.",mini_challenge:"Add gesture-based gripper control.",advantages:"Natural control.",disadvantages:"Requires steady hand.",components:["ESP32","MPU6050","Servo Motors"],industrial_use:"Teleoperation systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,700"},{id:232,title:"Gesture Robotic Arm (Basic)",level:"Intermediate",description:"A gesture-controlled robotic arm using ESP32 and MPU6050 that mimics hand orientation in real time.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"7–8 Hours",tech:["ESP32","MPU6050","Servo Motors"],problem_statement:"Traditional joystick control is unintuitive. Gesture control enables natural human interaction with robotic arms.",real_world_case:"Used in assistive robotics, teleoperation systems, and industrial manipulators.",concept:"Hand tilt angles are mapped to servo angles for corresponding arm joints.",working_principle:`1. MPU6050 reads hand orientation.
2. ESP32 maps angles to servos.
3. Robotic arm mirrors hand motion.`,pin_config:{esp32:[{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22"},{module:"Servo Base",pinName:"Signal",mcuPin:"GPIO25"},{module:"Servo Shoulder",pinName:"Signal",mcuPin:"GPIO26"},{module:"Servo Elbow",pinName:"Signal",mcuPin:"GPIO27"}]},code:`/* Project 232: Gesture Robotic Arm */
#include <Wire.h>
#include <Adafruit_MPU6050.h>
#include <Servo.h>

Adafruit_MPU6050 mpu;
Servo baseServo, shoulderServo, elbowServo;

void setup() {
  baseServo.attach(25);
  shoulderServo.attach(26);
  elbowServo.attach(27);

  if (!mpu.begin()) {
    while (1);
  }
}

void loop() {
  sensors_event_t a, g, t;
  mpu.getEvent(&a, &g, &t);

  int baseAngle = map(a.acceleration.y * 10, -90, 90, 0, 180);
  int shoulderAngle = map(a.acceleration.x * 10, -90, 90, 0, 180);
  int elbowAngle = map(a.acceleration.z * 10, -90, 90, 0, 180);

  baseServo.write(constrain(baseAngle, 0, 180));
  shoulderServo.write(constrain(shoulderAngle, 0, 180));
  elbowServo.write(constrain(elbowAngle, 0, 180));

  delay(30);
}`,testing_output:"Robotic arm follows hand motion smoothly.",common_errors:"Servo jitter, sensor noise.",improvements:"Add smoothing filters, wireless control.",mini_challenge:"Add gesture-based gripper control.",advantages:"Natural control.",disadvantages:"Requires steady hand.",components:["ESP32","MPU6050","Servo Motors"],industrial_use:"Teleoperation systems.",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,700"},{id:233,title:"RFID Guided Robot",level:"Intermediate",description:"An ESP32-based robot that navigates predefined routes by reading RFID tags placed along its path.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"7–8 Hours",tech:["ESP32","RFID RC522","L298N Motor Driver","DC Motors"],problem_statement:"Line-following robots fail in dusty or worn environments. RFID guidance provides reliable navigation using digital checkpoints.",real_world_case:"Used in warehouses, manufacturing AGVs, hospital delivery robots.",concept:"RFID tags placed at junctions contain unique IDs mapped to movement commands like left, right, stop.",working_principle:`1. Robot moves forward continuously.
2. RFID reader scans floor tags.
3. ESP32 reads tag UID.
4. UID mapped to navigation command.
5. Robot executes command.`,pin_config:{esp32:[{module:"RFID RC522",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"RFID RC522",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"RFID RC522",pinName:"SDA",mcuPin:"GPIO5",direction:"SPI_SS"},{module:"RFID RC522",pinName:"SCK",mcuPin:"GPIO18",direction:"SPI_CLK"},{module:"RFID RC522",pinName:"MOSI",mcuPin:"GPIO23",direction:"SPI_MOSI"},{module:"RFID RC522",pinName:"MISO",mcuPin:"GPIO19",direction:"SPI_MISO"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12"}]},code:`/* Project 233: RFID Guided Robot */
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 5
#define RST_PIN 22

#define L1 26
#define L2 27
#define R1 14
#define R2 12

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  SPI.begin();
  rfid.PCD_Init();

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void forward() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}

void leftTurn() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  delay(400);
}

void rightTurn() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  delay(400);
}

void loop() {
  forward();

  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;

  byte id = rfid.uid.uidByte[0];

  if (id == 0xA1) leftTurn();
  else if (id == 0xB2) rightTurn();
}`,testing_output:"Robot turns based on RFID tag UID.",common_errors:"Incorrect UID mapping, weak RFID placement.",improvements:"Add path memory, speed profiling.",mini_challenge:"Create multi-step route using tag sequence.",advantages:"Highly reliable navigation.",disadvantages:"Requires infrastructure setup.",components:["ESP32","RFID RC522","L298N","DC Motors"],industrial_use:"Automated guided vehicles (AGV).",author_name:"NISHANTH",status:"Published",bom_cost:"₹3,600"},{id:234,title:"Wi-Fi Controlled Robot Car",level:"Intermediate",description:"A Wi-Fi controlled robot car using ESP32 that responds to commands from a web interface over a local network.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"6–7 Hours",tech:["ESP32","Wi-Fi","L298N Motor Driver","DC Motors"],concept:"ESP32 hosts a web server that receives HTTP commands and translates them into motor actions.",pin_config:{esp32:[{module:"L298N",pinName:"IN1",mcuPin:"GPIO26"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12"}]},code:`/* Project 234: Wi-Fi Controlled Robot Car */
#include <WiFi.h>
#include <WebServer.h>

#define L1 26
#define L2 27
#define R1 14
#define R2 12

WebServer server(80);

void forward() {
  digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
  digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
}

void stopCar() {
  digitalWrite(L1, LOW); digitalWrite(L2, LOW);
  digitalWrite(R1, LOW); digitalWrite(R2, LOW);
}

void setup() {
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(500);

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);

  server.on("/forward", forward);
  server.on("/stop", stopCar);
  server.begin();
}

void loop() {
  server.handleClient();
}`,advantages:"Longer range than Bluetooth.",improvements:"Add authentication, camera feed.",author_name:"NISHANTH",status:"Published",bom_cost:"₹2,800"},{id:235,title:"Smart Campus Patrol Bot (Simple)",level:"Intermediate",description:"A patrol robot that autonomously navigates a campus area, detects obstacles, and raises alerts for unusual activity.",category:"Robotics",sub_category:"Robotics (221-235)",estimatedTime:"8 Hours",tech:["ESP32","Ultrasonic Sensor","PIR Sensor","Buzzer","L298N"],concept:"The robot follows a patrol route and triggers alerts when motion is detected during patrol.",working_principle:`1. Robot patrols predefined route.
2. Ultrasonic avoids obstacles.
3. PIR detects human motion.
4. Alert is triggered.`,pin_config:{esp32:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"GPIO18"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"GPIO19"},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO34"},{module:"Buzzer",pinName:"Signal",mcuPin:"GPIO25"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12"}]},code:`/* Project 235: Smart Campus Patrol Bot */
#define PIR 34
#define BUZZER 25
#define TRIG 18
#define ECHO 19

#define L1 26
#define L2 27
#define R1 14
#define R2 12

long getDistance() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  pinMode(L1, OUTPUT); pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT); pinMode(R2, OUTPUT);
}

void loop() {
  long dist = getDistance();
  int motion = digitalRead(PIR);

  if (motion == HIGH) {
    digitalWrite(BUZZER, HIGH);
  } else {
    digitalWrite(BUZZER, LOW);
  }

  if (dist < 30) {
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
    delay(400);
  } else {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  }
}`,industrial_use:"Campus and facility security prototypes.",author_name:"NISHANTH",status:"Published",bom_cost:"₹4,100"},{id:301,title:"Face Detection Door Lock using Raspberry Pi",level:"AI + Embedded (Foundation)",description:"A vision-based door locking system using Raspberry Pi and OpenCV that unlocks the door when a human face is detected in real time.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Conventional door locks using keys, RFID, or PINs are vulnerable to loss, duplication, and misuse. A vision-based access system improves security by ensuring a real human presence before unlocking.",real_world_case:["Hostel laboratory access","Office cabins","Server room entry","Prototype biometric security systems"],ai_concept:{type:"Computer Vision",model:"Haar Cascade Face Detector",learning:"Pre-trained (Feature-based ML)",reason:"Lightweight, fast, and suitable for Raspberry Pi without GPU acceleration"},hardware:{processor:"Raspberry Pi 3 / 4",camera:"Pi Camera v2 / USB Webcam",actuator:"Relay Module + Solenoid Lock / Servo Lock",feedback:"Buzzer (optional)"},working_principle:["Camera captures live video frames","Frames are converted to grayscale","Haar cascade scans image for facial features","If a face is detected, GPIO output is activated","Relay unlocks the door for a fixed duration"],pin_config:{raspberry_pi:[{module:"Relay",pinName:"VCC",pin:"5V",direction:"Power"},{module:"Relay",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Relay",pinName:"IN",pin:"GPIO17",direction:"Output"},{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO27",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV","RPi.GPIO"],code:{language:"Python",file:"face_lock.py",content:`import cv2
import RPi.GPIO as GPIO
import time

LOCK_PIN = 17
BUZZER = 27

GPIO.setmode(GPIO.BCM)
GPIO.setup(LOCK_PIN, GPIO.OUT)
GPIO.setup(BUZZER, GPIO.OUT)
GPIO.output(LOCK_PIN, GPIO.LOW)
GPIO.output(BUZZER, GPIO.LOW)

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.2, 5, minSize=(80,80))

    if len(faces) > 0:
        GPIO.output(LOCK_PIN, GPIO.HIGH)
        GPIO.output(BUZZER, GPIO.HIGH)
        time.sleep(3)
        GPIO.output(LOCK_PIN, GPIO.LOW)
        GPIO.output(BUZZER, GPIO.LOW)

    cv2.imshow('Face Detection', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"When a human face appears in front of the camera, the relay activates and unlocks the door for 3 seconds.",common_errors:["Using BOARD numbering instead of BCM","Poor lighting conditions","Relay powered from GPIO pin","Incorrect camera index"],improvements:["Upgrade to face recognition for identity verification","Add access logging","Implement anti-spoof detection","Mobile alert integration"],mini_challenge:"Modify the system to unlock only between specific time intervals.",estimated_cost_india:"₹3,200 – ₹3,800",author_name:"NISHANTH",status:"Published"},{id:301,title:"Face Detection Door Lock using Raspberry Pi",level:"AI + Embedded (Foundation)",description:"A vision-based door locking system using Raspberry Pi and OpenCV that unlocks the door when a human face is detected in real time.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Conventional door locks using keys, RFID, or PINs are vulnerable to loss, duplication, and misuse. A vision-based access system improves security by ensuring a real human presence before unlocking.",real_world_case:["Hostel laboratory access","Office cabins","Server room entry","Prototype biometric security systems"],ai_concept:{type:"Computer Vision",model:"Haar Cascade Face Detector",learning:"Pre-trained (Feature-based ML)",reason:"Lightweight, fast, and suitable for Raspberry Pi without GPU acceleration"},hardware:{processor:"Raspberry Pi 3 / 4",camera:"Pi Camera v2 / USB Webcam",actuator:"Relay Module + Solenoid Lock / Servo Lock",feedback:"Buzzer (optional)"},working_principle:["Camera captures live video frames","Frames are converted to grayscale","Haar cascade scans image for facial features","If a face is detected, GPIO output is activated","Relay unlocks the door for a fixed duration"],pin_config:{raspberry_pi:[{module:"Relay",pinName:"VCC",pin:"5V",direction:"Power"},{module:"Relay",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Relay",pinName:"IN",pin:"GPIO17",direction:"Output"},{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO27",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV","RPi.GPIO"],code:{language:"Python",file:"face_lock.py",content:`import cv2
import RPi.GPIO as GPIO
import time

LOCK_PIN = 17
BUZZER = 27

GPIO.setmode(GPIO.BCM)
GPIO.setup(LOCK_PIN, GPIO.OUT)
GPIO.setup(BUZZER, GPIO.OUT)
GPIO.output(LOCK_PIN, GPIO.LOW)
GPIO.output(BUZZER, GPIO.LOW)

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.2, 5, minSize=(80,80))

    if len(faces) > 0:
        GPIO.output(LOCK_PIN, GPIO.HIGH)
        GPIO.output(BUZZER, GPIO.HIGH)
        time.sleep(3)
        GPIO.output(LOCK_PIN, GPIO.LOW)
        GPIO.output(BUZZER, GPIO.LOW)

    cv2.imshow('Face Detection', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"When a human face appears in front of the camera, the relay activates and unlocks the door for 3 seconds.",common_errors:["Using BOARD numbering instead of BCM","Poor lighting conditions","Relay powered from GPIO pin","Incorrect camera index"],improvements:["Upgrade to face recognition for identity verification","Add access logging","Implement anti-spoof detection","Mobile alert integration"],mini_challenge:"Modify the system to unlock only between specific time intervals.",estimated_cost_india:"₹3,200 – ₹3,800",author_name:"NISHANTH",status:"Published"},{id:303,title:"Object Detection with OpenCV and Raspberry Pi",level:"AI + Embedded (Intermediate)",description:"A real-time object detection system using Raspberry Pi and OpenCV DNN module to identify common objects from live camera feed.",category:"AI + Embedded + Machine Learning",estimatedTime:"9–11 Hours",problem_statement:"Conventional CCTV systems only record video without understanding the scene. Object detection enables cameras to identify and react to objects such as people, vehicles, and everyday items.",real_world_case:["Smart surveillance systems","Retail analytics","Traffic monitoring","Robotic vision systems"],ai_concept:{type:"Computer Vision",model:"MobileNet-SSD",learning:"Pre-trained deep learning model",dataset:"COCO / PASCAL VOC",reason:"Lightweight CNN suitable for Raspberry Pi edge inference"},hardware:{processor:"Raspberry Pi 3 / 4",camera:"Pi Camera v2 / USB Webcam",display:"HDMI Monitor (optional)"},working_principle:["Camera captures live video frames","Frames resized and normalized","DNN model performs forward inference","Objects detected with confidence scores","Bounding boxes drawn on output frame"],pin_config:{raspberry_pi:[{module:"Camera",pinName:"CSI",pin:"CSI Port",direction:"Data"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV (with DNN module)","NumPy"],code:{language:"Python",file:"object_detection.py",content:`import cv2
import numpy as np

net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet_iter_73000.caffemodel')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    blob = cv2.dnn.blobFromImage(frame, 0.007843, (300,300), 127.5)
    net.setInput(blob)
    detections = net.forward()

    for i in range(detections.shape[2]):
        confidence = detections[0,0,i,2]
        if confidence > 0.6:
            box = detections[0,0,i,3:7] * np.array([frame.shape[1], frame.shape[0], frame.shape[1], frame.shape[0]])
            (x1, y1, x2, y2) = box.astype("int")
            cv2.rectangle(frame, (x1,y1), (x2,y2), (0,255,0), 2)

    cv2.imshow('Object Detection', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()`},testing_output:"Detected objects such as persons and bottles are highlighted with bounding boxes in real time.",common_errors:["Missing model files","Low FPS due to high resolution","Incorrect OpenCV installation"],improvements:["Use TensorFlow Lite for better performance","Add object-based alerts","Stream detection results to cloud"],mini_challenge:"Count the number of people detected in each frame.",estimated_cost_india:"₹3,500 – ₹4,000",author_name:"NISHANTH",status:"Published"},{id:304,title:"Smart Attendance System using Face Recognition",level:"AI + Embedded (Intermediate)",description:"An automated attendance system that recognizes registered faces using Raspberry Pi and marks attendance without human intervention.",category:"AI + Embedded + Machine Learning",estimatedTime:"10–12 Hours",problem_statement:"Manual attendance systems are time-consuming and prone to proxy attendance. Face recognition automates attendance while improving accuracy and security.",real_world_case:["Schools and colleges","Corporate offices","Training institutes"],ai_concept:{type:"Face Recognition",method:"Face embeddings and distance matching",library:"face_recognition (dlib-based)",learning:"Feature-based deep learning"},hardware:{processor:"Raspberry Pi 4",camera:"Pi Camera / USB Webcam",storage:"SD Card"},working_principle:["Register authorized users by capturing face images","Generate face embeddings and store them","Live camera captures classroom frames","Detected faces compared with stored embeddings","If match found, attendance recorded"],pin_config:{raspberry_pi:[{module:"Camera",pinName:"CSI",pin:"CSI Port",direction:"Data"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV","face_recognition","NumPy"],code:{language:"Python",file:"attendance.py",content:`import face_recognition
import cv2
import csv
from datetime import datetime

known_image = face_recognition.load_image_file('student.jpg')
known_encoding = face_recognition.face_encodings(known_image)[0]

known_faces = [known_encoding]
names = ['Student1']

cap = cv2.VideoCapture(0)

with open('attendance.csv', 'a', newline='') as f:
    writer = csv.writer(f)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        locations = face_recognition.face_locations(rgb)
        encodings = face_recognition.face_encodings(rgb, locations)

        for encoding in encodings:
            matches = face_recognition.compare_faces(known_faces, encoding)
            if True in matches:
                time_now = datetime.now().strftime('%H:%M:%S')
                writer.writerow(['Student1', time_now])
                cap.release()
                cv2.destroyAllWindows()
                exit()

        cv2.imshow('Attendance System', frame)
        if cv2.waitKey(1) & 0xFF == 27:
            break

cap.release()
cv2.destroyAllWindows()`},testing_output:"When a registered face is detected, attendance is logged in a CSV file.",common_errors:["Poor quality registration images","Lighting variations","High CPU usage on Raspberry Pi"],improvements:["Support multiple students","Database-backed attendance","Anti-spoofing detection"],mini_challenge:"Prevent duplicate attendance entries for the same person.",estimated_cost_india:"₹3,800 – ₹4,500",author_name:"NISHANTH",status:"Published"},{id:305,title:"Gesture Controlled Robot using MPU6050",level:"AI + Embedded (Intermediate)",description:"A gesture-controlled mobile robot where hand tilt data from an MPU6050 sensor is mapped to robot movement using an ESP32 microcontroller.",category:"AI + Embedded + Machine Learning",estimatedTime:"7–9 Hours",problem_statement:"Conventional remote controllers are unintuitive and restrictive. Gesture-based control enables natural human–machine interaction, especially for assistive and teleoperation systems.",real_world_case:["Assistive robotics","Drone and rover control","Virtual reality controllers","Human–robot interaction research"],ai_concept:{type:"Sensor-based Intelligence",method:"Orientation estimation using accelerometer data",learning:"Rule-based mapping (non-ML baseline)",note:"Machine learning can be added later for gesture classification"},hardware:{controller:"ESP32",sensor:"MPU6050 (Accelerometer + Gyroscope)",motor_driver:"L298N",actuators:"DC Motors (2 or 4 wheel robot)"},working_principle:["MPU6050 measures hand acceleration along X and Y axes","ESP32 reads sensor data via I2C","Tilt direction calculated from acceleration values","Direction mapped to motor control signals","Robot moves according to hand gesture"],pin_config:{esp32:[{module:"MPU6050",pinName:"VCC",mcuPin:"3V3",direction:"Power"},{module:"MPU6050",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"MPU6050",pinName:"SDA",mcuPin:"GPIO21",direction:"I2C"},{module:"MPU6050",pinName:"SCL",mcuPin:"GPIO22",direction:"I2C"},{module:"L298N",pinName:"IN1",mcuPin:"GPIO26",direction:"Output"},{module:"L298N",pinName:"IN2",mcuPin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",mcuPin:"GPIO14",direction:"Output"},{module:"L298N",pinName:"IN4",mcuPin:"GPIO12",direction:"Output"}]},software_stack:["ESP32 Arduino Core","Wire (I2C)","MPU6050 Library"],code:{language:"C++ (Arduino)",file:"gesture_robot.ino",content:`#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

#define L1 26
#define L2 27
#define R1 14
#define R2 12

void setup() {
  Wire.begin();
  mpu.initialize();

  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
}

void loop() {
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);

  if (ay > 8000) {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (ay < -8000) {
    digitalWrite(L1, LOW); digitalWrite(L2, HIGH);
    digitalWrite(R1, LOW); digitalWrite(R2, HIGH);
  } else if (ax > 8000) {
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, HIGH); digitalWrite(R2, LOW);
  } else if (ax < -8000) {
    digitalWrite(L1, HIGH); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  } else {
    digitalWrite(L1, LOW); digitalWrite(L2, LOW);
    digitalWrite(R1, LOW); digitalWrite(R2, LOW);
  }
}`},testing_output:"Robot moves forward, backward, left, or right based on hand tilt direction.",common_errors:["Improper MPU6050 calibration","Noise causing unstable movement","Loose I2C connections","Insufficient motor power supply"],improvements:["Add complementary or Kalman filter","Wireless transmission of gesture data","ML-based gesture classification"],mini_challenge:"Recognize at least five distinct hand gestures reliably.",estimated_cost_india:"₹2,500 – ₹3,200",author_name:"NISHANTH",status:"Published"},{id:306,title:"AI Voice Assistant using Raspberry Pi",level:"AI + Embedded (Intermediate)",description:"A Raspberry Pi-based AI voice assistant capable of understanding spoken commands and executing system-level actions with voice feedback.",category:"AI + Embedded + Machine Learning",estimatedTime:"10–12 Hours",problem_statement:"Manual interaction with computers and smart devices is inefficient. Voice assistants enable hands-free, natural interaction using speech recognition and intent processing.",real_world_case:["Smart speakers","Home automation hubs","Assistive technologies","Human–computer interaction systems"],ai_concept:{type:"Speech Recognition + NLP",speech_to_text:"Google Speech API (online)",text_to_speech:"pyttsx3 (offline)",intent_handling:"Rule-based NLP"},hardware:{processor:"Raspberry Pi 4",input:"USB Microphone",output:"Speaker"},working_principle:["Microphone captures user speech","Speech converted to text using AI","Text analyzed to identify intent","Corresponding system command executed","Voice response generated"],pin_config:{raspberry_pi:[{module:"USB Microphone",pinName:"USB",pin:"USB Port",direction:"Data"},{module:"Speaker",pinName:"Audio",pin:"Audio Jack / USB",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","SpeechRecognition","pyttsx3","OS Libraries"],code:{language:"Python",file:"voice_assistant.py",content:`import speech_recognition as sr
import pyttsx3
import os

engine = pyttsx3.init()
recognizer = sr.Recognizer()

with sr.Microphone() as source:
    engine.say('Hello, how can I help you?')
    engine.runAndWait()
    audio = recognizer.listen(source)

try:
    command = recognizer.recognize_google(audio).lower()

    if 'time' in command:
        os.system('date')
        engine.say('Here is the current time')
    elif 'open browser' in command:
        os.system('chromium-browser')
        engine.say('Opening browser')
    else:
        engine.say('Command not recognized')
except sr.UnknownValueError:
    engine.say('Sorry, I did not understand')
except sr.RequestError:
    engine.say('Speech service unavailable')

engine.runAndWait()`},testing_output:"Voice commands are recognized and corresponding actions are executed with spoken feedback.",common_errors:["Microphone not detected","High background noise","Internet connectivity issues","Audio driver misconfiguration"],improvements:["Offline speech recognition using Vosk","Wake-word detection","IoT device control integration"],mini_challenge:"Use voice commands to control an ESP32-based IoT device.",estimated_cost_india:"₹3,500 – ₹4,200",author_name:"NISHANTH",status:"Published"},{id:306,title:"AI Voice Assistant using Raspberry Pi",level:"AI + Embedded (Intermediate)",description:"A Raspberry Pi-based AI voice assistant capable of understanding spoken commands and executing system-level actions with voice feedback.",category:"AI + Embedded + Machine Learning",estimatedTime:"10–12 Hours",problem_statement:"Manual interaction with computers and smart devices is inefficient. Voice assistants enable hands-free, natural interaction using speech recognition and intent processing.",real_world_case:["Smart speakers","Home automation hubs","Assistive technologies","Human–computer interaction systems"],ai_concept:{type:"Speech Recognition + NLP",speech_to_text:"Google Speech API (online)",text_to_speech:"pyttsx3 (offline)",intent_handling:"Rule-based NLP"},hardware:{processor:"Raspberry Pi 4",input:"USB Microphone",output:"Speaker"},working_principle:["Microphone captures user speech","Speech converted to text using AI","Text analyzed to identify intent","Corresponding system command executed","Voice response generated"],pin_config:{raspberry_pi:[{module:"USB Microphone",pinName:"USB",pin:"USB Port",direction:"Data"},{module:"Speaker",pinName:"Audio",pin:"Audio Jack / USB",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","SpeechRecognition","pyttsx3","OS Libraries"],code:{language:"Python",file:"voice_assistant.py",content:`import speech_recognition as sr
import pyttsx3
import os

engine = pyttsx3.init()
recognizer = sr.Recognizer()

with sr.Microphone() as source:
    engine.say('Hello, how can I help you?')
    engine.runAndWait()
    audio = recognizer.listen(source)

try:
    command = recognizer.recognize_google(audio).lower()

    if 'time' in command:
        os.system('date')
        engine.say('Here is the current time')
    elif 'open browser' in command:
        os.system('chromium-browser')
        engine.say('Opening browser')
    else:
        engine.say('Command not recognized')
except sr.UnknownValueError:
    engine.say('Sorry, I did not understand')
except sr.RequestError:
    engine.say('Speech service unavailable')

engine.runAndWait()`},testing_output:"Voice commands are recognized and corresponding actions are executed with spoken feedback.",common_errors:["Microphone not detected","High background noise","Internet connectivity issues","Audio driver misconfiguration"],improvements:["Offline speech recognition using Vosk","Wake-word detection","IoT device control integration"],mini_challenge:"Use voice commands to control an ESP32-based IoT device.",estimated_cost_india:"₹3,500 – ₹4,200",author_name:"NISHANTH",status:"Published"},{id:308,title:"Intruder Detection using AI Camera",level:"AI + Embedded (Intermediate)",description:"An AI-powered intruder detection system that identifies human presence using object detection and triggers alerts when intrusion is detected.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Traditional motion sensors generate frequent false alarms. AI-based detection improves accuracy by identifying humans instead of generic motion.",real_world_case:["Home security systems","Office surveillance","Warehouse monitoring","Restricted-area protection"],ai_concept:{type:"Object Detection",model:"MobileNet-SSD",target_class:"Person",learning:"Pre-trained deep learning model"},hardware:{processor:"Raspberry Pi 4",camera:"Pi Camera / USB Webcam",alert:"Buzzer / Notification module"},working_principle:["Camera captures live video feed","Deep learning model detects objects","Person class filtered from detections","If person detected → alert triggered"],pin_config:{raspberry_pi:[{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO18",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV (DNN module)","NumPy","RPi.GPIO"],code:{language:"Python",file:"intruder_detection.py",content:`import cv2
import RPi.GPIO as GPIO
import numpy as np

BUZZER = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(BUZZER, GPIO.OUT)
GPIO.output(BUZZER, GPIO.LOW)

net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet_iter_73000.caffemodel')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    blob = cv2.dnn.blobFromImage(frame, 0.007843, (300,300), 127.5)
    net.setInput(blob)
    detections = net.forward()

    person_detected = False

    for i in range(detections.shape[2]):
        confidence = detections[0,0,i,2]
        class_id = int(detections[0,0,i,1])

        if class_id == 15 and confidence > 0.6:
            person_detected = True

    if person_detected:
        GPIO.output(BUZZER, GPIO.HIGH)
    else:
        GPIO.output(BUZZER, GPIO.LOW)

    cv2.imshow('Intruder Detection', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"Human detected in camera view triggers buzzer alert.",common_errors:["Incorrect class ID for person","Low FPS on Raspberry Pi","Insufficient lighting at night"],improvements:["Add night-vision camera","Send cloud or mobile alerts","Combine with PIR sensor for power efficiency"],mini_challenge:"Trigger alert only if a person is detected for more than 3 seconds.",estimated_cost_india:"₹3,800 – ₹4,800",author_name:"NISHANTH",status:"Published"},{id:308,title:"Intruder Detection using AI Camera",level:"AI + Embedded (Intermediate)",description:"An AI-powered intruder detection system that identifies human presence using object detection and triggers alerts when intrusion is detected.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Traditional motion sensors generate frequent false alarms. AI-based detection improves accuracy by identifying humans instead of generic motion.",real_world_case:["Home security systems","Office surveillance","Warehouse monitoring","Restricted-area protection"],ai_concept:{type:"Object Detection",model:"MobileNet-SSD",target_class:"Person",learning:"Pre-trained deep learning model"},hardware:{processor:"Raspberry Pi 4",camera:"Pi Camera / USB Webcam",alert:"Buzzer / Notification module"},working_principle:["Camera captures live video feed","Deep learning model detects objects","Person class filtered from detections","If person detected → alert triggered"],pin_config:{raspberry_pi:[{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO18",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV (DNN module)","NumPy","RPi.GPIO"],code:{language:"Python",file:"intruder_detection.py",content:`import cv2
import RPi.GPIO as GPIO
import numpy as np

BUZZER = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(BUZZER, GPIO.OUT)
GPIO.output(BUZZER, GPIO.LOW)

net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet_iter_73000.caffemodel')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    blob = cv2.dnn.blobFromImage(frame, 0.007843, (300,300), 127.5)
    net.setInput(blob)
    detections = net.forward()

    person_detected = False

    for i in range(detections.shape[2]):
        confidence = detections[0,0,i,2]
        class_id = int(detections[0,0,i,1])

        if class_id == 15 and confidence > 0.6:
            person_detected = True

    if person_detected:
        GPIO.output(BUZZER, GPIO.HIGH)
    else:
        GPIO.output(BUZZER, GPIO.LOW)

    cv2.imshow('Intruder Detection', frame)
    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"Human detected in camera view triggers buzzer alert.",common_errors:["Incorrect class ID for person","Low FPS on Raspberry Pi","Insufficient lighting at night"],improvements:["Add night-vision camera","Send cloud or mobile alerts","Combine with PIR sensor for power efficiency"],mini_challenge:"Trigger alert only if a person is detected for more than 3 seconds.",estimated_cost_india:"₹3,800 – ₹4,800",author_name:"NISHANTH",status:"Published"},{id:310,title:"Smart Security Camera with Motion Detection",level:"AI + Embedded (Intermediate)",description:"A smart surveillance camera system that detects motion using computer vision and triggers alerts or recording only when activity is detected.",category:"AI + Embedded + Machine Learning",estimatedTime:"6–8 Hours",problem_statement:"Continuous video recording wastes storage and power. Motion-triggered surveillance improves efficiency and relevance of captured footage.",real_world_case:["Home CCTV systems","Office surveillance","Retail shop monitoring"],ai_concept:{type:"Computer Vision",method:"Frame differencing and contour analysis",learning:"Classical vision (non-ML baseline)",note:"Can be upgraded to AI-based human detection"},hardware:{processor:"Raspberry Pi 3 / 4",camera:"Pi Camera / USB Webcam",alert:"Buzzer / Notification module"},working_principle:["Camera captures continuous frames","Difference between consecutive frames calculated","Significant pixel changes indicate motion","Alert or recording triggered on motion detection"],pin_config:{raspberry_pi:[{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO23",direction:"Output"}]},software_stack:["Raspberry Pi OS","Python 3","OpenCV","RPi.GPIO"],code:{language:"Python",file:"motion_camera.py",content:`import cv2
import RPi.GPIO as GPIO

BUZZER = 23
GPIO.setmode(GPIO.BCM)
GPIO.setup(BUZZER, GPIO.OUT)

cap = cv2.VideoCapture(0)
ret, frame1 = cap.read()
ret, frame2 = cap.read()

while True:
    diff = cv2.absdiff(frame1, frame2)
    gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5,5), 0)
    _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    motion = False
    for contour in contours:
        if cv2.contourArea(contour) > 3000:
            motion = True
            break

    GPIO.output(BUZZER, GPIO.HIGH if motion else GPIO.LOW)

    cv2.imshow('Security Camera', frame1)
    frame1 = frame2
    ret, frame2 = cap.read()

    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"Motion in camera view triggers buzzer alert and visual indication.",common_errors:["Lighting changes causing false motion","Incorrect contour area threshold","Camera noise in low light"],improvements:["Add AI-based human detection","Cloud-based notifications","Night vision support"],mini_challenge:"Trigger recording only if motion persists for more than 3 seconds.",estimated_cost_india:"₹3,000 – ₹3,800",author_name:"NISHANTH",status:"Published"},{id:311,title:"Voice Recognition using Arduino + Bluetooth",level:"AI + Embedded (Intermediate)",description:"A voice-controlled embedded system where spoken commands are processed on a smartphone and transmitted to Arduino via Bluetooth for device control.",category:"AI + Embedded + Machine Learning",estimatedTime:"5–6 Hours",problem_statement:"Microcontrollers lack the processing power for speech recognition. Offloading voice processing to a smartphone enables voice control without heavy hardware.",real_world_case:["Voice-controlled robots","Assistive devices","Hands-free automation systems"],ai_concept:{type:"Speech Recognition",processing_location:"Smartphone (Cloud / On-device AI)",embedded_role:"Command decoding and execution",note:"Arduino does not perform AI inference"},hardware:{controller:"Arduino Uno",communication:"HC-05 Bluetooth Module",output:"Relay / Motor / LED"},working_principle:["User speaks command into smartphone","Voice recognition app converts speech to text","Command sent via Bluetooth","Arduino reads serial data","Output device controlled accordingly"],pin_config:{arduino:[{module:"HC-05",pinName:"VCC",pin:"5V",direction:"Power"},{module:"HC-05",pinName:"GND",pin:"GND",direction:"Ground"},{module:"HC-05",pinName:"TXD",pin:"D2",direction:"Input"},{module:"HC-05",pinName:"RXD",pin:"D3",direction:"Output"},{module:"Relay",pinName:"VCC",pin:"5V",direction:"Power"},{module:"Relay",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Relay",pinName:"IN",pin:"D8",direction:"Output"}]},software_stack:["Arduino IDE","SoftwareSerial","Android Voice Control App"],code:{language:"C++ (Arduino)",file:"voice_bt.ino",content:`#include <SoftwareSerial.h>

SoftwareSerial bt(2, 3);
#define RELAY 8

void setup() {
  pinMode(RELAY, OUTPUT);
  digitalWrite(RELAY, LOW);
  bt.begin(9600);
}

void loop() {
  if (bt.available()) {
    char cmd = bt.read();
    if (cmd == '1') digitalWrite(RELAY, HIGH);
    if (cmd == '0') digitalWrite(RELAY, LOW);
  }
}`},testing_output:"Speaking commands like ON or OFF controls the connected appliance via Bluetooth.",common_errors:["RX-TX pin mismatch","Bluetooth pairing failure","Voltage mismatch on RX pin"],improvements:["Use ESP32 for onboard speech processing","Secure command authentication","Multiple device control"],mini_challenge:"Add three different voice commands for multiple outputs.",estimated_cost_india:"₹600 – ₹900",author_name:"NISHANTH",status:"Published"},{id:312,title:"Number Plate Detection System",level:"AI + Embedded (Intermediate)",description:"An AI-powered system that detects and reads vehicle number plates from images or video using computer vision and OCR techniques.",category:"AI + Embedded + Machine Learning",estimatedTime:"10–12 Hours",problem_statement:"Manual vehicle identification is inefficient and error-prone. Automated number plate detection improves traffic monitoring and access control systems.",real_world_case:["Toll booths","Parking management","Traffic law enforcement","Residential access control"],ai_concept:{type:"Computer Vision + OCR",tasks:["Number Plate Detection","Character Recognition"],model:"Contour-based detection + Tesseract OCR",learning:"Rule-based vision + trained OCR engine"},hardware:{processor:"Raspberry Pi 4 / PC",camera:"USB Webcam / Pi Camera"},working_principle:["Camera captures vehicle image","Image preprocessed and edges detected","Rectangular plate region extracted","OCR reads characters from plate","Vehicle number displayed or stored"],pin_config:{raspberry_pi:[{module:"Camera",pinName:"CSI / USB",pin:"Camera Interface",direction:"Data"}]},software_stack:["Python 3","OpenCV","Tesseract OCR","NumPy"],code:{language:"Python",file:"number_plate.py",content:`import cv2
import pytesseract

img = cv2.imread('car.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blur = cv2.bilateralFilter(gray, 11, 17, 17)
edged = cv2.Canny(blur, 30, 200)

contours, _ = cv2.findContours(edged, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]
plate = None

for c in contours:
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.018 * peri, True)
    if len(approx) == 4:
        plate = approx
        break

if plate is not None:
    mask = cv2.drawContours(img.copy(), [plate], -1, (255,255,255), -1)
    text = pytesseract.image_to_string(mask, config='--psm 8')
    print('Detected Plate:', text)`},testing_output:"Vehicle number plate text is detected and printed from the input image.",common_errors:["Poor image resolution","OCR misreading characters","Improper lighting conditions"],improvements:["Use YOLO for plate detection","Train OCR for Indian plates","Add database integration"],mini_challenge:"Process live video stream instead of static images.",estimated_cost_india:"₹3,500 – ₹4,500",author_name:"NISHANTH",status:"Published"},{id:313,title:"Speech-to-Text Conversion using Raspberry Pi",level:"AI + Embedded (Intermediate)",description:"A speech-to-text system using Raspberry Pi that converts spoken audio into text using AI-based speech recognition engines.",category:"AI + Embedded + Machine Learning",estimatedTime:"6–8 Hours",problem_statement:"Machines cannot naturally understand human speech. Converting speech into text enables voice-driven automation and accessibility solutions.",real_world_case:["Voice assistants","Meeting transcription systems","Voice-controlled IoT devices","Accessibility tools"],ai_concept:{type:"Speech Recognition",models:["Google Speech API (Online)","Vosk (Offline)"],learning:"Pre-trained acoustic + language models"},hardware:{processor:"Raspberry Pi 3 / 4",input:"USB Microphone",output:"Text display / File storage"},working_principle:["Microphone captures audio input","Audio converted into digital signal","Speech recognition model processes audio","Recognized text returned as output","Text stored or displayed"],pin_config:{raspberry_pi:[{module:"USB Microphone",pinName:"USB",pin:"USB Port",direction:"Audio Input"}]},software_stack:["Python 3","SpeechRecognition","PyAudio","Vosk (optional)"],code:{language:"Python",file:"speech_to_text.py",content:`import speech_recognition as sr

r = sr.Recognizer()

with sr.Microphone() as source:
    print('Speak now...')
    audio = r.listen(source)

try:
    text = r.recognize_google(audio)
    print('Recognized Text:', text)
except sr.UnknownValueError:
    print('Could not understand audio')
except sr.RequestError:
    print('Speech service unavailable')`},testing_output:"Spoken sentence is converted into readable text on the screen.",common_errors:["Microphone not detected","High background noise","Internet dependency for online APIs"],improvements:["Offline recognition using Vosk","Noise filtering","Trigger IoT actions from text"],mini_challenge:"Convert speech into commands for controlling GPIO devices.",estimated_cost_india:"₹2,500 – ₹3,500",author_name:"NISHANTH",status:"Published"},{id:314,title:"Mask Detection during COVID-19",level:"AI + Embedded (Intermediate)",description:"A real-time mask detection system using deep learning and a camera to identify whether a person is wearing a face mask.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Manual enforcement of mask usage is inefficient. Automated mask detection helps ensure public safety compliance.",real_world_case:["Hospitals","Airports","Public transport","Office buildings"],ai_concept:{type:"Image Classification",model:"Convolutional Neural Network (CNN)",classes:["Mask","No Mask"],training:"Supervised learning on labeled face images"},hardware:{processor:"Raspberry Pi 4",camera:"USB Webcam / Pi Camera",alert:"Buzzer / Display"},working_principle:["Camera captures face images","Face region detected using Haar Cascade","CNN model classifies mask presence","Result displayed or alert triggered"],pin_config:{raspberry_pi:[{module:"Buzzer",pinName:"IN",pin:"GPIO18",direction:"Output"},{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"}]},software_stack:["Python 3","OpenCV","TensorFlow / Keras","NumPy","RPi.GPIO"],code:{language:"Python",file:"mask_detection.py",content:`import cv2
import numpy as np
from tensorflow.keras.models import load_model

model = load_model('mask_model.h5')
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
labels = ['Mask', 'No Mask']

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    for (x,y,w,h) in faces:
        roi = frame[y:y+h, x:x+w]
        roi = cv2.resize(roi, (128,128)) / 255.0
        roi = roi.reshape(1,128,128,3)
        pred = model.predict(roi)
        label = labels[np.argmax(pred)]
        cv2.putText(frame, label, (x,y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0,255,0), 2)
        cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2)

    cv2.imshow('Mask Detection', frame)
    if cv2.waitKey(1) == 27:
        break

cap.release()
cv2.destroyAllWindows()`},testing_output:"Face detected → mask status displayed in real time.",common_errors:["Incorrect image input size","Poor lighting conditions","Low-quality training dataset"],improvements:["Use TensorFlow Lite for faster inference","Multi-face detection","Cloud-based compliance logging"],mini_challenge:"Trigger an alert only if no-mask is detected for 3 seconds.",estimated_cost_india:"₹3,500 – ₹4,500",author_name:"NISHANTH",status:"Published"},{id:315,title:"Object Tracking Car using OpenCV",level:"AI + Embedded (Advanced Control)",description:"A vision-based robotic car that detects, tracks, and follows a moving object in real time using OpenCV-based computer vision and closed-loop motor control.",category:"AI + Embedded + Machine Learning",estimatedTime:"10–12 Hours",problem_statement:"Traditional robots move blindly or via remote control. Object tracking enables autonomous navigation and real-time interaction with dynamic environments.",real_world_case:["Autonomous delivery robots","Human-following robots","Warehouse automation","Surveillance patrol bots"],ai_concept:{type:"Computer Vision",method:"Object Detection + Tracking",techniques:["HSV color segmentation","Contour detection","Centroid tracking"],learning:"Rule-based vision (no training required)"},hardware:{processor:"Raspberry Pi 4",camera:"USB Webcam / Pi Camera",motor_driver:"L298N",actuators:"DC Motors",controller:"Raspberry Pi GPIO"},working_principle:["Camera captures live video frames","Frame converted from BGR to HSV color space","Target object segmented using HSV threshold","Contours extracted and largest contour selected","Centroid of object calculated","Centroid position compared with frame center","Motor commands generated to correct direction","Robot continuously follows the object"],control_logic:{horizontal_error:"centroid_x - frame_center_x",decisions:["Error < -threshold → turn left","Error > threshold → turn right","Error within threshold → move forward"]},pin_config:{raspberry_pi:[{module:"L298N",pinName:"IN1",pin:"GPIO17",direction:"Output"},{module:"L298N",pinName:"IN2",pin:"GPIO27",direction:"Output"},{module:"L298N",pinName:"IN3",pin:"GPIO22",direction:"Output"},{module:"L298N",pinName:"IN4",pin:"GPIO23",direction:"Output"},{module:"L298N",pinName:"VCC",pin:"12V",direction:"Motor Power"},{module:"L298N",pinName:"GND",pin:"GND",direction:"Ground"}]},software_stack:["Python 3","OpenCV","NumPy","RPi.GPIO"],code:{language:"Python",file:"object_tracking_car.py",content:`import cv2
import numpy as np
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
L1, L2, R1, R2 = 17, 27, 22, 23
for pin in [L1, L2, R1, R2]: GPIO.setup(pin, GPIO.OUT)

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    lower = np.array([25, 150, 50])
    upper = np.array([35, 255, 255])
    mask = cv2.inRange(hsv, lower, upper)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        c = max(contours, key=cv2.contourArea)
        x, y, w, h = cv2.boundingRect(c)
        cx = x + w // 2
        frame_center = frame.shape[1] // 2

        if cx < frame_center - 40:
            GPIO.output(L1, GPIO.LOW); GPIO.output(L2, GPIO.HIGH)
            GPIO.output(R1, GPIO.HIGH); GPIO.output(R2, GPIO.LOW)
        elif cx > frame_center + 40:
            GPIO.output(L1, GPIO.HIGH); GPIO.output(L2, GPIO.LOW)
            GPIO.output(R1, GPIO.LOW); GPIO.output(R2, GPIO.HIGH)
        else:
            GPIO.output(L1, GPIO.HIGH); GPIO.output(L2, GPIO.LOW)
            GPIO.output(R1, GPIO.HIGH); GPIO.output(R2, GPIO.LOW)

    cv2.imshow('Tracking', mask)
    if cv2.waitKey(1) == 27:
        break

cap.release()
GPIO.cleanup()
cv2.destroyAllWindows()`},testing_output:"Robot smoothly follows the colored object while maintaining center alignment.",common_errors:["Incorrect HSV values","Lighting affecting color detection","Motor wiring reversed"],improvements:["Replace color tracking with deep learning","Add distance estimation","PID control for smoother motion"],mini_challenge:"Track a human instead of a colored object.",estimated_cost_india:"₹4,500 – ₹5,500",author_name:"NISHANTH",status:"Published"},{id:316,title:"Automatic Pet Feeder with AI",level:"AI + Embedded (Advanced Automation)",description:"An AI-based pet feeding system that dispenses food only when a pet is detected using camera-based object detection.",category:"AI + Embedded + Machine Learning",estimatedTime:"9–11 Hours",problem_statement:"Conventional feeders dispense food blindly, causing overfeeding and wastage. AI-based feeders ensure food is dispensed only when a pet is present.",real_world_case:["Smart pet care devices","Veterinary clinics","Animal shelters","Home automation products"],ai_concept:{type:"Object Detection",model:"MobileNet-SSD / YOLO",target_classes:["Dog","Cat"],learning:"Pre-trained deep neural network"},hardware:{processor:"Raspberry Pi 4",camera:"USB Webcam / Pi Camera",actuator:"Servo Motor",mechanism:"Food Hopper"},working_principle:["Camera continuously monitors feeding zone","Frames passed to object detection model","Model checks for pet presence","If pet detected → feeding allowed","Servo rotates to dispense fixed quantity","Cooldown timer prevents overfeeding"],pin_config:{raspberry_pi:[{module:"Servo Motor",pinName:"Signal",pin:"GPIO18",direction:"Output"},{module:"Servo Motor",pinName:"VCC",pin:"5V",direction:"Power"},{module:"Servo Motor",pinName:"GND",pin:"GND",direction:"Ground"}]},software_stack:["Python 3","OpenCV","TensorFlow Lite","RPi.GPIO"],code:{language:"Python",file:"pet_feeder_ai.py",content:`import cv2
import time
import RPi.GPIO as GPIO

SERVO = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(SERVO, GPIO.OUT)
pwm = GPIO.PWM(SERVO, 50)
pwm.start(0)

cap = cv2.VideoCapture(0)
last_feed = 0

while True:
    ret, frame = cap.read()
    pet_detected = True  # result from AI model

    if pet_detected and time.time() - last_feed > 30:
        pwm.ChangeDutyCycle(7)
        time.sleep(1)
        pwm.ChangeDutyCycle(2)
        last_feed = time.time()

    if cv2.waitKey(1) == 27:
        break

cap.release()
pwm.stop()
GPIO.cleanup()`},testing_output:"Pet detected → food dispensed once per cooldown cycle.",common_errors:["Servo jitter due to unstable power","False detections","Overfeeding without cooldown"],improvements:["Pet face recognition","Portion control using load cell","Mobile app monitoring"],mini_challenge:"Feed different pets different quantities.",estimated_cost_india:"₹4,000 – ₹5,000",author_name:"NISHANTH",status:"Published"},{id:317,title:"Face Recognition Door Unlock System",level:"AI + Embedded (Advanced Security)",description:"A secure door access system that unlocks only for authorized users using face recognition with deep facial embeddings on Raspberry Pi.",category:"AI + Embedded + Machine Learning",estimatedTime:"12–14 Hours",problem_statement:"Face detection alone cannot guarantee security. Identity verification using facial features is required to prevent unauthorized access.",real_world_case:["Office access control","Research labs","Server rooms","Smart homes"],ai_concept:{type:"Face Recognition",pipeline:["Face detection","Face alignment","Feature extraction","Embedding comparison"],model:"ResNet-based face embedding (dlib)",metric:"Euclidean distance",threshold:"0.45 (tunable)"},security_design:{authentication:"Biometric (Face)",authorization:"Embedding match",anti_false_acceptance:["Distance threshold","Multiple-frame verification"],limitations:["Vulnerable to photo spoofing (without liveness)"]},hardware:{processor:"Raspberry Pi 4",camera:"Pi Camera / USB Webcam",lock:"Solenoid / Relay Lock",alert:"Buzzer"},working_principle:["Authorized user faces are captured and stored","Face embeddings generated and saved","Live camera frame captured","Face detected and encoded","Embedding compared with database","If distance < threshold → unlock door","Else → access denied"],pin_config:{raspberry_pi:[{module:"Relay Lock",pinName:"VCC",pin:"5V",direction:"Power"},{module:"Relay Lock",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Relay Lock",pinName:"IN",pin:"GPIO17",direction:"Output"},{module:"Buzzer",pinName:"VCC",pin:"3.3V",direction:"Power"},{module:"Buzzer",pinName:"GND",pin:"GND",direction:"Ground"},{module:"Buzzer",pinName:"IN",pin:"GPIO27",direction:"Output"}]},software_stack:["Python 3","OpenCV","face_recognition (dlib)","NumPy","RPi.GPIO"],code:{language:"Python",file:"face_unlock_secure.py",content:`import face_recognition
import cv2
import RPi.GPIO as GPIO
import time

LOCK = 17
BUZZER = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(LOCK, GPIO.OUT)
GPIO.setup(BUZZER, GPIO.OUT)
GPIO.output(LOCK, GPIO.LOW)

known_img = face_recognition.load_image_file('owner.jpg')
known_enc = face_recognition.face_encodings(known_img)[0]

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    locations = face_recognition.face_locations(rgb)
    encodings = face_recognition.face_encodings(rgb, locations)

    for enc in encodings:
        dist = face_recognition.face_distance([known_enc], enc)[0]
        if dist < 0.45:
            GPIO.output(LOCK, GPIO.HIGH)
            time.sleep(5)
            GPIO.output(LOCK, GPIO.LOW)
        else:
            GPIO.output(BUZZER, GPIO.HIGH)
            time.sleep(1)
            GPIO.output(BUZZER, GPIO.LOW)

    if cv2.waitKey(1) == 27:
        break

cap.release()
GPIO.cleanup()`},testing_output:"Authorized face unlocks door; unknown face triggers buzzer.",common_errors:["Poor lighting causing false rejection","Improper face alignment","Incorrect threshold value"],improvements:["Liveness detection (blink / depth)","Multiple user database","Cloud access logs","OTP fallback"],mini_challenge:"Implement photo-spoof detection using eye blink.",estimated_cost_india:"₹3,800 – ₹4,800",author_name:"NISHANTH",status:"Published"},{id:318,title:"Smart Mirror with Voice Commands",level:"AI + Embedded (Advanced UX System)",description:"An interactive smart mirror that listens to voice commands, processes intent using NLP, and displays contextual information.",category:"AI + Embedded + Machine Learning",estimatedTime:"12–14 Hours",problem_statement:"Traditional displays require physical interaction. Smart mirrors provide hands-free, ambient information access.",real_world_case:["Smart homes","Hotels","Gyms","Retail displays"],ai_concept:{speech_pipeline:["Speech capture","Speech-to-text","Intent extraction","Response generation"],nlp:"Rule-based intent mapping",tts:"Text-to-Speech"},hardware:{processor:"Raspberry Pi 4",display:"Monitor + Two-way mirror",input:"USB Microphone",output:"Speaker"},working_principle:["Microphone captures voice input","Speech converted to text","Intent extracted from text","Relevant data fetched","Information rendered on mirror UI","Audio response generated"],ui_architecture:{frontend:"Tkinter / HTML",refresh_rate:"1 second",modules:["Clock","Weather","Greeting"]},software_stack:["Python 3","SpeechRecognition","pyttsx3","Tkinter","OS APIs"],code:{language:"Python",file:"smart_mirror_voice.py",content:`import speech_recognition as sr
import pyttsx3
import datetime

engine = pyttsx3.init()
r = sr.Recognizer()

engine.say('Smart mirror ready')
engine.runAndWait()

with sr.Microphone() as source:
    audio = r.listen(source)

try:
    cmd = r.recognize_google(audio).lower()
    if 'time' in cmd:
        now = datetime.datetime.now().strftime('%H:%M')
        engine.say(f'The time is {now}')
    elif 'hello' in cmd:
        engine.say('Good morning. Have a productive day')
    else:
        engine.say('Command not recognized')
except:
    engine.say('Speech recognition failed')

engine.runAndWait()`},testing_output:"Mirror responds verbally and visually to voice commands.",common_errors:["Microphone noise","Speech API latency","Audio feedback loop"],improvements:["Face recognition personalization","Weather & calendar API","Wake-word detection","Gesture interaction"],mini_challenge:"Display personalized greeting using face recognition.",estimated_cost_india:"₹5,000 – ₹6,500",author_name:"NISHANTH",status:"Published"},{id:319,title:"Real-Time Object Counting System",level:"AI + Embedded (Advanced Analytics)",description:"A real-time computer vision system that detects, tracks, and counts objects or people crossing a virtual line using AI-based detection and centroid tracking.",category:"AI + Embedded + Machine Learning",estimatedTime:"8–10 Hours",problem_statement:"Manual counting of people or objects is inaccurate and inefficient. Automated counting enables real-time analytics and informed decision-making.",real_world_case:["Retail footfall analysis","Crowd management","Smart building occupancy","Public transport analytics"],ai_concept:{type:"Object Detection + Tracking",model:"MobileNet-SSD",tracking_logic:"Centroid-based tracking",counting_method:"Virtual line crossing",learning:"Pre-trained deep learning model"},hardware:{processor:"Raspberry Pi 4",camera:"USB Webcam / Pi Camera",output:"HDMI Display / Log File"},working_principle:["Camera captures live video stream","AI model detects objects (person class)","Bounding box centroid computed","Each object assigned a temporary ID","Virtual horizontal line defined","When centroid crosses line → count incremented","Duplicate counting prevented using ID history"],counting_logic:{line_position:"Frame height / 2",direction:"One-directional (entry)",debounce:"One count per object ID"},software_stack:["Python 3","OpenCV","NumPy","Pre-trained MobileNet-SSD"],code:{language:"Python",file:"object_counter.py",content:`import cv2
import numpy as np

count = 0
tracked_ids = set()
line_y = 240

net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet.caffemodel')
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    blob = cv2.dnn.blobFromImage(frame, 0.007843, (300,300), 127.5)
    net.setInput(blob)
    detections = net.forward()

    for i in range(detections.shape[2]):
        conf = detections[0,0,i,2]
        if conf > 0.6:
            box = detections[0,0,i,3:7] * np.array([frame.shape[1], frame.shape[0], frame.shape[1], frame.shape[0]])
            x1, y1, x2, y2 = box.astype(int)
            cy = (y1 + y2) // 2

            if cy > line_y and i not in tracked_ids:
                count += 1
                tracked_ids.add(i)

            cv2.rectangle(frame, (x1,y1), (x2,y2), (0,255,0), 2)

    cv2.line(frame, (0,line_y), (640,line_y), (0,0,255), 2)
    cv2.putText(frame, f'Count: {count}', (20,40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,0,0), 2)

    cv2.imshow('Counter', frame)
    if cv2.waitKey(1) == 27:
        break

cap.release()
cv2.destroyAllWindows()`},testing_output:"People crossing the virtual line are counted accurately in real time.",common_errors:["Double counting due to ID reuse","Camera angle distortion","Crowded scene overlap"],improvements:["Use Deep SORT for stable IDs","Bidirectional counting","Cloud analytics dashboard"],mini_challenge:"Separate entry and exit counts reliably.",estimated_cost_india:"₹3,500 – ₹4,500",author_name:"NISHANTH",status:"Published"},{id:320,title:"Smart Energy Meter with AI Prediction",level:"AI + Embedded (Advanced ML)",description:"An intelligent energy monitoring system that measures real-time power usage and predicts future consumption using machine learning.",category:"AI + Embedded + Machine Learning",estimatedTime:"12–14 Hours",problem_statement:"Conventional energy meters show only past usage. Predictive analysis helps users optimize consumption and reduce electricity costs.",real_world_case:["Smart homes","Energy management systems","Smart grids","Industrial load forecasting"],ai_concept:{type:"Time-Series Forecasting",model:"Linear Regression / LSTM",features:["Timestamp","Historical power usage"],output:"Future consumption prediction"},hardware:{controller:"ESP32",sensor:"ACS712 Current Sensor",connectivity:"WiFi",display:"Serial / Dashboard"},working_principle:["Current sensor measures load current","ESP32 samples analog data periodically","Power calculated using voltage reference","Usage data logged over time","ML model trained on historical data","Future consumption predicted","Prediction displayed or uploaded to cloud"],pin_config:{esp32:[{module:"ACS712",pinName:"VCC",mcuPin:"5V",direction:"Power"},{module:"ACS712",pinName:"GND",mcuPin:"GND",direction:"Ground"},{module:"ACS712",pinName:"OUT",mcuPin:"GPIO34",direction:"Analog Input"}]},ml_pipeline:{data_collection:"ESP32 serial logging",preprocessing:"Noise filtering + normalization",training:"Python (scikit-learn / TensorFlow)",deployment:"Prediction on edge or cloud"},software_stack:["ESP32 Arduino Core","Python (NumPy, Pandas)","scikit-learn / TensorFlow","Optional: TensorFlow Lite"],code:{language:"C++ (ESP32)",file:"energy_meter.ino",content:`#define CURRENT_PIN 34

void setup() {
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(CURRENT_PIN);
  float voltage = (raw / 4095.0) * 3.3;
  float current = (voltage - 1.65) / 0.066; // ACS712 calibration
  Serial.println(current);
  delay(1000);
}`},testing_output:"Real-time current readings logged and future usage predicted.",common_errors:["Incorrect sensor calibration","Noisy readings","Insufficient training data"],improvements:["Use LSTM for better accuracy","Tariff-based cost prediction","Mobile app visualization"],mini_challenge:"Predict next 24-hour energy consumption.",estimated_cost_india:"₹2,500 – ₹3,500",author_name:"NISHANTH",status:"Published"}];export{e as p};
