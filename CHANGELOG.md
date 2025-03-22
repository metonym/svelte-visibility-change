# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.7.0) - 2025-03-21

- add `exports` field to `package.json`
- use `svelteHTML` namespace for `on:visibilitychange` event

## [0.6.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.6.0) - 2022-06-28

- use `DocumentVisibilityState` to type `state` prop
- rename action `change` event to `visibilitychange`
- remove `OnChangeEvent` type; instead, type the action event through the JSX namespace
- type `visibilityChange` using the Svelte Action type
- colocate types in `src` folder

## [0.5.2](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.5.2) - 2022-06-28

- `VisibilityChange` change event should dispatch after state changes

## [0.5.1](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.5.1) - 2021-12-16

- set `type="module"` in package.json

## [0.5.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.5.0) - 2021-11-28

- add `visibilityChange` action

## [0.4.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.4.0) - 2021-10-31

**Breaking Changes**

- rename `defaultProps` TypeScript interface to `VisibilityChangeProps`

## [0.3.1](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.3.1) - 2021-10-26

**Documentation**

- update `README` examples to use full component import

## [0.3.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.3.0) - 2021-10-10

**Features**

- add dispatched event descriptions to TypeScript definitions

## [0.2.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.2.0) - 2021-09-11

- use `.svelte.d.ts` extension for component TypeScript definition

## [0.1.2](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.1.2) - 2021-08-02

- `package.json#main` should specify `src/index.js` as the entry point

## [0.1.1](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.1.1) - 2021-07-18

- fix typo in documentation

## [0.1.0](https://github.com/metonym/svelte-visibility-change/releases/tag/v0.1.0) - 2021-07-18

- initial release
