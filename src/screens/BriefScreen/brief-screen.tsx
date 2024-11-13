import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';

import Header from '../../components/header';
import FloatingInput from '../../components/floating-input';

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
    { name: 'есть четкий дедлай' },
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

        <div style={{ marginLeft: '-10px', marginTop: '40px' }}>
          <FloatingInput
            type="text"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            placeholder="Как называется ваша компания?"

          />
          <FloatingInput
            type="text"
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
            placeholder="Расскажите кратко о задаче"
          />
          <FloatingInput
            type="text"
            value={projectType}
            onChange={e => setProjectType(e.target.value)}
            placeholder="Постоянные ли это работы или единичный проект?"
          />
        </div>

        <div className="breif-form-radio-container">
          <label style={{ marginBottom: '24px' }} className="L18L">
            Срочность задачи
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

        <div style={{ marginLeft: '-10px', marginBottom: '40px' }}>
          <FloatingInput
            type="text"
            value={budgetLimit}
            onChange={e => setBudgetLimit(e.target.value)}
            placeholder="Каковы ограничения по бюджету?"
          />
          <FloatingInput
            type="text"
            value={projectParticipants}
            onChange={e => setProjectParticipants(e.target.value)}
            placeholder="Кто будет участвовать в проекте на вашей стороне? Кто в этом проекте является ключевым лицом, принимающим решение?"
          />
          <FloatingInput
            type="text"
            value={departments}
            onChange={e => setDepartments(e.target.value)}
            placeholder="Есть ли в компании ИТ-подразделение? Маркетинг-подразделение? Дизайн-подразделение?"
          />
          <FloatingInput
            type="text"
            value={documentation}
            onChange={e => setDocumentation(e.target.value)}
            placeholder="Существует ли какая-то значимая документация (персоны, user flow или другие), которую нам следует изучить перед звонком?"
          />
          <FloatingInput
            type="text"
            value={ndaRequired}
            onChange={e => setNdaRequired(e.target.value)}
            placeholder="Есть ли NDA, который нужно подписать до созвона?"
          />
          <FloatingInput
            type="text"
            value={aboutElgrow}
            onChange={e => setAboutElgrow(e.target.value)}
            placeholder="Расскажите кратко, что вы знаете об Elgrow и как нас нашли?"
          />
        </div>

        <p className="H28R">Знакомство</p>

        <span className="L18L">
          В срок конкретизируем задачу, соберем бизнес-требования в первичный технический документ, покажем кейсы
        </span>


        <div style={{ marginLeft: '-10px', marginBottom: '40px', marginTop: '40px' }}>
          <FloatingInput
            type="text"
            value={companyWorkStyle}
            onChange={e => setCompanyWorkStyle(e.target.value)}
            placeholder="Как вы работаете? На чем зарабатываете?"
          />
          <FloatingInput
            type="text"
            value={productStructure}
            onChange={e => setProductStructure(e.target.value)}
            placeholder="Как устроен ваш продукт? Благодаря чему он развивается?"
          />
          <FloatingInput
            type="text"
            value={currentObjective}
            onChange={e => setCurrentObjective(e.target.value)}
            placeholder="Какая ближайшая задача сейчас стоит перед продуктом?"
          />
          <FloatingInput
            type="text"
            value={needForApp}
            onChange={e => setNeedForApp(e.target.value)}
            placeholder="Откуда появилась потребность в сайте / приложении / внутренней системе / другом…"
          />
          <FloatingInput
            type="text"
            value={businessGoal}
            onChange={e => setBusinessGoal(e.target.value)}
            placeholder="Какую цель для бизнеса преследуем? Например: привлечение клиентов, регистрации, удержание, прибыль, рекомендации и так далее"
          />
          <FloatingInput
            type="text"
            value={keyMetrics}
            onChange={e => setKeyMetrics(e.target.value)}
            placeholder="Какие ключевые метрики (KPI)?"
          />
          <FloatingInput
            type="text"
            value={limitations}
            onChange={e => setLimitations(e.target.value)}
            placeholder="Есть ли какие-то ограничения (технологические, связанные с бизнесом и т.п.)?"
          />
          <FloatingInput
            type="text"
            value={referenceProducts}
            onChange={e => setReferenceProducts(e.target.value)}
            placeholder="Есть ли какие-то продукты, на которые можно ориентироваться? (у конкурентов, из других сфер или другие ваши продукты)"
          />

        </div>


        <p className="H28R">Брифинг</p>

        <span className="L18L">
          Быстро анализируем текущие документы и исследования, выдаем первичное коммерческое предложение
        </span>

        <div style={{ marginLeft: '-10px', marginBottom: '60px', marginTop: '40px' }}>
          <FloatingInput
            type="text"
            value={projectGoals}
            onChange={e => setProjectGoals(e.target.value)}
            placeholder="Каких ещё целей вы должны достичь в ходе этого проекта?"
          />
          <FloatingInput
            type="text"
            value={previousAttempts}
            onChange={e => setPreviousAttempts(e.target.value)}
            placeholder="Пытались ли раньше закрыть эти задачи? Как? Из того, что вы уже пробовали,что сработало, а что нет?"
          />
          <FloatingInput
            type="text"
            value={productPrinciple}
            onChange={e => setProductPrinciple(e.target.value)}
            placeholder="Каков принцип работы продукта? Как он устроен? Из каких частей состоит?"
          />
          <FloatingInput
            type="text"
            value={userAssumptions}
            onChange={e => setUserAssumptions(e.target.value)}
            placeholder="Каковы ваши предположения о пользователях? Что вы точно знаете о пользователях?"
          />
          <FloatingInput
            type="text"
            value={competitors}
            onChange={e => setCompetitors(e.target.value)}
            placeholder="Кто ваши конкуренты? Чем вы от них отличаетесь? Какие у вас преимущества и недостатки?"
          />
          <FloatingInput
            type="text"
            value={userAlternatives}
            onChange={e => setUserAlternatives(e.target.value)}
            placeholder="Какие у пользователя есть альтернативы в решении этой проблемы, помимо конкурентов?"
          />
          <FloatingInput
            type="text"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
            placeholder="Есть ли ещё что-то важное, о чем мы не спросили?"
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

        <p style={{ textAlign: 'center' }}>
          Нажимая кнопку “Отправить”, вы соглашаетесь<br/>
          <span className="privacyText">
            с Политикой конфиденциальности.
          </span>
        </p>

      </div>
    </div>
  );
};

export default BriefScreen;
