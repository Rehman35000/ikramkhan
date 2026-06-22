'use client';

import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setText(currentWord.slice(0, text.length + 1));
      if (text.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(currentWord.slice(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [text, wordIndex, isDeleting, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
}
