// Implement the advanced util type UnionToIntersection<U>

// type UnionToIntersection<U> = (U extends any ? (x: U) => any : never) extends (x: infer V) => any ? V : never
type Union2Intersection<U> = (U extends infer R ? (x: R) => any : never) extends (x: infer V) => any ? V : never


type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
