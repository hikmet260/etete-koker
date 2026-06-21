import React from 'react';

export const MenuAndStory: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const products = [
    { id: 1, name: 'Standard Snack Pack', size: '250g', price: '150 Birr.', desc: 'Perfect for your daily individual crunch or a quick afternoon pick-me-up.' },
    { id: 2, name: 'Family Sharing Box', size: '1kg', price: '550 Birr.', desc: 'The ultimate size for traditional Ethiopian coffee ceremonies and family gatherings.' },
    { id: 3, name: 'Bulk Celebration Batch', size: '5kg', price: '2,500 Birr.', desc: 'Freshly fried in a custom large batch tailored for weddings, holidays, or major events.' }
  ];

  return (
    <>
      {/* DEEP HERITAGE BACKSTORY */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: darkMode ? '#2a1810' : '#f7ede2',
          borderRadius: '32px',
          padding: '50px 40px',
          textAlign: 'center',
          border: darkMode ? '1px solid #3b2316' : '1px solid #eedfd2',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ color: '#e07a16', fontSize: '32px', margin: '0 0 20px 0', fontWeight: '800' }}>
            Our Heritage
          </h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.7', color: darkMode ? '#d0c2b5' : '#4a3f35' }}>
            The secret behind <span style={{color: '#e07a16', fontWeight: 'bold'}}>እቴቴ ቆቆር</span> comes down to time-honored family craftsmanship. Passing down techniques through generations, our process rejects modern mass-production shortcuts. Every single piece is individually hand-rolled from pure premium wheat, seasoned with carefully balanced organic Ethiopian spices, and slow-fried to golden perfection. We don't just sell snacks—we share a legacy of warmth, home, and genuine Ethiopian hospitality.
          </p>
        </div>
      </section>

      {/* PRODUCT MENU SECTION */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <h3 style={{ fontSize: '36px', textAlign: 'center', fontWeight: '800', margin: '0 0 10px 0' }}>
          Select Your Batch Size
        </h3>
        <p style={{ textAlign: 'center', color: '#a07855', fontSize: '16px', margin: '0 0 50px 0', letterSpacing: '0.5px' }}>
          Handcrafted using premium wheat and pure organic spices
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '35px'
        }}>
          {products.map(p => (
            <div key={p.id} style={{
              backgroundColor: darkMode ? '#2a1810' : '#ffffff',
              borderRadius: '24px',
              border: darkMode ? '1px solid #3b2316' : '1px solid #f3ece4',
              padding: '35px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: darkMode ? '0 10px 20px rgba(0,0,0,0.2)' : '0 10px 25px rgba(124,65,19,0.03)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '15px' }}>
                  <h4 style={{ margin: 0, fontSize: '22px', fontWeight: '700' }}>{p.name}</h4>
                  <span style={{ color: '#e07a16', fontWeight: '800', fontSize: '20px' }}>{p.price}</span>
                </div>
                <span style={{ display: 'inline-block', backgroundColor: '#e07a16', color: '#fff', fontSize: '12px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                  Weight: {p.size}
                </span>
                <p style={{ fontSize: '15px', color: darkMode ? '#c4b5a9' : '#6b5f55', lineHeight: '1.6', margin: '0 0 25px 0' }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};