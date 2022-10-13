### Завдання

* Ознайомтеся з пакетом `nodemon` =>` npm i -d nodemon`
  * Створіть scripts на package Dev, який запустить проект через Nodemon

* Познайомтеся з Router в express,
```js
const {Router} = require('express')
const router = Router()
```

* Реструктуризуйте проект, створіть нову папку routers
в якій можна зробити роутінг по сторінках(сторінки - це ваші файли HTML в public).

* Для сторінки продукту створіть скрипт, який подасть запит на /api/products та отримає необхідний об'єкт
для того щоб показати товари на сторінці https://prnt.sc/2teURsve8aPw

```html
<div class="card-box">
    <div class="col card" data-id="98">
        <div class="card-header">
            <p class="badge _bests">ТОП ПРОДАЖ</p>
            <img src="https://content2.rozetka.com.ua/goods/images/big_tile/233467004.jpg"
                 class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">Ноутбук Acer Nitro 5 AN515-57-54K7 (NH.QESEU.003) Shale Black </h5>
            <p class="card-text card-price"><span class="retail">37 999</span> 29 999 <span
                    class="currency">грн</span></p>
        </div>
    </div>
</div>

<div class="card-box">
    <div class="col card" data-id="${id}">
        <div class="card-header">
            <p class="badge ${labelStatus}">${label}</p>
            <img src="${img}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text card-price"><span class="retail">${retail}</span> ${sale} <span
                    class="currency">${currency}</span></p>
        </div>
    </div>
</div>
```



