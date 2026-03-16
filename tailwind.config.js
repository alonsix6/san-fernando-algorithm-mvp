/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // San Fernando Brand Colors
        // Color principal: Azul corporativo #024b98
        // Rojo: uso secundario/puntual | Azul: confianza, fuerza, principal | Blanco: limpieza
        sf: {
          // Primario - Azul San Fernando
          blue: '#024b98',            // Azul corporativo principal
          blueDark: '#013a75',        // Azul oscuro (hover / activo)
          blueLight: '#0562c4',       // Azul claro (links, acentos)

          // Secundario - Rojo San Fernando (uso puntual)
          red: '#C8102E',             // Rojo corporativo (uso minimo)
          darkRed: '#9B0C23',         // Rojo oscuro

          // Acento calido
          accent: '#F5A623',          // Ambar/dorado (evoca pollo dorado)
          accentLight: '#FFC74F',     // Ambar claro

          // Fondos oscuros (dashboard)
          charcoal: '#1A1A2E',        // Fondo principal oscuro
          dark: '#16213E',            // Cards/paneles
          darkSlate: '#0F0F1A',       // Mas oscuro (contraste)

          // Exito/Positivo
          success: '#22C55E',         // Verde (ventas, positivo)
          successLight: '#4ADE80',    // Verde claro

          // Alerta/Negativo
          danger: '#EF4444',          // Rojo alerta
          warning: '#F59E0B',         // Ambar advertencia

          // Neutros
          white: '#FFFFFF',
          lightGray: '#F5F5F5',
          textGray: '#9CA3AF',
          mediumGray: '#6B7280',
        },
        // Semantic colors (WCAG AA compatible)
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#024b98',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes San Fernando — colores solidos, sin degradados genericos
        'gradient-sf': 'linear-gradient(135deg, #024b98 0%, #013a75 100%)',
        'gradient-sf-dark': 'linear-gradient(135deg, #16213E 0%, #1A1A2E 100%)',
        'gradient-sf-corporate': 'linear-gradient(135deg, #024b98 0%, #013a75 50%, #F5A623 100%)',
        'gradient-sf-blue': 'linear-gradient(135deg, #024b98 0%, #0562c4 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)',
      },
      boxShadow: {
        'sf': '0 20px 50px rgba(2, 75, 152, 0.15)',
        'sf-lg': '0 30px 60px rgba(2, 75, 152, 0.25)',
        'sf-glow': '0 0 30px rgba(2, 75, 152, 0.4)',
        'sf-blue': '0 0 20px rgba(2, 75, 152, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(2, 75, 152, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(2, 75, 152, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(2, 75, 152, 0.6)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
