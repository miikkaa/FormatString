# FormatString
A tiny utility method to format strings (equiv to `printf`).

# Usage
Pass a string and an array of arguments. Symbols like {0}, etc. will be replaced with real values from the arguments.

```
PF.FormatString('Format this {0}!', [ 'shit' ]);
```
