import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    main .code-fence:nth-of-type(-n + 1) {
      display: none;
    }
  `,
});
