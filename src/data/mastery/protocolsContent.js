export const protocolsContent = {
    id: 'protocols',
    title: 'Protocols Explained',
    subtitle: 'UART, I2C, SPI - simplified for real-world use',
    sections: [
        {
            id: 'uart-serial',
            title: '📟 UART / Serial Communication',
            content: `
## What is UART?

**UART** (Universal Asynchronous Receiver-Transmitter) is the simplest communication protocol:
- **2 wires**: TX (transmit) and RX (receive)
- **Asynchronous**: No shared clock signal
- **Point-to-point**: One device to one device

### How It Works

\`\`\`
Device A                    Device B
  TX  ─────────────────────→  RX
  RX  ←─────────────────────  TX
 GND  ─────────────────────  GND
\`\`\`

**Key Concept**: TX of one device connects to RX of the other!

### Baud Rate

The **speed** of communication (bits per second):

| Baud Rate | Use Case |
|-----------|----------|
| 9600 | Old devices, slow sensors |
| 115200 | **Most common** for debugging |
| 230400 | High-speed data transfer |
| 921600 | Maximum for most Arduinos |

**⚠️ CRITICAL**: Both devices must use the **same baud rate**!

### Basic UART Code

\`\`\`cpp
void setup() {
    Serial.begin(115200);  // Initialize at 115200 baud
    Serial.println("UART Ready!");
}

void loop() {
    // Send data
    Serial.print("Sensor Value: ");
    Serial.println(analogRead(A0));
    
    // Receive data
    if (Serial.available() > 0) {
        char received = Serial.read();
        Serial.print("Received: ");
        Serial.println(received);
    }
    
    delay(1000);
}
\`\`\`

### Advanced: Sending Structured Data

\`\`\`cpp
// Sending multiple values
void sendData(int temp, int humidity, int light) {
    Serial.print(temp);
    Serial.print(",");
    Serial.print(humidity);
    Serial.print(",");
    Serial.println(light);
}

// Receiving and parsing
void loop() {
    if (Serial.available() > 0) {
        String data = Serial.readStringUntil('\\n');
        
        // Parse CSV format
        int comma1 = data.indexOf(',');
        int comma2 = data.indexOf(',', comma1 + 1);
        
        int temp = data.substring(0, comma1).toInt();
        int humidity = data.substring(comma1 + 1, comma2).toInt();
        int light = data.substring(comma2 + 1).toInt();
    }
}
\`\`\`

### Common Issues

**Problem**: Garbage characters in Serial Monitor
**Solution**: Check baud rate matches in code and monitor

**Problem**: No data received
**Solution**: 
1. Verify TX→RX and RX→TX crossover
2. Check GND connection
3. Confirm both devices powered

### Use Cases
- ✅ Arduino ↔ Computer debugging
- ✅ GPS modules
- ✅ Bluetooth modules (HC-05, HC-06)
- ✅ ESP32 ↔ Arduino communication
- ❌ Multiple devices (use I2C or SPI instead)
            `
        },
        {
            id: 'i2c-protocol',
            title: '🔗 I2C Communication',
            content: `
## What is I2C?

**I2C** (Inter-Integrated Circuit) allows multiple devices on 2 wires:
- **SDA**: Serial Data (bidirectional)
- **SCL**: Serial Clock (master controls timing)
- **Multi-device**: Up to 127 devices on same bus!

### I2C Bus Structure

\`\`\`
        Master (Arduino)
           |
    ┌──────┴──────┐
   SDA          SCL
    │            │
    ├────────────┤ (Pull-up resistors: 4.7kΩ)
    │            │
    ├─Device 1───┤ (Address: 0x3C)
    │            │
    ├─Device 2───┤ (Address: 0x68)
    │            │
    └─Device 3───┘ (Address: 0x76)
\`\`\`

### Arduino I2C Pins

| Board | SDA | SCL |
|-------|-----|-----|
| Arduino Uno | A4 | A5 |
| Arduino Mega | 20 | 21 |
| ESP32 | 21 | 22 |
| ESP8266 | GPIO4 | GPIO5 |

### I2C Addressing

Each device has a **unique 7-bit address** (0x00 to 0x7F):

| Device | Typical Address |
|--------|----------------|
| OLED Display | 0x3C or 0x3D |
| MPU6050 (Gyro) | 0x68 or 0x69 |
| BMP280 (Pressure) | 0x76 or 0x77 |
| PCF8574 (I/O Expander) | 0x20 to 0x27 |

### I2C Scanner Code

**Essential tool** to find device addresses:

\`\`\`cpp
#include <Wire.h>

void setup() {
    Serial.begin(115200);
    Wire.begin();
    
    Serial.println("\\nI2C Scanner");
    Serial.println("Scanning...");
    
    byte count = 0;
    for (byte addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        byte error = Wire.endTransmission();
        
        if (error == 0) {
            Serial.print("Device found at 0x");
            if (addr < 16) Serial.print("0");
            Serial.println(addr, HEX);
            count++;
        }
    }
    
    Serial.print("\\nFound ");
    Serial.print(count);
    Serial.println(" device(s)");
}

void loop() {}
\`\`\`

### Reading from I2C Device

\`\`\`cpp
#include <Wire.h>

#define DEVICE_ADDR 0x68  // MPU6050 address

void setup() {
    Serial.begin(115200);
    Wire.begin();
}

void loop() {
    Wire.beginTransmission(DEVICE_ADDR);
    Wire.write(0x3B);  // Register to read from
    Wire.endTransmission(false);  // Keep connection alive
    
    Wire.requestFrom(DEVICE_ADDR, 2);  // Request 2 bytes
    
    if (Wire.available() >= 2) {
        byte highByte = Wire.read();
        byte lowByte = Wire.read();
        int16_t value = (highByte << 8) | lowByte;
        
        Serial.print("Value: ");
        Serial.println(value);
    }
    
    delay(100);
}
\`\`\`

### Writing to I2C Device

\`\`\`cpp
void writeRegister(byte addr, byte reg, byte value) {
    Wire.beginTransmission(addr);
    Wire.write(reg);     // Register address
    Wire.write(value);   // Data to write
    Wire.endTransmission();
}

// Example: Configure MPU6050
void setup() {
    Wire.begin();
    writeRegister(0x68, 0x6B, 0x00);  // Wake up MPU6050
}
\`\`\`

### Pull-up Resistors

**CRITICAL**: I2C requires pull-up resistors on SDA and SCL!

\`\`\`
5V ─┬─ 4.7kΩ ─┬─ SDA (to all devices)
    │          │
    └─ 4.7kΩ ─┴─ SCL (to all devices)
\`\`\`

**Why?**
- I2C uses open-drain outputs
- Pull-ups ensure signals return to HIGH
- Without them: communication fails!

**Note**: Some modules have built-in pull-ups (check before adding more)

### Common Issues

**Problem**: I2C scanner finds no devices
**Solutions**:
1. Check pull-up resistors (4.7kΩ)
2. Verify SDA/SCL connections
3. Check device power (3.3V vs 5V)
4. Try different addresses

**Problem**: Works with one device, fails with multiple
**Solutions**:
1. Ensure unique addresses
2. Add stronger pull-ups (2.2kΩ)
3. Shorten wire lengths

**Problem**: Random freezes
**Solutions**:
1. Add timeout to Wire operations
2. Check for bus conflicts
3. Verify power supply stability

### Use Cases
- ✅ OLED/LCD displays
- ✅ Sensor modules (temp, pressure, gyro)
- ✅ Real-time clocks (RTC)
- ✅ I/O expanders
- ❌ High-speed data (use SPI)
- ❌ Long distances (use UART or CAN)
            `
        },
        {
            id: 'spi-protocol',
            title: '⚡ SPI Communication',
            content: `
## What is SPI?

**SPI** (Serial Peripheral Interface) is the **fastest** common protocol:
- **4 wires** minimum
- **Synchronous**: Master provides clock
- **Full-duplex**: Send and receive simultaneously
- **Speed**: Up to 10+ MHz

### SPI Bus Structure

\`\`\`
Master (Arduino)
    │
    ├─ MOSI (Master Out, Slave In)
    ├─ MISO (Master In, Slave Out)
    ├─ SCK  (Serial Clock)
    │
    ├─ CS1 (Chip Select for Device 1)
    ├─ CS2 (Chip Select for Device 2)
    └─ CS3 (Chip Select for Device 3)
\`\`\`

**Key Difference from I2C**: Each device needs its own CS (Chip Select) pin!

### Arduino SPI Pins

| Board | MOSI | MISO | SCK | SS/CS |
|-------|------|------|-----|-------|
| Uno/Nano | 11 | 12 | 13 | 10 |
| Mega | 51 | 50 | 52 | 53 |
| ESP32 | 23 | 19 | 18 | 5 |

### Basic SPI Code

\`\`\`cpp
#include <SPI.h>

const int CS_PIN = 10;

void setup() {
    pinMode(CS_PIN, OUTPUT);
    digitalWrite(CS_PIN, HIGH);  // Deselect device
    
    SPI.begin();
    SPI.setClockDivider(SPI_CLOCK_DIV16);  // 1 MHz
}

void loop() {
    digitalWrite(CS_PIN, LOW);   // Select device
    
    byte response = SPI.transfer(0xAB);  // Send 0xAB, receive response
    
    digitalWrite(CS_PIN, HIGH);  // Deselect device
    
    delay(100);
}
\`\`\`

### SPI Modes

SPI has 4 modes based on **clock polarity** and **phase**:

| Mode | CPOL | CPHA | When to Use |
|------|------|------|-------------|
| 0 | 0 | 0 | **Most common** (SD cards, displays) |
| 1 | 0 | 1 | Some sensors |
| 2 | 1 | 0 | Rare |
| 3 | 1 | 1 | Some ADCs |

\`\`\`cpp
// Set SPI mode
SPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0));
// ... transfer data ...
SPI.endTransaction();
\`\`\`

### Reading from SPI Device

\`\`\`cpp
byte readRegister(byte reg) {
    digitalWrite(CS_PIN, LOW);
    
    SPI.transfer(reg | 0x80);  // Set read bit
    byte value = SPI.transfer(0x00);  // Dummy byte to receive data
    
    digitalWrite(CS_PIN, HIGH);
    return value;
}
\`\`\`

### Writing to SPI Device

\`\`\`cpp
void writeRegister(byte reg, byte value) {
    digitalWrite(CS_PIN, LOW);
    
    SPI.transfer(reg & 0x7F);  // Clear write bit
    SPI.transfer(value);
    
    digitalWrite(CS_PIN, HIGH);
}
\`\`\`

### Multiple SPI Devices

\`\`\`cpp
const int CS_DISPLAY = 10;
const int CS_SD_CARD = 9;
const int CS_SENSOR = 8;

void setup() {
    pinMode(CS_DISPLAY, OUTPUT);
    pinMode(CS_SD_CARD, OUTPUT);
    pinMode(CS_SENSOR, OUTPUT);
    
    // Deselect all
    digitalWrite(CS_DISPLAY, HIGH);
    digitalWrite(CS_SD_CARD, HIGH);
    digitalWrite(CS_SENSOR, HIGH);
    
    SPI.begin();
}

void readSensor() {
    digitalWrite(CS_SENSOR, LOW);
    byte data = SPI.transfer(0x00);
    digitalWrite(CS_SENSOR, HIGH);
}
\`\`\`

### SPI vs I2C Comparison

| Feature | SPI | I2C |
|---------|-----|-----|
| **Speed** | Very fast (10+ MHz) | Moderate (400 kHz) |
| **Wires** | 4+ (MOSI, MISO, SCK, CS) | 2 (SDA, SCL) |
| **Devices** | Limited by CS pins | 127 devices |
| **Complexity** | Simple protocol | More complex |
| **Distance** | Short (< 1m) | Short (< 1m) |

**Use SPI when**: Speed is critical (displays, SD cards, high-speed ADCs)
**Use I2C when**: Multiple devices, limited pins

### Common Issues

**Problem**: No response from device
**Solutions**:
1. Check CS pin is correct
2. Verify MOSI/MISO not swapped
3. Try different SPI modes
4. Check clock speed (some devices have max speed)

**Problem**: Data corruption
**Solutions**:
1. Reduce SPI clock speed
2. Shorten wires
3. Add decoupling capacitors (0.1μF near device)

**Problem**: Works alone, fails with multiple devices
**Solutions**:
1. Ensure CS pins are independent
2. Deselect all devices in setup()
3. Check for bus conflicts

### Advanced: DMA Transfer

For high-speed continuous data:

\`\`\`cpp
// ESP32 example
#include <driver/spi_master.h>

spi_device_handle_t spi;

void setup() {
    spi_bus_config_t buscfg = {
        .mosi_io_num = 23,
        .miso_io_num = 19,
        .sclk_io_num = 18,
        .quadwp_io_num = -1,
        .quadhd_io_num = -1,
        .max_transfer_sz = 4096
    };
    
    spi_bus_initialize(HSPI_HOST, &buscfg, 1);  // DMA channel 1
}
\`\`\`

### Use Cases
- ✅ TFT displays (fast refresh)
- ✅ SD cards (high-speed storage)
- ✅ High-speed ADCs/DACs
- ✅ NRF24L01 (wireless)
- ❌ Simple sensors (I2C is easier)
- ❌ Long distances (use UART or CAN)
            `
        },
        {
            id: 'protocol-comparison',
            title: '📊 Protocol Selection Guide',
            content: `
## Quick Decision Tree

\`\`\`
Need to communicate with a device?
│
├─ Only 1 device, simple data?
│  └─ Use UART (2 wires, easy)
│
├─ Multiple devices, moderate speed?
│  └─ Use I2C (2 wires, 127 devices)
│
└─ High speed, lots of data?
   └─ Use SPI (4+ wires, very fast)
\`\`\`

## Real-World Examples

### Example 1: Weather Station
**Components**: DHT22, BMP280, OLED display

**Best Choice**: **I2C**
- BMP280 has I2C (address 0x76)
- OLED has I2C (address 0x3C)
- DHT22 uses digital pin (not a protocol)
- Only 2 wires needed for multiple devices

### Example 2: Data Logger
**Components**: SD card, RTC, sensors

**Best Choice**: **SPI for SD card** + **I2C for RTC**
- SD card needs speed → SPI
- RTC is slow, needs precision → I2C
- Mix protocols on same Arduino!

### Example 3: GPS Tracker
**Components**: GPS module, ESP32

**Best Choice**: **UART**
- GPS sends NMEA sentences via serial
- Simple point-to-point
- Standard 9600 baud

## Mixing Protocols

You can use **all three** on one Arduino!

\`\`\`cpp
#include <Wire.h>
#include <SPI.h>

void setup() {
    // UART
    Serial.begin(115200);
    
    // I2C
    Wire.begin();
    
    // SPI
    SPI.begin();
    pinMode(10, OUTPUT);  // CS pin
}
\`\`\`

## Troubleshooting Matrix

| Symptom | UART | I2C | SPI |
|---------|------|-----|-----|
| No response | Check baud rate | Run I2C scanner | Check CS pin |
| Garbage data | TX/RX swapped | Missing pull-ups | Wrong SPI mode |
| Works then stops | Buffer overflow | Bus conflict | CS not deselected |
| Slow performance | Lower baud rate | Clock stretching | Reduce SPI speed |

## Best Practices

### 1. Start with Examples
Every library has examples. **Use them first!**

\`\`\`cpp
// Arduino IDE → File → Examples → Wire → master_writer
\`\`\`

### 2. Use Libraries
Don't write raw protocol code unless necessary:
- **UART**: \`Serial\` (built-in)
- **I2C**: \`Wire\` (built-in)
- **SPI**: \`SPI\` (built-in)

### 3. Add Timeouts
Prevent infinite loops:

\`\`\`cpp
unsigned long startTime = millis();
while (!Serial.available()) {
    if (millis() - startTime > 5000) {
        Serial.println("Timeout!");
        break;
    }
}
\`\`\`

### 4. Document Your Connections
\`\`\`cpp
/* 
 * I2C Devices:
 * - OLED Display (0x3C) → SDA: A4, SCL: A5
 * - BMP280 (0x76) → SDA: A4, SCL: A5
 * 
 * SPI Devices:
 * - SD Card → CS: Pin 10, MOSI: 11, MISO: 12, SCK: 13
 */
\`\`\`

## Advanced Topics

### 1. Bus Arbitration (I2C)
- Master controls the bus
- Slaves can't initiate communication
- Clock stretching for slow devices

### 2. Daisy Chaining (SPI)
Some devices support daisy chaining:
\`\`\`
Master → Device 1 → Device 2 → Device 3 → Master
\`\`\`
Saves CS pins but adds complexity.

### 3. Interrupt-Driven Communication
For real-time systems:
\`\`\`cpp
volatile bool dataReady = false;

void setup() {
    attachInterrupt(digitalPinToInterrupt(2), dataReadyISR, RISING);
}

void dataReadyISR() {
    dataReady = true;
}
\`\`\`

## Resources

### Datasheets
**Always read the datasheet!** Look for:
- Communication protocol section
- Register map
- Timing diagrams
- Example code

### Logic Analyzer
**Best debugging tool** for protocols:
- See actual signals
- Decode I2C/SPI/UART
- Find timing issues
- ~$10 on Amazon

### Oscilloscope
For advanced debugging:
- Measure signal quality
- Check clock accuracy
- Find noise issues
            `
        }
    ]
};
