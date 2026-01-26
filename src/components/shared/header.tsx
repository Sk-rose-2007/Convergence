'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/content';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ href, children, isMobile = false }: { href: string; children: React.ReactNode, isMobile?: boolean }) => {
    const sectionId = href.substring(1);
    
    const linkComponent = (
        <Link
            href={href}
            onClick={(e) => scrollTo(sectionId, e)}
            className={cn(
                "transition-colors hover:text-primary",
                isMobile && "block w-full p-4 text-lg"
            )}
        >
            {children}
        </Link>
    );

    return isMobile ? <SheetClose asChild>{linkComponent}</SheetClose> : linkComponent;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-20 items-center transition-all duration-300',
        hasScrolled ? 'bg-background/70 backdrop-blur-lg border-b border-border/20' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="#home" onClick={(e) => scrollTo('home', e)} className="flex items-center gap-2">
          <span className="text-xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-gradient">CONVERGENCE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
          ))}
          <Button asChild size="sm" className="rounded-full" onClick={(e) => scrollTo('events', e as any)}>
            <Link href="#events">Explore Events</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
        {isClient && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full -mx-6 -my-6">
                <SheetHeader className="flex-row justify-between items-center p-4 border-b">
                    <SheetTitle className="text-lg font-bold font-headline">Menu</SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
                    </SheetClose>
                </SheetHeader>
                <nav className="flex-1 flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.name} href={link.href} isMobile>{link.name}</NavLink>
                  ))}
                </nav>
                <div className="p-4 border-t">
                    <SheetClose asChild>
                        <Button asChild className="w-full" onClick={(e) => scrollTo('events', e as any)}>
                            <Link href="#events">Explore Events</Link>
                        </Button>
                    </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
