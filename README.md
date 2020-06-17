# SpeakIt

| Deadline         | Folder name| Branch name |
| ---------------- | ----------- | ----------- |
| 26.04.2020 23:59 | speakit    | speakit    |


**SpeakIt** - одностраничное приложение, при помощи которого можно прослушать произношение английских слов и использовать технологию распознавания речи Google Web Speech API для проверки правильности произношения.

## Макет приложения:

![screenshot](../images/speakit.png)

**Demo** https://speakit.netlify.com/ (версия без Hacker scope)

## Исходные данные

Коллекция из 3600 часто употребляемых английских слов, отсортированных в порядке возрастания сложности. Вся коллекция разбита на шесть частей по 600 слов в каждой. Для каждого слова предлагается транскрипция, пример произношения, картинка-ассоциация. Есть и другие данные, но они в этом таске не используются. Переводов слов в исходных данных нет, их нужно будет получить при помощи translation API. 

## Работа приложения

- слова выводятся на страницу группами по 10 слов. Возле каждого слова отображается транскрипция и иконка аудио  
- при клике по слову звучит его произношение, выводятся соответствующие данному слову картинка и перевод 
- у пользователя есть возможность включить (и отключить) распознавание речи Google Speech Recognition
- если распознавание речи включено, и приложению разрешён доступ к микрофону, все произнесённые пользователем слова распознаются и отображаются в текстовом виде
- проверка правильности произношения происходит путём сравнения распознанного текста с написанием слова
- приложение сохраняет результаты тренировки произношения каждой группы слов и позволяет их просматривать

## Требования к репозиторию
- для разработки приложения используйте приватный репозиторий школы. [Как работать с приватным репозиторием](https://docs.rs.school/#/stage2?id=Как-работать-с-приватным-репозиторием)
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://docs.rs.school/#/git-convention)
- демо-версия приложения размещается на `https://www.netlify.com/`, либо на другом подобном хостинге
- после окончания разработки или при наступлении дедлайна, создайте pull request из ветки speakit в ветку master. [Требования к pull request](https://docs.rs.school/#/stage2?id=Описание-pull-request-должно-содержать-следующую-информацию). Мержить pull request не нужно.
- приложение проверяется другими студентами (кросс-чек), а также менторами по желанию без выставления оценки (комментирование Pull Request, написание фидбека)
- для проверки приложения в ходе кросс-чека ссылку на демо-версию приложения необходимо будет добавить в rs-app

## Технические требования
- работа приложения проверяется в браузере Google Chrome последней версии
- не рекомендуется использование jQuery, Angular/React/Vue 
- рекомендуется использовать webpack, eslint, eslint-config-airbnb-base, babel
- можно использовать bootstrap, css фреймворки, html и css препроцессоры

## Критерии оценки:
**Максимальный балл за задание: 100 баллов при кросс-чеке / проверка ментором не предусмотрена**   

### Basic scope +30  
- [ ] вёрстка, дизайн, UI. Интерактивность кликабельных элементов, различные стили для активного и неактивного состояния. Есть стартовый экран +10
- [ ] когда приложение открывается, на странице отображается группа из 10 слов, возле каждого слова его транскрипция и иконка аудио. При клике по слову звучит его произношение +10  
- [ ] при клике по слову изменяется его стиль и отображается соответствующая ему картинка +10

### Advanced scope +60
- [ ] при клике по слову отображается его перевод +10
- [ ] если распознавание речи включено, и приложению разрешён доступ к микрофону, произнесённые пользователем слова распознаются и отображаются в текстовом виде +10
- [ ] проверка правильности произношения происходит путём сравнения распознанного текста с написанием слова. Если слово распознано верно, изменяется стиль его отображения, появляется соответствующее данному слову изображение, результат игры увеличивается на один балл +10
- [ ] у пользователя есть возможность просмотреть результат игры. Также результат отображается, если все слова распознаны верно. На странице с результатом есть кнопки, позволяющие вернуться к предыдущей игре или запустить новую игру с новым набором слов +10
- [ ]  на странице результата игры отображаются правильно угаданные слова и слова, в которых были допущены ошибки. Возле каждого слова отображаются его транскрипция, перевод, иконка аудио. По клику по слову звучит его произношение +10
- [ ] у пользователя есть возможность изменять сложность мини-игры. Всего шесть уровней сложности, которым соответствуют шесть частей коллекции исходных данных  +10

### Hacker scope +10
- [ ] ведётся долгосрочная статистика мини-игры, можно посмотреть когда (дата и время) и с каким результатом в неё играли. После перезагрузки приложения статистика сохраняется +10
- [ ] реализован дополнительный, не предусмотренный заданием функционал. Данный пункт не оценивается

## Cross-check
- инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow
- форма для проверки задания: https://cross-check-speakit.netlify.app/

## Ключевые навыки

- получение данных о словах (предлагаемый набор слов является частью данных, которые будут использованы для финального проекта)
- работа с асинхронными запросами
- использование translation API
- использование Google Web Speech API 

## Видео с разбором задания
https://youtu.be/k7kKaa5KwBs

## Информационные ресурсы
- Использование распознавания речи для тренировки произношения https://youtu.be/XbjGZHeLUn8  

## Материалы
- Вебинар: Асинхронность в JavaScript https://youtu.be/Ih6Q7ka2eSQ
- Yandex.Translate API https://tech.yandex.com/translate/
- Web API SpeechRecognition https://developer.mozilla.org/ru/docs/Web/API/SpeechRecognition
- JavaScript Speech Recognition https://youtu.be/0mJC0A72Fnw
- Визуализация исходных данных https://rslang-data.netlify.com/

## Пример использования Yandex Translate API
- Получаем Yandex.Translate API key  
`https://translate.yandex.com/developers/keys`
- Перевод слова "agree"  
`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=agree&lang=en-ru`

<details> 
  <summary>Примеры асинхронных запросов</summary>

  <p></p>

  JS-код для получения перевода слова (перевод выводится в консоль)

  - при помощи fetch
   ``` javascript 
   function getTranslation () {
   const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text= agree &lang=en-ru';
   fetch(url)
     .then(res => res.json())
     .then(data => {
       console.log(data.text)
     });
   }
  ```

  - при помощи async/await

  ``` javascript 
   async function getTranslation () {
     const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text= agree &lang=en-ru';
     const res = await fetch(url);
     const data = await res.json();
     console.log(data.text);
   }
  ```

</details> 

### Документ для вопросов
- документ для вопросов, связанных с выполнением задания: https://docs.google.com/spreadsheets/d/1owDtS2YLnF9ijSNjPtcPmpiFql8jcfQ6d4OB6zz53zE/edit#gid=0
- ссылки на лучшие работы добавьте, пожалуйста, в эту форму: https://forms.gle/xo514226dk3VWaZ47

## Пример получения данных по словам при помощи Fetch API

Для этого создан REST API по адресу: `https://afternoon-falls-25894.herokuapp.com/`  
На данный момент можно пользоваться следующим GET эндпоинтом для получения списка слов:  
`https://afternoon-falls-25894.herokuapp.com/words?page=2&group=0` - получить слова со 2-й страницы группы 0  
Строка запроса должна содержать в себе номер группы и номер страницы. Всего 6 групп(от 0 до 5) и в каждой группе по 30 страниц(от 0 до 29). В каждой странице по 20 слов. Группы разбиты по сложности от самой простой(0) до самой сложной(5).  

REST сервис возвращает только JSON, без изображений и звуковых файлов. 

<details> 
  <summary>Примеры асинхронных запросов</summary>

  <p></p>

  JS-код для получения списка слова (слова выводятся в консоль)

  - при помощи fetch

   ``` javascript 
    const getWords = async (page, group) => {
        const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
        const res = await fetch(url);
        const json = await res.json();
        console.log(JSON.stringify(json, null, 1));
    };  
  ```

   - пример результат вызова

 ```json
    [
     {
      "word": "camera",
      "image": "files/01_0007.jpg",
      "audio": "files/01_0007.mp3",
      "audioMeaning": "files/01_0007_meaning.mp3",
      "audioExample": "files/01_0007_example.mp3",
      "textMeaning": "A <i>camera</i> is a piece of equipment that takes pictures.",
      "textExample": "I brought my <b>camera</b> on my vacation.",
      "transcription": "[kǽmərə]",
     },
     {
      "word": "capital",
      "image": "files/01_0008.jpg",
      "audio": "files/01_0008.mp3",
      "audioMeaning": "files/01_0008_meaning.mp3",
      "audioExample": "files/01_0008_example.mp3",
      "textMeaning": "A <i>capital</i> is a city where a country’s government is based.",
      "textExample": "The <b>capital</b> of the United States is Washington, D.C.",
      "transcription": "[kæpətl]",
     },
     {
      "_id": "5e8aaaf87c3d1d199c0f2d76",
      "word": "catch",
      "image": "files/01_0009.jpg",
      "audio": "files/01_0009.mp3",
      "audioMeaning": "files/01_0009_meaning.mp3",
      "audioExample": "files/01_0009_example.mp3",
      "textMeaning": "To <i>catch</i> is to grab or get something.",
      "textExample": "Did you <b>catch</b> the ball during the baseball game?",
      "transcription": "[kætʃ]",
     }
     
     ...
     
    ]
```
Для получения изображений и звуков можно форкнуть репозиторий по ссылке: `https://github.com/irinainina/rslang-data`  
После получения списка слов можно будет создавать новые HTML элементы с ссылками на нужные файлы.  
Например, для изображение `files/01_0009.jpg` надо создать следующий элемент:  
`<img src="https://raw.githubusercontent.com/YOUR-GITHUB-USERNAME/rslang-data/master/data/01_0009.jpg">`  
обратите внимание, что вместо YOUR-GITHUB-USERNAME надо подставить свои данные. Так же, то что в ссылку подставляется  только имя файла без директории `file/`
</details> 