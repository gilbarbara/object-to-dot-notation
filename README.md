# object-to-dot-notation

[![NPM version](https://badge.fury.io/js/object-to-dot-notation.svg)](https://www.npmjs.com/package/object-to-dot-notation) [![build status](https://travis-ci.org/gilbarbara/object-to-dot-notation.svg)](https://travis-ci.org/gilbarbara/object-to-dot-notation) [![Maintainability](https://api.codeclimate.com/v1/badges/a53a05c008f89a7e734e/maintainability)](https://codeclimate.com/github/gilbarbara/object-to-dot-notation/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a53a05c008f89a7e734e/test_coverage)](https://codeclimate.com/github/gilbarbara/object-to-dot-notation/test_coverage)

Convert simple objects to dot notation

### Setup

```bash
npm i object-to-dot-notation
```



```javascript
const otdn = require('object-to-dot-notation');

const path = otdn({
  name: {
	state: {
	  on: { 
		red: "walk"
	  }
	}
  }
});

console.log(path) // name.state.on.red.walk
```

