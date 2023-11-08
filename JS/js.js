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

let accordion = document.querySelector('.accordion');

for (let kategorija in knyguKatalogas){
    let accordionItem = document.createElement('div');
    accordionItem.classList="accordion-item";
    let accordionHeader = document.createElement('h2');
    accordionHeader.classList="accordion-header";
    let accordionButton = document.createElement('button');
    accordionButton.classList="accordion-button";
    accordionButton.type='button';
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#collapse${kategorija}`);
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    let accordionCollapse = document.createElement('div');
    accordionCollapse.classList='accordion-collapse collapse show';
    accordionCollapse.setAttribute("id", `collapse${kategorija}`);
    accordionCollapse.setAttribute("data-bs-parent", "#accordionExample");
    let accordionBody = document.createElement('div');
    accordionBody.classList='accordion-body';
    accordionButton.textContent = `${kategorija} (${knyguKatalogas[kategorija].length} knygos)`;
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    accordion.appendChild(accordionItem);
    for(knyga of knyguKatalogas[kategorija]){
        let ul = document.createElement('ul');
        accordionBody.appendChild(ul);
        let book1 = document.createElement('li');
        book1.textContent = `ISBN: ${knyga.ISBN}`;
        ul.appendChild(book1);
        if (knyga.leidimoMetai == 2023){
            let book2 = document.createElement('li');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai} ------- Nauja Knyga`;
            ul.appendChild(book2);
        }
        else{
            let book2 = document.createElement('li');
            book2.textContent = `Leidimo metai: ${knyga.leidimoMetai}`;
            ul.appendChild(book2);
        }
        let book3 = document.createElement('li');
        book3.textContent = `Pavadinimas: ${knyga.pavadinimas}`;
        ul.appendChild(book3);
        let book4 = document.createElement('li');
        book4.textContent = `Puslapiu skaicius: ${knyga.puslapiuSkaicius}`;
        ul.appendChild(book4);
    }
}