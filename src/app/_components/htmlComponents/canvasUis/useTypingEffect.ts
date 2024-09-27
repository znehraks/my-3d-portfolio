import { useEffect, useState } from 'react';

export function useTypingEffect({
  text,
  speed = 200,
  displayTime = 200,
}: {
  text: string;
  speed?: number;
  displayTime?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(typingTimer);
    }
    if (!isTypingComplete) {
      setIsTypingComplete(true);
    }
    return () => {};
  }, [currentIndex, text, speed, isTypingComplete]);

  useEffect(() => {
    if (isTypingComplete) {
      const displayTimer = setTimeout(() => {
        const fadeOutTimer = setInterval(() => {
          setOpacity((prevOpacity) => {
            if (prevOpacity <= 0) {
              clearInterval(fadeOutTimer);
              return 0;
            }
            return prevOpacity - 0.1;
          });
        }, 50);

        return () => clearInterval(fadeOutTimer);
      }, displayTime);

      return () => clearTimeout(displayTimer);
    }
    return () => {};
  }, [isTypingComplete, displayTime]);

  return { opacity, displayedText };
}
