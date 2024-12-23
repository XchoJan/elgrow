import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainScreen from '../screens/MainScreen/main-screen';
import ServicesScreen from '../screens/ServicesScreen/services-screen';
import PortfolioScreen from '../screens/PortfolioScreen/portfolio-screen';
import ContactsScreen from '../screens/ContactsScreen/contacts-screen';
import UtgDetailScreen from '../screens/PortfolioScreen/utg-detail-screen';
import VtbDetailScreen from '../screens/PortfolioScreen/vtb-detail-screen';
import CowberryDetailScreen from '../screens/PortfolioScreen/cowberry-detail-screen';
import BriefScreen from '../screens/BriefScreen/brief-screen';
import UtgSupportScreen from '../screens/PortfolioScreen/utg-support-screen';
import PoliticScreen from '../screens/PrivicyScreen/politic-screen';
import Wrapper from '../components/wrapper';

const RootRouter: React.FC = () => (
  <Router basename="/elgrow">
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/portfolio" element={<PortfolioScreen />} />
        <Route path="/contacts" element={<ContactsScreen />} />


        <Route path="/utg-detail" element={<UtgDetailScreen />} />
        <Route path="/vtb-detail" element={<VtbDetailScreen />} />
        <Route path="/cowberry-detail" element={<CowberryDetailScreen />} />
        <Route path="/utg-support" element={<UtgSupportScreen />} />


        <Route path="/brief" element={<BriefScreen />} />
        <Route path="/politic" element={<PoliticScreen />} />
      </Routes>
    </Wrapper>
  </Router>
);

export default RootRouter;
