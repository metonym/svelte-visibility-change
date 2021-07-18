import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    main .code-fence:nth-of-type(-n + 2), main .code-fence:nth-of-type(4) {
        display: none;
    }
    `,
});
