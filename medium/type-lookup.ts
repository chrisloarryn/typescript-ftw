interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type PropertyNamesExtType<T, P> = {
  [K in keyof T]: P extends T[K] ? K : never;
}[keyof T];

type LookUp<U, T> = Extract<U, { [K in PropertyNamesExtType<U, T>]: T }>;
// type LookUp<U extends { type: any }, T extends U['type']> = U extends { type: T } ? U : never;

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`