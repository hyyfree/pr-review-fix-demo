import assert from "node:assert/strict";
import test from "node:test";

import { average, sum } from "./stats.js";

test("sum adds every number", () => {
    assert.equal(sum([1, 2, 3]), 6);
});

test("average divides by the element count", () => {
    assert.equal(average([1, 2, 3]), 2);
    assert.equal(average([5]), 5);
    assert.equal(average([]), 0);
});
