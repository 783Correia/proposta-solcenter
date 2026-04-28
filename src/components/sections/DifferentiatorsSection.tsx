import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentiators = [
  {
    number: "01",
    title: "Estratégia separada por marca — o que a agência atual não entrega.",
    body: "Solcenter Energia e Solcenter Mobilidade vão ter planos editoriais, campanhas, LPs e relatórios separados. Cada frente com sua identidade de comunicação, seus KPIs e seu funil. Não existe campanha 'da Solcenter' genérica — existe campanha de energia solar para quem quer reduzir conta de luz, e campanha de frota elétrica para gestor que quer reduzir custo operacional.",
  },
  {
    number: "02",
    title: "Mobilidade Elétrica no LinkedIn — onde o decisor de frota está.",
    body: "Gestor de logística e diretor financeiro não tomam decisão de compra de frota no Instagram. Estão no LinkedIn, lendo sobre eficiência operacional e custo de TCO. Solcenter Mobilidade vai ter presença ativa no LinkedIn com conteúdo técnico, casos reais de redução de custo e campanhas segmentadas por cargo e setor — alcançando diretamente quem assina o pedido.",
  },
  {
    number: "03",
    title: "Landing Pages de conversão — não páginas institucionais.",
    body: "Uma LP de energia solar não é o site da empresa. É uma página focada em um único objetivo: gerar simulação ou orçamento. Copy de dor, prova social, número claro de economia e um CTA sem distração. O mesmo vale para Mobilidade: LP de frota elétrica com calculadora de TCO, cases de empresas reais e formulário direto para proposta comercial.",
  },
  {
    number: "04",
    title: "Tráfego com tracking real — sem relatório de vaidade.",
    body: "Rastreamento de conversão instalado desde o dia 1. Cada formulário enviado, cada clique no WhatsApp, cada lead gerado — tudo registrado por marca. A partir daí o algoritmo sabe o que funciona e otimiza automaticamente. Relatório mensal com CPL (Custo por Lead) real separado por Energia e Mobilidade, não uma planilha com 'impressões' e 'alcance'.",
  },
  {
    number: "05",
    title: "Conteúdo que aborda objeções reais — não posts motivacionais.",
    body: "Para Energia Solar: 'Quanto tempo leva para pagar o investimento?', 'O sistema funciona em dia nublado?', 'Qual a diferença entre on-grid e off-grid?' — objeções reais que travam a venda. Para Mobilidade: 'E a autonomia da bateria?', 'Qual o prazo de entrega para frota?', 'Como fica a manutenção?'. Cada post pensado para remover uma barreira e empurrar o lead para o próximo passo.",
  },
  {
    number: "06",
    title: "Solcenter Pro integrada à estratégia de Energia — não ignorada.",
    body: "Solcenter Pro presta serviços que acompanham a venda de energia solar — manutenção, monitoramento, suporte técnico. Esse é um diferencial competitivo enorme que a maioria das empresas solares não tem. Vamos usar isso no conteúdo e nas campanhas de Energia: 'instalação + suporte técnico incluso' como argumento de fechamento. Pro não é uma marca separada, é o que justifica pagar mais.",
  },
  {
    number: "07",
    title: "Estrutura que fica com a Solcenter para sempre.",
    body: "Ao fim do contrato: sites próprios em Next.js, contas de ads com histórico de otimização, listas de palavras negativas, criativos, calendários editoriais e documentação completa. Se amanhã você quiser passar para uma equipe interna ou outra agência — é possível. Não vendemos dependência. Construímos ativo.",
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
            Qualquer agência vende "presença digital". Poucas constroem uma máquina separada para cada frente do seu negócio.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
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
      className={`fade-up glass-card p-8 flex gap-6 sm:gap-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="heading-display text-4xl font-bold shrink-0 leading-none mt-1"
        style={{ color: "hsl(28 90% 48% / 0.15)" }}
      >
        {item.number}
      </div>
      <div>
        <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-snug">
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
