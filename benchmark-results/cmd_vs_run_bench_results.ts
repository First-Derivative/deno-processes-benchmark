[0m[38;5;245mcpu: Apple M1[0m
[0m[38;5;245mruntime: deno 1.32.4 (aarch64-apple-darwin)[0m

[0m[38;5;245mfile:///Users/ncc1701-bm/Dev/playground/deno-land/speed-tests/cmd_vs_run_bench.ts[0m
benchmark                   time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------------------- -----------------------------
run: brew info          [0m[33m24.46 ms[0m/iter([0m[36m8.53 ms[0m … [0m[35m83.13 ms[0m) [0m[35m29.85 ms[0m [0m[35m83.13 ms[0m [0m[35m83.13 ms[0m
cmd: brew info          [0m[33m32.28 ms[0m/iter([0m[36m7.17 ms[0m … [0m[35m144.16 ms[0m) [0m[35m46.6 ms[0m [0m[35m144.16 ms[0m [0m[35m144.16 ms[0m
run: curl launchedtech  [0m[33m111.37 ms[0m/iter([0m[36m14.42 ms[0m … [0m[35m328.48 ms[0m) [0m[35m155.12 ms[0m [0m[35m328.48 ms[0m [0m[35m328.48 ms[0m
cmd: curl launchedtech  [0m[33m156.14 ms[0m/iter([0m[36m26.38 ms[0m … [0m[35m644.56 ms[0m) [0m[35m173.52 ms[0m [0m[35m644.56 ms[0m [0m[35m644.56 ms[0m
