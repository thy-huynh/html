function viikko() {
    let day = parseInt(document.getElementById('viikonpv').value);
    if(day == 1)
    {
      alert("Maanantai");
    }
    else if(day == 2)
    {
      alert("Tiistai");
    }
    else if(day == 3){
      alert("Keskiviikko");
    }
    else if(day == 4){
      alert("Torstai");
    }
    else if(day == 5){
      alert("Perjantai");
    }
    else if(day == 6){
      alert("Lauantai");
    }    
    else {
      alert("Sunnuntai");
    }
  }