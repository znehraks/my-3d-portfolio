'use client';

import { Provider as JotaiProvider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </JotaiProvider>
  );
}
