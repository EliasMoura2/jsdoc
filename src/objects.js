//@ts-check
/**
 * Person Object
 * @type {{id: Number, firstName: string, lastName: string, age: Number}}
 */
const person = {
  id: 1,
  firstName: 'Elias',
  lastName: 'Moura',
  age: 28
}
// age: 'asda' => type string is not assignable to type number

// optional data types
/**
 * Person Object
 * @type {{id: Number | string, firstName: string, lastName: string}}
 */
const Employeer = {
  id: 1,
  firstName: 'Elias',
  lastName: 'Moura',
}
// age: 28
// age does no exist in type 
// {id: Number | string, firstName: string, lastName: string}

// Otra Syntaxis