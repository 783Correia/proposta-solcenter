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
      "Post 2 — Case real: cliente economizou R$X/mês após instalação (foto do painel + número concreto)",
      "Post 3 — Reels: 3 mitos sobre energia solar desmontados em 60 segundos",
    ],
    action: "Stories com enquete: 'Você já pensou em instalar solar?' — alimenta audiência para remarketing.",
  },
  {
    week: "Semana 2",
    theme: "Objeção de Tempo de Retorno",
    posts: [
      "Post 4 — 'Em quanto tempo o sistema solar paga o investimento?' (infográfico com simulação real)",
      "Post 5 — Processo de instalação do início ao fim (carrossel 5 etapas)",
      "Post 6 — 'Por que a Solcenter Pro garante 25 anos de funcionamento do seu sistema'",
    ],
    action: "Impulsionar o post do case (post 2) com CTA direto para a LP de simulação.",
  },
  {
    week: "Semana 3",
    theme: "Técnico + Financiamento",
    posts: [
      "Post 7 — 'On-grid, off-grid ou híbrido? Qual o certo para a sua situação?' (explicativo acessível)",
      "Post 8 — 'Você pode instalar solar e pagar com a própria economia' — financiamento em até 60x",
      "Post 9 — Bastidores: equipe técnica em campo, instalação real (humaniza a marca)",
    ],
    action: "Stories: 'Faça uma simulação gratuita em 2 minutos' com link direto para LP.",
  },
  {
    week: "Semana 4",
    theme: "Autoridade",
    posts: [
      "Post 10 — '5 perguntas para fazer antes de contratar empresa de solar' (posiciona como referência)",
      "Post 11 — Depoimento em vídeo de cliente (formato curto, até 60s)",
      "Post 12 — 'Sua conta de luz vai subir mais este ano. Quem garante que a sua não sobe?'",
    ],
    action: "Remarketing para quem visitou a LP mas não converteu.",
  },
  {
    week: "Semana 5 — 6",
    theme: "B2B + Solcenter Pro",
    posts: [
      "Post 13 — 'Sua empresa pode reduzir até 90% da conta de energia com solar' (foco em PMEs)",
      "Post 14 — Case B2B: empresa X economizou R$Y/mês",
      "Post 15 — Solcenter Pro: 'Manutenção preventiva que garante máxima geração o ano todo'",
      "Post 16 — Pergunta que gera engajamento: 'Qual o maior medo de quem pensa em instalar solar?'",
    ],
    action: "Analisar quais posts tiveram mais clique no link — replicar o formato no mês seguinte.",
  },
  {
    week: "Semana 7 — 8",
    theme: "Consolidação",
    posts: [
      "Post 17 — Compilado: 'X clientes, Y em economia gerada este mês' (dados reais)",
      "Post 18 — Q&A ao vivo ou caixa de perguntas nos Stories",
      "Post 19 — Reels: instalação em timelapse (alto engajamento orgânico)",
      "Post 20 — CTA direto: 'Simulação gratuita — você vê o retorno antes de assinar qualquer coisa.'",
    ],
    action: "Relatório 60 dias: qual conteúdo gerou mais simulações e leads.",
  },
];

const mobilidadePosts: WeekBlock[] = [
  {
    week: "Semana 1",
    theme: "Posicionamento B2B",
    posts: [
      "Post 1 — 'Frota de motos elétricas: o que muda na operação de uma empresa de logística?' (educativo)",
      "Post 2 — Custo de combustível vs. custo de carga elétrica: comparativo em R$/km",
      "Post 3 — Vídeo: moto elétrica em operação real de entrega (prova de conceito)",
    ],
    action: "Perfil Instagram Mobilidade bem configurado: bio com CTA direto para WhatsApp/proposta.",
  },
  {
    week: "Semana 2",
    theme: "Custo e ROI",
    posts: [
      "Post 4 — Manutenção: custo de moto elétrica vs. moto gasolina nos primeiros 2 anos",
      "Post 5 — 'Sua frota ainda roda a gasolina? Aqui está o custo que você não está calculando'",
      "Post 6 — Autonomia: desmontando a principal objeção com dados reais de uso em entrega urbana",
    ],
    action: "Google Ads B2B no ar — termos como 'comprar motos elétricas empresa', 'frota moto elétrica'.",
  },
  {
    week: "Semana 3",
    theme: "Objeções Técnicas",
    posts: [
      "Post 7 — 'Autonomia suficiente para operação urbana? Dados reais de quem já usa'",
      "Post 8 — Incentivos fiscais para frota elétrica: IPI, ICMS e benefícios por estado",
      "Post 9 — Processo de entrega para empresa: da proposta à frota operando",
    ],
    action: "Remarketing para visitantes da LP Mobilidade que não preencheram o formulário.",
  },
  {
    week: "Semana 4",
    theme: "Case + Proposta",
    posts: [
      "Post 10 — Case: empresa parceira que reduziu custo de frota com motos elétricas (com número)",
      "Post 11 — FAQ técnico: tempo de carga, assistência, garantia, entrega para empresa",
      "Post 12 — 'Compra em volume para sua empresa: condições especiais. Fala com o nosso time.'",
    ],
    action: "Formulário de proposta comercial com resposta prometida em até 24h.",
  },
  {
    week: "Semana 5 — 6",
    theme: "Escala",
    posts: [
      "Post 13 — 'Frota elétrica como diferencial: empresa que reduz emissão atrai cliente ESG'",
      "Post 14 — Tendência: frotas elétricas crescem no Brasil — como se posicionar agora",
      "Post 15 — Bastidores: suporte técnico, processo de entrega e assistência (constrói confiança)",
      "Post 16 — 'Quanto sua empresa gasta de combustível por mês?' (CTA para proposta)",
    ],
    action: "Analisar performance do Google Ads B2B — ajustar palavras negativas e lances.",
  },
  {
    week: "Semana 7 — 8",
    theme: "Consolidação B2B",
    posts: [
      "Post 17 — Depoimento de gestor de frota (vídeo ou citação com foto real)",
      "Post 18 — 'Motos elétricas em escala: condições especiais para empresa acima de 10 unidades'",
      "Post 19 — Comparativo visual: custo anual frota gasolina vs. frota elétrica",
      "Post 20 — CTA final: 'Solicite uma proposta. Resposta em 24h.'",
    ],
    action: "Relatório B2B: leads qualificados gerados, CPL Google Ads, taxa de conversão da LP.",
  },
];

const tecnicoSemanas: { semana: string; acoes: string[] }[] = [
  {
    semana: "Semana 1 — 2",
    acoes: [
      "Auditoria das contas Google Ads e Meta existentes",
      "Instalação de GA4, Meta Pixel e Google Tag Manager",
      "Configuração de rastreamento de conversão por marca",
      "Reestruturação das campanhas Google Ads Energia",
      "Google Meu Negócio — otimização completa do perfil",
      "Briefing e aprovação do calendário editorial do mês 1",
    ],
  },
  {
    semana: "Semana 3 — 4",
    acoes: [
      "Go-live LP Energia Solar (foco em simulação/orçamento)",
      "Go-live LP Solcenter Pro",
      "Go-live LP Mobilidade B2B",
      "Lançamento Meta Ads Energia (lookalike + interesses)",
      "Lançamento Google Ads Mobilidade B2B",
      "Primeiros relatórios parciais — CTR por campanha",
    ],
  },
  {
    semana: "Semana 5 — 6",
    acoes: [
      "Análise dos primeiros dados de conversão por marca",
      "Ajuste de palavras negativas com base nas buscas reais",
      "Teste A/B nos criativos das campanhas",
      "Relatório 30 dias — CPL por marca, CTR, conversões",
      "Ajuste de lances com base no CPL real",
      "Google Meu Negócio — primeiro post mensal",
    ],
  },
  {
    semana: "Semana 7 — 8",
    acoes: [
      "Escala das campanhas com CPL dentro do target",
      "Pausagem do que não converte",
      "Remarketing avançado para visitantes que não converteram",
      "Relatório 60 dias — performance completa por marca",
      "Planejamento do mês 3 com base nos dados",
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
      <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="section-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Proposta
          </Link>
          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold">
            Bonus — Plano 60 Dias
          </Badge>
        </div>
      </nav>

      <section className="py-16 sm:py-20 gradient-hero">
        <div className="section-container">
          <div ref={header.ref} className={`fade-up text-center ${header.isVisible ? "visible" : ""}`}>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Solcenter · Plano Estratégico
            </p>
            <h1 className="heading-display text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
              Plano de Acao <span className="neon-text">60 Dias</span>
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              Calendário de conteúdo, ações técnicas e campanhas — separados por marca.
              Com ou sem contrato, isso já é o caminho.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Sun, label: "Energia", value: "20 posts/60d" },
              { icon: Zap, label: "Mobilidade", value: "20 posts/60d" },
              { icon: Target, label: "Campanhas", value: "3 ativas" },
              { icon: CalendarDays, label: "Semanas", value: "8 planejadas" },
              { icon: TrendingUp, label: "LPs live", value: "Semana 3-4" },
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

      <section className="py-12">
        <div className="section-container">
          <div className="flex gap-1 mb-10 border-b border-border overflow-x-auto">
            {([
              { id: "energia", label: "Energia + Pro", emoji: "☀️" },
              { id: "mobilidade", label: "Mobilidade B2B", emoji: "⚡" },
              { id: "tecnico", label: "Acoes Tecnicas", emoji: "⚙️" },
            ] as { id: Tab; label: string; emoji: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
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
              <div className="space-y-5">
                <div className={`rounded-xl p-5 border ${activeTab === "energia" ? "border-orange-200 bg-orange-50" : "border-slate-200 bg-slate-50"}`}>
                  <p className={`text-sm font-bold mb-1 ${activeTab === "energia" ? "text-orange-700" : "text-slate-700"}`}>
                    {activeTab === "energia" ? "Público: pessoa física e PME — quem quer reduzir conta de luz" : "Público: empresa — gestor de frota / diretor financeiro / logística"}
                  </p>
                  <p className={`text-xs leading-relaxed ${activeTab === "energia" ? "text-orange-600" : "text-slate-500"}`}>
                    {activeTab === "energia"
                      ? "Canal principal: Instagram + Facebook. Linguagem acessível, orientada a economia em R$ e prova social."
                      : "Canal principal: Google Ads B2B + Instagram. Linguagem orientada a custo operacional e redução de frota."}
                  </p>
                </div>

                {currentPosts.map((block, i) => (
                  <WeekCard key={block.week} block={block} index={i} brand={activeTab as "energia" | "mobilidade"} />
                ))}
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-xl p-5 border border-primary/20 bg-primary/[0.03] mb-6">
                  <p className="text-sm font-bold text-primary mb-1">Execucao tecnica — em paralelo ao conteudo</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Estes itens acontecem em paralelo com a producao de conteudo. Sao eles que fazem o trafego e o conteudo funcionarem com tracking real.
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

      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 gradient-radial" />
        <div className="section-container relative z-10 text-center">
          <h2 className="heading-display mx-auto max-w-2xl text-3xl font-bold sm:text-4xl text-foreground mb-6 text-balance">
            Voce tem o plano.{" "}
            <span className="neon-text">A gente executa junto.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5554996865236?text=Ol%C3%A1%20Yuri%2C%20vi%20o%20plano%2060%20dias%20e%20quero%20fechar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(28_90%_48%/0.3)]"
            >
              <MessageCircle className="h-4 w-4" />
              Fechar com Yuri
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
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
      style={{ transitionDelay: `${index * 60}ms` }}
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
            <span className={`mt-0.5 shrink-0 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center text-white ${brand === "energia" ? "bg-orange-500" : "bg-slate-600"}`}>
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
      style={{ transitionDelay: `${index * 60}ms` }}
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
