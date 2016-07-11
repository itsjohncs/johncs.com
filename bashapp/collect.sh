#!/usr/bin/env bash

# This will ensure that the script exits if a failure occurs
set -e

# This will echo every line
set -x

mkdir ../build/collect-output/images

# Grab all of the images and copy them over
cp ../content/images/* ../build/collect-output/images

# Copy over all of the crushed files
cp -r ../build/crush-output/* ../build/collect-output/

# Copy over the RSS feed
cp ../build/app-output/rss.xml ../build/collect-output/rss.xml
