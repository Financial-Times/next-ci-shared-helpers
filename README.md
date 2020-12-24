# Next CI Helper Scripts [![CircleCI](https://circleci.com/gh/Financial-Times/next-ci-shared-helpers.svg?style=svg&circle-token=33bcf2eb98fe2e875cc66de93d7e4a50369c952d)](https://github.com/Financial-Times/next-ci-shared-helpers)

This repo contains a set of common bash scripts to be used in the delivery pipeline.


## Installation

```sh
git clone git@github.com:Financial-Times/next-ci-shared-helpers.git
cd next-ci-shared-helpers
```


## Development

### Working locally

Many of the scripts require a Unix environment so in order to run existing scripts you'll need to be familiar with [Docker](https://www.docker.com/get-started).

The first step is to [install docker](https://www.docker.com/get-started) and once you're up and running you'll be able to run the scripts locally inside a Docker container.

For example, the following command will run the `helper-install-awscli` script inside the container (this will output many logs but if it has worked correctly the last line on the console should read `Setting up awscli (1.11.13-1) ...`.

```shell
docker run --rm -it -w /tmp --mount type=bind,source="$(pwd)",destination=/tmp circleci/node:12.18-browsers ./helper-install-awscli
```

The command in the example can be largely re-used by simply changing the Docker image and script to run:

```shell
docker run --rm -it -w /tmp --mount type=bind,source="$(pwd)",destination=/tmp DOCKER_IMAGE_NAME ./SCRIPT_TO_RUN
```


### Usage

To make use of this package in your CircleCI deployment pipeline, firstly create a new `step` and clone the package:

```yaml
- run:
    name: Checkout next-ci-shared-helpers
    command: git clone --depth 1 git@github.com:Financial-Times/next-ci-shared-helpers.git .circleci/shared-helpers
```

_The convention across all FT repos is to put the helpers inside the `.circleci/shared-helpers` folder._

Then add another step after it to run one of the scripts:

```yaml
- run:
    name: shared-helper / npm-install-peer-deps
    command: .circleci/shared-helpers/helper-npm-install-peer-deps
```

_The convention across all FT repos is to name the step as follows: `shared-helper / NAME_OF_SCRIPT`._

### General guidelines for helper scripts

- Copy `helper.example` as a starting point
- Avoid being "clever" - developers shouldn't require knowledge of obscure bash syntax to understand the helper scripts that you write
- Comment liberally - help others (and your future self) understand *why* the helper script is doing the things it's doing
- Include links to any relevant documentation in your comments
- Try and avoid noisy output - it's hard to debug CI builds or understand what has happened if there are lots of unnecessary messages in the shell output
- Echo out useful messages about progress and actions taken by the script - the flip side of avoiding noisy output: humans want to know what's happening/happened with their build
- Remember to make your script executable by running the command `chmod +x ./<NAME_OF_SCRIPT>`

### Naming guidelines

The filename of a helper script should give a clear indication of what it does:

- ❌ `helper-test`
- ✅ `helper-run-mocha-tests`
