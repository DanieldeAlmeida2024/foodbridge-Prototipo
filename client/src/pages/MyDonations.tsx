import { Layout } from '@/components/Layout';
import { DonationCard } from '@/components/DonationCard';
import { Button } from '@/components/ui/button';
import { mockDonations } from '@/lib/mockData';

export default function MyDonations() {
  const userDonations = mockDonations.filter((d) => d.donorId === 'donor-001');

  return (
    <Layout userRole="donor" userName="Roberto Silva" organizationName="Restaurante Bom Sabor">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">📋 Minhas Doações</h1>
          <Button className="bg-primary hover:bg-primary/90">
            ➕ Nova Doação
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userDonations.map((donation) => (
            <DonationCard
              key={donation.id}
              donation={donation}
              onView={() => console.log('View:', donation.id)}
            />
          ))}
        </div>

        {userDonations.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-2xl mb-2">📭</p>
            <p className="text-lg font-semibold text-foreground mb-2">Nenhuma doação publicada</p>
            <p className="text-muted-foreground mb-4">Comece compartilhando seus alimentos excedentes</p>
            <Button className="bg-primary hover:bg-primary/90">
              ➕ Publicar Primeira Doação
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
