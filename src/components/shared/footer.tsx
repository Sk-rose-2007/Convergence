import Link from 'next/link';
import { socialLinks } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="text-center sm:text-left">
            <p className="text-sm font-medium">Department of Computer Science and Engineering</p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} THIRAN 2k24. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
