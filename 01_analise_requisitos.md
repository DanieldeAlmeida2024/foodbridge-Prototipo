# FoodBridge — Análise de Requisitos e Arquitetura de Informação

## 1. Visão Geral do Produto

A **FoodBridge** é uma plataforma de redistribuição de alimentos excedentes que conecta doadores (restaurantes, supermercados, padarias, produtores rurais e distribuidores atacadistas) a receptores (ONGs e instituições sociais). O objetivo central é reduzir o desperdício de alimentos e ampliar o impacto social, suportando desde pequenas doações (5 marmitas) até grandes volumes (toneladas de hortifrúti).

---

## 2. Papéis do Sistema (RBAC)

| Papel | Descrição | Volume típico | Frequência |
|---|---|---|---|
| **DONOR** | Restaurantes, padarias, supermercados | Pequeno/médio | Alta |
| **PRODUCER** | Produtores rurais | Grande | Sazonal |
| **DISTRIBUTOR** | Atacadistas (ex: CEASA) | Muito grande (pallets) | Variável |
| **NGO** | Instituições receptoras | — | Alta |
| **ADMIN** | Administradores da plataforma | — | Contínua |

### Voluntários
Voluntários **não são gerenciados pela plataforma**. A ONG é inteiramente responsável por seus voluntários. A FoodBridge apenas provê ferramentas para que a ONG registre e associe voluntários a coletas, com aviso explícito de isenção de responsabilidade.

---

## 3. Tipos de Doação

### Doação Simples
Utilizada por DONORs. Exemplos: 10 marmitas, 5 pães, 3 kg de arroz. Fluxo rápido, campos mínimos.

### Food Lot (Lote)
Utilizado por PRODUCERs e DISTRIBUTORs. Exemplos: 500 kg de tomate, 200 caixas de banana, 1.000 marmitas. Suporta fracionamento entre múltiplas ONGs.

---

## 4. Regra de Limite por ONG

Cada doação ou lote pode ter um **limite de quantidade por ONG**, evitando concentração e promovendo distribuição equitativa. Exemplo: 20 marmitas disponíveis com limite de 5 por ONG → máximo de 4 ONGs podem reivindicar. Esta regra deve ser visualmente destacada em todas as interfaces de reivindicação.

---

## 5. Estados da Doação / Lote

| Estado | Descrição |
|---|---|
| `AVAILABLE` | Publicada, disponível para reivindicação |
| `PARTIALLY_CLAIMED` | Parte já reivindicada por ONGs |
| `FULLY_CLAIMED` | Totalmente reivindicada |
| `PICKUP_SCHEDULED` | Coleta agendada |
| `PICKED_UP` | Coleta realizada |
| `COMPLETED` | Processo concluído |
| `EXPIRED` | Prazo expirado sem coleta |

---

## 6. Entidades Principais do Sistema

- **User** (com papel: DONOR, PRODUCER, DISTRIBUTOR, NGO, ADMIN)
- **Donation** (doação simples)
- **FoodLot** (lote de grande volume)
- **Claim** (requisição de ONG sobre uma doação/lote)
- **Pickup** (coleta agendada)
- **Volunteer** (voluntário registrado pela ONG)
- **ImpactMetric** (métricas de impacto social)
- **Notification** (alertas e comunicações)

---

## 7. Princípios de UX

1. **Velocidade de publicação**: o fluxo de criação de doação deve ser completado em menos de 2 minutos.
2. **Facilidade de reivindicação**: ONGs devem encontrar e reivindicar doações em no máximo 3 toques/cliques.
3. **Clareza de volumes**: indicadores visuais claros para quantidade disponível vs. limite por ONG.
4. **Acessibilidade**: funcionar bem para usuários com baixo nível técnico; linguagem simples, ícones descritivos.
5. **Responsividade**: layout funcional em desktop e mobile.

---

## 8. Suposições Documentadas

| # | Suposição | Justificativa |
|---|---|---|
| 1 | Autenticação via e-mail + senha (com opção OAuth Google) | Simplicidade e acessibilidade |
| 2 | Verificação de conta por e-mail antes de publicar doações | Segurança mínima |
| 3 | Geolocalização baseada em endereço cadastrado (não GPS em tempo real) | Privacidade e simplicidade |
| 4 | Notificações por e-mail e push (web) | Alcance máximo sem app nativo |
| 5 | Matching automático é sugestivo, não obrigatório | ONG sempre tem autonomia de escolha |
| 6 | Fracionamento de lote é manual (ONG solicita quantidade desejada) | Flexibilidade operacional |
| 7 | Admin pode impersonar qualquer usuário para suporte | Necessidade operacional |
| 8 | Idioma padrão: Português Brasileiro | Mercado-alvo |
