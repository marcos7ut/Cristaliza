# Cristaliza

Site da Cristaliza (Marcos e Fernando) e os projetos de exemplo.

## O site da Cristaliza (`index.html`)

O design foi criado por nós dois para o nosso negócio e **fica exatamente como é**. Tudo o que entrar nele precisa usar os mesmos estilos e componentes que ele já tem.

O que mudou em relação ao arquivo original:

- O WhatsApp oficial foi ligado no campo que o próprio site já previa: `window.CRISTALIZA_CONTACT={whatsapp:"5511954810927"}`. Com isso, o botão flutuante e o "Enviar à Cristaliza" do formulário abrem a conversa.
- Instagram (`cristalizadigital`) e Facebook oficiais ligados no mesmo campo (`instagram` e `facebook`). Os botões redondos da seção de contato agora abrem as páginas.
- Entrou a seção **Projetos** (`#projetos`), montada com os mesmos cartões da seção de serviços (`service-card`, `solution-preview`, `tile`, `button outline`). Ela também ganhou um link no menu.

### Organização dos arquivos (o visual é o mesmo de antes)

O `index.html` era um arquivo único de 242 KB. Agora tem 17 KB, e o resto fica em arquivos que o navegador guarda em cache. Comparamos a página antes e depois, pixel a pixel, no computador e no celular, e ficou idêntica.

| Arquivo | O que é |
|---|---|
| `assets/css/cristaliza.css` | Todos os estilos do site |
| `assets/js/gsap.min.js`, `ScrollTrigger.min.js` | Biblioteca das animações (GSAP 3.12.7) |
| `assets/js/cristaliza.js` | Menu, simulador, briefing, WhatsApp e redes |
| `assets/js/fundo.js` | Fundo animado (WebGL) |
| `assets/js/demonstracao.js` | Janelas de "Ver demonstração" |
| `assets/img/logo-cristaliza*.webp` | As duas versões da logo |
| `assets/img/og-cristaliza.jpg` | Imagem que aparece quando o link é compartilhado (WhatsApp, Instagram) |
| `assets/img/icone-*.png`, `manifest.webmanifest` | Ícone ao salvar o site na tela inicial |
| `privacidade.html` | Política de privacidade (LGPD), aberta pelo "Privacidade" do rodapé |
| `404.html` | Página de "não encontrado" no visual do site |
| `sitemap.xml`, `robots.txt` | Para o Google |

A configuração de contato (WhatsApp, Instagram e Facebook) continua no próprio `index.html`, em `window.CRISTALIZA_CONTACT`.

**Se trocar para um domínio próprio:** atualize o endereço `https://marcos7ut.github.io/Cristaliza/` no `<head>` do `index.html` (canonical, og:url, og:image e dados para o Google), no `sitemap.xml` e no `robots.txt`. No `404.html`, troque `/Cristaliza/` por `/`.

## Projetos de exemplo (`exemplos/`)

| Pasta | O que é | Design |
|---|---|---|
| `moda/` | **NOVE**, loja de roupas fictícia em SP no modelo dos lojistas do Giro. Vitrine com sacola que vira pedido no WhatsApp, lista VIP e a seção "Loja que se mede", que leva ao painel Giro | Design system *SABLE* (sable-fashion-39), sem mudanças |
| `saboaria/` | **Saboaria Lavanda**, loja artesanal com catálogo, quiz de aroma, monte seu kit e pedido pelo WhatsApp | O projeto Aromas, com outra marca |
| `modelo/` | Modelo simples de loja, editado pelo `catalogo.js` | — |

Em Projetos também aparecem dois projetos reais:

- o **Itarobá**, app com acesso restrito. Aparece **só como demonstração**: o cartão não tem link nem botão;
- o **Giro** (https://marcos7ut.github.io/Giro/), exemplo de dashboard, com link.

No design system da loja de roupas, o CSS, as fontes, as fotos e as animações ficaram iguais aos originais. Mudaram só três coisas:

- os textos;
- a moeda e os preços;
- as ações, que agora mandam para o WhatsApp.

O que existia só para o catálogo do design system (o script `ds-embed`) foi removido.

Os pedidos de teste de todos os exemplos chegam no WhatsApp do Marcos. Todos os exemplos têm `noindex`, para não aparecerem no Google como empresas reais.

### Onde mudar

- **Moda:**
  - produtos e preços: lista `PRODUCTS` no fim de `exemplos/moda/index.html`;
  - número de WhatsApp: constante `WHATS`, no mesmo arquivo.
- **Capas da seção Projetos:** `assets/projetos/*.webp`, com 1200×750 px.

## Publicar

O site é publicado pelo GitHub Pages direto da branch `main` (Settings → Pages). Não há etapa de build.

## Verificação automática

O `ferramentas/verificar.py` roda a cada envio (GitHub Actions) e acusa link quebrado, página ou imagem pesada demais, base64 embutido e número de WhatsApp malformado.

O site original e os arquivos dos design systems estão na lista `PRESERVADOS`. Assim, a verificação nunca pede para mexer no design deles.
