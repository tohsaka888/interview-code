import { assertEquals } from "asserts";
import myCallJS from "./index.js";
import myCallTS from "./index.ts";

Deno.test("手写call-JS", () => {
  (
    Function.prototype as FunctionConstructor["prototype"] & {
      // deno-lint-ignore no-explicit-any
      myCall: (...args: any[]) => void;
    }
  ).myCall = myCallJS;

  function showThis(this: { a: number }, a: number, b: number) {
    assertEquals(this.a + a + b, 12);
  }

  // deno-lint-ignore no-explicit-any
  (showThis as any).myCall({ a: 3 }, 4, 5);
});

Deno.test("手写call-TS", () => {
  (
    Function.prototype as FunctionConstructor["prototype"] & {
      // deno-lint-ignore no-explicit-any
      myCall: (...args: any[]) => void;
    }
  ).myCall = myCallTS;

  function showThis(this: { a: number }, a: number, b: number) {
    assertEquals(this.a + a + b, 12);
  }

  // deno-lint-ignore no-explicit-any
  (showThis as any).myCall({ a: 3 }, 4, 5);
});
