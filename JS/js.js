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
    console.log("---------------")
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
