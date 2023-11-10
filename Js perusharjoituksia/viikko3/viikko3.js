// Tehtävä 1
function tulostaParilliset()
{
  let karvo = parseInt(document.getElementById("pluku").value);
  let jono = "<p>";
  for(let i = 2; i <= karvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById("pari").innerHTML = jono;
}
// Tehtävä 2
function muutaSalasanaksi()
{
  let ksana = document.getElementById('ksana').value;
  let salasana = "<p>";
  for(let j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
// Tehtävä 3
function tarkistaKirjain()
{
  let annettuSana = document.getElementById("tsana").value;
  let vastaus = "ei ole";
  for(let k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById("vastaus").innerHTML = '<p>' + vastaus + '</p>';
}
// Tehtävä 4
function laskeKertoma()
{
  let kerLuku = document.getElementById('kertoma').value;
  let laskettu = 1;
  for(let z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById("kertoVastaus").innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
// Tehtävä 5
function hipHeijaa()
{
  let tuloste = '';
  for(let y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=y+' ';
    }
    document.getElementById("lukuTulos").innerHTML = tuloste;
  }
}
// Tehtävä 6
function ekatKymmenen()
{
  let kym = '<p>';
  for(let e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById("lukuTulos10").innerHTML = kym;
}
// Tehtävä 7
function yhteen()
{
  yhteensa = 0;
  for(let y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById("lukuTulosYht").innerHTML = '<p>'+ yhteensa + '</p>';
}
// Tehtävä 8
function potenssi()
{
  let koro = document.getElementById('kor').value;
  let pote = document.getElementById('pot').value;
  yht = koro;
  for(let p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById("lukuTulosP").innerHTML = '<p>' + yht + '</p>';
}
// Tehtävä 9
function etsiSuurinPienin()
{
  let taulu = [], temp;
  for(let x = 0; x < 5; x++)
  {
    temp = document.getElementById("taulukko['+x+']").value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById("lukuTulosT").innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
// Tehtävä 10
function muokkaaSalasana()
{
  let pw = '';
  let eka, toka;
  pw = document.getElementById("sala").value;
  alert(pw);
  let taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  let temp = [];
  let lop='';
  for(let s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    temp.push(eka);
    let lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.getElementById("lukuTulosS").innerHTML = lop;
}
// Tehtävä 11
function tupla()
{
  let nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById("pnro").value);
  nro2 = document.getElementById("inro").value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(let b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;

  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(let r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById("lukujenTulostusPari").innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}










