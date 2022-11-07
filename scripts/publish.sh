#!/usr/bin/env bash

set -e

PROJECT_VERSION=$(node -p -e "require('../package.json').version")
CURRENT_BRANCH="$(git symbolic-ref --short -q HEAD)"

_success() {
   echo -e "\033[00;32m[~Publish] => $1\033[00;0m"
}

_error() {
    echo -e "\033[00;31m[~Publish] => Error: $1\033[00;0m"
}

if [ -z "$CURRENT_BRANCH" ]; then
    _error "Not in a branch. Stopping deploy."
    exit 1
fi

if [ -z "$PROJECT_VERSION" ]; then
    _error "Unable to get current npm version of this package"
    exit 1
fi

git checkout main
git fetch -p
git pull orgin main
yarn build
git tag -a "$PROJECT_VERSION" -m "release $PROJECT_VERSION"
git push --set-upstream origin "$CURRENT_BRANCH"
git push --tags
npm publish

_success "published $VERSION to npm"
