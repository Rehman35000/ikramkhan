'use client';

import { useTheme } from '@/components/ThemeProvider';

const dark = {
  accent: '#C02C27',
  accentHover: '#A32521',
  accentSecondary: '#A32521',
  gradient: 'linear-gradient(135deg, #C02C27, #A32521)',
  glow: 'rgba(192, 44, 39, 0.25)',
  glowLarge: 'rgba(192, 44, 39, 0.4)',
  border: 'rgba(192, 44, 39, 0.12)',
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

const light = {
  accent: '#C02C27',
  accentHover: '#A32521',
  accentSecondary: '#A32521',
  gradient: 'linear-gradient(135deg, #C02C27, #A32521)',
  glow: 'rgba(192, 44, 39, 0.25)',
  glowLarge: 'rgba(192, 44, 39, 0.4)',
  border: 'rgba(192, 44, 39, 0.12)',
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
