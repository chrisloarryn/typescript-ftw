const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

// expected
// {
//   tesla: 'tesla',
//   'model 3': 'model 3',
//   'model X': 'model X',
//   'model Y': 'model Y'
// }
const result: TupleToObject<typeof tuple> = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y'
}
