import React, { useState } from 'react';

import Header from '../../components/header';
import AnimatedCases from '../../components/animated-cases';
import Form from '../../components/form';

const ContactsScreen: React.FC = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);


  return (
    <div style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden', scrollbarWidth: 'none' }}>
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
            <p className="t1">Москва</p>
            <p className="t3" style={{ color: '#878787', width: '245px' }}>
              ул. Складочная, д. 3 <br/> строение 4, оф. 103
            </p>
            <p style={{ color: '#0D0D0D', fontSize: '20px' }} className="t3">
              +7 495 118 93 56
            </p>
          </div>
          <div>
            <p className="t1">Екатеринбург</p>
            <p className="t3" style={{ color: '#878787', width: '245px' }}>
              ул. Мамина-Сибиряка,<br/> строение. 145, оф. 2112
            </p>
            <p style={{ color: '#0D0D0D', fontSize: '20px' }} className="t3">
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
