let bcrypt = require('bcrypt');

//za almavid
bcrypt.hash("pass1", 10, function(err, hash) {
  console.log(hash);
});

//za bvucic
bcrypt.hash("pass2", 10, function(err, hash) {
  console.log(hash);
});

//za draganap
bcrypt.hash("pass3", 10, function(err, hash) {
  console.log(hash);
});

