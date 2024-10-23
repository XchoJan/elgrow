import React from 'react';

import Header from '../../components/header';
import AnimatedCases from '../../components/animated-cases';

const ContactsScreen: React.FC = () => {
  const a = 1;

  return (
    <div style={{ height: '100%' }}>
      <div className="portfolioHeader">
        <Header minHeight={true} />
      </div>

      <div>
        <div className="contactsContainer">
          <div style={{ marginRight: '70px' }}>
            <p className="contactsTitle">Москва</p>
            <p className="contactsDescription">
              ул. Складочная, д. 3 строение 4, оф. 103
            </p>
            <p className="contactsDescription">
              +7 495 118 93 56
            </p>
          </div>

          <div>
            <p className="contactsTitle">Екатеринбург</p>
            <p className="contactsDescription">
              ул. Мамина-Сибиряка, строение. 145, оф. 2112
            </p>
            <p className="contactsDescription">
              +7 922 152 15 63
            </p>
          </div>
        </div>

        <div className="contactsCuntactUsBtn">
          <AnimatedCases title={'Стать клиентом'}/>
        </div>
      </div>
    </div>
  );
};

export default ContactsScreen;
