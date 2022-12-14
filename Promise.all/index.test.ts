import myPromiseAllJS from "./index.js";
import { assertEquals } from "asserts";
import myPromiseAllTS from "./index.ts";

Deno.test("手写Promise.all-JS", async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 4000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 500);
  });

  await myPromiseAllJS([promise1, promise2, promise3, promise4]).catch(
    (reason) => {
      assertEquals(reason, "error");
    }
  );

  await myPromiseAllJS([promise1, promise2, promise3]).then((val) => {
    assertEquals(val, [1, 2, 3]);
  });
});

Deno.test("手写Promise.all-TS", async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 4000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });

  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 500);
  });

  await myPromiseAllTS([promise1, promise2, promise3, promise4]).catch(
    (reason) => {
      assertEquals(reason, "error");
    }
  );

  await myPromiseAllTS([promise1, promise2, promise3]).then((val) => {
    assertEquals(val, [1, 2, 3]);
  });
});
