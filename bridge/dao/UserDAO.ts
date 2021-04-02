import { User } from '../models/User'

export interface UserDao {
  save: (user: User) => void
}