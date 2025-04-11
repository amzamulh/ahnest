/** @type {import('tailwindcss').Config} */
export default {
    darkMode: { selector: '[data-theme="dark"]' }, // Updated dark mode syntax
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#ffffff",
          black: "#000000",
          "body-dark": "#121212",
          "heading-dark": "#1e1e1e",
          "border-dark": "#2d2d2d",
          "body-light": "#f5f5f5",
          "heading-light": "#e0e0e0",
          "border-light": "#d1d1d1",
          "hover-dark": "#252525",
          "hover-light": "#fafafa",
          primary: {
            DEFAULT: "#1976d2",
            light: "#82b1ff",
          },
          secondary: {
            DEFAULT: "#303f9f",
            light: "#9fa8da",
          },
          info: {
            DEFAULT: "#7b1fa2",
            light: "#ce93d8",
          },
          success: {
            DEFAULT: "#2e7d32",
            light: "#80e27e",
          },
          warning: {
            DEFAULT: "#fbc02d",
            light: "#fff59d",
          },
          danger: {
            DEFAULT: "#d32f2f",
            light: "#ff8088",
          },
          highlight: {
            DEFAULT: "#c2185b",
            light: "#ff8fa3",
          },
          accent: {
            DEFAULT: "#ef6c00",
            light: "#ffcc80",
          },
          disable: {
            DEFAULT: "#616161",
            light: "#bdbdbd",
          },
        },
  
        // Spacings (padding, margin, etc.)
        spacing: {
          xxxs: "0.125rem",
          xxs: "0.25rem",
          xs: "0.5rem",
          sm: "0.75rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          xxl: "1.5rem",
          xxxl: "2rem",
        },
  
        // Font Sizes
        fontSize: {
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.25rem",
          xl: "1.5rem",
          h1: "2.5rem",
          h2: "2rem",
          h3: "1.75rem",
          h4: "1.5rem",
          h5: "1.25rem",
          h6: "1rem",
        },
  
        // Line Heights
        lineHeight: {
          xs: "1.2",
          sm: "1.4",
          base: "1.6",
          lg: "1.8",
          xl: "2",
        },
  
        // Shadows
        boxShadow: {
          xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
          sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
          md: "0 4px 6px rgba(0, 0, 0, 0.1)",
          lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
          xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
        },
  
        // Border Radius
        borderRadius: {
          xs: "0.125rem",
          sm: "0.25rem",
          md: "0.5rem",
          lg: "0.75rem",
          xl: "1rem",
          full: "9999px",
        },
  
        // Z-Index
        zIndex: {
          base: "1",
          dropdown: "1000",
          modal: "2000",
          popover: "3000",
          tooltip: "4000",
          toast: "5000",
        },
  
        // Icon Sizes (can be used with width/height utilities)
        size: { // New unified size utility in v4
          "icon-xs": "0.75rem",
          "icon-sm": "1rem",
          "icon-md": "1.5rem",
          "icon-lg": "2rem",
          "icon-xl": "2.5rem",
        },
  
        // Font Family
        fontFamily: {
          raleway: ["Raleway", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
  
        // Container
        container: {
          center: true,
          padding: "1rem", // --spacing-md
          screens: {
            sm: "768px",
            md: "1024px",
            lg: "1200px",
            xl: "1440px",
          },
        },
      },
    },
    plugins: [],
  };