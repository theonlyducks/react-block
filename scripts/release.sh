#!/usr/bin/env bash

set -e

echo "[~Release] Git pull main"
git checkout main
git pull origin main

CURRENT_BRANCH="$(git symbolic-ref --short -q HEAD)"

_success() {
   echo -e "\033[00;32m[~Release] => $1\033[00;0m"
}

_error() {
    echo -e "\033[00;31m[~Release] => Error: $1\033[00;0m"
}

if [ -z "$CURRENT_BRANCH" ]; then
    _error "Not in a branch. Stopping release."
    exit 1
fi

echo "[~Release] Cleaning Build directory"
rm -rf ./dist

echo "[~Release] Creating build files"
yarn build

_success "[~Release] Generated build files"

