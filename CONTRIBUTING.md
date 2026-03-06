# 🤝 Guia de Contribuição — FoodBridge

Obrigado por considerar contribuir para a FoodBridge. Este é um projeto de código aberto focado exclusivamente em impacto social, e suas contribuições são valiosas.

---

## 📋 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Começar](#como-começar)
3. [Tipos de Contribuição](#tipos-de-contribuição)
4. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
5. [Padrões de Código](#padrões-de-código)
6. [Enviando Pull Requests](#enviando-pull-requests)
7. [Reportando Problemas](#reportando-problemas)

---

## 🤝 Código de Conduta

### Nosso Compromisso

Nos comprometemos a fornecer um ambiente acolhedor e inclusivo para todos, independentemente de qualquer característica pessoal.

### Nossos Padrões

Exemplos de comportamento esperado:

- Usar linguagem acolhedora e inclusiva
- Ser respeitoso com diferentes pontos de vista
- Aceitar críticas construtivas
- Focar no que é melhor para a comunidade
- Mostrar empatia

Exemplos de comportamento inaceitável:

- Linguagem ou imagens ofensivas
- Ataques pessoais
- Assédio
- Publicar informações privadas
- Outra conduta prejudicial

---

## 🚀 Como Começar

### 1. Fork o Repositório

```bash
git clone https://github.com/seu-usuario/foodbridge.git
cd foodbridge
```

### 2. Configure o Ambiente

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

### 3. Crie uma Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/sua-feature
```

---

## 📝 Tipos de Contribuição

### 🐛 Reportar Problemas

Ao reportar um problema:

```markdown
## Descrição
Descrição clara do problema

## Passos para Reproduzir
1. Passo 1
2. Passo 2
3. Resultado

## Comportamento Esperado
O que deveria acontecer

## Ambiente
- OS: [seu sistema]
- Navegador: [qual navegador]
- Node: [versão]
```

### 💡 Sugerir Melhorias

```markdown
## Resumo
Descrição da melhoria

## Motivação
Por que seria útil?

## Exemplo
Como seria usado?
```

### 📝 Melhorar Documentação

- Corrigir erros
- Melhorar clareza
- Adicionar exemplos
- Traduzir

### 🔧 Implementar Features

Antes de começar:
1. Abra uma issue para discussão
2. Aguarde feedback
3. Discuta a abordagem

---

## 🛠️ Processo de Desenvolvimento

### Workflow

```bash
# 1. Crie uma branch
git checkout -b feature/sua-feature

# 2. Faça mudanças
# ... edite arquivos ...

# 3. Commit com mensagens descritivas
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 4. Push
git push origin feature/sua-feature

# 5. Abra um Pull Request
```

### Commit Messages

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>
```

**Tipos:**
- `feat`: Nova feature
- `fix`: Correção
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `perf`: Performance
- `test`: Testes
- `chore`: Manutenção

**Exemplos:**
```bash
git commit -m "feat(donations): adiciona wizard de publicação"
git commit -m "fix(login): corrige validação"
git commit -m "docs: atualiza README"
```

---

## 💻 Padrões de Código

### TypeScript

```typescript
// ✅ Bom
interface Donation {
  id: string;
  foodType: string;
  quantity: number;
}

// ❌ Evitar
const donation: any = { ... };
```

### React

```typescript
// ✅ Bom
export function DonationCard({ donation }: { donation: Donation }) {
  const [isOpen, setIsOpen] = useState(false);
  return <div>{/* conteúdo */}</div>;
}
```

### Styling

```typescript
// ✅ Bom
<div className="bg-card rounded-lg border border-border p-4">
  <Button className="bg-primary hover:bg-primary/90">
    Clique aqui
  </Button>
</div>
```

### Formatação

```bash
pnpm format
pnpm lint
```

---

## 📤 Enviando Pull Requests

### Checklist

- [ ] Código segue os padrões
- [ ] Testes foram adicionados
- [ ] Documentação foi atualizada
- [ ] Commits têm boas mensagens
- [ ] Build passa localmente

### Descrição do PR

```markdown
## Descrição
O que foi mudado e por quê

## Tipo
- [ ] Bug fix
- [ ] Nova feature
- [ ] Documentação

## Como Testar
Passos para testar

## Checklist
- [ ] Código segue padrões
- [ ] Testes adicionados
- [ ] Documentação atualizada
```

### Processo de Review

1. Submeta o PR
2. Aguarde review
3. Responda feedback
4. Após aprovação, será merged

---

## 🐛 Reportando Problemas

### Informações Necessárias

```markdown
## Descrição
Descrição clara do problema

## Reprodução
1. Passo 1
2. Passo 2

## Resultado Esperado
O que deveria acontecer

## Resultado Atual
O que está acontecendo

## Ambiente
- OS: [seu sistema]
- Navegador: [qual]
- Node: [versão]
```

---

## 📚 Recursos Úteis

### Documentação
- [README](./README.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [User Flows](./docs/USER_FLOWS.md)

### Ferramentas
- [GitHub Issues](https://github.com/foodbridge/foodbridge/issues)
- [GitHub Discussions](https://github.com/foodbridge/foodbridge/discussions)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)

---

## 🎯 Boas Práticas

### Antes de Começar

1. Leia a documentação
2. Explore o código
3. Abra uma issue
4. Aguarde feedback

### Durante o Desenvolvimento

1. Commits pequenos e lógicos
2. Adicione testes
3. Atualize documentação
4. Mantenha comunicação aberta

### Após Enviar

1. Responda feedback
2. Faça ajustes
3. Seja paciente
4. Celebre quando merged! 🎉

---

## ❓ Dúvidas?

- Abra uma [Discussion](https://github.com/foodbridge/foodbridge/discussions)
- Leia a documentação
- Converse com a comunidade

---

<div align="center">

**Obrigado por contribuir para a FoodBridge! 🙏**

Juntos, podemos reduzir desperdício e ampliar impacto social.

</div>
