import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

type Step = 1 | 2 | 3 | 4 | 5;

interface DonationForm {
  foodType: string;
  description: string;
  quantity: number;
  unit: 'units' | 'kg' | 'liters' | 'boxes';
  validity: string;
  limitPerNGO: number | null;
  unlimitedQuantity: boolean;
  address: string;
  customAddress: boolean;
  pickupDate: string;
  pickupStartTime: string;
  pickupEndTime: string;
  instructions: string;
}

const FOOD_CATEGORIES = [
  '🍽️ Refeições prontas',
  '🥖 Padaria',
  '🥬 Hortifrúti',
  '🥛 Laticínios',
  '🍖 Carnes',
  '🥫 Industrializados',
  '❄️ Congelados',
  '🍱 Outros',
];

export default function PublishDonation() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<DonationForm>({
    foodType: '',
    description: '',
    quantity: 0,
    unit: 'units',
    validity: '',
    limitPerNGO: null,
    unlimitedQuantity: false,
    address: 'Rua das Flores, 123 - Pinheiros, SP',
    customAddress: false,
    pickupDate: '',
    pickupStartTime: '09:00',
    pickupEndTime: '12:00',
    instructions: '',
  });

  const handleNext = () => {
    if (step < 5) setStep((step + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handlePublish = () => {
    console.log('Doação publicada:', form);
    setStep(5);
  };

  const isStep1Valid = form.foodType && form.quantity > 0;
  const isStep2Valid = form.validity;
  const isStep3Valid = form.unlimitedQuantity || form.limitPerNGO;
  const isStep4Valid = form.pickupDate && form.pickupStartTime && form.pickupEndTime;

  const maxNGOs = form.unlimitedQuantity ? '∞' : Math.floor(form.quantity / (form.limitPerNGO || 1));

  return (
    <Layout userRole="donor" userName="Roberto Silva" organizationName="Restaurante Bom Sabor">
      <div className="p-6 max-w-2xl mx-auto">
        {step === 5 ? (
          // Success Screen
          <div className="text-center py-12">
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              🎉 Doação publicada com sucesso!
            </h1>
            <p className="text-muted-foreground mb-6">
              Suas doações foram publicadas e ONGs próximas foram notificadas
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-foreground mb-3">Resumo da doação:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Tipo:</strong> {form.foodType}</p>
                <p><strong>Quantidade:</strong> {form.quantity} {form.unit}</p>
                <p><strong>Limite por ONG:</strong> {form.unlimitedQuantity ? 'Sem limite' : form.limitPerNGO}</p>
                <p><strong>Coleta:</strong> {form.pickupDate} das {form.pickupStartTime} às {form.pickupEndTime}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Ver minha doação
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Publicar outra doação
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-foreground">
                  Publicar nova doação
                </h1>
                <p className="text-sm text-muted-foreground">
                  Passo {step} de 4
                </p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Food Type & Quantity */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-foreground font-semibold mb-3 block">
                    Qual tipo de alimento?
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {FOOD_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setForm({ ...form, foodType: category })}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          form.foodType === category
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-foreground font-semibold">
                    Descrição adicional (opcional)
                  </Label>
                  <Input
                    id="description"
                    placeholder="Ex: Marmitas de frango com arroz e feijão"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity" className="text-foreground font-semibold">
                      Quantidade
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 0 })}
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
                      className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background"
                    >
                      <option value="units">Unidades</option>
                      <option value="kg">Quilos (kg)</option>
                      <option value="liters">Litros (L)</option>
                      <option value="boxes">Caixas</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Validity */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground">
                    ℹ️ Doações com validade próxima têm prioridade no matching automático
                  </p>
                </div>

                <div>
                  <Label htmlFor="validity" className="text-foreground font-semibold">
                    Data de validade
                  </Label>
                  <Input
                    id="validity"
                    type="date"
                    value={form.validity}
                    onChange={(e) => setForm({ ...form, validity: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Dica:</strong> Alimentos com validade próxima (até 24h) recebem destaque especial e são recomendados prioritariamente para ONGs.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Limit per NGO */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground">
                    ℹ️ O limite por ONG garante distribuição equitativa entre múltiplas instituições
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.unlimitedQuantity}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            unlimitedQuantity: e.target.checked,
                            limitPerNGO: e.target.checked ? null : form.limitPerNGO,
                          })
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-foreground font-semibold">Sem limite por ONG</span>
                    </label>
                  </div>

                  {!form.unlimitedQuantity && (
                    <div>
                      <Label htmlFor="limitPerNGO" className="text-foreground font-semibold">
                        Limite máximo por ONG
                      </Label>
                      <Input
                        id="limitPerNGO"
                        type="number"
                        min="1"
                        max={form.quantity}
                        value={form.limitPerNGO || ''}
                        onChange={(e) =>
                          setForm({ ...form, limitPerNGO: parseInt(e.target.value) || null })
                        }
                        placeholder={`Máximo: ${form.quantity}`}
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    📊 Cálculo automático:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Com {form.quantity} {form.unit} e limite de{' '}
                    {form.unlimitedQuantity ? 'sem limite' : form.limitPerNGO},
                    até <strong>{maxNGOs}</strong> ONGs podem reivindicar.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Pickup Location & Time */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-foreground font-semibold mb-3 block">
                    Local de coleta
                  </Label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={!form.customAddress}
                        onChange={() => setForm({ ...form, customAddress: false })}
                        className="w-4 h-4"
                      />
                      <span className="text-foreground">
                        Usar endereço cadastrado
                      </span>
                    </label>
                    {!form.customAddress && (
                      <div className="bg-muted rounded p-3 text-sm text-muted-foreground">
                        {form.address}
                      </div>
                    )}

                    <label className="flex items-center gap-2 cursor-pointer mt-3">
                      <input
                        type="radio"
                        checked={form.customAddress}
                        onChange={() => setForm({ ...form, customAddress: true })}
                        className="w-4 h-4"
                      />
                      <span className="text-foreground">Informar outro endereço</span>
                    </label>
                    {form.customAddress && (
                      <Input
                        placeholder="Rua, número - Bairro, Cidade"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="pickupDate" className="text-foreground font-semibold">
                    Data de coleta
                  </Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={form.pickupDate}
                    onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startTime" className="text-foreground font-semibold">
                      Horário de início
                    </Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={form.pickupStartTime}
                      onChange={(e) => setForm({ ...form, pickupStartTime: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endTime" className="text-foreground font-semibold">
                      Horário de término
                    </Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={form.pickupEndTime}
                      onChange={(e) => setForm({ ...form, pickupEndTime: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="instructions" className="text-foreground font-semibold">
                    Instruções especiais (opcional)
                  </Label>
                  <textarea
                    id="instructions"
                    placeholder="Ex: Acessar pela porta lateral, falar com João"
                    value={form.instructions}
                    onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                    className="mt-2 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {(step as number) === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground">Revisar doação</h2>

                <div className="space-y-4">
                  <ReviewItem label="Tipo de alimento" value={form.foodType} />
                  <ReviewItem
                    label="Quantidade"
                    value={`${form.quantity} ${form.unit}`}
                  />
                  <ReviewItem label="Validade" value={form.validity} />
                  <ReviewItem
                    label="Limite por ONG"
                    value={form.unlimitedQuantity ? 'Sem limite' : `${form.limitPerNGO}`}
                  />
                  <ReviewItem label="Local" value={form.address} />
                  <ReviewItem
                    label="Coleta"
                    value={`${form.pickupDate} das ${form.pickupStartTime} às ${form.pickupEndTime}`}
                  />
                  {form.instructions && (
                    <ReviewItem label="Instruções" value={form.instructions} />
                  )}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    ✅ Ao publicar, ONGs próximas serão notificadas automaticamente
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ChevronLeft size={18} />
                Voltar
              </Button>

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !isStep1Valid) ||
                    (step === 2 && !isStep2Valid) ||
                    (step === 3 && !isStep3Valid) ||
                    (step === 4 && !isStep4Valid)
                  }
                  className="flex-1 bg-primary hover:bg-primary/90 gap-2"
                >
                  Próximo
                  <ChevronRight size={18} />
                </Button>
              ) : step === 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStep4Valid}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Revisar
                </Button>
              ) : (
                <Button
                  onClick={handlePublish}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  ✓ Publicar doação
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center pb-3 border-b border-border last:border-b-0">
      <p className="text-muted-foreground">{label}</p>
      <p className="font-semibold text-foreground">{value}</p>
    </div>
  );
}
