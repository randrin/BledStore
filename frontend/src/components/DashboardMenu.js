import { getUserInfos } from "../localStorage";

const DashboardMenu = {
    render: (props) => {
        const { name } = getUserInfos();
        if (!name) {
          document.location.hash = "/";
        }
      return `
      <div class="dashboard-menu">
        <ul>
          <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
            <a href="/#/dashboard">Dashboard</a>
          </li>
          <li class="${props.selected === 'brands' ? 'selected' : ''}">
            <a href="/#/dashboard-brands">Brands</a>
          </li>
          <li class="${props.selected === 'categories' ? 'selected' : ''}">
            <a href="/#/dashboard-categories">Categories</a>
          </li>
          <li class="${props.selected === 'products' ? 'selected' : ''}">
            <a href="/#/dashboard-products">Products</a>
          </li>
          <li class="${props.selected === 'orders' ? 'selected' : ''}">
            <a href="/#/dashboard-orders">Orders</a>
          </li>
        </ul>
      </div>
      `;
    },
  };
  export default DashboardMenu;