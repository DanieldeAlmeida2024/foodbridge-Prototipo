import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockClaims, mockDonations } from '@/lib/mockData';
import { Calendar, MapPin, User } from 'lucide-react';

export default function Claims() {
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      PENDING: 'bg-yellow-100 text-yellow-800',
      APPROVED: 'bg-green-100 text-green-800',
      REJECTED: 'bg-red-100 text-red-800',
      SCHEDULED: 'bg-blue-100 text-blue-800',
      COMPLETED: 'bg-green-200 text-green-900',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      PENDING: '⏳ Pendente',
      APPROVED: '✅ Aprovada',
      REJECTED: '❌ Rejeitada',
      SCHEDULED: '📅 Agendada',
      COMPLETED: '✓ Concluída',
    };
    return labels[status] || status;
  };

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">📦 Minhas Requisições</h1>

        <div className="space-y-4">
          {mockClaims.map((claim) => {
            const donation = mockDonations.find((d) => d.id === claim.donationId);
            if (!donation) return null;

            return (
              <div
                key={claim.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {donation.foodType}
                    </h3>
                    <p className="text-sm text-muted-foreground">{donation.donorName}</p>
                  </div>
                  <Badge className={getStatusColor(claim.status)}>
                    {getStatusLabel(claim.status)}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold">Quantidade:</span>
                    {claim.quantity} {donation.unit}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {claim.pickupDate}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    {donation.distance} km
                  </div>
                  {claim.volunteerAssigned && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={16} />
                      {claim.volunteerAssigned}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver detalhes
                  </Button>
                  {claim.status === 'SCHEDULED' && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      ✓ Confirmar coleta
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {mockClaims.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-2xl mb-2">📭</p>
            <p className="text-lg font-semibold text-foreground mb-2">Nenhuma requisição</p>
            <p className="text-muted-foreground">Explore doações disponíveis e faça suas primeiras requisições</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
