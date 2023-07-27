# Testing

## About
In this unit we'll be practicing writing tests for an existing codebase, and then adding new features and tests for those features. The codebase you'll be working with is a Redux MegaMarkets app hooked up to an extremely simplified database implementation. This code base has a very lacking test suite. Pretend you're a new developer on this project and have been asked to add some features and debug some existing ones. Without tests in place, you might be a bit hesitant to make significant changes to the code because you're living in fear of **silently breaking an existing feature.** We will work to quash this fear by implementing some tests so that this code can be iterated upon with ease and confidence.

The learning goals for this unit are as follows:
- Gain familiarity with different testing tools such as Jest, expect, Supertest, and more
- Practice writing unit tests, integration tests, and end-to-end tests
- Learn two different ways of testing client-side code: headless browsers (Puppeteer) and React shallow rendering (Enzyme)
- Gain an appreciation for why writing tests is not only important, but easier in the long run
- Learn to identify when a function is testable or not, and how to make testable functions

### Testing Framework
The testing framework used in most of your previous units is called Mocha. It's an excellent, lightweight framework, and easily one of the most widely used in the JS ecosystem. But in this testing unit, we'll be using a different framework called [Jest](https://jestjs.io/). If you know one, working with the other is an easy transition. We'll be using Jest as it's a faster-growing framework, has a built-in assertion library (`expect`), and much more readable console output.

With Jest, we run our tests using either the command-line tool (`npm install -g jest` and then simply `jest`), or by running it via a script (in this project, `npm test`). Jest adds some global functions and environment variables to the JavaScript environment which help with control flow and readability when defining tests, such as `beforeAll`, `afterAll`, `describe`, `it`, `beforeEach`, `afterEach`, and its assertion library `expect`. It outputs the results of the test to the terminal with a summary of test passes, failures, and skips.

### Assertion Library
Think of an assertion library as a simplified way of throwing an error if certain conditions are not met. For instance, we have the following function:
```
function add(num1, num2) {
  return num1 + num2;
}
```
When *unit testing* this function, we might want to assert that the result of calling `add(1, 3)` should be 4 with the following JavaScript:
```
const result = add(1, 3);
if (result !== 4) {
  throw new Error('Adding 1 and 3 should equal 4');
}
```
This is a very unwieldy way of writing assertions. Assertion libraries like [expect](https://github.com/mjackson/expect) (which is built-in with Jest) give us a better way:
```
const result = add(1, 3);
expect(result).toEqual(4);
```
Not only is this quick and easy to write, it's immediately legible to any non-JS engineers, and project stakeholders who may not be engineers at all! Well-written tests can become a contract we use to make feature requirements meaningful.

Assertion libraries also provide some added bonuses, such as reporting the expected outcome vs the actual outcome to Jest in a predictable way so that Jest can display the results in a clean, readable format.

### Unit Tests
Unit tests attempt to *isolate* an individual function and ensure that that function does what it says it does. Functions are much easier to unit test when they have their *dependencies injected*, that is to say, when their dependencies are passed in as parameters. Unit tests are generally faster than integration tests since they are testing smaller chunks of code. If a function relies on another function in order to do its job, we typically will *mock out* the functions that are relied upon. This allows us to test just the function we care about. Jest has built-in functionality for mocking, but there are many other libraries which exist to making mocking easier, such as [Sinon.JS](http://sinonjs.org/docs/), [Nock](https://github.com/node-nock/nock), or [mockery](https://github.com/mfncooper/mockery).

### Snapshots
A lot of the time, the biggest benefit of tests is just that they let us know when the code we change has unintended consequences somewhere else in the codebase. **Snapshots** are a powerful Jest feature to address this: rather than checking the properties of function outputs one by one, we compare the output to a previous version that was recorded _when we knew it was correct._ This lets us cover a lot of code without having to dig too deep, but they're only as reliable as the code they're testing, and can't be used for TDD.

### Integration Tests
Unit tests help us isolate the exact source of bugs. Integration tests attempt to ensure that groups of functions working together provide an expected output. For example, an integration test may make sure that if an HTTP GET request hits my server at the `/cats` route then my server's router handler will send a list of all cats in the database as JSON. In the background, the server's route handler may have interacted with multiple controller functions and database calls. It may also just directly test a function which relies on the results of multiple other functions, and allow the function to call those functions rather than mocking them out like a unit test might. Integration tests are typically slower to run than unit tests.

When integration tests fail, they may not lead us any closer to finding the root cause. They act as a guard against "regressions" (bugs that crop up in features that previously worked) and to validate features at a high level.

### Testing front-end code
It's tough to use Node to test code that is meant to run in the browser. Browsers all have different JavaScript engines, have a different implementation of http requests than Node, and do not have any of Node's built-in modules. Furthermore, front-end libraries and frameworks such as React and Angular are a bit tricky to unit test because of their heavy coupling with the DOM. For instance, I can't just require in a single React Component and make sure it renders 5 cats, because that Component expects to be rendered into the DOM and may rely on `props`, `state`, browser APIs and more in order to even render correctly. Luckily, these libraries have options of testing utilities that make unit testing them possible.

[Testing Library](https://testing-library.com/) is a family of related libraries that are widely considered to be the gold standard for testing UI components and front-end code. Its core library, [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro), lets us write tests that query DOM nodes similarly to how user interactions would. DOM Testing Library is typically used on top of a testing framework such as Jest, and in conjunction with a DOM simulator such as [jsdom](https://github.com/jsdom/jsdom). It additionally provides further APIs for many front-end frameworks. In this challenge, we'll be using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to test a React-Redux application.

### End-to-End Testing
End-to-end testing invovles testing an application's full workflow - front-end and back-end - as closely as possible to how it will be used in the real world. When end-to-end testing, out front-end code needs to run in a place that mimics a browser as closely as possible. There are many approaches for this:

#### Browser Automation
A browser automator tests front-end code by actually running an automated version of the browser that you specify. This is as close to the real thing as you can get. Two major browser automators are [Selenium](http://www.seleniumhq.org/) and [Cypress.io](https://www.cypress.io/).

#### Headless browser
A headless browser is a lightweight attempt at mimicking a browser for testing without having to perform the resource-intensive practice of actually running a browser. Examples of headless browsers are [PhantomJS](http://phantomjs.org/) and [Puppeteer](https://github.com/GoogleChrome/puppeteer). There are [lots](https://github.com/dhamaniasad/HeadlessBrowsers) of headless browsers out there (and most of them have spoooooky names).

The difference between headless and automated browsers is gray: Cypress has a headless mode, and Puppeteer has a non-headless one! A key difference for distinguishing between the two is that headless browsers don't _render to a screen._

### Test-driven Development
Test-driven development, or TDD, is the process of writing tests for a feature BEFORE adding the actual feature. Advocates of TDD argue that developers who strictly follow TDD end up writing more modular, maintainable, and readable code. Here is the general process to follow:
  1. Identify the feature to be added
  2. Write a test that tests that the feature exists and works
  3. Run your tests and ensure that your new test is failing (because the feature doesn't exist yet)
  4. Write the code to implement your feature by following the errors, and pass the test
  5. Repeat

## Setup
- [ ]  run `npm install` to install dependencies
- [ ]  run `npm test` to run your test suite
- [ ] `npm start` to start your server on port 3000
- [ ]  in another terminal window run `npm run build` to bundle your modules
- [ ]  optionally, run `npm install -g jest` to be able to run `jest <filename>` to run individual tests

## Getting Started - testing
Now we're ready to write some tests!
- [ ] Take a look around and familiarize yourself with the codebase.
  - There's a Redux app in `client/` and an Express server in `server/`
  - Since the focus of this unit is on testing and not databases, a simplified json "database" is implemented for you in `server/db/`
- [ ] Take some time to really get an understanding of the application.
  - How does the app get and display the list of markets from the server?
  - How does the app manage state and logic?
  - Remember that in real-life codebases, you may not recognize or understand all of the tooling, and you don't have to! It should generally be enough to get a rough idea of the feature set and where business logic lives.
  - Read over the functions in `server/db/markets.js` to understand how our simplified DB works
- [ ] Ensure your build steps work by running `npm start` and navigating your browser to `http://localhost:3000`
- [ ] Check the Chrome dev console and make sure it is free of errors before continuing

## Challenges
- [ ] Complete the unit tests in `__tests__/db.js`
- [ ] Complete the reducer tests in `__tests__/marketsReducer.js`
- [ ] Complete the route integration tests in `__tests__/supertest.js`
- [ ] Complete the front-end unit and integration tests in `__tests__/react.js`
- [ ] Before moving on from React Testing Library, set up [snapshot testing](https://jestjs.io/docs/en/snapshot-testing.html) in your React tests to prevent regression bugs (i.e., bugs in a feature that was confirmed to work correctly in the past).
- [ ] Complete the front-end Feature/Integration tests in `__tests__/puppeteer.js`

### Database testing
A few tips for the `__tests__/db.js` tests that test the code in `/server/db/markets.js`. Look at `/server/db/markets.js`. This code is a simplified json "database" that stores the data in a json file (either `markets.dev.json` or `markets.test.json`), and also keeps a copy of the data in memory in the internal `marketList` variable (local to the file). We export the `db` object with various "database" functionality. `db.scync` is a function that writes a new market list to the json file, overwriting the previous. It also overwrites the `marketList` in memory with a new market list. The `db.scync` function utilizes helper functions `db.write` and `db.reset`. Finally, `db.find` returns the current market list in memory (i.e. from `marketList`) without looking into the file system (for speed reasons).

Your goal is to test this database without it depending on the above implementation details. Your tests should work for any kind of database module with a `db` object that has the functions `sync`, `write`, etc. whether the source of the data be from a json file (as in our case) or from a real Postgres or MongoDB database.

## Extension Challenges

[Enzyme](http://airbnb.io/enzyme/) is another library for testing React components. It was the industry standard before Testing Library began gaining popularity, and therefore is still very widely used - as an engineer, you'll likely come across tests written in Enzyme, so it's good to be familiar with. It is overall much less opinionated than React Testing Library, and tests written in Enzyme will more often focus on testing the internals of your React components (e.g. props and state) than on what's rendered on the DOM.
- [ ] Try writing your front-end tests with Enzyme! Complete the unit tests in `__tests__/extension/enzyme.js`. But first, you'll need to take a few additional steps to get it set up and working:
  - [ ] Enzyme is not  currently compatible with React version 17+, which this unit uses. In order to complete this extension, you'll first need to downgrade React and its associated packages to version 16. To do this, run the following command: `npm install react@16 react-dom@16 react-test-renderer@16`.
  - [ ] Then, to use Enzyme, you'll need to install the following dependencies: `enzyme`, `enzyme-adapter-react-16`, and `enzyme-to-json`.
  - [ ] Before running the tests, uncomment the `import` statements in the `enzyme.js` file.
- [ ] Note: In the [enzyme docs](https://enzymejs.github.io/enzyme/docs/api/) the examples use Chai or Mocha which are other testing libraries that have similar syntax to Jest, but are not the same. For example, Chai uses "to.equal" where Jest uses "toEqual". Use the [jest docs](https://jestjs.io/docs/en/expect) in tandem with the enzyme docs to get the right syntax for your jest methods! 

Your client has complained that saving items to the database is taking too long when multiple requests hit the server at the same time. This is because our naive database implementation is using `readFileSync` and `writeFileSync`, which block the main execution thread of JavaScript while they are running. This is a horrible idea for a server that needs to serve multiple users at the same time! For the next section, we're going to refactor all of our database functions to use the async versions of the fs functions: `readFile` and `writeFile`.
- [ ] Have the db functions in `server/markets.js` accept an additional argument, a callback function which will be invoked once any asynchronous functions are done
- [ ] Next, modify your `unit` tests for the database functions to use the asynchronous version of the database functions.
  - Even though the database functions are still synchronous, we are practicing TDD and updating the tests BEFORE refactoring the functions
- [ ] Refactor the db functions to use the async functions `readFile` and `writeFile` and to call the passed in callback function with the result once their async operation is complete
- [ ] Refactor `index.js` (the express server file) to use the new asynchronous db functions correctly
- [ ] As you refactor, run your unit tests often in order to verify that your refactored code works. By the end, all tests should be green again!

A user reported a new bug! Unfortunately, all they said was "the Sync button is broken." Your tests have already confirmed that the server and database handle the sync feature correctly, so it has to be something on the front end.
- [ ] The sync button is simple, but there are a number of Redux actions that may have influence on whether or not synced state is true. Update your reducers tests so that for each action we can confirm that the "synced" property is being set correctly.
- [ ] Add an npm script that uses `eslint` to lint your code. An `.eslintrc` file configured with the airbnb style guide has been provided (we've loosened the rules a bit).
- [ ] Modify the `npm test` script so that it **lints** your code in addition to running the other tests. If there are any lint errors, the test should be counted as a failure.
- [ ] Fix any lint errors that the lint script found so that your tests pass again.
- [ ] It would've been really useful to have tests in place for your weekly assessments. Choose a previous assessment to get experience in setting up tests from scratch. Your tests should ensure that the specs outlined in the assessment readme are being adhered to.
