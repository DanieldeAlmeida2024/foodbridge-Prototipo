import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockClaims, mockDonations } from '@/lib/mockData';
import { Calendar, Clock, MapPin, User, AlertCircle } from 'lucide-react';

export default function Pickups() {
  const scheduledClaims = mockClaims.filter((c) => c.status === 'SCHEDULED');

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">🚗 Coletas Agendadas</h1>

        <div className="space-y-4">
          {scheduledClaims.map((claim) => {
            const donation = mockDonations.find((d) => d.id === claim.donationId);
            if (!donation) return null;

            const isToday = claim.pickupDate === new Date().toISOString().split('T')[0];
            const isUrgent = new Date(donation.validity).getTime() - new Date().getTime() < 24 * 60 * 60 * 1000;

            return (
              <div
                key={claim.id}
                className={`rounded-lg p-6 border transition-all ${
                  isToday
                    ? 'bg-primary/5 border-primary/30 shadow-md'
                    : 'bg-card border-border hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {donation.foodType}
                    </h3>
                    <p className="text-sm text-muted-foreground">{donation.donorName}</p>
                  </div>
                  {isToday && (
                    <Badge className="bg-primary text-primary-foreground">📍 Hoje</Badge>
                  )}
                </div>

                {isUrgent && (
                  <div className="bg-secondary/10 border border-secondary rounded p-2 mb-4 flex items-center gap-2">
                    <AlertCircle size={16} className="text-secondary" />
                    <p className="text-xs text-secondary font-semibold">Validade próxima!</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{claim.pickupDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} className="text-primary" />
                      <span>{claim.pickupTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{donation.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-semibold">Quantidade:</span>
                      {claim.quantity} {donation.unit}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={16} className="text-primary" />
                      <span>{claim.volunteerAssigned || 'Não atribuído'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-semibold">Distância:</span>
                      {donation.distance} km
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver no mapa
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    ✓ Confirmar coleta
                  </Button>
                  <Button variant="destructive" size="sm">
                    Cancelar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {scheduledClaims.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-2xl mb-2">📭</p>
            <p className="text-lg font-semibold text-foreground mb-2">Nenhuma coleta agendada</p>
            <p className="text-muted-foreground mb-4">Explore doações e agende suas coletas</p>
            <Button className="bg-primary hover:bg-primary/90">
              Explorar doações →
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
