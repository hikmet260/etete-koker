import React from 'react';

export const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      padding: '60px 20px',
      gap: '40px',
      boxSizing: 'border-box'
    }}>
      {/* TEXT SIDE */}
      <div style={{ 
        flex: '1 1 450px', 
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <span style={{ color: '#e07a16', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
          Welcome to the world of ቆቆር
        </span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: '1.2', margin: '0 0 20px 0', fontWeight: '800' }}>
          Experience The <br/>
          <span style={{ color: '#e07a16', background: 'linear-gradient(120deg, #e07a16, #ffb366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Generational Crunch
          </span>
        </h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: '1.6', color: darkMode ? '#d0c2b5' : '#5c5045', marginBottom: '30px' }}>
          Welcome to the ultimate snacking tradition. Our handcrafted <span style={{color: '#e07a16', fontWeight: 'bold'}}>ቆቆር</span> delivers an authentic, deep golden-brown crunch infused with a signature blend of aromatic spicy undertones. Made fresh daily and entirely by hand, it is the perfect companion for your morning coffee ceremony, afternoon workspace fuel, or evening gatherings.
        </p>
      </div>

      {/* IMAGE SIDE */}
      <div style={{ 
        flex: '1 1 350px', 
        display: 'flex', 
        justifyContent: 'center',
        maxWidth: '100%'
      }}>
        <img 
          src="/koker.jpg" // <-- This targets your public folder locally and safely!
          alt="A beautifully fried small batch of large እቴቴ ቆቆር pieces." 
          style={{
            width: '100%',
            maxWidth: '380px',
            height: 'auto',
            aspectRatio: '1 / 1.15', 
            objectFit: 'cover',
            borderRadius: '30px',
            boxShadow: darkMode ? '0 25px 50px -12px rgba(0,0,0,0.7)' : '0 25px 50px -12px rgba(124,65,19,0.15)'
          }}
        />
      </div>
    </section>
  );
};