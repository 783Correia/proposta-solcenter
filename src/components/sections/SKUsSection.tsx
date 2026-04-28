import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const energiaSiteItems = [
  "Otimização completa do site atual (solcenter-site.vercel.app)",
  "Landing Page — Simulação de Economia / Orçamento Solar",
  "Landing Page — Solcenter Pro (manutenção e suporte)",
  "Formulário de orçamento com notificação em tempo real",
  "Botão flutuante de WhatsApp com mensagem pré-configurada",
  "Google Tag Manager + Google Analytics 4 instalados",
  "Meta Pixel para remarketing no Instagram/Facebook",
  "Rastreamento de conversão no Google Ads (formulários + WhatsApp)",
  "Schema markup para energia solar (Rich Snippets)",
  "Core Web Vitals otimizados — LCP, CLS, FID",
  "SEO técnico completo: sitemap, robots.txt, meta tags",
  "Google Meu Negócio — perfil otimizado e posts mensais",
];

const mobilidadeSiteItems = [
  "Landing Page B2B — Frotas de Motos Elétricas (venda em volume)",
  "Calculadora de TCO integrada (ROI vs. frota convencional)",
  "Formulário de proposta comercial para empresa",
  "Página de cases com empresas parceiras",
  "Integração com LinkedIn para captura de leads",
  "Rastreamento B2B — formulários + ligações + LinkedIn",
  "SEO para termos B2B: 'frota moto elétrica', 'comprar motos elétricas empresa'",
  "Core Web Vitals otimizados e carregamento rápido",
];

const trafegoItems = [
  "Solcenter Energia — Google Ads: simulação solar, energia solar residencial, on-grid",
  "Solcenter Energia — Meta Ads: remarketing, audiência lookalike, interesses",
  "Solcenter Mobilidade — Google Ads B2B: frota elétrica, comprar moto elétrica empresa",
  "Solcenter Mobilidade — LinkedIn Ads: segmentado por cargo (gestor de frota, diretor financeiro)",
  "Separação total de budget e otimização por marca",
  "Correspondência exata e de frase — sem correspondência ampla",
  "Lista inicial de 60+ palavras negativas por marca",
  "Rastreamento de conversão real — CPL por marca",
  "Remarketing separado para visitantes de cada marca",
  "Relatório mensal com CPL, ROAS e dados reais",
];

const socialItems = [
  "Solcenter Energia — 3 posts/semana (Instagram + Facebook)",
  "Cases reais de instalações — economia comprovada em R$",
  "Conteúdo educativo: como funciona, quanto economiza, financiamento",
  "Desmistificação de objeções: 'funciona em dia nublado?', 'quanto tempo retorna?'",
  "Solcenter Pro integrada: 'instalação + suporte técnico em um contrato'",
  "Solcenter Mobilidade — 2 posts/semana (LinkedIn principal)",
  "Conteúdo técnico: TCO, autonomia, manutenção zero, incentivos fiscais",
  "Cases de empresas: redução de custo de frota em número",
  "Calendário editorial mensal entregue com antecedência",
  "Copywriting e briefing completo de cada post",
];

const SKUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: col2Ref, isVisible: col2Visible } = useScrollAnimation(0.1);
  const { ref: col3Ref, isVisible: col3Visible } = useScrollAnimation(0.1);

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
            Tudo incluso nos 6 meses. Estrutura separada por marca. Ativo que fica com você para sempre.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <DeliverableColumn title="Site Energia + Pro + 2 LPs" tag="Next.js" items={energiaSiteItems} delay={0} />
          <DeliverableColumn title="LP Mobilidade B2B + Calculadora TCO" tag="Focado em frota" items={mobilidadeSiteItems} delay={150} />
        </div>

        <div ref={col2Ref} className={`fade-up grid gap-6 lg:grid-cols-2 mb-6 ${col2Visible ? "visible" : ""}`}>
          <DeliverableColumn title="Tráfego Pago — 3 Frentes" tag="Google + Meta + LinkedIn" items={trafegoItems} delay={0} />
          <DeliverableColumn title="Conteúdo Estratégico" tag="5 posts/semana total" items={socialItems} delay={150} />
        </div>

        <div ref={col3Ref} className={`fade-up ${col3Visible ? "visible" : ""}`}>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border flex-wrap">
              <h3 className="heading-display text-xl font-bold text-foreground">
                Ao final dos 6 meses, tudo documentado e entregue
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Repositório do site Energia e LP Mobilidade",
                "Contas de Google Ads com histórico completo",
                "Conta LinkedIn Ads com histórico de otimização",
                "Meta Business Manager configurado",
                "Listas de palavras negativas documentadas",
                "Calendário editorial + templates de post",
                "Relatório de performance dos 6 meses",
                "Documentação para continuidade por qualquer equipe",
                "Google Meu Negócio ativo e rankeando",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
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

interface DeliverableColumnProps {
  title: string;
  tag: string;
  items: string[];
  delay: number;
}

const DeliverableColumn = ({ title, tag, items, delay }: DeliverableColumnProps) => {
  return (
    <div className="glass-card p-8" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border flex-wrap">
        <h3 className="heading-display text-xl font-bold text-foreground">{title}</h3>
        <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
          {tag}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
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
