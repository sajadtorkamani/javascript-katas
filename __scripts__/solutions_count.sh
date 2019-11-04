#!/usr/bin/env bash

# Get count of solutions in repo.
find -E . -type f -regex ".*/solution\.(js|ts)" | wc -l
