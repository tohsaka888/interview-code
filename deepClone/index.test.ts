import deepCloneJS from "./index.js";
import { assertEquals, assertNotStrictEquals } from "asserts";

Deno.test("手写深拷贝", () => {
  const obj = {
    num: 1,
    str: "str",
    boolean: true,
    und: undefined,
    nul: null,
    obj: { name: "对象", id: 1 },
    arr: [0, 1, 2],
    func: function () {
      console.log("函数");
    },
    date: new Date(1),
    reg: new RegExp("/正则/ig"),
    [Symbol("1")]: 1,
  };

  const clonedObj = deepCloneJS(obj);

  assertEquals(clonedObj, obj);
  assertNotStrictEquals(clonedObj, obj);
});
