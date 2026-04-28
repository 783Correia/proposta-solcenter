import { useState, useEffect } from "react";

const TARGET_DATE = new Date('2026-05-12T10:00:00-03:00').getTime();

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState(() => TARGET_DATE - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(TARGET_DATE - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const expired = timeLeft <= 0;
  const days    = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm">
        {expired ? (
          <span className="font-semibold text-destructive">Proposta Encerrada</span>
        ) : (
          <>
            <span className="text-muted-foreground">Proposta válida por</span>
            <span className="font-mono font-bold text-primary">
              {days}<span className="text-muted-foreground text-[0.65em] mx-0.5">d</span>{" "}
              {pad(hours)}<span className="text-muted-foreground text-[0.65em]">:</span>
              {pad(minutes)}<span className="text-muted-foreground text-[0.65em]">:</span>
              {pad(seconds)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownBar;
