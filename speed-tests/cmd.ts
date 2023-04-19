import { parse } from "https://deno.land/std@0.184.0/flags/mod.ts";
interface Arguments {
  _: string[];
}

export const execBrew_cmd = async () => {
  const child = new Deno.Command("brew", { args: ["info", "gh"] });

  const { stdout } = await child.output();
  console.log(new TextDecoder().decode(stdout));
};

export const execCurl_cmd = async () => {
  const child = new Deno.Command("curl", { args: ["https://app.launchedtech.io/api/campaigns"] });

  const { code } = await child.output();

  console.log(code);
  // const { stdout} = await child.output()
  // console.log(new TextDecoder().decode(stdout))
};

const main = () => {
  const args: Arguments = parse(Deno.args);

  if (args._[0] === "brew") execBrew_cmd();
  if (args._[0] === "curl") execCurl_cmd();
};

main();
