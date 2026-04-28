import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentiators = [
  {
    number: "01",
    title: "Estratégia separada por marca — não uma campanha que serve para tudo.",
    body: "Energia Solar e Mobilidade Elétrica têm planos editoriais, campanhas e LPs independentes. Cada frente com seus KPIs, seu funil e seu público bem definido.",
  },
  {
    number: "02",
    title: "Landing pages de conversão — não páginas institucionais.",
    body: "Uma LP de energia solar tem um único objetivo: gerar simulação ou orçamento. A de Mobilidade: formulário direto para proposta comercial. Copy específico, CTA sem distração.",
  },
  {
    number: "03",
    title: "Solcenter Pro integrada à estratégia de Energia.",
    body: "Instalação + suporte técnico incluso é um diferencial competitivo real. Vamos usar isso no conteúdo e nas campanhas de Energia como argumento de fechamento — não como página separada ignorada.",
  },
  {
    number: "04",
    title: "Tracking real — relatório que mostra CPL, não impressões.",
    body: "Rastreamento instalado por marca desde o dia 1. Relatório mensal com Custo por Lead separado por Energia e Mobilidade. Você sabe exatamente onde cada lead veio e quanto custou.",
  },
  {
    number: "05",
    title: "Estrutura que fica com a Solcenter para sempre.",
    body: "Sites, contas de ads, criativos, calendários editoriais e documentação completa. Ao fim do contrato, tudo pertence a você — sem dependência.",
  },
];

const DifferentiatorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Diferenciais
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4 text-balance">
            O que muda de verdade.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Presença digital que funciona quando você não está olhando.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {differentiators.map((d, i) => (
            <DifferentiatorItem key={d.number} item={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DifferentiatorItemProps {
  item: (typeof differentiators)[number];
  index: number;
}

const DifferentiatorItem = ({ item, index }: DifferentiatorItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-7 flex gap-6 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="heading-display text-4xl font-bold shrink-0 leading-none mt-0.5"
        style={{ color: "hsl(28 90% 48% / 0.15)" }}
      >
        {item.number}
      </div>
      <div>
        <h3 className="heading-display text-base font-bold text-foreground mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.body}
        </p>
      </div>
    </div>
  );
};

export default DifferentiatorsSection;
