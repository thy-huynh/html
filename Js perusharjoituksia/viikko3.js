
//tehtävä 1
function tulostaParillinen()
{
	let karvo = parseInt(document.getElementById("pluku").value);
	let jono = "<p>";
	for(var i = 2; i <= karvo; i= i+2)
	{
		jono+=i;
		jono+=" ";
	}
	jono+="</p>";
	document.getElementById("parilliset").innerHTML = jono;
}

//tehtävä 2









