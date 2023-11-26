import NavigationBar from "../components/dashboard/navigation";
import TabSwitcher from "../components/dashboard/tab-switcher";
import { machina, redhat } from "../components/exports";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`px-4 py-10 text-gray-300 w-11/12  mx-auto sm:px-6 lg:px-8 ${redhat.variable}`}
    >
      <NavigationBar />

      <div className="mt-7">
        <TabSwitcher />
      </div>

      <div className="py-4 mt-7">{children}</div>
    </div>
  );
};

export default DashboardLayout;
