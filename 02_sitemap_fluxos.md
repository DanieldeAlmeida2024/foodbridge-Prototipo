# FoodBridge — Sitemap e Fluxos de Navegação

## 1. Sitemap Completo

```
FoodBridge
│
├── 🌐 Área Pública
│   ├── Landing Page (/)
│   ├── Login (/login)
│   ├── Cadastro (/cadastro)
│   │   ├── Escolha de Perfil
│   │   ├── Dados da Organização
│   │   └── Verificação de Conta
│   └── Recuperar Senha (/recuperar-senha)
│
├── 🍽️ DONOR (/donor)
│   ├── Dashboard (/donor/dashboard)
│   ├── Minhas Doações (/donor/doacoes)
│   │   ├── Nova Doação (/donor/doacoes/nova)
│   │   ├── Detalhe da Doação (/donor/doacoes/:id)
│   │   └── Duplicar Doação (ação inline)
│   ├── Histórico (/donor/historico)
│   ├── Impacto (/donor/impacto)
│   └── Perfil (/donor/perfil)
│
├── 🌾 PRODUCER (/producer)
│   ├── Dashboard (/producer/dashboard)
│   ├── Meus Lotes (/producer/lotes)
│   │   ├── Novo Lote (/producer/lotes/novo)
│   │   ├── Detalhe do Lote (/producer/lotes/:id)
│   │   └── Gestão de Fracionamento (/producer/lotes/:id/fracionamento)
│   ├── Previsões de Excedente (/producer/previsoes)
│   ├── Histórico (/producer/historico)
│   └── Perfil (/producer/perfil)
│
├── 🏭 DISTRIBUTOR (/distributor)
│   ├── Dashboard (/distributor/dashboard)
│   ├── Meus Lotes (/distributor/lotes)
│   │   ├── Novo Lote (/distributor/lotes/novo)
│   │   ├── Detalhe do Lote (/distributor/lotes/:id)
│   │   └── Gestão de Fracionamento (/distributor/lotes/:id/fracionamento)
│   ├── Janelas de Coleta (/distributor/coletas)
│   ├── Histórico (/distributor/historico)
│   └── Perfil (/distributor/perfil)
│
├── 🤝 NGO (/ngo)
│   ├── Dashboard (/ngo/dashboard)
│   ├── Explorar Doações (/ngo/explorar)
│   │   ├── Lista de Doações (/ngo/explorar/lista)
│   │   ├── Mapa (/ngo/explorar/mapa)
│   │   └── Detalhe da Doação (/ngo/explorar/:id)
│   ├── Minhas Requisições (/ngo/requisicoes)
│   │   ├── Solicitar Doação (modal/drawer)
│   │   └── Detalhe da Requisição (/ngo/requisicoes/:id)
│   ├── Coletas Agendadas (/ngo/coletas)
│   │   └── Detalhe da Coleta (/ngo/coletas/:id)
│   ├── Voluntários (/ngo/voluntarios)
│   │   ├── Cadastrar Voluntário (/ngo/voluntarios/novo)
│   │   └── Detalhe do Voluntário (/ngo/voluntarios/:id)
│   ├── Impacto (/ngo/impacto)
│   └── Perfil (/ngo/perfil)
│
└── 🔧 ADMIN (/admin)
    ├── Dashboard (/admin/dashboard)
    ├── Usuários (/admin/usuarios)
    │   ├── Lista de Usuários
    │   ├── Detalhe/Edição de Usuário
    │   └── Verificação Pendente
    ├── Doações (/admin/doacoes)
    │   ├── Todas as Doações
    │   └── Moderação
    ├── Lotes (/admin/lotes)
    ├── Métricas (/admin/metricas)
    │   ├── Impacto Global
    │   └── Por Região
    ├── Configurações (/admin/configuracoes)
    └── Logs (/admin/logs)
```

---

## 2. Fluxo de Onboarding (Todos os Perfis)

```
[Landing Page]
      │
      ▼
[Clique em "Cadastrar"]
      │
      ▼
[Escolha de Perfil]
  ┌───┴────────────────────────────┐
  │  Restaurante/Padaria/Mercado   │ → DONOR
  │  Produtor Rural                │ → PRODUCER
  │  Distribuidor Atacadista       │ → DISTRIBUTOR
  │  ONG / Instituição Social      │ → NGO
  └────────────────────────────────┘
      │
      ▼
[Dados da Organização]
  • Nome da organização
  • CNPJ / CPF
  • Endereço completo
  • Telefone de contato
  • E-mail
  • Senha
      │
      ▼
[Verificação por E-mail]
  • Link de confirmação enviado
  • Tela de "aguardando verificação"
      │
      ▼
[Conta Verificada → Dashboard do Perfil]
```

---

## 3. Fluxo DONOR — Publicar Doação

```
[Dashboard DONOR]
      │
      ▼
[Botão "Nova Doação" (CTA principal)]
      │
      ▼
[Passo 1: Tipo de Alimento]
  • Campo de busca/seleção
  • Categorias: Refeições prontas | Padaria | Hortifrúti | Laticínios | Outros
      │
      ▼
[Passo 2: Quantidade e Validade]
  • Quantidade (número + unidade: unidades / kg / litros)
  • Data de validade ou "sem validade definida"
      │
      ▼
[Passo 3: Limite por ONG]
  • Limite máximo por ONG (campo numérico)
  • Explicação inline: "Evita concentração, distribui melhor"
      │
      ▼
[Passo 4: Local e Janela de Coleta]
  • Endereço de retirada (pré-preenchido com cadastro)
  • Data e horário de início / fim da janela
      │
      ▼
[Passo 5: Revisão e Publicação]
  • Resumo de todos os campos
  • Botão "Publicar Doação"
      │
      ▼
[Confirmação: "Doação publicada!"]
  • Opção: "Publicar outra" | "Ver minhas doações"
```

---

## 4. Fluxo PRODUCER / DISTRIBUTOR — Publicar Lote

```
[Dashboard PRODUCER/DISTRIBUTOR]
      │
      ▼
[Botão "Novo Lote"]
      │
      ▼
[Passo 1: Tipo de Alimento e Descrição]
  • Tipo (Hortifrúti | Grãos | Industrializados | Outros)
  • Descrição livre
      │
      ▼
[Passo 2: Volume Total]
  • Quantidade total (kg / caixas / pallets)
  • Número de caixas ou pallets (DISTRIBUTOR)
  • Previsão de colheita (PRODUCER)
      │
      ▼
[Passo 3: Limite por ONG]
  • Quantidade máxima por ONG
  • Visualização: "Até X ONGs podem reivindicar"
      │
      ▼
[Passo 4: Local e Janelas de Coleta]
  • Endereço de retirada
  • Múltiplas janelas de coleta (adicionar/remover)
      │
      ▼
[Passo 5: Revisão e Publicação]
  • Resumo completo
  • Botão "Publicar Lote"
      │
      ▼
[Confirmação: "Lote publicado!"]
```

---

## 5. Fluxo NGO — Reivindicar Doação

```
[Dashboard NGO]
      │
      ▼
[Seção "Doações Disponíveis Próximas" ou "Explorar"]
      │
      ▼
[Lista / Mapa de Doações]
  • Filtros: tipo | distância | volume | urgência
      │
      ▼
[Detalhe da Doação]
  • Tipo, quantidade total
  • Quantidade disponível
  • ⚠️ Limite por ONG: X unidades
  • Janela de coleta
  • Endereço do doador
      │
      ▼
[Solicitar Quantidade]
  • Input: "Quantas unidades deseja? (máx: X)"
  • Validação em tempo real
      │
      ▼
[Agendar Retirada]
  • Escolha de janela disponível
  • Atribuir voluntário (opcional)
      │
      ▼
[Confirmação da Requisição]
  • Status: PICKUP_SCHEDULED
  • Notificação enviada ao doador
```

---

## 6. Fluxo NGO — Gestão de Voluntários

```
[Seção Voluntários]
      │
      ├── [Cadastrar Voluntário]
      │       • Nome, telefone, e-mail
      │       • ⚠️ Aviso: "A ONG é responsável por seus voluntários.
      │         A FoodBridge não se responsabiliza por voluntários."
      │       • Confirmar cadastro
      │
      └── [Associar a Coleta]
              • Selecionar coleta agendada
              • Selecionar voluntário da lista
              • Confirmar associação
```

---

## 7. Fluxo ADMIN — Moderação

```
[Dashboard ADMIN]
      │
      ├── [Usuários Pendentes de Verificação]
      │       • Ver documentos enviados
      │       • Aprovar / Rejeitar (com motivo)
      │
      ├── [Doações/Lotes Reportados]
      │       • Ver denúncia
      │       • Remover / Manter
      │
      └── [Métricas Globais]
              • Toneladas redistribuídas
              • ONGs ativas
              • Doadores ativos
              • CO2 evitado
```

---

## 8. Navegação Global (Nav Principal)

### Desktop — Sidebar Lateral
| Ícone | Item | Visível para |
|---|---|---|
| 🏠 | Dashboard | Todos |
| ➕ | Nova Doação / Novo Lote | DONOR, PRODUCER, DISTRIBUTOR |
| 📋 | Minhas Doações / Lotes | DONOR, PRODUCER, DISTRIBUTOR |
| 🔍 | Explorar | NGO |
| 📦 | Requisições | NGO |
| 🚗 | Coletas | NGO |
| 👥 | Voluntários | NGO |
| 🗺️ | Mapa | NGO, ADMIN |
| 📊 | Impacto | Todos |
| 👤 | Perfil | Todos |
| ⚙️ | Admin | ADMIN |

### Mobile — Bottom Navigation (5 itens máx.)
| Item | Perfil |
|---|---|
| Home / Dashboard | Todos |
| Publicar / Explorar | Doadores / NGO |
| Mapa | NGO |
| Coletas | NGO |
| Perfil | Todos |
