import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
