import React, { useEffect, useState } from "react";

interface TypingMessageProps {
    fullText: string;
}
const TypingMessage: React.FC<TypingMessageProps> = ({ fullText }) => {
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = 100; // milliseconds per character
  
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
        if (currentIndex >= fullText.length) {
          clearInterval(intervalId);
        }
      }, typingSpeed);
  
      return () => clearInterval(intervalId);
    }, [fullText]);
  
    return (
      <div className="flex  justify-start">
        <div className="bg-white text-gray-800 p-2 rounded-lg max-w-screen-md">
          {displayedText}
        </div>
      </div>
    );
  };
  
  export default TypingMessage;
  