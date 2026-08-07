'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, label, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl text-sm transition-all duration-200',
            'bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100',
            'border border-slate-200 dark:border-slate-800',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:focus:ring-indigo-500',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            error && 'border-red-500 focus:ring-red-500 dark:border-red-500',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 min-h-[120px] resize-y',
            'bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100',
            'border border-slate-200 dark:border-slate-800',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:focus:ring-indigo-500',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            error && 'border-red-500 focus:ring-red-500 dark:border-red-500',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
