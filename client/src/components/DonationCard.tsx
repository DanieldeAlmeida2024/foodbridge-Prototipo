import { Donation } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Shield } from 'lucide-react';

interface DonationCardProps {
  donation: Donation;
  onClaim?: () => void;
  onView?: () => void;
}

export function DonationCard({ donation, onClaim, onView }: DonationCardProps) {
  const getStatusColor = (status: Donation['status']) => {
    const colors: Record<Donation['status'], string> = {
      AVAILABLE: 'bg-green-100 text-green-800',
      PARTIALLY_CLAIMED: 'bg-yellow-100 text-yellow-800',
      FULLY_CLAIMED: 'bg-gray-100 text-gray-800',
      PICKUP_SCHEDULED: 'bg-blue-100 text-blue-800',
      PICKED_UP: 'bg-blue-200 text-blue-900',
      COMPLETED: 'bg-green-200 text-green-900',
      EXPIRED: 'bg-red-100 text-red-800',
    };
    return colors[status];
  };

  const getStatusLabel = (status: Donation['status']) => {
    const labels: Record<Donation['status'], string> = {
      AVAILABLE: '● Disponível',
      PARTIALLY_CLAIMED: '● Parcialmente',
      FULLY_CLAIMED: '● Esgotado',
      PICKUP_SCHEDULED: '● Agendado',
      PICKED_UP: '● Coletado',
      COMPLETED: '● Concluído',
      EXPIRED: '● Expirado',
    };
    return labels[status];
  };

  const claimedQuantity = donation.claimedBy.reduce((sum, claim) => sum + claim.quantity, 0);
  const remainingQuantity = donation.totalQuantity - claimedQuantity;
  const claimsCount = donation.claimedBy.length;
  const maxClaims = Math.floor(donation.totalQuantity / donation.limitPerNGO);

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg">{donation.foodType}</h3>
          <p className="text-sm text-muted-foreground">{donation.donorName}</p>
        </div>
        <Badge className={getStatusColor(donation.status)}>
          {getStatusLabel(donation.status)}
        </Badge>
      </div>

      {/* Quantity Info */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
        <div className="bg-muted rounded p-2">
          <p className="text-muted-foreground text-xs">Total</p>
          <p className="font-semibold text-foreground">
            {donation.totalQuantity} {donation.unit === 'units' ? 'un.' : donation.unit}
          </p>
        </div>
        <div className="bg-muted rounded p-2">
          <p className="text-muted-foreground text-xs">Limite/ONG</p>
          <p className="font-semibold text-foreground">
            {donation.limitPerNGO} {donation.unit === 'units' ? 'un.' : donation.unit}
          </p>
        </div>
        <div className="bg-muted rounded p-2">
          <p className="text-muted-foreground text-xs">Distância</p>
          <p className="font-semibold text-foreground">{donation.distance} km</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs text-muted-foreground">Progresso de reivindicação</p>
          <p className="text-xs font-semibold text-foreground">
            {claimedQuantity}/{donation.totalQuantity}
          </p>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{
              width: `${(claimedQuantity / donation.totalQuantity) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {claimsCount}/{maxClaims} ONGs · {remainingQuantity} disponível
        </p>
      </div>

      {/* Location & Time */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} className="text-primary" />
          <span>{donation.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={16} className="text-secondary" />
          <span>
            {donation.pickupWindow.date} das {donation.pickupWindow.startTime} às{' '}
            {donation.pickupWindow.endTime}
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield size={16} className="text-primary" />
          <span>Limite por ONG: {donation.limitPerNGO}</span>
        </div>
      </div>

      {/* Validity Warning */}
      {new Date(donation.validity).getTime() - new Date().getTime() < 24 * 60 * 60 * 1000 && (
        <div className="bg-secondary/10 border border-secondary rounded p-2 mb-4">
          <p className="text-xs text-secondary font-semibold">⚠️ Validade próxima!</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={onView}
        >
          Ver detalhes
        </Button>
        {onClaim && (
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={onClaim}
          >
            Reivindicar →
          </Button>
        )}
      </div>
    </div>
  );
}
