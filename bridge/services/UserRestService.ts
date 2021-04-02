import { User } from '../models/User'
import { UserDao } from '../dao/UserDAO'
import { UserService } from './UserService'

export class UserRestService extends UserService {
  constructor(userDAO: UserDao) {
    super(userDAO)
  }

  public save(user: User): void {
    console.log('Starting a save operation through Rest Protocol!')
		this.userDAO.save(user)
  }
}