import { Layout } from '@/components/Layout';
import { mockDonorMetrics, mockNGOMetrics, mockImpactMetrics } from '@/lib/mockData';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Leaf, Users } from 'lucide-react';

export default function Impact() {
  const chartData = [
    { month: 'Jan', meals: 850, kg: 280 },
    { month: 'Fev', meals: 920, kg: 310 },
    { month: 'Mar', meals: 1100, kg: 380 },
  ];

  const categoryData = [
    { name: 'Refeições', value: 45 },
    { name: 'Hortifrúti', value: 30 },
    { name: 'Padaria', value: 15 },
    { name: 'Outros', value: 10 },
  ];

  const COLORS = ['#2D7A4F', '#3A9B63', '#E07B39', '#D4A017'];

  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">📊 Impacto</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <MetricCard
            icon={<Leaf className="text-primary" size={32} />}
            value={mockNGOMetrics.mealsDistributed}
            label="Refeições este mês"
            trend="+12%"
          />
          <MetricCard
            icon={<TrendingUp className="text-secondary" size={32} />}
            value={mockNGOMetrics.collectionsThisMonth}
            label="Coletas realizadas"
            trend="+8%"
          />
          <MetricCard
            icon={<Users className="text-primary" size={32} />}
            value={mockNGOMetrics.totalMealsDistributed}
            label="Refeições acumuladas"
            trend="+24%"
          />
          <MetricCard
            icon={<Leaf className="text-primary" size={32} />}
            value={mockNGOMetrics.totalKgReceived}
            label="Kg recebidos"
            trend="+18%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Line Chart */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Evolução mensal</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis stroke="#9E9E9E" />
                <YAxis stroke="#9E9E9E" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="meals"
                  stroke="#2D7A4F"
                  strokeWidth={2}
                  name="Refeições"
                />
                <Line
                  type="monotone"
                  dataKey="kg"
                  stroke="#E07B39"
                  strokeWidth={2}
                  name="Kg"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Distribuição por categoria</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Comparativo mensal</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis stroke="#9E9E9E" />
              <YAxis stroke="#9E9E9E" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="meals" fill="#2D7A4F" name="Refeições" />
              <Bar dataKey="kg" fill="#E07B39" name="Kg" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Global Impact */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Impacto Global da FoodBridge</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">
                {mockImpactMetrics.mealsGenerated.toLocaleString()}
              </p>
              <p className="text-muted-foreground">Refeições geradas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">
                {mockImpactMetrics.kgRecovered.toLocaleString()}
              </p>
              <p className="text-muted-foreground">Kg recuperados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">
                {mockImpactMetrics.ngosBenefited}
              </p>
              <p className="text-muted-foreground">ONGs beneficiadas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">
                {mockImpactMetrics.co2Avoided.toLocaleString()}
              </p>
              <p className="text-muted-foreground">Ton CO₂ evitadas</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MetricCard({
  icon,
  value,
  label,
  trend,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  trend: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="text-2xl">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-xs text-primary font-semibold">{trend}</p>
    </div>
  );
}
