import { UserMongoDAO } from './dao/UserMongoDAO'
import { UserMySqlDAO } from './dao/UserMySqlDAO'
import { User } from './models/User'
import { UserRestService } from './services/UserRestService'
import { UserSoapService } from './services/UserSoapService'

const user = new User('user', 'user@email.com', 'passwd')

const userRestMongoService = new UserRestService(new UserMongoDAO())
userRestMongoService.save(user)

const userSoapMongoService = new UserSoapService(new UserMongoDAO())
userSoapMongoService.save(user)

const userRestMySqlService = new UserRestService(new UserMySqlDAO())
userRestMySqlService.save(user)
