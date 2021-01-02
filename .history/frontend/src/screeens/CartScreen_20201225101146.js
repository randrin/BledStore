const CartScreen = {
    after_render: () => {
    },
    render: async () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
      if (product.error) {
        return `<h1>${product.error}</h1>`;
      }
      return `<div class="content">
      </div>`