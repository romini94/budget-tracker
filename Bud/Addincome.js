import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addincome() {
  const [formdata, setFormData] = useState({ incamount: '', source: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amountincome = parseFloat(formdata.incamount) || 0;
     
    // Navigate to Addexpense and pass the income value
    navigate('/Addexpense', { state: { income: amountincome } });
  };

  const containerStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: '#e0f7fa',
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
          <label htmlFor="incamount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="incamount"
            name="incamount"
            value={formdata.incamount}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">Source</label>
          <input
            type="text"
            className="form-control"
            id="source"
            name="source"
            value={formdata.source}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default Addincome;

  
  

    