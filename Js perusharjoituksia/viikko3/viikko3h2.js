// Teht�v� 1
function laskePisteet()
{
  let pisteet = 0;
  let annettuSana = document.getElementById('scsana').value;
  for(let i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
        pisteet+=2;
        break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pisteet+=3;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pisteet+=4;
        break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
        pisteet+=7;
        break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pisteet+=8;
        break;
      case 'c':
      case 'C':
        pisteet+=10;
        break;
      default:
        pisteet+=12;
    }
    document.getElementById('tscrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
  }
}
// Teht�v� 2
function muunnaTaulukoksi()
{
  let jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let taulu = '<table border="1">';
  for(let j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(let k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('ttaulu').innerHTML = taulu;
}
function teeLomake()
{
  let lomake = '<p>Anna tilinro:<input type="text" id="tilinro" value=""></p>';
  let lomake = lomake + '<p>Anna etunimi:<input type="text" id="enimi" value=""></p>';
  let lomake = lomake + '<p>Anna sukunimi:<input type="text" id="snimi" value=""></p>';
  let lomake = lomake + '<p>Anna saldo:<input type="text" id="saldo" value=""></p>';
  let lomake = lomake + '<p>Haluatko jatkaa (k/e):<input type="text" id="lopetus" value=""></p>';
  document.getElementById('lomake').innerHTML = lomake;
  laskuri = 0;
  lopetus = 'e';
  do {

    lopetus = document.getElementById('lopetus').value;
  }while(lopetus = 'k');

}
// Teht�v� 3
function arvoKortit()
{
  let pakka = [''];
  let maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  let numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakka[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }

    }
  }
  let kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('pakka').innerHTML = '<p>'+kortit+'</p>';
}
// Teht�v� 4
