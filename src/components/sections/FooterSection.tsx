import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "O que acontece com o site atual da Solcenter que vocês fizeram?",
    a: "O site atual (solcenter-site.vercel.app) é a base de trabalho. Vamos otimizá-lo tecnicamente, adicionar tracking completo, criar as LPs faltantes e conectar tudo ao ecossistema de tráfego pago. Não é jogar fora — é potencializar o que já existe.",
  },
  {
    q: "A verba de tráfego pago está inclusa no R$4.200/mês?",
    a: "Não. O R$4.200/mês é o valor de gestão, estratégia e criação. O que você investe diretamente no Google Ads, Meta Ads e LinkedIn Ads é separado e fica nas suas contas. Você tem controle total sobre o orçamento de mídia. Recomendamos no mínimo R$2.000/mês de verba para cada frente no início.",
  },
  {
    q: "Por que o LinkedIn para Mobilidade e não só Instagram?",
    a: "Porque o decisor de compra de frota de motos elétricas é um gestor de logística ou diretor financeiro — e esse perfil não toma decisão empresarial no Instagram. No LinkedIn é possível segmentar exatamente por cargo, empresa e setor. Uma campanha bem feita no LinkedIn Ads para gestor de frota converte muito mais do que qualquer campanha genérica no Meta.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Tráfego pago pode gerar lead na primeira semana após as campanhas ir ao ar. LPs otimizadas aumentam a conversão imediatamente. LinkedIn Ads para B2B tem ciclo um pouco mais longo — o lead é mais qualificado, mas leva mais tempo para chegar. SEO orgânico começa a ranquear em 30 a 60 dias. Por isso o contrato é de 6 meses — para consolidar e escalar, não apenas começar.",
  },
  {
    q: "Posso contratar só para uma das marcas?",
    a: "Sim. Temos o Plano Energia + Pro (R$2.500/mês) e o Plano Mobilidade B2B (R$2.500/mês). O Plano Completo é recomendado porque permite integrar as estratégias, economizar na gestão e ter um único ponto de contato para as três frentes. Mas se o momento for de foco em uma frente, começamos por ela.",
  },
  {
    q: "Qual é o próximo passo para fechar?",
    a: "Fala comigo pelo WhatsApp. Alinhamos as formas de pagamento, assinamos o contrato e começamos na semana seguinte. Sem apresentação de 2 horas, sem proposta número 2. Já temos o diagnóstico, o plano e os entregáveis — falta só o sinal verde.",
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
              Dúvidas Comuns
            </p>
            <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl text-foreground mb-4">
              Perguntas que você provavelmente já tem
            </h2>
            <p className="mx-auto max-w-xl text-center text-muted-foreground mb-12">
              Respondendo antes de perguntar — porque uma boa proposta não deixa dúvidas no ar.
            </p>
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
          <h2 className="heading-display mx-auto max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Cada mês com a estratégia errada é mais espaço para a concorrência crescer.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground mb-10 text-balance">
            A proposta é válida por 14 dias. Fale comigo pelo WhatsApp, alinhamos a forma de pagamento
            e começamos na semana seguinte.
          </p>

          <a
            href="https://wa.me/5554999003163?text=Ol%C3%A1%20Yuri%2C%20vi%20a%20proposta%20da%20Solcenter%20e%20quero%20fechar."
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
