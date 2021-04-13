type MyExclude<T, U> = T extends U ? never : T

// MyExclude<T, U>