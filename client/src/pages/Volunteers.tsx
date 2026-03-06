import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockVolunteers } from '@/lib/mockData';
import { Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Volunteers() {
  return (
    <Layout userRole="ngo" userName="Fernanda Lima" organizationName="ONG Esperança">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">👥 Voluntários</h1>
          <Button className="bg-primary hover:bg-primary/90">
            ➕ Cadastrar Voluntário
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="bg-secondary/10 border border-secondary rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-secondary">Responsabilidade da ONG</p>
            <p className="text-xs text-muted-foreground mt-1">
              A FoodBridge não gerencia voluntários. Sua organização é inteiramente responsável pelos voluntários cadastrados nesta plataforma.
            </p>
          </div>
        </div>

        {/* Volunteers List */}
        <div className="space-y-4">
          {mockVolunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{volunteer.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {volunteer.collectionsCompleted} coletas realizadas
                  </p>
                </div>
                <Badge
                  className={
                    volunteer.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }
                >
                  {volunteer.status === 'active' ? '● Ativo' : '● Inativo'}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} className="text-primary" />
                  <span>{volunteer.phone}</span>
                </div>
                {volunteer.email && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={16} className="text-primary" />
                    <span>{volunteer.email}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="destructive" size="sm">
                  Remover
                </Button>
              </div>
            </div>
          ))}
        </div>

        {mockVolunteers.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-2xl mb-2">👥</p>
            <p className="text-lg font-semibold text-foreground mb-2">Nenhum voluntário cadastrado</p>
            <p className="text-muted-foreground mb-4">Comece adicionando seus primeiros voluntários</p>
            <Button className="bg-primary hover:bg-primary/90">
              ➕ Cadastrar Primeiro Voluntário
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
