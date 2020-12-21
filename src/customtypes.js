//@ts-check

/**
 * A new User object
 * @typedef {Object} User
 * @property {Number} id user id
 * @property {string} firstName User's firstname
 * @property {string} lastName User's lastName
 * @property {Number | string} [age] User's age (Optional)
 * @property {boolean} isActive User's state
 */

/**
 * @type {User}
 */
const myNewUser = {
  id: 1,
  firstName: 'Elias',
  lastName: 'Moura',
  age: 28,
  isActive: true
}
/**
 * @type {User}
 */
const myNewUser2 = {
  id: 2,
  firstName: 'Rodrigo',
  lastName: 'Moura',
  age: 28,
  isActive: false
}

// isActive: 'false'
// Type string is not assignable to type boolean