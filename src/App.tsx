import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuAndStory } from './components/MenuAndStory'; // <-- Import the new layout component
import { OrderForm } from './components/OrderForm';
import './index.css'; 

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      backgroundColor: darkMode ? '#1e100a' : '#fdfaf6',
      color: darkMode ? '#f7f4f0' : '#2e2520',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      transition: 'all 0.4s ease',
      margin: 0,
      padding: 0
    }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        {/* Wrap Hero in a section tag with the home id */}
        <section id="home">
          <Hero darkMode={darkMode} />
        </section>

        {/* Wrap MenuAndStory in a section tag with the menu id */}
        <section id="menu">
          <MenuAndStory darkMode={darkMode} />
        </section>

        {/* Wrap OrderForm in a section tag with the order id */}
        <section id="order">
          <OrderForm darkMode={darkMode} />
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: '50px 20px', fontSize: '14px', borderTop: darkMode ? '1px solid #3b2316' : '1px solid #eedfd2', color: '#8c7e74' }}>
        <p>© 2026 ቆቆር Co. Freshly fried with love.</p>
      </footer>
    </div>
  );
};

export default App;