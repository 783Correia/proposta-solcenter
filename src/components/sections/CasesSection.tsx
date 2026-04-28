import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "Jaco Locadora",
    tag: "Tráfego + Site + Criativos",
    before: "R$4.500/mês em tráfego. Só lead desqualificado.",
    after: "Site refeito, criativos remodelados, comunicação alinhada.",
    result: "Posição 5 → 1 no Google em 24h",
    sub: "Todos os leads passaram a ser qualificados para a base.",
    highlight: "24h",
    highlightLabel: "para sair de 5º para 1º no Google",
  },
  {
    client: "Sales Embalagens",
    tag: "Estrutura + Criativos",
    before: "R$25.000/mês de faturamento.",
    after: "Estrutura digital correta e criativos certos para rodar.",
    result: "R$25k → R$165k no mesmo mês",
    sub: "560% de crescimento de faturamento colocando a estrutura certa.",
    highlight: "560%",
    highlightLabel: "de crescimento no faturamento",
  },
];

const CasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Resultados Reais
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Não é promessa. É o que já aconteceu.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Cada estrutura entregue gerou resultado rastreável. Nenhum número aqui é estimativa.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cases.map((c, i) => (
            <CaseCard key={c.client} case_={c} index={i} />
          ))}
        </div>

        <div className={`fade-up mt-10 rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 text-center ${isVisible ? "visible" : ""}`}>
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">Yuri Correia</span> — gestor de tráfego e estrategista digital
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Atendo empresas que querem estrutura digital que funciona — site, tráfego pago, conteúdo e rastreamento integrados.
            Cada projeto tem número de resultado. Cada real investido tem destino rastreável.
          </p>
          <a
            href="https://ocorreia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos os cases em ocorreia.com.br
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface CaseCardProps {
  case_: (typeof cases)[number];
  index: number;
}

const CaseCard = ({ case_: c, index }: CaseCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border flex-wrap">
        <h3 className="heading-display text-lg font-bold text-foreground">{c.client}</h3>
        <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
          {c.tag}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">ANTES</span>
          <p className="text-sm text-muted-foreground">{c.before}</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">AÇÃO</span>
          <p className="text-sm text-muted-foreground">{c.after}</p>
        </div>
      </div>

      <div className="rounded-xl bg-primary/[0.06] border border-primary/15 p-5">
        <p className="heading-display text-3xl font-bold text-primary mb-1">{c.highlight}</p>
        <p className="text-xs text-muted-foreground mb-2">{c.highlightLabel}</p>
        <p className="text-sm font-semibold text-foreground">{c.result}</p>
        <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
      </div>
    </div>
  );
};

export default CasesSection;
