// @flow
function concat(a: number, b: number): string {
    return a + b;
}

// error
// Cannot call concat with 'A' bound to a because string [1] is incompatible with number [2].
// Cannot call concat with 'B' bound to b because string [1] is incompatible with number [2].
concat('A', 'B');

// error
// Cannot return a + b because number [1] is incompatible with string [2].
concat(1, 2);

