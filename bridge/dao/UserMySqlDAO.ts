import { User } from '../models/User'
import { UserDao } from './UserDAO'

export class UserMySqlDAO implements UserDao {
  public save(user: User): void {
    console.log('Saving the user in the MySQL Database!')
  }
}