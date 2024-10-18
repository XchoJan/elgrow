import React, { useState } from 'react';

import Header from '../../components/header';
import AnimatedCases from '../../components/animated-cases';
import MenuBtn from '../../components/menu-btn';

const ServicesScreen: React.FC = () => {
  const filters = [
    {
      name: 'Digital',
      description:
        'Комплексная интеграция информационных систем на основе веб и мобильных технологий',
    },
    {
      name: 'Intranet',
      description: 'Корпоративные порталы и внутренние системы предприятий',
    },
    {
      name: 'Mobile',
      description:
        'Разработка нативных и кросс-платформенных мобильных приложений',
    },
    { name: 'SLA', description: 'Техническая ваших проектов поддержка 24/7' },
    {
      name: 'E-commerce',
      description: 'Разработка крупных интернет-магазинов',
    },
    {
      name: 'Аутстаффинг',
      description: 'Только штатные сотрудники уровня middle +',
    },
  ];

  const [activeFilter, setActiveFilter] = useState({
    name: 'Digital',
    description:
      'Комплексная интеграция информационных систем на основе веб и мобильных технологий',
  });

  return (
    <div>
      <Header />

      <div className="servicesBox">
        <div className="servicesFilters">
          {filters.map((item, index: any) => (
            <span
              key={index}
              className={`servicesFiltersElem ${activeFilter.name === item.name ? 'servicesActiveFiltersElem' : ''}`}
              onClick={() => setActiveFilter(item)}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className="servicesDescriptionBox">
          <p className="servicesActiveFiltersDescription">{activeFilter.description}</p>
          <div className="servicesCasesBox">
            <AnimatedCases title={'Технологии'}/>
            <div style={{ marginRight: '80px' }}/>
            <AnimatedCases title={'Кейсы'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
