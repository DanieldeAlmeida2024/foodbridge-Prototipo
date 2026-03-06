import { useState } from "react";
import { ChevronRight, Search, Users, Truck, Gift } from "lucide-react";

export function NGOFlowDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Explorar Doações",
      description: "Veja alimentos disponíveis",
      icon: Search,
      details: [
        "Filtrar por tipo de alimento",
        "Ver quantidade e validade",
        "Verificar local de coleta",
        "Comparar múltiplas opções",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Reivindicar Doação",
      description: "Solicite o alimento desejado",
      icon: Gift,
      details: [
        "Selecionar quantidade",
        "Confirmar janela de coleta",
        "Designar voluntário",
        "Adicionar observações",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Organizar Coleta",
      description: "Agende com o voluntário",
      icon: Users,
      details: [
        "Confirmar data e hora",
        "Preparar transporte",
        "Instruções de acesso",
        "Contato do doador",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Receber e Registrar",
      description: "Alimento chega à ONG",
      icon: Truck,
      details: [
        "Voluntário coleta alimento",
        "Foto de comprovação",
        "Registrar quantidade",
        "Impacto na comunidade",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <div className="w-full">
      {/* Timeline */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setActiveStep(idx)}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all ${
                  activeStep === idx
                    ? "bg-primary text-white scale-110"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
              >
                {idx + 1}
              </button>
              {idx < steps.length - 1 && (
                <div className="w-6 h-0.5 bg-muted hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${steps[activeStep].color}`}
            >
              {steps[activeStep].icon && (() => {
                const IconComponent = steps[activeStep].icon;
                return <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />;
              })()}
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps[activeStep].details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
        >
          Anterior
        </button>
        <div className="text-sm text-muted-foreground flex items-center">
          Passo {activeStep + 1} de {steps.length}
        </div>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm sm:text-base"
        >
          Próximo <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
