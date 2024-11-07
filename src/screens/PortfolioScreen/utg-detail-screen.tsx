import React, { useState } from 'react';

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
        <h2 className="utg-title" >UTG Учебный центр</h2>
        <div className="utg-case-info-box">
          <CaseTitleDescription title={'UTG Group'} description={'Клиент'}/>
          <div style={{ width: '100px' }}/>
          <CaseTitleDescription title={'Веб-сервис'} description={'Тип работ'}/>
          <div style={{ width: '100px' }}/>
          <CaseTitleDescription title={'2022'} description={'Год'}/>
        </div>

        <div>
          <p className="H30B">
            Введение
          </p>
          <p className="T20">
            Мы разработали систему обучения сотрудников для крупнейшего в России оператора наземного обслуживания воздушных судов — UTG Group.
            Этот проект продемонстрировал наши способности глубоко интегрироваться в существующие процессы клиента,
            адаптироваться к специфическим условиям и запускать решения в промышленную эксплуатацию.
          </p>

          <img className="utg-img" src={require('../../assets/images/utg-first.png')}/>

          <p className="H30B">
            Лирическое отступление
          </p>
          <p className="T20">
            Авиация — отрасль, где любые изменения воспринимаются крайне осторожно. Принцип "работает — не трогай" здесь имеет особое значение, поскольку речь идет о безопасности полетов. Нововведения часто встречают сопротивление, а автоматизация сталкивается с серьезной бюрократией.
          </p>
          <p className="T20">
            До 2022 года обучение персонала в аэропортах велось на бумаге. Автоматизация пыталась внедриться, но не всегда успешно. В итоге, даже технический персонал получал свои сертификаты без значительных нововведений.
          </p>


          <img className="utg-img" src={require('../../assets/images/image51.png')}/>

          <p className="H30B">
            Проблемы и задачи
          </p>

          <p className="T20">
            Нас привлекли для усиления ИТ-штата заказчика. Необходимо было понять текущие процессы, оптимизировать их, предложить
            и внедрить решения до стадии промышленной эксплуатации.
          </p>

          <p className="H20B">
            Проблемы
          </p>

          <p className="T20">
            1. Низкая скорость загрузки некоторых страниц и блоков.
          </p>
          <p className="T20">
            2. Монолитная архитектура на бэкенде.
          </p>
          <p className="T20">
            3. Отсутствие структурированных задач.
          </p>
          <p className="T20">
            4. Недостаток времени у заказчика на ведение разработки своими силами.
          </p>



          <p className="H20B">
            Задачи
          </p>

          <p className="T20">
            1. Структурировать и рассортировать бизнес-требования.
          </p>
          <p className="T20">
            2. Изучить текущую архитектуру.
          </p>
          <p className="T20">
            3. Отсутствие структурированных задач.
          </p>
          <p className="T20">
            4. Провести разработку, тестирование и запуск продукта.
          </p>

          <div className="marginVertical100">
            <p className="H30B">Утвержденная структура и функционал сервиса</p>
          </div>

          <p className="H20B">
            Авторизация и права доступа
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/utg-authorization.png')}/>

          <p className="H20B">
            Автоматизированная система аналитики обучения сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/utg-analytics.png')}/>

          <p className="H20B">
            Процесс обучения
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/education-process.png')}/>

          <p className="H20B">
            Интеграция с системой тестирования сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/image43.png')}/>

          <p className="H20B">
            Архив обучения сотрудников
          </p>

          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/image42.png')}/>

          <p className="H20B">
            Отпуска, увольнения, декреты, болезни
          </p>


          <img style={{ marginTop: '20px' }} className="utg-img" src={require('../../assets/images/leave.png')}/>

          <p className="T20" style={{ marginBottom: '56px' }}>
            Бэкенд был разделен на микросервисы, частично переписан и частично написан заново. {'\n'} Фронтенд остался монолитным из-за экономической нецелесообразности его разделения.
          </p>

          <p className="H20B">
            Результаты
          </p>


          <p className="T20">
            1. Все запросы к бэкенду были оптимизированы.
          </p>
          <p className="T20">
            2. Переработана бизнес-логика.
          </p>
          <p className="T20" style={{ marginBottom: '40px' }}>
            3. Разработан UI/UX для проведения и прохождения обучения сотрудников, чтобы процесс был максимально удобным и эффективным.
          </p>


          <p className="H20B">
            Тестирование
          </p>


          <p className="T20" style={{ marginBottom: '56px' }}>
            Мы провели ручное и пользовательское тестирование собственными силами. Автотестирование было выполнено заказчиком.
          </p>

          <p className="H20B">
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
              <span className="stackTitle">База данных</span>
              <StackItem icon={PostgreSQLIcon} description={'PostgreSQL'}/>
            </div>
            <div style={{ width: 'clamp(0rem, -1.32rem + 4.23vw, 3.75rem)' }}/>
            <div>
              <span className="stackTitle">Очереди</span>
              <StackItem icon={RabbitIcon} description={'RabbitMQ'}/>
            </div>
          </div>
        </div>
      </div>


      <p style={{ marginLeft: 'clamp(1rem, 0.276rem + 2.89vw, 3.75rem)' }} className="H20B">
        Следующие кейсы
      </p>

      <div className="utg-next-cases-container">
        <PortfolioElem caseScreen={''}  description={'Еще заполняем'} src={require('../../assets/images/portfolio3.png')}/>
        <PortfolioElem caseScreen={''}  description={'Еще заполняем'} src={require('../../assets/images/portfolio4.png')}/>
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
