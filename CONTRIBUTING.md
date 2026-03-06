# 🤝 Guia de Contribuição — FoodBridge

Obrigado por considerar contribuir para a FoodBridge! Este documento fornece diretrizes e instruções para contribuir ao projeto.

---

## 📋 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Começar](#como-começar)
3. [Tipos de Contribuição](#tipos-de-contribuição)
4. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
5. [Padrões de Código](#padrões-de-código)
6. [Enviando Pull Requests](#enviando-pull-requests)
7. [Reportando Bugs](#reportando-bugs)
8. [Sugerindo Melhorias](#sugerindo-melhorias)

---

## 🤝 Código de Conduta

### Nosso Compromisso

Nos comprometemos a fornecer um ambiente acolhedor e inclusivo para todos, independentemente de idade, tamanho do corpo, deficiência, etnia, identidade de gênero, nível de experiência, nacionalidade, aparência pessoal, raça, religião ou identidade e orientação sexual.

### Nossos Padrões

Exemplos de comportamento que contribuem para criar um ambiente positivo incluem:

- Usar linguagem acolhedora e inclusiva
- Ser respeitoso com pontos de vista e experiências diferentes
- Aceitar críticas construtivas graciosamente
- Focar no que é melhor para a comunidade
- Mostrar empatia com outros membros da comunidade

Exemplos de comportamento inaceitável incluem:

- Uso de linguagem ou imagens sexualizadas
- Ataques pessoais ou políticos
- Assédio público ou privado
- Publicar informações privadas de terceiros
- Outra conduta que possa ser razoavelmente considerada inapropriada

---

## 🚀 Como Começar

### 1. Fork o Repositório

```bash
# Clique em "Fork" no GitHub
# Ou use GitHub CLI:
gh repo fork foodbridge/foodbridge --clone
```

### 2. Clone Localmente

```bash
git clone https://github.com/seu-usuario/foodbridge.git
cd foodbridge
```

### 3. Configure o Ambiente

```bash
# Instale dependências
pnpm install

# Configure variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
pnpm dev
```

### 4. Crie uma Branch

```bash
# Atualize a main
git checkout main
git pull origin main

# Crie uma branch descritiva
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bug
```

---

## 📝 Tipos de Contribuição

### 🐛 Reportar Bugs

Bugs são rastreados como [GitHub issues](https://github.com/foodbridge/foodbridge/issues).

**Antes de reportar:**
- Verifique se o bug já foi reportado
- Tente reproduzir em um ambiente limpo
- Colete informações do sistema (OS, navegador, versão Node)

**Ao reportar:**
```markdown
## Descrição
Descrição clara do bug

## Passos para Reproduzir
1. Faça isto
2. Depois isto
3. Veja o erro

## Comportamento Esperado
O que deveria acontecer

## Comportamento Atual
O que está acontecendo

## Screenshots
Se aplicável

## Ambiente
- OS: [e.g. macOS 12.1]
- Navegador: [e.g. Chrome 97]
- Node: [e.g. 16.13]
```

### 💡 Sugerir Melhorias

Sugestões são rastreadas como [GitHub issues](https://github.com/foodbridge/foodbridge/issues).

**Ao sugerir:**
```markdown
## Resumo
Descrição clara da melhoria

## Motivação
Por que isso seria útil?

## Exemplo de Uso
Como seria usado?

## Benefícios
Quem se beneficiaria?
```

### 📝 Melhorar Documentação

Documentação é essencial! Você pode:
- Corrigir typos
- Melhorar clareza
- Adicionar exemplos
- Traduzir para outros idiomas

### 🔧 Implementar Features

Veja o [Roadmap](./README.md#-roadmap) para features planejadas.

**Antes de começar:**
- Abra uma issue para discussão
- Aguarde feedback dos mantenedores
- Discuta a abordagem

---

## 🛠️ Processo de Desenvolvimento

### Estrutura de Branches

```
main                 # Produção (estável)
├── develop          # Staging (testes)
└── feature/*        # Features em desenvolvimento
    ├── feature/nova-feature
    ├── fix/bug-critico
    └── docs/melhorias
```

### Workflow

```bash
# 1. Crie uma branch
git checkout -b feature/sua-feature

# 2. Faça mudanças
# ... edite arquivos ...

# 3. Commit com mensagens descritivas
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 4. Push para seu fork
git push origin feature/sua-feature

# 5. Abra um Pull Request no GitHub
```

### Commit Messages

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

<corpo>

<rodapé>
```

**Tipos:**
- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, sem mudanças de lógica
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou atualização de testes
- `chore`: Atualizações de dependências, etc

**Exemplos:**
```bash
git commit -m "feat(donations): adiciona wizard de publicação"
git commit -m "fix(login): corrige validação de email"
git commit -m "docs: atualiza README com instruções"
git commit -m "refactor(components): simplifica DonationCard"
```

---

## 💻 Padrões de Código

### TypeScript

- Use tipos explícitos
- Evite `any` quando possível
- Defina interfaces para objetos complexos

```typescript
// ✅ Bom
interface Donation {
  id: string;
  foodType: string;
  quantity: number;
  status: 'AVAILABLE' | 'CLAIMED' | 'EXPIRED';
}

// ❌ Evitar
const donation: any = { ... };
```

### React

- Use functional components
- Prefira hooks a class components
- Mantenha componentes pequenos e focados

```typescript
// ✅ Bom
export function DonationCard({ donation }: { donation: Donation }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      {/* conteúdo */}
    </div>
  );
}

// ❌ Evitar
export class DonationCard extends React.Component { ... }
```

### Styling

- Use TailwindCSS para estilos
- Evite CSS inline
- Reutilize componentes shadcn/ui

```typescript
// ✅ Bom
<div className="bg-card rounded-lg border border-border p-4">
  <Button className="bg-primary hover:bg-primary/90">
    Clique aqui
  </Button>
</div>

// ❌ Evitar
<div style={{ backgroundColor: '#fff', padding: '16px' }}>
  <button style={{ color: 'blue' }}>Clique aqui</button>
</div>
```

### Formatação

Usamos Prettier para formatação automática:

```bash
# Formatar todos os arquivos
pnpm format

# Verificar formatação
pnpm format:check
```

### Linting

Usamos ESLint para qualidade de código:

```bash
# Verificar linting
pnpm lint

# Corrigir automaticamente
pnpm lint:fix
```

---

## 📤 Enviando Pull Requests

### Checklist Antes de Enviar

- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Commits têm mensagens descritivas
- [ ] Sem conflitos com `main`
- [ ] Build passa localmente (`pnpm build`)

### Descrição do PR

```markdown
## Descrição
Descrição clara do que foi mudado e por quê

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Atualização de documentação

## Como Testar
Passos para testar as mudanças

## Screenshots
Se aplicável

## Checklist
- [ ] Meu código segue o padrão do projeto
- [ ] Executei `pnpm lint` e `pnpm format`
- [ ] Adicionei testes para novas features
- [ ] Atualizei a documentação
```

### Processo de Review

1. **Submeta o PR** — Descreva as mudanças claramente
2. **Aguarde Review** — Mantenedores analisarão o código
3. **Responda Feedback** — Faça ajustes conforme solicitado
4. **Merge** — Após aprovação, seu PR será merged!

---

## 🐛 Reportando Bugs

### Informações Necessárias

```markdown
## Descrição
Descrição clara e concisa do bug

## Reprodução
1. Passo 1
2. Passo 2
3. Passo 3

## Resultado Esperado
O que deveria acontecer

## Resultado Atual
O que está acontecendo

## Ambiente
- OS: macOS / Windows / Linux
- Navegador: Chrome / Firefox / Safari
- Versão: [versão específica]
- Node: [versão]

## Logs/Erros
```
Cole aqui qualquer erro ou log relevante
```

## Screenshots
Adicione screenshots se possível
```

---

## 💡 Sugerindo Melhorias

### Template de Sugestão

```markdown
## Resumo
Descrição clara da melhoria sugerida

## Motivação
Por que isso seria útil? Qual problema resolve?

## Exemplo de Uso
Como seria usado na prática?

## Benefícios
- Benefício 1
- Benefício 2
- Benefício 3

## Possíveis Desvantagens
Existem desvantagens?

## Alternativas Consideradas
Outras formas de resolver?
```

---

## 📚 Recursos Úteis

### Documentação
- [README](./README.md) — Visão geral do projeto
- [Design System](./docs/DESIGN_SYSTEM.md) — Paleta, tipografia, componentes
- [User Flows](./docs/USER_FLOWS.md) — Fluxos de usuário
- [API Docs](./docs/API.md) — Endpoints (roadmap)

### Ferramentas
- [GitHub Issues](https://github.com/foodbridge/foodbridge/issues) — Rastreamento
- [GitHub Discussions](https://github.com/foodbridge/foodbridge/discussions) — Comunidade
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) — TypeScript
- [React Docs](https://react.dev) — React 19
- [TailwindCSS](https://tailwindcss.com) — Styling

### Comunidade
- 💬 Discord: [FoodBridge Community](https://discord.gg/foodbridge)
- 🐦 Twitter: [@FoodBridgeOrg](https://twitter.com/foodbridgeorg)
- 📧 Email: hello@foodbridge.org

---

## 🎯 Boas Práticas

### Antes de Começar

1. **Leia a documentação** — Entenda a arquitetura
2. **Explore o código** — Veja como as coisas funcionam
3. **Abra uma issue** — Discuta sua ideia primeiro
4. **Aguarde feedback** — Mantenedores podem ter sugestões

### Durante o Desenvolvimento

1. **Commits pequenos** — Mudanças lógicas em commits separados
2. **Testes** — Adicione testes para novas features
3. **Documentação** — Atualize docs conforme necessário
4. **Comunicação** — Mantenha a conversa aberta

### Após Enviar

1. **Responda Feedback** — Seja receptivo a críticas
2. **Faça Ajustes** — Implemente sugestões de review
3. **Seja Paciente** — Review leva tempo
4. **Celebre** — Seu PR foi merged! 🎉

---

## 🏆 Reconhecimento

Contribuidores são reconhecidos em:
- [README](./README.md#-reconhecimentos)
- [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- Releases do projeto

---

## ❓ Dúvidas?

- 📖 Leia a [FAQ](./docs/FAQ.md)
- 💬 Abra uma [Discussion](https://github.com/foodbridge/foodbridge/discussions)
- 📧 Email: hello@foodbridge.org
- 🐦 Twitter: [@FoodBridgeOrg](https://twitter.com/foodbridgeorg)

---

<div align="center">

**Obrigado por contribuir para a FoodBridge! 🙏**

Juntos, podemos reduzir desperdício e ampliar impacto social.

</div>
