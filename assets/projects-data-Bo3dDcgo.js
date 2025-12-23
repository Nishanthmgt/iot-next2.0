const t=e=>e.replace(/^\s{12}/gm,"").trim(),a=[{id:1,title:"LED Blink",level:"Beginner",estimatedTime:"15 mins",description:"The classic 'Hello World' of electronics. Learn how to control physical hardware using code by blinking an LED.",tech:["Arduino","LED"],category:"Basics",concept:"Digital Output Control",learning:["Setting up Arduino IDE","Digital pin configuration (OUTPUT mode)","Understanding digitalWrite()","Creating time delays with delay()","Basic C++ structure (setup & loop)"],workingPrinciple:"The microcontroller sends a HIGH (5V) or LOW (0V) signal to a specific GPIO pin. When HIGH, current flows through the LED, lighting it up. When LOW, current stops, turning it off.",circuit:"Connect the long leg (Anode) of the LED to Digital Pin 13 of the Arduino. Connect the short leg (Cathode) to the GND pin through a 220-ohm resistor to prevent burnout.",pins:[{from:"LED Anode (+)",to:"Digital Pin 13"},{from:"LED Cathode (-)",to:"GND (via Resistor)"}],code:t(`
            // Blink an LED
            const int ledPin = 13; // Built-in LED on most Arduinos

            void setup() {
              // Initialize the digital pin as an output
              pinMode(ledPin, OUTPUT);
            }

            void loop() {
              digitalWrite(ledPin, HIGH);  // Turn the LED ON (Voltage HIGH)
              delay(1000);                 // Wait for a second
              digitalWrite(ledPin, LOW);   // Turn the LED OFF (Voltage LOW)
              delay(1000);                 // Wait for a second
            }
        `),howToRun:`1. Connect your Arduino Uno to your PC using a USB cable.
2. Open the Arduino IDE and select your board and port.
3. Copy and paste the code above into a new sketch.
4. Click 'Upload' (right arrow icon).
5. Observe the LED on Pin 13 blinking.`,output:"The on-board LED (or external LED on Pin 13) will turn on for 1 second and then turn off for 1 second, repeating indefinitely.",extensions:["Change the delay values to make it blink faster/slower.","Add multiple LEDs and blink them in sequence.","Make an SOS signal using Morse code timings."],useCase:"System status indicators, visual debugging, heart-beat signals in embedded systems.",advantages:["Extremely simple to implement","No complex external parts needed","Instant visual feedback"],disadvantages:["Very basic utility","Only shows binary state (ON/OFF)"],parts:[{name:"Arduino Uno R3",buyLink:"https://robu.in/product/arduino-uno-r3/"},{name:"LED (Red/Green)",buyLink:"https://robu.in/product/5mm-red-led/"},{name:"220 Ohm Resistor",buyLink:"https://robu.in/product/220-ohm-resistor/"},{name:"Breadboard & Wires",buyLink:"https://robu.in/product/830-points-breadboard-and-jumper-wire-kit/"}],downloads:[{label:"Circuit Schematic (PDF)",link:"#"},{label:"Project eBook",link:"#"}]},{id:2,title:"Push Button LED",level:"Beginner",estimatedTime:"25 mins",description:"Learn how to read digital inputs from the real world. Control an LED manually using a tactile push button.",tech:["Arduino","Button","LED"],category:"Basics",concept:"Digital Input & Pull-up Resistors",learning:["Reading Digital States (LOW/HIGH)","Using INPUT_PULLUP mode","Conditional logic (if/else)","Circuit continuity basics","Introduction to 'Polling' technique"],workingPrinciple:"The button acts as a switch. When pressed, it completes the circuit and pulls the input pin to GND (LOW). When released, the internal pull-up resistor keeps the pin at 5V (HIGH). The code detects this state change and toggles the LED.",circuit:"Connect one terminal of the button to Pin 2 and the other to GND. Connect the LED to Pin 13 and GND. No external resistor is needed for the button if using INPUT_PULLUP.",pins:[{from:"Button Pin 1",to:"Digital Pin 2"},{from:"Button Pin 2",to:"GND"},{from:"LED (+)",to:"Digital Pin 13"}],code:t(`
            const int buttonPin = 2; // Pin connected to button
            const int ledPin = 13;    // Pin connected to LED

            void setup() {
              pinMode(ledPin, OUTPUT);
              // Use internal pull-up: Pin is HIGH when button is NOT pressed
              pinMode(buttonPin, INPUT_PULLUP); 
            }

            void loop() {
              int buttonState = digitalRead(buttonPin);
              
              // Button is LOW when pressed (connected to GND)
              if (buttonState == LOW) {
                digitalWrite(ledPin, HIGH); // Button pressed -> ON
              } else {
                digitalWrite(ledPin, LOW);  // Released -> OFF
              }
            }
        `),howToRun:`1. Build the circuit on a breadboard as described.
2. Upload the code to your Arduino.
3. Open the Serial Monitor (optional) to debug if needed.
4. Press the button and watch the LED respond.`,output:"The LED will stay ON as long as you keep the button pressed, and turn OFF immediately upon release.",extensions:["Create a toggle switch (press once for ON, again for OFF).","Add a second button to turn the LED OFF.","Implement a simple counter that blinks the LED X times based on button presses."],useCase:"User interfaces, keypads, limit switches in CNC machines, doorbells.",advantages:["Direct user interaction","Reliable input detection","Low power consumption"],disadvantages:["Suffer from 'Contact Bounce' (mechanical noise)"],parts:[{name:"Arduino Uno",buyLink:"https://robu.in/product/arduino-uno-r3/"},{name:"Tactile Push Button",buyLink:"https://robu.in/product/tactile-push-button-switch/"},{name:"LED",buyLink:"https://robu.in/product/5mm-red-led/"}],downloads:[{label:"Connection Diagram",link:"#"}]},{id:3,title:"Potentiometer Dimmer",level:"Beginner",estimatedTime:"20 mins",description:"Graduate from simple ON/OFF to variable control. Use a rotary knob to smoothly dim an LED's brightness.",tech:["Arduino","Potentiometer","PWM"],category:"Basics",concept:"Analog Input & Pulse Width Modulation (PWM)",learning:["Understanding Analog-to-Digital Conversion (ADC)","Reading variable voltage with analogRead()","The map() function for value conversion","Controlling intensity with analogWrite() (PWM)","Using 10-bit resolution (0-1023)"],workingPrinciple:"The potentiometer creates a voltage divider, sending 0V to 5V to the analog pin. Arduino converts this to a 0-1023 value. We map this value to 0-255 (PWM range) to control the LED brightness via rapidly toggling power.",circuit:"Potentiometer: Side pins to 5V and GND, center pin (wiper) to Analog A0. LED: Long leg to Pin 9 (must be a PWM pin, marked ~), short leg to GND via resistor.",pins:[{from:"Pot Center Pin",to:"Analog Pin A0"},{from:"Pot Side Pins",to:"5V and GND"},{from:"LED Anode",to:"Digital Pin 9 (PWM)"}],code:t(`
            int potPin = A0; // Potentiometer on A0
            int ledPin = 9;  // LED must be on a PWM pin like 3, 5, 6, 9, 10, 11

            void setup() {
              pinMode(ledPin, OUTPUT);
            }

            void loop() {
              // Read raw pot value (0 to 1023)
              int val = analogRead(potPin); 
              
              // Map 0-1023 to 0-255 (PWM duty cycle)
              int brightness = map(val, 0, 1023, 0, 255);
              
              // Output PWM signal to LED
              analogWrite(ledPin, brightness);
            }
        `),howToRun:`1. Connect the Potentiometer and LED as per the circuit instructions.
2. Ensure the LED is on Pin 9 (supports PWM).
3. Upload the code.
4. Rotate the knob to see the LED fade in and out.`,output:"The LED brightness should change smoothly as you turn the potentiometer knob from one end to the other.",extensions:["Control a DC motor's speed instead of an LED.","Change the LED color (using RGB LED) based on rotation.","Create a 'Sleep Mode' where the LED pulses automatically."],useCase:"Volume knobs, lamp dimmers, motor speed controllers, fan speed regulation.",advantages:["Intuitive analog control","Fine-grained resolution","No complex math needed"],disadvantages:["Analog noise can cause flicker","Potentiometers wear out over time"],parts:[{name:"10k Potentiometer",buyLink:"https://robu.in/product/10k-potentiometer/"},{name:"LED & Resistor",buyLink:"https://robu.in/product/leds/"}]},{id:4,title:"Traffic Light System",level:"Beginner",estimatedTime:"30 mins",description:"Simulate a real-world infrastructure system. Control three LEDs in a specific sequence to mimic a traffic intersection.",tech:["Arduino","LEDs"],category:"Basics",concept:"Sequential Execution & State Logic",learning:["Managing multiple outputs simultaneously","Implementing logical sequences","Timed execution patterns","Code organization for larger projects","Understanding 'Blocking' vs 'Non-blocking' code"],workingPrinciple:"The program executes a loop that turns specific pins HIGH and LOW in a fixed order (Red -> Green -> Yellow). Delays are used to hold each state for the required duration, simulating traffic flow timings.",circuit:"Connect Red LED to Pin 10, Yellow to Pin 11, and Green to Pin 12. Connect all short legs to a common GND rail on the breadboard through individual resistors.",pins:[{from:"Red LED",to:"Pin 10"},{from:"Yellow LED",to:"Pin 11"},{from:"Green LED",to:"Pin 12"},{from:"All Cathodes",to:"GND via Resistors"}],code:t(`
            // Pin definitions
            int red = 10;
            int yellow = 11;
            int green = 12;

            void setup() {
              pinMode(red, OUTPUT);
              pinMode(yellow, OUTPUT);
              pinMode(green, OUTPUT);
            }

            void loop() {
              // Stop State (Red)
              digitalWrite(red, HIGH);
              delay(5000); // 5 Seconds
              digitalWrite(red, LOW);
              
              // Proceed State (Green)
              digitalWrite(green, HIGH);
              delay(5000); // 5 Seconds
              digitalWrite(green, LOW);

              // Caution State (Yellow)
              digitalWrite(yellow, HIGH);
              delay(2000); // 2 Seconds
              digitalWrite(yellow, LOW);
            }
        `),howToRun:`1. Wire up the three LEDs carefully on the breadboard.
2. Map the pins correctly in the code.
3. Upload and watch the 'intersection' begin operating.`,output:"The LEDs will cycle through Red (5s), Green (5s), and Yellow (2s) continuously.",extensions:["Add a button for a 'Pedestrian Crosswalk' request.","Include a buzzer that beeps during the Yellow phase.","Use a 7-segment display to show a countdown timer for the Red light."],useCase:"Smart City simulation, Industrial state indicators, Sequential process controllers.",advantages:["Simulates real industrial logic","Great for learning basic sequencing"],disadvantages:["Using delay() blocks the CPU from doing anything else"],parts:[{name:"LEDs (R, Y, G Pack)",buyLink:"https://robu.in/product/leds/"}]},{id:5,title:"LDR Night Light",level:"Beginner",estimatedTime:"25 mins",description:"Create an autonomous smart device. This light sensor project automatically turns on an LED when the room gets dark.",tech:["Arduino","LDR","Sensor"],category:"Sensors",concept:"Ambient Light Sensing & Thresholding",learning:["Working with variable resistance (LDR)","Building a Voltage Divider circuit","Defining logical thresholds","Using Serial Monitor for debugging sensor data","Automation logic basics"],workingPrinciple:"An LDR (Light Dependent Resistor) changes resistance based on light intensity. In a voltage divider, this translates to variable voltage at Pin A0. The code reads this voltage and triggers the LED when it falls below a set dark-threshold.",circuit:"Connect one leg of LDR to 5V. Connect the other leg to A0 and also to GND through a 10k-ohm resistor. This forms a voltage divider. Connect LED to Pin 13.",pins:[{from:"LDR Side A",to:"5V"},{from:"LDR Side B / 10k Resistor",to:"Analog Pin A0"},{from:"10k Resistor Other Side",to:"GND"},{from:"LED (+)",to:"Pin 13"}],code:t(`
            int ldrPin = A0;   // LDR connected to A0
            int ledPin = 13;   // Active LED
            int threshold = 400; // Adjust based on your room lighting

            void setup() {
              pinMode(ledPin, OUTPUT);
              Serial.begin(9600); // Open monitoring
            }

            void loop() {
              int lightLevel = analogRead(ldrPin);
              Serial.print("Current Light: ");
              Serial.println(lightLevel);
              
              // If it's dark (low value), turn ON light
              if (lightLevel < threshold) {
                digitalWrite(ledPin, HIGH); 
              } else {
                digitalWrite(ledPin, LOW);  
              }
              delay(500); // Check every half second
            }
        `),howToRun:`1. Build the circuit and upload the code.
2. Open the Serial Monitor (Tools -> Serial Monitor).
3. Cover the LDR with your hand to simulate darkness.
4. The LED should turn ON instantly.`,output:"The LED will illuminate automatically whenever the ambient light drops below the threshold value.",extensions:["Use a potentiometer to adjust the light sensitivity (threshold) on the fly.","Add an LCD to display the exact light percentage.","Control a Relay to switch a real 220V light bulb (Caution: AC power!)."],useCase:"Smart street lights, garden lighting, solar charging switches, automatic screen brightness.",advantages:["Fully automatic","Energy efficient","Very low cost"],disadvantages:["Requires calibration for different environments"],parts:[{name:"LDR Sensor (Photoresistor)",buyLink:"https://robu.in/product/ldr-light-dependent-resistor/"},{name:"10k Resistor",buyLink:"https://robu.in/product/10k-resistor/"}]},{id:6,title:"Ultrasonic Distance Meter",level:"Beginner",description:"Measure distance using sound waves.",tech:["Arduino","HC-SR04"],category:"Sensors",concept:"Time of Flight",principle:"Distance = (Time x Speed)/2",pins:[{from:"Trig",to:"Pin 9"},{from:"Echo",to:"Pin 10"}],code:t(`
            #define TRIG 9
            #define ECHO 10

            void setup() {
              Serial.begin(9600);
              pinMode(TRIG, OUTPUT);
              pinMode(ECHO, INPUT);
            }

            void loop() {
              digitalWrite(TRIG, LOW);
              delayMicroseconds(2);
              digitalWrite(TRIG, HIGH);
              delayMicroseconds(10);
              digitalWrite(TRIG, LOW);

              long duration = pulseIn(ECHO, HIGH);
              int distance = duration * 0.034 / 2;

              Serial.print("Distance: ");
              Serial.print(distance);
              Serial.println(" cm");
              delay(500);
            }
        `),useCase:"Reverse Parking Sensors, Water Level Measurement.",advantages:["Non-contact","Reasonably accurate"],disadvantages:["Blind spots < 2cm"],parts:[{name:"HC-SR04 Module",buyLink:"https://robu.in/product/hc-sr04-ultrasonic-range-finder-sensor-module/"}]},{id:7,title:"PIR Motion Alarm",level:"Beginner",description:"Detects human motion to trigger an alarm.",tech:["Arduino","PIR"],category:"Security",concept:"Infrared Detection",principle:"Pyroelectricity",pins:[{from:"PIR Out",to:"Pin 2"},{from:"Buzzer",to:"Pin 8"}],code:t(`
            int pirPin = 2;
            int buzzerPin = 8;

            void setup() {
              pinMode(pirPin, INPUT);
              pinMode(buzzerPin, OUTPUT);
            }

            void loop() {
              if (digitalRead(pirPin) == HIGH) {
                // Motion Detected
                tone(buzzerPin, 1000);
                delay(1000);
              } else {
                noTone(buzzerPin);
              }
            }
        `),useCase:"Burglar Alarms, Automated Lighting.",advantages:["Wide field of view"],disadvantages:["False triggers from pets/heat"],parts:[{name:"HC-SR501 PIR",buyLink:"https://robu.in/product/hc-sr501-pir-motion-sensor-module-green/"}]},{id:8,title:"DHT11 Temp & Humidity",level:"Beginner",description:"Read ambient temperature and humidity.",tech:["Arduino","DHT11"],category:"Environmental",concept:"Digital Sensor Protocol",principle:"Capacitive Humidity Sensing",pins:[{from:"Data",to:"Pin 2"}],code:t(`
            #include <DHT.h>
            #define DATA_PIN 2
            #define TYPE DHT11

            DHT dht(DATA_PIN, TYPE);

            void setup() {
              Serial.begin(9600);
              dht.begin();
            }

            void loop() {
              float h = dht.readHumidity();
              float t = dht.readTemperature();
              
              Serial.print("Humidity: "); 
              Serial.print(h);
              Serial.print("%  Temp: "); 
              Serial.print(t);
              Serial.println("C");
              
              delay(2000); // Slow sensor
            }
        `),useCase:"Weather Stations, Greenhouse Monitoring.",advantages:["Digital output","Easy library"],disadvantages:["Slow response time"],parts:[{name:"DHT11 Sensor",buyLink:"https://robu.in/product/dht11-temperature-and-humidity-sensor-module/"}]},{id:9,title:"Gas Leakage Guard",level:"Intermediate",description:"Detects LPG or Smoke and sounds an alarm.",tech:["Arduino","MQ-2"],category:"Safety",concept:"Gas Concentration Sensing",principle:"Chemiresistor (SnO2)",pins:[{from:"MQ-2 A0",to:"A0"},{from:"Buzzer",to:"Pin 9"}],code:t(`
            int gasPin = A0;
            int buzzPin = 9;
            int threshold = 400;

            void setup() {
              pinMode(buzzPin, OUTPUT);
              Serial.begin(9600);
            }

            void loop() {
              int gasLevel = analogRead(gasPin);
              Serial.println(gasLevel);

              if (gasLevel > threshold) {
                digitalWrite(buzzPin, HIGH);
                delay(100);
                digitalWrite(buzzPin, LOW);
                delay(100);
              } else {
                digitalWrite(buzzPin, LOW);
              }
            }
        `),useCase:"Kitchen Safety, Industrial Leak detection.",advantages:["Life saving","Low cost"],disadvantages:["Sensor needs warmup"],parts:[{name:"MQ-2 Gas Sensor",buyLink:"https://robu.in/product/mq-2-gas-sensor-module/"}]},{id:10,title:"Soil Moisture Monitor",level:"Intermediate",description:"Check if plants need water.",tech:["Arduino","Soil Sensor"],category:"Agriculture",concept:"Resistive Sensing",principle:"Conductivity of wet soil",pins:[{from:"A0",to:"A0"}],code:t(`
            int sensorPin = A0;

            void setup() {
              Serial.begin(9600);
            }

            void loop() {
              int val = analogRead(sensorPin);
              // Value low = Wet, High = Dry (usually)
              
              if (val < 500) {
                Serial.println("Soil Wet");
              } else if (val < 800) {
                Serial.println("Soil Moist");
              } else {
                Serial.println("Soil Dry - Water Plant!");
              }
              delay(1000);
            }
        `),useCase:"Smart Irrigation, Garden Care.",advantages:["Prevents overwatering"],disadvantages:["Probe corrosion"],parts:[{name:"Soil Moisture Probe",buyLink:"https://robu.in/product/soil-moisture-sensor-module/"}]},{id:11,title:"OLED Hello World",level:"Intermediate",description:"Display text on a 0.96 inch I2C OLED Screen.",tech:["Arduino","OLED"],category:"Display",concept:"I2C Communication",principle:"Pixel Addressing",pins:[{from:"SDA",to:"A4"},{from:"SCL",to:"A5"}],code:t(`
            #include <Wire.h>
            #include <Adafruit_SSD1306.h>

            #define SCREEN_WIDTH 128
            #define SCREEN_HEIGHT 64
            Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

            void setup() {
              display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
              display.clearDisplay();
              display.setTextSize(2);
              display.setTextColor(WHITE);
              display.setCursor(0,0);
              display.println("Hello IoT");
              display.display();
            }

            void loop() {}
        `),useCase:"Wearables, Status screens.",advantages:["High contrast","Low power"],disadvantages:["Small size"],parts:[{name:"0.96 OLED Display",buyLink:"https://robu.in/product/0-96-inch-i2c-iic-oled-display-module-4-pin-white/"}]},{id:12,title:"LCD 16x2 Text Scroll",level:"Intermediate",description:"Scroll messaging on a classic LCD display.",tech:["Arduino","LCD"],category:"Display",concept:"Character Display Control",principle:"Hitachi HD44780 Controller",pins:[{from:"SDA",to:"A4"},{from:"SCL",to:"A5"}],code:t(`
            #include <LiquidCrystal_I2C.h>

            // Set address to 0x27
            LiquidCrystal_I2C lcd(0x27, 16, 2);

            void setup() {
              lcd.init();
              lcd.backlight();
              lcd.print("Welcome to IoT!");
            }

            void loop() {
              lcd.scrollDisplayLeft();
              delay(500);
            }
        `),useCase:"Vending machines, Ticket counters.",advantages:["Readable in sunlight"],disadvantages:["Limited characters"],parts:[{name:"16x2 I2C LCD",buyLink:"https://robu.in/product/iic-i2c-1602-blue-backlight-lcd-display-module/"}]},{id:13,title:"4x4 Keypad Lock",level:"Intermediate",description:"Enter a password to unlock a system.",tech:["Arduino","Keypad"],category:"Security",concept:"Matrix Scanning",principle:"Row/Column Scanning",pins:[{from:"Rows",to:"2,3,4,5"},{from:"Cols",to:"6,7,8,9"}],code:t(`
            #include <Keypad.h>

            const byte ROWS = 4;
            const byte COLS = 4;
            char keys[ROWS][COLS] = {
              {'1','2','3','A'},
              {'4','5','6','B'},
              {'7','8','9','C'},
              {'*','0','#','D'}
            };
            byte rowPins[ROWS] = {5, 4, 3, 2}; 
            byte colPins[COLS] = {9, 8, 7, 6}; 

            Keypad kp = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

            void setup() { Serial.begin(9600); }

            void loop() {
              char key = kp.getKey();
              if(key){
                Serial.print("Pressed: ");
                Serial.println(key);
              }
            }
        `),useCase:"Safe locks, ATMs.",advantages:["Secure input"],disadvantages:["Occupies many pins"],parts:[{name:"4x4 Membrane Keypad",buyLink:"https://robu.in/product/4x4-matrix-keypad-membrane-switch/"}]},{id:14,title:"Servo JoyStick Control",level:"Intermediate",description:"Control robot arm position with a joystick.",tech:["Arduino","Servo","Joystick"],category:"Robotics",concept:"Coordinate Mapping",principle:"Analog to Angular Position",pins:[{from:"Joy X",to:"A0"},{from:"Servo",to:"Pin 9"}],code:t(`
            #include <Servo.h>
            Servo s;
            int joyPin = A0;

            void setup() {
              s.attach(9);
            }

            void loop() {
              int val = analogRead(joyPin);
              // Map 0-1023 to 0-180
              int angle = map(val, 0, 1023, 0, 180);
              s.write(angle);
              delay(15);
            }
        `),useCase:"Drone controllers, Excavator simulators.",advantages:["Intuitive control"],disadvantages:["Mechanical wear"],parts:[{name:"Joystick Module",buyLink:"https://robu.in/product/analog-joystick-module/"}]},{id:21,title:"Bluetooth Home Automation",level:"Advanced",description:"Control lights from your phone via Bluetooth.",tech:["Arduino","HC-05"],category:"IoT",concept:"Wireless Serial",principle:"RF Communication (2.4GHz)",pins:[{from:"HC-05 RX",to:"Pin 11 (TX)"},{from:"HC-05 TX",to:"Pin 10 (RX)"}],code:t(`
            #include <SoftwareSerial.h>
            SoftwareSerial BT(10, 11); // RX, TX
            int led = 13;

            void setup() {
              BT.begin(9600);
              pinMode(led, OUTPUT);
            }

            void loop() {
              if (BT.available()) {
                char c = BT.read();
                if (c == '1') digitalWrite(led, HIGH);
                if (c == '0') digitalWrite(led, LOW);
              }
            }
        `),useCase:"Smart Bulbs, Remote Switches.",advantages:["No Internet needed","Fast"],disadvantages:["Short range (10m)"],parts:[{name:"HC-05 Bluetooth",buyLink:"https://robu.in/product/hc-05-bluetooth-module-rs232-ttl-module/"}]},{id:22,title:"ESP32 WiFi Web Server",level:"Advanced",description:"Host a webpage on ESP32 to toggle LEDs.",tech:["ESP32","WiFi"],category:"IoT",concept:"HTTP Server",principle:"TCP/IP Networking",pins:[{from:"Built-in LED",to:"GPIO 2"}],code:t(`
            #include <WiFi.h>
            #include <WebServer.h>

            const char* ssid = "MyWiFi";
            const char* password = "password";
            WebServer server(80);
            const int ledPin = 2; // Onboard LED

            void handleRoot() {
              String html = "<h1>IoTnext Control</h1>";
              html += "<p><a href='/on'><button>Turn ON</button></a></p>";
              html += "<p><a href='/off'><button>Turn OFF</button></a></p>";
              server.send(200, "text/html", html);
            }

            void handleLedOn() {
              digitalWrite(ledPin, HIGH);
              server.send(200, "text/plain", "LED IS ON");
            }

            void handleLedOff() {
              digitalWrite(ledPin, LOW);
              server.send(200, "text/plain", "LED IS OFF");
            }

            void setup() {
              pinMode(ledPin, OUTPUT);
              WiFi.begin(ssid, password);
              while (WiFi.status() != WL_CONNECTED) delay(500);
              server.on("/", handleRoot);
              server.on("/on", handleLedOn);
              server.on("/off", handleLedOff);
              server.begin();
            }

            void loop() {
              server.handleClient();
            }
        `),useCase:"Smart Plugs, Router Config Pages.",advantages:["Global access potential","Standard browser UI"],disadvantages:["Security risks"],parts:[{name:"ESP32 Dev Board",buyLink:"https://robu.in/product/esp32-development-board-wifi-bluetooth/"}]},{id:23,title:"RFID Door Lock",level:"Advanced",description:"Tap a card to open a servo lock.",tech:["Arduino","RFID"],category:"Security",concept:"NFC/RFID",principle:"Electromagnetic Induction",pins:[{from:"SDA",to:"Pin 10"},{from:"SCK",to:"Pin 13"},{from:"MOSI",to:"Pin 11"},{from:"MISO",to:"Pin 12"}],code:t(`
            #include <SPI.h>
            #include <MFRC522.h>

            #define SS_PIN 10
            #define RST_PIN 9
            MFRC522 rfid(SS_PIN, RST_PIN);

            void setup() {
              Serial.begin(9600);
              SPI.begin();
              rfid.PCD_Init();
            }

            void loop() {
              if (!rfid.PICC_IsNewCardPresent()) return;
              if (!rfid.PICC_ReadCardSerial()) return;

              Serial.print("UID:");
              for (byte i = 0; i < rfid.uid.size; i++) {
                Serial.print(rfid.uid.uidByte[i], HEX);
              }
              Serial.println();
              delay(1000);
            }
        `),useCase:"Office Access, Hotel Keys.",advantages:["Contactless","Secure"],disadvantages:["Card can be cloned"],parts:[{name:"RC522 RFID Module",buyLink:"https://robu.in/product/rfid-rc522-reader/"}]},{id:41,title:"Relay Light Control",level:"Intermediate",description:"Control AC bulbs using DC signals.",tech:["Arduino","Relay"],category:"Smart Home",concept:"Isolation & Switching",principle:"Electromagnetism",pins:[{from:"Relay IN",to:"Pin 7"}],code:t(`
            int relay = 7;

            void setup() {
              pinMode(relay, OUTPUT);
            }

            void loop() {
              digitalWrite(relay, HIGH); // Switch ON
              delay(2000);
              digitalWrite(relay, LOW);  // Switch OFF
              delay(2000);
            }
        `),useCase:"Home automation, Industrial control.",advantages:["Controls High Voltage"],disadvantages:["Mechanical wear"],parts:[{name:"1-Channel 5V Relay",buyLink:"https://robu.in/product/1-channel-5v-relay-module-with-optocoupler/"}]},{id:42,title:"Smart Thermostat",level:"Advanced",description:"Maintain temperature by switching heating/cooling.",tech:["Arduino","Relay","DHT11"],category:"Smart Home",concept:"Feedback Loop",principle:"Hysteresis Control",pins:[{from:"Sensor",to:"Pin 2"},{from:"Relay",to:"Pin 7"}],code:t(`
            #include <DHT.h>
            #define DHTPIN 2
            #define RELAY_PIN 7
            DHT dht(DHTPIN, DHT11);
            
            int setPoint = 24;
            
            void setup() { 
              pinMode(RELAY_PIN, OUTPUT); 
              dht.begin();
            }
            
            void loop() {
               float currentTemp = dht.readTemperature();
               if (isnan(currentTemp)) return; // Error reading

               if(currentTemp < (setPoint - 1)) {
                 digitalWrite(RELAY_PIN, HIGH); // Heat ON
               } else if (currentTemp > (setPoint + 1)) {
                 digitalWrite(RELAY_PIN, LOW);  // Heat OFF
               }
               delay(2000);
            }
        `),useCase:"HVAC systems, Incubators.",advantages:["Automated comfort"],disadvantages:["Complex tuning"],parts:[{name:"Relay Module",buyLink:"https://robu.in/"},{name:"DHT11",buyLink:"https://robu.in/"}]}],s=[{t:"Obstacle Avoiding Robot",c:"Robotics",p:"Ultrasonic + Motors"},{t:"Line Follower Robot",c:"Robotics",p:"IR Arrays"},{t:"Bluetooth Robot Car",c:"Robotics",p:"HC-05 + L298N"},{t:"WiFi Weather Station",c:"IoT",p:"ESP8266 + DHT + BMP"},{t:"Smart Dustbin",c:"Automation",p:"Ultrasonic + Servo"},{t:"Automatic Sanitizer",c:"Automation",p:"IR + Pump"},{t:"Gesture Control",c:"Sensing",p:"APDS9960"},{t:"Color Sorter",c:"Industrial",p:"TCS3200 + Servo"},{t:"Heart Rate Logger",c:"Healthcare",p:"Pulse Sensor + SD Card"},{t:"Smart Parking System",c:"City",p:"IR Sensors + LCD"},{t:"Solar Tracker",c:"Energy",p:"LDRs + Servo"},{t:"Battery Capacity Tester",c:"Energy",p:"Load Resistor"},{t:"Digital Voltmeter",c:"Tools",p:"Voltage Divider"},{t:"Oscilloscope",c:"Tools",p:"OLED + ADC"},{t:"Lie Detector",c:"Fun",p:"GSR Sensor"},{t:"Laser Tripwire",c:"Security",p:"Laser + LDR"},{t:"RFID Attendance System",c:"IoT",p:"RC522 + Excel"},{t:"IoT Smart Garden",c:"IoT",p:"Soil Sensor + ESP32"},{t:"Voice Controlled Light",c:"AI",p:"Voice Module"},{t:"Face Recognition Cam",c:"AI",p:"ESP32-CAM"},{t:"Alcohol Breathalyzer",c:"Safety",p:"MQ-3"},{t:"Earthquake Detector",c:"Safety",p:"Accelerometer"},{t:"Water Quality Meter",c:"Env",p:"TDS Sensor"},{t:"Noise Pollution Meter",c:"Env",p:"Mic + LCD"},{t:"UV Index Monitor",c:"Env",p:"UV Sensor"},{t:"Smart Home Securityv Camera",c:"Security",p:"ESP32-CAM"},{t:"IoT Asset Tracker",c:"Logistics",p:"GPS + GSM"},{t:"Smart Energy Meter",c:"Energy",p:"PZEM-004T"},{t:"Patient Health Monitor",c:"Healthcare",p:"ECG + ESP32"},{t:"Industrial Modbus Bridge",c:"Industrial",p:"RS485 + Ethernet"},{t:"Smart Street Light",c:"City",p:"LDR + LoRa"},{t:"Flood Early Warning",c:"Safety",p:"Ultrasonic + GSM"},{t:"Greenhouse Automation",c:"Agriculture",p:"Sensors + App"},{t:"IoT Weather Balloon",c:"Science",p:"Sensors + Radio"},{t:"Smart Locker System",c:"Security",p:"Solenoid + App"},{t:"Air Quality Network",c:"Env",p:"MQ-135 + ESP-NOW"}],n={Robotics:{concept:"Motor Control & PWM",principle:"Pulse Width Modulation (PWM)",pins:[{from:"Motor A",to:"Pins 5,6"},{from:"Motor B",to:"Pins 9,10"}],code:e=>`
        #include <AFMotor.h> // Common Motor Shield library
        AF_DCMotor motor1(1);
        AF_DCMotor motor2(2);

        void setup() {
          Serial.begin(9600);
          motor1.setSpeed(200);
          motor2.setSpeed(200);
        }

        void loop() {
          // Logic for ${e}
          motor1.run(FORWARD);
          motor2.run(FORWARD);
          delay(1000);
          motor1.run(RELEASE);
          motor2.run(RELEASE);
          delay(500);
        }
    `},IoT:{concept:"Cloud Connectivity",principle:"MQTT / HTTP Protocols",pins:[{from:"VCC",to:"3.3V"},{from:"Sensor",to:"GPIO 2"}],code:e=>`
        #include <WiFi.h>
        #include <HTTPClient.h>

        const char* ssid = "WiFi_SSID";
        const char* password = "Password";

        void setup() {
          Serial.begin(115200);
          WiFi.begin(ssid, password);
        }

        void loop() {
          if (WiFi.status() == WL_CONNECTED) {
            HTTPClient http;
            http.begin("http://api.iotnext.com/update?data=sensor_val");
            int httpCode = http.GET();
            http.end();
          }
          delay(10000); // Send every 10s
        }
    `},Security:{concept:"Access Control",principle:"Authentication & Encryption",pins:[{from:"SDA",to:"Pin 10"},{from:"SCK",to:"Pin 13"}],code:e=>`
        #include <SPI.h>
        #include <MFRC522.h>

        MFRC522 rfid(10, 9); // SS, RST

        void setup() {
          SPI.begin();
          rfid.PCD_Init();
        }

        void loop() {
          if (!rfid.PICC_IsNewCardPresent()) return;
          if (!rfid.PICC_ReadCardSerial()) return;
          // Verify ID for ${e}
          Serial.print("Accessing ${e}...");
          delay(2000);
        }
    `},Environmental:{concept:"Data Acquisition",principle:"Transduction",pins:[{from:"VCC",to:"5V"},{from:"Analog Out",to:"A0"}],code:e=>`
        void setup() {
          Serial.begin(9600);
        }

        void loop() {
          int sensorValue = analogRead(A0);
          float voltage = sensorValue * (5.0 / 1023.0);
          Serial.print("Data for ${e}: ");
          Serial.println(voltage);
          delay(1000);
        }
    `},Automation:{concept:"Actuation & Control",principle:"Electromechanical Switching",pins:[{from:"Relay Pin",to:"Pin 7"},{from:"Status LED",to:"Pin 13"}],code:e=>`
        const int relayPin = 7;
        void setup() {
          pinMode(relayPin, OUTPUT);
          Serial.begin(9600);
        }
        void loop() {
          Serial.println("Activating ${e}...");
          digitalWrite(relayPin, HIGH); 
          delay(5000);
          digitalWrite(relayPin, LOW);
          delay(5000);
        }
    `},AI:{concept:"Edge Intelligence",principle:"Computer Vision / ML",pins:[{from:"Camera Data",to:"Internal (ESP32-CAM)"}],code:e=>`
        #include "esp_camera.h"
        #include <WiFi.h>

        void setup() {
          Serial.begin(115200);
          // Initialize Camera for ${e}
          if(psramFound()){
            Serial.println("Camera OK");
          }
        }
        void loop() {
          // Frame capture and inference for ${e}
          camera_fb_t * fb = esp_camera_fb_get();
          if(!fb) return;
          esp_camera_fb_return(fb);
          delay(1000);
        }
    `}},l=s.map((e,r)=>{let i=e.c;i==="Env"&&(i="Environmental"),(i==="Sensing"||i==="Agriculture")&&(i="Environmental"),(i==="Smart Home"||i==="City"||i==="Industrial")&&(i="Automation");const o=n[i]||n.Environmental;return{id:50+r,title:e.t,level:"Intermediate",description:`Professional hardware implementation for ${e.t}. Focuses on ${e.p} architectures and scalable code.`,tech:["Arduino",...e.p.split(" + ")],category:e.c,concept:o.concept,principle:o.principle,pins:o.pins,code:t(o.code(e.t)),useCase:`Critical for ${e.c.toLowerCase()} systems and smart infrastructure.`,advantages:["Proven reliability","Modular design"],disadvantages:["Requires specific hardware calibration"],parts:[{name:e.p,buyLink:"https://robu.in"}]}}),d=[...a,...l],c=d,u=[{title:"Voltage, Current & Resistance",content:"The holy trinity of electronics (Ohm's Law). Voltage is the pressure pushing electrons, Current is the flow of electrons, and Resistance is the opposition to that flow. Understanding V=IR is crucial for not burning components.",deepDive:"High current needs thick wires. High voltage needs insulation.",mistakes:"Shorting Power to Ground (Infinite Current = Fire).",tip:"Always check polarity before powering up."},{title:"Microcontrollers (The Brain)",content:"A small computer on a single chip. It reads inputs (sensors), processes data based on your code, and controls outputs (lights, motors). Common examples: Arduino Uno, ESP32, STM32.",deepDive:"They run firmware (C/C++), not a full OS like Windows.",mistakes:"Drawing too much current from a GPIO pin (>20mA).",tip:"Use transistors/MOSFETs to drive high-power loads."},{title:"Digital vs Analog Signals",content:"Digital signals are binary (ON/OFF, 0V/5V), like a light switch. Analog signals are continuous (0V to 5V), like a dimmer knob. Microcontrollers live in a digital world but use ADCs (Analog-to-Digital Converters) to understand analog.",deepDive:"ADC Resolution (10-bit = 0-1023 values) determines precision.",mistakes:"Connecting 5V analog sensors to 3.3V ADC pins.",tip:"PWM (Pulse Width Modulation) fakes analog output using digital pulses."},{title:"Sensors (Inputs)",content:"Devices that convert physical world data (temp, light, motion) into electrical signals. They are the 'eyes and ears' of your IoT system. They can be active (require power) or passive (like LDRs).",deepDive:"Calibration is often needed for accurate real-world readings.",mistakes:"Ignoring sensor warm-up time (e.g., Gas sensors).",tip:"Check datasheets for response time and accuracy."},{title:"Actuators (Outputs)",content:"Devices that perform actions: moving motors, lighting LEDs, buzzing alarms. They convert electrical energy back into physical movement or light.",deepDive:"Inductive loads (motors/relays) generate voltage spikes when turned off.",mistakes:"Forgetting flyback diodes on motors/relays.",tip:"Isolate high-power actuators from sensitive MCUs."},{title:"Pull-up & Pull-down Resistors",content:"Resistors used to ensure a known state (HIGH or LOW) for a signal line when no other input is active. Without them, 'floating' pins pick up static noise and trigger randomly.",deepDive:"Internal pull-ups (INPUT_PULLUP) save wiring.",mistakes:"Leaving a button pin floating (unpredictable behavior).",tip:"10kΩ is the standard value for pull-up/down resistors."},{title:"UART (Serial Communication)",content:"Universal Asynchronous Receiver-Transmitter. The most common way for chips to talk. Uses two wires: TX (Transmit) and RX (Receive). Crucial for debugging via Serial Monitor.",deepDive:"Baud rate (e.g., 9600) must match on both sides.",mistakes:"Connecting TX to TX instead of TX to RX.",tip:"Grounds must be connected between communicating devices."},{title:"I2C Protocol",content:"Inter-Integrated Circuit. A bus protocol that allows multiple 'slave' devices (sensors, screens) to talk to a 'master' (Arduino) using just two wires: SDA (Data) and SCL (Clock).",deepDive:"Each device has a unique Hex address (e.g., 0x27).",mistakes:"Missing pull-up resistors on SDA/SCL lines.",tip:"Use an I2C Scanner sketch to find device addresses."},{title:"SPI Protocol",content:"Serial Peripheral Interface. Faster than I2C, used for SD cards and displays. Uses 4 wires: MOSI (Master Out), MISO (Master In), SCK (Clock), and CS (Chip Select).",deepDive:"Full-duplex: can send and receive simultaneously.",mistakes:"Confusing MOSI/MISO connections.",tip:"Cable length matters; SPI degrades over long wires."},{title:"Power Scaling (3.3V vs 5V)",content:"Different chips run on different logic levels. Arduino is typically 5V, while modern chips like ESP32/ESP8266 are 3.3V. Mixing them without level shifters is dangerous.",deepDive:"Voltage Dividers can shift 5V signal down to 3.3V.",mistakes:"Connecting 5V logic to a 3.3V input pin (Boom).",tip:"Logic Level Converters are cheap insurance."}];export{c as a,u as b};
