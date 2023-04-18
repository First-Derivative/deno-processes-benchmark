#!/usr/bin/env deno run --allow-all
import yargs from "https://cdn.deno.land/yargs/versions/yargs-v16.2.1-deno/raw/deno.ts";

interface Arguments {
  user: string;
  secret: string;
}

let inputArgs: Arguments = yargs(Deno.args)
  .alias("u", "user")
  .alias("s", "secret").argv;

console.log(inputArgs);
