import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const includedComplete = [
  "Site Solcenter Energia otimizado + 2 LPs (LP Solar + LP Pro)",
  "LP Solcenter Mobilidade B2B com calculadora de TCO",
  "Google Ads — Energia Solar (Google + Meta)",
  "LinkedIn Ads + Google Ads — Mobilidade B2B",
  "Conteúdo Energia: 3 posts/semana (Instagram + Facebook)",
  "Conteúdo Mobilidade: 2 posts/semana (LinkedIn)",
  "Analytics completo — GA4 + Meta Pixel + LinkedIn Insight",
  "Rastreamento de conversão real por marca",
  "6 criativos de tráfego pago (3 Energia + 3 Mobilidade)",
  "Relatório mensal separado por marca com CPL real",
  "Google Meu Negócio otimizado e posts mensais",
  "Handoff completo ao fim do contrato",
];

const comparisons = [
  { label: "Gestor de tráfego (só Google + Meta, sem LinkedIn)", value: "R$2.000–2.500/mês · sem sites, sem conteúdo", included: false },
  { label: "Social media (só posts, sem estratégia de conversão)", value: "R$1.500–2.000/mês · sem tracking, sem ads", included: false },
  { label: "Sites em agência (2 sites + LPs)", value: "R$8.000–20.000 avulso · sem gestão mensal", included: false },
  { label: "Tudo junto — 3 frentes, 2 marcas, estrutura real", value: "R$4.200/mês · tudo incluso", included: true },
];

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: compRef, isVisible: compVisible } = useScrollAnimation(0.1);
  const { ref: tiersRef, isVisible: tiersVisible } = useScrollAnimation(0.1);

  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Investimento
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            R$4.200 por mês. Tudo incluso.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Um contrato. Três frentes geridas com estratégia separada. Um resultado a perseguir por marca.
          </p>
        </div>

        {/* Tiers */}
        <div ref={tiersRef} className={`fade-up mb-12 ${tiersVisible ? "visible" : ""}`}>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Plano Energia + Pro",
                price: "R$2.500/mês",
                desc: "Site + LPs Energia e Pro, Google Ads, Meta Ads e conteúdo",
                highlight: false,
              },
              {
                name: "Plano Completo",
                price: "R$4.200/mês",
                desc: "Tudo: Energia + Pro + Mobilidade — economiza R$800/mês vs. contratos separados",
                highlight: true,
              },
              {
                name: "Plano Mobilidade B2B",
                price: "R$2.500/mês",
                desc: "LP B2B, LinkedIn Ads, Google Ads B2B e conteúdo técnico",
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl p-6 border ${tier.highlight ? "border-primary/40 bg-primary/[0.04] shadow-[0_0_30px_hsl(28_90%_48%/0.10)]" : "border-border bg-white"}`}
              >
                {tier.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                    Recomendado
                  </Badge>
                )}
                <p className="heading-display text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider">{tier.name}</p>
                <p className={`heading-display text-2xl font-bold mb-2 ${tier.highlight ? "text-primary" : "text-foreground"}`}>{tier.price}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <div className={`fade-up ${isVisible ? "visible" : ""}`}>
            <div className="relative flex flex-col rounded-xl border border-primary/30 bg-primary/[0.04] shadow-[0_0_30px_hsl(28_90%_48%/0.08)] p-8 h-full">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                Pacote Completo — 3 Frentes
              </Badge>

              <div className="mb-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  6 meses de trabalho
                </p>
                <h3 className="heading-display text-2xl font-bold text-foreground">Solcenter — Estrutura Completa</h3>
              </div>

              <div className="mb-6 border-y border-border py-6">
                <p className="heading-display text-4xl font-bold text-foreground">
                  R$25.200
                  <span className="text-base font-normal text-muted-foreground"> total</span>
                </p>
                <p className="mt-1 text-sm font-medium text-primary">= R$4.200/mês · Formas de pagamento a combinar</p>
              </div>

              <ul className="flex-1 space-y-3">
                {includedComplete.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
                * Verba de mídia (Google Ads, Meta Ads, LinkedIn Ads) é separada e fica na conta da Solcenter.
                Você tem controle total sobre o orçamento de tráfego pago.
              </p>
            </div>
          </div>

          <div ref={compRef} className={`fade-up ${compVisible ? "visible" : ""}`}>
            <div className="glass-card p-8 h-full">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Comparativo de mercado
              </p>
              <div className="space-y-4">
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
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                Cada mês com a estrutura errada é mais dinheiro em tráfego que não rastreia, conteúdo que não converte
                e oportunidades que a concorrência está capturando. O custo de não mudar é maior do que o custo de mudar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
