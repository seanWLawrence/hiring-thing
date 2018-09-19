# Code samples

Hey Sam, it was great talking with you and learning more about HiringThing! Here
is a small repo with a few code samples that we discussed for you to check out.

## React

### E-commerce app

Found in `react/e-commerce`

[Work in progress] Here's an e-commerce solution with a built-in CMS built
entirely with React.js.

### HiringThing example with Redux

Found in `react/hiring-thing-with-redux`

[Work in progress] Here's a quick example I put together in a couple of hours
while playing around with the public API. Since it's a localhost app without
https, I used Postman to get the values and then added them as a JSON fixture.

## Testing

### End to end testing

Found in `/tests/end-to-end.js`

Here's an excerpt from some recent tests made with [Cypress](cypress.io), which
works like other end to end frameworks like Selenium, etc. I typically will
write these tests before coding, and then code the solution to them as I go, and
refactor as needed before submitting a pull request.

### Unit testing

Found in `/tests/unit.js`

Here's an example of testng a React component using the
[react-testing-library](https://github.com/kentcdodds/react-testing-library)
appraoch that I tend to stick with (not worrying about tesing state, props, etc.
but only what the user sees and interacts with).

## Additional notes on the code sample that you shared

Likes

- It was very clean and organized
- Love the use of ES6 syntax, arrow function bound click handlers and PropTypes
- Used props effectively and render method was slim

Potential improvements

- Add `htmlFor` attribute for better accessibility on the label element

```jsx
render() {
	return (
		<>
			<label htmlFor="username">
			<input type="text" name="username" />
		</>
	)
}
```

- Add JSDoc style comments to explain the class, props, and its methods

```javascript
/**
 * @typedef Props
 * @property {string} title - Title of the Jobing application
 * // etc.
 */

/**
 * Creates a new JobingApplication
 * @param {Props} React props
 */
class JobingApplication extends Component {
	/**
	 * Does something really cool with the state
	 * @returns {void} Updates state
	 */
	doSomething() {
		// code
	}
	// etc.
}
```

- Abstract some of the logic out of the component for easier readability

```javascript
/**
 * Does something
 */

function doSomething() {
	// code
}
/**
 * Does something else
 */

function doSomethingElse() {
	// code
}

/**
 * Creates Jobing application
 */

class JobingApplication extends Component {
	/**
	 * Does something special after mount because of a, b, c
	 */

	componentDidMount() {
		doSomething();
	}

	/**
	 * Sends click info to the state
	 */

	_handleClick() {
		doSomethingElse();
	}
}
```

- Use a more conventional 'React way' of constructing objects, i.e. the class
  constructor is typically only used for initializing state and binding
  handlers, but was used to initiate other objects too in this example (if I
  remember correctly)

```javascript
// uncommon approach in React, initialize non-state objects in the class
class Example extends Component {
	anObject = {
		// data
	};

	anotherObject = {
		// data
	};

	// more common, only initialize state in the constructor
	state = {
		anObject: {},
		anotherObject: {},
	};

	componentDidMount() {
		this.setState({ anObject: 'value', anotherObject: 'value' });
	}
}
```
