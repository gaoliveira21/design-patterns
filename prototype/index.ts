import { Address } from './models/Address'
import { User } from './models/User'

const user = new User('Clone', 25, new Address('ABC Street', 1000))

console.log(user)

const cloneUser = user.clone()

cloneUser.name = 'Clone 2x'
cloneUser.address.street = 'Double street'

console.log(user)
console.log(cloneUser)
