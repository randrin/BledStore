import DashboardMenu from "../../../components/DashboardMenu";
import { hideLoading, rerender, showLoading, showMessage } from "../../../utils";
import { getDashboardProducts } from "../../../api/dashboard/ApiProducts";
import { modalMessage } from '../../../config';

const CategoryListScreen = {
  after_render: async () => {
  },
  render: async () => {
    // TODO: Controll get response if there are error, redirect to message informations
    // if (orders.error) {
    //   document.location.hash = '/';
    // }
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "categories" })}
    <div class="dashboard-content">
      <div class="dashboard-box-title">
        <h1>${modalMessage.CATEGORIES}</h1>
        <button id="create-product-button" class="product-create-button primary">
        ${modalMessage.CREATE_CATEGORY} <i class="fa fa-angle-double-right"></i>
        </button>
      </div>
      <hr/>
      <div class="product-list">

      </div>
    </div>
  </div>
    `;
  },
};
export default CategoryListScreen;
