import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { DonationCard } from '@/components/DonationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockDonations } from '@/lib/mockData';
import { Search, Filter } from 'lucide-react';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDonations = mockDonations.filter((donation) => {
    const matchesSearch =
      donation.foodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.donorName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === 'all' ||
      (filterType === 'available' && donation.status === 'AVAILABLE') ||
      (filterType === 'partial' && donation.status === 'PARTIALLY_CLAIMED') ||
      (filterType === 'urgent' &&
        new Date(donation.validity).getTime() - new Date().getTime() < 24 * 60 * 60 * 1000);

    return matchesSearch && matchesType;
  });

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-4">🔍 Explorar Doações</h1>

          {/* Search Bar */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar por tipo de alimento ou doador..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter size={20} />
              Filtros
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-muted rounded-lg p-4 mb-4 space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Status</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'Todos' },
                    { value: 'available', label: 'Disponível' },
                    { value: 'partial', label: 'Parcialmente' },
                    { value: 'urgent', label: 'Urgente' },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setFilterType(filter.value)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        filterType === filter.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border text-foreground hover:bg-muted'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <h2 className="text-xl font-semibold text-foreground">Recomendadas para você</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockDonations
              .filter((d) => d.distance < 5 && d.status === 'AVAILABLE')
              .slice(0, 2)
              .map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                  onClaim={() => console.log('Claim:', donation.id)}
                  onView={() => console.log('View:', donation.id)}
                />
              ))}
          </div>
        </div>

        {/* All Donations */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Todas as doações ({filteredDonations.length})
          </h2>
          {filteredDonations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDonations.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                  onClaim={() => console.log('Claim:', donation.id)}
                  onView={() => console.log('View:', donation.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-lg font-semibold text-foreground mb-2">
                Nenhuma doação encontrada
              </p>
              <p className="text-muted-foreground">
                Tente ajustar seus filtros ou volte mais tarde
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
