function karkaus() {
	let karkaus = parseInt(document.getElementbyId("vuosi"));
	if (karkaus % 4 == 0 && karkausvuosi % 100 1= 0) {
		console.log("Vuosi on karkausvuosi");
	}
	else if (karkaus % 400 == 0) {
		console.log("Vuosi on karkausvuosi");
	}
	else {
		console.log("Vuosi ei ole karkausvuosi");
	}
}