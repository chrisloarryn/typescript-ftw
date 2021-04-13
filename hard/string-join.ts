// Create a type-safe string join utility which can be used like
// so:

type JoinRes<P extends string[], D extends string> = P extends [infer A, ...infer B]
  ? B extends [] ? `${P[0]}` : B extends string[] ? `${P[0]}${D}${JoinRes<B, D>}` : never
  : ''

declare function join<D extends string>(delimiter: D):
  <P extends string[]>(...parts: P) => JoinRes<P, D>;

const hyphenJoiner = join('-')

const resulthyphenJoiner = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
// Or alternatively:

join('#')('a', 'b', 'c') // = 'a#b#c'
// When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e:

join('')('a', 'b', 'c') // = 'abc'
// When only one item is passed, we should get back the original item (without any delimiter added):

join('-')('a') // = 'a'