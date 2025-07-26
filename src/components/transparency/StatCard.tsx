import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function StatCard({ icon: Icon, title, description }: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <Icon className="w-12 h-12 text-emerald-600 mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}