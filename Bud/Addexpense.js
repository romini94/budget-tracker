import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AddExpense() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentExpense = location.state?.expense || 0;
  const [newExpense, setNewExpense] = useState(0);

  const handleSubmit = () => {
    const updatedExpense = currentExpense + parseFloat(newExpense);
    navigate('/', { state: { income: location.state?.income || 0, expense: updatedExpense } });
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
      <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Add Expense</h2>
      <input
        type="number"
        value={newExpense}
        onChange={(e) => setNewExpense(e.target.value)}
        placeholder="Enter new expense"
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>Submit Expense</button>
    </div>
  );
}

export default AddExpense;
