import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Users, TrendingUp, MapPin, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">🍽️ FoodBridge</div>
          <Button
            onClick={() => setLocation('/login')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Acessar Sistema →
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Reduza desperdício de alimentos. <span className="text-primary">Amplie impacto social.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            FoodBridge conecta doadores de alimentos excedentes com ONGs e instituições sociais,
            transformando desperdício em refeições para quem precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation('/login')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Explorar Protótipo <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Impacto Global da FoodBridge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={<Leaf className="text-primary" size={32} />}
              value="1.2M"
              label="Refeições geradas"
              description="Pessoas alimentadas através da plataforma"
            />
            <MetricCard
              icon={<TrendingUp className="text-secondary" size={32} />}
              value="342K"
              label="Toneladas recuperadas"
              description="Alimentos que não foram desperdiçados"
            />
            <MetricCard
              icon={<Users className="text-primary" size={32} />}
              value="820"
              label="ONGs parceiras"
              description="Instituições sociais ativas"
            />
            <MetricCard
              icon={<MapPin className="text-primary" size={32} />}
              value="4.2K"
              label="CO₂ evitado (ton)"
              description="Redução de emissões de carbono"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Como funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              step="1"
              title="Doadores publicam"
              description="Restaurantes, produtores e distribuidores publicam alimentos excedentes em tempo real"
              icon="📤"
            />
            <ProcessCard
              step="2"
              title="ONGs descobrem"
              description="Instituições sociais encontram doações próximas através do mapa interativo"
              icon="🔍"
            />
            <ProcessCard
              step="3"
              title="Coletas realizadas"
              description="Voluntários coletam e distribuem alimentos para quem precisa"
              icon="🚗"
            />
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Para quem é FoodBridge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UserTypeCard
              icon="🍽️"
              title="Doadores"
              description="Restaurantes, padarias e supermercados que querem reduzir desperdício"
              volume="Pequeno/Médio"
            />
            <UserTypeCard
              icon="🌾"
              title="Produtores"
              description="Fazendas e produtores rurais com alimentos in natura"
              volume="Grande"
            />
            <UserTypeCard
              icon="🏭"
              title="Distribuidores"
              description="Atacadistas e centrais de distribuição"
              volume="Muito Grande"
            />
            <UserTypeCard
              icon="🤝"
              title="ONGs"
              description="Instituições sociais que distribuem alimentos"
              volume="Receptoras"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Recursos principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureItem
              icon={<Zap className="text-primary" size={24} />}
              title="Publicação rápida"
              description="Publique uma doação em menos de 2 minutos com interface intuitiva"
            />
            <FeatureItem
              icon={<MapPin className="text-primary" size={24} />}
              title="Mapa interativo"
              description="Visualize doações disponíveis próximas com filtros inteligentes"
            />
            <FeatureItem
              icon={<Shield className="text-primary" size={24} />}
              title="Matching automático"
              description="Sistema recomenda doações ideais baseado em localização e capacidade"
            />
            <FeatureItem
              icon={<TrendingUp className="text-primary" size={24} />}
              title="Métricas de impacto"
              description="Acompanhe refeições geradas, CO₂ evitado e vidas impactadas"
            />
            <FeatureItem
              icon={<Users className="text-primary" size={24} />}
              title="Gestão de voluntários"
              description="ONGs organizam voluntários para coletas eficientes"
            />
            <FeatureItem
              icon={<Leaf className="text-primary" size={24} />}
              title="Sustentabilidade"
              description="Contribua para economia circular e redução de desperdício"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Números que falam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">89</p>
              <p className="text-lg text-muted-foreground">Doadores ativos</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">342</p>
              <p className="text-lg text-muted-foreground">ONGs beneficiadas</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">1.2M</p>
              <p className="text-lg text-muted-foreground">Refeições distribuídas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pronto para fazer a diferença?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore o protótipo interativo e veja como FoodBridge funciona na prática
          </p>
          <Button
            onClick={() => setLocation('/login')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Acessar Protótipo <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">FoodBridge</h3>
              <p className="text-sm text-muted-foreground">
                Conectando doadores com ONGs para reduzir desperdício e ampliar impacto social
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Recursos</a></li>
                <li><a href="#" className="hover:text-primary">Preços</a></li>
                <li><a href="#" className="hover:text-primary">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Sobre</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary">Termos</a></li>
                <li><a href="#" className="hover:text-primary">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 FoodBridge. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MetricCard({
  icon,
  value,
  label,
  description,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="text-3xl font-bold text-primary mb-2">{value}</p>
      <p className="font-semibold text-foreground mb-1">{label}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ProcessCard({
  step,
  title,
  description,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-lg p-8 text-center h-full">
        <div className="text-5xl mb-4">{icon}</div>
        <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function UserTypeCard({
  icon,
  title,
  description,
  volume,
}: {
  icon: string;
  title: string;
  description: string;
  volume: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <p className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
        {volume}
      </p>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
