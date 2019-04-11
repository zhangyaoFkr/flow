// @flow
function cloneObject(obj) {
  const clone = {};

  Object.keys(obj).forEach(key => {
    clone[key] = obj[key];
  });

  return ((clone: any): typeof obj); // <<
}

const clone = cloneObject({
  foo: 1,
  bar: true,
  baz: "three"
});

console.log(clone);


(clone.foo: 1); // Works!
(clone.bar: true); // Works!
(clone.baz: "three"); // Works!
