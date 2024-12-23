import React from 'react';

import Header from '../../components/header';

const PoliticScreen: React.FC = () => (
  <div style={{ width: '100%', height: '100%',  position: 'relative' }}>

    <div style={{ marginBottom: '60px' }} className="portfolioHeader">
      <Header/>
    </div>

    <div className="utg-container">

      <p className="H1">
        Политика обработки<br/>
        персональных данных
      </p>
      <div className="marginVertical100"/>
      <p className="H2">
        1. Общие положения
      </p>
      <p className="t3">
        1.1 ООО “Академ-Айти” (далее по тексту – Оператор) ставит соблюдение прав и свобод граждан одним из важнейших условий осуществления своей деятельности.<br/>
        1.2 Политика Оператора в отношении обработки персональных данных (далее по тексту — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта advegital.com. Персональные данные обрабатывается в соответствии с ФЗ «О персональных данных» № 152-ФЗ.
      </p>
      <div className="marginBottom80"/>
      <p className="H2">
        2. Основные понятия, используемые в Политике:
      </p>

      <p className="t3">
        2.1 Веб-сайт - совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу advegital.com;<br/>
        2.2 Пользователь – любой посетитель веб-сайта advegital.com;<br/>
        2.3 Персональные данные – любая информация, относящаяся к Пользователю веб-сайта advegital.com;<br/>
        2.4 Обработка персональных данных - любое действие с персональными данными, совершаемые с использованием ЭВМ, равно как и без их использования;<br/>
        2.5 Обезличивание персональных данных – действия, результатом которых является невозможность без использования дополнительной информации определить принадлежность персональных данных конкретному Пользователю или лицу;<br/>
        2.6 Распространение персональных данных – любые действия, результатом которых является раскрытие персональных данных неопределенному кругу лиц;<br/>
        2.7 Предоставление персональных данных – любые действия, результатом которых является раскрытие персональных данных определенному кругу лиц;<br/>
        2.8 Уничтожение персональных данных – любые действия, результатом которых является безвозвратное уничтожение персональных на ЭВМ или любых других носителях.<br/>
      </p>

      <div className="marginBottom80"/>



      <p className="H2">
        3. Оператор может обрабатывать следующие персональные данные:
      </p>

      <p className="t3">
        3.1 Адрес электронной почты Пользователя<br/>
        3.2 Номер телефона Пользователя<br/>
        3.3. Фамилию, имя, отчество Пользователя<br/>
        3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
      </p>

      <div className="marginBottom80"/>


      <p className="H2">
        4. Цели обработки персональных данных
      </p>

      <p className="t3">
        {/* eslint-disable-next-line max-len */}
        4.1 Цель обработки адреса электронной почты, номера телефона, фамилии, имени, отчества Пользователя - уточнение деталей заказа услуги. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес info@elgrow.ru<br/>
        4.2 Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
      </p>
      <div className="marginBottom80"/>

      <p className="H2">
        5. Правовые основания обработки персональных данных
      </p>

      <p className="t3">
        5.1 Оператор обрабатывает персональные данные Пользователя только в случае их отправки Пользователем через формы, расположенные на сайте advegital.com. Отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.<br/>
        5.2 Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
      </p>

      <div className="marginBottom80"/>


      <p className="H2">
        6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
      </p>

      <p className="t3">
        6.1 Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.<br/>
        6.2 Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.<br/>
        6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их, направив Оператору уведомление с помощью электронной почты на электронный адрес Оператора vashapochta@yandex.ru, либо на почтовый адрес (почтовый адрес можно убрать) 125167, г.Москва, ул.Пигузова д.123 оф.321, с пометкой «Актуализация персональных данных».<br/>
        {/* eslint-disable-next-line max-len */}
        6.4 Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление с помощью электронной почты на электронный адрес Оператора vashapochta@yandex.ru, либо на почтовый адрес (почтовый адрес можно убрать) 125167, г.Москва, ул.Пигузова д.123 оф.321, с пометкой «Отзыв согласия на обработку персональных данных».
      </p>

      <div className="marginBottom80"/>

      <p className="H2">
        7. Заключительные положения
      </p>

      <p className="t3">
        7.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты info@elgrow.ru,<br/>
        7.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. В случае существенных изменений Пользователю может быть выслана информация на указанный им электронный адрес.
      </p>

      <div className="marginBottom80"/>



      <p className="t3">
        ООО «АКАДЕМ-АЙТИ»<br/>
        ИНН 6685158212 КПП 668501001 ОГРН 1196658003255<br/>
        620075 г.Екатеринбург ул.Мамина-Сибиряка Стр. 145 оф.2112<br/>
        Генеральный директор Чучулин Дмитрий Сергеевич<br/>
        р/с 40702810538030013633 БИК 046577964<br/>
        ФИЛИАЛ "ЕКАТЕРИНБУРГСКИЙ" АО "АЛЬФА-БАНК" г. Екатеринбург
      </p>



    </div>
  </div>
);

export default PoliticScreen;
