import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const included = [
  "2 sites (Energia e Mobilidade)",
  "3 LPs de conversão",
  "Setup Instagram — 2 marcas",
  "Google Ads — Energia + Mobilidade B2B",
  "Meta Ads — Energia (remarketing + audiências)",
  "Conteúdo — 5 posts/semana (3 Energia + 2 Mobilidade)",
  "GA4 + Meta Pixel + rastreamento de conversão",
  "Relatório mensal com CPL por marca",
  "Google Meu Negócio otimizado",
  "Handoff completo ao fim do contrato",
];

const comparisons = [
  { label: "Gestor de tráfego (só ads, sem sites nem conteúdo)", value: "R$2.000–2.500/mês", included: false },
  { label: "Social media (só posts, sem ads nem tracking)", value: "R$1.500–2.000/mês", included: false },
  { label: "Sites + LPs em agência", value: "R$8.000–20.000 avulso", included: false },
  { label: "Tudo junto — duas marcas, estrutura completa", value: "R$16k entrada + R$3.600/mês", included: true },
];

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: compRef, isVisible: compVisible } = useScrollAnimation(0.1);

  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Investimento
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Entrada + mensalidade.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            A entrada cobre tudo que é construído uma vez. A mensalidade cobre a gestão contínua das duas marcas.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <div className={`fade-up ${isVisible ? "visible" : ""}`}>
            <div className="relative flex flex-col rounded-xl border border-primary/30 bg-primary/[0.04] shadow-[0_0_30px_hsl(28_90%_48%/0.08)] p-8 h-full">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                Pacote Completo — 2 Marcas
              </Badge>

              <div className="mb-6 mt-2">
                <h3 className="heading-display text-xl font-bold text-foreground">Solcenter Energia + Mobilidade</h3>
                <p className="text-xs text-muted-foreground mt-1">6 meses de gestão</p>
              </div>

              <div className="mb-6 border-y border-border py-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Entrada</p>
                  <p className="heading-display text-2xl font-bold text-foreground">R$16.000</p>
                  <p className="text-xs text-primary mt-0.5">2 sites + 3 LPs + setup</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Mensalidade</p>
                  <p className="heading-display text-2xl font-bold text-foreground">R$3.600<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-xs text-primary mt-0.5">tráfego + social media</p>
                </div>
              </div>

              <div className="mb-6 border-border grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Total 6 meses</p>
                  <p className="heading-display text-2xl font-bold text-foreground">R$37.600</p>
                  <p className="text-xs text-muted-foreground mt-0.5">parcelado</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/[0.06] border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1">À vista (−10%)</p>
                  <p className="heading-display text-2xl font-bold text-primary">R$33.840</p>
                  <p className="text-xs text-primary mt-0.5 font-medium">economia de R$3.760</p>
                </div>
              </div>

              <ul className="flex-1 space-y-2.5">
                {included.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
                * Verba de mídia (Google Ads e Meta Ads) é separada — fica na conta da Solcenter.
              </p>
            </div>
          </div>

          <div ref={compRef} className={`fade-up ${compVisible ? "visible" : ""}`}>
            <div className="glass-card p-8 h-full flex flex-col">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Comparativo
              </p>
              <div className="space-y-3 flex-1">
                {comparisons.map((c) => (
                  <div
                    key={c.label}
                    className={`flex items-start gap-3 p-4 rounded-lg ${c.included ? "bg-primary/[0.06] border border-primary/20" : "bg-muted/40"}`}
                  >
                    {c.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <div>
                      <p className={`text-sm font-medium ${c.included ? "text-foreground" : "text-muted-foreground"}`}>
                        {c.label}
                      </p>
                      <p className={`text-xs mt-0.5 ${c.included ? "text-primary font-semibold" : "text-muted-foreground/60 line-through"}`}>
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                Cada frente gerida separadamente, com tracking real e relatório mensal que mostra CPL — não apenas alcance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
