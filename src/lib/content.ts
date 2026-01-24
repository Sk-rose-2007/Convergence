import type { LucideIcon } from 'lucide-react';
import { FileText, Lightbulb, Laptop, Code, Bug, BrainCircuit, Users, Gamepad2, Camera, Puzzle, Github, Twitter, Linkedin } from 'lucide-react';

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
    rules: ['Team of max 2 members.', 'Presentation time is 8+2 minutes.', 'Submit abstract by DD/MM/YYYY.'],
    icon: FileText,
  },
  {
    title: 'Project Expo',
    description: 'Exhibit your innovative projects and working models.',
    rules: ['Team of max 4 members.', 'Projects can be hardware or software based.', 'Demonstration is mandatory.'],
    icon: Lightbulb,
  },
  {
    title: 'Hackathon',
    description: 'A 24-hour coding marathon to solve real-world problems.',
    rules: ['Team of 2-4 members.', 'Problem statements will be revealed at the start.', 'Continuous evaluation by mentors.'],
    icon: Laptop,
  },
  {
    title: 'Coding Contest',
    description: 'Test your algorithmic and problem-solving skills.',
    rules: ['Individual participation.', 'Platform: HackerRank/CodeChef.', 'Top performers get exciting prizes.'],
    icon: Code,
  },
  {
    title: 'Debugging Challenge',
    description: 'Find and fix the bugs in the given code snippets.',
    rules: ['Individual participation.', 'Multiple rounds with increasing difficulty.', 'Fastest correct submission wins.'],
    icon: Bug,
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    title: 'Quiz',
    description: 'A battle of wits covering tech, science, and general knowledge.',
    rules: ['Team of 2 members.', 'Written prelims followed by a final buzzer round.', 'No mobile phones allowed.'],
    icon: BrainCircuit,
  },
  {
    title: 'Tech Connections',
    description: 'A fun event to find connections between technical terms.',
    rules: ['Team of 2 members.', 'Pounce and bounce rules apply.', 'Audience participation is encouraged.'],
    icon: Users,
  },
  {
    title: 'Gaming',
    description: 'Compete in popular esports titles like Valorant and FIFA.',
    rules: ['Check specific game for team/solo rules.', 'Bring your own peripherals for PC games.', 'Fair play is enforced.'],
    icon: Gamepad2,
  },
  {
    title: 'Photography',
    description: 'Capture the essence and moments of CONVERGENCE.',
    rules: ['Individual participation.', 'Theme: "Technology in Motion".', 'Submissions must be from the event days.'],
    icon: Camera,
  },
  {
    title: 'Fun Challenges',
    description: 'Engage in a series of quick, fun, and spontaneous tasks.',
    rules: ['On-the-spot registration.', 'Be prepared for anything!', 'Winners get instant goodies.'],
    icon: Puzzle,
  },
];

export const schedule = {
  day1: [
    { time: '09:00 AM - 10:00 AM', event: 'Inauguration Ceremony' },
    { time: '10:00 AM - 01:00 PM', event: 'Hackathon (Starts)' },
    { time: '10:30 AM - 12:30 PM', event: 'Paper Presentation (Round 1)' },
    { time: '11:00 AM - 01:00 PM', event: 'Debugging Challenge' },
    { time: '01:00 PM - 02:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM - 04:00 PM', event: 'Project Expo' },
    { time: '02:30 PM - 04:30 PM', event: 'Tech Connections' },
  ],
  day2: [
    { time: '10:00 AM - 10:00 AM', event: 'Hackathon (Ends)' },
    { time: '10:30 AM - 12:30 PM', event: 'Coding Contest' },
    { time: '11:00 AM - 01:00 PM', event: 'Gaming Finals' },
    { time: '01:00 PM - 02:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM - 04:00 PM', event: 'Quiz Finals' },
    { time: '04:30 PM - 05:30 PM', event: 'Valedictory & Prize Distribution' },
  ],
};

export const coordinators = [
  {
    id: 'coordinator-1',
    name: 'Alex Johnson',
    role: 'Student Coordinator',
    phone: '+1 (123) 456-7890',
    email: 'alex.j@example.com',
  },
  {
    id: 'coordinator-2',
    name: 'Priya Sharma',
    role: 'Events Head',
    phone: '+1 (234) 567-8901',
    email: 'priya.s@example.com',
  },
  {
    id: 'coordinator-3',
    name: 'Ben Carter',
    role: 'Sponsorship Lead',
    phone: '+1 (345) 678-9012',
    email: 'ben.c@example.com',
  },
  {
    id: 'coordinator-4',
    name: 'Sophia Lee',
    role: 'Marketing Head',
    phone: '+1 (456) 789-0123',
    email: 'sophia.l@example.com',
  },
];

export const socialLinks = [
    { name: 'Github', icon: Github, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Linkedin', icon: Linkedin, url: '#' },
]

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];
