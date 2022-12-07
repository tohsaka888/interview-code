# 手写 Promise.all

- `Promise.all` 接收一个可迭代对象（不是数组），所以我们需要先将可迭代对象转化为数组。
- 并不是 `push` 进 `result` 数组的，而是通过下标的方式进行存储，这是因为我们为了保证输出的顺序，因为 `Promise` 对象执行的**时间**可能不同， `push` 的话会**破坏顺序**。
- 通过数组下标判断是否所有的`Promise`都执行完成。
- `Promise.all` 返回的是一个 Promise 对象。
- `Promise.all` 只要有一个 `reject` 了，就不关心其他的 `promise` 了。

## 测试

```bash
deno test ./Promise.all/
```
