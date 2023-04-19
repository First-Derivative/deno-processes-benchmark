#!/usr/bin/env bash

./deno-land -u "Ash" -s "secret message"

for branch in $(git for-each-ref --format='%(refname)' refs/heads/); do
    echo "$branch"
done
