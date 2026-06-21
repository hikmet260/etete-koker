import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav style={{
      // --- THESE 4 LINES FIX THE SCROLLING ISSUE ---
      position: 'sticky',
      top: 0,
      zIndex: 1000, // Makes sure it floats perfectly above text and images
      backgroundColor: darkMode ? '#1e100a' : '#fdfaf6', // Matches your exact background color so text doesn't bleed under it
      
      // Keep all your original structural layouts intact
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      maxWidth: '1100px',
      margin: '0 auto',
      borderBottom: darkMode ? '1px solid #3b2316' : '1px solid #eedfd2',
      transition: 'background-color 0.4s ease' // Smooth transition during theme switching
    }}>
      {/* Brand Logo / Name */}
      <h1 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#e07a16' }}>
        እቴቴ ቆቆር
      </h1>

      {/* RIGHT SIDE CONTAINER: Navigation Links + Theme Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        
        {/* Navigation Section Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#home" style={{ 
            textDecoration: 'none', 
            color: darkMode ? '#d0c2b5' : '#4a3321', 
            fontWeight: '600',
            fontSize: '15px'
          }}>Home</a>
          
          <a href="#menu" style={{ 
            textDecoration: 'none', 
            color: darkMode ? '#d0c2b5' : '#4a3321', 
            fontWeight: '600',
            fontSize: '15px'
          }}>Menu</a>
          
          <a href="#order" style={{ 
            textDecoration: 'none', 
            color: darkMode ? '#d0c2b5' : '#4a3321', 
            fontWeight: '600',
            fontSize: '15px'
          }}>Order Now</a>
        </div>

        {/* Theme Toggle Button */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: darkMode ? '#e07a16' : '#2e2520',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '14px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

      </div>
    </nav>
  );
};