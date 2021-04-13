type teslaLength = ['tesla', 'model 3', 'model X', 'model Y']
type spaceXLength = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends readonly any[]> = T['length']

type teslaLengthMod = Length<teslaLength>  // expected 4
type spaceXLengthMod = Length<spaceXLength> // expected 5