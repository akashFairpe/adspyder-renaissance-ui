
import { useState, useEffect } from 'react';

const phrases = [
  "track competitor ads",
  "analyze landing pages", 
  "uncover PPC strategies",
  "discover top-performing creatives",
  "generate ad copies with AI",
  "optimize ad performance",
  "boost ROI across 15+ platforms"
];

export const TypingAnimation = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, isPaused]);

  return (
    <div className="text-2xl lg:text-3xl text-orange-600 font-semibold min-h-[80px] flex items-center justify-center">
      <span>With AdSpyder, you can </span>
      <span>{currentText}</span>
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
};
