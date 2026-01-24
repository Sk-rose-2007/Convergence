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
    coordinators: ['coordinator-5'],
  },
  {
    title: 'Project Presentation',
    slug: 'project-presentation',
    description: 'Exhibit your innovative projects and working models.',
    detailedDescription: [
        'Turn your ideas into reality and showcase your technical creations in the Project Presentation event. This is where innovation takes center stage. We invite you to exhibit your hardware, software, or hybrid projects that offer creative solutions to real-world problems.',
        'Participants will have the opportunity to demonstrate their projects to a diverse audience, receive valuable feedback from judges, and compete for recognition. It\'s a chance to prove your project\'s potential and your ability to execute a complex technical vision.'
    ],
    rules: ['Team of max 3 members.', 'Abstract submission is mandatory.', 'Hardware or software projects allowed.'],
    icon: Lightbulb,
    imageId: 'event-project-presentation',
    coordinators: ['coordinator-6'],
  },
  {
    title: 'Code Rush',
    slug: 'code-rush',
    description: 'A coding marathon to solve real-world problems.',
    detailedDescription: [
        'Code Rush is the ultimate test of speed, accuracy, and problem-solving skills. This competitive coding marathon pushes participants to their limits as they race against the clock to solve a series of complex algorithmic challenges.',
        'This is an individual event designed for passionate coders who thrive under pressure. Sharpen your logic, optimize your algorithms, and get ready to write some of the most efficient code of your life. Only the fastest and most accurate will emerge victorious.'
    ],
    rules: ['Individual participation.', '2 rounds of coding challenges.', 'Platform: HackerRank.'],
    icon: Laptop,
    imageId: 'event-code-rush',
    coordinators: ['coordinator-5'],
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
    coordinators: ['coordinator-6'],
  },
  {
    title: 'Web Design',
    slug: 'web-design',
    description: 'Craft a visually stunning and responsive website from scratch.',
    detailedDescription: [
        'Web Design is where art meets technology. This event challenges teams to create a beautiful, functional, and responsive website based on a given theme, all within a tight deadline. It is a test of both your creative vision and your technical proficiency.',
        'Participants will need to combine their skills in HTML, CSS, and JavaScript to build a user-friendly and aesthetically pleasing web experience. Showcase your design flair and coding expertise to create a winning website that captivates the judges.'
    ],
    rules: ['Team of 2 members.', 'Create a responsive webpage for a given theme.', 'Duration: 3 hours.'],
    icon: Code,
    imageId: 'event-web-design',
    coordinators: ['coordinator-5'],
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    title: 'Treasure Hunt',
    slug: 'treasure-hunt',
    description: 'Solve riddles to find the treasure.',
    detailedDescription: [
        'Embark on an exciting adventure across the campus in our Treasure Hunt! This event is not just a race, but a battle of wits. Your team will have to decipher cryptic clues, solve brain-teasing riddles, and navigate through various checkpoints.',
        'Teamwork, quick thinking, and a sense of adventure are essential. Gather your partner and get ready to explore, discover, and compete for the ultimate prize. The treasure awaits the most cunning and resourceful team!'
    ],
    rules: ['Team of 2.', 'Solve riddles to find the treasure.', 'Campus-wide event.'],
    icon: Search,
    imageId: 'event-treasure-hunt',
    coordinators: ['coordinator-3'],
  },
  {
    title: 'Ad Zap',
    slug: 'ad-zap',
    description: 'Create a humorous ad for a given product.',
    detailedDescription: [
        'Unleash your creativity and humor in Ad Zap, the ultimate advertising challenge! Teams will be given a random, often quirky, product and must create a compelling and hilarious advertisement for it on the spot.',
        'This event tests your spontaneity, marketing instincts, and ability to perform under pressure. With a limited time and a box of props, your team must script, rehearse, and perform an ad that leaves the audience and judges in stitches. It’s a classic event that promises a lot of fun and laughter.'
    ],
    rules: ['Team of 2-4 members.', 'Props will be provided.', 'A classic fun event.'],
    icon: Lightbulb,
    imageId: 'event-ad-zap',
    coordinators: ['coordinator-4'],
  },
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
  {
    title: 'Gaming',
    slug: 'gaming',
    description: 'Compete in popular esports titles like Valorant and FIFA.',
    detailedDescription: [
        'Enter the arena and prove your mettle in our Gaming event. This is where digital athletes come to compete for glory in some of the most popular esports titles. Whether you are a tactical genius in Valorant or a strategic mastermind in FIFA, there is a challenge waiting for you.',
        'With both solo and team-based competitions, this is your chance to showcase your skills, strategy, and teamwork. Pre-registration is essential, so assemble your squad, practice your moves, and get ready to battle it out for the top spot.'
    ],
    rules: ['Solo and team events.', 'Games: BGMI, Free Fire, Valorant.', 'Pre-registration required.'],
    icon: Gamepad2,
    imageId: 'event-gaming',
    coordinators: ['coordinator-4'],
  },
  {
    title: 'Photography',
    slug: 'photography',
    description: 'Capture the essence and moments of CONVERGENCE.',
    detailedDescription: [
        'See the symposium through your own lens in the Photography competition. This event is for the storytellers who use a camera to capture the fleeting moments that define an experience. Your task is to capture the spirit, energy, and essence of CONVERGENCE 2k26.',
        'A theme will be revealed on the day of the event to challenge your creativity and perspective. Whether you are using a professional DSLR or a mobile phone, we are looking for images that are not just technically sound but also emotionally resonant. Frame your shot and tell the story of our symposium.'
    ],
    rules: ['Individual participation.', 'Theme will be revealed on the day.', 'Mobile and DSLR allowed.'],
    icon: Camera,
    imageId: 'event-photography',
    coordinators: ['coordinator-3'],
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
  {
    id: 'coordinator-5',
    name: 'Rajesh Kumar',
    role: 'Tech Event Coordinator',
    phone: '+1 (555) 111-2222',
    email: 'rajesh.k@example.com',
  },
  {
    id: 'coordinator-6',
    name: 'Priya Sharma',
    role: 'Tech Event Coordinator',
    phone: '+1 (555) 333-4444',
    email: 'priya.s@example.com',
  },
];

export const socialLinks = [
    { name: 'Github', icon: Github, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Linkedin', icon: Linkedin, url: '#' },
]

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];
