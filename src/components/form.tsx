import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import CloseIcon from '../assets/svg/close.svg';
import HoveredCloseIcon from '../assets/svg/hoveredCloseIcon.svg';

import AnimatedCases from './animated-cases';
import PoliticBtn from './politic-btn';
import LabelInput from './LabelInput';

interface FormProps {
  isVisible: boolean;
  onClickClose: any;
}

const FormContainer: React.FC<FormProps> = ({
  isVisible,
  onClickClose,
}: FormProps) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const [selectedBudget, setSelectedBudget] = useState('');

  const [success, setSuccess] = useState(false);

  const [closeIsHovered, setCloseIsHovered] = useState(false);

  const budged = [
    { name: 'менее 0.5 млн' },
    { name: '1 - 3 млн' },
    { name: '0.5 - 1 млн' },
    { name: 'более 3 млн' },
  ];

  const handleBudgetChange = (e: any) => {
    setSelectedBudget(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (!input1 || !input2 || !input3 || !input4) {
      console.log(false);
      return;
    }

    const formData: any = {
      name: input1,
      company: input2,
      phoneNumber: input3,
      description: input4,
      budget: selectedBudget,
    };

    e.preventDefault();

    // Параметры для emailjs
    const serviceId = 'service_920bb5h';
    const templateId = 'template_ago0crg';
    const userId = 'KknwdG1U_xRbeZu8g';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200) {
          setInput1('');
          setInput2('');
          setInput3('');
          setInput4('');
          setSelectedBudget('');
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3400);
        }
      })
      .catch(error => {
        console.log('FAILED...', error);
      });
  };

  const openTelegram = () => {
    const telegramUrl = 'https://web.telegram.org/k/#@DChuchulin';
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className={`formModal ${isVisible && 'formModalVisible'}`}>
      <div className={`formLeft ${isVisible && 'formLeftVisible'}`}>
        <div style={ isVisible ? { overflowY: 'auto', height: '100%' } : {}}>
          <div className="form-container">
            <div
              onClick={onClickClose}
              className="formCloseIcon"
              onMouseMove={()=> setCloseIsHovered(true)}
              onMouseLeave={()=> setCloseIsHovered(false)}
            >
              <img style={{ width: '16px', height: '16px' }} src={closeIsHovered ? HoveredCloseIcon : CloseIcon} />
            </div>
            <form onSubmit={handleSubmit}>
              <LabelInput
                type="text"
                value={input1}
                onChange={(e: any) => setInput1(e.target.value)}
                label="Имя"
              />

              <LabelInput
                type="text"
                value={input2}
                onChange={(e: any) => setInput2(e.target.value)}
                label="Компания"
              />

              <LabelInput
                type="text"
                value={input3}
                onChange={(e: any) => setInput3(e.target.value)}
                label="Номер телефона"
              />

              <LabelInput
                type="text"
                value={input4}
                onChange={(e: any) => setInput4(e.target.value)}
                label="Расскажите о вашей задаче"
              />
            </form>
          </div>

          <div className="form-radio-container">
            <label style={{ fontSize: '20px' }} className="form-label t3">Бюджет</label>
            <div className="radio-group">
              {budged.map((el, index) => (
                <div key={index} className="radio-item">
                  <input
                    type="radio"
                    id="radio-input"
                    name="budged"
                    value={el.name}
                    className="form-radio-input"
                    onChange={handleBudgetChange}
                    checked={selectedBudget === el.name}
                  />
                  <label
                    style={{
                      color: selectedBudget === el.name ? '#303030' : '#878787',
                      fontSize: '16px'
                    }}
                    htmlFor={`budged-${index}`} className="t3"
                  >
                    {el.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div onClick={handleSubmit} className="form-submit-btn">
            Отправить
          </div>

          {success && <span className="success">Успешно отправлено!</span>}


          <PoliticBtn/>

          <div className="formBottomContent">
            <div className="formBottomContent">
              <div className="horizontalLine" />
              <span className="orText t3">или</span>
              <div className="horizontalLine" />
            </div>
          </div>
          <div style={{ marginBottom: '32px' }} />

          <div className="formContactsBox">
            <AnimatedCases link={'/brief'} title={'Заполнить бриф'} />
            <div style={{ width: '30px' }} />
            <AnimatedCases
              onClick={openTelegram}
              title={'Написать в Telegram'}
            />
          </div>

          {/*<div onClick={onClickClose} className="formCloseCircle">*/}
          {/*  <img*/}
          {/*    style={{ width: '30px', height: '30px' }}*/}
          {/*    src={LeftArrow}*/}
          {/*    alt=""*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="formRight" />
    </div>
  );
};

export default FormContainer;
