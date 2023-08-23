let TabelaPrisustvo = function (divRef, podaci) {
 
  let postaviTrenutnuSedmicu = function () {
    let najveca = podaci.prisustva[0].sedmica;
    for(let i = 0; i < podaci.prisustva.length; i++) {
     if(podaci.prisustva[i].sedmica > najveca) {
       najveca = podaci.prisustva[i].sedmica;
     }
    }
    return najveca;
 }

 let trenutnaSedmica = postaviTrenutnuSedmicu();

  let obracunajPostotakPrisustva = function (student, sedmica) {
    for(let j = 0; j < podaci.prisustva.length; j++) {
      if(podaci.prisustva[j].index == student.index && podaci.prisustva[j].sedmica == sedmica) {
        return (podaci.prisustva[j].predavanja + podaci.prisustva[j].vjezbe) / (podaci.brojPredavanjaSedmicno + podaci.brojVjezbiSedmicno) *100;
      }
    }
    return null;
  }

  let maksimalni = function (prisustva) {
    let maks = prisustva[0].sedmica;
    for(let k = 0; k < prisustva.length; k++) {
      if(prisustva[k].sedmica > maks) {
        maks = prisustva[k].sedmica;
      }
    } return maks;
  }

  let provjeriSedmice = function () {
    for(let n = 0; n < podaci.prisustva.length; n++) {
      let imaManja = false;
      let imaVeca = false;
      for(let m = 0; m < podaci.prisustva.length; m++) {
        if(podaci.prisustva[m].sedmica == (podaci.prisustva[n].sedmica-1)) {
          imaManja = true;
        }
        else if(podaci.prisustva[m].sedmica == (podaci.prisustva[n].sedmica+1)) {
          imaVeca = true;
        }
      }
      if(podaci.prisustva[n].sedmica < maksimalni(podaci.prisustva)){
        if(imaManja == false && imaVeca == false) {
          return false;
        }
      }
      else {
        if(imaManja == false) {
          return false;
        }
      }
    }
      return true;
  }

  let validirajPodatke = function () {
    //provjera negativnog prisustva
    for(let i = 0; i < podaci.prisustva.length; i+=1) {
      if(podaci.prisustva[i].predavanja < 0 || podaci.prisustva[i].vjezbe < 0 || 
        podaci.prisustva[i].predavanja > podaci.brojPredavanjaSedmicno || podaci.prisustva[i].vjezbe > podaci.brojVjezbiSedmicno ) {
        return false;
      }
    }
    //provjera prisustva za nepostojeceg studenta
    for(let i = 0; i < podaci.prisustva.length; i++) {
      let imaStudent = false;
      for(let j = 0; j < podaci.studenti.length; j+=1) {
        if(podaci.prisustva[i].index == podaci.studenti[j].index) {
          imaStudent = true;
          break;
        }
      }
      if(imaStudent == false) {
        return false;
      }
     }
    //provjera visestrukog unosa za istog studenta
    for(let i = 0; i < podaci.prisustva.length; i++) {
      let brojUnosa = 0;
      for(let j = 0; j < podaci.prisustva.length; j++) {
        if(podaci.prisustva[j].index == podaci.prisustva[i].index && podaci.prisustva[j].sedmica == podaci.prisustva[i].sedmica) {
          brojUnosa++;
        }
      }
      if(brojUnosa > 1) {
        return false;
      }
    }
    //provjera studenata s istim indeksima
    for(let i = 0; i < podaci.studenti.length; i++) {
      let brojIstihIndeksa = 0;
      for(let j = 0; j < podaci.studenti.length; j++) {
        if(podaci.studenti[j].index == podaci.studenti[i].index) {
          brojIstihIndeksa++;
        }
      }
      if(brojIstihIndeksa > 1) {
        return false;
      }
    }
     //provjera medjusedmica koje nemaju uneseno prisustvo
    if(provjeriSedmice() == false) {
      return false;
    }
     return true;
  }

  let dajRimski = function (broj) {
     let rimskiBrojevi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"];
     return rimskiBrojevi[broj]
  }

  let dajPrisustvo = function (student, sedmica) {
    let prisustvo = null;
    for(let n = 0; n < podaci.prisustva.length; n++) {
      if(podaci.prisustva[n].index == student.index) {
        if(podaci.prisustva[n].sedmica == sedmica) {
          prisustvo = podaci.prisustva[n];
        break;
      }  
      }
    } return prisustvo;
  }
  
  let napraviTabelu = function () {
    //ako div nije prazan
    let child = divRef.lastElementChild; 
    while (child) {
        divRef.removeChild(child);
        child = divRef.lastElementChild;
    }
    //ako podaci nisu validni
    if(validirajPodatke() == false) {
      let textnode = document.createTextNode("Podaci nisu validni!");
      divRef.appendChild(textnode);
    }
    //kreiranje nove tabele
    else {
        let naziv = document.createElement("h1");
        naziv.innerText = podaci.predmet;
        naziv.id = "naslovPredmeta";
        divRef.appendChild(naziv);
        let godina = document.createElement("h3");
        godina.innerText = 3;
        divRef.appendChild(godina);
        let odsjek = document.createElement("h4");
        odsjek.innerText = "Računarstvo i informatika";
        divRef.appendChild(odsjek);
        let tabela = document.createElement("table");
        tabela.id="tabela";
        tabela.style.marginBottom="30px";
        //kreiranje prvog reda tabele
        let prvi = document.createElement("tr");
        prvi.className="red";
        let ime = document.createElement("td");
        ime.innerText = "Ime i prezime";
        prvi.appendChild(ime);
        let indeks = document.createElement("td");
        indeks.innerText = "Indeks";
        indeks.className = "indeks";
        prvi.appendChild(indeks);
        prvi.id="prvi";
        //za prethodne
        for(let brojac = 0; brojac <= maksimalni(podaci.prisustva) - 1; brojac++) {
          let celija = document.createElement("td");
          celija.innerText = dajRimski(brojac);
          if(brojac==trenutnaSedmica-1) {
            celija.id="trenutnaSedmica";
            celija.colSpan=podaci.brojPredavanjaSedmicno+podaci.brojVjezbiSedmicno;
          }
          prvi.appendChild(celija);
        }
        //za buduce
        let celija = document.createElement("td");
        celija.innerText = dajRimski(trenutnaSedmica) + " - " + dajRimski(14);
        celija.colSpan=14-trenutnaSedmica;
        celija.className="neodrzana";
        prvi.append(celija);
        tabela.appendChild(prvi);
        //redovi studenata
        for(let k = 0; k < podaci.studenti.length; k++) {
          let ime = podaci.studenti[k].ime;
          let index = podaci.studenti[k].index;
          let red = document.createElement("tr");
          red.className="red";
          let celijaIme = document.createElement("td");
          let indeksCelija = document.createElement("td");
          celijaIme.innerText = ime;
          indeksCelija.innerText = index;
          celijaIme.rowSpan='2';
          indeksCelija.rowSpan='2';
          red.appendChild(celijaIme);
          red.appendChild(indeksCelija);
          tabela.appendChild(red);
          for(let m = 1; m <= maksimalni(podaci.prisustva); m++) {
            let postotak = obracunajPostotakPrisustva(podaci.studenti[k], m);
            //za trenutnu sedmicu kreira se madjutabela
            if(m == trenutnaSedmica) {
              let prisustvo = dajPrisustvo(podaci.studenti[k], m);
              for(let brojac = 1; brojac <= podaci.brojPredavanjaSedmicno; brojac++) {
                let celija = document.createElement("td");
                celija.innerText = "P" + brojac;
                celija.className = 'predavanje';
                red.appendChild(celija);
              }
              for(let brojac = 1; brojac <= podaci.brojVjezbiSedmicno; brojac++) {
                let celija = document.createElement("td");
                celija.innerText = "V" + brojac;
                celija.className = 'vjezba';
                red.appendChild(celija);
              }
              let red2 = document.createElement("tr");
              red2.className="red";
              if(prisustvo == null) {
                for(let brojac = 0; brojac < podaci.brojPredavanjaSedmicno+podaci.brojVjezbiSedmicno; brojac++) {
                  let celija = document.createElement("td");
                  celija.className="cas";
                  red2.appendChild(celija);
                }
              }
              else {
              let vjezbe = prisustvo.vjezbe;
              let predavanja = prisustvo.predavanja;
              //unosi se da za predavanja
              for(let brojac = 0; brojac < predavanja; brojac++) {
                let celija = document.createElement("td");
                celija.className="cas da";
                red2.appendChild(celija);
              }
              //unosi se ne za predavanja
              for(let brojac=0; brojac < podaci.brojPredavanjaSedmicno-predavanja; brojac++) {
                let celija = document.createElement("td");
                celija.className="cas ne";
                red2.appendChild(celija);
              }
              //unosi se da za vjezbe
              for(let brojac = 0; brojac < vjezbe; brojac++) {
                let celija = document.createElement("td");
                celija.className="cas da";
                red2.appendChild(celija);
              }
              //unosi se ne za vjezbe
              for(let brojac=0; brojac < podaci.brojVjezbiSedmicno-vjezbe; brojac++) {
                let celija = document.createElement("td");
                celija.className="cas ne";
                red2.appendChild(celija);
              }
           }
              tabela.appendChild(red2);
            }
            //prethodne sedmice
            else {
              let celija = document.createElement("td");
              if(postotak === null) {
                celija.innerText= '';
              }
              else {
                celija.innerText = postotak + '%';
              }
              celija.rowSpan='2';
              red.appendChild(celija);
            }
          }   //naredne sedmice
              for(let brojac = 0; brojac < 14-maksimalni(podaci.prisustva); brojac++) {
                let celija = document.createElement("td");
                celija.innerText='';
                celija.className="naredne";
                celija.rowSpan="2";
                red.appendChild(celija);
              }
        }
      divRef.appendChild(tabela);
    } 
  }

  let sljedecaSedmica = function () {
      if(trenutnaSedmica < maksimalni(podaci.prisustva)) {
        trenutnaSedmica++;
        napraviTabelu();
        dodajDugmad();
     }
  }

  let prethodnaSedmica = function () {
    if(trenutnaSedmica > 1) {
      trenutnaSedmica--;
      napraviTabelu();
      dodajDugmad();
    }
  }

  let dodajDugmad = function () {
    if(validirajPodatke()==true) {
      let dugmeNazad = document.createElement("button");
      dugmeNazad.id = "nazad";
      let strelicaNazad = document.createElement("i");
      strelicaNazad.className="fa-solid fa-arrow-left fa-xl";
      dugmeNazad.appendChild(strelicaNazad);
      let dugmeNaprijed = document.createElement("button");
      dugmeNaprijed.id = "naprijed";
      let strelicaNaprijed = document.createElement("i");
      strelicaNaprijed.className="fa-solid fa-arrow-right fa-xl";
      dugmeNaprijed.appendChild(strelicaNaprijed);
      divRef.appendChild(dugmeNazad);
      divRef.appendChild(dugmeNaprijed);
      dugmeNazad.addEventListener("click", prethodnaSedmica);
      dugmeNaprijed.addEventListener("click", sljedecaSedmica);
      dugmeNazad.style.backgroundColor="white";
      dugmeNaprijed.style.backgroundColor="white";
      dugmeNazad.style.height="45px";
      dugmeNaprijed.style.height="45px";
      dugmeNazad.style.width="80px";
      dugmeNaprijed.style.width="80px";
      dugmeNazad.style.marginRight="15px";
    }
  }

  napraviTabelu();
  dodajDugmad();
  
  return {
  sljedecaSedmica: sljedecaSedmica,
  prethodnaSedmica: prethodnaSedmica
  }
  };
