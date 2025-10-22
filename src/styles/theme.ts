export const THEME_COLORS = {
  beige: {
    light: '#E8E4DD',
  },
  olive: '#8B9166',
  black: '#000000',
  white: '#FFFFFF',
} as const;

export type ThemeColors = typeof THEME_COLORS;