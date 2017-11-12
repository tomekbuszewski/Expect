/**
 * Simple service for checking whether your result is really what you want.
 * @author Tomek Buszewski <tomek.buszewski@gmail.com>
 */
const expect = (() => {
  /**
   * Checks whether given HTML element has requested attribute
   * @param {HTMLElement} input - given element
   * @param {string} attr - requested value
   * @returns {boolean} true if attribute exists
   */
  const attribute = (input, attr) => input.hasAttribute(attr) ? input.getAttribute(attr) : false;

  /**
   * Checks whether input is an array
   * @param {any} input - given input
   * @returns {boolean} true if input is an array
   */
  const anArray = input => Object.prototype.toString.call(input) === '[object Array]';

  /**
   * Checks whether input is an object
   * @param {any} input - given input
   * @returns {boolean} true if input is an object
   */
  const anObject = input => typeof input === 'object' && !anArray(input);

  /**
   * Checks whether given array has length
   * @param {array} input - given array
   * @returns {boolean} true if array has at least one element
   */
  const lengthy = input => anArray(input) && input.length > 0;

  /**
   * Checks whether given object has at least one key
   * @param {object} input - given object
   * @returns {boolean} - true if object has at least one key
   */
  const nonEmptyObject = input => anObject(input) && Object.keys(input).length > 0;

  /**
   * Checks whether given object has certain key
   * @param {object} input - given object
   * @param {string} what - key to look for
   * @returns {boolean} true if key exists
   */
  const objectToHave = (input, what) => anObject(input) && what in input;

  /**
   * Checks whether given array has provided value
   * @param {array} input - given array
   * @param {any} what - element to find
   * @returns {boolean} true if element exists in the array
   */
  const arrayToHave = (input, what) => anArray(input) && input.indexOf(what) !== -1;

  /**
   * Checks whether given value exists (useful when dealing with APIs)
   * @param {any} input - given input
   * @returns {boolean} true if input isn't null nor undefined
   */
  const present = input => {
    try {
      return typeof input !== 'undefined' && input !== null;
    } catch (e) {
      return false;
    }
  };

  /**
   * Checks whether given input is a string
   * @param {any} input - given input
   * @returns {boolean} true if input is a string
   */
  const string = input => present(input) && typeof input === 'string' && input !== '';

  /**
   * Checks if two given arrays are identical
   * @param {array} a - array to be compared
   * @param {array} b - array to be compared
   * @returns {boolean} true if those arrays are identical
   */
  const arraysToEqual = (a, b) => anArray(a) && anArray(b) && JSON.stringify(a) === JSON.stringify(b);

  /**
   * Checks whether given array houses given key/value object
   * @param {array} input - given array
   * @param {string} whatName - key of the object
   * @param {string} whatValue - value of the key
   * @returns {boolean} true if such pair exists in given array
   */
  const arrayToHaveObject = (input, whatName, whatValue) => {
    for (const item of input) {
      return item[whatName] === whatValue
    }

    return false
  };

  /**
   * Checks whether input evaluates to true
   * @param {any} input - given input
   * @returns {boolean} true if item evaluates true
   */
  const truthy = input => typeof input !== 'undefined' && input === true;

  /**
   * Checks whether input evaluates to false
   * @param {any} input - given input
   * @returns {boolean} true if item evaluates false
   */
  const falsy = input => typeof input !== 'undefined' && input === false;

  return {
    attribute,
    anArray,
    anObject,
    lengthy,
    truthy,
    string,
    falsy,
    objectToHave,
    arrayToHave,
    present,
    arrayToHaveObject,
    arraysToEqual,
    nonEmptyObject
  }
})();

export default expect;
