import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "O site atual da Solcenter entra no escopo?",
    a: "Sim. O site (solcenter-site.vercel.app) é a base — vamos otimizá-lo, adicionar tracking completo e criar as LPs faltantes. Não é jogar fora, é potencializar.",
  },
  {
    q: "A verba de tráfego está inclusa?",
    a: "Não. O que você investe em Google Ads e Meta Ads é separado e fica nas suas contas. Você tem controle total sobre o orçamento de mídia.",
  },
  {
    q: "Qual a diferença entre o setup e a mensalidade?",
    a: "O setup (R$2.800) cobre tudo que é construído uma vez: sites, LPs, instalação de tracking e estrutura inicial das campanhas — entregue no mês 1. A mensalidade (R$2.000/mês) cobre a gestão contínua: criação de conteúdo, otimização de campanhas e relatórios mensais.",
  },
  {
    q: "Quanto tempo leva para aparecer resultado?",
    a: "Tráfego pago gera lead na primeira semana após as campanhas ir ao ar. O SEO das LPs começa a ranquear em 30 a 60 dias. Os resultados vão consolidando ao longo dos 6 meses.",
  },
  {
    q: "Qual é o próximo passo?",
    a: "Fala comigo pelo WhatsApp. Alinhamos a forma de pagamento e começamos na semana seguinte.",
  },
];

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation(0.1);

  return (
    <footer className="relative overflow-hidden">
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="section-container">
          <div ref={faqRef} className={`fade-up ${faqVisible ? "visible" : ""}`}>
            <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
              Dúvidas
            </p>
            <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl text-foreground mb-12">
              Perguntas frequentes
            </h2>
            <div className="mx-auto max-w-3xl grid gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10 pb-24 sm:pb-32">
        <div ref={ref} className={`fade-up text-center ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Próximo passo
          </p>
          <h2 className="heading-display mx-auto max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Fala comigo e começamos na semana que vem.
          </h2>

          <a
            href="https://wa.me/5554996865236?text=Ol%C3%A1%20Yuri%2C%20vi%20a%20proposta%20da%20Solcenter%20e%20quero%20fechar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(28_90%_48%/0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            Fechar com Yuri no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-20 border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              © 2026 Yuri Correia · yuricorrea.ty@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
}

const FaqItem = ({ faq, index }: FaqItemProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-6 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="font-semibold text-foreground mb-2">{faq.q}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
    </div>
  );
};

export default FooterSection;
