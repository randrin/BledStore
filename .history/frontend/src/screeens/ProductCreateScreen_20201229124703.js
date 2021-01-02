import DashboardMenu from "../components/DashboardMenu";


const ProductCreateScreen = {
    after_render: () => {},
    render: () => {
        return `<div class="dashboard">
        ${DashboardMenu.render({ selected: "products" })}
        <div class="dashboard-content">
          <h1>New Product</h1>
          <button id="create-product-button" class="primary">
            Create Product
          </button>
          <div class="product-list">
          </div>
          `
    }
};
export default ProductCreateScreen;