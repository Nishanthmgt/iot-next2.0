const e=[{id:1,title:"LED Blink: The Gateway to IoT",level:"Beginner",description:"Master the 'Hello World' of hardware by controlling a physical light source using digital logic and timing protocols.",category:"IoT & Systems",estimatedTime:"15 mins",tech:["Arduino","ESP32"],concept:"The LED Blink project introduces the fundamental concept of GPIO (General Purpose Input/Output). By toggling a digital signal between HIGH (5V/3.3V) and LOW (0V), we control the flow of electricity to an external component.",working_principle:`1. The microcontroller initializes the designated pin as an OUTPUT.
2. In the main loop, it sets the pin HIGH to complete the circuit.
3. A delay function pauses execution for a set duration (e.g., 1000ms).
4. The pin is set LOW to break the circuit, turning the LED off.
5. The process repeats indefinitely.`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"VCC",note:"Power Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D13",component:"LED Anode (+)",note:"Built-in LED"},{pin:"GND",component:"LED Cathode (-)",note:"Common Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 2",component:"LED Anode (+)",note:"Onboard Blue LED"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// LED Blink: Solid State Pulse
// Compatible: Arduino UNO | ESP32 | ESP8266

const int ledPin = 13; // ESP32 typically uses GPIO 2

void setup() {
  // Hardware initialization
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Using blocking delay for fundamental concept learning
  // For non-blocking, see 'BlinkWithoutDelay' in advanced projects
  digitalWrite(ledPin, HIGH); // Logic State 1 (VOLTS ON)
  delay(1000);              // Clock Pause
  digitalWrite(ledPin, LOW);  // Logic State 0 (VOLTS OFF)
  delay(1000);              // Clock Pause
}`,advantages:"Simple to implement, excellent for debugging, low power consumption.",disadvantages:"Limited application beyond basic signaling.",usage:"Connect the long leg of the LED to Pin 13 and the short leg to GND (use 220 ohm resistor).",components:["1x Arduino UNO or ESP32","1x LED (5mm)","1x 220 Ohm Resistor","Jumper Wires"],circuit_diagram:"Terminal D13 -> Resistor -> LED Anode | LED Cathode -> Terminal GND",status:"Published",industrial_use:"Critical for heartbeat indicators in industrial PLC units and system status LEDs.",bom_cost:"$2"},{id:2,title:"LED Fade: Pulse Width Modulation",level:"Beginner",description:"Learn how to simulate analog output with digital signals to create breathing light effects using PWM technology.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Digital pins only output 0 or 1. To achieve varying brightness, we use PWM (Pulse Width Modulation), which rapidly flickers the LED. The longer the 'ON' period compared to 'OFF', the brighter the LED appears.",working_principle:`1. A PWM-capable pin is defined as output.
2. The code iterates through brightness levels (0-255).
3. 'analogWrite()' sets the duty cycle based on the current value.
4. A small delay creates the smooth transition effect.`,pin_config:{arduino:[{pin:"5V",component:"LED VCC",note:"Via Resistor"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D9",component:"LED Anode (+)",note:"PWM Enabled Pin"},{pin:"GND",component:"LED Cathode (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"LED VCC",note:"Via Resistor"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 4",component:"LED Anode (+)",note:"PWM capable GPIO"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// PWM Fading: Sine-Wave Simulation
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
}`,advantages:"Smooth transitions, power efficient, works with most microcontrollers.",disadvantages:"Requires specific PWM hardware pins.",usage:"Connect the LED to Pin 9 (Arduino) or Pin 4 (ESP32) through a resistor.",components:["1x Controller","1x LED","1x 220 Ohm Resistor","Breadboard"],circuit_diagram:"Digital Pin (PWM) -> Resistor -> LED Anode | LED Cathode -> GND",status:"Published",industrial_use:"Used in smart dimming systems and variable speed motor controls.",bom_cost:"$3"},{id:3,title:"Interactive Control: Push Button LED",level:"Beginner",description:"Bridge the gap between hardware and software interaction by using a physical switch to control a digital output.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"This project covers the use of digital inputs. A push button acts as a momentary switch. When pressed, it completes a circuit, sending a HIGH signal to a microcontroller pin.",working_principle:`1. Initialize one pin as OUTPUT (LED) and another as INPUT (Button).
2. Use an internal/external pull-up resistor to ensure a stable state.
3. The code reads the digital state of the button pin.
4. If state is HIGH (pressed), the LED pin is set HIGH.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Power Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D2",component:"Push Button Pin 1",note:"Input (Internal Pullup)"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"},{pin:"D13",component:"LED Anode (+)",note:"Output Pin"},{pin:"GND",component:"LED Cathode (-)",note:"Common GND"}],esp32:[{pin:"3.3V",component:"VCC",note:"Power Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 15",component:"Push Button Pin 1",note:"Input (Pullup)"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"},{pin:"GPIO 2",component:"LED Anode (+)",note:"Onboard LED"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// Interactive Toggle: Debounced State Memory
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
}`,advantages:"Real-time user feedback, essential for user interfaces.",disadvantages:"Requires debouncing for stable production use.",usage:"Connect button to Pin 2 and GND (using internal pullup). LED to Pin 13.",components:["1x Microcontroller","1x LED","1x Push Button","1x 10k Resistor (optional)"],circuit_diagram:"Button Pin -> Switch -> GND | LED Pin -> Resistor -> LED -> GND",status:"Published",industrial_use:"Emergency stop buttons and tactile user inputs in ruggedized terminals.",bom_cost:"$4"},{id:4,title:"Smart Traffic Signaling System",level:"Beginner",description:"Simulate a real-world infrastructure system using sequential logic and multi-component synchronization.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"The Traffic Light System demonstrates complex timing sequences and multiple digital outputs. It's a foundational project for understanding state-based programming logic.",working_principle:`1. Three LEDs (Red, Yellow, Green) are initialized as outputs.
2. A sequence is programmed: Green stays on for X seconds.
3. Green turns off, Yellow turns on for a short period.
4. Yellow turns off, Red turns on for Y seconds.
5. The cycle loops to simulate intersection management.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"LED Anodes Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D10",component:"Red LED Anode",note:"Connect via 220R"},{pin:"D11",component:"Yellow LED Anode",note:"Connect via 220R"},{pin:"D12",component:"Green LED Anode",note:"Connect via 220R"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Ground Rail"},{pin:"GPIO 4",component:"Red LED Anode",note:"Stop Signal"},{pin:"GPIO 16",component:"Yellow LED Anode",note:"Caution Signal"},{pin:"GPIO 17",component:"Green LED Anode",note:"Go Signal"}]},code:`// Traffic Hub: Finite State Machine (FSM)
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
}`,advantages:"Excellent for learning logic flow, visually intuitive results.",disadvantages:"Higher power draw with multiple LEDs.",usage:"Connect Red (10), Yellow (11), Green (12) to designated pins with resistors.",components:["1x Arduino/ESP32","3x LEDs (R,Y,G)","3x 220 Ohm Resistors","Jumper Wires"],circuit_diagram:"Pin 10 -> Resistor -> Red LED | Pin 11 -> Resistor -> Yellow | Pin 12 -> Resistor -> Green",status:"Published",industrial_use:"Applied in logistics automation and automated conveyor sorting systems for status signaling.",bom_cost:"$9"},{id:5,title:"Audio Alerts: Buzzer Frequency Control",level:"Beginner",description:"Integrate audio feedback into your projects using piezoelectric buzzers and frequency generation logic.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Piezo buzzers generate sound by vibrating a crystal at high speeds. By changing the frequency of the electrical pulses sent to the buzzer, we can create different musical notes or alarm tones.",working_principle:`1. Set the designated pin as an output for the buzzer.
2. Use 'tone()' function (Arduino) to send a specific frequency.
3. The frequency determines the pitch, while duration determines the length.
4. Switching frequencies in a loop creates a melody or siren effect.`,pin_config:{arduino:[{pin:"5V / VIN",component:"VCC",note:"Optional Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D8",component:"Piezo Buzzer (+)",note:"Signal Output"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V / 5V",component:"VCC",note:"Check Rating"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 25",component:"Piezo Buzzer (+)",note:"DAC Signal"},{pin:"GND",component:"Buzzer (-)",note:"Common Ground"}]},code:`// Audible Alert: Frequency Modulation
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
}`,advantages:"Compact audible feedback, low cost, easy to integrate.",disadvantages:"Can be noisy; requires transistor for high-volume passive buzzers.",usage:"Connect the positive leg of the buzzer to Pin 8 and negative to GND.",components:["1x Arduino Uno","1x Piezo Buzzer","Jumper Wires","Breadboard"],circuit_diagram:"Pin 8 -> Buzzer (+) | Buzzer (-) -> GND",status:"Published",industrial_use:"Critical error alarms in medical equipment and proximity alerts in warehouse robots.",bom_cost:"$5"},{id:6,title:"Digital Dice: Probability & Randomness",level:"Beginner",description:"Construct a digital random number generator using LEDs and the pseudo-random logic of microcontrollers.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32"],concept:"The Digital Dice project focuses on 'randomSeed' and 'random' functions. It teaches how to map a single input (button press) to multiple outputs (LED patterns) to represent dice faces.",working_principle:`1. 7 LEDs are arranged in a dice pattern and set as outputs.
2. A push button is set as an input with a pull-up resistor.
3. Upon button press, a random number between 1 and 6 is generated.
4. A 'switch-case' statement validates the number and lights up the corresponding LEDs.
5. An animation effect is added to simulate rolling.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D2 to D8",component:"7x LED Anodes",note:"Output Group"},{pin:"D9",component:"Push Button Pin 1",note:"Trigger"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"GPIO 4,5,18,19,21,22,23",component:"LED Array Anodes",note:"High Power Outputs"},{pin:"GPIO 15",component:"Push Button Pin 1",note:"Input"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"}]},code:`// Probability Engine: Digital Dice
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
}`,advantages:"Interactive, teaches array-like logic, durable compared to mechanical dice.",disadvantages:"High component count (7 LEDs).",usage:"Arrange LEDs in a 3x3 grid pattern and connect to Pins 2-8.",components:["1x Microcontroller","7x LEDs","7x 220 Ohm Resistors","1x Push Button"],circuit_diagram:"Pins 2-8 -> Resistors -> LEDs -> GND | Pin 9 -> Button -> GND",status:"Published",industrial_use:"Pseudo-random generator logic for cryptographic testing and Monte Carlo simulations.",bom_cost:"$9"},{id:7,title:"RGB Spectrum: Color Mixing Protocol",level:"Beginner",description:"Unlock the visual spectrum by controlling a single multi-color LED through three independent PWM channels.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"Additive color theory. By mixing Red, Green, and Blue light at different intensities, we can create any color in the visible spectrum. This project uses 3 PWM pins to control these intensities.",working_principle:`1. Define pins for R, G, and B as outputs.
2. In a loop, vary the duty cycle of each pin using 'analogWrite()'.
3. Cycling through combinations (e.g., R=255, G=0, B=255 for Purple).
4. A common cathode RGB LED is typically used.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Common Anode (if used)"},{pin:"GND",component:"Common Cathode",note:"Ground"},{pin:"D9",component:"Red Pin",note:"PWM Channel 1"},{pin:"D10",component:"Green Pin",note:"PWM Channel 2"},{pin:"D11",component:"Blue Pin",note:"PWM Channel 3"}],esp32:[{pin:"3.3V",component:"VCC",note:"Common Anode (if used)"},{pin:"GND",component:"Common Cathode",note:"Ground Rail"},{pin:"GPIO 4",component:"Red Channel",note:"LEDC Chan 0"},{pin:"GPIO 16",component:"Green Channel",note:"LEDC Chan 1"},{pin:"GPIO 17",component:"Blue Channel",note:"LEDC Chan 2"}]},code:`// RGB Chroma: Color Space Control
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
}`,advantages:"Thousands of colors from one LED, compact, widely used in HMIs.",disadvantages:"Requires careful resistor selection to balance color brightness.",usage:"Connect R, G, B pins to 220 ohm resistors then to the LED anodes.",components:["1x Arduino/ESP32","1x RGB LED (Common Cathode)","3x 220 Ohm Resistors","Breadboard"],circuit_diagram:"D9 -> R_Res -> RGB_R | D10 -> G_Res -> RGB_G | D11 -> B_Res -> RGB_B | Cathode -> GND",status:"Published",industrial_use:"Calibration tool for visual color sensors and spectrometer testing rigs.",bom_cost:"$6"},{id:8,title:"Autonomous Infrastructure: Smart Night Lamp",level:"Beginner",description:"Create an automated lighting system that activates based on environmental illumination levels using LDR sensors.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Introduction to analog sensors. An LDR (Light Dependent Resistor) changes its resistance based on light exposure. We use this in a voltage divider circuit to read ambient light as an analog value.",working_principle:`1. The LDR is connected to an analog input (A0).
2. The microcontroller reads values (0-1023).
3. When light level drops below a calibrated threshold (darkness),
4. The microcontroller sets a digital output pin HIGH to turn on a lamp.
5. Hysteresis logic is added to prevent flickering during sunset.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Standard 5V Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"A0",component:"LDR Junction",note:"Voltage Divider Input"},{pin:"D13",component:"Lamp Anode (+)",note:"Load Output"},{pin:"GND",component:"Lamp Cathode (-)",note:"Common Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 34",component:"LDR Input",note:"ADC1 Channel"},{pin:"GPIO 2",component:"Status LED (+)",note:"Onboard LED Anode"},{pin:"GND",component:"LED Cathode (-)",note:"Common Ground"}]},code:`// LDR Auditor: Hysteresis Logic
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
}`,advantages:"Energy saving, fully autonomous, easy calibration.",disadvantages:"LDR is sensitive to artificial light interference.",usage:"Connect LDR and 10k resistor in series. Connect junction to A0.",components:["1x Microcontroller","1x LDR (Photoresistor)","1x 10k Resistor","1x LED/Relay"],circuit_diagram:"VCC -> LDR -> (Pin A0) -> 10k Resistor -> GND | Pin 13 -> LED -> GND",status:"Published",industrial_use:"Automated security lighting and light-harvesting solar tracker optimization.",bom_cost:"$7"},{id:9,title:"Environment Insight: Light intensity Monitor",level:"Beginner",description:"Visualize real-time environmental data by mapping analog sensor readings to human-readable scales.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Data acquisition and visualization. This project focuses on refining raw sensor data and presenting it via the Serial terminal or a visual scale (like a progress bar).",working_principle:`1. Analog voltage is read from the LDR circuit.
2. Raw values (0-1023) are converted to percentages (0-100%).
3. Data is formatted into strings and sent via UART (Serial).
4. A visual indicator on a breadboard (LED bar graph) can also be used.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"A0",component:"LDR Sensor Pin 1",note:"To ADC"},{pin:"GND",component:"LDR Sensor Pin 2",note:"Via 10k Resistor"},{pin:"USB",component:"Serial Port",note:"Standard UART"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 34",component:"LDR Pin 1",note:"ADC Input"},{pin:"GND",component:"LDR Pin 2",note:"To Ground"},{pin:"TX/RX",component:"USB-UART",note:"Terminal"}]},code:`// Environment Insight: Modular Data Plotting
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
}`,advantages:"Precise data tracking, essential for multi-sensor IoT nodes.",disadvantages:"Requires a computer connection to view data without dedicated display.",usage:"Open the Serial Monitor (Tools -> Serial Monitor) at 9600 baud to see readings.",components:["1x Microcontroller","1x LDR","1x 10k Resistor","Jumper Wires"],circuit_diagram:"Standard LDR Voltage Divider connected to Analog Pin 0.",status:"Published",industrial_use:"Precision light-exposure monitoring for pharmaceutical lab environments.",bom_cost:"$4"},{id:10,title:"Safety Protocols: Smart Fire Alarm",level:"Beginner",description:"Build a critical safety subsystem that uses IR detection to identify the presence of fire and triggers immediate alerts.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Flame sensors typically use an IR receiver to detect the specific light radiation emitted by a fire. This project integrates this critical detection with audible and visual alarm signals.",working_principle:`1. A Flame Sensor is connected as a digital or analog input.
2. The code constantly polls the sensor for 'FLAME DETECTED' signal.
3. If detected, it triggers a PWM tone for the buzzer and flashes a Red LED.
4. It includes a reset condition once the flame is no longer detected.`,pin_config:{arduino:[{pin:"5V",component:"VCC (Sensor)",note:"Module Power"},{pin:"GND",component:"GND (Sensor)",note:"Common Ground"},{pin:"D7",component:"Flame (D0)",note:"Digital Detection"},{pin:"D8",component:"Buzzer (+)",note:"Alarm Output"},{pin:"D13",component:"Red LED Anode",note:"Visual Alert"},{pin:"GND",component:"Common Cathode",note:"All Gound Sides"}],esp32:[{pin:"3.3V / 5V",component:"VCC",note:"Check Module Rating"},{pin:"GND",component:"GND",note:"System Ground"},{pin:"GPIO 4",component:"Flame D0",note:"Digital Detection"},{pin:"GPIO 25",component:"Buzzer (+)",note:"DAC Alarm Path"},{pin:"GND",component:"Common Ground",note:"Shared Return"}]},code:`// Flame Guard: Safety Critical Logic
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
}`,advantages:"Rapid detection speed, robust safety application.",disadvantages:"Susceptible to sunlight IR (false positives in direct sun).",usage:"Adjust the sensitivity potentiometer on the flame sensor module for best results.",components:["1x Microcontroller","1x Flame Sensor Module","1x Piezo Buzzer","1x LED"],circuit_diagram:"Sensor D0 -> Pin 7 | Buzzer (+) -> Pin 8 | Sensor VCC -> 5V | Sensor GND -> GND",status:"Published",industrial_use:"Early-warning system for electrical fire detection in localized control gear.",bom_cost:"$10"},{id:11,title:"Precision Telemetry: LCD Thermometer",level:"Beginner",description:"Interface a Liquid Crystal Display (LCD) to visualize real-time environmental data with high precision and low latency.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Digital data visualization. This project introduces the LiquidCrystal I2C protocol, reducing the required wiring from 16 pins to just 4. It teaches how to format floating-point sensor data for human-readable interfaces.",working_principle:`1. Initialize the I2C bus at 100KHz.
2. Interface an LM35 or DHT sensor for temperature acquisition.
3. Clear the display buffer and set the cursor position.
4. Send ASCII-encoded strings to the LCD controller.
5. Implement a 2000ms refresh rate to prevent data flickering.`,pin_config:{arduino:[{pin:"5V",component:"LCD VCC",note:"Logic Power"},{pin:"GND",component:"LCD GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"LCD SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"LCD SCL",note:"I2C Clock"},{pin:"5V",component:"Sensor VCC",note:"LM35/DHT Power"},{pin:"A0",component:"Sensor SIG",note:"Analog Data"},{pin:"GND",component:"Sensor GND",note:"Signal Return"}],esp32:[{pin:"3.3V / 5V",component:"LCD VCC",note:"Level check required"},{pin:"GND",component:"LCD GND",note:"Ground Rail"},{pin:"GPIO 21",component:"LCD SDA",note:"SDA"},{pin:"GPIO 22",component:"LCD SCL",note:"SCL"},{pin:"3.3V",component:"Sensor VCC",note:"Low Power Rail"},{pin:"GPIO 34",component:"Sensor SIG",note:"ADC1 Input"}]},code:`// HMI Pro: LCD Telemetry Hub
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
}`,advantages:"Compact wiring, professional display output, customizable UI.",disadvantages:"Requires I2C library; viewing angle is hardware-dependent.",usage:"Connect I2C pins, adjust contrast pot on the module, and upload.",components:["1x Microcontroller","1x 16x2 LCD with I2C Backboard","1x Temperature Sensor","Jumper Wires"],circuit_diagram:"SDA -> SDA | SCL -> SCL | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"Local diagnostic displays for HVAC controllers and server rack monitors.",bom_cost:"$12"},{id:12,title:"Edge Notification: Smart Doorbell",level:"Beginner",description:"Implement a high-priority alert system using Interrupt Service Routines (ISRs) for instantaneous user feedback.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Interrupt-driven logic. Instead of constant polling, the microcontroller enters a high-priority state only when the bell is pressed, ensuring zero latency and allowing for power-saving 'sleep' modes.",working_principle:`1. Set the button pin as an INPUT_PULLUP.
2. Attach an interrupt to the pin on the FALLING edge.
3. Upon press, execute the ISR to set a global trigger flag.
4. The main loop detects the flag and initiates the audio-visual sequence.
5. Implement soft-debounce to prevent false triggers.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"System Power"},{pin:"GND",component:"GND Rail",note:"Common Return"},{pin:"D2",component:"Bell Switch Pin 1",note:"Interrupt (Int0)"},{pin:"GND",component:"Bell Switch Pin 2",note:"To Ground"},{pin:"D8",component:"Piezo Buzzer (+)",note:"Alert Output"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"System Power"},{pin:"GND",component:"GND Rail",note:"Common Return"},{pin:"GPIO 4",component:"Bell Switch Pin 1",note:"ISR Trigger Pin"},{pin:"GND",component:"Bell Switch Pin 2",note:"To Ground"},{pin:"GPIO 25",component:"Buzzer (+)",note:"Audio Signal"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}]},code:`// Interrupt-Driven HMI: Smart Doorbell
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
}`,advantages:"Zero latency response, power efficient, clean code structure.",disadvantages:"ISR requires careful handling of shared variables (volatile keyword).",usage:"Press the button to trigger a high-frequency chime instantly.",components:["1x Arduino/ESP32","1x Push Button","1x Passive Buzzer","Jumper Wires"],circuit_diagram:"Button -> Pin 2 & GND | Buzzer -> Pin 8 & GND",status:"Published",industrial_use:"Used in emergency pull-cords for medical facilities and operator call buttons in factories.",bom_cost:"$6"},{id:13,title:"Acoustic Trigger: Digital Sound Switch",level:"Beginner",description:"Design an sound-activated control node by analyzing acoustic energy levels through a microphone transducer.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Signal threshold analysis. A microphone module converts sound waves into a variable voltage. By setting a digital comparator threshold, we create a switch that responds only to designated decibel levels (like a clap).",working_principle:`1. Provide 5V/3.3V power to the sound sensor module.
2. The module's onboard comparator identifies sound spikes.
3. Digital Output (D0) pulses LOW/HIGH when sound exceeds threshold.
4. Microcontroller toggles a flip-flop state upon detection.
5. Adjust the multi-turn potentiometer for sensitivity calibration.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D7",component:"Sound Sensor (D0)",note:"Trigger Input"},{pin:"D13",component:"Relay/LED Anode (+)",note:"Load Switch"},{pin:"GND",component:"Load GND (-)",note:"Return Path"}],esp32:[{pin:"3.3V / 5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Return"},{pin:"GPIO 4",component:"D0 Input",note:"Sensitive Signal"},{pin:"GPIO 2",component:"Onboard LED (+)",note:"Visual Feedback"}]},code:`// Acoustic Node: Digital Clap Switch
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
}`,advantages:"Hands-free operation, adjustable sensitivity, low power idle.",disadvantages:"Prone to ambient noise interference without advanced filtering.",usage:"Adjust sensor sensitivity until the LED toggles only with a sharp clap.",components:["1x Microcontroller","1x Sound Sensor Module","1x 5V Relay Block","Jumper Wires"],circuit_diagram:"Sensor D0 -> Pin 7 | Relay Signal -> Pin 13",status:"Published",industrial_use:"Touchless interface for sterile medical environments and sound-activated safety shut-offs.",bom_cost:"$8"},{id:14,title:"Proximity Sensing: IR Obstacle Detection",level:"Beginner",description:"Develop an automated obstacle avoidance system using infrared reflection and modulated signal detection.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Infrared backscatter. An IR LED emits light which reflects off nearby objects. An IR receiver (Photodiode) detects this reflection, creating a non-contact proximity sensor.",working_principle:`1. Emit 38KHz IR signal (modulated for sunlight immunity).
2. Monitor the receiver pin for signal reflection.
3. The sensor modules typically output LOW when an object is within 2-30cm range.
4. Trigger a collision avoidance protocol (alarm or motor stop).
5. Use black surfaces to test absorption and range calibration.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D7",component:"IR Sensor Out",note:"Active LOW Input"},{pin:"D8",component:"Status Alert Anode",note:"Collision LED"},{pin:"GND",component:"Common Cathode",note:"Return"}],esp32:[{pin:"3.3V / 5V",component:"Module VCC",note:"Check Rating"},{pin:"GND",component:"Module GND",note:"System Ground"},{pin:"GPIO 15",component:"IR Receiver Out",note:"Digital Detection"},{pin:"GPIO 2",component:"Alert LED Anode",note:"Onboard Path"}]},code:`// Proximity Guard: Non-Blocking Detection
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
}`,advantages:"Low cost, small form factor, high speed detection.",disadvantages:"Range limited to ~30cm; accuracy depends on object color/material.",usage:"Avoid direct sunlight on sensor; adjust range screw for desired proximity.",components:["1x Microcontroller","1x IR Obstacle Module","1x Buzzer/LED","Jumper Wires"],circuit_diagram:"IR Module Out -> Pin 7 | LED -> Pin 8",status:"Published",industrial_use:"Object counting on fast-moving conveyor belts and proximity safety in handheld power tools.",bom_cost:"$5"},{id:15,title:"Capacitive HMI: Touch Sensor Lamp",level:"Beginner",description:"Construct a solid-state Human-Machine Interface (HMI) that replaces mechanical switches with capacitive touch tech.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32","Capacitive Sensing"],concept:"Capacitive sensing measures the change in electrical charge when a human finger (conductive) approaches the sensor pad. It creates a seamless, wear-proof switching mechanism.",working_principle:`1. Charge the conductive pad to a specific voltage.
2. Use 'touchRead' (ESP32) or a library (Arduino) to monitor discharge time.
3. Discharge time increases when a finger is present due to added capacitance.
4. Microcontroller interprets this timing change as a 'Touch Event'.
5. Implement a latching state to toggle the load (on/off).`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Rail"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D4",component:"TTP223 Out",note:"Digital Touch Input"},{pin:"D13",component:"LED Anode (+)",note:"Output Load"},{pin:"GND",component:"LED Cathode (-)",note:"Return"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"T0 (GPIO 4)",component:"Capacitive Pad",note:"Direct Conductive Touch"},{pin:"GPIO 2",component:"Status LED (+)",note:"Visual HMI"}]},code:`// Capacitive HMI: Haptic Toggle Logic
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
}`,advantages:"No moving parts (durable), aesthetic design, through-material sensing (glass/plastic).",disadvantages:"Affected by moisture/high humidity; requires careful HMI design.",usage:"Connect the TTP223 module; it works through wooden or plastic surfaces up to 3mm.",components:["1x Microcontroller","1x TTP223 Touch Module","1x High Power LED","Jumper Wires"],circuit_diagram:"Touch Module I/O -> Pin 4 | LED Anode -> Pin 13",status:"Published",industrial_use:"Ruggedized touch panels for heavy machinery and sterile interfaces in food processing.",bom_cost:"$4"},{id:16,title:"Industrial Hazard Audit: Gas Leakage System",level:"Beginner",description:"Deploy an industrial-grade gas detection node capable of identifying hazardous LPG, Butane, and Smoke concentrations.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Analog Sensing"],concept:"Chemical sensing and calibration. The MQ-2 sensor uses a heating element to detect change in conductivity on a tin dioxide layer when combustible gas particles are present. It requires a preheating phase for stable readings.",working_principle:`1. Initialize the sensor heating element (requires 24h for full burn-in, 60s for runtime warmup).
2. Acquire analog voltage representing gas concentration (0-5V).
3. Map voltage to PPM (Parts Per Million) using the sensor's logarithmic sensitivity curve.
4. Trigger an audible alarm and visual red alert if concentration exceeds the safe threshold (e.g., 200 PPM).
5. Implement a digital safety interlock for emergency shutdowns.`,pin_config:{arduino:[{pin:"5V",component:"MQ-2 VCC",note:"High Current Rail"},{pin:"GND",component:"MQ-2 GND",note:"Common Ground"},{pin:"A0",component:"MQ-2 Analog Out",note:"Concentration Level"},{pin:"D8",component:"Buzzer (+)",note:"Audio Alarm"},{pin:"GND",component:"Buzzer (-)",note:"Return"}],esp32:[{pin:"5V (VIN)",component:"MQ-2 VCC",note:"Requires 5V for Heater"},{pin:"GND",component:"MQ-2 GND",note:"Ground Rail"},{pin:"GPIO 32",component:"Sensor Signal",note:"ADC1 Input"},{pin:"GPIO 25",component:"Piezo Buzzer (+)",note:"Alarm Path"}]},code:`// Industrial Gas Sentinel: Pre-Heat Protocol
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
}`,advantages:"Reliable chemical detection, long sensor life, adjustable sensitivity.",disadvantages:"High power consumption (~800mW for heater); requires manual calibration.",usage:"Allow 1 minute for the sensor to heat up before trusting readings. Test with a lighter's gas (don't ignite).",components:["1x Microcontroller","1x MQ-2 Gas Sensor Module","1x High-Decibel Buzzer","Jumper Wires"],circuit_diagram:"Sensor AO -> Pin A0 | Sensor VCC -> 5V | Buzzer (+) -> Pin 8",status:"Published",industrial_use:"Critical gas leakage detection in commercial kitchens and boiler rooms.",bom_cost:"$15"},{id:17,title:"Hydro-Sensing Weather Terminal: Rain Alert",level:"Beginner",description:"Develop a localized weather station node that detects precipitation and manages sensor longevity through power management.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Electrolytic corrosion avoidance. Rain sensors use a series of conductive tracks. If power is constantly applied in wet conditions, the tracks will corrode. This project teaches how to use a digital pin to 'gate' power only when taking a measurement.",working_principle:`1. Connect the sensor's VCC to a digital pin on the microcontroller.
2. In the code, set the pin HIGH to power the sensor.
3. Read the moisture level through an analog input (A0).
4. Set the power pin LOW to stop current flow and prevent oxidation.
5. Trigger an alert if the moisture level exceeds 10% (Precipitation detect).`,pin_config:{arduino:[{pin:"D4",component:"Sensor VCC Control",note:"Gated Power Output"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"A0",component:"Sensor SIG",note:"Analog Moisture Level"},{pin:"D13",component:"Rain LED Anode (+)",note:"Visual alert"},{pin:"GND",component:"Common Cathode",note:"Return"}],esp32:[{pin:"GPIO 23",component:"Power Gate Pin",note:"Software VCC"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 34",component:"Signal Pin",note:"ADC Sensor Feed"},{pin:"GPIO 2",component:"Onboard LED (+)",note:"HMI"}]},code:`// Corrosion-Free Hydro Hub
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
}`,advantages:"Significantly increases sensor lifespan, low power, accurate.",disadvantages:"Sensor surface requires periodic cleaning to remove dust/residue.",usage:"Install at a 45-degree angle to allow water to run off after the rain stops.",components:["1x Arduino Uno","1x Rain Sensor Module","1x High-Brightness LED","Jumper Wires"],circuit_diagram:"Sensor SIG -> Pin A0 | Sensor VCC -> Pin 4",status:"Published",industrial_use:"Automated greenhouse closure systems and smart wipers in automotive HMI.",bom_cost:"$7"},{id:18,title:"Ultrasonic Rangefinder & Spatial Analysis",level:"Beginner",description:"Utilize Time-of-Flight (ToF) calculations with ultrasonic transducers to measure distance with centimeter accuracy.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32","Ultrasonic"],concept:"Acoustic telemetry. By measuring the time it takes for an ultrasonic 'ping' to return to the sensor, we can calculate distance using the constant speed of sound (~343m/s). This is the foundation of robotic vision and navigation.",working_principle:`1. Trigger an ultrasonic pulse by setting the 'Trig' pin HIGH for 10us.
2. The sensor emits an 8-cycle 40KHz sound wave.
3. The 'Echo' pin goes HIGH until the reflected wave returns.
4. Microcontroller measures the pulse duration using 'pulseIn()'.
5. Calculate distance: Distance = (Time * 0.0343) / 2.`,pin_config:{arduino:[{pin:"5V",component:"HC-SR04 VCC",note:"Sensor Power"},{pin:"GND",component:"HC-SR04 GND",note:"Common Ground"},{pin:"D9",component:"Trig Pin",note:"Trigger Pulse"},{pin:"D10",component:"Echo Pin",note:"Input Capture"}],esp32:[{pin:"3.3V / 5V",component:"HC-SR04 VCC",note:"Check Module Rating"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 5",component:"Trig Output",note:"Digital Out"},{pin:"GPIO 18",component:"Echo Input",note:"Digital In"}]},code:`// Precision SONAR: Spatial Auditor
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
}`,advantages:"Non-contact measurement, high resolution (1cm), cost-effective.",disadvantages:"Struggles with sound-absorbing materials (foam, fabric); range limited to ~4m.",usage:"Keep the sensor perpendicular to the target object for maximum accuracy.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic Sensor","1x I2C LCD (Optional)","Jumper Wires"],circuit_diagram:"Trig -> Pin 9 | Echo -> Pin 10 | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"Liquid level measurement in non-corrosive tanks and collision avoidance for AGVs.",bom_cost:"$9"},{id:19,title:"Precision Fluid Dynamics: Tank Monitor",level:"Beginner",description:"Architect a tiered fluid monitoring system to track water levels in industrial silos using discrete sensing nodes.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32","Hydro-logic"],concept:"Discrete water sensing relies on the conductivity of water. By placing probes at different heights, we create a multi-bit digital representation of the tank's fill level (Low, Medium, High).",working_principle:`1. Provide a common GND probe at the bottom of the tank.
2. Place 'sensing' probes at 25%, 50%, and 75% height levels.
3. The microcontroller reads the digital state of each probe.
4. When water touches a probe, the circuit completes, pulling the input pin to a known state.
5. Use the data to trigger refilling or overflow protection alerts.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Button/Logic Power"},{pin:"GND",component:"Tank Base Probe",note:"Common Ground"},{pin:"D2, D3, D4",component:"Level Probes 1-3",note:"Input (Pullup)"},{pin:"D8",component:"Buzzer (+)",note:"Overflow Alarm"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Reference"},{pin:"GND",component:"Ground Rail",note:"Tank Bottom Connection"},{pin:"GPIO 4,5,18",component:"Probe Inputs",note:"Digital In"},{pin:"GPIO 2",component:"Status LED (+)",note:"Visual HMI"}]},code:`// Tiered Tank Auditor: Discrete Sensing
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
}`,advantages:"Extremely reliable, zero moving parts, easy to troubleshoot.",disadvantages:"Potential for probe electrolysis if using DC current; requires stainless steel for longevity.",usage:"Ensure probes are made of non-corrosive material like food-grade stainless steel.",components:["1x Microcontroller","3x Stainless Steel Probes","1x Buzzer","Jumper Wires"],circuit_diagram:"Base Probe -> GND | High Probe -> Pin 4 | Mid Probe -> Pin 3 | Low Probe -> Pin 2",status:"Published",industrial_use:"Water management in municipal storage tanks and cooling tower monitoring.",bom_cost:"$14"},{id:20,title:"Intelligent Hydration: Closed-Loop Pump",level:"Beginner",description:"Construct a fully automated fluid transfer system that balances tank levels using feedback-loop control logic.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Automation"],concept:"Closed-loop feedback systems. The microcontroller monitors a sensor (input) and acts on a pump (output) to maintain a specific physical state (full tank). It introduces relay isolation for high-voltage motor control.",working_principle:`1. Constantly monitor the moisture or water level sensor.
2. If level falls below threshold (Empty), the microcontroller triggers a Relay.
3. The Relay starts the water pump (isolated high-power circuit).
4. Once the 'Full' probe is triggered, the microcontroller deactivates the relay.
5. Implement hysteresis (delay) to prevent rapid motor cycling (chatter).`,pin_config:{arduino:[{pin:"D7",component:"Relay Signal",note:"Pump Controller"},{pin:"A0",component:"Level Sensor",note:"Feedback In"},{pin:"5V",component:"VCC",note:"Relay VCC"}],esp32:[{pin:"GPIO 4",component:"Relay In",note:"Control Signal"},{pin:"GPIO 34",component:"Sensor In",note:"ADC"}]},code:`// Hysteresis Logic: Intelligent Pump Node
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
}`,advantages:"End-to-end automation, prevents tank dry-running, high-power isolation.",disadvantages:"Requires careful plumbing to prevent leaks; relay maintenance needed for long-term use.",usage:"Use a 12V DC pump powered through the relay contacts for safety.",components:["1x Arduino","1x 5V Relay Module","1x 12V Water Pump","1x Level Sensor"],circuit_diagram:"Pin 7 -> Relay Signal | Relay NO -> Pump (+) | 12V Source -> Relay COM",status:"Published",industrial_use:"Automated hydroponic fertigation systems and smart home sump pump controllers.",bom_cost:"$28"},{id:21,title:"Biometric Guard: Fingerprint Access Control",level:"Intermediate",description:"Implement a high-security biometric authentication node using optical fingerprint sensors and secure template storage.",category:"Security & Biometrics",estimatedTime:"60 mins",tech:["Arduino","ESP32","UART"],concept:"Minutiae-based matching. The AS608 sensor captures an image of the fingerprint, extracts unique features (minutiae), and converts them into a mathematical template. This template is then compared against locally stored data for authentication.",working_principle:`1. Initialize the optical sensor via UART communication.
2. In Enrollment Mode, capture multiple scans of a finger to create a stable ID.
3. In Verification Mode, the sensor captures a live scan and returns the high-confidence match ID (0-127).
4. The microcontroller triggers a solenoid lock or electronic relay for successful matches.
5. Implement an 'Admin Override' logic using a secure physical button.`,pin_config:{arduino:[{pin:"5V",component:"Sensor VCC",note:"Logic Supply"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"D2 (RX)",component:"Sensor TX",note:"SoftwareSerial"},{pin:"D3 (TX)",component:"Sensor RX",note:"SoftwareSerial"},{pin:"D8",component:"Solenoid Relay In",note:"Active HIGH"},{pin:"GND",component:"Relay GND",note:"Common Return"}],esp32:[{pin:"3.3V / 5V",component:"Sensor VCC",note:"Check Module Rating"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 16",component:"Sensor TX",note:"HardwareSerial 2"},{pin:"GPIO 17",component:"Sensor RX",note:"HardwareSerial 2"},{pin:"GPIO 4",component:"Lock Actuator",note:"Digital Out"}]},code:`// BioGuard Professional: Secure Biometric Node
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
}`,advantages:"High security, non-replicable biometric data, fast authentication (<1s).",disadvantages:"Sensitivity to wet/dirty fingers; templates limited to storage capacity.",usage:"Use the 'Enrollment' sketch first to save your fingerprint template to the sensor's flash memory.",components:["1x Microcontroller","1x AS608 Fingerprint Sensor","1x 5V/12V Solenoid","1x Relay Module"],circuit_diagram:"Sensor TX -> D2 | Sensor RX -> D3 | Sensor VCC -> 5V | Relay In -> D8",status:"Published",industrial_use:"Server room access control and high-value asset storage lockers.",bom_cost:"$35"},{id:22,title:"RFID Identity Terminal: Contactless Access",level:"Intermediate",description:"Deploy a contactless identification system using 13.56 MHz Radio Frequency Identification (RFID) and SPI protocols.",category:"Security & Connectivity",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Electromagnetic Induction. The MFRC522 reader generates a high-frequency field. When a passive tag enters this field, it scavenges power via induction to transmit its unique UID (Unique Identifier) wirelessly.",working_principle:`1. Establish SPI communication between the MCU and the RFID module.
2. The reader constantly polls for tags in range.
3. Upon detection, the 4 or 7-byte UID is read into the buffer.
4. Compare the UID against a 'Whitelist' stored in the MCU's EEPROM/Flash.
5. Log the entry/exit events and toggle a physical barrier or status indicator.`,pin_config:{arduino:[{pin:"3.3V",component:"RC522 VCC",note:"DO NOT USE 5V"},{pin:"GND",component:"RC522 GND",note:"Common Ground"},{pin:"D10",component:"SDA (SS)",note:"SPI Slave Select"},{pin:"D13",component:"SCK",note:"SPI Clock"},{pin:"D11",component:"MOSI",note:"SPI Data Out"},{pin:"D12",component:"MISO",note:"SPI Data In"},{pin:"D9",component:"RST",note:"Reset Pin"}],esp32:[{pin:"3.3V",component:"RC522 VCC",note:"Standard 3.3V"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 5",component:"SDA",note:"VSPI SS"},{pin:"GPIO 18",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"}]},code:`// RFID Gatekeeper: Secure SPI Access
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
}`,advantages:"Contactless (sanitary), durable tags, support for multiple cards simultaneously.",disadvantages:"Limited range (~3-5cm); tags can be cloned if not using encrypted sectors (Classic 1K).",usage:"Scan tags and note the UID in the Serial Monitor. Hardcode authorized UIDs into your security logic.",components:["1x Microcontroller","1x RC522 RFID Module","3x Passive RFID Tags/Cards","1x RGB LED"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | SDA -> D10 | RST -> D9",status:"Published",industrial_use:"Employee time-tracking systems and contactless inventory management.",bom_cost:"$12"},{id:23,title:"Industrial Grid Monitor: AC Energy Telemetry",level:"Intermediate",description:"Calculate AC voltage and current using non-invasive current transformers (CT) and voltage sensors for real-time energy analysis.",category:"Industrial & Energy",estimatedTime:"75 mins",tech:["Arduino","ESP32","Analog"],concept:"Power monitoring. Real power (Watts) is the average of instantaneous power (V * I) over time. This project implements RMS (Root Mean Square) calculations to handle sinusoidal AC waveforms.",working_principle:`1. Use a ZMPT101B for safe, isolated AC voltage sensing.
2. Use a SCT-013 non-invasive CT sensor for current sensing via induction.
3. Sample both waveforms at a high frequency (e.g., 1kHz).
4. Compute V-RMS, I-RMS, Power Factor, and Total Energy Consumption (kWh).
5. Send data to a HMI or Cloud for load balancing alerts.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Logic Power"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"A0",component:"Voltage Sensor",note:"Analog (ZMPT)"},{pin:"A1",component:"Current Sensor",note:"Analog (CT)"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground Return"},{pin:"GPIO 32",component:"V-Waveform",note:"ADC1 Channel"},{pin:"GPIO 35",component:"I-Waveform",note:"ADC1 Channel"}]},code:`// Grid Sentinel: RMS Waveform Analysis
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
}`,advantages:"Isolated sensing (Safe), real-time efficiency tracking, non-invasive installation.",disadvantages:"Requires careful calibration against a known multimeter for accuracy; high sampling rate load.",usage:"Ensure current sensors are clamped ONLY around the phase (live) wire, not the neutral/earth bundle.",components:["1x Microcontroller","1x ZMPT101B AC Voltage Sensor","1x SCT-013 Current Transformer","1x LCD Screen"],circuit_diagram:"ZMPT Out -> A0 | SCT Out -> A1 | VCC -> 5V",status:"Published",industrial_use:"Smart sub-metering for industrial equipment and solar panel efficiency monitoring.",bom_cost:"$28"},{id:24,title:"Remote Telemetry: GPS Tracker & Geofencing",level:"Intermediate",description:"Utilize Global Positioning System (GPS) NMEA data to track location, speed, and altitude while implementing geofencing logic.",category:"Connectivity & Navigation",estimatedTime:"45 mins",tech:["Arduino","ESP32","GPS"],concept:"Satellite trilateration. The GPS module captures signals from multiple orbiting satellites to calculate Latitude and Longitude. Geofencing is a virtual boundary that triggers alerts when the node enters/exits a radius.",working_principle:`1. Set the GPS module to communicate at 9600 baud via UART.
2. Parse the NMEA $GPGGA or $GPRMC sentences using a library.
3. Extract Lat/Lon, Speed, and Satellite Count.
4. Calculate the 'Haversine distance' between current location and target coordinate.
5. Trigger an alert if the distance exceeds the configured radius (Geofence Breach).`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"GPS VCC",note:"Check Power Spec"},{pin:"GND",component:"GPS GND",note:"Common Ground"},{pin:"D4 (RX)",component:"GPS TX",note:"Serial Data In"},{pin:"D3 (TX)",component:"GPS RX",note:"Serial Data Out"}],esp32:[{pin:"3.3V / 5V",component:"GPS VCC",note:"Check Power Spec"},{pin:"GND",component:"GPS GND",note:"Ground Rail"},{pin:"GPIO 17",component:"GPS TX",note:"UART2 RX"},{pin:"GPIO 16",component:"GPS RX",note:"UART2 TX"}]},code:`// Global Navigator: NMEA 0183 Parser
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
}`,advantages:"Global operation, high accuracy outdoors (3-5m), no cellular needed for basic tracking.",disadvantages:"Requires clear sky view (poor indoors); slow 'Time to First Fix' (TTFF) in cold starts.",usage:"Place the antenna outdoors or by a window. It may take up to 2 minutes for the first fix (indicated by a blinking LED).",components:["1x Microcontroller","1x NEO-6M GPS Module","1x External Active Antenna","Jumper Wires"],circuit_diagram:"GPS TX -> D4 | GPS RX -> D3 | VCC -> 3.3V/5V",status:"Published",industrial_use:"Fleet management, asset tracking in logistics, and automated marine buoys.",bom_cost:"$22"},{id:25,title:"Mesh Backbone: ESP-NOW Wireless Bridge",level:"Intermediate",description:"Establish high-speed, low-latency node-to-node communication without requiring a Wi-Fi router or access point.",category:"Connectivity & Wireless",estimatedTime:"55 mins",tech:["ESP32","Wireless"],concept:"Connectionless wireless protocol. ESP-NOW is a fast, 2.4GHz protocol designed by Espressif that allows small packets of data to be transmitted between devices based on MAC addresses.",working_principle:`1. Put the ESP32 into Wi-Fi Station Mode but do not connect to a router.
2. Initialize the ESP-NOW protocol stack.
3. Register 'Peers' using their unique hardware MAC addresses.
4. Send data structures (structs) directly to the peer's MAC.
5. Handle the 'OnDataSent' and 'OnDataRecv' callbacks for reliable transmission.`,pin_config:{arduino:[{pin:"N/A",component:"No Radio",note:"Requires ESP32/ESP8266 SoC"},{pin:"N/A",component:"-",note:"Switch to ESP32 Platform"}],esp32:[{pin:"3.3V",component:"VCC",note:"Core Power"},{pin:"GND",component:"GND",note:"Ground Return"},{pin:"Internal",component:"2.4GHz Antenna",note:"No external pins"},{pin:"GPIO 2",component:"Success LED",note:"Status indicator"}]},code:`// ESP-NOW Backbone: Peer-to-Peer Hub
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
}`,advantages:"Extremely low latency (no handshake), works without internet, high range (up to 200m).",disadvantages:"Limited packet size (250 bytes); ESP series exclusive.",usage:"Flash one board as Transmitter and another as Receiver. Get the Receiver's MAC address using the 'GetMAC' example.",components:["2x ESP32 Development Boards","1x USB Cable","Jumper Wires"],circuit_diagram:"Internal Radio used (No external wiring required for basic bridge).",status:"Published",industrial_use:"Remote sensor clusters in agriculture and decentralized emergency alert systems.",bom_cost:"$16"},{id:26,title:"Industrial Black Box: SD Card Data Logger",level:"Intermediate",description:"Architect a persistent storage system to log sensor telemetry over long durations using SPI-based SD card interfaces.",category:"Industrial & Storage",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Non-volatile storage. While microcontrollers have limited EEPROM, SD cards provide gigabytes of space. This project uses the FAT file system to store data in human-readable CSV formats.",working_principle:`1. Interface with the SD card module via the SPI bus.
2. Initialize the file system (SD.begin).
3. Open a file in 'APPEND' mode to avoid overwriting previous data.
4. Format sensor readings into a comma-separated string (Timestamp, Value1, Value2).
5. Use file.flush() to ensure data is physically written to the card after each log.`,pin_config:{arduino:[{pin:"5V",component:"SD VCC",note:"Logic Level check"},{pin:"GND",component:"SD GND",note:"Common Ground"},{pin:"D10",component:"CS Pin",note:"Slave Select"},{pin:"D11",component:"MOSI",note:"SPI Out"},{pin:"D12",component:"MISO",note:"SPI In"},{pin:"D13",component:"SCK",note:"SPI Clock"}],esp32:[{pin:"3.3V / 5V",component:"SD VCC",note:"Module Power"},{pin:"GND",component:"SD GND",note:"Ground Rail"},{pin:"GPIO 5",component:"CS Pin",note:"VSPI CS"},{pin:"GPIO 18",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"}]},code:`// Industrial Black Box: Circular Log Logic
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
}`,advantages:"High storage capacity, offline reliability, easy data porting to Excel/MATLAB.",disadvantages:"File corruption if power is lost during a write cycle; requires high-quality SD cards.",usage:"Format your SD card to FAT32 before use. Check the serial monitor if SD initialization fails.",components:["1x Microcontroller","1x MicroSD Card Module","1x FAT32 Formatted SD Card"],circuit_diagram:"CS -> D10 | MOSI -> D11 | MISO -> D12 | SCK -> D13",status:"Published",industrial_use:"Weather station data logging and flight recorders for hobby drones.",bom_cost:"$14"},{id:27,title:"Air Quality Auditor: MQ-135 AQI Monitor",level:"Intermediate",description:"Quantify indoor air pollutants including Ammonia, NOx, Alcohol, Benzene, and CO2 using electrochemical sensing.",category:"Industrial & Health",estimatedTime:"45 mins",tech:["Arduino","ESP32","Sensors"],concept:"Gas concentration mapping. The MQ-135 has a sensitive SnO2 layer. In clean air, conductivity is low. When pollutant gases are present, conductivity increases proportionally to gas concentration.",working_principle:`1. Burn-in the sensor for 24-48 hours for baseline stability.
2. Read analog voltage from the sensor output.
3. Calculate the sensor resistance (Rs) vs. clean air resistance (Ro).
4. Use the sensitivity curve (Ratio Rs/Ro) to estimate PPM of specific gases.
5. Trigger a ventilation relay if CO2 levels exceed 1000 PPM.`,pin_config:{arduino:[{pin:"5V",component:"MQ-135 VCC",note:"Requires 5V for heater"},{pin:"GND",component:"MQ-135 GND",note:"Common Ground"},{pin:"A0",component:"MQ-135 SIG",note:"Analog Input"},{pin:"D8",component:"Fan Relay In",note:"Active HIGH"},{pin:"GND",component:"Relay Return",note:"Common GND"}],esp32:[{pin:"5V (VIN)",component:"MQ-135 VCC",note:"Heater Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 32",component:"AQI Signal",note:"ADC1 Input"},{pin:"GPIO 19",component:"Alert LED Anode",note:"Manual Status"}]},code:`// AQI Sentinel: Multi-Gas Auditor
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
}`,advantages:"Low cost broad-spectrum sensing, fast response time.",disadvantages:"High cross-sensitivity (cannot distinguish between specific gases easily); affected by humidity.",usage:"Calibrate in fresh outdoor air to find your 'Ro' baseline before measuring indoor pollutants.",components:["1x Microcontroller","1x MQ-135 Air Quality Sensor","1x I2C LCD Displays"],circuit_diagram:"MQ-135 AO -> A0 | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"HVAC automation in smart buildings and pollutant monitoring in manufacturing plants.",bom_cost:"$12"},{id:28,title:"Acoustic Pollution: Digital Decibel Monitor",level:"Intermediate",description:"Measure ambient noise levels and frequency peaks to monitor acoustic pollution in industrial or residential zones.",category:"Safety & Environment",estimatedTime:"40 mins",tech:["Arduino","ESP32","Acoustics"],concept:"Sound Pressure Level (SPL). By sampling the output of an electret microphone at high speed, we can calculate the amplitude (volume) and apply a logarithmic scale to estimate decibels (dB).",working_principle:`1. Sample the microphone's analog output over a 50ms window.
2. Find the 'Peak-to-Peak' voltage during that window.
3. Convert voltage peaks to a relative dB value using a reference calibration.
4. Log the average noise level over 1 hour.
5. Trigger a visual 'Quiet!' alert if levels exceed 85dB (OSHA safety limit).`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"Mic Module VCC",note:"Check Power Spec"},{pin:"GND",component:"Mic Module GND",note:"Common Ground"},{pin:"A0",component:"Mic Out",note:"Analog Envelope (ENV)"},{pin:"D13",component:"Noise LED (+) ",note:"Visual Alarm"},{pin:"GND",component:"LED (-) ",note:"Return"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"Ground Rail",note:"Common Return"},{pin:"GPIO 34",component:"Audio Input (ENV)",note:"ADC1 Input"},{pin:"GPIO 2",component:"Status LED (+)",note:"Onboard Indicator"}]},code:`// Noise Auditor: RMS Window Sampling
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
}`,advantages:"Real-time noise monitoring, prevents hearing damage, compact size.",disadvantages:"Requires an amplified microphone module (like MAX4466) for accurate readings; sensitive to wind.",usage:"Adjust the gain potentiometer on the back of the microphone module until the LED only triggers on loud claps.",components:["1x Microcontroller","1x MAX4466 Electret Microphone","1x Red High-Intensity LED"],circuit_diagram:"Mic OUT -> A0 | VCC -> 3.3V | GND -> GND",status:"Published",industrial_use:"Safety monitoring in high-decibel factories and noise restriction enforcement in residential áreas.",bom_cost:"$10"},{id:29,title:"Load Management: PIR Occupancy Controller",level:"Intermediate",description:"Optimize energy consumption by controlling high-power loads based on human presence and infrared heat signatures.",category:"Energy & Automation",estimatedTime:"30 mins",tech:["Arduino","ESP32","Infrared"],concept:"Pyroelectric effect. Passive Infrared (PIR) sensors have two slots made of IR-sensitive material. When a warm body passes, it creates a differential change between the two slots, triggering a pulse.",working_principle:`1. Configure the PIR sensor's retriggering jumper to 'H' mode.
2. Monitor the digital output pin (HIGH = Motion, LOW = Still).
3. Use an internal timer to maintain the load (light/AC) for a 'Stay-on' period (e.g., 5 mins).
4. Trigger a high-power relay via an isolation circuit (optocoupler).
5. Implement a 'Manual Override' to force-disable the automation.`,pin_config:{arduino:[{pin:"D2",component:"PIR Signal",note:"Digital In"},{pin:"D7",component:"Relay Out",note:"Load Switch"}],esp32:[{pin:"GPIO 13",component:"PIR In",note:"Internal Pull-down"},{pin:"GPIO 4",component:"Relay",note:"Opto-isolated"}]},code:`// Occupancy Guard: Non-Blocking Logic
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
}`,advantages:"Significant energy savings (~30%), hands-free operation, highly reliable detection.",disadvantages:"Sensitive to rapid temperature changes (heaters/AC vents); can reach through thin glass.",usage:"Use the onboard potentiometers to adjust Sensitivity and Time-Delay according to your room size.",components:["1x Microcontroller","1x HC-SR501 PIR Sensor","1x 5V Relay Module","Jumper Wires"],circuit_diagram:"PIR Out -> D2 | Relay In -> D7 | VCC -> 5V",status:"Published",industrial_use:"Automated lighting in warehouses and demand-based HVAC in office buildings.",bom_cost:"$11"},{id:30,title:"RTC Industrial Scheduler: Temporal Automation",level:"Intermediate",description:"Develop a high-precision automation system that triggers industrial events based on wall-clock time using Real-Time Clock (RTC) modules.",category:"Industrial & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Timekeeping independence. Microcontrollers lose time when powered off. RTC modules like the DS3231 use a battery-backed crystal oscillator to maintain accurate time (±2ppm) regardless of the MCU's state.",working_principle:`1. Initialize communication with the DS3231 via the I2C bus.
2. Set the current time and date in the provisioning phase.
3. The MCU polls the RTC every 1000ms to read the 'Second, Minute, Hour' registers.
4. Compare the 'Now' time against a user-defined 'Schedule' (e.g., 08:00:00).
5. Trigger a latching relay or notification if the time matches the alarm window.`,pin_config:{arduino:[{pin:"5V",component:"RTC VCC",note:"Logic Power"},{pin:"GND",component:"RTC GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"RTC SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"RTC SCL",note:"I2C Clock"},{pin:"D7",component:"Schedule Relay",note:"Output"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 21",component:"RTC SDA",note:"I2C Data"},{pin:"GPIO 22",component:"RTC SCL",note:"I2C Clock"},{pin:"GPIO 4",component:"Status LED",note:"Visual Indicator"}]},code:`// RTC Master: Scheduled Event Trigger
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
}`,advantages:"Battery-backed (No time loss), extremely accurate (±1 min/year), works without Internet (NTP).",disadvantages:"Lithium battery replacement needed every 5-8 years; sensitive to extreme vibrations.",usage:"Use the 'DS3231' library. Ensure the CR2032 battery is inserted for time-memory functionality.",components:["1x Microcontroller","1x DS3231 RTC Module","1x CR2032 Battery","1x Relay Module"],circuit_diagram:"RTC SDA -> A4 | RTC SCL -> A5 | Relay IN -> D7 | VCC -> 5V",status:"Published",industrial_use:"Shift-change whistles in factories and automated street-lighting controllers.",bom_cost:"$13"},{id:31,title:"OLED Command Center: Multi-Layered HMI",level:"Intermediate",description:"Design a professional Human-Machine Interface (HMI) with rotating menus, real-time graphs, and status icons using I2C OLED displays.",category:"Automation & Visualization",estimatedTime:"60 mins",tech:["Arduino","ESP32","I2C"],concept:"Buffer-based rendering. Instead of writing directly to the screen pixels, we update an internal RAM buffer and then push the entire frame to the controller. This allows for flicker-free animations and complex graphics.",working_principle:`1. Initialize the SSD1306 controller via I2C.
2. Implement a 'State Machine' to handle menu navigation (Home, Sensors, Settings).
3. Use a rotary encoder or buttons to transition between states.
4. Design custom icons using bitmap arrays (uint8_t).
5. Use a circular buffer to store last 64 sensor readings and draw a scrolling Sparkline-style graph.`,pin_config:{arduino:[{pin:"5V",component:"OLED VCC",note:"Logic Power"},{pin:"GND",component:"OLED GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"OLED SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"OLED SCL",note:"I2C Clock"},{pin:"D2",component:"Encoder A",note:"Interrupt Pin"},{pin:"D3",component:"Encoder B",note:"Signal Pin"}],esp32:[{pin:"3.3V / 5V",component:"OLED VCC",note:"Check Rating"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 21",component:"SDA",note:"I2C Data"},{pin:"GPIO 22",component:"SCL",note:"I2C Clock"},{pin:"GPIO 4",component:"Encoder A",note:"ISR Capable"},{pin:"GPIO 5",component:"Encoder B",note:"Digital In"}]},code:`// HMI Pro: Tiered OLED Dashboard
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
}`,advantages:"Professional aesthetic, low power consumption (0.01W), high contrast.",disadvantages:"Small screen real estate (0.96 inch); burn-in risk if static images are left for weeks.",usage:"Use the 'U8g2' library for maximum control. Use an online 'Image2Cpp' converter for custom bitmaps.",components:["1x Microcontroller",'1x 0.96" OLED (SSD1306)',"1x Rotary Encoder (KY-040)","Connecting Wires"],circuit_diagram:"OLED SDA -> A4 | OLED SCL -> A5 | Encoder A -> D2 | Encoder B -> D3",status:"Published",industrial_use:"Compact diagnostic displays for industrial pumps and smart thermostat interfaces.",bom_cost:"$9"},{id:32,title:"LoRa Field Node: Long Range Telemetry",level:"Advanced",description:"Establish long-range (up to 15km) wireless communication using Chirp Spread Spectrum (CSS) modulation for remote agricultural sensing.",category:"Connectivity & Wireless",estimatedTime:"90 mins",tech:["Arduino","ESP32","LoRa"],concept:"Chirp Spread Spectrum. Unlike Wi-Fi which uses high bandwidth, LoRa uses low bandwidth but spreads pulses over time (chirps). This makes it extremely resistant to interference and capable of deep penetration.",working_principle:`1. Interface with the SX1276/78 LoRa module via SPI.
2. Configure frequency (868/915 MHz), Spreading Factor (SF), and Bandwidth.
3. Implement a 'Receiver-Side Address' check to filter out packets from other nodes.
4. Optimize for low power by putting the radio into 'CAD' (Channel Activity Detection) mode.
5. Transmit critical sensor data with a CRC check for integrity.`,pin_config:{arduino:[{pin:"3.3V",component:"LoRa VCC",note:"Requires 3.3V"},{pin:"GND",component:"LoRa GND",note:"Common Ground"},{pin:"D10",component:"LoRa CS (NSS)",note:"SPI Slave Select"},{pin:"D9",component:"LoRa RST",note:"Reset Pin"},{pin:"D2",component:"LoRa DIO0",note:"IRQ Interrupt"},{pin:"D11",component:"MOSI",note:"SPI Out"},{pin:"D12",component:"MISO",note:"SPI In"},{pin:"D13",component:"SCK",note:"SPI Clock"}],esp32:[{pin:"3.3V",component:"LoRa VCC",note:"Power Rail"},{pin:"GND",component:"LoRa GND",note:"Ground Rail"},{pin:"GPIO 5",component:"NSS (CS)",note:"VSPI CS"},{pin:"GPIO 14",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"},{pin:"GPIO 27",component:"RST",note:"Reset"},{pin:"GPIO 26",component:"DIO0",note:"Interrupt"}]},code:`// Long-Range Telemetry: LoRa Protocol
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
}`,advantages:"Extreme range (10km+), penetration through walls, runs for years on a battery.",disadvantages:"Low data rate (bytes, not images); high latency; requires frequency-specific antennas.",usage:"Ensure an antenna is connected BEFORE powering up, or the module might overheat and fail.",components:["2x Microcontrollers","2x SX1278 LoRa Modules","2x Antennas","Breadboard"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | NSS -> D10 | DIO0 -> D2",status:"Published",industrial_use:"Soil moisture monitoring in large-scale farms and remote meter reading in urban areas.",bom_cost:"$18"},{id:33,title:"Modbus Slave: RS485 Industrial Interface",level:"Advanced",description:"Convert your microcontroller into an industrial Modbus RTU slave that interfaces with PLCs and SCADA systems.",category:"Industrial & Control",estimatedTime:"70 mins",tech:["Arduino","ESP32","RS485"],concept:"Master-Slave communication. Modbus is the 'lingua franca' of factories. It uses 16-bit registers to store data. RS485 provides the physical layer for multi-drop, long-distance electrical communication.",working_principle:`1. Use a MAX485 TTL-to-RS485 converter for differential signaling.
2. Define a 'Register Map' (e.g., Register 101 = Temperature reading).
3. Listen for requests from the Modbus Master (e.g., PLC).
4. If the Slave ID matches, parse the function code (Read/Write).
5. Respond with the requested data formatted in Big-Endian bytes.`,pin_config:{arduino:[{pin:"5V",component:"MAX485 VCC",note:"Bus Power"},{pin:"GND",component:"MAX485 GND",note:"Common Ground"},{pin:"D3",component:"DE/RE",note:"Direction Control"},{pin:"D0 (RX)",component:"RO (Receive)",note:"Input"},{pin:"D1 (TX)",component:"DI (Transmit)",note:"Output"}],esp32:[{pin:"3.3V / 5V",component:"MAX485 VCC",note:"Check Module"},{pin:"GND",component:"GND Rail",note:"Ground Return"},{pin:"GPIO 4",component:"DE/RE Control",note:"Data Dir"},{pin:"GPIO 17",component:"TX2 (DI)",note:"UART2 Transmit"},{pin:"GPIO 16",component:"RX2 (RO)",note:"UART2 Receive"}]},code:`// Modbus RTU: Industrial Slave Node
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
}`,advantages:"Industry compatible, reliable over 1200m, supported by almost all PLCs.",disadvantages:"Half-duplex (cannot send/recv at once); requires MAX485 external hardware.",usage:"Set the Modbus Master (PLC) to the same baud rate and parity (9600-8-N-1 is standard).",components:["1x Microcontroller","1x MAX485 Module","1x PLC or USB-RS485 Converter"],circuit_diagram:"RO -> RX | DI -> TX | DE/RE -> D3 | A -> Bus A | B -> Bus B",status:"Published",industrial_use:"Integrating custom IoT sensors into factory SCADA systems like Ignition or Wonderware.",bom_cost:"$10"},{id:34,title:"Vibration Auditor: Predictive Maintenance",level:"Advanced",description:"Analyze machine health by measuring vibration FFT (Fast Fourier Transform) to predict bearing failures before they occur.",category:"Industrial & Safety",estimatedTime:"80 mins",tech:["Arduino","ESP32","Signal Processing"],concept:"Frequency analysis. Mechanical defects like misalignment or worn bearings create specific vibration frequencies. By analyzing the 'Spectrum', we can identify which component is failing.",working_principle:`1. Sample acceleration data from an ADXL345 at a high frequency (e.g., 2kHz).
2. Apply a Hanning 'Window' to the data to prevent spectral leakage.
3. Compute the FFT (Fast Fourier Transform) to convert Time-Domain to Frequency-Domain.
4. Find the Peak Frequency and Amplitude.
5. Alert if vibration intensity in the 100Hz-500Hz band exceeds the safety threshold.`,pin_config:{arduino:[{pin:"3.3V",component:"ADXL345 VCC",note:"Requires 3.3V"},{pin:"GND",component:"ADXL345 GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"ADXL345 SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"ADXL345 SCL",note:"I2C Clock"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Supply"},{pin:"GND",component:"GND Rail",note:"Ground Rail"},{pin:"GPIO 21",component:"ADXL SDA",note:"I2C Data"},{pin:"GPIO 22",component:"ADXL SCL",note:"I2C Clock"}]},code:`// Maintenance Pro: Vibration Spectrum
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
}`,advantages:"Saves thousands in repair costs, detects problems invisible to the human eye, non-stop operation.",disadvantages:"Computationally heavy (requires ESP32 for high-resolution FFT); sensitive to mounting position.",usage:"Mount the sensor rigidly to the motor casing using a screw or industrial magnet. Tape is NOT adequate.",components:["1x ESP32 (Recommended)","1x ADXL345 Triple-Axis Accelerometer","1x Status Buzzer"],circuit_diagram:"ADXL SDA -> GPIO 21 | ADXL SCL -> GPIO 22 | VCC -> 3.3V",status:"Published",industrial_use:"Predictive maintenance for cooling tower fans and industrial conveyor rollers.",bom_cost:"$15"},{id:35,title:"Secure Gateway: Hardware Encryption",level:"Advanced",description:"Protect sensitive IoT telemetry using hardware-accelerated AES-128 encryption and secure key storage.",category:"Security & Connectivity",estimatedTime:"100 mins",tech:["ESP32","Security","AES"],concept:"End-to-end security. Software encryption keys can be dumped from memory. Hardware Security Modules (HSMs) like the ATECC608 secure the key in a tamper-proof chip that performs encryption internally.",working_principle:`1. Initialize the Secure Element via I2C.
2. In the provisioning phase, generate a unique Elliptic Curve (ECC) private key inside the chip.
3. Before sending data to the cloud, hash the payload using SHA-256.
4. Use the secure chip to Sign the hash with the private key.
5. The cloud verifies the signature using your public key, ensuring the data wasn't tampered with.`,pin_config:{arduino:[{pin:"N/A",component:"MCU Speed",note:"Too slow for ECC logic"},{pin:"N/A",component:"-",note:"Switch to ESP32 platform"}],esp32:[{pin:"3.3V",component:"HSM VCC",note:"ATECC608 Power"},{pin:"GND",component:"HSM GND",note:"Ground Return"},{pin:"GPIO 21",component:"HSM SDA",note:"I2C Data"},{pin:"GPIO 22",component:"HSM SCL",note:"I2C Clock"}]},code:`// Secure Vault Link: AES-128 Block Cipher
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
}`,advantages:"Military-grade protection, prevents 'Man-in-the-Middle' attacks, tamper-evident.",disadvantages:"Complex implementation; lost private keys make data permanently unreadable.",usage:"Use the 'Microchip CryptoAuthLib' for ATECC608 integration. Never hardcode keys in plaintext.",components:["1x ESP32","1x ATECC608 Secure Element","1x MicroSD for local logs"],circuit_diagram:"AES chip SDA -> Pin 21 | SCL -> Pin 22 | GND -> GND",status:"Published",industrial_use:"Medical device data transmission and secure payment portals in kiosks.",bom_cost:"$12"},{id:36,title:"Precision Weighing: HX711 Industrial Scale",level:"Intermediate",description:"Interface with high-precision load cells and 24-bit ADCs to build an industrial weighing terminal for logistics and inventory.",category:"Industrial & Manufacturing",estimatedTime:"55 mins",tech:["Arduino","ESP32","Analog"],concept:"Wheatstone bridge. A load cell is a piece of aluminum with strain gauges. When weight is applied, the resistance of the gauges changes slightly. The HX711 amplifies this microvolt-level change and converts it to a 24-bit digital value.",working_principle:`1. Connect the 4 wires of the load cell (E+, E-, A+, A-) to the HX711 module.
2. Perform a 'Tare' calibration to zero out the weight of the platform.
3. Apply a known weight (e.g., 500g) to determine the 'Calibration Factor'.
4. Read the 24-bit raw output and apply the factor to get grams/kilograms.
5. Implement a digital filter (moving average) to stabilize readings under vibration.`,pin_config:{arduino:[{pin:"5V",component:"HX711 VCC",note:"Analog Power"},{pin:"GND",component:"HX711 GND",note:"Common Ground"},{pin:"D3",component:"HX711 DT (Data)",note:"24-bit Output"},{pin:"D2",component:"HX711 SCK (Clock)",note:"Serial Sync"}],esp32:[{pin:"3.3V / 5V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground return"},{pin:"GPIO 18",component:"DT (Data Out)",note:"Digital In"},{pin:"GPIO 19",component:"SCK (Clock)",note:"Digital Out"}]},code:`// Industrial Weighing Terminal: HX711 Logic
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
}`,advantages:"Incredible precision (0.1g resolution), low cost, easy to integrate into ERP systems.",disadvantages:"Sensitive to temperature drift; requires rigid mechanical mounting; fragile strain gauges.",usage:"Avoid 'creep' by not leaving heavy loads on the scale for extended periods. Recalibrate monthly.",components:["1x Microcontroller","1x HX711 24-bit ADC","1x 5kg/10kg Load Cell","Mounting Plates"],circuit_diagram:"Load Cell (Red) -> E+ | (Black) -> E- | (White) -> A- | (Green) -> A+",status:"Published",industrial_use:"Filling stations for chemical containers and automated parcel weighing in warehouses.",bom_cost:"$14"},{id:37,title:"Flow Guardian: Hall-Effect Liquid Meter",level:"Intermediate",description:"Quantify liquid volume and flow rate using turbine-based Hall effect sensors for smart water management.",category:"Industrial & Energy",estimatedTime:"45 mins",tech:["Arduino","ESP32","Fluid Dynamics"],concept:"Magnetic pulse counting. As liquid flows through the meter, it spins a turbine. A magnet on the turbine passes a Hall-effect sensor, generating a pulse for every rotation. The frequency of pulses is proportional to the flow rate.",working_principle:`1. Attach the flow sensor signal pin to a hardware interrupt pin on the MCU.
2. Increment a 'Pulse Count' inside the Interrupt Service Routine (ISR).
3. Every 1 second, calculate the frequency (pulses per second).
4. Apply the 'K-Factor' (e.g., 7.5 pulses/sec = 1 Liter/min) to get real flow rate.
5. Integrate flow rate over time to calculate total volume consumed (liters).`,pin_config:{arduino:[{pin:"5V",component:"Sensor VCC",note:"Module Power"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"D2",component:"Sensor SIG",note:"Interrupt Pin (Int0)"}],esp32:[{pin:"3.3V / 5V",component:"VCC Rail",note:"Check Sensor rating"},{pin:"GND",component:"GND Return",note:"Ground Rail"},{pin:"GPIO 4",component:"SIG Input",note:"Trigger Interrupt"}]},code:`// Liquid Auditor: ISR Flow Management
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
}`,advantages:"Non-contact sensing (no leaks), low maintenance, high reliability for water/fuel.",disadvantages:"Cannot measure viscous liquids (honey/oil) accurately; turbine can jam with debris.",usage:"Use a 10k pull-up resistor if your sensor doesn't have an internal one. Install a filter upstream.",components:["1x Microcontroller","1x YF-S201 Flow Sensor","1x I2C LCD for Display"],circuit_diagram:"Sensor Red -> 5V | Sensor Black -> GND | Sensor Yellow -> D2",status:"Published",industrial_use:"Smart irrigation monitoring and fuel consumption tracking in generators.",bom_cost:"$12"},{id:38,title:"Energy Optimizer: MPPT Solar Tracker",level:"Advanced",description:"Maximize solar energy harvest by tracking the sun's position using LDR arrays and servo-controlled panels.",category:"Energy & Automation",estimatedTime:"120 mins",tech:["Arduino","ESP32","Robotics"],concept:"Dual-Axis Tracking. Fixed solar panels lose up to 40% efficiency due to the angle of incidence. An active tracker ensures the panel is always perpendicular to the sun's rays for maximum photon absorption.",working_principle:`1. Position 4 Light Dependent Resistors (LDRs) in a cross formation separated by baffles.
2. Read analog values from Top, Bottom, Left, and Right sensors.
3. Compare 'Top-Bottom' and 'Left-Right' averages.
4. If the difference exceeds a threshold, move the Pan/Tilt servos to minimize the error.
5. Return to East (Home) at night when all LDRs report low light.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Servo/Logic Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"A0-A3",component:"LDR Cross Array",note:"Analog Inputs"},{pin:"D9",component:"H-Servo Signal",note:"Horizontal PWM"},{pin:"D10",component:"V-Servo Signal",note:"Vertical PWM"}],esp32:[{pin:"3.3V",component:"Logic VCC",note:"For LDR Array"},{pin:"5V (EXT)",component:"Servo Power",note:"Don't use ESP32 pin"},{pin:"GND",component:"Common return",note:"Shared GND"},{pin:"GPIO 32-35",component:"LDR Array",note:"ADC1 Pins"},{pin:"GPIO 4",component:"H-Servo PWM",note:"LEDC Chan 0"},{pin:"GPIO 16",component:"V-Servo PWM",note:"LEDC Chan 1"}]},code:`// Energy Core: Dual-Axis Solar Tracker
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
}`,advantages:"Increases energy yield by 30-45%, fully autonomous, educational for PID logic.",disadvantages:"Moving parts require maintenance; servos consume energy; susceptible to high winds.",usage:"Use high-torque servos with metal gears for even small panels. Implement a 10-degree 'Deadzone' to prevent jitter.",components:["1x Microcontroller","2x MG996R Servos","4x LDRs","1x 5V Solar Panel"],circuit_diagram:"LDRs -> A0-A3 | PWM -> D9, D10 | External 5V Power for Servos",status:"Published",industrial_use:"Utility-scale solar farms and smart house energy harvesting units.",bom_cost:"$25"},{id:39,title:"AC Load Phase Controller: Triac Dimming Logic",level:"Advanced",description:"Precisely control AC power (0-100%) for heaters and lamps using Zero-Crossing detection and Phase Angle firing.",category:"Energy & Industrial",estimatedTime:"80 mins",tech:["Arduino","ESP32","High Voltage"],concept:"Phase angle control. AC power varies like a sine wave. By waiting for the voltage to cross zero and then delaying the trigger (firing) of a Triac, we can chop the wave and effectively reduce the power delivered.",working_principle:`1. Detect the Zero-Crossing point using an H11AA1 optocoupler to avoid high voltage in the MCU.
2. Trigger a hardware interrupt on the falling/rising edge of the ZC signal.
3. Inside the interrupt, start a timer with a delay (0ms to 8.3ms for 60Hz).
4. When the timer expires, pulse the Triac gate via an optotriac (MOC3021).
5. Adjust the delay based on desired brightness/heat (PID control).`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Opto-logic Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D2",component:"ZC Sync In",note:"Interrupt Pin (Sync)"},{pin:"D3",component:"Triac Gate Out",note:"PWM/Phase Drive"}],esp32:[{pin:"3.3V",component:"Logic VCC",note:"Communication Rail"},{pin:"GND",component:"GND Rail",note:"System Ground"},{pin:"GPIO 13",component:"ZC Sync In",note:"ISR Trigger"},{pin:"GPIO 14",component:"Gate Drive Out",note:"Phase Controller"}]},code:`// AC Phase Master: Safe Zero-Cross Logic
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
}`,advantages:"Silent (unlike relays), precise power control, small footprint.",disadvantages:"EXTREMELY DANGEROUS (MAINS VOLTAGE); produces electrical noise (EMI); needs a heat sink.",usage:"Always use an isolation transformer for testing. Ensure the Triac is rated for at least 600V.",components:["1x Microcontroller","1x BT136 Triac","1x MOC3021 Optotriac","1x H11AA1 Optocoupler"],circuit_diagram:"CAUTION: HIGH VOLTAGE. Refer to professional isolated dimmer schematics.",status:"Published",industrial_use:"PID-controlled industrial ovens and smart lighting for theaters/auditoriums.",bom_cost:"$9"},{id:40,title:"Factory Backbone: Integrated Telemetry Hub",level:"Advanced",description:"A comprehensive industrial node that consolidates Modbus, Wi-Fi, and Sensor data into a unified MQTT bridge.",category:"Industrial & IoT",estimatedTime:"150 mins",tech:["ESP32","MQTT","Modbus","RTC"],concept:"Data aggregation. In complex factories, single sensors aren't enough. This hub acts as a 'Local Master', collecting data from localized slaves and bridging it to the Global Cloud via secure MQTT binary protocols.",working_principle:`1. Initialize Multi-tasking (FreeRTOS) on ESP32 dual cores.
2. Core 0: Manage Wi-Fi/MQTT connection and secure handshake.
3. Core 1: Poll RS485 Modbus slaves and local I2C sensors (BME280).
4. Use a Queue to pass data from Core 1 to Core 0.
5. Log all failures to an onboard SD card for audit trails during Wi-Fi outages.`,pin_config:{arduino:[{pin:"N/A",component:"System Load",note:"Requires Dual Core SoC"},{pin:"N/A",component:"-",note:"Switch to ESP32 Platform"}],esp32:[{pin:"5V (EXT)",component:"Main Power",note:"Requires stable 5V"},{pin:"GND",component:"Common Return",note:"Ground Array"},{pin:"GPIO 17",component:"RS485 TX2",note:"UART2 Out"},{pin:"GPIO 16",component:"RS485 RX2",note:"UART2 In"},{pin:"GPIO 4",component:"RS485 Dir",note:"DE/RE Control"},{pin:"GPIO 21 (SDA)",component:"I2C Bus",note:"BME280/Sensors"},{pin:"GPIO 22 (SCL)",component:"I2C Bus",note:"BME280/Sensors"}]},code:`// Agri-Backbone: FreeRTOS Integrated Hub
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
}`,advantages:"Reliable data consolidation, high uptime via FreeRTOS, industry-standard protocols.",disadvantages:"High power consumption; complex firmware management; requires robust network infrastructure.",usage:"Deploy in a NEMA-rated enclosure. Ensure the power supply is isolated and surge-protected.",components:["1x ESP32 DevKit","1x RS485 Shield","1x BME280 Sensor","1x MicroSD Slot"],circuit_diagram:"Consolidated wiring of SPI, I2C, and UART interfaces.",status:"Published",industrial_use:"Central control nodes in smart factories and environmental auditing for data centers.",bom_cost:"$32"},{id:41,title:"Smart Waste Auditor: Ultrasonic Depth Sensing",level:"Beginner",description:"An automated bin that monitors fill levels and opens/closes the lid automatically to ensure urban sanitation.",category:"Smart City",estimatedTime:"40 mins",tech:["Arduino","Ultrasonic","Servo"],concept:"Level detection via time-of-flight. By measuring the time it takes for an ultrasonic pulse to bounce off the trash, we calculate the remaining volume in the bin.",working_principle:`1. Emit 40kHz ultrasonic pulse via Trig pin.
2. Measure 'Echo' return time.
3. Calculate distance (cm = pulse * 0.034 / 2).
4. If distance < 10cm (Lid Open) or > bin_depth (Full Notification).
5. Drive Servo to 90 degrees to open lid when hands are detected near the bin.`,pin_config:{arduino:[{pin:"5V",component:"Sensor VCC",note:"VCC Rail"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D9",component:"Servo SIG",note:"PWM Out"},{pin:"D12",component:"Trig",note:"Output"},{pin:"D11",component:"Echo",note:"Input"}],esp32:[{pin:"3.3V/5V",component:"VCC Rail",note:"Power"},{pin:"GND",component:"GND Rail",note:"Shared Ground"},{pin:"GPIO 4",component:"Servo",note:"LEDC PWM"},{pin:"GPIO 5",component:"Trig",note:"Signal Out"},{pin:"GPIO 18",component:"Echo",note:"Signal In"}]},code:`// Smart Bin Pro: Logic State Machine
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
}`,advantages:"Touchless hygiene, efficient waste collection routing, low power.",disadvantages:"Ultrasonic sensors struggle with soft materials (foam/fabric) that absorb sound waves.",usage:"Calibrate the 'Full' threshold based on the height of your specific bin.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic","1x MG90S Servo"],circuit_diagram:"Trig->D12 | Echo->D11 | Servo->D9 | Power->5V Rail",status:"Published",industrial_use:"Municipal waste management optimization and public restroom sanitation.",bom_cost:"$12"},{id:42,title:"IoT Pet Telemetry Hub: Weight-Based Feeder",level:"Intermediate",description:"Monitor your pet's eating habits and remotely dispense food based on precise weight measurements.",category:"Consumer IoT",estimatedTime:"90 mins",tech:["ESP32","HX711","Stepper"],concept:"Strain gauge integration. By mounting the pet bowl on a load cell, we can monitor the exact grams of food consumed in real-time.",working_principle:`1. Calibrate HX711 with a known weight.
2. Monitor 'Bowl Weight' constantly via ESP32.
3. If 'Consumption' detected, log time and amount to Cloud.
4. Trigger Stepper Motor (Auger screw) to refill bowl to 'Target Weight'.
5. Implement 'Anti-Jam' logic by reversing stepper briefly if torque rises.`,pin_config:{arduino:[{pin:"5V",component:"Module Power",note:"VCC Rail"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D3/D2",component:"HX711 DT/SCK",note:"Serial Data"},{pin:"D8-D11",component:"Stepper Unit",note:"ULN2003 Driver"}],esp32:[{pin:"5V",component:"Main Supply",note:"For Stepper"},{pin:"3.3V",component:"Logic Power",note:"For HX711/MCU"},{pin:"GPIO 18/19",component:"HX711 Port",note:"Digital Pins"},{pin:"GPIO 13,12,14,27",component:"Stepper",note:"Driver Pins"}]},code:`// Pet Telemetry: Weight-Based Auto-Feeder
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
}`,advantages:"Prevents overfeeding, remote monitoring via mobile, highly accurate sensing.",disadvantages:"Mechanical complexity (Auger design); requires stable Wi-Fi for remote logs.",usage:"Use Food-Grade plastic for the auger. Shield the HX711 from sudden impact loads.",components:["1x ESP32","1x HX711 + 5kg Load Cell","1x 28BYJ-48 Stepper + Driver"],circuit_diagram:"Stepper -> GPIO 13,12,14,27 | HX711 -> GPIO 18,19 | External 5V Power",status:"Published",industrial_use:"Livestock precision feeding and automated grain silos.",bom_cost:"$18"},{id:43,title:"Solar Efficiency Analyzer: Real-Time Power Audit",level:"Intermediate",description:"High-precision telemetry node that calculates Solar Panel efficiency by measuring Voltage, Current, and Watts.",category:"Energy & Green Tech",estimatedTime:"60 mins",tech:["Arduino/ESP32","INA219","I2C"],concept:"High-side current sensing. Using a 0.1 ohm shunt resistor and a 12-bit ADC, the INA219 measures the voltage drop across the shunt to calculate current flow up to 3.2A.",working_principle:`1. Wire INA219 between Solar Panel and Battery/Load.
2. Read Shunt Voltage and Bus Voltage via I2C.
3. Calculate Power (P = V * I).
4. Log 'Energy Harvested' (Ah/Wh) over time.
5. Detect panel 'Dirty/Shaded' state if output drops below historical average for the given time of day.`,pin_config:{arduino:[{pin:"5V",component:"INA219 VCC",note:"Logic Supply"},{pin:"GND",component:"INA219 GND",note:"Common GND"},{pin:"A4 (SDA)",component:"I2C Data",note:"SDA"},{pin:"A5 (SCL)",component:"I2C Clock",note:"SCL"}],esp32:[{pin:"3.3V",component:"MCU Power",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Shared Ground"},{pin:"GPIO 21",component:"SDA",note:"I2C Bus"},{pin:"GPIO 22",component:"SCL",note:"I2C Bus"}]},code:`// Solar Auditor: High-Precision Energy Logging
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
}`,advantages:"Precise energy accounting, allows for panel performance benchmarking.",disadvantages:"Limited to 26V max; shunt resistor generates small amount of heat at max current.",usage:"Use thick gauge wires for the power path to minimize voltage drop.",components:["1x Microcontroller","1x INA219 Sensor","1x 10W Solar Panel","1x OLED Display"],circuit_diagram:"INA219 V-IN+ -> Solar + | V-IN- -> Load + | GND -> Shared GND",status:"Published",industrial_use:"Remote weather stations and UPS battery health monitoring systems.",bom_cost:"$15"},{id:44,title:"Health Link: Heart Rate & SpO2 Monitor",level:"Intermediate",description:"Wearable-grade telemedicine node that monitors blood oxygen levels and heart rate using PPG sensor technology.",category:"Medical & Health",estimatedTime:"75 mins",tech:["ESP32","MAX30102","OLED"],concept:"Photoplethysmography (PPG). Red and IR LEDs shine through tissue; the sensor measures the change in light absorption caused by arterial blood pulses to derive SpO2 levels.",working_principle:`1. Initialize MAX30102 via I2C and enable Red/IR LEDs.
2. Sample raw data at 100Hz.
3. Apply a DC-removal filter and Low-pass filter to find pulse peaks.
4. Calculate Heart Rate (BPM) based on Peak-to-Peak interval.
5. Use the 'Ratio-of-Ratios' method to calculate oxygen saturation (SpO2 %).`,pin_config:{arduino:[{pin:"3.3V/5V",component:"MCU Power",note:"Check Module"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"A4 (SDA)",component:"MAX SDA",note:"I2C Bus"},{pin:"A5 (SCL)",component:"MAX SCL",note:"I2C Bus"}],esp32:[{pin:"3.3V",component:"Power Rail",note:"VCC"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 21",component:"SDA",note:"I2C Data"},{pin:"GPIO 22",component:"SCL",note:"I2C Clock"}]},code:`// Health Link: Heart Rate & SpO2 Sync
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
}`,advantages:"Non-invasive monitoring, highly portable, integrates easily with smartphone apps.",disadvantages:"Extremely sensitive to movement (motion artifacts); requires firm finger placement.",usage:"Wrap the sensor in dark tape to prevent ambient light interference. Keep finger steady.",components:["1x Microcontroller","1x MAX30102 Sensor","1x 0.96 inch OLED","1x Li-ion Battery"],circuit_diagram:"MAX30102 SDA -> GPIO 21 | SCL -> GPIO 22 | VCC -> 3.3V",status:"Published",industrial_use:"Remote patient monitoring and fitness tracking wearables.",bom_cost:"$22"},{id:45,title:"Contactless Medical Thermometer: MLX90614",level:"Intermediate",description:"A high-precision infrared thermometer that measures body or object temperature without physical contact.",category:"Medical & Health",estimatedTime:"50 mins",tech:["Arduino","MLX90614","Infrared"],concept:"Stefan-Boltzmann Law. Every object emits IR radiation. The MLX90614 uses a thermopile to detect this radiation and converts it to a temperature reading using calibrated internal logic.",working_principle:`1. Power the MLX90614 sensor via I2C supply.
2. Read both 'Ambient' (sensor temp) and 'Object' (target temp) via SMBus protocols.
3. The sensor uses an 17-bit ADC to provide 0.02C resolution.
4. If temperature > 37.5C (99.5F), trigger a Red LED and Buzzer for Fever Alert.
5. Map data to Fahrenheit or Celsius as per user preference.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Power Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"A4 (SDA)",component:"Sensor SDA",note:"I2C Interface"},{pin:"A5 (SCL)",component:"Sensor SCL",note:"I2C Interface"},{pin:"D3",component:"Warning Buzzer",note:"Digital Out"}],esp32:[{pin:"3.3V",component:"VCC",note:"Logic Supply"},{pin:"GND",component:"GND",note:"Return"},{pin:"GPIO 21",component:"SDA",note:"I2C Bus"},{pin:"GPIO 22",component:"SCL",note:"I2C Bus"},{pin:"GPIO 15",component:"Buzzer",note:"Tone Output"}]},code:`// Medical Pro: Contactless IR Thermometer
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
}`,advantages:"Hygienic (zero contact), extremely fast response, industrial grade accuracy.",disadvantages:"Accuracy drops at distances > 5cm; accuracy affected by surface emissivity (e.g., shiny metal).",usage:"Hold the sensor approximately 2-4cm from the forehead for the most accurate medical-grade reading.",components:["1x Microcontroller","1x MLX90614 Sensor","1x Active Buzzer","1x Battery Case"],circuit_diagram:"Sensor SDA -> A4 | SCL -> A5 | Buzzer -> D3 | VCC -> 5V Rail",status:"Published",industrial_use:"Health screening at entry points and non-destructive industrial temperature checks.",bom_cost:"$24"},{id:46,title:"LTE Asset Tracker: Cellular IoT Node",level:"Advanced",description:"A global tracking device that uses LTE-M/NB-IoT cellular networks to report GPS position even without Wi-Fi.",category:"Industrial & Logistics",estimatedTime:"120 mins",tech:["ESP32","SIM7000G","GPS"],concept:"Wide-area cellular coverage. Unlike Wi-Fi, LTE-M (Long Term Evolution for Machines) allows for low-power, long-distance communication suitable for assets moving across cities or countries.",working_principle:`1. Interface with the SIM7000G module via Hardware Serial (UART).
2. Power up the GPS engine and wait for a 3D Fix (satellite Lock).
3. Establish a GPRS/LTE data session via 'AT' commands.
4. Encode GPS coordinates (Latitude, Longitude) into a JSON payload.
5. Push data to a cloud MQTT broker and enter 'Power Down' mode to save battery.`,pin_config:{arduino:[{pin:"5V (EXT)",component:"SIM VCC",note:"Requires 2A Burst"},{pin:"GND",component:"GND",note:"Common Ground"},{pin:"D7 (TX)",component:"SIM RX",note:"Level shifted"},{pin:"D8 (RX)",component:"SIM TX",note:"Signal In"}],esp32:[{pin:"5V (EXT)",component:"SIM7000 Power",note:"Main Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 17 (TX)",component:"SIM RX",note:"UART2"},{pin:"GPIO 16 (RX)",component:"SIM TX",note:"UART2"}]},code:`// Global LTE Tracker: SIM7000 Serial Interface
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
}`,advantages:"Works anywhere with cellular signal; much longer range than BT/Wi-Fi; high security.",disadvantages:"Requires a SIM card and data plan; higher module cost; complex power management.",usage:"Use an active GPS antenna for faster satellite lock. Ensure the module is placed near a window or outdoors.",components:["1x ESP32","1x SIM7000G Module","1x GPS Antenna","1x LTE Antenna","1x 3.7V LiPo"],circuit_diagram:"SIM7000 TX/RX -> ESP32 RX2/TX2 | Power -> Dedicated 5V/2A Source",status:"Published",industrial_use:"Fleet management, high-value asset tracking (containers/heavy machinery), and wildlife tracking.",bom_cost:"$45"},{id:47,title:"Agri-Nervous System: NPK Soil Auditor",level:"Advanced",description:"Industrial grade soil analysis tool that measures Nitrogen (N), Phosphorus (P), and Potassium (K) using RS485 Modbus.",category:"Agri-Tech",estimatedTime:"100 mins",tech:["Arduino/ESP32","NPK Sensor","RS485"],concept:"Optical reflection spectroscopy. The industrial NPK probe uses specific light wavelengths to detect the concentration of soil nutrients, mapping the results to a Modbus register.",working_principle:`1. Connect the NPK probe to a MAX485 TTL-to-RS485 converter.
2. Send a hex request frame (e.g., 0x01 0x03 0x00 0x00...).
3. Receive the response frame and extract the payload bytes.
4. Convert the hex values to mg/kg (PPM) for N, P, and K.
5. Log data to an SD card and trigger'Fertilizer Needed' alerts if levels fall below thresholds.`,pin_config:{arduino:[{pin:"5V/12V",component:"Probe Power",note:"Check Rating"},{pin:"GND",component:"GND Rail",note:"Common GND"},{pin:"D2/D3",component:"SoftwareSerial",note:"RX/TX"},{pin:"D4",component:"RE/DE",note:"Dir Control"}],esp32:[{pin:"12V (EXT)",component:"Probe Power",note:"Required"},{pin:"3.3V",component:"MAX485 VCC",note:"Logic Supply"},{pin:"GPIO 16/17",component:"UART2",note:"Modbus Comms"},{pin:"GPIO 4",component:"RE/DE",note:"Direction"}]},code:`// Precision Agri-NPK: Modbus RTU Query
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
}`,advantages:"Precise fertilizer application, increases crop yield, data-driven farming.",disadvantages:"Probes are expensive (~$30-$50); requires external 12V-24V power supply for the probe.",usage:"Insert the probe fully into the soil. Ensure the RS485 lines (A and B) are not swapped.",components:["1x ESP32","1x RS485 NPK Sensor","1x MAX485 Converter","1x 12V DC Supply"],circuit_diagram:"NPK A/B -> MAX485 A/B | MAX485 RO/DI -> ESP32 16/17 | Power -> 12V",status:"Published",industrial_use:"Large-scale automated greenhouses and precision farming consulting services.",bom_cost:"$55"},{id:48,title:"Industrial pH & Water Quality Monitor",level:"Intermediate",description:"Continuous monitoring system for hydroponics or pool management using a BNC-interface pH electrode.",category:"Environmental",estimatedTime:"70 mins",tech:["Arduino","pH Sensor","Analog"],concept:"Potentiometric measurement. The pH probe generates a small millivolt signal (-414mV to +414mV) proportional to the hydrogen ion activity, which is amplified for the MCU to read.",working_principle:`1. Connect the pH probe via its BNC connector to the amplifier board.
2. Collect 10 analog readings and take the average to reduce noise.
3. Implement a 2-point calibration (pH 4.0 and pH 7.0).
4. Convert the average voltage into a pH value (0.0 to 14.0).
5. Use an LCD to display the pH and Water Temperature for automatic compensation.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Logic Power"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"A0",component:"pH Signal",note:"Analog Input"}],esp32:[{pin:"3.3V",component:"MCU Power",note:"Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 34",component:"pH Analogue",note:"ADC1 Channel"}]},code:`// pH Guardian: Signal Conditioning
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
}`,advantages:"High accuracy with proper calibration, durable industrial probe, critical for biological life.",disadvantages:"Probes require periodic storage in KCl solution; sensor 'drifts' over time; sensitive to electrical noise.",usage:"Do not submerge the BNC connector in water. Clean the probe with distilled water after measurements.",components:["1x Microcontroller","1x Industrial pH Probe + Amp","1x DS18B20 Temp Sensor"],circuit_diagram:"pH Amp VCC/GND -> 5V Rail | pH Signal -> A0 | Temp SIG -> D2",status:"Published",industrial_use:"Aquaponics, wastewater treatment plants, and smart pool maintenance.",bom_cost:"$35"},{id:49,title:"Greenhouse Gas Auditor: CO2 & VOC Hub",level:"Intermediate",description:"Monitor indoor air safety by measuring Carbon Dioxide (CO2) and Volatile Organic Compounds (VOCs).",category:"Environmental",estimatedTime:"55 mins",tech:["ESP32","MH-Z19B","CCS811"],concept:"NDIR (Non-Dispersive Infrared). The MH-Z19B uses an IR light source and filter to count the absorption of CO2 molecules, providing much higher accuracy than simple chemical sensors.",working_principle:`1. Interface with the MH-Z19B sensor via Hardware Serial (UART).
2. Read CO2 concentration in Parts Per Million (PPM).
3. Initialize the CCS811 via I2C for TVOC (Total Volatile Organic Compounds) data.
4. Log data: <1000ppm (Safe), 1000-2000ppm (Drowsy), >2000ppm (Unsafe).
5. Trigger an Exhaust Fan via Relay if CO2 concentration exceeds 1500ppm.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Sensor Power"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D10 (TX)",component:"MH-Z19 RX",note:"SoftSerial"},{pin:"D11 (RX)",component:"MH-Z19 TX",note:"SoftSerial"}],esp32:[{pin:"5V",component:"VCC",note:"Sensor Power"},{pin:"GND",component:"GND",note:"Ground"},{pin:"GPIO 17",component:"TX2 (MH-Z)",note:"UART2"},{pin:"GPIO 16",component:"RX2 (MH-Z)",note:"UART2"}]},code:`// Air Guard Pro: NDIR CO2 Integration
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
}`,advantages:"Industrial-grade NDIR sensor, precise health monitoring, easy integration into HVAC.",disadvantages:"Requires 3-minute 'Warm-up' time; MH-Z19B consumes significant current (up to 150mA).",usage:"Place the sensor at breathing height (approx 1.5m). Calibration is self-running after 24h of operation.",components:["1x ESP32","1x MH-Z19B NDIR Sensor","1x CCS811 VOC Sensor","1x 5V Relay"],circuit_diagram:"MH-Z19 TX/RX -> ESP32 RX2/TX2 | CCS811 SDA/SCL -> GPIO 21/22",status:"Published",industrial_use:"Smart office ventilation, greenhouse climate control, and mining safety monitoring.",bom_cost:"$28"},{id:50,title:"Seismic Guard: Early Warning System",level:"Advanced",description:"High-sensitivity vibration node designed to detect early-stage seismic activity or industrial structural failure.",category:"Industrial & Safety",estimatedTime:"85 mins",tech:["ESP32","ADXL355","Interrupts"],concept:"Digital micro-gravity sensing. Using a high-resolution accelerometer with very low noise, we can detect microscopic tremors and categorize them into seismic magnitude scales.",working_principle:`1. Initialize the ADXL355/345 via SPI or I2C in 'FIFO' mode.
2. Sample X-Y-Z axes at 500Hz.
3. Implement a 'Short-Time Average over Long-Time Average' (STA/LTA) detector algorithm.
4. If ratio > 5, a 'Seismic Event' is declared.
5. Broadcast high-priority alerts to all nearby nodes using ESP-NOW for rapid warning.`,pin_config:{arduino:[{pin:"3.3V",component:"VCC Rail",note:"Required Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D10",component:"SPI CS",note:"High Speed"},{pin:"D11,12,13",component:"SPI Bus",note:"MOSI/MISO/SCK"}],esp32:[{pin:"3.3V",component:"MCU Power",note:"Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 5",component:"CS Pin",note:"VSPI CS"},{pin:"GPIO 18,19,23",component:"SPI Pins",note:"VSPI Bus"}]},code:`// Seismic Sentinel: Fast Vibration Analysis
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
}`,advantages:"Critical for safety, ultra-fast alert propagation, industrial-grade sensitivity.",disadvantages:"Prone to 'false positives' from local foot traffic or machinery; complex signal processing.",usage:"Mount the sensor on a solid building pillar or concrete floor using industrial adhesive for best vibration transmission.",components:["1x ESP32","1x ADXL355 Accel","1x High-Decibel Buzzer","1x SPI Logic Shifter"],circuit_diagram:"ADXL SPI -> ESP32 VSPI Port | Buzzer -> GPIO 4",status:"Published",industrial_use:"Earthquake early warning, structural health monitoring for bridges, and machinery fault detection.",bom_cost:"$32"},{id:51,title:"BLE Mesh Beacon Scanner: Retail Analytics",level:"Advanced",description:"A high-speed BLE scanner that tracks asset movement and customer foot traffic by triangulation of BLE Beacons.",category:"Smart Retail",estimatedTime:"110 mins",tech:["ESP32","BLE","JSON"],concept:"RSSI-based proximity. BLE beacons emit periodic 'Advertisements'. By measuring the Received Signal Strength Indicator (RSSI), we can estimate the distance to the beacon.",working_principle:`1. Initialize the ESP32 BLE stack in 'Passive Scanning' mode.
2. Set a 10s scan window to capture all nearby iBeacon/Eddystone packets.
3. Filter packets by UUID to target specific assets.
4. Map the RSSI to distance using the Log-Distance Path Loss model.
5. Batch data into a JSON object and push to the Cloud via Wi-Fi for heat-map generation.`,pin_config:{arduino:[{pin:"N/A",component:"Hardware",note:"Requires BLE (ESP32)"}],esp32:[{pin:"3.3V",component:"VCC",note:"Power Supply"},{pin:"GND",component:"GND",note:"Ground"},{pin:"GPIO 2",component:"Scan Indicator",note:"Onboard LED"}]},code:`// BLE Analytics: Proximity Scanner
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
}`,advantages:"Low cost per trackable unit; extremely low power (beacons last years on coincells).",disadvantages:"Prone to interference from human bodies/walls (blocking 2.4GHz); ±2m accuracy limit.",usage:"Mount scanners at ceiling height (2.5m - 3m) for maximum line-of-sight coverage.",components:["1x ESP32 DevKit","Multiple BLE Beacons","1x External Wi-Fi Antenna (Optional)"],circuit_diagram:"Scanners operate autonomously via Wi-Fi; Beacons are stand-alone battery units.",status:"Published",industrial_use:"Warehouse inventory tracking and customer dwell-time analysis in shopping malls.",bom_cost:"$15"},{id:52,title:"Stratospheric Payload: LoRa Balloon Telemetry",level:"Advanced",description:"Design a lightweight telemetric node for high-altitude ballooning that survives extreme cold and low pressure.",category:"Aerospace & LoRa",estimatedTime:"180 mins",tech:["ESP32","LoRa","BME280"],concept:"Line-of-Sight transmission. In the upper atmosphere, a 100mW LoRa signal can travel over 200km due to the lack of geographical obstructions.",working_principle:`1. Initialize SPI communication with the LoRa (SX1276) chip.
2. Collect T-P-H data from the BME280 sensor.
3. Implement 'Low-Temperature Calibration' for the MCU clock (to prevent timing drift at -40C).
4. Transmit data in 'long-range' LoRa mode (SF12, BW 125kHz).
5. Enter 'Deep Sleep' between transmissions to conserve battery at altitude.`,pin_config:{arduino:[{pin:"3.3V",component:"VCC Rail",note:"From LiPo"},{pin:"GND",component:"GND Rail",note:"Common GND"},{pin:"D10",component:"LoRa NSS",note:"SPI"},{pin:"D13,11,12",component:"SPI Bus",note:"SCK/MOSI/MISO"}],esp32:[{pin:"3.3V",component:"VCC",note:"Stable Supply"},{pin:"GPIO 5",component:"LoRa CS",note:"VSPI"},{pin:"GPIO 27",component:"LoRa RST",note:"Reset"},{pin:"GPIO 26",component:"DIO0",note:"IRQ"}]},code:`// Aerospace Telemetry: LoRa Balloon Node
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
}`,advantages:"Massive communication range; low hardware cost compared to satellite links.",disadvantages:"Requires thermal insulation (polystyrene box) to prevent battery failure at -50C.",usage:"Use a 1/2 wave dipole antenna pointed downwards for optimal ground coverage.",components:["1x ESP32","1x RA-02 LoRa Module","1x BME280","1x 18650 Li-ion Cell"],circuit_diagram:"LoRa SPI -> VSPI Port | BME280 SDA/SCL -> GPIO 21/22 | Antenna -> SMA Connector",status:"Published",industrial_use:"Weather research balloons and long-range wildlife migration tracking.",bom_cost:"$26"},{id:53,title:"Smart City Lighting Mesh: Reactive Grid",level:"Intermediate",description:"A node-to-node mesh network where streetlights communicate to create a 'Light Wave' that follows pedestrians/vehicles.",category:"Smart City",estimatedTime:"90 mins",tech:["ESP32","ESP-NOW","LDR"],concept:"Peer-to-peer mesh. Using ESP-NOW, nodes broadcast 'Motion Detected' messages to all neighbors instantly without needing a central router.",working_principle:`1. Initialize ESP-NOW on all lighting nodes.
2. Use a PIR sensor to detect nearby movement.
3. When motion occurs: Node A fades LED to 100% and sends 'Trigger' to Nodes B and C.
4. Nodes B and C fade to 50% for 30s to provide 'anticipatory' lighting.
5. All nodes dim to 5% power during inactivity to save energy.`,pin_config:{arduino:[{pin:"N/A",component:"Protocol",note:"Requires Wi-Fi Stack"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Supply"},{pin:"GND",component:"GND Rail",note:"Common GND"},{pin:"GPIO 13",component:"PIR In",note:"Motion Sensor"},{pin:"GPIO 12",component:"LED Drive",note:"PWM Dimmer"}]},code:`// Smart Mesh: Reactive Lighting Grid
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
}`,advantages:"Reduces urban power consumption by 80%; decentralized (no single point of failure).",disadvantages:"Requires high-density of nodes for reliable mesh relay (max 100m spacing).",usage:"Use constant-current LED drivers if controlling actual streetlights (>10W).",components:["2x ESP32 DevKits","2x PIR Sensors","2x High-Power LEDs","1x 5V Supply"],circuit_diagram:"PIR -> GPIO 13 | LED -> GPIO 12/Logic MOSFET | VCC -> 5V rail",status:"Published",industrial_use:"Smart highway lighting and low-traffic industrial park security lighting.",bom_cost:"$20"},{id:54,title:"Urban Noise Pollution Auditor",level:"Intermediate",description:"Continuous acoustic monitoring node that calculates dB(A) levels and identifies noise ordinance violations in cities.",category:"Environmental",estimatedTime:"60 mins",tech:["Arduino/ESP32","MAX9814","Audio"],concept:"A-weighting filter. Human hearing is less sensitive to very low and high frequencies. This project implements a software filter to map raw sound pressure to the dB(A) human perception scale.",working_principle:`1. Sample the MAX9814 microphone at high frequency (10kHz).
2. Calculate the Root Mean Square (RMS) of the audio window.
3. Convert RMS voltage to deciBels using a logarithmic calibration curve.
4. Implement an 'Event Log' for noises > 85dB.
5. Upload average dB levels every 15 mins to an environmental heat-map server.`,pin_config:{arduino:[{pin:"5V",component:"Mic VCC",note:"Logic Supply"},{pin:"GND",component:"Mic GND",note:"Return"},{pin:"A0",component:"Mic Out",note:"Analog Signal"}],esp32:[{pin:"3.3V",component:"Supply",note:"Power Rail"},{pin:"GND",component:"GND",note:"Shared Ground"},{pin:"GPIO 34",component:"Audio SIG",note:"ADC1 (Very Sensitive)"}]},code:`// Urban Noise Auditor: RMS Calculation
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
}`,advantages:"Low-cost alternative to industrial decibel meters; allows for city-wide mesh deployment.",disadvantages:"Microphones degrade when exposed directly to rain/humidity; requires acoustic calibration.",usage:"Place the microphone in an 'Acoustic Shell' or wind-sock to prevent wind-noise from skewing readings.",components:["1x Microcontroller","1x MAX9814 AGC Microphone","1x Waterproof Enclosure"],circuit_diagram:"Mic VCC -> 5V | Mic Gain -> GND | Mic Out -> A0 | VCC -> 5V",status:"Published",industrial_use:"Enforcing construction site noise limits and auditing highway acoustic barriers.",bom_cost:"$14"},{id:55,title:"RFID Inventory Management System",level:"Intermediate",description:"A smart warehouse node that tracks arrival/departure of items in real-time using RFID tags.",category:"Industrial & Logistics",estimatedTime:"70 mins",tech:["Arduino","RFID-RC522","SPI"],concept:"Identity persistence. Each RFID tag has a unique 4 or 7-byte UID. By reading this UID and checking it against a local or remote Database, we verify the item's location and status.",working_principle:`1. Initialize the RC522 reader via the SPI bus.
2. Wait for a passive RFID (13.56 MHz) tag to enter the magnetic field.
3. Authenticate the data sectors of the card (Block 1).
4. Update the 'Last Location' timestamp for that specific UID.
5. Trigger a Green LED (Accepted) or Red LED (Denied/Audit Required).`,pin_config:{arduino:[{pin:"3.3V",component:"Reader VCC",note:"Do not use 5V"},{pin:"GND",component:"Reader GND",note:"Common GND"},{pin:"D10",component:"SDA (SS)",note:"SPI"},{pin:"D13,11,12",component:"SPI Bus",note:"SCK/MOSI/MISO"},{pin:"D9",component:"RST Pin",note:"Reset"}],esp32:[{pin:"3.3V",component:"RC522 VCC",note:"Must be 3.3V"},{pin:"GND",component:"GND",note:"Shared Ground"},{pin:"GPIO 5",component:"SDA",note:"VSPI SS"},{pin:"GPIO 18,19,23",component:"SPI Bus",note:"VSPI Pins"}]},code:`// RFID Inventory Hub: Logistics Mode
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
}`,advantages:"Contactless identification; extremely low cost per tag; durable compared to barcodes.",disadvantages:"Limited range (3-5cm); metal items interfere with the antenna field.",usage:"Mount the reader behind non-metallic panels for a clean, industrial look.",components:["1x Microcontroller","1x RC522 Module","10x RFID Keyfobs/Cards"],circuit_diagram:"RC522 VCC -> 3.3V | RC522 SPI -> MCU SPI Port | Reset -> D9",status:"Published",industrial_use:"Employee access control and real-time palette tracking in loading bays.",bom_cost:"$16"},{id:56,title:"Secure Biometric Door Logic: Wi-Fi Log",level:"Advanced",description:"An enterprise-grade door locking system that uses fingerprint biometrics and logs every entry to a secure Wi-Fi server.",category:"Security & Smart Home",estimatedTime:"90 mins",tech:["ESP32","AS608 Fingerprint","Relay"],concept:"Biometric hashing. The AS608 sensor converts a fingerprint image into a mathematical hash. If the scanned hash matches a stored template, the door is unlocked.",working_principle:`1. Enroll fingerprints into the AS608's internal lash library.
2. In standby, the ESP32 waits for a finger to be placed on the sensor.
3. Upon scan, the AS608 returns a 'Confidence Score' and 'ID Number'.
4. If Score > Threshold, trigger the 12V Solenoid via a Relay/MOSFET.
5. Log the User ID and Timestamp to a remote Google Sheet or MQTT logger via Wi-Fi.`,pin_config:{arduino:[{pin:"5V",component:"Module Power",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D2/D3",component:"AS608 TX/RX",note:"SoftSerial"},{pin:"D4",component:"Relay SIG",note:"Driver Pin"}],esp32:[{pin:"3.3V",component:"AS608 VCC",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 16/17",component:"AS608 UART2",note:"Data Links"},{pin:"GPIO 4",component:"Relay Control",note:"Active High"}]},code:`// Bio-Secure Entry: Biometric Node
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
}`,advantages:"Cannot be picked or bypassed like traditional keys; precise audit trail of entries.",disadvantages:"Sensor performance drops if finger is wet or dirty; requires 12V supply for the lock solenoid.",usage:"Use an opto-isolated relay to protect the ESP32 from the inductive kickback of the solenoid.",components:["1x ESP32","1x AS608 Fingerprint Sensor","1x 5V Relay Module","1x 12V Solenoid Lock"],circuit_diagram:"Fingerprint RX/TX -> ESP32 17/16 | Relay -> GPIO 4 | Solenoid -> Relay Output",status:"Published",industrial_use:"Server room access control and high-security equipment lockers.",bom_cost:"$38"},{id:57,title:"Liquid Level PID Controller",level:"Advanced",description:"A precision industrial control loop that maintains a constant liquid level in a tank regardless of outflow rate.",category:"Industrial Automation",estimatedTime:"110 mins",tech:["Arduino","Ultrasonic","PWM Pump"],concept:"PID Control (Proportional-Integral-Derivative). Instead of simply turning the pump ON/OFF, we calculate a precise motor speed based on the error between current level and setpoint.",working_principle:`1. Measure the current liquid depth using an ultrasonic sensor.
2. Calculate the 'Error' (Setpoint - Current Level).
3. Proportional: Immediate response to error. Integral: Fixes long-term drift. Derivative: Prevents overshooting.
4. Output the result as a PWM signal to a DC pump driver (L298N).
5. Maintain the level within ±2mm accuracy in real-time.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Power"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D9",component:"Pump PWM",note:"L298N ENA"},{pin:"D10",component:"Trig",note:"Ultrasonic"},{pin:"D11",component:"Echo",note:"Ultrasonic"}],esp32:[{pin:"12V (EXT)",component:"Pump Power",note:"Required"},{pin:"GND",component:"Common GND",note:"Return"},{pin:"GPIO 4",component:"Pump PWM",note:"Driver"},{pin:"GPIO 5/18",component:"Ultrasonic",note:"Trig/Echo"}]},code:`// Industrial PID: Fluid Dynamics Control
// Compatible: HC-SR04 + PWM Pump

#include <PID_v1.h>

double setpoint = 15.0; // 15cm target level
double input, output;
double Kp = 2, Ki = 5, Kd = 1;
PID myPID(&input, &output, &setpoint, Kp, Ki, Kd, DIRECT);

void setup() {
  Serial.begin(115200);
  myPID.SetMode(AUTOMATIC);
  myPID.SetOutputLimits(0, 255);
}

void loop() {
  // 1. Measure level via ultrasonic
  input = readLevel(); 
  
  // 2. Compute PID speed
  myPID.Compute();
  
  // 3. Drive pump
  analogWrite(9, output); 
  
  Serial.print("LVL: "); Serial.print(input);
  Serial.print(" | PWM: "); Serial.println(output);
  delay(100);
}`,advantages:"Extremely stable level control; no 'chatter' or rapid cycling of the pump motor.",disadvantages:"Requires careful 'Tuning' of Kp, Ki, and Kd values to prevent instability.",usage:"Use a check-valve on the pump outlet to prevent backflow when the pump is at low duty-cycles.",components:["1x Arduino Uno","1x HC-SR04 Sensor","1x L298N Driver","1x 12V DC Pump"],circuit_diagram:"Sensor -> D10/11 | Driver ENA -> D9 | Driver IN1 -> D8 | External 12V Supply",status:"Published",industrial_use:"Chemical mixing tanks, automated boiler systems, and water treatment filtration.",bom_cost:"$25"},{id:58,title:"Industrial Conveyor Counter: IR Beam",level:"Beginner",description:"High-speed non-contact counter for manufacturing lines using infrared break-beam technology.",category:"Industrial Automation",estimatedTime:"45 mins",tech:["Arduino","IR Beam","I2C LCD"],concept:"Optical interruption. When an object passes through the IR beam, it blocks the signal to the receiver, triggering a digital pulse that the MCU counts using an edge-triggered Interrupt.",working_principle:`1. Align the IR Transmitter and IR Receiver (Phototransistor) across the conveyor path.
2. Receiver output is HIGH when beam is intact, LOW when blocked.
3. Setup a Hardware Interrupt (INT0) on the MCU to detect the FALLING edge.
4. Increment a global 'Count' variable for every interruption.
5. Handle 'Debouncing' in software to ensure multiple objects in close proximity are counted accurately.`,pin_config:{arduino:[{pin:"5V",component:"IR Power",note:"Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D2",component:"IR Receiver",note:"Interrupt 0"}],esp32:[{pin:"3.3V",component:"Logic Power",note:"Supply"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 14",component:"IR Input",note:"Any GPIO Interrupt"}]},code:`// Industrial Counter: ISR Break-Beam
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
}`,advantages:"Reliable at high speeds; non-contact (works for sensitive items); cheap implementation.",disadvantages:"Dust or steam on lenses can cause false counts; requires precise physical alignment.",usage:"Mount the sensors in a sturdy metal bracket to prevent misalignment from conveyor vibration.",components:["1x Arduino Uno","1x IR Break-beam Pair","1x I2C 16x2 LCD","1x Bracket Set"],circuit_diagram:"IR RX OUT -> D2 | IR TX/RX VCC -> 5V | LCD SDA/SCL -> A4/A5",status:"Published",industrial_use:"Bottle counting in beverage plants and component verification in SMT assembly lines.",bom_cost:"$12"},{id:59,title:"Elderly Care Panic System: GPS + LTE",level:"Advanced",description:"A wearable one-button distress beacon that sends a Google Maps link and SMS with the precise location during emergencies.",category:"Medical & Safety",estimatedTime:"110 mins",tech:["ESP32","GSM/LTE","GPS"],concept:"Critical link reliability. By combining GPS (Location) and GSM (Communication), this node ensures that help is dispatched to the exact coordinates even if the person is outdoors.",working_principle:`1. Monitor a 'Panic Button' pin for a long-press (2 seconds) to avoid accidental triggers.
2. Upon trigger, wake the GPS module to get an updated position Fix.
3. Format an SMS message string containing the Lat/Long coordinates in a Google Maps URL.
4. Use AT commands to send the SMS via a SIM800L or SIM7000G module.
5. Trigger a local buzzer to confirm to the user that the SOS has been sent successfully.`,pin_config:{arduino:[{pin:"5V (EXT)",component:"GSM VCC",note:"Requires 2A Peak"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"D3/D4",component:"GSM UART",note:"SoftSerial"},{pin:"D7",component:"Panic BTN",note:"Internal Pullup"}],esp32:[{module:"GSM (SIM800L)",pinName:"TX",mcuPin:"GPIO16",direction:"Output",voltage:"2.8-3V",description:"GSM -> ESP32 UART RX"},{module:"GSM (SIM800L)",pinName:"RX",mcuPin:"GPIO17",direction:"Input",voltage:"2.8-3V",description:"ESP32 -> GSM UART TX"},{module:"GPS",pinName:"TX",mcuPin:"GPIO4",direction:"Output",voltage:"3.3V",description:"GPS Data Output"},{module:"GPS",pinName:"RX",mcuPin:"GPIO5",direction:"Input",voltage:"3.3V",description:"GPS Data Input"},{module:"Panic Button",pinName:"BTN",mcuPin:"GPIO27",direction:"Input",voltage:"3.3V",description:"SOS Trigger"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO26",direction:"Output",voltage:"3.3V",description:"Alert Sound"},{module:"Power",pinName:"VCC",mcuPin:"5V",direction:"---",voltage:"5V",description:"External Power"},{module:"Ground",pinName:"GND",mcuPin:"GND",direction:"---",voltage:"0V",description:"Common Ground"}]},code:`// Edge Safety: SOS Distress Node
// Compatible: ESP32 + SIM7000G / SIM800L

#include <HardwareSerial.h>
const int sosPin = 23;

void setup() {
  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, 16, 17);
  pinMode(sosPin, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(sosPin) == LOW) {
    Serial.println("SOS TRIGGERED!");
    // 1. Get Location Fix (See GPS projects)
    // 2. Send SMS
    Serial2.println("AT+CMGS=\\"+1234567890\\"");
    delay(100);
    Serial2.print("SOS! Tracking: maps.google.com?q=12.97,77.59");
    Serial2.write(26); 
    delay(10000);
  }
}`,advantages:"Lifesaving potential; autonomous (no phone needed); highly portable.",disadvantages:"Requires cellular signal; battery life is limited due to GPS/GSM power consumption.",usage:"Use a latching circuit or deep-sleep mode to preserve battery life for several days/weeks.",components:["1x ESP32","1x SIM800L Module","1x GPS Module","1x LiPo Charger","1x SOS Button"],circuit_diagram:"SIM TX/RX -> ESP32 16/17 | GPS TX/RX -> ESP32 25/26 | Button -> GPIO 23",status:"Published",industrial_use:"Safety watches for lone workers in remote sites and elderly monitoring in assisted living.",bom_cost:"$42"},{id:60,title:"Unified Agri-Tech Gateway: Soil+Irr+Env",level:"Advanced",description:"The ultimate farming node that combines NPK soil analysis, automatic drip irrigation, and local weather auditing into a single dashboard.",category:"Agri-Tech",estimatedTime:"180 mins",tech:["ESP32","RS485","Relay","BME280"],concept:"Holistic ecosystem data. By monitoring everything from NPK levels to localized air pressure, this gateway makes complex irrigation and fertilization decisions automatically.",working_principle:`1. Initialize BME280 (I2C) and NPK Probe (RS485 Modbus).
2. Read soil moisture via an analog resistive sensor.
3. If Soil_Moisture < 30% AND Time > 6:00PM: Trigger the Solenoid Valve via Relay.
4. Log NPK levels to a Google Sheet via Wi-Fi for seasonal yield planning.
5. Adjust watering duration based on the BME280's Humidity and Temp readings (Evapotranspiration approximation).`,pin_config:{arduino:[{pin:"12V (EXT)",component:"Solenoid/NPK",note:"Main Power"},{pin:"GND",component:"GND Rail",note:"Common GND"},{pin:"D10",component:"Solenoid RELAY",note:"Irrigation"},{pin:"A0",component:"Moisture SENS",note:"Soil Probe"}],esp32:[{pin:"12V (EXT)",component:"System Power",note:"Power Supply"},{pin:"GPIO 16/17",component:"RS485 NPK",note:"UART2"},{pin:"GPIO 21/22",component:"BME280",note:"Weather I2C"},{pin:"GPIO 4",component:"Valve Relay",note:"Control"}]},code:`// Agri-Tech Master: Integrated Control
// Compatible: ESP32 Backbone Node

#include <Wire.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(115200);
  bme.begin(0x76);
  pinMode(4, OUTPUT); // Valve Relay
}

void loop() {
  float humidity = bme.readHumidity();
  int moisture = analogRead(34);
  
  // Smart Irrigation Heuristic
  if (moisture < 2000 && humidity < 40.0) {
     digitalWrite(4, HIGH); // Valve ON
     delay(10000);
     digitalWrite(4, LOW);  // Valve OFF
  }
  
  Serial.print("Moisture: "); Serial.println(moisture);
  delay(300000); // 5-minute sampling
}`,advantages:"All-in-one solution; eliminates the need for separate nodes; maximizes agricultural ROI.",disadvantages:"High component cost; complex wiring; requires high-strength Wi-Fi in the field (or LoRa gateway).",usage:"Housed in an IP67 waterproof enclosure. Use solar charging to make the gateway fully autonomous.",components:["1x ESP32","1x NPK RS485 Probe","1x BME280","1x Soil Moisture Pro","2x 12V Relays"],circuit_diagram:"Gateway combines SPI, I2C, UART, and Analog circuits into a central PCB/Enclosure.",status:"Published",industrial_use:"Commercial olive/vineyard management and smart urban community gardens.",bom_cost:"$75"}];export{e as p};
