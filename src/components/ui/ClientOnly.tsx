'use client';

import { useEffect, useState, type ReactNode } from 'react';

type ClientOnlyProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};

export default function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{fallback ?? null}</>;

  return <>{children ?? null}</>;
}
