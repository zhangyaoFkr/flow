// @flow

var obj = {};

obj.foo = 1;
obj.bar = true;

var foo: number  = obj.foo; // Works!
var bar: boolean = obj.bar; // Works!
var baz: string  = obj.baz; // Works?