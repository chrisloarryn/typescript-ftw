// This challenge continues from 6 - Simple Vue, you should finish that one first, and modify your code based on it to start this challenge.

// In addition to the Simple Vue, we are now having a new props field in the options. This is a simplified version of Vue's props option. Here are some of the rules.

// props is an object containing each field as the key of the real props injected into this. The injected props will be accessible in all the context including data, computed, and methods.

// A prop will be defined either by a constructor or an object with a type field containing constructor(s).

// For example
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
// should be inferred to type Props = { foo: boolean }.

// When passing multiple constructors, the type should be inferred to a union.
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }

// When an empty object is passed, the key should be inferred to any.

// For more specified cases, check out the Test Cases section.

// required, default, and array props in Vue are not considered in this challenge.

export type OptionType<dataType, methodType, computedType, propsType> = {
  data?: (this: transformProps<propsType>) => dataType;
  computed?: (computedType & ThisType<(dataType & methodType)>);
  methods?: (methodType & ThisType<(dataType & methodType & transformComputed<computedType> & transformProps<propsType>)>);
  props?: propsType;
};
type transformComputed<computed> = { [key in keyof computed]: computed[key] extends (...args: any) => infer returnType ? returnType : never };
type transformProps<props> = { [key in keyof props]: transformProp<props[key]> };
type transformProp<prop> = prop extends {
  type: infer propType;
} ? propType extends Array<infer EachProp> ? transformFunction<EachProp> : transformFunction<propType> : {} extends prop ? any : transformFunction<prop>;
type transformFunction<T> = T extends (...args: any) => infer returnType ? returnType : T extends new (...args: any) => infer instanceType ? instanceType : never;