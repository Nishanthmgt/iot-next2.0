const e=[{id:1,title:"LED Blink: The Gateway to IoT",level:"Beginner",description:"Master the 'Hello World' of hardware by controlling a physical light source using digital logic and timing protocols.",category:"IoT & Systems",estimatedTime:"15 mins",tech:["Arduino","ESP32"],concept:"The LED Blink project introduces the fundamental concept of GPIO (General Purpose Input/Output). By toggling a digital signal between HIGH (5V/3.3V) and LOW (0V), we control the flow of electricity to an external component.",working_principle:`1. The microcontroller initializes the designated pin as an OUTPUT.
2. In the main loop, it sets the pin HIGH to complete the circuit.
3. A delay function pauses execution for a set duration (e.g., 1000ms).
4. The pin is set LOW to break the circuit, turning the LED off.
5. The process repeats indefinitely.`,pin_config:{arduino:[{pin:"D13",component:"LED Anode (+)",note:"Built-in LED"},{pin:"GND",component:"LED Cathode (-)",note:"Common Ground"}],esp32:[{pin:"GPIO 2",component:"LED Anode (+)",note:"Onboard Blue LED"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// LED Blink Protocol
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
4. A small delay creates the smooth transition effect.`,pin_config:{arduino:[{pin:"D9",component:"LED Anode (+)",note:"PWM Enabled Pin"},{pin:"GND",component:"LED Cathode (-)",note:"Ground"}],esp32:[{pin:"GPIO 4",component:"LED Anode (+)",note:"PWM capable GPIO"},{pin:"GND",component:"LED Cathode (-)",note:"Ground Rail"}]},code:`// PWM Fading Logic
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
4. If state is HIGH (pressed), the LED pin is set HIGH.`,pin_config:{arduino:[{pin:"D2",component:"Push Button",note:"Input Pin"},{pin:"D13",component:"LED",note:"Output Pin"},{pin:"5V",component:"Button VCC",note:"Power Supply"}],esp32:[{pin:"GPIO 15",component:"Push Button",note:"Input Pin"},{pin:"GPIO 2",component:"LED",note:"Onboard LED"},{pin:"3.3V",component:"Button VCC",note:"Power Supply"}]},code:`// Interactive Button Logic
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
5. The cycle loops to simulate intersection management.`,pin_config:{arduino:[{pin:"D10",component:"Red LED",note:"Stop Signal"},{pin:"D11",component:"Yellow LED",note:"Caution Signal"},{pin:"D12",component:"Green LED",note:"Go Signal"}],esp32:[{pin:"GPIO 4",component:"Red LED",note:"Stop Signal"},{pin:"GPIO 16",component:"Yellow LED",note:"Caution Signal"},{pin:"GPIO 17",component:"Green LED",note:"Go Signal"}]},code:`// Traffic Light Machine
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
4. Switching frequencies in a loop creates a melody or siren effect.`,pin_config:{arduino:[{pin:"D8",component:"Piezo Buzzer (+)",note:"Signal Output"},{pin:"GND",component:"Buzzer (-)",note:"Ground"}],esp32:[{pin:"GPIO 25",component:"Piezo Buzzer (+)",note:"DAC capable GPIO"},{pin:"GND",component:"Buzzer (-)",note:"Common Ground"}]},code:`// Audible Alarm Script
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
5. An animation effect is added to simulate rolling.`,pin_config:{arduino:[{pin:"D2 to D8",component:"7x LED Anodes",note:"Output Group"},{pin:"D9",component:"Push Button",note:"Trigger"},{pin:"GND",component:"Common Ground",note:"Cathode Rail"}],esp32:[{pin:"GPIO 4,5,18,19,21,22,23",component:"LED Array",note:"High Power Outputs"},{pin:"GPIO 15",component:"Push Button",note:"Input"}]},code:`// Random Dice Generator
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
4. A common cathode RGB LED is typically used.`,pin_config:{arduino:[{pin:"D9",component:"Red Anode",note:"PWM Channel 1"},{pin:"D10",component:"Green Anode",note:"PWM Channel 2"},{pin:"D11",component:"Blue Anode",note:"PWM Channel 3"},{pin:"GND",component:"Common Cathode",note:"Ground"}],esp32:[{pin:"GPIO 4",component:"Red",note:"LEDC Channel 0"},{pin:"GPIO 16",component:"Green",note:"LEDC Channel 1"},{pin:"GPIO 17",component:"Blue",note:"LEDC Channel 2"}]},code:`// RGB Color Mixer
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
5. Hysteresis logic is added to prevent flickering during sunset.`,pin_config:{arduino:[{pin:"A0",component:"LDR + 10k Resistor",note:"Analog Input"},{pin:"D13",component:"Lamp / LED",note:"Load Output"},{pin:"5V",component:"VCC",note:"Sensor Power"}],esp32:[{pin:"GPIO 34",component:"LDR Input",note:"ADC1 Channel"},{pin:"GPIO 2",component:"Status LED",note:"Onboard"}]},code:`// Smart Night Lamp Logic
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
4. A visual indicator on a breadboard (LED bar graph) can also be used.`,pin_config:{arduino:[{pin:"A0",component:"LDR Sensor",note:"Primary Input"},{pin:"USB",component:"Serial Monitor",note:"Data Out"}],esp32:[{pin:"GPIO 34",component:"LDR",note:"ADC Input"},{pin:"TX/RX",component:"USB-UART",note:"Terminal"}]},code:`// Light Monitor Protocol
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
4. It includes a reset condition once the flame is no longer detected.`,pin_config:{arduino:[{pin:"D7",component:"Flame Sensor (D0)",note:"Sensitive Input"},{pin:"D8",component:"Buzzer (+)",note:"Alarm Signal"},{pin:"D13",component:"Red LED",note:"Visual Alert"}],esp32:[{pin:"GPIO 4",component:"Flame Sensor",note:"Digital In"},{pin:"GPIO 25",component:"Piezo Buzzer",note:"DAC Alarm"}]},code:`// Fire Alarm Logic
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
5. Implement a 2000ms refresh rate to prevent data flickering.`,pin_config:{arduino:[{pin:"A4 (SDA)",component:"LCD SDA",note:"I2C Data"},{pin:"A5 (SCL)",component:"LCD SCL",note:"I2C Clock"},{pin:"5V",component:"VCC",note:"Logic Power"},{pin:"GND",component:"GND",note:"Common Ground"}],esp32:[{pin:"GPIO 21",component:"LCD SDA",note:"SDA"},{pin:"GPIO 22",component:"LCD SCL",note:"SCL"},{pin:"3.3V / 5V",component:"VCC",note:"Level check required"}]},code:`// I2C LCD Precision Thermometer
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
5. Implement soft-debounce to prevent false triggers.`,pin_config:{arduino:[{pin:"D2",component:"Bell Switch",note:"Interrupt Pin (Int0)"},{pin:"D8",component:"Piezo Buzzer",note:"Alert Output"},{pin:"GND",component:"Common Ground",note:"-"}],esp32:[{pin:"GPIO 4",component:"Bell Switch",note:"Any GPIO supports ISR"},{pin:"GPIO 25",component:"Buzzer",note:"Audio Out"}]},code:`// Interrupt-Based Doorbell
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
5. Adjust the multi-turn potentiometer for sensitivity calibration.`,pin_config:{arduino:[{pin:"D7",component:"Sound Sensor (D0)",note:"Trigger Input"},{pin:"D13",component:"Relay/LED",note:"Load Switch"},{pin:"5V",component:"VCC",note:"-"}],esp32:[{pin:"GPIO 4",component:"D0 Input",note:"Sensitive Input"},{pin:"GPIO 2",component:"Onboard LED",note:"HMI Feedback"}]},code:`// Acoustic Toggle Logic
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
5. Use black surfaces to test absorption and range calibration.`,pin_config:{arduino:[{pin:"D7",component:"IR Sensor Out",note:"Active LOW Input"},{pin:"D8",component:"Status Alert",note:"Collision LED"},{pin:"5V",component:"VCC",note:"Module Power"}],esp32:[{pin:"GPIO 15",component:"IR Receiver",note:"Digital Input"},{pin:"GPIO 2",component:"Alert LED",note:"Onboard"}]},code:`// IR Proximity Guard
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
5. Implement a latching state to toggle the load (on/off).`,pin_config:{arduino:[{pin:"D4",component:"TTP223 Out",note:"Digital Touch Input"},{pin:"D13",component:"LED Load",note:"Output"}],esp32:[{pin:"T0 (GPIO 4)",component:"Capacitive Pad",note:"Native Touch Support"},{pin:"GPIO 2",component:"Status LED",note:"HMI Feedback"}]},code:`// Capacitive Touch Toggle
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
5. Implement a digital safety interlock for emergency shutdowns.`,pin_config:{arduino:[{pin:"A0",component:"MQ-2 Analog Out",note:"Gas Level"},{pin:"D8",component:"Alarm Buzzer",note:"Audio Alert"},{pin:"5V",component:"VCC",note:"High Current Rail"}],esp32:[{pin:"GPIO 32",component:"MQ-2 Signal",note:"ADC1 Channel"},{pin:"GPIO 25",component:"Piezo Buzzer",note:"Alarm"}]},code:`// Industrial Gas Auditor
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
5. Trigger an alert if the moisture level exceeds 10% (Precipitation detect).`,pin_config:{arduino:[{pin:"D4",component:"Sensor VCC",note:"Power Gate"},{pin:"A0",component:"Sensor SIG",note:"Moisture Level"},{pin:"D13",component:"Rain LED",note:"Visual Alert"}],esp32:[{pin:"GPIO 23",component:"Power Gate",note:"Digital Power Pin"},{pin:"GPIO 34",component:"Data Pin",note:"ADC"}]},code:`// Corrosion-Resistant Rain Sensor
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
5. Calculate distance: Distance = (Time * 0.0343) / 2.`,pin_config:{arduino:[{pin:"D9",component:"Trig Pin",note:"Output Pulse"},{pin:"D10",component:"Echo Pin",note:"Input timing"},{pin:"5V",component:"VCC",note:"-"}],esp32:[{pin:"GPIO 5",component:"Trig",note:"Digital Out"},{pin:"GPIO 18",component:"Echo",note:"Digital In"}]},code:`// Precision SONAR Script
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
5. Use the data to trigger refilling or overflow protection alerts.`,pin_config:{arduino:[{pin:"D2, D3, D4",component:"Level Probes",note:"Discrete Inputs"},{pin:"D8",component:"Buzzer",note:"Overflow Alarm"},{pin:"GND",component:"Tank Base Probe",note:"Common Path"}],esp32:[{pin:"GPIO 4,5,18",component:"Levels",note:"Digital In"},{pin:"GPIO 2",component:"Status LED",note:"HMI"}]},code:`// Multi-Tier Tank Monitor
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
}`,advantages:"End-to-end automation, prevents tank dry-running, high-power isolation.",disadvantages:"Requires careful plumbing to prevent leaks; relay maintenance needed for long-term use.",usage:"Use a 12V DC pump powered through the relay contacts for safety.",components:["1x Arduino","1x 5V Relay Module","1x 12V Water Pump","1x Level Sensor"],circuit_diagram:"Pin 7 -> Relay Signal | Relay NO -> Pump (+) | 12V Source -> Relay COM",status:"Published",industrial_use:"Automated hydroponic fertigation systems and smart home sump pump controllers.",bom_cost:"$28"}];export{e as p};
