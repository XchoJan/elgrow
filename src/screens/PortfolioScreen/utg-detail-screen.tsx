import React, { useEffect, useRef, useState } from 'react';

import Header from '../../components/header';
import CaseTitleDescription from '../../components/case-title-description';
import StackItem from '../../components/stack-item';
import PortfolioElem from '../../components/portfolio-elem';
import AnimatedCases from '../../components/animated-cases';
import PostgreSQLIcon from '../../assets/servicesIcons/postgreSQL.svg';
import ReactJSIcon from '../../assets/servicesIcons/reactJs.svg';
import CPlus from '../../assets/servicesIcons/cPlus.svg';
import RabbitIcon from '../../assets/servicesIcons/RabbitMq.svg';
import Form from '../../components/form';


const UtgDetailScreen: React.FC = () =>{
  const [isVisibleForm, setIsVisibleForm] = useState(false);


  return(
    <div>
      <div className="portfolioHeader">
        <Header onPressContactUs={()=> setIsVisibleForm(true)}  minHeight={true}/>
      </div>

      <div className="utg-container">
        <p className="H1">UTG Учебный центр</p>
        <div style={{ marginBottom: '34px' }}  className="utg-case-info-box">
          <CaseTitleDescription title={'UTG Group'} description={'Клиент'}/>
          <div style={{ width: '40px' }}/>
          <CaseTitleDescription title={'Веб-сервис'} description={'Тип работ'}/>
          <div style={{ width: '40px' }}/>
          <CaseTitleDescription title={'2022'} description={'Год'}/>
        </div>

        <div>
          <p className="H2">
            Введение
          </p>
          <p className="t3">
            Мы разработали систему обучения сотрудников для крупнейшего в России оператора наземного обслуживания воздушных судов — UTG Group.
            Этот проект продемонстрировал наши способности глубоко интегрироваться в существующие процессы клиента,
            адаптироваться к специфическим условиям и запускать решения в промышленную эксплуатацию.
          </p>

          <img className="utg-img" src={require('../../assets/images/utg-first.png')}/>

          <p className="H2">
            Лирическое отступление
          </p>
          <p className="t3">
            Авиация — отрасль, где любые изменения воспринимаются крайне осторожно. Принцип "работает — не трогай" здесь имеет особое значение, поскольку речь идет о безопасности полетов. Нововведения часто встречают сопротивление, а автоматизация сталкивается с серьезной бюрократией.
          </p>
          <p className="t3">
            До 2022 года обучение персонала в аэропортах велось на бумаге. Автоматизация пыталась внедриться, но не всегда успешно. В итоге, даже технический персонал получал свои сертификаты без значительных нововведений.
          </p>


          <img className="utg-img" src={require('../../assets/images/image51.png')}/>

          <p className="H2">
            Проблемы и задачи
          </p>

          <p className="t3">
            Нас привлекли для усиления ИТ-штата заказчика. Необходимо было понять текущие процессы, оптимизировать их, предложить
            и внедрить решения до стадии промышленной эксплуатации.
          </p>

          <p className="H3">
            Проблемы
          </p>

          <p className="t3">
            1. Низкая скорость загрузки некоторых страниц и блоков.<br/>
            2. Монолитная архитектура на бэкенде.<br/>
            3. Отсутствие структурированных задач.<br/>
            4. Недостаток времени у заказчика на ведение разработки своими силами.
          </p>



          <p className="H3">
            Задачи
          </p>

          <p className="t3">
            1. Структурировать и рассортировать бизнес-требования.<br/>
            2. Изучить текущую архитектуру.<br/>
            3. Отсутствие структурированных задач.<br/>
            4. Провести разработку, тестирование и запуск продукта.
          </p>

          <div className="marginVertical100">
            <p className="H2">Утвержденная структура и функционал сервиса</p>
          </div>

          <p className="H3">
            Авторизация и права доступа
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/utg-authorization.png')}/>

          <p className="H3">
            Автоматизированная система аналитики обучения сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/utg-analytics.png')}/>

          <p className="H3">
            Процесс обучения
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/education-process.png')}/>

          <p className="H3">
            Интеграция с системой тестирования сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/image43.png')}/>

          <p className="H3">
            Архив обучения сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/image42.png')}/>

          <p className="H3">
            Отпуска, увольнения, декреты, болезни
          </p>


          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/leave.png')}/>

          <p className="t3" style={{ marginBottom: '56px' }}>
            Бэкенд был разделен на микросервисы, частично переписан и частично написан заново. {'\n'} Фронтенд остался монолитным из-за экономической нецелесообразности его разделения.
          </p>

          <p className="H2">
            Результаты
          </p>


          <p className="t3">
            1. Все запросы к бэкенду были оптимизированы.<br/>
            2. Переработана бизнес-логика.<br/>
            3. Разработан UI/UX для проведения и прохождения обучения сотрудников, чтобы процесс был максимально удобным и эффективным.
          </p>


          <p className="H3">
            Тестирование
          </p>


          <p className="t3" style={{ marginBottom: '56px' }}>
            Мы провели ручное и пользовательское тестирование собственными силами. Автотестирование было выполнено заказчиком.
          </p>

          <p className="H2">
            Технологический стек
          </p>

          <div className="stackItemsBox">
            <div>
              <span className="stackTitle">Бэкенд</span>
              <StackItem icon={CPlus} description={'C# .NET'}/>
            </div>
            <div>
              <span className="stackTitle">Фронтенд</span>
              <StackItem icon={ReactJSIcon} description={'React'}/>
            </div>
            <div>
              <span className="stackTitle">Очереди</span>
              <StackItem icon={RabbitIcon} description={'RabbitMQ'}/>
            </div>
            <div>
              <span className="stackTitle">База данных</span>
              <StackItem icon={PostgreSQLIcon} description={'PostgreSQL'}/>
            </div>
            <div style={{ width: 'clamp(0rem, -1.32rem + 4.23vw, 3.75rem)' }}/>
          </div>
        </div>
      </div>


      <p style={{ marginLeft: 'clamp(1rem, 0.276rem + 2.89vw, 3.75rem)' }} className="H2">
        Следующие кейсы
      </p>

      <div className="utg-next-cases-container">
        <PortfolioElem caseScreen={'/vtb-detail'}  description={'Подробнее'} src={require('../../assets/images/portfolio1.png')}/>
        <PortfolioElem caseScreen={'/cowberry-detail'}  description={'Подробнее'} src={require('../../assets/images/portfolio6.png')}/>
      </div>

      <div className="utg-all-cases">
        <AnimatedCases link={'/portfolio'} title={'Все кейсы'}/>
      </div>
      <Form
        onClickClose={() => setIsVisibleForm(false)}
        isVisible={isVisibleForm}
      />
    </div>
  );
};

export default UtgDetailScreen;
