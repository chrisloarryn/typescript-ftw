// Implement a type DeepPick, that extends Utility types Pick. 
// A type takes two arguments.

// For example:

type TypeGet<T, Paths> = Paths extends `${infer A}.${infer B}`
  ? A extends keyof T ? { [K in A]: TypeGet<T[A], B> } : never
  : Paths extends keyof T ? { [K in Paths]: T[Paths] } : never

type UnionToIntercetion<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => any) ? I : never

type DeepPick<T, PathUnion extends string> =
  UnionToIntercetion<PathUnion extends infer Keys ? TypeGet<T, Keys> : never>

type obj = {
  name: 'hoge', 
  age: 20,
  friend: {
    name: 'fuga',
    age: 30,
    family: {
      name: 'baz',  
      age: 1 
    }
  }
}

type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
type T3 = DeepPick<obj, 'name' | 'friend.name' |  'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}
