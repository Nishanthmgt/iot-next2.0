const e={id:"code-hub",title:"Code Explanation Hub",subtitle:"Breaking down complex firmware patterns into plain English",sections:[{id:"state-machines",title:"🔄 State Machines",content:`
## What is a State Machine?

**Definition**: A system that can be in one of several states and transitions between them based on events.

**Real-world example**: Traffic light
- States: Red, Yellow, Green
- Transitions: Timer expires → next state

## Simple State Machine Pattern

\`\`\`cpp
enum State {
    IDLE,
    RUNNING,
    PAUSED,
    STOPPED
};

State currentState = IDLE;

void loop() {
    switch(currentState) {
        case IDLE:
            // Wait for start button
            if(digitalRead(START_BUTTON) == LOW) {
                currentState = RUNNING;
                Serial.println("Started!");
            }
            break;
            
        case RUNNING:
            // Do work
            doWork();
            if(digitalRead(PAUSE_BUTTON) == LOW) {
                currentState = PAUSED;
            }
            if(digitalRead(STOP_BUTTON) == LOW) {
                currentState = STOPPED;
            }
            break;
            
        case PAUSED:
            // Wait for resume
            if(digitalRead(START_BUTTON) == LOW) {
                currentState = RUNNING;
            }
            break;
            
        case STOPPED:
            // Cleanup and return to idle
            cleanup();
            currentState = IDLE;
            break;
    }
}
\`\`\`

## Why Use State Machines?

**Without state machine** (messy):
\`\`\`cpp
bool isRunning = false;
bool isPaused = false;
bool isStopped = false;

void loop() {
    if(isRunning && !isPaused && !isStopped) {
        // Do work
    }
    // Confusing logic...
}
\`\`\`

**With state machine** (clean):
- Clear states
- Predictable transitions
- Easy to debug
- Easy to add features

## Real Example: LED Blink State Machine

\`\`\`cpp
enum BlinkState {
    LED_OFF,
    LED_ON
};

BlinkState state = LED_OFF;
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    unsigned long currentMillis = millis();
    
    switch(state) {
        case LED_OFF:
            if(currentMillis - previousMillis >= interval) {
                previousMillis = currentMillis;
                digitalWrite(LED_PIN, HIGH);
                state = LED_ON;
            }
            break;
            
        case LED_ON:
            if(currentMillis - previousMillis >= interval) {
                previousMillis = currentMillis;
                digitalWrite(LED_PIN, LOW);
                state = LED_OFF;
            }
            break;
    }
}
\`\`\`

## Complex Example: Washing Machine

\`\`\`cpp
enum WashState {
    IDLE,
    FILLING,
    WASHING,
    DRAINING,
    SPINNING,
    DONE
};

WashState state = IDLE;
unsigned long stateStartTime = 0;

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    switch(state) {
        case IDLE:
            if(startButtonPressed()) {
                state = FILLING;
                stateStartTime = millis();
                openWaterValve();
            }
            break;
            
        case FILLING:
            if(waterLevelFull()) {
                closeWaterValve();
                state = WASHING;
                stateStartTime = millis();
                startMotor(SLOW);
            }
            break;
            
        case WASHING:
            if(elapsed >= 5 * 60 * 1000) {  // 5 minutes
                stopMotor();
                state = DRAINING;
                stateStartTime = millis();
                openDrainValve();
            }
            break;
            
        case DRAINING:
            if(waterLevelEmpty()) {
                closeDrainValve();
                state = SPINNING;
                stateStartTime = millis();
                startMotor(FAST);
            }
            break;
            
        case SPINNING:
            if(elapsed >= 2 * 60 * 1000) {  // 2 minutes
                stopMotor();
                state = DONE;
                playDoneSound();
            }
            break;
            
        case DONE:
            if(doorOpened()) {
                state = IDLE;
            }
            break;
    }
}
\`\`\`
            `},{id:"non-blocking-code",title:"⏱️ Non-Blocking Code Patterns",content:`
## The Problem with delay()

\`\`\`cpp
// ❌ BAD: Blocks everything
void loop() {
    digitalWrite(LED, HIGH);
    delay(1000);  // Can't do ANYTHING for 1 second!
    digitalWrite(LED, LOW);
    delay(1000);
}
\`\`\`

**Problems**:
- Can't read sensors during delay
- Can't check buttons
- Can't respond to events
- Entire program frozen

## Solution: Blink Without Delay

\`\`\`cpp
// ✅ GOOD: Non-blocking
unsigned long previousMillis = 0;
const long interval = 1000;
bool ledState = LOW;

void loop() {
    unsigned long currentMillis = millis();
    
    if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis;
        ledState = !ledState;
        digitalWrite(LED, ledState);
    }
    
    // Can do other things here!
    checkButton();
    readSensor();
}
\`\`\`

## Multiple Non-Blocking Timers

\`\`\`cpp
unsigned long led1Previous = 0;
unsigned long led2Previous = 0;
unsigned long sensorPrevious = 0;

const long led1Interval = 1000;   // 1 second
const long led2Interval = 500;    // 0.5 seconds
const long sensorInterval = 2000; // 2 seconds

void loop() {
    unsigned long current = millis();
    
    // LED 1: Blink every 1 second
    if (current - led1Previous >= led1Interval) {
        led1Previous = current;
        digitalWrite(LED1, !digitalRead(LED1));
    }
    
    // LED 2: Blink every 0.5 seconds
    if (current - led2Previous >= led2Interval) {
        led2Previous = current;
        digitalWrite(LED2, !digitalRead(LED2));
    }
    
    // Sensor: Read every 2 seconds
    if (current - sensorPrevious >= sensorInterval) {
        sensorPrevious = current;
        int value = analogRead(A0);
        Serial.println(value);
    }
}
\`\`\`

## Timer Class (Reusable)

\`\`\`cpp
class Timer {
private:
    unsigned long previousMillis;
    unsigned long interval;
    
public:
    Timer(unsigned long ms) : interval(ms), previousMillis(0) {}
    
    bool isReady() {
        unsigned long currentMillis = millis();
        if (currentMillis - previousMillis >= interval) {
            previousMillis = currentMillis;
            return true;
        }
        return false;
    }
    
    void reset() {
        previousMillis = millis();
    }
};

// Usage
Timer led1Timer(1000);
Timer led2Timer(500);
Timer sensorTimer(2000);

void loop() {
    if (led1Timer.isReady()) {
        digitalWrite(LED1, !digitalRead(LED1));
    }
    
    if (led2Timer.isReady()) {
        digitalWrite(LED2, !digitalRead(LED2));
    }
    
    if (sensorTimer.isReady()) {
        int value = analogRead(A0);
        Serial.println(value);
    }
}
\`\`\`

## Timeout Pattern

\`\`\`cpp
unsigned long startTime = millis();
const unsigned long timeout = 5000;  // 5 seconds

while (condition) {
    if (millis() - startTime > timeout) {
        Serial.println("Timeout!");
        break;
    }
    // Do work
}
\`\`\`

## Debouncing Without delay()

\`\`\`cpp
const int buttonPin = 2;
int lastButtonState = HIGH;
int buttonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(buttonPin);
    
    if (reading != lastButtonState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading != buttonState) {
            buttonState = reading;
            
            if (buttonState == LOW) {
                Serial.println("Button pressed!");
            }
        }
    }
    
    lastButtonState = reading;
}
\`\`\`
            `},{id:"interrupts",title:"⚡ Interrupts Explained",content:`
## What are Interrupts?

**Definition**: Hardware mechanism to pause main code and run special function immediately

**Analogy**: You're reading a book (main code), phone rings (interrupt), you answer (ISR), then continue reading

## When to Use Interrupts

**Good use cases**:
- Button presses (instant response)
- Rotary encoder
- Frequency counting
- Wake from sleep
- Time-critical events

**Bad use cases**:
- Slow operations (Serial.print)
- Complex calculations
- Anything that takes >few microseconds

## Basic Interrupt Example

\`\`\`cpp
const int buttonPin = 2;  // Must be interrupt pin
volatile int counter = 0;  // MUST be volatile!

void setup() {
    Serial.begin(115200);
    pinMode(buttonPin, INPUT_PULLUP);
    
    // Attach interrupt
    attachInterrupt(digitalPinToInterrupt(buttonPin), buttonISR, FALLING);
}

void buttonISR() {
    // Interrupt Service Routine
    // Keep this FAST!
    counter++;
}

void loop() {
    Serial.println(counter);
    delay(1000);
}
\`\`\`

## Why volatile?

\`\`\`cpp
volatile int counter = 0;  // ✅ Correct
int counter = 0;           // ❌ Wrong!
\`\`\`

**Reason**: Tells compiler variable can change unexpectedly (by interrupt)

Without \`volatile\`:
- Compiler may optimize away variable
- Main code might not see changes from ISR

## Interrupt Modes

\`\`\`cpp
// RISING: LOW → HIGH
attachInterrupt(pin, ISR, RISING);

// FALLING: HIGH → LOW
attachInterrupt(pin, ISR, FALLING);

// CHANGE: Any change
attachInterrupt(pin, ISR, CHANGE);

// LOW: Continuously while LOW (avoid!)
attachInterrupt(pin, ISR, LOW);
\`\`\`

## Rotary Encoder with Interrupts

\`\`\`cpp
const int encoderPinA = 2;
const int encoderPinB = 3;
volatile int encoderPos = 0;

void setup() {
    pinMode(encoderPinA, INPUT_PULLUP);
    pinMode(encoderPinB, INPUT_PULLUP);
    
    attachInterrupt(digitalPinToInterrupt(encoderPinA), encoderISR, CHANGE);
    attachInterrupt(digitalPinToInterrupt(encoderPinB), encoderISR, CHANGE);
}

void encoderISR() {
    int a = digitalRead(encoderPinA);
    int b = digitalRead(encoderPinB);
    
    if (a == b) {
        encoderPos++;
    } else {
        encoderPos--;
    }
}

void loop() {
    Serial.println(encoderPos);
    delay(100);
}
\`\`\`

## ISR Best Practices

**DO**:
- Keep ISR short and fast
- Use \`volatile\` for shared variables
- Set flags, process in loop()
- Disable interrupts if modifying shared data

**DON'T**:
- Use Serial.print() in ISR
- Use delay() in ISR
- Do complex calculations
- Call functions that use interrupts

## Flag Pattern (Recommended)

\`\`\`cpp
volatile bool buttonPressed = false;

void buttonISR() {
    buttonPressed = true;  // Just set flag
}

void loop() {
    if (buttonPressed) {
        buttonPressed = false;
        
        // Do complex processing here
        Serial.println("Button was pressed!");
        doComplexStuff();
    }
}
\`\`\`

## Disabling Interrupts Temporarily

\`\`\`cpp
volatile int counter = 0;

void loop() {
    noInterrupts();  // Disable all interrupts
    int localCounter = counter;  // Safe copy
    interrupts();    // Re-enable interrupts
    
    Serial.println(localCounter);
}
\`\`\`

## Timer Interrupts

\`\`\`cpp
// Arduino Uno: Run function every 1ms
#include <TimerOne.h>

volatile int count = 0;

void setup() {
    Timer1.initialize(1000);  // 1000 microseconds = 1ms
    Timer1.attachInterrupt(timerISR);
}

void timerISR() {
    count++;
}

void loop() {
    // count increments every 1ms automatically
}
\`\`\`

## ESP32 Timer Interrupt

\`\`\`cpp
hw_timer_t *timer = NULL;
volatile int counter = 0;

void IRAM_ATTR onTimer() {
    counter++;
}

void setup() {
    // Timer 0, prescaler 80 (1MHz), count up
    timer = timerBegin(0, 80, true);
    timerAttachInterrupt(timer, &onTimer, true);
    timerAlarmWrite(timer, 1000000, true);  // 1 second
    timerAlarmEnable(timer);
}
\`\`\`
            `},{id:"advanced-patterns",title:"🎯 Advanced Code Patterns",content:`
## Circular Buffer (Ring Buffer)

**Use case**: Store last N sensor readings

\`\`\`cpp
const int BUFFER_SIZE = 10;
int buffer[BUFFER_SIZE];
int writeIndex = 0;

void addReading(int value) {
    buffer[writeIndex] = value;
    writeIndex = (writeIndex + 1) % BUFFER_SIZE;  // Wrap around
}

float getAverage() {
    long sum = 0;
    for (int i = 0; i < BUFFER_SIZE; i++) {
        sum += buffer[i];
    }
    return (float)sum / BUFFER_SIZE;
}

void loop() {
    int reading = analogRead(A0);
    addReading(reading);
    
    float avg = getAverage();
    Serial.println(avg);
    delay(100);
}
\`\`\`

## Moving Average Filter

\`\`\`cpp
class MovingAverage {
private:
    int *buffer;
    int size;
    int index;
    long sum;
    
public:
    MovingAverage(int windowSize) {
        size = windowSize;
        buffer = new int[size];
        index = 0;
        sum = 0;
        for (int i = 0; i < size; i++) {
            buffer[i] = 0;
        }
    }
    
    int add(int value) {
        sum -= buffer[index];
        buffer[index] = value;
        sum += value;
        index = (index + 1) % size;
        return sum / size;
    }
};

MovingAverage filter(10);

void loop() {
    int raw = analogRead(A0);
    int filtered = filter.add(raw);
    Serial.println(filtered);
    delay(10);
}
\`\`\`

## Finite State Machine with Timeouts

\`\`\`cpp
enum State {
    WAITING,
    ACTIVE,
    TIMEOUT,
    ERROR
};

State currentState = WAITING;
unsigned long stateStartTime = 0;
const unsigned long STATE_TIMEOUT = 5000;

void changeState(State newState) {
    currentState = newState;
    stateStartTime = millis();
}

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    // Check for timeout in any state
    if (elapsed > STATE_TIMEOUT && currentState != WAITING) {
        changeState(TIMEOUT);
    }
    
    switch (currentState) {
        case WAITING:
            if (buttonPressed()) {
                changeState(ACTIVE);
            }
            break;
            
        case ACTIVE:
            doWork();
            if (workComplete()) {
                changeState(WAITING);
            }
            break;
            
        case TIMEOUT:
            Serial.println("Operation timed out!");
            changeState(ERROR);
            break;
            
        case ERROR:
            handleError();
            changeState(WAITING);
            break;
    }
}
\`\`\`

## Event Queue

\`\`\`cpp
const int QUEUE_SIZE = 10;

struct Event {
    int type;
    int value;
};

Event eventQueue[QUEUE_SIZE];
int queueHead = 0;
int queueTail = 0;

bool addEvent(int type, int value) {
    int nextTail = (queueTail + 1) % QUEUE_SIZE;
    if (nextTail == queueHead) {
        return false;  // Queue full
    }
    
    eventQueue[queueTail].type = type;
    eventQueue[queueTail].value = value;
    queueTail = nextTail;
    return true;
}

bool getEvent(Event *event) {
    if (queueHead == queueTail) {
        return false;  // Queue empty
    }
    
    *event = eventQueue[queueHead];
    queueHead = (queueHead + 1) % QUEUE_SIZE;
    return true;
}

void loop() {
    // Add events
    if (buttonPressed()) {
        addEvent(EVENT_BUTTON, 1);
    }
    
    // Process events
    Event event;
    if (getEvent(&event)) {
        handleEvent(event);
    }
}
\`\`\`

## Callback Pattern

\`\`\`cpp
typedef void (*CallbackFunction)(int);

class Button {
private:
    int pin;
    CallbackFunction onPress;
    int lastState;
    
public:
    Button(int p, CallbackFunction callback) {
        pin = p;
        onPress = callback;
        pinMode(pin, INPUT_PULLUP);
        lastState = HIGH;
    }
    
    void update() {
        int state = digitalRead(pin);
        if (state == LOW && lastState == HIGH) {
            if (onPress != NULL) {
                onPress(pin);  // Call the callback
            }
        }
        lastState = state;
    }
};

void buttonPressed(int pin) {
    Serial.print("Button on pin ");
    Serial.print(pin);
    Serial.println(" pressed!");
}

Button button1(2, buttonPressed);
Button button2(3, buttonPressed);

void loop() {
    button1.update();
    button2.update();
}
\`\`\`

## Watchdog Timer Pattern

\`\`\`cpp
#include <avr/wdt.h>

void setup() {
    wdt_enable(WDTO_2S);  // 2 second watchdog
    Serial.begin(115200);
}

void loop() {
    wdt_reset();  // "Pet" the watchdog
    
    // Your code here
    doWork();
    
    // If code hangs, watchdog resets board
}
\`\`\`

## Singleton Pattern

\`\`\`cpp
class Logger {
private:
    static Logger* instance;
    Logger() {}  // Private constructor
    
public:
    static Logger* getInstance() {
        if (instance == NULL) {
            instance = new Logger();
        }
        return instance;
    }
    
    void log(String message) {
        Serial.println(message);
    }
};

Logger* Logger::instance = NULL;

void setup() {
    Serial.begin(115200);
    Logger::getInstance()->log("System started");
}
\`\`\`

## Command Pattern

\`\`\`cpp
class Command {
public:
    virtual void execute() = 0;
};

class LEDOnCommand : public Command {
public:
    void execute() {
        digitalWrite(LED_PIN, HIGH);
    }
};

class LEDOffCommand : public Command {
public:
    void execute() {
        digitalWrite(LED_PIN, LOW);
    }
};

Command* commands[10];
int commandCount = 0;

void addCommand(Command* cmd) {
    commands[commandCount++] = cmd;
}

void executeAll() {
    for (int i = 0; i < commandCount; i++) {
        commands[i]->execute();
    }
}
\`\`\`

## Best Practices Summary

1. **Use state machines** for complex logic
2. **Avoid delay()** - use millis() instead
3. **Keep ISRs short** - set flags, process in loop
4. **Use volatile** for interrupt-shared variables
5. **Modularize code** - classes and functions
6. **Comment complex logic** - future you will thank you
7. **Test incrementally** - don't write everything at once
8. **Use version control** - Git is your friend
            `}]};export{e as codeExplanationContent};
