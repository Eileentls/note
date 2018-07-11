import Sequelize from 'sequelize';

import sequelize from '../libs/sequelize.js';

export default sequelize.define('Blogs', {
  id   : { type: Sequelize.INTEGER, field: 'blogId', primaryKey: true },
  text : { type: Sequelize.STRING, field: 'content' },
}, {
  freezeTableName: true,
});
