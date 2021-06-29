const model = {
    app: {
        currentPage: 'interesse',
    },

    //info om ny meldte interesser til getacademy
    intStudent: [
        {

            //liste over nye som melder seg på
            dropdownListe: [
                {
                    listeNavnInteresse: '',
                }
            ],

            //info over valgt person fra dropdown liste
            intMelding: [
                {
                    id: null,
                    navn: 'Stine',
                    fodt: '30.08.1991',
                    adresse: 'Adressenavn 42, 7777 stednavn',
                    tlf: '111 11 111',
                    epost: 'nani@wtf.lol',
                    navKontor: 'Nav Stednavn',
                    navVeileder: 'Kari Nordmann',
                    navEpost: 'karinor@nav.no',
                    navTlf: '5555 3333',
                    opptakProve: true, //dropdown om gjennomført eller ikke
                    opptakSamtale: true, //dropdown om gjennomført eller ikke
                    modulOppstart: '',
                },                
            ],

            //lærer sender interessert person videre når alt i intMelding er i orden, setter 
            //modul 1/2/3/getit og oppstart her.
            opprettModul: [
                {
                    modNavn: '',
                    modStartDato: '',
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
        },
    ],
}