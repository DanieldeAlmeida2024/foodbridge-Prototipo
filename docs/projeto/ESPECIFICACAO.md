# Protótipo UX FoodBridge — jornadas, wireframes e SPA

**v1.0.0**, 11/11/2026 · código auditado `cf49db38425f9417c1426592900af81cb8e7fe3e`. Inspeção estática; não houve execução de integração nesta revisão.

## Componentes, contratos e limites
Este é o **protótipo de experiência** da FoodBridge, não a API produtiva Kotlin. O repositório mantém documentos próprios de análise de requisitos, sitemap/fluxos, design system, wireframes e `FoodBridge_UX_Design_Document.md`. A `client/src/App.tsx` usa React com `wouter` e registra rotas `/`, `/login`, `/dashboard`, `/explore`, `/map`, `/my-donations`, `/claims`, `/pickups`, `/volunteers`, `/impact`, `/donate`, `/publish-donation`, `/request`, `/register`, `/documents`, `/flow-diagrams` e fallback de 404.

`server/index.ts` usa Express **somente para servir arquivos estáticos e fallback para index.html**, conforme código inspecionado; não há rotas de CRUD REST nesse servidor. Não apresentar botões e componentes do protótipo como operações de banco de produção sem integração comprovada.

A análise de requisitos `01_analise_requisitos.md` distingue DONOR (doação simples), PRODUCER/DISTRIBUTOR (Food Lot fracionável), NGO (solicitação/coleta) e ADMIN (revisões). Determina limite máximo por ONG para evitar concentração, estados AVAILABLE/PARTIALLY_CLAIMED/FULLY_CLAIMED/PICKUP_SCHEDULED/PICKED_UP/COMPLETED/EXPIRED, e responsabilidades da ONG sobre seus voluntários. O material de UX estabelece metas de publicação em até 2 minutos e reivindicação em até 3 cliques/toques como **metas de produto**, não medições alcançadas.

O projeto contém componentes `DonationCard`, `ClaimDonationModal`, `PublishDonationModals` por papel e diagramas de fluxo para produtor/doador/distribuidor/ONG. O design usa ThemeProvider com tema claro padrão, ErrorBoundary, TooltipProvider e Toaster. Integração entre este protótipo e APIs exige contratos definidos e teste com fixtures, respeitando estados e perfis sem inventar persistência.

## Execução em ambiente isolado
```bash
npm ci && npm run build
```

A referência real de funcionalidades é o código e os documentos originais do projeto. Mudanças no comportamento exigem revisão de [UML](../uml/README.md), [testes](../testes/PLANO_DE_TESTES.md) e controle documental.
