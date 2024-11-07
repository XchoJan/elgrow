import React, { useState } from 'react';

import Header from '../../components/header';
import AnimatedCases from '../../components/animated-cases';
import Form from '../../components/form';

const ContactsScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);


  return (
    <div style={{ overflow: 'hidden', height: '100vh', scrollbarWidth: 'none' }}>
      <div style={{}}>
        <Form
          onClickClose={() => setIsVisibleForm(false)}
          isVisible={isVisibleForm}
        />
        <div className="portfolioHeader">
          <Header onPressContactUs={()=> setIsVisibleForm(true)} minHeight={true} />
        </div>

        <div className="contactsContainer" style={{ overflow: 'hidden', }}>
          <div style={{ marginRight: '70px', marginBottom: '24px' }}>
            <p className="contactsTitle">Москва</p>
            <p className="contactsDescription">
              ул. Складочная, д. 3 строение 4, оф. 103
            </p>
            <p style={{ color: '#0D0D0D' }} className="contactsDescription">
              +7 495 118 93 56
            </p>
          </div>

          <div>
            <p className="contactsTitle">Екатеринбург</p>
            <p className="contactsDescription">
              ул. Мамина-Сибиряка, строение. 145, оф. 2112
            </p>
            <p style={{ color: '#0D0D0D' }} className="contactsDescription">
              +7 922 152 15 63
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '44px' }} className="contactsCuntactUsBtn">
          <AnimatedCases onClick={()=> setIsVisibleForm(true)} title={'Стать клиентом'}/>
        </div>

      </div>
    </div>

  );
};

export default ContactsScreen;
