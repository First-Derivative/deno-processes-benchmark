import { checkBrewTS } from "./checkbrew.ts";
import { checkBrewBash } from "./playground/checkbrewbash.ts";

Deno.bench("Typescript Run", () => {
  checkBrewTS("gh");
});

Deno.bench("Bash Run", () => {
  checkBrewBash();
});
