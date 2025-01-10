export default ($axios) => ({
    getAllItems() {
      return $axios.$get('/api/shopping_items');
    },
    getItemById(id) {
      return $axios.$get(`/api/shopping_items/${id}`);
    },
    addItem(item) {
      return $axios.$post('/api/shopping_items', item);
    },
    updateItem(id, item) {
      return $axios.$put(`/api/shopping_items/${id}`, item);
    },
    deleteItem(id) {
      return $axios.$delete(`/api/shopping_items/${id}`);
    },
  });