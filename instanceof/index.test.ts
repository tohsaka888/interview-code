import myInstanceOfJS from "./index.js";
import myInstanceOfTS from "./index.ts";
import { assertEquals } from "asserts";

Deno.test("手写instanceof-JS", () => {
  assertEquals(myInstanceOfJS(1, Number), false);
  assertEquals(myInstanceOfJS({}, Object), true);
  assertEquals(
    myInstanceOfJS(function () {}, Object),
    true
  );
  assertEquals(
    myInstanceOfJS(function () {}, Function),
    true
  );
});

Deno.test("手写instanceof-TS", () => {
  // assertEquals(myInstanceOfTS(1, Number), false);
  assertEquals(myInstanceOfTS({}, Object), true);
  assertEquals(
    myInstanceOfTS(function () {}, Object),
    true
  );
   assertEquals(
     myInstanceOfTS(function () {}, Function),
     true
   );
});
