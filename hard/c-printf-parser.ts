// There is a function in C language: printf. This function allows us to print something with formatting.
// Like this:
// printf("The result is %d.", 42);

// This challenge requires you to parse the input string and
// extract the format placeholders like % d and % f.For example,
// if the input string is "The result is %d.", the parsed result
// is a tuple['dec'].

// Here is the mapping:
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  S extends string,
  R extends string[] = []
> = S extends `${infer _}%${infer C}${infer Rest}`
  ? C extends keyof ControlsMap
    ? ParsePrintFormat<Rest, [...R, ControlsMap[C]]>
    : ParsePrintFormat<Rest, R>
  : R

type ParsePrintFormat2<
  S extends string
> = S extends `${infer First}%${infer Target}${infer Rest}`
  ? Target extends keyof ControlsMap
    ? [ControlsMap[Target], ...ParsePrintFormat<Rest>]
    : ParsePrintFormat<Rest>
  : []

