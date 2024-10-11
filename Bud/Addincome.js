import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AddIncome() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIncome = location.state?.income || 0;
  const [newIncome, setNewIncome] = useState(0);

  const handleSubmit = () => {
    const updatedIncome = currentIncome + parseFloat(newIncome);
    navigate('/', { state: { income: updatedIncome, expense: location.state?.expense || 0 } });
  };

  // Styles
  const containerStyle = {
    width: '400px',
    padding: '20px',
    margin: '50px auto',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Add Income</h2>
      <input
        type="number"
        value={newIncome}
        onChange={(e) => setNewIncome(e.target.value)}
        placeholder="Enter new income"
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>Submit Income</button>
    </div>
  );
}

export default AddIncome;
