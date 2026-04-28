import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, MousePointerClick, Megaphone, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    label: "Sites + LPs por Frente",
    desc: "Infraestrutura separada por marca",
    detail: "Site Energia+Pro + LPs de conversão + Site/LP Mobilidade B2B focado",
  },
  {
    icon: MousePointerClick,
    label: "Tráfego Segmentado",
    desc: "Campanhas independentes por audiência",
    detail: "Google+Meta para Energia · LinkedIn+Google B2B para Mobilidade",
  },
  {
    icon: Megaphone,
    label: "Conteúdo por Marca",
    desc: "Editorial diferente para cada público",
    detail: "3 posts/semana Energia · 2 posts/semana Mobilidade (LinkedIn focado)",
  },
  {
    icon: BarChart3,
    label: "Analytics Completo",
    desc: "Tracking que mostra o que funciona",
    detail: "GA4 + Meta Pixel + conversões por marca + relatório mensal real",
  },
];

const StrategySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation(0.1);
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation(0.1);

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
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-6">
            O problema da Solcenter não é produto — é que as três frentes estão sendo geridas como se fossem a mesma coisa.
            Energia Solar vende economia e sustentabilidade para o consumidor final e PMEs. Mobilidade Elétrica fecha
            contrato com empresa de logística que quer reduzir custo de frota em escala. São funis completamente diferentes.
          </p>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-16">
            Em 6 meses você terá{" "}
            <span className="font-semibold text-foreground">sites que ranqueiam por marca</span>,{" "}
            <span className="font-semibold text-foreground">campanhas otimizadas por audiência</span>{" "}
            e conteúdo que converte cada público para a decisão certa.
          </p>
        </div>

        <div
          ref={featRef}
          className={`fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-20 ${featVisible ? "visible" : ""}`}
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

        <div ref={caseRef} className={`fade-up ${caseVisible ? "visible" : ""}`}>
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-12">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Por que separar as marcas?
            </p>
            <h3 className="heading-display text-2xl font-bold text-foreground sm:text-3xl mb-4 text-balance">
              Mobilidade Elétrica é B2B puro. Energia Solar é B2C e B2B. Misturar os dois dilui os dois.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A Solcenter Mobilidade vende motos elétricas em volume para empresas — logística, delivery, distribuidoras.
              O decisor é um gestor de frota ou diretor financeiro que quer ver planilha de TCO (Total Cost of Ownership),
              incentivos fiscais e casos reais de redução de custo. Ele não está no Instagram assistindo reels.
              Ele está no LinkedIn e pesquisando no Google com termos técnicos. Uma estratégia B2B separada,
              com copy específico e presença no LinkedIn, fecha esse gap completamente.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "B2B", label: "Mobilidade — venda em volume" },
                { value: "B2C", label: "Energia — pessoa física e PME" },
                { value: "2x", label: "mais conversão com LP dedicada" },
                { value: "TCO", label: "argumento que fecha frota" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="heading-display text-3xl font-bold neon-text">{stat.value}</p>
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
