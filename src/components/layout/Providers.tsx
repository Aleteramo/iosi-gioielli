'use client';

import { LoadingProvider } from '@/contexts/LoadingContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      {children}
    </LoadingProvider>
  );
}
