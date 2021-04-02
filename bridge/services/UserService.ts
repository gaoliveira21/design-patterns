import { User } from '../models/User'
import { UserDao } from '../dao/UserDAO'

export abstract class UserService {
  constructor(protected userDAO: UserDao) {}

  public abstract save(user: User): void
}