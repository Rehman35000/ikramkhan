'use client';

import { useTheme } from '@/components/ThemeProvider';

const dark = {
  accent: '#D4AF37',
  accentHover: '#E6C75A',
  accentSecondary: '#E6C75A',
  gradient: 'linear-gradient(135deg, #D4AF37, #E6C75A)',
  glow: 'rgba(212, 175, 55, 0.25)',
  glowLarge: 'rgba(212, 175, 55, 0.4)',
  border: 'rgba(212, 175, 55, 0.12)',
  bg: '#0F1115',
  fg: '#FFFFFF',
  fgSecondary: '#B5B5B5',
  muted: '#6B7280',
  cardBg: '#1E232B',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
  navBg: 'rgba(15, 17, 21, 0.85)',
  navBorder: 'rgba(255, 255, 255, 0.06)',
  surface: '#171A20',
  surfaceHover: '#252C36',
};

const light = {
  accent: '#C62828',
  accentHover: '#A61E1E',
  accentSecondary: '#D32F2F',
  gradient: 'linear-gradient(135deg, #C62828, #D32F2F)',
  glow: 'rgba(198, 40, 40, 0.25)',
  glowLarge: 'rgba(198, 40, 40, 0.4)',
  border: 'rgba(198, 40, 40, 0.12)',
  bg: '#FFFFFF',
  fg: '#111111',
  fgSecondary: '#666666',
  muted: '#999999',
  cardBg: '#FFFFFF',
  cardBorder: '#E8E8E8',
  navBg: 'rgba(255, 255, 255, 0.85)',
  navBorder: 'rgba(0, 0, 0, 0.06)',
  surface: '#FAFAFA',
  surfaceHover: '#F0F0F0',
};

export function useThemeColors() {
  const { theme } = useTheme();
  return theme === 'light' ? light : dark;
}
