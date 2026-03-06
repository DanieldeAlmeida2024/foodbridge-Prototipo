# FoodBridge — Wireframes: Parte 1 (Onboarding + Dashboards)

> **Convenção de leitura**: Cada wireframe é descrito em formato textual estruturado, com anotações de layout, componentes utilizados, comportamentos interativos e notas para o Figma. Os wireframes seguem o padrão **desktop-first** com variante mobile indicada ao final de cada tela.

---

## TELA 01 — Landing Page

**Rota**: `/`
**Perfil**: Público
**Objetivo**: Apresentar a FoodBridge e converter visitantes em cadastros.

### Layout (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  TOPBAR                                                      │
│  [Logo FoodBridge]              [Entrar]  [Cadastrar →]     │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION                                                │
│                                                              │
│  "Conectando quem tem                                        │
│   alimento com quem precisa."                                │
│                                                              │
│  Subtítulo: "Redistribuição simples, rápida e de impacto."  │
│                                                              │
│  [Quero Doar]   [Somos uma ONG]                             │
│                                                              │
│  Ilustração: mapa com pontos conectados (doadores ↔ ONGs)   │
├─────────────────────────────────────────────────────────────┤
│  MÉTRICAS GLOBAIS (animadas)                                 │
│  [🍽️ 1.2M refeições]  [🌱 340t recuperadas]  [🏢 820 ONGs] │
├─────────────────────────────────────────────────────────────┤
│  COMO FUNCIONA (3 passos)                                    │
│  1. Publique sua doação  2. ONG reivindica  3. Impacto real  │
├─────────────────────────────────────────────────────────────┤
│  QUEM PODE PARTICIPAR (cards de perfil)                      │
│  [Restaurante] [Produtor] [Distribuidor] [ONG]              │
├─────────────────────────────────────────────────────────────┤
│  CTA FINAL                                                   │
│  "Comece agora. É gratuito."  [Criar conta]                 │
├─────────────────────────────────────────────────────────────┤
│  FOOTER: Links | Termos | Privacidade | Contato             │
└─────────────────────────────────────────────────────────────┘
```

**Notas Figma**: Hero com gradiente verde sutil. Métricas com counter animation. Cards de perfil com hover elevado.

**Mobile**: Hero empilhado verticalmente. Métricas em carrossel. CTAs em largura total.

---

## TELA 02 — Cadastro: Escolha de Perfil

**Rota**: `/cadastro`
**Perfil**: Público
**Objetivo**: Direcionar o usuário ao fluxo correto de cadastro.

### Layout (Desktop — Centralizado, max-width 560px)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                          [Entrar →] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Quem é você na FoodBridge?"                               │
│  Escolha o perfil que melhor descreve sua organização.      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 🍽️            │  │ 🌾            │  │ 🏭            │      │
│  │  Restaurante  │  │   Produtor   │  │ Distribuidor │      │
│  │  / Comércio   │  │    Rural     │  │  Atacadista  │      │
│  │               │  │              │  │              │      │
│  │ Doações       │  │ Lotes de     │  │ Pallets e    │      │
│  │ frequentes    │  │ grande vol.  │  │ grandes vol. │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────────────────────┐                           │
│  │ 🤝                            │                           │
│  │  ONG / Instituição Social    │                           │
│  │  Recebo e distribuo doações  │                           │
│  └──────────────────────────────┘                           │
│                                                              │
│  [Continuar →]  (desabilitado até seleção)                  │
│                                                              │
│  Já tem conta? [Entrar]                                     │
└─────────────────────────────────────────────────────────────┘
```

**Interação**: Card selecionado recebe borda verde + fundo verde claro + ícone de check. Botão "Continuar" habilita após seleção.

**Mobile**: Cards em coluna única, scroll vertical.

---

## TELA 03 — Cadastro: Dados da Organização

**Rota**: `/cadastro/dados`
**Perfil**: Público
**Objetivo**: Coletar informações da organização.

### Layout (Desktop — Centralizado, max-width 560px)

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar                    Passo 2 de 3                   │
│                                                              │
│  "Dados da sua organização"                                 │
│                                                              │
│  [Nome da organização*              ]                        │
│  [CNPJ / CPF*                       ]                        │
│  [Endereço completo*                ]                        │
│  [Cidade*              ] [Estado* ▼]                        │
│  [CEP*                 ]                                     │
│  [Telefone de contato*              ]                        │
│  [E-mail*                           ]                        │
│  [Senha*               ] [👁]                               │
│  [Confirmar senha*     ] [👁]                               │
│                                                              │
│  ☐ Aceito os Termos de Uso e Política de Privacidade        │
│                                                              │
│  [Criar conta →]                                            │
└─────────────────────────────────────────────────────────────┘
```

**Validações**: CNPJ com máscara e validação em tempo real. CEP com auto-preenchimento de endereço. Senha com indicador de força.

---

## TELA 04 — Cadastro: Verificação de E-mail

**Rota**: `/cadastro/verificacao`
**Perfil**: Público

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              ✉️  (ilustração de envelope)                    │
│                                                              │
│  "Verifique seu e-mail"                                     │
│                                                              │
│  Enviamos um link de confirmação para:                      │
│  contato@restauranteexemplo.com.br                          │
│                                                              │
│  Clique no link para ativar sua conta.                      │
│                                                              │
│  [Reenviar e-mail]   (disponível após 60s)                  │
│                                                              │
│  Não recebeu? Verifique a pasta de spam.                    │
│                                                              │
│  [← Alterar e-mail]                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 05 — Login

**Rota**: `/login`

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                                      │
│                                                              │
│  "Bem-vindo de volta"                                       │
│                                                              │
│  [E-mail*                           ]                        │
│  [Senha*               ] [👁]                               │
│                                                              │
│  [Esqueci minha senha]                                      │
│                                                              │
│  [Entrar →]                                                 │
│                                                              │
│  ─────────── ou ───────────                                 │
│                                                              │
│  [G  Entrar com Google]                                     │
│                                                              │
│  Não tem conta? [Cadastrar]                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 06 — Dashboard DONOR

**Rota**: `/donor/dashboard`
**Perfil**: DONOR
**Objetivo**: Visão geral das doações e acesso rápido às ações principais.

### Layout (Desktop — Sidebar + Content)

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  TOPBAR: "Olá, Restaurante Bom Sabor 👋"         │
│          │  [+ Nova Doação]  🔔  👤                         │
│ 🏠 Home  ├──────────────────────────────────────────────────┤
│ ➕ Doar  │                                                   │
│ 📋 Minhas│  MÉTRICAS RÁPIDAS (4 cards)                      │
│ 📊 Impact│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│
│ 👤 Perfil│  │ 12       │ │ 3        │ │ 847      │ │ 2.1t ││
│          │  │ Doações  │ │ Ativas   │ │ Refeições│ │ CO2  ││
│          │  │ este mês │ │ agora    │ │ geradas  │ │ evit.││
│          │  └──────────┘ └──────────┘ └──────────┘ └──────┘│
│          │                                                   │
│          │  AÇÃO RÁPIDA                                      │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ [+ Nova Doação]  [↺ Duplicar última doação] │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  MINHAS DOAÇÕES RECENTES                         │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 10 marmitas · Hoje 14h · [DISPONÍVEL ●]  │ │
│          │  │ Reivindicado por: 0 ONGs · Limite: 5/ONG    │ │
│          │  │                          [Ver] [Editar]      │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍞 30 pães · Ontem · [CONCLUÍDO ●]          │ │
│          │  │ Coletado por: ONG Esperança                  │ │
│          │  │                          [Ver detalhes]      │ │
│          │  └─────────────────────────────────────────────┘ │
│          │  [Ver todas as doações →]                        │
│          │                                                   │
│          │  IMPACTO DO MÊS                                  │
│          │  Gráfico de barras: doações por semana           │
└──────────┴──────────────────────────────────────────────────┘
```

**Mobile**: Bottom nav com 4 itens. Métricas em carrossel horizontal. Cards empilhados.

---

## TELA 07 — Dashboard PRODUCER

**Rota**: `/producer/dashboard`
**Perfil**: PRODUCER

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  "Olá, Fazenda São João 👋"   [+ Novo Lote]      │
│          ├──────────────────────────────────────────────────┤
│ 🏠 Home  │                                                   │
│ ➕ Lote  │  MÉTRICAS                                        │
│ 📦 Lotes │  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ 📊 Impact│  │ 3 Lotes  │ │ 2.4t     │ │ 5 ONGs   │         │
│ 👤 Perfil│  │ ativos   │ │ disponív.│ │ atendidas│         │
│          │  └──────────┘ └──────────┘ └──────────┘         │
│          │                                                   │
│          │  LOTES ATIVOS                                    │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🌽 Milho · 800kg total                       │ │
│          │  │ [████████░░░░░░░░░░░░] 40% reivindicado      │ │
│          │  │ 3 ONGs · Coleta: 10/03 às 8h                 │ │
│          │  │ [PARCIALMENTE REIVINDICADO ●]  [Gerenciar]   │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍅 Tomate · 500kg total                      │ │
│          │  │ [░░░░░░░░░░░░░░░░░░░░] 0% reivindicado       │ │
│          │  │ Coleta: 12/03 às 7h                          │ │
│          │  │ [DISPONÍVEL ●]  [Gerenciar]                  │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  PREVISÕES DE EXCEDENTE                          │
│          │  "Você tem colheita prevista para 15/03?"        │
│          │  [Registrar previsão]                            │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 08 — Dashboard DISTRIBUTOR

**Rota**: `/distributor/dashboard`
**Perfil**: DISTRIBUTOR

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  "Olá, CEASA Regional 👋"   [+ Novo Lote]        │
│          ├──────────────────────────────────────────────────┤
│          │  MÉTRICAS                                        │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│          │  │ 5 Lotes  │ │ 48 Pall. │ │ 12.3t    │         │
│          │  │ ativos   │ │ disponív.│ │ este mês │         │
│          │  └──────────┘ └──────────┘ └──────────┘         │
│          │                                                   │
│          │  LOTES ATIVOS (tabela compacta)                  │
│          │  ┌──────┬──────────┬───────┬──────────┬───────┐ │
│          │  │ Tipo │ Volume   │Pallets│ Janela   │Status │ │
│          │  ├──────┼──────────┼───────┼──────────┼───────┤ │
│          │  │Banana│ 2.000 kg │ 8     │ 10/03 8h │ DISP. │ │
│          │  │Arroz │ 5.000 kg │ 20    │ 11/03 7h │ PARC. │ │
│          │  │Feijão│ 1.500 kg │ 6     │ 13/03 8h │ DISP. │ │
│          │  └──────┴──────────┴───────┴──────────┴───────┘ │
│          │                                                   │
│          │  JANELAS DE COLETA HOJE                          │
│          │  Timeline visual das coletas do dia              │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 09 — Dashboard NGO

**Rota**: `/ngo/dashboard`
**Perfil**: NGO
**Objetivo**: Visão geral de doações disponíveis, requisições e coletas.

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  "Olá, ONG Esperança 👋"                         │
│          ├──────────────────────────────────────────────────┤
│ 🏠 Home  │                                                   │
│ 🔍 Explor│  ALERTA: MATCHING AUTOMÁTICO                     │
│ 📦 Requiç│  ┌─────────────────────────────────────────────┐ │
│ 🚗 Coleta│  │ ⭐ 3 doações recomendadas para você!         │ │
│ 👥 Volunt│  │ Baseado em: distância, capacidade, histórico │ │
│ 📊 Impact│  │ [Ver recomendações →]                        │ │
│ 👤 Perfil│  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  MÉTRICAS                                        │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│          │  │ 8 Doações│ │ 3 Coletas│ │ 1.240    │         │
│          │  │ disponív.│ │ agendadas│ │ refeições│         │
│          │  └──────────┘ └──────────┘ └──────────┘         │
│          │                                                   │
│          │  DOAÇÕES PRÓXIMAS (até 10km)                     │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 20 marmitas · Restaurante Bom Sabor      │ │
│          │  │ 2.3 km · Validade: hoje · Limite: 5/ONG     │ │
│          │  │ [DISPONÍVEL ●]              [Reivindicar →]  │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🌽 800kg Milho · Fazenda São João            │ │
│          │  │ 8.1 km · Coleta: 10/03 · Limite: 100kg/ONG  │ │
│          │  │ [PARCIALMENTE ●]            [Reivindicar →]  │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  COLETAS AGENDADAS HOJE                          │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🚗 10h30 · 5 marmitas · Voluntário: João S. │ │
│          │  │ Endereço: Rua das Flores, 123               │ │
│          │  │                      [Confirmar coleta ✓]   │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 10 — Dashboard ADMIN

**Rota**: `/admin/dashboard`
**Perfil**: ADMIN

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  "Painel Administrativo"                         │
│          ├──────────────────────────────────────────────────┤
│ 🏠 Home  │  ALERTAS URGENTES                                │
│ 👥 Users │  ┌─────────────────────────────────────────────┐ │
│ 📦 Doaç. │  │ ⚠️ 4 contas aguardando verificação           │ │
│ 📊 Métric│  │ ⚠️ 2 doações reportadas por usuários         │ │
│ ⚙️ Config│  └─────────────────────────────────────────────┘ │
│ 📋 Logs  │                                                   │
│          │  MÉTRICAS GLOBAIS                                │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│
│          │  │ 1.247    │ │ 342      │ │ 89       │ │ 4.2t ││
│          │  │ Usuários │ │ ONGs     │ │ Doadores │ │ /mês ││
│          │  └──────────┘ └──────────┘ └──────────┘ └──────┘│
│          │                                                   │
│          │  ATIVIDADE RECENTE                               │
│          │  Gráfico de linha: doações publicadas por dia    │
│          │                                                   │
│          │  USUÁRIOS PENDENTES DE VERIFICAÇÃO               │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ ONG Vida Nova · Cadastro: 05/03/2026         │ │
│          │  │ [Ver documentos]  [Aprovar ✓]  [Rejeitar ✕] │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```
