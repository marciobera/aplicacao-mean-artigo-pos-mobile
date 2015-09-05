var mongoose = require('mongoose');

module.exports = mongoose.model('Cliente', {
  nome: String,
  email: String,
  sexo: String,
  ativo: Boolean
});