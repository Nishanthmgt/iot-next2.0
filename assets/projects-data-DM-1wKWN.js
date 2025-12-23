const i=e=>e.replace(/^\s{12}/gm,"").trim(),n=[{id:1,title:"Autonomous AI Security Guard: ESP32-CAM with Edge Vision",level:"Advanced",estimatedTime:"120 mins",tech:["ESP32-CAM","PIR Sensor","Buzzer","WiFi","TensorFlow Lite Micro"],category:"AI & IoT",concept:"Real-time Edge Intelligence for physical security.",learning:["Deploying TensorFlow Lite Micro models on microcontrollers","Optimizing computer vision at the edge","Advanced power management using deep sleep and external interrupts","Building interactive IoT dashboards with WebSocket communication"],workingPrinciple:"The system remains in a low-power deep sleep state until the PIR sensor detects motion. Upon awakening, the ESP32-CAM captures a high-resolution frame. This frame is then processed locally using a TensorFlow Lite Micro person-detection model. If the detection confidence exceeds 80%, the system triggers a localized buzzer alarm, uploads the image to an AWS S3 bucket/Firebase, and pushes a real-time notification to the user's mobile dashboard via WiFi.",circuit:`1. Connect PIR Sensor Output to ESP32-CAM GPIO 13.
2. Connect Buzzer Anode to GPIO 12 via a 220-ohm resistor.
3. Connect GND of all components to ESP32 GND.
4. Ensure the ESP32-CAM is powered by a dedicated 5V 2A source to handle peaks during WiFi transmission and SD card writes.`,pins:[{component:"PIR Sensor Out",mappings:{arduino:"N/A",esp32:"GPIO 13"}},{component:"Buzzer Control",mappings:{arduino:"N/A",esp32:"GPIO 12"}},{component:"Camera Data Pins",mappings:{arduino:"N/A",esp32:"Internal Header"}},{component:"VCC (Power)",mappings:{arduino:"5V",esp32:"5V (External)"}},{component:"Ground",mappings:{arduino:"GND",esp32:"GND"}}],code:i(`
              /* 
               * IoTnext Flagship Project: Autonomous AI Security Guard
               * Hardware: ESP32-CAM (AI-Thinker)
               * Logic: Motion Triggered -> Frame Capture -> AI Inference -> Alert
               */
              
              #include "esp_camera.h"
              #include "WiFi.h"
              #include "Firebase_ESP_Client.h" // Example for cloud logging

              #define PIR_PIN 13
              #define BUZZER_PIN 12

              void setup() {
                Serial.begin(115200);
                pinMode(PIR_PIN, INPUT);
                pinMode(BUZZER_PIN, OUTPUT);

                // Initialize Camera with specific AI-Thinker Pinout
                camera_config_t config;
                config.ledc_channel = LEDC_CHANNEL_0;
                config.ledc_timer = LEDC_TIMER_0;
                config.pin_d0 = 5; config.pin_d1 = 18; // ... (standard pinout)
                
                if (esp_camera_init(&config) != ESP_OK) {
                  Serial.println("Camera Init Failed");
                  return;
                }
                
                Serial.println("System Armed. Entering Deep Sleep...");
                esp_sleep_enable_ext0_wakeup((gpio_num_t)PIR_PIN, 1);
                esp_deep_sleep_start();
              }

              void loop() {
                // This block runs after PIR Wakeup
                camera_fb_t * fb = esp_camera_fb_get();
                if (!fb) {
                  Serial.println("Capture Failed");
                  esp_deep_sleep_start();
                }

                // Run AI Inference (Pseudocode for TFLite Micro call)
                bool personDetected = runInference(fb->buf, fb->len);

                if (personDetected) {
                  digitalWrite(BUZZER_PIN, HIGH);
                  Serial.println("INTRUDER DETECTED!");
                  uploadImageToCloud(fb->buf, fb->len);
                  delay(5000);
                  digitalWrite(BUZZER_PIN, LOW);
                }

                esp_camera_fb_return(fb);
                esp_deep_sleep_start(); // Re-arm
              }
          `),howToRun:`1. Install the ESP32 board library in Arduino IDE.
2. Select 'AI-Thinker ESP32-CAM' as the board.
3. Configure your WiFi credentials in the secrets.h tab.
4. Upload the code and open the Serial Monitor at 115200 baud.
5. Test by waving in front of the PIR sensor.`,output:"A localized audible alarm followed by a push notification on your phone with a capture of the detected individual.",extensions:["Add facial recognition to whitelist family members","Integrate with Home Assistant via MQTT","Add solar charging for off-grid deployment"],useCase:"Ideal for remote warehouse monitoring, home doorstep security, and wildlife activity tracking.",advantages:["Low power consumption","Privacy-focused (Edge AI)","Zero monthly subscription fees"],disadvantages:["Sensitive to lighting conditions","Requires stable WiFi for cloud logs"],parts:[{name:"ESP32-CAM Module",buyLink:"https://robu.in/product/esp32-cam-development-board-with-ov2640-camera-module/"},{name:"HC-SR501 PIR Sensor",buyLink:"https://robu.in/product/hc-sr501-pir-motion-sensor-collector-module-for-arduino-and-raspberry-pi/"},{name:"Active Buzzer",buyLink:"https://robu.in/product/active-piezo-buzzer-5v/"}]}];export{n as p};
