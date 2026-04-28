import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("oportunidade")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 gradient-hero">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-8 text-xs font-semibold tracking-[0.4em] uppercase text-primary">
          Proposta Comercial · Solcenter · Yuri Correia · 2026
        </p>

        <h1 className="heading-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
          Energia solar.
          <br />
          Motos elétricas.
        </h1>

        <p className="mt-6 heading-display text-3xl font-bold sm:text-4xl md:text-5xl neon-text">
          Dois mercados. Duas estratégias.
        </p>

        <p className="mt-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
          Solcenter Energia e Solcenter Mobilidade atendem públicos completamente diferentes.{" "}
          <span className="font-semibold text-foreground">
            Sites, tráfego pago e conteúdo pensados para cada frente — separados, rastreados e otimizados.
          </span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Solcenter Energia + Pro
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Solcenter Mobilidade B2B
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Sites · Tráfego · Conteúdo
          </span>
        </div>

        <button
          onClick={scrollToContent}
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(28_90%_48%/0.3)]"
        >
          Ver a Proposta Completa
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
