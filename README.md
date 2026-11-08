# Cristaliza

Site da Cristaliza (Marcos e Fernando) e vitrine dos projetos que fazemos.

- **`index.html`**: a vitrine. A primeira tela já é o simulador **"Monte o seu site ao vivo"**. A pessoa digita o nome do negócio, escolhe o ramo, o estilo e o objetivo, e vê o rascunho num celular na tela. Depois manda tudo pronto para o WhatsApp do Marcos ou do Fernando, com o link do rascunho.
- **Rua das lojas**: o portfólio. Cada fachada é um site de verdade que dá para abrir e testar.
- **`exemplos/saboaria/`**: a loja de demonstração "Saboaria Lavanda", com marca fictícia. Ela foi feita a partir de um projeto pronto que estava pausado. Os pedidos de teste chegam no WhatsApp da Cristaliza.
- **`exemplos/modelo/`**: um modelo de loja simples, com catálogo, sacola e pedido pelo WhatsApp. Para criar uma loja, só se edita o `catalogo.js`.
- **`ferramentas/`**: scripts para criar loja nova, deixar as fotos leves e conferir o site.

## Publicar (GitHub Pages)

1. No GitHub, abra **Settings → Pages**.
2. Em *Source*, escolha **Deploy from a branch**, com **main** e **/ (root)**, e salve.
3. Em 1 ou 2 minutos o site fica em `https://marcos7ut.github.io/<nome-do-repositório>/`.

> Dica: renomeie o repositório de `Cristaliza-` para `cristaliza` (Settings → General → Repository name). O endereço fica mais limpo, e a imagem de prévia do link (WhatsApp, Instagram) já aponta para `marcos7ut.github.io/cristaliza/`.

## Criar uma loja nova

```bash
bash ferramentas/nova-loja.sh doces-da-cida
# edite exemplos/doces-da-cida/catalogo.js (nome, WhatsApp, cores, produtos)
python3 ferramentas/otimizar-imagens.py ~/fotos-da-cida exemplos/doces-da-cida/img
python3 ferramentas/verificar.py
```

Para a loja aparecer na **Rua das lojas**, acrescente um item em `LOJAS`, no começo do `assets/app.js`. Use `estado: 'aberta'` e informe o `link`. Para a loja de um cliente de verdade, troque `demonstracao: true` por `false` no `catalogo.js`.

## Mudar preços, textos do simulador ou contatos

Tudo fica no começo do `assets/app.js`:

- `ZAP`: os números do Marcos e do Fernando.
- `RAMOS`, `ESTILOS`, `OBJETIVOS`: as opções do simulador. O objetivo também guarda o plano sugerido e o preço.
- `LOJAS`: as fachadas da rua.

Os preços dos três planos ficam no `index.html`, na seção `#precos`.

## Regras da casa (o porquê da estrutura)

| Problema dos arquivos antigos | Como ficou |
|---|---|
| Fotos e fontes embutidas em base64 (página de 5,6 MB) | Arquivos separados em WebP: a Saboaria abre com cerca de 0,5 MB e carrega as fotos conforme a rolagem; a vitrine abre com menos de 100 KB (fora as fontes) |
| GSAP e animação WebGL rodando o tempo todo | CSS puro; as animações param fora da tela e respeitam o "reduzir movimento" |
| WhatsApp vazio no site da Cristaliza | Os dois números ligados, com mensagem pronta |
| Catálogo misturado com o código | Dados no começo do arquivo ou em `catalogo.js` |
| Visual genérico (neon escuro) | Papel, tinta e um cristal violeta, com tipografia forte e o próprio produto (o simulador) como abertura |

O `ferramentas/verificar.py` roda sozinho a cada envio (GitHub Actions) e acusa:

- link quebrado;
- página acima de 200 KB;
- imagem acima de 300 KB;
- base64 embutido;
- número de WhatsApp malformado.

## Privacidade

A vitrine não usa cookies nem rastreadores. O rascunho do simulador e a sacola das lojas ficam só no aparelho de quem usa (localStorage). As lojas de demonstração têm `noindex`, para não aparecerem no Google como se fossem empresas reais.
