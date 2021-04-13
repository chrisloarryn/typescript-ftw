type Awaited<T> = T extends Promise<infer K> ? K : never

// Promise<ExampleType>