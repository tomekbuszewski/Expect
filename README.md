# Expect 
## An assertion library

Expect is a very simple and straight-forward assertion library. You can use it to test your API response and dodge an unlikely error. For example, you can easily check whether a field that you expect to be a string is really a string, not a `null`. 

## Why?
While you can write all of these assumptions alone, having a consistent and easy to memorize API certainly helps. Sure, you can write `Object.prototype.toString.call(MY_ARRAY) === '[object Array]'` to check if your input in an array, but you can do `expect.anArray(MY_ARRAY)` and get the same response, but with shorter syntax.

## Examples
### Check if your input is a string
```js
import e from 'expect';

const STRING = 'a simple string';
const ANSWER = e.string(STRING) ? 'A string!' : 'Something else, probably an alien';
```

### Check if an object isn't empty
```js
import e from 'expect';
import axios from 'axios';

axios.get(MY_URL).then(r => {
  const { data } = r;

  if (e.nonEmptyObject(data)) {
    // Do something with your data
  } else {
    // Well shit, backends did it again!
  }
});
```

### Check if given array have some value
```js
import e from 'expect';

const ARRAY = [
  'some',
  'values'
];

if (e.arrayToHave(ARRAY, 'some')) {
  // Given array have 'some' value
}
```

More examples can be found in the test file.

Author: Tomek Buszewski <tomek.buszewski@gmail.com>