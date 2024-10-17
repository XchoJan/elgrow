import React, { useState } from 'react';

import LeftArrow from '../assets/svg/arrow-left.svg';
interface FormProps {
  isVisible: boolean,
  onClickClose: any
}
const Form: React.FC<FormProps> = ({ isVisible, onClickClose }: FormProps) => {
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
            <div className="form-group">
              <label className="form-label" htmlFor="name">Имя</label>
              <input
                id="name"
                type="text"
                value={input1}
                onChange={handleInput1Change}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="company">Компания</label>
              <input
                id="company"
                type="text"
                value={input2}
                onChange={handleInput2Change}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Номер телефона</label>
              <input
                id="phone"
                type="text"
                value={input3}
                onChange={handleInput3Change}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="task">Расскажите о вашей задаче</label>
              <input
                id="task"
                type="text"
                value={input4}
                onChange={handleInput4Change}
                className="form-input"
              />
            </div>


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

        <div>

        </div>




        <div onClick={onClickClose} className="formCloseCircle">
          <img style={{ width: '30px', height: '30px', }} src={LeftArrow} alt=""/>
        </div>
      </div>



      <div className="formRight"/>
      {/*width 100% dnem kisem 2 masi 2rd kesy opacitiov*/}
    </div>
  );
};

export default Form;
