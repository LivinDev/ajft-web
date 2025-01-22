import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../assets/images/ajftlogo.png';
import { Link } from 'react-router-dom';
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [step, setStep] = useState<'email' | 'otp'>('email');

  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the email to a server to get an OTP
    setStep('otp');
  };

  const handleOtpSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle OTP submission
    console.log('OTP submitted:', otp);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.cardcontainer}>
        <div className={styles.header}>
          <img
            src={Logo}
            alt="Anand Jivan Foundation Trust Logo"
            className={styles.logo}
          />
          <h1>Anand Jivan Foundation Trust</h1>
          <p>Let's Make Better Life</p>
        </div>
        <div className={styles.formContainer}>
          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Get OTP</button>
              <Link className={styles.homelink} to="/">
                Back to home
              </Link>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
              />
              <button type="submit">Submit</button>
              <Link className={styles.homelink} to="/">
                Back to home
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
