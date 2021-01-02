const ProductScreen = {
    after_render: () => {
      const request = parseRequestUrl();
      document.getElementById('add-button').addEventListener('click', () => {
        document.location.hash = `/cart/${request.id}`
      })
    },
    render: async () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
      if (product.error) {
        return `<h1>${product.error}</h1>`;
      }
      return `<div class="content">