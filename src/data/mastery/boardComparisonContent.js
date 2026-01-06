export const boardComparisonContent = {
    id: 'board-comparison',
    title: 'Board Comparison Guide',
    subtitle: 'Choosing the perfect MCU for your specific needs',
    sections: [
        {
            id: 'arduino-family',
            title: '🔵 Arduino Family Comparison',
            content: `
## Arduino Board Comparison

| Board | MCU | Clock | Flash | RAM | Voltage | Price | Best For |
|-------|-----|-------|-------|-----|---------|-------|----------|
| **Uno R3** | ATmega328P | 16MHz | 32KB | 2KB | 5V | $25 | Learning, simple projects |
| **Nano** | ATmega328P | 16MHz | 32KB | 2KB | 5V | $5 | Breadboard projects |
| **Mega** | ATmega2560 | 16MHz | 256KB | 8KB | 5V | $40 | Many pins needed |
| **Pro Mini** | ATmega328P | 8/16MHz | 32KB | 2KB | 3.3/5V | $3 | Tiny, battery projects |
| **Leonardo** | ATmega32u4 | 16MHz | 32KB | 2.5KB | 5V | $20 | USB HID (keyboard/mouse) |
| **Due** | AT91SAM3X8E | 84MHz | 512KB | 96KB | 3.3V | $40 | High performance |

### Arduino Uno R3 - The Standard

**Pros**:
- Most tutorials and libraries
- 5V logic (compatible with most sensors)
- Stable and reliable
- Easy to use

**Cons**:
- Limited memory (2KB RAM!)
- Slow (16MHz)
- No WiFi/Bluetooth
- Large size

**When to use**:
- Learning Arduino
- Simple projects
- Lots of online support needed

**Avoid when**:
- Need WiFi/Bluetooth
- Complex code (runs out of RAM)
- Battery powered (power hungry)

### Arduino Nano - Compact Uno

**Identical to Uno** but:
- Breadboard-friendly
- Mini USB (or USB-C on newer versions)
- Cheaper ($5 vs $25)

**Perfect for**: Permanent installations, breadboard prototypes

### Arduino Mega - More of Everything

**When you need**:
- 54 digital pins (vs 14 on Uno)
- 16 analog inputs (vs 6 on Uno)
- 4 UARTs (vs 1 on Uno)
- 256KB flash (vs 32KB on Uno)

**Use cases**:
- 3D printers (RAMPS shield)
- CNC machines
- Many sensors/actuators
- Complex projects

**Drawback**: Still no WiFi, still 5V only

### Arduino Leonardo - USB Native

**Special feature**: ATmega32u4 has native USB

**Can act as**:
- Keyboard
- Mouse
- Game controller
- MIDI device

\`\`\`cpp
#include <Keyboard.h>

void setup() {
    Keyboard.begin();
}

void loop() {
    if (digitalRead(2) == LOW) {
        Keyboard.print("Hello!");
        delay(1000);
    }
}
\`\`\`

**Use cases**: Custom input devices, automation scripts

### Arduino Due - 32-bit Powerhouse

**Pros**:
- 84MHz (5× faster than Uno)
- 96KB RAM (48× more than Uno)
- 12-bit ADC (vs 10-bit)
- 2× DAC outputs

**Cons**:
- **3.3V ONLY** (can damage with 5V!)
- Fewer libraries
- More expensive

**When to use**: DSP, audio processing, fast calculations
            `
        },
        {
            id: 'esp-family',
            title: '📡 ESP Family (WiFi/Bluetooth)',
            content: `
## ESP8266 vs ESP32 Comparison

| Feature | ESP8266 | ESP32 |
|---------|---------|-------|
| **CPU** | 80MHz (single core) | 240MHz (dual core) |
| **Flash** | 4MB typical | 4MB typical |
| **RAM** | 80KB | 520KB |
| **WiFi** | 802.11 b/g/n | 802.11 b/g/n |
| **Bluetooth** | ❌ No | ✅ BLE 4.2 |
| **GPIO** | 9-11 usable | 34 pins |
| **ADC** | 1× 10-bit | 18× 12-bit |
| **DAC** | ❌ No | 2× 8-bit |
| **Touch** | ❌ No | 10 pins |
| **Price** | $2-3 | $4-6 |

### ESP8266 (NodeMCU, Wemos D1)

**Pros**:
- Cheapest WiFi solution
- Low power in deep sleep (20μA)
- Mature ecosystem
- Arduino IDE support

**Cons**:
- Limited pins (only ~9 usable)
- No Bluetooth
- Single core (can't multitask well)
- Boot mode pins are tricky

**Best for**:
- Simple WiFi projects
- IoT sensors
- Home automation
- Budget projects

**Example Use Cases**:
- WiFi weather station
- Smart switch
- MQTT sensor node
- Web server (simple)

### ESP32 (DevKit, WROOM, WROVER)

**Pros**:
- Dual core (can run WiFi on one core, code on other)
- Bluetooth + WiFi simultaneously
- More pins, more ADCs
- Touch sensors built-in
- Faster and more RAM

**Cons**:
- Slightly more expensive
- Higher power consumption
- More complex (can be overkill)

**Best for**:
- Complex IoT projects
- BLE applications
- Audio processing
- Camera projects (ESP32-CAM)
- Multitasking needed

**Example Use Cases**:
- BLE beacon
- WiFi + Bluetooth gateway
- Audio streaming
- Image processing
- Web server (complex)

### ESP32 Variants

**ESP32-WROOM**: Standard, most common
**ESP32-WROVER**: Extra 4MB PSRAM (for camera, display)
**ESP32-C3**: RISC-V, single core, cheaper
**ESP32-S2**: No Bluetooth, USB OTG
**ESP32-S3**: Dual core, better AI/ML support

## When to Choose ESP over Arduino

**Choose ESP8266/ESP32 when**:
- Need WiFi or Bluetooth
- Battery powered (deep sleep)
- Need more processing power
- IoT/cloud connectivity

**Choose Arduino when**:
- Learning basics
- 5V sensors (easier compatibility)
- Don't need wireless
- Want maximum stability

## Power Consumption Comparison

| Board | Active | Deep Sleep |
|-------|--------|------------|
| Arduino Uno | 50mA | 0.1mA (with mods) |
| ESP8266 | 80mA | 20μA |
| ESP32 | 160mA (WiFi) | 10μA |
| ESP32 (BLE only) | 100mA | 10μA |

**Battery Life Example** (2500mAh battery):

**Arduino Uno** (always on): 50 hours
**ESP8266** (wake every 10 min for 10s):
- Active: 10s × 6/hour = 1 min/hour
- Sleep: 59 min/hour
- Average: (80mA × 1 + 0.02mA × 59) / 60 = 1.35mA
- **Life: 77 days**

**ESP32** (same pattern):
- Average: (160mA × 1 + 0.01mA × 59) / 60 = 2.68mA
- **Life: 39 days**
            `
        },
        {
            id: 'other-boards',
            title: '🎯 Specialized Boards',
            content: `
## Raspberry Pi Pico (RP2040)

**Specs**:
- Dual-core ARM Cortex-M0+ @ 133MHz
- 264KB RAM
- 2MB Flash
- 26 GPIO pins
- 3× 12-bit ADC
- **Price**: $4

**Pros**:
- Very fast for the price
- Lots of RAM
- PIO (Programmable I/O) - unique feature
- C/C++ or MicroPython

**Cons**:
- No WiFi/Bluetooth (unless Pico W)
- 3.3V only
- Newer ecosystem

**Raspberry Pi Pico W**: Adds WiFi for $6

**Best for**:
- Fast processing
- Custom protocols (PIO)
- MicroPython projects
- USB device emulation

## STM32 (Blue Pill, Black Pill)

**Specs** (STM32F103):
- ARM Cortex-M3 @ 72MHz
- 20KB RAM
- 64KB Flash
- 3.3V
- **Price**: $2-3

**Pros**:
- Very cheap
- Fast
- Professional-grade MCU
- Low power

**Cons**:
- Harder to program (ST-Link needed)
- Fewer tutorials
- 3.3V only

**Best for**:
- Production projects
- Learning ARM
- Low-cost, high-performance

## Teensy (3.2, 4.0, 4.1)

**Specs** (Teensy 4.0):
- ARM Cortex-M7 @ 600MHz (!!)
- 1MB RAM
- 2MB Flash
- Arduino IDE compatible
- **Price**: $20-30

**Pros**:
- Extremely fast
- Excellent audio library
- USB native
- High-quality hardware

**Cons**:
- Expensive
- 3.3V only
- Overkill for simple projects

**Best for**:
- Audio synthesis
- DSP applications
- High-speed data acquisition
- Professional projects

## Micro:bit

**Specs**:
- ARM Cortex-M4 @ 64MHz
- 128KB RAM
- 512KB Flash
- Built-in: LED matrix, buttons, sensors
- **Price**: $15

**Pros**:
- All-in-one (sensors, display, buttons)
- Great for education
- MakeCode (visual programming)
- Bluetooth

**Cons**:
- Limited GPIO
- Not for production
- Bulky

**Best for**: Education, kids, quick prototypes

## Particle (Photon, Argon, Boron)

**Specs** (Photon):
- ARM Cortex-M3 @ 120MHz
- 128KB RAM
- 1MB Flash
- WiFi built-in
- Cloud integration
- **Price**: $19

**Pros**:
- Cloud-first design
- OTA updates
- Cellular option (Boron)
- Professional ecosystem

**Cons**:
- Requires cloud (can be offline)
- More expensive
- Subscription for cellular

**Best for**: Commercial IoT, fleet management

## Comparison Summary

### For Beginners
1. **Arduino Uno** - Best learning platform
2. **Arduino Nano** - Cheaper, same experience
3. **ESP8266** - If you need WiFi

### For IoT Projects
1. **ESP32** - WiFi + BLE, powerful
2. **ESP8266** - WiFi only, cheaper
3. **Particle** - Commercial/production

### For Speed/Performance
1. **Teensy 4.0** - 600MHz beast
2. **ESP32** - 240MHz, dual core
3. **Raspberry Pi Pico** - 133MHz, lots of RAM

### For Battery Life
1. **ESP32** - 10μA deep sleep
2. **ESP8266** - 20μA deep sleep
3. **STM32** - Very low power

### For Many Pins
1. **Arduino Mega** - 54 digital pins
2. **ESP32** - 34 GPIO
3. **Teensy 4.1** - 55 GPIO

### For USB HID
1. **Arduino Leonardo** - Native USB
2. **Teensy** - Excellent USB
3. **Raspberry Pi Pico** - USB device

## Decision Tree

\`\`\`
Need WiFi/Bluetooth?
├─ Yes → ESP32 (or ESP8266 if WiFi only)
└─ No → Continue

Need many pins (>20)?
├─ Yes → Arduino Mega or ESP32
└─ No → Continue

Need high speed (>100MHz)?
├─ Yes → Teensy 4.0 or ESP32
└─ No → Continue

Learning Arduino?
├─ Yes → Arduino Uno
└─ No → Continue

Budget < $5?
├─ Yes → Arduino Nano or ESP8266
└─ No → Continue

Need USB HID?
├─ Yes → Leonardo or Teensy
└─ No → Arduino Uno or Nano
\`\`\`
            `
        },
        {
            id: 'selection-guide',
            title: '✅ Project-Based Selection',
            content: `
## Real-World Project Recommendations

### Home Automation Hub
**Best**: ESP32
- WiFi for connectivity
- Bluetooth for local control
- Enough power for web server
- Deep sleep for battery backup

**Alternative**: ESP8266 (if no BLE needed)

### Weather Station
**Best**: ESP8266 + Solar
- WiFi to send data
- Low power (deep sleep)
- Cheap enough to deploy multiple

**Alternative**: ESP32 (if adding more sensors)

### Robot Car
**Best**: Arduino Mega
- Many pins for motors, sensors
- 5V logic (easy motor drivers)
- Stable, no WiFi complexity

**Alternative**: ESP32 (if need remote control)

### Wearable Device
**Best**: Arduino Pro Mini (3.3V, 8MHz)
- Tiny size
- Low power
- Cheap

**Alternative**: ESP32 (if need BLE)

### Data Logger
**Best**: Arduino Uno + SD card
- Stable, reliable
- Easy to use
- No wireless complexity

**Alternative**: ESP32 (if need WiFi upload)

### LED Matrix Display
**Best**: ESP32
- Fast enough for animations
- WiFi for control
- Lots of pins

**Alternative**: Teensy (if very fast refresh needed)

### Audio Synthesizer
**Best**: Teensy 4.0
- Audio library
- Very fast
- DAC output

**Alternative**: ESP32 (basic audio)

### USB Keyboard/Mouse
**Best**: Arduino Leonardo
- Native USB HID
- Cheap
- Easy to program

**Alternative**: Teensy (more advanced features)

### Sensor Network (Multiple Nodes)
**Best**: ESP8266 (each node)
- WiFi mesh
- Cheap to deploy many
- Low power

**Alternative**: ESP32 (if need BLE mesh)

### Industrial Control
**Best**: STM32
- Reliable
- Professional-grade
- Low cost at scale

**Alternative**: Arduino Mega (easier to program)

## Common Mistakes in Board Selection

### Mistake 1: Using Arduino Uno for WiFi
**Problem**: Need external WiFi module (complex)
**Solution**: Use ESP8266/ESP32 directly

### Mistake 2: Using ESP32 for Simple LED Blink
**Problem**: Overkill, wastes power
**Solution**: Arduino Nano or Pro Mini

### Mistake 3: Using 5V Board with 3.3V Sensors
**Problem**: Need level shifters everywhere
**Solution**: Use 3.3V board (ESP32, Due, STM32)

### Mistake 4: Not Considering Power
**Problem**: Battery dies quickly
**Solution**: Calculate power, use deep sleep

### Mistake 5: Choosing Based on Price Alone
**Problem**: Cheap board can't do the job
**Solution**: Match board to requirements

## Upgrade Path

**Beginner**:
1. Start: Arduino Uno
2. Learn: Sensors, actuators, libraries
3. Next: Arduino Nano (same, but cheaper/smaller)

**Intermediate**:
4. Add WiFi: ESP8266
5. Learn: HTTP, MQTT, cloud
6. Next: ESP32 (more power, BLE)

**Advanced**:
7. Complex projects: Teensy or STM32
8. Production: Custom PCB with chosen MCU
9. Professional: Particle or commercial solutions

## Quick Reference Table

| Need | Recommended Board |
|------|-------------------|
| Learning | Arduino Uno |
| WiFi | ESP8266 or ESP32 |
| Bluetooth | ESP32 |
| Many pins | Arduino Mega or ESP32 |
| Battery powered | ESP32 or Pro Mini |
| USB HID | Leonardo or Teensy |
| Speed | Teensy 4.0 or ESP32 |
| Cheap | Arduino Nano or ESP8266 |
| Audio | Teensy |
| Production | STM32 or ESP32 |

## Final Advice

**Don't overthink it!**
- Arduino Uno: Can't go wrong for learning
- ESP32: Best all-rounder for IoT
- Arduino Nano: Cheap and cheerful

**Start simple, upgrade when needed**
- Begin with what you know
- Switch boards when you hit limitations
- Most projects work on multiple boards

**Consider the ecosystem**
- Arduino: Most tutorials
- ESP32: Best for IoT
- Teensy: Best for audio
- STM32: Best for production
            `
        }
    ]
};
