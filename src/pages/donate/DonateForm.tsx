import { useState } from 'react';
import Style from './style.module.css';

const DonateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    amount: '',
    state: '',
    pinCode: '',
    need80GCertificate: false,
    pan: '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Pin Code:
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Need 80G Certificate:
          <input
            type="checkbox"
            name="need80GCertificate"
            checked={formData.need80GCertificate}
            onChange={handleChange}
          />
        </label>
      </div>
      {formData.need80GCertificate && (
        <div>
          <label>
            PAN:
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DonateForm;
