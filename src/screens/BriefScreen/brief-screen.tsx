import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';

import Header from '../../components/header';
import LabelInput from '../../components/LabelInput';
import PoliticBtn from '../../components/politic-btn';

const BriefScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetLimit, setBudgetLimit] = useState('');
  const [projectParticipants, setProjectParticipants] = useState('');
  const [departments, setDepartments] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [ndaRequired, setNdaRequired] = useState('');
  const [aboutElgrow, setAboutElgrow] = useState('');
  const [companyWorkStyle, setCompanyWorkStyle] = useState('');
  const [productStructure, setProductStructure] = useState('');
  const [currentObjective, setCurrentObjective] = useState('');
  const [needForApp, setNeedForApp] = useState('');
  const [businessGoal, setBusinessGoal] = useState('');
  const [keyMetrics, setKeyMetrics] = useState('');
  const [limitations, setLimitations] = useState('');
  const [referenceProducts, setReferenceProducts] = useState('');
  const [projectGoals, setProjectGoals] = useState('');
  const [previousAttempts, setPreviousAttempts] = useState('');
  const [productPrinciple, setProductPrinciple] = useState('');
  const [userAssumptions, setUserAssumptions] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [userAlternatives, setUserAlternatives] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [success, setSuccess] = useState(false);


  const budged = [
    { name: 'нужно уже вчера' },
    { name: 'есть четкий дедлайн' },
    { name: 'несрочная задача' },
  ];

  const handleBudgetChange = (e: any) => {
    setSelectedBudget(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (!companyName){
      console.log(false);
      return;
    }

    const formData: any = {
      companyName,
      taskDescription,
      projectType,
      budgetLimit,
      projectParticipants,
      departments,
      documentation,
      ndaRequired,
      aboutElgrow,
      companyWorkStyle,
      productStructure,
      currentObjective,
      needForApp,
      businessGoal,
      keyMetrics,
      limitations,
      referenceProducts,
      projectGoals,
      previousAttempts,
      productPrinciple,
      userAssumptions,
      competitors,
      userAlternatives,
      additionalInfo,
      selectedBudget,
    };

    e.preventDefault();

    // Параметры для emailjs
    const serviceId = 'service_920bb5h';
    const templateId = 'template_bxl28xk';
    const userId = 'KknwdG1U_xRbeZu8g';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200){
          setCompanyName('');
          setTaskDescription('');
          setProjectType('');
          setBudgetLimit('');
          setProjectParticipants('');
          setDepartments('');
          setDocumentation('');
          setNdaRequired('');
          setAboutElgrow('');
          setCompanyWorkStyle('');
          setProductStructure('');
          setCurrentObjective('');
          setNeedForApp('');
          setBusinessGoal('');
          setKeyMetrics('');
          setLimitations('');
          setReferenceProducts('');
          setProjectGoals('');
          setPreviousAttempts('');
          setProductPrinciple('');
          setUserAssumptions('');
          setCompetitors('');
          setUserAlternatives('');
          setAdditionalInfo('');
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


  return (
    <div>
      <div className="portfolioHeader">
        <Header
          onPressContactUs={() => setIsVisibleForm(true)}
          minHeight={true}
        />
      </div>
      <div className="utg-container">
        <h2 className="brif-title H1">Бриф</h2>

        <p className="H2">Обработка запроса</p>

        <span className="t3">
          Оперативно pазберемся в проблеме и сориентируем по бюджетам и срокам,
          ее срочность. Расскажем о вилках по типам работ. Если не вписываемся в
          бюджет или сроки, сразу это подсветим
        </span>

        <div style={{  marginTop: '40px' }}>
          <LabelInput
            type="text"
            value={companyName}
            onChange={(e: any) => setCompanyName(e.target.value)}
            label="1. Как называется ваша компания?"

          />
          <LabelInput
            type="text"
            value={taskDescription}
            onChange={(e: any) => setTaskDescription(e.target.value)}
            label="2. Расскажите кратко о задаче"
          />
          <LabelInput
            type="text"
            value={projectType}
            onChange={(e: any) => setProjectType(e.target.value)}
            label="3. Постоянные ли это работы или единичный проект?"
          />
        </div>

        <div className="breif-form-radio-container">
          <label style={{ marginBottom: '24px', color: '#878787' }} className="L18L">
            4. Срочность задачи
          </label>
          <div className="breif-radio-group">
            {budged.map((el, index) => (
              <div key={index} className="breif-radio-item">
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

        <div style={{  marginBottom: '40px' }}>
          <LabelInput
            type="text"
            value={budgetLimit}
            onChange={(e: any) => setBudgetLimit(e.target.value)}
            label="5. Каковы ограничения по бюджету?"
          />
          <LabelInput
            type="text"
            value={projectParticipants}
            onChange={(e: any) => setProjectParticipants(e.target.value)}
            label="6. Кто будет участвовать в проекте на вашей стороне? Кто в этом проекте является ключевым лицом, принимающим решение?"
          />
          <LabelInput
            type="text"
            value={departments}
            onChange={(e: any) => setDepartments(e.target.value)}
            label="7. Есть ли в компании ИТ-подразделение? Маркетинг-подразделение? Дизайн-подразделение?"
          />
          <LabelInput
            type="text"
            value={documentation}
            onChange={(e: any) => setDocumentation(e.target.value)}
            label="8. Существует ли какая-то значимая документация (персоны, user flow или другие), которую нам следует изучить перед звонком?"
          />
          <LabelInput
            type="text"
            value={ndaRequired}
            onChange={(e: any) => setNdaRequired(e.target.value)}
            label="9. Есть ли NDA, который нужно подписать до созвона?"
          />
          <LabelInput
            type="text"
            value={aboutElgrow}
            onChange={(e: any) => setAboutElgrow(e.target.value)}
            label="10. Расскажите кратко, что вы знаете об Elgrow и как нас нашли?"
          />
        </div>

        <p className="H2">Знакомство</p>

        <span className="t3">
          В срок конкретизируем задачу, соберем бизнес-требования в первичный технический документ, покажем кейсы
        </span>


        <div style={{ marginBottom: '40px', marginTop: '40px' }}>
          <LabelInput
            type="text"
            value={companyWorkStyle}
            onChange={(e: any) => setCompanyWorkStyle(e.target.value)}
            label="1. Как вы работаете? На чем зарабатываете?"
          />
          <LabelInput
            type="text"
            value={productStructure}
            onChange={(e: any) => setProductStructure(e.target.value)}
            label="2. Как устроен ваш продукт? Благодаря чему он развивается?"
          />
          <LabelInput
            type="text"
            value={currentObjective}
            onChange={(e: any) => setCurrentObjective(e.target.value)}
            label="3. Какая ближайшая задача сейчас стоит перед продуктом?"
          />
          <LabelInput
            type="text"
            value={needForApp}
            onChange={(e: any) => setNeedForApp(e.target.value)}
            label="4. Откуда появилась потребность в сайте / приложении / внутренней системе / другом…"
          />
          <LabelInput
            type="text"
            value={businessGoal}
            onChange={(e: any) => setBusinessGoal(e.target.value)}
            label="5. Какую цель для бизнеса преследуем? Например: привлечение клиентов, регистрации, удержание, прибыль, рекомендации и так далее"
          />
          <LabelInput
            type="text"
            value={keyMetrics}
            onChange={(e: any) => setKeyMetrics(e.target.value)}
            label="6. Какие ключевые метрики (KPI)?"
          />
          <LabelInput
            type="text"
            value={limitations}
            onChange={(e: any) => setLimitations(e.target.value)}
            label="7. Есть ли какие-то ограничения (технологические, связанные с бизнесом и т.п.)?"
          />
          <LabelInput
            type="text"
            value={referenceProducts}
            onChange={(e: any) => setReferenceProducts(e.target.value)}
            label="8. Есть ли какие-то продукты, на которые можно ориентироваться? (у конкурентов, из других сфер или другие ваши продукты)"
          />

        </div>


        <p className="H2">Брифинг</p>

        <span className="t3">
          Быстро анализируем текущие документы и исследования, выдаем первичное коммерческое предложение
        </span>

        <div style={{  marginBottom: '60px', marginTop: '40px' }}>
          <LabelInput
            type="text"
            value={projectGoals}
            onChange={(e: any) => setProjectGoals(e.target.value)}
            label="1. Каких ещё целей вы должны достичь в ходе этого проекта?"
          />
          <LabelInput
            type="text"
            value={previousAttempts}
            onChange={(e: any) => setPreviousAttempts(e.target.value)}
            label="2. Пытались ли раньше закрыть эти задачи? Как? Из того, что вы уже пробовали,что сработало, а что нет?"
          />
          <LabelInput
            type="text"
            value={productPrinciple}
            onChange={(e: any) => setProductPrinciple(e.target.value)}
            label="3. Каков принцип работы продукта? Как он устроен? Из каких частей состоит?"
          />
          <LabelInput
            type="text"
            value={userAssumptions}
            onChange={(e: any) => setUserAssumptions(e.target.value)}
            label="4. Каковы ваши предположения о пользователях? Что вы точно знаете о пользователях?"
          />
          <LabelInput
            type="text"
            value={competitors}
            onChange={(e: any) => setCompetitors(e.target.value)}
            label="5. Кто ваши конкуренты? Чем вы от них отличаетесь? Какие у вас преимущества и недостатки?"
          />
          <LabelInput
            type="text"
            value={userAlternatives}
            onChange={(e: any) => setUserAlternatives(e.target.value)}
            label="6. Какие у пользователя есть альтернативы в решении этой проблемы, помимо конкурентов?"
          />
          <LabelInput
            type="text"
            value={additionalInfo}
            onChange={(e: any) => setAdditionalInfo(e.target.value)}
            label="7. Есть ли ещё что-то важное, о чем мы не спросили?"
          />
        </div>

        {success &&
          <span className="success">
            Успешно отправлено!
          </span>
        }

        <div onClick={handleSubmit} className="form-submit-btn" style={{ width: '100%' }}>
          Отправить
        </div>

        <p className="t4" style={{ textAlign: 'center' }}>
          Нажимая кнопку “Отправить”, вы соглашаетесь<br/>
          <PoliticBtn/>
        </p>

      </div>
    </div>
  );
};

export default BriefScreen;
