var DataTypes = require('sequelize').DataTypes;
var _admin = require('./Admin');
var _agronomo = require('./Agronomo');
var _cliente = require('./Cliente');
var _perfil = require('./Perfil');
var _status = require('./Status');
var _usuario = require('./Usuario');
var _visita = require('./Visita');

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var agronomo = _agronomo(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var perfil = _perfil(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var visita = _visita(sequelize, DataTypes);

  visita.belongsTo(agronomo, { as: 'agronomo', foreignKey: 'agronomo_id'});
  agronomo.hasMany(visita, { as: 'visita', foreignKey: 'agronomo_id'});
  visita.belongsTo(cliente, { as: 'cliente', foreignKey: 'cliente_id'});
  cliente.hasMany(visita, { as: 'visita', foreignKey: 'cliente_id'});
  usuario.belongsTo(perfil, { as: 'perfil', foreignKey: 'perfil_id'});
  perfil.hasMany(usuario, { as: 'usuarios', foreignKey: 'perfil_id'});
  visita.belongsTo(status, { as: 'status', foreignKey: 'status_id'});
  status.hasMany(visita, { as: 'visita', foreignKey: 'status_id'});
  admin.belongsTo(usuario, { as: 'usuario', foreignKey: 'usuario_id'});
  usuario.hasMany(admin, { as: 'admins', foreignKey: 'usuario_id'});
  agronomo.belongsTo(usuario, { as: 'usuario', foreignKey: 'usuario_id'});
  usuario.hasMany(agronomo, { as: 'agronomos', foreignKey: 'usuario_id'});
  cliente.belongsTo(usuario, { as: 'usuario', foreignKey: 'usuario_id'});
  usuario.hasMany(cliente, { as: 'clientes', foreignKey: 'usuario_id'});

  return {
    admin,
    agronomo,
    cliente,
    perfil,
    status,
    usuario,
    visita,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
