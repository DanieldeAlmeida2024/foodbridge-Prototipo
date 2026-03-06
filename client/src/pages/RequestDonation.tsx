import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

interface RequestForm {
  foodType: string;
  quantity: number;
  unit: 'units' | 'kg' | 'liters' | 'boxes';
  urgency: 'low' | 'medium' | 'high';
  description: string;
  targetDate: string;
  notes: string;
}

const FOOD_TYPES = [
  '🍽️ Refeições prontas',
  '🥖 Padaria',
  '🥬 Hortifrúti',
  '🥛 Laticínios',
  '🍖 Carnes',
  '🥫 Industrializados',
  '❄️ Congelados',
  '🍱 Outros',
];

export default function RequestDonation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RequestForm>({
    foodType: '',
    quantity: 0,
    unit: 'units',
    urgency: 'medium',
    description: '',
    targetDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitação enviada:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
        <div className="p-6 max-w-2xl mx-auto py-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle size={80} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                🎉 Solicitação enviada com sucesso!
              </h1>
              <p className="text-muted-foreground">
                Doadores serão notificados sobre sua necessidade
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-foreground mb-3">Resumo da solicitação:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Tipo:</strong> {form.foodType}</p>
                <p><strong>Quantidade:</strong> {form.quantity} {form.unit}</p>
                <p><strong>Urgência:</strong> {form.urgency === 'high' ? '🔴 Alta' : form.urgency === 'medium' ? '🟡 Média' : '🟢 Baixa'}</p>
                <p><strong>Data desejada:</strong> {form.targetDate || 'Flexível'}</p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                💡 Você pode acompanhar as respostas dos doadores na seção "Solicitações" do seu dashboard
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setSubmitted(false)}
              >
                Fazer outra solicitação
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Ver dashboard
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          📋 Solicitar Doação
        </h1>
        <p className="text-muted-foreground mb-8">
          Descreva a necessidade de sua organização e doadores responderão com ofertas
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Type */}
          <div>
            <Label className="text-foreground font-semibold mb-3 block">
              Qual tipo de alimento precisa?
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {FOOD_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm({ ...form, foodType: type })}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    form.foodType === type
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quantity" className="text-foreground font-semibold">
                Quantidade desejada
              </Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 0 })}
                placeholder="Ex: 50"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="unit" className="text-foreground font-semibold">
                Unidade
              </Label>
              <select
                id="unit"
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value as any })}
                className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="units">Unidades</option>
                <option value="kg">Quilos (kg)</option>
                <option value="liters">Litros (L)</option>
                <option value="boxes">Caixas</option>
              </select>
            </div>
          </div>

          {/* Urgency */}
          <div>
            <Label className="text-foreground font-semibold mb-3 block">
              Nível de urgência
            </Label>
            <div className="space-y-2">
              {[
                { value: 'low', label: '🟢 Baixa - Planejado com antecedência', icon: '✓' },
                { value: 'medium', label: '🟡 Média - Necessidade próxima', icon: '✓' },
                { value: 'high', label: '🔴 Alta - Necessidade imediata', icon: '✓' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={option.value}
                    checked={form.urgency === option.value}
                    onChange={(e) => setForm({ ...form, urgency: e.target.value as any })}
                    className="w-4 h-4"
                  />
                  <span className="text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-foreground font-semibold">
              Descrição da necessidade
            </Label>
            <textarea
              id="description"
              placeholder="Descreva por que precisa deste alimento, quantas pessoas serão beneficiadas, etc."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              rows={4}
            />
          </div>

          {/* Target Date */}
          <div>
            <Label htmlFor="targetDate" className="text-foreground font-semibold">
              Data desejada (opcional)
            </Label>
            <Input
              id="targetDate"
              type="date"
              value={form.targetDate}
              onChange={(e) => setForm({ ...form, targetDate: e.target.value })}
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Deixe em branco se for flexível
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <Label htmlFor="notes" className="text-foreground font-semibold">
              Observações adicionais (opcional)
            </Label>
            <textarea
              id="notes"
              placeholder="Ex: Preferência por alimentos frescos, restrições de armazenamento, etc."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              rows={3}
            />
          </div>

          {/* Info Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              ℹ️ Sua solicitação será visível para todos os doadores cadastrados. Eles poderão responder com ofertas de alimentos que atendam sua necessidade.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={!form.foodType || form.quantity === 0 || !form.description}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Enviar solicitação
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
