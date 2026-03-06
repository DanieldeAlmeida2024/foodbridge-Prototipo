// Mock Data for FoodBridge Platform

export type UserRole = 'donor' | 'producer' | 'distributor' | 'ngo' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  organization: string;
  address: string;
  phone: string;
  avatar?: string;
  verified: boolean;
}

export interface Donation {
  id: string;
  type: 'simple' | 'lot';
  foodType: string;
  quantity: number;
  unit: 'units' | 'kg' | 'liters' | 'boxes';
  totalQuantity: number;
  limitPerNGO: number;
  validity: string;
  status: 'AVAILABLE' | 'PARTIALLY_CLAIMED' | 'FULLY_CLAIMED' | 'PICKUP_SCHEDULED' | 'PICKED_UP' | 'COMPLETED' | 'EXPIRED';
  donorName: string;
  donorId: string;
  location: string;
  distance: number;
  pickupWindow: {
    date: string;
    startTime: string;
    endTime: string;
  };
  claimedBy: Array<{
    ngoName: string;
    quantity: number;
    claimDate: string;
  }>;
  createdAt: string;
  mealsGenerated?: number;
  co2Avoided?: number;
}

export interface Claim {
  id: string;
  donationId: string;
  ngoId: string;
  ngoName: string;
  quantity: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'SCHEDULED' | 'COMPLETED';
  volunteerAssigned?: string;
  pickupDate: string;
  pickupTime: string;
  createdAt: string;
}

export interface Volunteer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  ngoId: string;
  collectionsCompleted: number;
  status: 'active' | 'inactive';
}

export interface ImpactMetric {
  mealsGenerated: number;
  kgRecovered: number;
  co2Avoided: number;
  ngosBenefited: number;
  donorsActive: number;
}

// Current logged-in user (simulated)
export const currentUser: User = {
  id: 'user-001',
  name: 'João Silva',
  role: 'ngo',
  email: 'contato@ongEsperanca.org.br',
  organization: 'ONG Esperança',
  address: 'Rua das Flores, 123 - São Paulo, SP',
  phone: '(11) 98765-4321',
  verified: true,
};

// Mock Donations
export const mockDonations: Donation[] = [
  {
    id: 'don-001',
    type: 'simple',
    foodType: 'Refeições prontas',
    quantity: 20,
    unit: 'units',
    totalQuantity: 20,
    limitPerNGO: 5,
    validity: '2026-03-06',
    status: 'AVAILABLE',
    donorName: 'Restaurante Bom Sabor',
    donorId: 'donor-001',
    location: 'Rua das Flores, 123 - Pinheiros, SP',
    distance: 2.3,
    pickupWindow: {
      date: '2026-03-06',
      startTime: '11:00',
      endTime: '14:00',
    },
    claimedBy: [],
    createdAt: '2026-03-06T08:30:00Z',
    mealsGenerated: 20,
    co2Avoided: 8.5,
  },
  {
    id: 'don-002',
    type: 'simple',
    foodType: 'Padaria',
    quantity: 30,
    unit: 'units',
    totalQuantity: 30,
    limitPerNGO: 10,
    validity: '2026-03-07',
    status: 'PARTIALLY_CLAIMED',
    donorName: 'Padaria Central',
    donorId: 'donor-002',
    location: 'Avenida Paulista, 1000 - São Paulo, SP',
    distance: 3.7,
    pickupWindow: {
      date: '2026-03-07',
      startTime: '08:00',
      endTime: '12:00',
    },
    claimedBy: [
      {
        ngoName: 'ONG Vida Nova',
        quantity: 15,
        claimDate: '2026-03-06T09:15:00Z',
      },
    ],
    createdAt: '2026-03-06T07:00:00Z',
    mealsGenerated: 30,
    co2Avoided: 12.8,
  },
  {
    id: 'don-003',
    type: 'lot',
    foodType: 'Hortifrúti',
    quantity: 800,
    unit: 'kg',
    totalQuantity: 800,
    limitPerNGO: 100,
    validity: '2026-03-10',
    status: 'AVAILABLE',
    donorName: 'Fazenda São João',
    donorId: 'producer-001',
    location: 'Estrada Rural, km 12 - Campinas, SP',
    distance: 8.1,
    pickupWindow: {
      date: '2026-03-10',
      startTime: '07:00',
      endTime: '10:00',
    },
    claimedBy: [],
    createdAt: '2026-03-05T14:20:00Z',
    mealsGenerated: 3200,
    co2Avoided: 340,
  },
  {
    id: 'don-004',
    type: 'lot',
    foodType: 'Grãos',
    quantity: 500,
    unit: 'kg',
    totalQuantity: 500,
    limitPerNGO: 50,
    validity: '2026-03-12',
    status: 'PARTIALLY_CLAIMED',
    donorName: 'CEASA Regional',
    donorId: 'distributor-001',
    location: 'CEASA - São Paulo, SP',
    distance: 12.5,
    pickupWindow: {
      date: '2026-03-12',
      startTime: '06:00',
      endTime: '09:00',
    },
    claimedBy: [
      {
        ngoName: 'ONG Renascer',
        quantity: 100,
        claimDate: '2026-03-05T16:45:00Z',
      },
      {
        ngoName: 'ONG Esperança',
        quantity: 75,
        claimDate: '2026-03-05T17:20:00Z',
      },
    ],
    createdAt: '2026-03-04T10:00:00Z',
    mealsGenerated: 2000,
    co2Avoided: 210,
  },
  {
    id: 'don-005',
    type: 'simple',
    foodType: 'Laticínios',
    quantity: 50,
    unit: 'liters',
    totalQuantity: 50,
    limitPerNGO: 15,
    validity: '2026-03-06',
    status: 'COMPLETED',
    donorName: 'Laticínios Silva',
    donorId: 'donor-003',
    location: 'Rua do Comércio, 456 - São Paulo, SP',
    distance: 5.2,
    pickupWindow: {
      date: '2026-03-06',
      startTime: '09:00',
      endTime: '11:00',
    },
    claimedBy: [
      {
        ngoName: 'ONG Esperança',
        quantity: 30,
        claimDate: '2026-03-05T18:00:00Z',
      },
    ],
    createdAt: '2026-03-05T06:00:00Z',
    mealsGenerated: 200,
    co2Avoided: 21.3,
  },
];

// Mock Claims
export const mockClaims: Claim[] = [
  {
    id: 'claim-001',
    donationId: 'don-001',
    ngoId: 'ngo-001',
    ngoName: 'ONG Esperança',
    quantity: 5,
    status: 'SCHEDULED',
    volunteerAssigned: 'João Silva',
    pickupDate: '2026-03-06',
    pickupTime: '11:30',
    createdAt: '2026-03-06T09:00:00Z',
  },
  {
    id: 'claim-002',
    donationId: 'don-002',
    ngoId: 'ngo-002',
    ngoName: 'ONG Vida Nova',
    quantity: 15,
    status: 'SCHEDULED',
    volunteerAssigned: 'Maria Santos',
    pickupDate: '2026-03-07',
    pickupTime: '08:30',
    createdAt: '2026-03-06T09:15:00Z',
  },
  {
    id: 'claim-003',
    donationId: 'don-004',
    ngoId: 'ngo-001',
    ngoName: 'ONG Esperança',
    quantity: 75,
    status: 'SCHEDULED',
    volunteerAssigned: 'Carlos Mendes',
    pickupDate: '2026-03-12',
    pickupTime: '06:45',
    createdAt: '2026-03-05T17:20:00Z',
  },
];

// Mock Volunteers
export const mockVolunteers: Volunteer[] = [
  {
    id: 'vol-001',
    name: 'João Silva',
    phone: '(11) 99999-0001',
    email: 'joao@email.com',
    ngoId: 'ngo-001',
    collectionsCompleted: 12,
    status: 'active',
  },
  {
    id: 'vol-002',
    name: 'Maria Santos',
    phone: '(11) 99999-0002',
    email: 'maria@email.com',
    ngoId: 'ngo-001',
    collectionsCompleted: 8,
    status: 'active',
  },
  {
    id: 'vol-003',
    name: 'Carlos Mendes',
    phone: '(11) 99999-0003',
    ngoId: 'ngo-001',
    collectionsCompleted: 15,
    status: 'active',
  },
];

// Mock Impact Metrics
export const mockImpactMetrics: ImpactMetric = {
  mealsGenerated: 1247000,
  kgRecovered: 342000,
  co2Avoided: 4200,
  ngosBenefited: 820,
  donorsActive: 89,
};

// Mock Donor Metrics
export const mockDonorMetrics = {
  donationsThisMonth: 12,
  activeDonations: 3,
  mealsGenerated: 847,
  co2Avoided: 2.1,
  totalDonations: 156,
  totalKgDonated: 423,
};

// Mock NGO Metrics
export const mockNGOMetrics = {
  donationsAvailable: 8,
  claimsScheduled: 3,
  mealsDistributed: 1240,
  collectionsThisMonth: 24,
  totalMealsDistributed: 12450,
  totalKgReceived: 3420,
};

// Mock Admin Metrics
export const mockAdminMetrics = {
  totalUsers: 1247,
  activeNGOs: 342,
  activeDonors: 89,
  volumeThisMonth: 4.2,
  pendingVerification: 4,
  reportedDonations: 2,
};

// Mock users for different roles
export const mockUsers: Record<UserRole, User> = {
  donor: {
    id: 'donor-001',
    name: 'Roberto Silva',
    role: 'donor',
    email: 'contato@bomsabor.com.br',
    organization: 'Restaurante Bom Sabor',
    address: 'Rua das Flores, 123 - Pinheiros, SP',
    phone: '(11) 3333-4444',
    verified: true,
  },
  producer: {
    id: 'producer-001',
    name: 'Antonio Oliveira',
    role: 'producer',
    email: 'contato@fazendaSaoJoao.com.br',
    organization: 'Fazenda São João',
    address: 'Estrada Rural, km 12 - Campinas, SP',
    phone: '(19) 3333-5555',
    verified: true,
  },
  distributor: {
    id: 'distributor-001',
    name: 'Marcos Costa',
    role: 'distributor',
    email: 'contato@ceasa.sp.gov.br',
    organization: 'CEASA Regional',
    address: 'CEASA - São Paulo, SP',
    phone: '(11) 3333-6666',
    verified: true,
  },
  ngo: {
    id: 'ngo-001',
    name: 'Fernanda Lima',
    role: 'ngo',
    email: 'contato@ongEsperanca.org.br',
    organization: 'ONG Esperança',
    address: 'Rua das Flores, 123 - São Paulo, SP',
    phone: '(11) 98765-4321',
    verified: true,
  },
  admin: {
    id: 'admin-001',
    name: 'Admin FoodBridge',
    role: 'admin',
    email: 'admin@foodbridge.org.br',
    organization: 'FoodBridge',
    address: 'São Paulo, SP',
    phone: '(11) 3333-7777',
    verified: true,
  },
};
