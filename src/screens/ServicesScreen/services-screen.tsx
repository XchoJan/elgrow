import React, { useState } from 'react';

import Header from '../../components/header';
import AnimatedCases from '../../components/animated-cases';
import MenuBtn from '../../components/menu-btn';

const ServicesScreen: React.FC = () => {
  const filters = [
    {
      name: 'Digital',
      description:
        'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
    },
    {
      name: 'Intranet',
      description: 'Корпоративные порталы \n и внутренние системы \n предприятий',
    },
    {
      name: 'Mobile',
      description:
        'Разработка нативных \n и кросс-платформенных \n мобильных приложений',
    },
    { name: 'SLA',
      description: 'Техническая ваших \n проектов поддержка 24/7' },
    {
      name: 'E-commerce',
      description: 'Разработка крупных \n интернет-магазинов',
    },
    {
      name: 'Аутстаффинг',
      description: 'Только штатные сотрудники \n уровня middle +',
    },
  ];

  const [activeFilter, setActiveFilter] = useState({
    name: 'Digital',
    description:
      'Комплексная интеграция \n информационных систем \n на основе веб и мобильных \n технологий',
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
