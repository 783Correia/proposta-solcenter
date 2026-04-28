import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle, Sun, Zap, Target, CalendarDays, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

type Tab = "energia" | "mobilidade" | "tecnico";

interface WeekBlock {
  week: string;
  theme: string;
  posts: string[];
  action?: string;
}

const energiaPosts: WeekBlock[] = [
  {
    week: "Semana 1",
    theme: "Apresentação + Prova Social",
    posts: [
      "Post 1 — 'Quanto você paga de luz por mês? A gente calcula quanto você economizaria com solar.' (CTA: simulação)",
      "Post 2 — Case real: cliente X economizou R$Y/mês após instalação (foto do painel + número)",
      "Post 3 — Reels: 'Mitos sobre energia solar que todo mundo acredita' (desmonta 3 objeções comuns)",
    ],
    action: "Publicar Stories com enquete: 'Você já pensou em instalar solar?'",
  },
  {
    week: "Semana 2",
    theme: "Educação + Objeção de Tempo",
    posts: [
      "Post 4 — 'Em quanto tempo o sistema solar paga o investimento?' (infográfico com simulação real)",
      "Post 5 — Processo de instalação: do projeto até o painel ligado (carrossel 5 etapas)",
      "Post 6 — 'Por que a Solcenter Pro garante 25 anos de funcionamento do seu sistema'",
    ],
    action: "Impulsionar post do case com CTA para simulação.",
  },
  {
    week: "Semana 3",
    theme: "Técnico + Financiamento",
    posts: [
      "Post 7 — 'On-grid, off-grid ou híbrido? Qual é o certo para você?' (explicativo simples)",
      "Post 8 — Financiamento em até 60x: 'Você pode instalar solar e pagar com a própria economia'",
      "Post 9 — Bastidores: equipe técnica em campo, instalação real (humaniza a marca)",
    ],
    action: "Stories: 'Faça uma simulação gratuita em 2 minutos' com link para LP.",
  },
  {
    week: "Semana 4",
    theme: "Autoridade + Urgência",
    posts: [
      "Post 10 — '5 perguntas para fazer antes de contratar uma empresa de solar' (posiciona como autoridade)",
      "Post 11 — Depoimento em vídeo de cliente satisfeito (formato curto, 60 segundos)",
      "Post 12 — 'Sua conta de luz vai subir mais este ano. Quem garante que a sua não sobe?'",
    ],
    action: "Remarketing para quem visitou a LP mas não converteu.",
  },
  {
    week: "Semana 5-6",
    theme: "Escala e Segmentação",
    posts: [
      "Post 13 — Foco em solar para empresas/PMEs: 'Sua empresa pode reduzir até 90% da conta de energia'",
      "Post 14 — Case B2B: empresa economizou R$X/mês (validação para público corporativo)",
      "Post 15 — Solcenter Pro: 'Manutenção preventiva que garante máxima geração o ano todo'",
      "Post 16 — 'Março chegou. O que a sua conta de luz vai mostrar em setembro?'",
    ],
    action: "Analisar quais posts tiveram mais clique no link — replicar o formato.",
  },
  {
    week: "Semana 7-8",
    theme: "Consolidação e Prova",
    posts: [
      "Post 17 — Compilado de resultados: 'X clientes, Y MWh gerados, Z em economia' (dados reais do mês)",
      "Post 18 — 'Ainda tem dúvida sobre energia solar? A gente responde ao vivo' (Live ou Q&A nos Stories)",
      "Post 19 — Reels: processo de instalação em timelapse (alto engajamento)",
      "Post 20 — CTA direto: 'Simulação gratuita. Você vê o retorno antes de assinar qualquer coisa.'",
    ],
    action: "Relatório de performance: qual conteúdo gerou mais cliques no link / simulações.",
  },
];

const mobilidadePosts: WeekBlock[] = [
  {
    week: "Semana 1",
    theme: "Posicionamento B2B",
    posts: [
      "Post LinkedIn 1 — 'Frota de motos elétricas: o que muda na operação de uma empresa de logística?' (artigo técnico)",
      "Post LinkedIn 2 — Custo de combustível vs. custo de carga elétrica: planilha comparativa",
      "Post Instagram 3 — 'A sua frota ainda roda a gasolina? Aqui está o custo que você não está calculando'",
    ],
    action: "Criar Company Page da Solcenter Mobilidade no LinkedIn e otimizar perfil.",
  },
  {
    week: "Semana 2",
    theme: "TCO e ROI Concreto",
    posts: [
      "Post LinkedIn 4 — 'TCO de frota elétrica vs. convencional: os números que toda empresa precisa ver' (carrossel com dados)",
      "Post LinkedIn 5 — Manutenção: 'Moto elétrica vs. moto gasolina — custo de manutenção nos primeiros 2 anos'",
      "Post Instagram 6 — Vídeo curto: moto elétrica em operação real de entrega (prova de conceito)",
    ],
    action: "Lançar campanha LinkedIn Ads — segmentada para gestores de frota e logística.",
  },
  {
    week: "Semana 3",
    theme: "Objeções de Autonomia",
    posts: [
      "Post LinkedIn 7 — 'A autonomia da moto elétrica é suficiente para operação urbana? Dados reais de uso'",
      "Post LinkedIn 8 — Incentivos fiscais para frota elétrica: ICMS, IPI e benefícios por estado",
      "Post Instagram 9 — 'Empresas que migraram para frota elétrica: o que elas dizem agora'",
    ],
    action: "Remarketing para visitantes da LP Mobilidade no Google e LinkedIn.",
  },
  {
    week: "Semana 4",
    theme: "Case + Proposta",
    posts: [
      "Post LinkedIn 10 — Case de empresa parceira: 'Como a [Empresa X] reduziu 40% do custo de frota com motos elétricas'",
      "Post LinkedIn 11 — FAQ técnico: autonomia, tempo de carga, assistência técnica, garantia",
      "Post Instagram 12 — 'Compra em volume para sua empresa: condições especiais. Fale com nosso time.'",
    ],
    action: "Ativar formulário de proposta comercial com resposta em até 24h.",
  },
  {
    week: "Semana 5-6",
    theme: "Escala e Parcerias",
    posts: [
      "Post LinkedIn 13 — 'Frota elétrica como diferencial competitivo: empresa que reduz emissão atrai cliente ESG'",
      "Post LinkedIn 14 — Processo de entrega para empresa: 'Da proposta à frota operando em X dias'",
      "Post Instagram 15 — Bastidores: equipe técnica, suporte e processo de entrega (constrói confiança)",
      "Post LinkedIn 16 — 'Você já calculou quanto sua empresa paga de combustível por mês?' (CTA para calculadora TCO)",
    ],
    action: "Analisar performance das campanhas LinkedIn — ajustar segmentação por cargo.",
  },
  {
    week: "Semana 7-8",
    theme: "Consolidação B2B",
    posts: [
      "Post LinkedIn 17 — Tendências 2026: 'Frotas elétricas crescem X% no Brasil — como se posicionar agora'",
      "Post LinkedIn 18 — Depoimento de gestor de frota parceiro (vídeo ou citação com foto)",
      "Post Instagram 19 — 'Motos elétricas em grande escala: condições especiais para empresa acima de 10 unidades'",
      "Post LinkedIn 20 — CTA final: 'Solicite uma proposta para a sua frota. Resposta em 24h.'",
    ],
    action: "Relatório B2B: leads qualificados gerados, CPL LinkedIn vs. Google.",
  },
];

const tecnicoSemanas: { semana: string; acoes: string[] }[] = [
  {
    semana: "Semana 1-2",
    acoes: [
      "Auditoria das contas Google Ads, Meta e LinkedIn existentes",
      "Instalação GA4, Meta Pixel, LinkedIn Insight Tag e GTM",
      "Configuração de rastreamento de conversão por marca",
      "Reestruturação das campanhas Google Ads Energia (correspondência exata)",
      "Setup Google Meu Negócio — otimização completa do perfil",
      "Briefing e aprovação do calendário editorial do mês 1",
    ],
  },
  {
    semana: "Semana 3-4",
    acoes: [
      "Go-live LP Energia Solar (foco em simulação/orçamento)",
      "Go-live LP Solcenter Pro (manutenção e suporte)",
      "Lançamento das campanhas Meta Ads Energia (lookalike + interesses)",
      "Lançamento das campanhas LinkedIn Ads Mobilidade (gestor de frota + logística)",
      "Go-live LP Mobilidade B2B com calculadora TCO",
      "Primeiros relatórios parciais — impressões e CTR por campanha",
    ],
  },
  {
    semana: "Semana 5-6",
    acoes: [
      "Análise dos primeiros dados de conversão por marca",
      "Ajuste de palavras negativas com base nas buscas reais",
      "Teste A/B nos criativos (dor vs. ROI vs. autoridade)",
      "Refinamento da segmentação LinkedIn por setor e porte de empresa",
      "Relatório 30 dias — CPL por marca, CTR, conversões",
      "Ajuste de lances baseado nos primeiros dados de CPL",
    ],
  },
  {
    semana: "Semana 7-8",
    acoes: [
      "Escala das campanhas com CPL dentro do target",
      "Pausagem de palavras e criativos que não convertem",
      "Remarketing avançado para visitantes que não converteram",
      "Google Meu Negócio — primeiro post mensal integrado",
      "Relatório 60 dias — performance completa por marca",
      "Planejamento do mês 3 com base nos dados consolidados",
    ],
  },
];

const PlanoDias = () => {
  const [activeTab, setActiveTab] = useState<Tab>("energia");
  const header = useScrollAnimation();
  const body = useScrollAnimation(0.05);

  const currentPosts = activeTab === "energia" ? energiaPosts : activeTab === "mobilidade" ? mobilidadePosts : [];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Proposta
          </Link>
          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold">
            Bonus — Plano de Acao 60 Dias
          </Badge>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 sm:py-20 gradient-hero">
        <div className="section-container">
          <div ref={header.ref} className={`fade-up text-center ${header.isVisible ? "visible" : ""}`}>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Solcenter · Plano Estratégico
            </p>
            <h1 className="heading-display text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
              Plano de Acao <span className="neon-text">60 Dias</span>
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              O que fazer nos próximos 60 dias — com ou sem contrato.
              Aqui está a estratégia de conteúdo, ações técnicas e o calendário separado por marca.
            </p>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-8 border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Sun, label: "Energia", value: "20 posts/60d" },
              { icon: Zap, label: "Mobilidade", value: "20 posts/60d" },
              { icon: Target, label: "Campanhas", value: "4 ativas" },
              { icon: CalendarDays, label: "Semanas", value: "8 planejadas" },
              { icon: TrendingUp, label: "LPs Live", value: "Semana 3-4" },
              { icon: Users, label: "Audiências", value: "B2C + B2B" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card flex items-center gap-3 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="section-container">
          <div className="flex gap-2 mb-10 border-b border-border">
            {([
              { id: "energia", label: "Solcenter Energia + Pro", emoji: "☀️" },
              { id: "mobilidade", label: "Solcenter Mobilidade B2B", emoji: "⚡" },
              { id: "tecnico", label: "Ações Técnicas", emoji: "⚙️" },
            ] as { id: Tab; label: string; emoji: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="mr-1.5">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div ref={body.ref} className={`fade-up ${body.isVisible ? "visible" : ""}`}>
            {activeTab !== "tecnico" ? (
              <div className="space-y-6">
                {/* Audience banner */}
                <div className={`rounded-xl p-5 border ${activeTab === "energia" ? "border-orange-200 bg-orange-50" : "border-blue-200 bg-blue-50"}`}>
                  <p className={`text-sm font-bold mb-1 ${activeTab === "energia" ? "text-orange-700" : "text-blue-700"}`}>
                    {activeTab === "energia" ? "PÚBLICO: Pessoa física e PME — quem quer reduzir conta de luz" : "PÚBLICO: Empresas — gestor de frota / diretor financeiro / logística"}
                  </p>
                  <p className={`text-xs leading-relaxed ${activeTab === "energia" ? "text-orange-600" : "text-blue-600"}`}>
                    {activeTab === "energia"
                      ? "Canal principal: Instagram + Facebook. Linguagem: acessível, orientada a economia em R$, com prova social e objeções respondidas."
                      : "Canal principal: LinkedIn. Linguagem: técnica, orientada a dados de TCO, ROI e redução de custo operacional. Instagram como apoio de prova social."}
                  </p>
                </div>

                {currentPosts.map((block, i) => (
                  <WeekCard key={block.week} block={block} index={i} brand={activeTab} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-xl p-5 border border-primary/20 bg-primary/[0.03] mb-8">
                  <p className="text-sm font-bold text-primary mb-1">EXECUÇÃO TÉCNICA — paralela ao conteúdo</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Estas ações acontecem em paralelo com a produção de conteúdo. São os itens que fazem o conteúdo e o tráfego funcionarem de verdade — tracking, LPs, campanhas e relatórios.
                  </p>
                </div>
                {tecnicoSemanas.map((s, i) => (
                  <TecnicoCard key={s.semana} semana={s} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 gradient-radial" />
        <div className="section-container relative z-10 text-center">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Próximo passo</p>
          <h2 className="heading-display mx-auto max-w-3xl text-3xl font-bold sm:text-4xl text-foreground mb-6 text-balance">
            Você tem o plano.{" "}
            <span className="neon-text">A gente executa junto.</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground mb-10">
            Este plano funciona sozinho — mas funciona melhor com gestão profissional, tracking real e otimização contínua.
            Fala comigo e começamos na semana que vem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5554999003163?text=Ol%C3%A1%20Yuri%2C%20vi%20o%20plano%2060%20dias%20da%20Solcenter%20e%20quero%20fechar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(28_90%_48%/0.3)]"
            >
              <MessageCircle className="h-4 w-4" />
              Fechar com Yuri no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a Proposta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

interface WeekCardProps {
  block: WeekBlock;
  index: number;
  brand: "energia" | "mobilidade";
}

const WeekCard = ({ block, index, brand }: WeekCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-6 sm:p-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-bold tracking-[0.15em] uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
          {block.week}
        </span>
        <span className="text-sm font-semibold text-foreground">{block.theme}</span>
      </div>

      <div className="space-y-3 mb-4">
        {block.posts.map((post, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`mt-0.5 shrink-0 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center text-white ${brand === "energia" ? "bg-orange-500" : "bg-blue-600"}`}>
              {i + 1}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">{post}</p>
          </div>
        ))}
      </div>

      {block.action && (
        <div className="border-t border-border pt-4 flex items-start gap-2">
          <span className="text-xs font-bold text-primary shrink-0 mt-0.5">ACAO:</span>
          <p className="text-xs text-muted-foreground leading-relaxed">{block.action}</p>
        </div>
      )}
    </div>
  );
};

interface TecnicoCardProps {
  semana: { semana: string; acoes: string[] };
  index: number;
}

const TecnicoCard = ({ semana, index }: TecnicoCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-6 sm:p-8 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-xs font-bold tracking-[0.15em] uppercase bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 inline-block">
        {semana.semana}
      </span>
      <ul className="space-y-2 mt-3">
        {semana.acoes.map((acao, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
            {acao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanoDias;
