

const ProductCreateScreen = {
    after_render: () => {},
    render: () => {
        return `<div class="dashboard">
        ${DashboardMen.render({ selected: "products" })}
        <div class="dashboard-content">
          <h1>Products</h1>
          <button id="create-product-button" class="primary">
            Create Product
          </button>
          <div class="product-list">`
    }
};
export default ProductCreateScreen;