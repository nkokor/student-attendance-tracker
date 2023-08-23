let ajax = PoziviAjax;

function dajIndeksTrazenogReda(redovi, id) {
  for(let i = 0; i < redovi.length; i++) {
    let celije = redovi[i].children;
    for(let j = 0; j < celije.length; j++) {
      if(celije[j].id == id) {
        return i-1;
      }
    }
  } return 0;
}

function najvecaSedmica() {
  max = 1;
  let header = document.getElementById('prvi');
  for(let i = 0; i < header.children.length; i++) {
    if(header.children[i].innerText != 'Indeks' && header.children[i].innerText != 'Ime i prezime' && header.children[i].innerText.includes('-') == false) {
      if(dajBroj(header.children[i].innerText)>max) {
        max = dajBroj(header.children[i].innerText);
      }
    }
  } 
  return max;
}

function indeksKolone(red, celija) {
  for(let i = 0; i < red.children.length; i++) {
    if(celija.id == red.children[i].id) {
      return i;
    }
  }
  return 0;
}

function dajBroj(rimski) {
  let brojevi = {"I": 1, "II":2, "III":3, "IV":4, "V":5, "VI":6, "VII":7, "VIII":8, "IX":9, "X":10, "XI":11, "XII":12, "XIII":13, "XIV":14, "XV":15};
  return brojevi[rimski];
}

function prikaziPredmete(predmeti) {
  predmeti = JSON.parse(predmeti);
  let meniPredmeta = document.getElementById("meniPredmeta");
  for(let i = 0; i < predmeti.length; i++) {
    let karticaPredmeta = document.createElement("div");
    karticaPredmeta.className = "predmet";
    let slika = document.createElement("img");
    slika.src = "/predmet" + (i + 1) + ".jpg";
    slika.alt = "slika";
    let nazivPredmeta = document.createElement("h4");
    nazivPredmeta.className = "nazivPredmeta";
    nazivPredmeta.value = predmeti[i];
    nazivPredmeta.innerText = predmeti[i];
    karticaPredmeta.appendChild(slika);
    karticaPredmeta.appendChild(nazivPredmeta);
    karticaPredmeta.addEventListener("click", function() {
      let nazivPredmeta = this.getElementsByTagName("h4")[0].value;
      ajax.getPredmet(nazivPredmeta, function(error, data) {
        if(error == null) {
          let div = document.getElementById("prostorZaTabeluPrisustva");
          div.innerText = null;
          TabelaPrisustvo(div, JSON.parse(data));
          let casovi = document.getElementsByClassName("cas");
          for(let i = 0; i < casovi.length; i++) {
            casovi[i].id = "cas" + i;
          }
    }
  });
    });
    meniPredmeta.appendChild(karticaPredmeta);
  }
}

window.onload = function() {
  ajax.getPredmeti(function(error, data) {
    if(error == null) {
      let upozorenje = document.getElementById("upozorenjeON");
      if(upozorenje != null)
       upozorenje.id = "upozorenjeOFF";
      let headerDiv = document.getElementById("divOdjavaOFF");
      if(headerDiv != null)
      headerDiv.id = "divOdjava";
      let dugmeZaOdjavu = document.getElementById("dugmeZaOdjavu");
      if(dugmeZaOdjavu == null) {
        dugmeZaOdjavu = document.getElementById("dugmeOFF");
        dugmeZaOdjavu.id = "dugmeZaOdjavu";
      }
      dugmeZaOdjavu.addEventListener("click", odjaviKorisnika);
      prikaziPredmete(data);
      
    }
    else {
      let headerDiv = document.getElementById("divOdjava");
      if(headerDiv != null)
      headerDiv.id = "divOdjavaOFF";
      let dugme = document.getElementById("dugmeZaOdjavu");
      if(dugme != null) {
        dugme.id = "dugmeOFF";
      }
      let upozorenje = document.getElementById("upozorenjeOFF");
      if(upozorenje != null)
       upozorenje.id = "upozorenjeON";
    }
  });
}

function odjaviKorisnika() {
  ajax.postLogout(function(error, data) {
      if(error == null) {
        location.href = "prijava.html";
      }
  });
}

let tabelaPrisustva = document.getElementById("prostorZaTabeluPrisustva");
tabelaPrisustva.addEventListener("click", function(event) {
  if(event.target.className == "cas" || event.target.className == "cas da" || event.target.className == "cas ne") {
    let casovi = document.getElementsByClassName("cas");
          for(let i = 0; i < casovi.length; i++) {
            casovi[i].id = "cas" + i;
          }
    let redovi = document.getElementsByTagName("tr");
    let indeksReda = dajIndeksTrazenogReda(redovi, event.target.id);
    let red = document.getElementsByTagName("tr")[indeksReda];
    let indeksStudenta = red.children[1].innerText;
    let celijeCasova = red.children;
    let brojPredavanja = 0;
    let brojVjezbi = 0;
    for (let j = 0; j < celijeCasova.length; j++) {
      if(celijeCasova[j].innerText.includes('P')) {
        brojPredavanja++;
      }
      if(celijeCasova[j].innerText.includes('V')) {
        brojVjezbi++;
      }
    }
    let prisustvoPredavanju = 0;
    let prisustvoVjezbi = 0;
    let redObojenih = document.getElementsByTagName("tr")[indeksReda+1];
    for(let j = 0; j < brojPredavanja; j++) {
      if(redObojenih.children[j].className == "cas da") {
        prisustvoPredavanju++;
      }
    }
    for(let j = brojPredavanja; j < brojPredavanja+brojVjezbi; j++) {
      if(redObojenih.children[j].className == "cas da") {
        prisustvoVjezbi++;
      }
    }
    let trenutna = dajBroj(document.getElementById("trenutnaSedmica").innerText);
    let indeksGornje = parseInt(indeksKolone(redObojenih, event.target)) + trenutna + 1;
    if(event.target.className == "cas da") {
      if(red.children[indeksGornje].className == 'predavanje') {
        prisustvoPredavanju-=1;
      }
      else if(red.children[indeksGornje].className == 'vjezba'){
        prisustvoVjezbi-=1;
      }
    } else if(event.target.className == 'cas ne'){
       if(red.children[indeksGornje].className == 'predavanje') {
        prisustvoPredavanju+=1;
       }
      else if(red.children[indeksGornje].className == 'vjezba'){
        prisustvoVjezbi+=1;
      }
    }
    else if(event.target.className == "cas") {
      if(red.children[indeksGornje].className == 'predavanje') {
        prisustvoPredavanju+=1;
       }
      else if(red.children[indeksGornje].className == 'vjezba'){
        prisustvoVjezbi+=1;
      }
    }
    let predmet = document.getElementById("naslovPredmeta").innerText;
    let prisustvo = {sedmica:trenutna, predavanja: prisustvoPredavanju, vjezbe:prisustvoVjezbi};
    ajax.postPrisustvo(predmet, indeksStudenta, prisustvo, function (error, data) {
      if(error == null) {
        let div = document.getElementById("prostorZaTabeluPrisustva");
        TabelaPrisustvo(div, JSON.parse(data));
        let casovi = document.getElementsByClassName("cas");
        for(let i = 0; i < casovi.length; i++) {
          casovi[i].id = "cas" + i;
        }
        let najveca = najvecaSedmica();
        if(trenutna < najveca) {
            let dugmeNazad = document.getElementById("nazad");
            for(let i = najveca-1; i>=trenutna; i--) {
              dugmeNazad.click();
            }
        }
      }
    });
  }
});

tabelaPrisustva.addEventListener('click', function(event) {
  if(event.target.id == 'nazad' || event.target.id == 'naprijed') {
    let casovi = document.getElementsByClassName("cas");
    for(let i = 0; i < casovi.length; i++) {
      casovi[i].id = "cas" + i;
    }
  }
});


