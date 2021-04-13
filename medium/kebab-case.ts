// FooBarBaz -> for-bar-baz

type KebabCase<S> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}` 
  : S;

const NewType: KebabCase<'myPerroEsFeo'> = 'my-perro-es-feo'
