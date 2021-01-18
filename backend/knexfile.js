// Update with your config settings.

module.exports = {

    client: 'mysql',
    connection: {
      database: 'pesquisa',
      user:     'root',
      password: '10293847'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
