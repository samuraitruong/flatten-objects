## flatten-object

A very simple that generate the multiple array of object when it contains the property

for example the input is

```js
{
  a: 1,
  b: [1,2,3]
}
```

Result

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
