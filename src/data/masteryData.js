import {
    Settings, Rocket, ExternalLink, ShieldAlert, Cpu, Battery,
    Lightbulb, Activity, Code, Target, BookOpen, GraduationCap, Users
} from 'lucide-react';

export const masteryPhases = [
    {
        id: 1,
        title: "Phase 1: Core Essentials",
        subtitle: "Max impact foundations for starting strong",
        color: "#3b82f6",
        items: [
            {
                id: 'troubleshooting',
                title: "Troubleshooting & Debugging",
                desc: "Master the art of fixing broken circuits and firmware errors.",
                icon: Settings,
                level: "Essential"
            },
            {
                id: 'mini-projects',
                title: "Mini Projects / Quick Builds",
                desc: "Hands-on simple builds to build muscle memory.",
                icon: Rocket,
                level: "Beginner"
            },
            {
                id: 'protocols',
                title: "Protocols Explained",
                desc: "UART, I2C, SPI - simplified for real-world use.",
                icon: ExternalLink,
                level: "Core"
            }
        ]
    },
    {
        id: 2,
        title: "Phase 2: Hardware Mastery",
        subtitle: "Designing reliable and efficient hardware",
        color: "#10b981",
        items: [
            {
                id: 'common-mistakes',
                title: "Common Mistakes in IoT",
                desc: "Learn from others' failures to save your hardware.",
                icon: ShieldAlert,
                level: "Survival"
            },
            {
                id: 'pin-selection',
                title: "Pin Selection Guide",
                desc: "Which pins to use and which to avoid for stability.",
                icon: Cpu,
                level: "Technical"
            },
            {
                id: 'power-guide',
                title: "Power & Battery Guide",
                desc: "Powering your projects for days, months, or years.",
                icon: Battery,
                level: "Design"
            }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Systems & Logic",
        subtitle: "Advanced software and component understanding",
        color: "#8b5cf6",
        items: [
            {
                id: 'sensor-principles',
                title: "Sensor Working Principles",
                desc: "The physics and logic behind how sensors perceive the world.",
                icon: Lightbulb,
                level: "Deep Dive"
            },
            {
                id: 'board-comparison',
                title: "Board Comparison Guide",
                desc: "Choosing the perfect MCU for your specific needs.",
                icon: Activity,
                level: "Architect"
            },
            {
                id: 'code-hub',
                title: "Code Explanation Hub",
                desc: "Breaking down complex firmware patterns into plain English.",
                icon: Code,
                level: "Professional"
            }
        ]
    },
    {
        id: 4,
        title: "Phase 4: Career & Future",
        subtitle: "Professional readiness and career scaling",
        color: "#f43f5e",
        items: [
            {
                id: 'project-selection',
                title: "Project Selection Guide",
                desc: "Which projects actually impress employers.",
                icon: Target,
                level: "Career"
            },
            {
                id: 'mini-project-ideas',
                title: "Mini Project Ideas",
                desc: "Quick portfolio builders for resumes.",
                icon: BookOpen,
                level: "Portfolio"
            },
            {
                id: 'fyp-ideas',
                title: "Final Year Project Ideas",
                desc: "Complex, high-impact projects for graduation.",
                icon: GraduationCap,
                level: "Academic"
            },
            {
                id: 'interview-prep',
                title: "Interview Preparation",
                desc: "Top technical questions asked in IoT companies.",
                icon: Users,
                level: "Success"
            }
        ]
    }
];
