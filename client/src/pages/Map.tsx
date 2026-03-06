import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { mockDonations } from '@/lib/mockData';
import { MapPin, X } from 'lucide-react';

export default function MapPage() {
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);

  const selectedDonationData = mockDonations.find((d) => d.id === selectedDonation);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      AVAILABLE: 'bg-green-500',
      PARTIALLY_CLAIMED: 'bg-yellow-500',
      FULLY_CLAIMED: 'bg-gray-500',
      PICKUP_SCHEDULED: 'bg-blue-500',
      PICKED_UP: 'bg-blue-600',
      COMPLETED: 'bg-green-600',
      EXPIRED: 'bg-red-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="bg-background border-b border-border p-6">
          <h1 className="text-2xl font-bold text-foreground">🗺️ Mapa de Doações</h1>
          <p className="text-muted-foreground">Visualize doações disponíveis próximas a você</p>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative bg-muted overflow-hidden">
          {/* Simplified Map Visualization */}
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            {/* Background */}
            <rect width="1000" height="600" fill="#f5f5f5" />

            {/* Grid */}
            <g stroke="#e5e5e5" strokeWidth="1" opacity="0.5">
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} />
              ))}
            </g>

            {/* Donation Pins */}
            {mockDonations.map((donation, idx) => {
              const x = 100 + (idx % 5) * 180 + Math.random() * 50;
              const y = 100 + Math.floor(idx / 5) * 200 + Math.random() * 50;
              const isSelected = donation.id === selectedDonation;
              const statusColor = getStatusColor(donation.status);

              return (
                <g
                  key={donation.id}
                  onClick={() => setSelectedDonation(donation.id)}
                  className="cursor-pointer"
                >
                  {/* Pin Circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 20 : 15}
                    className={`${statusColor} transition-all opacity-80 hover:opacity-100`}
                    strokeWidth="2"
                    stroke="white"
                  />

                  {/* Icon inside pin */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="12"
                    fontWeight="bold"
                    fill="white"
                  >
                    {donation.type === 'lot' ? '📦' : '🍽️'}
                  </text>

                  {/* Cluster indicator */}
                  {idx % 3 === 0 && (
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 25 : 20}
                      fill="none"
                      stroke={statusColor}
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Selected Donation Panel */}
          {selectedDonationData && (
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-card border border-border rounded-lg shadow-lg p-4 z-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">
                  {selectedDonationData.foodType}
                </h3>
                <button
                  onClick={() => setSelectedDonation(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <p className="text-muted-foreground">
                  <strong>Doador:</strong> {selectedDonationData.donorName}
                </p>
                <p className="text-muted-foreground">
                  <strong>Quantidade:</strong> {selectedDonationData.totalQuantity}{' '}
                  {selectedDonationData.unit}
                </p>
                <p className="text-muted-foreground">
                  <strong>Distância:</strong> {selectedDonationData.distance} km
                </p>
                <p className="text-muted-foreground">
                  <strong>Validade:</strong> {selectedDonationData.validity}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>{selectedDonationData.location}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" size="sm">
                  Ver detalhes
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                  Reivindicar →
                </Button>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="absolute top-6 right-6 bg-card border border-border rounded-lg p-4 hidden md:block">
            <p className="text-sm font-semibold text-foreground mb-3">Legenda</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground">Disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-muted-foreground">Parcialmente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-muted-foreground">Urgente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
