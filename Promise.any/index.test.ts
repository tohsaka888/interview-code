import myPromiseAnyJS from "./index.js";
import { assertEquals } from "asserts";
import { FakeTime } from "time";

Deno.test("手写Promise.any-JS", async () => {
  const promise1 = new Promise<number>((resolve, reject) => {
    setTimeout(() => reject(1), 1000);
  });
  const promise2 = new Promise<number>((resolve, reject) => {
    setTimeout(() => reject(2), 2000);
  });
  const promise3 = new Promise<number>((resolve, reject) => {
    setTimeout(() => reject(3), 3000);
  });
  const promise4 = new Promise<number>((resolve, reject) => {
    setTimeout(() => resolve(4), 4000);
  });

  await Promise.any([promise1, promise2, promise3])
  .catch((error: AggregateError) => {
    assertEquals(error.errors, [1, 2, 3]);
  });

  await Promise.any([promise1, promise2, promise3, promise4]).then(
    (val: number) => {
      assertEquals(val, 4);
    }
  );
});
