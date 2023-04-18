#!/usr/bin/env bash

# ./deno-land -u "Ash" -s "secret message"
branches=($(git branch | cut -c 3- | grep feature))
echo branches