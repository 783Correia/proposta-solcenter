import { useState, useEffect, useCallback } from "react";

export function useTypewriter(text: string, typingSpeed = 120, deletingSpeed = 80, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < text.length) {
        return setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        return setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        return setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = animate();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animate]);

  return displayText;
}
