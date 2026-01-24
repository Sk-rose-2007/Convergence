import type { LucideIcon } from 'lucide-react';
import { FileText, Lightbulb, Laptop, Code, Bug, BrainCircuit, Users, Gamepad2, Camera, Puzzle, Github, Twitter, Linkedin, Search } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Register', href: '#register' },
  { name: 'Coordinators', href: '#coordinators' },
];

type Event = {
  title: string;
  description: string;
  rules: string[];
  icon: LucideIcon;
};

export const technicalEvents: Event[] = [
  {
    title: 'Paper Presentation',
    description: 'Showcase your research and insights on cutting-edge topics.',
    rules: ['Team of 1 or 2 members.', 'Presentation time is 8+2 minutes.', 'Domain: AI, ML, IoT, Cloud, etc.'],
    icon: FileText,
  },
  {
    title: 'Project Presentation',
    description: 'Exhibit your innovative projects and working models.',
    rules: ['Team of max 3 members.', 'Abstract submission is mandatory.', 'Hardware or software projects allowed.'],
    icon: Lightbulb,
  },
  {
    title: 'Code Rush',
    description: 'A coding marathon to solve real-world problems.',
    rules: ['Individual participation.', '2 rounds of coding challenges.', 'Platform: HackerRank.'],
    icon: Laptop,
  },
  {
    title: 'Debugging',
    description: 'Test your algorithmic and problem-solving skills.',
    rules: ['Individual participation.', 'Find and fix bugs in C/C++/Java/Python.', 'Fastest debugger wins.'],
    icon: Bug,
  },
  {
    title: 'Web Design',
    description: 'Find and fix the bugs in the given code snippets.',
    rules: ['Team of 2 members.', 'Create a responsive webpage for a given theme.', 'Duration: 3 hours.'],
    icon: Code,
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    title: 'Treasure Hunt',
    description: 'Solve riddles to find the treasure.',
    rules: ['Team of 2.', 'Solve riddles to find the treasure.', 'Campus-wide event.'],
    icon: Search,
  },
  {
    title: 'Ad Zap',
    description: 'Create a humorous ad for a given product.',
    rules: ['Team of 2-4 members.', 'Props will be provided.', 'A classic fun event.'],
    icon: Lightbulb,
  },
  {
    title: 'Connexion',
    description: 'Find the connection between images/words.',
    rules: ['Team of 2.', 'Pounce and bounce rules apply.', 'Audience participation is encouraged.'],
    icon: Users,
  },
  {
    title: 'Gaming',
    description: 'Compete in popular esports titles like Valorant and FIFA.',
    rules: ['Solo and team events.', 'Games: BGMI, Free Fire, Valorant.', 'Pre-registration required.'],
    icon: Gamepad2,
  },
  {
    title: 'Photography',
    description: 'Capture the essence and moments of CONVERGENCE.',
    rules: ['Individual participation.', 'Theme will be revealed on the day.', 'Mobile and DSLR allowed.'],
    icon: Camera,
  },
];

export const schedule = {
  day1: [
    { time: '09:00 AM - 10:00 AM', event: 'Inauguration Ceremony' },
    { time: '10:00 AM - 12:00 PM', event: 'Paper & Project Presentation' },
    { time: '10:00 AM - 01:00 PM', event: 'Code Rush & Debugging' },
    { time: '12:00 PM - 01:00 PM', event: 'Ad Zap & Connexion' },
    { time: '01:00 PM - 02:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM - 04:00 PM', event: 'Web Design & Gaming' },
    { time: '04:30 PM - 05:30 PM', event: 'Valedictory & Prize Distribution' },
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
