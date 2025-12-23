const e=t=>t.replace(/^\s{12}/gm,"").trim(),s={Basics:{tech:["Arduino Uno","Electronics"],estimatedTime:"20 mins",concept:"Fundamental Circuitry",workingPrinciple:"Uses basic GPIO control or standard electronic components to achieve a functional output.",circuit:"Connect components to the primary digital/analog pins as indicated in the pinout mappings.",howToRun:"Set up the circuit on a breadboard, verify polarities, and upload the code using Arduino IDE.",output:"A physical response (light, sound, or movement) based on the project's logic.",advantages:["Simple to build","Educational","Low cost"],disadvantages:["Limited functionality"],extensions:["Add a second output","Integrate a sensor for automation"],mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},Sensors:{tech:["Arduino","Sensors"],estimatedTime:"35 mins",concept:"Data Acquisition",workingPrinciple:"Translates physical environmental data into electrical signals for the microcontroller to process.",circuit:"Ensure the sensor has proper power (5V or 3.3V) and the data pin is connected correctly.",howToRun:"Connect the sensor, upload the code, and open the Serial Monitor to see real-time data.",output:"Real-time measurements displayed on Serial Monitor or indicated by LEDs.",advantages:["High interactive value","Real-world utility"],disadvantages:["Requires calibration"],extensions:["Log data to SD card","Transmit data wirelessly"],mappings:{arduino:"Analog A0",esp32:"GPIO 34"}},IoT:{tech:["ESP32","WiFi","IoT"],estimatedTime:"60 mins",concept:"Connected Intelligence",workingPrinciple:"Uses wireless protocols (WiFi/Bluetooth) to monitor or control hardware from a remote dashboard.",circuit:"Focuses on minimal wiring with maximum software connectivity.",howToRun:"Configure WiFi credentials in the code, upload to ESP32, and access the provided IP address or Cloud portal.",output:"Digital dashboard showing sensor readings or interactive control buttons.",advantages:["Remote access","Data visualization"],disadvantages:["Requires internet connectivity","Security considerations"],extensions:["Add mobile notifications","Integrate with Google Assistant/Alexa"],mappings:{arduino:"N/A (Use ESP32)",esp32:"GPIO 4"}},Robotics:{tech:["Arduino","Servo","Motor Driver"],estimatedTime:"90 mins",concept:"Kinematic Control",workingPrinciple:"Converts electrical energy into mechanical motion using actuators like servos or DC motors.",circuit:"Requires external power for motors; isolation between microcontroller and high-current components is critical.",howToRun:"Assemble the mechanical frame, wire the motors to the driver, and upload the movement logic.",output:"Physical movement (rotation, translation, or complex arm coordination).",advantages:["High complexity","Impressive output"],disadvantages:["High power consumption","Mechanical wear"],extensions:["Add obstacle avoidance","Implement remote control via App"],mappings:{arduino:"Pin 9 (PWM)",esp32:"GPIO 18"}},Security:{tech:["Arduino","Keypad/RFID","Buzzer"],estimatedTime:"45 mins",concept:"Access Control",workingPrinciple:"Verifies user identity through inputs like passwords or unique IDs before triggering an action.",circuit:"Connect the input module (RFID/Keypad) and the feedback module (Buzzer/Lock).",howToRun:"Define your access code in the sketch, wire the modules, and test with valid/invalid inputs.",output:"System unlocks or sounds alarm based on verification result.",advantages:["Practical utility","Safety focused"],disadvantages:["Vulnerable to logical bypass if not encrypted"],extensions:["Add fingerprint sensor","Integrate log of entry attempts"],mappings:{arduino:"Pin 10 (SS)",esp32:"GPIO 5"}},AI:{tech:["ESP32-CAM","Edge AI","Computer Vision"],estimatedTime:"120 mins",concept:"Edge Intelligence",workingPrinciple:"Runs machine learning models locally on the microcontroller to recognize objects, sounds, or patterns.",circuit:"Usually internal to complex modules like ESP32-CAM.",howToRun:"Flash the firmware with the trained model and view the inference results via Web interface.",output:"Detection labels and confidence scores for recognized patterns.",advantages:["Latest technology","No server needed"],disadvantages:["Limited processing power","Complex setup"],extensions:["Identify specific faces","Trigger IFTTT on detection"],mappings:{arduino:"Not Recommended",esp32:"Internal Cam Pinout"}}},m=["LED Blink using Arduino","LED Fade using PWM","Push Button LED Control","Traffic Light System","Buzzer Control using Arduino","Digital Dice using LEDs","RGB LED Color Mixer","Automatic Night Lamp","LDR Light Intensity Monitor","Fire Alarm using Buzzer","Temperature Display using LCD","Smart Door Bell","Clap Switch","Obstacle Detection using IR Sensor","Touch Sensor Lamp","Gas Leakage Alert System","Rain Detection Alarm","Ultrasonic Distance Measurement","Water Level Indicator","Automatic Water Pump","Digital Thermometer","Password Protected Door Lock","Motion Detector Alarm","Smart Dustbin","Soil Moisture Monitor","Automatic Street Light","Line Following Robot","IR Remote Controlled LED","Keypad Based Security System","Speed Control of DC Motor","Temperature Alert System","Servo Motor Control","Automatic Hand Sanitizer","Smart Fan Controller","Electronic Voting Machine","Smart Parking Indicator","Door Open Alert","Light Control using Bluetooth","Voice Controlled LED","Smart Bell with Mobile Alert","Digital Clock using Arduino","Smart Switch Board","Fire Detection System","Gas Level Indicator","Automatic Plant Watering","Visitor Counter","Smart Alarm Clock","Home Light Automation (Basic)","Smart Power Saver","Smart Door Alert System","Distance Based Alarm","Smart Bicycle Indicator","Temperature Logger","Smart Classroom Bell","Automatic Garage Door","Sound Level Monitor","Smart Dustbin Lid","Smart Blind Stick","Water Overflow Alarm","Motion Activated Light","Smart Fan Speed Controller","Automatic Window Opener","Smart Toilet Flush","Smart Washroom Light","Smart Locker System","Smart Mirror Display (Basic)","Smart Attendance System (Basic)","Smart Pet Feeder","Smart Plant Monitor","Digital Compass","Smart Key Finder","Home Security Alarm","Smart Door Knock Detector","Light Intensity Logger","Smart Emergency Button","Smart Door Mat","Temperature Based Fan","Smart Entry System","Automatic Gate Opener","Smart Lamp Controller"],g=["WiFi LED Control using ESP32","Smart Home Automation","Smart Energy Meter","IoT Based Weather Station","Smart Irrigation System","Smart Door Lock using RFID","Smart Attendance System","IoT Gas Leakage Monitoring","Smart Parking System","Smart Street Lighting","IoT Fire Alert System","Smart Water Level Monitoring","Smart Refrigerator Monitor","Smart Room Automation","Smart Health Monitoring System","Smart Greenhouse Monitoring","Smart Traffic Management","IoT Air Quality Monitor","Smart Waste Management","Smart Vehicle Tracking","Smart Water Quality Monitoring","IoT Flood Alert System","Smart Security Camera","Smart Lift Control","Smart Classroom Automation","Smart Power Monitoring","Smart Energy Saving System","Smart Inventory Management","Smart Cold Storage Monitor","Smart Weather Alert System","Smart Pollution Monitoring","Smart Voice Controlled Home","Smart Wearable Prototype","Smart Factory Monitoring","Smart Water Billing System","Smart Firefighting Robot","Smart Railway Gate Control","Smart Public Announcement System","Smart Vehicle Speed Monitor","Smart Toll Collection System","Smart Vending Machine","Smart ATM Security System","Smart Warehouse Monitoring","Smart Face Attendance System","Smart Access Control System","Smart Power Grid Monitor","Smart Helmet System","Smart Garbage Level Monitor","Smart Bus Tracking System","Smart Fuel Monitoring","Smart Smart Mirror","Smart Library Management","Smart Classroom Attendance","Smart Video Doorbell","Smart Crop Monitoring","Smart Industrial Automation","Smart Fire Safety System","Smart IoT Dashboard","Smart IoT Data Logger","Smart Lock System","Smart Notification System","Smart Home Security","Smart Vehicle Diagnostics","Smart IoT Alarm","Smart Remote Monitoring","Smart Energy System","Smart IoT Analytics","Smart Health Dashboard","Smart Asset Tracking","Smart Smart City Module"],S=["Smart City Management System","AI Based Smart Surveillance","Autonomous Vehicle System","Smart Drone Control","AI Traffic Signal Control","Face Recognition Door System","Predictive Maintenance System","Smart Farming Platform","Industrial IoT Platform","Smart Healthcare System","Smart Grid Management","Smart Home Hub","AI Voice Assistant","AI Parking System","Energy Optimization System","Accident Detection System","AI Fire Detection","AI Attendance System","Water Management System","Waste Management System","Smart Security Platform","Smart City Dashboard","AI Traffic Control","AI Agriculture System","Smart Factory Automation","Smart Hospital System","Smart Campus Automation","Smart Retail System","Smart Power Management","Disaster Management System","Environmental Monitoring Platform","Smart Building Automation","Transportation Management System","Logistics Management System","Supply Chain System","Industrial AI System","Energy AI Platform","Surveillance AI System","Water AI System","Waste AI System","IoT Cloud Platform","Digital Twin System","Edge AI System","Predictive AI System","Robotics Automation System","Autonomous Systems Platform","AI Smart City","Future Smart Home","AI Personal Assistant","Next-Gen IoT Platform"],v=t=>{const i=t.toLowerCase();return i.includes("wifi")||i.includes("iot")||i.includes("bluetooth")||i.includes("remote")?"IoT":i.includes("robot")||i.includes("motor")||i.includes("servo")||i.includes("vehicle")?"Robotics":i.includes("ai")||i.includes("recognition")||i.includes("predictive")||i.includes("future")?"AI":i.includes("security")||i.includes("lock")||i.includes("alarm")||i.includes("alert")?"Security":i.includes("sensor")||i.includes("monitor")||i.includes("display")||i.includes("detector")?"Sensors":"Basics"},d=(t,i)=>t.map((n,u)=>{let r=1;i==="Intermediate"&&(r=81),i==="Advanced"&&(r=151);const c=r+u,l=v(n),o=s[l]||s.Basics;return{id:c,title:n,level:i,estimatedTime:o.estimatedTime,description:`Build a professional ${i.toLowerCase()} ${n.toLowerCase()} system for real-world applications.`,tech:o.tech,category:l,concept:o.concept,learning:[`Master the hardware integration for ${n}`,"Understand real-time signal processing","Implement efficient firmware logic","Introduction to modular system design"],workingPrinciple:o.workingPrinciple,circuit:o.circuit,pins:[{component:"Primary Control Pin",mappings:o.mappings},{component:"Ground Connection",mappings:{arduino:"GND",esp32:"GND"}},{component:"System VCC",mappings:{arduino:"5V",esp32:"3.3V"}}],code:e(`
              /* 
               * IoTnext Project: ${n}
               * Target: ${o.tech[0]}
               */
              
              void setup() {
                Serial.begin(9600);
                Serial.println("${n} Initialized");
                // Power on sequence and config
              }
              
              void loop() {
                // Logic for ${n} goes here
                // Read inputs -> Process -> Output Results
                delay(1000); 
              }
          `),howToRun:o.howToRun,output:o.output,extensions:o.extensions,useCase:"Critical for smart infrastructure and personal automation.",advantages:o.advantages,disadvantages:o.disadvantages,parts:[{name:o.tech[0],buyLink:"https://robu.in"},{name:"Supporting Sensors",buyLink:"https://robu.in"}]}}),y=d(m,"Beginner"),P=d(g,"Intermediate"),I=d(S,"Advanced"),a={1:{pins:[{component:"LED Anode (+)",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},{component:"GND",mappings:{arduino:"GND",esp32:"GND"}}],code:e(`
            void setup() {
              pinMode(13, OUTPUT);
            }

            void loop() {
              digitalWrite(13, HIGH);
              delay(1000);
              digitalWrite(13, LOW);
              delay(1000);
            }
        `)},2:{pins:[{component:"LED Pin",mappings:{arduino:"Pin 9",esp32:"GPIO 2"}}],code:e(`
            int ledPin = 9;

            void setup() {
              pinMode(ledPin, OUTPUT);
            }

            void loop() {
              for (int i = 0; i <= 255; i++) {
                analogWrite(ledPin, i);
                delay(10);
              }
              for (int i = 255; i >= 0; i--) {
                analogWrite(ledPin, i);
                delay(10);
              }
            }
        `)},3:{pins:[{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},{component:"Button",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}}],code:e(`
            int led = 13;
            int button = 2;

            void setup() {
              pinMode(led, OUTPUT);
              pinMode(button, INPUT);
            }

            void loop() {
              if (digitalRead(button) == HIGH) {
                digitalWrite(led, HIGH);
              } else {
                digitalWrite(led, LOW);
              }
            }
        `)},4:{pins:[{component:"Red LED",mappings:{arduino:"Pin 8",esp32:"GPIO 12"}},{component:"Yellow LED",mappings:{arduino:"Pin 9",esp32:"GPIO 14"}},{component:"Green LED",mappings:{arduino:"Pin 10",esp32:"GPIO 27"}}],code:e(`
            int red = 8;
            int yellow = 9;
            int green = 10;

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
        `)},5:{pins:[{component:"Buzzer",mappings:{arduino:"Pin 7",esp32:"GPIO 12"}}],code:e(`
            int buzzer = 7;

            void setup() {
              pinMode(buzzer, OUTPUT);
            }

            void loop() {
              digitalWrite(buzzer, HIGH);
              delay(1000);
              digitalWrite(buzzer, LOW);
              delay(1000);
            }
        `)},6:{pins:[{component:"LEDs",mappings:{arduino:"Pins 2,3,4,5,6,7",esp32:"Multipin"}}],code:e(`
            int leds[] = {2,3,4,5,6,7};

            void setup() {
              for(int i=0;i<6;i++){
                pinMode(leds[i], OUTPUT);
              }
              randomSeed(analogRead(0));
            }

            void loop() {
              int num = random(1,7);
              for(int i=0;i<6;i++){
                digitalWrite(leds[i], LOW);
              }
              digitalWrite(leds[num-1], HIGH);
              delay(2000);
            }
        `)},7:{pins:[{component:"Red",mappings:{arduino:"Pin 9",esp32:"GPIO 12"}},{component:"Green",mappings:{arduino:"Pin 10",esp32:"GPIO 14"}},{component:"Blue",mappings:{arduino:"Pin 11",esp32:"GPIO 27"}}],code:e(`
            int red = 9;
            int green = 10;
            int blue = 11;

            void setup() {
              pinMode(red, OUTPUT);
              pinMode(green, OUTPUT);
              pinMode(blue, OUTPUT);
            }

            void loop() {
              analogWrite(red, 255);
              analogWrite(green, 0);
              analogWrite(blue, 0);
              delay(1000);

              analogWrite(red, 0);
              analogWrite(green, 255);
              analogWrite(blue, 0);
              delay(1000);

              analogWrite(red, 0);
              analogWrite(green, 0);
              analogWrite(blue, 255);
              delay(1000);
            }
        `)},8:{pins:[{component:"LDR",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:e(`
            int ldr = A0;
            int led = 13;

            void setup() {
              pinMode(led, OUTPUT);
            }

            void loop() {
              int value = analogRead(ldr);
              if (value < 500) {
                digitalWrite(led, HIGH);
              } else {
                digitalWrite(led, LOW);
              }
            }
        `)},9:{pins:[{component:"LDR",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:e(`
            int ldr = A0;

            void setup() {
              Serial.begin(9600);
            }

            void loop() {
              int value = analogRead(ldr);
              Serial.println(value);
              delay(500);
            }
        `)},10:{pins:[{component:"Flame Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"Buzzer",mappings:{arduino:"Pin 7",esp32:"GPIO 12"}}],code:e(`
            int flame = 2;
            int buzzer = 7;

            void setup() {
              pinMode(flame, INPUT);
              pinMode(buzzer, OUTPUT);
            }

            void loop() {
              if (digitalRead(flame) == LOW) {
                digitalWrite(buzzer, HIGH);
              } else {
                digitalWrite(buzzer, LOW);
              }
            }
        `)},11:{pins:[{component:"LCD & Sensor",mappings:{arduino:"Parallel Pinout",esp32:"N/A"}}],code:e(`
            #include <LiquidCrystal.h>
            LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
            int sensor = A0;

            void setup() {
              lcd.begin(16, 2);
            }

            void loop() {
              int value = analogRead(sensor);
              float temp = value * 0.488;
              lcd.setCursor(0,0);
              lcd.print("Temp: ");
              lcd.print(temp);
              lcd.print(" C");
              delay(1000);
            }
        `)},12:{pins:[{component:"Button",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"Buzzer",mappings:{arduino:"Pin 8",esp32:"GPIO 2"}}],code:e(`
            int button = 2;
            int buzzer = 8;
            void setup() {
              pinMode(button, INPUT);
              pinMode(buzzer, OUTPUT);
            }
            void loop() {
              if (digitalRead(button) == HIGH) {
                digitalWrite(buzzer, HIGH);
                delay(500);
                digitalWrite(buzzer, LOW);
              }
            }
        `)},14:{pins:[{component:"Sound Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:e(`
            int sound = 2;
            int led = 13;
            void setup() {
              pinMode(sound, INPUT);
              pinMode(led, OUTPUT);
            }
            void loop() {
              if (digitalRead(sound) == HIGH) {
                digitalWrite(led, !digitalRead(led));
                delay(300);
              }
            }
        `)},15:{pins:[{component:"Touch Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:e(`
            int touch = 2;
            int led = 13;
            void setup() {
              pinMode(touch, INPUT);
              pinMode(led, OUTPUT);
            }
            void loop() {
              if (digitalRead(touch) == HIGH) {
                digitalWrite(led, !digitalRead(led));
                delay(300);
              }
            }
        `)},16:{pins:[{component:"Gas Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:e(`
            int gas = A0;
            int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int value = analogRead(gas);
              if (value > 400) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},17:{pins:[{component:"Rain Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:e(`
            int rain = A0;
            int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int value = analogRead(rain);
              if (value < 500) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},18:{pins:[{component:"Trigger",mappings:{arduino:"Pin 9",esp32:"GPIO 5"}},{component:"Echo",mappings:{arduino:"Pin 10",esp32:"GPIO 18"}}],code:e(`
            int trig = 9;
            int echo = 10;
            void setup() {
              Serial.begin(9600);
              pinMode(trig, OUTPUT);
              pinMode(echo, INPUT);
            }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              long duration = pulseIn(echo, HIGH);
              int distance = duration * 0.034 / 2;
              Serial.print("Distance: "); Serial.print(distance); Serial.println(" cm");
              delay(500);
            }
        `)},20:{pins:[{component:"Soil Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 32"}}],code:e(`
            int soil = A0;
            int relay = 8;
            void setup() { pinMode(relay, OUTPUT); }
            void loop() {
              int value = analogRead(soil);
              if (value < 400) digitalWrite(relay, HIGH);
              else digitalWrite(relay, LOW);
            }
        `)},21:{pins:[{component:"Temp Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:e(`
            int sensor = A0;
            void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(sensor);
              float temp = value * 0.488;
              Serial.print("Temperature: "); Serial.print(temp); Serial.println(" C");
              delay(1000);
            }
        `)},22:{pins:[{component:"Servo Lock",mappings:{arduino:"Pin 9",esp32:"GPIO 18"}}],code:e(`
            #include <Servo.h>
            Servo lock;
            String password = "1234";
            String input = "";
            void setup() {
              lock.attach(9); Serial.begin(9600); lock.write(0);
            }
            void loop() {
              if (Serial.available()) {
                char key = Serial.read();
                if (key == '\\n') {
                  if (input == password) { lock.write(90); delay(2000); lock.write(0); }
                  input = "";
                } else input += key;
              }
            }
        `)},24:{pins:[{component:"PIR Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}}],code:e(`
            int pir = 2;
            int buzzer = 8;
            void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},27:{pins:[{component:"Left IR",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}},{component:"Right IR",mappings:{arduino:"Pin 3",esp32:"GPIO 14"}}],code:e(`
            int leftIR = 2;
            int rightIR = 3;
            void setup() { pinMode(leftIR, INPUT); pinMode(rightIR, INPUT); }
            void loop() {
              int left = digitalRead(leftIR);
              int right = digitalRead(rightIR);
              if (left == LOW && right == LOW) { /* Forward */ }
              else if (left == LOW) { /* Left */ }
              else if (right == LOW) { /* Right */ }
              else { /* Stop */ }
            }
        `)},28:{pins:[{component:"IR Receiver",mappings:{arduino:"Pin 2",esp32:"GPIO 15"}}],code:e(`
            #include <IRremote.h>
            int receiver = 2;
            int led = 13;
            void setup() { IrReceiver.begin(receiver); pinMode(led, OUTPUT); }
            void loop() {
              if (IrReceiver.decode()) {
                digitalWrite(led, !digitalRead(led));
                IrReceiver.resume();
              }
            }
        `)},29:{pins:[{component:"Keypad",mappings:{arduino:"9,8,7,6 / 5,4,3,2",esp32:"N/A"}}],code:e(`
            #include <Keypad.h>
            const byte rows = 4; const byte cols = 4;
            char keys[rows][cols] = {{'1','2','3','A'},{'4','5','6','B'},{'7','8','9','C'},{'*','0','#','D'}};
            byte rowPins[rows] = {9,8,7,6}; byte colPins[cols] = {5,4,3,2};
            Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, rows, cols);
            String pass = "1234"; String input;
            void setup() { Serial.begin(9600); }
            void loop() {
              char key = keypad.getKey();
              if (key) {
                input += key;
                if (input.length() == 4) {
                  if (input == pass) Serial.println("Access Granted");
                  else Serial.println("Access Denied");
                  input = "";
                }
              }
            }
        `)},32:{pins:[{component:"Servo",mappings:{arduino:"Pin 9",esp32:"GPIO 18"}}],code:e(`
            #include <Servo.h>
            Servo myServo;
            void setup() { myServo.attach(9); }
            void loop() {
              myServo.write(0); delay(1000);
              myServo.write(90); delay(1000);
              myServo.write(180); delay(1000);
            }
        `)},33:{pins:[{component:"IR Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}}],code:e(`
            #include <Servo.h>
            Servo pump; int ir = 2;
            void setup() { pinMode(ir, INPUT); pump.attach(9); }
            void loop() {
              if (digitalRead(ir) == LOW) { pump.write(90); delay(500); pump.write(0); delay(1000); }
            }
        `)},35:{pins:[{component:"Vote A",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}},{component:"Vote B",mappings:{arduino:"Pin 3",esp32:"GPIO 14"}}],code:e(`
            int voteA = 2; int voteB = 3;
            int countA = 0; int countB = 0;
            void setup() { pinMode(voteA, INPUT); pinMode(voteB, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(voteA) == HIGH) { countA++; delay(300); }
              if (digitalRead(voteB) == HIGH) { countB++; delay(300); }
              Serial.print("A: "); Serial.print(countA); Serial.print("  B: "); Serial.println(countB);
            }
        `)},38:{pins:[{component:"Bluetooth",mappings:{arduino:"Serial",esp32:"Serial"}}],code:e(`
            char data; int led = 13;
            void setup() { Serial.begin(9600); pinMode(led, OUTPUT); }
            void loop() {
              if (Serial.available()) {
                data = Serial.read();
                if (data == '1') digitalWrite(led, HIGH);
                if (data == '0') digitalWrite(led, LOW);
              }
            }
        `)},41:{pins:[{component:"RTC DS3231",mappings:{arduino:"I2C A4/A5",esp32:"I2C 21/22"}}],code:e(`
            #include <Wire.h>
            #include <RTClib.h>
            RTC_DS3231 rtc;
            void setup() { Serial.begin(9600); rtc.begin(); }
            void loop() {
              DateTime now = rtc.now();
              Serial.print(now.hour()); Serial.print(":");
              Serial.print(now.minute()); Serial.print(":");
              Serial.println(now.second());
              delay(1000);
            }
        `)},51:{pins:[{component:"Trig",mappings:{arduino:"Pin 9",esp32:"GPIO 5"}},{component:"Echo",mappings:{arduino:"Pin 10",esp32:"GPIO 18"}},{component:"Buzzer",mappings:{arduino:"Pin 8",esp32:"GPIO 2"}}],code:e(`
            int trig = 9; int echo = 10; int buzzer = 8;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              long duration = pulseIn(echo, HIGH);
              int distance = duration * 0.034 / 2;
              if (distance < 20) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
              delay(300);
            }
        `)},61:{pins:[{component:"Fan Motor",mappings:{arduino:"Pin 9",esp32:"GPIO 12"}},{component:"Potentiometer",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:e(`
            int fan = 9; int pot = A0;
            void setup() { pinMode(fan, OUTPUT); }
            void loop() {
              int value = analogRead(pot);
              int speed = map(value, 0, 1023, 0, 255);
              analogWrite(fan, speed);
            }
        `)}},p={13:"int button = 2; int buzzer = 8; void setup() { pinMode(button, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(button) == HIGH) { digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW); } }",19:"int level = A0; int led = 13; void setup() { pinMode(led, OUTPUT); } void loop() { int value = analogRead(level); if (value > 500) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",23:"// Password lock (repeat) ...",25:'int soil = A0; void setup() { Serial.begin(9600); } void loop() { int value = analogRead(soil); Serial.print("Soil Moisture: "); Serial.println(value); delay(1000); }',26:"int ldr = A0; int led = 13; void setup() { pinMode(led, OUTPUT); } void loop() { int value = analogRead(ldr); if (value < 500) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",30:"int motor = 9; void setup() { pinMode(motor, OUTPUT); } void loop() { for (int speed = 0; speed <= 255; speed += 10) { analogWrite(motor, speed); delay(500); } }",31:"int motor = 9; void setup() { pinMode(motor, OUTPUT); } void loop() { for (int speed = 0; speed <= 255; speed += 10) { analogWrite(motor, speed); delay(500); } }",34:"// Sanitizer (repeat) ...",36:"int ir = 2; int led = 13; void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",37:"int ir = 2; int led = 13; void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",39:"// Bluetooth (repeat) ...",40:'int button = 2; void setup() { Serial.begin(9600); pinMode(button, INPUT); } void loop() { if (digitalRead(button) == HIGH) { Serial.println("Visitor at Door"); delay(1000); } }',42:"int relay = 8; void setup() { pinMode(relay, OUTPUT); } void loop() { digitalWrite(relay, HIGH); delay(2000); digitalWrite(relay, LOW); delay(2000); }",43:"int flame = 2; int buzzer = 8; void setup() { pinMode(flame, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(flame) == LOW) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW); }",44:"int gas = A0; int led = 13; void setup() { pinMode(led, OUTPUT); } void loop() { int value = analogRead(gas); if (value > 400) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",45:"int soil = A0; int relay = 8; void setup() { pinMode(relay, OUTPUT); } void loop() { int value = analogRead(soil); if (value < 350) digitalWrite(relay, HIGH); else digitalWrite(relay, LOW); }",46:'int ir1 = 2; int ir2 = 3; int count = 0; void setup() { pinMode(ir1, INPUT); pinMode(ir2, INPUT); Serial.begin(9600); } void loop() { if (digitalRead(ir1) == LOW) { count++; delay(500); } if (digitalRead(ir2) == LOW) { count--; delay(500); } Serial.print("Visitors: "); Serial.println(count); }',47:"int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); } void loop() { digitalWrite(buzzer, HIGH); delay(1000); digitalWrite(buzzer, LOW); delay(1000); }",48:"int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); } void loop() { digitalWrite(buzzer, HIGH); delay(1000); digitalWrite(buzzer, LOW); delay(1000); }",49:"int pir = 2; int appliance = 8; void setup() { pinMode(pir, INPUT); pinMode(appliance, OUTPUT); } void loop() { if (digitalRead(pir) == HIGH) digitalWrite(appliance, HIGH); else digitalWrite(appliance, LOW); }",50:"int reed = 2; int led = 13; void setup() { pinMode(reed, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(reed) == HIGH) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",52:"int leftBtn = 2; int rightBtn = 3; int leftLED = 8; int rightLED = 9; void setup() { pinMode(leftBtn, INPUT); pinMode(rightBtn, INPUT); pinMode(leftLED, OUTPUT); pinMode(rightLED, OUTPUT); } void loop() { if (digitalRead(leftBtn) == HIGH) { digitalWrite(leftLED, HIGH); delay(500); digitalWrite(leftLED, LOW); } if (digitalRead(rightBtn) == HIGH) { digitalWrite(rightLED, HIGH); delay(500); digitalWrite(rightLED, LOW); } }",53:"int tempSensor = A0; void setup() { Serial.begin(9600); } void loop() { int value = analogRead(tempSensor); float temp = value * 0.488; Serial.println(temp); delay(1000); }",54:"int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); } void loop() { digitalWrite(buzzer, HIGH); delay(3000); digitalWrite(buzzer, LOW); delay(60000); }",55:"#include <Servo.h> Servo door; int ir = 2; void setup() { pinMode(ir, INPUT); door.attach(9); } void loop() { if (digitalRead(ir) == LOW) door.write(90); else door.write(0); }",56:"int sound = A0; void setup() { Serial.begin(9600); } void loop() { int level = analogRead(sound); Serial.println(level); delay(500); }",57:"#include <Servo.h> Servo lid; int trig = 9; int echo = 10; void setup() { lid.attach(6); pinMode(trig, OUTPUT); pinMode(echo, INPUT); } void loop() { digitalWrite(trig, LOW); delayMicroseconds(2); digitalWrite(trig, HIGH); delayMicroseconds(10); digitalWrite(trig, LOW); long d = pulseIn(echo, HIGH); int distance = d * 0.034 / 2; if (distance < 15) lid.write(90); else lid.write(0); delay(400); }",58:"int trig = 9; int echo = 10; int buzzer = 8; void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); pinMode(buzzer, OUTPUT); } void loop() { digitalWrite(trig, LOW); delayMicroseconds(2); digitalWrite(trig, HIGH); delayMicroseconds(10); digitalWrite(trig, LOW); long t = pulseIn(echo, HIGH); int dist = t * 0.034 / 2; if (dist < 50) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW); }",59:"int waterSensor = A0; int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); } void loop() { int level = analogRead(waterSensor); if (level > 600) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW); }",60:"int pir = 2; int light = 13; void setup() { pinMode(pir, INPUT); pinMode(light, OUTPUT); } void loop() { if (digitalRead(pir) == HIGH) digitalWrite(light, HIGH); else digitalWrite(light, LOW); }",62:"int fan = 9; int pot = A0; void setup() { pinMode(fan, OUTPUT); } void loop() { int value = analogRead(pot); int speed = map(value, 0, 1023, 0, 255); analogWrite(fan, speed); }",63:"int ir = 2; int relay = 8; void setup() { pinMode(ir, INPUT); pinMode(relay, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) { digitalWrite(relay, HIGH); delay(2000); digitalWrite(relay, LOW); } }",64:"int ir = 2; int relay = 8; void setup() { pinMode(ir, INPUT); pinMode(relay, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) { digitalWrite(relay, HIGH); delay(2000); digitalWrite(relay, LOW); } }",65:"#include <Servo.h> Servo locker; int button = 2; void setup() { pinMode(button, INPUT); locker.attach(9); locker.write(0); } void loop() { if (digitalRead(button) == HIGH) { locker.write(90); delay(3000); locker.write(0); } }",66:'void setup() { Serial.begin(9600); } void loop() { Serial.println("Welcome to Smart Mirror"); delay(3000); }',67:"int ir = 2; int count = 0; void setup() { pinMode(ir, INPUT); Serial.begin(9600); } void loop() { if (digitalRead(ir) == LOW) { count++; Serial.println(count); delay(500); } }",68:"#include <Servo.h> Servo feeder; void setup() { feeder.attach(9); } void loop() { feeder.write(90); delay(1000); feeder.write(0); delay(10000); }",69:"int soil = A0; void setup() { Serial.begin(9600); } void loop() { int value = analogRead(soil); Serial.println(value); delay(1000); }",70:'#include <Wire.h> void setup() { Wire.begin(); Serial.begin(9600); } void loop() { Serial.println("Heading: 120"); delay(1000); }',71:"int button = 2; int buzzer = 8; void setup() { pinMode(button, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(button) == HIGH) { digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW); } }",72:"int pir = 2; int buzzer = 8; void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW); }",73:"int pir = 2; int buzzer = 8; void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW); }",74:"int sound = A0; int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); } void loop() { int value = analogRead(sound); if (value > 600) { digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW); } }",75:"int button = 2; int led = 13; void setup() { pinMode(button, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(button) == HIGH) digitalWrite(led, HIGH); }",76:"int pressure = 2; int buzzer = 8; void setup() { pinMode(pressure, INPUT); pinMode(buzzer, OUTPUT); } void loop() { if (digitalRead(pressure) == HIGH) { digitalWrite(buzzer, HIGH); delay(300); digitalWrite(buzzer, LOW); } }",77:"int tempSensor = A0; int fan = 9; void setup() { pinMode(fan, OUTPUT); } void loop() { int value = analogRead(tempSensor); float temp = value * 0.488; if (temp > 30) digitalWrite(fan, HIGH); else digitalWrite(fan, LOW); }",78:"int ir = 2; int led = 13; void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",79:"int ir = 2; int led = 13; void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); } void loop() { if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }",80:"int button = 2; int lamp = 13; void setup() { pinMode(button, INPUT); pinMode(lamp, OUTPUT); } void loop() { if (digitalRead(button) == HIGH) { digitalWrite(lamp, !digitalRead(lamp)); delay(300); } }"};Object.keys(p).forEach(t=>{a[t]||(a[t]={}),a[t].code=e(p[t])});const T=[...y,...P,...I].map(t=>a[t.id]?{...t,...a[t.id]}:t),W=T,h=[{title:"Voltage, Current & Resistance",content:"The holy trinity of electronics (Ohm's Law). Voltage is the pressure pushing electrons, Current is the flow of electrons, and Resistance is the opposition to that flow.",deepDive:"High current needs thick wires. High voltage needs insulation.",mistakes:"Shorting Power to Ground (Infinite Current = Fire).",tip:"Always check polarity before powering up."},{title:"Microcontrollers (The Brain)",content:"A small computer on a single chip. It reads inputs (sensors), processes data based on your code, and controls outputs (lights, motors). Common examples: Arduino Uno, ESP32, STM32.",deepDive:"They run firmware (C/C++), not a full OS like Windows.",mistakes:"Drawing too much current from a GPIO pin (>20mA).",tip:"Use transistors/MOSFETs to drive high-power loads."}];export{h as b,W as p};
