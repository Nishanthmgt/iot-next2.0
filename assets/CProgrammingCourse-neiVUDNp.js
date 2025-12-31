import{r as l,j as e,m as p,A as h}from"./vendor-framer-Dt7LSxLG.js";import{W as y,B as b,ah as v,r as S,T as x,ai as T}from"./vendor-icons-GY5OYOYQ.js";const o={courseTitle:"C Programming for IoT & Embedded Systems",description:"Master C programming from fundamentals to embedded IoT applications",levels:[{level:0,title:"C Programming for IoT (Prerequisites)",color:"#60a5fa",description:"Understanding why C is the language of choice for embedded systems and IoT",topics:[{name:"Why C for IoT?",desc:"Direct hardware control, minimal overhead, maximum efficiency",explanation:"C provides direct memory access and hardware control essential for resource-constrained IoT devices. Unlike high-level languages, C compiles to efficient machine code with predictable execution times.",iotRelevance:"ESP32, Arduino, STM32 all use C/C++ for firmware. Industry standard for embedded systems.",keyPoints:["Direct hardware register access","Minimal memory footprint (KB vs MB)","Deterministic execution timing","No garbage collection overhead"]},{name:"C vs C++ vs Python for IoT",desc:"Choosing the right language for your IoT project",explanation:"C: Bare metal control, fastest execution. C++: Object-oriented with Arduino libraries. Python: MicroPython for rapid prototyping but slower.",comparison:{C:{speed:"Fastest",memory:"Minimal",control:"Maximum",learning:"Moderate"},"C++":{speed:"Fast",memory:"Low",control:"High",learning:"Moderate"},Python:{speed:"Slow",memory:"High",control:"Limited",learning:"Easy"}},recommendation:"Use C for production IoT devices, C++ for Arduino projects, Python for prototyping."},{name:"Compilation Process for MCUs",desc:"From .c file to microcontroller firmware",explanation:"Source code → Preprocessor → Compiler → Assembler → Linker → HEX/BIN file → Flash memory",steps:["Preprocessing: Handles #include, #define","Compilation: Converts C to assembly","Assembly: Converts to machine code (.o files)","Linking: Combines object files into executable","Flashing: Uploads to microcontroller flash memory"],toolchain:"GCC for AVR (Arduino), Xtensa GCC (ESP32), ARM GCC (STM32)"},{name:"Memory Types in MCUs",desc:"Flash, RAM, EEPROM - where your code and data live",explanation:"Flash: Program storage (non-volatile). RAM: Runtime variables (volatile). EEPROM: Persistent data storage.",memoryMap:{Flash:"Code storage, read-only during execution, 32KB-4MB typical",SRAM:"Variables, stack, heap, volatile, 2KB-520KB typical",EEPROM:"Config data, calibration values, 512B-4KB typical"},example:"Arduino Uno: 32KB Flash, 2KB SRAM, 1KB EEPROM"}]},{level:1,title:"C Fundamentals",color:"#4ade80",description:"Core C syntax and programming constructs",topics:[{name:"Variables & Data Types",desc:"Storing and manipulating data efficiently",explanation:"Variables are named memory locations. Data types define size and interpretation.",dataTypes:{char:"1 byte, -128 to 127 or 0 to 255",int:"2-4 bytes, -32768 to 32767 (16-bit)",long:"4 bytes, large integers",float:"4 bytes, decimal numbers",double:"8 bytes, high precision decimals"},code:`// Variable declaration and initialization
char sensorStatus = 1;        // 1 byte
int temperature = 25;         // 2-4 bytes
unsigned int distance = 150;  // Always positive
float voltage = 3.3;          // Decimal
long timestamp = 1234567890;  // Large number

// Constants (read-only)
const int LED_PIN = 13;
#define MAX_TEMP 50`,iotExample:"Use 'uint8_t' for GPIO pins (0-255), 'float' for sensor readings, 'unsigned long' for timestamps."},{name:"Operators",desc:"Arithmetic, logical, and bitwise operations",explanation:"Operators perform operations on variables and values.",code:`// Arithmetic
int sum = 10 + 5;      // Addition
int diff = 10 - 5;     // Subtraction
int product = 10 * 5;  // Multiplication
int quotient = 10 / 5; // Division
int remainder = 10 % 3; // Modulo

// Comparison
if (temp > 30) { }     // Greater than
if (temp == 25) { }    // Equal to
if (temp != 0) { }     // Not equal

// Logical
if (temp > 20 && humidity < 80) { } // AND
if (motor1 || motor2) { }           // OR
if (!sensorActive) { }              // NOT

// Bitwise (for GPIO control)
PORTB |= (1 << 5);     // Set bit 5 (turn ON)
PORTB &= ~(1 << 5);    // Clear bit 5 (turn OFF)
PORTB ^= (1 << 5);     // Toggle bit 5`,iotExample:"Bitwise operators are crucial for controlling individual GPIO pins and reading sensor flags."},{name:"Control Flow",desc:"if-else, switch, for, while loops",explanation:"Control structures determine program execution flow.",code:`// if-else
if (temperature > 30) {
    digitalWrite(FAN_PIN, HIGH);
} else if (temperature < 20) {
    digitalWrite(HEATER_PIN, HIGH);
} else {
    digitalWrite(FAN_PIN, LOW);
    digitalWrite(HEATER_PIN, LOW);
}

// switch-case
switch (sensorType) {
    case 1: readDHT22(); break;
    case 2: readBMP280(); break;
    case 3: readMQ135(); break;
    default: Serial.println("Unknown sensor");
}

// for loop
for (int i = 0; i < 10; i++) {
    digitalWrite(LED_PIN, HIGH);
    delay(100);
    digitalWrite(LED_PIN, LOW);
    delay(100);
}

// while loop
while (digitalRead(BUTTON_PIN) == LOW) {
    // Wait for button press
    delay(10);
}`,iotExample:"Use loops for sensor polling, LED patterns, and waiting for events."},{name:"Functions & Scope",desc:"Organizing code into reusable blocks",explanation:"Functions encapsulate logic. Scope determines variable visibility.",code:`// Function declaration
float readTemperature();
void controlRelay(int pin, bool state);

// Function definition
float readTemperature() {
    int rawValue = analogRead(A0);
    float voltage = rawValue * (5.0 / 1023.0);
    float tempC = (voltage - 0.5) * 100.0;
    return tempC;
}

void controlRelay(int pin, bool state) {
    digitalWrite(pin, state ? HIGH : LOW);
}

// Function with parameters
int mapSensorValue(int value, int inMin, int inMax, int outMin, int outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// Global vs Local scope
int globalCounter = 0;  // Accessible everywhere

void setup() {
    int localVar = 10;  // Only in setup()
    globalCounter++;
}`,iotExample:"Create functions for sensor reading, actuator control, and data processing to keep code organized."}]},{level:2,title:"Arrays, Strings & Functions",color:"#22c55e",description:"Working with collections of data",topics:[{name:"1D & 2D Arrays",desc:"Storing multiple values of the same type",explanation:"Arrays are contiguous memory blocks storing multiple elements.",code:`// 1D Array
int sensorReadings[10];  // 10 integer values
sensorReadings[0] = 25;  // First element
sensorReadings[9] = 30;  // Last element

// Array initialization
int pins[] = {2, 3, 4, 5, 6};  // Size auto-calculated
float voltages[5] = {3.3, 5.0, 12.0, 24.0, 48.0};

// 2D Array (matrix)
int ledMatrix[8][8];  // 8x8 LED display
ledMatrix[0][0] = 1;  // Top-left LED

// Iterating through array
for (int i = 0; i < 10; i++) {
    sensorReadings[i] = analogRead(A0);
    delay(100);
}

// Finding average
float sum = 0;
for (int i = 0; i < 10; i++) {
    sum += sensorReadings[i];
}
float average = sum / 10;`,iotExample:"Use arrays to store sensor history, LED patterns, or calibration values."},{name:"Strings in C",desc:"Character arrays and string manipulation",explanation:"Strings are null-terminated character arrays.",code:`// String declaration
char deviceName[] = "ESP32_Sensor_01";
char buffer[50];  // Reserve space

// String functions (string.h)
#include <string.h>

strcpy(buffer, "Hello");      // Copy
strcat(buffer, " World");     // Concatenate
int len = strlen(buffer);     // Length
int cmp = strcmp(str1, str2); // Compare

// Character array manipulation
char ssid[32];
sprintf(ssid, "IoT_Device_%d", deviceID);

// Parsing sensor data
char data[] = "TEMP:25.5,HUM:60.2";
char *token = strtok(data, ":,");
while (token != NULL) {
    Serial.println(token);
    token = strtok(NULL, ":,");
}`,iotExample:"Use strings for WiFi credentials, MQTT topics, JSON parsing, and serial communication."},{name:"Passing Arrays to Functions",desc:"Efficient data processing with functions",explanation:"Arrays are passed by reference (pointer to first element).",code:`// Function receiving array
float calculateAverage(int arr[], int size) {
    float sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

// Function modifying array
void smoothData(float data[], int size) {
    for (int i = 1; i < size - 1; i++) {
        data[i] = (data[i-1] + data[i] + data[i+1]) / 3.0;
    }
}

// Usage
int temps[10] = {20, 22, 25, 23, 24, 26, 25, 27, 28, 26};
float avg = calculateAverage(temps, 10);

float sensorData[100];
smoothData(sensorData, 100);  // Apply moving average filter`,iotExample:"Pass sensor arrays to filtering functions, data logging, or transmission routines."}]},{level:3,title:"Pointers & Memory",color:"#10b981",description:"Direct memory manipulation - the power of C",topics:[{name:"Pointer Basics",desc:"Variables that store memory addresses",explanation:"Pointers hold addresses of other variables. Essential for embedded systems.",code:`// Pointer declaration
int value = 100;
int *ptr;         // Pointer to integer
ptr = &value;     // Store address of value

// Dereferencing
int x = *ptr;     // x = 100 (value at address)
*ptr = 200;       // Changes value to 200

// Pointer arithmetic
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;     // Points to arr[0]
p++;              // Now points to arr[1]
int val = *p;     // val = 20

// NULL pointer
int *nullPtr = NULL;  // Points to nothing
if (nullPtr != NULL) {
    // Safe to use
}`,iotExample:"Pointers are used for hardware register access, dynamic memory, and efficient data passing."},{name:"Pointers & Arrays",desc:"Arrays are pointers to their first element",explanation:"Array name is a constant pointer to the first element.",code:`int data[5] = {1, 2, 3, 4, 5};
int *ptr = data;  // Same as &data[0]

// These are equivalent
data[2] = 10;
*(data + 2) = 10;
*(ptr + 2) = 10;
ptr[2] = 10;

// Passing array to function
void processData(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies original array
    }
}

processData(data, 5);`,iotExample:"Efficient sensor data processing without copying large arrays."},{name:"Dynamic Memory",desc:"malloc, calloc, free for runtime allocation",explanation:"Allocate memory at runtime when size is unknown at compile time.",code:`#include <stdlib.h>

// malloc - allocate memory
int *buffer = (int*)malloc(100 * sizeof(int));
if (buffer == NULL) {
    // Allocation failed
    return;
}

// Use the memory
for (int i = 0; i < 100; i++) {
    buffer[i] = i;
}

// Free when done
free(buffer);

// calloc - allocate and initialize to zero
float *sensorLog = (float*)calloc(1000, sizeof(float));

// realloc - resize allocation
sensorLog = (float*)realloc(sensorLog, 2000 * sizeof(float));

free(sensorLog);`,iotExample:"Use for variable-length data logging, dynamic buffers, but avoid on small MCUs due to fragmentation.",warning:"Avoid malloc/free on Arduino Uno (2KB RAM). Use static arrays instead."},{name:"Common Pointer Mistakes",desc:"Avoiding crashes and undefined behavior",explanation:"Pointer errors are the #1 cause of embedded system crashes.",code:`// MISTAKE 1: Uninitialized pointer
int *ptr;         // Garbage address
*ptr = 10;        // CRASH!

// FIX: Initialize
int *ptr = NULL;
int value = 0;
ptr = &value;

// MISTAKE 2: Dangling pointer
int *ptr = (int*)malloc(sizeof(int));
free(ptr);
*ptr = 10;        // CRASH! Memory already freed

// FIX: Set to NULL after free
free(ptr);
ptr = NULL;

// MISTAKE 3: Memory leak
void badFunction() {
    int *data = (int*)malloc(100 * sizeof(int));
    // Forgot to free!
}

// FIX: Always free
void goodFunction() {
    int *data = (int*)malloc(100 * sizeof(int));
    // Use data...
    free(data);
}`,bestPractices:["Always initialize pointers","Check for NULL before dereferencing","Free allocated memory","Set pointers to NULL after free"]}]},{level:4,title:"Structures & Unions",color:"#059669",description:"Creating custom data types for IoT",topics:[{name:"Structures",desc:"Grouping related data together",explanation:"Structures combine different data types into a single unit.",code:`// Structure definition
struct Sensor {
    char name[20];
    int pin;
    float value;
    bool isActive;
};

// Creating structure variables
struct Sensor tempSensor;
tempSensor.pin = A0;
tempSensor.value = 25.5;
tempSensor.isActive = true;
strcpy(tempSensor.name, "DHT22");

// Structure initialization
struct Sensor humiditySensor = {"BME280", A1, 60.0, true};

// Array of structures
struct Sensor sensors[5];
sensors[0].pin = A0;
sensors[1].pin = A1;`,iotExample:"Perfect for organizing sensor data, device configurations, and IoT message packets."},{name:"Nested Structures",desc:"Structures within structures",explanation:"Complex data modeling for IoT systems.",code:`struct Location {
    float latitude;
    float longitude;
};

struct DateTime {
    int year;
    int month;
    int day;
    int hour;
    int minute;
};

struct IoTDevice {
    char id[16];
    struct Location location;
    struct DateTime lastUpdate;
    float batteryLevel;
    int signalStrength;
};

// Usage
struct IoTDevice myDevice;
myDevice.location.latitude = 37.7749;
myDevice.location.longitude = -122.4194;
myDevice.lastUpdate.hour = 14;
myDevice.lastUpdate.minute = 30;
myDevice.batteryLevel = 85.5;`,iotExample:"Model complex IoT data like GPS trackers, weather stations, or smart city sensors."},{name:"typedef for Cleaner Code",desc:"Creating type aliases",explanation:"typedef makes code more readable and maintainable.",code:`// Without typedef
struct Sensor sensor1;

// With typedef
typedef struct {
    char name[20];
    int pin;
    float value;
} Sensor_t;

Sensor_t sensor2;  // Cleaner!

// Common IoT typedefs
typedef unsigned char uint8_t;
typedef unsigned int uint16_t;
typedef unsigned long uint32_t;

// Function pointer typedef
typedef void (*CallbackFunction)(void);

CallbackFunction onButtonPress;
onButtonPress = &handleButtonPress;`,iotExample:"Industry standard: Use _t suffix for custom types (Sensor_t, Config_t)."},{name:"Unions vs Structures",desc:"Memory-efficient data storage",explanation:"Unions share memory among members. Only one member active at a time.",code:`// Structure: Each member has own memory
struct Data {
    int intVal;    // 4 bytes
    float floatVal; // 4 bytes
    char charVal;   // 1 byte
};  // Total: 9 bytes (with padding)

// Union: All members share same memory
union Data {
    int intVal;    // 4 bytes
    float floatVal; // 4 bytes
    char charVal;   // 1 byte
};  // Total: 4 bytes (largest member)

// IoT Example: Sensor data packet
union SensorData {
    float temperature;
    int humidity;
    char status[4];
};

union SensorData data;
data.temperature = 25.5;  // Use as float
// data.humidity is now garbage!`,iotExample:"Use unions for protocol parsing, memory-constrained devices, or type punning.",warning:"Only one union member is valid at a time. Don't mix!"}]},{level:5,title:"Embedded C Concepts",color:"#0d9488",description:"Hardware-level programming for MCUs",topics:[{name:"Register-Level Programming",desc:"Direct hardware control via memory-mapped registers",explanation:"MCU peripherals are controlled by writing to specific memory addresses (registers).",code:`// AVR (Arduino) register example
// DDRB: Data Direction Register for Port B
// PORTB: Output register for Port B
// PINB: Input register for Port B

// Set pin 13 (PB5) as output
DDRB |= (1 << PB5);   // Set bit 5 to 1

// Turn LED ON
PORTB |= (1 << PB5);  // Set bit 5 to 1

// Turn LED OFF
PORTB &= ~(1 << PB5); // Clear bit 5 to 0

// Toggle LED
PORTB ^= (1 << PB5);  // XOR toggles bit

// Read button on pin 12 (PB4)
DDRB &= ~(1 << PB4);  // Set as input
PORTB |= (1 << PB4);  // Enable pull-up

if (PINB & (1 << PB4)) {
    // Button not pressed (pull-up HIGH)
} else {
    // Button pressed (pulled LOW)
}`,iotExample:"Faster than digitalWrite(). Essential for time-critical IoT applications.",performance:"digitalWrite(): ~50 cycles. Register: ~2 cycles. 25x faster!"},{name:"Bit Manipulation Mastery",desc:"Essential operations for embedded systems",explanation:"Bitwise operations for efficient hardware control.",code:`// Set bit (turn ON)
#define SET_BIT(REG, BIT) (REG |= (1 << BIT))

// Clear bit (turn OFF)
#define CLEAR_BIT(REG, BIT) (REG &= ~(1 << BIT))

// Toggle bit
#define TOGGLE_BIT(REG, BIT) (REG ^= (1 << BIT))

// Check if bit is set
#define IS_BIT_SET(REG, BIT) (REG & (1 << BIT))

// Usage
SET_BIT(PORTB, 5);      // Turn on LED
CLEAR_BIT(PORTB, 5);    // Turn off LED
TOGGLE_BIT(PORTB, 5);   // Toggle LED

if (IS_BIT_SET(PINB, 4)) {
    // Pin 4 is HIGH
}

// Multi-bit operations
PORTB |= 0b00111000;    // Set bits 3,4,5
PORTB &= 0b11000111;    // Clear bits 3,4,5
PORTB = (PORTB & 0xF0) | 0x05;  // Set lower nibble to 5`,iotExample:"Control multiple GPIO pins simultaneously, read sensor flags, configure peripherals."},{name:"Volatile Keyword",desc:"Preventing compiler optimization for hardware registers",explanation:"volatile tells compiler the value can change unexpectedly (by hardware).",code:`// Without volatile - WRONG!
int sensorValue = 0;
while (sensorValue == 0) {
    // Compiler may optimize this to infinite loop!
}

// With volatile - CORRECT!
volatile int sensorValue = 0;
while (sensorValue == 0) {
    // Compiler won't optimize, checks every time
}

// Hardware register (always volatile)
volatile uint8_t *portB = (uint8_t*)0x25;
*portB = 0xFF;

// Interrupt-modified variable
volatile bool buttonPressed = false;

void ISR_Button() {
    buttonPressed = true;  // Modified by interrupt
}

void loop() {
    if (buttonPressed) {
        // Handle button press
        buttonPressed = false;
    }
}`,iotExample:"Use volatile for: interrupt flags, hardware registers, shared variables between ISR and main code.",rule:"If a variable can change outside normal program flow, make it volatile!"},{name:"Interrupts (ISR)",desc:"Immediate response to hardware events",explanation:"Interrupts pause main code to handle urgent events (button press, timer, serial data).",code:`// Arduino interrupt example
const int BUTTON_PIN = 2;  // INT0 on Arduino
volatile bool ledState = false;

void setup() {
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    pinMode(LED_BUILTIN, OUTPUT);
    
    // Attach interrupt
    attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), 
                    buttonISR, FALLING);
}

// Interrupt Service Routine (ISR)
void buttonISR() {
    // Keep ISR SHORT and FAST!
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
}

void loop() {
    // Main code continues running
    // ISR executes immediately when button pressed
}

// AVR bare-metal ISR
ISR(INT0_vect) {
    // Handle external interrupt 0
    PORTB ^= (1 << PB5);  // Toggle LED
}`,iotExample:"Use interrupts for: button debouncing, encoder reading, serial communication, timer events.",bestPractices:["Keep ISR code SHORT (< 10 lines)","No Serial.print() in ISR","No delay() in ISR","Use volatile for shared variables","Set flags, process in main loop"]},{name:"Non-Blocking Delays",desc:"Replacing delay() with millis() for responsive code",explanation:"delay() blocks everything. millis() allows multitasking.",code:`// BAD: Blocking delay
void loop() {
    digitalWrite(LED, HIGH);
    delay(1000);  // BLOCKS for 1 second!
    digitalWrite(LED, LOW);
    delay(1000);
    // Can't read sensors or respond to buttons during delay
}

// GOOD: Non-blocking with millis()
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    unsigned long currentMillis = millis();
    
    if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis;
        
        // Toggle LED every 1 second
        digitalWrite(LED, !digitalRead(LED));
    }
    
    // Can do other tasks here!
    readSensors();
    checkButtons();
    processData();
}

// Multiple timers
unsigned long ledTimer = 0;
unsigned long sensorTimer = 0;

void loop() {
    unsigned long now = millis();
    
    // LED blinks every 500ms
    if (now - ledTimer >= 500) {
        ledTimer = now;
        toggleLED();
    }
    
    // Read sensor every 2000ms
    if (now - sensorTimer >= 2000) {
        sensorTimer = now;
        readSensor();
    }
}`,iotExample:"Essential for IoT devices that must monitor sensors, handle communication, and control actuators simultaneously."}]},{level:6,title:"IoT-Oriented C Programming",color:"#0891b2",description:"Real-world IoT communication and control",topics:[{name:"GPIO Control Logic",desc:"Digital input/output for sensors and actuators",explanation:"GPIO (General Purpose Input/Output) pins interface with real-world devices.",code:`// Output: Control LED, Relay, Motor
pinMode(LED_PIN, OUTPUT);
digitalWrite(LED_PIN, HIGH);  // Turn ON
digitalWrite(LED_PIN, LOW);   // Turn OFF

// Input: Read button, sensor
pinMode(BUTTON_PIN, INPUT_PULLUP);
int state = digitalRead(BUTTON_PIN);

// Debouncing button
bool readButton(int pin) {
    static unsigned long lastDebounce = 0;
    static bool lastState = HIGH;
    
    bool reading = digitalRead(pin);
    
    if (reading != lastState) {
        lastDebounce = millis();
    }
    
    if ((millis() - lastDebounce) > 50) {
        if (reading != lastState) {
            lastState = reading;
            return (reading == LOW);  // Button pressed
        }
    }
    return false;
}`,iotExample:"Control relays for home automation, read motion sensors, interface with limit switches."},{name:"ADC Reading Logic",desc:"Converting analog signals to digital values",explanation:"ADC (Analog-to-Digital Converter) reads varying voltages from sensors.",code:`// Basic ADC read (0-1023 on Arduino, 0-4095 on ESP32)
int rawValue = analogRead(A0);

// Convert to voltage
float voltage = rawValue * (5.0 / 1023.0);  // Arduino
float voltage = rawValue * (3.3 / 4095.0);  // ESP32

// Temperature sensor (LM35: 10mV/°C)
float tempC = voltage * 100.0;

// Averaging for noise reduction
float readADCAverage(int pin, int samples) {
    long sum = 0;
    for (int i = 0; i < samples; i++) {
        sum += analogRead(pin);
        delay(10);
    }
    return (float)sum / samples;
}

// Mapping sensor range
int sensorValue = analogRead(A0);
int percentage = map(sensorValue, 0, 1023, 0, 100);`,iotExample:"Read light sensors (LDR), temperature (LM35), soil moisture, potentiometers."},{name:"UART Communication",desc:"Serial communication for GPS, GSM, debugging",explanation:"UART (Universal Asynchronous Receiver-Transmitter) for point-to-point communication.",code:`// Basic serial
void setup() {
    Serial.begin(9600);  // Baud rate
}

void loop() {
    Serial.println("Hello IoT");
    
    if (Serial.available()) {
        char c = Serial.read();
        Serial.print("Received: ");
        Serial.println(c);
    }
}

// Sending sensor data
float temp = readTemperature();
Serial.print("TEMP:");
Serial.println(temp, 2);  // 2 decimal places

// Parsing commands
void processCommand(String cmd) {
    if (cmd.startsWith("LED:")) {
        int state = cmd.substring(4).toInt();
        digitalWrite(LED_PIN, state);
    }
    else if (cmd.startsWith("READ:")) {
        float value = readSensor();
        Serial.println(value);
    }
}

// Multiple serial ports (ESP32)
Serial1.begin(9600, SERIAL_8N1, RX_PIN, TX_PIN);
Serial1.println("GPS Data");`,iotExample:"Debug output, GPS modules (NEO-6M), GSM (SIM800), Bluetooth (HC-05), LoRa communication."},{name:"I2C Communication",desc:"Multi-device bus for sensors and displays",explanation:"I2C uses 2 wires (SDA, SCL) to connect up to 127 devices.",code:`#include <Wire.h>

// I2C Scanner
void scanI2C() {
    for (byte addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if (Wire.endTransmission() == 0) {
            Serial.print("Device found at 0x");
            Serial.println(addr, HEX);
        }
    }
}

// Reading from I2C sensor (BME280 example)
#define BME280_ADDR 0x76

void setup() {
    Wire.begin();
}

uint8_t readRegister(uint8_t reg) {
    Wire.beginTransmission(BME280_ADDR);
    Wire.write(reg);
    Wire.endTransmission();
    
    Wire.requestFrom(BME280_ADDR, 1);
    return Wire.read();
}

void writeRegister(uint8_t reg, uint8_t value) {
    Wire.beginTransmission(BME280_ADDR);
    Wire.write(reg);
    Wire.write(value);
    Wire.endTransmission();
}`,iotExample:"OLED displays (SSD1306), sensors (BME280, MPU6050), RTC (DS3231), EEPROM."},{name:"SPI Communication",desc:"High-speed communication for displays and SD cards",explanation:"SPI uses 4 wires (MOSI, MISO, SCK, CS) for fast data transfer.",code:`#include <SPI.h>

#define CS_PIN 10

void setup() {
    pinMode(CS_PIN, OUTPUT);
    digitalWrite(CS_PIN, HIGH);
    
    SPI.begin();
    SPI.setClockDivider(SPI_CLOCK_DIV16);
}

// Write byte
void writeSPI(uint8_t data) {
    digitalWrite(CS_PIN, LOW);
    SPI.transfer(data);
    digitalWrite(CS_PIN, HIGH);
}

// Read byte
uint8_t readSPI() {
    digitalWrite(CS_PIN, LOW);
    uint8_t data = SPI.transfer(0x00);
    digitalWrite(CS_PIN, HIGH);
    return data;
}

// SD Card example
#include <SD.h>

void logData(float temp) {
    File dataFile = SD.open("log.txt", FILE_WRITE);
    if (dataFile) {
        dataFile.print(millis());
        dataFile.print(",");
        dataFile.println(temp);
        dataFile.close();
    }
}`,iotExample:"SD cards for data logging, TFT displays, NRF24L01 wireless, Ethernet modules."},{name:"State Machine Design",desc:"Event-driven programming for complex IoT logic",explanation:"State machines manage different operating modes and transitions.",code:`// State enumeration
enum State {
    IDLE,
    READING_SENSOR,
    SENDING_DATA,
    ERROR,
    SLEEP
};

State currentState = IDLE;

void loop() {
    switch (currentState) {
        case IDLE:
            if (buttonPressed()) {
                currentState = READING_SENSOR;
            }
            break;
            
        case READING_SENSOR:
            float data = readSensor();
            if (data > 0) {
                storeData(data);
                currentState = SENDING_DATA;
            } else {
                currentState = ERROR;
            }
            break;
            
        case SENDING_DATA:
            if (sendToCloud(data)) {
                currentState = SLEEP;
            } else {
                currentState = ERROR;
            }
            break;
            
        case ERROR:
            handleError();
            currentState = IDLE;
            break;
            
        case SLEEP:
            enterDeepSleep(60000);  // 1 minute
            currentState = IDLE;
            break;
    }
}`,iotExample:"Battery-powered sensors, washing machine controllers, traffic lights, industrial automation."},{name:"Low Power Techniques",desc:"Maximizing battery life for IoT devices",explanation:"Reduce power consumption for long-lasting battery operation.",code:`#include <avr/sleep.h>
#include <avr/power.h>

// ESP32 Deep Sleep
void enterDeepSleep(uint64_t sleepTime) {
    esp_sleep_enable_timer_wakeup(sleepTime * 1000);
    esp_deep_sleep_start();
}

// Arduino sleep mode
void enterSleep() {
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);
    sleep_enable();
    sleep_mode();  // Sleep here
    sleep_disable();  // Wakes up here
}

// Power saving tips
void setup() {
    // Disable unused peripherals
    power_adc_disable();
    power_spi_disable();
    power_timer1_disable();
    
    // Lower clock speed
    // CLKPR = 0x80;
    // CLKPR = 0x01;  // Divide by 2
}

// Sensor reading with sleep
void loop() {
    float temp = readTemperature();
    sendData(temp);
    
    enterDeepSleep(300000000);  // Sleep 5 minutes
}`,iotExample:"Weather stations, soil moisture sensors, wildlife trackers - devices running on batteries for months/years.",powerComparison:{"Active (WiFi)":"160-260mA","Active (no WiFi)":"80mA","Light Sleep":"0.8mA","Deep Sleep":"10-150µA"}}]},{level:7,title:"Practical IoT Programs",color:"#2563eb",description:"Real working code for common IoT applications",programs:[{name:"LED Blink (Register Level)",code:`// Bare metal LED blink - Arduino Uno
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
}`,explanation:"Direct register manipulation - 25x faster than digitalWrite()"},{name:"Button with Debouncing",code:`const int BUTTON_PIN = 2;
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
}`,explanation:"Prevents false triggers from mechanical switch bounce"},{name:"Temperature Sensor (LM35)",code:`const int SENSOR_PIN = A0;

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
}`,explanation:"LM35 outputs 10mV per degree Celsius"},{name:"UART Data Logger",code:`struct SensorData {
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
}`,explanation:"CSV format for easy Excel/Python analysis"}]},{level:8,title:"Mini Projects",color:"#4f46e5",description:"Complete IoT projects from beginner to advanced",projects:[{difficulty:"Beginner",name:"Smart LED Controller",description:"Control LED brightness via serial commands",code:`const int LED_PIN = 9;  // PWM pin

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
}`,components:["Arduino","LED","220Ω resistor","USB cable"],learnings:["Serial communication","PWM control","String parsing"]},{difficulty:"Intermediate",name:"Smart Street Light",description:"Auto ON/OFF based on ambient light with manual override",code:`const int LDR_PIN = A0;
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
}`,components:["Arduino","LDR","10kΩ resistor","LED","Button"],learnings:["Sensor-based automation","Mode switching","Real-world IoT logic"]},{difficulty:"Advanced",name:"ESP32 IoT Monitoring System",description:"Multi-sensor data logger with WiFi and web dashboard",code:`#include <WiFi.h>
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
}`,components:["ESP32","DHT22","LDR","WiFi network"],learnings:["WiFi connectivity","Web server","JSON API","Dashboard creation"]}]},{level:9,title:"Interview & Exam Preparation",color:"#7c3aed",description:"Top questions for embedded C and IoT roles",questions:[{category:"C Fundamentals",items:[{q:"What is the difference between malloc() and calloc()?",a:"malloc() allocates uninitialized memory. calloc() allocates and initializes to zero. calloc() takes two arguments (count, size), malloc() takes one (total size)."},{q:"Explain static keyword in C",a:"Static has 3 uses: 1) Static local variable retains value between function calls. 2) Static global variable limits scope to current file. 3) Static function limits visibility to current file."},{q:"What is a dangling pointer?",a:"A pointer that points to memory that has been freed or deallocated. Accessing it causes undefined behavior. Fix: Set pointer to NULL after free()."}]},{category:"Embedded C",items:[{q:"Why use volatile keyword?",a:"Prevents compiler optimization for variables that can change unexpectedly (hardware registers, interrupt flags, shared variables). Tells compiler to always read from memory, not cache."},{q:"What is ISR? Rules for writing ISR?",a:"Interrupt Service Routine - function executed when interrupt occurs. Rules: 1) Keep it SHORT, 2) No blocking functions (delay, Serial.print), 3) Use volatile for shared variables, 4) No malloc/free."},{q:"Difference between #define and const?",a:"#define is preprocessor macro (text replacement, no type checking). const is typed constant (type-safe, debuggable). Use const for better code quality."}]},{category:"IoT Specific",items:[{q:"How to reduce power consumption in IoT devices?",a:"1) Use deep sleep modes, 2) Disable unused peripherals, 3) Lower clock frequency, 4) Use interrupts instead of polling, 5) Optimize sensor reading frequency."},{q:"Explain I2C vs SPI",a:"I2C: 2 wires (SDA, SCL), slower, multi-master, 127 devices, good for sensors. SPI: 4 wires (MOSI, MISO, SCK, CS), faster, single master, separate CS per device, good for displays/SD cards."},{q:"What is MQTT? Why use it for IoT?",a:"Message Queue Telemetry Transport - lightweight pub/sub protocol. Benefits: Low bandwidth, works on unreliable networks, QoS levels, ideal for battery-powered devices."}]}],mcqs:[{q:"Size of int on a 16-bit microcontroller?",options:["1 byte","2 bytes","4 bytes","Depends on compiler"],correct:1,explanation:"On 16-bit MCUs (like AVR), int is 2 bytes. On 32-bit (ESP32), it's 4 bytes."},{q:"Which is fastest for GPIO control?",options:["digitalWrite()","Direct register","pinMode()","analogWrite()"],correct:1,explanation:"Direct register manipulation is ~25x faster than digitalWrite()."}],commonMistakes:["Not initializing pointers before use","Using delay() instead of millis() for timing","Forgetting to set pinMode() before using pin","Integer division truncation (5/2 = 2, not 2.5)","Buffer overflow in arrays","Not using volatile for interrupt-modified variables"]},{level:10,title:"Learning Path & Career Roadmap",color:"#9333ea",description:"Your journey from C to professional IoT engineer",roadmap:{afterC:[{topic:"Arduino Framework",duration:"2-3 weeks",skills:["Arduino libraries","Sensor interfacing","Serial communication","Basic projects"],resources:["Arduino official docs","IoTnext projects","YouTube tutorials"]},{topic:"ESP32 Development",duration:"1-2 months",skills:["WiFi/BLE","FreeRTOS basics","Web server","MQTT","Cloud integration"],resources:["ESP-IDF documentation","Random Nerd Tutorials","IoTnext ESP32 projects"]},{topic:"Communication Protocols",duration:"2-3 weeks",skills:["I2C mastery","SPI advanced","UART/RS485","Modbus","CAN bus"],resources:["Protocol datasheets","Oscilloscope practice","Real hardware debugging"]},{topic:"RTOS (Real-Time OS)",duration:"1-2 months",skills:["Task scheduling","Semaphores","Queues","Priority management","FreeRTOS"],resources:["FreeRTOS book","ESP32 RTOS examples","STM32 RTOS projects"]},{topic:"PCB Design",duration:"1 month",skills:["Schematic design","PCB layout","Component selection","Manufacturing"],resources:["KiCad tutorials","EasyEDA","JLCPCB assembly"]},{topic:"Cloud & Backend",duration:"1-2 months",skills:["AWS IoT Core","Azure IoT Hub","Node-RED","InfluxDB","Grafana"],resources:["Cloud provider docs","IoT dashboards","Data visualization"]}],careerPaths:[{role:"Embedded Systems Engineer",requirements:["C/C++ mastery","MCU programming","Hardware debugging","RTOS"],salary:"$70K-120K",companies:["Intel","Qualcomm","Texas Instruments","NXP"]},{role:"IoT Firmware Developer",requirements:["Embedded C","Communication protocols","Cloud integration","Security"],salary:"$80K-130K",companies:["Amazon","Google","Cisco","Bosch"]},{role:"Industrial Automation Engineer",requirements:["PLC programming","Modbus/OPC UA","SCADA","Embedded systems"],salary:"$75K-115K",companies:["Siemens","ABB","Rockwell","Schneider Electric"]},{role:"Hardware Engineer",requirements:["Circuit design","PCB layout","Embedded firmware","Testing"],salary:"$70K-110K",companies:["Apple","Tesla","SpaceX","Hardware startups"]}],certifications:["Certified Embedded Systems Engineer (CESE)","AWS Certified IoT Specialty","Arm Accredited Engineer","Certified LabVIEW Associate Developer"],tips:["Build a portfolio of 5-10 projects on GitHub","Contribute to open-source IoT projects","Document your learning journey (blog/YouTube)","Participate in hackathons and maker fairs","Network with IoT professionals on LinkedIn","Stay updated with latest MCU releases and protocols"]}}]},E=({onBack:u})=>{const[i,d]=l.useState(0),[c,m]=l.useState(null),[I,g]=l.useState(null);l.useEffect(()=>{window.scrollTo(0,0)},[i]);const r=o.levels.find(t=>t.level===i),f=t=>{m(c===t?null:t),g(null)};return e.jsxs("div",{className:"course-container",style:{maxWidth:"1200px",margin:"0 auto",padding:"2rem",color:"var(--text)",minHeight:"100vh"},children:[e.jsxs("div",{className:"course-header",style:{marginBottom:"3rem",textAlign:"center"},children:[e.jsxs("button",{onClick:u,style:{position:"absolute",left:"2rem",top:"2rem",background:"none",border:"none",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx(y,{size:20})," Back to Roadmap"]}),e.jsx("h1",{style:{fontSize:"2.5rem",background:"linear-gradient(to right, #60a5fa, #a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"1rem"},children:o.courseTitle}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.2rem",maxWidth:"800px",margin:"0 auto"},children:o.description})]}),e.jsx("div",{className:"level-nav",style:{display:"flex",overflowX:"auto",gap:"1rem",padding:"1rem 0",marginBottom:"2rem",scrollbarWidth:"none",msOverflowStyle:"none"},children:o.levels.map(t=>e.jsxs("button",{onClick:()=>{d(t.level),m(null)},style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:i===t.level?t.color:"var(--surface)",color:i===t.level?"#fff":"var(--text-secondary)",border:`1px solid ${i===t.level?t.color:"var(--border)"}`,whiteSpace:"nowrap",cursor:"pointer",fontWeight:"500",transition:"all 0.3s ease",boxShadow:i===t.level?`0 4px 12px ${t.color}40`:"none"},children:["Level ",t.level]},t.level))}),e.jsx("div",{className:"content-grid",style:{display:"grid",gap:"2rem"},children:e.jsxs(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{background:"var(--surface)",borderRadius:"20px",padding:"2rem",border:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"4px",background:r.color}}),e.jsxs("h2",{style:{fontSize:"2rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsxs("span",{style:{background:`${r.color}20`,color:r.color,padding:"0.5rem 1rem",borderRadius:"8px",fontSize:"1.2rem"},children:["Level ",r.level]}),r.title]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.1rem",marginBottom:"2rem"},children:r.description}),e.jsxs("div",{className:"topics-list",style:{display:"grid",gap:"1rem"},children:[r.topics&&r.topics.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",overflow:"hidden"},children:[e.jsxs("button",{onClick:()=>f(a),style:{width:"100%",padding:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",background:"none",border:"none",color:"var(--text)",cursor:"pointer",textAlign:"left"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(99, 102, 241, 0.1)",color:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.25rem"},children:t.name}),e.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:t.desc})]})]}),c===a?e.jsx(v,{size:20}):e.jsx(S,{size:20})]}),e.jsx(h,{children:c===a&&e.jsx(p.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},style:{overflow:"hidden"},children:e.jsxs("div",{style:{padding:"0 1.5rem 1.5rem 1.5rem"},children:[e.jsx("div",{style:{padding:"1.5rem",background:"rgba(99, 102, 241, 0.05)",borderRadius:"12px",marginBottom:"1.5rem"},children:e.jsx("p",{style:{lineHeight:"1.6"},children:t.explanation})}),t.keyPoints&&e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{fontSize:"0.9rem",textTransform:"uppercase",color:"var(--text-secondary)",marginBottom:"0.5rem"},children:"Key Concepts"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:t.keyPoints.map((n,s)=>e.jsx("span",{style:{background:"var(--surface)",border:"1px solid var(--border)",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.9rem"},children:n},s))})]}),t.code&&e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem"},children:[e.jsx("h4",{style:{fontSize:"0.9rem",textTransform:"uppercase",color:"var(--text-secondary)"},children:"Code Example"}),e.jsxs("span",{style:{fontSize:"0.8rem",color:"#6366f1",display:"flex",alignItems:"center",gap:"0.25rem"},children:[e.jsx(x,{size:14})," C / Embedded C"]})]}),e.jsx("pre",{style:{background:"#1e1e2e",padding:"1.5rem",borderRadius:"12px",overflowX:"auto",border:"1px solid #313244",color:"#a6accd",fontFamily:"monospace",fontSize:"0.9rem",lineHeight:"1.5"},children:e.jsx("code",{children:t.code})})]}),t.iotExample&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))",border:"1px solid rgba(34, 197, 94, 0.2)",borderRadius:"12px",padding:"1rem",display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{minWidth:"32px",height:"32px",borderRadius:"8px",background:"rgba(34, 197, 94, 0.2)",color:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(T,{size:18})}),e.jsxs("div",{children:[e.jsx("h4",{style:{color:"#22c55e",fontWeight:"600",marginBottom:"0.25rem",fontSize:"0.9rem"},children:"Real-World IoT Application"}),e.jsx("p",{style:{fontSize:"0.95rem",color:"var(--text)"},children:t.iotExample})]})]})]})})})]},a)),r.programs&&r.programs.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",padding:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem"},children:t.name}),e.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"1rem"},children:t.explanation}),e.jsx("pre",{style:{background:"#1e1e2e",padding:"1rem",borderRadius:"10px",overflowX:"auto",color:"#a6accd",fontSize:"0.9rem"},children:e.jsx("code",{children:t.code})})]},a)),r.projects&&r.projects.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",padding:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[e.jsx("h3",{style:{fontSize:"1.2rem"},children:t.name}),e.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.8rem",background:t.difficulty==="Beginner"?"rgba(34, 197, 94, 0.1)":t.difficulty==="Intermediate"?"rgba(234, 179, 8, 0.1)":"rgba(239, 68, 68, 0.1)",color:t.difficulty==="Beginner"?"#22c55e":t.difficulty==="Intermediate"?"#eab308":"#ef4444"},children:t.difficulty})]}),e.jsx("p",{style:{marginBottom:"1rem"},children:t.description}),e.jsx("h4",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"0.5rem"},children:"Components Needed:"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:t.components.map((n,s)=>e.jsx("span",{style:{bg:"var(--surface)",border:"1px solid var(--border)",padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.8rem"},children:n},s))}),e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",color:"#6366f1",fontWeight:"500"},children:"View Project Code"}),e.jsx("pre",{style:{marginTop:"1rem",background:"#1e1e2e",padding:"1rem",borderRadius:"10px",overflowX:"auto",color:"#a6accd",fontSize:"0.9rem"},children:e.jsx("code",{children:t.code})})]})]},a)),r.questions&&e.jsx("div",{style:{display:"grid",gap:"2rem"},children:r.questions.map((t,a)=>e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem",color:"#6366f1"},children:t.category}),e.jsx("div",{style:{display:"grid",gap:"1rem"},children:t.items.map((n,s)=>e.jsxs("div",{style:{background:"var(--background)",padding:"1.5rem",borderRadius:"12px",border:"1px solid var(--border)"},children:[e.jsxs("h4",{style:{marginBottom:"0.5rem",fontWeight:"600"},children:["Q: ",n.q]}),e.jsxs("p",{style:{color:"var(--text-secondary)"},children:["A: ",n.a]})]},s))})]},a))}),r.roadmap&&e.jsx("div",{style:{display:"grid",gap:"2rem"},children:e.jsxs("div",{style:{padding:"1.5rem",background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"After C Programming"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:r.roadmap.afterC.map((t,a)=>e.jsxs("div",{style:{padding:"1rem",background:"rgba(99, 102, 241, 0.05)",borderRadius:"12px"},children:[e.jsx("h4",{style:{color:"#6366f1",marginBottom:"0.5rem"},children:t.topic}),e.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:t.duration})]},a))})]})})]})]},i)}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"3rem",paddingTop:"2rem",borderTop:"1px solid var(--border)"},children:[e.jsx("button",{onClick:()=>d(Math.max(0,i-1)),disabled:i===0,style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:"var(--surface)",border:"1px solid var(--border)",color:i===0?"var(--text-secondary)":"var(--text)",cursor:i===0?"not-allowed":"pointer",opacity:i===0?.5:1},children:"Previous Level"}),e.jsx("button",{onClick:()=>d(Math.min(o.levels.length-1,i+1)),disabled:i===o.levels.length-1,style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:"#6366f1",border:"none",color:"white",cursor:i===o.levels.length-1?"not-allowed":"pointer",opacity:i===o.levels.length-1?.5:1},children:"Next Level"})]})]})};export{E as default};
