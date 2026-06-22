'use client';

import { useState } from 'react';
import MeetingModal from './MeetingModal';

export default function StickyMeetButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-red-500/30 hover:bg-accent-hover hover:shadow-xl hover:shadow-red-500/40 transition-all duration-200 hover:-translate-y-0.5"
      >
        Let&apos;s Meet
      </button>

      <MeetingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
