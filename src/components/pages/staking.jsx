import Sidebar from "../Common/staking/sidebar";
import Dashboard from "../Common/staking/dashboard";

function Staking() {
  return (
    <div id="staking" className="h-screen md:flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Staking;
