# 🍽️ FoodBridge — Plataforma de Redistribuição de Alimentos

> Uma plataforma open source que conecta doadores de alimentos excedentes com organizações sociais, transformando desperdício alimentar em refeições para pessoas em situação de vulnerabilidade.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Prototype-blue)](https://github.com/foodbridge/foodbridge)

---

## 🎯 Propósito

A FoodBridge é um projeto de código aberto desenvolvido com o objetivo de **reduzir o desperdício de alimentos e ampliar o impacto social**. Não é um projeto comercial ou com fins lucrativos. É uma iniciativa comunitária para conectar de forma eficiente:

- **Doadores** (restaurantes, supermercados, produtores rurais, distribuidoras)
- **Receptores** (organizações sociais, ONGs, instituições de caridade)

Nosso compromisso é criar uma ferramenta acessível, transparente e focada exclusivamente no bem social.

---

## 🌍 Problema que Abordamos

Globalmente, aproximadamente **um terço de toda a comida produzida é desperdiçada**, enquanto milhões de pessoas enfrentam insegurança alimentar. Simultaneamente, muitas organizações sociais têm dificuldade em acessar alimentos nutritivos de forma consistente.

A FoodBridge busca criar um **elo direto e eficiente** entre essas duas realidades, permitindo que alimentos que seriam descartados cheguem a quem realmente precisa.

---

## ✨ Funcionalidades Principais

### Para Doadores
- Publicar alimentos disponíveis para doação
- Especificar quantidade, tipo e condições de coleta
- Acompanhar o impacto social de suas doações
- Conectar diretamente com organizações receptoras

### Para Organizações Sociais
- Explorar alimentos disponíveis em sua região
- Reivindicar doações conforme necessidade
- Descrever demandas específicas de alimentos
- Agendar coletas com transparência
- Gerenciar voluntários para operações de pickup

### Para Administradores
- Moderar cadastros e validar documentos
- Acompanhar métricas de impacto
- Gerenciar denúncias de fraude
- Manter a integridade da plataforma

### Recursos Transversais
- Mapa interativo para visualizar doações por região
- Interface responsiva (desktop, tablet, mobile)
- Sistema de notificações
- Rastreamento transparente de impacto

---

## 🏗️ Arquitetura Técnica

### Stack Frontend
- React 19 + TypeScript
- Vite (ferramenta de build)
- TailwindCSS 4 + shadcn/ui
- Recharts (visualizações de dados)
- Wouter (roteamento)

### Stack Backend (Planejado)
- Node.js + Express
- PostgreSQL
- Redis (cache)
- Socket.io (atualizações em tempo real)

### Infraestrutura
- Hospedagem em plataforma open source friendly
- Armazenamento seguro de documentos
- Conformidade com LGPD

### Estrutura de Pastas

```
foodbridge/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas principais
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Utilitários
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   └── index.css         # Design System
│   └── public/               # Assets estáticos
├── server/                    # Backend (em desenvolvimento)
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
pnpm build
pnpm preview
```

---

## 📚 Documentação

### Guias Principais

- **[Fluxos de Usuário](./docs/USER_FLOWS.md)** — Jornadas por perfil
- **[Design System](./docs/DESIGN_SYSTEM.md)** — Paleta, tipografia, componentes
- **[Arquitetura](./docs/ARCHITECTURE.md)** — Decisões técnicas
- **[Contribuindo](./CONTRIBUTING.md)** — Como colaborar

### Estrutura de Dados Principais

**Perfis de Usuário:**
- Doador
- Produtor
- Distribuidor
- Organização Social
- Administrador

**Entidades:**
- Doações
- Reivindicações
- Coletas Agendadas
- Voluntários
- Documentos de Validação

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#2D7A4F` | Ações principais, destaques |
| Secondary | `#E07B39` | Alertas, urgência |
| Success | `#10B981` | Confirmações |
| Destructive | `#EF4444` | Erros |
| Muted | `#9CA3AF` | Textos secundários |

### Tipografia

- **Display**: Inter Bold
- **Body**: Inter Regular
- **Mono**: JetBrains Mono

---

## 🔐 Segurança & Privacidade

- Validação obrigatória de documentos
- Autenticação segura
- Proteção contra fraudes
- Conformidade com LGPD (Lei Geral de Proteção de Dados)
- Dados pessoais protegidos
- Transparência nas operações

---

## 📈 Visão de Futuro

### Fase 1: MVP (Atual)
- [x] Landing page
- [x] Cadastro com validação
- [x] Dashboards por perfil
- [x] Publicar/reivindicar doações
- [x] Mapa interativo
- [ ] Notificações por email

### Fase 2: Core Features
- [ ] Backend com API REST
- [ ] Autenticação robusta
- [ ] Atualizações em tempo real
- [ ] Sistema de avaliações
- [ ] Integrações com WhatsApp

### Fase 3: Expansão
- [ ] Aplicativo mobile
- [ ] Suporte multilíngue
- [ ] Dashboard de impacto
- [ ] Programa de gamificação

### Fase 4: Impacto em Escala
- [ ] Expansão regional
- [ ] Parcerias com instituições públicas
- [ ] Certificações de impacto social
- [ ] Sustentabilidade operacional

---

## 🤝 Como Contribuir

Este projeto depende de contribuições voluntárias. Você pode ajudar de várias formas:

### Reportar Problemas
Se encontrar um bug ou tiver uma sugestão, abra uma [issue](https://github.com/foodbridge/foodbridge/issues) descrevendo:
- O que aconteceu
- Como reproduzir
- Resultado esperado
- Seu ambiente

### Contribuir com Código
Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para:
- Padrões de código
- Processo de desenvolvimento
- Como enviar pull requests
- Diretrizes de qualidade

### Melhorar Documentação
Documentação clara é essencial. Você pode:
- Corrigir erros
- Melhorar clareza
- Adicionar exemplos
- Traduzir para outros idiomas

### Divulgar
Ajude a comunidade conhecendo o projeto:
- Compartilhe em redes sociais
- Fale sobre em comunidades relevantes
- Convide outras pessoas a contribuir

---

## 📋 Princípios do Projeto

1. **Foco Social Puro** — Sem fins lucrativos, sem ganho pessoal
2. **Transparência Total** — Código aberto, decisões públicas
3. **Acessibilidade** — Ferramenta gratuita e fácil de usar
4. **Eficiência** — Reduzir desperdício, maximizar impacto
5. **Comunidade** — Desenvolvido por e para a comunidade
6. **Sustentabilidade** — Pensando no longo prazo

---

## 📄 Licença

Este projeto é licenciado sob a **MIT License**. Veja [LICENSE](./LICENSE) para detalhes.

A MIT License foi escolhida porque:
- Permite uso livre
- Permite modificações
- Promove adoção e inovação
- Mantém a transparência
- Sem restrições comerciais

---

## 📞 Comunidade

- **GitHub Issues** — Reporte bugs e sugira features
- **GitHub Discussions** — Converse com a comunidade
- **Documentação** — Leia os guias disponíveis

---

## 🌟 Agradecimentos

Este projeto é inspirado em iniciativas globais de redução de desperdício alimentar e foi desenvolvido com o compromisso de servir exclusivamente ao bem social.

Agradecemos a todos que acreditam que é possível conectar doadores e receptores de forma eficiente, reduzindo desperdício e salvando vidas.

---

## 📊 Métricas de Impacto

O sucesso da FoodBridge será medido por:

- Quantidade de alimentos recuperados
- Número de pessoas beneficiadas
- Organizações sociais ativas
- Redução de desperdício
- Engajamento comunitário

---

## ⚖️ Responsabilidade Social

A FoodBridge é um projeto de responsabilidade social. Nosso compromisso é:

- Manter a plataforma acessível e gratuita
- Proteger dados pessoais
- Combater fraudes
- Garantir transparência
- Servir exclusivamente ao bem social

---

<div align="center">

**Feito com ❤️ para reduzir desperdício e ampliar impacto social**

[⭐ Star no GitHub](https://github.com/foodbridge/foodbridge) · [📖 Documentação](./docs)

</div>
