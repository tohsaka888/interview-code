import myPromiseRaceJS from "./index.js";
import { FakeTime } from "time";
import { assertEquals } from "asserts";
import myPromiseRaceTS from "./index.ts";

Deno.test("手写Promise.race-JS", () => {
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
        resolve(3);
      }, 3000);
    });

    myPromiseRaceJS([promise1, promise2, promise3]).then((val: number) => {
      time.nextAsync();
      assertEquals(val, 1);
    });

    myPromiseRaceJS([promise2, promise3]).then((val: number) => {
      time.nextAsync();
      assertEquals(val, 2);
    });
  } finally {
    time.restore();
  }
});

Deno.test("手写Promise.race-TS", () => {
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
        resolve(3);
      }, 3000);
    });

    myPromiseRaceTS([promise1, promise2, promise3]).then((val: number) => {
      time.nextAsync();
      assertEquals(val, 1);
    });

    myPromiseRaceTS([promise2, promise3]).then((val: number) => {
      time.nextAsync();
      assertEquals(val, 2);
    });
  } finally {
    time.restore();
  }
});
