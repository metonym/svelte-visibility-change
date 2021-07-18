# svelte-visibility-change

[![NPM][npm]][npm-url]

> Svelte utility to detect browser page visibility changes using the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)

<!-- REPO_URL -->

Use this utility component to declaratively listen to browser page visibility changes.

The visibility state of a page can either be "visible" or "hidden."

**Use cases**

- make a network request whenever the browser tab is focused
- toggle audio when the browser tab is focused or blurred
- pause expensive background computations when the tab is blurred

Try it in the [Svelte REPL](https://svelte.dev/repl/a4b8bdb782514baaa7fa1cb26313b303).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-visibility-change
```

**NPM**

```bash
npm i -D svelte-visibility-change
```

## Usage

### Basic

Bind to the `state` prop to determine if the current tab is currently visible or hidden.

In this live demo, switch to a different tab in the _same browser window_. The page title should change from "visible" to "hidden."

```svelte
<script>
  import VisibilityChange from "svelte-visibility-change";

  let state; // "visible" | "hidden"

  $: document.title = state;
</script>

<VisibilityChange bind:state />
```

### visible / hidden

You can also bind to the boolean `visible` and `hidden` props.

```svelte
<script>
  let visible; // boolean
  let hidden; // boolean
</script>

<VisibilityChange bind:visible bind:hidden />
```

### on:visible / on:hidden

An alternative to binding to props is to listen to the `on:visible` and `on:hidden` dispatched events.

```svelte
<script>
  let events = [];
</script>

<VisibilityChange
  on:visible={() => (events = [...events, "on:visible"])}
  on:hidden={() => (events = [...events, "on:hidden"])}
/>

{#each events as event}
  {event} <br />
{/each}
```

### on:change

This component dispatches an `on:change` event whenever a [visibilitychange](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) event occurs.

**Note:** unlike `on:visible`, this event only fires when the page visibility changes _after the component has mounted._

```svelte
<VisibilityChange
  on:change={({ detail }) => {
    console.log(detail.state); // "visible" | "hidden"
    console.log(detail.visible); // boolean
    console.log(detail.hidden); // boolean
  }}
/>
```

## API

### Props

| Prop name | Value                                            |
| :-------- | :----------------------------------------------- |
| state     | `"visible"` or `"hidden"` (default: `undefined`) |
| visible   | `boolean` (default: `false`)                     |
| hidden    | `boolean` (default: `false`)                     |

### Dispatched Events

- **on:visible**: fired if the page is visible
- **on:hidden**: fired if the page visibility is hidden
- **on:change**: fired when a page visibility event occurs, after the initial mount

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](types/).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-visibility-change.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-visibility-change
