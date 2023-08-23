function napuniBazu(baza){
  var listaStudenata = [];
  var listaPredmeta = [];
  var listaNastavnika = [];
  return new Promise(function(resolve, reject) {
    listaStudenata.push(baza.student.create({
      "ime": "Admir Mehmedagić",
      "index": 18543
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Faris Ćosić",
      "index": 18165
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Matija Kokor",
      "index": 18976
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Muhamed Masnopita",
      "index": 18753
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Edin Mešić",
      "index": 18432
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Nikolina Kokor",
      "index": 18381
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Rijad Burović",
      "index": 18875
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Faris Matoruga",
      "index": 18971
      }));
    listaStudenata.push(baza.student.create({
      "ime": "Filip Marić",
      "index": 18560
      }));
    Promise.all(listaStudenata).then(function(studenti) {
      var student1 = studenti.filter(function(s) {
        return s.ime == "Admir Mehmedagić"
      })[0];
      var student2 = studenti.filter(function(s) {
        return s.ime == "Faris Ćosić"
      })[0];
      var student3 = studenti.filter(function(s) {
        return s.ime == "Matija Kokor"
      })[0];
      var student4 = studenti.filter(function(s) {
        return s.ime == "Muhamed Masnopita"
      })[0];
      var student5 = studenti.filter(function(s) {
        return s.ime == "Edin Mešić"
      })[0];
      var student6 = studenti.filter(function(s) {
        return s.ime == "Nikolina Kokor"
      })[0];
      var student7 = studenti.filter(function(s) {
        return s.ime == "Rijad Burović"
      })[0];
      var student8 = studenti.filter(function(s) {
        return s.ime == "Faris Matoruga"
      })[0];
      var student9 = studenti.filter(function(s) {
        return s.ime == "Filip Marić"
      })[0];
      listaPredmeta.push(baza.predmet.create({ "predmet": "Uvod u programiranje",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where:{predmet:"Uvod u programiranje"}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});     
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});   
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Web tehnologije",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Web tehnologije'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":1,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Razvoj mobilnih aplikacija",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Razvoj mobilnih aplikacija'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18560, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student9]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Računarska grafika",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Računarska grafika'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Diskretna matematika",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Diskretna matematika'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Numerički algoritmi",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Numerički algoritmi'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Tehnike programiranja",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Tehnike programiranja'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18560, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student9]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Osnove operacionih istraživanja",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Osnove operacionih istraživanja'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Osnove računarskih mreža",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Osnove računarskih mreža'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });

        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Logički dizajn",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Logički dizajn'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Računarske arhitekture",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Računarske arhitekture'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18560, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18560, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student9]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      listaPredmeta.push(baza.predmet.create({ "predmet": "Osnove informacionih sistema",
      "brojPredavanjaSedmicno": 3,
      "brojVjezbiSedmicno": 2}).then(function(p){
        baza.predmet.findOne({where: {predmet: 'Osnove informacionih sistema'}}).then(function(p){
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":2,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":2,"vjezbe":2,"index":18432, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":1,"predavanja":3,"vjezbe":1,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18543, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":2,"vjezbe":1,"index":18165, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":3,"vjezbe":1,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":1,"vjezbe":1,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":2,"predavanja":0,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":1,"vjezbe":0,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":3,"predavanja":3,"vjezbe":2,"index":18971, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":3,"vjezbe":0,"index":18976, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18753, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18381, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":2,"vjezbe":0,"index":18875, "predmetId": p.id});
          baza.prisustvo.create({"sedmica":4,"predavanja":1,"vjezbe":2,"index":18971, "predmetId": p.id});
        });
        p.setStudents([student1, student2, student3, student4, student5, student6, student7, student8]);
        return new Promise(function(resolve, reject){
          resolve(p);
        });
      })
      );
      Promise.all(listaPredmeta).then(function(predmeti){
        var predmet1 = predmeti.filter(function(p) {
          return p.predmet == 'Uvod u programiranje'
        })[0];
        var predmet2 = predmeti.filter(function(p) {
          return p.predmet == 'Web tehnologije'
        })[0];
        var predmet3 = predmeti.filter(function(p) {
          return p.predmet == 'Razvoj mobilnih aplikacija'
        })[0];
        var predmet4 = predmeti.filter(function(p) {
          return p.predmet == 'Računarska grafika'
        })[0];
        var predmet5 = predmeti.filter(function(p) {
          return p.predmet == 'Diskretna matematika'
        })[0];
        var predmet6 = predmeti.filter(function(p) {
          return p.predmet == 'Numerički algoritmi'
        })[0];
        var predmet7 = predmeti.filter(function(p) {
          return p.predmet == 'Tehnike programiranja'
        })[0];
        var predmet8 = predmeti.filter(function(p) {
          return p.predmet == 'Osnove operacionih istraživanja'
        })[0];
        var predmet9 = predmeti.filter(function(p) {
          return p.predmet == 'Osnove računarskih mreža'
        })[0];
        var predmet10 = predmeti.filter(function(p) {
          return p.predmet == 'Logički dizajn'
        })[0];
        var predmet11 = predmeti.filter(function(p) {
          return p.predmet == 'Računarske arhitekture'
        })[0];
        var predmet12 = predmeti.filter(function(p) {
          return p.predmet == 'Osnove informacionih sistema'
        })[0];
        listaNastavnika.push(baza.nastavnik.create({
          "username": "almavid",
          "password_hash": "$2b$10$U.p0rEw/Pw56rVnudEGMJu3WgPtDDm7IV7P2uZ38WTErgRYqf.XB."
          }).then(function(n){
            return n.setPredmets([predmet1, predmet2, predmet3, predmet4]).then(function(){
              return new Promise(function(resolve, reject) {
                resolve(n);
              });
            });
          })
        );
        listaNastavnika.push(baza.nastavnik.create({ "username": "bvucic",
        "password_hash": "$2b$10$VEE4JbBZ4sY4oE.D.GFeyea8jmsl2PE.G0terfZ4WvZdwBkdKeqma"        
          }).then(function(n){
            return n.setPredmets([predmet5, predmet6, predmet7, predmet8]).then(function(){
              return new Promise(function(resolve, reject) {
                resolve(n);
              });
            });
          })
        );
        listaNastavnika.push(baza.nastavnik.create({
          "username": "draganap",
            "password_hash": "$2b$10$iq5EzlkZbXUkt5aR3FcWAeThTIKnXFz.b83mp145VMRGN4hcprvW."
          }).then(function(n){
            return n.setPredmets([predmet9, predmet10, predmet11, predmet12]).then(function(){
              return new Promise(function(resolve, reject) {
                resolve(n);
              });
            });
          })
        );
        Promise.all(listaNastavnika).then(function(n){
          resolve(n);
        }).catch(function(greska){
          console.log("Nastavnik greška " +  greska);
        });
      }).catch(function(greska){
        console.log("Predmet greška " + greska);
      });

    }).catch(function(greska){
      console.log("Student greška " + greska);
    });
  });
}

module.exports=napuniBazu;


