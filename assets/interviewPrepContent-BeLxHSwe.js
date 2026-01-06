const e={id:"interview-prep",title:"Interview Preparation",subtitle:"Top technical questions asked in IoT companies",sections:[{id:"technical-questions",title:"💻 Technical Questions",content:`
## Arduino & Microcontrollers

**Q1: What is the difference between digitalWrite() and analogWrite()?**

**Answer**: 
- \`digitalWrite()\` sets pin to HIGH (5V) or LOW (0V) - digital output
- \`analogWrite()\` uses PWM to simulate analog output (0-255) - only on PWM pins

**Follow-up**: "Which pins support PWM on Arduino Uno?"
→ Pins 3, 5, 6, 9, 10, 11

---

**Q2: Explain the difference between delay() and millis()**

**Answer**:
- \`delay()\` blocks entire program execution
- \`millis()\` returns time since program started, allows non-blocking code

**Example**:
\`\`\`cpp
// Non-blocking blink
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    if (millis() - previousMillis >= interval) {
        previousMillis = millis();
        digitalWrite(LED, !digitalRead(LED));
    }
    // Can do other things here
}
\`\`\`

---

**Q3: What is the purpose of pull-up/pull-down resistors?**

**Answer**:
- Prevents floating inputs (undefined state)
- Pull-up: Connects to VCC via resistor (default HIGH)
- Pull-down: Connects to GND via resistor (default LOW)

**Arduino has internal pull-ups**: \`pinMode(pin, INPUT_PULLUP)\`

---

**Q4: How do interrupts work? When would you use them?**

**Answer**:
- Hardware mechanism to pause main code and execute ISR
- Use for time-critical events: button presses, encoder, frequency counting
- Keep ISR short and fast
- Use \`volatile\` for variables shared with ISR

---

**Q5: What is PWM and how does it work?**

**Answer**:
- Pulse Width Modulation - rapidly switching between HIGH and LOW
- Duty cycle determines average voltage
- 50% duty cycle = 2.5V average on 5V system
- Used for LED dimming, motor speed control

## Communication Protocols

**Q6: Explain I2C protocol**

**Answer**:
- 2-wire protocol (SDA, SCL)
- Master-slave architecture
- Multiple devices on same bus (up to 127)
- Each device has unique 7-bit address
- Requires pull-up resistors (4.7kΩ)

**Common I2C addresses**:
- OLED: 0x3C
- MPU6050: 0x68
- BMP280: 0x76

---

**Q7: SPI vs I2C - when to use which?**

**Answer**:

| Feature | SPI | I2C |
|---------|-----|-----|
| Speed | Faster (10+ MHz) | Slower (400 kHz) |
| Wires | 4+ (MOSI, MISO, SCK, CS) | 2 (SDA, SCL) |
| Devices | Limited by CS pins | 127 devices |
| Use case | High-speed (displays, SD) | Multiple sensors |

---

**Q8: What is UART? How is it different from I2C/SPI?**

**Answer**:
- Universal Asynchronous Receiver-Transmitter
- Point-to-point (one-to-one)
- 2 wires: TX, RX (crossover connection)
- Asynchronous (no clock signal)
- Both devices must use same baud rate
- Used for: GPS, Bluetooth modules, serial debugging

## ESP32 & WiFi

**Q9: ESP32 vs ESP8266 - key differences?**

**Answer**:

| Feature | ESP8266 | ESP32 |
|---------|---------|-------|
| CPU | 80MHz single | 240MHz dual-core |
| RAM | 80KB | 520KB |
| Bluetooth | No | Yes (BLE) |
| GPIO | ~9 usable | 34 pins |
| ADC | 1× 10-bit | 18× 12-bit |

---

**Q10: How do you reduce power consumption in ESP32?**

**Answer**:
1. **Deep sleep**: \`esp_deep_sleep_start()\` → 10μA
2. **Lower CPU frequency**: \`setCpuFrequencyMhz(80)\`
3. **Disable WiFi when not needed**: \`WiFi.mode(WIFI_OFF)\`
4. **Use light sleep** for shorter intervals
5. **Optimize wake-up sources**: Timer, GPIO, touch

**Example**:
\`\`\`cpp
esp_sleep_enable_timer_wakeup(10 * 60 * 1000000); // 10 min
esp_deep_sleep_start();
\`\`\`

---

**Q11: Explain MQTT protocol**

**Answer**:
- Lightweight pub/sub messaging protocol
- Broker-based (mosquitto, HiveMQ)
- Topics for organizing messages
- QoS levels: 0 (at most once), 1 (at least once), 2 (exactly once)
- Used in IoT for device-to-cloud communication

**Example**:
\`\`\`cpp
client.publish("home/temperature", "25.5");
client.subscribe("home/commands");
\`\`\`
            `},{id:"coding-challenges",title:"⌨️ Coding Challenges",content:`
## Challenge 1: Debounce a Button

**Problem**: Write code to debounce a button press

\`\`\`cpp
const int BUTTON_PIN = 2;
int lastState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(BUTTON_PIN);
    
    if (reading != lastState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading == LOW) {
            Serial.println("Button pressed!");
            while(digitalRead(BUTTON_PIN) == LOW); // Wait for release
        }
    }
    
    lastState = reading;
}
\`\`\`

---

## Challenge 2: Moving Average Filter

**Problem**: Implement a moving average filter for sensor data

\`\`\`cpp
const int WINDOW_SIZE = 10;
int readings[WINDOW_SIZE];
int index = 0;
long sum = 0;

int addReading(int value) {
    sum -= readings[index];
    readings[index] = value;
    sum += value;
    index = (index + 1) % WINDOW_SIZE;
    return sum / WINDOW_SIZE;
}

void loop() {
    int raw = analogRead(A0);
    int filtered = addReading(raw);
    Serial.println(filtered);
    delay(10);
}
\`\`\`

---

## Challenge 3: State Machine

**Problem**: Implement a traffic light state machine

\`\`\`cpp
enum State { RED, YELLOW, GREEN };
State currentState = RED;
unsigned long stateStartTime = 0;

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    switch(currentState) {
        case RED:
            digitalWrite(RED_LED, HIGH);
            if (elapsed >= 5000) {
                digitalWrite(RED_LED, LOW);
                currentState = GREEN;
                stateStartTime = millis();
            }
            break;
            
        case GREEN:
            digitalWrite(GREEN_LED, HIGH);
            if (elapsed >= 5000) {
                digitalWrite(GREEN_LED, LOW);
                currentState = YELLOW;
                stateStartTime = millis();
            }
            break;
            
        case YELLOW:
            digitalWrite(YELLOW_LED, HIGH);
            if (elapsed >= 2000) {
                digitalWrite(YELLOW_LED, LOW);
                currentState = RED;
                stateStartTime = millis();
            }
            break;
    }
}
\`\`\`

---

## Challenge 4: Parse Serial Data

**Problem**: Parse comma-separated values from serial

\`\`\`cpp
void loop() {
    if (Serial.available() > 0) {
        String data = Serial.readStringUntil('\\n');
        
        int comma1 = data.indexOf(',');
        int comma2 = data.indexOf(',', comma1 + 1);
        
        String cmd = data.substring(0, comma1);
        int value1 = data.substring(comma1 + 1, comma2).toInt();
        int value2 = data.substring(comma2 + 1).toInt();
        
        Serial.print("Command: "); Serial.println(cmd);
        Serial.print("Value1: "); Serial.println(value1);
        Serial.print("Value2: "); Serial.println(value2);
    }
}
\`\`\`

---

## Challenge 5: Watchdog Timer

**Problem**: Implement a software watchdog

\`\`\`cpp
unsigned long lastPet = 0;
const unsigned long WATCHDOG_TIMEOUT = 5000;

void petWatchdog() {
    lastPet = millis();
}

void checkWatchdog() {
    if (millis() - lastPet > WATCHDOG_TIMEOUT) {
        Serial.println("Watchdog timeout! Resetting...");
        // Reset or take action
        ESP.restart();
    }
}

void loop() {
    doWork();
    petWatchdog();
    checkWatchdog();
}
\`\`\`
            `},{id:"behavioral-questions",title:"🗣️ Behavioral Questions",content:`
## Project-Based Questions

**Q: Tell me about your most challenging project**

**Structure** (STAR method):
- **Situation**: Describe the project and context
- **Task**: What was your role/goal?
- **Action**: What did you do?
- **Result**: What was the outcome?

**Example Answer**:
"I built an industrial vibration monitoring system for predictive maintenance. The challenge was achieving real-time FFT analysis on ESP32 with limited RAM. I optimized the algorithm by using fixed-point arithmetic and circular buffers, reducing memory usage by 60%. The system has been running in a factory for 6 months with 99% uptime."

---

**Q: Describe a time you debugged a difficult problem**

**Good Answer**:
"My ESP32 kept resetting randomly. I used systematic debugging:
1. Added serial logging to identify reset point
2. Measured power supply with oscilloscope
3. Found voltage dips during WiFi transmission
4. Added 1000μF capacitor and implemented brownout detection
5. Problem solved - no resets in 30-day test"

---

**Q: How do you stay updated with new technologies?**

**Good Answer**:
"I follow Arduino blog, Hackaday, and ESP32 forums. I experiment with new sensors and modules on weekends. Recently learned about TinyML and implemented a gesture recognition system on ESP32. I also contribute to open-source Arduino libraries."

---

**Q: Tell me about a project that failed**

**Good Answer**:
"I attempted to build a solar-powered weather station but underestimated power consumption. ESP32 drained battery in 2 days instead of planned 30 days. I learned to:
1. Calculate power budget before building
2. Measure actual consumption, not rely on datasheets
3. Implement deep sleep properly
Rebuilt it successfully with 45-day battery life."

## Technical Problem-Solving

**Q: How would you design a smart parking system?**

**Approach**:
1. **Clarify requirements**: How many slots? Indoor/outdoor? Budget?
2. **Propose architecture**: Sensors (IR/ultrasonic) → ESP32 → Cloud → App
3. **Discuss trade-offs**: Cost vs accuracy, power vs features
4. **Address challenges**: Weatherproofing, communication range, power
5. **Suggest improvements**: ML for prediction, mobile payments

---

**Q: Your IoT device keeps disconnecting from WiFi. How do you debug?**

**Systematic Approach**:
1. Check signal strength (RSSI)
2. Verify router settings (DHCP, MAC filtering)
3. Test with different networks
4. Add reconnection logic with exponential backoff
5. Implement watchdog timer
6. Log disconnect events for pattern analysis

---

**Q: How would you secure an IoT device?**

**Answer**:
1. **Communication**: Use HTTPS/TLS, not HTTP
2. **Authentication**: API keys, OAuth tokens
3. **OTA Updates**: Signed firmware, version checking
4. **Data**: Encrypt sensitive data
5. **Physical**: Disable debug ports in production
6. **Network**: Firewall rules, VPN for critical devices

## Salary & Career

**Q: What are your salary expectations?**

**Research first**:
- Glassdoor, PayScale for your location
- Entry-level IoT: $40k-60k (varies by location)
- 2-3 years experience: $60k-90k

**Answer**:
"Based on my research and skills in ESP32, cloud integration, and machine learning, I'm looking for $X-Y range. However, I'm flexible and more interested in learning opportunities."

---

**Q: Where do you see yourself in 5 years?**

**Good Answer**:
"I want to become an expert in IoT system architecture, leading projects from concept to deployment. I'm particularly interested in edge AI and want to contribute to making IoT devices more intelligent and efficient. I see myself as a senior IoT engineer or technical lead."

## Questions to Ask Interviewer

**Technical**:
- What IoT platforms/technologies does the team use?
- What's the typical project lifecycle?
- How do you handle firmware updates in production?

**Growth**:
- What learning opportunities are available?
- Do you support conference attendance or certifications?
- What's the career progression path?

**Culture**:
- How does the team collaborate?
- What's the work-life balance like?
- What's the most exciting project the team is working on?
            `},{id:"preparation-strategy",title:"📚 Preparation Strategy",content:`
## 30-Day Interview Prep Plan

### Week 1: Fundamentals Review

**Day 1-2**: Arduino basics
- Digital/analog I/O
- PWM, interrupts
- Serial communication

**Day 3-4**: Communication protocols
- I2C, SPI, UART
- Write sample code for each

**Day 5-7**: ESP32/ESP8266
- WiFi basics
- MQTT, HTTP
- Power management

### Week 2: Advanced Topics

**Day 8-10**: Sensors & Actuators
- How sensors work
- Calibration techniques
- Motor control

**Day 11-12**: Data Structures
- Arrays, linked lists
- Queues, stacks
- State machines

**Day 13-14**: Debugging & Testing
- Multimeter usage
- Logic analyzer
- Common issues

### Week 3: Project Review

**Day 15-17**: Document your projects
- Update GitHub READMEs
- Create demo videos
- Prepare explanations

**Day 18-19**: Practice explaining
- Record yourself
- 2-minute project pitch
- Technical deep-dive

**Day 20-21**: Mock interviews
- Practice with friend
- Record and review
- Improve answers

### Week 4: Final Prep

**Day 22-24**: Coding practice
- Implement common patterns
- Solve challenges
- Time yourself

**Day 25-26**: Company research
- Study their products
- Understand tech stack
- Prepare questions

**Day 27-28**: Behavioral prep
- STAR method practice
- Prepare stories
- Rehearse answers

**Day 29-30**: Final review
- Review notes
- Relax and rest
- Prepare materials

## Resources

### Online Platforms
- **LeetCode**: Coding challenges
- **HackerRank**: IoT-specific problems
- **Coursera**: IoT courses
- **YouTube**: Technical tutorials

### Books
- "Making Embedded Systems" by Elecia White
- "Designing Embedded Systems" by John Catsoulis
- "The Art of Electronics" by Horowitz & Hill

### Practice Projects
Build these before interviews:
1. Temperature monitoring system
2. MQTT-based home automation
3. Sensor data logger
4. BLE-controlled device

## Interview Day Checklist

**Materials**:
☐ Resume (3 copies)
☐ Project portfolio (printed)
☐ Laptop with projects
☐ Demo videos (offline backup)
☐ Notebook and pen

**Technical**:
☐ Charge laptop fully
☐ Test demo projects
☐ Backup code to USB
☐ Screenshots of working projects

**Personal**:
☐ Professional attire
☐ Arrive 15 minutes early
☐ Bring water
☐ Turn off phone
☐ Positive attitude!

## Common Mistakes to Avoid

❌ **Not preparing projects**: Can't explain your own work
❌ **Memorizing answers**: Sounds robotic
❌ **Badmouthing previous employer**: Unprofessional
❌ **Not asking questions**: Shows lack of interest
❌ **Lying about skills**: Will be caught in technical round
❌ **Being late**: First impression matters
❌ **Not following up**: Send thank-you email

## Success Metrics

**You're ready when**:
✅ Can explain all your projects in detail
✅ Comfortable with coding challenges
✅ Know communication protocols well
✅ Can debug common issues
✅ Researched the company
✅ Prepared thoughtful questions
✅ Practiced mock interviews
✅ Confident but humble

## Final Tips

1. **Be honest**: Don't know? Say "I don't know, but I'd approach it by..."
2. **Think aloud**: Show your problem-solving process
3. **Ask clarifying questions**: Shows thoughtfulness
4. **Stay calm**: Take a breath before answering
5. **Be enthusiastic**: Show genuine interest in IoT
6. **Follow up**: Send thank-you email within 24 hours

**Remember**: Interviews are conversations, not interrogations. Be yourself, show your passion for IoT, and demonstrate your willingness to learn!
            `}]};export{e as interviewPrepContent};
