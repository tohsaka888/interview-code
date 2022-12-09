import { assertEquals } from "asserts";
import myPromiseAllSettledJS from "./index.js";
import myPromiseAllSettledTS from "./index.ts"

Deno.test("手写Promise.allSettled-JS", async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 4000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 3000);
  });

  await myPromiseAllSettledJS([promise1, promise2, promise3]).then((val) => {
    assertEquals(val, [
      { status: "fulfilled", value: 1 },
      { status: "fulfilled", value: 2 },
      { status: "rejected", reason: 3 },
    ]);
  });
});

Deno.test("手写Promise.allSettled-TS", async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 4000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 3000);
  });

  await myPromiseAllSettledTS([promise1, promise2, promise3]).then((val) => {
    assertEquals(val, [
      { status: "fulfilled", value: 1 },
      { status: "fulfilled", value: 2 },
      { status: "rejected", reason: 3 },
    ]);
  });
});
