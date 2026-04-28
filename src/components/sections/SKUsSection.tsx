import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const frentes = [
  {
    brand: "Solcenter Energia + Pro",
    tag: "B2C + B2B",
    color: "orange",
    items: [
      "Otimização do site atual + SEO técnico completo",
      "Landing Page solar — foco em simulação e orçamento",
      "Landing Page Solcenter Pro — manutenção e suporte",
      "Google Ads — termos de intenção solar",
      "Meta Ads — remarketing + audiências por interesse",
      "3 posts/semana (Instagram + Facebook)",
      "GA4 + Meta Pixel + rastreamento de conversão",
    ],
  },
  {
    brand: "Solcenter Mobilidade",
    tag: "B2B — venda em volume",
    color: "blue",
    items: [
      "Landing Page B2B — venda de frotas para empresa",
      "Google Ads B2B — termos de frota elétrica",
      "2 posts/semana com foco em gestor de frota",
      "Formulário de proposta comercial integrado",
      "Rastreamento de conversão B2B separado",
    ],
  },
];

const SKUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: handoffRef, isVisible: handoffVisible } = useScrollAnimation(0.1);

  return (
    <section id="entregaveis" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Entregáveis
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            O que você recebe
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Estrutura separada por frente. Tudo rastreado. Ativo que fica com você.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {frentes.map((f, i) => (
            <FrenteCard key={f.brand} frente={f} index={i} />
          ))}
        </div>

        <div ref={handoffRef} className={`fade-up ${handoffVisible ? "visible" : ""}`}>
          <div className="glass-card p-8">
            <p className="heading-display text-base font-bold text-foreground mb-4">
              Ao final do contrato, tudo pertence a você
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Sites em Next.js com código-fonte",
                "Contas de ads com histórico de otimização",
                "Criativos e templates de post",
                "Calendário editorial documentado",
                "Relatório de performance completo",
                "Documentação para continuidade",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FrenteCardProps {
  frente: (typeof frentes)[number];
  index: number;
}

const FrenteCard = ({ frente, index }: FrenteCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border flex-wrap">
        <h3 className="heading-display text-lg font-bold text-foreground">{frente.brand}</h3>
        <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
          {frente.tag}
        </span>
      </div>
      <ul className="space-y-3">
        {frente.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SKUsSection;
