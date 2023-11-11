//C01. Tee Henkiloluokka, jossa on muuttujat: Etu-, sukunimi ja ik‰ ja tee konstructori, jonka avulla ko. tiedot voi suoraan syˆtt‰‰. Tee t‰m‰n j‰lkeen risto-olio seuraavilla tiedoilla: Etunimi: Risto, Sukunimi: Reipas, Ik‰: 10 ja tulosta sen j‰lkeen riston tiedot konsoliin
                class Person {
                    constructor(firstName, lastName, age) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }
                }

                const risto= new Person("Risto", "Reipas", 12);

                console.log("First name:", risto.firstName);
                console.log("Last name:", risto.lastName);
                console.log("Age:", risto.age);

//C02. Muuta nyt edellisen teht‰v‰n sukunimeksi Reippaampi ja i‰ksi 11
               
                class Person {
                    constructor(firstName, lastName, age) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }
                }

                const risto= new Person("Risto", "Reipas", 12);
                risto.lastName = "Reippaampi";
                risto.age = 20;

                console.log("First name:", risto.firstName);
                console.log("Last name:", risto.lastName);
                console.log("Age:", risto.age);


//C03. Jatka edellist‰ teht‰v‰‰ siten, ett‰ tulostus tapahtuu luokan funktiolla NaytaTiedot()
                // Luodaan Henkilo-luokka
                class Person {
                    constructor(firstName, lastName, age) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }

                    showInfo() {
                        console.log("First name:", this.firstName);
                        console.log("Last name:", this.lastName);
                        console.log("Age:", this.age);
                    }
                }

//C04. Tee kuvakirja -niminen luokka, jossa privaatti muuttuja SivujenLukum‰‰r‰ ja oletuskonsturi, jossa sivum‰‰r‰ksi m‰‰ritell‰‰n 16 sivua sek‰ konstruktori, jolla voi antaa itse sivum‰‰r‰n
                class picBook {
                    #numberOfPages;

                    constructor(numberOfPages = 16) {
                        this.#numberOfPages = numberOfPages;
                    }

                    ???() {
                        return this.#numberOfPages;
                    }
                }

C05. Tee Elain -niminen luokka, jossa on yksi muuttuja: nimi. Tee nimelle getterit ja setterit sek‰ oletuskonstruktori sek‰ ylikuormitettu konstruktori, jossa nimen voi antaa. Tee lis‰ksi Syo-metodi, joka tulostaa nimen ja 'syˆ - mumm mumm mumm'. Luo t‰m‰n j‰lkeen kana-niminen olio oletuskonstruktorilla ja muuta nimi sen j‰lkeen 'kaakattaja':ksi ja kutsu sen j‰lkeen Syo-metodia
                class Elain {
                    constructor(name = "kana") {
                        this._name = name;
                    }

                    get name() {
                        return this._name;
                    }
                    set name(newName) {
                        this._name = n;
                    }

                    Syo() {
                        console.log(this._name + " syˆ - mumm mumm mumm");
                    }
                }

//C06. Jatka edellist‰ teht‰v‰‰ siten, ett‰ luot Koira-luokan, joka perii El‰in -luokan (class Koira: Elain). Lis‰‰ Koira luokkaan tassut (m‰‰r‰) ja turkki (v‰ri) -muuttujat. Tee getterit, setterit, konstruktorit) sek‰ Aantelehtii-Metodi, joka tulostaa: nimi "haukkuu", kun metodille antaa tuon stringin‰. Koiralle voi antaa oletuskonstruktorissa tassujen m‰‰r‰ksi 4




















