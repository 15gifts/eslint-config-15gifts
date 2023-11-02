# eslint-config-15gifts

This repository is a reusable eslint config for frontend projects at 15gifts. It includes as a base config (which can be used alone), and a React config that inherits the base config.
It does make some opinionated tech choices (Typescript, EmotionCSS and Storybook for example) because it aims to make the config we have in projects smaller and more consistent.
If you disagree with any of the rules or want to make a change, feel free to bring it up with the team and/or make a pull request.

## Usage

This project is not published on NPM but you can link straight to the github repo. Note that the version number is listed at the end. This correlates to the tag on a given commit (See https://github.com/15gifts/eslint-config-15gifts/tags).

> **Note**
> This project was [previously published to NPM](https://www.npmjs.com/package/@15gifts/eslint-config)
>
> [Some projects](https://github.com/search?q=org%3A15gifts+%22%5C%22%4015gifts%2Feslint-config%5C%22%3A+%5C%22%5E%22&type=code) still use those old versions

```
// package.json
"devDependencies": {
    "@15gifts/eslint-config": "git+ssh://git@github.com/15gifts/eslint-config-15gifts.git#v2.1.0",
}
```

You will also need to install the `peerDependencies` listed in this repos `package.json`.

Once installed, you can add it to your eslint config like so:

```
// .eslintrc.json
 "extends": [
    "@15gifts",
```

or

```
// .eslintrc.json
 "extends": [
    "@15gifts/react",
```

Note that the `/react` config is loaded from `./react.js` in this repo and it extends the base config.

## Development

We can create a symlink in order to test out changes to this repo locally - without publishing them.

> NOTE: First make sure that you're on the same node versions in both terminal windows

In this repo run `npm link`.
In the repo you want to test the config run `npm link @15gifts/eslint-config` (this corresponds to the `name` field in package.json).
You may then need to run `npm update` to get the latest packages. And doing that removes the symlink, so you'll need to run `npm link @15gifts/eslint-config` again.

Documentation on creating shareable eslint configs can be found here https://eslint.org/docs/latest/extend/shareable-configs

## Publishing a version

`npm version 3.1.0-beta.0`

This will:

- create the git tag
- update package.json version

To use this new version in another repo it should be added as a dependency like so:
`"@15gifts/eslint-config": "git+ssh://git@github.com/15gifts/eslint-config-15gifts.git#v2.1.0",`
The bit after the hash can be a git tag, or a branch name

> NOTE: This project is not published to the NPM registry

## Prettier and code formatting

This config will not tell Prettier what to do. If you want to use Prettier, you will need a seperate `.prettierrc` file to do that. Without it, you might find that the Prettier extension you have installed is formatting the code in a way that breaks eslint rules, and that's a nightmare!
This config does include `eslint-config-prettier` which disables rules in eslint that are set in Prettier. But we've left some styling rules in here in case you're not using Prettier and don't have an extenstion installed for it.

# Changelog

## v3.0.0

- Adds support for Node 18
- Updates dependencies (first time in 2 years)
- Splits in to 2 config files, default and React. So that we can use this config outside of React projects.
- Adds some basic tests, that can be run manually when developing
- Adds README.md file
