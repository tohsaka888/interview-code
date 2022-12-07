# JS 面试手撕代码题

## 已完成列表

- [手写节流函数](/throttle/)
- [手写防抖函数](/debounce/)
- [手写`Promise.all`](/Promise.all/)

## TODO

- 手写`Promise.race`
- 手写`Promise.allSettled`
- 手写`Promise.any`
- 手写浅拷贝
- 手写深拷贝
- 手写`instanceof`
- 手写`call/apply/bind`

## 测试全部用例

```bash
deno test ./
```

如果显示类似内容：

```bash
Check file:///home/rin/Documents/interview-code/Promise.all/index.test.ts
Check file:///home/rin/Documents/interview-code/throttle/index.test.ts
running 2 tests from ./Promise.all/index.test.ts
手写Promise.all-JS ... ok (6ms)
手写Promise.all-TS ... ok (5ms)
running 2 tests from ./throttle/index.test.ts
JS节流 ... ok (8ms)
TS节流 ... ok (5ms)

ok | 4 passed | 0 failed (57ms)
```

则运行成功！

> [`deno`下载文档](https://deno.land/manual@v1.28.3/getting_started/installation)
