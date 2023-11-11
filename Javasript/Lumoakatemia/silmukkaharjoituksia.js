//IE01. Tee ohjelma, joka etsii kahdesta luvusta suuremman
                function suurempi(a, b) {
                    if (a > b) {
                        console.log("Suurempi luku on " + a);
                    }
                    else if (b > a) {
                        console.log("Suurempi luku on " + b);
                    }
                    else {
                        console.log("Luvut ovat yht‰suuret");
                    }
                }

//IE02. Tee ohjelma, joka etsii kolmesta luvusta suurimman
                    function suurinKolmesta(a, b, c) {
                    if (a > b && a > c) {
                        console.log("Suurin luku on " + a);
                    }
                    else if (b > c) {
                        console.log("Suurin luku on " + b);
                    }
                    else {
                        console.log("Suurin luku on " + c);
                    }
                }
                /*suurinKolmesta(1, 2, 3);
                suurinKolmesta(1, 3, 2);
                suurinKolmesta(2, 1, 3);
                suurinKolmesta(2, 3, 1);
                suurinKolmesta(3, 1, 2);
                suurinKolmesta(3, 1, 3);*/

//IE03. Tee ohjelma, joka etsii tarkistaa, onko luku
                function etuMerkki(luku) {
                    if (luku < 0) {
                        console.log("Luku on negatiivinen");
                    }
                    else if (luku == 0) {
                        console.log("Luku on nolla");
                    }
                    else {
                        console.log("Luku on positiivinen");
                    }
                }
                /*etuMerkki(-7);
                etuMerkki(0);
                etuMerkki(23000);*/

//IE04. Tee ohjelma, joka kysyy k‰ytt‰j‰lt‰ lukua ja tarkistaa, onko se 5:ll‰ tai 11:sta jaollinen
                function jaollinen(luku) {
                    if (luku % 5 == 0 && luku % 11 == 0) {
                        console.log("Luku on jaollinen sek‰ 5:ll‰, ett‰ 11:sta");
                    }
                    else if (luku % 5 == 0 || luku % 11 == 0)
                    {
                        console.log("Luku on jaollinen 5:ll‰ tai 11:sta");
                    }
                    else {
                        console.log("Luku ei ole jaollinen 5:ll‰ tai 11:sta");
                    }
                }
                /*jaollinen(55);
                jaollinen(50);
                jaollinen(44);
                jaollinen(56);*/

//IE06. Tee ohjelma, joka tarkastaa, onko annettu luku parillinen vai pariton
                function parillinenPariton(luku) {
                    if (luku % 2 == 0) {
                        console.log("Luku on parillinen");
                    }
                    else {
                        console.log("Luku on pariton");
                    }
                }
                /*parillinenPariton(3);
                parillinenPariton(6);
                parillinenPariton(0);*/

//IE07. Tee ohjelma, joka tarkistaa, onko annettu merkki kirjain vai ei
                function kirjainko(merkki) {
                    if (merkki.length == 1 && merkki.match(/[a-ˆA-÷]/i)) {
                        console.log("Annettu merkki on kirjain");
                    }
                    else {
                        console.log("Annettu merkki ei ole kirjain");
                    }
                }
                /*kirjainko("g");
                kirjainko(1);
                kirjainko("!");
                kirjainko("‰");
                kirjainko("H");
                kirjainko("÷");*/

//IE08. Tee ohjelma, joka tarkastaa, onko annettu kirjain vokaali vai konsonantti

                function vokaaliKonsonantti(merkki) {
                    if (merkki.match(/[aeiouy‰ˆ]/i)) {
                        console.log("Annettu merkki on vokaali");
                    }
                    else if (merkki.match(/[bcdfghjklmnpqrstvwxz]/i)) {
                        console.log("Annettu merkki on konsonantti");
                    }
                    else {
                        console.log("Annettu merkki ei ole kumpikaan");
                    }
                }
                /*vokaaliKonsonantti("C");
                vokaaliKonsonantti("e");
                vokaaliKonsonantti("?");*/

//IE09. Tee ohjelma, joka tarkastaa, onko annettu merkki kirjain, numero vai erikoismerkki
                function kiNuEm(merkki) {
                    let kirjain = /[a-ˆA-÷]/i;
                    let numero = /[0-9]/i;
                    if (merkki.length == 1 && merkki.match(kirjain))
                    {
                        console.log("Merkki on kirjain");
                    }
                    else if (merkki.match(numero))
                    {
                        console.log("Merkki on numero");
                    }
                    else
                    {
                        console.log("Merkki on erikoismerkki");
                    }
                }
                /*kiNuEm("A");
                kiNuEm("6");
                kiNuEm("/");*/
              
//IE10. Tee ohjelma, joka tarkastaa, onko annettu kirjain iso vai pieni

                function isoPieni(merkki) {
                    if (merkki.match(/[a-ˆA-÷]/i) && merkki == merkki.toUpperCase()) {
                        console.log("Merkki on iso kirjain");
                    }
                    else if (merkki.match(/[a-ˆA-÷]/i) && merkki == merkki.toLowerCase()) {
                        console.log("Merkki on pieni kirjain");
                    }
                    else {
                        console.log("Merkki ei ole kirjain");
                    }
                }
                /*isoPieni("v");
                isoPieni("T");
                isoPieni("?");*/

//IE11. Tee ohjelma, joka laskee annetuista myynti ja ostoluvuista, saitko voittoa vai tappiota
                function voittoTappio(myynti, osto) {
                    myynti = parseInt(myynti);
                    osto = parseInt(osto);
                    if ((myynti - osto) > 0) {
                        console.log("Sait voittoa: " + (myynti - osto));
                    }
                    else {
                        console.log("Tappiosi oli " + (myynti - osto));
                    }
                }
                /*voittoTappio(30, 20);
                voittoTappio(20, 30);
                voittoTappio(30, 30);*/

//IE12. Tee ohjelma, joka pyyt‰‰ viiden kokeen pisteit‰ (Ma, KeFy, ƒi, Ru, En -> 0 - 100) ja antaa arvion seuraavasti: Yli 90 pistett‰ = K5, yli 80 pistett‰ = H4, yli 70 pistett‰ = H3, yli 60 pistett‰ = T2, yli 50 pistett‰ = T1, muutoin hyl‰tty
                function koePisteet(Ma, KeFy, Ai, Ru, En) {
                    var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
                    for (var i = 0; i < taulukko.length; i++) {
                        if (taulukko[i][1] >= 90) {
                            console.log(taulukko[i][0] + ": K5");
                        }
                        else if (taulukko[i][1] >= 80) {
                            console.log(taulukko[i][0] + ": H4");
                        }
                        else if (taulukko[i][1] >= 70) {
                            console.log(taulukko[i][0] + ": H3");
                        }
                        else if (taulukko[i][1] >= 60) {
                            console.log(taulukko[i][0] + ": T2");
                        }
                        else if (taulukko[i][1] >= 50) {
                            console.log(taulukko[i][0] + ": T1");
                        }
                        else {
                            console.log(taulukko[i][0] + ": Hyl‰tty");
                        }
                    }
                }
                /*koePisteet(55, 78, 63, 88, 94);
                koePisteet(99, 45, 70, 80, 60);*/



//IE13. Tee ohjelma, joka tulostaa viikonp‰iv‰t, kun annetaan vkpnumero (malli if-else, voit myˆs tehd‰ switch-case)
                function viikonpaiva(nro) {
                    nro = parseInt(nro);
                    console.log(nro);
                    switch (nro) {
                        case 1:
                            console.log("Maanantai");
                            break;
                        case 2:
                            console.log("Tiistai");
                            break;
                        case 3:
                            console.log("Keskiviikko");
                            break;
                        case 4:
                            console.log("Torstai");
                            break;
                        case 5:
                            console.log("Perjantai");
                            break;
                        case 6:
                            console.log("Lauantai");
                            break;
                        case 7:
                            console.log("Sunnuntai");
                            break;
                        default:
                            console.log("Anna numero v‰lill‰ 1-7");
                            break;
                    }
                }
                /*viikonpaiva(5);
                viikonpaiva(0);
                viikonpaiva(8);*/

//IE14. Tee ohjelma, joka kysyy kahta kokonaislukua ja tarkastaa, ovatko ne samat
                function tarkastaKokonaisluvut(a, b) {
                  try {
                    // Yritet‰‰n muuntaa annetut arvot kokonaisluvuiksi.
                    const lukuA = parseInt(a);
                    const lukuB = parseInt(b);

                    // Tarkistetaan, ovatko luvut NaN-arvoja, mik‰ osoittaa virheellisen muunnoksen.
                    if (isNaN(lukuA) || isNaN(lukuB)) {
                      throw new Error("Et antanut kokonaislukuja");
                    }

                    // Vertaillaan, ovatko luvut samat.
                    if (lukuA === lukuB) {
                      return "Antamasi luvut ovat samat.";
                    } else {
                      return "Antamasi luvut eiv‰t ole samat.";
                    }
                  } catch (error) {
                    // Jos tapahtuu virhe (esim. muunnos ei onnistu), palautetaan virheviesti.
                    return error.message;
                  }
                }

//IE15. Tee ohjelma, joka pyyt‰‰ k‰ytt‰j‰lt‰ ik‰‰ ja varmistaa, voiko t‰m‰ ‰‰nest‰‰ (18->)
                function aanestys(ika) {
                    ika = parseInt(ika);
                    if (ika >= 18) {
                        console.log("Voit ‰‰nest‰‰");
                    }
                    else if (isNaN(ika)) {
                        console.log("Et antanut numeroa");
                    }
                    else {
                        console.log("Et voi ‰‰nest‰‰");
                    }
                }
                aanestys(19);
                aanestys(5);
                aanestys("viisi");


//IE16. Tee ohjelma, joka pyyt‰‰ kuukauden numeroa ja tulostaa sen j‰lkeen paljonko kuukaudessa on p‰ivi‰ (malli vastaus on if-else, mutta t‰h‰n soveltuu paremmin switch-case)
                function kuukaudenPaivat(kknro) {
                    kknro = parseInt(kknro);
                    switch (kknro) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            console.log("Kuukaudessa on 31 p‰iv‰‰");
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            console.log("Kuukaudessa on 30 p‰iv‰‰");
                            break;
                        case 2:
                            console.log("Kuukaudessa on 27/28 p‰iv‰‰");
                    }
                }
                /*kuukaudenPaivat(2);
                kuukaudenPaivat(6);
                kuukaudenPaivat(7);*/

//IE17. Tee ohjelma, joka muuttaa annetun arvon rahaksi siten, ett‰ se ottaa huomioon setelien arvot. Esim. 1295 = 500 x 2 + 100 x 2 + 50 x 1 + 20 x 2 + 5 x 1
                function seteleiksi(amount) {
                    var note1 = 0, note2 = 0, note5 = 0, note10 = 0, note20 = 0, note50 = 0, note100 = 0, note500 = 0;
                    if (amount >= 500) {
                        note500 = Math.floor(amount / 500);
                        amount -= note500 * 500;
                    }
                    if (amount >= 100) {
                        note100 = Math.floor(amount / 100);
                        amount -= note100 * 100;
                    }
                    if (amount >= 50) {
                        note50 = Math.floor(amount / 50);
                        amount -= note50 * 50;
                    }
                    if (amount >= 20) {
                        note20 = Math.floor(amount / 20);
                        amount -= note20 * 20;
                    }
                    if (amount >= 10) {
                        note10 = Math.floor(amount / 10);
                        amount -= note10 * 10;
                    }
                    if (amount >= 5) {
                        note5 = Math.floor(amount / 5);
                        amount -= note5 * 5;
                    }
                    if (amount >= 2) {
                        note2 = Math.floor(amount / 2);
                        amount -= note2 * 2;
                    }
                    if(amount >= 1) {
                        note1 = amount;
                    }
                    console.log("Total number of notes = \n");
                    console.log("500 = " + note500);
                    console.log("100 = " + note100);
                    console.log("50 = " + note50);
                    console.log("20 = " + note20);
                    console.log("10 = " + note10);
                    console.log("5 = " + note5);
                    console.log("2 = " + note2);
                    console.log("1 = " + note1);
                }
                seteleiksi(1295);
                seteleiksi(1383);

IE18. Tee ohjelma, joka laskee, onko mahdollista piirt‰‰ kolmio annettujen kulma-astelukujen perusteella
                function kolmio(a, b, c) {
                    if (a + b + c == 180) {
                        console.log("Kolmio on mahdollinen");
                    }
                    else {
                        console.log("Kolmio ei ole mahdollinen");
                    }
                }
                kolmio(60, 60, 60);
                kolmio(61, 61, 61);





