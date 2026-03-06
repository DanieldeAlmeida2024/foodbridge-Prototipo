import { useState } from 'react';
import { Donation, mockVolunteers } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, AlertCircle, CheckCircle } from 'lucide-react';

interface ClaimDonationModalProps {
  donation: Donation;
  onClose: () => void;
  onSubmit?: (claim: any) => void;
}

export function ClaimDonationModal({ donation, onClose, onSubmit }: ClaimDonationModalProps) {
  const [step, setStep] = useState<'quantity' | 'window' | 'volunteer' | 'success'>('quantity');
  const [quantity, setQuantity] = useState<number>(Math.min(donation.limitPerNGO, donation.totalQuantity));
  const [selectedWindow, setSelectedWindow] = useState(0);
  const [selectedVolunteer, setSelectedVolunteer] = useState<string | null>(null);

  const claimedQuantity = donation.claimedBy.reduce((sum, claim) => sum + claim.quantity, 0);
  const remainingQuantity = donation.totalQuantity - claimedQuantity;
  const maxQuantity = Math.min(donation.limitPerNGO, remainingQuantity);
  const quantityError = quantity > maxQuantity ? `Máximo: ${maxQuantity}` : '';

  const handleQuantitySubmit = () => {
    if (quantity > 0 && quantity <= maxQuantity) {
      setStep('window');
    }
  };

  const handleWindowSubmit = () => {
    setStep('volunteer');
  };

  const handleVolunteerSubmit = () => {
    const claim = {
      donationId: donation.id,
      quantity,
      pickupWindow: donation.pickupWindow,
      volunteer: selectedVolunteer,
    };
    onSubmit?.(claim);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">{donation.foodType}</h2>
            <p className="text-sm text-muted-foreground">{donation.donorName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'quantity' && (
            <div className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Total disponível:</strong> {remainingQuantity} {donation.unit}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Limite por ONG:</strong> {donation.limitPerNGO} {donation.unit}
                </p>
              </div>

              <div>
                <Label htmlFor="quantity" className="text-foreground font-semibold">
                  Quantidade desejada
                </Label>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-border rounded hover:bg-muted"
                  >
                    −
                  </button>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max={maxQuantity}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    className="flex-1 text-center"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                    className="px-3 py-2 border border-border rounded hover:bg-muted"
                  >
                    +
                  </button>
                </div>
                {quantityError && (
                  <p className="text-xs text-destructive mt-2">{quantityError}</p>
                )}
              </div>

              {new Date(donation.validity).getTime() - new Date().getTime() < 24 * 60 * 60 * 1000 && (
                <div className="bg-secondary/10 border border-secondary rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-secondary">
                    ⚠️ Validade próxima! Priorize esta coleta.
                  </p>
                </div>
              )}

              <Button
                onClick={handleQuantitySubmit}
                disabled={!quantity || quantity > maxQuantity}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Próximo →
              </Button>
            </div>
          )}

          {step === 'window' && (
            <div className="space-y-6">
              <div>
                <Label className="text-foreground font-semibold mb-3 block">
                  Selecione a janela de coleta
                </Label>
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    📅 {donation.pickupWindow.date}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🕐 {donation.pickupWindow.startTime} às {donation.pickupWindow.endTime}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📍 {donation.location}
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  ℹ️ Confirme a disponibilidade de voluntários para esta data e horário
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep('quantity')}
                  className="flex-1"
                >
                  ← Voltar
                </Button>
                <Button
                  onClick={handleWindowSubmit}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Próximo →
                </Button>
              </div>
            </div>
          )}

          {step === 'volunteer' && (
            <div className="space-y-6">
              <div>
                <Label className="text-foreground font-semibold mb-3 block">
                  Voluntário responsável (opcional)
                </Label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                    <input
                      type="radio"
                      checked={selectedVolunteer === null}
                      onChange={() => setSelectedVolunteer(null)}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Não atribuir agora</span>
                  </label>

                  {mockVolunteers.map((volunteer) => (
                    <label
                      key={volunteer.id}
                      className="flex items-center gap-2 cursor-pointer p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <input
                        type="radio"
                        checked={selectedVolunteer === volunteer.id}
                        onChange={() => setSelectedVolunteer(volunteer.id)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{volunteer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {volunteer.collectionsCompleted} coletas realizadas
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  ℹ️ Você pode atribuir um voluntário agora ou deixar para depois
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep('window')}
                  className="flex-1"
                >
                  ← Voltar
                </Button>
                <Button
                  onClick={handleVolunteerSubmit}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Confirmar
                </Button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-6 space-y-4">
              <CheckCircle size={64} className="text-primary mx-auto" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Requisição confirmada!
                </h3>
                <p className="text-sm text-muted-foreground">
                  A doação foi adicionada às suas coletas agendadas
                </p>
              </div>

              <div className="bg-muted rounded-lg p-4 text-left text-sm">
                <p className="text-muted-foreground mb-2">
                  <strong>Quantidade:</strong> {quantity} {donation.unit}
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Data:</strong> {donation.pickupWindow.date}
                </p>
                <p className="text-muted-foreground">
                  <strong>Voluntário:</strong>{' '}
                  {selectedVolunteer
                    ? mockVolunteers.find((v) => v.id === selectedVolunteer)?.name
                    : 'A ser definido'}
                </p>
              </div>

              <Button
                onClick={onClose}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Fechar
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
