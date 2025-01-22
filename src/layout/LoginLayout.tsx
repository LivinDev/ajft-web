// ProtectedLayout.tsx
import React from 'react';


interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default LoginLayout;
