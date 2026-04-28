import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    phase: "Mês 1",
    days: "Fundação",
    title: "Setup, Sites e Infraestrutura",
    items: [
      "Auditoria completa das contas de Energia e Mobilidade",
      "Otimização do site Solcenter Energia (solcenter-site.vercel.app)",
      "Desenvolvimento da LP Energia Solar — foco em simulação/orçamento",
      "Desenvolvimento da LP Solcenter Pro — manutenção e suporte",
      "Desenvolvimento da LP Mobilidade B2B — com calculadora de TCO",
      "Instalação de GA4, Meta Pixel, LinkedIn Insight Tag e Google Tag Manager",
      "Configuração de rastreamento de conversão por marca",
      "Reestruturação das campanhas Energia no Google Ads",
      "Primeiros posts das duas marcas (6 posts lançamento)",
    ],
  },
  {
    phase: "Mês 2 — 3",
    days: "Execução",
    title: "Conteúdo, Campanhas e Primeiros Dados",
    items: [
      "Lançamento das campanhas Google Ads Energia com correspondência exata",
      "Lançamento das campanhas LinkedIn Ads Mobilidade B2B",
      "Meta Ads Energia: lookalike, interesses e remarketing",
      "Análise dos primeiros dados de conversão por marca",
      "Produção de 6 criativos de tráfego (3 Energia + 3 Mobilidade)",
      "Calendário editorial mensal entregue para os dois meses",
      "Ajuste de palavras negativas com base nas primeiras buscas",
      "Google Meu Negócio — otimização completa + primeiros posts",
      "Relatório de performance do primeiro mês",
    ],
  },
  {
    phase: "Mês 4 — 6",
    days: "Otimização e Escala",
    title: "Performance, Ajustes e Entrega Final",
    items: [
      "Ajuste de lances com base no CPL real de cada marca",
      "Escala das campanhas que geram lead abaixo do target",
      "Pausagem de palavras e criativos que não convertem",
      "Teste A/B em LPs — variações de CTA e headline",
      "LinkedIn Ads — refinamento de segmentação por cargo e setor",
      "Relatório trimestral com CPL, ROAS e metas atingidas",
      "Relatório final dos 6 meses com todos os indicadores",
      "Entrega dos repositórios, contas e documentação completa",
      "Reunião de handoff — briefing para continuidade",
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
            Sem overlap de fases, sem entregas vagas. Você sabe exatamente o que está sendo feito em cada mês.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-8" />

          <div className="space-y-12">
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
        <h3 className="heading-display text-xl font-bold text-foreground mb-4">{phase.title}</h3>
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
