  function posNeg()
  {
    let vastaus;
    vastaus = parseInt(document.getElementById('arvo').value);
    if(vastaus >=0)
    {
      alert("Positiivinen");
    }
    else {
      alert("Negatiivinen");
    }
  }