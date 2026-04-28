import { useState, useEffect } from "react";

const STORAGE_KEY = "solcenter_proposta_expiry";
const DURATION_MS = 24 * 60 * 60 * 1000;

const getExpiry = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return parseInt(stored, 10);
  const expiry = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(expiry));
  return expiry;
};

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState(() => getExpiry() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getExpiry() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const expired = timeLeft <= 0;
  const hours   = Math.floor(timeLeft / (1000 * 60 * 60));
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
