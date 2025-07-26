export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'citizen';
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  votes: number;
  author: string;
  createdAt: string;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved';
  location: string;
  createdAt: string;
}