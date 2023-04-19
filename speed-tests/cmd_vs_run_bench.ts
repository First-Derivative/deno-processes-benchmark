import { execBrew_cmd, execCurl_cmd } from "./cmd.ts";
import { execBrew_run, execCurl_run } from "./run.ts";

Deno.bench("run: brew info", () => execBrew_run());
Deno.bench("cmd: brew info", () => execBrew_cmd());

Deno.bench("run: curl launchedtech", () => execCurl_run());
Deno.bench("cmd: curl launchedtech", () => execCurl_cmd());
