import { spy, assertSpyCalls, assertSpyCall } from "mock";
import { FakeTime } from "time";
import debounceJS from "./index.js";
import debounceTS from "./index.ts";

Deno.test("JS防抖", () => {
  const time = new FakeTime();
  try {
    const cb = spy((time: number) => {
      return time;
    });

    const debouncedFn = debounceJS((time: number) => {
      cb(time);
    }, 1000);

    for (let i = 0; i < 1000; i++) {
      debouncedFn(i);
    }

    time.tick(500);

    debouncedFn(2);

    time.tick(500);

    debouncedFn(3);

    time.tick(1000);

    debouncedFn(4);

    time.tick(1000);

    // 判断执行次数
    assertSpyCalls(cb, 2);
    assertSpyCall(cb, 0, {
      returned: 3,
    });
    assertSpyCall(cb, 1, {
      returned: 4,
    });
  } finally {
    time.restore();
  }
});

Deno.test("TS防抖", () => {
  const time = new FakeTime();
  try {
    const cb = spy((time: number) => {
      return time;
    });

    const debouncedFn = debounceTS((time: number) => {
      cb(time);
    }, 1000);

    for (let i = 0; i < 1000; i++) {
      debouncedFn(i);
    }

    time.tick(500);

    debouncedFn(2);

    time.tick(500);

    debouncedFn(3);

    time.tick(1000);

    debouncedFn(4);

    time.tick(1000);

    // 判断执行次数
    assertSpyCalls(cb, 2);
    assertSpyCall(cb, 0, {
      returned: 3,
    });
    assertSpyCall(cb, 1, {
      returned: 4,
    });
  } finally {
    time.restore();
  }
});