import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload, CheckCircle, AlertCircle, File, X } from 'lucide-react';

interface DocumentFile {
  id: string;
  name: string;
  label: string;
  required: boolean;
  file: File | null;
  preview?: string;
}

interface UploadedDocument {
  id: string;
  name: string;
  label: string;
  fileName: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

const REQUIRED_DOCUMENTS: DocumentFile[] = [
  {
    id: 'cnpj',
    name: 'Comprovante de CNPJ',
    label: 'Certidão Simplificada da Junta Comercial',
    required: true,
    file: null,
  },
  {
    id: 'address',
    name: 'Comprovante de Endereço',
    label: 'Conta de água, luz, telefone ou contrato de aluguel',
    required: true,
    file: null,
  },
  {
    id: 'id',
    name: 'Documento do Responsável',
    label: 'RG, CNH ou Passaporte (foto clara)',
    required: true,
    file: null,
  },
  {
    id: 'location',
    name: 'Foto do Local',
    label: 'Fachada ou interior da organização',
    required: true,
    file: null,
  },
  {
    id: 'additional',
    name: 'Documentos Adicionais',
    label: 'Certificados, licenças ou autorizações (opcional)',
    required: false,
    file: null,
  },
];

export default function DocumentUpload() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<'upload' | 'review' | 'submitted'>('upload');
  const [documents, setDocuments] = useState<DocumentFile[]>(REQUIRED_DOCUMENTS);
  const [uploadedDocs, setUploadedDocs] = useState<UploadedDocument[]>([]);

  const handleFileSelect = (docId: string, file: File) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === docId
          ? {
              ...doc,
              file,
              preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
            }
          : doc
      )
    );
  };

  const handleRemoveFile = (docId: string) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === docId ? { ...doc, file: null, preview: undefined } : doc
      )
    );
  };

  const handleReview = () => {
    const allRequiredFilled = documents
      .filter((d) => d.required)
      .every((d) => d.file !== null);

    if (allRequiredFilled) {
      setStep('review');
    }
  };

  const handleSubmit = () => {
    const uploaded = documents
      .filter((d) => d.file !== null)
      .map((d) => ({
        id: d.id,
        name: d.name,
        label: d.label,
        fileName: d.file!.name,
        uploadedAt: new Date().toLocaleDateString('pt-BR'),
        status: 'pending' as const,
      }));

    setUploadedDocs(uploaded);
    console.log('Documentos enviados:', uploaded);
    setStep('submitted');
  };

  const allRequiredFilled = documents
    .filter((d) => d.required)
    .every((d) => d.file !== null);

  const totalUploaded = documents.filter((d) => d.file !== null).length;
  const totalRequired = documents.filter((d) => d.required).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">📋 Envio de Documentos</h1>
          <p className="text-muted-foreground">
            Valide sua organização enviando os documentos necessários
          </p>
        </div>

        {step === 'upload' && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  Progresso do Envio
                </h2>
                <p className="text-sm text-muted-foreground">
                  {totalUploaded} de {totalRequired} documentos obrigatórios
                </p>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: `${(totalUploaded / totalRequired) * 100}%` }}
                />
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{doc.name}</h3>
                        {doc.required && (
                          <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">
                            Obrigatório
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{doc.label}</p>
                    </div>
                    {doc.file && (
                      <CheckCircle size={24} className="text-primary flex-shrink-0" />
                    )}
                  </div>

                  {doc.file ? (
                    <div className="space-y-4">
                      {doc.preview && (
                        <div className="relative w-full max-h-48 bg-muted rounded-lg overflow-hidden">
                          <img
                            src={doc.preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2">
                          <File size={18} className="text-primary" />
                          <div className="text-sm">
                            <p className="font-semibold text-foreground">{doc.file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(doc.file.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(doc.id)}
                          className="p-1 hover:bg-destructive/10 rounded transition-colors"
                        >
                          <X size={18} className="text-destructive" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="block">
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Clique ou arraste um arquivo
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, JPG, PNG (máx. 10 MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileSelect(doc.id, e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground mb-1">Dicas para envio:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>✓ Certifique-se de que os documentos são legíveis</li>
                  <li>✓ Fotos devem estar bem iluminadas</li>
                  <li>✓ Não cubra informações importantes</li>
                  <li>✓ Arquivos devem estar em PDF ou imagem (JPG/PNG)</li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Cancelar
              </Button>
              <Button
                onClick={handleReview}
                disabled={!allRequiredFilled}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Revisar Documentos
              </Button>
            </div>
          </div>
        )}

        {step === 'review' && (
          <div className="space-y-6">
            {/* Review Header */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Revisão de Documentos
              </h2>
              <p className="text-muted-foreground">
                Verifique se todos os documentos estão corretos antes de enviar
              </p>
            </div>

            {/* Review List */}
            <div className="space-y-3">
              {documents
                .filter((d) => d.file !== null)
                .map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-card rounded-lg border border-border p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.file?.name}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setStep('upload');
                        handleRemoveFile(doc.id);
                      }}
                      className="text-xs text-primary hover:underline"
                    >
                      Editar
                    </button>
                  </div>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-secondary/10 border border-secondary rounded-lg p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground mb-1">Aviso importante:</p>
                <p className="text-muted-foreground">
                  Ao enviar, você confirma que todos os documentos são verdadeiros e atualizados. Documentos falsos resultarão em banimento permanente da plataforma.
                </p>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-1" />
              <span className="text-sm text-muted-foreground">
                Confirmo que todos os documentos são verdadeiros e atualizados
              </span>
            </label>

            {/* Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setStep('upload')}
                className="flex-1"
              >
                ← Voltar
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Enviar Documentos
              </Button>
            </div>
          </div>
        )}

        {step === 'submitted' && (
          <div className="bg-card rounded-lg border border-border p-8 text-center space-y-6">
            <div className="text-6xl mb-4">✅</div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Documentos enviados com sucesso!
              </h2>
              <p className="text-muted-foreground">
                Sua solicitação foi recebida e está em análise
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-foreground mb-4">O que acontece agora:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-12 bg-primary/30 my-2"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Análise automática</p>
                    <p className="text-sm text-muted-foreground">
                      Seus documentos serão verificados automaticamente (até 24h)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30 text-muted-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-12 bg-primary/30 my-2"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Revisão manual</p>
                    <p className="text-sm text-muted-foreground">
                      Um moderador fará uma análise final (até 2 dias úteis)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30 text-muted-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Aprovação</p>
                    <p className="text-sm text-muted-foreground">
                      Você receberá um email confirmando a aprovação
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Uploaded Documents Summary */}
            <div className="bg-muted rounded-lg p-6 text-left">
              <h3 className="font-semibold text-foreground mb-3">Documentos enviados:</h3>
              <div className="space-y-2">
                {uploadedDocs.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <File size={16} className="text-primary" />
                      <span className="text-foreground">{doc.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{doc.uploadedAt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setLocation('/dashboard')}
              >
                Ir ao Dashboard
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => setLocation('/')}
              >
                Voltar à Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
