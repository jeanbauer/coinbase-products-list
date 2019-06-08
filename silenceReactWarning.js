// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/issues/14769
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {

    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})
