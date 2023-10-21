import { parse } from "https://deno.land/std@0.184.0/flags/mod.ts";
interface Arguments {
  _: string[];
}

export const execBrew_run = async () => {
  const child = Deno.run({
    cmd: ["brew", "info", "gh"],
    stdout: "piped",
  });

  const [{ code }, rawOutput] = await Promise.all([child.status(), child.output()]);

  console.log(new TextDecoder().decode(rawOutput));

  Deno.exit(code);
};

export const execCurl_run = async () => {
  const child = Deno.run({ cmd: ["curl", "-s", "https://app.launchedtech.io/api/campaigns"], stdout: "piped" });

  const [{ code }, rawOutput] = await Promise.all([child.status(), child.output()]);

  // console.log(new TextDecoder().decode(rawOutput));

  console.log(code);
};

const main = () => {
  const args: Arguments = parse(Deno.args);
  if (args._[0] === "brew") execBrew_run();
  if (args._[0] === "curl") execCurl_run();
};

main();
