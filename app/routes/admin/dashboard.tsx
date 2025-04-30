import { Header } from "~/components";

const Dashboard = () => {
  const user = {
    name: "David Smith",
  };
  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
      Dashboard page content
    </main>
  );
};

export default Dashboard;