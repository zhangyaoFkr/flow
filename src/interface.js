// @flow

interface Contravariant { -writeOnly: number }

var numberOrString = Math.random() > 0.5 ? 42 : 'forty-two';

var value2: Contravariant = { writeOnly: numberOrString };