#!/usr/bin/env bash

# Expand variables and fail on first error
set -e
set -x

TEMP_DIR="$(mktemp -d -t johncs-blog)"
git clone --branch gh-pages git@github.com:brownhead/blog.johncs.com.git "$TEMP_DIR"
rsync -rv --delete --exclude=.git ./build/collect-output/ "$TEMP_DIR"

echo "Just push $TEMP_DIR to publish!!"
