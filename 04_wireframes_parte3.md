# FoodBridge — Wireframes: Parte 3 (Coletas, Voluntários, Mapa e Métricas)

---

## TELA 19 — Gestão de Coletas (NGO)

**Rota**: `/ngo/coletas`
**Objetivo**: Visão geral de todas as coletas agendadas, em andamento e concluídas.

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Coletas Agendadas                               │
│          ├──────────────────────────────────────────────────┤
│          │  [Hoje] [Esta semana] [Histórico]                │
│          │                                                   │
│          │  HOJE — 10/03/2026                               │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🕐 10h30                                     │ │
│          │  │ 🍽️ 5 marmitas · Restaurante Bom Sabor        │ │
│          │  │ 📍 Rua das Flores, 123 — Pinheiros           │ │
│          │  │ 👤 Voluntário: João Silva · 📞 (11) 99999-0000│ │
│          │  │ [AGENDADO ●]                                 │ │
│          │  │ [Ver no mapa]  [Confirmar coleta ✓]          │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🕐 14h00                                     │ │
│          │  │ 🌽 50 kg Milho · Fazenda São João            │ │
│          │  │ 📍 Estrada Rural, km 12 — Campinas           │ │
│          │  │ 👤 Voluntário: Maria Santos                  │ │
│          │  │ [AGENDADO ●]                                 │ │
│          │  │ [Ver no mapa]  [Confirmar coleta ✓]          │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  ESTA SEMANA                                     │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 11/03 · 🍞 30 pães · Padaria Central        │ │
│          │  │ Voluntário: Carlos Mendes · [AGENDADO ●]    │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 20 — Detalhe da Coleta (NGO)

**Rota**: `/ngo/coletas/:id`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  ← Voltar    Detalhe da Coleta                   │
│          ├──────────────────────────────────────────────────┤
│          │  [AGENDADO ●]                                    │
│          │                                                   │
│          │  🍽️ 5 marmitas — Refeições prontas               │
│          │  Restaurante Bom Sabor                           │
│          │                                                   │
│          │  INFORMAÇÕES DA COLETA                           │
│          │  ┌──────────────────────────────────────────┐   │
│          │  │ 📅 Data: 10/03/2026                       │   │
│          │  │ 🕐 Horário: 10h30 às 14h                  │   │
│          │  │ 📍 Rua das Flores, 123 — Pinheiros, SP    │   │
│          │  │ ℹ️ Entrar pela porta dos fundos            │   │
│          │  └──────────────────────────────────────────┘   │
│          │                                                   │
│          │  [🗺️ Ver no mapa]                                │
│          │                                                   │
│          │  VOLUNTÁRIO RESPONSÁVEL                          │
│          │  ┌──────────────────────────────────────────┐   │
│          │  │ 👤 João Silva                             │   │
│          │  │ 📞 (11) 99999-0000                        │   │
│          │  │ [Trocar voluntário]                       │   │
│          │  └──────────────────────────────────────────┘   │
│          │                                                   │
│          │  ⚠️ A ONG é responsável pelo voluntário.         │
│          │  A FoodBridge não se responsabiliza por          │
│          │  voluntários cadastrados.                        │
│          │                                                   │
│          │  AÇÕES                                           │
│          │  [Cancelar coleta]    [Marcar como coletado ✓]  │
└──────────┴──────────────────────────────────────────────────┘
```

**Estado após marcar como coletado**:
```
✅ "Coleta confirmada!"
   Status atualizado para COLETADO.
   O doador foi notificado.
   [Ver impacto gerado]
```

---

## TELA 21 — Gestão de Voluntários (NGO)

**Rota**: `/ngo/voluntarios`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Voluntários                  [+ Cadastrar]      │
│          ├──────────────────────────────────────────────────┤
│          │  ⚠️ AVISO IMPORTANTE                              │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ A FoodBridge não gerencia voluntários.       │ │
│          │  │ A ONG é inteiramente responsável por seus    │ │
│          │  │ voluntários. Esta ferramenta é apenas para   │ │
│          │  │ organização interna da sua equipe.           │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  [🔍 Buscar voluntário...           ]            │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 👤 João Silva                                │ │
│          │  │ 📞 (11) 99999-0000 · joao@email.com         │ │
│          │  │ 3 coletas realizadas                        │ │
│          │  │ [Ver detalhes]  [Associar a coleta]         │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 👤 Maria Santos                              │ │
│          │  │ 📞 (11) 88888-0000 · maria@email.com        │ │
│          │  │ 7 coletas realizadas                        │ │
│          │  │ [Ver detalhes]  [Associar a coleta]         │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 👤 Carlos Mendes                             │ │
│          │  │ 📞 (11) 77777-0000 · carlos@email.com       │ │
│          │  │ 1 coleta realizada                          │ │
│          │  │ [Ver detalhes]  [Associar a coleta]         │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 22 — Cadastro de Voluntário (NGO)

**Rota**: `/ngo/voluntarios/novo`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  ← Voltar    Cadastrar Voluntário                │
│          ├──────────────────────────────────────────────────┤
│          │                                                   │
│          │  ⚠️ Ao cadastrar um voluntário, você confirma    │
│          │  que sua organização assume total responsabilidade│
│          │  por ele. A FoodBridge não se responsabiliza     │
│          │  por voluntários cadastrados.                    │
│          │                                                   │
│          │  [Nome completo*                    ]            │
│          │  [Telefone*                         ]            │
│          │  [E-mail (opcional)                 ]            │
│          │  [Observações (opcional)            ]            │
│          │                                                   │
│          │  ☐ Confirmo que minha organização assume         │
│          │    responsabilidade por este voluntário.         │
│          │                                                   │
│          │  [Cancelar]              [Cadastrar Voluntário]  │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 23 — Mapa de Doações

**Rota**: `/ngo/explorar/mapa`
**Perfil**: NGO (principal), ADMIN
**Objetivo**: Visualização geográfica de doações e lotes disponíveis.

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Mapa de Doações                                 │
│          ├──────────────────────────────────────────────────┤
│          │  FILTROS (barra horizontal)                      │
│          │  [Tipo ▼] [Distância ▼] [Volume ▼] [Urgência ▼] │
│          │                                                   │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │                                             │ │
│          │  │     MAPA INTERATIVO (Google Maps / Leaflet) │ │
│          │  │                                             │ │
│          │  │   📍 [verde] = Doação simples disponível    │ │
│          │  │   📦 [azul]  = Lote disponível              │ │
│          │  │   ⚡ [laranja]= Urgente (vence hoje)        │ │
│          │  │   ✓  [cinza] = Já reivindicado              │ │
│          │  │                                             │ │
│          │  │   [Minha localização: ●]                    │ │
│          │  │                                             │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  PAINEL LATERAL (ao clicar em um pin)           │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 20 marmitas · Restaurante Bom Sabor      │ │
│          │  │ 2.3 km · Validade: hoje ⚡                  │ │
│          │  │ Limite: 5/ONG · 2 vagas restantes           │ │
│          │  │ [DISPONÍVEL ●]                              │ │
│          │  │ [Ver detalhes →]  [Reivindicar →]           │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

**Comportamentos**:
- Clique em pin: abre painel lateral com resumo
- Duplo clique: abre tela de detalhe completa
- Filtros atualizam pins em tempo real
- Botão "Minha localização" centraliza o mapa
- Pins agrupados (cluster) quando muito próximos

**Mobile**: Mapa ocupa tela inteira. Filtros em sheet deslizante de baixo. Pin selecionado abre card na parte inferior.

---

## TELA 24 — Lista de Doações (NGO — Explorar)

**Rota**: `/ngo/explorar/lista`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Explorar Doações    [Lista] [🗺️ Mapa]           │
│          ├──────────────────────────────────────────────────┤
│          │  [🔍 Buscar por tipo de alimento...  ]           │
│          │  Filtros: [Tipo ▼] [Distância ▼] [Volume ▼]     │
│          │                                                   │
│          │  ⭐ RECOMENDADAS PARA VOCÊ                       │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🍽️ 20 marmitas · 2.3 km · Validade: HOJE ⚡  │ │
│          │  │ Restaurante Bom Sabor · Limite: 5/ONG       │ │
│          │  │ [DISPONÍVEL ●]          [Reivindicar →]      │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  TODAS AS DOAÇÕES (ordenadas por distância)      │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 🌽 800 kg Milho · 8.1 km · Coleta: 10/03   │ │
│          │  │ Fazenda São João · Limite: 100 kg/ONG       │ │
│          │  │ [PARCIALMENTE ●]        [Reivindicar →]      │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍞 50 pães · 3.7 km · Validade: amanhã      │ │
│          │  │ Padaria Central · Limite: 10/ONG            │ │
│          │  │ [DISPONÍVEL ●]          [Reivindicar →]      │ │
│          │  ├─────────────────────────────────────────────┤ │
│          │  │ 🍌 200 cx Banana · 15 km · Coleta: 12/03   │ │
│          │  │ CEASA Regional · Limite: 20 cx/ONG          │ │
│          │  │ [DISPONÍVEL ●]          [Reivindicar →]      │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 25 — Métricas de Impacto (Todos os Perfis)

**Rota**: `/:perfil/impacto`
**Objetivo**: Mostrar o impacto gerado pelo usuário/organização e o impacto global da plataforma.

### Versão DONOR

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Meu Impacto                                     │
│          ├──────────────────────────────────────────────────┤
│          │  "Obrigado, Restaurante Bom Sabor! 🌱"           │
│          │                                                   │
│          │  SEU IMPACTO TOTAL                               │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│          │  │ 847      │ │ 423 kg   │ │ 1.2 t    │         │
│          │  │ Refeições│ │ alimentos│ │ CO2      │         │
│          │  │ geradas  │ │ doados   │ │ evitado  │         │
│          │  └──────────┘ └──────────┘ └──────────┘         │
│          │                                                   │
│          │  EVOLUÇÃO MENSAL                                 │
│          │  Gráfico de barras: refeições geradas por mês    │
│          │  (últimos 6 meses)                               │
│          │                                                   │
│          │  DOAÇÕES POR CATEGORIA                           │
│          │  Gráfico de pizza: Refeições | Padaria | Outros  │
│          │                                                   │
│          │  ONGs ATENDIDAS                                  │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ ONG Esperança · 12 coletas · 240 refeições  │ │
│          │  │ ONG Vida Nova · 8 coletas · 160 refeições   │ │
│          │  │ ONG Renascer · 5 coletas · 100 refeições    │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  IMPACTO GLOBAL DA PLATAFORMA                   │
│          │  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│          │  │ 1.2M     │ │ 340 t    │ │ 820 ONGs │         │
│          │  │ Refeições│ │ recuper. │ │ ativas   │         │
│          │  └──────────┘ └──────────┘ └──────────┘         │
└──────────┴──────────────────────────────────────────────────┘
```

### Versão ADMIN — Métricas Globais

**Rota**: `/admin/metricas`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Métricas Globais                                │
│          ├──────────────────────────────────────────────────┤
│          │  Período: [Últimos 30 dias ▼]  [Exportar CSV]   │
│          │                                                   │
│          │  KPIs PRINCIPAIS                                 │
│          │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│          │  │ 1.2M │ │ 340t │ │ 820  │ │ 89   │ │ 4.2t │  │
│          │  │ Refeç│ │ Recup│ │ ONGs │ │ Doad.│ │ CO2  │  │
│          │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │
│          │                                                   │
│          │  DOAÇÕES POR PERÍODO                             │
│          │  Gráfico de linha: publicadas vs concluídas      │
│          │                                                   │
│          │  IMPACTO POR REGIÃO                              │
│          │  Mapa de calor: concentração de doações por UF   │
│          │                                                   │
│          │  TOP DOADORES DO MÊS                             │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 1. Restaurante Bom Sabor · 120 doações      │ │
│          │  │ 2. CEASA Regional · 15 lotes · 12t          │ │
│          │  │ 3. Padaria Central · 89 doações             │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  TOP ONGs DO MÊS                                 │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ 1. ONG Esperança · 240 coletas · 4.800 ref. │ │
│          │  │ 2. ONG Vida Nova · 180 coletas · 3.600 ref. │ │
│          │  └─────────────────────────────────────────────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 26 — Gestão de Usuários (ADMIN)

**Rota**: `/admin/usuarios`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Usuários                                        │
│          ├──────────────────────────────────────────────────┤
│          │  [🔍 Buscar por nome, e-mail ou CNPJ...]         │
│          │  Filtros: [Perfil ▼] [Status ▼]                  │
│          │                                                   │
│          │  ⚠️ PENDENTES DE VERIFICAÇÃO (4)                 │
│          │  ┌─────────────────────────────────────────────┐ │
│          │  │ ONG Vida Nova · NGO · Cadastro: 05/03       │ │
│          │  │ [Ver documentos]  [Aprovar ✓]  [Rejeitar ✕] │ │
│          │  └─────────────────────────────────────────────┘ │
│          │                                                   │
│          │  TODOS OS USUÁRIOS                               │
│          │  ┌──────┬────────────────┬──────┬───────┬──────┐ │
│          │  │ Nome │ Organização    │Perfil│Status │Ações │ │
│          │  ├──────┼────────────────┼──────┼───────┼──────┤ │
│          │  │ João │ Rest. Bom Sabor│DONOR │Ativo  │[Ver] │ │
│          │  │ Maria│ Fazenda S.João │PROD. │Ativo  │[Ver] │ │
│          │  │ ONG  │ ONG Esperança  │NGO   │Ativo  │[Ver] │ │
│          │  └──────┴────────────────┴──────┴───────┴──────┘ │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 27 — Perfil do Usuário

**Rota**: `/:perfil/perfil`

```
┌──────────┬──────────────────────────────────────────────────┐
│ SIDEBAR  │  Meu Perfil                                      │
│          ├──────────────────────────────────────────────────┤
│          │                                                   │
│          │  [Avatar/Logo da organização]  [Alterar foto]    │
│          │                                                   │
│          │  DADOS DA ORGANIZAÇÃO                            │
│          │  Nome: Restaurante Bom Sabor           [Editar]  │
│          │  CNPJ: 12.345.678/0001-99                        │
│          │  Endereço: Rua das Flores, 123 — SP    [Editar]  │
│          │  Telefone: (11) 3333-4444               [Editar]  │
│          │  E-mail: contato@bomsabor.com.br        [Editar]  │
│          │                                                   │
│          │  CONFIGURAÇÕES DE NOTIFICAÇÃO                    │
│          │  ☑ Notificar por e-mail quando ONG reivindicar   │
│          │  ☑ Notificar por push (navegador)                │
│          │  ☐ Resumo diário por e-mail                      │
│          │                                                   │
│          │  SEGURANÇA                                       │
│          │  [Alterar senha]  [Encerrar todas as sessões]    │
│          │                                                   │
│          │  ZONA DE PERIGO                                  │
│          │  [Desativar conta]                               │
└──────────┴──────────────────────────────────────────────────┘
```

---

## TELA 28 — Notificações

**Componente**: Painel deslizante (drawer) acessível pelo ícone 🔔 na topbar.

```
┌─────────────────────────────────────────────────────────────┐
│  Notificações                              [Marcar todas ✓] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HOJE                                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🤝 ONG Esperança reivindicou 5 marmitas             │   │
│  │ há 10 minutos · [Ver doação]                        │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ ⭐ Nova doação recomendada para você!               │   │
│  │ 20 marmitas a 2.3 km · há 30 min · [Ver]           │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ ✅ Coleta confirmada pela ONG Vida Nova             │   │
│  │ 50 kg de milho coletados · há 2h                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ONTEM                                                      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ⚠️ Sua doação de 5L de leite expirou sem coleta     │   │
│  │ [Republicar doação]                                 │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 29 — Estado Vazio (Empty States)

### Empty State: Nenhuma Doação Publicada (DONOR)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              📦  (ilustração: caixa vazia)                  │
│                                                              │
│  "Você ainda não publicou nenhuma doação"                   │
│                                                              │
│  Comece agora e ajude ONGs próximas a você.                │
│                                                              │
│  [+ Publicar minha primeira doação]                         │
└─────────────────────────────────────────────────────────────┘
```

### Empty State: Nenhuma Doação Disponível (NGO)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              🗺️  (ilustração: mapa sem pins)                │
│                                                              │
│  "Nenhuma doação disponível na sua região"                  │
│                                                              │
│  Tente aumentar o raio de busca ou remova os filtros.      │
│                                                              │
│  [Ampliar raio de busca]   [Limpar filtros]                │
└─────────────────────────────────────────────────────────────┘
```

### Empty State: Nenhum Voluntário Cadastrado (NGO)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              👥  (ilustração: silhuetas)                    │
│                                                              │
│  "Nenhum voluntário cadastrado"                             │
│                                                              │
│  Cadastre voluntários para associá-los às coletas.         │
│                                                              │
│  [+ Cadastrar primeiro voluntário]                          │
└─────────────────────────────────────────────────────────────┘
```

---

## TELA 30 — Recuperar Senha

**Rota**: `/recuperar-senha`

```
┌─────────────────────────────────────────────────────────────┐
│  ← Voltar ao login                                          │
│                                                              │
│  "Recuperar senha"                                          │
│                                                              │
│  Informe o e-mail cadastrado e enviaremos um link           │
│  para redefinir sua senha.                                  │
│                                                              │
│  [E-mail*                               ]                   │
│                                                              │
│  [Enviar link de recuperação]                               │
│                                                              │
│  ─────────────────────────────────────────────────         │
│                                                              │
│  (Após envio)                                               │
│  ✉️ "E-mail enviado! Verifique sua caixa de entrada."       │
└─────────────────────────────────────────────────────────────┘
```
