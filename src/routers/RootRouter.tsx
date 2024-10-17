import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainScreen from '../screens/MainScreen/main-screen';
import ServicesScreen from '../screens/ServicesScreen/services-screen';
import PortfolioScreen from '../screens/PortfolioScreen/portfolio-screen';
import Wrapper from '../components/wrapper';

const RootRouter: React.FC = () => (
  <Router>
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/portfolio" element={<PortfolioScreen />} />
      </Routes>
    </Wrapper>
  </Router>
);

export default RootRouter;
