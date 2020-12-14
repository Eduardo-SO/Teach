import { resolve } from 'path'

module.exports = {
  client: 'pg',
  // version: '7.2',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'teach2020',
    database: 'teach',
  },
  seeds: {
    directory: resolve(__dirname, 'src', 'database', 'seeds'),
  },
}
