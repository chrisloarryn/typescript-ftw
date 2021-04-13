// Implement Format<T extends string> generic.

// For example,

type Format<T extends string> = T extends `${infer _}%${infer B}` ?
  B extends `d${infer C}` ? (d1: number) => Format<C> :
  B extends `s${infer C}` ? (s1: string) => Format<C> : Format<B> : string;

type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string