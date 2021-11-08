## flatten-objects

A very simple function that generate the multiple array of object when it contains any array in properties

for example

- Input

```js
{
  a: 1,
  b: [1,2,3]
}
```

-> Result

```js
[
  { a: 1, b: 1 },
  { a: 1, b: 2 },
  { a: 1, b: 3 },
];
```

## Usage

```js
import flattenObject from '@samuraitruong/flatten-object';

result = flattenObject({ a: 1, b: [1, 2, 3] });
console.log(result);
```
