'use client';

import React, { useState, useEffect } from 'react';

const words = [
  'Modern Full Stack Developer',
  'Informatics Specialist',
  'Frontend Engineer',
  'Systems & Process Analyst'
];

export const TypingHeader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="inline-block font-extrabold text-indigo-600">
      {currentText}
      <span className="ml-1 inline-block h-[0.85em] w-1 translate-y-1 animate-blink bg-indigo-600" />
    </span>
  );
};
