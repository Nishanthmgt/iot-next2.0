const e=[{id:1,title:"LED Blink: The Gateway to IoT",level:"Beginner",description:"Master the 'Hello World' of hardware by controlling a physical light source using digital logic and timing protocols.",category:"IoT & Systems",estimatedTime:"15 mins",tech:["Arduino","ESP32"],concept:"The LED Blink project introduces the fundamental concept of GPIO (General Purpose Input/Output). By toggling a digital signal between HIGH (5V/3.3V) and LOW (0V), we control the flow of electricity to an external component.",working_principle:`1. The microcontroller initializes the designated pin as an OUTPUT.
2. In the main loop, it sets the pin HIGH to complete the circuit.
3. A delay function pauses execution for a set duration (e.g., 1000ms).
4. The pin is set LOW to break the circuit, turning the LED off.
5. The process repeats indefinitely.`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"VCC",note:"Power Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D13",component:"LED Anode (+)",note:"Built-in LED"},{pin:"GND",component:"LED Cathode (-)",note:"Common Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 2",component:"LED Anode (+)",note:"Onboard Blue LED"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// LED Blink Protocol
const int ledPin = 13; // Use 2 for ESP32 onboard

void setup() {
  pinMode(ledPin, OUTPUT); // Configure pin as output
}

void loop() {
  digitalWrite(ledPin, HIGH); // Turn LED ON
  delay(1000);              // Wait for 1 second
  digitalWrite(ledPin, LOW);  // Turn LED OFF
  delay(1000);              // Wait for 1 second
}`,advantages:"Simple to implement, excellent for debugging, low power consumption.",disadvantages:"Limited application beyond basic signaling.",usage:"Connect the long leg of the LED to Pin 13 and the short leg to GND (use 220 ohm resistor).",components:["1x Arduino UNO or ESP32","1x LED (5mm)","1x 220 Ohm Resistor","Jumper Wires"],circuit_diagram:"Terminal D13 -> Resistor -> LED Anode | LED Cathode -> Terminal GND",status:"Published",industrial_use:"Critical for heartbeat indicators in industrial PLC units and system status LEDs.",bom_cost:"$2"},{id:2,title:"LED Fade: Pulse Width Modulation",level:"Beginner",description:"Learn how to simulate analog output with digital signals to create breathing light effects using PWM technology.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Digital pins only output 0 or 1. To achieve varying brightness, we use PWM (Pulse Width Modulation), which rapidly flickers the LED. The longer the 'ON' period compared to 'OFF', the brighter the LED appears.",working_principle:`1. A PWM-capable pin is defined as output.
2. The code iterates through brightness levels (0-255).
3. 'analogWrite()' sets the duty cycle based on the current value.
4. A small delay creates the smooth transition effect.`,pin_config:{arduino:[{pin:"5V",component:"LED VCC",note:"Via Resistor"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D9",component:"LED Anode (+)",note:"PWM Enabled Pin"},{pin:"GND",component:"LED Cathode (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"LED VCC",note:"Via Resistor"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 4",component:"LED Anode (+)",note:"PWM capable GPIO"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// PWM Fading Logic
int led = 9;           // PWM pin for Arduino
int brightness = 0;    // Current brightness level
int fadeAmount = 5;    // Step size for fading

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, brightness);
  brightness = brightness + fadeAmount;
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  delay(30);
}`,advantages:"Smooth transitions, power efficient, works with most microcontrollers.",disadvantages:"Requires specific PWM hardware pins.",usage:"Connect the LED to Pin 9 (Arduino) or Pin 4 (ESP32) through a resistor.",components:["1x Controller","1x LED","1x 220 Ohm Resistor","Breadboard"],circuit_diagram:"Digital Pin (PWM) -> Resistor -> LED Anode | LED Cathode -> GND",status:"Published",industrial_use:"Used in smart dimming systems and variable speed motor controls.",bom_cost:"$3"},{id:3,title:"Interactive Control: Push Button LED",level:"Beginner",description:"Bridge the gap between hardware and software interaction by using a physical switch to control a digital output.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"This project covers the use of digital inputs. A push button acts as a momentary switch. When pressed, it completes a circuit, sending a HIGH signal to a microcontroller pin.",working_principle:`1. Initialize one pin as OUTPUT (LED) and another as INPUT (Button).
2. Use an internal/external pull-up resistor to ensure a stable state.
3. The code reads the digital state of the button pin.
4. If state is HIGH (pressed), the LED pin is set HIGH.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Power Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D2",component:"Push Button Pin 1",note:"Input (Internal Pullup)"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"},{pin:"D13",component:"LED Anode (+)",note:"Output Pin"},{pin:"GND",component:"LED Cathode (-)",note:"Common GND"}],esp32:[{pin:"3.3V",component:"VCC",note:"Power Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 15",component:"Push Button Pin 1",note:"Input (Pullup)"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"},{pin:"GPIO 2",component:"LED Anode (+)",note:"Onboard LED"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// Interactive Button Logic
const int buttonPin = 2; 
const int ledPin = 13;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP); 
}

void loop() {
  buttonState = digitalRead(buttonPin);
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,advantages:"Real-time user feedback, essential for user interfaces.",disadvantages:"Requires debouncing for stable production use.",usage:"Connect button to Pin 2 and GND (using internal pullup). LED to Pin 13.",components:["1x Microcontroller","1x LED","1x Push Button","1x 10k Resistor (optional)"],circuit_diagram:"Button Pin -> Switch -> GND | LED Pin -> Resistor -> LED -> GND",status:"Published",industrial_use:"Emergency stop buttons and tactile user inputs in ruggedized terminals.",bom_cost:"$4"},{id:4,title:"Smart Traffic Signaling System",level:"Beginner",description:"Simulate a real-world infrastructure system using sequential logic and multi-component synchronization.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"The Traffic Light System demonstrates complex timing sequences and multiple digital outputs. It's a foundational project for understanding state-based programming logic.",working_principle:`1. Three LEDs (Red, Yellow, Green) are initialized as outputs.
2. A sequence is programmed: Green stays on for X seconds.
3. Green turns off, Yellow turns on for a short period.
4. Yellow turns off, Red turns on for Y seconds.
5. The cycle loops to simulate intersection management.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"LED Anodes Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D10",component:"Red LED Anode",note:"Connect via 220R"},{pin:"D11",component:"Yellow LED Anode",note:"Connect via 220R"},{pin:"D12",component:"Green LED Anode",note:"Connect via 220R"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Ground Rail"},{pin:"GPIO 4",component:"Red LED Anode",note:"Stop Signal"},{pin:"GPIO 16",component:"Yellow LED Anode",note:"Caution Signal"},{pin:"GPIO 17",component:"Green LED Anode",note:"Go Signal"}]},code:`// Traffic Light Machine
int red = 10; int yellow = 11; int green = 12;

void setup() {
  pinMode(red, OUTPUT); pinMode(yellow, OUTPUT); pinMode(green, OUTPUT);
}

void loop() {
  digitalWrite(green, HIGH); delay(5000);
  digitalWrite(green, LOW); digitalWrite(yellow, HIGH); delay(2000);
  digitalWrite(yellow, LOW); digitalWrite(red, HIGH); delay(5000);
  digitalWrite(red, LOW);
}`,advantages:"Excellent for learning logic flow, visually intuitive results.",disadvantages:"Higher power draw with multiple LEDs.",usage:"Connect Red (10), Yellow (11), Green (12) to designated pins with resistors.",components:["1x Arduino/ESP32","3x LEDs (R,Y,G)","3x 220 Ohm Resistors","Jumper Wires"],circuit_diagram:"Pin 10 -> Resistor -> Red LED | Pin 11 -> Resistor -> Yellow | Pin 12 -> Resistor -> Green",status:"Published",industrial_use:"Applied in logistics automation and automated conveyor sorting systems for status signaling.",bom_cost:"$9"},{id:5,title:"Audio Alerts: Buzzer Frequency Control",level:"Beginner",description:"Integrate audio feedback into your projects using piezoelectric buzzers and frequency generation logic.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Piezo buzzers generate sound by vibrating a crystal at high speeds. By changing the frequency of the electrical pulses sent to the buzzer, we can create different musical notes or alarm tones.",working_principle:`1. Set the designated pin as an output for the buzzer.
2. Use 'tone()' function (Arduino) to send a specific frequency.
3. The frequency determines the pitch, while duration determines the length.
4. Switching frequencies in a loop creates a melody or siren effect.`,pin_config:{arduino:[{pin:"5V / VIN",component:"VCC",note:"Optional Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"D8",component:"Piezo Buzzer (+)",note:"Signal Output"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V / 5V",component:"VCC",note:"Check Rating"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 25",component:"Piezo Buzzer (+)",note:"DAC Signal"},{pin:"GND",component:"Buzzer (-)",note:"Common Ground"}]},code:`// Audible Alarm Script
const int buzzer = 8;

void setup() {
  pinMode(buzzer, OUTPUT);
}

void loop() {
  tone(buzzer, 1000); // 1KHz tone
  delay(500);
  noTone(buzzer);     // Silence
  delay(500);
}`,advantages:"Compact audible feedback, low cost, easy to integrate.",disadvantages:"Can be noisy; requires transistor for high-volume passive buzzers.",usage:"Connect the positive leg of the buzzer to Pin 8 and negative to GND.",components:["1x Arduino Uno","1x Piezo Buzzer","Jumper Wires","Breadboard"],circuit_diagram:"Pin 8 -> Buzzer (+) | Buzzer (-) -> GND",status:"Published",industrial_use:"Critical error alarms in medical equipment and proximity alerts in warehouse robots.",bom_cost:"$5"},{id:6,title:"Digital Dice: Probability & Randomness",level:"Beginner",description:"Construct a digital random number generator using LEDs and the pseudo-random logic of microcontrollers.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32"],concept:"The Digital Dice project focuses on 'randomSeed' and 'random' functions. It teaches how to map a single input (button press) to multiple outputs (LED patterns) to represent dice faces.",working_principle:`1. 7 LEDs are arranged in a dice pattern and set as outputs.
2. A push button is set as an input with a pull-up resistor.
3. Upon button press, a random number between 1 and 6 is generated.
4. A 'switch-case' statement validates the number and lights up the corresponding LEDs.
5. An animation effect is added to simulate rolling.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D2 to D8",component:"7x LED Anodes",note:"Output Group"},{pin:"D9",component:"Push Button Pin 1",note:"Trigger"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"GPIO 4,5,18,19,21,22,23",component:"LED Array Anodes",note:"High Power Outputs"},{pin:"GPIO 15",component:"Push Button Pin 1",note:"Input"},{pin:"GND",component:"Push Button Pin 2",note:"To Ground"}]},code:`// Random Dice Generator
long randNumber;

void setup() {
  for(int i=2; i<=8; i++) pinMode(i, OUTPUT);
  pinMode(9, INPUT_PULLUP);
  randomSeed(analogRead(0)); // Noise for true randomness
}

void loop() {
  if(digitalRead(9) == LOW) {
    randNumber = random(1, 7);
    displayDice(randNumber);
    delay(1000);
  }
}

void displayDice(int num) {
  // Logic to light up LEDs based on num
}`,advantages:"Interactive, teaches array-like logic, durable compared to mechanical dice.",disadvantages:"High component count (7 LEDs).",usage:"Arrange LEDs in a 3x3 grid pattern and connect to Pins 2-8.",components:["1x Microcontroller","7x LEDs","7x 220 Ohm Resistors","1x Push Button"],circuit_diagram:"Pins 2-8 -> Resistors -> LEDs -> GND | Pin 9 -> Button -> GND",status:"Published",industrial_use:"Pseudo-random generator logic for cryptographic testing and Monte Carlo simulations.",bom_cost:"$9"},{id:7,title:"RGB Spectrum: Color Mixing Protocol",level:"Beginner",description:"Unlock the visual spectrum by controlling a single multi-color LED through three independent PWM channels.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32"],concept:"Additive color theory. By mixing Red, Green, and Blue light at different intensities, we can create any color in the visible spectrum. This project uses 3 PWM pins to control these intensities.",working_principle:`1. Define pins for R, G, and B as outputs.
2. In a loop, vary the duty cycle of each pin using 'analogWrite()'.
3. Cycling through combinations (e.g., R=255, G=0, B=255 for Purple).
4. A common cathode RGB LED is typically used.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Common Anode (if used)"},{pin:"GND",component:"Common Cathode",note:"Ground"},{pin:"D9",component:"Red Pin",note:"PWM Channel 1"},{pin:"D10",component:"Green Pin",note:"PWM Channel 2"},{pin:"D11",component:"Blue Pin",note:"PWM Channel 3"}],esp32:[{pin:"3.3V",component:"VCC",note:"Common Anode (if used)"},{pin:"GND",component:"Common Cathode",note:"Ground Rail"},{pin:"GPIO 4",component:"Red Channel",note:"LEDC Chan 0"},{pin:"GPIO 16",component:"Green Channel",note:"LEDC Chan 1"},{pin:"GPIO 17",component:"Blue Channel",note:"LEDC Chan 2"}]},code:`// RGB Color Mixer
int r = 9; int g = 10; int b = 11;

void setup() {
  pinMode(r, OUTPUT); pinMode(g, OUTPUT); pinMode(b, OUTPUT);
}

void loop() {
  setColor(255, 0, 0); // Red
  delay(1000);
  setColor(0, 255, 0); // Green
  delay(1000);
  setColor(0, 0, 255); // Blue
  delay(1000);
}

void setColor(int rv, int gv, int bv) {
  analogWrite(r, rv); analogWrite(g, gv); analogWrite(b, bv);
}`,advantages:"Thousands of colors from one LED, compact, widely used in HMIs.",disadvantages:"Requires careful resistor selection to balance color brightness.",usage:"Connect R, G, B pins to 220 ohm resistors then to the LED anodes.",components:["1x Arduino/ESP32","1x RGB LED (Common Cathode)","3x 220 Ohm Resistors","Breadboard"],circuit_diagram:"D9 -> R_Res -> RGB_R | D10 -> G_Res -> RGB_G | D11 -> B_Res -> RGB_B | Cathode -> GND",status:"Published",industrial_use:"Calibration tool for visual color sensors and spectrometer testing rigs.",bom_cost:"$6"},{id:8,title:"Autonomous Infrastructure: Smart Night Lamp",level:"Beginner",description:"Create an automated lighting system that activates based on environmental illumination levels using LDR sensors.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Introduction to analog sensors. An LDR (Light Dependent Resistor) changes its resistance based on light exposure. We use this in a voltage divider circuit to read ambient light as an analog value.",working_principle:`1. The LDR is connected to an analog input (A0).
2. The microcontroller reads values (0-1023).
3. When light level drops below a calibrated threshold (darkness),
4. The microcontroller sets a digital output pin HIGH to turn on a lamp.
5. Hysteresis logic is added to prevent flickering during sunset.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Standard 5V Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"A0",component:"LDR Junction",note:"Voltage Divider Input"},{pin:"D13",component:"Lamp Anode (+)",note:"Load Output"},{pin:"GND",component:"Lamp Cathode (-)",note:"Common Ground"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 34",component:"LDR Input",note:"ADC1 Channel"},{pin:"GPIO 2",component:"Status LED (+)",note:"Onboard LED Anode"},{pin:"GND",component:"LED Cathode (-)",note:"Common Ground"}]},code:`// Smart Night Lamp Logic
const int ldrPin = A0;
const int relayPin = 13;
int threshold = 500;

void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int val = analogRead(ldrPin);
  if (val < threshold) {
    digitalWrite(relayPin, HIGH);
  } else {
    digitalWrite(relayPin, LOW);
  }
  delay(100);
}`,advantages:"Energy saving, fully autonomous, easy calibration.",disadvantages:"LDR is sensitive to artificial light interference.",usage:"Connect LDR and 10k resistor in series. Connect junction to A0.",components:["1x Microcontroller","1x LDR (Photoresistor)","1x 10k Resistor","1x LED/Relay"],circuit_diagram:"VCC -> LDR -> (Pin A0) -> 10k Resistor -> GND | Pin 13 -> LED -> GND",status:"Published",industrial_use:"Automated security lighting and light-harvesting solar tracker optimization.",bom_cost:"$7"},{id:9,title:"Environment Insight: Light intensity Monitor",level:"Beginner",description:"Visualize real-time environmental data by mapping analog sensor readings to human-readable scales.",category:"IoT & Systems",estimatedTime:"20 mins",tech:["Arduino","ESP32"],concept:"Data acquisition and visualization. This project focuses on refining raw sensor data and presenting it via the Serial terminal or a visual scale (like a progress bar).",working_principle:`1. Analog voltage is read from the LDR circuit.
2. Raw values (0-1023) are converted to percentages (0-100%).
3. Data is formatted into strings and sent via UART (Serial).
4. A visual indicator on a breadboard (LED bar graph) can also be used.`,pin_config:{arduino:[{pin:"5V",component:"VCC",note:"Supply Rail"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"A0",component:"LDR Sensor Pin 1",note:"To ADC"},{pin:"GND",component:"LDR Sensor Pin 2",note:"Via 10k Resistor"},{pin:"USB",component:"Serial Port",note:"Standard UART"}],esp32:[{pin:"3.3V",component:"VCC",note:"System Power"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 34",component:"LDR Pin 1",note:"ADC Input"},{pin:"GND",component:"LDR Pin 2",note:"To Ground"},{pin:"TX/RX",component:"USB-UART",note:"Terminal"}]},code:`// Light Monitor Protocol
void setup() {
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(A0);
  int percent = map(raw, 0, 1023, 0, 100);
  Serial.print("Illumination: ");
  Serial.print(percent);
  Serial.println("%");
  delay(500);
}`,advantages:"Precise data tracking, essential for multi-sensor IoT nodes.",disadvantages:"Requires a computer connection to view data without dedicated display.",usage:"Open the Serial Monitor (Tools -> Serial Monitor) at 9600 baud to see readings.",components:["1x Microcontroller","1x LDR","1x 10k Resistor","Jumper Wires"],circuit_diagram:"Standard LDR Voltage Divider connected to Analog Pin 0.",status:"Published",industrial_use:"Precision light-exposure monitoring for pharmaceutical lab environments.",bom_cost:"$4"},{id:10,title:"Safety Protocols: Smart Fire Alarm",level:"Beginner",description:"Build a critical safety subsystem that uses IR detection to identify the presence of fire and triggers immediate alerts.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Flame sensors typically use an IR receiver to detect the specific light radiation emitted by a fire. This project integrates this critical detection with audible and visual alarm signals.",working_principle:`1. A Flame Sensor is connected as a digital or analog input.
2. The code constantly polls the sensor for 'FLAME DETECTED' signal.
3. If detected, it triggers a PWM tone for the buzzer and flashes a Red LED.
4. It includes a reset condition once the flame is no longer detected.`,pin_config:{arduino:[{pin:"5V",component:"VCC (Sensor)",note:"Module Power"},{pin:"GND",component:"GND (Sensor)",note:"Common Ground"},{pin:"D7",component:"Flame (D0)",note:"Digital Detection"},{pin:"D8",component:"Buzzer (+)",note:"Alarm Output"},{pin:"D13",component:"Red LED Anode",note:"Visual Alert"},{pin:"GND",component:"Common Cathode",note:"All Gound Sides"}],esp32:[{pin:"3.3V / 5V",component:"VCC",note:"Check Module Rating"},{pin:"GND",component:"GND",note:"System Ground"},{pin:"GPIO 4",component:"Flame D0",note:"Digital Detection"},{pin:"GPIO 25",component:"Buzzer (+)",note:"DAC Alarm Path"},{pin:"GND",component:"Common Ground",note:"Shared Return"}]},code:`// Fire Alarm Logic
const int flame = 7; 
const int buzzer = 8;

void setup() {
  pinMode(flame, INPUT);
  pinMode(buzzer, OUTPUT);
}

void loop() {
  if (digitalRead(flame) == LOW) { // IR detected
    tone(buzzer, 2000);
    delay(100);
  } else {
    noTone(buzzer);
  }
}`,advantages:"Rapid detection speed, robust safety application.",disadvantages:"Susceptible to sunlight IR (false positives in direct sun).",usage:"Adjust the sensitivity potentiometer on the flame sensor module for best results.",components:["1x Microcontroller","1x Flame Sensor Module","1x Piezo Buzzer","1x LED"],circuit_diagram:"Sensor D0 -> Pin 7 | Buzzer (+) -> Pin 8 | Sensor VCC -> 5V | Sensor GND -> GND",status:"Published",industrial_use:"Early-warning system for electrical fire detection in localized control gear.",bom_cost:"$10"},{id:11,title:"Precision Telemetry: LCD Thermometer",level:"Beginner",description:"Interface a Liquid Crystal Display (LCD) to visualize real-time environmental data with high precision and low latency.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Digital data visualization. This project introduces the LiquidCrystal I2C protocol, reducing the required wiring from 16 pins to just 4. It teaches how to format floating-point sensor data for human-readable interfaces.",working_principle:`1. Initialize the I2C bus at 100KHz.
2. Interface an LM35 or DHT sensor for temperature acquisition.
3. Clear the display buffer and set the cursor position.
4. Send ASCII-encoded strings to the LCD controller.
5. Implement a 2000ms refresh rate to prevent data flickering.`,pin_config:{arduino:[{pin:"5V",component:"LCD VCC",note:"Logic Power"},{pin:"GND",component:"LCD GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"LCD SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"LCD SCL",note:"I2C Clock"},{pin:"5V",component:"Sensor VCC",note:"LM35/DHT Power"},{pin:"A0",component:"Sensor SIG",note:"Analog Data"},{pin:"GND",component:"Sensor GND",note:"Signal Return"}],esp32:[{pin:"3.3V / 5V",component:"LCD VCC",note:"Level check required"},{pin:"GND",component:"LCD GND",note:"Ground Rail"},{pin:"GPIO 21",component:"LCD SDA",note:"SDA"},{pin:"GPIO 22",component:"LCD SCL",note:"SCL"},{pin:"3.3V",component:"Sensor VCC",note:"Low Power Rail"},{pin:"GPIO 34",component:"Sensor SIG",note:"ADC1 Input"}]},code:`// I2C LCD Precision Thermometer
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("IoT Telemetry");
}

void loop() {
  float temp = analogRead(A0) * 0.48828125; // LM35 Calc
  lcd.setCursor(0, 1);
  lcd.print("Temp: ");
  lcd.print(temp);
  lcd.print((char)223); lcd.print("C");
  delay(2000);
}`,advantages:"Compact wiring, professional display output, customizable UI.",disadvantages:"Requires I2C library; viewing angle is hardware-dependent.",usage:"Connect I2C pins, adjust contrast pot on the module, and upload.",components:["1x Microcontroller","1x 16x2 LCD with I2C Backboard","1x Temperature Sensor","Jumper Wires"],circuit_diagram:"SDA -> SDA | SCL -> SCL | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"Local diagnostic displays for HVAC controllers and server rack monitors.",bom_cost:"$12"},{id:12,title:"Edge Notification: Smart Doorbell",level:"Beginner",description:"Implement a high-priority alert system using Interrupt Service Routines (ISRs) for instantaneous user feedback.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Interrupt-driven logic. Instead of constant polling, the microcontroller enters a high-priority state only when the bell is pressed, ensuring zero latency and allowing for power-saving 'sleep' modes.",working_principle:`1. Set the button pin as an INPUT_PULLUP.
2. Attach an interrupt to the pin on the FALLING edge.
3. Upon press, execute the ISR to set a global trigger flag.
4. The main loop detects the flag and initiates the audio-visual sequence.
5. Implement soft-debounce to prevent false triggers.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"System Power"},{pin:"GND",component:"GND Rail",note:"Common Return"},{pin:"D2",component:"Bell Switch Pin 1",note:"Interrupt (Int0)"},{pin:"GND",component:"Bell Switch Pin 2",note:"To Ground"},{pin:"D8",component:"Piezo Buzzer (+)",note:"Alert Output"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"System Power"},{pin:"GND",component:"GND Rail",note:"Common Return"},{pin:"GPIO 4",component:"Bell Switch Pin 1",note:"ISR Trigger Pin"},{pin:"GND",component:"Bell Switch Pin 2",note:"To Ground"},{pin:"GPIO 25",component:"Buzzer (+)",note:"Audio Signal"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}]},code:`// Interrupt-Based Doorbell
volatile bool pressed = false;

void IRAM_ATTR bellISR() { pressed = true; }

void setup() {
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), bellISR, FALLING);
  pinMode(8, OUTPUT);
}

void loop() {
  if (pressed) {
    tone(8, 2000, 500);
    pressed = false;
  }
}`,advantages:"Zero latency response, power efficient, clean code structure.",disadvantages:"ISR requires careful handling of shared variables (volatile keyword).",usage:"Press the button to trigger a high-frequency chime instantly.",components:["1x Arduino/ESP32","1x Push Button","1x Passive Buzzer","Jumper Wires"],circuit_diagram:"Button -> Pin 2 & GND | Buzzer -> Pin 8 & GND",status:"Published",industrial_use:"Used in emergency pull-cords for medical facilities and operator call buttons in factories.",bom_cost:"$6"},{id:13,title:"Acoustic Trigger: Digital Sound Switch",level:"Beginner",description:"Design an sound-activated control node by analyzing acoustic energy levels through a microphone transducer.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32"],concept:"Signal threshold analysis. A microphone module converts sound waves into a variable voltage. By setting a digital comparator threshold, we create a switch that responds only to designated decibel levels (like a clap).",working_principle:`1. Provide 5V/3.3V power to the sound sensor module.
2. The module's onboard comparator identifies sound spikes.
3. Digital Output (D0) pulses LOW/HIGH when sound exceeds threshold.
4. Microcontroller toggles a flip-flop state upon detection.
5. Adjust the multi-turn potentiometer for sensitivity calibration.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D7",component:"Sound Sensor (D0)",note:"Trigger Input"},{pin:"D13",component:"Relay/LED Anode (+)",note:"Load Switch"},{pin:"GND",component:"Load GND (-)",note:"Return Path"}],esp32:[{pin:"3.3V / 5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Return"},{pin:"GPIO 4",component:"D0 Input",note:"Sensitive Signal"},{pin:"GPIO 2",component:"Onboard LED (+)",note:"Visual Feedback"}]},code:`// Acoustic Toggle Logic
int state = LOW;

void setup() {
  pinMode(7, INPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  if (digitalRead(7) == HIGH) {
    state = !state;
    digitalWrite(13, state);
    delay(500); // Debounce acoustic bounce
  }
}`,advantages:"Hands-free operation, adjustable sensitivity, low power idle.",disadvantages:"Prone to ambient noise interference without advanced filtering.",usage:"Adjust sensor sensitivity until the LED toggles only with a sharp clap.",components:["1x Microcontroller","1x Sound Sensor Module","1x 5V Relay Block","Jumper Wires"],circuit_diagram:"Sensor D0 -> Pin 7 | Relay Signal -> Pin 13",status:"Published",industrial_use:"Touchless interface for sterile medical environments and sound-activated safety shut-offs.",bom_cost:"$8"},{id:14,title:"Proximity Sensing: IR Obstacle Detection",level:"Beginner",description:"Develop an automated obstacle avoidance system using infrared reflection and modulated signal detection.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Infrared backscatter. An IR LED emits light which reflects off nearby objects. An IR receiver (Photodiode) detects this reflection, creating a non-contact proximity sensor.",working_principle:`1. Emit 38KHz IR signal (modulated for sunlight immunity).
2. Monitor the receiver pin for signal reflection.
3. The sensor modules typically output LOW when an object is within 2-30cm range.
4. Trigger a collision avoidance protocol (alarm or motor stop).
5. Use black surfaces to test absorption and range calibration.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Supply"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D7",component:"IR Sensor Out",note:"Active LOW Input"},{pin:"D8",component:"Status Alert Anode",note:"Collision LED"},{pin:"GND",component:"Common Cathode",note:"Return"}],esp32:[{pin:"3.3V / 5V",component:"Module VCC",note:"Check Rating"},{pin:"GND",component:"Module GND",note:"System Ground"},{pin:"GPIO 15",component:"IR Receiver Out",note:"Digital Detection"},{pin:"GPIO 2",component:"Alert LED Anode",note:"Onboard Path"}]},code:`// IR Proximity Guard
void setup() {
  pinMode(7, INPUT);
  pinMode(8, OUTPUT);
}

void loop() {
  if (digitalRead(7) == LOW) {
    digitalWrite(8, HIGH); // Path Blocked
  } else {
    digitalWrite(8, LOW);  // Path Clear
  }
}`,advantages:"Low cost, small form factor, high speed detection.",disadvantages:"Range limited to ~30cm; accuracy depends on object color/material.",usage:"Avoid direct sunlight on sensor; adjust range screw for desired proximity.",components:["1x Microcontroller","1x IR Obstacle Module","1x Buzzer/LED","Jumper Wires"],circuit_diagram:"IR Module Out -> Pin 7 | LED -> Pin 8",status:"Published",industrial_use:"Object counting on fast-moving conveyor belts and proximity safety in handheld power tools.",bom_cost:"$5"},{id:15,title:"Capacitive HMI: Touch Sensor Lamp",level:"Beginner",description:"Construct a solid-state Human-Machine Interface (HMI) that replaces mechanical switches with capacitive touch tech.",category:"IoT & Systems",estimatedTime:"25 mins",tech:["Arduino","ESP32","Capacitive Sensing"],concept:"Capacitive sensing measures the change in electrical charge when a human finger (conductive) approaches the sensor pad. It creates a seamless, wear-proof switching mechanism.",working_principle:`1. Charge the conductive pad to a specific voltage.
2. Use 'touchRead' (ESP32) or a library (Arduino) to monitor discharge time.
3. Discharge time increases when a finger is present due to added capacitance.
4. Microcontroller interprets this timing change as a 'Touch Event'.
5. Implement a latching state to toggle the load (on/off).`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Power Rail"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"D4",component:"TTP223 Out",note:"Digital Touch Input"},{pin:"D13",component:"LED Anode (+)",note:"Output Load"},{pin:"GND",component:"LED Cathode (-)",note:"Return"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"T0 (GPIO 4)",component:"Capacitive Pad",note:"Direct Conductive Touch"},{pin:"GPIO 2",component:"Status LED (+)",note:"Visual HMI"}]},code:`// Capacitive Touch Toggle
int bulbState = 0;

void setup() {
  pinMode(4, INPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  if (digitalRead(4) == HIGH) {
    bulbState = !bulbState;
    digitalWrite(13, bulbState);
    delay(500); // Prevent double-trigger
  }
}`,advantages:"No moving parts (durable), aesthetic design, through-material sensing (glass/plastic).",disadvantages:"Affected by moisture/high humidity; requires careful HMI design.",usage:"Connect the TTP223 module; it works through wooden or plastic surfaces up to 3mm.",components:["1x Microcontroller","1x TTP223 Touch Module","1x High Power LED","Jumper Wires"],circuit_diagram:"Touch Module I/O -> Pin 4 | LED Anode -> Pin 13",status:"Published",industrial_use:"Ruggedized touch panels for heavy machinery and sterile interfaces in food processing.",bom_cost:"$4"},{id:16,title:"Industrial Hazard Audit: Gas Leakage System",level:"Beginner",description:"Deploy an industrial-grade gas detection node capable of identifying hazardous LPG, Butane, and Smoke concentrations.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Analog Sensing"],concept:"Chemical sensing and calibration. The MQ-2 sensor uses a heating element to detect change in conductivity on a tin dioxide layer when combustible gas particles are present. It requires a preheating phase for stable readings.",working_principle:`1. Initialize the sensor heating element (requires 24h for full burn-in, 60s for runtime warmup).
2. Acquire analog voltage representing gas concentration (0-5V).
3. Map voltage to PPM (Parts Per Million) using the sensor's logarithmic sensitivity curve.
4. Trigger an audible alarm and visual red alert if concentration exceeds the safe threshold (e.g., 200 PPM).
5. Implement a digital safety interlock for emergency shutdowns.`,pin_config:{arduino:[{pin:"5V",component:"MQ-2 VCC",note:"High Current Rail"},{pin:"GND",component:"MQ-2 GND",note:"Common Ground"},{pin:"A0",component:"MQ-2 Analog Out",note:"Concentration Level"},{pin:"D8",component:"Buzzer (+)",note:"Audio Alarm"},{pin:"GND",component:"Buzzer (-)",note:"Return"}],esp32:[{pin:"5V (VIN)",component:"MQ-2 VCC",note:"Requires 5V for Heater"},{pin:"GND",component:"MQ-2 GND",note:"Ground Rail"},{pin:"GPIO 32",component:"Sensor Signal",note:"ADC1 Input"},{pin:"GPIO 25",component:"Piezo Buzzer (+)",note:"Alarm Path"}]},code:`// Industrial Gas Auditor
const int gasPin = A0;
const int alertThreshold = 300;

void setup() {
  pinMode(8, OUTPUT);
  Serial.begin(9600);
  Serial.println("Warming up sensor...");
  delay(20000); // 20s initial warmup
}

void loop() {
  int val = analogRead(gasPin);
  if (val > alertThreshold) {
    digitalWrite(8, HIGH); // GAS DETECTED
    Serial.println("CRITICAL: Gas Detected!");
  } else {
    digitalWrite(8, LOW);
  }
  delay(500);
}`,advantages:"Reliable chemical detection, long sensor life, adjustable sensitivity.",disadvantages:"High power consumption (~800mW for heater); requires manual calibration.",usage:"Allow 1 minute for the sensor to heat up before trusting readings. Test with a lighter's gas (don't ignite).",components:["1x Microcontroller","1x MQ-2 Gas Sensor Module","1x High-Decibel Buzzer","Jumper Wires"],circuit_diagram:"Sensor AO -> Pin A0 | Sensor VCC -> 5V | Buzzer (+) -> Pin 8",status:"Published",industrial_use:"Critical gas leakage detection in commercial kitchens and boiler rooms.",bom_cost:"$15"},{id:17,title:"Hydro-Sensing Weather Terminal: Rain Alert",level:"Beginner",description:"Develop a localized weather station node that detects precipitation and manages sensor longevity through power management.",category:"IoT & Systems",estimatedTime:"30 mins",tech:["Arduino","ESP32"],concept:"Electrolytic corrosion avoidance. Rain sensors use a series of conductive tracks. If power is constantly applied in wet conditions, the tracks will corrode. This project teaches how to use a digital pin to 'gate' power only when taking a measurement.",working_principle:`1. Connect the sensor's VCC to a digital pin on the microcontroller.
2. In the code, set the pin HIGH to power the sensor.
3. Read the moisture level through an analog input (A0).
4. Set the power pin LOW to stop current flow and prevent oxidation.
5. Trigger an alert if the moisture level exceeds 10% (Precipitation detect).`,pin_config:{arduino:[{pin:"D4",component:"Sensor VCC Control",note:"Gated Power Output"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"A0",component:"Sensor SIG",note:"Analog Moisture Level"},{pin:"D13",component:"Rain LED Anode (+)",note:"Visual alert"},{pin:"GND",component:"Common Cathode",note:"Return"}],esp32:[{pin:"GPIO 23",component:"Power Gate Pin",note:"Software VCC"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 34",component:"Signal Pin",note:"ADC Sensor Feed"},{pin:"GPIO 2",component:"Onboard LED (+)",note:"HMI"}]},code:`// Corrosion-Resistant Rain Sensor
void setup() {
  pinMode(4, OUTPUT); 
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(4, HIGH); // Power ON
  delay(10);             // Stabilize
  int rain = analogRead(A0);
  digitalWrite(4, LOW);  // Power OFF
  
  if (rain < 800) digitalWrite(13, HIGH); // Detected
  else digitalWrite(13, LOW);
  delay(5000); // Sample every 5s
}`,advantages:"Significantly increases sensor lifespan, low power, accurate.",disadvantages:"Sensor surface requires periodic cleaning to remove dust/residue.",usage:"Install at a 45-degree angle to allow water to run off after the rain stops.",components:["1x Arduino Uno","1x Rain Sensor Module","1x High-Brightness LED","Jumper Wires"],circuit_diagram:"Sensor SIG -> Pin A0 | Sensor VCC -> Pin 4",status:"Published",industrial_use:"Automated greenhouse closure systems and smart wipers in automotive HMI.",bom_cost:"$7"},{id:18,title:"Ultrasonic Rangefinder & Spatial Analysis",level:"Beginner",description:"Utilize Time-of-Flight (ToF) calculations with ultrasonic transducers to measure distance with centimeter accuracy.",category:"IoT & Systems",estimatedTime:"40 mins",tech:["Arduino","ESP32","Ultrasonic"],concept:"Acoustic telemetry. By measuring the time it takes for an ultrasonic 'ping' to return to the sensor, we can calculate distance using the constant speed of sound (~343m/s). This is the foundation of robotic vision and navigation.",working_principle:`1. Trigger an ultrasonic pulse by setting the 'Trig' pin HIGH for 10us.
2. The sensor emits an 8-cycle 40KHz sound wave.
3. The 'Echo' pin goes HIGH until the reflected wave returns.
4. Microcontroller measures the pulse duration using 'pulseIn()'.
5. Calculate distance: Distance = (Time * 0.0343) / 2.`,pin_config:{arduino:[{pin:"5V",component:"HC-SR04 VCC",note:"Sensor Power"},{pin:"GND",component:"HC-SR04 GND",note:"Common Ground"},{pin:"D9",component:"Trig Pin",note:"Trigger Pulse"},{pin:"D10",component:"Echo Pin",note:"Input Capture"}],esp32:[{pin:"3.3V / 5V",component:"HC-SR04 VCC",note:"Check Module Rating"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 5",component:"Trig Output",note:"Digital Out"},{pin:"GPIO 18",component:"Echo Input",note:"Digital In"}]},code:`// Precision SONAR Script
long duration; int distance;

void setup() {
  pinMode(9, OUTPUT); pinMode(10, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(9, LOW); delayMicroseconds(2);
  digitalWrite(9, HIGH); delayMicroseconds(10);
  digitalWrite(9, LOW);
  duration = pulseIn(10, HIGH);
  distance = duration * 0.034 / 2;
  Serial.print("Distance: "); Serial.println(distance);
  delay(100);
}`,advantages:"Non-contact measurement, high resolution (1cm), cost-effective.",disadvantages:"Struggles with sound-absorbing materials (foam, fabric); range limited to ~4m.",usage:"Keep the sensor perpendicular to the target object for maximum accuracy.",components:["1x Microcontroller","1x HC-SR04 Ultrasonic Sensor","1x I2C LCD (Optional)","Jumper Wires"],circuit_diagram:"Trig -> Pin 9 | Echo -> Pin 10 | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"Liquid level measurement in non-corrosive tanks and collision avoidance for AGVs.",bom_cost:"$9"},{id:19,title:"Precision Fluid Dynamics: Tank Monitor",level:"Beginner",description:"Architect a tiered fluid monitoring system to track water levels in industrial silos using discrete sensing nodes.",category:"IoT & Systems",estimatedTime:"35 mins",tech:["Arduino","ESP32","Hydro-logic"],concept:"Discrete water sensing relies on the conductivity of water. By placing probes at different heights, we create a multi-bit digital representation of the tank's fill level (Low, Medium, High).",working_principle:`1. Provide a common GND probe at the bottom of the tank.
2. Place 'sensing' probes at 25%, 50%, and 75% height levels.
3. The microcontroller reads the digital state of each probe.
4. When water touches a probe, the circuit completes, pulling the input pin to a known state.
5. Use the data to trigger refilling or overflow protection alerts.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Button/Logic Power"},{pin:"GND",component:"Tank Base Probe",note:"Common Ground"},{pin:"D2, D3, D4",component:"Level Probes 1-3",note:"Input (Pullup)"},{pin:"D8",component:"Buzzer (+)",note:"Overflow Alarm"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Reference"},{pin:"GND",component:"Ground Rail",note:"Tank Bottom Connection"},{pin:"GPIO 4,5,18",component:"Probe Inputs",note:"Digital In"},{pin:"GPIO 2",component:"Status LED (+)",note:"Visual HMI"}]},code:`// Multi-Tier Tank Monitor
void setup() {
  for(int i=2; i<=4; i++) pinMode(i, INPUT_PULLUP);
  pinMode(8, OUTPUT);
}

void loop() {
  if (digitalRead(4) == LOW) { // High Level
    digitalWrite(8, HIGH); // Alert!
  } else {
    digitalWrite(8, LOW);
  }
}`,advantages:"Extremely reliable, zero moving parts, easy to troubleshoot.",disadvantages:"Potential for probe electrolysis if using DC current; requires stainless steel for longevity.",usage:"Ensure probes are made of non-corrosive material like food-grade stainless steel.",components:["1x Microcontroller","3x Stainless Steel Probes","1x Buzzer","Jumper Wires"],circuit_diagram:"Base Probe -> GND | High Probe -> Pin 4 | Mid Probe -> Pin 3 | Low Probe -> Pin 2",status:"Published",industrial_use:"Water management in municipal storage tanks and cooling tower monitoring.",bom_cost:"$14"},{id:20,title:"Intelligent Hydration: Closed-Loop Pump",level:"Beginner",description:"Construct a fully automated fluid transfer system that balances tank levels using feedback-loop control logic.",category:"IoT & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","Automation"],concept:"Closed-loop feedback systems. The microcontroller monitors a sensor (input) and acts on a pump (output) to maintain a specific physical state (full tank). It introduces relay isolation for high-voltage motor control.",working_principle:`1. Constantly monitor the moisture or water level sensor.
2. If level falls below threshold (Empty), the microcontroller triggers a Relay.
3. The Relay starts the water pump (isolated high-power circuit).
4. Once the 'Full' probe is triggered, the microcontroller deactivates the relay.
5. Implement hysteresis (delay) to prevent rapid motor cycling (chatter).`,pin_config:{arduino:[{pin:"D7",component:"Relay Signal",note:"Pump Controller"},{pin:"A0",component:"Level Sensor",note:"Feedback In"},{pin:"5V",component:"VCC",note:"Relay VCC"}],esp32:[{pin:"GPIO 4",component:"Relay In",note:"Control Signal"},{pin:"GPIO 34",component:"Sensor In",note:"ADC"}]},code:`// Intelligent Pump Protocol
void setup() {
  pinMode(7, OUTPUT); 
  pinMode(A0, INPUT);
}

void loop() {
  int level = analogRead(A0);
  if (level > 900) digitalWrite(7, HIGH); // START PUMP
  if (level < 200) digitalWrite(7, LOW);  // STOP PUMP
  delay(1000);
}`,advantages:"End-to-end automation, prevents tank dry-running, high-power isolation.",disadvantages:"Requires careful plumbing to prevent leaks; relay maintenance needed for long-term use.",usage:"Use a 12V DC pump powered through the relay contacts for safety.",components:["1x Arduino","1x 5V Relay Module","1x 12V Water Pump","1x Level Sensor"],circuit_diagram:"Pin 7 -> Relay Signal | Relay NO -> Pump (+) | 12V Source -> Relay COM",status:"Published",industrial_use:"Automated hydroponic fertigation systems and smart home sump pump controllers.",bom_cost:"$28"},{id:21,title:"Biometric Guard: Fingerprint Access Control",level:"Intermediate",description:"Implement a high-security biometric authentication node using optical fingerprint sensors and secure template storage.",category:"Security & Biometrics",estimatedTime:"60 mins",tech:["Arduino","ESP32","UART"],concept:"Minutiae-based matching. The AS608 sensor captures an image of the fingerprint, extracts unique features (minutiae), and converts them into a mathematical template. This template is then compared against locally stored data for authentication.",working_principle:`1. Initialize the optical sensor via UART communication.
2. In Enrollment Mode, capture multiple scans of a finger to create a stable ID.
3. In Verification Mode, the sensor captures a live scan and returns the high-confidence match ID (0-127).
4. The microcontroller triggers a solenoid lock or electronic relay for successful matches.
5. Implement an 'Admin Override' logic using a secure physical button.`,pin_config:{arduino:[{pin:"5V",component:"Sensor VCC",note:"Logic Supply"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"D2 (RX)",component:"Sensor TX",note:"SoftwareSerial"},{pin:"D3 (TX)",component:"Sensor RX",note:"SoftwareSerial"},{pin:"D8",component:"Solenoid Relay In",note:"Active HIGH"},{pin:"GND",component:"Relay GND",note:"Common Return"}],esp32:[{pin:"3.3V / 5V",component:"Sensor VCC",note:"Check Module Rating"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 16",component:"Sensor TX",note:"HardwareSerial 2"},{pin:"GPIO 17",component:"Sensor RX",note:"HardwareSerial 2"},{pin:"GPIO 4",component:"Lock Actuator",note:"Digital Out"}]},code:`// BioGuard Professional
#include <Adafruit_Fingerprint.h>
SoftwareSerial mySerial(2, 3);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

void setup() {
  Serial.begin(9600);
  finger.begin(57600);
  if (finger.verifyPassword()) Serial.println("Sensor Ready");
}

void loop() {
  int result = getFingerprintID();
  if (result > 0) {
    Serial.print("Access Granted ID: "); Serial.println(result);
    digitalWrite(8, HIGH); delay(2000); digitalWrite(8, LOW);
  }
}`,advantages:"High security, non-replicable biometric data, fast authentication (<1s).",disadvantages:"Sensitivity to wet/dirty fingers; templates limited to storage capacity.",usage:"Use the 'Enrollment' sketch first to save your fingerprint template to the sensor's flash memory.",components:["1x Microcontroller","1x AS608 Fingerprint Sensor","1x 5V/12V Solenoid","1x Relay Module"],circuit_diagram:"Sensor TX -> D2 | Sensor RX -> D3 | Sensor VCC -> 5V | Relay In -> D8",status:"Published",industrial_use:"Server room access control and high-value asset storage lockers.",bom_cost:"$35"},{id:22,title:"RFID Identity Terminal: Contactless Access",level:"Intermediate",description:"Deploy a contactless identification system using 13.56 MHz Radio Frequency Identification (RFID) and SPI protocols.",category:"Security & Connectivity",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Electromagnetic Induction. The MFRC522 reader generates a high-frequency field. When a passive tag enters this field, it scavenges power via induction to transmit its unique UID (Unique Identifier) wirelessly.",working_principle:`1. Establish SPI communication between the MCU and the RFID module.
2. The reader constantly polls for tags in range.
3. Upon detection, the 4 or 7-byte UID is read into the buffer.
4. Compare the UID against a 'Whitelist' stored in the MCU's EEPROM/Flash.
5. Log the entry/exit events and toggle a physical barrier or status indicator.`,pin_config:{arduino:[{pin:"3.3V",component:"RC522 VCC",note:"DO NOT USE 5V"},{pin:"GND",component:"RC522 GND",note:"Common Ground"},{pin:"D10",component:"SDA (SS)",note:"SPI Slave Select"},{pin:"D13",component:"SCK",note:"SPI Clock"},{pin:"D11",component:"MOSI",note:"SPI Data Out"},{pin:"D12",component:"MISO",note:"SPI Data In"},{pin:"D9",component:"RST",note:"Reset Pin"}],esp32:[{pin:"3.3V",component:"RC522 VCC",note:"Standard 3.3V"},{pin:"GND",component:"Sensor GND",note:"Ground Rail"},{pin:"GPIO 5",component:"SDA",note:"VSPI SS"},{pin:"GPIO 18",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"}]},code:`// RFID Gatekeeper
#include <MFRC522.h>
#define SS_PIN 10 
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  SPI.begin(); 
  mfrc522.PCD_Init();
}

void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) return;
  if (!mfrc522.PICC_ReadCardSerial()) return;
  String content = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println(content);
}`,advantages:"Contactless (sanitary), durable tags, support for multiple cards simultaneously.",disadvantages:"Limited range (~3-5cm); tags can be cloned if not using encrypted sectors (Classic 1K).",usage:"Scan tags and note the UID in the Serial Monitor. Hardcode authorized UIDs into your security logic.",components:["1x Microcontroller","1x RC522 RFID Module","3x Passive RFID Tags/Cards","1x RGB LED"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | SDA -> D10 | RST -> D9",status:"Published",industrial_use:"Employee time-tracking systems and contactless inventory management.",bom_cost:"$12"},{id:23,title:"Industrial Grid Monitor: AC Energy Telemetry",level:"Intermediate",description:"Calculate AC voltage and current using non-invasive current transformers (CT) and voltage sensors for real-time energy analysis.",category:"Industrial & Energy",estimatedTime:"75 mins",tech:["Arduino","ESP32","Analog"],concept:"Power monitoring. Real power (Watts) is the average of instantaneous power (V * I) over time. This project implements RMS (Root Mean Square) calculations to handle sinusoidal AC waveforms.",working_principle:`1. Use a ZMPT101B for safe, isolated AC voltage sensing.
2. Use a SCT-013 non-invasive CT sensor for current sensing via induction.
3. Sample both waveforms at a high frequency (e.g., 1kHz).
4. Compute V-RMS, I-RMS, Power Factor, and Total Energy Consumption (kWh).
5. Send data to a HMI or Cloud for load balancing alerts.`,pin_config:{arduino:[{pin:"5V",component:"Module VCC",note:"Logic Power"},{pin:"GND",component:"Module GND",note:"Common Ground"},{pin:"A0",component:"Voltage Sensor",note:"Analog (ZMPT)"},{pin:"A1",component:"Current Sensor",note:"Analog (CT)"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground Return"},{pin:"GPIO 32",component:"V-Waveform",note:"ADC1 Channel"},{pin:"GPIO 35",component:"I-Waveform",note:"ADC1 Channel"}]},code:`// Grid Sentinel v1.0
#include "EmonLib.h"
EnergyMonitor emon1;

void setup() {
  Serial.begin(9600);
  emon1.voltage(0, 268.0, 1.7); // (pin, calibration, phase_shift)
  emon1.current(1, 111.1);      // (pin, calibration)
}

void loop() {
  emon1.calcVI(20, 2000);
  float realPower = emon1.realPower;
  float supplyVoltage = emon1.Vrms;
  Serial.print("Power: "); Serial.println(realPower);
  delay(1000);
}`,advantages:"Isolated sensing (Safe), real-time efficiency tracking, non-invasive installation.",disadvantages:"Requires careful calibration against a known multimeter for accuracy; high sampling rate load.",usage:"Ensure current sensors are clamped ONLY around the phase (live) wire, not the neutral/earth bundle.",components:["1x Microcontroller","1x ZMPT101B AC Voltage Sensor","1x SCT-013 Current Transformer","1x LCD Screen"],circuit_diagram:"ZMPT Out -> A0 | SCT Out -> A1 | VCC -> 5V",status:"Published",industrial_use:"Smart sub-metering for industrial equipment and solar panel efficiency monitoring.",bom_cost:"$28"},{id:24,title:"Remote Telemetry: GPS Tracker & Geofencing",level:"Intermediate",description:"Utilize Global Positioning System (GPS) NMEA data to track location, speed, and altitude while implementing geofencing logic.",category:"Connectivity & Navigation",estimatedTime:"45 mins",tech:["Arduino","ESP32","GPS"],concept:"Satellite trilateration. The GPS module captures signals from multiple orbiting satellites to calculate Latitude and Longitude. Geofencing is a virtual boundary that triggers alerts when the node enters/exits a radius.",working_principle:`1. Set the GPS module to communicate at 9600 baud via UART.
2. Parse the NMEA $GPGGA or $GPRMC sentences using a library.
3. Extract Lat/Lon, Speed, and Satellite Count.
4. Calculate the 'Haversine distance' between current location and target coordinate.
5. Trigger an alert if the distance exceeds the configured radius (Geofence Breach).`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"GPS VCC",note:"Check Power Spec"},{pin:"GND",component:"GPS GND",note:"Common Ground"},{pin:"D4 (RX)",component:"GPS TX",note:"Serial Data In"},{pin:"D3 (TX)",component:"GPS RX",note:"Serial Data Out"}],esp32:[{pin:"3.3V / 5V",component:"GPS VCC",note:"Check Power Spec"},{pin:"GND",component:"GPS GND",note:"Ground Rail"},{pin:"GPIO 17",component:"GPS TX",note:"UART2 RX"},{pin:"GPIO 16",component:"GPS RX",note:"UART2 TX"}]},code:`// GPS Navigator & Geofence
#include <TinyGPS++.h>
#include <SoftwareSerial.h>
TinyGPSPlus gps;
SoftwareSerial ss(4, 3);

void setup() {
  Serial.begin(115200); ss.begin(9600);
}

void loop() {
  while (ss.available() > 0)
    if (gps.encode(ss.read())) {
      Serial.print("LAT: "); Serial.println(gps.location.lat(), 6);
      Serial.print("LON: "); Serial.println(gps.location.lng(), 6);
    }
}`,advantages:"Global operation, high accuracy outdoors (3-5m), no cellular needed for basic tracking.",disadvantages:"Requires clear sky view (poor indoors); slow 'Time to First Fix' (TTFF) in cold starts.",usage:"Place the antenna outdoors or by a window. It may take up to 2 minutes for the first fix (indicated by a blinking LED).",components:["1x Microcontroller","1x NEO-6M GPS Module","1x External Active Antenna","Jumper Wires"],circuit_diagram:"GPS TX -> D4 | GPS RX -> D3 | VCC -> 3.3V/5V",status:"Published",industrial_use:"Fleet management, asset tracking in logistics, and automated marine buoys.",bom_cost:"$22"},{id:25,title:"Mesh Backbone: ESP-NOW Wireless Bridge",level:"Intermediate",description:"Establish high-speed, low-latency node-to-node communication without requiring a Wi-Fi router or access point.",category:"Connectivity & Wireless",estimatedTime:"55 mins",tech:["ESP32","Wireless"],concept:"Connectionless wireless protocol. ESP-NOW is a fast, 2.4GHz protocol designed by Espressif that allows small packets of data to be transmitted between devices based on MAC addresses.",working_principle:`1. Put the ESP32 into Wi-Fi Station Mode but do not connect to a router.
2. Initialize the ESP-NOW protocol stack.
3. Register 'Peers' using their unique hardware MAC addresses.
4. Send data structures (structs) directly to the peer's MAC.
5. Handle the 'OnDataSent' and 'OnDataRecv' callbacks for reliable transmission.`,pin_config:{arduino:[{pin:"N/A",component:"No Radio",note:"Requires ESP32/ESP8266 SoC"},{pin:"N/A",component:"-",note:"Switch to ESP32 Platform"}],esp32:[{pin:"3.3V",component:"VCC",note:"Core Power"},{pin:"GND",component:"GND",note:"Ground Return"},{pin:"Internal",component:"2.4GHz Antenna",note:"No external pins"},{pin:"GPIO 2",component:"Success LED",note:"Status indicator"}]},code:`// ESP-NOW Transmitter (ESP32 Exclusive)
#include <esp_now.h>
#include <WiFi.h>
uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

void setup() {
  WiFi.mode(WIFI_STA);
  if (esp_now_init() != ESP_OK) return;
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  esp_now_add_peer(&peerInfo);
}

void loop() {
  char message[] = "Telemetry Data";
  esp_now_send(broadcastAddress, (uint8_t *) &message, sizeof(message));
  delay(2000);
}`,advantages:"Extremely low latency (no handshake), works without internet, high range (up to 200m).",disadvantages:"Limited packet size (250 bytes); ESP series exclusive.",usage:"Flash one board as Transmitter and another as Receiver. Get the Receiver's MAC address using the 'GetMAC' example.",components:["2x ESP32 Development Boards","1x USB Cable","Jumper Wires"],circuit_diagram:"Internal Radio used (No external wiring required for basic bridge).",status:"Published",industrial_use:"Remote sensor clusters in agriculture and decentralized emergency alert systems.",bom_cost:"$16"},{id:26,title:"Industrial Black Box: SD Card Data Logger",level:"Intermediate",description:"Architect a persistent storage system to log sensor telemetry over long durations using SPI-based SD card interfaces.",category:"Industrial & Storage",estimatedTime:"50 mins",tech:["Arduino","ESP32","SPI"],concept:"Non-volatile storage. While microcontrollers have limited EEPROM, SD cards provide gigabytes of space. This project uses the FAT file system to store data in human-readable CSV formats.",working_principle:`1. Interface with the SD card module via the SPI bus.
2. Initialize the file system (SD.begin).
3. Open a file in 'APPEND' mode to avoid overwriting previous data.
4. Format sensor readings into a comma-separated string (Timestamp, Value1, Value2).
5. Use file.flush() to ensure data is physically written to the card after each log.`,pin_config:{arduino:[{pin:"5V",component:"SD VCC",note:"Logic Level check"},{pin:"GND",component:"SD GND",note:"Common Ground"},{pin:"D10",component:"CS Pin",note:"Slave Select"},{pin:"D11",component:"MOSI",note:"SPI Out"},{pin:"D12",component:"MISO",note:"SPI In"},{pin:"D13",component:"SCK",note:"SPI Clock"}],esp32:[{pin:"3.3V / 5V",component:"SD VCC",note:"Module Power"},{pin:"GND",component:"SD GND",note:"Ground Rail"},{pin:"GPIO 5",component:"CS Pin",note:"VSPI CS"},{pin:"GPIO 18",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"}]},code:`// Industrial Logger
#include <SPI.h>
#include <SD.h>
File myFile;

void setup() {
  if (!SD.begin(10)) return;
  myFile = SD.open("log.csv", FILE_WRITE);
  if (myFile) {
    myFile.println("Timestamp,Value");
    myFile.close();
  }
}

void loop() {
  myFile = SD.open("log.csv", FILE_WRITE);
  if (myFile) {
    myFile.print(millis()); myFile.print(",");
    myFile.println(analogRead(A0));
    myFile.close();
  }
  delay(5000);
}`,advantages:"High storage capacity, offline reliability, easy data porting to Excel/MATLAB.",disadvantages:"File corruption if power is lost during a write cycle; requires high-quality SD cards.",usage:"Format your SD card to FAT32 before use. Check the serial monitor if SD initialization fails.",components:["1x Microcontroller","1x MicroSD Card Module","1x FAT32 Formatted SD Card"],circuit_diagram:"CS -> D10 | MOSI -> D11 | MISO -> D12 | SCK -> D13",status:"Published",industrial_use:"Weather station data logging and flight recorders for hobby drones.",bom_cost:"$14"},{id:27,title:"Air Quality Auditor: MQ-135 AQI Monitor",level:"Intermediate",description:"Quantify indoor air pollutants including Ammonia, NOx, Alcohol, Benzene, and CO2 using electrochemical sensing.",category:"Industrial & Health",estimatedTime:"45 mins",tech:["Arduino","ESP32","Sensors"],concept:"Gas concentration mapping. The MQ-135 has a sensitive SnO2 layer. In clean air, conductivity is low. When pollutant gases are present, conductivity increases proportionally to gas concentration.",working_principle:`1. Burn-in the sensor for 24-48 hours for baseline stability.
2. Read analog voltage from the sensor output.
3. Calculate the sensor resistance (Rs) vs. clean air resistance (Ro).
4. Use the sensitivity curve (Ratio Rs/Ro) to estimate PPM of specific gases.
5. Trigger a ventilation relay if CO2 levels exceed 1000 PPM.`,pin_config:{arduino:[{pin:"5V",component:"MQ-135 VCC",note:"Requires 5V for heater"},{pin:"GND",component:"MQ-135 GND",note:"Common Ground"},{pin:"A0",component:"MQ-135 SIG",note:"Analog Input"},{pin:"D8",component:"Fan Relay In",note:"Active HIGH"},{pin:"GND",component:"Relay Return",note:"Common GND"}],esp32:[{pin:"5V (VIN)",component:"MQ-135 VCC",note:"Heater Supply"},{pin:"GND",component:"GND",note:"Ground Rail"},{pin:"GPIO 32",component:"AQI Signal",note:"ADC1 Input"},{pin:"GPIO 19",component:"Alert LED Anode",note:"Manual Status"}]},code:`// AQI Sentinel
const int aqPin = A0;
void setup() { Serial.begin(9600); }
void loop() {
  int val = analogRead(aqPin);
  float voltage = val * (5.0/1023.0);
  Serial.print("Air Quality: ");
  if (voltage < 1.0) Serial.println("Excellent");
  else if (voltage < 2.5) Serial.println("Moderate");
  else Serial.println("Hazardous");
  delay(2000);
}`,advantages:"Low cost broad-spectrum sensing, fast response time.",disadvantages:"High cross-sensitivity (cannot distinguish between specific gases easily); affected by humidity.",usage:"Calibrate in fresh outdoor air to find your 'Ro' baseline before measuring indoor pollutants.",components:["1x Microcontroller","1x MQ-135 Air Quality Sensor","1x I2C LCD Displays"],circuit_diagram:"MQ-135 AO -> A0 | VCC -> 5V | GND -> GND",status:"Published",industrial_use:"HVAC automation in smart buildings and pollutant monitoring in manufacturing plants.",bom_cost:"$12"},{id:28,title:"Acoustic Pollution: Digital Decibel Monitor",level:"Intermediate",description:"Measure ambient noise levels and frequency peaks to monitor acoustic pollution in industrial or residential zones.",category:"Safety & Environment",estimatedTime:"40 mins",tech:["Arduino","ESP32","Acoustics"],concept:"Sound Pressure Level (SPL). By sampling the output of an electret microphone at high speed, we can calculate the amplitude (volume) and apply a logarithmic scale to estimate decibels (dB).",working_principle:`1. Sample the microphone's analog output over a 50ms window.
2. Find the 'Peak-to-Peak' voltage during that window.
3. Convert voltage peaks to a relative dB value using a reference calibration.
4. Log the average noise level over 1 hour.
5. Trigger a visual 'Quiet!' alert if levels exceed 85dB (OSHA safety limit).`,pin_config:{arduino:[{pin:"5V / 3.3V",component:"Mic Module VCC",note:"Check Power Spec"},{pin:"GND",component:"Mic Module GND",note:"Common Ground"},{pin:"A0",component:"Mic Out",note:"Analog Envelope (ENV)"},{pin:"D13",component:"Noise LED (+) ",note:"Visual Alarm"},{pin:"GND",component:"LED (-) ",note:"Return"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"Ground Rail",note:"Common Return"},{pin:"GPIO 34",component:"Audio Input (ENV)",note:"ADC1 Input"},{pin:"GPIO 2",component:"Status LED (+)",note:"Onboard Indicator"}]},code:`// Noise Auditor
void loop() {
  unsigned long start = millis();
  int maxV = 0; int minV = 1024;
  while (millis() - start < 50) {
    int read = analogRead(A0);
    if (read > maxV) maxV = read;
    if (read < minV) minV = read;
  }
  int pkToPk = maxV - minV;
  if (pkToPk > 500) digitalWrite(13, HIGH);
  else digitalWrite(13, LOW);
}`,advantages:"Real-time noise monitoring, prevents hearing damage, compact size.",disadvantages:"Requires an amplified microphone module (like MAX4466) for accurate readings; sensitive to wind.",usage:"Adjust the gain potentiometer on the back of the microphone module until the LED only triggers on loud claps.",components:["1x Microcontroller","1x MAX4466 Electret Microphone","1x Red High-Intensity LED"],circuit_diagram:"Mic OUT -> A0 | VCC -> 3.3V | GND -> GND",status:"Published",industrial_use:"Safety monitoring in high-decibel factories and noise restriction enforcement in residential áreas.",bom_cost:"$10"},{id:29,title:"Load Management: PIR Occupancy Controller",level:"Intermediate",description:"Optimize energy consumption by controlling high-power loads based on human presence and infrared heat signatures.",category:"Energy & Automation",estimatedTime:"30 mins",tech:["Arduino","ESP32","Infrared"],concept:"Pyroelectric effect. Passive Infrared (PIR) sensors have two slots made of IR-sensitive material. When a warm body passes, it creates a differential change between the two slots, triggering a pulse.",working_principle:`1. Configure the PIR sensor's retriggering jumper to 'H' mode.
2. Monitor the digital output pin (HIGH = Motion, LOW = Still).
3. Use an internal timer to maintain the load (light/AC) for a 'Stay-on' period (e.g., 5 mins).
4. Trigger a high-power relay via an isolation circuit (optocoupler).
5. Implement a 'Manual Override' to force-disable the automation.`,pin_config:{arduino:[{pin:"D2",component:"PIR Signal",note:"Digital In"},{pin:"D7",component:"Relay Out",note:"Load Switch"}],esp32:[{pin:"GPIO 13",component:"PIR In",note:"Internal Pull-down"},{pin:"GPIO 4",component:"Relay",note:"Opto-isolated"}]},code:`// Occupancy Logic
const int pir = 2; const int relay = 7;
void setup() {
  pinMode(pir, INPUT); pinMode(relay, OUTPUT);
}
void loop() {
  if (digitalRead(pir) == HIGH) {
    digitalWrite(relay, HIGH); // LOAD ON
    delay(60000); // Keep on 1 min
  } else {
    digitalWrite(relay, LOW);
  }
}`,advantages:"Significant energy savings (~30%), hands-free operation, highly reliable detection.",disadvantages:"Sensitive to rapid temperature changes (heaters/AC vents); can reach through thin glass.",usage:"Use the onboard potentiometers to adjust Sensitivity and Time-Delay according to your room size.",components:["1x Microcontroller","1x HC-SR501 PIR Sensor","1x 5V Relay Module","Jumper Wires"],circuit_diagram:"PIR Out -> D2 | Relay In -> D7 | VCC -> 5V",status:"Published",industrial_use:"Automated lighting in warehouses and demand-based HVAC in office buildings.",bom_cost:"$11"},{id:30,title:"RTC Industrial Scheduler: Temporal Automation",level:"Intermediate",description:"Develop a high-precision automation system that triggers industrial events based on wall-clock time using Real-Time Clock (RTC) modules.",category:"Industrial & Systems",estimatedTime:"45 mins",tech:["Arduino","ESP32","I2C"],concept:"Timekeeping independence. Microcontrollers lose time when powered off. RTC modules like the DS3231 use a battery-backed crystal oscillator to maintain accurate time (±2ppm) regardless of the MCU's state.",working_principle:`1. Initialize communication with the DS3231 via the I2C bus.
2. Set the current time and date in the provisioning phase.
3. The MCU polls the RTC every 1000ms to read the 'Second, Minute, Hour' registers.
4. Compare the 'Now' time against a user-defined 'Schedule' (e.g., 08:00:00).
5. Trigger a latching relay or notification if the time matches the alarm window.`,pin_config:{arduino:[{pin:"5V",component:"RTC VCC",note:"Logic Power"},{pin:"GND",component:"RTC GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"RTC SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"RTC SCL",note:"I2C Clock"},{pin:"D7",component:"Schedule Relay",note:"Output"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Rail"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 21",component:"RTC SDA",note:"I2C Data"},{pin:"GPIO 22",component:"RTC SCL",note:"I2C Clock"},{pin:"GPIO 4",component:"Status LED",note:"Visual Indicator"}]},code:`// Precise Temporal Control
#include "RTClib.h"
RTC_DS3231 rtc;

void setup() {
  if (!rtc.begin()) while(1);
  if (rtc.lostPower()) rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
}

void loop() {
  DateTime now = rtc.now();
  if (now.hour() == 8 && now.minute() == 0) {
    digitalWrite(7, HIGH); // START INDUSTRIAL LOAD
  }
  delay(30000); // Check every 30s
}`,advantages:"Battery-backed (No time loss), extremely accurate (±1 min/year), works without Internet (NTP).",disadvantages:"Lithium battery replacement needed every 5-8 years; sensitive to extreme vibrations.",usage:"Use the 'DS3231' library. Ensure the CR2032 battery is inserted for time-memory functionality.",components:["1x Microcontroller","1x DS3231 RTC Module","1x CR2032 Battery","1x Relay Module"],circuit_diagram:"RTC SDA -> A4 | RTC SCL -> A5 | Relay IN -> D7 | VCC -> 5V",status:"Published",industrial_use:"Shift-change whistles in factories and automated street-lighting controllers.",bom_cost:"$13"},{id:31,title:"OLED Command Center: Multi-Layered HMI",level:"Intermediate",description:"Design a professional Human-Machine Interface (HMI) with rotating menus, real-time graphs, and status icons using I2C OLED displays.",category:"Automation & Visualization",estimatedTime:"60 mins",tech:["Arduino","ESP32","I2C"],concept:"Buffer-based rendering. Instead of writing directly to the screen pixels, we update an internal RAM buffer and then push the entire frame to the controller. This allows for flicker-free animations and complex graphics.",working_principle:`1. Initialize the SSD1306 controller via I2C.
2. Implement a 'State Machine' to handle menu navigation (Home, Sensors, Settings).
3. Use a rotary encoder or buttons to transition between states.
4. Design custom icons using bitmap arrays (uint8_t).
5. Use a circular buffer to store last 64 sensor readings and draw a scrolling Sparkline-style graph.`,pin_config:{arduino:[{pin:"5V",component:"OLED VCC",note:"Logic Power"},{pin:"GND",component:"OLED GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"OLED SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"OLED SCL",note:"I2C Clock"},{pin:"D2",component:"Encoder A",note:"Interrupt Pin"},{pin:"D3",component:"Encoder B",note:"Signal Pin"}],esp32:[{pin:"3.3V / 5V",component:"OLED VCC",note:"Check Rating"},{pin:"GND",component:"GND Rail",note:"Ground"},{pin:"GPIO 21",component:"SDA",note:"I2C Data"},{pin:"GPIO 22",component:"SCL",note:"I2C Clock"},{pin:"GPIO 4",component:"Encoder A",note:"ISR Capable"},{pin:"GPIO 5",component:"Encoder B",note:"Digital In"}]},code:`// HMI Pro Dashboard
#include <U8g2lib.h>
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(0, 10, "SYSTEM NORMAL");
  u8g2.drawHLine(0, 15, 128);
  u8g2.sendBuffer();
  delay(100);
}`,advantages:"Professional aesthetic, low power consumption (0.01W), high contrast.",disadvantages:"Small screen real estate (0.96 inch); burn-in risk if static images are left for weeks.",usage:"Use the 'U8g2' library for maximum control. Use an online 'Image2Cpp' converter for custom bitmaps.",components:["1x Microcontroller",'1x 0.96" OLED (SSD1306)',"1x Rotary Encoder (KY-040)","Connecting Wires"],circuit_diagram:"OLED SDA -> A4 | OLED SCL -> A5 | Encoder A -> D2 | Encoder B -> D3",status:"Published",industrial_use:"Compact diagnostic displays for industrial pumps and smart thermostat interfaces.",bom_cost:"$9"},{id:32,title:"LoRa Field Node: Long Range Telemetry",level:"Advanced",description:"Establish long-range (up to 15km) wireless communication using Chirp Spread Spectrum (CSS) modulation for remote agricultural sensing.",category:"Connectivity & Wireless",estimatedTime:"90 mins",tech:["Arduino","ESP32","LoRa"],concept:"Chirp Spread Spectrum. Unlike Wi-Fi which uses high bandwidth, LoRa uses low bandwidth but spreads pulses over time (chirps). This makes it extremely resistant to interference and capable of deep penetration.",working_principle:`1. Interface with the SX1276/78 LoRa module via SPI.
2. Configure frequency (868/915 MHz), Spreading Factor (SF), and Bandwidth.
3. Implement a 'Receiver-Side Address' check to filter out packets from other nodes.
4. Optimize for low power by putting the radio into 'CAD' (Channel Activity Detection) mode.
5. Transmit critical sensor data with a CRC check for integrity.`,pin_config:{arduino:[{pin:"3.3V",component:"LoRa VCC",note:"Requires 3.3V"},{pin:"GND",component:"LoRa GND",note:"Common Ground"},{pin:"D10",component:"LoRa CS (NSS)",note:"SPI Slave Select"},{pin:"D9",component:"LoRa RST",note:"Reset Pin"},{pin:"D2",component:"LoRa DIO0",note:"IRQ Interrupt"},{pin:"D11",component:"MOSI",note:"SPI Out"},{pin:"D12",component:"MISO",note:"SPI In"},{pin:"D13",component:"SCK",note:"SPI Clock"}],esp32:[{pin:"3.3V",component:"LoRa VCC",note:"Power Rail"},{pin:"GND",component:"LoRa GND",note:"Ground Rail"},{pin:"GPIO 5",component:"NSS (CS)",note:"VSPI CS"},{pin:"GPIO 14",component:"SCK",note:"VSPI CLK"},{pin:"GPIO 23",component:"MOSI",note:"VSPI MOSI"},{pin:"GPIO 19",component:"MISO",note:"VSPI MISO"},{pin:"GPIO 27",component:"RST",note:"Reset"},{pin:"GPIO 26",component:"DIO0",note:"Interrupt"}]},code:`// LoRa Transmitter
#include <LoRa.h>

void setup() {
  if (!LoRa.begin(915E6)) return; // US Frequency
  LoRa.setSpreadingFactor(12); // Max range
}

void loop() {
  LoRa.beginPacket();
  LoRa.print("TEMP: 24.5C");
  LoRa.endPacket();
  delay(10000);
}`,advantages:"Extreme range (10km+), penetration through walls, runs for years on a battery.",disadvantages:"Low data rate (bytes, not images); high latency; requires frequency-specific antennas.",usage:"Ensure an antenna is connected BEFORE powering up, or the module might overheat and fail.",components:["2x Microcontrollers","2x SX1278 LoRa Modules","2x Antennas","Breadboard"],circuit_diagram:"MISO -> D12 | MOSI -> D11 | SCK -> D13 | NSS -> D10 | DIO0 -> D2",status:"Published",industrial_use:"Soil moisture monitoring in large-scale farms and remote meter reading in urban areas.",bom_cost:"$18"},{id:33,title:"Modbus Slave: RS485 Industrial Interface",level:"Advanced",description:"Convert your microcontroller into an industrial Modbus RTU slave that interfaces with PLCs and SCADA systems.",category:"Industrial & Control",estimatedTime:"70 mins",tech:["Arduino","ESP32","RS485"],concept:"Master-Slave communication. Modbus is the 'lingua franca' of factories. It uses 16-bit registers to store data. RS485 provides the physical layer for multi-drop, long-distance electrical communication.",working_principle:`1. Use a MAX485 TTL-to-RS485 converter for differential signaling.
2. Define a 'Register Map' (e.g., Register 101 = Temperature reading).
3. Listen for requests from the Modbus Master (e.g., PLC).
4. If the Slave ID matches, parse the function code (Read/Write).
5. Respond with the requested data formatted in Big-Endian bytes.`,pin_config:{arduino:[{pin:"5V",component:"MAX485 VCC",note:"Bus Power"},{pin:"GND",component:"MAX485 GND",note:"Common Ground"},{pin:"D3",component:"DE/RE",note:"Direction Control"},{pin:"D0 (RX)",component:"RO (Receive)",note:"Input"},{pin:"D1 (TX)",component:"DI (Transmit)",note:"Output"}],esp32:[{pin:"3.3V / 5V",component:"MAX485 VCC",note:"Check Module"},{pin:"GND",component:"GND Rail",note:"Ground Return"},{pin:"GPIO 4",component:"DE/RE Control",note:"Data Dir"},{pin:"GPIO 17",component:"TX2 (DI)",note:"UART2 Transmit"},{pin:"GPIO 16",component:"RX2 (RO)",note:"UART2 Receive"}]},code:`// Modbus RTU Node
#include <ModbusRTUSlave.h>
const int SLAVE_ID = 1;
uint16_t registers[10];
ModbusRTUSlave modbus(Serial, 3); // Serial, Dir Pin

void setup() {
  Serial.begin(9600);
  modbus.addHoldingRegister(101);
}

void loop() {
  registers[0] = analogRead(A0);
  modbus.poll();
}`,advantages:"Industry compatible, reliable over 1200m, supported by almost all PLCs.",disadvantages:"Half-duplex (cannot send/recv at once); requires MAX485 external hardware.",usage:"Set the Modbus Master (PLC) to the same baud rate and parity (9600-8-N-1 is standard).",components:["1x Microcontroller","1x MAX485 Module","1x PLC or USB-RS485 Converter"],circuit_diagram:"RO -> RX | DI -> TX | DE/RE -> D3 | A -> Bus A | B -> Bus B",status:"Published",industrial_use:"Integrating custom IoT sensors into factory SCADA systems like Ignition or Wonderware.",bom_cost:"$10"},{id:34,title:"Vibration Auditor: Predictive Maintenance",level:"Advanced",description:"Analyze machine health by measuring vibration FFT (Fast Fourier Transform) to predict bearing failures before they occur.",category:"Industrial & Safety",estimatedTime:"80 mins",tech:["Arduino","ESP32","Signal Processing"],concept:"Frequency analysis. Mechanical defects like misalignment or worn bearings create specific vibration frequencies. By analyzing the 'Spectrum', we can identify which component is failing.",working_principle:`1. Sample acceleration data from an ADXL345 at a high frequency (e.g., 2kHz).
2. Apply a Hanning 'Window' to the data to prevent spectral leakage.
3. Compute the FFT (Fast Fourier Transform) to convert Time-Domain to Frequency-Domain.
4. Find the Peak Frequency and Amplitude.
5. Alert if vibration intensity in the 100Hz-500Hz band exceeds the safety threshold.`,pin_config:{arduino:[{pin:"3.3V",component:"ADXL345 VCC",note:"Requires 3.3V"},{pin:"GND",component:"ADXL345 GND",note:"Common Ground"},{pin:"A4 (SDA)",component:"ADXL345 SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"ADXL345 SCL",note:"I2C Clock"}],esp32:[{pin:"3.3V",component:"VCC Rail",note:"Power Supply"},{pin:"GND",component:"GND Rail",note:"Ground Rail"},{pin:"GPIO 21",component:"ADXL SDA",note:"I2C Data"},{pin:"GPIO 22",component:"ADXL SCL",note:"I2C Clock"}]},code:`// Maintenance FFT Analyzer
#include <arduinoFFT.h>
arduinoFFT FFT = arduinoFFT();
double vReal[64]; double vImag[64];

void loop() {
  for(int i=0; i<64; i++) {
    vReal[i] = analogRead(A0); vImag[i] = 0;
  }
  FFT.Windowing(vReal, 64, FFT_WIN_TYP_HAMMING, FFT_FORWARD);
  FFT.Compute(vReal, vImag, 64, FFT_FORWARD);
  FFT.ComplexToMagnitude(vReal, vImag, 64);
  Serial.println(FFT.MajorPeak(vReal, 64, 2000));
}`,advantages:"Saves thousands in repair costs, detects problems invisible to the human eye, non-stop operation.",disadvantages:"Computationally heavy (requires ESP32 for high-resolution FFT); sensitive to mounting position.",usage:"Mount the sensor rigidly to the motor casing using a screw or industrial magnet. Tape is NOT adequate.",components:["1x ESP32 (Recommended)","1x ADXL345 Triple-Axis Accelerometer","1x Status Buzzer"],circuit_diagram:"ADXL SDA -> GPIO 21 | ADXL SCL -> GPIO 22 | VCC -> 3.3V",status:"Published",industrial_use:"Predictive maintenance for cooling tower fans and industrial conveyor rollers.",bom_cost:"$15"},{id:35,title:"Secure Gateway: Hardware Encryption",level:"Advanced",description:"Protect sensitive IoT telemetry using hardware-accelerated AES-128 encryption and secure key storage.",category:"Security & Connectivity",estimatedTime:"100 mins",tech:["ESP32","Security","AES"],concept:"End-to-end security. Software encryption keys can be dumped from memory. Hardware Security Modules (HSMs) like the ATECC608 secure the key in a tamper-proof chip that performs encryption internally.",working_principle:`1. Initialize the Secure Element via I2C.
2. In the provisioning phase, generate a unique Elliptic Curve (ECC) private key inside the chip.
3. Before sending data to the cloud, hash the payload using SHA-256.
4. Use the secure chip to Sign the hash with the private key.
5. The cloud verifies the signature using your public key, ensuring the data wasn't tampered with.`,pin_config:{arduino:[{pin:"N/A",component:"MCU Speed",note:"Too slow for ECC logic"},{pin:"N/A",component:"-",note:"Switch to ESP32 platform"}],esp32:[{pin:"3.3V",component:"HSM VCC",note:"ATECC608 Power"},{pin:"GND",component:"HSM GND",note:"Ground Return"},{pin:"GPIO 21",component:"HSM SDA",note:"I2C Data"},{pin:"GPIO 22",component:"HSM SCL",note:"I2C Clock"}]},code:`// Secure Vault Link
#include <Crypto.h>
#include <AES.h>
AES128 aes128;
byte key[16] = {0x01, ...}; // Secure Key

void loop() {
  char data[] = "HEALTH_REPORT_SECRET";
  byte cipher[16];
  aes128.setKey(key, 16);
  aes128.encryptBlock(cipher, (byte*)data);
  // Send base64(cipher) to Cloud
  delay(5000);
}`,advantages:"Military-grade protection, prevents 'Man-in-the-Middle' attacks, tamper-evident.",disadvantages:"Complex implementation; lost private keys make data permanently unreadable.",usage:"Use the 'Microchip CryptoAuthLib' for ATECC608 integration. Never hardcode keys in plaintext.",components:["1x ESP32","1x ATECC608 Secure Element","1x MicroSD for local logs"],circuit_diagram:"AES chip SDA -> Pin 21 | SCL -> Pin 22 | GND -> GND",status:"Published",industrial_use:"Medical device data transmission and secure payment portals in kiosks.",bom_cost:"$12"},{id:36,title:"Precision Weighing: HX711 Industrial Scale",level:"Intermediate",description:"Interface with high-precision load cells and 24-bit ADCs to build an industrial weighing terminal for logistics and inventory.",category:"Industrial & Manufacturing",estimatedTime:"55 mins",tech:["Arduino","ESP32","Analog"],concept:"Wheatstone bridge. A load cell is a piece of aluminum with strain gauges. When weight is applied, the resistance of the gauges changes slightly. The HX711 amplifies this microvolt-level change and converts it to a 24-bit digital value.",working_principle:`1. Connect the 4 wires of the load cell (E+, E-, A+, A-) to the HX711 module.
2. Perform a 'Tare' calibration to zero out the weight of the platform.
3. Apply a known weight (e.g., 500g) to determine the 'Calibration Factor'.
4. Read the 24-bit raw output and apply the factor to get grams/kilograms.
5. Implement a digital filter (moving average) to stabilize readings under vibration.`,pin_config:{arduino:[{pin:"5V",component:"HX711 VCC",note:"Analog Power"},{pin:"GND",component:"HX711 GND",note:"Common Ground"},{pin:"D3",component:"HX711 DT (Data)",note:"24-bit Output"},{pin:"D2",component:"HX711 SCK (Clock)",note:"Serial Sync"}],esp32:[{pin:"3.3V / 5V",component:"VCC Rail",note:"Logic Supply"},{pin:"GND",component:"GND Rail",note:"Ground return"},{pin:"GPIO 18",component:"DT (Data Out)",note:"Digital In"},{pin:"GPIO 19",component:"SCK (Clock)",note:"Digital Out"}]},code:`// Weight Station Pro
#include "HX711.h"
HX711 scale;

void setup() {
  scale.begin(3, 2);
  scale.set_scale(2280.f); // Calibration factor
  scale.tare();
}

void loop() {
  Serial.print("Weight: ");
  Serial.println(scale.get_units(), 1);
  delay(500);
}`,advantages:"Incredible precision (0.1g resolution), low cost, easy to integrate into ERP systems.",disadvantages:"Sensitive to temperature drift; requires rigid mechanical mounting; fragile strain gauges.",usage:"Avoid 'creep' by not leaving heavy loads on the scale for extended periods. Recalibrate monthly.",components:["1x Microcontroller","1x HX711 24-bit ADC","1x 5kg/10kg Load Cell","Mounting Plates"],circuit_diagram:"Load Cell (Red) -> E+ | (Black) -> E- | (White) -> A- | (Green) -> A+",status:"Published",industrial_use:"Filling stations for chemical containers and automated parcel weighing in warehouses.",bom_cost:"$14"},{id:37,title:"Flow Guardian: Hall-Effect Liquid Meter",level:"Intermediate",description:"Quantify liquid volume and flow rate using turbine-based Hall effect sensors for smart water management.",category:"Industrial & Energy",estimatedTime:"45 mins",tech:["Arduino","ESP32","Fluid Dynamics"],concept:"Magnetic pulse counting. As liquid flows through the meter, it spins a turbine. A magnet on the turbine passes a Hall-effect sensor, generating a pulse for every rotation. The frequency of pulses is proportional to the flow rate.",working_principle:`1. Attach the flow sensor signal pin to a hardware interrupt pin on the MCU.
2. Increment a 'Pulse Count' inside the Interrupt Service Routine (ISR).
3. Every 1 second, calculate the frequency (pulses per second).
4. Apply the 'K-Factor' (e.g., 7.5 pulses/sec = 1 Liter/min) to get real flow rate.
5. Integrate flow rate over time to calculate total volume consumed (liters).`,pin_config:{arduino:[{pin:"5V",component:"Sensor VCC",note:"Module Power"},{pin:"GND",component:"Sensor GND",note:"Common Ground"},{pin:"D2",component:"Sensor SIG",note:"Interrupt Pin (Int0)"}],esp32:[{pin:"3.3V / 5V",component:"VCC Rail",note:"Check Sensor rating"},{pin:"GND",component:"GND Return",note:"Ground Rail"},{pin:"GPIO 4",component:"SIG Input",note:"Trigger Interrupt"}]},code:`// Flow Tracker v2
volatile int pulseCount;
void countPulse() { pulseCount++; }

void setup() {
  pinMode(2, INPUT_PULLUP);
  attachInterrupt(0, countPulse, RISING);
}

void loop() {
  pulseCount = 0; delay(1000);
  float flowRate = (pulseCount / 7.5); // L/min
  Serial.print("Flow: "); Serial.println(flowRate);
}`,advantages:"Non-contact sensing (no leaks), low maintenance, high reliability for water/fuel.",disadvantages:"Cannot measure viscous liquids (honey/oil) accurately; turbine can jam with debris.",usage:"Use a 10k pull-up resistor if your sensor doesn't have an internal one. Install a filter upstream.",components:["1x Microcontroller","1x YF-S201 Flow Sensor","1x I2C LCD for Display"],circuit_diagram:"Sensor Red -> 5V | Sensor Black -> GND | Sensor Yellow -> D2",status:"Published",industrial_use:"Smart irrigation monitoring and fuel consumption tracking in generators.",bom_cost:"$12"},{id:38,title:"Energy Optimizer: MPPT Solar Tracker",level:"Advanced",description:"Maximize solar energy harvest by tracking the sun's position using LDR arrays and servo-controlled panels.",category:"Energy & Automation",estimatedTime:"120 mins",tech:["Arduino","ESP32","Robotics"],concept:"Dual-Axis Tracking. Fixed solar panels lose up to 40% efficiency due to the angle of incidence. An active tracker ensures the panel is always perpendicular to the sun's rays for maximum photon absorption.",working_principle:`1. Position 4 Light Dependent Resistors (LDRs) in a cross formation separated by baffles.
2. Read analog values from Top, Bottom, Left, and Right sensors.
3. Compare 'Top-Bottom' and 'Left-Right' averages.
4. If the difference exceeds a threshold, move the Pan/Tilt servos to minimize the error.
5. Return to East (Home) at night when all LDRs report low light.`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Servo/Logic Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"A0-A3",component:"LDR Cross Array",note:"Analog Inputs"},{pin:"D9",component:"H-Servo Signal",note:"Horizontal PWM"},{pin:"D10",component:"V-Servo Signal",note:"Vertical PWM"}],esp32:[{pin:"3.3V",component:"Logic VCC",note:"For LDR Array"},{pin:"5V (EXT)",component:"Servo Power",note:"Don't use ESP32 pin"},{pin:"GND",component:"Common return",note:"Shared GND"},{pin:"GPIO 32-35",component:"LDR Array",note:"ADC1 Pins"},{pin:"GPIO 4",component:"H-Servo PWM",note:"LEDC Chan 0"},{pin:"GPIO 16",component:"V-Servo PWM",note:"LEDC Chan 1"}]},code:`// Dual Axis Sun Tracker
#include <Servo.h>
Servo horiz; Servo vert;
void loop() {
  int lt = analogRead(A0); int rt = analogRead(A1);
  int diff = lt - rt;
  if (abs(diff) > 10) {
    int pos = horiz.read();
    horiz.write(diff > 0 ? pos+1 : pos-1);
  }
  delay(50);
}`,advantages:"Increases energy yield by 30-45%, fully autonomous, educational for PID logic.",disadvantages:"Moving parts require maintenance; servos consume energy; susceptible to high winds.",usage:"Use high-torque servos with metal gears for even small panels. Implement a 10-degree 'Deadzone' to prevent jitter.",components:["1x Microcontroller","2x MG996R Servos","4x LDRs","1x 5V Solar Panel"],circuit_diagram:"LDRs -> A0-A3 | PWM -> D9, D10 | External 5V Power for Servos",status:"Published",industrial_use:"Utility-scale solar farms and smart house energy harvesting units.",bom_cost:"$25"},{id:39,title:"AC Load Phase Controller: Triac Dimming Logic",level:"Advanced",description:"Precisely control AC power (0-100%) for heaters and lamps using Zero-Crossing detection and Phase Angle firing.",category:"Energy & Industrial",estimatedTime:"80 mins",tech:["Arduino","ESP32","High Voltage"],concept:"Phase angle control. AC power varies like a sine wave. By waiting for the voltage to cross zero and then delaying the trigger (firing) of a Triac, we can chop the wave and effectively reduce the power delivered.",working_principle:`1. Detect the Zero-Crossing point using an H11AA1 optocoupler to avoid high voltage in the MCU.
2. Trigger a hardware interrupt on the falling/rising edge of the ZC signal.
3. Inside the interrupt, start a timer with a delay (0ms to 8.3ms for 60Hz).
4. When the timer expires, pulse the Triac gate via an optotriac (MOC3021).
5. Adjust the delay based on desired brightness/heat (PID control).`,pin_config:{arduino:[{pin:"5V",component:"VCC Rail",note:"Opto-logic Power"},{pin:"GND",component:"GND Rail",note:"Common Ground"},{pin:"D2",component:"ZC Sync In",note:"Interrupt Pin (Sync)"},{pin:"D3",component:"Triac Gate Out",note:"PWM/Phase Drive"}],esp32:[{pin:"3.3V",component:"Logic VCC",note:"Communication Rail"},{pin:"GND",component:"GND Rail",note:"System Ground"},{pin:"GPIO 13",component:"ZC Sync In",note:"ISR Trigger"},{pin:"GPIO 14",component:"Gate Drive Out",note:"Phase Controller"}]},code:`// AC Phase Master
volatile int dimming = 120; // 0-128
void zero_cross() {
  int delayTime = (75 * dimming);
  delayMicroseconds(delayTime);
  digitalWrite(3, HIGH); delayMicroseconds(10); digitalWrite(3, LOW);
}

void setup() {
  pinMode(ZC_PIN, INPUT);
  attachInterrupt(0, zero_cross, RISING);
}`,advantages:"Silent (unlike relays), precise power control, small footprint.",disadvantages:"EXTREMELY DANGEROUS (MAINS VOLTAGE); produces electrical noise (EMI); needs a heat sink.",usage:"Always use an isolation transformer for testing. Ensure the Triac is rated for at least 600V.",components:["1x Microcontroller","1x BT136 Triac","1x MOC3021 Optotriac","1x H11AA1 Optocoupler"],circuit_diagram:"CAUTION: HIGH VOLTAGE. Refer to professional isolated dimmer schematics.",status:"Published",industrial_use:"PID-controlled industrial ovens and smart lighting for theaters/auditoriums.",bom_cost:"$9"},{id:40,title:"Factory Backbone: Integrated Telemetry Hub",level:"Advanced",description:"A comprehensive industrial node that consolidates Modbus, Wi-Fi, and Sensor data into a unified MQTT bridge.",category:"Industrial & IoT",estimatedTime:"150 mins",tech:["ESP32","MQTT","Modbus","RTC"],concept:"Data aggregation. In complex factories, single sensors aren't enough. This hub acts as a 'Local Master', collecting data from localized slaves and bridging it to the Global Cloud via secure MQTT binary protocols.",working_principle:`1. Initialize Multi-tasking (FreeRTOS) on ESP32 dual cores.
2. Core 0: Manage Wi-Fi/MQTT connection and secure handshake.
3. Core 1: Poll RS485 Modbus slaves and local I2C sensors (BME280).
4. Use a Queue to pass data from Core 1 to Core 0.
5. Log all failures to an onboard SD card for audit trails during Wi-Fi outages.`,pin_config:{arduino:[{pin:"N/A",component:"System Load",note:"Requires Dual Core SoC"},{pin:"N/A",component:"-",note:"Switch to ESP32 Platform"}],esp32:[{pin:"5V (EXT)",component:"Main Power",note:"Requires stable 5V"},{pin:"GND",component:"Common Return",note:"Ground Array"},{pin:"GPIO 17",component:"RS485 TX2",note:"UART2 Out"},{pin:"GPIO 16",component:"RS485 RX2",note:"UART2 In"},{pin:"GPIO 4",component:"RS485 Dir",note:"DE/RE Control"},{pin:"GPIO 21 (SDA)",component:"I2C Bus",note:"BME280/Sensors"},{pin:"GPIO 22 (SCL)",component:"I2C Bus",note:"BME280/Sensors"}]},code:`// Unified Industrial Hub
#include <WiFi.h>
#include <PubSubClient.h>

void TaskMQTT(void *pv) {
  for(;;) {
    if (client.connected()) client.publish("factory/hub1", "DATA_STR");
    vTaskDelay(5000 / portTICK_PERIOD_MS);
  }
}

void setup() {
  xTaskCreatePinnedToCore(TaskMQTT, "MQTT", 5000, NULL, 1, NULL, 0);
}`,advantages:"Reliable data consolidation, high uptime via FreeRTOS, industry-standard protocols.",disadvantages:"High power consumption; complex firmware management; requires robust network infrastructure.",usage:"Deploy in a NEMA-rated enclosure. Ensure the power supply is isolated and surge-protected.",components:["1x ESP32 DevKit","1x RS485 Shield","1x BME280 Sensor","1x MicroSD Slot"],circuit_diagram:"Consolidated wiring of SPI, I2C, and UART interfaces.",status:"Published",industrial_use:"Central control nodes in smart factories and environmental auditing for data centers.",bom_cost:"$32"}];export{e as p};
