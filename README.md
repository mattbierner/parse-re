# Parse-RE

ECMAScript Regular Expression parser and engine.

## About

Parse-RE is an academic implementation of ECMAScript 5.1 regular expressions using
parse.js parser combinators. It explores the development of parser combinators
that output parser combinators. The parsers map regular expression grammar elements
to matchers (more parsers) with the action represented by the regular expression
element. These matchers can then be run against strings to produce matching
results.

The implementation is in functional style Javascript.


## Dependencies
* [Parse.js][parse.js] 15.3.X - Parser combinators.
* [Nu][nu] 2.2.X - Small functional, lazy stream library.
* [Seshat][seshat] 0.0.X - Functional memoization utility.
* [Amulet][amulet] 2.0.X - Immutable data structure helper.



[parse.js]: https://github.com/mattbierner/parse.js
[nu]: https://github.com/mattbierner/nu
[seshat]: https://github.com/mattbierner/seshat
[amulet]: https://github.com/mattbierner/amulet
[khepri]: https://github.com/mattbierner/khepri
