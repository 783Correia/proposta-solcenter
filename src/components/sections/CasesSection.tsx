import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, ChevronDown, ChevronUp, TrendingUp, Phone, MousePointerClick, BarChart3 } from "lucide-react";

const jacoStats = [
  { icon: TrendingUp, value: "12,68%", label: "Taxa de conversão Google Ads", note: "média do setor é 3–4%" },
  { icon: Phone, value: "+28,57%", label: "Ligações mensais GMB", note: "de 14 para 18/mês" },
  { icon: MousePointerClick, value: "+41,67%", label: "Cliques no site GMB", note: "de 12 para 17/mês" },
  { icon: BarChart3, value: "102", label: "Ações mensais no Google", note: "buscas, rotas e ligações" },
];

const CasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [jacoOpen, setJacoOpen] = useState(false);

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

        <div className="space-y-6 mb-10">

          {/* Jaco — expandable com dados reais */}
          <div className={`fade-up glass-card overflow-hidden ${isVisible ? "visible" : ""}`}>
            <button
              onClick={() => setJacoOpen(!jacoOpen)}
              className="w-full p-8 text-left hover:bg-black/[0.01] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h3 className="heading-display text-lg font-bold text-foreground">Jaco Locadora</h3>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Tráfego + Site + Criativos
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                      Relatório Abril 2026
                    </span>
                  </div>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">ANTES</span>
                      <p className="text-sm text-muted-foreground">R$4.500/mês em tráfego. Só lead desqualificado.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">AÇÃO</span>
                      <p className="text-sm text-muted-foreground">Site refeito, criativos remodelados, campanhas reestruturadas por produto.</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-primary/[0.06] border border-primary/15 p-5">
                    <p className="heading-display text-3xl font-bold text-primary mb-1">12,68%</p>
                    <p className="text-xs text-muted-foreground mb-2">taxa de conversão Google Ads (média do setor: 3–4%)</p>
                    <p className="text-sm font-semibold text-foreground">Posição 5 → 1 no Google em 24h</p>
                    <p className="text-xs text-muted-foreground mt-1">Todos os leads passaram a ser qualificados para a base.</p>
                  </div>
                </div>

                <div className="shrink-0 text-muted-foreground mt-1">
                  {jacoOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </div>

              {!jacoOpen && (
                <p className="text-xs text-primary font-semibold mt-4">
                  Ver dados completos do relatório →
                </p>
              )}
            </button>

            {jacoOpen && (
              <div className="px-8 pb-8 border-t border-border">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mt-6 mb-4">
                  Dados reais — Abril 2026
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {jacoStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="p-4 rounded-xl bg-background border border-border">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="heading-display text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs font-semibold text-foreground mt-1">{stat.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{stat.note}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-6 pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">O que esses números significam:</span>{" "}
                  enquanto a média do Google Ads converte 3 em cada 100 cliques, as campanhas da Jaco convertem quase 13.
                  Isso é o resultado de site, campanha e Google Meu Negócio trabalhando juntos — exatamente a estrutura que estou propondo para a Solcenter.
                </p>
              </div>
            )}
          </div>

          {/* Sales Embalagens */}
          <div className={`fade-up glass-card p-8 ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border flex-wrap">
              <h3 className="heading-display text-lg font-bold text-foreground">Sales Embalagens</h3>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                Estrutura + Criativos
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">ANTES</span>
                <p className="text-sm text-muted-foreground">R$25.000/mês de faturamento.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-muted-foreground/60 shrink-0 mt-0.5 w-12">AÇÃO</span>
                <p className="text-sm text-muted-foreground">Estrutura digital correta e criativos certos para rodar.</p>
              </div>
            </div>

            <div className="rounded-xl bg-primary/[0.06] border border-primary/15 p-5">
              <p className="heading-display text-3xl font-bold text-primary mb-1">560%</p>
              <p className="text-xs text-muted-foreground mb-2">de crescimento no faturamento</p>
              <p className="text-sm font-semibold text-foreground">R$25k → R$165k no mesmo mês</p>
              <p className="text-xs text-muted-foreground mt-1">560% de crescimento de faturamento colocando a estrutura certa.</p>
            </div>
          </div>

        </div>

        <div className={`fade-up rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 text-center ${isVisible ? "visible" : ""}`}>
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">Yuri Correia</span> — estrategista digital
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Construo a estrutura digital completa para empresas que querem crescer — site, tráfego, conteúdo e rastreamento integrados em uma estratégia única.
            Cada decisão tem dado por trás. Cada real investido tem destino rastreável.
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

export default CasesSection;
