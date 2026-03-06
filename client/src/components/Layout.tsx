import { useState } from 'react';
import { Menu, X, LogOut, Settings, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { UserRole } from '@/lib/mockData';

interface LayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
  userName: string;
  organizationName: string;
}

export function Layout({ children, userRole, userName, organizationName }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [, setLocation] = useLocation();

  const navItems = getNavItems(userRole);

  const handleLogout = () => {
    setLocation('/');
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-sidebar-border">
          <div className="text-2xl font-bold text-primary">
            {sidebarOpen ? '🍽️ FoodBridge' : '🍽️'}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setLocation(item.href)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t border-sidebar-border p-4 space-y-2">
          <button className="w-full px-3 py-2 flex items-center gap-2 hover:bg-sidebar-accent rounded text-sidebar-foreground text-sm">
            <User size={18} />
            {sidebarOpen && <span>Perfil</span>}
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 flex items-center gap-2 hover:bg-destructive hover:text-destructive-foreground rounded text-sidebar-foreground text-sm"
          >
            <LogOut size={18} />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>

        {/* Toggle Sidebar */}
        <div className="border-t border-sidebar-border p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Olá, {userName} 👋
            </h1>
            <p className="text-sm text-muted-foreground">{organizationName}</p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings size={20} />
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              {userName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
}

function getNavItems(role: UserRole) {
  const baseItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', href: '/dashboard' },
  ];

  const roleItems: Record<UserRole, typeof baseItems> = {
    donor: [
      ...baseItems,
      { id: 'donate', icon: '➕', label: 'Nova Doação', href: '/donate' },
      { id: 'mydonations', icon: '📋', label: 'Minhas Doações', href: '/my-donations' },
      { id: 'impact', icon: '📊', label: 'Impacto', href: '/impact' },
    ],
    producer: [
      ...baseItems,
      { id: 'lot', icon: '➕', label: 'Novo Lote', href: '/lot' },
      { id: 'mylots', icon: '📦', label: 'Meus Lotes', href: '/my-lots' },
      { id: 'impact', icon: '📊', label: 'Impacto', href: '/impact' },
    ],
    distributor: [
      ...baseItems,
      { id: 'lot', icon: '➕', label: 'Novo Lote', href: '/lot' },
      { id: 'mylots', icon: '📦', label: 'Meus Lotes', href: '/my-lots' },
      { id: 'impact', icon: '📊', label: 'Impacto', href: '/impact' },
    ],
    ngo: [
      ...baseItems,
      { id: 'explore', icon: '🔍', label: 'Explorar', href: '/explore' },
      { id: 'map', icon: '🗺️', label: 'Mapa', href: '/map' },
      { id: 'claims', icon: '📦', label: 'Requisições', href: '/claims' },
      { id: 'pickups', icon: '🚗', label: 'Coletas', href: '/pickups' },
      { id: 'volunteers', icon: '👥', label: 'Voluntários', href: '/volunteers' },
      { id: 'impact', icon: '📊', label: 'Impacto', href: '/impact' },
    ],
    admin: [
      ...baseItems,
      { id: 'users', icon: '👥', label: 'Usuários', href: '/users' },
      { id: 'donations', icon: '📦', label: 'Doações', href: '/admin-donations' },
      { id: 'metrics', icon: '📊', label: 'Métricas', href: '/metrics' },
    ],
  };

  return roleItems[role];
}
