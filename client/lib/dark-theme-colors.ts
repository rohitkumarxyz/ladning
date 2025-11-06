/**
 * Premium Dark Theme Color System
 * Optimized for Stock Market Education Platform
 * 
 * This file contains a comprehensive dark theme color palette designed
 * for premium branding with excellent UI/UX. Colors are selected to:
 * - Enhance readability and visual hierarchy
 * - Create an attractive, professional aesthetic
 * - Support stock market/trading context (green for profits, red for losses)
 * - Provide excellent contrast ratios for accessibility
 * - Create a premium, trustworthy brand feel
 */

/**
 * Primary Dark Theme Colors
 * Core colors used throughout the application
 */
export const darkTheme = {
  /**
   * Background Colors
   * Layered depth system for visual hierarchy
   */
  backgrounds: {
    // Main page background - deepest black for maximum contrast
    primary: '#0a0a0a',           // Almost pure black (#0a0a0a)
    
    // Elevated surfaces - slightly lighter for depth
    secondary: '#111111',          // Very dark gray (#111111)
    tertiary: '#171717',           // Dark gray (#171717)
    
    // Cards and components - subtle elevation
    card: '#1a1a1a',               // Card background (#1a1a1a)
    elevated: '#1e1e1e',          // Elevated cards (#1e1e1e)
    panel: '#222222',              // Panel/sidebar (#222222)
    
    // Overlays and modals
    overlay: 'rgba(0, 0, 0, 0.85)', // Modal overlay
    backdrop: 'rgba(0, 0, 0, 0.75)', // Backdrop blur
    glass: 'rgba(26, 26, 26, 0.8)',  // Glass morphism effect
  },

  /**
   * Primary Brand Colors
   * Vibrant green representing growth, profit, success
   */
  primary: {
    // Main brand green - vibrant and eye-catching on dark
    main: '#22c55e',               // Vibrant green (#22c55e)
    light: '#4ade80',              // Bright lime green (#4ade80)
    dark: '#16a34a',              // Deep green (#16a34a)
    
    // Extended shades
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',                // Main
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
    
    // Special variants
    glow: '#86efac',               // For glow effects
    accent: '#4ade80',             // For accents
    hover: '#4ade80',              // Hover state
    active: '#16a34a',             // Active state
  },

  /**
   * Brand Accent - Yellow/Gold
   * Premium accent color for highlights
   */
  brand: {
    main: '#FFD400',               // Brand yellow (#FFD400)
    light: '#ffef81',
    dark: '#e6bf00',
    
    // Shades
    50: '#fffef0',
    100: '#fffce0',
    200: '#fff9c7',
    300: '#fff5a4',
    400: '#ffef81',
    500: '#FFD400',                // Main
    600: '#e6bf00',
    700: '#ccaa00',
    800: '#b39500',
    900: '#998000',
    
    // Special
    glow: '#ffef81',
    accent: '#fff5a4',
  },

  /**
   * Success Colors
   * Used for positive actions, gains, profits
   */
  success: {
    main: '#22c55e',               // Same as primary green
    light: '#4ade80',
    dark: '#16a34a',
    glow: '#86efac',
    text: '#4ade80',
    bg: 'rgba(34, 197, 94, 0.1)',
    border: 'rgba(34, 197, 94, 0.3)',
  },

  /**
   * Danger/Error Colors
   * Used for losses, errors, warnings
   */
  danger: {
    main: '#ef4444',               // Vibrant red (#ef4444)
    light: '#f87171',
    dark: '#dc2626',
    glow: '#fca5a5',
    text: '#f87171',
    bg: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.3)',
  },

  /**
   * Warning Colors
   * Used for cautions, alerts
   */
  warning: {
    main: '#f59e0b',               // Amber (#f59e0b)
    light: '#fbbf24',
    dark: '#d97706',
    glow: '#fcd34d',
    text: '#fbbf24',
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
  },

  /**
   * Neutral Colors
   * Grays for text, borders, dividers
   */
  neutral: {
    // Text colors
    text: {
      primary: '#ffffff',         // White - main text
      secondary: '#d4d4d4',        // Light gray - secondary text
      tertiary: '#a3a3a3',         // Medium gray - tertiary text
      muted: '#737373',            // Muted gray - less important
      disabled: '#525252',         // Disabled text
    },
    
    // Border colors
    border: {
      light: '#2a2a2a',            // Subtle border
      medium: '#3a3a3a',           // Medium border
      dark: '#404040',             // Stronger border
      hover: '#4a4a4a',            // Hover border
    },
    
    // Divider
    divider: '#333333',            // Divider lines
    
    // Gray shades
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  /**
   * Accent Colors
   * Additional colors for variety and highlights
   */
  accent: {
    blue: '#3b82f6',               // Bright blue
    purple: '#8b5cf6',             // Purple
    teal: '#14b8a6',               // Teal
    indigo: '#6366f1',             // Indigo
    cyan: '#06b6d4',               // Cyan
    pink: '#ec4899',               // Pink
  },

  /**
   * Chart/Data Visualization Colors
   * Optimized for stock market charts
   */
  chart: {
    bullish: '#22c55e',           // Green for gains
    bullishLight: '#4ade80',
    bearish: '#ef4444',            // Red for losses
    bearishLight: '#f87171',
    neutral: '#737373',            // Gray for neutral
    volume: '#3b82f6',             // Blue for volume
    highlight: '#f59e0b',          // Orange for highlights
    background: '#1a1a1a',         // Chart background
    grid: '#2a2a2a',               // Grid lines
    axis: '#404040',               // Axis lines
  },
} as const;

/**
 * HSL Format Colors
 * For use with Tailwind CSS and CSS variables
 */
export const darkThemeHSL = {
  // Backgrounds
  background: '0 0% 4%',           // #0a0a0a
  card: '0 0% 10%',                // #1a1a1a
  elevated: '0 0% 12%',           // #1e1e1e
  
  // Primary
  primary: '142 76% 36%',          // #22c55e
  primaryLight: '142 76% 50%',    // #4ade80
  primaryDark: '142 76% 27%',     // #16a34a
  
  // Brand
  brand: '50 100% 50%',           // #FFD400
  
  // Success
  success: '142 76% 36%',         // #22c55e
  successLight: '142 76% 50%',    // #4ade80
  
  // Danger
  danger: '0 84% 60%',            // #ef4444
  dangerLight: '0 84% 70%',       // #f87171
  
  // Warning
  warning: '38 92% 50%',          // #f59e0b
  warningLight: '38 92% 60%',     // #fbbf24
  
  // Neutrals
  textPrimary: '0 0% 100%',        // #ffffff
  textSecondary: '0 0% 83%',       // #d4d4d4
  textTertiary: '0 0% 64%',        // #a3a3a3
  textMuted: '0 0% 45%',          // #737373
  
  border: '0 0% 16%',              // #2a2a2a
  borderMedium: '0 0% 23%',       // #3a3a3a
} as const;

/**
 * Gradient Definitions
 * Premium gradients for backgrounds, buttons, and effects
 */
export const darkThemeGradients = {
  // Primary gradients
  primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
  primaryGlow: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
  
  // Background gradients
  background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
  card: 'linear-gradient(135deg, #1a1a1a 0%, #171717 100%)',
  elevated: 'linear-gradient(135deg, #1e1e1e 0%, #1a1a1a 100%)',
  
  // Text gradients
  textPrimary: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
  textGlow: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',
  textBrand: 'linear-gradient(135deg, #FFD400 0%, #ffef81 100%)',
  
  // Overlay gradients
  overlay: 'linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)',
  overlayPrimary: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(74, 222, 128, 0.08) 100%)',
  overlayDark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
  
  // Market-themed gradients
  market: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 50%, #8b5cf6 100%)',
  profit: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
  loss: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  
  // Premium glass effects
  glass: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(23, 23, 23, 0.8) 100%)',
  glassBorder: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(74, 222, 128, 0.1) 100%)',
} as const;

/**
 * Glow Effects
 * Box shadow definitions for premium glow effects
 */
export const darkThemeGlow = {
  // Primary green glows
  primary: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)',
  primaryBright: '0 0 30px rgba(74, 222, 128, 0.5), 0 0 60px rgba(74, 222, 128, 0.3)',
  primaryIntense: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.4)',
  
  // Brand yellow glows
  brand: '0 0 20px rgba(255, 212, 0, 0.4), 0 0 40px rgba(255, 212, 0, 0.2)',
  brandBright: '0 0 30px rgba(255, 239, 129, 0.5), 0 0 60px rgba(255, 239, 129, 0.3)',
  
  // Danger red glows
  danger: '0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)',
  dangerBright: '0 0 30px rgba(248, 113, 113, 0.5), 0 0 60px rgba(248, 113, 113, 0.3)',
  
  // Card glows
  card: '0 4px 20px rgba(0, 0, 0, 0.6), 0 8px 40px rgba(0, 0, 0, 0.4)',
  cardHover: '0 8px 30px rgba(0, 0, 0, 0.8), 0 12px 60px rgba(34, 197, 94, 0.2)',
  
  // Subtle inner glow
  inner: 'inset 0 0 20px rgba(34, 197, 94, 0.1)',
} as const;

/**
 * Semantic Color Mappings
 * Ready-to-use color combinations for common UI elements
 */
export const darkThemeSemantic = {
  // Buttons
  button: {
    primary: {
      bg: darkTheme.primary.main,
      text: darkTheme.backgrounds.primary,
      hover: darkTheme.primary.light,
      active: darkTheme.primary.dark,
    },
    secondary: {
      bg: darkTheme.backgrounds.elevated,
      text: darkTheme.neutral.text.primary,
      hover: darkTheme.backgrounds.panel,
      active: darkTheme.backgrounds.card,
    },
    outline: {
      bg: 'transparent',
      text: darkTheme.primary.main,
      border: darkTheme.primary.main,
      hover: darkTheme.primary.bg,
    },
  },
  
  // Input fields
  input: {
    bg: darkTheme.backgrounds.card,
    border: darkTheme.neutral.border.light,
    text: darkTheme.neutral.text.primary,
    placeholder: darkTheme.neutral.text.muted,
    focus: darkTheme.primary.main,
    focusBorder: darkTheme.primary.main,
  },
  
  // Cards
  card: {
    bg: darkTheme.backgrounds.card,
    border: darkTheme.neutral.border.light,
    hover: darkTheme.backgrounds.elevated,
    hoverBorder: darkTheme.primary.main,
    text: darkTheme.neutral.text.primary,
    shadow: darkThemeGlow.card,
  },
  
  // Links
  link: {
    default: darkTheme.primary.light,
    hover: darkTheme.primary.main,
    visited: darkTheme.primary.dark,
  },
  
  // Status indicators
  status: {
    active: darkTheme.success.main,
    inactive: darkTheme.neutral[600],
    pending: darkTheme.warning.main,
    error: darkTheme.danger.main,
    success: darkTheme.success.light,
  },
} as const;

/**
 * Type Exports
 */
export type DarkTheme = typeof darkTheme;
export type DarkThemeHSL = typeof darkThemeHSL;
export type DarkThemeGradients = typeof darkThemeGradients;
export type DarkThemeGlow = typeof darkThemeGlow;
export type DarkThemeSemantic = typeof darkThemeSemantic;

/**
 * Helper Functions
 */

/**
 * Get color with opacity
 */
export function getColorWithOpacity(color: string, opacity: number): string {
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
}

/**
 * Get gradient with opacity
 */
export function getGradientWithOpacity(
  color1: string,
  color2: string,
  opacity: number = 1
): string {
  const c1 = getColorWithOpacity(color1, opacity);
  const c2 = getColorWithOpacity(color2, opacity);
  return `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
}

