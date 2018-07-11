import Sequelize from 'sequelize';

export default new Sequelize('note', 'root', '', {
  host             : 'localhost',
  dialect          : 'mysql',
  operatorsAliases : false,
  insecureAuth     : true,
  define           : {
    timestamps: false,
  },
});
