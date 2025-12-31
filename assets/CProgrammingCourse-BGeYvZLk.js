import{r as l,j as e,m as u,A as b}from"./vendor-framer-Dt7LSxLG.js";import{W as g,B as y,ah as v,r as S,T as x,ai as I}from"./vendor-icons-GY5OYOYQ.js";const o={courseTitle:"C Programming for IoT & Embedded Systems",description:"Master C programming from fundamentals to embedded IoT applications",levels:[{level:0,title:"C Programming for IoT (Prerequisites)",color:"#60a5fa",description:"Understanding why C is the language of choice for embedded systems and IoT",topics:[{name:"Why C for IoT?",desc:"Direct hardware control, minimal overhead, maximum efficiency",explanation:"C provides direct memory access and hardware control essential for resource-constrained IoT devices. Unlike high-level languages, C compiles to efficient machine code with predictable execution times.",iotRelevance:"ESP32, Arduino, STM32 all use C/C++ for firmware. Industry standard for embedded systems.",keyPoints:["Direct hardware register access","Minimal memory footprint (KB vs MB)","Deterministic execution timing","No garbage collection overhead"]},{name:"C vs C++ vs Python for IoT",desc:"Choosing the right language for your IoT project",explanation:"C: Bare metal control, fastest execution. C++: Object-oriented with Arduino libraries. Python: MicroPython for rapid prototyping but slower.",comparison:{C:{speed:"Fastest",memory:"Minimal",control:"Maximum",learning:"Moderate"},"C++":{speed:"Fast",memory:"Low",control:"High",learning:"Moderate"},Python:{speed:"Slow",memory:"High",control:"Limited",learning:"Easy"}},recommendation:"Use C for production IoT devices, C++ for Arduino projects, Python for prototyping."},{name:"Compilation Process for MCUs",desc:"From .c file to microcontroller firmware",explanation:"Source code → Preprocessor → Compiler → Assembler → Linker → HEX/BIN file → Flash memory",steps:["Preprocessing: Handles #include, #define","Compilation: Converts C to assembly","Assembly: Converts to machine code (.o files)","Linking: Combines object files into executable","Flashing: Uploads to microcontroller flash memory"],toolchain:"GCC for AVR (Arduino), Xtensa GCC (ESP32), ARM GCC (STM32)"},{name:"Memory Types in MCUs",desc:"Flash, RAM, EEPROM - where your code and data live",explanation:"Flash: Program storage (non-volatile). RAM: Runtime variables (volatile). EEPROM: Persistent data storage.",memoryMap:{Flash:"Code storage, read-only during execution, 32KB-4MB typical",SRAM:"Variables, stack, heap, volatile, 2KB-520KB typical",EEPROM:"Config data, calibration values, 512B-4KB typical"},example:"Arduino Uno: 32KB Flash, 2KB SRAM, 1KB EEPROM"}]},{level:1,title:"C Fundamentals",color:"#4ade80",description:"Deep dive into C syntax, program structure, and core concepts",topics:[{name:"Structure of a C Program",desc:"Anatomy of code: Headers, Main function, and Blocks",explanation:"Every C program follows a specific structure. It starts with 'Preprocessor Directives' (like #include), followed by 'Global Declarations', and then the 'main()' function. The main function is the entry point where execution begins. In embedded systems, 'setup()' and 'loop()' often abstract this, but understanding 'main' is crucial.",code:`// 1. Documentation Section
/*
  Blink LED Program
  Author: IoTnext
  Date: 2024
*/

// 2. Preprocessor Directives (Link Section)
#include <stdio.h>  // Standard Input/Output library

// 3. Global Declaration Section
int globalVar = 10; 
#define LED_PIN 13

// 4. Main Function (Entry Point)
int main() {
    // 5. Local Declaration
    int i = 0;

    // 6. Program Statements
    printf("Program Started\\n");
    
    // 7. Return Statement
    return 0; // 0 means success
}`,iotExample:"In Arduino, the 'main' function is hidden by the core library, which calls 'setup()' once and then 'loop()' forever."},{name:"Comments & Syntax Rules",desc:"Writing readable and error-free code",explanation:"C is case-sensitive ('Main' is different from 'main'). Statements must end with a semicolon (;). Comments are ignored by the compiler but essential for humans. Whitespace (spaces, tabs) is generally ignored but helps readability.",code:`// This is a single-line comment

/* 
   This is a 
   multi-line comment 
*/

int x = 10;   // Semicolon is mandatory!
int X = 20;   // Case-sensitive: x and X are different identifiers

// Code Blocks
{
    int z = 30; // 'z' only exists inside these braces (Scope)
}
// z = 40; // Error: z is undefined here`,iotExample:"Always comment your pin definitions and complex logic. Future you will thank you when debugging hardware."},{name:"Number Systems for IoT",desc:"Binary, Hexadecimal, and Decimal",explanation:"IoT hardware speaks Binary (0s and 1s). Hexadecimal is a shorthand for Binary. Decimal is for humans. You must be comfortable converting between them to configure registers.",code:`int dec = 10;       // Decimal (Base 10)
int bin = 0b1010;   // Binary (Base 2) - Prefix '0b'
int hex = 0xA;      // Hexadecimal (Base 16) - Prefix '0x'

// Why Hex?
// 1 Byte = 8 bits = 0b11111111 = 255 = 0xFF
// It's much easier to write 0xFF than 0b11111111

// Common IoT Hex values:
// 0x00 = OFF (0)
// 0xFF = MAX (255)
// 0x0F = Lower 4 bits
// 0xF0 = Upper 4 bits`,iotExample:"Setting register addresses (e.g., 0x40003000) or I2C addresses (e.g., 0x27) always uses Hex."},{name:"Variables & Data Types",desc:"Storing and manipulating data efficiently",explanation:"Variables are named storage locations in memory. In C, you MUST declare the type of data a variable will hold. Choosing the right type is critical in IoT to save RAM.",dataTypes:{void:"Empty data type, used for functions returning nothing",char:"1 byte. Stores a single character ('A') or small number (-128 to 127).",int:"2 or 4 bytes. Stores whole numbers (-32,768 to 32,767 on 8-bit MCU).","unsigned int":"Only positive numbers (0 to 65,535). Good for counters.",long:"4 bytes. Large numbers (like milliseconds since boot).",float:"4 bytes. Numbers with decimals (3.14). Slow on some MCUs.",double:"8 bytes. High precision decimals. Rarely used in simple IoT."},code:`char glede = 'A';
int count = -5;
unsigned int steps = 1000;
float temperature = 23.5;
unsigned long timeActive = 4500000L; // 'L' forces long type

// Size matters!
printf("%d", sizeof(int)); // Prints bytes used by int`,iotExample:"Use 'uint8_t' (1 byte) for GPIO pins. Use 'unsigned long' for millis() timers."},{name:"Operators & Expressions",desc:"Arithmetic, Logical, Bitwise, and Assignment",explanation:"Operators allow you to manipulate data. In embedded C, Bitwise operators are super-powers for controlling hardware pins directly.",code:`// Arithmetic
int sum = a + b;
int rem = 10 % 3; // Modulus (remainder) -> 1

// Relational (True/False)
if (temp > 50) { ... }
if (a == b) { ... }  // '==' checks equality, '=' assigns!

// Logical
if (switchOn && !tempHigh) { ... } // AND, NOT

// Assignment
a += 5; // Same as a = a + 5

// Increment/Decrement
i++; // Post-increment
++i; // Pre-increment`,iotExample:"Using modulus (%) to perform an action every Nth loop iteration."},{name:"Loops & Control Flow",desc:"if-else, switch, for, while, do-while",explanation:"Control flow dictates the order in which statements execute. 'Loops' repeat code, while 'Conditions' branch code.",code:`// If-Else
if (val > 100) {
    ledState = HIGH;
} else {
    ledState = LOW;
}

// Ternary Operator (Shorthand if-else)
ledState = (val > 100) ? HIGH : LOW;

// Switch-Case (Cleaner for many options)
switch (mode) {
    case 1: startMotor(); break;
    case 2: stopMotor(); break;
    default: error(); break;
}

// For Loop (Fixed iterations)
for (int i=0; i<10; i++) {
    blinkLED();
}

// While Loop (Condition based)
while (sensorReading < target) {
    sensorReading = analogRead(A0);
}`,iotExample:"The 'main loop' of every IoT device is essentially a 'while(1)' infinite loop."},{name:"Functions & Scope",desc:"Modularity, Arguments, and Return Values",explanation:"Functions break large tasks into smaller, reusable chunks. 'Scope' defines where a variable can be seen. 'Global' variables are seen everywhere; 'Local' variables die when the function ends.",code:`// Function Prototype (tells compiler it exists)
int add(int a, int b);

void setup() {
    int sum = add(5, 3); // Call
}

// Function Definition
int add(int a, int b) { // Parameters
    return a + b;       // Return value
}

// Scope Example
int globalVar = 100; // Global

void test() {
    int localVar = 5; // Local to 'test'
    // Can see globalVar
    // Cannot see variables from 'setup'
}`,iotExample:"Create a 'connectWiFi()' function so you can reuse it in every project."}]},{level:2,title:"Arrays, Strings & Standard Libraries",color:"#22c55e",description:"Mastering data collections and essential C libraries",topics:[{name:"Arrays in Depth",desc:"Memory layout, initialization, and multi-dimensional arrays",explanation:"An array is a fixed-size collection of elements of the same type stored in contiguous memory locations. Understanding memory alignment and boundary checking is crucial in embedded systems to avoid system crashes.",code:`// 1. Declaration & Initialization
int grades[5] = {90, 85, 80, 75, 70}; 
// Memory: [90][85][80][75][70] (Contiguous)

// 2. Partial Initialization
int buffer[10] = {1, 2, 3}; // Remaining 7 become 0

// 3. No Size Check!
// C does NOT prevent writing outside array bounds
// grades[10] = 50; // Dangerous! Overwrites other memory

// 4. Calculating Size
int len = sizeof(grades) / sizeof(grades[0]); // 20 / 4 = 5 elements`,iotExample:"Buffers for UART data reception often use fixed-size arrays (e.g., `uint8_t buffer[64]`)."},{name:"Strings & <string.h>",desc:"Text processing and safe handling",explanation:"In C, strings are 1D arrays of characters terminated by a null character '\\0'. The `<string.h>` library provides tools to manipulate them.",code:`// String Literals
char str[] = "Hello"; // Size is 6 ('H','e','l','l','o','\\0')

// <string.h> Functions
#include <string.h>

char dest[20];
char src[] = "IoT";

// 1. Copy
strcpy(dest, "Hello "); // dest = "Hello "

// 2. Concatenate
strcat(dest, src);      // dest = "Hello IoT"

// 3. Length
int len = strlen(dest); // 9 (excludes \\0)

// 4. Compare
if (strcmp(src, "IoT") == 0) {
    // Strings are identical
}`,iotExample:"Parsing AT commands from GSM modules or JSON strings from cloud responses."},{name:"2D Arrays (Matrices)",desc:"Grid-based data structures",explanation:"A 2D array is an 'array of arrays'. Organized as rows and columns.",code:`// Keypad Matrix [Rows][Cols]
char keys[4][3] = {
    {'1','2','3'},
    {'4','5','6'},
    {'7','8','9'},
    {'*','0','#'}
};

// Accessing: keys[Row][Col]
char pressed = keys[1][2]; // '6'

// Iterating
for(int r=0; r<4; r++) {
    for(int c=0; c<3; c++) {
        scanKey(r, c);
    }
}`,iotExample:"Scanning matrix keypads or controlling LED dot matrix displays."},{name:"Character Handling <ctype.h>",desc:"Analyzing individual characters",explanation:"The `<ctype.h>` library is useful for validating input or parsing data streams.",code:`#include <ctype.h>

char c = 'A';

if (isalpha(c)) { ... } // Is letter?
if (isdigit(c)) { ... } // Is number?
if (isspace(c)) { ... } // Is whitespace?

char lower = tolower(c); // 'a'
char upper = toupper('b'); // 'B'`,iotExample:"Validating user input from a serial terminal or checking if a GPS sentence ID is valid."},{name:"Passing Arrays to Functions",desc:"Efficiency and decay to pointers",explanation:"When you pass an array to a function, it 'decays' to a pointer to its first element. You rarely copy the whole array; you just pass its address.",code:`// Parameter: int arr[] is same as int *arr
void processBuffer(int arr[], int size) {
    for(int i=0; i<size; i++) {
        arr[i] = 0; // Modifies ORIGINAL array
    }
}

int main() {
    int data[10];
    processBuffer(data, 10); // Pass name 'data', not 'data[]'
}`,iotExample:"Processing a buffer of sensor readings in a separate function without taking up double memory."}]},{level:3,title:"Mastering Pointers",color:"#10b981",description:"Direct memory manipulation - the superpower of C",topics:[{name:"Pointer Anatomy",desc:"Address, Value, and Indirection",explanation:"A pointer is a variable that stores a memory address. In embedded systems, this allows us to talk directly to hardware registers mapped to specific addresses.",code:`int x = 10;
int *ptr = &x; // 'ptr' holds the address of 'x'

// 1. Reference operator (&)
// &x -> Gives address (e.g., 0x2000)

// 2. Dereference operator (*)
// *ptr -> Goes to 0x2000 and gets value (10)

*ptr = 20; // Changes 'x' to 20 indirectly`,iotExample:"Writing to a configuration register at 0x40021000 requires a pointer to that address."},{name:"Pointer Arithmetic",desc:"Navigating memory efficiently",explanation:"Adding 1 to a pointer increases its address by the size of the type it points to (int = +4 bytes, char = +1 byte).",code:`int buff[5] = {10, 20, 30, 40, 50};
int *p = buff; // Points to buff[0]

p++;    // Moves 4 bytes forward -> buff[1]
p += 2; // Moves 8 bytes forward -> buff[3]

// Efficient Loop
for(int *p = buff; p < buff+5; p++) {
    *p = 0; // Clear buffer
}`,iotExample:"Iterating through a frame buffer for a display driver."},{name:"Void Pointers (Generic)",desc:"The universal data type",explanation:"`void *` is a pointer that has no type. It can point to anything, but you MUST cast it before dereferencing.",code:`void *genericPtr;
int a = 5;
char c = 'X';

genericPtr = &a; // Point to int
// To read:
int val = *(int*)genericPtr;

genericPtr = &c; // Point to char
char letter = *(char*)genericPtr;`,iotExample:"FreeRTOS tasks take a `void *` parameter so you can pass any data structure to a thread."},{name:"Function Pointers",desc:"Dynamic code execution",explanation:"Pointers can point to functions too! This allows for callbacks and event-driven architectures.",code:`void turnOn() { ... }
void turnOff() { ... }

// Declare function pointer
void (*actionFunc)();

// Assign
actionFunc = turnOn;
actionFunc(); // Calls turnOn()

actionFunc = turnOff;
actionFunc(); // Calls turnOff()`,iotExample:"Implementing an interrupt handler callback or a menu system where each item triggers a different function."},{name:"Const & Volatile Pointers",desc:"Safety and Hardware Constraints",explanation:"Crucial for sturdy firmware.",code:`// 1. Pointer to Constant Data (Read-only data)
const int *p1 = &x;
// *p1 = 5; // ERROR: Cannot change data

// 2. Constant Pointer (Fixed address)
int * const p2 = &x;
// p2 = &y; // ERROR: Cannot change address

// 3. Constant Pointer to Constant Data
const int * const p3 = &x;

// 4. Volatile Pointer (Hardware register)
volatile uint8_t *reg = (uint8_t*)0x5000;`,iotExample:"Protecting lookup tables (const data) and accessing hardware registers (volatile)."}]},{level:4,title:"Structures, Unions & Bit Fields",color:"#059669",description:"Advanced data modeling for protocols and hardware",topics:[{name:"Structure Basics",desc:"Grouping heterogeneous data",explanation:"Structures allow you to create custom data types that bundle different variables together.",code:`struct Sensor {
    uint8_t id;
    float value;
    bool active;
};

// Initialization
struct Sensor temp = {1, 23.5, true};

// Accessing members
temp.value = 24.0;
temp.active = false;

// Array of Structs
struct Sensor sensors[10];`,iotExample:"Representing a physical device (ID, status, battery level) as a single code object."},{name:"Padding & Packing",desc:"Memory alignment secrets",explanation:"Compilers insert 'padding' bytes to align data for speed, but this wastes memory. In IoT, we often pack structures to match communication protocols exactly.",code:`// Default (Padded)
struct Default {
    char c;     // 1 byte
    // 3 bytes padding inserted here!
    int i;      // 4 bytes
}; // Size = 8 bytes

// Packed (No Padding)
struct __attribute__((packed)) Packed {
    char c;     // 1 byte
    int i;      // 4 bytes
}; // Size = 5 bytes`,iotExample:"Sending a struct directly over LoRa or BLE requires packed structures so the receiver gets the exact bytes."},{name:"Bit Fields",desc:"Saving memory bit by bit",explanation:"You can define exactly how many bits a variable uses inside a structure. Essential for packing flags or matching protocol headers.",code:`struct StatusReg {
    uint8_t errorFlag : 1;  // 1 bit (0-1)
    uint8_t mode      : 3;  // 3 bits (0-7)
    uint8_t ready     : 1;  // 1 bit
    uint8_t reserved  : 3;  // 3 bits
};
// Total size: 1 byte!

struct StatusReg reg;
reg.mode = 5; // Binary 101`,iotExample:"Defining specific bits for a hardware control register or protocol header."},{name:"Unions for Data Parsers",desc:"Multiple views of the same memory",explanation:"Unions allow different data types to occupy the same memory space. Great for converting bytes to floats or ints.",code:`union FloatBytes {
    float f;
    uint8_t b[4];
};

union FloatBytes converter;
converter.f = 3.14;

// Transmit bytes
Serial.write(converter.b[0]);
Serial.write(converter.b[1]);
Serial.write(converter.b[2]);
Serial.write(converter.b[3]);`,iotExample:"Deconstructing a float sensor variable into 4 bytes to send over I2C or UART."}]},{level:5,title:"Embedded C Concepts",color:"#0d9488",description:"Hardware-level programming for MCUs",topics:[{name:"Register-Level Programming",desc:"Direct hardware control via memory-mapped registers",explanation:"MCU peripherals are controlled by writing to specific memory addresses (registers).",code:`// AVR (Arduino) register example
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
}`,components:["ESP32","DHT22","LDR","WiFi network"],learnings:["WiFi connectivity","Web server","JSON API","Dashboard creation"]}]},{level:9,title:"Interview & Exam Preparation",color:"#7c3aed",description:"Top questions for embedded C and IoT roles",questions:[{category:"C Fundamentals",items:[{q:"What is the difference between malloc() and calloc()?",a:"malloc() allocates uninitialized memory. calloc() allocates and initializes to zero. calloc() takes two arguments (count, size), malloc() takes one (total size)."},{q:"Explain static keyword in C",a:"Static has 3 uses: 1) Static local variable retains value between function calls. 2) Static global variable limits scope to current file. 3) Static function limits visibility to current file."},{q:"What is a dangling pointer?",a:"A pointer that points to memory that has been freed or deallocated. Accessing it causes undefined behavior. Fix: Set pointer to NULL after free()."}]},{category:"Embedded C",items:[{q:"Why use volatile keyword?",a:"Prevents compiler optimization for variables that can change unexpectedly (hardware registers, interrupt flags, shared variables). Tells compiler to always read from memory, not cache."},{q:"What is ISR? Rules for writing ISR?",a:"Interrupt Service Routine - function executed when interrupt occurs. Rules: 1) Keep it SHORT, 2) No blocking functions (delay, Serial.print), 3) Use volatile for shared variables, 4) No malloc/free."},{q:"Difference between #define and const?",a:"#define is preprocessor macro (text replacement, no type checking). const is typed constant (type-safe, debuggable). Use const for better code quality."}]},{category:"IoT Specific",items:[{q:"How to reduce power consumption in IoT devices?",a:"1) Use deep sleep modes, 2) Disable unused peripherals, 3) Lower clock frequency, 4) Use interrupts instead of polling, 5) Optimize sensor reading frequency."},{q:"Explain I2C vs SPI",a:"I2C: 2 wires (SDA, SCL), slower, multi-master, 127 devices, good for sensors. SPI: 4 wires (MOSI, MISO, SCK, CS), faster, single master, separate CS per device, good for displays/SD cards."},{q:"What is MQTT? Why use it for IoT?",a:"Message Queue Telemetry Transport - lightweight pub/sub protocol. Benefits: Low bandwidth, works on unreliable networks, QoS levels, ideal for battery-powered devices."}]}],mcqs:[{q:"Size of int on a 16-bit microcontroller?",options:["1 byte","2 bytes","4 bytes","Depends on compiler"],correct:1,explanation:"On 16-bit MCUs (like AVR), int is 2 bytes. On 32-bit (ESP32), it's 4 bytes."},{q:"Which is fastest for GPIO control?",options:["digitalWrite()","Direct register","pinMode()","analogWrite()"],correct:1,explanation:"Direct register manipulation is ~25x faster than digitalWrite()."}],commonMistakes:["Not initializing pointers before use","Using delay() instead of millis() for timing","Forgetting to set pinMode() before using pin","Integer division truncation (5/2 = 2, not 2.5)","Buffer overflow in arrays","Not using volatile for interrupt-modified variables"]},{level:10,title:"Learning Path & Career Roadmap",color:"#9333ea",description:"Your journey from C to professional IoT engineer",roadmap:{afterC:[{topic:"Arduino Framework",duration:"2-3 weeks",skills:["Arduino libraries","Sensor interfacing","Serial communication","Basic projects"],resources:["Arduino official docs","IoTnext projects","YouTube tutorials"]},{topic:"ESP32 Development",duration:"1-2 months",skills:["WiFi/BLE","FreeRTOS basics","Web server","MQTT","Cloud integration"],resources:["ESP-IDF documentation","Random Nerd Tutorials","IoTnext ESP32 projects"]},{topic:"Communication Protocols",duration:"2-3 weeks",skills:["I2C mastery","SPI advanced","UART/RS485","Modbus","CAN bus"],resources:["Protocol datasheets","Oscilloscope practice","Real hardware debugging"]},{topic:"RTOS (Real-Time OS)",duration:"1-2 months",skills:["Task scheduling","Semaphores","Queues","Priority management","FreeRTOS"],resources:["FreeRTOS book","ESP32 RTOS examples","STM32 RTOS projects"]},{topic:"PCB Design",duration:"1 month",skills:["Schematic design","PCB layout","Component selection","Manufacturing"],resources:["KiCad tutorials","EasyEDA","JLCPCB assembly"]},{topic:"Cloud & Backend",duration:"1-2 months",skills:["AWS IoT Core","Azure IoT Hub","Node-RED","InfluxDB","Grafana"],resources:["Cloud provider docs","IoT dashboards","Data visualization"]}],careerPaths:[{role:"Embedded Systems Engineer",requirements:["C/C++ mastery","MCU programming","Hardware debugging","RTOS"],salary:"$70K-120K",companies:["Intel","Qualcomm","Texas Instruments","NXP"]},{role:"IoT Firmware Developer",requirements:["Embedded C","Communication protocols","Cloud integration","Security"],salary:"$80K-130K",companies:["Amazon","Google","Cisco","Bosch"]},{role:"Industrial Automation Engineer",requirements:["PLC programming","Modbus/OPC UA","SCADA","Embedded systems"],salary:"$75K-115K",companies:["Siemens","ABB","Rockwell","Schneider Electric"]},{role:"Hardware Engineer",requirements:["Circuit design","PCB layout","Embedded firmware","Testing"],salary:"$70K-110K",companies:["Apple","Tesla","SpaceX","Hardware startups"]}],certifications:["Certified Embedded Systems Engineer (CESE)","AWS Certified IoT Specialty","Arm Accredited Engineer","Certified LabVIEW Associate Developer"],tips:["Build a portfolio of 5-10 projects on GitHub","Contribute to open-source IoT projects","Document your learning journey (blog/YouTube)","Participate in hackathons and maker fairs","Network with IoT professionals on LinkedIn","Stay updated with latest MCU releases and protocols"]}}]},w=({onBack:m})=>{const[i,d]=l.useState(0),[c,p]=l.useState(null),[T,f]=l.useState(null);l.useEffect(()=>{window.scrollTo(0,0)},[i]);const r=o.levels.find(t=>t.level===i),h=t=>{p(c===t?null:t),f(null)};return e.jsxs("div",{className:"course-container",style:{maxWidth:"1200px",margin:"0 auto",padding:"2rem",color:"var(--text)",minHeight:"100vh"},children:[e.jsxs("div",{className:"course-header",style:{marginBottom:"3rem",textAlign:"center"},children:[e.jsxs("button",{onClick:m,style:{position:"absolute",left:"2rem",top:"2rem",background:"none",border:"none",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx(g,{size:20})," Back to Roadmap"]}),e.jsx("h1",{style:{fontSize:"2.5rem",background:"linear-gradient(to right, #60a5fa, #a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"1rem"},children:o.courseTitle}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.2rem",maxWidth:"800px",margin:"0 auto"},children:o.description})]}),e.jsx("div",{className:"level-nav",style:{display:"flex",overflowX:"auto",gap:"1rem",padding:"1rem 0",marginBottom:"2rem",scrollbarWidth:"none",msOverflowStyle:"none"},children:o.levels.map(t=>e.jsxs("button",{onClick:()=>{d(t.level),p(null)},style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:i===t.level?t.color:"var(--surface)",color:i===t.level?"#fff":"var(--text-secondary)",border:`1px solid ${i===t.level?t.color:"var(--border)"}`,whiteSpace:"nowrap",cursor:"pointer",fontWeight:"500",transition:"all 0.3s ease",boxShadow:i===t.level?`0 4px 12px ${t.color}40`:"none"},children:["Level ",t.level]},t.level))}),e.jsx("div",{className:"content-grid",style:{display:"grid",gap:"2rem"},children:e.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{background:"var(--surface)",borderRadius:"20px",padding:"2rem",border:"1px solid var(--border)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"4px",background:r.color}}),e.jsxs("h2",{style:{fontSize:"2rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsxs("span",{style:{background:`${r.color}20`,color:r.color,padding:"0.5rem 1rem",borderRadius:"8px",fontSize:"1.2rem"},children:["Level ",r.level]}),r.title]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.1rem",marginBottom:"2rem"},children:r.description}),e.jsxs("div",{className:"topics-list",style:{display:"grid",gap:"1rem"},children:[r.topics&&r.topics.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",overflow:"hidden"},children:[e.jsxs("button",{onClick:()=>h(a),style:{width:"100%",padding:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",background:"none",border:"none",color:"var(--text)",cursor:"pointer",textAlign:"left"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(99, 102, 241, 0.1)",color:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(y,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.25rem"},children:t.name}),e.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:t.desc})]})]}),c===a?e.jsx(v,{size:20}):e.jsx(S,{size:20})]}),e.jsx(b,{children:c===a&&e.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},style:{overflow:"hidden"},children:e.jsxs("div",{style:{padding:"0 1.5rem 1.5rem 1.5rem"},children:[e.jsx("div",{style:{padding:"1.5rem",background:"rgba(99, 102, 241, 0.05)",borderRadius:"12px",marginBottom:"1.5rem"},children:e.jsx("p",{style:{lineHeight:"1.6"},children:t.explanation})}),t.keyPoints&&e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{fontSize:"0.9rem",textTransform:"uppercase",color:"var(--text-secondary)",marginBottom:"0.5rem"},children:"Key Concepts"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:t.keyPoints.map((n,s)=>e.jsx("span",{style:{background:"var(--surface)",border:"1px solid var(--border)",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.9rem"},children:n},s))})]}),t.code&&e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem"},children:[e.jsx("h4",{style:{fontSize:"0.9rem",textTransform:"uppercase",color:"var(--text-secondary)"},children:"Code Example"}),e.jsxs("span",{style:{fontSize:"0.8rem",color:"#6366f1",display:"flex",alignItems:"center",gap:"0.25rem"},children:[e.jsx(x,{size:14})," C / Embedded C"]})]}),e.jsx("pre",{style:{background:"#1e1e2e",padding:"1.5rem",borderRadius:"12px",overflowX:"auto",border:"1px solid #313244",color:"#a6accd",fontFamily:"monospace",fontSize:"0.9rem",lineHeight:"1.5"},children:e.jsx("code",{children:t.code})})]}),t.iotExample&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))",border:"1px solid rgba(34, 197, 94, 0.2)",borderRadius:"12px",padding:"1rem",display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{minWidth:"32px",height:"32px",borderRadius:"8px",background:"rgba(34, 197, 94, 0.2)",color:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(I,{size:18})}),e.jsxs("div",{children:[e.jsx("h4",{style:{color:"#22c55e",fontWeight:"600",marginBottom:"0.25rem",fontSize:"0.9rem"},children:"Real-World IoT Application"}),e.jsx("p",{style:{fontSize:"0.95rem",color:"var(--text)"},children:t.iotExample})]})]})]})})})]},a)),r.programs&&r.programs.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",padding:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem"},children:t.name}),e.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"1rem"},children:t.explanation}),e.jsx("pre",{style:{background:"#1e1e2e",padding:"1rem",borderRadius:"10px",overflowX:"auto",color:"#a6accd",fontSize:"0.9rem"},children:e.jsx("code",{children:t.code})})]},a)),r.projects&&r.projects.map((t,a)=>e.jsxs("div",{style:{background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)",padding:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[e.jsx("h3",{style:{fontSize:"1.2rem"},children:t.name}),e.jsx("span",{style:{padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.8rem",background:t.difficulty==="Beginner"?"rgba(34, 197, 94, 0.1)":t.difficulty==="Intermediate"?"rgba(234, 179, 8, 0.1)":"rgba(239, 68, 68, 0.1)",color:t.difficulty==="Beginner"?"#22c55e":t.difficulty==="Intermediate"?"#eab308":"#ef4444"},children:t.difficulty})]}),e.jsx("p",{style:{marginBottom:"1rem"},children:t.description}),e.jsx("h4",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"0.5rem"},children:"Components Needed:"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:t.components.map((n,s)=>e.jsx("span",{style:{bg:"var(--surface)",border:"1px solid var(--border)",padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.8rem"},children:n},s))}),e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",color:"#6366f1",fontWeight:"500"},children:"View Project Code"}),e.jsx("pre",{style:{marginTop:"1rem",background:"#1e1e2e",padding:"1rem",borderRadius:"10px",overflowX:"auto",color:"#a6accd",fontSize:"0.9rem"},children:e.jsx("code",{children:t.code})})]})]},a)),r.questions&&e.jsx("div",{style:{display:"grid",gap:"2rem"},children:r.questions.map((t,a)=>e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem",color:"#6366f1"},children:t.category}),e.jsx("div",{style:{display:"grid",gap:"1rem"},children:t.items.map((n,s)=>e.jsxs("div",{style:{background:"var(--background)",padding:"1.5rem",borderRadius:"12px",border:"1px solid var(--border)"},children:[e.jsxs("h4",{style:{marginBottom:"0.5rem",fontWeight:"600"},children:["Q: ",n.q]}),e.jsxs("p",{style:{color:"var(--text-secondary)"},children:["A: ",n.a]})]},s))})]},a))}),r.roadmap&&e.jsx("div",{style:{display:"grid",gap:"2rem"},children:e.jsxs("div",{style:{padding:"1.5rem",background:"var(--background)",borderRadius:"16px",border:"1px solid var(--border)"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"After C Programming"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:r.roadmap.afterC.map((t,a)=>e.jsxs("div",{style:{padding:"1rem",background:"rgba(99, 102, 241, 0.05)",borderRadius:"12px"},children:[e.jsx("h4",{style:{color:"#6366f1",marginBottom:"0.5rem"},children:t.topic}),e.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:t.duration})]},a))})]})})]})]},i)}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alert:"center",marginTop:"3rem",paddingTop:"2rem",borderTop:"1px solid var(--border)"},children:[e.jsxs("button",{onClick:m,style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(g,{size:18})," Back to Roadmap"]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("button",{onClick:()=>d(Math.max(0,i-1)),disabled:i===0,style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:"var(--surface)",border:"1px solid var(--border)",color:i===0?"var(--text-secondary)":"var(--text)",cursor:i===0?"not-allowed":"pointer",opacity:i===0?.5:1},children:"Previous Level"}),e.jsx("button",{onClick:()=>d(Math.min(o.levels.length-1,i+1)),disabled:i===o.levels.length-1,style:{padding:"0.75rem 1.5rem",borderRadius:"12px",background:"#6366f1",border:"none",color:"white",cursor:i===o.levels.length-1?"not-allowed":"pointer",opacity:i===o.levels.length-1?.5:1},children:"Next Level"})]})]})]})};export{w as default};
