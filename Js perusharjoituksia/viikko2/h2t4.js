function summaKeski() {
	let l1, l2, l3, l4, l5, summa;
	l1 = parseInt(document.getElementById("l1").value);
	l2 = parseInt(document.getElementById("l2").value);
	l3 = parseInt(document.getElementById("l3").value);
	l4 = parseInt(document.getElementById("l4").value);
	l5 = parseInt(document.getElementById("l5").value);
	summa = l1 + l2 + l3 + l4 + l5;;
	console.log("Lukujen summa on" + summa + "ja keskiarvo on" + summa/5)
}