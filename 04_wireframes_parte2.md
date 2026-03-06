# FoodBridge — Wireframes: Parte 2 (Doações, Lotes e Solicitações)

---

## TELA 11 — Criar Doação (DONOR)

**Rota**: `/donor/doacoes/nova`
**Perfil**: DONOR
**Objetivo**: Fluxo em etapas para publicar uma doação simples rapidamente.

### Estrutura: Wizard em 5 Passos

**Indicador de progresso no topo**:
```
[1 Alimento] → [2 Quantidade] → [3 Limite] → [4 Local/Horário] → [5 Revisão]
```

---

### Passo 1 — Tipo de Alimento

```
┌─────────────────────────────────────────────────────────────┐
│  ← Cancelar          Nova Doação          Passo 1 de 5     │
│  [━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 20%     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "O que você está doando?"                                  │
│                                                              │
│  [🔍 Buscar tipo de alimento...              ]              │
│                                                              │
│  Categorias rápidas:                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ 🍽️        │ │ 🍞        │ │ 🥦        │ │ 🥛        │      │
│  │ Refeições│ │ Padaria  │ │ Hortifrúti│ │ Laticín. │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐                                               │
│  │ 📦        │                                               │
│  │ Outros   │                                               │
│  └──────────┘                                               │
│                                                              │
│  [Descrição adicional (opcional)            ]               │
│                                                              │
│  [Próximo →]  (desabilitado até seleção)                    │
└─────────────────────────────────────────────────────────────┘
```

---

### Passo 2 — Quantidade e Validade

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar            Nova Doação          Passo 2 de 5     │
│  [━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 40%     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Quantidade disponível"                                    │
│                                                              │
│  ┌───────────────────┐  ┌──────────────────┐               │
│  │  [  -  ] [ 10 ] [ + ]│  │ Unidade: [▼ unid.]│               │
│  └───────────────────┘  └──────────────────┘               │
│                                                              │
│  Unidades disponíveis: unidades | kg | litros | caixas      │
│                                                              │
│  "Data de validade"                                         │
│  ┌──────────────────────────────────────────────────┐      │
│  │ [📅 Selecionar data]                              │      │
│  └──────────────────────────────────────────────────┘      │
│                                                              │
│  ☐ Sem data de validade definida                           │
│                                                              │
│  ⚠️ Alimentos próximos da validade têm prioridade           │
│     no matching automático.                                 │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

---

### Passo 3 — Limite por ONG

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar            Nova Doação          Passo 3 de 5     │
│  [━━━━━━━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 60%     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Limite por ONG"                                           │
│                                                              │
│  ℹ️ Defina o máximo que cada ONG pode reivindicar.          │
│     Isso garante uma distribuição mais justa.               │
│                                                              │
│  Total disponível: 20 unidades                              │
│                                                              │
│  Limite por ONG:                                            │
│  ┌───────────────────────────────────────────────┐         │
│  │  [  -  ] [  5  ] [ + ]  unidades              │         │
│  └───────────────────────────────────────────────┘         │
│                                                              │
│  ┌───────────────────────────────────────────────┐         │
│  │  Com esse limite, até 4 ONGs podem reivindicar│         │
│  │  (20 ÷ 5 = 4 ONGs)                            │         │
│  └───────────────────────────────────────────────┘         │
│                                                              │
│  ☐ Sem limite (qualquer ONG pode reivindicar tudo)         │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

**Nota UX**: O cálculo "X ONGs podem reivindicar" é atualizado em tempo real conforme o usuário ajusta o limite.

---

### Passo 4 — Local e Janela de Coleta

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar            Nova Doação          Passo 4 de 5     │
│  [━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░] 80%     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Local de retirada"                                        │
│                                                              │
│  ☑ Usar endereço cadastrado                                 │
│    Rua das Flores, 123 — São Paulo, SP                      │
│                                                              │
│  ☐ Usar outro endereço                                      │
│    [Endereço de retirada                    ]               │
│                                                              │
│  "Janela de coleta"                                         │
│                                                              │
│  Data:  [📅 Selecionar data]                                │
│  Das:   [🕐 08:00 ▼]   Até: [🕐 12:00 ▼]                  │
│                                                              │
│  "Instruções para coleta (opcional)"                        │
│  [Ex: Entrar pela porta dos fundos...       ]               │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

---

### Passo 5 — Revisão e Publicação

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar            Nova Doação          Passo 5 de 5     │
│  [━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━] 100%    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Revise sua doação antes de publicar"                      │
│                                                              │
│  ┌───────────────────────────────────────────────┐         │
│  │ 🍽️ Refeições prontas                          │         │
│  │ 20 marmitas · Validade: hoje                  │         │
│  │ Limite por ONG: 5 unidades (até 4 ONGs)       │         │
│  │ Retirada: Rua das Flores, 123                 │         │
│  │ Janela: 10/03/2026 das 11h às 14h             │         │
│  │                              [✏️ Editar]       │         │
│  └───────────────────────────────────────────────┘         │
│                                                              │
│  Ao publicar, ONGs próximas serão notificadas.             │
│                                                              │
│  [Publicar Doação 🚀]                                       │
└─────────────────────────────────────────────────────────────┘
```

**Confirmação (modal/tela)**:
```
✅ "Doação publicada com sucesso!"
   3 ONGs próximas foram notificadas.
   [Ver minha doação]  [Publicar outra]
```

---

## TELA 12 — Lista de Doações (DONOR)

**Rota**: `/donor/doacoes`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Minhas Doações         [+ Nova Doação]          │
│          ├──────────────────────────────────────────────────┤
│          │  Filtros: [Todas ▼] [Status ▼] [Período ▼]      │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 20 marmitas                               │ │
│          │  │ Publicada: hoje · Validade: hoje             │ │
│          │  │ Reivindicada: 2/4 ONGs · 10/20 unidades     │ │
│          │  │ [PARCIALMENTE REIVINDICADO ●]                │ │
│          │  │ [Ver detalhes]  [↺ Duplicar]  [✕ Cancelar]  │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍞 30 pães                                   │ │
│          │  │ Publicada: ontem · Validade: ontem           │ │
│          │  │ Coletado por: ONG Esperança                  │ │
│          │  │ [CONCLUÍDO ●]                                │ │
│          │  │ [Ver detalhes]  [↺ Duplicar]                 │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🥛 5L leite                                  │ │
│          │  │ Publicada: 01/03 · Validade: 01/03           │ │
│          │  │ Nenhuma ONG reivindicou                      │ │
│          │  │ [EXPIRADO ●]                                 │ │
│          │  │ [Ver detalhes]  [↺ Republicar]               │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 13 — Detalhe da Doação

**Rota**: `/donor/doacoes/:id` ou `/ngo/explorar/:id`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  ← Voltar    Detalhe da Doação                   │
│          ├──────────────────────────────────────────────────┤
│          │                                                   │
│          │  [PARCIALMENTE REIVINDICADO ●]                   │
│          │                                                   │
│          │  🍽️ Refeições prontas — Marmitas                 │
│          │  Restaurante Bom Sabor · São Paulo, SP           │
│          │                                                   │
│          │  ┌──────────┬──────────┬──────────┬──────────┐  │
│          │  │ 20       │ 5        │ Hoje     │ 2.3 km   │  │
│          │  │ Total    │ Limite/  │ Validade │ Distância│  │
│          │  │          │ ONG      │          │          │  │
│          │  └──────────┴──────────┴──────────┴──────────┘  │
│          │                                                   │
│          │  PROGRESSO DE REIVINDICAÇÃO                      │
│          │  [████████░░░░░░░░░░░░░░░░] 10 de 20 unidades   │
│          │  2 ONGs reivindicaram · 2 vagas restantes        │
│          │                                                   │
│          │  JANELA DE COLETA                                │
│          │  📅 10/03/2026 · 🕐 11h às 14h                  │
│          │  📍 Rua das Flores, 123 — Pinheiros, SP          │
│          │  ℹ️ Entrar pela porta dos fundos                  │
│          │                                                   │
│          │  REIVINDICAÇÕES (visível para DONOR e ADMIN)     │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ ONG Esperança · 5 unidades · Ag. 10/03 11h  │ │
│          │  │ Voluntário: João Silva · [AGENDADO ●]        │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ ONG Vida Nova · 5 unidades · Ag. 10/03 12h  │ │
│          │  │ Voluntário: Maria S. · [AGENDADO ●]         │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  (Para NGO: botão [Reivindicar →] aparece aqui) │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 14 — Criar Lote (PRODUCER / DISTRIBUTOR)

**Rota**: `/producer/lotes/novo` ou `/distributor/lotes/novo`

### Passo 1 — Tipo e Descrição

```
┌─────────────────────────────────────────────────────────────┐
│  ← Cancelar          Novo Lote            Passo 1 de 5     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Tipo de alimento"                                         │
│  [▼ Hortifrúti | Grãos | Industrializados | Outros]        │
│                                                              │
│  "Nome do produto"                                          │
│  [Ex: Tomate italiano, Banana prata...      ]               │
│                                                              │
│  "Descrição (qualidade, estado, observações)"               │
│  [Área de texto...                          ]               │
│                                                              │
│  [Próximo →]                                                │
└─────────────────────────────────────────────────────────────┘
```

### Passo 2 — Volume Total (PRODUCER)

```
┌─────────────────────────────────────────────────────────────┐
│  "Volume total disponível"                                  │
│                                                              │
│  [  500  ] kg    ← campo numérico                          │
│                                                              │
│  "Previsão de colheita / disponibilidade"                   │
│  [📅 Selecionar data]                                       │
│                                                              │
│  "Condição de armazenamento necessária"                     │
│  ☐ Temperatura ambiente  ☐ Refrigerado  ☐ Congelado        │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

### Passo 2 — Volume Total (DISTRIBUTOR — campos extras)

```
┌─────────────────────────────────────────────────────────────┐
│  "Volume total disponível"                                  │
│  [  2000  ] kg                                              │
│                                                              │
│  "Embalagem"                                                │
│  Número de caixas: [  80  ]                                 │
│  Número de pallets: [  4  ]                                 │
│                                                              │
│  "Condição de armazenamento"                               │
│  ☐ Temperatura ambiente  ☐ Refrigerado  ☐ Congelado        │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

### Passo 3 — Limite por ONG

```
┌─────────────────────────────────────────────────────────────┐
│  "Limite por ONG"                                           │
│                                                              │
│  Total disponível: 500 kg                                   │
│                                                              │
│  Limite por ONG:  [  50  ] kg                               │
│                                                              │
│  ┌───────────────────────────────────────────────┐         │
│  │  Com esse limite, até 10 ONGs podem reivindicar│         │
│  │  (500 ÷ 50 = 10 ONGs)                         │         │
│  └───────────────────────────────────────────────┘         │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

### Passo 4 — Múltiplas Janelas de Coleta

```
┌─────────────────────────────────────────────────────────────┐
│  "Janelas de coleta disponíveis"                            │
│                                                              │
│  ℹ️ Você pode oferecer múltiplos horários para facilitar    │
│     a logística das ONGs.                                   │
│                                                              │
│  Janela 1:                                                  │
│  Data: [📅 10/03/2026]  Das: [🕐 07:00]  Até: [🕐 10:00]  │
│                                                              │
│  Janela 2:                                                  │
│  Data: [📅 11/03/2026]  Das: [🕐 07:00]  Até: [🕐 10:00]  │
│                                                              │
│  [+ Adicionar outra janela]                                 │
│                                                              │
│  Endereço de retirada:                                      │
│  ☑ Usar endereço cadastrado                                 │
│  ☐ Outro endereço                                           │
│                                                              │
│  [← Voltar]                          [Próximo →]           │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 15 — Gestão de Lote / Fracionamento

**Rota**: `/producer/lotes/:id/fracionamento`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  ← Voltar    Gestão do Lote: Tomate              │
│          ├──────────────────────────────────────────────────┤
│          │  [PARCIALMENTE REIVINDICADO ●]                   │
│          │                                                   │
│          │  RESUMO DO LOTE                                  │
│          │  Volume total: 500 kg                            │
│          │  Limite por ONG: 50 kg                           │
│          │  [████████████░░░░░░░░░░░░░░░░░░] 200/500 kg    │
│          │  4 ONGs reivindicaram · 6 vagas restantes        │
│          │                                                   │
│          │  FRACIONAMENTO POR ONG                           │
│          │  ┌──────────────────────────────────────────┐   │
│          │  │ ONG Esperança      50 kg  · 10/03 07h    │   │
│          │  │ Voluntário: João S. · [AGENDADO ●]       │   │
│          │  │                    [Confirmar] [Cancelar] │   │
│          │  ├──────────────────────────────────────────┤   │
│          │  │ ONG Vida Nova      50 kg  · 10/03 08h    │   │
│          │  │ Voluntário: Maria S. · [AGENDADO ●]      │   │
│          │  ├──────────────────────────────────────────┤   │
│          │  │ ONG Renascer       50 kg  · 11/03 07h    │   │
│          │  │ Sem voluntário definido · [AGENDADO ●]   │   │
│          │  ├──────────────────────────────────────────┤   │
│          │  │ ONG Luz do Amanhã  50 kg  · 11/03 08h    │   │
│          │  │ Voluntário: Carlos M. · [AGENDADO ●]     │   │
│          │  └──────────────────────────────────────────┘   │
│          │                                                   │
│          │  Disponível para reivindicação: 300 kg           │
│          │  [Encerrar lote antecipadamente]                 │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 16 — Solicitar Doação (NGO — Modal/Drawer)

**Trigger**: Botão "Reivindicar" na tela de detalhe da doação.

```
┌─────────────────────────────────────────────────────────────┐
│  Solicitar Doação                                    [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🍽️ 20 marmitas · Restaurante Bom Sabor                    │
│  Validade: hoje · Limite por ONG: 5 unidades               │
│                                                              │
│  ─────────────────────────────────────────────────         │
│                                                              │
│  "Quantas unidades você precisa?"                           │
│                                                              │
│  ┌───────────────────────────────────────────────┐         │
│  │  [  -  ] [  5  ] [ + ]  unidades              │         │
│  │  Máximo permitido: 5 unidades                 │         │
│  └───────────────────────────────────────────────┘         │
│                                                              │
│  "Escolha a janela de coleta"                               │
│  ○ 10/03/2026 das 11h às 14h  (disponível)                 │
│  ○ 10/03/2026 das 14h às 17h  (disponível)                 │
│                                                              │
│  "Atribuir voluntário (opcional)"                           │
│  [▼ Selecionar voluntário da sua equipe]                    │
│                                                              │
│  ─────────────────────────────────────────────────         │
│  [Cancelar]                    [Confirmar Solicitação →]   │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 17 — Minhas Requisições (NGO)

**Rota**: `/ngo/requisicoes`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Minhas Requisições                              │
│          ├──────────────────────────────────────────────────┤
│          │  Filtros: [Todas ▼] [Status ▼]                   │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 5 marmitas · Restaurante Bom Sabor        │ │
│          │  │ Coleta: 10/03 às 11h · Voluntário: João S.  │ │
│          │  │ [AGENDADO ●]              [Ver detalhes →]   │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🌽 50 kg Milho · Fazenda São João            │ │
│          │  │ Coleta: 10/03 às 07h · Voluntário: Maria S. │ │
│          │  │ [AGENDADO ●]              [Ver detalhes →]   │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍞 10 pães · Padaria Central                 │ │
│          │  │ Coleta: 08/03 · [CONCLUÍDO ●]               │ │
│          │  │                           [Ver detalhes →]   │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 18 — Aprovar Solicitação (DONOR — Notificação)

**Contexto**: O DONOR recebe notificação de nova solicitação e pode aprovar/rejeitar.

> **Nota de produto**: O fluxo padrão é aprovação automática (first-come, first-served respeitando o limite por ONG). A aprovação manual é opcional e configurável pelo doador.

```
┌─────────────────────────────────────────────────────────────┐
│  Nova Solicitação                                    [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ONG Esperança solicitou 5 marmitas                        │
│  da sua doação de 20 marmitas.                              │
│                                                              │
│  Coleta agendada: 10/03/2026 às 11h                        │
│  Voluntário: João Silva                                     │
│                                                              │
│  Restante após aprovação: 15 marmitas                      │
│                                                              │
│  [Rejeitar]                         [Aprovar ✓]            │
└─────────────────────────────────────────────────────────────┘
```
