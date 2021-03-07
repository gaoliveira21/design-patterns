import { Connection } from './connection/Connection'
import { ConnectionPool } from './connection/ConnectionPool'

const doQuery1 = (): void => {
  const pool: ConnectionPool = ConnectionPool.getInstance()
  const connection: Connection | null = pool.getConnection()

  if(connection) connection.query('SELECT * FROM A1')
}

const doQuery2 = (): void => {
  const pool: ConnectionPool = ConnectionPool.getInstance()
  const connection: Connection | null = pool.getConnection()

  if(connection) connection.query('SELECT * FROM A2')
}

const doQuery3 = (): void => {
  const pool: ConnectionPool = ConnectionPool.getInstance()
  const connection: Connection | null = pool.getConnection()

  if(connection) connection.query('SELECT * FROM A3')
}

doQuery1()
doQuery2()
doQuery3()
