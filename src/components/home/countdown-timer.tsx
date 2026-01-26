'use client';

import { useState, useEffect } from 'react';

type TimeUnitProps = {
  value: number;
  label: string;
};

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-card/50 p-2 w-16 h-16 md:w-24 md:h-24 backdrop-blur-sm border border-border/20">
      <span className="text-2xl md:text-4xl font-bold font-mono text-primary">{String(value).padStart(2, '0')}</span>
      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">{label}</span>
    </div>
  );
}

type CountdownTimerProps = {
  date: Date;
};

export default function CountdownTimer({ date }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +date - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
