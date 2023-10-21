#!/usr/bin/env deno run --allow-all

export const checkBrewBash = async () => {
  const check = Deno.run({
    cmd: ["brew.sh"],
    stdout: "piped",
    stderr: "piped",
  });
  const [status, stdout, stderr] = await Promise.all([check.status(), check.output(), check.stderrOutput()]);
  check.close();

  // console.log(`status: ${status}, stdout: ${stdout}, stderr: ${stderr}`);

  const output = new TextDecoder().decode(stdout);

  if (output === "==> Searching for a previously deleted formula (in the last month)...\n") return false;
  const installed = !output.includes("Not installed");

  return installed;
};

const output = await checkBrewBash();
if (output !== null) console.log(output);
