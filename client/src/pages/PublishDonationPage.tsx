import { Button } from "@/components/ui/button";
import { DonorPublishModal } from "@/components/PublishDonationModals/DonorPublishModal";
import { ProducerPublishModal } from "@/components/PublishDonationModals/ProducerPublishModal";
import { DistributorPublishModal } from "@/components/PublishDonationModals/DistributorPublishModal";
import { useState } from "react";
import { Heart, Leaf, Truck, ChevronRight } from "lucide-react";

export default function PublishDonationPage() {
  const [donorOpen, setDonorOpen] = useState(false);
  const [producerOpen, setProducerOpen] = useState(false);
  const [distributorOpen, setDistributorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
            Publicar Doação
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha seu tipo de participante e publique seus alimentos para ajudar quem precisa
          </p>
        </div>

        {/* Cards Grid - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Doador Card */}
          <div className="group bg-card border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={() => setDonorOpen(true)}>
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Doador</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Restaurantes, supermercados e pessoas físicas com alimentos excedentes
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Publicação rápida</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Dados básicos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Impacto imediato</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-between group/btn">
              <span>Publicar Doação</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Produtor Card */}
          <div className="group bg-card border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={() => setProducerOpen(true)}>
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Produtor</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Agricultores e produtores rurais com excedentes de produção
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Detalhes de cultivo</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Certificações</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Lotes grandes</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-between group/btn">
              <span>Publicar Lote</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Distribuidor Card */}
          <div className="group bg-card border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={() => setDistributorOpen(true)}>
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Distribuidor</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Distribuidoras e varejistas com produtos em excesso ou próximos do vencimento
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Lotes variados</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Transporte disponível</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-0.5">•</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Grandes volumes</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-between group/btn">
              <span>Publicar Lote</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Como Funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Preencha os Dados</h3>
                <p className="text-xs text-muted-foreground mt-1">Informações sobre o alimento</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Revise</h3>
                <p className="text-xs text-muted-foreground mt-1">Confira todas as informações</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Publique</h3>
                <p className="text-xs text-muted-foreground mt-1">Torne disponível para ONGs</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                <span className="text-primary font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Acompanhe</h3>
                <p className="text-xs text-muted-foreground mt-1">Veja o impacto da sua doação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DonorPublishModal open={donorOpen} onOpenChange={setDonorOpen} />
      <ProducerPublishModal open={producerOpen} onOpenChange={setProducerOpen} />
      <DistributorPublishModal open={distributorOpen} onOpenChange={setDistributorOpen} />
    </div>
  );
}
