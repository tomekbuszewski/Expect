import expectService from './index';

const TRUTHY = true;
const FALSY = false;
const ARR_A = ['a', 'b'];
const ARR_B = ['a', 'b'];
const OBJ = { 'key': 'val' };
const ARR_C = [ OBJ ];
const STRING = 'Test string';
const ELEMENT = document.createElement('DIV');
ELEMENT.setAttribute('data-test', 'test');
const SOMETHING = undefined;

describe ('Expect service', () => {
  it('Should return true for truthy', () => { expect(expectService.truthy(TRUTHY)).toBeTruthy(); });
  it('Should return true for falsy', () => { expect(expectService.falsy(FALSY)).toBeTruthy(); });
  it('Should return true is input is a string', () => { expect(expectService.string(STRING)).toBeTruthy(); });

  it('Should return true if both arrays are the same', () => { expect(expectService.arraysToEqual(ARR_A, ARR_B)).toBeTruthy(); });
  it('Should return true if array have given element', () => { expect(expectService.arrayToHave(ARR_A, 'a')).toBeTruthy(); });
  it('Should return true if input is an array', () => { expect(expectService.anArray(ARR_A)).toBeTruthy(); });
  it('Should return true if array is longer than 0', () => { expect(expectService.lengthy(ARR_A)).toBeTruthy(); });
  it('Should return true if array contains given object', () => { expect(expectService.arrayToHaveObject(ARR_C, 'key', 'val')).toBeTruthy(); });
  it('Should return false if array doesn\'t contain given object', () => { expect(expectService.arrayToHaveObject(ARR_C, 'key', 'some val')).toBeFalsy(); });

  it('Should return true if input is an object', () => { expect(expectService.anObject(OBJ)).toBeTruthy(); });
  it('Should return true if object have given element', () => { expect(expectService.objectToHave(OBJ, 'key')).toBeTruthy(); });
  it('Should return true if input is an object with more that 0 keys', () => { expect(expectService.nonEmptyObject(OBJ)).toBeTruthy(); });

  it('Should return true if HTML element has given attribute', () => { expect(expectService.attribute(ELEMENT, 'data-test')).toBeTruthy(); });
  it('Should return true if given value exist', () => { expect(expectService.present(STRING)).toBeTruthy(); });
  it('Should return false if given value doesn\'t exist', () => { expect(expectService.present(SOMETHING)).toBeFalsy(); });
});
