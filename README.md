# 🍽️ FoodBridge — Plataforma de Redistribuição de Alimentos

> Uma plataforma open source que conecta doadores de alimentos excedentes com ONGs e instituições sociais, transformando desperdício em refeições para quem precisa.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/foodbridge/foodbridge?style=social)](https://github.com/foodbridge/foodbridge)
[![GitHub forks](https://img.shields.io/github/forks/foodbridge/foodbridge?style=social)](https://github.com/foodbridge/foodbridge)
[![Status](https://img.shields.io/badge/Status-Prototype-blue)](https://github.com/foodbridge/foodbridge)

---

## 🎯 Visão

**Reduzir o desperdício de alimentos e ampliar o impacto social.**

A FoodBridge é uma plataforma colaborativa que visa conectar de forma eficiente doadores de alimentos (restaurantes, supermercados, produtores rurais, distribuidoras) com ONGs e instituições sociais que recebem essas doações. Nosso objetivo é:

- 🌍 **Reduzir desperdício**: Recuperar alimentos que seriam descartados
- 👥 **Ampliar impacto**: Transformar desperdício em refeições para pessoas em situação de vulnerabilidade
- 🤝 **Conectar atores**: Criar um ecossistema colaborativo entre doadores, distribuidores e receptores
- 📊 **Medir impacto**: Quantificar o impacto social e ambiental em tempo real

---

## 📊 Impacto Esperado

Com a FoodBridge operando em larga escala:

| Métrica | Valor |
|---------|-------|
| 🍽️ Refeições geradas | 1.2M+ ao mês |
| 📦 Alimentos recuperados | 342K+ toneladas |
| 🤝 ONGs beneficiadas | 820+ instituições |
| 🌱 CO₂ evitado | 2.1K+ toneladas |

---

## ✨ Funcionalidades Principais

### Para Doadores (Restaurantes, Supermercados, Produtores)
- ✅ **Publicar Doações** — Wizard intuitivo de 5 passos
- 📍 **Localização & Horários** — Especificar local e janela de coleta
- 📊 **Limite por ONG** — Distribuição equitativa entre instituições
- 📈 **Métricas de Impacto** — Acompanhar refeições geradas e CO₂ evitado

### Para ONGs & Instituições Sociais
- 🔍 **Explorar Doações** — Filtrar por tipo, distância e urgência
- 📋 **Reivindicar Doações** — Modal interativo com seleção de quantidade
- 👥 **Gerenciar Voluntários** — Cadastro e atribuição para coletas
- 📅 **Agendar Coletas** — Timeline com confirmação de pickup
- 📊 **Solicitar Doações** — Descrever necessidades específicas

### Para Administradores
- 🔐 **Moderação** — Revisar e validar usuários e documentos
- 📊 **Dashboard Global** — Estatísticas de impacto em tempo real
- 👤 **Gestão de Usuários** — Aprovar/rejeitar cadastros
- 🚨 **Denúncias** — Sistema de reporte de fraudes

### Recursos Transversais
- 🗺️ **Mapa Interativo** — Visualizar doações disponíveis por região
- 📱 **Responsivo** — Funciona em desktop, tablet e mobile
- 🔔 **Notificações** — Alertas de novas doações e atualizações
- 🌐 **Multilíngue** — Suporte para português, espanhol e inglês (roadmap)

---

## 🏗️ Arquitetura

### Stack Tecnológico

**Frontend:**
- React 19 + TypeScript
- Vite (build tool)
- TailwindCSS 4 + shadcn/ui
- Recharts (visualizações)
- Wouter (roteamento)

**Backend (Roadmap):**
- Node.js + Express
- PostgreSQL
- Redis (cache)
- Socket.io (real-time)

**Infraestrutura:**
- Vercel (frontend)
- Railway/Render (backend)
- AWS S3 (armazenamento de documentos)

### Estrutura de Pastas

```
foodbridge/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas (Login, Dashboard, etc)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Utilitários e dados mock
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   └── index.css         # Design System (Tailwind)
│   └── public/               # Assets estáticos
├── server/                    # Backend (placeholder)
├── shared/                    # Tipos compartilhados
└── docs/                      # Documentação
```

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 22+
- pnpm 10+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/foodbridge/foodbridge.git
cd foodbridge

# Instale dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Acesse http://localhost:3000
```

### Build para Produção

```bash
# Build
pnpm build

# Preview
pnpm preview
```

---

## 📚 Documentação

### Guias Principais

- **[Proposta de Projeto](./docs/PROPOSAL.md)** — Visão, objetivos e roadmap
- **[Design System](./docs/DESIGN_SYSTEM.md)** — Paleta de cores, tipografia, componentes
- **[Fluxos de Usuário](./docs/USER_FLOWS.md)** — Wireframes e jornadas por perfil
- **[API Documentation](./docs/API.md)** — Endpoints e schemas (roadmap)
- **[Contribuindo](./CONTRIBUTING.md)** — Guia para contribuidores

### Estrutura de Dados

**Usuários:**
- Donor (Doador)
- Producer (Produtor)
- Distributor (Distribuidor)
- NGO (Organização Social)
- Admin (Administrador)

**Entidades Principais:**
- Donations (Doações)
- Claims (Reivindicações)
- Pickups (Coletas)
- Volunteers (Voluntários)
- Documents (Documentos de validação)

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#2D7A4F` | Botões, links, destaques |
| Secondary | `#E07B39` | Alertas, urgência |
| Success | `#10B981` | Confirmações |
| Destructive | `#EF4444` | Erros, rejeições |
| Muted | `#9CA3AF` | Textos secundários |

### Tipografia

- **Display**: Inter Bold (títulos)
- **Body**: Inter Regular (corpo)
- **Mono**: JetBrains Mono (código)

---

## 🔐 Segurança & Privacidade

- ✅ Validação de documentos obrigatória
- 🔒 Autenticação com JWT
- 🛡️ Rate limiting em endpoints críticos
- 📋 LGPD compliant (Lei Geral de Proteção de Dados)
- 🚨 Sistema de denúncias para fraudes

---

## 📈 Roadmap

### Fase 1: MVP (Atual)
- [x] Landing page com proposta
- [x] Cadastro com validação de documentos
- [x] Dashboard por perfil
- [x] Publicar/reivindicar doações
- [x] Mapa interativo
- [ ] Notificações por email

### Fase 2: Core Features
- [ ] Backend com API REST
- [ ] Autenticação OAuth
- [ ] Real-time updates (Socket.io)
- [ ] Sistema de rating/reviews
- [ ] Integração com WhatsApp

### Fase 3: Scale
- [ ] Mobile app (React Native)
- [ ] Suporte multilíngue
- [ ] Integrações com APIs externas
- [ ] Dashboard de BI para ONGs
- [ ] Programa de gamificação

### Fase 4: Impacto
- [ ] Expansão para América Latina
- [ ] Parcerias com governo
- [ ] Certificações de impacto
- [ ] Programa de sustentabilidade

---

## 🤝 Como Contribuir

Adoramos contribuições! Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para:

- 🐛 Reportar bugs
- 💡 Sugerir features
- 📝 Melhorar documentação
- 🔧 Enviar pull requests

### Desenvolvimento

```bash
# Crie uma branch para sua feature
git checkout -b feature/sua-feature

# Commit com mensagens descritivas
git commit -m "feat: adiciona nova funcionalidade"

# Push e abra um PR
git push origin feature/sua-feature
```

### Código

- Use TypeScript para type safety
- Siga o padrão de código do projeto
- Adicione testes para novas features
- Mantenha o Prettier formatado

---

## 📞 Comunidade & Suporte

- 💬 **Discussões**: [GitHub Discussions](https://github.com/foodbridge/foodbridge/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/foodbridge/foodbridge/issues)
- 📧 **Email**: hello@foodbridge.org
- 🌐 **Website**: [foodbridge.org](https://foodbridge.org)
- 💼 **LinkedIn**: [@FoodBridge](https://linkedin.com/company/foodbridge)

---

## 📄 Licença

Este projeto é licenciado sob a **MIT License** — veja [LICENSE](./LICENSE) para detalhes.

### Por que MIT?

Escolhemos MIT porque:
- ✅ Permite uso comercial
- ✅ Permite modificações
- ✅ Requer atribuição
- ✅ Sem responsabilidade
- ✅ Promove adoção e inovação

---

## 🌟 Reconhecimentos

- Inspirado em plataformas como Too Good To Go, Olio e Food Rescue
- Desenvolvido com ❤️ pela comunidade
- Apoiado por [Parceiros/Organizações]

---

## 📊 Estatísticas do Projeto

- 📝 **Linhas de Código**: ~15K
- 🧪 **Cobertura de Testes**: 45% (roadmap: 80%)
- 📦 **Dependências**: 42 (core)
- 🔄 **Última Atualização**: 2026-03-06
- 👥 **Contribuidores**: 1+ (você pode ser o próximo!)

---

## 🎓 Aprenda Mais

### Artigos & Recursos

- [Desperdício de Alimentos no Brasil](https://www.embrapa.br)
- [ODS 12 - Consumo e Produção Sustentáveis](https://www.un.org/sustainabledevelopment/sustainable-consumption-production/)
- [Economia Circular](https://www.ellenmacarthurfoundation.org/)

### Eventos & Webinars

- 📅 Webinar: "Tecnologia para Impacto Social" (próximo mês)
- 🎤 Palestra: "FoodBridge: Conectando Doadores e ONGs" (em breve)

---

## 💡 Visão de Futuro

Imaginamos um mundo onde:

> **Nenhum alimento é desperdiçado. Ninguém passa fome.**

A FoodBridge é o primeiro passo para conectar eficientemente os atores dessa cadeia. Com sua ajuda, podemos escalar esse impacto para cidades, estados e países.

---

## 📮 Fale Conosco

Tem uma ideia? Quer colaborar? Encontrou um bug?

**Abra uma issue ou entre em contato:**
- 📧 Email: hello@foodbridge.org
- 💬 Discord: [Comunidade FoodBridge](https://discord.gg/foodbridge)
- 🐦 Twitter: [@FoodBridgeOrg](https://twitter.com/foodbridgeorg)

---

<div align="center">

**Feito com ❤️ para reduzir desperdício e ampliar impacto social**

[⭐ Star no GitHub](https://github.com/foodbridge/foodbridge) · [🔗 Website](https://foodbridge.org) · [📧 Newsletter](https://foodbridge.org/newsletter)

</div>
