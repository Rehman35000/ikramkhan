'use client';

import { useCallback, useEffect, useState } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: string;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch('/api/auth/me')
      .then((res) => (res.ok ? res.json() : Promise.resolve({ user: null })))
      .then((data) => {
        if (active) setUser(data.user ?? null);
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore network errors, still redirect
    }
    setUser(null);
    window.location.href = '/login';
  }, []);

  return { user, loading, logout };
}
