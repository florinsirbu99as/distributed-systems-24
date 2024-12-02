export default {
    async fetchData() {
      try {
        const response = await this.$axios.get('/api/v1/home/index')
        return response.data
      } catch (error) {
        console.error('API Error:', error)
        throw error
      }
    }
  }