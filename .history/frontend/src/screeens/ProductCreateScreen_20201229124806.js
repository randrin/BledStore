import DashboardMenu from "../components/DashboardMenu";

const ProductCreateScreen = {
  after_render: () => {},
  render: () => {
    return `<div class="dashboard">
        ${DashboardMenu.render({ selected: "products" })}
        <div class="dashboard-content">
          <h1>New Product</h1>
          <button id="create-product-button" class="primary">
            Back to Products LI
          </button>
          <div class="product-list">
          </div>
          </div>
          </div>`;
  },
};
export default ProductCreateScreen;