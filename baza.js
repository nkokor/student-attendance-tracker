const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt22","root","password",
{
  host:"localhost",
  dialect:"mysql",
  logging:false
});

const baza={};

baza.Sequelize = Sequelize;  
baza.sequelize = sequelize;

const nastavnik = require("./modeli/nastavnik.js")(sequelize);
const predmet = require('./modeli/predmet.js')(sequelize);
const student = require('./modeli/student.js')(sequelize);
const prisustvo = require('./modeli/prisustvo.js')(sequelize);

baza.nastavnik = nastavnik;
baza.predmet = predmet;
baza.student = student;
baza.prisustvo = prisustvo;

baza.nastavnik.hasMany(baza.predmet);
baza.predmet.belongsTo(baza.nastavnik);

baza.predmet.hasMany(baza.prisustvo);
baza.prisustvo.belongsTo(baza.predmet);

baza.predmet.belongsToMany(baza.student, {through: "PredmetStudent"});
baza.student.belongsToMany(baza.predmet, {through: "PredmetStudent"});

module.exports=baza;
