import shallowCloneJS from "./index.js";
import { assertEquals, assertNotStrictEquals } from "asserts";
import shallowCloneTS from "./index.ts";

Deno.test("手写浅拷贝-JS", () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const clonedObj = shallowCloneJS(obj);
  assertEquals(obj, clonedObj);
  assertNotStrictEquals(obj, clonedObj);
});

Deno.test("手写浅拷贝-TS", () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const clonedObj = shallowCloneTS(obj);
  assertEquals(obj, clonedObj);
  assertNotStrictEquals(obj, clonedObj);
});