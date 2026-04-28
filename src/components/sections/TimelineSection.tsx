import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    phase: "Mês 1",
    days: "Setup",
    title: "Sites, LPs e Infraestrutura",
    items: [
      "Otimização do site Energia + SEO técnico",
      "LP solar + LP Pro + LP Mobilidade B2B",
      "Instalação de GA4, Meta Pixel e GTM",
      "Rastreamento de conversão por marca",
      "Reestruturação das campanhas Google Ads",
      "Primeiros posts das duas marcas",
    ],
  },
  {
    phase: "Mês 2 — 3",
    days: "Execução",
    title: "Campanhas e Primeiros Dados",
    items: [
      "Google Ads Energia — correspondência exata",
      "Meta Ads Energia — lookalike e remarketing",
      "Google Ads Mobilidade B2B no ar",
      "Análise dos primeiros dados de conversão",
      "Ajuste de palavras negativas",
      "Relatório de performance do mês 1",
    ],
  },
  {
    phase: "Mês 4 — 6",
    days: "Otimização",
    title: "Escala e Entrega Final",
    items: [
      "Ajuste de lances com base no CPL por marca",
      "Escala do que gera lead abaixo do target",
      "Relatório trimestral com CPL e ROAS",
      "Relatório final dos 6 meses",
      "Entrega de repositórios, contas e documentação",
    ],
  },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prazo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Cronograma
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            6 meses. Cada etapa com propósito.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Você sabe o que está sendo feito em cada fase.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-8" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <TimelineItem key={phase.phase} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  phase: (typeof phases)[number];
  index: number;
}

const TimelineItem = ({ phase, index }: TimelineItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`fade-up relative pl-16 sm:pl-20 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-6">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="glass-card p-6 sm:p-8">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            {phase.phase}
          </span>
          <span className="text-xs text-muted-foreground font-medium">{phase.days}</span>
        </div>
        <h3 className="heading-display text-lg font-bold text-foreground mb-4">{phase.title}</h3>
        <ul className="space-y-2">
          {phase.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineSection;
