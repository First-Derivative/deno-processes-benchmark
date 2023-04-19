import { checkBrewBash, checkBrewTS } from "./checkbrewinstall.ts";

Deno.bench("Typescript Run", () => {
  checkBrewTS("gh");
});

Deno.bench("Bash Run", () => {
  checkBrewBash();
});
