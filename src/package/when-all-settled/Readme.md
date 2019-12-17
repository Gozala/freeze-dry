# when-all-settled

Tiny javascript module that functions like javascript's Promise.all, but it
does not mind if any of the promises reject.

Creates a Promise that resolves when all promises passed to it have settled
(= either resolved or rejected). This is almost the same as Promise.all,
except it does not reject if some of the given promises reject. Rejected
promises simply result in a value `undefined` in the array of results.


## Install

`npm install when-all-settled`


## Use

Example case, fetching some resources:
```
import whenAllSettled from 'when-all-settled'

const promises = [
  fetchSomething(),
  fetchSomethingThatWillFail(),
  fetchSomethingElse(),
]

whenAllSettled(promises).then(results => {
  // results contains [<Response>, undefined, <Response>]
})
```


## API

`whenAllSettled(promises, options)`

Arguments:
- `promises`: an array of Promises to wait for.
- `options` (optional):
  - `options.onRejection` (optional):
      A rejection handler attached to each of the promises. The default logs
      the error to the console, unless `process.env.NODE_ENV==='production'`.

      Note: if this function throws an error, the returned promise rejects, and
      if it returns a value, that value will end up in the array of results.


## Implementation

It's really just giving a more meaningful name to this one line of code:

```
promises.map(p => Promise.resolve(p).catch(onRejection))
```
