import { User } from '../models/User'
import { UserDao } from './UserDAO'

export class UserMongoDAO implements UserDao {
  public save(user: User): void {
    console.log('Saving the user in the Mongo Database!')
  }
}