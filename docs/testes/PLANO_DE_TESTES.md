# Plano de testes — Protótipo UX FoodBridge — jornadas, wireframes e SPA

**v1.0.0**, 11/11/2026 · código auditado `cf49db38425f9417c1426592900af81cb8e7fe3e`. Inspeção estática; não houve execução de integração nesta revisão.

| ID | Teste | Aceitação | Execução |
|---|---|---|---|
| UX-01 | Abrir / e navegar /login | Landing e formulário funcionais | Pendente |
| UX-02 | Papel DONOR publica doação simples | Formulário apresenta campos mínimos | Pendente |
| UX-03 | PRODUCER publica lote fracionável | Quantidade e unidade aparecem | Pendente |
| UX-04 | DISTRIBUTOR publica pallet/lote | Regras de limite por ONG apresentadas | Pendente |
| UX-05 | ONG reivindica abaixo do limite | UI exibe saldo e confirmação | Pendente |
| UX-06 | ONG tenta exceder limite | Estado bloqueado/mensagem de regra | Pendente |
| UX-07 | Navegar /claims, /pickups, /volunteers | Jornada completa sem 404 | Pendente |
| UX-08 | Fluxo de documentos | Upload/estado de revisão visualizado | Pendente |
| UX-09 | SPA refresh em rota interna | Express entrega index.html | Pendente |
| UX-10 | Tempo para publicar e reivindicar | Medir metas de 2 min e 3 ações | Pendente |
| UX-11 | Acessibilidade e mobile | Tab order, contraste e responsividade | Pendente |
| UX-12 | Sem backend real | Não mostrar sucesso persistido sem API comprovada | Pendente |

## Estratégia e evidências
Separar testes unitários com dependências simuladas, integração em ambiente de desenvolvimento isolado e E2E com dados sintéticos. Para sistemas Supabase, validar RLS sob usuário comum versus administrador antes de ativar fluxos; para protótipo UX, não inferir backend pela UI. Registrar SHA do código, fixtures, versão de serviços, status e evidências, sem expor documentos, tokens ou dados reais.
