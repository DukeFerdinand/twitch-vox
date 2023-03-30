<script lang="ts">
  import { CrossProcessHandler } from '$lib/CrossProcess'
  import { createQuery } from '@tanstack/svelte-query'


  const handler = new CrossProcessHandler()

  let name = ''

  $: query = createQuery({
    queryKey: ['greet', name],
    queryFn: async () => await handler.invokeGreeting(name),
    enabled: !!name,
  })
</script>

<div>
  <input id="greet-input" placeholder="Enter a name..." bind:value="{name}" />
  <p>{$query.data}</p>
</div>