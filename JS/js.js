let knyguKatalogas =
{
        grozineLiteratura: [
        {
            ISBN: "GR1234K",
            leidimoMetai: 2019,
            pavadinimas: "Metai metuose",
            puslapiuSkaicius: 777
        },
        {
            ISBN: "GR1754K",
            leidimoMetai: 2021,
            pavadinimas: "Tyrlaukiai",
            puslapiuSkaicius: 325
        },
        {
            ISBN: "GR3334K",
            leidimoMetai: 2023,
            pavadinimas: "Ufonautai",
            puslapiuSkaicius: 280
        },
        {
            ISBN: "GR1234K",
            leidimoMetai: 2023,
            pavadinimas: "Metai metuose",
            puslapiuSkaicius: 555
        },
        {
            ISBN: "GR1234K",
            leidimoMetai: 2015,
            pavadinimas: "Metai metuose",
            puslapiuSkaicius: 782
        },
        {
            ISBN: "GR1234K",
            leidimoMetai: 2020,
            pavadinimas: "Metai metuose",
            puslapiuSkaicius: 198
        },
    ],
        istorija: [
            {
                ISBN: "GR1114K",
                leidimoMetai: 2023,
                pavadinimas: "Vytautas",
                puslapiuSkaicius: 323
            },
            {
                ISBN: "GR9234K",
                leidimoMetai: 2022,
                pavadinimas: "Gediminas",
                puslapiuSkaicius: 350
            },
            {
                ISBN: "GR9934K",
                leidimoMetai: 2020,
                pavadinimas: "Mindaugas",
                puslapiuSkaicius: 199
            },
    ],
        saviugda: [
            {
                ISBN: "GR11188K",
                leidimoMetai: 2023,
                pavadinimas: "Namu finansai",
                puslapiuSkaicius: 323
            },
            {
                ISBN: "GR9774K",
                leidimoMetai: 2019,
                pavadinimas: "Sodininkyste",
                puslapiuSkaicius: 350
            },
            {
                ISBN: "GR5234K",
                leidimoMetai: 2020,
                pavadinimas: "Pats sau",
                puslapiuSkaicius: 199
            }
        ]
    }

for (let kategorija in knyguKatalogas){
    console.log(`${kategorija} (${knyguKatalogas[kategorija].length} knygos)`);
    console.log("---------------");
    for(knyga of knyguKatalogas[kategorija]){
        console.log(`ISBN: ${knyga.ISBN}`);
        if (knyga.leidimoMetai == 2023){
            console.log(`Leidimo metai: ${knyga.leidimoMetai} ------- Nauja Knyga`);
        }
        else{
            console.log(`Leidimo metai: ${knyga.leidimoMetai}`);
        }
        console.log(`Pavadinimas: ${knyga.pavadinimas}`);
        console.log(`Puslapiu skaicius: ${knyga.puslapiuSkaicius}`);
        console.log("---------------")
    }
}


let head = document.querySelector('.accordion-button')
let body = document.querySelector('.accordion-body');
for (let kategorija in knyguKatalogas){
    let category = document.createElement('h2');
    category.textContent = `${kategorija} (${knyguKatalogas[kategorija].length} knygos)`;
    head.appendChild(category);
    for(knyga of knyguKatalogas[kategorija]){
        let book1 = document.createElement('p');
        book1.textContent = `ISBN: ${knyga.ISBN}`;
        body.appendChild(book1);
        if (knyga.leidimoMetai == 2023){
            let book2 = document.createElement('p');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai} ------- Nauja Knyga`;
            body.appendChild(book2);
        }
        else{
            let book2 = document.createElement('p');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai}`;
            body.appendChild(book2);
        }
        let book3 = document.createElement('p');
        book3.textContent = `Pavadinimas: ${knyga.pavadinimas}`;
        body.appendChild(book3);
        let book4 = document.createElement('p');
        book4.textContent = `Puslapiu skaicius: ${knyga.puslapiuSkaicius}`;
        body.appendChild(book4);
        let book5 = document.createElement('p');
        book5.textContent = `---------------------------------`;
        body.appendChild(book5);
    }
}
let accordion = document.querySelector('.accordion');
for (let kategorija in knyguKatalogas){
    let category = document.createElement('h2');
    let accordionItem = document.createElement('div.accordion-item');
    let accordionHeader = document.createElement('h2.accordion-header');
    let accordionButton = document.createElement('button.accordion-button');
    let accordionBody = document.createElement('div.accordion-body');
    category.textContent = `${kategorija} (${knyguKatalogas[kategorija].length} knygos)`;
    accordionButton.appendChild(category);
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionBody);
    accordion.appendChild(accordionItem);
    for(knyga of knyguKatalogas[kategorija]){ 
        let book1 = document.createElement('p');
        book1.textContent = `ISBN: ${knyga.ISBN}`;
        accordionBody.appendChild(book1);
        if (knyga.leidimoMetai == 2023){
            let book2 = document.createElement('p');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai} ------- Nauja Knyga`;
            accordionBody.appendChild(book2);
        }
        else{
            let book2 = document.createElement('p');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai}`;
            accordionBody.appendChild(book2);
        }
        let book3 = document.createElement('p');
        book3.textContent = `Pavadinimas: ${knyga.pavadinimas}`;
        accordionBody.appendChild(book3);
        let book4 = document.createElement('p');
        book4.textContent = `Puslapiu skaicius: ${knyga.puslapiuSkaicius}`;
        accordionBody.appendChild(book4);
        let book5 = document.createElement('p');
        book5.textContent = `---------------------------------`;
        accordionBody.appendChild(book5);
    }
}