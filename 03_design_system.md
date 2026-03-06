# FoodBridge — Design System

## 1. Filosofia de Design

O Design System da FoodBridge é construído sobre quatro pilares: **clareza**, **acessibilidade**, **velocidade** e **confiança**. A identidade visual deve transmitir frescor, sustentabilidade e solidariedade, sem ser excessivamente "corporativa". O sistema deve funcionar igualmente bem para um pequeno restaurante de bairro e para um grande distribuidor atacadista.

---

## 2. Paleta de Cores

### Cores Primárias

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-primary-600` | Verde FoodBridge | `#2D7A4F` | CTAs principais, links, ícones ativos |
| `--color-primary-500` | Verde Médio | `#3A9B63` | Hover de botões primários |
| `--color-primary-100` | Verde Claro | `#E8F5EE` | Backgrounds de cards, badges |
| `--color-primary-50` | Verde Suave | `#F2FAF5` | Backgrounds de seções |

### Cores Secundárias (Identidade)

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-orange-500` | Laranja Colheita | `#E07B39` | Urgência, alertas de validade próxima |
| `--color-orange-100` | Laranja Claro | `#FDF0E8` | Background de alertas |
| `--color-earth-700` | Terra | `#6B4226` | Elementos de identidade, rodapés |

### Cores Neutras

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-gray-900` | Quase Preto | `#1A1A1A` | Textos principais |
| `--color-gray-700` | Cinza Escuro | `#4A4A4A` | Textos secundários |
| `--color-gray-400` | Cinza Médio | `#9E9E9E` | Placeholders, labels desabilitados |
| `--color-gray-200` | Cinza Claro | `#E5E5E5` | Bordas, divisores |
| `--color-gray-100` | Cinza Suave | `#F5F5F5` | Backgrounds de página |
| `--color-white` | Branco | `#FFFFFF` | Backgrounds de cards |

### Cores de Status

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-success` | Verde Sucesso | `#1B7A3E` | Confirmações, COMPLETED |
| `--color-warning` | Amarelo Alerta | `#D4A017` | PARTIALLY_CLAIMED, atenção |
| `--color-error` | Vermelho Erro | `#C0392B` | Erros, EXPIRED |
| `--color-info` | Azul Info | `#2471A3` | Informações neutras |

### Cores por Estado de Doação

| Estado | Cor | Badge |
|---|---|---|
| `AVAILABLE` | Verde `#2D7A4F` | Fundo verde claro + texto verde |
| `PARTIALLY_CLAIMED` | Amarelo `#D4A017` | Fundo amarelo claro + texto amarelo escuro |
| `FULLY_CLAIMED` | Cinza `#9E9E9E` | Fundo cinza claro + texto cinza |
| `PICKUP_SCHEDULED` | Azul `#2471A3` | Fundo azul claro + texto azul |
| `PICKED_UP` | Azul Escuro `#1A5276` | Fundo azul médio + texto branco |
| `COMPLETED` | Verde Escuro `#1B7A3E` | Fundo verde + texto branco |
| `EXPIRED` | Vermelho `#C0392B` | Fundo vermelho claro + texto vermelho |

---

## 3. Tipografia

### Família de Fontes
- **Display / Headings**: `Inter` (peso: 700, 600)
- **Body / UI**: `Inter` (peso: 400, 500)
- **Mono (códigos, IDs)**: `JetBrains Mono`

### Escala Tipográfica

| Token | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|
| `--text-display` | 32px | 700 | 1.2 | Títulos de página (desktop) |
| `--text-h1` | 24px | 700 | 1.3 | Títulos de seção |
| `--text-h2` | 20px | 600 | 1.35 | Subtítulos |
| `--text-h3` | 16px | 600 | 1.4 | Títulos de card |
| `--text-body-lg` | 16px | 400 | 1.6 | Texto principal |
| `--text-body` | 14px | 400 | 1.6 | Texto padrão |
| `--text-small` | 12px | 400 | 1.5 | Labels, captions |
| `--text-tiny` | 11px | 500 | 1.4 | Badges, tags |

---

## 4. Espaçamento e Grid

### Sistema de Espaçamento (base 4px)

| Token | Valor | Uso típico |
|---|---|---|
| `--space-1` | 4px | Espaço mínimo entre elementos inline |
| `--space-2` | 8px | Padding interno de badges e chips |
| `--space-3` | 12px | Gap entre ícone e texto |
| `--space-4` | 16px | Padding de cards, espaço entre campos |
| `--space-6` | 24px | Padding de seções |
| `--space-8` | 32px | Margem entre seções |
| `--space-12` | 48px | Espaço entre blocos maiores |
| `--space-16` | 64px | Padding de páginas (desktop) |

### Grid

| Breakpoint | Colunas | Gutter | Margem lateral |
|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 16px |
| Tablet (768–1024px) | 8 | 24px | 24px |
| Desktop (> 1024px) | 12 | 24px | 48px |

---

## 5. Bordas e Sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 6px | Badges, chips, inputs |
| `--radius-md` | 10px | Cards, botões |
| `--radius-lg` | 16px | Modais, drawers, painéis |
| `--radius-full` | 9999px | Avatares, toggles |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards em repouso |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Cards com hover |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.14)` | Modais, dropdowns |

---

## 6. Componentes Reutilizáveis

### 6.1 Botões

| Variante | Aparência | Uso |
|---|---|---|
| **Primary** | Fundo verde `#2D7A4F`, texto branco | CTA principal (Publicar, Solicitar) |
| **Secondary** | Borda verde, fundo transparente | Ações secundárias |
| **Destructive** | Fundo vermelho, texto branco | Cancelar, excluir |
| **Ghost** | Sem borda, sem fundo | Ações terciárias, links |
| **Icon** | Apenas ícone, fundo circular | Ações rápidas em cards |

**Estados**: Default → Hover → Active → Disabled → Loading (spinner inline)

**Tamanhos**: `sm` (32px altura) | `md` (40px) | `lg` (48px)

---

### 6.2 Inputs e Formulários

| Componente | Descrição |
|---|---|
| **Text Input** | Campo de texto padrão com label flutuante |
| **Textarea** | Área de texto multilinha |
| **Select** | Dropdown nativo estilizado |
| **Number Input** | Campo numérico com botões +/- |
| **Date Picker** | Seletor de data com calendário |
| **Time Picker** | Seletor de horário |
| **Search Input** | Campo com ícone de lupa e botão de limpar |
| **File Upload** | Área de drag-and-drop para documentos |

**Estados de Input**: Default → Focus → Filled → Error → Disabled

---

### 6.3 Cards

| Tipo | Conteúdo | Uso |
|---|---|---|
| **DonationCard** | Tipo, quantidade, validade, status badge, distância | Lista de doações (NGO) |
| **LotCard** | Tipo, volume total, pallets, janelas, status | Lista de lotes |
| **MetricCard** | Ícone, valor grande, label, variação | Dashboards |
| **ClaimCard** | Doação, quantidade solicitada, status, voluntário | Requisições da ONG |
| **PickupCard** | Data/hora, endereço, voluntário, status | Coletas agendadas |
| **VolunteerCard** | Nome, telefone, coletas associadas | Lista de voluntários |

---

### 6.4 Status Badge

Componente inline com fundo colorido e texto curto. Usado em todos os cards e tabelas.

```
[ ● DISPONÍVEL ]    → verde
[ ● PARCIALMENTE ]  → amarelo
[ ● ESGOTADO ]      → cinza
[ ● AGENDADO ]      → azul
[ ● COLETADO ]      → azul escuro
[ ● CONCLUÍDO ]     → verde escuro
[ ● EXPIRADO ]      → vermelho
```

---

### 6.5 Progress Bar de Lote

Componente visual para mostrar progresso de reivindicação de lotes:

```
Quantidade reivindicada: 350 kg de 500 kg
[████████████████░░░░░░░░] 70%
Limite por ONG: 50 kg · 3 ONGs já reivindicaram · 1 vaga restante
```

---

### 6.6 Navegação

| Componente | Desktop | Mobile |
|---|---|---|
| **Sidebar** | Lateral esquerda, 240px, colapsável | — |
| **Bottom Nav** | — | Barra inferior fixa, 5 itens |
| **Topbar** | Logo + busca + notificações + avatar | Logo + notificações + avatar |
| **Breadcrumb** | Caminho de navegação em páginas internas | Apenas título da página |

---

### 6.7 Notificações e Toasts

| Tipo | Cor | Ícone | Duração |
|---|---|---|---|
| **Sucesso** | Verde | ✓ | 4s |
| **Erro** | Vermelho | ✕ | 6s (com botão fechar) |
| **Alerta** | Amarelo | ! | 5s |
| **Info** | Azul | i | 4s |

---

### 6.8 Estados Especiais

#### Estado Vazio (Empty State)
Estrutura padrão:
- Ilustração SVG temática (ex: caixas vazias, mapa sem pins)
- Título: "Nenhuma doação encontrada"
- Subtítulo explicativo
- CTA (quando aplicável): "Publicar primeira doação"

#### Estado de Carregamento (Loading)
- Skeleton screens para cards e listas (não spinner global)
- Spinner inline para botões durante ações
- Barra de progresso para uploads

#### Estado de Erro
- Mensagem clara e amigável
- Ação de recuperação (Tentar novamente / Voltar)
- Nunca expor erros técnicos ao usuário final

---

## 7. Ícones

Sistema de ícones: **Lucide Icons** (open source, consistente, leve).

| Ação / Conceito | Ícone Lucide |
|---|---|
| Dashboard | `LayoutDashboard` |
| Nova doação | `Plus` / `PackagePlus` |
| Doação simples | `UtensilsCrossed` |
| Lote | `Package` |
| Mapa | `MapPin` |
| Coleta | `Truck` |
| Voluntário | `Users` |
| Impacto | `Leaf` |
| Alerta de validade | `Clock` |
| Limite por ONG | `Shield` |
| Aprovado | `CheckCircle` |
| Expirado | `XCircle` |
| Filtro | `SlidersHorizontal` |
| Busca | `Search` |
| Notificação | `Bell` |
| Perfil | `User` |
| Configurações | `Settings` |

---

## 8. Hierarquia de Componentes no Figma

```
FoodBridge Design System
│
├── 🎨 Foundations
│   ├── Colors (paleta completa com tokens)
│   ├── Typography (escala + estilos de texto)
│   ├── Spacing (grid de espaçamento)
│   ├── Shadows
│   └── Border Radius
│
├── 🧩 Components
│   ├── Atoms
│   │   ├── Button (todas variantes e estados)
│   │   ├── Input (todos os tipos)
│   │   ├── Badge / Status Badge
│   │   ├── Avatar
│   │   ├── Icon
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
└── 🖼️ Screens
    ├── Onboarding
    ├── DONOR
    ├── PRODUCER
    ├── DISTRIBUTOR
    ├── NGO
    └── ADMIN
```
