#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "main" ]; then
  echo "\n\n You can't commit directly to main branch \n\n"
  exit 1
fi