import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import LeftArrow from '../assets/svg/arrow-left.svg';

import AnimatedCases from './animated-cases';

interface FormProps {
  isVisible: boolean,
  onClickClose: any
}
const FormContainer: React.FC<FormProps> = ({ isVisible, onClickClose }: FormProps) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const budged = [
    { name: 'менее 0.5 млн' },
    { name: '1 - 3 млн' },
    { name: '0.5 - 1 млн' },
    { name: 'Более 3 млн' },
  ];
  // Обработчики для изменения состояния при вводе
  const handleInput1Change = (e: any) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e: any) => {
    setInput2(e.target.value);
  };

  const handleInput3Change = (e: any) => {
    setInput3(e.target.value);
  };
  const handleInput4Change = (e: any) => {
    setInput4(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Здесь можно обработать отправленные данные
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
  };

  return (
    <div  className={`formModal ${isVisible && 'formModalVisible'}`}>
      <div className="formLeft">
        <div className="form-container">

          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingName"
              label="Имя"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Введите ваше имя"
                value={input1}
                onChange={handleInput1Change}
                style={{  border: 0, borderBottom: '1px solid #BDBDBD', borderRadius: 0 }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingCompany"
              label="Компания"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Введите название компании"
                value={input2}
                onChange={handleInput2Change}
                style={{ border: 0, borderBottom: '1px solid #BDBDBD', borderRadius: 0 }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPhone"
              label="Номер телефона"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Введите номер телефона"
                value={input3}
                onChange={handleInput3Change}
                style={{ border: 0, borderBottom: '1px solid #BDBDBD', borderRadius: 0 }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingTask"
              label="Расскажите о вашей задаче"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Опишите задачу"
                value={input4}
                onChange={handleInput4Change}
                style={{ border: 0, borderBottom: '1px solid #BDBDBD', borderRadius: 0 }}
              />
            </FloatingLabel>
          </form>
        </div>

        <div className="form-radio-container">
          <label className="form-label">Бюджет</label>
          <div className="radio-group">
            {budged.map((el, index) => (
              <div key={index} className="radio-item">
                <input
                  type="radio"
                  id={`budged-${index}`}
                  name="budged"
                  value={el.name}
                  className="form-radio-input"
                />
                <label htmlFor={`budged-${index}`} className="radio-label">
                  {el.name}
                </label>
              </div>
            ))}
          </div>
        </div>



        <div className="form-submit-btn">Отправить</div>

        <p className="privacyText">
          Политика обработки персональных данных
        </p>

        <div className="formBottomContent">
          <div className="formBottomContent">
            <div className="horizontalLine"/>
            <span className="orText">или</span>
            <div className="horizontalLine"/>
          </div>
        </div>
        <div style={{ marginBottom: '32px' }}/>
        <div className="formContactsBox">
          <AnimatedCases title={'Заполнить бриф'}/>
          <div style={{ marginBottom: '32px' }}/>
          <AnimatedCases title={'Написать в Telegram'}/>
        </div>




        <div onClick={onClickClose} className="formCloseCircle">
          <img style={{ width: '30px', height: '30px', }} src={LeftArrow} alt=""/>
        </div>
      </div>



      <div className="formRight"/>
    </div>
  );
};

export default FormContainer;
