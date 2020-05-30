// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: {
      host:     'powerdev.choatgnq0xau.sa-east-1.rds.amazonaws.com',
      database: 'bethehero',
      user:     'root',
      password: '#P0werD3v'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host:     'powerdev.choatgnq0xau.sa-east-1.rds.amazonaws.com',
      database: 'bethehero',
      user:     'root',
      password: '#P0werD3v'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
