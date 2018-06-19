# Next CI Helper Scripts

## Development

Once you've cloned this repo, run `make install` before you start development.
This will install local git hooks for the repo to help prevent you accidentally
committing secrets into git.

## General guidelines for helper scripts

- Copy `helper.example` as a starting point
- Avoid being "clever" - developers shouldn't require knowledge of obscure bash syntax to understand the helper scripts that you write
- Comment liberally - help others (and your future self) understand *why* the helper script is doing the things it's doing
- Include links to any relevant documentation in your comments
- Try and avoid noisy output - it's hard to debug CI builds or understand what has happened if there are lots of unnecessary messages in the shell output
- Echo out useful messages about progress and actions taken by the script - the flip side of avoiding noisy output: humans want to know what's happening/happened with their build

## Naming guidelines

The filename of a helper script should give a clear indication of
what it does:

BAD: `helper-test`
GOOD: `helper-run-mocha-tests`
