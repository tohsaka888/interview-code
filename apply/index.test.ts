import { assertEquals } from "asserts";
import myApplyJS from "./index.js";
import myApplyTS from "./index.ts";

Deno.test("手写call-JS", () => {
  (
    Function.prototype as FunctionConstructor["prototype"] & {
      // deno-lint-ignore no-explicit-any
      myApply: (...args: any[]) => void;
    }
  ).myApply = myApplyJS;

  function showThis(this: { a: number }, a: number, b: number) {
    assertEquals(this.a + a + b, 12);
  }

  // deno-lint-ignore no-explicit-any
  (showThis as any).myApply({ a: 3 }, [4, 5]);
});

Deno.test("手写apply-TS", () => {
  (
    Function.prototype as FunctionConstructor["prototype"] & {
      // deno-lint-ignore no-explicit-any
      myApply: (...args: any[]) => void;
    }
  ).myApply = myApplyTS;

  function showThis(this: { a: number }, a: number, b: number) {
    assertEquals(this.a + a + b, 12);
  }

  // deno-lint-ignore no-explicit-any
  (showThis as any).myApply({ a: 3 }, [4, 5]);
});
