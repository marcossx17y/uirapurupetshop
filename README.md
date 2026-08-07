# Uirapuru Pet Care Redesign

Reforme completamente o design deste site seguindo estas diretrizes à risca. O conteúdo é de um pet shop real — todos os dados abaixo são verdadeiros.


## CORREÇÃO DE DESIGN (o mais importante)
A logo tem 3 cores (vermelho, azul e verde) — por isso o site NÃO pode usar as 3 espalhadas. Regras:
- Fundo geral: branco #FFFFFF e off-white #F8FAFB alternando entre seções. Texto em cinza-escuro #1F2933.
- UMA cor primária só: o azul da logo (#2B9FDA ou o mais próximo) — usada em botões de ação, links e micro-detalhes.
- Verde: EXCLUSIVAMENTE nos botões de WhatsApp (#25D366).
- Vermelho: só no selo de avaliação "4,8 ★" e em nada mais.
- Nunca colocar as 3 cores no mesmo bloco. Nada de fundos coloridos chapados, nada de gradientes vibrantes.
- Tipografia: títulos em Quicksand ou Nunito (bold, arredondada), corpo em Nunito. Google Fonts.
- Cantos arredondados generosos (16-24px), sombras bem suaves, espaçamento amplo. Menos elementos por seção, mais respiro.

## COMO USAR AS FOTOS ANEXADAS (são retrato, com cenários coloridos)
- NUNCA esticar as fotos como fundo de tela cheia — elas são verticais e ficam cortadas/pixeladas.
- Galeria estilo "porta-retratos": cards com moldura branca grossa, cantos arredondados, leve rotação alternada (-2° / +2°) que endireita no hover. Esse estilo combina com fotos de banho e tosa com cenário temático.
- Hero SEM foto de fundo: fundo claro, layout dividido — texto à esquerda, e à direita a foto do spitz com gravatinha vermelha dentro de um card arredondado com a moldura branca.
- A logo (PSU Uirapuru) sempre sobre fundo branco, nunca sobre cor.

## O NEGÓCIO (dados reais — usar exatamente estes)
- Nome: Pet Shop Uirapuru — desde 2014. Slogan real: "Cuidando do seu pet com amor desde 2014"
- Serviços: Banho e Tosa · Produtos e Rações · Entrega em domicílio (tem retirada na loja também)
- Atende cachorros, gatos, pássaros e peixes
- Endereço: Av. Noruega, 58 – Tibery, Uberlândia/MG, CEP 38405-002
- Horário: segunda a sexta, 8h às 18h30 · sábado, 8h às 13h · domingo fechado
- WhatsApp: (34) 3227-2527 — todos os CTAs usam https://wa.me/553432272527 com mensagem pré-preenchida "Olá! Vim pelo site do Pet Shop Uirapuru."
- Instagram: @petshopuirapuru
- Prova social: 4,8★ no Google, 401 avaliações
- O que os clientes mais elogiam (temas reais das avaliações, usar no copy): "melhor atendimento da cidade e região", preços ótimos, muita variedade, banho e tosa impecável, lugar seguro pra deixar o pet

## ESTRUTURA (one-page, nesta ordem)
1. Header sticky branco: logo + nome à esquerda; à direita "Como chegar" (âncora) e botão WhatsApp verde.
2. Hero dividido (texto + foto em card): selo "4,8 ★ no Google · 401 avaliações", título curto e afetuoso sobre cuidar do pet como família no Tibery desde 2014, CTA único de WhatsApp, linha discreta com horário.
3. Serviços: 3 cards limpos (Banho e Tosa / Produtos e Rações / Entrega em domicílio), ícone de linha fina azul, 1-2 frases cada. Sem preços.
4. "Nossa loja": 2 parágrafos curtos (10 anos no Tibery, do cachorro ao peixinho) + galeria porta-retratos com as fotos anexadas.
5. Prova social: 4,8 gigante + "401 avaliações de quem confia seus pets aqui" + os temas elogiados como lista discreta + link "Ver avaliações no Google".
6. Localização: blocos com labels pequenos (endereço, horário completo, telefone) + botão "Traçar rota no Google Maps" + iframe do Google Maps buscando "Pet Shop Uirapuru, Av. Noruega, 58, Uberlândia".
7. FAQ (schema FAQPage): horário; onde fica; como agendar banho e tosa (WhatsApp); se tem entrega (sim, em domicílio).
8. Footer mínimo branco + botão flutuante de WhatsApp.

## REGRAS TÉCNICAS
- og:image e twitter:image com URL ABSOLUTA (https://...), nunca caminho relativo.
- SEO: title "Pet Shop Uirapuru | Banho e Tosa em Uberlândia", meta description com Tibery, nota 4,8 e horário. Schema.org PetStore completo com aggregateRating 4.8/401 e openingHoursSpecification.
- Sem depoimentos inventados com nomes, sem formulário, sem newsletter, sem blog, zero emoji no texto corrido.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://uirapurupetshop.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c19f8844-df05-40d4-98f2-1c9b7135e778).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).


```sh

<!-- rebuild -->
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
