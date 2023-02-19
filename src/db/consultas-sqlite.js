const { optionsSQLite3 } = require("../persistence/store/db_sqlite/config.js");
const knex = require('knex')(optionsSQLite3);

knex.from('products').del()
	.then(() => console.log('Productos eliminados'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())