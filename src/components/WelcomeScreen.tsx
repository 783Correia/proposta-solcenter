import { useState, useCallback, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WelcomeScreenProps {
  onEnter: () => void;
}

type Phase = "idle" | "opening" | "open" | "exiting";

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatY, setFloatY] = useState(0);
  const isMobile = useIsMobile();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || phase !== "idle") return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: ((centerY - clientY) / centerY) * 8,
        y: ((clientX - centerX) / centerX) * 8,
      });
    },
    [isMobile, phase]
  );

  useEffect(() => {
    if (!isMobile || phase !== "idle") return;
    let frame: number;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      setFloatY(Math.sin((timestamp - start) / 1400) * 8);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isMobile, phase]);

  const handleEnvelopeClick = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    setTimeout(() => setPhase("open"), 700);
    setTimeout(() => setPhase("exiting"), 1400);
    setTimeout(() => onEnter(), 1900);
  };

  const envelopeTransform =
    phase === "idle"
      ? isMobile
        ? `translateY(${floatY}px)`
        : `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`
      : "none";

  const flapRotate =
    phase === "opening" || phase === "open" || phase === "exiting"
      ? "rotateX(-175deg)"
      : "rotateX(0deg)";

  const letterSlide =
    phase === "open" || phase === "exiting"
      ? "translateY(-60px) scale(1)"
      : "translateY(0px) scale(0.95)";

  const letterOpacity = phase === "open" || phase === "exiting" ? 1 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      style={{
        transition: "opacity 0.5s ease, transform 0.5s ease",
        opacity: phase === "exiting" ? 0 : 1,
        transform: phase === "exiting" ? "scale(1.04)" : "scale(1)",
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 30%, hsl(28 90% 48% / 0.05) 0%, transparent 60%)" }}
      />

      <div className="relative flex flex-col items-center gap-10 z-10 px-4 text-center">
        <p
          className="text-xs font-medium tracking-[0.35em] uppercase text-muted-foreground"
          style={{ transition: "opacity 0.4s", opacity: phase === "exiting" ? 0 : 1 }}
        >
          Proposta exclusiva · Yuri Correia · 2026
        </p>

        <div>
          <h1
            className="heading-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
            style={{ transition: "opacity 0.4s", opacity: phase === "exiting" ? 0 : 1 }}
          >
            Bem-vindo,
          </h1>
          <h2
            className="heading-display text-3xl sm:text-4xl md:text-5xl font-bold mt-1"
            style={{ color: "hsl(28 90% 48%)", transition: "opacity 0.4s", opacity: phase === "exiting" ? 0 : 1 }}
          >
            Solcenter.
          </h2>
        </div>

        <div style={{ perspective: "1000px" }}>
          <div
            className="relative cursor-pointer select-none"
            style={{
              transform: envelopeTransform,
              transformStyle: "preserve-3d",
              transition: phase === "idle" ? "transform 0.15s ease-out" : "transform 0.5s ease",
            }}
            onClick={handleEnvelopeClick}
          >
            <div
              style={{
                width: "min(280px, 85vw)",
                height: "min(190px, 58vw)",
                position: "relative",
                borderRadius: 12,
                background: "#FFFFFF",
                border: "1px solid hsl(28 90% 48% / 0.18)",
                boxShadow: "0 12px 50px hsl(28 90% 48% / 0.14), 0 2px 8px hsl(28 90% 48% / 0.06)",
                overflow: "hidden",
              }}
            >
              {/* Flap */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, width: "100%", height: "52%",
                  transformOrigin: "top center", transform: flapRotate,
                  transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)", zIndex: 3, backfaceVisibility: "hidden",
                }}
              >
                <div style={{ width: "100%", height: "100%", clipPath: "polygon(0 0, 100% 0, 50% 100%)", background: "linear-gradient(180deg, hsl(28 90% 95%) 0%, hsl(28 60% 88%) 100%)", borderBottom: "1px solid hsl(28 90% 48% / 0.12)" }} />
              </div>

              {/* Letter */}
              <div
                style={{
                  position: "absolute", top: 20, left: 20, right: 20, bottom: 20,
                  background: "hsl(28 90% 48%)", borderRadius: 8, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  transform: letterSlide, opacity: letterOpacity,
                  transition: "transform 0.5s ease, opacity 0.4s ease", zIndex: 1,
                }}
              >
                <span className="heading-display font-bold text-white text-sm tracking-widest uppercase">Proposta</span>
              </div>

              {/* Seal */}
              <div
                style={{
                  position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                  width: 52, height: 52, borderRadius: "50%", border: "2px solid hsl(28 90% 48% / 0.3)",
                  background: "hsl(28 90% 48% / 0.06)", display: "flex", alignItems: "center",
                  justifyContent: "center", zIndex: 2,
                  opacity: phase === "opening" || phase === "open" ? 0 : 1, transition: "opacity 0.3s ease",
                }}
              >
                <span className="heading-display font-bold text-xl" style={{ color: "hsl(28 90% 48%)" }}>S</span>
              </div>

              {/* Bottom fold */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "35%", zIndex: 2 }}>
                <div style={{ position: "absolute", inset: 0, clipPath: "polygon(0 100%, 50% 0%, 100% 100%)", background: "hsl(28 20% 93%)", borderTop: "1px solid hsl(28 90% 48% / 0.08)" }} />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "60%", clipPath: "polygon(0 100%, 100% 100%, 0 0)", background: "hsl(28 20% 95%)", zIndex: 1 }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "60%", clipPath: "polygon(100% 100%, 0 100%, 100% 0)", background: "hsl(28 20% 95%)", zIndex: 1 }} />
            </div>

            <div style={{ position: "absolute", bottom: -16, left: "10%", right: "10%", height: 20, background: "hsl(28 90% 48% / 0.08)", borderRadius: "50%", filter: "blur(10px)" }} />
          </div>
        </div>

        <p
          className="text-sm text-muted-foreground"
          style={{ transition: "opacity 0.3s ease", opacity: phase === "idle" ? 1 : 0 }}
        >
          {isMobile ? "Toque no envelope para abrir" : "Clique no envelope para abrir"}
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
