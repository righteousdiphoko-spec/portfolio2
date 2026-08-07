'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'indigo' | 'slate' | 'outline' | 'success';
  size?: 'sm' | 'md';
}

export const Badge = ({
  className,
  children,
  variant = 'indigo',
  size = 'md',
  ...props
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors select-none';

  const variants = {
    indigo: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60',
    slate: 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    outline: 'bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700',
    success: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1'
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
