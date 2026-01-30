import type { LucideIcon } from 'lucide-react';
import { FileText, Lightbulb, Laptop, Code, Bug, BrainCircuit, Users, Gamepad2, Camera, Puzzle, Github, Twitter, Linkedin, Search } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Coordinators', href: '#coordinators' },
];

export type Event = {
  title: string;
  slug: string;
  description: string;
  detailedDescription: string[];
  rules: string[];
  icon: LucideIcon;
  imageId: string;
  coordinators: string[];
};

export const technicalEvents: Event[] = [
  {
    title: 'Paper Presentation',
    slug: 'paper-presentation',
    description: 'Showcase your research and insights on cutting-edge topics.',
    detailedDescription: [
        'Paper Presentation is a platform for aspiring engineers and researchers to present their innovative ideas and findings to a panel of experts. This event challenges participants to articulate complex concepts with clarity and conviction.',
        'Whether you are exploring advancements in Artificial Intelligence, breakthroughs in cloud computing, or the intricacies of IoT, this is your opportunity to contribute to the technical discourse. Prepare to defend your research, answer challenging questions, and leave a lasting impact with your work.'
    ],
    rules: ['Team of 1 or 2 members.', 'Presentation time is 8+2 minutes.', 'Domain: AI, ML, IoT, Cloud, etc.'],
    icon: FileText,
    imageId: 'event-paper-presentation',
    coordinators: ['coordinator-1'],
  },
  {
    title: 'Debugging',
    slug: 'debugging',
    description: 'Find and fix bugs in complex code snippets.',
    detailedDescription: [
        'Welcome to the world of debugging, where your attention to detail and analytical skills are put to the ultimate test. In this event, you will be presented with code that is broken in subtle and challenging ways. Your mission: to hunt down the bugs and restore the code to its full functionality.',
        'This challenge requires a deep understanding of programming logic and syntax. It is a race against time to identify, analyze, and rectify errors. If you have a knack for spotting mistakes that others miss, this event is your chance to shine as a master troubleshooter.'
    ],
    rules: ['Individual participation.', 'Find and fix bugs in C/C++/Java/Python.', 'Fastest debugger wins.'],
    icon: Bug,
    imageId: 'event-debugging',
    coordinators: ['coordinator-2'],
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    title: 'Connexion',
    slug: 'connexion',
    description: 'Find the connection between images/words.',
    detailedDescription: [
        'Connexion is a fast-paced game of lateral thinking and trivia. Teams will be shown a series of seemingly unrelated images or words, and they must find the hidden link that connects them all. The faster you make the connection, the more points you score.',
        'This event is a true test of your general knowledge, pattern recognition, and ability to think outside the box. It\'s a battle of quick wits where pounce and bounce rules keep the excitement high. Even the audience can get in on the action!'
    ],
    rules: ['Team of 2.', 'Pounce and bounce rules apply.', 'Audience participation is encouraged.'],
    icon: Users,
    imageId: 'event-connexion',
    coordinators: ['coordinator-3'],
  },
];

export const schedule = {
  day1: [
    { time: '09:00 AM - 10:00 AM', event: 'Inauguration Ceremony' },
    { time: '10:00 AM - 12:00 PM', event: 'Paper Presentation' },
    { time: '10:00 AM - 12:00 PM', event: 'Debugging' },
    { time: '12:00 PM - 01:00 PM', event: 'Connexion' },
    { time: '01:00 PM - 02:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM - 03:00 PM', event: 'Prize Distribution for Events' },
    { time: '03:00 PM - 04:00 PM', event: 'Valedictory Ceremony' },
  ]
};

export const coordinators = [
  {
    id: 'coordinator-1',
    name: 'Vasanth S',
    role: 'Secretary',
    phone: '+1 (123) 456-7890',
    email: 'vasanth.s@example.com',
  },
  {
    id: 'coordinator-2',
    name: 'Srinath S',
    role: 'Chairman',
    phone: '+1 (234) 567-8901',
    email: 'srinath.s@example.com',
  },
  {
    id: 'coordinator-3',
    name: 'Sandhiya S',
    role: 'Treasurer',
    phone: '+1 (345) 678-9012',
    email: 'sandhiya.s@example.com',
  },
  {
    id: 'coordinator-4',
    name: 'Swetha S',
    role: 'Joint Secretary',
    phone: '+1 (456) 789-0123',
    email: 'swetha.s@example.com',
  },
];

export const socialLinks = [
    { name: 'Github', icon: Github, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Linkedin', icon: Linkedin, url: '#' },
]

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];
