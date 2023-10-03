function jarjesta() {
	let luku1 = parseInt(document.getElementById("eka").value);
	let luku2 = parseInt(document.getElementById("toka").value);
	let luku3 = parseInt(document.getElementById("kolmas").value);

	console.log('tgtgtgtyy')

	if((luku1 > luku2 && luku1 > luku3) && luku2 > luku3) {
		alert("Lukujen järjestys on: " + luku1 + ', ' + luku2 + ', ' + luku3)
	}
	else if((luku1 > luku2 && luku1 > luku3) && (luku3 > luku2)) {
		alert("Lukujen järjestys: " + luku1 + ', ' +  luku3 + ', ' +  luku2);
    }
	else if((luku2 > luku1 && luku2 > luku3) && (luku1 > luku3)) {
		alert("Lukujen järjestys on: " + luku2 + ', ' +  luku1 + ', ' +  luku3)
	}
	else if((luku2 > luku1 && luku2 > luku3) && (luku3 > luku1)) {
		alert("Lukujen järjestys on: " + luku2 + ', ' +  luku3 + ', ' +  luku1)
	}
	else if((luku3 > luku1 && luku3 > luku2) && (luku1 > luku2)) {
		alert("Lukujen järjestys on: " + luku3 + ', ' +  luku1 + ', ' +  luku2)
	}
	else if((luku3 > luku1 && luku3 > luku2) && (luku2 > luku1)) {
		alert("Lukujen järjestys on: " + luku3 + ', ' +  luku2 + ', ' +  luku1)
	}
}
// Laatikko 2
function etsiSuurin() {
	let l1 = parseInt(document.getElementById("luku1").value);
    let l2 = parseInt(document.getElementById("luku2").value);
    let l3 = parseInt(document.getElementById("luku3").value);
    let l4 = parseInt(document.getElementById("luku4").value);
    let l5 = parseInt(document.getElementById("luku5").value);
	if(l1 > l2 && l1 > l3 && l1 > l4 && l1 > l5) {
		alert("Suurin luku on: " + l1)
	}	
	if(l2 > l1 && l2 > l3 && l2 > l4 && l2 > l5) {
		alert("Suurin luku on: " + l2)
	}
	if(l3 > l2 && l3 > l1 && l3 > l4 && l3 > l5) {
		alert("Suurin luku on: " + l3)
	}
	if(l4 > l2 && l4 > l3 && l4 > l1 && l4 > l5) {
		alert("Suurin luku on: " + l4)
	}
	if(l5 > l2 && l5 > l3 && l5 > l4 && l5 > l1) {
		alert("Suurin luku on: " + l5)
	}
}
// Laatikko 3
  function pariPariton()
  {
    let vastaus;
    vastaus = parseInt(document.getElementById('numero').value);
    if(vastaus%2 == 0)
    {
      alert("Antamasi luku on parillinen");
    }
    else {
      alert("Antamasi luku on pariton");
    }
  }
// Laatikko 4
  function kulkuneuvo()
  {
    let age = parseInt(document.getElementById('iat').value);
    if(age < 16)
    {
      alert("Voi ajaa polkupyörää");
    }
    else if(age < 18)
    {
      alert("Voi ajaa mopoa");
    }
    else {
      alert("Voi ajaa autoa");
    }
  }

// Laatikko 5
  function kaanna()
  {
    let lang = document.getElementById('kieli').value;
    if(lang == 'eng') {
      alert("Hello world!");
    }
    else if(lang == 'fin') {
      alert("Hei maailma!");
    }
    else {
      alert("Chào thế giới!");
    }
  }
