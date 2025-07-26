import React from 'react';
import { cn } from '../../utils/classNames';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow-md', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn('p-6 border-b', className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}