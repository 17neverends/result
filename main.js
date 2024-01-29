let data = {
    "parametrs": {
        "Размер посылки": "10x10x10 см",
        "Физический вес посылки": "10кг",
        "Расчётный вес посылки": "20кг",
        "Город отправителя": "Ростов-на-Дону, Ростовская область, Россия",
        "Город получателя": "Краснодар, Краснодарский край, Россия",
        "Тип доставки": "Дверь - магистраль - склад"
    },
    "additional": {
        "Примерка на дому": "",
        "Воздушно-пузырчатая плёнка": {
            "cost": "700₽",
            "desc": "(10м)"
        },
        "Подъем на этаж":{
            "cost": "1000₽",
            "desc": "(7 этаж ручная)"
        },
        "Погрузка-разгрузочные работы":{
            "cost": "1200₽",
            "desc": ""
        },
        "Коробка": {
            "cost": ["200₽","300₽","500₽","200₽","300₽","500₽"],
            "desc": ["Вес до 5кг (1х2х7) 1шт", "Вес до 15кг (10х12х7) 1шт", "Вес до 12кг (1х12х7) 2шт"
        ,"Вес до 5кг (1х2х7) 1шт", "Вес до 15кг (10х12х7) 1шт", "Вес до 12кг (1х12х7) 2шт"]
        }
    },
    "info": {
        "Стоимость": "100.00₽",
        "Срок доставки":"1-2 дня"
    }
};

let parametrsDiv = document.querySelector('.parametrs-details');
let additionalDiv = document.querySelector('.additional');
let totalCostElement = document.querySelector('.totalcost');
let deliveryDateElement = document.querySelector('.delivery_date');

totalCostElement.textContent = `Стоимость: ${data.info.Стоимость}`;
deliveryDateElement.textContent = `Срок доставки: ${data.info['Срок доставки']}`;
for (let key in data.parametrs) {
    let div = document.createElement('div');
    div.classList.add('parametrs-item');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = `${key}`;

    let valueElement = document.createElement('p');
    valueElement.classList.add('value');
    valueElement.textContent = data.parametrs[key];

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    parametrsDiv.appendChild(div);
}

for (let key in data.additional) {
    let div = document.createElement('div');
    div.classList.add('additional-item');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = `${key}:`;

    let valueElement = document.createElement('div');
    valueElement.classList.add('value');

    if (typeof data.additional[key] === 'object') {
        if (Array.isArray(data.additional[key].cost)) {
            for (let i = 0; i < data.additional[key].cost.length; i++) {
                let itemDiv = document.createElement('div');
                itemDiv.classList.add('sub-item');
    
                let costElement = document.createElement('p');
                costElement.textContent = data.additional[key].cost[i];
                costElement.classList.add('cost-element');
    
                let descElement = document.createElement('p');
                descElement.textContent = data.additional[key].desc[i];
                descElement.classList.add('desc-element');
    
                itemDiv.appendChild(costElement);
                itemDiv.appendChild(descElement);
    
                valueElement.appendChild(itemDiv);
            }
        } else {
            let divElse = document.createElement('div'); 
            divElse.classList.add('sub1-item');
    
            let costElement = document.createElement('p');
            costElement.textContent = data.additional[key].cost;
            costElement.classList.add('cost-element');
            divElse.appendChild(costElement);
    
            let descElement = document.createElement('p');
            descElement.textContent = data.additional[key].desc;
            descElement.classList.add('desc-element');
            divElse.appendChild(descElement);
    
            valueElement.appendChild(divElse); 
        }
    } else {
        let element = document.createElement('p');
        element.textContent = `${data.additional[key]}`;
        element.classList.add('non-object-value');
        valueElement.appendChild(element);
    }

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    additionalDiv.appendChild(div);
}
