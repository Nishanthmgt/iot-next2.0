/**
 * Firmware Generator Utility
 * Converts an IoT Configuration (JSON) into production-ready C++ code.
 */

export const generateFirmware = (config) => {
    const { boardId, sensors, widgets } = config;

    let libraryIncludes = new Set(['#include <Arduino.h>']);
    let globalDefinitions = [];
    let setupLines = [];
    let loopLines = [];

    // Core Logic for mapping sensors to code snippets
    sensors.forEach(s => {
        const mapping = s.pinMapping || s.mapping || {};

        if (s.name.includes('DHT11')) {
            libraryIncludes.add('#include <DHT.h>');
            const pin = mapping['DATA'] || '4';
            globalDefinitions.push(`#define DHTPIN ${pin}`);
            globalDefinitions.push('#define DHTTYPE DHT11');
            globalDefinitions.push('DHT dht(DHTPIN, DHTTYPE);');
            setupLines.push('dht.begin();');
            loopLines.push('  float h = dht.readHumidity();');
            loopLines.push('  float t = dht.readTemperature();');
        }

        if (s.name.includes('Ultrasonic')) {
            const trig = mapping['TRIG'] || '5';
            const echo = mapping['ECHO'] || '18';
            globalDefinitions.push(`#define TRIG_PIN ${trig}`);
            globalDefinitions.push(`#define ECHO_PIN ${echo}`);
            setupLines.push('pinMode(TRIG_PIN, OUTPUT);');
            setupLines.push('pinMode(ECHO_PIN, INPUT);');
            loopLines.push('  digitalWrite(TRIG_PIN, LOW); delayMicroseconds(2);');
            loopLines.push('  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);');
            loopLines.push('  digitalWrite(TRIG_PIN, LOW);');
            loopLines.push('  long duration = pulseIn(ECHO_PIN, HIGH);');
            loopLines.push('  float distance = duration * 0.034 / 2;');
        }

        if (s.name.includes('Servo')) {
            libraryIncludes.add('#include <ESP32Servo.h>'); // Assuming ESP32 for prototype
            const pin = mapping['PWM'] || '13';
            globalDefinitions.push('Servo myServo;');
            setupLines.push(`myServo.attach(${pin});`);
            loopLines.push('  myServo.write(90);');
        }
    });

    // Construct the final code string
    const code = `
${Array.from(libraryIncludes).join('\n')}

// --- Global Definitions ---
${globalDefinitions.join('\n')}

void setup() {
  Serial.begin(115200);
  Serial.println("IoT Device Starting...");
  ${setupLines.join('\n  ')}
}

void loop() {
${loopLines.join('\n')}
  
  // Output data for Dashboard Builder
  Serial.print("DATA_STREAM:");
  // AI-generated dashboard reporting logic would go here
  delay(2000);
}
`;

    return code.trim();
};
