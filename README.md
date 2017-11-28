# object-to-dot-notation

[![NPM version](https://badge.fury.io/js/object-to-dot-notation.svg)](https://www.npmjs.com/package/object-to-dot-notation) 
[![build status](https://travis-ci.org/gilbarbara/object-to-dot-notation.svg)](https://travis-ci.org/gilbarbara/object-to-dot-notation) 

Convert simple objects to dot notation

```
{
  name: {
	state: {
	  on: { 
		red: "walk"
	  }
	}
  }
}
```

to 

`name.state.on.red.walk`