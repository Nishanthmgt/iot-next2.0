// IoTnext - 55+ Premium, High-Fidelity Projects

// Helper for formatted code
const cleanCode = (str) => str.replace(/^\s{12}/gm, '').trim();

const baseProjects = [
  // --- BASICS (1-10) ---
  {
    id: 1, title: "LED Blink", level: "Beginner",
    description: "The classic 'Hello World' of electronics. Blinks an internal LED.",
    tech: ["Arduino", "LED"], category: "Basics",
    concept: "Digital Output",
    principle: "Toggling Voltage Levels (0V/5V)",
    pins: [{ from: "Built-in LED", to: "Pin 13" }],
    code: cleanCode(`
            // Blink an LED
            const int ledPin = 13;

            void setup() {
              pinMode(ledPin, OUTPUT);
            }

            void loop() {
              digitalWrite(ledPin, HIGH);  // Turn ON
              delay(1000);                 // Wait 1 sec
              digitalWrite(ledPin, LOW);   // Turn OFF
              delay(1000);                 // Wait 1 sec
            }
        `),
    useCase: "System status indicators (Power, WiFi connection).",
    advantages: ["Visual feedback", "Debugging aid"],
    disadvantages: ["Basic utility"],
    parts: [{ name: "Arduino Uno", buyLink: "https://robu.in/product/arduino-uno-r3/" }]
  },
  {
    id: 2, title: "Push Button LED", level: "Beginner",
    description: "Turn an LED on only when a button is pressed.",
    tech: ["Arduino", "Button"], category: "Basics",
    concept: "Digital Input",
    principle: "Reading circuit continuity",
    pins: [{ from: "Button", to: "Pin 2" }, { from: "LED", to: "Pin 13" }],
    code: cleanCode(`
            const int buttonPin = 2;
            const int ledPin = 13;

            void setup() {
              pinMode(ledPin, OUTPUT);
              pinMode(buttonPin, INPUT_PULLUP); // Use internal pull-up
            }

            void loop() {
              int buttonState = digitalRead(buttonPin);
              // Button is LOW when pressed (due to pull-up)
              if (buttonState == LOW) {
                digitalWrite(ledPin, HIGH);
              } else {
                digitalWrite(ledPin, LOW);
              }
            }
        `),
    useCase: "Doorbells, Keyboards, Industrial Start Switches.",
    advantages: ["Interactivity", "Simple logic"],
    disadvantages: ["Switch bouncing"],
    parts: [{ name: "Push Button", buyLink: "https://robu.in/product/tactile-push-button-switch/" }]
  },
  {
    id: 3, title: "Potentiometer Dimmer", level: "Beginner",
    description: "Control LED brightness using a potentiometer knob.",
    tech: ["Arduino", "Potentiometer"], category: "Basics",
    concept: "Analog Input & PWM",
    principle: "Pulse Width Modulation",
    pins: [{ from: "Pot Center", to: "A0" }, { from: "LED", to: "Pin 9 (PWM)" }],
    code: cleanCode(`
            int potPin = A0;
            int ledPin = 9; // Must be PWM pin

            void setup() {
              pinMode(ledPin, OUTPUT);
            }

            void loop() {
              int val = analogRead(potPin); // 0-1023
              int brightness = map(val, 0, 1023, 0, 255);
              analogWrite(ledPin, brightness);
            }
        `),
    useCase: "Light dimmers, Volume knobs, Motor speed control.",
    advantages: ["Smooth control", "Analog interface"],
    disadvantages: ["Energy loss as heat (in linear circuits)"],
    parts: [{ name: "10k Potentiometer", buyLink: "https://robu.in/product/10k-potentiometer/" }]
  },
  {
    id: 4, title: "Traffic Light System", level: "Beginner",
    description: "Simulate a traffic intersection with Red, Yellow, Green LEDs.",
    tech: ["Arduino", "LEDs"], category: "Basics",
    concept: "Sequential Logic",
    principle: "Finite State Machine",
    pins: [{ from: "Red", to: "Pin 10" }, { from: "Yellow", to: "Pin 11" }, { from: "Green", to: "Pin 12" }],
    code: cleanCode(`
            int red = 10;
            int yellow = 11;
            int green = 12;

            void setup() {
              pinMode(red, OUTPUT);
              pinMode(yellow, OUTPUT);
              pinMode(green, OUTPUT);
            }

            void loop() {
              digitalWrite(red, HIGH);
              delay(5000);
              digitalWrite(red, LOW);
              
              digitalWrite(yellow, HIGH);
              delay(2000);
              digitalWrite(yellow, LOW);

              digitalWrite(green, HIGH);
              delay(5000);
              digitalWrite(green, LOW);
            }
        `),
    useCase: "Traffic Control, Production Line Sequence.",
    advantages: ["Visual logic demonstration"],
    disadvantages: ["Blocking code (delays)"],
    parts: [{ name: "LEDs (R/Y/G)", buyLink: "https://robu.in/product/leds/" }]
  },
  {
    id: 5, title: "LDR Night Light", level: "Beginner",
    description: "Automatically turns on light when it gets dark.",
    tech: ["Arduino", "LDR"], category: "Sensors",
    concept: "Light Sensing",
    principle: "Photo-resistivity",
    pins: [{ from: "LDR Divider", to: "A0" }, { from: "LED", to: "Pin 13" }],
    code: cleanCode(`
            int ldrPin = A0;
            int ledPin = 13;
            int threshold = 500;

            void setup() {
              pinMode(ledPin, OUTPUT);
              Serial.begin(9600);
            }

            void loop() {
              int lightLevel = analogRead(ldrPin);
              Serial.println(lightLevel);
              
              if (lightLevel < threshold) {
                digitalWrite(ledPin, HIGH); // Dark -> ON
              } else {
                digitalWrite(ledPin, LOW);  // Light -> OFF
              }
              delay(500);
            }
        `),
    useCase: "Street lights, Automatic Garden Lights.",
    advantages: ["Energy efficient"],
    disadvantages: ["Needs calibration"],
    parts: [{ name: "LDR Sensor", buyLink: "https://robu.in/product/ldr-light-dependent-resistor/" }]
  },

  // --- SENSORS & ALARMS (6-20) ---
  {
    id: 6, title: "Ultrasonic Distance Meter", level: "Beginner",
    description: "Measure distance using sound waves.",
    tech: ["Arduino", "HC-SR04"], category: "Sensors",
    concept: "Time of Flight",
    principle: "Distance = (Time x Speed)/2",
    pins: [{ from: "Trig", to: "Pin 9" }, { from: "Echo", to: "Pin 10" }],
    code: cleanCode(`
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
        `),
    useCase: "Reverse Parking Sensors, Water Level Measurement.",
    advantages: ["Non-contact", "Reasonably accurate"],
    disadvantages: ["Blind spots < 2cm"],
    parts: [{ name: "HC-SR04 Module", buyLink: "https://robu.in/product/hc-sr04-ultrasonic-range-finder-sensor-module/" }]
  },
  {
    id: 7, title: "PIR Motion Alarm", level: "Beginner",
    description: "Detects human motion to trigger an alarm.",
    tech: ["Arduino", "PIR"], category: "Security",
    concept: "Infrared Detection",
    principle: "Pyroelectricity",
    pins: [{ from: "PIR Out", to: "Pin 2" }, { from: "Buzzer", to: "Pin 8" }],
    code: cleanCode(`
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
        `),
    useCase: "Burglar Alarms, Automated Lighting.",
    advantages: ["Wide field of view"],
    disadvantages: ["False triggers from pets/heat"],
    parts: [{ name: "HC-SR501 PIR", buyLink: "https://robu.in/product/hc-sr501-pir-motion-sensor-module-green/" }]
  },
  {
    id: 8, title: "DHT11 Temp & Humidity", level: "Beginner",
    description: "Read ambient temperature and humidity.",
    tech: ["Arduino", "DHT11"], category: "Environmental",
    concept: "Digital Sensor Protocol",
    principle: "Capacitive Humidity Sensing",
    pins: [{ from: "Data", to: "Pin 2" }],
    code: cleanCode(`
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
        `),
    useCase: "Weather Stations, Greenhouse Monitoring.",
    advantages: ["Digital output", "Easy library"],
    disadvantages: ["Slow response time"],
    parts: [{ name: "DHT11 Sensor", buyLink: "https://robu.in/product/dht11-temperature-and-humidity-sensor-module/" }]
  },
  {
    id: 9, title: "Gas Leakage Guard", level: "Intermediate",
    description: "Detects LPG or Smoke and sounds an alarm.",
    tech: ["Arduino", "MQ-2"], category: "Safety",
    concept: "Gas Concentration Sensing",
    principle: "Chemiresistor (SnO2)",
    pins: [{ from: "MQ-2 A0", to: "A0" }, { from: "Buzzer", to: "Pin 9" }],
    code: cleanCode(`
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
        `),
    useCase: "Kitchen Safety, Industrial Leak detection.",
    advantages: ["Life saving", "Low cost"],
    disadvantages: ["Sensor needs warmup"],
    parts: [{ name: "MQ-2 Gas Sensor", buyLink: "https://robu.in/product/mq-2-gas-sensor-module/" }]
  },
  {
    id: 10, title: "Soil Moisture Monitor", level: "Intermediate",
    description: "Check if plants need water.",
    tech: ["Arduino", "Soil Sensor"], category: "Agriculture",
    concept: "Resistive Sensing",
    principle: "Conductivity of wet soil",
    pins: [{ from: "A0", to: "A0" }],
    code: cleanCode(`
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
                // Make sure to water your plants!
              }
              delay(1000);
            }
        `),
    useCase: "Smart Irrigation, Garden Care.",
    advantages: ["Prevents overwatering"],
    disadvantages: ["Probe corrosion"],
    parts: [{ name: "Soil Moisture Probe", buyLink: "https://robu.in/product/soil-moisture-sensor-module/" }]
  },

  // --- DISPLAYS & INTERFACES (11-20) ---
  {
    id: 11, title: "OLED Hello World", level: "Intermediate",
    description: "Display text on a 0.96 inch I2C OLED Screen.",
    tech: ["Arduino", "OLED"], category: "Display",
    concept: "I2C Communication",
    principle: "Pixel Addressing",
    pins: [{ from: "SDA", to: "A4" }, { from: "SCL", to: "A5" }],
    code: cleanCode(`
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
        `),
    useCase: "Wearables, Status screens.",
    advantages: ["High contrast", "Low power"],
    disadvantages: ["Small size"],
    parts: [{ name: "0.96 OLED Display", buyLink: "https://robu.in/product/0-96-inch-i2c-iic-oled-display-module-4-pin-white/" }]
  },
  {
    id: 12, title: "LCD 16x2 Text Scroll", level: "Intermediate",
    description: "Scroll messaging on a classic LCD display.",
    tech: ["Arduino", "LCD"], category: "Display",
    concept: "Character Display Control",
    principle: "Hitachi HD44780 Controller",
    pins: [{ from: "SDA", to: "A4" }, { from: "SCL", to: "A5" }],
    code: cleanCode(`
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
        `),
    useCase: "Vending machines, Ticket counters.",
    advantages: ["Readable in sunlight"],
    disadvantages: ["Limited characters"],
    parts: [{ name: "16x2 I2C LCD", buyLink: "https://robu.in/product/iic-i2c-1602-blue-backlight-lcd-display-module/" }]
  },
  {
    id: 13, title: "4x4 Keypad Lock", level: "Intermediate",
    description: "Enter a password to unlock a system.",
    tech: ["Arduino", "Keypad"], category: "Security",
    concept: "Matrix Scanning",
    principle: "Row/Column Scanning",
    pins: [{ from: "Rows", to: "2,3,4,5" }, { from: "Cols", to: "6,7,8,9" }],
    code: cleanCode(`
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
        `),
    useCase: "Safe locks, ATMs.",
    advantages: ["Secure input"],
    disadvantages: ["Occupies many pins"],
    parts: [{ name: "4x4 Membrane Keypad", buyLink: "https://robu.in/product/4x4-matrix-keypad-membrane-switch/" }]
  },
  {
    id: 14, title: "Servo JoyStick Control", level: "Intermediate",
    description: "Control robot arm position with a joystick.",
    tech: ["Arduino", "Servo", "Joystick"], category: "Robotics",
    concept: "Coordinate Mapping",
    principle: "Analog to Angular Position",
    pins: [{ from: "Joy X", to: "A0" }, { from: "Servo", to: "Pin 9" }],
    code: cleanCode(`
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
        `),
    useCase: "Drone controllers, Excavator simulators.",
    advantages: ["Intuitive control"],
    disadvantages: ["Mechanical wear"],
    parts: [{ name: "Joystick Module", buyLink: "https://robu.in/product/analog-joystick-module/" }]
  },

  

  // --- CONNECTIVITY & IOT (21-40) ---
  {
    id: 15, title: "Bluetooth Home Automation", level: "Advanced",
    description: "Control lights from your phone via Bluetooth.",
    tech: ["Arduino", "HC-05"], category: "IoT",
    concept: "Wireless Serial",
    principle: "RF Communication (2.4GHz)",
    pins: [{ from: "HC-05 RX", to: "Pin 11 (TX)" }, { from: "HC-05 TX", to: "Pin 10 (RX)" }],
    code: cleanCode(`
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
        `),
    useCase: "Smart Bulbs, Remote Switches.",
    advantages: ["No Internet needed", "Fast"],
    disadvantages: ["Short range (10m)"],
    parts: [{ name: "HC-05 Bluetooth", buyLink: "https://robu.in/product/hc-05-bluetooth-module-rs232-ttl-module/" }]
  },
  {
    id: 16, title: "ESP32 WiFi Web Server", level: "Advanced",
    description: "Host a webpage on ESP32 to toggle LEDs.",
    tech: ["ESP32", "WiFi"], category: "IoT",
    concept: "HTTP Server",
    principle: "TCP/IP Networking",
    pins: [{ from: "Built-in LED", to: "GPIO 2" }],
    code: cleanCode(`
            #include <WiFi.h>
            #include <WebServer.h>

            const char* ssid = "MyWiFi";
            const char* password = "password";
            WebServer server(80);

            void handleRoot() {
              server.send(200, "text/plain", "Hello from ESP32!");
            }

            void setup() {
              WiFi.begin(ssid, password);
              while (WiFi.status() != WL_CONNECTED) delay(500);
              server.on("/", handleRoot);
              server.begin();
            }

            void loop() {
              server.handleClient();
            }
        `),
    useCase: "Smart Plugs, Router Config Pages.",
    advantages: ["Global access potential", "Standard browser UI"],
    disadvantages: ["Security risks"],
    parts: [{ name: "ESP32 Dev Board", buyLink: "https://robu.in/product/esp32-development-board-wifi-bluetooth/" }]
  },
  {
    id: 17, title: "RFID Door Lock", level: "Advanced",
    description: "Tap a card to open a servo lock.",
    tech: ["Arduino", "RFID"], category: "Security",
    concept: "NFC/RFID",
    principle: "Electromagnetic Induction",
    pins: [{ from: "SDA", to: "Pin 10" }, { from: "SCK", to: "Pin 13" }, { from: "MOSI", to: "Pin 11" }, { from: "MISO", to: "Pin 12" }],
    code: cleanCode(`
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
        `),
    useCase: "Office Access, Hotel Keys.",
    advantages: ["Contactless", "Secure"],
    disadvantages: ["Card can be cloned"],
    parts: [{ name: "RC522 RFID Module", buyLink: "https://robu.in/product/rfid-rc522-reader/" }]
  },

  // --- AUTOMATION (41-55) ---
  {
    id: 18, title: "Relay Light Control", level: "Intermediate",
    description: "Control AC bulbs using DC signals.",
    tech: ["Arduino", "Relay"], category: "Smart Home",
    concept: "Isolation & Switching",
    principle: "Electromagnetism",
    pins: [{ from: "Relay IN", to: "Pin 7" }],
    code: cleanCode(`
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
        `),
    useCase: "Home automation, Industrial control.",
    advantages: ["Controls High Voltage"],
    disadvantages: ["Mechanical wear"],
    parts: [{ name: "1-Channel 5V Relay", buyLink: "https://robu.in/product/1-channel-5v-relay-module-with-optocoupler/" }]
  },
  
  {
    id: 19, title: "Smart Thermostat", level: "Advanced",
    description: "Maintain temperature by switching heating/cooling.",
    tech: ["Arduino", "Relay", "DHT11"], category: "Smart Home",
    concept: "Feedback Loop",
    principle: "Hysteresis Control",
    pins: [{ from: "Sensor", to: "Pin 2" }, { from: "Relay", to: "Pin 7" }],
    code: cleanCode(`
            // Simple Thermostat Logic
            int currentTemp = 25; // Dummy reading 
            int setPoint = 24;
            int heaterRelay = 7;
            
            void setup() { pinMode(heaterRelay, OUTPUT); }
            
            void loop() {
               // Read temp here
               if(currentTemp < setPoint) {
                 digitalWrite(heaterRelay, HIGH); // Heat ON
               } else {
                 digitalWrite(heaterRelay, LOW);  // Heat OFF
               }
            }
        `),
    useCase: "HVAC systems, Incubators.",
    advantages: ["Automated comfort"],
    disadvantages: ["Complex tuning"],
    parts: [{ name: "Relay Module", buyLink: "https://robu.in/" }, { name: "DHT11", buyLink: "https://robu.in/" }]
  },
  
   {

  id: 20,
  title: "Smart Doorbell System",
  level: "Intermediate",
  category: "Security",

  description:
    "Triggers a buzzer when a visitor presses a button.",

  tech: ["Arduino Uno", "Buzzer", "Button"],
  concept: "Digital Input",
  principle: "Switch detection",

  components: [
    "Arduino Uno",
    "Push Button",
    "Buzzer"
  ],

  pins: [
    { from: "Button", to: "Pin 2" },
    { from: "Buzzer", to: "Pin 8" }
  ],

  working:
    "When the button is pressed, Arduino detects LOW signal and activates buzzer.",

  code: cleanCode(`
    int buttonPin = 2;
    int buzzerPin = 8;

    void setup() {
      pinMode(buttonPin, INPUT_PULLUP);
      pinMode(buzzerPin, OUTPUT);
    }

    void loop() {
      if (digitalRead(buttonPin) == LOW) {
        tone(buzzerPin, 1000);
      } else {
        noTone(buzzerPin);
      }
    }
  `),

  output:
    "Buzzer rings when button is pressed.",

  useCase:
    "Home doorbells, office calling systems.",

  learningOutcome: [
    "Input-output control",
    "Pull-up resistor usage"
  ]
},

{
  id: 21,
  title: "Relay Based Home Automation",
  level: "Intermediate",
  category: "Automation",

  description:
    "Controls AC appliances safely using a relay module.",

  tech: ["Arduino Uno", "Relay"],
  concept: "Electromechanical Switching",
  principle: "Electromagnetic induction",

  components: [
    "Arduino Uno",
    "Relay Module",
    "AC Load (Bulb)"
  ],

  pins: [
    { from: "Relay IN", to: "Pin 7" }
  ],

  working:
    "Arduino sends HIGH signal to relay module, energizing the coil and switching AC appliance.",

  code: cleanCode(`
    int relayPin = 7;

    void setup() {
      pinMode(relayPin, OUTPUT);
    }

    void loop() {
      digitalWrite(relayPin, HIGH);
      delay(3000);
      digitalWrite(relayPin, LOW);
      delay(3000);
    }
  `),

  output:
    "AC appliance turns ON and OFF automatically.",

  useCase:
    "Home automation, industrial switching.",

  learningOutcome: [
    "Relay interfacing",
    "High voltage safety awareness"
  ]
},

{
  id: 22,
  title: "ESP32 WiFi LED Control",
  level: "Advanced",
  category: "IoT",

  description:
    "Controls LED from a web browser using ESP32 WiFi.",

  tech: ["ESP32", "WiFi"],
  concept: "HTTP Server",
  principle: "Wireless communication",

  components: [
    "ESP32 Dev Board",
    "LED",
    "220Ω Resistor"
  ],

  pins: [
    { from: "LED", to: "GPIO 2" }
  ],

  working:
    "ESP32 hosts a web server. Clicking links on browser sends HTTP request to control LED.",

  code: cleanCode(`
    #include <WiFi.h>
    #include <WebServer.h>

    const char* ssid = "YOUR_WIFI";
    const char* password = "PASSWORD";

    WebServer server(80);
    int led = 2;

    void on() {
      digitalWrite(led, HIGH);
      server.send(200, "text/plain", "LED ON");
    }

    void off() {
      digitalWrite(led, LOW);
      server.send(200, "text/plain", "LED OFF");
    }

    void setup() {
      pinMode(led, OUTPUT);
      WiFi.begin(ssid, password);
      while (WiFi.status() != WL_CONNECTED) delay(500);

      server.on("/on", on);
      server.on("/off", off);
      server.begin();
    }

    void loop() {
      server.handleClient();
    }
  `),

  output:
    "LED can be controlled from any browser over WiFi.",

  useCase:
    "Smart homes, IoT switching.",

  learningOutcome: [
    "WiFi basics",
    "HTTP server handling"
  ]
},

{
  id: 23,
  title: "IoT Weather Station",
  level: "Advanced",
  category: "IoT",

  description:
    "Monitors temperature and humidity using IoT.",

  tech: ["ESP32", "DHT11"],
  concept: "Environmental Monitoring",
  principle: "Digital sensor data acquisition",

  components: [
    "ESP32",
    "DHT11 Sensor"
  ],

  pins: [
    { from: "DHT Data", to: "GPIO 4" }
  ],

  working:
    "ESP32 reads temperature and humidity and sends data via serial/cloud.",

  code: cleanCode(`
    #include <DHT.h>

    #define DHTPIN 4
    #define DHTTYPE DHT11

    DHT dht(DHTPIN, DHTTYPE);

    void setup() {
      Serial.begin(9600);
      dht.begin();
    }

    void loop() {
      float t = dht.readTemperature();
      float h = dht.readHumidity();

      Serial.print("Temp: ");
      Serial.print(t);
      Serial.print("  Humidity: ");
      Serial.println(h);

      delay(2000);
    }
  `),

  output:
    "Temperature and humidity values shown on serial monitor.",

  useCase:
    "Weather monitoring, agriculture analytics.",

  learningOutcome: [
    "IoT sensing",
    "Environmental data analysis"
  ]
},

{
  id: 24,
  title: "Smart Attendance using RFID",
  level: "Advanced",
  category: "IoT & Security",

  description:
    "Marks attendance automatically using RFID cards.",

  tech: ["Arduino", "RFID"],
  concept: "Identification System",
  principle: "Electromagnetic coupling",

  components: [
    "Arduino Uno",
    "RFID RC522",
    "RFID Cards"
  ],

  pins: [
    { from: "SDA", to: "Pin 10" },
    { from: "RST", to: "Pin 9" }
  ],

  working:
    "RFID card UID is read and matched. If valid, attendance is marked.",

  output:
    "Card UID displayed and attendance recorded.",

  useCase:
    "Colleges, offices, access control.",

  learningOutcome: [
    "RFID basics",
    "Authentication logic"
  ]
},

{
  id: 25,
  title: "Smart Irrigation System",
  level: "Advanced",
  category: "Agriculture & IoT",

  description:
    "Automatically waters plants based on soil moisture level.",

  tech: ["Arduino", "Soil Sensor", "Relay"],
  concept: "Closed Loop Control",
  principle: "Feedback-based automation",

  components: [
    "Arduino Uno",
    "Soil Moisture Sensor",
    "Relay Module",
    "Water Pump"
  ],

  pins: [
    { from: "Soil Sensor", to: "A0" },
    { from: "Relay", to: "Pin 8" }
  ],

  working:
    "Arduino checks soil moisture and turns ON pump when soil is dry.",

  code: cleanCode(`
    int soilPin = A0;
    int relayPin = 8;

    void setup() {
      pinMode(relayPin, OUTPUT);
    }

    void loop() {
      int moisture = analogRead(soilPin);

      if (moisture > 700) {
        digitalWrite(relayPin, HIGH);
      } else {
        digitalWrite(relayPin, LOW);
      }
      delay(1000);
    }
  `),

  output:
    "Water pump turns ON automatically when soil is dry.",

  useCase:
    "Smart farming, home gardens.",

  learningOutcome: [
    "Automation logic",
    "Sensor-based decision making"
  ]
},

{
  id: 26,
  title: "Smart Fire Alarm System",
  level: "Intermediate",
  category: "Safety",

  description: "Detects fire using flame sensor and triggers alarm.",

  tech: ["Arduino Uno", "Flame Sensor", "Buzzer"],
  concept: "Fire Detection",
  principle: "Infrared flame sensing",

  components: ["Arduino Uno", "Flame Sensor", "Buzzer"],

  pins: [
    { from: "Flame Sensor DO", to: "Pin 2" },
    { from: "Buzzer", to: "Pin 8" }
  ],

  working:
    "When flame is detected, sensor output goes LOW and Arduino activates buzzer.",

  code: cleanCode(`
    int flamePin = 2;
    int buzzer = 8;

    void setup() {
      pinMode(flamePin, INPUT);
      pinMode(buzzer, OUTPUT);
    }

    void loop() {
      if (digitalRead(flamePin) == LOW) {
        digitalWrite(buzzer, HIGH);
      } else {
        digitalWrite(buzzer, LOW);
      }
    }
  `),

  output: "Buzzer sounds when fire is detected.",

  useCase: "Fire safety systems, warehouses.",

  learningOutcome: ["Fire detection", "Emergency alert system"]
},

{
  id: 27,
  title: "Smart Parking System",
  level: "Intermediate",
  category: "Automation",

  description: "Detects vehicle presence using ultrasonic sensor.",

  tech: ["Arduino", "Ultrasonic Sensor"],
  concept: "Distance Measurement",
  principle: "Time of Flight",

  components: ["Arduino Uno", "HC-SR04"],

  pins: [
    { from: "Trig", to: "Pin 9" },
    { from: "Echo", to: "Pin 10" }
  ],

  working:
    "If distance is less than threshold, parking slot is occupied.",

  code: cleanCode(`
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

      long d = pulseIn(ECHO, HIGH);
      int dist = d * 0.034 / 2;

      if (dist < 10)
        Serial.println("Parking Occupied");
      else
        Serial.println("Slot Free");

      delay(500);
    }
  `),

  output: "Displays parking slot status.",

  useCase: "Mall parking systems.",

  learningOutcome: ["Ultrasonic sensing", "Smart infrastructure"]
},


{
  id: 28,
  title: "Smart Blind Stick",
  level: "Intermediate",
  category: "Healthcare",

  description: "Detects obstacles and alerts user via buzzer.",

  tech: ["Arduino", "Ultrasonic Sensor", "Buzzer"],
  concept: "Obstacle Detection",
  principle: "Ultrasonic reflection",

  components: ["Arduino", "HC-SR04", "Buzzer"],

  pins: [
    { from: "Trig", to: "Pin 6" },
    { from: "Echo", to: "Pin 7" },
    { from: "Buzzer", to: "Pin 8" }
  ],

  working:
    "When obstacle is detected near, buzzer alerts the user.",

  code: cleanCode(`
    int trig = 6, echo = 7, buzzer = 8;

    void setup() {
      pinMode(trig, OUTPUT);
      pinMode(echo, INPUT);
      pinMode(buzzer, OUTPUT);
    }

    void loop() {
      digitalWrite(trig, HIGH);
      delayMicroseconds(10);
      digitalWrite(trig, LOW);

      long t = pulseIn(echo, HIGH);
      int d = t * 0.034 / 2;

      if (d < 50) digitalWrite(buzzer, HIGH);
      else digitalWrite(buzzer, LOW);

      delay(300);
    }
  `),

  output: "Buzzer alerts when obstacle detected.",

  useCase: "Assistive technology.",

  learningOutcome: ["Social impact IoT", "Obstacle detection"]
},

{
  id: 29,
  title: "Smart Dustbin",
  level: "Intermediate",
  category: "Automation",

  description: "Automatically opens lid when user approaches.",

  tech: ["Arduino", "Ultrasonic Sensor", "Servo"],
  concept: "Motion-triggered automation",
  principle: "Distance-based actuation",

  components: ["Arduino", "HC-SR04", "Servo Motor"],

  pins: [
    { from: "Trig", to: "Pin 4" },
    { from: "Echo", to: "Pin 5" },
    { from: "Servo", to: "Pin 9" }
  ],

  working:
    "When distance is below threshold, servo opens dustbin lid.",

  code: cleanCode(`
    #include <Servo.h>
    Servo lid;

    void setup() {
      lid.attach(9);
    }

    void loop() {
      lid.write(90);
      delay(2000);
      lid.write(0);
      delay(3000);
    }
  `),

  output: "Dustbin lid opens automatically.",

  useCase: "Smart cities, hygiene systems.",

  learningOutcome: ["Servo control", "Automation logic"]
},

{
  id: 30,
  title: "Smart Fan Speed Control",
  level: "Intermediate",
  category: "Automation",

  description: "Controls fan speed using temperature sensor.",

  tech: ["Arduino", "LM35", "Relay"],
  concept: "Temperature-based control",
  principle: "Analog sensing",

  components: ["Arduino", "LM35", "Relay"],

  pins: [
    { from: "LM35", to: "A0" },
    { from: "Relay", to: "Pin 8" }
  ],

  working:
    "Fan speed is adjusted based on room temperature.",

  code: cleanCode(`
    int tempPin = A0;
    int relay = 8;

    void setup() {
      pinMode(relay, OUTPUT);
    }

    void loop() {
      int val = analogRead(tempPin);
      float temp = val * 0.488;

      if (temp > 30)
        digitalWrite(relay, HIGH);
      else
        digitalWrite(relay, LOW);
    }
  `),

  output: "Fan turns ON automatically when hot.",

  useCase: "Smart homes.",

  learningOutcome: ["Temperature automation"]
},


{
  id: 31,
  title: "Smart Helmet Safety System",
  level: "Advanced",
  category: "Safety & IoT",

  description:
    "Ensures rider safety by checking helmet wear and alcohol presence before allowing vehicle ignition.",

  tech: ["Arduino Uno", "IR Sensor", "MQ-3", "Relay"],
  concept: "Safety Interlock System",
  principle: "Multi-sensor decision logic",

  components: [
    "Arduino Uno",
    "IR Proximity Sensor",
    "MQ-3 Alcohol Sensor",
    "Relay Module",
    "Buzzer"
  ],

  pins: [
    { from: "IR Sensor Output", to: "Pin 2" },
    { from: "MQ-3 Output", to: "A0" },
    { from: "Relay IN", to: "Pin 8" },
    { from: "Buzzer", to: "Pin 9" }
  ],

  pinExplanation:
    "IR sensor detects helmet presence. MQ-3 checks alcohol level. Relay controls ignition system.",

  working:
    "If the helmet is worn and alcohol level is below threshold, Arduino activates relay to allow ignition. Otherwise, ignition remains OFF and buzzer alerts the rider.",

  code: cleanCode(`
    int helmetSensor = 2;
    int alcoholSensor = A0;
    int relayPin = 8;
    int buzzer = 9;
    int alcoholThreshold = 400;

    void setup() {
      pinMode(helmetSensor, INPUT);
      pinMode(relayPin, OUTPUT);
      pinMode(buzzer, OUTPUT);
    }

    void loop() {
      int helmet = digitalRead(helmetSensor);
      int alcohol = analogRead(alcoholSensor);

      if (helmet == HIGH && alcohol < alcoholThreshold) {
        digitalWrite(relayPin, HIGH); // Allow ignition
        digitalWrite(buzzer, LOW);
      } else {
        digitalWrite(relayPin, LOW);  // Block ignition
        digitalWrite(buzzer, HIGH);
      }
      delay(500);
    }
  `),

  output:
    "Vehicle starts only when helmet is worn and rider is sober.",

  useCase:
    "Two-wheeler safety enforcement systems.",

  realWorldExample:
    "Mandatory helmet + alcohol check before bike ignition.",

  learningOutcome: [
    "Multi-sensor integration",
    "Safety-based decision logic",
    "Real-world embedded system design"
  ],

  advantages: [
    "Reduces accidents",
    "Encourages safe riding"
  ],

  disadvantages: [
    "Sensor calibration required",
    "Helmet wiring complexity"
  ]
},

{
  id: 32,
  title: "Smart Energy Meter",
  level: "Advanced",
  category: "IoT & Power Systems",

  description:
    "Measures electrical energy consumption and displays real-time power usage.",

  tech: ["ESP32", "ACS712 Current Sensor"],
  concept: "Energy Monitoring",
  principle: "Current sensing using Hall effect",

  components: [
    "ESP32 Dev Board",
    "ACS712 Current Sensor",
    "AC Load",
    "Jumper Wires"
  ],

  pins: [
    { from: "ACS712 OUT", to: "GPIO 34 (ADC)" }
  ],

  pinExplanation:
    "ACS712 outputs an analog voltage proportional to current flow, read by ESP32 ADC.",

  working:
    "The current sensor measures load current. ESP32 converts this value into power consumption and displays it on serial monitor or cloud dashboard.",

  code: cleanCode(`
    int sensorPin = 34;

    void setup() {
      Serial.begin(9600);
    }

    void loop() {
      int raw = analogRead(sensorPin);
      float voltage = raw * (3.3 / 4095.0);
      float current = (voltage - 2.5) / 0.066; // ACS712 calibration

      Serial.print("Current: ");
      Serial.print(current);
      Serial.println(" A");

      delay(1000);
    }
  `),

  output:
    "Displays real-time current consumption in amperes.",

  useCase:
    "Smart electricity billing, load monitoring.",

  realWorldExample:
    "Digital energy meters used by electricity boards.",

  learningOutcome: [
    "Power measurement basics",
    "ADC usage in ESP32",
    "Energy monitoring systems"
  ],

  advantages: [
    "Accurate monitoring",
    "IoT ready"
  ],

  disadvantages: [
    "Needs calibration",
    "Isolation required for AC safety"
  ]
},

{
  id: 33,
  title: "Smart Door Lock (WiFi Controlled)",
  level: "Advanced",
  category: "IoT & Security",

  description:
    "Locks or unlocks a door remotely using WiFi and ESP32.",

  tech: ["ESP32", "Servo Motor", "WiFi"],
  concept: "Remote Access Control",
  principle: "HTTP-based control",

  components: [
    "ESP32 Dev Board",
    "Servo Motor",
    "Power Supply"
  ],

  pins: [
    { from: "Servo Signal", to: "GPIO 13" }
  ],

  pinExplanation:
    "ESP32 controls servo motor position based on received web commands.",

  working:
    "ESP32 hosts a web server. When user clicks LOCK or UNLOCK, servo rotates to corresponding position.",

  code: cleanCode(`
    #include <WiFi.h>
    #include <WebServer.h>
    #include <Servo.h>

    Servo lockServo;
    WebServer server(80);

    void lockDoor() {
      lockServo.write(0);
      server.send(200, "text/plain", "Door Locked");
    }

    void unlockDoor() {
      lockServo.write(90);
      server.send(200, "text/plain", "Door Unlocked");
    }

    void setup() {
      lockServo.attach(13);
      server.on("/lock", lockDoor);
      server.on("/unlock", unlockDoor);
      server.begin();
    }

    void loop() {
      server.handleClient();
    }
  `),

  output:
    "Door locks/unlocks through web browser.",

  useCase:
    "Smart homes, hotel room automation.",

  realWorldExample:
    "WiFi-enabled smart locks.",

  learningOutcome: [
    "Servo automation",
    "Remote IoT control",
    "Security systems"
  ],

  advantages: [
    "Remote access",
    "Easy integration"
  ],

  disadvantages: [
    "Network dependency",
    "Security must be handled carefully"
  ]
},

{
  id: 34,
  title: "Smart Water Quality Monitoring",
  level: "Advanced",
  category: "IoT & Environment",

  description:
    "Monitors water quality using pH sensor and alerts when unsafe.",

  tech: ["ESP32", "pH Sensor"],
  concept: "Water Quality Analysis",
  principle: "Electrochemical sensing",

  components: [
    "ESP32",
    "pH Sensor Module",
    "Calibration Solution"
  ],

  pins: [
    { from: "pH Sensor OUT", to: "GPIO 35" }
  ],

  pinExplanation:
    "pH sensor outputs analog voltage corresponding to acidity or alkalinity.",

  working:
    "ESP32 reads pH value and compares with safe limits. Alerts user if water quality is unsafe.",

  code: cleanCode(`
    int phPin = 35;

    void setup() {
      Serial.begin(9600);
    }

    void loop() {
      int raw = analogRead(phPin);
      float voltage = raw * (3.3 / 4095.0);
      float pH = 3.5 * voltage;

      Serial.print("pH Value: ");
      Serial.println(pH);

      delay(2000);
    }
  `),

  output:
    "Displays pH value of water.",

  useCase:
    "Drinking water monitoring, industrial water safety.",

  realWorldExample:
    "Water treatment plants.",

  learningOutcome: [
    "Environmental IoT",
    "Analog sensor calibration",
    "Water quality analysis"
  ],

  advantages: [
    "Improves public health",
    "Continuous monitoring"
  ],

  disadvantages: [
    "Sensor calibration required",
    "Sensor aging"
  ]
},

{
  id: 35,
  title: "Smart Accident Detection System",
  level: "Advanced",
  category: "IoT & Safety",

  description:
    "Detects vehicle accidents using vibration sensor and triggers alert.",

  tech: ["Arduino Uno", "Vibration Sensor", "Buzzer"],
  concept: "Impact Detection",
  principle: "Mechanical vibration sensing",

  components: [
    "Arduino Uno",
    "Vibration Sensor (SW-420)",
    "Buzzer",
    "Relay / GSM (optional)"
  ],

  pins: [
    { from: "Vibration Sensor DO", to: "Pin 2" },
    { from: "Buzzer", to: "Pin 9" }
  ],

  pinExplanation:
    "Vibration sensor detects sudden impact and sends digital signal to Arduino.",

  working:
    "If sudden vibration is detected, Arduino triggers buzzer and emergency alert.",

  code: cleanCode(`
    int vibPin = 2;
    int buzzer = 9;

    void setup() {
      pinMode(vibPin, INPUT);
      pinMode(buzzer, OUTPUT);
    }

    void loop() {
      if (digitalRead(vibPin) == HIGH) {
        digitalWrite(buzzer, HIGH);
        delay(3000);
      } else {
        digitalWrite(buzzer, LOW);
      }
    }
  `),

  output:
    "Buzzer alerts when accident is detected.",

  useCase:
    "Vehicle safety, emergency response systems.",

  realWorldExample:
    "Automatic crash detection in modern vehicles.",

  learningOutcome: [
    "Impact sensing",
    "Emergency alert logic",
    "Safety system design"
  ],

  advantages: [
    "Quick emergency response",
    "Low cost"
  ],

  disadvantages: [
    "False triggers possible",
    "Needs tuning"
  ]
},

{
  id: 36,
  title: "Smart Gas Leakage Alert (IoT)",
  level: "Advanced",
  category: "IoT & Safety",

  description:
    "Detects gas leakage and sends alert using IoT connectivity.",

  tech: ["ESP32", "MQ-2 Gas Sensor", "Buzzer"],
  concept: "Gas Detection",
  principle: "Chemiresistive sensing",

  components: [
    "ESP32 Dev Board",
    "MQ-2 Gas Sensor",
    "Buzzer"
  ],

  pins: [
    { from: "MQ-2 OUT", to: "GPIO 34" },
    { from: "Buzzer", to: "GPIO 27" }
  ],

  working:
    "ESP32 continuously monitors gas levels. When concentration exceeds threshold, buzzer alerts user and data can be sent to cloud.",

  code: cleanCode(`
    int gasPin = 34;
    int buzzer = 27;

    void setup() {
      pinMode(buzzer, OUTPUT);
      Serial.begin(9600);
    }

    void loop() {
      int gas = analogRead(gasPin);
      if (gas > 600) {
        digitalWrite(buzzer, HIGH);
      } else {
        digitalWrite(buzzer, LOW);
      }
      delay(1000);
    }
  `),

  output:
    "Buzzer sounds when gas leakage detected.",

  useCase:
    "Kitchen safety, industrial gas monitoring.",

  learningOutcome: [
    "Gas sensing",
    "IoT-based alerts"
  ]
},

{
  id: 37,
  title: "Smart Garbage Level Monitoring",
  level: "Advanced",
  category: "Smart City",

  description:
    "Monitors garbage bin fill level using ultrasonic sensor.",

  tech: ["ESP32", "Ultrasonic Sensor"],
  concept: "Level Monitoring",
  principle: "Distance measurement",

  components: [
    "ESP32",
    "HC-SR04 Ultrasonic Sensor"
  ],

  pins: [
    { from: "Trig", to: "GPIO 5" },
    { from: "Echo", to: "GPIO 18" }
  ],

  working:
    "Distance from sensor to garbage surface is measured. If distance is low, bin is considered full.",

  code: cleanCode(`
    #define TRIG 5
    #define ECHO 18

    void setup() {
      Serial.begin(9600);
      pinMode(TRIG, OUTPUT);
      pinMode(ECHO, INPUT);
    }

    void loop() {
      digitalWrite(TRIG, HIGH);
      delayMicroseconds(10);
      digitalWrite(TRIG, LOW);

      long t = pulseIn(ECHO, HIGH);
      int d = t * 0.034 / 2;

      Serial.print("Garbage Level Distance: ");
      Serial.println(d);
      delay(1000);
    }
  `),

  output:
    "Displays garbage fill level.",

  useCase:
    "Smart city waste management.",

  learningOutcome: [
    "Ultrasonic sensing",
    "Smart city IoT"
  ]
},

{
  id: 38,
  title: "Smart Street Light (IoT Based)",
  level: "Advanced",
  category: "Smart City",

  description:
    "Controls street lights automatically and monitors remotely.",

  tech: ["ESP32", "LDR", "Relay"],
  concept: "Remote automation",
  principle: "Light intensity sensing",

  components: [
    "ESP32",
    "LDR",
    "Relay Module"
  ],

  pins: [
    { from: "LDR", to: "GPIO 34" },
    { from: "Relay", to: "GPIO 26" }
  ],

  working:
    "Street lights turn ON automatically at night and status can be monitored remotely.",

  code: cleanCode(`
    int ldr = 34;
    int relay = 26;

    void setup() {
      pinMode(relay, OUTPUT);
    }

    void loop() {
      int light = analogRead(ldr);
      if (light < 500)
        digitalWrite(relay, HIGH);
      else
        digitalWrite(relay, LOW);

      delay(1000);
    }
  `),

  output:
    "Street lights switch automatically based on light intensity.",

  useCase:
    "Urban lighting systems.",

  learningOutcome: [
    "IoT automation",
    "Energy saving systems"
  ]
},

{
  id: 39,
  title: "Smart Home Automation Dashboard",
  level: "Advanced",
  category: "IoT",

  description:
    "Controls multiple home appliances using a web-based dashboard.",

  tech: ["ESP32", "WiFi", "Relay"],
  concept: "Centralized Home Automation",
  principle: "HTTP-based device control",

  components: [
    "ESP32",
    "2-Channel Relay Module",
    "AC Appliances"
  ],

  pins: [
    { from: "Relay 1", to: "GPIO 26" },
    { from: "Relay 2", to: "GPIO 27" }
  ],

  working:
    "ESP32 hosts a web dashboard. Clicking buttons sends HTTP requests to control relays.",

  code: cleanCode(`
    #include <WiFi.h>
    #include <WebServer.h>

    WebServer server(80);
    int r1 = 26, r2 = 27;

    void setup() {
      pinMode(r1, OUTPUT);
      pinMode(r2, OUTPUT);

      server.on("/on1", [](){ digitalWrite(r1, HIGH); server.send(200,"text","ON1"); });
      server.on("/off1",[](){ digitalWrite(r1, LOW);  server.send(200,"text","OFF1"); });
      server.on("/on2", [](){ digitalWrite(r2, HIGH); server.send(200,"text","ON2"); });
      server.on("/off2",[](){ digitalWrite(r2, LOW);  server.send(200,"text","OFF2"); });

      server.begin();
    }

    void loop() {
      server.handleClient();
    }
  `),

  output:
    "Appliances are controlled from browser dashboard.",

  useCase:
    "Smart homes, hostels, offices.",

  learningOutcome: [
    "Web-based IoT control",
    "Multi-device automation"
  ]
},

{
  id: 40,
  title: "Smart Traffic Management System",
  level: "Advanced",
  category: "Smart City",

  description:
    "Controls traffic lights based on vehicle density.",

  tech: ["Arduino", "IR Sensors", "LEDs"],
  concept: "Density-Based Traffic Control",
  principle: "Vehicle presence detection",

  components: [
    "Arduino Uno",
    "IR Sensors",
    "Red, Yellow, Green LEDs"
  ],

  pins: [
    { from: "IR Sensor", to: "Pin 2" },
    { from: "Red LED", to: "Pin 8" },
    { from: "Green LED", to: "Pin 9" }
  ],

  working:
    "If vehicle density is high, green signal duration increases automatically.",

  code: cleanCode(`
    int ir = 2;
    int red = 8;
    int green = 9;

    void setup() {
      pinMode(ir, INPUT);
      pinMode(red, OUTPUT);
      pinMode(green, OUTPUT);
    }

    void loop() {
      if (digitalRead(ir) == HIGH) {
        digitalWrite(green, HIGH);
        digitalWrite(red, LOW);
      } else {
        digitalWrite(red, HIGH);
        digitalWrite(green, LOW);
      }
      delay(1000);
    }
  `),

  output:
    "Traffic signal adapts based on traffic density.",

  useCase:
    "Smart intersections.",

  learningOutcome: [
    "Traffic automation",
    "Sensor-based control"
  ]
},

{
  id: 41,
  title: "Smart Crop Monitoring System",
  level: "Advanced",
  category: "Agriculture IoT",

  description:
    "Monitors soil moisture, temperature and humidity.",

  tech: ["ESP32", "DHT11", "Soil Sensor"],
  concept: "Precision Agriculture",
  principle: "Environmental sensing",

  components: [
    "ESP32",
    "DHT11",
    "Soil Moisture Sensor"
  ],

  pins: [
    { from: "Soil Sensor", to: "GPIO 34" },
    { from: "DHT Data", to: "GPIO 4" }
  ],

  working:
    "ESP32 reads crop environment data and displays on serial/cloud.",

  code: cleanCode(`
    #include <DHT.h>
    #define DHTPIN 4
    #define DHTTYPE DHT11

    DHT dht(DHTPIN, DHTTYPE);
    int soil = 34;

    void setup() {
      Serial.begin(9600);
      dht.begin();
    }

    void loop() {
      Serial.print("Temp: ");
      Serial.println(dht.readTemperature());
      Serial.print("Humidity: ");
      Serial.println(dht.readHumidity());
      Serial.print("Soil: ");
      Serial.println(analogRead(soil));
      delay(2000);
    }
  `),

  output:
    "Environmental data printed live.",

  useCase:
    "Smart farming.",

  learningOutcome: [
    "Agri IoT",
    "Multi-sensor integration"
  ]
},

{
  id: 42,
  title: "Smart Weather Forecast Display",
  level: "Advanced",
  category: "IoT & Display",

  description:
    "Displays weather data on OLED screen.",

  tech: ["ESP32", "OLED"],
  concept: "IoT Visualization",
  principle: "I2C communication",

  components: [
    "ESP32",
    "0.96 OLED Display"
  ],

  pins: [
    { from: "SDA", to: "GPIO 21" },
    { from: "SCL", to: "GPIO 22" }
  ],

  working:
    "ESP32 fetches or reads weather data and displays it on OLED.",

  code: cleanCode(`
    #include <Wire.h>
    #include <Adafruit_SSD1306.h>

    Adafruit_SSD1306 display(128, 64, &Wire, -1);

    void setup() {
      display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
      display.clearDisplay();
      display.setTextSize(1);
      display.setTextColor(WHITE);
      display.setCursor(0,0);
      display.println("Weather Ready");
      display.display();
    }

    void loop() {}
  `),

  output:
    "Weather data shown on OLED.",

  useCase:
    "Smart displays.",

  learningOutcome: [
    "OLED interfacing",
    "IoT data visualization"
  ]
},

{
  id: 43,
  title: "Smart Attendance (Face Recognition)",
  level: "Advanced",
  category: "AIoT",

  description:
    "Automatically marks attendance using face recognition with ESP32-CAM.",

  tech: ["ESP32-CAM", "WiFi"],
  concept: "Edge AI & Computer Vision",
  principle: "Face detection using embedded camera module",

  components: [
    "ESP32-CAM (AI Thinker)",
    "FTDI Programmer",
    "Jumper Wires"
  ],

  pins: [
    { from: "U0R", to: "FTDI TX" },
    { from: "U0T", to: "FTDI RX" },
    { from: "GND", to: "GND" },
    { from: "5V", to: "5V" }
  ],

  pinExplanation:
    "ESP32-CAM is programmed using FTDI module. Camera pins are internally mapped.",

  working:
    "ESP32-CAM initializes the camera and hosts a web interface. Faces are detected and recognized using built-in ESP32 libraries. Recognized faces can be logged as attendance.",

  code: cleanCode(`
    #include "esp_camera.h"
    #include <WiFi.h>

    #define PWDN_GPIO_NUM     32
    #define RESET_GPIO_NUM    -1
    #define XCLK_GPIO_NUM      0
    #define SIOD_GPIO_NUM     26
    #define SIOC_GPIO_NUM     27
    #define Y9_GPIO_NUM       35
    #define Y8_GPIO_NUM       34
    #define Y7_GPIO_NUM       39
    #define Y6_GPIO_NUM       36
    #define Y5_GPIO_NUM       21
    #define Y4_GPIO_NUM       19
    #define Y3_GPIO_NUM       18
    #define Y2_GPIO_NUM        5
    #define VSYNC_GPIO_NUM    25
    #define HREF_GPIO_NUM     23
    #define PCLK_GPIO_NUM     22

    void setup() {
      Serial.begin(115200);

      camera_config_t config;
      config.ledc_channel = LEDC_CHANNEL_0;
      config.ledc_timer = LEDC_TIMER_0;
      config.pin_d0 = Y2_GPIO_NUM;
      config.pin_d1 = Y3_GPIO_NUM;
      config.pin_d2 = Y4_GPIO_NUM;
      config.pin_d3 = Y5_GPIO_NUM;
      config.pin_d4 = Y6_GPIO_NUM;
      config.pin_d5 = Y7_GPIO_NUM;
      config.pin_d6 = Y8_GPIO_NUM;
      config.pin_d7 = Y9_GPIO_NUM;
      config.pin_xclk = XCLK_GPIO_NUM;
      config.pin_pclk = PCLK_GPIO_NUM;
      config.pin_vsync = VSYNC_GPIO_NUM;
      config.pin_href = HREF_GPIO_NUM;
      config.pin_sscb_sda = SIOD_GPIO_NUM;
      config.pin_sscb_scl = SIOC_GPIO_NUM;
      config.pin_pwdn = PWDN_GPIO_NUM;
      config.pin_reset = RESET_GPIO_NUM;
      config.xclk_freq_hz = 20000000;
      config.pixel_format = PIXFORMAT_JPEG;
      config.frame_size = FRAMESIZE_QVGA;
      config.jpeg_quality = 12;
      config.fb_count = 1;

      esp_camera_init(&config);
    }

    void loop() {
      // Face recognition handled via web server
    }
  `),

  output:
    "Camera detects and recognizes faces via browser interface.",

  useCase:
    "College attendance, office entry systems.",

  learningOutcome: [
    "ESP32-CAM programming",
    "Edge AI basics",
    "Face recognition workflow"
  ]
},

/* =====================================================
   PROJECT 44 – Smart Healthcare Monitoring
===================================================== */
{
  id: 44,
  title: "Smart Healthcare Monitoring",
  level: "Advanced",
  category: "Healthcare IoT",

  description:
    "Monitors heart rate using pulse sensor and displays live data.",

  tech: ["ESP32", "Pulse Sensor"],
  concept: "Biomedical Signal Monitoring",
  principle: "Photoplethysmography",

  components: [
    "ESP32",
    "Pulse Sensor",
    "Jumper Wires"
  ],

  pins: [
    { from: "Pulse OUT", to: "GPIO 34" },
    { from: "Pulse VCC", to: "3.3V" },
    { from: "Pulse GND", to: "GND" }
  ],

  pinExplanation:
    "Pulse sensor sends analog heart signal to ESP32 ADC pin.",

  working:
    "ESP32 reads pulse sensor values continuously and displays heart rate signal on serial monitor.",

  code: cleanCode(`
    int pulsePin = 34;

    void setup() {
      Serial.begin(9600);
    }

    void loop() {
      int pulseValue = analogRead(pulsePin);
      Serial.print("Pulse Signal: ");
      Serial.println(pulseValue);
      delay(1000);
    }
  `),

  output:
    "Live heart pulse signal shown in serial monitor.",

  useCase:
    "Remote patient monitoring, fitness devices.",

  learningOutcome: [
    "Health sensor interfacing",
    "Analog signal processing"
  ]
},

/* =====================================================
   PROJECT 45 – Smart Inventory Management System
===================================================== */
{
  id: 45,
  title: "Smart Inventory Management System",
  level: "Advanced",
  category: "Industrial IoT",

  description:
    "Tracks inventory items automatically using RFID technology.",

  tech: ["Arduino Uno", "RFID RC522"],
  concept: "Asset Tracking",
  principle: "Radio Frequency Identification",

  components: [
    "Arduino Uno",
    "RFID RC522 Module",
    "RFID Cards",
    "Jumper Wires"
  ],

  pins: [
    { from: "SDA", to: "Pin 10" },
    { from: "SCK", to: "Pin 13" },
    { from: "MOSI", to: "Pin 11" },
    { from: "MISO", to: "Pin 12" },
    { from: "RST", to: "Pin 9" }
  ],

  pinExplanation:
    "RFID reader communicates with Arduino via SPI interface.",

  working:
    "Each product has an RFID tag. When scanned, UID is read and inventory data is updated.",

  code: cleanCode(`
    #include <SPI.h>
    #include <MFRC522.h>

    #define SS_PIN 10
    #define RST_PIN 9

    MFRC522 rfid(SS_PIN, RST_PIN);

    void setup() {
      Serial.begin(9600);
      SPI.begin();
      rfid.PCD_Init();
      Serial.println("Scan RFID Tag");
    }

    void loop() {
      if (!rfid.PICC_IsNewCardPresent()) return;
      if (!rfid.PICC_ReadCardSerial()) return;

      Serial.print("UID: ");
      for (byte i = 0; i < rfid.uid.size; i++) {
        Serial.print(rfid.uid.uidByte[i], HEX);
        Serial.print(" ");
      }
      Serial.println();
      delay(1000);
    }
  `),

  output:
    "RFID UID displayed and inventory updated.",

  useCase:
    "Warehouses, shops, asset tracking.",

  learningOutcome: [
    "RFID systems",
    "Industrial IoT basics"
  ]
},



];





const allProjects = [...baseProjects, ...generated];

export { allProjects as projects };
export const extendedProjects = allProjects;

// Basics content (Expanded & Detailed)
export const beginnerExplanations = [
  {
    title: "Voltage, Current & Resistance",
    content: "The holy trinity of electronics (Ohm's Law). Voltage is the pressure pushing electrons, Current is the flow of electrons, and Resistance is the opposition to that flow. Understanding V=IR is crucial for not burning components.",
    deepDive: "High current needs thick wires. High voltage needs insulation.",
    mistakes: "Shorting Power to Ground (Infinite Current = Fire).",
    tip: "Always check polarity before powering up."
  },
  {
    title: "Microcontrollers (The Brain)",
    content: "A small computer on a single chip. It reads inputs (sensors), processes data based on your code, and controls outputs (lights, motors). Common examples: Arduino Uno, ESP32, STM32.",
    deepDive: "They run firmware (C/C++), not a full OS like Windows.",
    mistakes: "Drawing too much current from a GPIO pin (>20mA).",
    tip: "Use transistors/MOSFETs to drive high-power loads."
  },
  {
    title: "Digital vs Analog Signals",
    content: "Digital signals are binary (ON/OFF, 0V/5V), like a light switch. Analog signals are continuous (0V to 5V), like a dimmer knob. Microcontrollers live in a digital world but use ADCs (Analog-to-Digital Converters) to understand analog.",
    deepDive: "ADC Resolution (10-bit = 0-1023 values) determines precision.",
    mistakes: "Connecting 5V analog sensors to 3.3V ADC pins.",
    tip: "PWM (Pulse Width Modulation) fakes analog output using digital pulses."
  },
  {
    title: "Sensors (Inputs)",
    content: "Devices that convert physical world data (temp, light, motion) into electrical signals. They are the 'eyes and ears' of your IoT system. They can be active (require power) or passive (like LDRs).",
    deepDive: "Calibration is often needed for accurate real-world readings.",
    mistakes: "Ignoring sensor warm-up time (e.g., Gas sensors).",
    tip: "Check datasheets for response time and accuracy."
  },
  {
    title: "Actuators (Outputs)",
    content: "Devices that perform actions: moving motors, lighting LEDs, buzzing alarms. They convert electrical energy back into physical movement or light.",
    deepDive: "Inductive loads (motors/relays) generate voltage spikes when turned off.",
    mistakes: "Forgetting flyback diodes on motors/relays.",
    tip: "Isolate high-power actuators from sensitive MCUs."
  },
  {
    title: "Pull-up & Pull-down Resistors",
    content: "Resistors used to ensure a known state (HIGH or LOW) for a signal line when no other input is active. Without them, 'floating' pins pick up static noise and trigger randomly.",
    deepDive: "Internal pull-ups (INPUT_PULLUP) save wiring.",
    mistakes: "Leaving a button pin floating (unpredictable behavior).",
    tip: "10kΩ is the standard value for pull-up/down resistors."
  },
  {
    title: "UART (Serial Communication)",
    content: "Universal Asynchronous Receiver-Transmitter. The most common way for chips to talk. Uses two wires: TX (Transmit) and RX (Receive). Crucial for debugging via Serial Monitor.",
    deepDive: "Baud rate (e.g., 9600) must match on both sides.",
    mistakes: "Connecting TX to TX instead of TX to RX.",
    tip: "Grounds must be connected between communicating devices."
  },
  {
    title: "I2C Protocol",
    content: "Inter-Integrated Circuit. A bus protocol that allows multiple 'slave' devices (sensors, screens) to talk to a 'master' (Arduino) using just two wires: SDA (Data) and SCL (Clock).",
    deepDive: "Each device has a unique Hex address (e.g., 0x27).",
    mistakes: "Missing pull-up resistors on SDA/SCL lines.",
    tip: "Use an I2C Scanner sketch to find device addresses."
  },
  {
    title: "SPI Protocol",
    content: "Serial Peripheral Interface. Faster than I2C, used for SD cards and displays. Uses 4 wires: MOSI (Master Out), MISO (Master In), SCK (Clock), and CS (Chip Select).",
    deepDive: "Full-duplex: can send and receive simultaneously.",
    mistakes: "Confusing MOSI/MISO connections.",
    tip: "Cable length matters; SPI degrades over long wires."
  },
  {
    title: "Power Scaling (3.3V vs 5V)",
    content: "Different chips run on different logic levels. Arduino is typically 5V, while modern chips like ESP32/ESP8266 are 3.3V. Mixing them without level shifters is dangerous.",
    deepDive: "Voltage Dividers can shift 5V signal down to 3.3V.",
    mistakes: "Connecting 5V logic to a 3.3V input pin (Boom).",
    tip: "Logic Level Converters are cheap insurance."
  }
];