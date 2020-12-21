//@ts-check
/**
 * class to create a Programmer
 * @example
 * const newProgrammer = new Programmer ({{id: 1, firstName: 'Ryan', lastName: 'Dahl', age: 39, isActive: true}, 'Javascript'})
 * 
 * @see https://gist.github.com/jashkenas/1329619
 * 
 * @todo Implement the rest of methods
 */
// @see to show some examble on a external page
// @todo show pending tasks 
class Programmer{
  /**
   * @param {User} user User's information
   * @param {string} language A programming language
   */
  // @param {{fullName: string}} user User's information
  // Instead of this we use the custom objetc that we created in CustomTypes.js
  constructor(user, language){
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.language = language
  }

  /**
   * Get programmer information
   * @returns {void}
   */
  getInfo(){
    console.log(`I'm ${this.getFullName()} and my favourite programming language is ${this.language}`)
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

/**
 * Know more in {@link Programmer}
 */
// @link to document a porcion of code and link to another piece of code
const programmer1 = new Programmer ({id: 1, firstName: 'Elias', lastName: 'Moura', age: 28, isActive: true}, 'Javascript')
const programmer2 = new Programmer ({id: 2, firstName: 'Rodrigo', lastName: 'Moura', age: 28, isActive: true}, 'PHP')

console.log(programmer1.getFullName(), programmer1.language)
console.log(programmer2.getFullName(), programmer2.language)

programmer1.getInfo()
programmer2.getInfo()