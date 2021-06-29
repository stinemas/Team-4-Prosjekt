/*
     - godkjenne oppgave (Oppstarts Prøve)
     - registrere opptakssamtale
     - flytte student til modul
     - liste studenter for en bestemt modul
     - liste studenter for et bestemt sted      
                    ekstra for Interesse.
     - Legge til Fylke i skjermbilde til Interesse. 
     - Legge til Bilde i skjermbilde til Interesse. (?) yes!
*/

const model = {
    intView: '',
    infoStu: '',
    sendVidere: '',
    
    app: {
        currentPage: 'interesse',
    },

    tasks: [
        { description: 'Modul 2', isDone: false, person: 'Erlend'},
        { description: 'Modul 2', isDone: false, person: 'Stine'},
        { description: 'Modul 2', isDone: false, person: 'Johnny' },
        { description: 'Modul 2', isDone: false, person: 'Leslie' },
    ],
 
    //info over valgt person fra dropdown liste
    intMelding: [
        {
            id: 1,
            navn: 'Stine Marte',
            fodt: '11.01.1111',
            adresse: 'Adressenavn 42, 1111 stednavn',
            tlf: '111 11 111',
            epost: 'email@domain.lol',
            navKontor: 'Nav Stednavn',
            navVeileder: 'Kari Nordmann',
            navEpost: 'karinor@nav.no',
            navTlf: '5555 3333',
            opptakProve: true, //dropdown om gjennomført eller ikke
            opptakSamtale: true, //dropdown om gjennomført eller ikke
            modulOppstart: '',
        },
                
        {
            id: 2,
            navn: 'Erlend Lien',
            fodt: '12.34.5678',
            adresse: 'Adressenavn 42, 1111 stednavn',
            tlf: '111 11 111',
            epost: 'email@domain.lol',
            navKontor: 'Nav Stednavn',
            navVeileder: 'Kari Nordmann',
            navEpost: 'karinor@nav.no',
            navTlf: '5555 3333',
            opptakProve: true, //dropdown om gjennomført eller ikke
            opptakSamtale: true, //dropdown om gjennomført eller ikke
            modulOppstart: '',
        },       
        {
            id: 3,
            navn: 'Therese',
            fodt: '11.01.1111',
            adresse: 'Adressenavn 42, 7777 stednavn',
            tlf: '111 11 111',
            epost: 'email@domain.lol',
            navKontor: 'Nav Stednavn',
            navVeileder: 'Kari Nordmann',
            navEpost: 'karinor@nav.no',
            navTlf: '5555 3333',
            opptakProve: true, //dropdown om gjennomført eller ikke
            opptakSamtale: true, //dropdown om gjennomført eller ikke
            modulOppstart: '',
        },                                       
    ],

            //en tanke på når elev søker videre fra gjennomført modul til neste
    soknadNyModul: [
        {
            studentId: 10,
            soknadProsjekt: null,
            soknadSamtale: null,
            kursId: 1031,
        },
    ],
       
    interesseAlert: [
        {
           intrAlert:0, 
        },
        {
            alertvarsel: 1,
        },
       
    ],
    
    opprettModul: [
        { 
            id: 1011, 
            kurs: 'Modul 1', 
            startDato: '2021-05-10' 
        },
        { 
            id: 1021, 
            kurs: 'Modul 2', 
            startDato: '2021-05-10' 
        },
        { 
            id: 1031, 
            kurs: 'Modul 3', 
            startDato: '2021-05-10' 
        },
        ],

    fylke: [
        { id: 1, name: 'Agder' },
        { id: 2, name: 'Innlandet' },
        { id: 3, name: 'Møre og Romsdal' },
        { id: 4, name: 'Nordland' },
        { id: 5, name: 'Oslo' },
        { id: 6, name: 'Rogaland' },
        { id: 7, name: 'Vestfold og Telemark' },
        { id: 8, name: 'Troms og Finnmark' },
        { id: 9, name: 'Trøndelag' },
        { id: 10, name: 'Vestlandet' },
        { id: 11, name: 'Viken' },
    ],
    studenter: [
        {
            navn: 'Erlend',
            født: '12.34.5678',
            adresse: 'Teddy&Annie 123',
            tlf: '123 45 678',
            epost: 'email@domain.no',
            fylke: 'Telemark',
        },
    ],
    nav:[{
    
        veileder: 'Teddy Annie',
        epost: 'nav@skienkommune.no',
        kontor: 'Skien',
        tlf: '5555 3333',
    },  
],

    dropDownInfo: [
        {
        oblig: 'Oblig',
        Rapport: 'Rapporter',
        Notater: 'Notater',
        Oppgaver: 'Oppgaver',
        Møter: 'Møter',    
        }
    ],

    
};