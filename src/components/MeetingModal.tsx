'use client';

import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const meetingOptions = [
  {
    title: '15-Minute Chat',
    desc: 'Quick introduction or casual conversation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    color: 'bg-accent/10 text-accent',
    href: 'mailto:ikramullah35000@gmail.com?subject=15min%20Meeting%20Request&body=Hi%20Ikram%2C%0A%0AI%27d%20like%20to%20schedule%20a%2015-minute%20chat.',
  },
  {
    title: '30-Minute Deep Dive',
    desc: 'Project discussion or technical consultation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M12 14l-2 2 2 2 2-2-2-2z" />
      </svg>
    ),
    color: 'bg-purple-500/10 text-purple-400',
    href: 'mailto:ikramullah35000@gmail.com?subject=30min%20Meeting%20Request&body=Hi%20Ikram%2C%0A%0AI%27d%20like%20to%20schedule%20a%2030-minute%20meeting%20to%20discuss%20a%20potential%20project.',
  },
  {
    title: 'Instant Call',
    desc: 'Call me directly right now',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    color: 'bg-emerald-500/10 text-emerald-400',
    href: 'tel:03098660810',
  },
  {
    title: 'Send an Email',
    desc: 'Drop me a message directly',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: 'bg-emerald-500/10 text-emerald-400',
    href: 'mailto:ikramullah35000@gmail.com',
  },
];

export default function MeetingModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg rounded-xl border border-border bg-card p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          Schedule a Meeting
        </h3>
        <p className="text-sm text-muted mb-6">
          Choose how you&apos;d like to connect. I&apos;ll get back to you as soon as possible.
        </p>

        <div className="space-y-3">
          {meetingOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith('mailto') ? undefined : '_blank'}
              rel={option.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-card-hover transition-colors group"
            >
              <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center shrink-0`}>
                {option.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {option.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {option.desc}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground shrink-0">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/60 text-center mt-6">
          Prefer a specific time? Just send me an email and I&apos;ll find a slot.
        </p>
      </div>
    </div>
  );
}
