
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('ar-SA', { 
    style: 'currency', 
    currency: 'SAR',
    maximumFractionDigits: 0 
  }).format(amount);
}
