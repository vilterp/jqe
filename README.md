# JQE

Like JQ, but you use javascript **E**xpressions.

## Example

```shell script
cat mydata | jqe 'data.rows.filter(r => r.statusCode === 200).map(r => r.responseTime)'
```
