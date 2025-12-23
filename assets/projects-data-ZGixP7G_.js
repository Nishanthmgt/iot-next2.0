const i=t=>t.replace(/^\s{12}/gm,"").trim(),p={Basics:{tech:["Arduino Uno","Electronics"],estimatedTime:"20 mins",concept:"Fundamental Circuitry",workingPrinciple:"Uses basic GPIO control or standard electronic components to achieve a functional output.",circuit:"Connect components to the primary digital/analog pins as indicated in the pinout mappings.",howToRun:"Set up the circuit on a breadboard, verify polarities, and upload the code using Arduino IDE.",output:"A physical response (light, sound, or movement) based on the project's logic.",advantages:["Simple to build","Educational","Low cost"],disadvantages:["Limited functionality"],extensions:["Add a second output","Integrate a sensor for automation"],mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},Sensors:{tech:["Arduino","Sensors"],estimatedTime:"35 mins",concept:"Data Acquisition",workingPrinciple:"Translates physical environmental data into electrical signals for the microcontroller to process.",circuit:"Ensure the sensor has proper power (5V or 3.3V) and the data pin is connected correctly.",howToRun:"Connect the sensor, upload the code, and open the Serial Monitor to see real-time data.",output:"Real-time measurements displayed on Serial Monitor or indicated by LEDs.",advantages:["High interactive value","Real-world utility"],disadvantages:["Requires calibration"],extensions:["Log data to SD card","Transmit data wirelessly"],mappings:{arduino:"Analog A0",esp32:"GPIO 34"}},IoT:{tech:["ESP32","WiFi","IoT"],estimatedTime:"60 mins",concept:"Connected Intelligence",workingPrinciple:"Uses wireless protocols (WiFi/Bluetooth) to monitor or control hardware from a remote dashboard.",circuit:"Focuses on minimal wiring with maximum software connectivity.",howToRun:"Configure WiFi credentials in the code, upload to ESP32, and access the provided IP address or Cloud portal.",output:"Digital dashboard showing sensor readings or interactive control buttons.",advantages:["Remote access","Data visualization"],disadvantages:["Requires internet connectivity","Security considerations"],extensions:["Add mobile notifications","Integrate with Google Assistant/Alexa"],mappings:{arduino:"N/A (Use ESP32)",esp32:"GPIO 4"}},Robotics:{tech:["Arduino","Servo","Motor Driver"],estimatedTime:"90 mins",concept:"Kinematic Control",workingPrinciple:"Converts electrical energy into mechanical motion using actuators like servos or DC motors.",circuit:"Requires external power for motors; isolation between microcontroller and high-current components is critical.",howToRun:"Assemble the mechanical frame, wire the motors to the driver, and upload the movement logic.",output:"Physical movement (rotation, translation, or complex arm coordination).",advantages:["High complexity","Impressive output"],disadvantages:["High power consumption","Mechanical wear"],extensions:["Add obstacle avoidance","Implement remote control via App"],mappings:{arduino:"Pin 9 (PWM)",esp32:"GPIO 18"}},Security:{tech:["Arduino","Keypad/RFID","Buzzer"],estimatedTime:"45 mins",concept:"Access Control",workingPrinciple:"Verifies user identity through inputs like passwords or unique IDs before triggering an action.",circuit:"Connect the input module (RFID/Keypad) and the feedback module (Buzzer/Lock).",howToRun:"Define your access code in the sketch, wire the modules, and test with valid/invalid inputs.",output:"System unlocks or sounds alarm based on verification result.",advantages:["Practical utility","Safety focused"],disadvantages:["Vulnerable to logical bypass if not encrypted"],extensions:["Add fingerprint sensor","Integrate log of entry attempts"],mappings:{arduino:"Pin 10 (SS)",esp32:"GPIO 5"}},AI:{tech:["ESP32-CAM","Edge AI","Computer Vision"],estimatedTime:"120 mins",concept:"Edge Intelligence",workingPrinciple:"Runs machine learning models locally on the microcontroller to recognize objects, sounds, or patterns.",circuit:"Usually internal to complex modules like ESP32-CAM.",howToRun:"Flash the firmware with the trained model and view the inference results via Web interface.",output:"Detection labels and confidence scores for recognized patterns.",advantages:["Latest technology","No server needed"],disadvantages:["Limited processing power","Complex setup"],extensions:["Identify specific faces","Trigger IFTTT on detection"],mappings:{arduino:"Not Recommended",esp32:"Internal Cam Pinout"}}},g=["LED Blink using Arduino","LED Fade using PWM","Push Button LED Control","Traffic Light System","Buzzer Control using Arduino","Digital Dice using LEDs","RGB LED Color Mixer","Automatic Night Lamp","LDR Light Intensity Monitor","Fire Alarm using Buzzer","Temperature Display using LCD","Smart Door Bell","Clap Switch","Obstacle Detection using IR Sensor","Touch Sensor Lamp","Gas Leakage Alert System","Rain Detection Alarm","Ultrasonic Distance Measurement","Water Level Indicator","Automatic Water Pump","Digital Thermometer","Password Protected Door Lock","Motion Detector Alarm","Smart Dustbin","Soil Moisture Monitor","Automatic Street Light","Line Following Robot","IR Remote Controlled LED","Keypad Based Security System","Speed Control of DC Motor","Temperature Alert System","Servo Motor Control","Automatic Hand Sanitizer","Smart Fan Controller","Electronic Voting Machine","Smart Parking Indicator","Door Open Alert","Light Control using Bluetooth","Voice Controlled LED","Smart Bell with Mobile Alert","Digital Clock using Arduino","Smart Switch Board","Fire Detection System","Gas Level Indicator","Automatic Plant Watering","Visitor Counter","Smart Alarm Clock","Home Light Automation (Basic)","Smart Power Saver","Smart Door Alert System","Distance Based Alarm","Smart Bicycle Indicator","Temperature Logger","Smart Classroom Bell","Automatic Garage Door","Sound Level Monitor","Smart Dustbin Lid","Smart Blind Stick","Water Overflow Alarm","Motion Activated Light","Smart Fan Speed Controller","Automatic Window Opener","Smart Toilet Flush","Smart Washroom Light","Smart Locker System","Smart Mirror Display (Basic)","Smart Attendance System (Basic)","Smart Pet Feeder","Smart Plant Monitor","Digital Compass","Smart Key Finder","Home Security Alarm","Smart Door Knock Detector","Light Intensity Logger","Smart Emergency Button","Smart Door Mat","Temperature Based Fan","Smart Entry System","Automatic Gate Opener","Smart Lamp Controller"],m=["WiFi LED Control using ESP32","Smart Home Automation","Smart Energy Meter","IoT Based Weather Station","Smart Irrigation System","Smart Door Lock using RFID","Smart Attendance System","IoT Gas Leakage Monitoring","Smart Parking System","Smart Street Lighting","IoT Fire Alert System","Smart Water Level Monitoring","Smart Refrigerator Monitor","Smart Room Automation","Smart Health Monitoring System","Smart Greenhouse Monitoring","Smart Traffic Management","IoT Based Air Quality Monitor","Smart Waste Management","Smart Vehicle Tracking","Smart Water Quality Monitoring","IoT Based Flood Alert","Smart Security Camera System","Smart Lift Control","Smart Classroom Automation","Smart Power Monitoring","Smart Energy Saving System","Smart Inventory Management","Smart Cold Storage Monitor","Smart Weather Alert System","Smart Pollution Monitoring","Smart Home Voice Control","Smart Smartwatch Prototype","Smart Factory Monitoring","Smart Water Billing System","Smart Firefighting Robot","Smart Railway Gate Control","Smart Public Announcement System","Smart Vehicle Speed Monitor","Smart Toll Collection System","Smart Vending Machine","Smart ATM Security System","Smart Warehouse Monitoring","Smart Attendance using Face ID","Smart Access Control System","Smart Power Grid Monitor","Smart Smart Helmet","Smart Garbage Level Monitoring","Smart Bus Tracking System","Smart Fuel Monitoring","Smart Smart Mirror","Smart Library Management","Smart Classroom Attendance","Smart Doorbell with Camera","Smart Crop Monitoring","Smart Industrial Automation","Smart Fire Safety System","Smart IoT Dashboard","Smart IoT Data Logger","Smart Smart Lock System","Smart IoT Notification System","Smart Home Security System","Smart Vehicle Diagnostics","Smart IoT Alarm System","Smart Remote Monitoring","Smart Smart Energy System","Smart IoT Analytics","Smart IoT Health Dashboard","Smart Asset Tracking","Smart Smart City Module"],c=["Smart City Management System","AI Based Smart Surveillance","Smart Autonomous Vehicle","Smart Drone Control System","Smart Traffic Signal with AI","Smart Face Recognition Door","Smart Predictive Maintenance","Smart Smart Farming System","Smart Industrial IoT Platform","Smart Healthcare IoT System","Smart Smart Grid System","Smart Smart Home Hub","Smart AI Voice Assistant","Smart Smart Parking with AI","Smart Smart Energy Optimization","Smart Vehicle Accident Detection","Smart Fire Detection with AI","Smart AI Attendance System","Smart Smart Water Management","Smart Smart Waste Management","Smart Smart Security Platform","Smart Smart City Dashboard","Smart AI Traffic Control","Smart Smart Agriculture AI","Smart Smart Factory Automation","Smart Smart Hospital System","Smart Smart Campus Automation","Smart Smart Retail System","Smart Smart Power Management","Smart Smart Disaster Management","Smart Smart Environmental Monitor","Smart Smart Building Automation","Smart Smart Transportation System","Smart Smart Logistics System","Smart Smart Supply Chain","Smart Smart Industrial AI","Smart Smart Energy AI","Smart Smart Surveillance AI","Smart Smart Water AI","Smart Smart Waste AI","Smart Smart IoT Cloud Platform","Smart Smart Digital Twin","Smart Smart Edge AI System","Smart Smart Predictive AI","Smart Smart Robotics System","Smart Smart Autonomous Systems","Smart Smart Smart City AI","Smart Smart Future Home","Smart Smart AI Assistant","Smart Smart Next-Gen IoT Platform"],S=t=>{const e=t.toLowerCase();return e.includes("wifi")||e.includes("iot")||e.includes("bluetooth")||e.includes("remote")?"IoT":e.includes("robot")||e.includes("motor")||e.includes("servo")||e.includes("vehicle")?"Robotics":e.includes("ai")||e.includes("recognition")||e.includes("predictive")||e.includes("future")?"AI":e.includes("security")||e.includes("lock")||e.includes("alarm")||e.includes("alert")?"Security":e.includes("sensor")||e.includes("monitor")||e.includes("display")||e.includes("detector")?"Sensors":"Basics"},l=(t,e)=>t.map((n,s)=>{let r=1;e==="Intermediate"&&(r=81),e==="Advanced"&&(r=151);const u=r+s,d=S(n),o=p[d]||p.Basics;return{id:u,title:n,level:e,estimatedTime:o.estimatedTime,description:`Build a professional ${e.toLowerCase()} ${n.toLowerCase()} system for real-world applications.`,tech:o.tech,category:d,concept:o.concept,learning:[`Master the hardware integration for ${n}`,"Understand real-time signal processing","Implement efficient firmware logic","Introduction to modular system design"],workingPrinciple:o.workingPrinciple,circuit:o.circuit,pins:[{component:"Primary Control Pin",mappings:o.mappings},{component:"Ground Connection",mappings:{arduino:"GND",esp32:"GND"}},{component:"System VCC",mappings:{arduino:"5V",esp32:"3.3V"}}],code:i(`
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
          `),howToRun:o.howToRun,output:o.output,extensions:o.extensions,useCase:"Critical for smart infrastructure and personal automation.",advantages:o.advantages,disadvantages:o.disadvantages,parts:[{name:o.tech[0],buyLink:"https://robu.in"},{name:"Supporting Sensors",buyLink:"https://robu.in"}]}}),v=l(g,"Beginner"),T=l(m,"Intermediate"),I=l(c,"Advanced"),a={1:{pins:[{component:"LED Anode (+)",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},{component:"GND",mappings:{arduino:"GND",esp32:"GND"}}],code:i(`
            void setup() {
              pinMode(13, OUTPUT);
            }

            void loop() {
              digitalWrite(13, HIGH);
              delay(1000);
              digitalWrite(13, LOW);
              delay(1000);
            }
        `)},2:{pins:[{component:"LED Pin",mappings:{arduino:"Pin 9",esp32:"GPIO 2"}}],code:i(`
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
        `)},3:{pins:[{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}},{component:"Button",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}}],code:i(`
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
        `)},4:{pins:[{component:"Red LED",mappings:{arduino:"Pin 8",esp32:"GPIO 12"}},{component:"Yellow LED",mappings:{arduino:"Pin 9",esp32:"GPIO 14"}},{component:"Green LED",mappings:{arduino:"Pin 10",esp32:"GPIO 27"}}],code:i(`
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
        `)},5:{pins:[{component:"Buzzer",mappings:{arduino:"Pin 7",esp32:"GPIO 12"}}],code:i(`
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
        `)},6:{pins:[{component:"LEDs",mappings:{arduino:"Pins 2,3,4,5,6,7",esp32:"Multipin"}}],code:i(`
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
        `)},7:{pins:[{component:"Red",mappings:{arduino:"Pin 9",esp32:"GPIO 12"}},{component:"Green",mappings:{arduino:"Pin 10",esp32:"GPIO 14"}},{component:"Blue",mappings:{arduino:"Pin 11",esp32:"GPIO 27"}}],code:i(`
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
        `)},8:{pins:[{component:"LDR",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:i(`
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
        `)},9:{pins:[{component:"LDR",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:i(`
            int ldr = A0;

            void setup() {
              Serial.begin(9600);
            }

            void loop() {
              int value = analogRead(ldr);
              Serial.println(value);
              delay(500);
            }
        `)},10:{pins:[{component:"Flame Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"Buzzer",mappings:{arduino:"Pin 7",esp32:"GPIO 12"}}],code:i(`
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
        `)},11:{pins:[{component:"LCD & Sensor",mappings:{arduino:"Parallel Pinout",esp32:"N/A"}}],code:i(`
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
        `)},12:{pins:[{component:"Button",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"Buzzer",mappings:{arduino:"Pin 8",esp32:"GPIO 2"}}],code:i(`
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
        `)},14:{pins:[{component:"Sound Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:i(`
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
        `)},15:{pins:[{component:"Touch Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 4"}},{component:"LED",mappings:{arduino:"Pin 13",esp32:"GPIO 2"}}],code:i(`
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
        `)},16:{pins:[{component:"Gas Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:i(`
            int gas = A0;
            int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int value = analogRead(gas);
              if (value > 400) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},17:{pins:[{component:"Rain Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:i(`
            int rain = A0;
            int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int value = analogRead(rain);
              if (value < 500) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},18:{pins:[{component:"Trigger",mappings:{arduino:"Pin 9",esp32:"GPIO 5"}},{component:"Echo",mappings:{arduino:"Pin 10",esp32:"GPIO 18"}}],code:i(`
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
        `)},20:{pins:[{component:"Soil Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 32"}}],code:i(`
            int soil = A0;
            int relay = 8;
            void setup() { pinMode(relay, OUTPUT); }
            void loop() {
              int value = analogRead(soil);
              if (value < 400) digitalWrite(relay, HIGH);
              else digitalWrite(relay, LOW);
            }
        `)},21:{pins:[{component:"Temp Sensor",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:i(`
            int sensor = A0;
            void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(sensor);
              float temp = value * 0.488;
              Serial.print("Temperature: "); Serial.print(temp); Serial.println(" C");
              delay(1000);
            }
        `)},22:{pins:[{component:"Servo Lock",mappings:{arduino:"Pin 9",esp32:"GPIO 18"}}],code:i(`
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
        `)},24:{pins:[{component:"PIR Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}}],code:i(`
            int pir = 2;
            int buzzer = 8;
            void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `)},27:{pins:[{component:"Left IR",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}},{component:"Right IR",mappings:{arduino:"Pin 3",esp32:"GPIO 14"}}],code:i(`
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
        `)},28:{pins:[{component:"IR Receiver",mappings:{arduino:"Pin 2",esp32:"GPIO 15"}}],code:i(`
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
        `)},29:{pins:[{component:"Keypad",mappings:{arduino:"9,8,7,6 / 5,4,3,2",esp32:"N/A"}}],code:i(`
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
        `)},32:{pins:[{component:"Servo",mappings:{arduino:"Pin 9",esp32:"GPIO 18"}}],code:i(`
            #include <Servo.h>
            Servo myServo;
            void setup() { myServo.attach(9); }
            void loop() {
              myServo.write(0); delay(1000);
              myServo.write(90); delay(1000);
              myServo.write(180); delay(1000);
            }
        `)},33:{pins:[{component:"IR Sensor",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}}],code:i(`
            #include <Servo.h>
            Servo pump; int ir = 2;
            void setup() { pinMode(ir, INPUT); pump.attach(9); }
            void loop() {
              if (digitalRead(ir) == LOW) { pump.write(90); delay(500); pump.write(0); delay(1000); }
            }
        `)},35:{pins:[{component:"Vote A",mappings:{arduino:"Pin 2",esp32:"GPIO 13"}},{component:"Vote B",mappings:{arduino:"Pin 3",esp32:"GPIO 14"}}],code:i(`
            int voteA = 2; int voteB = 3;
            int countA = 0; int countB = 0;
            void setup() { pinMode(voteA, INPUT); pinMode(voteB, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(voteA) == HIGH) { countA++; delay(300); }
              if (digitalRead(voteB) == HIGH) { countB++; delay(300); }
              Serial.print("A: "); Serial.print(countA); Serial.print("  B: "); Serial.println(countB);
            }
        `)},38:{pins:[{component:"Bluetooth",mappings:{arduino:"Serial",esp32:"Serial"}}],code:i(`
            char data; int led = 13;
            void setup() { Serial.begin(9600); pinMode(led, OUTPUT); }
            void loop() {
              if (Serial.available()) {
                data = Serial.read();
                if (data == '1') digitalWrite(led, HIGH);
                if (data == '0') digitalWrite(led, LOW);
              }
            }
        `)},41:{pins:[{component:"RTC DS3231",mappings:{arduino:"I2C A4/A5",esp32:"I2C 21/22"}}],code:i(`
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
        `)},51:{pins:[{component:"Trig",mappings:{arduino:"Pin 9",esp32:"GPIO 5"}},{component:"Echo",mappings:{arduino:"Pin 10",esp32:"GPIO 18"}},{component:"Buzzer",mappings:{arduino:"Pin 8",esp32:"GPIO 2"}}],code:i(`
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
        `)},61:{pins:[{component:"Fan Motor",mappings:{arduino:"Pin 9",esp32:"GPIO 12"}},{component:"Potentiometer",mappings:{arduino:"Analog A0",esp32:"GPIO 34"}}],code:i(`
            int fan = 9; int pot = A0;
            void setup() { pinMode(fan, OUTPUT); }
            void loop() {
              int value = analogRead(pot);
              int speed = map(value, 0, 1023, 0, 255);
              analogWrite(fan, speed);
            }
        `)}},P={1:i(`
            void setup() { pinMode(13, OUTPUT); }
            void loop() {
              digitalWrite(13, HIGH); delay(1000);
              digitalWrite(13, LOW); delay(1000);
            }
        `),2:i(`
            void setup() { pinMode(9, OUTPUT); }
            void loop() {
              for (int i = 0; i <= 255; i++) { analogWrite(9, i); delay(10); }
              for (int i = 255; i >= 0; i--) { analogWrite(9, i); delay(10); }
            }
        `),3:i(`
            int btn = 2; int led = 13;
            void setup() { pinMode(btn, INPUT); pinMode(led, OUTPUT); }
            void loop() { digitalWrite(led, digitalRead(btn)); }
        `),4:i(`
            int r = 13, y = 12, g = 11;
            void setup() { pinMode(r, OUTPUT); pinMode(y, OUTPUT); pinMode(g, OUTPUT); }
            void loop() {
              digitalWrite(r, HIGH); delay(5000); digitalWrite(r, LOW);
              digitalWrite(g, HIGH); delay(5000); digitalWrite(g, LOW);
              digitalWrite(y, HIGH); delay(2000); digitalWrite(y, LOW);
            }
        `),5:i(`
            int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              tone(buzzer, 1000); delay(500); noTone(buzzer); delay(500);
            }
        `),6:i(`
            int pins[] = {2,3,4,5,6,7};
            void setup() { for(int i=0; i<6; i++) pinMode(pins[i], OUTPUT); randomSeed(analogRead(0)); }
            void loop() {
              if (digitalRead(8) == HIGH) {
                for(int i=0; i<6; i++) digitalWrite(pins[i], LOW);
                int r = random(1, 7);
                for(int i=0; i<r; i++) digitalWrite(pins[i], HIGH);
                delay(1000);
              }
            }
        `),7:i(`
            int r=9, g=10, b=11;
            void setup() { pinMode(r, OUTPUT); pinMode(g, OUTPUT); pinMode(b, OUTPUT); }
            void loop() {
              analogWrite(r, 255); analogWrite(g, 0); analogWrite(b, 255); delay(1000);
              analogWrite(r, 0); analogWrite(g, 255); analogWrite(b, 255); delay(1000);
            }
        `),8:i(`
            int ldr = A0; int led = 13;
            void setup() { pinMode(led, OUTPUT); }
            void loop() { if (analogRead(ldr) < 500) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }
        `),9:i(`
            void setup() { Serial.begin(9600); }
            void loop() { Serial.print("Light Level: "); Serial.println(analogRead(A0)); delay(500); }
        `),10:i(`
            int fire = 2; int alarm = 8;
            void setup() { pinMode(fire, INPUT); pinMode(alarm, OUTPUT); }
            void loop() { if (digitalRead(fire) == LOW) digitalWrite(alarm, HIGH); else digitalWrite(alarm, LOW); }
        `),11:i(`
            #include <LiquidCrystal.h>
            LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
            void setup() { lcd.begin(16, 2); }
            void loop() { lcd.setCursor(0, 0); lcd.print("Temp: 25C"); delay(2000); }
        `),12:i(`
            int btn = 2; int buzzer = 13;
            void setup() { pinMode(btn, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() { if (digitalRead(btn) == HIGH) tone(buzzer, 500, 200); }
        `),13:i(`
            int button = 2; int buzzer = 8;
            void setup() { pinMode(button, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(button) == HIGH) {
                digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW);
              }
            }
        `),14:i(`
            int ir = 2; int led = 13;
            void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); }
            void loop() { if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW); }
        `),15:i(`
            int touch = 2; int lamp = 13;
            void setup() { pinMode(touch, INPUT); pinMode(lamp, OUTPUT); }
            void loop() { if (digitalRead(touch) == HIGH) digitalWrite(lamp, !digitalRead(lamp)); delay(500); }
        `),16:i(`
            int mq2 = A0; int alarm = 8;
            void setup() { pinMode(alarm, OUTPUT); }
            void loop() { if (analogRead(mq2) > 400) digitalWrite(alarm, HIGH); else digitalWrite(alarm, LOW); }
        `),17:i(`
            int sensor = A0; void setup() { Serial.begin(9600); }
            void loop() { if (analogRead(sensor) < 500) Serial.println("It's Raining!"); delay(1000); }
        `),18:i(`
            int t = 9, e = 10; void setup() { pinMode(t, OUTPUT); pinMode(e, INPUT); Serial.begin(9600); }
            void loop() {
              digitalWrite(t, LOW); delayMicroseconds(2); digitalWrite(t, HIGH); delayMicroseconds(10); digitalWrite(t, LOW);
              long d = pulseIn(e, HIGH) * 0.034 / 2; Serial.print("Distance: "); Serial.println(d); delay(500);
            }
        `),19:i(`
            int level = A0; int led = 13;
            void setup() { pinMode(led, OUTPUT); }
            void loop() {
              int value = analogRead(level);
              if (value > 500) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),20:i(`
            int sensor = 2; int pump = 8;
            void setup() { pinMode(sensor, INPUT); pinMode(pump, OUTPUT); }
            void loop() { if (digitalRead(sensor) == LOW) digitalWrite(pump, HIGH); else digitalWrite(pump, LOW); }
        `),21:i(`
            void setup() { Serial.begin(9600); }
            void loop() { float t = analogRead(A0) * 0.488; Serial.println(t); delay(1000); }
        `),22:i(`
            #include <Keypad.h>
            void setup() { Serial.begin(9600); }
            void loop() { /* Basic logic for Keypad */ }
        `),24:i(`
            int t = 9, e = 10;
            void setup() { pinMode(t, OUTPUT); pinMode(e, INPUT); }
            void loop() { /* Dustbin ultrasonic logic */ }
        `),23:i(`
            #include <Servo.h>
            Servo door; int button = 2;
            void setup() { pinMode(button, INPUT); door.attach(9); }
            void loop() {
              if (digitalRead(button) == HIGH) door.write(90); else door.write(0);
            }
        `),25:i(`
            int soil = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(soil);
              Serial.print("Soil Moisture: "); Serial.println(value);
              delay(1000);
            }
        `),26:i(`
            int ldr = A0; int led = 13;
            void setup() { pinMode(led, OUTPUT); }
            void loop() {
              int value = analogRead(ldr);
              if (value < 500) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),30:i(`
            int motor = 9; void setup() { pinMode(motor, OUTPUT); }
            void loop() {
              for (int speed = 0; speed <= 255; speed += 10) {
                analogWrite(motor, speed); delay(500);
              }
            }
        `),31:i(`
            int motor = 9; void setup() { pinMode(motor, OUTPUT); }
            void loop() {
              for (int speed = 0; speed <= 255; speed += 10) {
                analogWrite(motor, speed); delay(500);
              }
            }
        `),34:i(`
            int ir = 2; int pump = 8;
            void setup() { pinMode(ir, INPUT); pinMode(pump, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) { digitalWrite(pump, HIGH); delay(1000); digitalWrite(pump, LOW); }
            }
        `),36:i(`
            int ir = 2; int led = 13;
            void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),37:i(`
            int ir = 2; int led = 13;
            void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),39:i(`
            #include <WiFi.h>
            void setup() { Serial.begin(9600); WiFi.begin("SSID", "PASS"); }
            void loop() {
              if (Serial.available()) { char c = Serial.read(); Serial.print("Remote CMD: "); Serial.println(c); }
            }
        `),40:i(`
            int button = 2; void setup() { Serial.begin(9600); pinMode(button, INPUT); }
            void loop() {
              if (digitalRead(button) == HIGH) {
                Serial.println("Visitor at Door"); delay(1000);
              }
            }
        `),42:i(`
            int relay = 8; void setup() { pinMode(relay, OUTPUT); }
            void loop() {
              digitalWrite(relay, HIGH); delay(2000);
              digitalWrite(relay, LOW); delay(2000);
            }
        `),43:i(`
            int flame = 2; int buzzer = 8;
            void setup() { pinMode(flame, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(flame) == LOW) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
            }
        `),44:i(`
            int gas = A0; int led = 13; void setup() { pinMode(led, OUTPUT); }
            void loop() {
              int value = analogRead(gas);
              if (value > 400) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),45:i(`
            int soil = A0; int relay = 8; void setup() { pinMode(relay, OUTPUT); }
            void loop() {
              int value = analogRead(soil);
              if (value < 350) digitalWrite(relay, HIGH);
              else digitalWrite(relay, LOW);
            }
        `),46:i(`
            int ir1 = 2; int ir2 = 3; int count = 0;
            void setup() { pinMode(ir1, INPUT); pinMode(ir2, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(ir1) == LOW) { count++; delay(500); }
              if (digitalRead(ir2) == LOW) { count--; delay(500); }
              Serial.print("Visitors: "); Serial.println(count);
            }
        `),47:i(`
            int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(buzzer, HIGH); delay(1000);
              digitalWrite(buzzer, LOW); delay(1000);
            }
        `),48:i(`
            int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(buzzer, HIGH); delay(1000);
              digitalWrite(buzzer, LOW); delay(1000);
            }
        `),49:i(`
            int pir = 2; int appliance = 8;
            void setup() { pinMode(pir, INPUT); pinMode(appliance, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(appliance, HIGH);
              else digitalWrite(appliance, LOW);
            }
        `),50:i(`
            int reed = 2; int led = 13;
            void setup() { pinMode(reed, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(reed) == HIGH) digitalWrite(led, HIGH);
              else digitalWrite(led, LOW);
            }
        `),52:i(`
            int leftBtn = 2; int rightBtn = 3; int leftLED = 8; int rightLED = 9;
            void setup() { 
              pinMode(leftBtn, INPUT); pinMode(rightBtn, INPUT); 
              pinMode(leftLED, OUTPUT); pinMode(rightLED, OUTPUT); 
            }
            void loop() {
              if (digitalRead(leftBtn) == HIGH) { digitalWrite(leftLED, HIGH); delay(500); digitalWrite(leftLED, LOW); }
              if (digitalRead(rightBtn) == HIGH) { digitalWrite(rightLED, HIGH); delay(500); digitalWrite(rightLED, LOW); }
            }
        `),53:i(`
            int tempSensor = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(tempSensor); float temp = value * 0.488;
              Serial.println(temp); delay(1000);
            }
        `),54:i(`
            int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(buzzer, HIGH); delay(3000);
              digitalWrite(buzzer, LOW); delay(60000);
            }
        `),55:i(`
            #include <Servo.h>
            Servo door; int ir = 2;
            void setup() { pinMode(ir, INPUT); door.attach(9); }
            void loop() {
              if (digitalRead(ir) == LOW) door.write(90); else door.write(0);
            }
        `),56:i(`
            int sound = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int level = analogRead(sound); Serial.println(level);
              delay(500);
            }
        `),57:i(`
            #include <Servo.h>
            Servo lid; int trig = 9; int echo = 10;
            void setup() { lid.attach(6); pinMode(trig, OUTPUT); pinMode(echo, INPUT); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              long d = pulseIn(echo, HIGH); int distance = d * 0.034 / 2;
              if (distance < 15) lid.write(90); else lid.write(0);
              delay(400);
            }
        `),52:i(`
            int leftBtn = 2; int rightBtn = 3; int leftLED = 8; int rightLED = 9;
            void setup() { 
              pinMode(leftBtn, INPUT); pinMode(rightBtn, INPUT); 
              pinMode(leftLED, OUTPUT); pinMode(rightLED, OUTPUT); 
            }
            void loop() {
              if (digitalRead(leftBtn) == HIGH) { digitalWrite(leftLED, HIGH); delay(500); digitalWrite(leftLED, LOW); }
              if (digitalRead(rightBtn) == HIGH) { digitalWrite(rightLED, HIGH); delay(500); digitalWrite(rightLED, LOW); }
            }
        `),53:i(`
            int tempSensor = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(tempSensor); float temp = value * 0.488;
              Serial.println(temp); delay(1000);
            }
        `),54:i(`
            int buzzer = 8; void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(buzzer, HIGH); delay(3000);
              digitalWrite(buzzer, LOW); delay(60000);
            }
        `),55:i(`
            #include <Servo.h>
            Servo door; int ir = 2;
            void setup() { pinMode(ir, INPUT); door.attach(9); }
            void loop() {
              if (digitalRead(ir) == LOW) door.write(90); else door.write(0);
            }
        `),56:i(`
            int sound = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int level = analogRead(sound); Serial.println(level);
              delay(500);
            }
        `),58:i(`
            int trig = 9; int echo = 10; int buzzer = 8;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              long t = pulseIn(echo, HIGH); int dist = t * 0.034 / 2;
              if (dist < 50) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW);
            }
        `),59:i(`
            int waterSensor = A0; int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int level = analogRead(waterSensor);
              if (level > 600) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW);
            }
        `),60:i(`
            int pir = 2; int light = 13;
            void setup() { pinMode(pir, INPUT); pinMode(light, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(light, HIGH); else digitalWrite(light, LOW);
            }
        `),62:i(`
            int fan = 9; int pot = A0; void setup() { pinMode(fan, OUTPUT); }
            void loop() {
              int value = analogRead(pot);
              int speed = map(value, 0, 1023, 0, 255);
              analogWrite(fan, speed);
            }
        `),63:i(`
            int ir = 2; int relay = 8;
            void setup() { pinMode(ir, INPUT); pinMode(relay, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) { digitalWrite(relay, HIGH); delay(2000); digitalWrite(relay, LOW); }
            }
        `),64:i(`
            int ir = 2; int relay = 8;
            void setup() { pinMode(ir, INPUT); pinMode(relay, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) { digitalWrite(relay, HIGH); delay(2000); digitalWrite(relay, LOW); }
            }
        `),65:i(`
            #include <Servo.h>
            Servo locker; int button = 2;
            void setup() { pinMode(button, INPUT); locker.attach(9); locker.write(0); }
            void loop() {
              if (digitalRead(button) == HIGH) { locker.write(90); delay(3000); locker.write(0); }
            }
        `),66:i(`
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("Welcome to Smart Mirror"); delay(3000);
            }
        `),67:i(`
            int ir = 2; int count = 0;
            void setup() { pinMode(ir, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(ir) == LOW) { count++; Serial.println(count); delay(500); }
            }
        `),68:i(`
            #include <Servo.h>
            Servo feeder; void setup() { feeder.attach(9); }
            void loop() {
              feeder.write(90); delay(1000);
              feeder.write(0); delay(10000);
            }
        `),69:i(`
            int soil = A0; void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(soil); Serial.println(value);
              delay(1000);
            }
        `),70:i(`
            #include <Wire.h>
            void setup() { Wire.begin(); Serial.begin(9600); }
            void loop() {
              Serial.println("Heading: 120"); delay(1000);
            }
        `),71:i(`
            int button = 2; int buzzer = 8;
            void setup() { pinMode(button, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(button) == HIGH) { digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW); }
            }
        `),72:i(`
            int pir = 2; int buzzer = 8;
            void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW);
            }
        `),73:i(`
            int pir = 2; int buzzer = 8;
            void setup() { pinMode(pir, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(pir) == HIGH) digitalWrite(buzzer, HIGH); else digitalWrite(buzzer, LOW);
            }
        `),74:i(`
            int sound = A0; int buzzer = 8;
            void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              int value = analogRead(sound);
              if (value > 600) { digitalWrite(buzzer, HIGH); delay(500); digitalWrite(buzzer, LOW); }
            }
        `),75:i(`
            int button = 2; int led = 13;
            void setup() { pinMode(button, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(button) == HIGH) digitalWrite(led, HIGH);
            }
        `),76:i(`
            int pressure = 2; int buzzer = 8;
            void setup() { pinMode(pressure, INPUT); pinMode(buzzer, OUTPUT); }
            void loop() {
              if (digitalRead(pressure) == HIGH) { digitalWrite(buzzer, HIGH); delay(300); digitalWrite(buzzer, LOW); }
            }
        `),77:i(`
            int tempSensor = A0; int fan = 9;
            void setup() { pinMode(fan, OUTPUT); }
            void loop() {
              int value = analogRead(tempSensor); float temp = value * 0.488;
              if (temp > 30) digitalWrite(fan, HIGH); else digitalWrite(fan, LOW);
            }
        `),78:i(`
            int ir = 2; int led = 13;
            void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW);
            }
        `),79:i(`
            int ir = 2; int led = 13;
            void setup() { pinMode(ir, INPUT); pinMode(led, OUTPUT); }
            void loop() {
              if (digitalRead(ir) == LOW) digitalWrite(led, HIGH); else digitalWrite(led, LOW);
            }
        `),80:i(`
            int button = 2; int lamp = 13;
            void setup() { pinMode(button, INPUT); pinMode(lamp, OUTPUT); }
            void loop() {
              if (digitalRead(button) == HIGH) {
                digitalWrite(lamp, !digitalRead(lamp)); delay(300);
              }
            }
        `)},W={81:i(`
            #include <WiFi.h>
            #include <WebServer.h>
            const char* ssid = "YOUR_WIFI";
            const char* password = "YOUR_PASS";
            WebServer server(80); int led = 2;
            String htmlPage() { 
              return "<html><h2>IoTNEXT LED Control</h2><button onclick=\\"fetch('/on')\\">ON</button><button onclick=\\"fetch('/off')\\">OFF</button></html>"; 
            }
            void setup() { 
              pinMode(led, OUTPUT); WiFi.begin(ssid, password); 
              while (WiFi.status() != WL_CONNECTED) delay(500);
              server.on("/", [](){ server.send(200,"text/html",htmlPage()); });
              server.on("/on", [](){ digitalWrite(led, HIGH); server.send(200,"text/plain","ON"); });
              server.on("/off", [](){ digitalWrite(led, LOW); server.send(200,"text/plain","OFF"); });
              server.begin(); 
            }
            void loop() { server.handleClient(); }
        `),82:i(`
            int relay1 = 2; int relay2 = 4;
            void setup() { 
              Serial.begin(9600); pinMode(relay1, OUTPUT); pinMode(relay2, OUTPUT); 
            }
            void loop() {
              if (Serial.available()) {
                char cmd = Serial.read();
                if (cmd == 'A') digitalWrite(relay1, HIGH);
                if (cmd == 'a') digitalWrite(relay1, LOW);
                if (cmd == 'B') digitalWrite(relay2, HIGH);
                if (cmd == 'b') digitalWrite(relay2, LOW);
              }
            }
        `),83:i(`
            int pulsePin = 2; volatile int pulseCount = 0;
            void IRAM_ATTR pulse() { pulseCount++; }
            void setup() { 
              pinMode(pulsePin, INPUT); 
              attachInterrupt(digitalPinToInterrupt(pulsePin), pulse, RISING); 
              Serial.begin(9600); 
            }
            void loop() {
              float units = pulseCount * 0.001;
              Serial.print("Energy Units: "); Serial.println(units);
              delay(1000);
            }
        `),84:i(`
            #include <DHT.h>
            #define DHTPIN 4
            #define DHTTYPE DHT11
            DHT dht(DHTPIN, DHTTYPE);
            void setup() { Serial.begin(9600); dht.begin(); }
            void loop() {
              float t = dht.readTemperature(); float h = dht.readHumidity();
              Serial.print("Temp:"); Serial.print(t); Serial.print("C | Humidity:"); Serial.println(h);
              delay(2000);
            }
        `),85:i(`
            #include <DHT.h>
            #define DHTPIN 4
            #define DHTTYPE DHT11
            DHT dht(DHTPIN, DHTTYPE);
            void setup() { Serial.begin(9600); dht.begin(); }
            void loop() {
              float t = dht.readTemperature();
              Serial.print("Temp:"); Serial.println(t);
              delay(2000);
            }
        `),86:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS_PIN 5
            #define RST_PIN 22
            MFRC522 rfid(SS_PIN, RST_PIN);
            void setup() { SPI.begin(); rfid.PCD_Init(); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) 
                Serial.println("RFID Detected");
            }
        `),87:i(`
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("Student ID: 101 | Attendance Marked"); delay(3000);
            }
        `),88:i(`
            int gas = 34; int buzzer = 2;
            void setup() { pinMode(buzzer, OUTPUT); Serial.begin(9600); }
            void loop() {
              int value = analogRead(gas);
              if (value > 2500) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
              delay(500);
            }
        `),89:i(`
            int trig = 5; int echo = 18;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); Serial.begin(9600); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              int dist = pulseIn(echo, HIGH) * 0.034 / 2;
              if (dist < 10) Serial.println("Slot Occupied");
              else Serial.println("Slot Free");
              delay(1000);
            }
        `),90:i(`
            int ldr = 34; int light = 2; void setup() { pinMode(light, OUTPUT); }
            void loop() {
              int value = analogRead(ldr);
              digitalWrite(light, value < 2000 ? HIGH : LOW);
              delay(500);
            }
        `),91:i(`
            int flame = 34; int buzzer = 2;
            void setup() { pinMode(buzzer, OUTPUT); Serial.begin(9600); }
            void loop() {
              int fire = analogRead(flame);
              if (fire < 1500) { digitalWrite(buzzer, HIGH); Serial.println("FIRE DETECTED"); }
              else digitalWrite(buzzer, LOW);
              delay(500);
            }
        `),92:i(`
            int level = 34; void setup() { Serial.begin(9600); }
            void loop() {
              int value = analogRead(level);
              if (value < 1200) Serial.println("Water Level: LOW");
              else if (value < 2500) Serial.println("Water Level: MEDIUM");
              else Serial.println("Water Level: HIGH");
              delay(1000);
            }
        `),93:i(`
            int tempSensor = 34; void setup() { Serial.begin(9600); }
            void loop() {
              float temp = analogRead(tempSensor) * 0.488;
              if (temp > 8) Serial.println("⚠️ Cooling Problem!");
              delay(2000);
            }
        `),94:i(`
            int tempSensor = 34; void setup() { Serial.begin(9600); }
            void loop() {
              float temp = analogRead(tempSensor) * 0.488;
              if (temp > 8) Serial.println("⚠️ Cooling Problem!");
              delay(2000);
            }
        `),95:i(`
            int pulseSensor = 34; void setup() { Serial.begin(9600); }
            void loop() {
              int bpm = analogRead(pulseSensor) / 10;
              Serial.print("Heart Rate: "); Serial.println(bpm);
              delay(1000);
            }
        `),96:i(`
            int soil = 34; int temp = 35; void setup() { Serial.begin(9600); }
            void loop() {
              Serial.print("Soil: "); Serial.print(analogRead(soil));
              Serial.print(" | Temp: "); Serial.println(analogRead(temp) * 0.488);
              delay(2000);
            }
        `),97:i(`
            int soil = 34; int temp = 35; void setup() { Serial.begin(9600); }
            void loop() {
              Serial.print("Soil: "); Serial.print(analogRead(soil));
              Serial.print(" | Temp: "); Serial.println(analogRead(temp) * 0.488);
              delay(2000);
            }
        `),98:i(`
            int gas = 34; void setup() { Serial.begin(9600); }
            void loop() {
              int aqi = analogRead(gas);
              if (aqi > 2500) Serial.println("⚠️ Air Pollution Alert");
              delay(1000);
            }
        `),99:i(`
            int trig = 5; int echo = 18;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); Serial.begin(9600); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2);
              digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              int dist = pulseIn(echo, HIGH) * 0.034 / 2;
              if (dist < 10) Serial.println("🗑️ Bin FULL");
              else Serial.println("Bin OK");
              delay(1500);
            }
        `),100:i(`
            #include <TinyGPSPlus.h>
            #include <HardwareSerial.h>
            TinyGPSPlus gps; HardwareSerial gpsSerial(1);
            void setup() { Serial.begin(9600); gpsSerial.begin(9600, SERIAL_8N1, 16, 17); }
            void loop() {
              while (gpsSerial.available()) gps.encode(gpsSerial.read());
              if (gps.location.isUpdated()) Serial.println(gps.location.lat(), 6);
            }
        `),101:i(`
            int phPin = 34;
            void setup() { Serial.begin(9600); }
            void loop() {
              float pH = analogRead(phPin) * (3.3 / 4095.0) * 3.5;
              if (pH < 6.5 || pH > 8.5) Serial.println("⚠️ Water NOT Safe");
              delay(2000);
            }
        `),102:i(`
            int waterSensor = 34; int buzzer = 2;
            void setup() { pinMode(buzzer, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (analogRead(waterSensor) > 3000) digitalWrite(buzzer, HIGH);
              else digitalWrite(buzzer, LOW);
              delay(1000);
            }
        `),103:i(`
            int pir = 13;
            void setup() { pinMode(pir, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(pir) == HIGH) Serial.println("Motion Detected → Capture Image");
            }
        `),104:i(`
            #include "HX711.h"
            HX711 scale; #define DT 4 #define SCK 5
            void setup() { 
              Serial.begin(9600); scale.begin(DT, SCK); 
              scale.set_scale(2280.f); scale.tare(); 
            }
            void loop() {
              float weight = scale.get_units();
              if (weight > 500) Serial.println("⚠️ Overload");
              delay(1000);
            }
        `),105:i(`
            int ir = 2; int count = 0; int fan = 5; int light = 18;
            void setup() { pinMode(ir, INPUT); pinMode(fan, OUTPUT); pinMode(light, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(ir) == LOW) { count++; delay(500); }
              if (count > 0) { digitalWrite(fan, HIGH); digitalWrite(light, HIGH); }
              else { digitalWrite(fan, LOW); digitalWrite(light, LOW); }
            }
        `),106:i(`
            int power = 34; void setup() { Serial.begin(9600); }
            void loop() {
              float v = analogRead(power) * (3.3/4095.0) * 11.0;
              Serial.print("Voltage: "); Serial.println(v); delay(1000);
            }
        `),107:i(`
            int pir = 13; int light = 2; void setup() { pinMode(light, OUTPUT); }
            void loop() {
              digitalWrite(light, digitalRead(pir)); delay(1000);
            }
        `),108:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS 5 #define RST 22
            MFRC522 rfid(SS, RST); int itemCount = 0;
            void setup() { SPI.begin(); rfid.PCD_Init(); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
                itemCount++; Serial.println(itemCount);
              }
            }
        `),109:i(`
            int rain = 34; int wind = 35; 
            void setup() { Serial.begin(9600); }
            void loop() {
              if (analogRead(rain) < 1500 && analogRead(wind) > 2500) Serial.println("⚠️ Storm Warning");
              delay(2000);
            }
        `),110:i(`
            int gas = 34; int dust = 35;
            void setup() { Serial.begin(9600); }
            void loop() {
              if (analogRead(gas) > 2500 || analogRead(dust) > 2500) Serial.println("🚨 Pollution Level HIGH");
              delay(1500);
            }
        `),111:i(`
            int mq135 = 34;
            void setup() { Serial.begin(9600); }
            void loop() {
              int val = analogRead(mq135);
              if (val < 1500) Serial.println("AQI: GOOD");
              else if (val < 2500) Serial.println("AQI: MODERATE");
              else Serial.println("AQI: UNHEALTHY");
              delay(2000);
            }
        `),112:i(`
            int relay = 2; char command;
            void setup() { Serial.begin(9600); pinMode(relay, OUTPUT); }
            void loop() {
              if (Serial.available()) {
                command = Serial.read();
                if (command == 'O') digitalWrite(relay, HIGH);
                else if (command == 'F') digitalWrite(relay, LOW);
              }
            }
        `),113:i(`
            int heart = 34; int temp = 35;
            void setup() { Serial.begin(9600); }
            void loop() {
              int bpm = analogRead(heart) / 10;
              float bodyTemp = analogRead(temp) * 0.488;
              Serial.print("BPM: "); Serial.print(bpm);
              Serial.print(" | Temp: "); Serial.println(bodyTemp);
              delay(1000);
            }
        `),114:i(`
            int heart = 34; int temp = 35;
            void setup() { Serial.begin(9600); }
            void loop() {
              int bpm = analogRead(heart) / 10;
              float bodyTemp = analogRead(temp) * 0.488;
              Serial.print("BPM: "); Serial.print(bpm);
              Serial.print(" | Temp: "); Serial.println(bodyTemp);
              delay(1000);
            }
        `),115:i(`
            volatile int pulses = 0; void IRAM_ATTR countPulse() { pulses++; }
            void setup() { pinMode(2, INPUT); attachInterrupt(digitalPinToInterrupt(2), countPulse, RISING); Serial.begin(9600); }
            void loop() {
              Serial.print("Water Used (L): "); Serial.println(pulses * 0.1);
              pulses = 0; delay(1000);
            }
        `),116:i(`
            int flame = 34; int motor = 5;
            void setup() { pinMode(motor, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (analogRead(flame) < 1500) { digitalWrite(motor, HIGH); Serial.println("🤖 Moving to Fire"); }
              else digitalWrite(motor, LOW);
            }
        `),117:i(`
            int ir = 2; int gate = 5;
            void setup() { pinMode(ir, INPUT); pinMode(gate, OUTPUT); }
            void loop() {
              digitalWrite(gate, digitalRead(ir) == LOW ? LOW : HIGH);
            }
        `),118:i(`
            int pir = 2; void setup() { pinMode(pir, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(pir)) Serial.println("📢 Announcement Triggered");
            }
        `),119:i(`
            int ir1 = 2; int ir2 = 3; unsigned long t1, t2;
            void setup() { pinMode(ir1, INPUT); pinMode(ir2, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(ir1) == LOW) t1 = millis();
              if (digitalRead(ir2) == LOW) { t2 = millis(); Serial.println(1.0 / ((t2 - t1) / 1000.0)); }
            }
        `),120:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS 5 #define RST 22
            MFRC522 rfid(SS, RST); int gate = 2;
            void setup() { SPI.begin(); rfid.PCD_Init(); pinMode(gate, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
                digitalWrite(gate, HIGH); delay(3000); digitalWrite(gate, LOW);
              }
            }
        `),121:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS 5 #define RST 22
            MFRC522 rfid(SS, RST);
            void setup() { SPI.begin(); rfid.PCD_Init(); pinMode(18, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
                digitalWrite(18, HIGH); delay(2000); digitalWrite(18, LOW);
              }
            }
        `),122:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS 5 #define RST 22
            MFRC522 rfid(SS, RST);
            void setup() { SPI.begin(); rfid.PCD_Init(); pinMode(18, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
                digitalWrite(18, HIGH); delay(2000); digitalWrite(18, LOW);
              }
            }
        `),123:i(`
            #include <DHT.h>
            #define DHTPIN 4 #define DHTTYPE DHT22
            DHT dht(DHTPIN, DHTTYPE);
            void setup() { Serial.begin(9600); dht.begin(); }
            void loop() {
              float t = dht.readTemperature();
              if (t > 35) Serial.println("⚠️ Warehouse Alert");
              delay(2000);
            }
        `),124:i(`
            int pir = 13; void setup() { pinMode(pir, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(pir)) Serial.println("Face Capture Triggered");
            }
        `),125:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            #define SS 5 #define RST 22
            MFRC522 rfid(SS, RST);
            void setup() { SPI.begin(); rfid.PCD_Init(); pinMode(2, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
                digitalWrite(2, HIGH); delay(3000); digitalWrite(2, LOW);
              }
            }
        `),126:i(`
            int vPin = 34; void setup() { Serial.begin(9600); }
            void loop() {
              float v = analogRead(vPin) * (3.3/4095.0) * 11;
              if (v < 180 || v > 260) Serial.println("⚠️ Voltage Abnormal");
              delay(1000);
            }
        `),127:i(`
            int alcohol = 34; int relay = 2;
            void setup() { pinMode(relay, OUTPUT); Serial.begin(9600); }
            void loop() {
              if (analogRead(alcohol) > 2000) {
                digitalWrite(relay, LOW); Serial.println("Alcohol Detected");
              } else digitalWrite(relay, HIGH);
              delay(500);
            }
        `),128:i(`
            int trig = 5; int echo = 18;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); Serial.begin(9600); }
            void loop() {
              int dist = pulseIn(echo, HIGH) * 0.034 / 2;
              Serial.print("Garbage Level: "); Serial.println(dist);
              delay(1500);
            }
        `),129:i(`
            #include <TinyGPSPlus.h>
            #include <HardwareSerial.h>
            TinyGPSPlus gps; HardwareSerial gpsSerial(1);
            void setup() { Serial.begin(9600); gpsSerial.begin(9600, SERIAL_8N1, 16, 17); }
            void loop() {
              while (gpsSerial.available()) gps.encode(gpsSerial.read());
              if (gps.location.isUpdated()) Serial.println(gps.location.lat(), 6);
            }
        `),130:i(`
            int trig = 5; int echo = 18;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); Serial.begin(9600); }
            void loop() {
              int dist = pulseIn(echo, HIGH)*0.034/2;
              Serial.println(map(dist, 30, 5, 0, 100));
              delay(1500);
            }
        `),131:i(`
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("Mirror Active: Current Temp 24C");
              delay(5000);
            }
        `),132:i(`
            #include <SPI.h>
            #include <MFRC522.h>
            MFRC522 rfid(5, 22);
            void setup() { Serial.begin(9600); SPI.begin(); rfid.PCD_Init(); }
            void loop() {
              if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) Serial.println("Book Issued");
            }
        `),133:i(`
            int ir = 13; int count = 0;
            void setup() { pinMode(ir, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(ir) == LOW) { count++; Serial.print("Students: "); Serial.println(count); delay(500); }
            }
        `),134:i(`
            int button = 4; void setup() { pinMode(button, INPUT); Serial.begin(9600); }
            void loop() {
              if (digitalRead(button) == HIGH) Serial.println("PING: Request Camera Feed");
            }
        `),135:i(`
            int moisture = 34; void setup() { Serial.begin(9600); }
            void loop() {
              int val = analogRead(moisture);
              if (val < 1500) Serial.println("Status: Soil Healthy");
              else Serial.println("Status: Irrigation Needed");
              delay(2000);
            }
        `),136:i(`
            int stopBtn = 4; int relay = 5;
            void setup() { pinMode(stopBtn, INPUT); pinMode(relay, OUTPUT); digitalWrite(relay, HIGH); }
            void loop() {
              if (digitalRead(stopBtn) == HIGH) digitalWrite(relay, LOW); 
            }
        `),137:i(`
            int flame = 34; int alarm = 2;
            void setup() { pinMode(alarm, OUTPUT); }
            void loop() {
              if (analogRead(flame) < 1000) digitalWrite(alarm, HIGH);
              else digitalWrite(alarm, LOW);
            }
        `),138:i(`
            #include <WiFi.h>
            void setup() { Serial.begin(9600); WiFi.begin("SSID", "PASS"); }
            void loop() {
              if (WiFi.status() == WL_CONNECTED) Serial.println("Dashboard: Data Syncing...");
              delay(10000);
            }
        `),139:i(`
            int val = 34; void setup() { Serial.begin(9600); }
            void loop() {
              Serial.print("DATA_LOG:"); Serial.println(analogRead(val));
              delay(1000);
            }
        `),140:i(`
            int relay = 5; void setup() { pinMode(relay, OUTPUT); }
            void loop() {
              // Simulated Remote Lock Control
            }
        `),141:i(`
            int trig = 5; int echo = 18;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); Serial.begin(9600); }
            void loop() {
              int dist = pulseIn(echo, HIGH)*0.034/2;
              Serial.println(map(dist, 30, 5, 0, 100));
              delay(1500);
            }
        `),141:i(`
            int pir = 2; int door = 3; int alarm = 5;
            void setup() { pinMode(alarm, OUTPUT); }
            void loop() {
              digitalWrite(alarm, digitalRead(pir) || digitalRead(door) ? HIGH : LOW);
            }
        `),142:i(`
            int pir = 13; void setup() { Serial.begin(9600); }
            void loop() {
              if (digitalRead(pir)) Serial.println("SECURITY_ALERT: Intrusion");
            }
        `),143:i(`
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("STATUS_OK: Engine Temperature 85C");
              delay(5000);
            }
        `),144:i(`
            int buzzer = 2; void setup() { pinMode(buzzer, OUTPUT); }
            void loop() {
              // Simulating IoT Alarm Trigger
            }
        `),145:i(`
            int l = 34; int r = 5;
            void setup() { pinMode(r, OUTPUT); }
            void loop() {
              digitalWrite(r, analogRead(l) > 3000 ? LOW : HIGH);
            }
        `),146:i(`
            int meter = 34; void setup() { Serial.begin(9600); }
            void loop() {
              Serial.print("POWER_USAGE:"); Serial.println(analogRead(meter));
              delay(2000);
            }
        `),147:i(`
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("ANALYSIS: Predict 5% Energy Increase");
              delay(30000);
            }
        `),148:i(`
            int heart = 34; void setup() { Serial.begin(9600); }
            void loop() {
              Serial.print("HEART_RATE:"); Serial.println(analogRead(heart)/10);
              delay(1000);
            }
        `),149:i(`
            #include <TinyGPSPlus.h>
            void setup() { Serial.begin(9600); }
            void loop() {
              Serial.println("TRACKING: Lat 12.97, Lon 77.59");
              delay(5000);
            }
        `),150:i(`
            int traffic = 34; int l = 5;
            void setup() { pinMode(l, OUTPUT); }
            void loop() {
              digitalWrite(l, analogRead(traffic) > 2500 ? HIGH : LOW);
            }
        `)},O={161:{pins:[{component:"Load Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Non-Critical Relay",mappings:{arduino:"N/A",esp32:"GPIO 5"}}],code:i(`
            #include <WiFi.h>
            #include <PubSubClient.h>
            #define LOAD_SENSOR 34
            #define NON_CRITICAL_RELAY 5
            WiFiClient espClient; PubSubClient client(espClient);
            void setup() {
              pinMode(NON_CRITICAL_RELAY, OUTPUT);
              WiFi.begin("WIFI_SSID", "PASS");
              client.setServer("broker.hivemq.com", 1883);
            }
            void loop() {
              if (analogRead(LOAD_SENSOR) > 3000) {
                digitalWrite(NON_CRITICAL_RELAY, LOW); 
                client.publish("grid/alert", "OVERLOAD");
              } else digitalWrite(NON_CRITICAL_RELAY, HIGH);
              delay(1000);
            }
        `)},162:{pins:[{component:"Vibration Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Alert Relay",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            #define VIB_SENSOR 34
            #define ALERT_RELAY 2
            int faultCount = 0;
            void setup() { pinMode(ALERT_RELAY, OUTPUT); }
            void loop() {
              int vibration = analogRead(VIB_SENSOR);
              if (vibration > 2800) faultCount++; else faultCount = 0;
              digitalWrite(ALERT_RELAY, faultCount >= 5 ? HIGH : LOW);
              delay(500);
            }
        `)},163:{pins:[{component:"Motion (PIR) Pin",mappings:{arduino:"N/A",esp32:"GPIO 13"}},{component:"Siren/Alarm",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            #define MOTION_PIN 13
            #define SIREN 2
            bool intrusion = false; unsigned long triggerTime = 0;
            void setup() { pinMode(MOTION_PIN, INPUT); pinMode(SIREN, OUTPUT); }
            void loop() {
              if (digitalRead(MOTION_PIN)) {
                if (!intrusion) { intrusion = true; triggerTime = millis(); }
              }
              if (intrusion && millis() - triggerTime > 2000) digitalWrite(SIREN, HIGH);
              if (!digitalRead(MOTION_PIN)) { intrusion = false; digitalWrite(SIREN, LOW); }
            }
        `)},164:{pins:[{component:"Density Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Green LED",mappings:{arduino:"N/A",esp32:"GPIO 18"}},{component:"Red LED",mappings:{arduino:"N/A",esp32:"GPIO 5"}}],code:i(`
            #define DENSITY_SENSOR 34
            #define RED 5
            #define GREEN 18
            void setup() { pinMode(RED, OUTPUT); pinMode(GREEN, OUTPUT); }
            void loop() {
              int density = analogRead(DENSITY_SENSOR);
              if (density > 2500) { digitalWrite(GREEN, HIGH); digitalWrite(RED, LOW); }
              else { digitalWrite(GREEN, LOW); digitalWrite(RED, HIGH); }
              delay(500);
            }
        `)},165:{pins:[{component:"Heart Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Body Temp",mappings:{arduino:"N/A",esp32:"GPIO 35"}},{component:"Emergency Trigger",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            #define HEART_SENSOR 34
            #define TEMP_SENSOR 35
            #define EMERGENCY_RELAY 2
            void setup() { pinMode(EMERGENCY_RELAY, OUTPUT); }
            void loop() {
              int bpm = analogRead(HEART_SENSOR) / 10;
              float temp = analogRead(TEMP_SENSOR) * 0.488;
              if ((bpm < 50 || bpm > 120) || temp > 38) digitalWrite(EMERGENCY_RELAY, HIGH);
              else digitalWrite(EMERGENCY_RELAY, LOW);
              delay(500);
            }
        `)},166:{pins:[{component:"MPU6050 (I2C)",mappings:{arduino:"A4/A5",esp32:"GPIO 21/22"}},{component:"Emergency Relay",mappings:{arduino:"N/A",esp32:"GPIO 5"}}],code:i(`
            #include <Wire.h>
            #include <MPU6050.h>
            MPU6050 mpu; int alert = 5;
            void setup() { Wire.begin(); mpu.initialize(); pinMode(alert, OUTPUT); }
            void loop() {
              int impact = abs(mpu.getAccelerationX()) + abs(mpu.getAccelerationY()) + abs(mpu.getAccelerationZ());
              if (impact > 40000) { digitalWrite(alert, HIGH); delay(5000); }
              else digitalWrite(alert, LOW);
            }
        `)},167:{pins:[{component:"Flame Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Smoke Sensor",mappings:{arduino:"N/A",esp32:"GPIO 35"}},{component:"Alarm Buzzer",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            int flame = 34; int smoke = 35; int alarm = 2;
            void setup() { pinMode(alarm, OUTPUT); }
            void loop() {
              if (analogRead(flame) < 1500 && analogRead(smoke) > 2500) digitalWrite(alarm, HIGH);
              else digitalWrite(alarm, LOW);
              delay(500);
            }
        `)},168:{pins:[{component:"Face Match Signal",mappings:{arduino:"N/A",esp32:"GPIO 13"}},{component:"Lock Relay",mappings:{arduino:"N/A",esp32:"GPIO 5"}}],code:i(`
            int facePin = 13; int relay = 5;
            void setup() { pinMode(facePin, INPUT); pinMode(relay, OUTPUT); }
            void loop() {
              if (digitalRead(facePin)) { digitalWrite(relay, HIGH); delay(1000); digitalWrite(relay, LOW); }
            }
        `)},169:{pins:[{component:"Face Match",mappings:{arduino:"N/A",esp32:"GPIO 13"}}],code:i(`
            int facePin = 13; int relay = 5;
            void setup() { pinMode(facePin, INPUT); pinMode(relay, OUTPUT); }
            void loop() {
              if (digitalRead(facePin)) { digitalWrite(relay, HIGH); delay(1000); digitalWrite(relay, LOW); }
            }
        `)},170:{pins:[{component:"Trig Pin",mappings:{arduino:"N/A",esp32:"GPIO 5"}},{component:"Echo Pin",mappings:{arduino:"N/A",esp32:"GPIO 18"}},{component:"Full Indicator",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            int trig = 5; int echo = 18; int fullRelay = 2;
            void setup() { pinMode(trig, OUTPUT); pinMode(echo, INPUT); pinMode(fullRelay, OUTPUT); }
            void loop() {
              digitalWrite(trig, LOW); delayMicroseconds(2); digitalWrite(trig, HIGH); delayMicroseconds(10);
              digitalWrite(trig, LOW);
              int dist = pulseIn(echo, HIGH) * 0.034 / 2;
              digitalWrite(fullRelay, dist < 8 ? HIGH : LOW);
              delay(1500);
            }
        `)},171:{pins:[{component:"Zone 1-3",mappings:{arduino:"N/A",esp32:"GPIO 2,3,4"}},{component:"Alarm Siren",mappings:{arduino:"N/A",esp32:"GPIO 5"}}],code:i(`
            #define ZONE1 2
            #define ZONE2 3
            #define ZONE3 4
            #define ALARM 5
            void setup() { pinMode(ZONE1, INPUT); pinMode(ZONE2, INPUT); pinMode(ZONE3, INPUT); pinMode(ALARM, OUTPUT); }
            void loop() {
              bool breach = digitalRead(ZONE1) || digitalRead(ZONE2) || digitalRead(ZONE3);
              digitalWrite(ALARM, breach ? HIGH : LOW);
            }
        `)},172:{pins:[{component:"Air Quality MQ135",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"Noise Sensor",mappings:{arduino:"N/A",esp32:"GPIO 35"}}],code:i(`
            #define AIR 34
            #define NOISE 35
            void setup() { Serial.begin(9600); }
            void loop() {
              int air = analogRead(AIR); int noise = analogRead(NOISE);
              if (air > 2500 || noise > 2500) {
                Serial.print("CITY_ALERT:"); Serial.print(air); Serial.print(","); Serial.println(noise);
              }
              delay(1000);
            }
        `)},173:{pins:[{component:"Pollution Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}}],code:i(`
            #define AIR 34
            #define NOISE 35
            void setup() { Serial.begin(9600); }
            void loop() {
              int air = analogRead(AIR); int noise = analogRead(NOISE);
              if (air > 2500 || noise > 2500) {
                Serial.print("CITY_ALERT:"); Serial.print(air); Serial.print(","); Serial.println(noise);
              }
              delay(1000);
            }
        `)},174:{pins:[{component:"Soil Moisture",mappings:{arduino:"N/A",esp32:"GPIO 34"}},{component:"LMT35 Temp",mappings:{arduino:"N/A",esp32:"GPIO 35"}},{component:"Stress Alert",mappings:{arduino:"N/A",esp32:"GPIO 2"}}],code:i(`
            #define SOIL 34
            #define TEMP 35
            #define ALERT 2
            void setup() { pinMode(ALERT, OUTPUT); }
            void loop() {
              int moisture = analogRead(SOIL); float temp = analogRead(TEMP) * 0.488;
              digitalWrite(ALERT, (moisture < 1800 && temp > 30) ? HIGH : LOW);
              delay(1500);
            }
        `)},175:{pins:[{component:"Crop Sensor",mappings:{arduino:"N/A",esp32:"GPIO 34"}}],code:i(`
            #define SOIL 34
            #define TEMP 35
            #define ALERT 2
            void setup() { pinMode(ALERT, OUTPUT); }
            void loop() {
              int moisture = analogRead(SOIL); float temp = analogRead(TEMP) * 0.488;
              digitalWrite(ALERT, (moisture < 1800 && temp > 30) ? HIGH : LOW);
              delay(1500);
            }
        `)}};[P,W,O].forEach(t=>{Object.keys(t).forEach(e=>{a[e]||(a[e]={}),typeof t[e]=="string"?a[e].code=i(t[e]):a[e]={...a[e],...t[e]}})});const f=[...v,...T,...I].map(t=>a[t.id]?{...t,...a[t.id]}:t),y=f,b=[{title:"Voltage, Current & Resistance",content:"The holy trinity of electronics (Ohm's Law). Voltage is the pressure pushing electrons, Current is the flow of electrons, and Resistance is the opposition to that flow.",deepDive:"High current needs thick wires. High voltage needs insulation.",mistakes:"Shorting Power to Ground (Infinite Current = Fire).",tip:"Always check polarity before powering up."},{title:"Microcontrollers (The Brain)",content:"A small computer on a single chip. It reads inputs (sensors), processes data based on your code, and controls outputs (lights, motors). Common examples: Arduino Uno, ESP32, STM32.",deepDive:"They run firmware (C/C++), not a full OS like Windows.",mistakes:"Drawing too much current from a GPIO pin (>20mA).",tip:"Use transistors/MOSFETs to drive high-power loads."}];export{b,y as p};
