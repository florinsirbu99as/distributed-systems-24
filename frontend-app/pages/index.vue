<template>
  <div>
    <h1>Shopping List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $shoppingService }) {
    const items = await $shoppingService.getAllItems();
    return { items };
  },
};
</script>