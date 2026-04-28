import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Target, BarChart2 } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Públicos diferentes precisam de abordagens diferentes.",
    description:
      "Quem considera instalar painéis solares em casa é diferente de quem avalia comprar 30 motos para uma frota de logística. Canal, linguagem, argumento de venda e ciclo de compra são completamente distintos entre as duas frentes.",
  },
  {
    icon: Target,
    title: "Cada frente merece sua própria infraestrutura.",
    description:
      "Site otimizado, landing page com CTA claro e campanha segmentada por intenção de compra. Quando energia solar e mobilidade elétrica competem pela mesma estrutura, o resultado é mediano nos dois.",
  },
  {
    icon: BarChart2,
    title: "Sem tracking, não tem como otimizar.",
    description:
      "Rastreamento de conversão instalado por marca transforma campanha em dado. Você para de adivinhar o que funciona e começa a escalar o que gera lead — separado por Energia e por Mobilidade.",
  },
];

const DiagnosisSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="oportunidade" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            A Oportunidade
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Dois mercados em expansão.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Energia solar e mobilidade elétrica crescem no Brasil. A questão é quem vai ocupar esse espaço com presença digital de verdade.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <DiagnosisCard key={card.title} card={card} index={i} />
          ))}
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
