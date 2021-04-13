/* eslint-disable */

import {
  Any,
  Boolean,
  Class,
  Function,
  Iteration,
  List,
  Number,
  Object,
  String,
  Union
} from 'ts-toolbelt'

// OBJECT
{
  type User = {
    name: string
    age?: number
    email: string
    details: {
      address: {
        readonly code: string
        readonly city: string
      }
    }
  }

  type Guest = {
    name: string
    email: string
  }

  type either = Object.Either<User, 'name' | 'email'>

  type filter = Object.Filter<User, number>

  type merge = Object.Merge<User, { age: number; date: Date }>

  type mergeDeep = Object.Merge<
    {
      names: ['Tim']
    },
    {
      age: number
      names: ['Thimothy', 'Thimo']
    },
    'deep'
  >

  type omit = Object.Omit<User | Guest, 'name'>

  type optional = Object.Optional<User, 'age'>

  type path = Object.Path<User, ['details', 'address', 'city']>

  type paths = Object.Paths<User>

  type pick = Object.Omit<User | Guest, 'name'>

  type readonly = Object.Readonly<User, 'details' | 'name', 'deep'>

  type record = Object.Record<'name' | 'surname', string, ['?', 'R']>

  type required = Object.Required<User, 'age'>

  type select = Object.Select<User, string>

  type unionize = Object.Unionize<User, { age: string }>

  type update = Object.Update<
    User,
    'name',
    { firstName: string; lastName: string }
  >

  type writable = Object.Writable<User, 'details', 'deep'>
}

// OBJECT.P
{
  type User = {
    name: string
    age?: number
    email: string
    details: {
      address: {
        readonly code: string
        readonly city: string
      }
    }
  }

  type merge = Object.P.Merge<User, ['details', 'address'], { street: string }>

  type pick = Object.P.Pick<User, ['details' | 'name', 'address', 'code']>

  type update = Object.P.Update<User, ['details', 'address', 'code'], number>
}

// LIST
{
  type append = List.Append<[1, 2], 3>

  type atleast = List.AtLeast<[1, 2, 3], 1 | 2>

  type concat = List.Concat<[1, 2], [3, 4]>

  type drop = List.Drop<[1, 2, 3], 2>

  type extract = List.Extract<[1, 2, 3, 4, 5], 1, 3>

  type filter = List.Filter<['1', 2, '3', 4], string>

  type flatten = List.Flatten<[[1], [2, [3]]]>

  type group = List.Group<[1, 2, 3, 4, 5, 6, 7], 2>

  type merge = List.Merge<[1, 2?], [3, 4, 5]>

  type nonnull = List.NonNullable<[1, 2, 3 | undefined]>

  type omit = List.Omit<[1, 2, 3, 4], 0 | 2>

  type pop = List.Pop<[1, 2, 3]>

  type prepend = List.Prepend<[1, 2, 3], 0>

  type pick = List.Pick<[1, 2, 3, 4], 0 | 2>

  type repeat = List.Repeat<'hey!', 3>

  type reverse = List.Reverse<[1, 2, 3]>

  type tail = List.Tail<[1, 2, 3]>
}

// UNION
{
  type filter = Union.Filter<1 | 2 | 3, 1, 'equals'>

  type interesectOf = Union.IntersectOf<{ name: string } | { age: number }>

  type last = Union.Last<1 | 2 | 3>

  type listOf = Union.ListOf<1 | 2 | 3>

  type merge = Union.Merge<{ name: string; age?: string } | { age: number }>

  type strict = Union.Strict<{ name: string } | { age: number }>
}

// FUNCTION
{
  // @ts-ignore
  declare function get<O extends object, P extends string>(
    object: O,
    path: Function.AutoPath<O, P>
  ): Object.Path<O, String.Split<P, '.'>>

  // @ts-ignore
  declare const user: User

  type User = {
    name: string
    friends: User[]
  }

  // works
  const friendName = get(user, 'friends.40.name')
  const friendFriendName = get(user, 'friends.40.friends.12.name')

  // errors
  const friendNames = get(user, 'friends.40.names')
  const friendFriendNames = get(user, 'friends.40.friends.12.names')

  const fn = (name: string, age: number) => true

  type returned = Function.Return<typeof fn>

  type parameters = Function.Parameters<typeof fn>

  type promisify = Function.Promisify<typeof fn>

  const withoutNoInfer = <T>(value: T, getDefault: () => T) => value
  const returnOfWithoutNoInfer = withoutNoInfer(42, () => 44)
  const withNoInfer = <T>(value: T, getDefault: () => Function.NoInfer<T>) =>
    value
  const returnOfWithNoInfer = withNoInfer(42, () => 44)

  // @ts-ignore
  declare const pipe: Function.Pipe
  const a = (a1: number) => `${a1}`
  const b = (b1: string) => [b1]
  const c = (c1: string[]) => [c1]
  const returnOfPipe = pipe(a, b, c)(42)
}

// ITERATION
{
  type Range<
    N1 extends number,
    N2 extends number,
    LN extends number[] = [],
    I extends Iteration.Iteration = Iteration.IterationOf<N1>
  > = {
    0: Range<N1, N2, [...LN, Iteration.Pos<I>], Iteration.Next<I>>
    1: LN
  }[N2 extends Iteration.Pos<Iteration.Prev<I>> ? 1 : 0]

  type range = Range<-4, 20>
}

// ANY
{
  type awaits = Any.Await<Promise<'hello'>>

  type compute = Any.Compute<{ name: string } & { age: number }>

  type USD = Any.Type<number, 'USD'>
  type EUR = Any.Type<number, 'EUR'>
  let usdValue = 40 as USD
  let eurValue = 50 as EUR

  usdValue = eurValue
}

// BOOLEAN
{
  type and = Boolean.And<1, Boolean.Or<1, 0>>

  type xor = Boolean.Xor<1, Boolean.Or<1, 0>>
}

// CLASS
{
  type clazz = Class.Class<
    [name: string, age: number],
    { name: string; age: number }
  >

  type instance = Class.Instance<clazz>
}

// NUMBER
{
  type absolute = Number.Absolute<-42>

  type greater = Number.Greater<10, 2>

  type add = Number.Add<-42, 10>

  type sub = Number.Sub<-42, 10>

  type negate = Number.Negate<-21>

  type range = Number.Range<-2, 5>
}
