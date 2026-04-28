

# Tela de Boas-Vindas com Envelope Interativo

Uma tela de entrada (splash screen) que aparece antes da proposta, com um envelope/pasta que reage ao movimento do mouse, criando uma experiencia imersiva e premium.

---

## Visual

A tela ocupa 100% da viewport com fundo escuro e um efeito de brilho neon sutil ao centro. No centro da tela:

1. **Envelope/Pasta** -- um elemento visual estilo envelope desenhado com CSS puro (formas geometricas com bordas neon e efeito glassmorphism), que se inclina suavemente seguindo a posicao do mouse (efeito parallax 3D com `perspective` e `rotateX/rotateY`)
2. **Texto "BEM VINDO(A)"** -- acima do envelope, em fonte grande (Space Grotesk), estilo display
3. **Frase "Sua proposta esta pronta"** -- abaixo do envelope, em texto menor e cor suave (muted)
4. **Botao "Bora fechar negocio"** -- abaixo da frase, com estilo neon verde (mesmo padrao dos botoes existentes), com animacao pulse

Ao clicar no botao, a tela inteira faz uma transicao suave (fade out + scale) e revela a proposta completa por baixo.

---

## Comportamento

- O envelope acompanha o mouse com rotacao 3D suave (maximo ~15 graus em cada eixo)
- No mobile, o efeito de mouse nao se aplica (o envelope fica estatico com uma animacao leve de flutuacao)
- Ao clicar "Bora fechar negocio", a tela de boas-vindas desaparece com animacao e a proposta completa e exibida
- O estado e controlado por `useState` na pagina Index -- uma vez que o usuario clicou, a welcome screen some

---

## Detalhes Tecnicos

### Arquivo criado
- `src/components/WelcomeScreen.tsx` -- componente da tela de boas-vindas

### Arquivo editado
- `src/pages/Index.tsx` -- adicionar estado `showWelcome` e renderizar condicionalmente o `WelcomeScreen` ou o conteudo da proposta

### Estrutura do WelcomeScreen

- **Props**: recebe `onEnter: () => void` (callback quando o usuario clica no botao)
- **Estado**: `mousePosition` via `useState` para rastrear posicao do mouse
- **Event listener**: `onMouseMove` no container principal para calcular rotacao baseada na posicao do mouse relativa ao centro da tela
- **Envelope**: construido com `div`s estilizadas com CSS (borda neon, glassmorphism, formato retangular com aba triangular no topo usando `clip-path` ou bordas)
- **Estilo 3D**: container com `perspective: 1000px`, envelope com `transform: rotateX(Xdeg) rotateY(Ydeg)` calculados dinamicamente
- **Transicao de saida**: ao clicar, aplica classes de animacao (`opacity-0 scale-95 transition-all duration-700`) e apos a transicao, chama `onEnter()`
- **Mobile**: detecta touch device e aplica animacao de flutuacao (`translateY` oscilando) ao inves do efeito de mouse

### Alteracao no Index.tsx

```text
const [showWelcome, setShowWelcome] = useState(true);

if (showWelcome) {
  return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
}

return (
  <main>... conteudo atual ...</main>
);
```

### Estilo do Envelope (CSS puro)
- Retangulo com cantos arredondados e borda neon verde sutil
- Aba superior triangular usando `clip-path` ou pseudo-elemento com borda
- Efeito glassmorphism (`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]`)
- Sombra neon suave ao redor
- Selo/circulo decorativo no centro com icone ou inicial

