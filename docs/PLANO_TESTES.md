# Plano de testes

- CT-01 Validar presença de documentação e delimitadores UML.
- CT-02 Executar/verificar: npm run build.
- CT-03 Testar navegação e caso negativo no ambiente apropriado.
- CT-04 Testar integração real somente após configurar dependências.
- CT-05 Conferir que não há dados sensíveis em logs/builds.

Teste documental: `python -m unittest discover -s tests -p test_documentacao.py -v`. Ele não comprova CT-02 a CT-05.

Trata-se de protótipo UX; telas e dados simulados não representam API completa ou doações reais.
