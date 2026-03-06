import { useState } from "react";
import { Heart, Leaf, Truck, Building2 } from "lucide-react";
import { DonorFlowDiagram } from "@/components/FlowDiagrams/DonorFlowDiagram";
import { ProducerFlowDiagram } from "@/components/FlowDiagrams/ProducerFlowDiagram";
import { DistributorFlowDiagram } from "@/components/FlowDiagrams/DistributorFlowDiagram";
import { NGOFlowDiagram } from "@/components/FlowDiagrams/NGOFlowDiagram";

export default function FlowDiagramsPage() {
  const [activeTab, setActiveTab] = useState("donor");

  const tabs = [
    {
      id: "donor",
      label: "Doador",
      icon: Heart,
      color: "from-blue-500 to-blue-600",
      description: "Restaurantes, supermercados e pessoas físicas",
    },
    {
      id: "producer",
      label: "Produtor",
      icon: Leaf,
      color: "from-emerald-500 to-emerald-600",
      description: "Agricultores e produtores rurais",
    },
    {
      id: "distributor",
      label: "Distribuidor",
      icon: Truck,
      color: "from-cyan-500 to-cyan-600",
      description: "Varejistas e distribuidoras",
    },
    {
      id: "ngo",
      label: "ONG",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      description: "Organizações sociais e instituições",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
            Fluxos de Operação
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda passo a passo como cada tipo de participante funciona na plataforma FoodBridge
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 sm:p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${tab.color}`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{tab.label}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{tab.description}</p>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
          {activeTab === "donor" && <DonorFlowDiagram />}
          {activeTab === "producer" && <ProducerFlowDiagram />}
          {activeTab === "distributor" && <DistributorFlowDiagram />}
          {activeTab === "ngo" && <NGOFlowDiagram />}
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">4</div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">Passos por Fluxo</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Cada participante segue um fluxo específico
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">Transparência</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Acompanhe cada etapa do processo
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Simples</div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">Intuitivo</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Interface clara e fácil de usar
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Rápido</div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">Eficiente</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Menos desperdício, mais impacto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
