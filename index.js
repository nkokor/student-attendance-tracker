const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(express.static("public/html"));
app.use(express.static("public/css"));
app.use(express.static("public/scripts"));
app.use(express.static("public/ikone"));

app.use(bodyParser.json());

app.use(session( {
  secret: 'tajna lozinka',
  resave: false,
  saveUninitialized: true
}));

const bcrypt = require('bcrypt');

const baza = require('./baza.js');
const priprema = require('./pripremaBaze.js');


baza.sequelize.sync({force:true}).then(function(){
    priprema(baza).then(function(){
      console.log("Server je spreman na portu 3000...")
  });
});

app.post("/login", function(req, res) {
  baza.nastavnik.findOne({where:{username:req.body.username}}).then(function(korisnik){
    res.setHeader('Content-type', 'application/json');
    let poruka = '';
    let validanKorisnik = false;
    if(korisnik != null) {
      validanKorisnik = true;
    }
    if(validanKorisnik && req.body.password != null) {
      if(bcrypt.compareSync(req.body.password, korisnik.password_hash)) {
        req.session.username = req.body.username;
        baza.predmet.findAll({where:{nastavnikId:korisnik.id}}).then(function(predmeti){
          let nastavnikoviPredmeti = [];
          for(let i = 0; i < predmeti.length; i++) {
            nastavnikoviPredmeti.push(predmeti[i].predmet);
          }
          req.session.predmeti = nastavnikoviPredmeti;
          poruka = {"poruka":"Uspješna prijava"};
          res.status(200);
          res.send(JSON.stringify(poruka));
        }).catch(function(error) {
          console.log('Greška u bazi ' + error);
        });
      }
      else {
        res.status(403);
        poruka = {"poruka":"Neuspješna prijava"};
        res.send(JSON.stringify(poruka));
      }
    } else {
      res.status(403);
      poruka = {"poruka":"Neuspješna prijava"};
      res.send(JSON.stringify(poruka));
    }
  }).catch(function(error) {
    console.log("Greška " + error);
  });
});

app.post("/logout", function(req, res) {
  req.session.destroy();
  res.status(200);
  let poruka = {"poruka":"Uspješna odjava"};
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(poruka));
});

app.get("/predmeti", function(req, res) {
  res.setHeader('Content-type', 'application/json');
  if(req.session.username != null) {
    res.status(200);
    res.send(JSON.stringify(req.session.predmeti));
  }
  else {
    res.status(403);
    let poruka = {"greska":"Nastavnik nije logovan"};
    res.send(JSON.stringify(poruka));
  }
});

app.get(/\/predmet\/.+/, function(req, res) {
  let url = decodeURI(req.url);
  if(req.session != null) {
    res.setHeader('Content-type', 'application/json');
    let nazivPredmeta = "";
    let modifikovani = url.replace('/predmet/', '');
    let prisustva = null;
    let studenti = [];
    nazivPredmeta = modifikovani;
    baza.predmet.findOne({where:{predmet:nazivPredmeta}}).then(function(predmet){
       if(predmet != null){
        baza.prisustvo.findAll({where:{predmetId:predmet.id}}).then(function(prisustvo){
          prisustva = prisustvo;
          if(prisustva == null) {
            res.status(403);
            let poruka = {"greska":"Nema podataka za ovaj predmet"};
            res.send(JSON.stringify(poruka));
          }
          else{
            baza.predmet.findOne({where:{predmet:nazivPredmeta}}).then(function(p){
              let predmetTrazeni = p;
              p.getStudents().then(function(s) {
                studenti = s;
                let finalniStudenti = [];
                let finalnaPrisustva = [];
                for(let i = 0; i < studenti.length; i++) {
                  finalniStudenti.push({ime:studenti[i].ime,index:studenti[i].index});
                }
                for(let i = 0; i < prisustva.length; i++) {
                  finalnaPrisustva.push({sedmica:prisustva[i].sedmica,predavanja:prisustva[i].predavanja,vjezbe:prisustva[i].vjezbe,index:prisustva[i].index});
                }
                let prisustvo = {studenti:finalniStudenti,prisustva:finalnaPrisustva,predmet:predmetTrazeni.predmet,brojPredavanjaSedmicno:predmetTrazeni.brojPredavanjaSedmicno,brojVjezbiSedmicno:predmetTrazeni.brojVjezbiSedmicno};
                res.status(200);
                res.send(JSON.stringify(prisustvo));
              }).catch(function(greska) {
                console.log('Greška ' + greska);
              }); 
            });
          }
        });
       } else {
        res.setHeader('Content-type', 'application/json');
        res.status(403);
        let poruka = {"greska":"Nevalidan predmet"};
        res.send(JSON.stringify(poruka));
       }
    }).catch(function(greska) {
      console.log('Greška ' + greska);
    });
 } else {
  res.setHeader('Content-type', 'application/json');
  res.status(403);
  let poruka = {"greska":"Nastavnik nije logovan"};
  res.send(JSON.stringify(poruka));
}
});

app.post(/\/predmet\/prisustvo.[^\/]*\/student\/[0-9]*/, function(req, res) {
  let url = decodeURI(req.url);
  let trazeniPredmet = url.replace("/predmet/prisustvo/", '');
  trazeniPredmet = trazeniPredmet.replace(/\/student\/.*/, '');
  let indeks = url.replace(/\/predmet\/prisustvo.[^\/]*\/student\//, '');
  if(req.session != null) {
    baza.predmet.findOne({where:{predmet:trazeniPredmet}}).then(function(p){
      let idPredmeta = p.id;
      baza.prisustvo.findOrCreate({where:{sedmica:req.body.sedmica,index:indeks,predmetId:idPredmeta}}).then(function(p) {
        baza.prisustvo.update({sedmica:req.body.sedmica,predavanja:req.body.predavanja,vjezbe:req.body.vjezbe,index:indeks},{where:{sedmica:req.body.sedmica,index:indeks}}).then(function(p) {
          baza.predmet.findOne({where:{predmet:trazeniPredmet}}).then(function(nadjeniPredmet){
            let finalniPredmet = nadjeniPredmet;
            nadjeniPredmet.getStudents().then(function(s){
              let studenti = s;
              baza.predmet.findOne({where:{predmet:trazeniPredmet}}).then(function(predmet){
                baza.prisustvo.findAll({where:{predmetId:idPredmeta}}).then(function(pr) {
                  res.setHeader('Content-type', 'application/json');
                  res.status(200);
                  let finalnaPrisustva = [];
                  for(let i = 0; i < pr.length; i++) {
                    finalnaPrisustva.push({sedmica:pr[i].sedmica,predavanja:pr[i].predavanja,vjezbe:pr[i].vjezbe,index:pr[i].index});
                  }
                  let finalniStudenti = [];
                  for(let i = 0; i < studenti.length; i++) {
                    finalniStudenti.push({ime:studenti[i].ime,index:studenti[i].index});
                  }
                  podaci = {studenti:finalniStudenti,prisustva:finalnaPrisustva,predmet:trazeniPredmet,brojPredavanjaSedmicno:finalniPredmet.brojPredavanjaSedmicno,brojVjezbiSedmicno:finalniPredmet.brojVjezbiSedmicno};
                  res.send(JSON.stringify(podaci));
                });
              });
            });
          });
        });
      }).catch(function(greska) {
        console.log('Greška ' + greska);
      });
    }).catch(function(greska) {
      console.log('Greška ' + greska);
    });
  } else{
    res.setHeader('Content-type', 'application/json');
    res.status(403);
    let poruka = {"greska":"Nastavnik nije logovan"};
    res.send(JSON.stringify(poruka));
  }
});

app.listen(3000);
