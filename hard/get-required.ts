type RequiredKeys<K> = K extends undefined ? never : K

type RequiredObjKeys<T, K = keyof T> =
  K extends keyof T
  ? 
    [T[K]] extends [RequiredKeys<T[K]>] 
    ? K
    : Omit<T, K> extends T ? never : K
  : never;

type GetRequired<T> = {[P in RequiredObjKeys<T>]: T[P] }

//keys that do not have undefined in them (misses the ones that are not optional but can be set to undefined)
// type PossiblyRequiredKeys<O> = { [Key in keyof O]: undefined extends O[Key] ? never : Key }[keyof O];
// //keys that definitely have undefined entered in as type (but and can't be optional, Required<T> removes undefined from optional props in any case)
// type DefinitelyRequiredKeys<T, R extends T = Required<T>> = { [Key in keyof R]: undefined extends R[Key] ? Key : never }[keyof R];
// //combine the two above to get all required keys and build an object out of them.
// type GetRequired<T> = Pick<T, PossiblyRequiredKeys<T> | DefinitelyRequiredKeys<T>>;

// expected to be { foo: number }
type IRequiredKeys = GetRequired<{ foo: number, bar?: string }>
