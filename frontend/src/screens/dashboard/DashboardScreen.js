import { getDashboardInfos } from "../../api/dashboard/ApiDashboards";
import DashboardMenu from "../../components/DashboardMenu";
import { getUserInfos } from "../../localStorage";
import Chartist from "chartist";

let summary = {};

const DashboardScreen = {
  after_render: () => {
    new Chartist.Line(
      ".ct-chart-line",
      {
        labels: summary.dailyOrders.map((x) => x._id),
        series: [summary.dailyOrders.map((x) => x.sales)],
      },
      {
        showArea: true,
      }
    );
    new Chartist.Pie(
      ".ct-chart-pie",
      {
        labels: summary.productCategories.map((x) => x._id),
        series: summary.productCategories.map((x) => x.count),
      },
      {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        showLabel: true,
        donutSolid: true,
      }
    );
  },
  render: async () => {
    const { isAdmin } = getUserInfos();
    if (!isAdmin) {
      document.location.hash = "/";
    }
    summary = await getDashboardInfos();
    console.log("summary: ", summary);
    return `
        <div class="dashboard">
          ${DashboardMenu.render({ selected: "dashboard" })}
          <div class="dashboard-content">
            <h1>Dashboard</h1>
            <hr />
            <ul class="summary-items">
            <li>
              <div class="summary-title color1">
                <span><i class="fa fa-users"></i> Users</span>
              </div>
              <div class="summary-body">${
                summary.users[0] ? summary.users[0].numUsers : 0
              }</div>
            </li>
            <li>
              <div class="summary-title color2">
                <span><i class="fa fa-gift"></i> Orders</span>
              </div>
              <div class="summary-body">${
                summary.orders[0] ? summary.orders[0].numOrders : 0
              }</div>
            </li>
            <li>
              <div class="summary-title color3">
                <span><i class="fa fa-area-chart"></i> Sales</span>
              </div>
              <div class="summary-body">${
                summary.orders[0] ? summary.orders[0].totalSales : 0
              } <i class="fa fa-euro"></i></div>
            </li>
          </ul>
          <div class="charts">
          <div>
            <h1>Sales</h1>
            <div class="ct-perfect-fourth ct-chart-line"></div>
          </div>
          <div>
            <h1>Categories</h1>
            <div class="ct-perfect-fourth ct-chart-pie"></div>
          </div>
        </div> 
          </div>
        </div>
        `;
  },
};

export default DashboardScreen;
