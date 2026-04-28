import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, BarChart2, FileX } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "ENERGIA SOLAR E MOTOS ELÉTRICAS NÃO TÊM O MESMO COMPRADOR.",
    subtitle: "Estratégia genérica que falha nas duas frentes",
    description:
      "Solcenter Energia atende pessoa física e empresas que querem cortar conta de luz. Solcenter Mobilidade vende frotas elétricas para empresas de logística, delivery e distribuidores — compra em volume, decisão racional, ciclo de venda longo. São produtos diferentes, linguagens diferentes, canais diferentes. Tratar as duas com a mesma campanha garante que nenhuma converta.",
  },
  {
    icon: BarChart2,
    title: "TRÁFEGO SEM SEGMENTAÇÃO DE MARCA É VERBA QUEIMADA.",
    subtitle: "Budget compartilhado, resultado diluído",
    description:
      "Quando Energia Solar e Mobilidade Elétrica concorrem pelo mesmo budget sem separação de audiência, o algoritmo não sabe para quem otimizar. Sem landing pages por produto, sem tracking por conversão, sem campanhas B2B separadas para a Mobilidade — cada real investido compete consigo mesmo antes de competir com a concorrência. O resultado: custo alto, lead baixo, relatório vago.",
  },
  {
    icon: FileX,
    title: "CONTEÚDO QUE NÃO FALA COM NINGUÉM NÃO VENDE PARA NINGUÉM.",
    subtitle: "Social media sem estratégia de conversão",
    description:
      "Postar 'energia solar é o futuro' não vende painel. Postar 'motos elétricas economizam combustível' não fecha contrato com distribuidora. A Solcenter tem autoridade real em dois mercados em expansão — e esse potencial está sendo desperdiçado em conteúdo genérico que não aborda objeções, não demonstra ROI e não guia o cliente até a decisão de compra.",
  },
];

const DiagnosisSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="diagnostico" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Diagnóstico
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            O que está acontecendo de verdade.
          </h2>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground mb-16 text-balance">
            Sem achismo. Baseado em como o mercado funciona e no que uma operação de 3 marcas precisa para crescer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <DiagnosisCard key={card.title} card={card} index={i} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-destructive mb-3">O custo real da agência errada</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "3", label: "marcas sem estratégia própria" },
              { value: "0", label: "LPs de conversão ativas" },
              { value: "R$0", label: "retorno rastreável por marca" },
              { value: "∞", label: "meses perdidos sem dados" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="heading-display text-3xl font-bold text-destructive">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface DiagnosisCardProps {
  card: (typeof cards)[number];
  index: number;
}

const DiagnosisCard = ({ card, index }: DiagnosisCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = card.icon;

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 transition-all duration-500 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-1 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
        {card.subtitle}
      </div>
      <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-tight">
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
};

export default DiagnosisSection;
