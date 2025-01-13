'use client';

import { ReactNode } from 'react';
import PullToRefresh from 'react-pull-to-refresh';

const handleRefresh = (): Promise<void> => {
  return new Promise((_) => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
    _();
  });
};

export default function WindowRefresher({ children }: { children: ReactNode }) {
  return <PullToRefresh onRefresh={handleRefresh}>{children}</PullToRefresh>;
}
