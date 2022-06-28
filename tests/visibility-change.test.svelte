<script lang="ts">
  import { visibilityChange } from "../src";
  import type { OnChangeEvent } from "../types";

  const onChange: OnChangeEvent = ({ detail }) => {
    console.log(detail);
  };
</script>

<div use:visibilityChange on:change={onChange} />
