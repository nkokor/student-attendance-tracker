const PoziviAjax = (()=>{
  //fnCallback u svim metodama se poziva kada stigne odgovor sa servera putem Ajax-a
  // svaki callback kao parametre ima error i data, error je null ako je status 200 i data je tijelo odgovora
  // ako postoji greška poruka se prosljeđuje u error parametar callback-a, a data je tada null
  function posaljiZahtjevZaPredmet(naziv,fnCallback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", encodeURI("/predmet/" + naziv), true);
    xhr.send();
    xhr.onreadystatechange = function() {
      let error = null;
      let data = null;
      if(xhr.status == 200 && xhr.readyState == 4) {
        data = xhr.responseText;
      } else {
        error = xhr.responseText;
      }
      fnCallback(error, data);
    }
  }
  // vraća listu predmeta za loginovanog nastavnika ili grešku da nastavnik nije loginovan
  function posaljiZahtjevZaPredmete(fnCallback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/predmeti", true);
    xhr.send();
    xhr.onreadystatechange = function() {
      let error = null;
      let data = null;
      if(xhr.status == 200 && xhr.readyState == 4) {
        data = xhr.responseText;
      } else {
        error = xhr.responseText;
      }
      fnCallback(error, data);
    }
  }
  function posaljiZahtjevZaLogin(username,password,fnCallback){ 
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    let pristupniPodaci = {"username":username,"password":password};
    xhr.send(JSON.stringify(pristupniPodaci));
    xhr.onreadystatechange = function() {
      let error = null;
      let data = null;
      if(xhr.status == 200 && xhr.readyState == 4) {
        data = xhr.responseText;
      } else {
        error = xhr.responseText;
      }
      fnCallback(error, data);
    }
  }
  function posaljiZahtjevZaLogout(fnCallback){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/logout", true);
    xhr.send();
    xhr.onreadystatechange = function() {
      let error = null;
      let data = null;
      if(xhr.status == 200 && xhr.readyState == 4) {
        data = xhr.responseText;
      } else {
        error = xhr.responseText;
      }
      fnCallback(error, data);
    }
  }
  //prisustvo ima oblik {sedmica:N,predavanja:P,vjezbe:V}
  function posaljiZahtjevZaPrisustvo(naziv,index,prisustvo,fnCallback){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", encodeURI("/predmet/prisustvo/" + naziv + "/student/" + index), true);
    xhr.setRequestHeader('Content-type', 'application/json');
    let podaci = {"sedmica":prisustvo.sedmica,"predavanja":prisustvo.predavanja,"vjezbe":prisustvo.vjezbe};
    xhr.send(JSON.stringify(podaci));
    xhr.onreadystatechange = function() {
      let error = null;
      let data = null;
      if(xhr.status == 200 && xhr.readyState == 4) {
        data = xhr.responseText;
      } else {
        error = xhr.responseText;
      }
      fnCallback(error, data);
    }
  }
  return{
  postLogin: posaljiZahtjevZaLogin,
  postLogout: posaljiZahtjevZaLogout,
  getPredmet: posaljiZahtjevZaPredmet,
  getPredmeti: posaljiZahtjevZaPredmete,
  postPrisustvo: posaljiZahtjevZaPrisustvo
  };
  })();