// Continuation of cProgrammingCourse.js - Add these levels to the existing file

export const additionalLevels = [
    {
        level: 7,
        title: "Practical IoT Programs",
        color: "#2563eb",
        description: "Real working code for common IoT applications",
        programs: [
            {
                name: "LED Blink (Register Level)",
                code: `// Bare metal LED blink - Arduino Uno
#define F_CPU 16000000UL
#include <avr/io.h>
#include <util/delay.h>

int main(void) {
    DDRB |= (1 << PB5);  // Pin 13 as output
    
    while(1) {
        PORTB |= (1 << PB5);   // LED ON
        _delay_ms(1000);
        PORTB &= ~(1 << PB5);  // LED OFF
        _delay_ms(1000);
    }
}`,
                explanation: "Direct register manipulation - 25x faster than digitalWrite()"
            },
            {
                name: "Button with Debouncing",
                code: `const int BUTTON_PIN = 2;
const int LED_PIN = 13;

bool lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void setup() {
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    bool reading = digitalRead(BUTTON_PIN);
    
    if (reading != lastButtonState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading == LOW) {
            digitalWrite(LED_PIN, HIGH);
        } else {
            digitalWrite(LED_PIN, LOW);
        }
    }
    
    lastButtonState = reading;
}`,
                explanation: "Prevents false triggers from mechanical switch bounce"
            },
            {
                name: "Temperature Sensor (LM35)",
                code: `const int SENSOR_PIN = A0;

void setup() {
    Serial.begin(9600);
}

void loop() {
    int rawValue = analogRead(SENSOR_PIN);
    float voltage = rawValue * (5.0 / 1023.0);
    float tempC = voltage * 100.0;
    float tempF = (tempC * 9.0 / 5.0) + 32.0;
    
    Serial.print("Temperature: ");
    Serial.print(tempC, 1);
    Serial.print("°C / ");
    Serial.print(tempF, 1);
    Serial.println("°F");
    
    delay(1000);
}`,
                explanation: "LM35 outputs 10mV per degree Celsius"
            },
            {
                name: "UART Data Logger",
                code: `struct SensorData {
    unsigned long timestamp;
    float temperature;
    float humidity;
    int lightLevel;
};

void sendData(SensorData data) {
    Serial.print(data.timestamp);
    Serial.print(",");
    Serial.print(data.temperature, 2);
    Serial.print(",");
    Serial.print(data.humidity, 2);
    Serial.print(",");
    Serial.println(data.lightLevel);
}

void loop() {
    SensorData reading;
    reading.timestamp = millis();
    reading.temperature = readTemp();
    reading.humidity = readHumidity();
    reading.lightLevel = analogRead(A0);
    
    sendData(reading);
    delay(5000);
}`,
                explanation: "CSV format for easy Excel/Python analysis"
            }
        ]
    },
    {
        level: 8,
        title: "Mini Projects",
        color: "#4f46e5",
        description: "Complete IoT projects from beginner to advanced",
        projects: [
            {
                difficulty: "Beginner",
                name: "Smart LED Controller",
                description: "Control LED brightness via serial commands",
                code: `const int LED_PIN = 9;  // PWM pin

void setup() {
    Serial.begin(9600);
    pinMode(LED_PIN, OUTPUT);
    Serial.println("LED Controller Ready");
    Serial.println("Commands: ON, OFF, BRIGHT:0-255");
}

void loop() {
    if (Serial.available()) {
        String cmd = Serial.readStringUntil('\\n');
        cmd.trim();
        
        if (cmd == "ON") {
            analogWrite(LED_PIN, 255);
            Serial.println("LED: ON");
        }
        else if (cmd == "OFF") {
            analogWrite(LED_PIN, 0);
            Serial.println("LED: OFF");
        }
        else if (cmd.startsWith("BRIGHT:")) {
            int brightness = cmd.substring(7).toInt();
            brightness = constrain(brightness, 0, 255);
            analogWrite(LED_PIN, brightness);
            Serial.print("Brightness: ");
            Serial.println(brightness);
        }
    }
}`,
                components: ["Arduino", "LED", "220Ω resistor", "USB cable"],
                learnings: ["Serial communication", "PWM control", "String parsing"]
            },
            {
                difficulty: "Intermediate",
                name: "Smart Street Light",
                description: "Auto ON/OFF based on ambient light with manual override",
                code: `const int LDR_PIN = A0;
const int LED_PIN = 9;
const int BUTTON_PIN = 2;

bool autoMode = true;
bool manualState = false;
int lightThreshold = 500;

void setup() {
    pinMode(LED_PIN, OUTPUT);
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    Serial.begin(9600);
}

void loop() {
    // Button toggles auto/manual mode
    if (digitalRead(BUTTON_PIN) == LOW) {
        delay(200);  // Simple debounce
        autoMode = !autoMode;
        manualState = !manualState;
        Serial.println(autoMode ? "AUTO MODE" : "MANUAL MODE");
    }
    
    if (autoMode) {
        int lightLevel = analogRead(LDR_PIN);
        if (lightLevel < lightThreshold) {
            digitalWrite(LED_PIN, HIGH);
        } else {
            digitalWrite(LED_PIN, LOW);
        }
    } else {
        digitalWrite(LED_PIN, manualState);
    }
    
    delay(100);
}`,
                components: ["Arduino", "LDR", "10kΩ resistor", "LED", "Button"],
                learnings: ["Sensor-based automation", "Mode switching", "Real-world IoT logic"]
            },
            {
                difficulty: "Advanced",
                name: "ESP32 IoT Monitoring System",
                description: "Multi-sensor data logger with WiFi and web dashboard",
                code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YourWiFi";
const char* password = "YourPassword";

WebServer server(80);

struct SensorData {
    float temperature;
    float humidity;
    int lightLevel;
    unsigned long timestamp;
} currentData;

void setup() {
    Serial.begin(115200);
    
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\\nConnected!");
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
    
    server.on("/", handleRoot);
    server.on("/data", handleData);
    server.begin();
}

void handleRoot() {
    String html = "<html><body>";
    html += "<h1>IoT Sensor Dashboard</h1>";
    html += "<p>Temperature: " + String(currentData.temperature) + "°C</p>";
    html += "<p>Humidity: " + String(currentData.humidity) + "%</p>";
    html += "<p>Light: " + String(currentData.lightLevel) + "</p>";
    html += "</body></html>";
    server.send(200, "text/html", html);
}

void handleData() {
    String json = "{";
    json += "\\"temp\\":" + String(currentData.temperature) + ",";
    json += "\\"hum\\":" + String(currentData.humidity) + ",";
    json += "\\"light\\":" + String(currentData.lightLevel);
    json += "}";
    server.send(200, "application/json", json);
}

void loop() {
    currentData.temperature = readTemperature();
    currentData.humidity = readHumidity();
    currentData.lightLevel = analogRead(34);
    currentData.timestamp = millis();
    
    server.handleClient();
}`,
                components: ["ESP32", "DHT22", "LDR", "WiFi network"],
                learnings: ["WiFi connectivity", "Web server", "JSON API", "Dashboard creation"]
            }
        ]
    },
    {
        level: 9,
        title: "Interview & Exam Preparation",
        color: "#7c3aed",
        description: "Top questions for embedded C and IoT roles",
        questions: [
            {
                category: "C Fundamentals",
                items: [
                    {
                        q: "What is the difference between malloc() and calloc()?",
                        a: "malloc() allocates uninitialized memory. calloc() allocates and initializes to zero. calloc() takes two arguments (count, size), malloc() takes one (total size)."
                    },
                    {
                        q: "Explain static keyword in C",
                        a: "Static has 3 uses: 1) Static local variable retains value between function calls. 2) Static global variable limits scope to current file. 3) Static function limits visibility to current file."
                    },
                    {
                        q: "What is a dangling pointer?",
                        a: "A pointer that points to memory that has been freed or deallocated. Accessing it causes undefined behavior. Fix: Set pointer to NULL after free()."
                    }
                ]
            },
            {
                category: "Embedded C",
                items: [
                    {
                        q: "Why use volatile keyword?",
                        a: "Prevents compiler optimization for variables that can change unexpectedly (hardware registers, interrupt flags, shared variables). Tells compiler to always read from memory, not cache."
                    },
                    {
                        q: "What is ISR? Rules for writing ISR?",
                        a: "Interrupt Service Routine - function executed when interrupt occurs. Rules: 1) Keep it SHORT, 2) No blocking functions (delay, Serial.print), 3) Use volatile for shared variables, 4) No malloc/free."
                    },
                    {
                        q: "Difference between #define and const?",
                        a: "#define is preprocessor macro (text replacement, no type checking). const is typed constant (type-safe, debuggable). Use const for better code quality."
                    }
                ]
            },
            {
                category: "IoT Specific",
                items: [
                    {
                        q: "How to reduce power consumption in IoT devices?",
                        a: "1) Use deep sleep modes, 2) Disable unused peripherals, 3) Lower clock frequency, 4) Use interrupts instead of polling, 5) Optimize sensor reading frequency."
                    },
                    {
                        q: "Explain I2C vs SPI",
                        a: "I2C: 2 wires (SDA, SCL), slower, multi-master, 127 devices, good for sensors. SPI: 4 wires (MOSI, MISO, SCK, CS), faster, single master, separate CS per device, good for displays/SD cards."
                    },
                    {
                        q: "What is MQTT? Why use it for IoT?",
                        a: "Message Queue Telemetry Transport - lightweight pub/sub protocol. Benefits: Low bandwidth, works on unreliable networks, QoS levels, ideal for battery-powered devices."
                    }
                ]
            }
        ],
        mcqs: [
            {
                q: "Size of int on a 16-bit microcontroller?",
                options: ["1 byte", "2 bytes", "4 bytes", "Depends on compiler"],
                correct: 1,
                explanation: "On 16-bit MCUs (like AVR), int is 2 bytes. On 32-bit (ESP32), it's 4 bytes."
            },
            {
                q: "Which is fastest for GPIO control?",
                options: ["digitalWrite()", "Direct register", "pinMode()", "analogWrite()"],
                correct: 1,
                explanation: "Direct register manipulation is ~25x faster than digitalWrite()."
            }
        ],
        commonMistakes: [
            "Not initializing pointers before use",
            "Using delay() instead of millis() for timing",
            "Forgetting to set pinMode() before using pin",
            "Integer division truncation (5/2 = 2, not 2.5)",
            "Buffer overflow in arrays",
            "Not using volatile for interrupt-modified variables"
        ]
    },
    {
        level: 10,
        title: "Learning Path & Career Roadmap",
        color: "#9333ea",
        description: "Your journey from C to professional IoT engineer",
        roadmap: {
            afterC: [
                {
                    topic: "Arduino Framework",
                    duration: "2-3 weeks",
                    skills: ["Arduino libraries", "Sensor interfacing", "Serial communication", "Basic projects"],
                    resources: ["Arduino official docs", "IoTnext projects", "YouTube tutorials"]
                },
                {
                    topic: "ESP32 Development",
                    duration: "1-2 months",
                    skills: ["WiFi/BLE", "FreeRTOS basics", "Web server", "MQTT", "Cloud integration"],
                    resources: ["ESP-IDF documentation", "Random Nerd Tutorials", "IoTnext ESP32 projects"]
                },
                {
                    topic: "Communication Protocols",
                    duration: "2-3 weeks",
                    skills: ["I2C mastery", "SPI advanced", "UART/RS485", "Modbus", "CAN bus"],
                    resources: ["Protocol datasheets", "Oscilloscope practice", "Real hardware debugging"]
                },
                {
                    topic: "RTOS (Real-Time OS)",
                    duration: "1-2 months",
                    skills: ["Task scheduling", "Semaphores", "Queues", "Priority management", "FreeRTOS"],
                    resources: ["FreeRTOS book", "ESP32 RTOS examples", "STM32 RTOS projects"]
                },
                {
                    topic: "PCB Design",
                    duration: "1 month",
                    skills: ["Schematic design", "PCB layout", "Component selection", "Manufacturing"],
                    resources: ["KiCad tutorials", "EasyEDA", "JLCPCB assembly"]
                },
                {
                    topic: "Cloud & Backend",
                    duration: "1-2 months",
                    skills: ["AWS IoT Core", "Azure IoT Hub", "Node-RED", "InfluxDB", "Grafana"],
                    resources: ["Cloud provider docs", "IoT dashboards", "Data visualization"]
                }
            ],
            careerPaths: [
                {
                    role: "Embedded Systems Engineer",
                    requirements: ["C/C++ mastery", "MCU programming", "Hardware debugging", "RTOS"],
                    salary: "$70K-120K",
                    companies: ["Intel", "Qualcomm", "Texas Instruments", "NXP"]
                },
                {
                    role: "IoT Firmware Developer",
                    requirements: ["Embedded C", "Communication protocols", "Cloud integration", "Security"],
                    salary: "$80K-130K",
                    companies: ["Amazon", "Google", "Cisco", "Bosch"]
                },
                {
                    role: "Industrial Automation Engineer",
                    requirements: ["PLC programming", "Modbus/OPC UA", "SCADA", "Embedded systems"],
                    salary: "$75K-115K",
                    companies: ["Siemens", "ABB", "Rockwell", "Schneider Electric"]
                },
                {
                    role: "Hardware Engineer",
                    requirements: ["Circuit design", "PCB layout", "Embedded firmware", "Testing"],
                    salary: "$70K-110K",
                    companies: ["Apple", "Tesla", "SpaceX", "Hardware startups"]
                }
            ],
            certifications: [
                "Certified Embedded Systems Engineer (CESE)",
                "AWS Certified IoT Specialty",
                "Arm Accredited Engineer",
                "Certified LabVIEW Associate Developer"
            ],
            tips: [
                "Build a portfolio of 5-10 projects on GitHub",
                "Contribute to open-source IoT projects",
                "Document your learning journey (blog/YouTube)",
                "Participate in hackathons and maker fairs",
                "Network with IoT professionals on LinkedIn",
                "Stay updated with latest MCU releases and protocols"
            ]
        }
    }
];
