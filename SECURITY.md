# Política de Segurança

## Reportando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança, **não abra uma issue pública**. Em vez disso, reporte através de um canal privado no GitHub ou entre em contato através de discussions.

Por favor, inclua:
- Descrição da vulnerabilidade
- Passos para reproduzir
- Possível impacto
- Sugestões de correção (se houver)

Responderemos assim que possível e trabalharemos para resolver o problema responsavelmente.

---

## Medidas de Segurança

### Autenticação & Autorização
- JWT para autenticação
- Senhas com hash seguro
- RBAC (Role-Based Access Control)
- Rate limiting em endpoints críticos

### Dados Sensíveis
- Documentos armazenados com criptografia
- Variáveis de ambiente para secrets
- Sem dados sensíveis em logs
- HTTPS obrigatório

### Validação & Sanitização
- Validação de entrada em todos os endpoints
- Sanitização de dados do usuário
- Proteção contra CSRF
- Prevenção de XSS

### Conformidade
- LGPD compliant (Lei Geral de Proteção de Dados)
- Política de privacidade clara
- Direito ao esquecimento implementado
- Transparência nas operações

---

## Boas Práticas para Contribuidores

### Ao Contribuir

1. **Não commite secrets** — Use `.env.local`
2. **Valide inputs** — Sempre valide dados
3. **Use HTTPS** — Nunca HTTP em produção
4. **Sanitize outputs** — Escape HTML/SQL
5. **Teste segurança** — Considere casos de abuso

### Dependências

- Mantenha dependências atualizadas
- Verifique vulnerabilidades: `pnpm audit`
- Revise changelogs de dependências críticas

### Secrets

**Nunca commite:**
- Senhas
- API keys
- Tokens
- Certificados
- Dados pessoais

**Use:**
- `.env.local` (local)
- Variáveis de ambiente (produção)
- Secret managers

---

## Resposta a Incidentes

### Processo

1. **Confirmação** — Verificamos a vulnerabilidade
2. **Avaliação** — Determinamos severidade
3. **Correção** — Desenvolvemos patch
4. **Release** — Publicamos correção
5. **Divulgação** — Informamos comunidade

### Severidade

| Nível | Descrição |
|-------|-----------|
| Crítica | Exploração fácil, impacto alto |
| Alta | Exploração possível, impacto significativo |
| Média | Exploração difícil, impacto moderado |
| Baixa | Exploração muito difícil, impacto baixo |

---

## Checklist de Segurança para Release

Antes de cada release:

- [ ] Dependências atualizadas
- [ ] `pnpm audit` sem vulnerabilidades
- [ ] Secrets não estão no código
- [ ] HTTPS habilitado
- [ ] Rate limiting ativo
- [ ] Logs não contêm dados sensíveis
- [ ] Testes de segurança passaram
- [ ] Documentação atualizada

---

## Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)
- [React Security](https://react.dev/learn/security)
- [LGPD](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd)

---

**Obrigado por ajudar a manter a FoodBridge segura! 🔒**
