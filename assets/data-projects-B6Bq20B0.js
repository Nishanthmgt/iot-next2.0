const e=[{id:1,title:"LED Blink: The Gateway to IoT",level:"Beginner",description:"Master the 'Hello World' of hardware by controlling a physical light source using digital logic and timing protocols.",category:"IoT & Systems",estimatedTime:"15 mins",tech:["Arduino","ESP32"],concept:"The LED Blink project introduces the fundamental concept of GPIO (General Purpose Input/Output). By toggling a digital signal between HIGH (5V/3.3V) and LOW (0V), we control the flow of electricity to an external component.",working_principle:`1. The microcontroller initializes the designated pin as an OUTPUT.
2. In the main loop, it sets the pin HIGH to complete the circuit.
3. A delay function pauses execution for a set duration (e.g., 1000ms).
4. The pin is set LOW to break the circuit, turning the LED off.
5. The process repeats indefinitely.`,pin_config:{arduino:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Output LED",pinName:"LED Anode (+)",mcuPin:"D13",direction:"Output",voltage:"5V",description:"Built-in LED"},{module:"Output LED",pinName:"LED Cathode (-)",mcuPin:"GND",direction:"Power",voltage:"5V",description:"Common Ground"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"3.3V",direction:"Power",voltage:"3.3V",description:"Primary Supply"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// LED Blink: Solid State Pulse
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
}`,advantages:"Simple to implement, excellent for debugging, low power consumption.",disadvantages:"Limited application beyond basic signaling.",usage:"Connect the long leg of the LED to Pin 13 and the short leg to GND (use 220 ohm resistor).",components:["1x Arduino UNO or ESP32","1x LED (5mm)","1x 220 Ohm Resistor","Jumper Wires"],circuit_diagram:"Connect LED Anode to Pin 13 (Arduino) or GPIO 2 (ESP32) via a 220-ohm resistor. Connect LED Cathode to the Ground (GND) pin.",author_name:"Antigravity",status:"Published",industrial_use:"Critical for heartbeat indicators in industrial PLC units and system status LEDs.",bom_cost:"$2"},{id:2,title:"LED Fade: Pulse Width Modulation",level:"Beginner",description:"Learn how to simulate analog output with digital signals to create breathing light effects using PWM technology.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Digital pins only output 0 or 1. To achieve varying brightness, we use PWM (Pulse Width Modulation), which rapidly flickers the LED. The longer the 'ON' period compared to 'OFF', the brighter the LED appears.",working_principle:`1. A PWM-capable pin is defined as output.
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
}`,advantages:"Smooth transitions, power efficient, works with most microcontrollers.",disadvantages:"Requires specific PWM hardware pins.",usage:"Connect the LED to Pin 9 (Arduino) or Pin 4 (ESP32) through a resistor.",components:["1x Controller","1x LED","1x 220 Ohm Resistor","Breadboard"],circuit_diagram:"Button Pin 1: VCC | Button Pin 2: D2/GPIO 4 (with 10k pull-down to GND) | LED Anode: D3/GPIO 2 | Cathode: GND (via 220-ohm resistor).",author_name:"Antigravity",status:"Published",industrial_use:"Used in smart dimming systems and variable speed motor controls.",bom_cost:"$3"},{id:3,title:"Interactive Control: Push Button LED",level:"Beginner",description:"Bridge the gap between hardware and software interaction by using a physical switch to control a digital output.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"This project covers the use of digital inputs. A push button acts as a momentary switch. When pressed, it completes a circuit, sending a HIGH signal to a microcontroller pin.",working_principle:`1. Initialize one pin as OUTPUT (LED) and another as INPUT (Button).
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
}`,advantages:"Real-time user feedback, essential for user interfaces.",disadvantages:"Requires debouncing for stable production use.",usage:"Connect button to Pin 2 and GND (using internal pullup). LED to Pin 13.",components:["1x Microcontroller","1x LED","1x Push Button","1x 10k Resistor (optional)"],circuit_diagram:"Potentiometer: Pin 1 -> VCC, Pin 2 (Middle) -> A0/GPIO 34, Pin 3 -> GND. LED Anode -> D3/GPIO 2 with current-limiting resistor.",author_name:"Antigravity",status:"Published",industrial_use:"Emergency stop buttons and tactile user inputs in ruggedized terminals.",bom_cost:"$4"},{id:4,title:"Smart Traffic Signaling System",level:"Beginner",description:"Simulate a real-world infrastructure system using sequential logic and multi-component synchronization.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"The Traffic Light System demonstrates complex timing sequences and multiple digital outputs. It's a foundational project for understanding state-based programming logic.",working_principle:`1. Three LEDs (Red, Yellow, Green) are initialized as outputs.
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
}`,advantages:"Excellent for learning logic flow, visually intuitive results.",disadvantages:"Higher power draw with multiple LEDs.",usage:"Connect Red (10), Yellow (11), Green (12) to designated pins with resistors.",components:["1x Arduino/ESP32","3x LEDs (R,Y,G)","3x 220 Ohm Resistors","Jumper Wires"],circuit_diagram:"Red LED -> D2, Yellow -> D3, Green -> D4. All LED Cathodes share a common GND connection via 220-ohm resistors.",author_name:"Antigravity",status:"Published",industrial_use:"Applied in logistics automation and automated conveyor sorting systems for status signaling.",bom_cost:"$9"},{id:5,title:"Audio Alerts: Buzzer Frequency Control",level:"Beginner",description:"Integrate audio feedback into your projects using piezoelectric buzzers and frequency generation logic.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Piezo buzzers generate sound by vibrating a crystal at high speeds. By changing the frequency of the electrical pulses sent to the buzzer, we can create different musical notes or alarm tones.",working_principle:`1. Set the designated pin as an output for the buzzer.
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
}`,advantages:"Compact audible feedback, low cost, easy to integrate.",disadvantages:"Can be noisy; requires transistor for high-volume passive buzzers.",usage:"Connect the positive leg of the buzzer to Pin 8 and negative to GND.",components:["1x Arduino Uno","1x Piezo Buzzer","Jumper Wires","Breadboard"],circuit_diagram:"Servo Motor: Brown -> GND, Red -> 5V, Orange (Signal) -> D9 (Arduino) or GPIO 18 (ESP32). Ensure external power for multiple servos.",author_name:"Antigravity",status:"Published",industrial_use:"Critical error alarms in medical equipment and proximity alerts in warehouse robots.",bom_cost:"$5"},{id:6,title:"Digital Dice: Probability & Randomness",level:"Beginner",description:"Construct a digital random number generator using LEDs and the pseudo-random logic of microcontrollers.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32"],concept:"The Digital Dice project focuses on 'randomSeed' and 'random' functions. It teaches how to map a single input (button press) to multiple outputs (LED patterns) to represent dice faces.",working_principle:`1. 7 LEDs are arranged in a dice pattern and set as outputs.
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
}`,advantages:"Interactive, teaches array-like logic, durable compared to mechanical dice.",disadvantages:"High component count (7 LEDs).",usage:"Arrange LEDs in a 3x3 grid pattern and connect to Pins 2-8.",components:["1x Microcontroller","7x LEDs","7x 220 Ohm Resistors","1x Push Button"],circuit_diagram:"DHT11 Sensor: Pin 1 (VCC) -> 3.3V-5V, Pin 2 (Data) -> D2/GPIO 4, Pin 4 (GND) -> GND. Use a 10k resistor between VCC and Data if using raw sensor.",author_name:"Antigravity",status:"Published",industrial_use:"Pseudo-random generator logic for cryptographic testing and Monte Carlo simulations.",bom_cost:"$9"},{id:7,title:"RGB Spectrum: Color Mixing Protocol",level:"Beginner",description:"Unlock the visual spectrum by controlling a single multi-color LED through three independent PWM channels.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"Additive color theory. By mixing Red, Green, and Blue light at different intensities, we can create any color in the visible spectrum. This project uses 3 PWM pins to control these intensities.",working_principle:`1. Define pins for R, G, and B as outputs.
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
}`,advantages:"Thousands of colors from one LED, compact, widely used in HMIs.",disadvantages:"Requires careful resistor selection to balance color brightness.",usage:"Connect R, G, B pins to 220 ohm resistors then to the LED anodes.",components:["1x Arduino/ESP32","1x RGB LED (Common Cathode)","3x 220 Ohm Resistors","Breadboard"],circuit_diagram:"RGB LED: Common Cathode -> GND. Red Anode -> D3, Green Anode -> D5, Blue Anode -> D6. Use resistors for each color channel.",author_name:"Antigravity",status:"Published",industrial_use:"Calibration tool for visual color sensors and spectrometer testing rigs.",bom_cost:"$6"},{id:8,title:"Autonomous Infrastructure: Smart Night Lamp",level:"Beginner",description:"Create an automated lighting system that activates based on environmental illumination levels using LDR sensors.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Introduction to analog sensors. An LDR (Light Dependent Resistor) changes its resistance based on light exposure. We use this in a voltage divider circuit to read ambient light as an analog value.",working_principle:`1. The LDR is connected to an analog input (A0).
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
}`,advantages:"Energy saving, fully autonomous, easy calibration.",disadvantages:"LDR is sensitive to artificial light interference.",usage:"Connect LDR and 10k resistor in series. Connect junction to A0.",components:["1x Microcontroller","1x LDR (Photoresistor)","1x 10k Resistor","1x LED/Relay"],circuit_diagram:"LDR -> A0/GPIO 32, 10k Resistor -> A0 to GND (Voltage Divider). Relay VCC -> 5V, GND -> GND, IN -> D13/GPIO 27.",author_name:"Antigravity",status:"Published",industrial_use:"Automated security lighting and light-harvesting solar tracker optimization.",bom_cost:"$7"},{id:9,title:"Environment Insight: Light intensity Monitor",level:"Beginner",description:"Visualize real-time environmental data by mapping analog sensor readings to human-readable scales.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Data acquisition and visualization. This project focuses on refining raw sensor data and presenting it via the Serial terminal or a visual scale (like a progress bar).",working_principle:`1. Analog voltage is read from the LDR circuit.
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
}`,advantages:"Precise data tracking, essential for multi-sensor IoT nodes.",disadvantages:"Requires a computer connection to view data without dedicated display.",usage:"Open the Serial Monitor (Tools -> Serial Monitor) at 9600 baud to see readings.",components:["1x Microcontroller","1x LDR","1x 10k Resistor","Jumper Wires"],circuit_diagram:"LDR Setup: 5V connected to LDR, LDR connected to A0, A0 connected to GND through a 10k ohm resistor to create a voltage divider.",author_name:"Antigravity",status:"Published",industrial_use:"Precision light-exposure monitoring for pharmaceutical lab environments.",bom_cost:"$4"},{id:10,title:"Safety Protocols: Smart Fire Alarm",level:"Beginner",description:"Build a critical safety subsystem that uses IR detection to identify the presence of fire and triggers immediate alerts.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Flame sensors typically use an IR receiver to detect the specific light radiation emitted by a fire. This project integrates this critical detection with audible and visual alarm signals.",working_principle:`1. A Flame Sensor is connected as a digital or analog input.
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
}`,advantages:"Rapid detection speed, robust safety application.",disadvantages:"Susceptible to sunlight IR (false positives in direct sun).",usage:"Adjust the sensitivity potentiometer on the flame sensor module for best results.",components:["1x Microcontroller","1x Flame Sensor Module","1x Piezo Buzzer","1x LED"],circuit_diagram:"Active Buzzer (+) -> D8 (Arduino) or GPIO 13 (ESP32), (-) -> GND. Use a transistor driver if the current exceeds 20mA.",author_name:"Antigravity",status:"Published",industrial_use:"Early-warning system for electrical fire detection in localized control gear.",bom_cost:"$10"},{id:11,title:"Precision Telemetry: LCD Thermometer",level:"Beginner",description:"Interface a Liquid Crystal Display (LCD) to visualize real-time environmental data with high precision and low latency.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Digital data visualization. This project introduces the LiquidCrystal I2C protocol, reducing the required wiring from 16 pins to just 4. It teaches how to format floating-point sensor data for human-readable interfaces.",working_principle:`1. Initialize the I2C bus at 100KHz.
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
}`,advantages:"Compact wiring, professional display output, customizable UI.",disadvantages:"Requires I2C library; viewing angle is hardware-dependent.",usage:"Connect I2C pins, adjust contrast pot on the module, and upload.",components:["1x Microcontroller","1x 16x2 LCD with I2C Backboard","1x Temperature Sensor","Jumper Wires"],circuit_diagram:"HC-SR04: VCC -> 5V, GND -> GND, Trig -> D11, Echo -> D12. Servo: Signal -> D9. Assemble on a rotating mount for radar effect.",author_name:"Antigravity",status:"Published",industrial_use:"Local diagnostic displays for HVAC controllers and server rack monitors.",bom_cost:"$12"},{id:12,title:"Edge Notification: Smart Doorbell",level:"Beginner",description:"Implement a high-priority alert system using Interrupt Service Routines (ISRs) for instantaneous user feedback.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Interrupt-driven logic. Instead of constant polling, the microcontroller enters a high-priority state only when the bell is pressed, ensuring zero latency and allowing for power-saving 'sleep' modes.",working_principle:`1. Set the button pin as an INPUT_PULLUP.
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
}`,advantages:"Zero latency response, power efficient, clean code structure.",disadvantages:"ISR requires careful handling of shared variables (volatile keyword).",usage:"Press the button to trigger a high-frequency chime instantly.",components:["1x Arduino/ESP32","1x Push Button","1x Passive Buzzer","Jumper Wires"],circuit_diagram:"I2C 16x2 LCD: VCC -> 5V, GND -> GND, SDA -> A4 (Arduino) / GPIO 21 (ESP32), SCL -> A5 (Arduino) / GPIO 22 (ESP32).",author_name:"Antigravity",status:"Published",industrial_use:"Used in emergency pull-cords for medical facilities and operator call buttons in factories.",bom_cost:"$6"},{id:13,title:"Acoustic Trigger: Digital Sound Switch",level:"Beginner",description:"Design an sound-activated control node by analyzing acoustic energy levels through a microphone transducer.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Signal threshold analysis. A microphone module converts sound waves into a variable voltage. By setting a digital comparator threshold, we create a switch that responds only to designated decibel levels (like a clap).",working_principle:`1. Provide 5V/3.3V power to the sound sensor module.
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
}`,advantages:"Hands-free operation, adjustable sensitivity, low power idle.",disadvantages:"Prone to ambient noise interference without advanced filtering.",usage:"Adjust sensor sensitivity until the LED toggles only with a sharp clap.",components:["1x Microcontroller","1x Sound Sensor Module","1x 5V Relay Block","Jumper Wires"],circuit_diagram:"Matrix Keypad (4x4): Connect R1-R4 to D2-D5, C1-C4 to D6-D9. Solenoid Valve triggered via Relay on D10/GPIO 14.",author_name:"Antigravity",status:"Published",industrial_use:"Touchless interface for sterile medical environments and sound-activated safety shut-offs.",bom_cost:"$8"},{id:14,title:"Proximity Sensing: IR Obstacle Detection",level:"Beginner",description:"Develop an automated obstacle avoidance system using infrared reflection and modulated signal detection.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Infrared backscatter. An IR LED emits light which reflects off nearby objects. An IR receiver (Photodiode) detects this reflection, creating a non-contact proximity sensor.",working_principle:`1. Emit 38KHz IR signal (modulated for sunlight immunity).
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
}`,advantages:"Low cost, small form factor, high speed detection.",disadvantages:"Range limited to ~30cm; accuracy depends on object color/material.",usage:"Avoid direct sunlight on sensor; adjust range screw for desired proximity.",components:["1x Microcontroller","1x IR Obstacle Module","1x Buzzer/LED","Jumper Wires"],circuit_diagram:"Flame Sensor: VCC -> 5V, GND -> GND, AO -> A0/GPIO 34. Buzzer (+) -> D8, (-) -> GND. Place sensor near target protection area.",author_name:"Antigravity",status:"Published",industrial_use:"Object counting on fast-moving conveyor belts and proximity safety in handheld power tools.",bom_cost:"$5"},{id:15,title:"Capacitive HMI: Touch Sensor Lamp",level:"Beginner",description:"Construct a solid-state Human-Machine Interface (HMI) that replaces mechanical switches with capacitive touch tech.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32","Capacitive Sensing"],concept:"Capacitive sensing measures the change in electrical charge when a human finger (conductive) approaches the sensor pad. It creates a seamless, wear-proof switching mechanism.",working_principle:`1. Charge the conductive pad to a specific voltage.
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
}`,advantages:"No moving parts (durable), aesthetic design, through-material sensing (glass/plastic).",disadvantages:"Affected by moisture/high humidity; requires careful HMI design.",usage:"Connect the TTP223 module; it works through wooden or plastic surfaces up to 3mm.",components:["1x Microcontroller","1x TTP223 Touch Module","1x High Power LED","Jumper Wires"],circuit_diagram:"Water Level Sensor: (+) -> 5V, (-) -> GND, (S) -> A0/GPIO 34. Connect Alert LED to D13 with 220-ohm resistor.",author_name:"Antigravity",status:"Published",industrial_use:"Ruggedized touch panels for heavy machinery and sterile interfaces in food processing.",bom_cost:"$4"},{id:16,title:"Industrial Hazard Audit: Gas Leakage System",level:"Beginner",description:"Deploy an industrial-grade gas detection node capable of identifying hazardous LPG, Butane, and Smoke concentrations.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Analog Sensing"],concept:"Chemical sensing and calibration. The MQ-2 sensor uses a heating element to detect change in conductivity on a tin dioxide layer when combustible gas particles are present. It requires a preheating phase for stable readings.",working_principle:`1. Initialize the sensor heating element (requires 24h for full burn-in, 60s for runtime warmup).
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
}`,advantages:"Reliable chemical detection, long sensor life, adjustable sensitivity.",disadvantages:"High power consumption (~800mW for heater); requires manual calibration.",usage:"Allow 1 minute for the sensor to heat up before trusting readings. Test with a lighter's gas (don't ignite).",components:["1x Microcontroller","1x MQ-2 Gas Sensor Module","1x High-Decibel Buzzer","Jumper Wires"],circuit_diagram:"IR Receiver: Pin 1 (Out) -> D11, Pin 2 (GND) -> GND, Pin 3 (VCC) -> 5V. Multiple LEDs connected to D2, D3, and D4.",author_name:"Antigravity",status:"Published",industrial_use:"Critical gas leakage detection in commercial kitchens and boiler rooms.",bom_cost:"$15"},{id:17,title:"Hydro-Sensing Weather Terminal: Rain Alert",level:"Beginner",description:"Develop a localized weather station node that detects precipitation and manages sensor longevity through power management.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Electrolytic corrosion avoidance. Rain sensors use a series of conductive tracks. If power is constantly applied in wet conditions, the tracks will corrode. This project teaches how to use a digital pin to 'gate' power only when taking a measurement.",working_principle:`1. Connect the sensor's VCC to a digital pin on the microcontroller.
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
}`,advantages:"Significantly increases sensor lifespan, low power, accurate.",disadvantages:"Sensor surface requires periodic cleaning to remove dust/residue.",usage:"Install at a 45-degree angle to allow water to run off after the rain stops.",components:["1x Arduino Uno","1x Rain Sensor Module","1x High-Brightness LED","Jumper Wires"],circuit_diagram:"Soil Moisture: VCC -> 5V, GND -> GND, AO -> A0/GPIO 34. Water Pump -> Relay (Normally Open), Relay Control -> D7/GPIO 26.",author_name:"Antigravity",status:"Published",industrial_use:"Automated greenhouse closure systems and smart wipers in automotive HMI.",bom_cost:"$7"},{id:18,title:"Ultrasonic Rangefinder & Spatial Analysis",level:"Beginner",description:"Utilize Time-of-Flight (ToF) calculations with ultrasonic transducers to measure distance with centimeter accuracy.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32","Ultrasonic"],concept:"Acoustic telemetry. By measuring the time it takes for an ultrasonic 'ping' to return to the sensor, we can calculate distance using the constant speed of sound (~343m/s). This is the foundation of robotic vision and navigation.",working_principle:`1. Trigger an ultrasonic pulse by setting the 'Trig' pin HIGH for 10us.
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
}`,advantages:"Non-contact measurement, high resolution (1cm), cost-effective.",disadvantages:"Struggles with sound-absorbing materials (foam, fabric); range limited to ~4m.",usage:"Keep the sensor perpendicular to the target object for maximum accuracy.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic Sensor","1x I2C LCD (Optional)","Jumper Wires"],circuit_diagram:"HC-05 Bluetooth: VCC -> 5V, GND -> GND, TX -> RX, RX -> TX (use voltage divider for RX). LED -> D13.",author_name:"Antigravity",status:"Published",industrial_use:"Liquid level measurement in non-corrosive tanks and collision avoidance for AGVs.",bom_cost:"$9"},{id:19,title:"Precision Fluid Dynamics: Tank Monitor",level:"Beginner",description:"Architect a tiered fluid monitoring system to track water levels in industrial silos using discrete sensing nodes.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32","Hydro-logic"],concept:"Discrete water sensing relies on the conductivity of water. By placing probes at different heights, we create a multi-bit digital representation of the tank's fill level (Low, Medium, High).",working_principle:`1. Provide a common GND probe at the bottom of the tank.
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
}`,advantages:"Extremely reliable, zero moving parts, easy to troubleshoot.",disadvantages:"Potential for probe electrolysis if using DC current; requires stainless steel for longevity.",usage:"Ensure probes are made of non-corrosive material like food-grade stainless steel.",components:["1x Microcontroller","3x Stainless Steel Probes","1x Buzzer","Jumper Wires"],circuit_diagram:"MFRC522: VCC -> 3.3V, RST -> D9, GND -> GND, MISO -> D12, MOSI -> D11, SCK -> D13, SDA/SS -> D10. Servo -> D6.",author_name:"Antigravity",status:"Published",industrial_use:"Water management in municipal storage tanks and cooling tower monitoring.",bom_cost:"$14"},{id:20,title:"Intelligent Hydration: Closed-Loop Pump",level:"Beginner",description:"Construct a fully automated fluid transfer system that balances tank levels using feedback-loop control logic.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Automation"],concept:"Closed-loop feedback systems. The microcontroller monitors a sensor (input) and acts on a pump (output) to maintain a specific physical state (full tank). It introduces relay isolation for high-voltage motor control.",working_principle:`1. Constantly monitor the moisture or water level sensor.
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
}`,advantages:"End-to-end automation, prevents tank dry-running, high-power isolation.",disadvantages:"Requires careful plumbing to prevent leaks; relay maintenance needed for long-term use.",usage:"Use a 12V DC pump powered through the relay contacts for safety.",components:["1x Arduino","1x 5V Relay Module","1x 12V Water Pump","1x Level Sensor"],circuit_diagram:"PIR Sensor: VCC -> 5V, GND -> GND, OUT -> D2 (Arduino) / GPIO 27 (ESP32). Alert Buzzer -> D13/GPIO 26.",author_name:"Antigravity",status:"Published",industrial_use:"Automated hydroponic fertigation systems and smart home sump pump controllers.",bom_cost:"$28"},{id:21,title:"Biometric Guard: Fingerprint Access Control",level:"Beginner",description:"Implement a high-security biometric authentication node using optical fingerprint sensors and secure template storage.",category:"Security & Biometrics",estimatedTime:"60 mins",tech:["Arduino","ESP32","UART"],concept:"Minutiae-based matching. The AS608 sensor captures an image of the fingerprint, extracts unique features (minutiae), and converts them into a mathematical template. This template is then compared against locally stored data for authentication.",working_principle:`1. Initialize the optical sensor via UART communication.
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
}`,advantages:"High security, non-replicable biometric data, fast authentication (<1s).",disadvantages:"Sensitivity to wet/dirty fingers; templates limited to storage capacity.",usage:"Use the 'Enrollment' sketch first to save your fingerprint template to the sensor's flash memory.",components:["1x Microcontroller","1x AS608 Fingerprint Sensor","1x 5V/12V Solenoid","1x Relay Module"],circuit_diagram:"Sensor TX -> D2 | Sensor RX -> D3 | Sensor VCC -> 5V | Relay In -> D8",author_name:"Antigravity",status:"Published",industrial_use:"Server room access control and high-value asset storage lockers.",bom_cost:"$35"},{id:22,title:"RFID Identity Terminal: Contactless Access",level:"Beginner",description:"Deploy a contactless identification system using 13.56 MHz Radio Frequency Identification (RFID) and SPI protocols.",category:"Security & Connectivity",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Electromagnetic Induction. The MFRC522 reader generates a high-frequency field. When a passive tag enters this field, it scavenges power via induction to transmit its unique UID (Unique Identifier) wirelessly.",working_principle:`1. Establish SPI communication between the MCU and the RFID module.
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
}`,advantages:"Contactless (sanitary), durable tags, support for multiple cards simultaneously.",disadvantages:"Limited range (~3-5cm); tags can be cloned if not using encrypted sectors (Classic 1K).",usage:"Scan tags and note the UID in the Serial Monitor. Hardcode authorized UIDs into your security logic.",components:["1x Microcontroller","1x RC522 RFID Module","3x Passive RFID Tags/Cards","1x RGB LED"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | SDA -> D10 | RST -> D9",author_name:"Antigravity",status:"Published",industrial_use:"Employee time-tracking systems and contactless inventory management.",bom_cost:"$12"},{id:23,title:"Industrial Grid Monitor: AC Energy Telemetry",level:"Beginner",description:"Calculate AC voltage and current using non-invasive current transformers (CT) and voltage sensors for real-time energy analysis.",category:"Industrial & Energy",estimatedTime:"75 mins",tech:["Arduino","ESP32","Analog"],concept:"Power monitoring. Real power (Watts) is the average of instantaneous power (V * I) over time. This project implements RMS (Root Mean Square) calculations to handle sinusoidal AC waveforms.",working_principle:`1. Use a ZMPT101B for safe, isolated AC voltage sensing.
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
}`,advantages:"Isolated sensing (Safe), real-time efficiency tracking, non-invasive installation.",disadvantages:"Requires careful calibration against a known multimeter for accuracy; high sampling rate load.",usage:"Ensure current sensors are clamped ONLY around the phase (live) wire, not the neutral/earth bundle.",components:["1x Microcontroller","1x ZMPT101B AC Voltage Sensor","1x SCT-013 Current Transformer","1x LCD Screen"],circuit_diagram:"ZMPT Out -> A0 | SCT Out -> A1 | VCC -> 5V",author_name:"Antigravity",status:"Published",industrial_use:"Smart sub-metering for industrial equipment and solar panel efficiency monitoring.",bom_cost:"$28"},{id:24,title:"Remote Telemetry: GPS Tracker & Geofencing",level:"Beginner",description:"Utilize Global Positioning System (GPS) NMEA data to track location, speed, and altitude while implementing geofencing logic.",category:"Connectivity & Navigation",estimatedTime:"45 mins",tech:["Arduino","ESP32","GPS"],concept:"Satellite trilateration. The GPS module captures signals from multiple orbiting satellites to calculate Latitude and Longitude. Geofencing is a virtual boundary that triggers alerts when the node enters/exits a radius.",working_principle:`1. Set the GPS module to communicate at 9600 baud via UART.
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
}`,advantages:"Global operation, high accuracy outdoors (3-5m), no cellular needed for basic tracking.",disadvantages:"Requires clear sky view (poor indoors); slow 'Time to First Fix' (TTFF) in cold starts.",usage:"Place the antenna outdoors or by a window. It may take up to 2 minutes for the first fix (indicated by a blinking LED).",components:["1x Microcontroller","1x NEO-6M GPS Module","1x External Active Antenna","Jumper Wires"],circuit_diagram:"GPS TX -> D4 | GPS RX -> D3 | VCC -> 3.3V/5V",author_name:"Antigravity",status:"Published",industrial_use:"Fleet management, asset tracking in logistics, and automated marine buoys.",bom_cost:"$22"},{id:25,title:"Mesh Backbone: ESP-NOW Wireless Bridge",level:"Beginner",description:"Establish high-speed, low-latency node-to-node communication without requiring a Wi-Fi router or access point.",category:"Connectivity & Wireless",estimatedTime:"55 mins",tech:["ESP32","Wireless"],concept:"Connectionless wireless protocol. ESP-NOW is a fast, 2.4GHz protocol designed by Espressif that allows small packets of data to be transmitted between devices based on MAC addresses.",working_principle:`1. Put the ESP32 into Wi-Fi Station Mode but do not connect to a router.
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
}`,advantages:"Extremely low latency (no handshake), works without internet, high range (up to 200m).",disadvantages:"Limited packet size (250 bytes); ESP series exclusive.",usage:"Flash one board as Transmitter and another as Receiver. Get the Receiver's MAC address using the 'GetMAC' example.",components:["2x ESP32 Development Boards","1x USB Cable","Jumper Wires"],circuit_diagram:"Internal Radio used (No external wiring required for basic bridge).",author_name:"Antigravity",status:"Published",industrial_use:"Remote sensor clusters in agriculture and decentralized emergency alert systems.",bom_cost:"$16"},{id:26,title:"Industrial Black Box: SD Card Data Logger",level:"Beginner",description:"Architect a persistent storage system to log sensor telemetry over long durations using SPI-based SD card interfaces.",category:"Industrial & Storage",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Non-volatile storage. While microcontrollers have limited EEPROM, SD cards provide gigabytes of space. This project uses the FAT file system to store data in human-readable CSV formats.",working_principle:`1. Interface with the SD card module via the SPI bus.
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
}`,advantages:"High storage capacity, offline reliability, easy data porting to Excel/MATLAB.",disadvantages:"File corruption if power is lost during a write cycle; requires high-quality SD cards.",usage:"Format your SD card to FAT32 before use. Check the serial monitor if SD initialization fails.",components:["1x Microcontroller","1x MicroSD Card Module","1x FAT32 Formatted SD Card"],circuit_diagram:"CS -> D10 | MOSI -> D11 | MISO -> D12 | SCK -> D13",author_name:"Antigravity",status:"Published",industrial_use:"Weather station data logging and flight recorders for hobby drones.",bom_cost:"$14"},{id:27,title:"Air Quality Auditor: MQ-135 AQI Monitor",level:"Beginner",description:"Quantify indoor air pollutants including Ammonia, NOx, Alcohol, Benzene, and CO2 using electrochemical sensing.",category:"Industrial & Health",estimatedTime:"45 mins",tech:["Arduino","ESP32","Sensors"],concept:"Gas concentration mapping. The MQ-135 has a sensitive SnO2 layer. In clean air, conductivity is low. When pollutant gases are present, conductivity increases proportionally to gas concentration.",working_principle:`1. Burn-in the sensor for 24-48 hours for baseline stability.
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
}`,advantages:"Low cost broad-spectrum sensing, fast response time.",disadvantages:"High cross-sensitivity (cannot distinguish between specific gases easily); affected by humidity.",usage:"Calibrate in fresh outdoor air to find your 'Ro' baseline before measuring indoor pollutants.",components:["1x Microcontroller","1x MQ-135 Air Quality Sensor","1x I2C LCD Displays"],circuit_diagram:"MQ-135 AO -> A0 | VCC -> 5V | GND -> GND",author_name:"Antigravity",status:"Published",industrial_use:"HVAC automation in smart buildings and pollutant monitoring in manufacturing plants.",bom_cost:"$12"},{id:28,title:"Acoustic Pollution: Digital Decibel Monitor",level:"Beginner",description:"Measure ambient noise levels and frequency peaks to monitor acoustic pollution in industrial or residential zones.",category:"Safety & Environment",estimatedTime:"40 mins",tech:["Arduino","ESP32","Acoustics"],concept:"Sound Pressure Level (SPL). By sampling the output of an electret microphone at high speed, we can calculate the amplitude (volume) and apply a logarithmic scale to estimate decibels (dB).",working_principle:`1. Sample the microphone's analog output over a 50ms window.
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
}`,advantages:"Real-time noise monitoring, prevents hearing damage, compact size.",disadvantages:"Requires an amplified microphone module (like MAX4466) for accurate readings; sensitive to wind.",usage:"Adjust the gain potentiometer on the back of the microphone module until the LED only triggers on loud claps.",components:["1x Microcontroller","1x MAX4466 Electret Microphone","1x Red High-Intensity LED"],circuit_diagram:"Mic OUT -> A0 | VCC -> 3.3V | GND -> GND",author_name:"Antigravity",status:"Published",industrial_use:"Safety monitoring in high-decibel factories and noise restriction enforcement in residential áreas.",bom_cost:"$10"},{id:29,title:"Load Management: PIR Occupancy Controller",level:"Beginner",description:"Optimize energy consumption by controlling high-power loads based on human presence and infrared heat signatures.",category:"Energy & Automation",estimatedTime:"30 mins",tech:["Arduino","ESP32","Infrared"],concept:"Pyroelectric effect. Passive Infrared (PIR) sensors have two slots made of IR-sensitive material. When a warm body passes, it creates a differential change between the two slots, triggering a pulse.",working_principle:`1. Configure the PIR sensor's retriggering jumper to 'H' mode.
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
}`,advantages:"Significant energy savings (~30%), hands-free operation, highly reliable detection.",disadvantages:"Sensitive to rapid temperature changes (heaters/AC vents); can reach through thin glass.",usage:"Use the onboard potentiometers to adjust Sensitivity and Time-Delay according to your room size.",components:["1x Microcontroller","1x HC-SR501 PIR Sensor","1x 5V Relay Module","Jumper Wires"],circuit_diagram:"PIR Out -> D2 | Relay In -> D7 | VCC -> 5V",author_name:"Antigravity",status:"Published",industrial_use:"Automated lighting in warehouses and demand-based HVAC in office buildings.",bom_cost:"$11"},{id:30,title:"RTC Industrial Scheduler: Temporal Automation",level:"Beginner",description:"Develop a high-precision automation system that triggers industrial events based on wall-clock time using Real-Time Clock (RTC) modules.",category:"Industrial & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Timekeeping independence. Microcontrollers lose time when powered off. RTC modules like the DS3231 use a battery-backed crystal oscillator to maintain accurate time (±2ppm) regardless of the MCU's state.",working_principle:`1. Initialize communication with the DS3231 via the I2C bus.
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
}`,advantages:"Battery-backed (No time loss), extremely accurate (±1 min/year), works without Internet (NTP).",disadvantages:"Lithium battery replacement needed every 5-8 years; sensitive to extreme vibrations.",usage:"Use the 'DS3231' library. Ensure the CR2032 battery is inserted for time-memory functionality.",components:["1x Microcontroller","1x DS3231 RTC Module","1x CR2032 Battery","1x Relay Module"],circuit_diagram:"RTC SDA -> A4 | RTC SCL -> A5 | Relay IN -> D7 | VCC -> 5V",author_name:"Antigravity",status:"Published",industrial_use:"Shift-change whistles in factories and automated street-lighting controllers.",bom_cost:"$13"},{id:31,title:"OLED Command Center: Multi-Layered HMI",level:"Beginner",description:"Design a professional Human-Machine Interface (HMI) with rotating menus, real-time graphs, and status icons using I2C OLED displays.",category:"Automation & Visualization",estimatedTime:"60 mins",tech:["Arduino","ESP32","I2C"],concept:"Buffer-based rendering. Instead of writing directly to the screen pixels, we update an internal RAM buffer and then push the entire frame to the controller. This allows for flicker-free animations and complex graphics.",working_principle:`1. Initialize the SSD1306 controller via I2C.
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
}`,advantages:"Professional aesthetic, low power consumption (0.01W), high contrast.",disadvantages:"Small screen real estate (0.96 inch); burn-in risk if static images are left for weeks.",usage:"Use the 'U8g2' library for maximum control. Use an online 'Image2Cpp' converter for custom bitmaps.",components:["1x Microcontroller",'1x 0.96" OLED (SSD1306)',"1x Rotary Encoder (KY-040)","Connecting Wires"],circuit_diagram:"OLED SDA -> A4 | OLED SCL -> A5 | Encoder A -> D2 | Encoder B -> D3",author_name:"Antigravity",status:"Published",industrial_use:"Compact diagnostic displays for industrial pumps and smart thermostat interfaces.",bom_cost:"$9"},{id:32,title:"LoRa Field Node: Long Range Telemetry",level:"Beginner",description:"Establish long-range (up to 15km) wireless communication using Chirp Spread Spectrum (CSS) modulation for remote agricultural sensing.",category:"Connectivity & Wireless",estimatedTime:"90 mins",tech:["Arduino","ESP32","LoRa"],concept:"Chirp Spread Spectrum. Unlike Wi-Fi which uses high bandwidth, LoRa uses low bandwidth but spreads pulses over time (chirps). This makes it extremely resistant to interference and capable of deep penetration.",working_principle:`1. Interface with the SX1276/78 LoRa module via SPI.
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
}`,advantages:"Extreme range (10km+), penetration through walls, runs for years on a battery.",disadvantages:"Low data rate (bytes, not images); high latency; requires frequency-specific antennas.",usage:"Ensure an antenna is connected BEFORE powering up, or the module might overheat and fail.",components:["2x Microcontrollers","2x SX1278 LoRa Modules","2x Antennas","Breadboard"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | NSS -> D10 | DIO0 -> D2",author_name:"Antigravity",status:"Published",industrial_use:"Soil moisture monitoring in large-scale farms and remote meter reading in urban areas.",bom_cost:"$18"},{id:33,title:"Modbus Slave: RS485 Industrial Interface",level:"Beginner",description:"Convert your microcontroller into an industrial Modbus RTU slave that interfaces with PLCs and SCADA systems.",category:"Industrial & Control",estimatedTime:"70 mins",tech:["Arduino","ESP32","RS485"],concept:"Master-Slave communication. Modbus is the 'lingua franca' of factories. It uses 16-bit registers to store data. RS485 provides the physical layer for multi-drop, long-distance electrical communication.",working_principle:`1. Use a MAX485 TTL-to-RS485 converter for differential signaling.
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
}`,advantages:"Industry compatible, reliable over 1200m, supported by almost all PLCs.",disadvantages:"Half-duplex (cannot send/recv at once); requires MAX485 external hardware.",usage:"Set the Modbus Master (PLC) to the same baud rate and parity (9600-8-N-1 is standard).",components:["1x Microcontroller","1x MAX485 Module","1x PLC or USB-RS485 Converter"],circuit_diagram:"RO -> RX | DI -> TX | DE/RE -> D3 | A -> Bus A | B -> Bus B",author_name:"Antigravity",status:"Published",industrial_use:"Integrating custom IoT sensors into factory SCADA systems like Ignition or Wonderware.",bom_cost:"$10"},{id:34,title:"Vibration Auditor: Predictive Maintenance",level:"Beginner",description:"Analyze machine health by measuring vibration FFT (Fast Fourier Transform) to predict bearing failures before they occur.",category:"Industrial & Safety",estimatedTime:"80 mins",tech:["Arduino","ESP32","Signal Processing"],concept:"Frequency analysis. Mechanical defects like misalignment or worn bearings create specific vibration frequencies. By analyzing the 'Spectrum', we can identify which component is failing.",working_principle:`1. Sample acceleration data from an ADXL345 at a high frequency (e.g., 2kHz).
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
}`,advantages:"Saves thousands in repair costs, detects problems invisible to the human eye, non-stop operation.",disadvantages:"Computationally heavy (requires ESP32 for high-resolution FFT); sensitive to mounting position.",usage:"Mount the sensor rigidly to the motor casing using a screw or industrial magnet. Tape is NOT adequate.",components:["1x ESP32 (Recommended)","1x ADXL345 Triple-Axis Accelerometer","1x Status Buzzer"],circuit_diagram:"ADXL SDA -> GPIO 21 | ADXL SCL -> GPIO 22 | VCC -> 3.3V",author_name:"Antigravity",status:"Published",industrial_use:"Predictive maintenance for cooling tower fans and industrial conveyor rollers.",bom_cost:"$15"},{id:35,title:"Secure Gateway: Hardware Encryption",level:"Beginner",description:"Protect sensitive IoT telemetry using hardware-accelerated AES-128 encryption and secure key storage.",category:"Security & Connectivity",estimatedTime:"100 mins",tech:["ESP32","Security","AES"],concept:"End-to-end security. Software encryption keys can be dumped from memory. Hardware Security Modules (HSMs) like the ATECC608 secure the key in a tamper-proof chip that performs encryption internally.",working_principle:`1. Initialize the Secure Element via I2C.
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
}`,advantages:"Military-grade protection, prevents 'Man-in-the-Middle' attacks, tamper-evident.",disadvantages:"Complex implementation; lost private keys make data permanently unreadable.",usage:"Use the 'Microchip CryptoAuthLib' for ATECC608 integration. Never hardcode keys in plaintext.",components:["1x ESP32","1x ATECC608 Secure Element","1x MicroSD for local logs"],circuit_diagram:"AES chip SDA -> Pin 21 | SCL -> Pin 22 | GND -> GND",author_name:"Antigravity",status:"Published",industrial_use:"Medical device data transmission and secure payment portals in kiosks.",bom_cost:"$12"},{id:36,title:"Precision Weighing: HX711 Industrial Scale",level:"Beginner",description:"Interface with high-precision load cells and 24-bit ADCs to build an industrial weighing terminal for logistics and inventory.",category:"Industrial & Manufacturing",estimatedTime:"55 mins",tech:["Arduino","ESP32","Analog"],concept:"Wheatstone bridge. A load cell is a piece of aluminum with strain gauges. When weight is applied, the resistance of the gauges changes slightly. The HX711 amplifies this microvolt-level change and converts it to a 24-bit digital value.",working_principle:`1. Connect the 4 wires of the load cell (E+, E-, A+, A-) to the HX711 module.
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
}`,advantages:"Incredible precision (0.1g resolution), low cost, easy to integrate into ERP systems.",disadvantages:"Sensitive to temperature drift; requires rigid mechanical mounting; fragile strain gauges.",usage:"Avoid 'creep' by not leaving heavy loads on the scale for extended periods. Recalibrate monthly.",components:["1x Microcontroller","1x HX711 24-bit ADC","1x 5kg/10kg Load Cell","Mounting Plates"],circuit_diagram:"Load Cell (Red) -> E+ | (Black) -> E- | (White) -> A- | (Green) -> A+",author_name:"Antigravity",status:"Published",industrial_use:"Filling stations for chemical containers and automated parcel weighing in warehouses.",bom_cost:"$14"},{id:37,title:"Flow Guardian: Hall-Effect Liquid Meter",level:"Beginner",description:"Quantify liquid volume and flow rate using turbine-based Hall effect sensors for smart water management.",category:"Industrial & Energy",estimatedTime:"45 mins",tech:["Arduino","ESP32","Fluid Dynamics"],concept:"Magnetic pulse counting. As liquid flows through the meter, it spins a turbine. A magnet on the turbine passes a Hall-effect sensor, generating a pulse for every rotation. The frequency of pulses is proportional to the flow rate.",working_principle:`1. Attach the flow sensor signal pin to a hardware interrupt pin on the MCU.
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
}`,advantages:"Non-contact sensing (no leaks), low maintenance, high reliability for water/fuel.",disadvantages:"Cannot measure viscous liquids (honey/oil) accurately; turbine can jam with debris.",usage:"Use a 10k pull-up resistor if your sensor doesn't have an internal one. Install a filter upstream.",components:["1x Microcontroller","1x YF-S201 Flow Sensor","1x I2C LCD for Display"],circuit_diagram:"Sensor Red -> 5V | Sensor Black -> GND | Sensor Yellow -> D2",author_name:"Antigravity",status:"Published",industrial_use:"Smart irrigation monitoring and fuel consumption tracking in generators.",bom_cost:"$12"},{id:38,title:"Energy Optimizer: MPPT Solar Tracker",level:"Beginner",description:"Maximize solar energy harvest by tracking the sun's position using LDR arrays and servo-controlled panels.",category:"Energy & Automation",estimatedTime:"120 mins",tech:["Arduino","ESP32","Robotics"],concept:"Dual-Axis Tracking. Fixed solar panels lose up to 40% efficiency due to the angle of incidence. An active tracker ensures the panel is always perpendicular to the sun's rays for maximum photon absorption.",working_principle:`1. Position 4 Light Dependent Resistors (LDRs) in a cross formation separated by baffles.
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
}`,advantages:"Increases energy yield by 30-45%, fully autonomous, educational for PID logic.",disadvantages:"Moving parts require maintenance; servos consume energy; susceptible to high winds.",usage:"Use high-torque servos with metal gears for even small panels. Implement a 10-degree 'Deadzone' to prevent jitter.",components:["1x Microcontroller","2x MG996R Servos","4x LDRs","1x 5V Solar Panel"],circuit_diagram:"LDRs -> A0-A3 | PWM -> D9, D10 | External 5V Power for Servos",author_name:"Antigravity",status:"Published",industrial_use:"Utility-scale solar farms and smart house energy harvesting units.",bom_cost:"$25"},{id:39,title:"AC Load Phase Controller: Triac Dimming Logic",level:"Beginner",description:"Precisely control AC power (0-100%) for heaters and lamps using Zero-Crossing detection and Phase Angle firing.",category:"Energy & Industrial",estimatedTime:"80 mins",tech:["Arduino","ESP32","High Voltage"],concept:"Phase angle control. AC power varies like a sine wave. By waiting for the voltage to cross zero and then delaying the trigger (firing) of a Triac, we can chop the wave and effectively reduce the power delivered.",working_principle:`1. Detect the Zero-Crossing point using an H11AA1 optocoupler to avoid high voltage in the MCU.
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
}`,advantages:"Silent (unlike relays), precise power control, small footprint.",disadvantages:"EXTREMELY DANGEROUS (MAINS VOLTAGE); produces electrical noise (EMI); needs a heat sink.",usage:"Always use an isolation transformer for testing. Ensure the Triac is rated for at least 600V.",components:["1x Microcontroller","1x BT136 Triac","1x MOC3021 Optotriac","1x H11AA1 Optocoupler"],circuit_diagram:"CAUTION: HIGH VOLTAGE. Refer to professional isolated dimmer schematics.",author_name:"Antigravity",status:"Published",industrial_use:"PID-controlled industrial ovens and smart lighting for theaters/auditoriums.",bom_cost:"$9"},{id:40,title:"Factory Backbone: Integrated Telemetry Hub",level:"Beginner",description:"A comprehensive industrial node that consolidates Modbus, Wi-Fi, and Sensor data into a unified MQTT bridge.",category:"Industrial & IoT",estimatedTime:"150 mins",tech:["ESP32","MQTT","Modbus","RTC"],concept:"Data aggregation. In complex factories, single sensors aren't enough. This hub acts as a 'Local Master', collecting data from localized slaves and bridging it to the Global Cloud via secure MQTT binary protocols.",working_principle:`1. Initialize Multi-tasking (FreeRTOS) on ESP32 dual cores.
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
}`,advantages:"Reliable data consolidation, high uptime via FreeRTOS, industry-standard protocols.",disadvantages:"High power consumption; complex firmware management; requires robust network infrastructure.",usage:"Deploy in a NEMA-rated enclosure. Ensure the power supply is isolated and surge-protected.",components:["1x ESP32 DevKit","1x RS485 Shield","1x BME280 Sensor","1x MicroSD Slot"],circuit_diagram:"Consolidated wiring of SPI, I2C, and UART interfaces.",author_name:"Antigravity",status:"Published",industrial_use:"Central control nodes in smart factories and environmental auditing for data centers.",bom_cost:"$32"},{id:41,title:"Smart Waste Auditor: Ultrasonic Depth Sensing",level:"Beginner",description:"An automated bin that monitors fill levels and opens/closes the lid automatically to ensure urban sanitation.",category:"Smart City",estimatedTime:"40 mins",tech:["Arduino","Ultrasonic","Servo"],concept:"Level detection via time-of-flight. By measuring the time it takes for an ultrasonic pulse to bounce off the trash, we calculate the remaining volume in the bin.",working_principle:`1. Emit 40kHz ultrasonic pulse via Trig pin.
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
}`,advantages:"Touchless hygiene, efficient waste collection routing, low power.",disadvantages:"Ultrasonic sensors struggle with soft materials (foam/fabric) that absorb sound waves.",usage:"Calibrate the 'Full' threshold based on the height of your specific bin.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic","1x MG90S Servo"],circuit_diagram:"Trig->D12 | Echo->D11 | Servo->D9 | Power->5V Rail",author_name:"Antigravity",status:"Published",industrial_use:"Municipal waste management optimization and public restroom sanitation.",bom_cost:"$12"},{id:42,title:"IoT Pet Telemetry Hub: Weight-Based Feeder",level:"Beginner",description:"Monitor your pet's eating habits and remotely dispense food based on precise weight measurements.",category:"Consumer IoT",estimatedTime:"90 mins",tech:["ESP32","HX711","Stepper"],concept:"Strain gauge integration. By mounting the pet bowl on a load cell, we can monitor the exact grams of food consumed in real-time.",working_principle:`1. Calibrate HX711 with a known weight.
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
}`,advantages:"Prevents overfeeding, remote monitoring via mobile, highly accurate sensing.",disadvantages:"Mechanical complexity (Auger design); requires stable Wi-Fi for remote logs.",usage:"Use Food-Grade plastic for the auger. Shield the HX711 from sudden impact loads.",components:["1x ESP32","1x HX711 + 5kg Load Cell","1x 28BYJ-48 Stepper + Driver"],circuit_diagram:"Stepper -> GPIO 13,12,14,27 | HX711 -> GPIO 18,19 | External 5V Power",author_name:"Antigravity",status:"Published",industrial_use:"Livestock precision feeding and automated grain silos.",bom_cost:"$18"},{id:43,title:"Solar Efficiency Analyzer: Real-Time Power Audit",level:"Beginner",description:"High-precision telemetry node that calculates Solar Panel efficiency by measuring Voltage, Current, and Watts.",category:"Energy & Green Tech",estimatedTime:"60 mins",tech:["Arduino/ESP32","INA219","I2C"],concept:"High-side current sensing. Using a 0.1 ohm shunt resistor and a 12-bit ADC, the INA219 measures the voltage drop across the shunt to calculate current flow up to 3.2A.",working_principle:`1. Wire INA219 between Solar Panel and Battery/Load.
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
}`,advantages:"Precise energy accounting, allows for panel performance benchmarking.",disadvantages:"Limited to 26V max; shunt resistor generates small amount of heat at max current.",usage:"Use thick gauge wires for the power path to minimize voltage drop.",components:["1x Microcontroller","1x INA219 Sensor","1x 10W Solar Panel","1x OLED Display"],circuit_diagram:"INA219 V-IN+ -> Solar + | V-IN- -> Load + | GND -> Shared GND",author_name:"Antigravity",status:"Published",industrial_use:"Remote weather stations and UPS battery health monitoring systems.",bom_cost:"$15"},{id:44,title:"Health Link: Heart Rate & SpO2 Monitor",level:"Beginner",description:"Wearable-grade telemedicine node that monitors blood oxygen levels and heart rate using PPG sensor technology.",category:"Medical & Health",estimatedTime:"75 mins",tech:["ESP32","MAX30102","OLED"],concept:"Photoplethysmography (PPG). Red and IR LEDs shine through tissue; the sensor measures the change in light absorption caused by arterial blood pulses to derive SpO2 levels.",working_principle:`1. Initialize MAX30102 via I2C and enable Red/IR LEDs.
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
}`,advantages:"Non-invasive monitoring, highly portable, integrates easily with smartphone apps.",disadvantages:"Extremely sensitive to movement (motion artifacts); requires firm finger placement.",usage:"Wrap the sensor in dark tape to prevent ambient light interference. Keep finger steady.",components:["1x Microcontroller","1x MAX30102 Sensor","1x 0.96 inch OLED","1x Li-ion Battery"],circuit_diagram:"MAX30102 SDA -> GPIO 21 | SCL -> GPIO 22 | VCC -> 3.3V",author_name:"Antigravity",status:"Published",industrial_use:"Remote patient monitoring and fitness tracking wearables.",bom_cost:"$22"},{id:45,title:"Contactless Medical Thermometer: MLX90614",level:"Beginner",description:"A high-precision infrared thermometer that measures body or object temperature without physical contact.",category:"Medical & Health",estimatedTime:"50 mins",tech:["Arduino","MLX90614","Infrared"],concept:"Stefan-Boltzmann Law. Every object emits IR radiation. The MLX90614 uses a thermopile to detect this radiation and converts it to a temperature reading using calibrated internal logic.",working_principle:`1. Power the MLX90614 sensor via I2C supply.
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
}`,advantages:"Hygienic (zero contact), extremely fast response, industrial grade accuracy.",disadvantages:"Accuracy drops at distances > 5cm; accuracy affected by surface emissivity (e.g., shiny metal).",usage:"Hold the sensor approximately 2-4cm from the forehead for the most accurate medical-grade reading.",components:["1x Microcontroller","1x MLX90614 Sensor","1x Active Buzzer","1x Battery Case"],circuit_diagram:"Sensor SDA -> A4 | SCL -> A5 | Buzzer -> D3 | VCC -> 5V Rail",author_name:"Antigravity",status:"Published",industrial_use:"Health screening at entry points and non-destructive industrial temperature checks.",bom_cost:"$24"},{id:46,title:"LTE Asset Tracker: Cellular IoT Node",level:"Advanced",description:"A global tracking device that uses LTE-M/NB-IoT cellular networks to report GPS position even without Wi-Fi.",category:"Industrial & Logistics",estimatedTime:"120 mins",tech:["ESP32","SIM7000G","GPS"],concept:"Wide-area cellular coverage. Unlike Wi-Fi, LTE-M (Long Term Evolution for Machines) allows for low-power, long-distance communication suitable for assets moving across cities or countries.",working_principle:`1. Interface with the SIM7000G module via Hardware Serial (UART).
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
}`,advantages:"Works anywhere with cellular signal; much longer range than BT/Wi-Fi; high security.",disadvantages:"Requires a SIM card and data plan; higher module cost; complex power management.",usage:"Use an active GPS antenna for faster satellite lock. Ensure the module is placed near a window or outdoors.",components:["1x ESP32","1x SIM7000G Module","1x GPS Antenna","1x LTE Antenna","1x 3.7V LiPo"],circuit_diagram:"SIM7000 TX/RX -> ESP32 RX2/TX2 | Power -> Dedicated 5V/2A Source",author_name:"Antigravity",status:"Published",industrial_use:"Fleet management, high-value asset tracking (containers/heavy machinery), and wildlife tracking.",bom_cost:"$45"},{id:47,title:"Agri-Nervous System: NPK Soil Auditor",level:"Advanced",description:"Industrial grade soil analysis tool that measures Nitrogen (N), Phosphorus (P), and Potassium (K) using RS485 Modbus.",category:"Agri-Tech",estimatedTime:"100 mins",tech:["Arduino/ESP32","NPK Sensor","RS485"],concept:"Optical reflection spectroscopy. The industrial NPK probe uses specific light wavelengths to detect the concentration of soil nutrients, mapping the results to a Modbus register.",working_principle:`1. Connect the NPK probe to a MAX485 TTL-to-RS485 converter.
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
}`,advantages:"Precise fertilizer application, increases crop yield, data-driven farming.",disadvantages:"Probes are expensive (~$30-$50); requires external 12V-24V power supply for the probe.",usage:"Insert the probe fully into the soil. Ensure the RS485 lines (A and B) are not swapped.",components:["1x ESP32","1x RS485 NPK Sensor","1x MAX485 Converter","1x 12V DC Supply"],circuit_diagram:"NPK A/B -> MAX485 A/B | MAX485 RO/DI -> ESP32 16/17 | Power -> 12V",author_name:"Antigravity",status:"Published",industrial_use:"Large-scale automated greenhouses and precision farming consulting services.",bom_cost:"$55"},{id:48,title:"Industrial pH & Water Quality Monitor",level:"Beginner",description:"Continuous monitoring system for hydroponics or pool management using a BNC-interface pH electrode.",category:"Environmental",estimatedTime:"70 mins",tech:["Arduino","pH Sensor","Analog"],concept:"Potentiometric measurement. The pH probe generates a small millivolt signal (-414mV to +414mV) proportional to the hydrogen ion activity, which is amplified for the MCU to read.",working_principle:`1. Connect the pH probe via its BNC connector to the amplifier board.
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
}`,advantages:"High accuracy with proper calibration, durable industrial probe, critical for biological life.",disadvantages:"Probes require periodic storage in KCl solution; sensor 'drifts' over time; sensitive to electrical noise.",usage:"Do not submerge the BNC connector in water. Clean the probe with distilled water after measurements.",components:["1x Microcontroller","1x Industrial pH Probe + Amp","1x DS18B20 Temp Sensor"],circuit_diagram:"pH Amp VCC/GND -> 5V Rail | pH Signal -> A0 | Temp SIG -> D2",author_name:"Antigravity",status:"Published",industrial_use:"Aquaponics, wastewater treatment plants, and smart pool maintenance.",bom_cost:"$35"},{id:49,title:"Greenhouse Gas Auditor: CO2 & VOC Hub",level:"Intermediate",description:"Monitor indoor air safety by measuring Carbon Dioxide (CO2) and Volatile Organic Compounds (VOCs).",category:"Environmental",estimatedTime:"55 mins",tech:["ESP32","MH-Z19B","CCS811"],concept:"NDIR (Non-Dispersive Infrared). The MH-Z19B uses an IR light source and filter to count the absorption of CO2 molecules, providing much higher accuracy than simple chemical sensors.",working_principle:`1. Interface with the MH-Z19B sensor via Hardware Serial (UART).
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
}`,advantages:"Industrial-grade NDIR sensor, precise health monitoring, easy integration into HVAC.",disadvantages:"Requires 3-minute 'Warm-up' time; MH-Z19B consumes significant current (up to 150mA).",usage:"Place the sensor at breathing height (approx 1.5m). Calibration is self-running after 24h of operation.",components:["1x ESP32","1x MH-Z19B NDIR Sensor","1x CCS811 VOC Sensor","1x 5V Relay"],circuit_diagram:"MH-Z19 TX/RX -> ESP32 RX2/TX2 | CCS811 SDA/SCL -> GPIO 21/22",author_name:"Antigravity",status:"Published",industrial_use:"Smart office ventilation, greenhouse climate control, and mining safety monitoring.",bom_cost:"$28"},{id:50,title:"Seismic Guard: Early Warning System",level:"Advanced",description:"High-sensitivity vibration node designed to detect early-stage seismic activity or industrial structural failure.",category:"Industrial & Safety",estimatedTime:"85 mins",tech:["ESP32","ADXL355","Interrupts"],concept:"Digital micro-gravity sensing. Using a high-resolution accelerometer with very low noise, we can detect microscopic tremors and categorize them into seismic magnitude scales.",working_principle:`1. Initialize the ADXL355/345 via SPI or I2C in 'FIFO' mode.
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
}`,advantages:"Critical for safety, ultra-fast alert propagation, industrial-grade sensitivity.",disadvantages:"Prone to 'false positives' from local foot traffic or machinery; complex signal processing.",usage:"Mount the sensor on a solid building pillar or concrete floor using industrial adhesive for best vibration transmission.",components:["1x ESP32","1x ADXL355 Accel","1x High-Decibel Buzzer","1x SPI Logic Shifter"],circuit_diagram:"ADXL SPI -> ESP32 VSPI Port | Buzzer -> GPIO 4",author_name:"Antigravity",status:"Published",industrial_use:"Earthquake early warning, structural health monitoring for bridges, and machinery fault detection.",bom_cost:"$32"},{id:51,title:"BLE Mesh Beacon Scanner: Retail Analytics",level:"Advanced",description:"A high-speed BLE scanner that tracks asset movement and customer foot traffic by triangulation of BLE Beacons.",category:"Smart Retail",estimatedTime:"110 mins",tech:["ESP32","BLE","JSON"],concept:"RSSI-based proximity. BLE beacons emit periodic 'Advertisements'. By measuring the Received Signal Strength Indicator (RSSI), we can estimate the distance to the beacon.",working_principle:`1. Initialize the ESP32 BLE stack in 'Passive Scanning' mode.
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
}`,advantages:"Low cost per trackable unit; extremely low power (beacons last years on coincells).",disadvantages:"Prone to interference from human bodies/walls (blocking 2.4GHz); ±2m accuracy limit.",usage:"Mount scanners at ceiling height (2.5m - 3m) for maximum line-of-sight coverage.",components:["1x ESP32 DevKit","Multiple BLE Beacons","1x External Wi-Fi Antenna (Optional)"],circuit_diagram:"Scanners operate autonomously via Wi-Fi; Beacons are stand-alone battery units.",author_name:"Antigravity",status:"Published",industrial_use:"Warehouse inventory tracking and customer dwell-time analysis in shopping malls.",bom_cost:"$15"},{id:52,title:"Stratospheric Payload: LoRa Balloon Telemetry",level:"Advanced",description:"Design a lightweight telemetric node for high-altitude ballooning that survives extreme cold and low pressure.",category:"Aerospace & LoRa",estimatedTime:"180 mins",tech:["ESP32","LoRa","BME280"],concept:"Line-of-Sight transmission. In the upper atmosphere, a 100mW LoRa signal can travel over 200km due to the lack of geographical obstructions.",working_principle:`1. Initialize SPI communication with the LoRa (SX1276) chip.
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
}`,advantages:"Massive communication range; low hardware cost compared to satellite links.",disadvantages:"Requires thermal insulation (polystyrene box) to prevent battery failure at -50C.",usage:"Use a 1/2 wave dipole antenna pointed downwards for optimal ground coverage.",components:["1x ESP32","1x RA-02 LoRa Module","1x BME280","1x 18650 Li-ion Cell"],circuit_diagram:"LoRa SPI -> VSPI Port | BME280 SDA/SCL -> GPIO 21/22 | Antenna -> SMA Connector",author_name:"Antigravity",status:"Published",industrial_use:"Weather research balloons and long-range wildlife migration tracking.",bom_cost:"$26"},{id:53,title:"Smart City Lighting Mesh: Reactive Grid",level:"Intermediate",description:"A node-to-node mesh network where streetlights communicate to create a 'Light Wave' that follows pedestrians/vehicles.",category:"Smart City",estimatedTime:"90 mins",tech:["ESP32","ESP-NOW","LDR"],concept:"Peer-to-peer mesh. Using ESP-NOW, nodes broadcast 'Motion Detected' messages to all neighbors instantly without needing a central router.",working_principle:`1. Initialize ESP-NOW on all lighting nodes.
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
}`,advantages:"Reduces urban power consumption by 80%; decentralized (no single point of failure).",disadvantages:"Requires high-density of nodes for reliable mesh relay (max 100m spacing).",usage:"Use constant-current LED drivers if controlling actual streetlights (>10W).",components:["2x ESP32 DevKits","2x PIR Sensors","2x High-Power LEDs","1x 5V Supply"],circuit_diagram:"PIR -> GPIO 13 | LED -> GPIO 12/Logic MOSFET | VCC -> 5V rail",author_name:"Antigravity",status:"Published",industrial_use:"Smart highway lighting and low-traffic industrial park security lighting.",bom_cost:"$20"},{id:54,title:"Urban Noise Pollution Auditor",level:"Intermediate",description:"Continuous acoustic monitoring node that calculates dB(A) levels and identifies noise ordinance violations in cities.",category:"Environmental",estimatedTime:"60 mins",tech:["Arduino/ESP32","MAX9814","Audio"],concept:"A-weighting filter. Human hearing is less sensitive to very low and high frequencies. This project implements a software filter to map raw sound pressure to the dB(A) human perception scale.",working_principle:`1. Sample the MAX9814 microphone at high frequency (10kHz).
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
}`,advantages:"Low-cost alternative to industrial decibel meters; allows for city-wide mesh deployment.",disadvantages:"Microphones degrade when exposed directly to rain/humidity; requires acoustic calibration.",usage:"Place the microphone in an 'Acoustic Shell' or wind-sock to prevent wind-noise from skewing readings.",components:["1x Microcontroller","1x MAX9814 AGC Microphone","1x Waterproof Enclosure"],circuit_diagram:"Mic VCC -> 5V | Mic Gain -> GND | Mic Out -> A0 | VCC -> 5V",author_name:"Antigravity",status:"Published",industrial_use:"Enforcing construction site noise limits and auditing highway acoustic barriers.",bom_cost:"$14"},{id:55,title:"RFID Inventory Management System",level:"Intermediate",description:"A smart warehouse node that tracks arrival/departure of items in real-time using RFID tags.",category:"Industrial & Logistics",estimatedTime:"70 mins",tech:["Arduino","RFID-RC522","SPI"],concept:"Identity persistence. Each RFID tag has a unique 4 or 7-byte UID. By reading this UID and checking it against a local or remote Database, we verify the item's location and status.",working_principle:`1. Initialize the RC522 reader via the SPI bus.
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
}`,advantages:"Contactless identification; extremely low cost per tag; durable compared to barcodes.",disadvantages:"Limited range (3-5cm); metal items interfere with the antenna field.",usage:"Mount the reader behind non-metallic panels for a clean, industrial look.",components:["1x Microcontroller","1x RC522 Module","10x RFID Keyfobs/Cards"],circuit_diagram:"RC522 VCC -> 3.3V | RC522 SPI -> MCU SPI Port | Reset -> D9",author_name:"Antigravity",status:"Published",industrial_use:"Employee access control and real-time palette tracking in loading bays.",bom_cost:"$16"},{id:56,title:"Secure Biometric Door Logic: Wi-Fi Log",level:"Advanced",description:"An enterprise-grade door locking system that uses fingerprint biometrics and logs every entry to a secure Wi-Fi server.",category:"Security & Smart Home",estimatedTime:"90 mins",tech:["ESP32","AS608 Fingerprint","Relay"],concept:"Biometric hashing. The AS608 sensor converts a fingerprint image into a mathematical hash. If the scanned hash matches a stored template, the door is unlocked.",working_principle:`1. Enroll fingerprints into the AS608's internal lash library.
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
}`,advantages:"Cannot be picked or bypassed like traditional keys; precise audit trail of entries.",disadvantages:"Sensor performance drops if finger is wet or dirty; requires 12V supply for the lock solenoid.",usage:"Use an opto-isolated relay to protect the ESP32 from the inductive kickback of the solenoid.",components:["1x ESP32","1x AS608 Fingerprint Sensor","1x 5V Relay Module","1x 12V Solenoid Lock"],circuit_diagram:"Fingerprint RX/TX -> ESP32 17/16 | Relay -> GPIO 4 | Solenoid -> Relay Output",author_name:"Antigravity",status:"Published",industrial_use:"Server room access control and high-security equipment lockers.",bom_cost:"$38"},{id:57,title:"Liquid Level PID Controller",level:"Advanced",description:"The Liquid Level PID Controller is an advanced control system designed to maintain a constant liquid level in a tank using PID (Proportional-Integral-Derivative) control logic. The system continuously monitors the liquid level and automatically controls a pump or valve to maintain the desired setpoint.",category:"Industrial Automation",estimatedTime:"110 mins",tech:["Arduino","Ultrasonic","PWM Pump"],concept:"PID Control (Proportional-Integral-Derivative). Instead of simply turning the pump ON/OFF, we calculate a precise motor speed based on the error between current level and setpoint.",working_principle:`1. Ultrasonic sensor measures liquid level in real-time.
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
}`,advantages:"Accurate level control, reduces overflow, automatic operation, industrial-grade logic.",disadvantages:"Requires tuning of PID values, sensor accuracy affects performance.",usage:"Use a check-valve on the pump outlet to prevent backflow when the pump is at low duty-cycles.",components:["ESP32 / Arduino UNO","Ultrasonic Sensor / Level Sensor","Relay Module / Motor Driver","Water Pump / Valve","OLED Display","Potentiometer (Setpoint)","Jumper Wires","Power Supply 5V/12V"],circuit_diagram:"Ultrasonic (TRIG: 5, ECHO: 18), Relay (IN: 26), Potentiometer (OUT: 34), OLED (SDA: 21, SCL: 22).",author_name:"Antigravity",status:"Published",industrial_use:"Chemical process tanks, water treatment plants, boiler water control, and smart irrigation systems.",bom_cost:"$25"},{id:58,title:"Industrial Conveyor Counter: IR Beam",level:"Beginner",description:"High-speed non-contact counter for manufacturing lines using infrared break-beam technology.",category:"Industrial Automation",estimatedTime:"45 mins",tech:["Arduino","IR Beam","I2C LCD"],concept:"Optical interruption. When an object passes through the IR beam, it blocks the signal to the receiver, triggering a digital pulse that the MCU counts using an edge-triggered Interrupt.",working_principle:`1. Align the IR Transmitter and IR Receiver (Phototransistor) across the conveyor path.
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
}`,advantages:"Reliable at high speeds; non-contact (works for sensitive items); cheap implementation.",disadvantages:"Dust or steam on lenses can cause false counts; requires precise physical alignment.",usage:"Mount the sensors in a sturdy metal bracket to prevent misalignment from conveyor vibration.",components:["1x Arduino Uno","1x IR Break-beam Pair","1x I2C 16x2 LCD","1x Bracket Set"],circuit_diagram:"IR RX OUT -> D2 | IR TX/RX VCC -> 5V | LCD SDA/SCL -> A4/A5",author_name:"Antigravity",status:"Published",industrial_use:"Bottle counting in beverage plants and component verification in SMT assembly lines.",bom_cost:"$12"},{id:59,title:"Elderly Care Panic System",level:"Advanced",description:"The Elderly Care Panic System is an advanced IoT-based safety solution designed to protect elderly people. The system monitors the user’s location using GPS and features a panic button that instantly transmits real-time coordinates via LTE (4G) to caregivers.",category:"Medical & Safety",estimatedTime:"110 mins",tech:["ESP32","GSM/LTE","GPS"],concept:"Critical link reliability. By combining GPS (Location) and GSM (Communication), this node ensures that help is dispatched to the exact coordinates even if the person is outdoors.",working_principle:`1. GPS module tracks location.
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
}`,advantages:"Wide coverage via LTE, precision geolocation, independent of local WiFi.",disadvantages:"Requires active SIM subscription, GPS needs clear sky.",usage:"Use a latching circuit or deep-sleep mode to preserve battery life for several days/weeks.",components:["1x ESP32","1x SIM800L Module","1x GPS Module","1x LiPo Charger","1x SOS Button"],circuit_diagram:"SIM TX/RX -> ESP32 16/17 | GPS TX/RX -> ESP32 25/26 | Button -> GPIO 23",author_name:"Antigravity",status:"Published",industrial_use:"Home healthcare, senior living, patient safety monitoring, and personal security.",bom_cost:"$42"},{id:60,title:"Unified Agri-Tech Gateway",level:"Advanced",description:"The Unified Agri-Tech Gateway integrates soil monitoring, irrigation control, and environmental sensing into a single platform. It optimizes crop conditions by automating irrigation based on real-time multi-sensor data.",category:"Agri-Tech",estimatedTime:"180 mins",tech:["ESP32","RS485","Relay","BME280"],concept:"Holistic ecosystem data. By monitoring everything from NPK levels to localized air pressure, this gateway makes complex irrigation and fertilization decisions automatically.",working_principle:`1. Soil moisture, temp, hum, and light sensors capture data.
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
}`,advantages:"Saves water, improves crop yield, automated irrigation, IoT-enabled, low maintenance.",disadvantages:"Requires stable power, sensors need calibration, internet required for cloud features.",usage:"Housed in an IP67 waterproof enclosure. Use solar charging to make the gateway fully autonomous.",components:["1x ESP32","1x Soil Moisture Sensor","1x DHT22 (Temp & Humidity)","1x LDR (Light Sensor)","1x Relay Module","1x Water Pump / Solenoid Valve","1x OLED Display","1x Buzzer","Jumper Wires","Power Supply 5V"],circuit_diagram:"Soil (34), DHT22 (4), LDR (35), Relay (26), OLED (21, 22), Buzzer (27).",author_name:"Antigravity",status:"Published",industrial_use:"Smart agriculture, precision farming, greenhouse automation, water resource management.",bom_cost:"$25"},{id:61,title:"Smart Fan Speed Controller",level:"Beginner",description:"Automatically adjust fan speed based on ambient temperature using a DHT11 sensor and PWM motor control.",category:"Home Automation",estimatedTime:"45 mins",tech:["Arduino","DHT11","DC Motor"],concept:"Dynamic Cooling. This project uses the correlation between temperature and required airflow. By mapping temperature ranges to PWM duty cycles, we achieve energy-efficient cooling.",working_principle:`1. Capacitive moisture sensor probes the soil, outputting a voltage proportional to the dielectric constant.
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
}`,advantages:"Energy efficient, noise reduction at low temps.",disadvantages:"Requires motor driver for high power fans.",usage:"Place DHT11 away from the fan's direct airflow for accurate room measurement.",components:["1x Arduino","1x DHT11","1x L293D","1x DC Fan"],author_name:"Antigravity",status:"Published",bom_cost:"$12"},{id:62,title:"Automatic Window Opener",level:"Intermediate",description:"Drive a rack-and-pinion system with a servo to open windows when CO2 levels rise or it gets too hot inside.",category:"Smart Home",estimatedTime:"90 mins",tech:["Arduino","Servo","MQ-135","DHT11"],concept:"Automated Ventilation. Maintains indoor air quality by monitoring VOCs and temperature, triggering mechanical actuation for natural cooling.",working_principle:`1. The HC-SR04 ultrasonic sensor emits an 8-cycle ultrasonic burst at 40kHz.
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
}`,advantages:"Hands-free operation, improves health by reducing CO2.",disadvantages:"Needs mechanical mounting for the window frame.",usage:"Use a high-torque MG996R servo for heavy windows.",components:["1x Arduino","1x MG996R Servo","1x MQ-135","1x DHT11"],author_name:"Antigravity",status:"Published",bom_cost:"$22"},{id:63,title:"Smart Toilet Flush",level:"Beginner",description:"Touchless IR-based flushing system to promote hygiene in public and private restrooms.",category:"Health & Hygiene",estimatedTime:"40 mins",tech:["Arduino","IR Sensor","Servo"],concept:"Contactless Actuation. Reduces germ transmission by replacing physical handles with proximity triggers.",working_principle:`1. PIR (Passive Infrared) sensor detects motion by measuring changes in IR radiation from ambient objects.
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
}`,advantages:"High hygiene, water-saving potential.",disadvantages:"Battery replacement needed for portable units.",usage:"Mount IR sensor at waist level for easy reach.",components:["1x Arduino","1x IR Sensor","1x High Torque Servo"],author_name:"Antigravity",status:"Published",bom_cost:"$15"},{id:64,title:"Smart Washroom Light",level:"Beginner",description:"Motion-activated lighting for bathrooms with ambient light sensing to save energy during daytime.",category:"Energy Efficiency",estimatedTime:"30 mins",tech:["Arduino","PIR","LDR","Relay"],concept:"Occupancy Sensing. Combines motion detection with ambient light checking to ensure lights are only ON when needed.",working_principle:`1. PIR sensor checks for motion.
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
}`,advantages:"Automated energy saving, very cheap build.",disadvantages:"Relay clicking noise.",usage:"Mount PIR on the ceiling for widest coverage.",components:["1x Arduino","1x PIR","1x 5V Relay"],author_name:"Antigravity",status:"Published",bom_cost:"$8"},{id:65,title:"Smart Locker System",level:"Intermediate",description:"Secure storage with PIN-code entry and solenoid lock mechanism with wrong-password alerts.",category:"Security",estimatedTime:"60 mins",tech:["Arduino","Keypad","OLED","Solenoid"],concept:"Digital Access Control. Replaces physical keys with encrypted numerical codes and electromechanical locking.",working_principle:`1. User enters 4-digit PIN.
2. Comparison logic validates against stored password.
3. If correct, Solenoid pulls (Unlock).
4. After 5s, Solenoid releases (Lock).`,pin_config:{arduino:[{module:"Keypad",pinName:"Keypad Rows",mcuPin:"D2-D5",direction:"Output",voltage:"5V",description:"-"},{module:"Keypad",pinName:"Keypad Cols",mcuPin:"D6-D9",direction:"Output",voltage:"5V",description:"-"},{module:"Relay Module",pinName:"Solenoid Relay",mcuPin:"D10",direction:"Power",voltage:"5V",description:"High Power"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// Keypad Solenoid Logic
void setup() { pinMode(10, OUTPUT); }
void loop() {
  // if (pass) digitalWrite(10, HIGH);
}`,advantages:"No physical keys to lose, customizable pins.",disadvantages:"Needs reliable power backup for lock to stay secure.",usage:"Use a 12V adapter for the solenoid; Arduino cannot power it directly.",components:["1x Arduino","1x 4x4 Keypad","1x 12V Solenoid"],author_name:"Antigravity",status:"Published",bom_cost:"$25"},{id:66,title:"Smart Mirror Display (Basic)",level:"Intermediate",description:"A two-way mirror that displays time, date, and weather info from an ESP32 behind the glass.",category:"IoT & Consumer",estimatedTime:"120 mins",tech:["ESP32","OLED/TFT","NTP"],concept:"Info Overlay. Uses partial reflection to mix real-world reflection with digital data for a Sci-Fi aesthetic.",working_principle:`1. ESP32 connects to Wi-Fi.
2. Fetches time via NTP.
3. Displays data in high-contrast white-on-black mode.
4. Reflected image overlays the digital data.`,pin_config:{esp32:[{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"G21",direction:"Output",voltage:"3.3V",description:"I2C"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"SSD1306 OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data"},{module:"SSD1306 OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock"}],arduino:[]},code:`// NTP Time Sync Logic
void setup() {
  WiFi.begin("SSID", "PASS");
}
void loop() {
  // Update OLED text
}`,advantages:"Extremely futuristic look, daily productivity booster.",disadvantages:"Needs dark room/background for best visibility.",usage:"Use a 50/50 two-way acrylic mirror for the best result.",components:["1x ESP32","1x 1.3 inch OLED","1x Two-way Mirror"],author_name:"Antigravity",status:"Published",bom_cost:"$30"},{id:67,title:"Smart Attendance System (Basic)",level:"Beginner",description:"Log entry times to an SD card using RFID cards, suitable for small offices and classrooms.",category:"Management",estimatedTime:"60 mins",tech:["Arduino","RFID-RC522","SD Card Module"],concept:"Identity Logging. Maps unique RFID UIDs to user names and records timestamps for audit trails.",working_principle:`1. The user taps their RFID tag (13.56 MHz MIFARE) against the reader.
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
}`,advantages:"Tamper-proof (if mounted), fast processing.",disadvantages:"Requires physical cards for every user.",usage:"Ensure the SD card is formatted to FAT32 before use.",components:["1x Arduino","1x RC522 RFID","1x SD Module"],author_name:"Antigravity",status:"Published",bom_cost:"$20"},{id:68,title:"Smart Pet Feeder",level:"Intermediate",description:"An automated kibble dispenser with scheduled feeding and manual override via Wi-Fi.",category:"Consumer IoT",estimatedTime:"90 mins",tech:["ESP32","Servo","RTC"],concept:"Precision Dosing. Uses mechanical rotation to dispense set volumes of food at precise intervals.",working_principle:`1. The system uses a real-time clock (RTC) to maintain precise time scheduling.
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
}`,advantages:"Reliable pet care when owners are away.",disadvantages:"May jam if food particles are too large.",usage:"Design a vertical tube hopper for consistent gravity flow.",components:["1x ESP32","1x DS3231 RTC","1x 360 Servo"],author_name:"Antigravity",status:"Published",bom_cost:"$28"},{id:69,title:"Smart Plant Monitor",level:"Beginner",description:"Visual indicator for plant health using moisture sensors and an RGB LED to show status (Red=Dry, Green=Happy).",category:"Green Tech",estimatedTime:"30 mins",tech:["Arduino","Soil Moisture","RGB LED"],concept:"Environmental Feedback. Bridges the gap between plant needs and human perception using visual color coding.",working_principle:`1. Capacitive moisture sensor reads water level.
2. Arduino maps reading to 3 states: DRY, OK, WET.
3. RGB LED changes color accordingly.`,pin_config:{arduino:[{module:"Soil",pinName:"Soil Moisture",mcuPin:"A0",direction:"Output",voltage:"5V",description:"Analog In"},{module:"1x RGB LED",pinName:"RGB Pins",mcuPin:"D3,D5,D6",direction:"Output",voltage:"5V",description:"PWM"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},code:`// RGB Status Logic
void loop() {
  int val = analogRead(A0);
  if (val < 300) setRed();
  else setGreen();
}`,advantages:"Extremely easy to build, great for kids.",disadvantages:"Cheap resistive sensors corrode quickly.",usage:"Calibrate threshold by dipping sensor in wet vs dry soil first.",components:["1x Arduino","1x Moisture Sensor","1x RGB LED"],author_name:"Antigravity",status:"Published",bom_cost:"$7"},{id:70,title:"Digital Compass",level:"Intermediate",description:"High-precision heading indicator using a magnetometer and an OLED display.",category:"Robotics & Navigation",estimatedTime:"50 mins",tech:["Arduino","HMC5883L","OLED"],concept:"Geomagnetic Orientation. Senses the Earth's magnetic field in 3 axes to calculate North-relative heading.",working_principle:`1. HMC5883L/QMC5883L sensor measures the Earth's magnetic field in X, Y, and Z planes.
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
}`,advantages:"Compact navigation tool, great for drones/rovers.",disadvantages:"Sensitive to local metal objects.",usage:"Calibrate by rotating the sensor in a 'figure 8' pattern before first use.",components:["1x Arduino","1x HMC5883L","1x OLED 0.96"],author_name:"Antigravity",status:"Published",bom_cost:"$14"},{id:71,title:"Smart Key Finder",level:"Beginner",description:"Whistle-activated or Bluetooth-enabled key tracker that beeps when you can't find your keys.",category:"Consumer Utility",estimatedTime:"45 mins",tech:["Arduino Nano","Buzzer","Sound Sensor"],concept:"Acoustic Triggering. Listens for specific frequencies (whistles) or signal strength (BLE) to trigger an alert.",working_principle:`1. Uses a 433MHz or Bluetooth Low Energy (BLE) beacon paired with a transceiver.
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
}`,advantages:"Saves time, low power standby.",disadvantages:"False triggers from loud TV.",usage:"Use an Arduino Nano for the smallest possible footprint.",components:["1x Arduino Nano","1x Mic Sensor","1x Piezo Buzzer"],author_name:"Antigravity",status:"Published",bom_cost:"$9"},{id:72,title:"Home Security Alarm",level:"Intermediate",description:"A multi-zone security system with vibration sensors and magnetic door switches.",category:"Security",estimatedTime:"90 mins",tech:["Arduino","Reed Switch","Vibration Sensor","Buzzer"],concept:"Perimeter Defense. Monitors circuit continuity (door) and kinetic energy (window glass break).",working_principle:`1. Laser diode emits a concentrated beam across a doorway onto a photoresistor (LDR).
2. While the beam is uninterrupted, LDR resistance remains low.
3. If an intruder breaks the beam, LDR resistance spikes instantly.
4. The MCU detects this threshold crossing and triggers the high-decibel active buzzer (Alarm).`,pin_config:{arduino:[{module:"Door",pinName:"Door Switch",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Interrupt"},{module:"Relay Module",pinName:"Siren Relay",mcuPin:"D13",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"High reliability, physical security.",disadvantages:"Requires wiring across the home.",usage:"Add a hidden switch to disarm the alarm when you enter.",components:["1x Arduino","5x Reed Switches","1x Loud Siren"],author_name:"Antigravity",status:"Published",bom_cost:"$35",code:`// Laser Tripwire Alarm
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
}`,advantages:"Extremely low cost, high sensitivity.",disadvantages:"Triggers from door slams.",usage:"Mount near the center of the door panel for best resonance.",components:["1x Arduino","1x Piezo Disc","1x LED"],author_name:"Antigravity",status:"Published",bom_cost:"$5"},{id:74,title:"Light Intensity Logger",level:"Beginner",description:"Track sun exposure throughout the day in different rooms to optimize indoor plant placement.",category:"Data Logging",estimatedTime:"60 mins",tech:["Arduino","LDR","SD Card"],concept:"Lux Auditing. Records ambient light levels at fixed intervals to calculate total daily light integral.",working_principle:`1. LDR sensor is configured in a voltage divider circuit with a 10k resistor.
2. Analog voltage represents the logarithmic light level in the environment.
3. Every hour, the ESP32 wakes from light sleep and samples the ADC.
4. Data is stored on an SD card in .CSV format or pushed to an InfluxDB server for long-term light trend analysis.`,pin_config:{arduino:[{module:"LDR Photoresistor",pinName:"LDR",mcuPin:"A2",direction:"Output",voltage:"5V",description:"-"},{module:"1x SD Module",pinName:"SD CS",mcuPin:"D4",direction:"Output",voltage:"5V",description:"SPI"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}]},advantages:"Objective data for gardening.",disadvantages:"Requires computer to graph.",usage:"Place in different corners to find the best light spot.",components:["1x Arduino","1x LDR module","1x SD Module"],author_name:"Antigravity",status:"Published",bom_cost:"$12",code:`// Light Intensity Logger
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
4. It also activates a local audible buzzer in an SOS pattern (Short-Short-Short-Long-Long-Long).`,pin_config:{esp32:[{module:"Panic",pinName:"Panic Button",mcuPin:"G14",direction:"Output",voltage:"3.3V",description:"Pullup"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Critical for elderly safety.",disadvantages:"False alarms if not guarded.",usage:"Encase in a bright red 3D printed housing.",components:["1x ESP32","1x Arcade Button","1x High Decibel Buzzer"],author_name:"Antigravity",status:"Published",bom_cost:"$18",code:`// Smart Emergency SOS Node
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
4. Power Optimization: The system remains in deep sleep and wakes up only when an interrupt is triggered by the FSR voltage divider.`,pin_config:{arduino:[{module:"1x FSR",pinName:"FSR Sensor",mcuPin:"A1",direction:"Input",voltage:"5V",description:"Divider"},{module:"Serial",pinName:"Serial MP3",mcuPin:"D2/3",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Unique guest experience.",disadvantages:"FSRs can be fragile.",usage:"Use two layers of rigid cardboard to protect the FSR.",components:["1x Arduino Nano","1x FSR","1x DFPlayer Mini"],author_name:"Antigravity",status:"Published",bom_cost:"$22",code:`// Smart Pressure Sensitive Door Mat
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
4. Hysteresis: The fan stays on until the temperature drops to 2°C below the threshold to prevent rapid oscillations.`,pin_config:{arduino:[{module:"1x LM35",pinName:"LM35",mcuPin:"A0",direction:"Output",voltage:"5V",description:"-"},{module:"2N2222",pinName:"2N2222 Base",mcuPin:"D5",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Prevents print warping.",disadvantages:"LM35 precision.",usage:"Place near the print head.",components:["1x Arduino","1x LM35","1x 2N2222 Transistor"],author_name:"Antigravity",status:"Published",bom_cost:"$6",code:`// Auto Temperature Controlled Fan
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
4. Safety: A physical override switch inside the house allows the user to manually lock/unlock the entry.`,pin_config:{arduino:[{module:"HC-SR04 Ultrasonic",pinName:"Trig/Echo",mcuPin:"D12/11",direction:"Output",voltage:"5V",description:"-"},{module:"Stepper",pinName:"Stepper",mcuPin:"D8-D11",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Accessible, hygienic.",disadvantages:"Mechanical alignment.",usage:"Mount sensor at chest height.",components:["1x Arduino","1x HC-SR04","1x NEMA 17 Stepper"],author_name:"Antigravity",status:"Published",bom_cost:"$40",code:`// Smart Automated Entry Node
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
4. After a 10-second delay (allowing the vehicle to pass), it automatically lowers the barrier.`,pin_config:{arduino:[{module:"1x IR Beam Pair",pinName:"IR Receiver",mcuPin:"D2",direction:"Output",voltage:"5V",description:"Safety"},{module:"RF",pinName:"RF Receiver",mcuPin:"D3",direction:"Output",voltage:"5V",description:"Remote"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Heavy duty, safe.",disadvantages:"Mechanical fabrication.",usage:"Test auto-reverse extensively.",components:["1x Arduino","1x IR Beam Pair","1x Worm Gear Motor"],author_name:"Antigravity",status:"Published",bom_cost:"$55",code:`// Automated Gate Barrier
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
4. Auto-shutoff occurs after 5 minutes of no motion to save energy.`,pin_config:{arduino:[{module:"Mic",pinName:"Mic Sensor",mcuPin:"D7",direction:"Input",voltage:"5V",description:"-"},{module:"Relay Module",pinName:"AC Relay",mcuPin:"D4",direction:"Output",voltage:"5V",description:"-"}],esp32:[{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}]},advantages:"Hands-free.",disadvantages:"False triggers.",usage:"Adjust sensitive pot.",components:["1x Arduino","1x Sound Sensor","1x 5V Relay"],author_name:"Antigravity",status:"Published",bom_cost:"$10",code:`// Smart Adaptive Lamp
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

void loop() { server.handleClient(); }`,advantages:"Cross-platform control, no external apps needed.",disadvantages:"Limited range dependent on router.",usage:"Connect to ESP32 IP address in browser.",components:["1x ESP32","1x Resistor","1x LED"],author_name:"Antigravity",status:"Published",bom_cost:"$8"},{id:82,title:"Smart Home Automation",level:"Intermediate",description:"Industrial grade 4-channel relay control system with real-time status feedback and over-current protection.",category:"Home Automation",estimatedTime:"60 mins",tech:["ESP32","Relay Module","WebSockets"],concept:"Bi-directional Control. Uses WebSockets for low-latency communication between the user dashboard and high-voltage relays.",working_principle:`1. Uses a persistent WebSocket (WS) connection for sub-100ms latency between the dashboard and the hardware.
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

void loop() { webSocket.loop(); }`,advantages:"Instant response, handles AC appliances.",disadvantages:"Relay contact wear over time.",usage:"Use an optoisolated relay module for safety.",components:["1x ESP32","1x 4-Ch Relay Board","1x 5V Power Supply"],author_name:"Antigravity",status:"Published",bom_cost:"$22"},{id:83,title:"Smart Energy Meter",level:"Advanced",description:"Advanced IoT system monitoring real-time voltage, current, and power using a digital energy meter sensor. Features cost calculation and overload protection logic.",category:"Green Tech",estimatedTime:"120 mins",tech:["ESP32","PZEM-004T","MQTT"],concept:"Non-Invasive Sensing. Measures RMS values via CT sensors and calculates real-time power metrics for energy auditing.",working_principle:`1. PZEM-004T measures RMS metrics.
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
}`,advantages:"High-precision measurement, automatic protection, cloud analytics.",disadvantages:"Mains high-voltage safety critical.",usage:"Clamp CT sensor around the live wire of the appliance.",components:["1x ESP32","1x PZEM-004T","1x CT Coil"],author_name:"Antigravity",status:"Published",bom_cost:"$35",industrial_use:"Smart grids, industrial sub-metering, energy audits, and billing systems."},{id:84,title:"IoT Based Weather Station",level:"Intermediate",description:"Solar-powered precision station measuring temperature, humidity, pressure, and air quality with ThingSpeak integration.",category:"Environmental",estimatedTime:"90 mins",tech:["ESP32","BME280","Deep Sleep"],concept:"Ultra-Low Power Logging. Uses deep sleep modes to run on battery for months, waking up only for data transmission.",working_principle:`1. Deep Sleep Strategy: The ESP32 shuts down all peripherals and cores except the RTC timer to save power.
2. Upon wake-up, it initializes the BME280 sensor to read ambient Pressure, Temperature, and Humidity.
3. It uses a high-gain WiFi antenna to connect and push the CSV-formatted data to a ThingSpeak channel.
4. Battery levels are monitored via a voltage divider to notify the user when the solar charge is low.`,pin_config:{esp32:[{module:"BME280",pinName:"SDA",mcuPin:"GPIO 21",direction:"Bidirectional",voltage:"3.3V",description:"I2C Data Bus"},{module:"BME280",pinName:"SCL",mcuPin:"GPIO 22",direction:"Output",voltage:"3.3V",description:"I2C Clock Bus"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Maintenance free on solar, accurate data.",disadvantages:"I2C address conflicts if unsheathed.",usage:"Mount in a Stevensen screen for best accuracy.",components:["1x ESP32","1x BME280","1x Solar Panel","1x TP4056"],author_name:"Antigravity",status:"Published",bom_cost:"$25",code:`// Ultra-Low Power Weather Station
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
4. Safe Guard: The pump terminates after 30 seconds regardless of reading to prevent flooding if sensor fails.`,pin_config:{esp32:[{module:"Moisture Sensor",pinName:"AOUT",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Analog Moisture Level"},{module:"Relay Module",pinName:"RELAY",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"Control Signal"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Water conservation, plant health.",disadvantages:"Needs plumbing setup.",usage:"Insert sensor vertically into root zone.",components:["1x ESP32","1x Capacitive Sensor","1x 12V Solenoid"],author_name:"Antigravity",status:"Published",bom_cost:"$28",code:`// Fail-Safe Smart Irrigation
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
4. Integration: The Blynk app dashboard allows the owner to 'Force Open' or 'Lockdown' the entry remotely.`,pin_config:{esp32:[{module:"RC522",pinName:"SDA/SS",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"SPI Chip Select"},{module:"RC522",pinName:"SCK",mcuPin:"GPIO 18",direction:"Output",voltage:"3.3V",description:"SPI Clock"},{module:"MFRC522 RFID",pinName:"MISO",mcuPin:"GPIO 19",direction:"Input",voltage:"3.3V",description:"SPI Master In"},{module:"RC522",pinName:"MOSI",mcuPin:"GPIO 23",direction:"Output",voltage:"3.3V",description:"SPI Master Out"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"High security, easy to revoke cards.",disadvantages:"Requires backup physical key for safety.",usage:"Mount reader behind wood or plastic for clean look.",components:["1x ESP32","1x MFRC522","1x Solenoid Lock"],author_name:"Antigravity",status:"Published",bom_cost:"$18",code:`// High-Security RFID Lock
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
3. Successful match triggers cloud log and status OLED display.`,pin_config:{esp32:[{module:"RFID",pinName:"SDA",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"RFID Select"},{module:"RFID",pinName:"SCK",mcuPin:"GPIO 18",direction:"Input",voltage:"3.3V",description:"SPI Clock"},{module:"RFID",pinName:"MOSI",mcuPin:"GPIO 23",direction:"Input",voltage:"3.3V",description:"SPI Data"},{module:"RFID",pinName:"MISO",mcuPin:"GPIO 19",direction:"Output",voltage:"3.3V",description:"SPI Data"},{module:"RFID",pinName:"RST",mcuPin:"GPIO 22",direction:"Input",voltage:"3.3V",description:"Reset"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display Data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display Clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Alert"}]},advantages:"Prevents proxy attendance, cloud logs, automated reporting.",disadvantages:"Needs stable internet connection.",usage:"Generate a unique ID for every student/employee.",components:["1x ESP32","1x RC522","1x OLED","1x SD Slot"],author_name:"Antigravity",status:"Published",bom_cost:"$24",code:`// Institutional IoT Attendance
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
4. Emergency Proto: Immediately activates a high-frequency siren and disconnects a relay (simulating gas valve shutoff).`,pin_config:{esp32:[{module:"MQ-2 Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"5V/3.3V",description:"Gas Concentration Output"},{module:"Alarm Siren",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Local Audible Alert"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Life-saving automation, remote monitoring.",disadvantages:"MQ-2 needs pre-heating time.",usage:"Mount near Potential gas sources.",components:["1x ESP32","1x MQ-2","1x Buzzer"],author_name:"Antigravity",status:"Published",bom_cost:"$12",code:`// Industrial Gas Safety Node
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
4. A physical LED indicator at the slot entrance changes from Green (Vacant) to Red (Occupied) for driver convenience.`,pin_config:{esp32:[{module:"HC-SR04 Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 4",direction:"Output",voltage:"3.3V",description:"Distance Pulse Start"},{module:"HC-SR04 Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"Distance Pulse Return"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Reduces traffic, efficient space use.",disadvantages:"Sensors can be blocked.",usage:"Mount on the ceiling of the parking garage.",components:["1x ESP32","3x HC-SR04","1x I2C LCD"],author_name:"Antigravity",status:"Published",bom_cost:"$18",code:`// Smart Parking Slot Monitor
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
4. Energy reporting: The system calculates kWh saved by comparing the 'Auto-Dimmed' state vs 'Always-On' state.`,pin_config:{esp32:[{module:"Motion Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Pedestrian Detection"},{module:"LED Driver",pinName:"PWM",mcuPin:"GPIO 14",direction:"Output",voltage:"3.3V",description:"Dimming Control"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"PIR Sensor",pinName:"OUT",mcuPin:"GPIO 27",direction:"Input",voltage:"3.3V",description:"Motion Detection"},{module:"LDR Sensor",pinName:"Analog",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"Light Intensity"}],arduino:[]},advantages:"Energy savings, reduced light pollution.",disadvantages:"Requires sensitive PIR.",usage:"Chain multiple nodes together.",components:["1x ESP32","1x PIR","1x Power MOSFET","1x LDR"],author_name:"Antigravity",status:"Published",bom_cost:"$15",code:`// Autonomous Smart Streetlight
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
4. System sends an emergency HTTP POST request with the 'Critical Fire' status and node location.`,pin_config:{esp32:[{module:"Flame Sensor",pinName:"DO",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"Digital Fire Signal"},{module:"Siren Relay",pinName:"CMD",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Siren Activation"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 13",direction:"Output",voltage:"3.3V",description:"Audio Alert"}],arduino:[]},advantages:"Early detection saves lives.",disadvantages:"Sensitive to sunlight.",usage:"Install in kitchens or server rooms.",components:["1x ESP32","1x Flame Sensor","1x High Decibel Buzzer"],author_name:"Antigravity",status:"Published",bom_cost:"$14",code:`// Fire Mitigation & Alert System
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
4. Manual Override: Physical push button on the panel allows manual pump control during maintenance.`,pin_config:{esp32:[{module:"HC-SR04 Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 12",direction:"Output",voltage:"3.3V",description:"Ping Start"},{module:"HC-SR04 Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 13",direction:"Input",voltage:"3.3V",description:"Ping Finish"},{module:"Pump Relay",pinName:"IN",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"AC Pump Switch"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Prevents overflow, automates chore.",disadvantages:"Condensation concerns.",usage:"Mount sensor in waterproof enclosure above the tank.",components:["1x ESP32","1x JSN-SR04T","1x 30A Relay"],author_name:"Antigravity",status:"Published",bom_cost:"$28",code:`// Liquid Level Logic Controller
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
4. The system detects if the compressor is failing by monitoring if the temperature rises above 10°C for more than an hour.`,pin_config:{esp32:[{module:"Temp Probe",pinName:"DATA",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"OneWire Bus"},{module:"Door Sensor",pinName:"OUT",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"Magnetic Switch"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Prevents waste, energy efficient.",disadvantages:"Thin wiring needed.",usage:"Use flat ribbon cables.",components:["1x ESP32","1x DS18B20 Waterproof","1x Magnetic Reed Switch"],author_name:"Antigravity",status:"Published",bom_cost:"$16",code:`// Smart Refrigerator Security Log
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
4. Feedback loop: A 16x2 LCD provides the current power usage and connectivity status of the smart room.`,pin_config:{esp32:[{module:"IR Receiver",pinName:"DATA",mcuPin:"GPIO 15",direction:"Input",voltage:"3.3V",description:"Remote Control Input"},{module:"Status LCD",pinName:"I2C",mcuPin:"GPIO 21/22",direction:"Output",voltage:"3.3V",description:"Show Current Mode"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Convenience, accessible.",disadvantages:"Complex scene logic.",usage:"Program codes from existing remotes.",components:["1x ESP32","1x TSOP IR Receiver","1x 4-Relay Board"],author_name:"Antigravity",status:"Published",bom_cost:"$26",code:`// Smart Comfort & Energy Node
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
3. Abnormal biometrics trigger buzzer and doctor alerts via IoT cloud.`,pin_config:{esp32:[{module:"MAX30102",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Data Line"},{module:"MAX30102",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Clock Line"},{module:"Temperature Sensor",pinName:"DATA",mcuPin:"GPIO 4",direction:"Input",voltage:"3.3V",description:"Body temperature"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Alert"}]},advantages:"Early warning system, portable, continuous monitoring.",disadvantages:"Motion artifacts.",usage:"Keep finger steady.",components:["1x ESP32","1x MAX30102","1x 0.96 OLED"],author_name:"Antigravity",status:"Published",bom_cost:"$32",code:`// Medical Grade Pulse Auditor
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
3. Optimized growth conditions maintained 24/7.`,pin_config:{esp32:[{module:"BME280 / DHT22",pinName:"SDA/DATA",mcuPin:"GPIO 21",direction:"I2C/Input",voltage:"3.3V",description:"Env data"},{module:"BME280 / DHT22",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Env data"},{module:"Soil Sensor",pinName:"AO",mcuPin:"GPIO 34",direction:"Input",voltage:"3.3V",description:"Soil moisture"},{module:"LDR",pinName:"AO",mcuPin:"GPIO 35",direction:"Input",voltage:"3.3V",description:"Light level"},{module:"Relay 1",pinName:"IN",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"Fan control"},{module:"Relay 2",pinName:"IN",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Pump control"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 27",direction:"Output",voltage:"3.3V",description:"Limit alert"}]},advantages:"Labor reduction, resource efficiency, autonomous operation.",disadvantages:"High cost.",usage:"Connect to automation reservoir.",components:["1x ESP32","1x SGP30","1x BME280","2x DC Fans"],author_name:"Antigravity",status:"Published",bom_cost:"$65",code:`// Greenhouse Climate Controller
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
4. Emergency Mode: Can be integrated with an IR receiver to detect ambulance sirens and force a 'Green' path immediately.`,pin_config:{esp32:[{module:"Lane 1 - Close",pinName:"IN",mcuPin:"GPIO 32",direction:"Input",voltage:"3.3V",description:"High Density Trigger"},{module:"Lane 1 - Signal",pinName:"RED",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Stop Light"},{module:"System Power",pinName:"VCC",mcuPin:"5V / 3.3V",direction:"Power",voltage:"5V",description:"Primary Supply"},{module:"System Ground",pinName:"GND",mcuPin:"GND",direction:"Power",voltage:"0V",description:"Common Ground"}],arduino:[]},advantages:"Reduces fuel waste.",disadvantages:"Needs wireless sync for network.",usage:"Test with miniatures.",components:["1x ESP32","8x IR Sensors","12x Traffic LEDs"],author_name:"Antigravity",status:"Published",bom_cost:"$28",code:`// Density-Based Junction Logic
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
3. Pollution thresholds trigger safety alerts and cloud mapping.`,pin_config:{esp32:[{module:"SDS011",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"5V",description:"Laser data"},{module:"SDS011",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"5V",description:"Serial link"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Pollution alert"}]},advantages:"Industrial-grade precision, dual particle detection.",disadvantages:"Fan noise.",usage:"Place in protected area.",components:["1x ESP32","1x SDS011 Laser Sensor","1x OLED"],author_name:"Antigravity",status:"Published",bom_cost:"$45",code:`#include <Wire.h>
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
3. Fleet-wide data transmitted for smart sanitation management.`,pin_config:{esp32:[{module:"Ultrasonic",pinName:"TRIG",mcuPin:"GPIO 5",direction:"Output",voltage:"3.3V",description:"Trigger pulse"},{module:"Ultrasonic",pinName:"ECHO",mcuPin:"GPIO 18",direction:"Input",voltage:"3.3V",description:"Echo return"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Display data"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Display clock"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 26",direction:"Output",voltage:"3.3V",description:"Full level alert"}]},advantages:"Route optimization, overflow prevention, cost efficiency.",disadvantages:"Ultrasonic affected by moisture, needs stable power.",usage:"Deploy in smart bins for municipal waste collection.",components:["1x ESP32","1x HC-SR04 Ultrasonic","1x 0.96 OLED Display","1x GPS/GSM Module (Optional)","1x Buzzer","Power Supply"],author_name:"Antigravity",status:"Published",bom_cost:"$28",code:`#include <Wire.h>
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
3. SMS and HTTP links provide real-time mapping for users.`,pin_config:{esp32:[{module:"GPS",pinName:"TX",mcuPin:"GPIO 4",direction:"Output",voltage:"3.3V",description:"Satellite data"},{module:"GPS",pinName:"RX",mcuPin:"GPIO 5",direction:"Input",voltage:"3.3V",description:"GPS command"},{module:"GSM/GPRS",pinName:"TX",mcuPin:"GPIO 16",direction:"Output",voltage:"3.3V",description:"Cellular link"},{module:"GSM/GPRS",pinName:"RX",mcuPin:"GPIO 17",direction:"Input",voltage:"3.3V",description:"Cellular link"},{module:"SOS BTN",pinName:"BTN",mcuPin:"GPIO 14",direction:"Input",voltage:"3.3V",description:"Panic trigger"},{module:"OLED",pinName:"SDA",mcuPin:"GPIO 21",direction:"I2C",voltage:"3.3V",description:"Map coordinates"},{module:"OLED",pinName:"SCL",mcuPin:"GPIO 22",direction:"I2C",voltage:"3.3V",description:"Map coordinates"},{module:"Buzzer",pinName:"+",mcuPin:"GPIO 25",direction:"Output",voltage:"3.3V",description:"SOS Alert"}]},advantages:"Wide cellular range, precise geolocation, automatic SOS alerting.",disadvantages:"High power usage.",usage:"Conceal inside a vehicle.",components:["1x ESP32","1x SIM800L","1x Neo-6M GPS","1x LiPo Battery"],author_name:"Antigravity",status:"Published",bom_cost:"$55",code:`// Pro Vehicle Asset Tracker
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
}`,industrial_use:"Logistics tracking, vehicle recovery, cold-chain monitoring."}];export{e as p};
