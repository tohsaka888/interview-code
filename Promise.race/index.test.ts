import myPromiseRace from "./index.js";
import { FakeTime } from "time";
import { assertEquals } from "asserts";

Deno.test("手写Promise.race", () => {
  const time = new FakeTime();
  try {
    const promise1 = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        reject(1);
      }, 1000);
    });
    const promise2 = new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    });
    const promise3 = new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 3000);
    });

    myPromiseRace([promise1, promise2, promise3]).then((val: number) => {
      time.nextAsync();
      assertEquals(val, 2);
    });
  } finally {
    time.restore();
  }
});
