//S01. Tee ohjelma, laskee, paljonko joudut maksamaan takaisin, kun lainasit 5000Ä kahdeksi vuodeksi 2% korolla
                function laina() {
                    let maksu = 5000;
                    let korko = 1.02;
                    let aika = 2;
                    let korkosumma;
                    let maksettava = maksu;
                    for (var i = 1; i <= aika; i++) {
                        maksettava = (maksettava * korko);
                    }
                    korkosumma = maksettava - maksu;
                    console.log("Joudut maksamaan "
                        + maksu + " euron lainasta korkoa "
                        + korkosumma + " jolloin maksettavaa tulee yhteens‰ "
                        + maksettava);
                }
                //laina();              
              

//S02. Tee ohjelma, joka laskee annetun luvun kertoman
                function kertoma(luku) {
                    let kertoma = 1;
                    for (var i = 1; i <= luku; i++) {
                        kertoma *= i;
                    }
                    console.log("Luvun " + luku + "kertoma on: " + kertoma);
                }
                kertoma(5);
                kertoma(7);     

//S03. Tee ohjelma, joka etsii luvun 3 ensimm‰isen esiintym‰n taulukosta [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
JavaScript
                function kertoma(luku) {
                    let kertoma = 1;
                    for (var i = 1; i <= luku; i++) {
                        kertoma *= i;
                    }
                    console.log("Luvun " + luku + "kertoma on: " + kertoma);
                }
                kertoma(5);
                kertoma(7);          

//S03. Tee ohjelma, joka etsii luvun 3 ensimm‰isen esiintym‰n taulukosta [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
                function esiintyma() {
                    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
                    for (var i = 0; i < taulukko.length; i++) {
                        if (taulukko[i] == 3) {
                            console.log("Nro 3 on taulukon " + i + ". j‰sen");
                            i = taulukko.length;
                        }
                    }
                }
                esiintyma();         

//S04. Tee ohjelma, k‰‰nt‰‰ k‰ytt‰j‰n antaman sanan toisinp‰in (Hevonen --> nenoveH)
                function tekstinKaanto(teksti) {
                    let lause = "";
                    for (var i = teksti.length - 1; i >= 0; i--) {
                        lause += teksti[i];
                    }
                    console.log(lause);
                }
                tekstinKaanto("Hevonen");        

//S05. Tee ohjelma, joka etsii maksimiarvon taulukosta [6, 7, 2, 4, 3, 8, 1]
                function maksimi() {
                    let taulukko = [6, 7, 2, 4, 3, 8, 1];
                    let maksimi = taulukko[0];
                    for (var i = 1; i < taulukko.length; i++) {
                        if (taulukko[i] > maksimi) {
                            maksimi = taulukko[i];
                        }
                    }
                    console.log("Taulukon " + taulukko + " maksimiarvo on: " + maksimi);
                }
                //maksimi();        

//S06. Tee ohjelma, joka laskee keskiarvon taulukosta [6, 7, 2, 4, 3, 8, 1] ilman Math-luokan metodia
                function keskiarvo() {
                    let taulukko = [6, 7, 2, 4, 3, 8, 1];
                    let summa = 0;
                    let keskiarvo = 0;
                    for (var i = 0; i < taulukko.length; i++) {
                        summa += taulukko[i];
                    }
                    keskiarvo = summa / taulukko.length;
                    console.log("Taulukon " + taulukko + " lukujen keskiarvo on: " + keskiarvo);
                }
                //keskiarvo();    

//S07. Tee ohjelma, joka tekee uuden taulukon taulukosta ["a", "b", "c", "d", "e", "f"] siten, ett‰ kaikki kirjaimet ovat isoja
                function isoiksi() {
                    let taulukko = ["a", "b", "c", "d", "e", "f"];
                    let uusiTaulukko = [];
                    for (var i = 0; i < taulukko.length; i++) {
                        uusiTaulukko.push(taulukko[i].toUpperCase());
                    }
                    console.log(uusiTaulukko);
                }
                //isoiksi();           

//S08. Tee ohjelma, joka etsii seitsem‰nnen parittoman esiintym‰n taulukosta [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
                function seitsemasPariton() {
                    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
                    let laskuri = 0;
                    let haettuLuku;
                    for (var i = 0; i < taulukko.length; i++) {
                        if (taulukko[i] % 2 != 0) {
                            laskuri++;
                            if (laskuri == 7) {
                                console.log("Taulukon " + taulukko + 
                                " seitsem‰s pariton j‰sen on " + taulukko[i]);
                                i = taulukko.length;
                            }
                        }
                    }
                } 
                seitsemasPariton();              
              
//S09. Tee ohjelma, toiseksi suurimman luvun taulukosta [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
                function toiseksiSuurin() {
                    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
                    let suurin = taulukko[0];
                    let toiSuurin = 0;
                    for (var i = 1; i < taulukko.length; i++)
                    {
                        if (taulukko[i] > suurin)
                        {
                            toiSuurin = suurin;
                            suurin = taulukko[i];
                        }
                    }
                    console.log("Taulukon " + taulukko + " toiseksi suurin arvo on " + toiSuurin);
                }
                toiseksiSuurin();           

//S10. Tee ohjelma, joka tulostaa sadasta luvusta kolme, kun luku on 3:lla jaollinen, viis, kun luku on 5:ll‰ jaollinen ja viisitoista, kun luku on sek‰ kolmella, ett‰ viidell‰ jaollinen
                function jaollinen() {
                    let lause = "";
                    for (var i = 1; i <= 100; i++) {
                        if (i % 5 == 0 && i % 3 == 0) {
                            lause += "viisitoista ";
                        }
                        else if (i % 5 == 0) {
                            lause += "viisi ";
                        }
                        else if (i % 3 == 0) {
                            lause += "kolme ";
                        }
                        else {
                            lause += i + " ";
                        }
                    }
                    console.log(lause);
                }
                jaollinen();        

//S11. Tee ohjelma, joka tulostaa 10 ensimm‰ist‰ Fibonaccin numeroa (0, 1, 1, 2, 3, 5...), eli seuraava luku on kahden edellisen summa
                function Fibonacci() {
                    let fibonacci = [];
                    fibonacci[0] = 0;
                    fibonacci[1] = 1;
                    for (var i = 2; i < 10; i++) {
                        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                    }
                    console.log(fibonacci);
                }
                Fibonacci();        

//S12. Tee ohjelma, joka tarkastaa, onko annettu sana / lause palidromi (esim. aaroporaa), eli luettavissa molemmin p‰in
                function palidromi(lause) {
                    let kaannetty = "";
                    for (var i = lause.length-1; i >= 0; i--) {
                        kaannetty += lause[i];
                    }
                    if (lause == kaannetty) {
                        console.log("lause on palidromi");
                    }
                    else {
                        console.log("lause ei ole palidromi")
                    }
                }
                palidromi("aaroporaa");
                palidromi("aaro");
                palidromi("saippuakauppias");
                palidromi("innostunut");
                palidromi("innostunutsonni");              
              
//S13. Muuta edellinen Fibonacci teht‰v‰‰ siten, ett‰ lasket parillisten lukujen summan
                function FibonacciParilliset() {
                    let fibonacci = [];
                    fibonacci[0] = 0;
                    fibonacci[1] = 1;
                    let summa = 0;
                    for (var i = 2; i < 10; i++) {
                        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                        if (fibonacci[i] % 2 == 0) {
                            summa += fibonacci[i];
                        }
                    }
                    console.log(fibonacci);
                    console.log("Parillisten summa: " + summa);
                }
                FibonacciParilliset();         

//S14. Muuta edellist‰ teht‰v‰‰ siten, ett‰ lasket parittomien lukujen summan
                function FibonacciParittomat() {
                    let fibonacci = [];
                    fibonacci[0] = 0;
                    fibonacci[1] = 1;
                    let summa = 1;
                    for (var i = 2; i < 10; i++) {
                        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                        if (fibonacci[i] % 2 != 0) {
                            summa += fibonacci[i];
                        }
                    }
                    console.log(fibonacci);
                    console.log("Parittomien summa: " + summa);
                }
                FibonacciParittomat();       

//S15. Tee ohjelma, joka etsii kahden annetun luvun suurimman yhteisen nimitt‰j‰n
                function suurinNimittaja(a, b) {
                    let pienempi, temp, suurempi;
                    if (a > b) {
                        pienempi = b;
                        suurempi = a;
                    }
                    else {
                        pienempi = a;
                        suurempi = b;
                    }
                    while (pienempi > 0) {
                        temp = pienempi;
                        pienempi = suurempi % pienempi;
                        suurempi = temp;       
                    }
                    console.log("Muuttujien yhteinen nimitt‰j‰ on: " + temp);
                }
                suurinNimittaja(15, 45);     

//S16. Tee ohjelma, joka pyyt‰‰ k‰ytt‰j‰lt‰ merkkijonoa pilkulla erotettuna ja tulostaa sen ilman pilkkua esim:
                function poistaPilkkuja(numerojono) {
                    // Erotetaan numerojono pilkulla ja muunnetaan taulukoksi
                    var numerot = numerojono.split(',');

                    // Luodaan uusi taulukko ilman pilkkuja
                    var tulostettavatNumerot = [];
                    for (var i = 0; i < numerot.length; i++) {
                        var numero = numerot[i].trim(); // Poistetaan mahdolliset v‰lilyˆnnit
                        if (!isNaN(numero)) { // Tarkistetaan, ett‰ se on numero
                            tulostettavatNumerot.push(numero);
                        }
                    }

                    // Tulostetaan numerot ilman pilkkua
                    console.log(tulostettavatNumerot.join(' '));
                }

                // K‰yttˆesimerkki
                var syote = '7,3,9,2,44,99,123';
                poistaPilkkuja(syote);              














