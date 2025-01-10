<template>
  <div>
    <h1>Examples</h1>
    <ul>
      <li v-for="example in examples" :key="example.id">
        {{ example.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const examples = await $axios.$get('/examples');
    return { examples };
  },
};
</script>
