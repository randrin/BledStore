import { getDashboardInfos } from "../../api/dashboard/ApiDashboards";
import DashboardMenu from "../../components/DashboardMenu";
import { getUserInfos } from "../../localStorage";

let summary = {};

const DashboardScreen = {
  after_render: () => {},
  render: async () => {
    const { isAdmin } = getUserInfos();
    if (!isAdmin) {
      document.location.hash = "/";
    }
    summary = await getDashboardInfos();
    console.log('summary: ', summary)
    return `
        <div class="dashboard">
          ${DashboardMenu.render({ selected: "dashboard" })}
          <div class="dashboard-content">
            <h1>Dashboard</h1>
            <ul class="summary-items">
            <li>
              <div class="summary-title color1">
                <span><i class="fa fa-users"></i> Users</span>
              </div>
              <div class="summary-body">${summary.users[0].numUsers}</div>
            </li>
            <li>
              <div class="summary-title color2">
                <span><i class="fa fa-gift"></i> Orders</span>
              </div>
              <div class="summary-body">${summary.orders[0].numOrders}</div>
            </li>
            <li>
              <div class="summary-title color3">
                <span><i class="fa fa-money"></i> Sales</span>
              </div>
              <div class="summary-body">$${summary.orders[0].totalSales}</div>
            </li>
          </ul>
          </div>
        </div>
        `;
  },
};

export default DashboardScreen;
