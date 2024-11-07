import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

import LeftArrow from '../assets/svg/arrow-left.svg';
import CloseIcon from '../assets/svg/close.svg';


import AnimatedCases from './animated-cases';
import FloatingInput from './floating-input';
interface FormProps {
  isVisible: boolean,
  onClickClose: any
}
const FormContainer: React.FC<FormProps> = ({ isVisible, onClickClose }: FormProps) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const [selectedBudget, setSelectedBudget] = useState('');

  const [success, setSuccess] = useState(false);

  const budged = [
    { name: 'менее 0.5 млн' },
    { name: '1 - 3 млн' },
    { name: '0.5 - 1 млн' },
    { name: 'Более 3 млн' },
  ];

  const handleBudgetChange = (e: any) => {
    setSelectedBudget(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (!input1 || !input2 || !input3 || !input4){
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

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200){
          setInput1('');
          setInput2('');
          setInput3('');
          setInput4('');
          setSelectedBudget('');
          setSuccess(true);
          setTimeout(()=>{
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
        <div className="form-container">
          <div onClick={onClickClose} className="formCloseIcon">
            <img src={CloseIcon} />
          </div>
          <form onSubmit={handleSubmit}>
            <FloatingInput
              type="text"
              value={input1}
              onChange={e => setInput1(e.target.value)}
              label="Имя"
            />

            <FloatingInput
              type="text"
              value={input2}
              onChange={e => setInput2(e.target.value)}
              label="Компания"
            />

            <FloatingInput
              type="text"
              value={input3}
              onChange={e => setInput3(e.target.value)}
              label="Номер телефона"
            />

            <FloatingInput
              type="text"
              value={input4}
              onChange={e => setInput4(e.target.value)}
              label="Расскажите о вашей задаче"
            />
          </form>
        </div>

        <div className="form-radio-container">
          <label className="form-label">Бюджет</label>
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
                <label htmlFor={`budged-${index}`} className="radio-label">
                  {el.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div onClick={handleSubmit} className="form-submit-btn">
          Отправить
        </div>

        {success &&
          <span className="success">
            Успешно отправлено!
          </span>
        }

        <p className="privacyText">Политика обработки персональных данных</p>

        <div className="formBottomContent">
          <div className="formBottomContent">
            <div className="horizontalLine" />
            <span className="orText">или</span>
            <div className="horizontalLine" />
          </div>
        </div>
        <div style={{ marginBottom: '32px' }} />
        <div className="formContactsBox">
          <AnimatedCases link={'/brief'} title={'Заполнить бриф'} />
          <div style={{ width: '24px' }} />
          <AnimatedCases onClick={openTelegram} title={'Написать в Telegram'} />
        </div>

        <div onClick={onClickClose} className="formCloseCircle">
          <img
            style={{ width: '30px', height: '30px' }}
            src={LeftArrow}
            alt=""
          />
        </div>
      </div>

      <div className="formRight" />
    </div>
  );
};

export default FormContainer;
