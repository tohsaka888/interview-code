import throttleJS from "./index.js";
import { spy, assertSpyCalls, assertSpyCall } from "mock";
import { FakeTime } from "time";
import throttleTS from "./index.ts";

Deno.test("JS节流", () => {
  const time = new FakeTime();
  try {
    const cb = spy((time: number) => {
      return time;
    });

    const throttledFn = throttleJS((time: number) => {
      cb(time);
    }, 1000);

    for (let i = 0; i < 1000; i++) {
      throttledFn(i);
    }

    time.tick(500);

    throttledFn(2);

    time.tick(500);

    throttledFn(3);

    time.tick(1000);

    throttledFn(4);

    // 判断执行次数
    assertSpyCalls(cb, 3);

    assertSpyCall(cb, 0, {
      returned: 0,
    });
    assertSpyCall(cb, 1, {
      returned: 3,
    });
    assertSpyCall(cb, 2, {
      returned: 4,
    });
  } finally {
    time.restore();
  }
});

Deno.test("TS节流", () => {
  const time = new FakeTime();
  try {
    const cb = spy((time: number) => {
      return time;
    });

    const throttledFn = throttleTS((time: number) => {
      cb(time);
    }, 1000);

    for (let i = 0; i < 1000; i++) {
      throttledFn(i);
    }

    time.tick(500);

    throttledFn(2);

    time.tick(500);

    throttledFn(3);

    time.tick(1000);

    throttledFn(4);

    // 判断执行次数
    assertSpyCalls(cb, 3);

    assertSpyCall(cb, 0, {
      returned: 0,
    });
    assertSpyCall(cb, 1, {
      returned: 3,
    });
    assertSpyCall(cb, 2, {
      returned: 4,
    });
  } finally {
    time.restore();
  }
});