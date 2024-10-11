import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the passed income and result from state (if any)
  const income = location.state?.income || 0;
  
  const expense = location.state?.expense || 0;
  const savingsOrLoss = location.state?.result || 0;
  let result = '';
if (savingsOrLoss > 0) {
  result = 'Saving';
} else if (savingsOrLoss < 0) {
  result = 'Loss';
} else {
  result = 'No Gain, No Loss';
}
  const handleIncome = () => {
    navigate('/Addincome', { state: { income } });
  };

  const handleExpense = () => {
    navigate('/Addexpense', { state: { expense } });
  };

  const containerStyle = {
    width: '600px',
    height: '400px',
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    marginTop: '100px',
    textAlign: 'center'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#007bff', marginBottom: '30px' }}>Welcome to Budget Tracker</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="totalIncome" className="form-label">Total Income</label>
          <input type="text" id="totalIncome" className="form-control" value={income} readOnly style={inputStyle} />
        </div>
        <div className="mb-3">
          <label htmlFor="totalIncome" className="form-label">Total Expense</label>
          <input type="text" id="totalExpense" className="form-control" value={expense} readOnly style={inputStyle} />
        </div>
        <div className="mb-3">
          <label htmlFor="savingsOrLoss" className="form-label">Savings/Loss</label>
          <input type="text" id="savingsOrLoss" className="form-control"value={`${result} (${savingsOrLoss})`}  readOnly style={inputStyle} />
        </div>
        <button type="button" style={buttonStyle} onClick={handleIncome}>Add Income</button>
        <button type="button" style={{ ...buttonStyle, marginLeft: '10px' }} onClick={handleExpense}>Add Expense</button>
      </form>
    </div>
  );
}

export default Welcome;
