import unittest
from pathlib import Path
RAIZ=Path(__file__).resolve().parents[1]
class TestesDocumentacao(unittest.TestCase):
    def test_arquivos(self):
        for item in ('README.md','AGENTS.md','docs/REQUISITOS.md','docs/ARQUITETURA.md','docs/UML.puml','docs/PLANO_TESTES.md'):
            with self.subTest(item=item): self.assertTrue((RAIZ/item).is_file(), item)
    def test_uml(self):
        uml=(RAIZ/'docs/UML.puml').read_text(encoding='utf-8')
        self.assertIn('@startuml',uml)
        self.assertIn('@enduml',uml)
