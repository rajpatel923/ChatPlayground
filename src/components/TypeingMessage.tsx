import React, { useEffect, useState } from "react";

interface TypingMessageProps {
  fullText: string;
}

const TypingMessage: React.FC<TypingMessageProps> = ({ fullText }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 10; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;

    // Reset displayed text on every new fullText change
    setDisplayedText(fullText[0] || '');
    
    const intervalId = setInterval(() => {
      // Ensure we are within bounds before appending
      if (currentIndex < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount or on re-render
  }, [fullText]);

  return (
    <div className="flex justify-start">
      <div className="bg-white text-gray-800 p-2 rounded-lg max-w-screen-md">
        {displayedText}
      </div>
    </div>
  );
};

export default TypingMessage;
