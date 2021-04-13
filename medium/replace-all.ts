// Implement ReplaceAll<S, From, To> which replace the all the substring 
// From with To in the given string S

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S :
  S extends `${infer L}${From}${infer R}` ? `${L}${ReplaceAll<`${To}${R}`, From, To>}` : S

type replacedReplaceAll = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
