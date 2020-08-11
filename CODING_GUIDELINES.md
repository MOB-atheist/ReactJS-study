# Coding Guidelines

- You can validate that your code complies with these guidelines by running `stuff/php-format.py validate`
- Tabs, no spaces
- End of line should should be Unix style (`\n`), not Windows style (`\r\n`)
- Opening brackets goes in the same line as the last statement
```
    if (condition) {
        stuff;
    }
```
- Function calls have no space before the parentheses
- No spaces are left inside the parentheses
- A space after each comma, but without space before
- There should not be more than one contiguous blank line
- There should be no empty comments
- You should not use block comments `/ * ... * /`, only line `// ...`
- Changes in functionality must be accompanied by their respective new / modified tests
- Exceptions must be used to report erroneous states. The use of functions that return true / false is allowed when they are expected values