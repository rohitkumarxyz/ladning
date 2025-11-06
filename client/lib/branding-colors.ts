/**
 * Stock Market Branding Colors - Dark Theme Premium
 * Professional color palette optimized for dark theme with premium aesthetic
 * Designed for stock market courses and trading platforms
 * Use these colors throughout the application for consistent, elegant branding
 */

export const brandingColors = {
    // Primary Brand Color - Vibrant Green (Growth, Profit, Premium)
    // Optimized for dark theme with vibrant, eye-catching green
    primary: {
        50: '#f0fdf4',    // Very light green
        100: '#dcfce7',   // Light green
        200: '#bbf7d0',   // Lighter green
        300: '#86efac',   // Light green
        400: '#4ade80',   // Medium-light green
        500: '#22c55e',   // Main vibrant green (Perfect for dark theme)
        600: '#16a34a',   // Darker green
        700: '#15803d',   // Deep green
        800: '#166534',   // Dark green
        900: '#14532d',   // Very dark green
        950: '#052e16',   // Darkest green
        DEFAULT: '#22c55e',
        // Bright variants for dark backgrounds
        bright: '#4ade80',   // Bright green for highlights
        glow: '#86efac',     // Glow effect green
    },

    // Brand Color - Existing Yellow (Accent color for dark theme)
    brand: {
        50: '#fffef0',    // Very light yellow
        100: '#fffce0',   // Light yellow
        200: '#fff9c7',   // Lighter yellow
        300: '#fff5a4',   // Light yellow
        400: '#ffef81',   // Medium-light yellow
        500: '#FFD400',   // Main brand yellow (#FFD400)
        600: '#e6bf00',   // Darker yellow
        700: '#ccaa00',   // Deep yellow
        800: '#b39500',   // Dark yellow
        900: '#998000',   // Very dark yellow
        950: '#806b00',   // Darkest yellow
        DEFAULT: '#FFD400',
    },

    // Success Green - Vibrant Lime Green (Optimized for dark backgrounds)
    success: {
        50: '#f0fdf4',    // Very light green
        100: '#dcfce7',   // Light green
        200: '#bbf7d0',   // Lighter green
        300: '#86efac',   // Light green (glow effect)
        400: '#4ade80',   // Bright lime green (vibrant accent)
        500: '#22c55e',   // Main success green (Growth & Profit)
        600: '#16a34a',   // Darker green
        700: '#15803d',   // Deep green
        800: '#166534',   // Dark green
        900: '#14532d',   // Very dark green
        950: '#052e16',   // Darkest green
        DEFAULT: '#22c55e',
    },

    // Danger Colors - Loss Red (Alerts on dark background)
    danger: {
        50: '#fef2f2',    // Very light red
        100: '#fee2e2',   // Light red
        200: '#fecaca',   // Lighter red
        300: '#fca5a5',   // Light red
        400: '#f87171',   // Medium-light red
        500: '#ef4444',   // Main danger red (Loss & Alerts)
        600: '#dc2626',   // Darker red
        700: '#b91c1c',   // Deep red
        800: '#991b1b',   // Dark red
        900: '#7f1d1d',   // Very dark red
        950: '#450a0a',   // Darkest red
        DEFAULT: '#ef4444',
    },

    // Warning Colors - Caution Yellow/Orange
    warning: {
        50: '#fffbeb',    // Very light yellow
        100: '#fef3c7',   // Light yellow
        200: '#fde68a',   // Lighter yellow
        300: '#fcd34d',   // Light yellow
        400: '#fbbf24',   // Medium-light yellow
        500: '#f59e0b',   // Main warning yellow
        600: '#d97706',   // Darker yellow
        700: '#b45309',   // Deep yellow
        800: '#92400e',   // Dark yellow
        900: '#78350f',   // Very dark yellow
        950: '#451a03',   // Darkest yellow
        DEFAULT: '#f59e0b',
    },

    // Neutral Colors - Premium Dark Grays
    neutral: {
        50: '#fafafa',    // Almost white
        100: '#f5f5f5',   // Very light gray
        200: '#e5e5e5',   // Light gray
        300: '#d4d4d4',   // Lighter gray
        400: '#a3a3a3',   // Medium-light gray
        500: '#737373',   // Medium gray
        600: '#525252',   // Darker gray
        700: '#404040',   // Deep gray
        800: '#262626',   // Dark gray
        900: '#171717',   // Very dark gray
        950: '#0a0a0a',   // Almost black
        DEFAULT: '#737373',
    },

    // Dark Theme Background Colors (Premium Dark Palette)
    dark: {
        // Main backgrounds
        background: '#0a0a0a',          // Almost black - Main dark background
        surface: '#171717',             // Very dark gray - Card/component background
        elevated: '#262626',            // Dark gray - Elevated cards/modals
        panel: '#1a1a1a',               // Panel background

        // Secondary backgrounds
        card: '#1e1e1e',                // Card background
        sidebar: '#151515',             // Sidebar background
        header: '#0f0f0f',              // Header background
        footer: '#111111',              // Footer background

        // Border and divider colors
        border: '#2a2a2a',              // Border on dark background
        divider: '#333333',             // Divider lines
        outline: '#404040',             // Focus outline

        // Overlay colors
        overlay: 'rgba(0, 0, 0, 0.75)', // Dark overlay
        backdrop: 'rgba(0, 0, 0, 0.5)', // Backdrop overlay
    },

    // Light Theme Background Colors (For reference/fallback)
    light: {
        background: '#ffffff',
        surface: '#fafafa',
        elevated: '#f5f5f5',
        card: '#ffffff',
        border: '#e5e5e5',
    },

    // Text Colors (Optimized for dark backgrounds)
    text: {
        // Primary text colors for dark theme
        primary: '#ffffff',             // White - Primary text
        secondary: '#d4d4d4',           // Light gray - Secondary text
        tertiary: '#a3a3a3',           // Medium gray - Tertiary text
        muted: '#737373',               // Muted gray - Less important text
        disabled: '#525252',            // Disabled text

        // Inverse colors (for light backgrounds)
        inverse: '#0a0a0a',             // Black - Inverse text
        inverseSecondary: '#404040',    // Dark gray - Inverse secondary

        // Accent text colors
        accent: '#22c55e',              // Green accent text
        accentBright: '#4ade80',        // Bright green text
        error: '#ef4444',               // Red error text
        warning: '#f59e0b',             // Yellow warning text
    },

    // Border Colors (Dark theme optimized)
    border: {
        // Light borders for dark backgrounds
        light: '#2a2a2a',               // Subtle border
        medium: '#404040',              // Medium border
        dark: '#525252',                // Darker border
        accent: '#22c55e',              // Green accent border
        error: '#ef4444',               // Red error border

        // Default
        DEFAULT: '#2a2a2a',
    },

    // Accent Colors - Vibrant Pops (For highlights on dark)
    accent: {
        green: '#22c55e',               // Vibrant green
        greenBright: '#4ade80',         // Bright lime green
        blue: '#3b82f6',                // Bright blue
        purple: '#8b5cf6',              // Purple accent
        teal: '#14b8a6',                // Teal accent
        indigo: '#6366f1',              // Indigo accent
        DEFAULT: '#22c55e',
    },

    // Chart Colors (Optimized for dark backgrounds)
    chart: {
        bullish: '#22c55e',             // Green for positive trends
        bullishBright: '#4ade80',       // Bright green
        bearish: '#ef4444',             // Red for negative trends
        bearishBright: '#f87171',       // Bright red
        neutral: '#737373',             // Gray for neutral
        volume: '#3b82f6',              // Blue for volume
        highlight: '#f59e0b',           // Orange for highlights
        background: '#1a1a1a',          // Chart background
        grid: '#2a2a2a',                // Grid lines
    },

    // Gradient Combinations (Dark theme optimized)
    gradients: {
        // Primary gradients
        primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        success: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
        danger: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',

        // Premium dark gradients
        premium: 'linear-gradient(135deg, #171717 0%, #0a0a0a 100%)',
        card: 'linear-gradient(135deg, #1e1e1e 0%, #171717 100%)',

        // Text gradients
        textPrimary: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
        textGlow: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',

        // Overlay gradients
        overlay: 'linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
        overlayGreen: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%)',

        // Market themed gradients
        market: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 50%, #8b5cf6 100%)',
        professional: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
    },

    // Glow Effects (For premium dark theme)
    glow: {
        green: '0 0 20px rgba(34, 197, 94, 0.5)',
        greenBright: '0 0 30px rgba(74, 222, 128, 0.6)',
        blue: '0 0 20px rgba(59, 130, 246, 0.5)',
        purple: '0 0 20px rgba(139, 92, 246, 0.5)',
        card: '0 0 40px rgba(0, 0, 0, 0.8)',
    },
} as const;

/**
 * HSL format colors for Tailwind CSS compatibility
 * Optimized for dark theme
 * Use these in your Tailwind config or CSS variables
 */
export const brandingColorsHSL = {
    primary: {
        DEFAULT: '142 76% 36%',    // #22c55e
        light: '142 76% 50%',      // Bright green
        dark: '142 76% 27%',       // Dark green
        glow: '142 76% 70%',       // Glow green
    },
    success: {
        DEFAULT: '142 76% 36%',    // #22c55e
        light: '142 76% 50%',      // Bright lime green
        dark: '142 76% 27%',       // Dark green
    },
    danger: {
        DEFAULT: '0 84% 60%',      // #ef4444
        light: '0 84% 70%',
        dark: '0 84% 50%',
    },
    warning: {
        DEFAULT: '38 92% 50%',     // #f59e0b
        light: '38 92% 60%',
        dark: '38 92% 40%',
    },
    dark: {
        background: '0 0% 4%',     // #0a0a0a
        surface: '0 0% 9%',        // #171717
        card: '0 0% 12%',          // #1e1e1e
    },
} as const;

/**
 * Semantic color mappings for dark theme
 * Ready-to-use color combinations
 */
export const semanticColors = {
    // Status colors (for dark theme)
    status: {
        active: brandingColors.success[500],      // Green
        inactive: brandingColors.neutral[600],    // Gray
        pending: brandingColors.warning[500],      // Yellow
        error: brandingColors.danger[500],        // Red
        success: brandingColors.success[400],      // Bright green
    },

    // Button colors (optimized for dark backgrounds)
    button: {
        primary: brandingColors.primary[500],      // Green
        primaryHover: brandingColors.primary[600],
        primaryActive: brandingColors.primary[700],
        secondary: brandingColors.neutral[700],
        secondaryHover: brandingColors.neutral[600],
        success: brandingColors.success[500],
        danger: brandingColors.danger[500],
        outline: 'transparent',                    // Transparent with border
    },

    // Interactive states (dark theme)
    interactive: {
        hover: brandingColors.primary[400],       // Bright green
        active: brandingColors.primary[600],      // Dark green
        focus: brandingColors.primary[500],       // Main green
        focusRing: brandingColors.primary[500],   // Focus ring
        disabled: brandingColors.neutral[700],    // Disabled gray
        disabledText: brandingColors.neutral[500], // Disabled text
    },

    // Feedback colors (for dark backgrounds)
    feedback: {
        info: brandingColors.accent.blue,         // Blue
        success: brandingColors.success[400],      // Bright green
        warning: brandingColors.warning[500],     // Yellow
        error: brandingColors.danger[500],        // Red
    },

    // Card colors (dark theme)
    card: {
        background: brandingColors.dark.card,
        border: brandingColors.dark.border,
        hover: brandingColors.dark.elevated,
        shadow: 'rgba(0, 0, 0, 0.8)',
    },
} as const;

/**
 * Dark Theme Presets (Quick access to common combinations)
 */
export const darkThemePresets = {
    // Main layout
    body: {
        background: brandingColors.dark.background,
        text: brandingColors.text.primary,
    },

    // Cards
    card: {
        background: brandingColors.dark.card,
        border: brandingColors.dark.border,
        text: brandingColors.text.primary,
    },

    // Buttons
    buttonPrimary: {
        background: brandingColors.primary[500],
        text: brandingColors.dark.background,
        hover: brandingColors.primary[400],
    },

    // Input fields
    input: {
        background: brandingColors.dark.surface,
        border: brandingColors.dark.border,
        text: brandingColors.text.primary,
        focus: brandingColors.primary[500],
    },

    // Navigation
    nav: {
        background: brandingColors.dark.header,
        text: brandingColors.text.primary,
        active: brandingColors.primary[500],
    },
} as const;

/**
 * Type exports for TypeScript
 */
export type BrandingColorKey = keyof typeof brandingColors;
export type PrimaryColorShade = keyof typeof brandingColors.primary;
export type SemanticColorKey = keyof typeof semanticColors;

/**
 * Helper function to get color with opacity
 */
export function getColorWithOpacity(
    color: string,
    opacity: number = 1
): string {
    // Convert hex to rgba if needed
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
 * Helper function to get shade of a color
 */
export function getColorShade(
    colorKey: 'primary' | 'success' | 'danger' | 'warning' | 'neutral',
    shade: PrimaryColorShade = 500
): string {
    return brandingColors[colorKey][shade];
}

/**
 * Helper function to get dark theme color
 */
export function getDarkColor(
    colorKey: keyof typeof brandingColors.dark
): string {
    return brandingColors.dark[colorKey];
}

/**
 * Helper function to get text color for dark theme
 */
export function getTextColor(
    variant: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' = 'primary'
): string {
    return brandingColors.text[variant];
}
