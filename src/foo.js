// @flow

function foo(x: ?number | ?string): string | number {
  if (x) {
    return x;
  }
  return "default string";
}

function identity<T>(value: T): T {
  return value;
}

function getTypeOf(value: mixed): string {
  return typeof value;
}

function stringify(value: mixed) {
  // $ExpectError
  // return "" + value; // Error!
  if (typeof value === 'number') {
    return "" + value;
  } else {
    return value;
  }
}

function method(...args: Array<number| string>) {
  // ...
  console.log(args)
}

method();        // Works.
method(1);       // Works.
method(1, '2');    // Works.
method(1, '2', 3); // Works.

function method(): boolean {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
}

async function method(): Promise<string> {
  // return '123';
  return new Promise((resolve, reject) => {
    resolve('123');
  })
}

function method1() {
  console.log(this);
  return this;
}

var num: number = method1.call(42);
// $ExpectError
var str: string = method1.call(42);


