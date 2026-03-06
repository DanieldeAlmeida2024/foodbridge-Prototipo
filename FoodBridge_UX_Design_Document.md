# FoodBridge — Documento Completo de UX/UI Design

**Versão**: 1.0  
**Data**: Março de 2026  
**Autor**: Manus AI — Senior Product Designer + UX Architect  
**Produto**: FoodBridge — Plataforma de Redistribuição de Alimentos Excedentes

---

## Sumário

1. [Visão do Produto e Princípios de UX](#1-visão-do-produto-e-princípios-de-ux)
2. [Arquitetura de Informação e RBAC](#2-arquitetura-de-informação-e-rbac)
3. [Sitemap Completo](#3-sitemap-completo)
4. [Fluxos de Usuário](#4-fluxos-de-usuário)
5. [Design System](#5-design-system)
6. [Wireframes — Onboarding e Autenticação](#6-wireframes--onboarding-e-autenticação)
7. [Wireframes — Dashboards por Perfil](#7-wireframes--dashboards-por-perfil)
8. [Wireframes — Doações (DONOR)](#8-wireframes--doações-donor)
9. [Wireframes — Lotes (PRODUCER / DISTRIBUTOR)](#9-wireframes--lotes-producer--distributor)
10. [Wireframes — Solicitações e Coletas (NGO)](#10-wireframes--solicitações-e-coletas-ngo)
11. [Wireframes — Voluntários (NGO)](#11-wireframes--voluntários-ngo)
12. [Wireframes — Mapa e Exploração (NGO)](#12-wireframes--mapa-e-exploração-ngo)
13. [Wireframes — Métricas de Impacto](#13-wireframes--métricas-de-impacto)
14. [Wireframes — Painel Administrativo](#14-wireframes--painel-administrativo)
15. [Estados Especiais e Componentes Globais](#15-estados-especiais-e-componentes-globais)
16. [Hierarquia de Organização no Figma](#16-hierarquia-de-organização-no-figma)
17. [Suposições Documentadas](#17-suposições-documentadas)

---

## 1. Visão do Produto e Princípios de UX

A **FoodBridge** é uma plataforma de redistribuição de alimentos excedentes que conecta doadores — restaurantes, supermercados, padarias, produtores rurais e distribuidores atacadistas — a receptores, representados por ONGs e instituições sociais. O objetivo central é reduzir o desperdício de alimentos e ampliar o impacto social, suportando desde pequenas doações (5 marmitas) até grandes volumes (toneladas de hortifrúti).

O design da plataforma é orientado por quatro princípios inegociáveis:

**Velocidade de publicação.** O fluxo de criação de uma doação deve ser completado em menos de dois minutos, com campos mínimos e progressão guiada em etapas. Doadores com baixo nível técnico não devem sentir fricção.

**Facilidade de reivindicação.** Uma ONG deve conseguir encontrar, avaliar e reivindicar uma doação em no máximo três interações (toques ou cliques), com informações críticas — quantidade disponível, limite por ONG, distância e validade — visíveis sem necessidade de abrir detalhes.

**Clareza de volumes e limites.** A regra de limite por ONG é um diferencial de produto e deve ser comunicada de forma proeminente em todas as interfaces de reivindicação, com cálculo automático e feedback visual em tempo real.

**Acessibilidade para usuários não técnicos.** Linguagem simples, ícones descritivos, estados vazios orientadores e mensagens de erro amigáveis garantem que a plataforma funcione bem para um pequeno restaurante de bairro e para um grande distribuidor atacadista.

---

## 2. Arquitetura de Informação e RBAC

O sistema opera com cinco papéis principais, cada um com acesso a um conjunto específico de funcionalidades:

| Papel | Tipo de Organização | Volume Típico | Frequência | Função Principal |
|---|---|---|---|---|
| **DONOR** | Restaurantes, padarias, supermercados | Pequeno/médio | Alta | Publicar doações simples |
| **PRODUCER** | Produtores rurais | Grande | Sazonal | Publicar lotes in natura |
| **DISTRIBUTOR** | Atacadistas (ex: CEASA) | Muito grande | Variável | Publicar lotes com pallets |
| **NGO** | Instituições sociais | — | Alta | Reivindicar e coletar |
| **ADMIN** | Equipe FoodBridge | — | Contínua | Moderar e monitorar |

### Voluntários — Decisão de Produto

Voluntários **não são gerenciados pela plataforma**. A ONG é inteiramente responsável por seus voluntários. A FoodBridge apenas provê ferramentas para que a ONG registre e associe voluntários a coletas, com aviso explícito de isenção de responsabilidade exibido em todas as telas relacionadas.

### Tipos de Doação

A plataforma suporta dois tipos de doação com fluxos distintos:

| Tipo | Usado por | Campos extras | Fracionamento |
|---|---|---|---|
| **Doação Simples** | DONOR | — | Não |
| **Food Lot (Lote)** | PRODUCER, DISTRIBUTOR | Caixas/pallets, previsão de colheita, múltiplas janelas | Sim (entre múltiplas ONGs) |

### Regra de Limite por ONG

Cada doação ou lote pode ter um limite máximo de quantidade por ONG, evitando concentração e promovendo distribuição equitativa. O cálculo "quantas ONGs podem reivindicar" é exibido em tempo real durante a criação e na tela de detalhes. Exemplo: 20 marmitas com limite de 5 por ONG → até 4 ONGs podem reivindicar.

### Estados da Doação / Lote

| Estado | Descrição | Cor |
|---|---|---|
| `AVAILABLE` | Publicada, disponível para reivindicação | Verde |
| `PARTIALLY_CLAIMED` | Parte já reivindicada | Amarelo |
| `FULLY_CLAIMED` | Totalmente reivindicada | Cinza |
| `PICKUP_SCHEDULED` | Coleta agendada | Azul |
| `PICKED_UP` | Coleta realizada | Azul escuro |
| `COMPLETED` | Processo concluído | Verde escuro |
| `EXPIRED` | Prazo expirado sem coleta | Vermelho |

---

## 3. Sitemap Completo

```
FoodBridge
│
├── Área Pública
│   ├── Landing Page (/)
│   ├── Login (/login)
│   ├── Cadastro (/cadastro)
│   │   ├── Escolha de Perfil
│   │   ├── Dados da Organização
│   │   └── Verificação de Conta
│   └── Recuperar Senha (/recuperar-senha)
│
├── DONOR (/donor)
│   ├── Dashboard (/donor/dashboard)
│   ├── Minhas Doações (/donor/doacoes)
│   │   ├── Nova Doação (/donor/doacoes/nova)
│   │   ├── Detalhe da Doação (/donor/doacoes/:id)
│   │   └── Duplicar Doação (ação inline)
│   ├── Histórico (/donor/historico)
│   ├── Impacto (/donor/impacto)
│   └── Perfil (/donor/perfil)
│
├── PRODUCER (/producer)
│   ├── Dashboard (/producer/dashboard)
│   ├── Meus Lotes (/producer/lotes)
│   │   ├── Novo Lote (/producer/lotes/novo)
│   │   ├── Detalhe do Lote (/producer/lotes/:id)
│   │   └── Gestão de Fracionamento (/producer/lotes/:id/fracionamento)
│   ├── Previsões de Excedente (/producer/previsoes)
│   ├── Histórico (/producer/historico)
│   └── Perfil (/producer/perfil)
│
├── DISTRIBUTOR (/distributor)
│   ├── Dashboard (/distributor/dashboard)
│   ├── Meus Lotes (/distributor/lotes)
│   │   ├── Novo Lote (/distributor/lotes/novo)
│   │   ├── Detalhe do Lote (/distributor/lotes/:id)
│   │   └── Gestão de Fracionamento (/distributor/lotes/:id/fracionamento)
│   ├── Janelas de Coleta (/distributor/coletas)
│   ├── Histórico (/distributor/historico)
│   └── Perfil (/distributor/perfil)
│
├── NGO (/ngo)
│   ├── Dashboard (/ngo/dashboard)
│   ├── Explorar Doações (/ngo/explorar)
│   │   ├── Lista (/ngo/explorar/lista)
│   │   ├── Mapa (/ngo/explorar/mapa)
│   │   └── Detalhe (/ngo/explorar/:id)
│   ├── Minhas Requisições (/ngo/requisicoes)
│   │   └── Detalhe (/ngo/requisicoes/:id)
│   ├── Coletas Agendadas (/ngo/coletas)
│   │   └── Detalhe (/ngo/coletas/:id)
│   ├── Voluntários (/ngo/voluntarios)
│   │   ├── Cadastrar (/ngo/voluntarios/novo)
│   │   └── Detalhe (/ngo/voluntarios/:id)
│   ├── Impacto (/ngo/impacto)
│   └── Perfil (/ngo/perfil)
│
└── ADMIN (/admin)
    ├── Dashboard (/admin/dashboard)
    ├── Usuários (/admin/usuarios)
    ├── Doações (/admin/doacoes)
    ├── Lotes (/admin/lotes)
    ├── Métricas (/admin/metricas)
    ├── Configurações (/admin/configuracoes)
    └── Logs (/admin/logs)
```

---

## 4. Fluxos de Usuário

### 4.1 Onboarding (Todos os Perfis)

O fluxo de cadastro é composto por três etapas sequenciais: escolha do perfil, preenchimento dos dados da organização e verificação de e-mail. A escolha de perfil é o primeiro passo deliberado — o usuário deve se identificar antes de qualquer campo de formulário, garantindo que o fluxo subsequente seja contextualizado para seu tipo de organização.

```
[Landing Page] → [Escolha de Perfil] → [Dados da Organização]
→ [Verificação por E-mail] → [Dashboard do Perfil]
```

### 4.2 DONOR — Publicar Doação (Wizard em 5 Passos)

```
[Tipo de Alimento] → [Quantidade e Validade] → [Limite por ONG]
→ [Local e Janela de Coleta] → [Revisão e Publicação] → [Confirmação]
```

O wizard é linear e não permite pular etapas. O botão "Próximo" permanece desabilitado até que os campos obrigatórios da etapa atual sejam preenchidos. A etapa de revisão permite editar qualquer campo antes da publicação.

### 4.3 PRODUCER / DISTRIBUTOR — Publicar Lote

```
[Tipo e Descrição] → [Volume Total] → [Limite por ONG]
→ [Múltiplas Janelas de Coleta] → [Revisão e Publicação]
```

O DISTRIBUTOR possui campos adicionais no Passo 2 (número de caixas e pallets). O PRODUCER possui campo de previsão de colheita.

### 4.4 NGO — Reivindicar Doação

```
[Dashboard / Explorar] → [Lista ou Mapa] → [Detalhe da Doação]
→ [Modal: Solicitar Quantidade] → [Escolher Janela de Coleta]
→ [Atribuir Voluntário (opcional)] → [Confirmação]
```

### 4.5 NGO — Confirmar Coleta

```
[Coletas Agendadas] → [Detalhe da Coleta]
→ [Marcar como Coletado] → [Confirmação + Notificação ao Doador]
```

### 4.6 ADMIN — Verificar Usuário

```
[Dashboard Admin] → [Alerta: Pendentes de Verificação]
→ [Detalhe do Usuário] → [Ver Documentos] → [Aprovar / Rejeitar]
```

---

## 5. Design System

### 5.1 Filosofia Visual

O Design System da FoodBridge é construído sobre quatro pilares: **clareza**, **acessibilidade**, **velocidade** e **confiança**. A identidade visual transmite frescor, sustentabilidade e solidariedade, sem ser excessivamente corporativa. O verde como cor primária remete à natureza e ao alimento; o laranja como cor de alerta remete à urgência e à colheita.

### 5.2 Paleta de Cores

**Cores Primárias**

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-primary-600` | Verde FoodBridge | `#2D7A4F` | CTAs principais, links, ícones ativos |
| `--color-primary-500` | Verde Médio | `#3A9B63` | Hover de botões primários |
| `--color-primary-100` | Verde Claro | `#E8F5EE` | Backgrounds de cards, badges |
| `--color-primary-50` | Verde Suave | `#F2FAF5` | Backgrounds de seções |

**Cores Secundárias**

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-orange-500` | Laranja Colheita | `#E07B39` | Urgência, validade próxima |
| `--color-orange-100` | Laranja Claro | `#FDF0E8` | Background de alertas |
| `--color-earth-700` | Terra | `#6B4226` | Elementos de identidade |

**Cores Neutras**

| Token | Hex | Uso |
|---|---|---|
| `--color-gray-900` | `#1A1A1A` | Textos principais |
| `--color-gray-700` | `#4A4A4A` | Textos secundários |
| `--color-gray-400` | `#9E9E9E` | Placeholders |
| `--color-gray-200` | `#E5E5E5` | Bordas, divisores |
| `--color-gray-100` | `#F5F5F5` | Backgrounds de página |
| `--color-white` | `#FFFFFF` | Backgrounds de cards |

**Cores de Status por Estado de Doação**

| Estado | Cor Principal | Hex |
|---|---|---|
| `AVAILABLE` | Verde | `#2D7A4F` |
| `PARTIALLY_CLAIMED` | Amarelo | `#D4A017` |
| `FULLY_CLAIMED` | Cinza | `#9E9E9E` |
| `PICKUP_SCHEDULED` | Azul | `#2471A3` |
| `PICKED_UP` | Azul Escuro | `#1A5276` |
| `COMPLETED` | Verde Escuro | `#1B7A3E` |
| `EXPIRED` | Vermelho | `#C0392B` |

### 5.3 Tipografia

Família: **Inter** (Google Fonts, open source). Mono: **JetBrains Mono** para IDs e códigos.

| Token | Tamanho | Peso | Uso |
|---|---|---|---|
| `--text-display` | 32px | 700 | Títulos de página (desktop) |
| `--text-h1` | 24px | 700 | Títulos de seção |
| `--text-h2` | 20px | 600 | Subtítulos |
| `--text-h3` | 16px | 600 | Títulos de card |
| `--text-body-lg` | 16px | 400 | Texto principal |
| `--text-body` | 14px | 400 | Texto padrão |
| `--text-small` | 12px | 400 | Labels, captions |
| `--text-tiny` | 11px | 500 | Badges, tags |

### 5.4 Espaçamento e Grid

Sistema baseado em múltiplos de 4px. Grid de 12 colunas no desktop, 8 no tablet e 4 no mobile.

| Breakpoint | Colunas | Gutter | Margem |
|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 16px |
| Tablet (768–1024px) | 8 | 24px | 24px |
| Desktop (> 1024px) | 12 | 24px | 48px |

### 5.5 Componentes Principais

**Botões** — Variantes: Primary (verde sólido), Secondary (borda verde), Destructive (vermelho), Ghost (sem borda), Icon (circular). Tamanhos: sm (32px), md (40px), lg (48px). Estados: Default, Hover, Active, Disabled, Loading.

**Inputs** — Text Input com label flutuante, Number Input com botões +/−, Date Picker, Time Picker, Select, Textarea, Search Input, File Upload. Estados: Default, Focus, Filled, Error, Disabled.

**Cards** — DonationCard, LotCard, MetricCard, ClaimCard, PickupCard, VolunteerCard. Todos com sombra `--shadow-sm` em repouso e `--shadow-md` no hover.

**Status Badge** — Componente inline com ponto colorido e texto curto. Cores mapeadas para cada estado de doação.

**Progress Bar de Lote** — Barra de progresso com texto indicando quantidade reivindicada, total, limite por ONG e vagas restantes.

**Navegação Desktop** — Sidebar lateral de 240px, colapsável. Topbar com logo, busca, notificações e avatar.

**Navegação Mobile** — Bottom navigation fixa com 4–5 itens adaptados por perfil. Topbar simplificada.

**Sistema de Ícones** — Lucide Icons (open source). Ícones principais: `LayoutDashboard`, `PackagePlus`, `Package`, `MapPin`, `Truck`, `Users`, `Leaf`, `Clock`, `Shield`, `CheckCircle`, `XCircle`.

---

## 6. Wireframes — Onboarding e Autenticação

### TELA 01 — Landing Page (`/`)

**Objetivo**: Apresentar a FoodBridge e converter visitantes em cadastros.

A landing page é estruturada em seis seções verticais: (1) Topbar com logo e CTAs de login/cadastro; (2) Hero com headline principal, subtítulo e dois CTAs diferenciados ("Quero Doar" e "Somos uma ONG"), acompanhados de ilustração de mapa com pontos conectados; (3) Métricas globais animadas (refeições geradas, toneladas recuperadas, ONGs ativas); (4) Seção "Como funciona" com três passos visuais; (5) Cards de perfil mostrando quem pode participar; (6) CTA final com chamada para cadastro gratuito.

**Mobile**: Hero empilhado verticalmente. Métricas em carrossel horizontal. CTAs em largura total.

---

### TELA 02 — Cadastro: Escolha de Perfil (`/cadastro`)

**Objetivo**: Direcionar o usuário ao fluxo correto de cadastro com base no tipo de organização.

Tela centralizada (max-width 560px) com quatro cards de perfil: Restaurante/Comércio (DONOR), Produtor Rural (PRODUCER), Distribuidor Atacadista (DISTRIBUTOR) e ONG/Instituição Social (NGO). Cada card exibe ícone temático, nome do perfil e breve descrição do volume/frequência. O card selecionado recebe borda verde, fundo verde claro e ícone de check. O botão "Continuar" permanece desabilitado até que um perfil seja selecionado.

---

### TELA 03 — Cadastro: Dados da Organização (`/cadastro/dados`)

Formulário com campos: Nome da organização, CNPJ/CPF (com máscara e validação), Endereço completo, Cidade, Estado, CEP (com auto-preenchimento), Telefone, E-mail, Senha (com indicador de força) e Confirmar senha. Checkbox de aceite dos Termos de Uso. Indicador de progresso "Passo 2 de 3" no topo.

---

### TELA 04 — Verificação de E-mail (`/cadastro/verificacao`)

Tela de espera com ilustração de envelope, confirmação do e-mail enviado, botão "Reenviar e-mail" (disponível após 60 segundos com contador regressivo) e link para alterar o e-mail caso necessário.

---

### TELA 05 — Login (`/login`)

Formulário com E-mail e Senha, link "Esqueci minha senha", botão primário "Entrar", separador visual e opção de login com Google. Link para cadastro no rodapé.

---

### TELA 06 — Recuperar Senha (`/recuperar-senha`)

Campo de e-mail com botão "Enviar link de recuperação". Após envio, exibe confirmação inline com instrução para verificar a caixa de entrada.

---

## 7. Wireframes — Dashboards por Perfil

Todos os dashboards seguem o mesmo layout base: sidebar lateral (desktop) ou bottom navigation (mobile), topbar com saudação personalizada e CTA principal, seguidos de métricas rápidas em cards horizontais, seções de conteúdo contextual e ações rápidas.

### TELA 07 — Dashboard DONOR (`/donor/dashboard`)

**Métricas**: Doações este mês, Ativas agora, Refeições geradas, CO2 evitado.

**Ações rápidas**: "Nova Doação" (CTA principal) e "Duplicar última doação" (ação secundária).

**Conteúdo principal**: Lista das doações mais recentes com status badge, quantidade reivindicada vs. total, e ações inline (Ver, Editar, Duplicar). Gráfico de barras de doações por semana no mês atual.

---

### TELA 08 — Dashboard PRODUCER (`/producer/dashboard`)

**Métricas**: Lotes ativos, Volume disponível (em kg), ONGs atendidas.

**Conteúdo principal**: Lotes ativos com progress bar de reivindicação, indicando percentual reivindicado, número de ONGs e próxima janela de coleta. Seção de "Previsões de Excedente" com CTA para registrar nova previsão.

---

### TELA 09 — Dashboard DISTRIBUTOR (`/distributor/dashboard`)

**Métricas**: Lotes ativos, Pallets disponíveis, Volume redistribuído no mês.

**Conteúdo principal**: Tabela compacta de lotes ativos com colunas Tipo, Volume, Pallets, Janela e Status. Timeline visual das coletas do dia atual.

---

### TELA 10 — Dashboard NGO (`/ngo/dashboard`)

**Destaque**: Banner de matching automático com número de doações recomendadas e CTA "Ver recomendações".

**Métricas**: Doações disponíveis próximas, Coletas agendadas, Refeições geradas no mês.

**Conteúdo principal**: Lista de doações próximas (até 10 km) com distância, validade, limite por ONG e botão "Reivindicar" inline. Coletas agendadas para hoje com horário, voluntário e botão "Confirmar coleta".

---

### TELA 11 — Dashboard ADMIN (`/admin/dashboard`)

**Alertas urgentes**: Contas pendentes de verificação e doações reportadas, com links diretos para ação.

**Métricas globais**: Total de usuários, ONGs ativas, Doadores ativos, Volume redistribuído no mês.

**Conteúdo principal**: Gráfico de linha de atividade recente. Lista de usuários pendentes de verificação com ações inline (Aprovar/Rejeitar).

---

## 8. Wireframes — Doações (DONOR)

### TELA 12 — Criar Doação — Wizard em 5 Passos (`/donor/doacoes/nova`)

O fluxo de criação de doação é implementado como um wizard linear com indicador de progresso visual no topo (barra de progresso + numeração de passos).

**Passo 1 — Tipo de Alimento**: Campo de busca com sugestões e grid de categorias rápidas (Refeições prontas, Padaria, Hortifrúti, Laticínios, Outros). Campo de descrição adicional opcional.

**Passo 2 — Quantidade e Validade**: Number input com botões +/− e seletor de unidade (unidades/kg/litros). Date picker para data de validade com opção "Sem data definida". Nota informativa sobre prioridade no matching automático para alimentos próximos da validade.

**Passo 3 — Limite por ONG**: Number input para quantidade máxima por ONG. Cálculo automático em tempo real: "Com esse limite, até X ONGs podem reivindicar (Total ÷ Limite = X ONGs)". Opção "Sem limite" via checkbox.

**Passo 4 — Local e Janela de Coleta**: Opção de usar endereço cadastrado (pré-selecionada) ou informar outro endereço. Date picker para data de coleta, time pickers para início e fim da janela. Campo de instruções para coleta (opcional).

**Passo 5 — Revisão e Publicação**: Card de resumo com todos os dados preenchidos, link "Editar" em cada campo, e botão primário "Publicar Doação". Nota informativa: "Ao publicar, ONGs próximas serão notificadas."

**Confirmação**: Tela/modal de sucesso com número de ONGs notificadas e CTAs "Ver minha doação" e "Publicar outra".

---

### TELA 13 — Lista de Doações (`/donor/doacoes`)

Lista com filtros por status e período. Cada item exibe: ícone de categoria, quantidade, data de publicação, validade, progresso de reivindicação (X/Y ONGs, X/Y unidades), status badge e ações inline (Ver detalhes, Duplicar, Cancelar para ativas; Republicar para expiradas).

---

### TELA 14 — Detalhe da Doação (`/donor/doacoes/:id`)

Cabeçalho com status badge e nome do produto. Grid de 4 métricas: Total, Limite/ONG, Validade, Distância. Barra de progresso de reivindicação com texto descritivo. Informações de coleta (data, horário, endereço, instruções). Lista de reivindicações com nome da ONG, quantidade, horário agendado, voluntário e status (visível para DONOR e ADMIN). Para NGO, o botão "Reivindicar" aparece no lugar da lista de reivindicações.

---

## 9. Wireframes — Lotes (PRODUCER / DISTRIBUTOR)

### TELA 15 — Criar Lote — Wizard em 5 Passos

Segue a mesma estrutura do wizard de doação, com campos adicionais:

**Passo 1**: Tipo de alimento (Hortifrúti, Grãos, Industrializados, Outros), nome do produto e descrição.

**Passo 2 (PRODUCER)**: Volume em kg e previsão de colheita/disponibilidade. Campo de condição de armazenamento (temperatura ambiente, refrigerado, congelado).

**Passo 2 (DISTRIBUTOR)**: Volume em kg, número de caixas e número de pallets. Campo de condição de armazenamento.

**Passo 3**: Limite por ONG com cálculo automático (idêntico ao fluxo de doação simples).

**Passo 4**: Múltiplas janelas de coleta — o usuário pode adicionar/remover janelas com data e faixa de horário. Endereço de retirada com opção de usar o cadastrado.

**Passo 5**: Revisão e publicação.

---

### TELA 16 — Gestão de Lote / Fracionamento (`/producer/lotes/:id/fracionamento`)

Tela de gerenciamento de um lote específico. Exibe resumo do lote (volume total, limite por ONG, barra de progresso de reivindicação). Lista de fracionamento por ONG: nome da ONG, quantidade reivindicada, horário agendado, voluntário e status. Ações por reivindicação: Confirmar e Cancelar. Rodapé com volume ainda disponível e opção de encerrar o lote antecipadamente.

---

## 10. Wireframes — Solicitações e Coletas (NGO)

### TELA 17 — Modal de Solicitação de Doação

Acionado pelo botão "Reivindicar" na tela de detalhe. Exibe resumo da doação (tipo, quantidade total, limite por ONG). Number input para quantidade desejada com validação em tempo real (máximo = limite por ONG). Seleção de janela de coleta disponível (radio buttons). Seletor de voluntário (dropdown com lista da ONG, opcional). Botões "Cancelar" e "Confirmar Solicitação".

---

### TELA 18 — Minhas Requisições (`/ngo/requisicoes`)

Lista de todas as requisições feitas pela ONG, com filtros por status. Cada item exibe: tipo de alimento, quantidade, nome do doador, data/horário da coleta, voluntário atribuído e status badge. Link para detalhe de cada requisição.

---

### TELA 19 — Gestão de Coletas (`/ngo/coletas`)

Visualização em abas: Hoje, Esta semana, Histórico. Cada coleta exibe: horário, tipo e quantidade de alimento, nome do doador, endereço, voluntário responsável com telefone, status badge e ações (Ver no mapa, Confirmar coleta).

---

### TELA 20 — Detalhe da Coleta (`/ngo/coletas/:id`)

Informações completas da coleta: data, horário, endereço com link para mapa, instruções especiais. Card do voluntário responsável com nome, telefone e opção de trocar. Aviso proeminente de responsabilidade da ONG sobre voluntários. Ações: "Cancelar coleta" (destructive) e "Marcar como coletado" (primary).

**Estado pós-confirmação**: Toast de sucesso com notificação de que o doador foi informado e link para ver o impacto gerado.

---

### TELA 21 — Modal de Aprovação de Solicitação (DONOR)

Exibido quando o DONOR tem aprovação manual ativada. Mostra nome da ONG solicitante, quantidade pedida, total da doação, horário agendado e voluntário. Exibe quantidade restante após aprovação. Botões "Rejeitar" e "Aprovar".

> **Nota de produto**: O fluxo padrão é aprovação automática (first-come, first-served respeitando o limite por ONG). A aprovação manual é opcional e configurável pelo doador nas configurações do perfil.

---

## 11. Wireframes — Voluntários (NGO)

### TELA 22 — Lista de Voluntários (`/ngo/voluntarios`)

Aviso proeminente no topo: "A FoodBridge não gerencia voluntários. A ONG é inteiramente responsável por seus voluntários. Esta ferramenta é apenas para organização interna da sua equipe."

Campo de busca por nome. Lista de voluntários com nome, telefone, e-mail e número de coletas realizadas. Ações por voluntário: Ver detalhes e Associar a coleta. CTA "Cadastrar" no cabeçalho.

---

### TELA 23 — Cadastro de Voluntário (`/ngo/voluntarios/novo`)

Aviso de responsabilidade repetido no topo do formulário. Campos: Nome completo (obrigatório), Telefone (obrigatório), E-mail (opcional), Observações (opcional). Checkbox de confirmação: "Confirmo que minha organização assume responsabilidade por este voluntário." Botões "Cancelar" e "Cadastrar Voluntário" (desabilitado até o checkbox ser marcado).

---

## 12. Wireframes — Mapa e Exploração (NGO)

### TELA 24 — Mapa de Doações (`/ngo/explorar/mapa`)

Barra de filtros horizontal no topo: Tipo de alimento, Distância, Volume, Urgência. Mapa interativo (Google Maps ou Leaflet) ocupando a área principal. Sistema de pins: verde para doação simples disponível, azul para lote disponível, laranja para urgente (vence hoje), cinza para já reivindicado. Pins agrupados em clusters quando muito próximos.

Ao clicar em um pin, abre-se um painel lateral com resumo da doação: tipo, quantidade, distância, validade, limite por ONG, vagas restantes, status badge e CTAs "Ver detalhes" e "Reivindicar". Duplo clique abre a tela de detalhe completa.

**Mobile**: Mapa em tela cheia. Filtros em bottom sheet deslizante. Pin selecionado abre card fixo na parte inferior da tela.

---

### TELA 25 — Lista de Doações para Exploração (`/ngo/explorar/lista`)

Alterna com a visualização de mapa via toggle no cabeçalho. Campo de busca por tipo de alimento. Filtros de tipo, distância e volume.

Seção "Recomendadas para você" (matching automático): destaque visual com estrela, exibindo as doações mais relevantes baseadas em distância, urgência, capacidade e histórico da ONG.

Lista geral ordenada por distância. Cada item exibe: ícone de categoria, quantidade, distância, validade (com ícone de urgência para vencimento hoje), nome do doador, limite por ONG, status badge e botão "Reivindicar" inline.

---

## 13. Wireframes — Métricas de Impacto

### TELA 26 — Impacto do Usuário (`/:perfil/impacto`)

**Versão DONOR/PRODUCER/DISTRIBUTOR**: Saudação personalizada. Métricas totais acumuladas: refeições geradas, kg doados, CO2 evitado. Gráfico de barras de evolução mensal (últimos 6 meses). Gráfico de pizza de doações por categoria. Lista das ONGs atendidas com número de coletas e refeições geradas por cada uma. Seção de impacto global da plataforma no rodapé.

**Versão NGO**: Métricas de coletas realizadas, kg recebidos e refeições distribuídas. Gráfico de evolução. Lista dos principais doadores parceiros.

---

### TELA 27 — Métricas Globais — Admin (`/admin/metricas`)

Seletor de período (últimos 7/30/90 dias, ano atual, personalizado). Botão "Exportar CSV". KPIs principais em cards: refeições geradas, toneladas recuperadas, ONGs ativas, doadores ativos, CO2 evitado. Gráfico de linha: doações publicadas vs. concluídas por período. Mapa de calor por região/UF. Rankings: Top Doadores do Mês e Top ONGs do Mês.

---

## 14. Wireframes — Painel Administrativo

### TELA 28 — Gestão de Usuários (`/admin/usuarios`)

Campo de busca por nome, e-mail ou CNPJ. Filtros por perfil e status. Seção destacada de usuários pendentes de verificação com ações inline (Ver documentos, Aprovar, Rejeitar). Tabela de todos os usuários com colunas: Nome, Organização, Perfil, Status e Ações.

---

### TELA 29 — Perfil do Usuário (`/:perfil/perfil`)

Avatar/logo da organização com opção de alterar. Dados da organização em modo de visualização com botões "Editar" por campo. Configurações de notificação (checkboxes). Seção de segurança com links para alterar senha e encerrar sessões. Zona de perigo com opção de desativar conta.

---

## 15. Estados Especiais e Componentes Globais

### 15.1 Estados Vazios (Empty States)

Cada empty state segue a estrutura: ilustração SVG temática + título descritivo + subtítulo explicativo + CTA contextual.

| Contexto | Título | CTA |
|---|---|---|
| DONOR sem doações | "Você ainda não publicou nenhuma doação" | "Publicar minha primeira doação" |
| NGO sem doações próximas | "Nenhuma doação disponível na sua região" | "Ampliar raio de busca" / "Limpar filtros" |
| NGO sem voluntários | "Nenhum voluntário cadastrado" | "Cadastrar primeiro voluntário" |
| NGO sem requisições | "Você ainda não fez nenhuma solicitação" | "Explorar doações disponíveis" |
| ADMIN sem alertas | "Tudo em ordem! Nenhuma ação pendente." | — |

### 15.2 Estados de Carregamento

Skeleton screens para listas e cards (não spinner global). Spinner inline para botões durante ações assíncronas. Barra de progresso para uploads de documentos.

### 15.3 Estados de Erro

Mensagens amigáveis sem exposição de erros técnicos. Sempre incluem uma ação de recuperação (Tentar novamente, Voltar, Contatar suporte). Erros de formulário exibidos inline abaixo do campo correspondente, com texto em vermelho e ícone de alerta.

### 15.4 Painel de Notificações

Drawer deslizante acessível pelo ícone de sino na topbar. Notificações agrupadas por data (Hoje, Ontem, Esta semana). Tipos: nova reivindicação, doação recomendada, coleta confirmada, doação expirada. Cada notificação tem link de ação contextual. Botão "Marcar todas como lidas" no cabeçalho.

### 15.5 Aviso de Responsabilidade sobre Voluntários

Componente reutilizável exibido em todas as telas relacionadas a voluntários (lista, cadastro, detalhe de coleta). Fundo amarelo claro, ícone de alerta, texto: "A FoodBridge não gerencia voluntários. A ONG é inteiramente responsável por seus voluntários cadastrados nesta plataforma."

---

## 16. Hierarquia de Organização no Figma

A estrutura recomendada para o arquivo Figma segue a arquitetura de componentes atômicos (Atomic Design), organizada em páginas separadas:

```
Arquivo: FoodBridge — Design System & Wireframes

Páginas:
│
├── 📋 Cover (capa do projeto)
│
├── 🎨 Foundations
│   ├── Colors (paleta completa com tokens)
│   ├── Typography (escala + estilos de texto)
│   ├── Spacing & Grid
│   ├── Shadows & Radius
│   └── Icons
│
├── 🧩 Components
│   ├── Atoms
│   │   ├── Button (todas variantes e estados)
│   │   ├── Input (todos os tipos e estados)
│   │   ├── Badge / Status Badge
│   │   ├── Avatar
│   │   └── Divider
│   ├── Molecules
│   │   ├── Form Field (label + input + error)
│   │   ├── Search Bar
│   │   ├── Progress Bar (lote)
│   │   ├── Toast / Notification
│   │   └── Dropdown Menu
│   └── Organisms
│       ├── DonationCard
│       ├── LotCard
│       ├── MetricCard
│       ├── ClaimCard
│       ├── PickupCard
│       ├── VolunteerCard
│       ├── Sidebar Nav
│       ├── Bottom Nav
│       ├── Topbar
│       └── Modal / Drawer
│
├── 📱 Layouts
│   ├── Desktop Base (sidebar + content area)
│   └── Mobile Base (topbar + content + bottom nav)
│
├── 🌐 Onboarding
│   ├── Landing Page (desktop + mobile)
│   ├── Escolha de Perfil
│   ├── Dados da Organização
│   ├── Verificação de E-mail
│   ├── Login
│   └── Recuperar Senha
│
├── 🍽️ DONOR
│   ├── Dashboard
│   ├── Nova Doação (5 passos)
│   ├── Lista de Doações
│   ├── Detalhe da Doação
│   └── Impacto
│
├── 🌾 PRODUCER
│   ├── Dashboard
│   ├── Novo Lote (5 passos)
│   ├── Lista de Lotes
│   ├── Detalhe / Fracionamento
│   └── Impacto
│
├── 🏭 DISTRIBUTOR
│   ├── Dashboard
│   ├── Novo Lote (5 passos)
│   ├── Lista de Lotes
│   ├── Detalhe / Fracionamento
│   └── Impacto
│
├── 🤝 NGO
│   ├── Dashboard
│   ├── Explorar — Lista
│   ├── Explorar — Mapa
│   ├── Detalhe da Doação + Modal Reivindicar
│   ├── Minhas Requisições
│   ├── Coletas Agendadas
│   ├── Detalhe da Coleta
│   ├── Voluntários — Lista
│   ├── Cadastrar Voluntário
│   └── Impacto
│
├── 🔧 ADMIN
│   ├── Dashboard
│   ├── Gestão de Usuários
│   ├── Moderação de Doações
│   └── Métricas Globais
│
└── 📐 Protótipo
    ├── Fluxo DONOR (publicar doação)
    ├── Fluxo NGO (reivindicar + coletar)
    └── Fluxo Onboarding
```

**Convenções de nomenclatura no Figma**:
- Frames de tela: `[Perfil] / [Nome da Tela] / [Desktop|Mobile]`
- Componentes: `[Categoria] / [Nome] / [Variante]`
- Variáveis de cor: seguir tokens definidos na seção Foundations

---

## 17. Suposições Documentadas

As seguintes decisões foram tomadas pelo designer com base no briefing e em boas práticas de produto, devendo ser validadas com o time de produto antes da implementação:

| # | Suposição | Justificativa | Impacto |
|---|---|---|---|
| 1 | Autenticação via e-mail + senha com opção OAuth Google | Simplicidade e acessibilidade para usuários não técnicos | Baixo |
| 2 | Verificação de conta por e-mail antes de publicar doações | Segurança mínima e redução de spam | Baixo |
| 3 | Geolocalização baseada em endereço cadastrado (não GPS em tempo real) | Privacidade e simplicidade técnica | Médio |
| 4 | Notificações por e-mail e push web (não app nativo) | Alcance máximo sem necessidade de app | Médio |
| 5 | Matching automático é sugestivo, não obrigatório | ONG sempre tem autonomia de escolha | Baixo |
| 6 | Fracionamento de lote é manual (ONG solicita quantidade desejada) | Flexibilidade operacional | Médio |
| 7 | Aprovação de solicitação é automática por padrão; manual é opcional | Reduz fricção para o doador | Alto |
| 8 | Admin pode visualizar e gerenciar todos os usuários e doações | Necessidade operacional de suporte | Baixo |
| 9 | Idioma padrão: Português Brasileiro | Mercado-alvo | Baixo |
| 10 | Mapa usa Google Maps ou Leaflet (decisão técnica a definir) | Ambos suportam os requisitos de UX | Médio |
| 11 | Voluntários não têm login na plataforma | Conforme especificado no briefing | Baixo |
| 12 | Doações expiradas podem ser "republicadas" com um clique | Reduz fricção para reutilizar dados | Baixo |

---

*Documento gerado por Manus AI — Senior Product Designer + UX Architect*  
*FoodBridge v1.0 — Março de 2026*
