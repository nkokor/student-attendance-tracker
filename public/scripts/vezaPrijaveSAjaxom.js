let ajax = PoziviAjax;

function prijaviKorisnika() {
  let inputKorisnickogImena = document.getElementById("korisnickoIme");
  let inputLozinke = document.getElementById("lozinka");
  let korisnickoIme = inputKorisnickogImena.value;
  let lozinka = inputLozinke.value;
  ajax.postLogin(korisnickoIme, lozinka, function(error, data) {
      if(error == null) {
        let upozorenje = document.getElementById("upozorenjeON");
        if(upozorenje != null) {
          upozorenje.id = "upozorenjeOFF";
        }
        location.href = "predmeti.html";
      } 
      else {
        let upozorenje = document.getElementById("upozorenjeOFF");
        if(upozorenje != null) {
          upozorenje.id = "upozorenjeON";
        }
      }
  });
}


let dugmeZaPrijavu = document.getElementById("dugmeZaPrijavu");
dugmeZaPrijavu.addEventListener("click", prijaviKorisnika);
