import { Connection } from "./Connection"

export class ConnectionPool {
  private static singleton: ConnectionPool = new ConnectionPool()
  private readonly POOL_SIZE = 2
  private connectionsPool: Connection[] = []

  public static getInstance(): ConnectionPool {
    return ConnectionPool.singleton
  }

  private constructor(){
    console.log("Creating Connection Pool")
    const pool = []
    for (let index = 0; index < this.POOL_SIZE; index++) {
      pool.push(new Connection())
    }
    this.connectionsPool = pool
  }

  public getConnection(): Connection | null {
    const availableConnection = this.connectionsPool.find(conn => !conn.isInUse())

    if(availableConnection) {
      availableConnection.setInUse(true)
      return availableConnection
    }

    console.log("No Connections avaiable")
    return null
  }

  public leaveConnection(conn: Connection): void {
    conn.setInUse(false)
  }
}