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
          <li class="${props.selected === 'orders' ? 'selected' : ''}">
            <a href="/#/orderlist">Orders</a>
          </li>
          <li class="${props.selected === 'products' ? 'selected' : ''}">
            <a href="/#/dashboard-products">Products</a>
          </li>
        </ul>
      </div>
      `;
    },
  };
  export default DashboardMenu;