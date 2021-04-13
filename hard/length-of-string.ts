// Implement a type LengthOfString<S> that calculates the length 
// of the template string(as in 298 - Length of String):

// type LengthOfString2<S extends string, A extends unknown[] = []> = S extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
//   ? LengthOfString<Rest, [...A, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]>
//   : S extends `${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
//     ? LengthOfString<Rest, [...A, 0, 0, 0, 0, 0, 0, 0, 0]>
//     : S extends `${string}${string}${string}${string}${infer Rest}`
//       ? LengthOfString<Rest, [...A, 0, 0, 0, 0]>
//       : S extends `${string}${string}${infer Rest}`
//         ? LengthOfString<Rest, [...A, 0, 0]>
//         : S extends `${string}${infer Rest}`
//           ? LengthOfString<Rest, [...A, 0]>
//           : S extends ""
//             ? A["length"]
//             : never

type LengthOfString2<S extends string> = LengthHelper<S>['length']
type LengthHelper<T extends string> =
    T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}${infer K}${infer L}${infer O}` ? [A, B, C, D, E, F, G, H, I, J, K, L, ...LengthHelper<O>] :
        T extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}` ? [A, B, C, D, E, F, G, H, ...LengthHelper<I>] :
            T extends `${infer A}${infer B}` ? [A, ...LengthHelper<B>] : [];

type T0 = LengthOfString2<"foo"> // 3
// The type must support strings several hundred characters long
// (the usual recursive calculation of the string length is
// limited by the depth of recursive function calls in TS, that
// is, it supports strings up to about 45 characters long).