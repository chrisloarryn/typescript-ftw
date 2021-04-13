type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// expected to be `false`
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>

type isSuspended = Includes<['ACTIVE', 'SUSPENDED', 'RETIRED'], 'SUSPENDED'>