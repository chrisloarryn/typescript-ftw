// Merge two types into a new type.
// Keys of the second type overrides keys of the first type.

type GetSameKey<KF, KS> = KS extends KF ? KS : never
type GetRestKey<KF, KS> = KF extends KS ? never : KF

type KeyMerge<T, S> = keyof T | keyof S

type Merge<F, S> = {
  [K in KeyMerge<F, S>]: K extends GetSameKey<keyof F, keyof S>
    ? S[K]
    : K extends GetRestKey<keyof F, keyof S>
    ? F[K]
    : never
}

type Doggy = {
  name: string
}

type Froggy = {
  name: number
}

type MergedTypes = Merge<Doggy, Froggy>
