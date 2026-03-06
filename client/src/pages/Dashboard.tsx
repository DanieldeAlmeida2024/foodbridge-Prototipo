import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { DonationCard } from '@/components/DonationCard';
import { DonorPublishModal } from '@/components/PublishDonationModals/DonorPublishModal';
import { ProducerPublishModal } from '@/components/PublishDonationModals/ProducerPublishModal';
import { DistributorPublishModal } from '@/components/PublishDonationModals/DistributorPublishModal';
import {
  mockDonations,
  mockDonorMetrics,
  mockNGOMetrics,
  mockAdminMetrics,
  UserRole,
} from '@/lib/mockData';
import { TrendingUp, Users, Package, Leaf } from 'lucide-react';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<UserRole>('ngo');
  const [userName, setUserName] = useState('Usuário');
  const [organizationName, setOrganizationName] = useState('Organização');
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const role = (localStorage.getItem('userRole') as UserRole) || 'ngo';
    const name = localStorage.getItem('userName') || 'Usuário';
    const org = localStorage.getItem('organizationName') || 'Organização';
    
    setUserRole(role);
    setUserName(name);
    setOrganizationName(org);

    if (!role) {
      setLocation('/');
    }
  }, [setLocation]);

  const renderDonorDashboard = () => (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          icon={<Package className="text-primary" />}
          label="Doações este mês"
          value={mockDonorMetrics.donationsThisMonth}
        />
        <MetricCard
          icon={<TrendingUp className="text-secondary" />}
          label="Ativas agora"
          value={mockDonorMetrics.activeDonations}
        />
        <MetricCard
          icon={<Leaf className="text-primary" />}
          label="Refeições geradas"
          value={mockDonorMetrics.mealsGenerated}
        />
        <MetricCard
          icon={<Users className="text-primary" />}
          label="CO₂ evitado (ton)"
          value={mockDonorMetrics.co2Avoided.toFixed(1)}
        />
      </div>

      {/* CTA */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Publicar nova doação</h2>
        <p className="text-muted-foreground mb-4">
          Compartilhe seus alimentos excedentes com ONGs parceiras
        </p>
        <Button 
          onClick={() => setShowPublishModal(true)}
          className="bg-primary hover:bg-primary/90"
        >
          ➕ Publicar Doação
        </Button>
      </div>

      {/* Recent Donations */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Minhas doações recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockDonations.slice(0, 4).map((donation) => (
            <DonationCard
              key={donation.id}
              donation={donation}
              onView={() => console.log('View:', donation.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderNGODashboard = () => (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          icon={<Package className="text-primary" />}
          label="Doações próximas"
          value={mockNGOMetrics.donationsAvailable}
        />
        <MetricCard
          icon={<TrendingUp className="text-secondary" />}
          label="Coletas agendadas"
          value={mockNGOMetrics.claimsScheduled}
        />
        <MetricCard
          icon={<Leaf className="text-primary" />}
          label="Refeições este mês"
          value={mockNGOMetrics.mealsDistributed}
        />
        <MetricCard
          icon={<Users className="text-primary" />}
          label="Coletas (mês)"
          value={mockNGOMetrics.collectionsThisMonth}
        />
      </div>

      {/* Matching Automático */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          🎯 Matching Automático
        </h2>
        <p className="text-muted-foreground mb-4">
          Encontramos {mockNGOMetrics.donationsAvailable} doações recomendadas para você
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Ver recomendações →
        </Button>
      </div>

      {/* Available Donations */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Doações disponíveis próximas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockDonations
            .filter((d) => d.status === 'AVAILABLE' || d.status === 'PARTIALLY_CLAIMED')
            .slice(0, 4)
            .map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
                showClaimModal={true}
                onView={() => console.log('View:', donation.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          icon={<Users className="text-primary" />}
          label="Total de usuários"
          value={mockAdminMetrics.totalUsers}
        />
        <MetricCard
          icon={<Package className="text-secondary" />}
          label="ONGs ativas"
          value={mockAdminMetrics.activeNGOs}
        />
        <MetricCard
          icon={<TrendingUp className="text-primary" />}
          label="Doadores ativos"
          value={mockAdminMetrics.activeDonors}
        />
        <MetricCard
          icon={<Leaf className="text-primary" />}
          label="Volume (ton)"
          value={mockAdminMetrics.volumeThisMonth.toFixed(1)}
        />
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-secondary/10 border border-secondary rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            ⚠️ Pendentes de verificação
          </h3>
          <p className="text-2xl font-bold text-secondary">
            {mockAdminMetrics.pendingVerification}
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            Revisar
          </Button>
        </div>
        <div className="bg-destructive/10 border border-destructive rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-2">
            🚨 Doações reportadas
          </h3>
          <p className="text-2xl font-bold text-destructive">
            {mockAdminMetrics.reportedDonations}
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            Revisar
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Atividade recente</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <ActivityItem
            title="Nova doação publicada"
            description="Restaurante Bom Sabor publicou 20 refeições"
            time="há 2 horas"
          />
          <ActivityItem
            title="Usuário verificado"
            description="ONG Esperança foi verificada"
            time="há 4 horas"
          />
          <ActivityItem
            title="Coleta completada"
            description="ONG Vida Nova coletou 15 refeições"
            time="há 6 horas"
          />
        </div>
      </div>
    </div>
  );

  return (
    <Layout userRole={userRole} userName={userName} organizationName={organizationName}>
      <div className="p-6">
        {userRole === 'donor' && renderDonorDashboard()}
        {userRole === 'ngo' && renderNGODashboard()}
        {userRole === 'admin' && renderAdminDashboard()}
        {(userRole === 'producer' || userRole === 'distributor') && renderDonorDashboard()}
      </div>
      
      {userRole === 'donor' && showPublishModal && (
        <DonorPublishModal open={showPublishModal} onOpenChange={setShowPublishModal} />
      )}
      {userRole === 'producer' && showPublishModal && (
        <ProducerPublishModal open={showPublishModal} onOpenChange={setShowPublishModal} />
      )}
      {userRole === 'distributor' && showPublishModal && (
        <DistributorPublishModal open={showPublishModal} onOpenChange={setShowPublishModal} />
      )}
    </Layout>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="text-2xl">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
      <div className="flex-1">
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
}
