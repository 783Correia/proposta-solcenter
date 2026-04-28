import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, MousePointerClick, Megaphone, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    label: "Sites + LPs",
    desc: "Infraestrutura por marca",
    detail: "Site Energia + LP solar + LP Pro · LP Mobilidade B2B",
  },
  {
    icon: MousePointerClick,
    label: "Tráfego Pago",
    desc: "Campanhas por audiência",
    detail: "Google + Meta para Energia · Google B2B para Mobilidade",
  },
  {
    icon: Megaphone,
    label: "Conteúdo",
    desc: "Editorial por público",
    detail: "3 posts/semana Energia · 2 posts/semana Mobilidade",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    desc: "Tracking que mostra o que funciona",
    detail: "GA4 + Meta Pixel + conversões por marca + relatório mensal",
  },
];

const StrategySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation(0.1);

  return (
    <section id="solucao" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            A Solução
          </p>
          <h2 className="heading-display mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Uma infraestrutura completa
            <br />
            <span className="neon-text">para cada frente do negócio.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-16">
            Cada marca com seu próprio site, suas próprias campanhas e seu próprio calendário de conteúdo.
            Tudo rastreado. Tudo otimizado. Resultados separados por frente.
          </p>
        </div>

        <div
          ref={featRef}
          className={`fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16 ${featVisible ? "visible" : ""}`}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="glass-card p-6 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-1">{p.label}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{p.desc}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Solcenter Mobilidade</p>
              <h3 className="heading-display text-2xl font-bold text-foreground mb-3">
                B2B puro. Venda em volume para empresas.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O decisor de frota quer saber custo por km, manutenção e prazo de entrega — não reel de Instagram.
                Campanha Google focada em gestor de logística, LP com argumentos técnicos e formulário direto para proposta comercial.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "B2B", label: "venda em volume" },
                { value: "Google", label: "canal principal" },
                { value: "LP", label: "focada em proposta" },
                { value: "CPL", label: "rastreado por marca" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-background">
                  <p className="heading-display text-2xl font-bold neon-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
