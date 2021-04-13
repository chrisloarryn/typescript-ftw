type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}


// type ReplaceKeys<U, T , Y> = { [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K] }
type ReplaceKeys<U, T, Y> = U extends any ? {
  [key in keyof U]:
    key extends T
      ? key extends keyof Y
        ? Y[key]
        : never
      : U[key];
} : never;


type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number; flag: string }
> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }> // {type: 'A', name: never} | NodeB | {type: 'C', name: never} // would replace name to never
