//P01. Tee ohjelma, joka tulostaa "Hei maailma!"
    class HeiMaailma
    {
    public static void main(String[] args)
    {
    System.out.println("Hei maailma!");
    }
    }
            
//console.log("Hei maailma");

//P02. Tee ohjelma, joka laskee kaksi lukua yhteen ja tulostaa summan
    let num1 = 5;
    let num2 = 3;

    let sum = num1 + num2;

//console.log();

//P03. Tee ohjelma, joka laskee kahden luvun erotuksen ja tulostaa sen
    let difference = function (a, b) { return Math.abs(a - b); }

//console.log();

//P04. Tee ohjelma, joka laskee kahden luvun tulon ja tulostaa sen
    let luku1, luku2, tulo;
    luku1 = 2;
    luku2 = 6;
    tulo = luku2 * luku1;

//console.log(tulo);

//P05. Tee ohjelma, joka laskee kahden luvun osam‰‰r‰n ja tulostaa sen
    let luku1, luku2, osamaara;
    luku1 = 3;
    luku2 = 5;
    osam = luku2 / luku1;
// console.log(osamaara);

//P06. Tee ohjelma, joka muuntaa Celsius-asteet Fahrenheiteiksi
{
      let cTemp = celsius;
      let cToFahr = cTemp * 9 / 5 + 32;
      let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
     //console.log(message);
}

//P07. Tee ohjelma, joka muuntaa Fahrenheit-asteet Celsiuksiksi
function fToC(fahrenheit) 
{
      let fTemp = fahrenheit;
      let fToCel = (fTemp - 32) * 5 / 9;
      let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    //console.log(message);
} 
//P08. Tee ohjelma, joka muuntaa mailit kilometreiksi
      let milesToKm = miles => miles * 1.609344;

//P09. Tee ohjelma, joka muuntaa kilometrit maileiksi
      function convertKmToMiles(km) {
      return km * 0.621371;
}

//P10. Tee ohjelma, joka muuntaa tuumat senteiksi
      let cm, inches;
      tuumat = 74;
      cm = inches * 2.54;
     //console.log(cm);
     
//P11. Tee ohjelma, joka muuntaa sentit tuumiksi
      let cm, inches;
      cmt = 74;
      inches = cm / 2.54;
     //console.log(inches);

//P12. Tee ohjelma, joka muuntaa yardit metreiksi
       let yard, m;
       yard = 74;
       m = yard * 0.9144;
     //console.log(m);

//P13. Tee ohjelma, joka muuntaa metrit yardeiksi
       let yard, m;
       m = 74;
       yard = m / 0.9144;
     //console.log(yard);

//P14. Tee ohjelma, joka kysyy k‰ytt‰j‰lt‰ Fahrenheit arvoa ja muuntaa sen Celsiuksiksi
       let cel, fah;
       fah = 74;
       cel = (fah - 32) * 5 / 9;
       console.log(fah);
      //console.log(fah);

//P15. Kirjoita laskuteht‰v‰t (2-5) uudestaan siten, ett‰ k‰ytt‰j‰ voi antaa molemmat arvot (a, b)
        let cel, fah;
        fah = 74;
        cel = (fah - 32) * 5 / 9;
        console.log(fah);

//P16. Tee ohjelma, joka etsii datatyyppien (int, float, double, decimal, string, boolean...) koot (sizeof)
???


//P17. Tee ohjelma, joka tulostaa annetun kirjaimen ASCII arvon (esim. A --> 65)
         function asciiToChar(ascii) {
         console.log(String.fromCharCode(ascii));
            }
         asciiToChar(65);

//P18. Laske ympyr‰n ala, kun k‰ytt‰j‰ antaa s‰teen (pituuden)
          function nelionAla(sivu) {
          console.log(sivu * sivu);
          }
          //nelionAla(2);

//P20. Laske suorakulmion ala, kun k‰ytt‰j‰ antaa pituuden ja leveyden
          function suorakulmionAla(sivu1, sivu2) {
          console.log(sivu1 * sivu2);
          }


//P21. Tee ohjelma, joka muuntaa annetun p‰ivien m‰‰r‰n vuosiksi, kuukausiksi ja p‰iviksi
          function changeYears(days) {
          let years = parseInt(days / 365);
          let months = parseInt((days % 365) / (365 / 12));
          let pvt = parseInt((days % 365) - months * (365 / 12));
          console.log(paivat + " day are " + years + " year " + months + " month are " + day + " day.")
          }

