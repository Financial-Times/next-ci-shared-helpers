# Next CI Helper Scripts [![CircleCI](https://circleci.com/gh/Financial-Times/next-ci-shared-helpers.svg?style=svg&circle-token=33bcf2eb98fe2e875cc66de93d7e4a50369c952d)](https://github.com/Financial-Times/next-ci-shared-helpers)

This repo contains a set of common bash scripts to be used in the delivery pipeline.


## Installation

```sh
git clone git@github.com:Financial-Times/next-ci-shared-helpers.git
cd next-ci-shared-helpers
make install
```


## Development

### General guidelines for helper scripts

- Copy `helper.example` as a starting point
- Avoid being "clever" - developers shouldn't require knowledge of obscure bash syntax to understand the helper scripts that you write
- Comment liberally - help others (and your future self) understand *why* the helper script is doing the things it's doing
- Include links to any relevant documentation in your comments
- Try and avoid noisy output - it's hard to debug CI builds or understand what has happened if there are lots of unnecessary messages in the shell output
- Echo out useful messages about progress and actions taken by the script - the flip side of avoiding noisy output: humans want to know what's happening/happened with their build

### Naming guidelines

The filename of a helper script should give a clear indication of what it does:

- ❌ `helper-test`
- ✅ `helper-run-mocha-tests`
