# JQE

Like **JQ**, but you use javascript **E**xpressions.

1. Stdin is parsed as JSON and passed into your expression as the variable `data`.
2. Your expression is evaluated and written to stdout as JSON.

## Example

```shell script
$ cat mydata.json | jqe 'data.rows.filter(r => r.statusCode === 200).map(r => r.responseTime)'
[
  ...JSON...
]
```
