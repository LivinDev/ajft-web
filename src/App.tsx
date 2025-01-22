// @ts-nocheck
import React from 'react';
import HomeRoute from './routes/Routers';
// import HomeRoute from '../routes/Routers';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../src/styles/global.css'
const App: React.FC = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  const isAuthenticated = true

  

  return <HomeRoute isAuthenticated={isAuthenticated} />;
};

export default App;
