/* 6.6 변수 캡슐화하기 */
class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;

  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

// M1
// let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// export function getDefaultOwner() {
//   return { ...defaultOwner };
// }
