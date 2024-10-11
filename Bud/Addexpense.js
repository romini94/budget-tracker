import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Addexpense() {
  const [formdata, setFormData] = useState({ expamount: '', category: '' });
  const navigate = useNavigate();
  const location = useLocation();

  // Get the income passed from Addincome
  const income = location.state?.income || 0;
const amountexpense= location.state?.amountexpense||0
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const amountexpense = parseFloat(formdata.expamount) || 0;

    // Calculate savings or loss
    const result = income - amountexpense;

    // Navigate back to the Welcome page with the result and income
    navigate('/', { state: { result, income,amountexpense } });
  };

  const containerStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff3e0',
    borderRadius: '10px',
    margin: '100px auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="expamount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="expamount"
            name="expamount"
            value={formdata.expamount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formdata.category}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default Addexpense;
