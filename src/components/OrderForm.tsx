import React, { useState } from 'react';

export const OrderForm: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', amount: '', address: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Capturing data object securely
    const finalOrder = {
      customerName: formData.name,
      orderAmount: formData.amount,
      deliveryAddress: formData.address,
      timestamp: new Date().toLocaleString()
    };

    console.log("New Koker Order Received:", finalOrder);
    setSubmittedData(finalOrder);
    setFormSubmitted(true);
    
    // Clear form inputs
    setFormData({ name: '', amount: '', address: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: darkMode ? '1px solid #4d3324' : '1px solid #dcd1c4',
    backgroundColor: darkMode ? '#1e100a' : '#fdfdfd',
    color: darkMode ? '#fff' : '#000',
    boxSizing: 'border-box' as const,
    marginBottom: '20px',
    fontSize: '15px',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '8px',
    color: darkMode ? '#d0c2b5' : '#4a3321'
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '60px auto 40px auto',
      backgroundColor: darkMode ? '#2a1810' : '#ffffff',
      padding: '40px',
      borderRadius: '32px',
      boxShadow: darkMode ? '0 30px 60px rgba(0,0,0,0.4)' : '0 30px 60px rgba(124,65,19,0.08)',
      border: darkMode ? '1px solid #3b2316' : '1px solid #f3ece4'
    }}>
      <h3 style={{ textAlign: 'center', margin: '0 0 10px 0', fontSize: '28px', fontWeight: '800' }}>
        Order Fresh ቆቆር
      </h3>
      <p style={{ textAlign: 'center', fontSize: '15px', color: '#a07855', margin: '0 0 30px 0' }}>
        No payment needed now. Submit your request and we will arrange production.
      </p>
      
      {/* SUCCESS CONFIRMATION RECEIPT */}
      {formSubmitted && submittedData && (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#d1fae5', 
          color: '#065f46', 
          borderRadius: '16px', 
          fontSize: '14px', 
          marginBottom: '25px',
          border: '1px solid #a7f3d0'
        }}>
          <strong style={{ display: 'block', fontSize: '16px', marginBottom: '5px' }}>✓ Order Successfully Logged!</strong>
          <p style={{ margin: '5px 0' }}><strong>Name:</strong> {submittedData.customerName}</p>
          <p style={{ margin: '5px 0' }}><strong>Amount:</strong> {submittedData.orderAmount}</p>
          <p style={{ margin: '5px 0' }}><strong>Address:</strong> {submittedData.deliveryAddress}</p>
          <button 
            onClick={() => setFormSubmitted(false)} 
            style={{ marginTop: '10px', background: 'none', border: 'none', color: '#047857', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold', padding: 0 }}
          >
            Place another order
          </button>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <label style={labelStyle}>Your Name</label>
        <input 
          type="text" 
          required 
          placeholder="e.g., Abebe Kebede" 
          style={inputStyle} 
          value={formData.name} 
          onChange={e => setFormData({...formData, name: e.target.value})} 
        />
        
        <label style={labelStyle}>Amount (e.g., 2 kg or 3 boxes)</label>
        <input 
          type="text" 
          required 
          placeholder="e.g., 1kg Box" 
          style={inputStyle} 
          value={formData.amount} 
          onChange={e => setFormData({...formData, amount: e.target.value})} 
        />

        <label style={labelStyle}>Delivery Address</label>
        <textarea 
          rows={3} 
          required 
          placeholder="Enter house number, neighborhood, or landmarks..." 
          style={{ ...inputStyle, height: '90px', resize: 'none' }} 
          value={formData.address} 
          onChange={e => setFormData({...formData, address: e.target.value})} 
        />

        <button type="submit" style={{ 
          width: '100%', 
          padding: '15px', 
          backgroundColor: '#e07a16', 
          color: 'white', 
          border: 'none', 
          borderRadius: '12px', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          fontSize: '16px',
          boxShadow: '0 6px 20px rgba(224,122,22,0.3)' 
        }}>
          Submit ቆቆር Order Request
        </button>
      </form>
    </div>
  );
};