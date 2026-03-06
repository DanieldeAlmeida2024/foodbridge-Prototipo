import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockUsers, UserRole } from '@/lib/mockData';

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<'login' | 'roleselect'>('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setStep('roleselect');
    }
  };

  const handleRoleSelect = (role: UserRole) => {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', mockUsers[role].name);
    localStorage.setItem('organizationName', mockUsers[role].organization);
    setLocation('/dashboard');
  };

  if (step === 'roleselect') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">🍽️ FoodBridge</h1>
            <p className="text-lg text-muted-foreground">
              Escolha seu perfil para continuar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(mockUsers).map(([role, user]) => (
              <button
                key={role}
                onClick={() => handleRoleSelect(role as UserRole)}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all text-left"
              >
                <div className="text-4xl mb-3">
                  {role === 'donor' && '🍽️'}
                  {role === 'producer' && '🌾'}
                  {role === 'distributor' && '🏭'}
                  {role === 'ngo' && '🤝'}
                  {role === 'admin' && '⚙️'}
                </div>
                <h3 className="font-semibold text-foreground capitalize mb-1">
                  {role === 'donor' && 'Doador'}
                  {role === 'producer' && 'Produtor'}
                  {role === 'distributor' && 'Distribuidor'}
                  {role === 'ngo' && 'ONG'}
                  {role === 'admin' && 'Admin'}
                </h3>
                <p className="text-sm text-muted-foreground">{user.organization}</p>
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep('login')}
            className="mt-8 w-full text-center text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar ao login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">🍽️ FoodBridge</h1>
            <p className="text-muted-foreground">
              Plataforma de Redistribuição de Alimentos
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Não tem conta?{' '}
              <button className="text-primary hover:underline">Cadastre-se</button>
            </p>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              💡 <strong>Demo:</strong> Use qualquer e-mail/senha para acessar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
