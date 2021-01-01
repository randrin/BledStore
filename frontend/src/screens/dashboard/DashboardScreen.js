import DashboardMenu from "../../components/DashboardMenu";
import { getUserInfos } from "../../localStorage";

const DashboardScreen = {
  after_render: () => {},
  render: () => {
    const { isAdmin } = getUserInfos();
    if (!isAdmin) {
      document.location.hash = "/";
    }
    return `
        <div class="dashboard">
          ${DashboardMenu.render({ selected: "dashboard" })}
          <div class="dashboard-content">
            <h1>Dashboard</h1>
            <div>
              Info and Charts will be added here
            </div>
          </div>
        </div>
        `;
  },
};

export default DashboardScreen;
