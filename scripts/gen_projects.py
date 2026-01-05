
import json

raw_projects = """
1.LED Blink using Arduino
2.LED Fade using PWM
3.Push Button LED Control
4.Traffic Light System
5.Buzzer Control using Arduino
6.Digital Dice using LEDs
7.RGB LED Color Mixer
8.Automatic Night Lamp
9.LDR Light Intensity Monitor
10.Fire Alarm using Buzzer
11.Temperature Display using LCD
12.Smart Door Bell
13.Clap Switch
14.Obstacle Detection using IR Sensor
15.Touch Sensor Lamp
16.Gas Leakage Alert System
17.Rain Detection Alarm
18.Ultrasonic Distance Measurement
19.Water Level Indicator
20.Automatic Water Pump
21.Digital Thermometer
22.Password Protected Door Lock
23.Motion Detector Alarm
24.Smart Dustbin
25.Soil Moisture Monitor
26.Automatic Street Light
27.Line Following Robot
28.IR Remote Controlled LED
29.Keypad Based Security System
30.Speed Control of DC Motor
31.Temperature Alert System
32.Servo Motor Control
33.Automatic Hand Sanitizer
34.Smart Fan Controller
35.Electronic Voting Machine
36.Smart Parking Indicator
37.Door Open Alert
38.Light Control using Bluetooth
39.Voice Controlled LED
40.Smart Bell with Mobile Alert
41.Digital Clock using Arduino
42.Smart Switch Board
43.Fire Detection System
44.Gas Level Indicator
45.Automatic Plant Watering
46.Visitor Counter
47.Smart Alarm Clock
48.Home Light Automation (Basic)
49.Smart Power Saver
50.Smart Door Alert System
51.Distance Based Alarm
52.Smart Bicycle Indicator
53.Temperature Logger
54.Smart Classroom Bell
55.Automatic Garage Door
56.Sound Level Monitor
57.Smart Dustbin Lid
58.Smart Blind Stick
59.Water Overflow Alarm
60.Motion Activated Light
61.Smart Fan Speed Controller
62.Automatic Window Opener
63.Smart Toilet Flush
64.Smart Washroom Light
65.Smart Locker System
66.Smart Mirror Display (Basic)
67.Smart Attendance System (Basic)
68.Smart Pet Feeder
69.Smart Plant Monitor
70.Digital Compass
71.Smart Key Finder
72.Home Security Alarm
73.Smart Door Knock Detector
74.Light Intensity Logger
75.Smart Emergency Button
76.Smart Door Mat
77.Temperature Based Fan
78.Smart Entry System
79.Automatic Gate Opener
80.Smart Lamp Controller
81.WiFi LED Control using ESP32
82.Smart Home Automation
83.Smart Energy Meter
84.IoT Based Weather Station
85.Smart Irrigation System
86.Smart Door Lock using RFID
87.Smart Attendance System
88.IoT Gas Leakage Monitoring
89.Smart Parking System
90.Smart Street Lighting
91.IoT Fire Alert System
92.Smart Water Level Monitoring
93.Smart Refrigerator Monitor
94.Smart Room Automation
95.Smart Health Monitoring System
96.Smart Greenhouse Monitoring
97.Smart Traffic Management
98.IoT Based Air Quality Monitor
99.Smart Waste Management
100.Smart Vehicle Tracking
101.Smart Water Quality Monitoring
102.IoT Based Flood Alert
103.Smart Security Camera System
104.Smart Lift Control
105.Smart Classroom Automation
106.Smart Power Monitoring
107.Smart Energy Saving System
108.Smart Inventory Management
109.Smart Cold Storage Monitor
110.Smart Weather Alert System
111.Smart Pollution Monitoring
112.Smart Home Voice Control
113.Smart Smartwatch Prototype
114.Smart Factory Monitoring
115.Smart Water Billing System
116.Smart Firefighting Robot
117.Smart Railway Gate Control
118.Smart Public Announcement System
119.Smart Vehicle Speed Monitor
120.Smart Toll Collection System
121.Smart Vending Machine
122.Smart ATM Security System
123.Smart Warehouse Monitoring
124.Smart Attendance using Face ID
125.Smart Access Control System
126.Smart Power Grid Monitor
127.Smart Smart Helmet
128.Smart Garbage Level Monitoring
129.Smart Bus Tracking System
130.Smart Fuel Monitoring
131.Smart Smart Mirror
132.Smart Library Management
133.Smart Classroom Attendance
134.Smart Doorbell with Camera
135.Smart Crop Monitoring
136.Smart Industrial Automation
137.Smart Fire Safety System
138.Smart IoT Dashboard
139.Smart IoT Data Logger
140.Smart Smart Lock System
141.Smart IoT Notification System
142.Smart Home Security System
143.Smart Vehicle Diagnostics
144.Smart IoT Alarm System
145.Smart Remote Monitoring
146.Smart Smart Energy System
147.Smart IoT Analytics
148.Smart IoT Health Dashboard
149.Smart Asset Tracking
150.Smart Smart City Module
151.Smart City Management System
152.AI Based Smart Surveillance
153.Smart Autonomous Vehicle
154.Smart Drone Control System
155.Smart Traffic Signal with AI
156.Smart Face Recognition Door
157.Smart Predictive Maintenance
158.Smart Smart Farming System
159.Smart Industrial IoT Platform
160.Smart Healthcare IoT System
161.Smart Smart Grid System
162.Smart Smart Home Hub
163.Smart AI Voice Assistant
164.Smart Smart Parking with AI
165.Smart Smart Energy Optimization
166.Smart Vehicle Accident Detection
167.Smart Fire Detection with AI
168.Smart AI Attendance System
169.Smart Smart Water Management
170.Smart Smart Waste Management
171.Smart Smart Security Platform
172.Smart Smart City Dashboard
173.Smart AI Traffic Control
174.Smart Smart Agriculture AI
175.Smart Smart Factory Automation
176.Smart Smart Hospital System
177.Smart Smart Campus Automation
178.Smart Smart Retail System
179.Smart Smart Power Management
180.Smart Smart Disaster Management
181.Smart Smart Environmental Monitor
182.Smart Smart Building Automation
183.Smart Smart Transportation System
184.Smart Smart Logistics System
185.Smart Smart Supply Chain
186.Smart Smart Industrial AI
187.Smart Smart Energy AI
188.Smart Smart Surveillance AI
189.Smart Smart Water AI
190.Smart Smart Waste AI
191.Smart Smart IoT Cloud Platform
192.Smart Smart Digital Twin
193.Smart Smart Edge AI System
194.Smart Smart Predictive AI
195.Smart Smart Robotics System
196.Smart Smart Autonomous Systems
197.Smart Smart Smart City AI
198.Smart Smart Future Home
199.Smart Smart AI Assistant
200.Smart Smart Next-Gen IoT Platform
"""

lines = [l.strip() for l in raw_projects.strip().split('\n')]
projects = []

for line in lines:
    # Split "1.Title"
    if '.' in line:
        id_str, title = line.split('.', 1)
        try:
            pid = int(id_str)
        except:
            continue
        
        level = "Beginner"
        if pid > 80: level = "Intermediate"
        if pid > 150: level = "Advanced"
        
        project = {
            "id": pid,
            "title": title.strip(),
            "level": level,
            "description": f"A comprehensive {level} project: {title.strip()}. Explore the architecture and firmware below.",
            "category": "IoT & Systems",
            "estimatedTime": "45 mins" if level == "Beginner" else "90 mins" if level == "Intermediate" else "150 mins",
            "tech": ["Arduino"] if level == "Beginner" else ["ESP32", "WiFi"] if level == "Intermediate" else ["AI", "Edge Computing"],
            "concept": f"Learning the fundamentals of {title.strip()}.",
            "working_principle": "This section details how the electronics and logic interact to achieve the goal.",
            "pin_config": "Pin mapping will be updated by administrative command.",
            "code": "/* Code block pending administrative update */\nvoid setup() {\n  // Init\n}\nvoid loop() {\n  // Logic\n}",
            "advantages": "Scalable, Educational, Practical.",
            "disadvantages": "Requires specific hardware components.",
            "usage": "Follow the connection diagram and upload the firmware.",
            "components": "1x Controller, Necessary Sensors, Jumper Wires.",
            "circuit_diagram": "", # New field
            "status": "Published"
        }
        projects.append(project)

js_content = "export const projects = " + json.dumps(projects, indent=2) + ";"
with open('c:/Users/mnish/iotnext2.0/src/data/projects.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# Also generate JSON for easy sync
with open('c:/Users/mnish/iotnext2.0/src/data/projects.json', 'w', encoding='utf-8') as f:
    json.dump(projects, f, indent=2)

print(f"Generated {len(projects)} projects.")
