import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type UserType = 'donor' | 'producer' | 'distributor' | 'ngo' | null;
type Step = 'type' | 'basic' | 'organization' | 'success';

interface RegisterForm {
  userType: UserType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  organizationName: string;
  organizationCNPJ: string;
  organizationAddress: string;
  organizationCity: string;
  organizationState: string;
  acceptTerms: boolean;
}

const USER_TYPES = [
  {
    id: 'donor',
    label: 'Doador',
    description: 'Restaurantes, supermercados e comércios',
    icon: '🏪',
  },
  {
    id: 'producer',
    label: 'Produtor',
    description: 'Fazendas, hortas e produtores rurais',
    icon: '🌾',
  },
  {
    id: 'distributor',
    label: 'Distribuidor',
    description: 'Distribuidoras e centros de distribuição',
    icon: '🚚',
  },
  {
    id: 'ngo',
    label: 'ONG / Instituição Social',
    description: 'Organizações que recebem doações',
    icon: '🤝',
  },
];

export default function Register() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<Step>('type');
  const [form, setForm] = useState<RegisterForm>({
    userType: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    organizationCNPJ: '',
    organizationAddress: '',
    organizationCity: '',
    organizationState: '',
    acceptTerms: false,
  });

  const handleSelectType = (type: UserType) => {
    setForm({ ...form, userType: type });
    setStep('basic');
  };

  const handleBasicNext = () => {
    if (form.firstName && form.lastName && form.email && form.phone && form.password && form.confirmPassword) {
      if (form.password === form.confirmPassword) {
        setStep('organization');
      }
    }
  };

  const handleRegister = () => {
    if (form.organizationName && form.organizationCNPJ && form.acceptTerms) {
      console.log('Cadastro realizado:', form);
      setStep('success');
    }
  };

  const typeLabel = USER_TYPES.find((t) => t.id === form.userType)?.label || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-2xl w-full">
        {/* Header */}
        <div className="border-b border-border p-6">
          <h1 className="text-3xl font-bold text-foreground">🌱 FoodBridge</h1>
          <p className="text-muted-foreground mt-1">Cadastre-se para começar a fazer diferença</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {step === 'type' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Qual é o seu perfil?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Selecione o tipo de usuário que melhor descreve sua organização
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {USER_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelectType(type.id as UserType)}
                    className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group"
                  >
                    <p className="text-4xl mb-3">{type.icon}</p>
                    <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary">
                      {type.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'basic' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Informações Pessoais
                </h2>
                <p className="text-muted-foreground mb-6">
                  Cadastro para {typeLabel}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground font-semibold">
                    Primeiro nome
                  </Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="João"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground font-semibold">
                    Sobrenome
                  </Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Silva"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="joao@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(11) 98765-4321"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password" className="text-foreground font-semibold">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-foreground font-semibold">
                    Confirmar senha
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="mt-2"
                  />
                  {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
                    <p className="text-xs text-destructive mt-1">As senhas não correspondem</p>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep('type')}
                  className="gap-2"
                >
                  <ChevronLeft size={18} />
                  Voltar
                </Button>
                <Button
                  onClick={handleBasicNext}
                  disabled={
                    !form.firstName ||
                    !form.lastName ||
                    !form.email ||
                    !form.phone ||
                    !form.password ||
                    form.password !== form.confirmPassword
                  }
                  className="flex-1 bg-primary hover:bg-primary/90 gap-2"
                >
                  Próximo
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {step === 'organization' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Informações da Organização
                </h2>
                <p className="text-muted-foreground mb-6">
                  Complete os dados da sua {typeLabel.toLowerCase()}
                </p>
              </div>

              <div>
                <Label htmlFor="organizationName" className="text-foreground font-semibold">
                  Nome da organização
                </Label>
                <Input
                  id="organizationName"
                  value={form.organizationName}
                  onChange={(e) => setForm({ ...form, organizationName: e.target.value })}
                  placeholder="Ex: Restaurante Bom Sabor"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="organizationCNPJ" className="text-foreground font-semibold">
                  CNPJ
                </Label>
                <Input
                  id="organizationCNPJ"
                  value={form.organizationCNPJ}
                  onChange={(e) => setForm({ ...form, organizationCNPJ: e.target.value })}
                  placeholder="00.000.000/0000-00"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="organizationAddress" className="text-foreground font-semibold">
                  Endereço
                </Label>
                <Input
                  id="organizationAddress"
                  value={form.organizationAddress}
                  onChange={(e) => setForm({ ...form, organizationAddress: e.target.value })}
                  placeholder="Rua das Flores, 123"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organizationCity" className="text-foreground font-semibold">
                    Cidade
                  </Label>
                  <Input
                    id="organizationCity"
                    value={form.organizationCity}
                    onChange={(e) => setForm({ ...form, organizationCity: e.target.value })}
                    placeholder="São Paulo"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="organizationState" className="text-foreground font-semibold">
                    Estado
                  </Label>
                  <select
                    id="organizationState"
                    value={form.organizationState}
                    onChange={(e) => setForm({ ...form, organizationState: e.target.value })}
                    className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="">Selecione...</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="BA">Bahia</option>
                    <option value="RS">Rio Grande do Sul</option>
                  </select>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  ℹ️ Você será redirecionado para enviar documentos de validação após o cadastro
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={(e) => setForm({ ...form, acceptTerms: e.target.checked })}
                  className="w-4 h-4 mt-1"
                />
                <span className="text-sm text-muted-foreground">
                  Concordo com os <a href="#" className="text-primary hover:underline">Termos de Serviço</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                </span>
              </label>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep('basic')}
                  className="gap-2"
                >
                  <ChevronLeft size={18} />
                  Voltar
                </Button>
                <Button
                  onClick={handleRegister}
                  disabled={!form.organizationName || !form.organizationCNPJ || !form.acceptTerms}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Continuar para Documentos
                </Button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-6">
              <div className="text-6xl mb-4">✅</div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Cadastro realizado com sucesso!
                </h2>
                <p className="text-muted-foreground">
                  Agora você precisa enviar documentos para validação
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-foreground mb-3">Próximo passo:</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Você será redirecionado para a página de envio de documentos. Prepare os seguintes arquivos:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Comprovante de CNPJ (Certidão Simplificada)</li>
                  <li>✓ Comprovante de endereço (conta de água/luz/telefone)</li>
                  <li>✓ Foto do responsável (RG ou CNH)</li>
                  <li>✓ Foto do local (fachada ou interior)</li>
                </ul>
              </div>

              <Button
                onClick={() => setLocation('/documents')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Ir para Envio de Documentos →
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 text-center text-sm text-muted-foreground">
          Já tem conta? <a href="/login" className="text-primary hover:underline font-semibold">Faça login</a>
        </div>
      </div>
    </div>
  );
}
