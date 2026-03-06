import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface DonorPublishModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FOOD_TYPES = [
  "Frutas",
  "Verduras",
  "Legumes",
  "Grãos",
  "Laticínios",
  "Carnes",
  "Peixe",
  "Pão",
  "Alimentos Prontos",
  "Outros",
];

export function DonorPublishModal({ open, onOpenChange }: DonorPublishModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    unit: "kg",
    description: "",
    expiryDate: "",
    location: "",
    pickupDate: "",
    pickupTime: "",
    ngoLimit: "",
    notes: "",
  });

  const handleNext = () => {
    if (step === 1 && !formData.foodType) {
      toast.error("Selecione o tipo de alimento");
      return;
    }
    if (step === 2 && (!formData.quantity || !formData.expiryDate)) {
      toast.error("Preencha quantidade e data de validade");
      return;
    }
    if (step === 3 && (!formData.location || !formData.pickupDate)) {
      toast.error("Preencha local e data de coleta");
      return;
    }
    setStep(step + 1);
  };

  const handlePublish = () => {
    toast.success("Doação publicada com sucesso!");
    setStep(1);
    setFormData({
      foodType: "",
      quantity: "",
      unit: "kg",
      description: "",
      expiryDate: "",
      location: "",
      pickupDate: "",
      pickupTime: "",
      ngoLimit: "",
      notes: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-xl sm:text-2xl">Publicar Doação</DialogTitle>
          <DialogDescription>Passo {step} de 4</DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Tipo de Alimento */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-semibold mb-3 block">Tipo de Alimento</Label>
              <Select value={formData.foodType} onValueChange={(value) => setFormData({ ...formData, foodType: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {FOOD_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description" className="text-base font-semibold mb-3 block">
                Descrição (opcional)
              </Label>
              <Textarea
                id="description"
                placeholder="Ex: Maçãs vermelhas, bem conservadas"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="min-h-24 resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 2: Quantidade e Validade */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity" className="text-base font-semibold mb-3 block">
                  Quantidade
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="100"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="unit" className="text-base font-semibold mb-3 block">
                  Unidade
                </Label>
                <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Quilograma (kg)</SelectItem>
                    <SelectItem value="g">Grama (g)</SelectItem>
                    <SelectItem value="un">Unidade</SelectItem>
                    <SelectItem value="caixa">Caixa</SelectItem>
                    <SelectItem value="lata">Lata</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="expiryDate" className="text-base font-semibold mb-3 block">
                Data de Validade
              </Label>
              <Input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Step 3: Local e Horário */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="location" className="text-base font-semibold mb-3 block">
                Local de Coleta
              </Label>
              <Textarea
                id="location"
                placeholder="Rua, número, complemento, cidade"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="min-h-20 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pickupDate" className="text-base font-semibold mb-3 block">
                  Data de Coleta
                </Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="pickupTime" className="text-base font-semibold mb-3 block">
                  Horário
                </Label>
                <Input
                  id="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Revisão */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground">Tipo de Alimento:</span>
                <span className="font-semibold">{formData.foodType}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground">Quantidade:</span>
                <span className="font-semibold">
                  {formData.quantity} {formData.unit}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground">Validade:</span>
                <span className="font-semibold">{formData.expiryDate}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground">Coleta:</span>
                <span className="font-semibold">
                  {formData.pickupDate} às {formData.pickupTime}
                </span>
              </div>
            </div>

            <div>
              <Label htmlFor="notes" className="text-base font-semibold mb-3 block">
                Observações Adicionais (opcional)
              </Label>
              <Textarea
                id="notes"
                placeholder="Informações importantes para as ONGs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="min-h-20 resize-none"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8 justify-end">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>
          )}
          {step < 4 ? (
            <Button
              onClick={handleNext}
              className="w-full sm:w-auto flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handlePublish}
              className="w-full sm:w-auto flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Check className="w-4 h-4" />
              Publicar Doação
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
